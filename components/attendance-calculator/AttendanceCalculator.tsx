'use client';

import { useState, useEffect, useRef } from 'react';
import { calculateSafeMisses, calculateRecovery } from '@/lib/calculators/attendance';
import type { AttendanceSubject } from '@/lib/types';

const HELP_KEY = 'grade-calc-help-state';

export default function AttendanceCalculator() {
  const [subjects, setSubjects] = useState<AttendanceSubject[]>([]);
  const [helpOpen, setHelpOpen] = useState(false);

  const [name, setName] = useState('');
  const [total, setTotal] = useState('');
  const [missed, setMissed] = useState('');
  const [minReq, setMinReq] = useState('75');

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(HELP_KEY) || '{}');
      if (typeof saved.attendance === 'boolean') setHelpOpen(saved.attendance);
    } catch {}
  }, []);

  const toggleHelp = () => {
    setHelpOpen((prev) => {
      const next = !prev;
      try {
        const saved = JSON.parse(localStorage.getItem(HELP_KEY) || '{}');
        localStorage.setItem(HELP_KEY, JSON.stringify({ ...saved, attendance: next }));
      } catch {}
      return next;
    });
  };

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (helpOpen) {
      el.hidden = false;
      el.style.maxHeight = '0px';
      el.offsetHeight;
      el.style.maxHeight = `${el.scrollHeight}px`;
      const tid = setTimeout(() => { el.style.maxHeight = 'none'; }, 300);
      return () => clearTimeout(tid);
    } else {
      el.style.maxHeight = `${el.scrollHeight}px`;
      el.offsetHeight;
      el.style.maxHeight = '0px';
      const tid = setTimeout(() => { el.hidden = true; }, 300);
      return () => clearTimeout(tid);
    }
  }, [helpOpen]);

  const addSubject = () => {
    const n = name.trim();
    const t = parseInt(total);
    const m = parseInt(missed);
    const r = parseFloat(minReq);
    if (!n || isNaN(t) || isNaN(m) || isNaN(r)) return;
    if (m > t) { alert('missed classes cant be more than total classes'); return; }
    const s: AttendanceSubject = { id: crypto.randomUUID(), name: n, total: t, missed: m, minReq: r };
    setSubjects((prev) => [...prev, s]);
    setName('');
    setTotal('');
    setMissed('');
  };

  const deleteSubject = (id: string) => setSubjects((prev) => prev.filter((s) => s.id !== id));

  return (
    <div>
      <div className="add-section add-section--attendance">
        <div className="section-toolbar">
          <span className="section-help-status">{helpOpen ? 'tips visible' : 'tips hidden'}</span>
          <button type="button" className={`btn-help${helpOpen ? ' is-open' : ''}`}
            aria-expanded={helpOpen} onClick={toggleHelp}>
            {helpOpen ? 'hide help' : '? help me'}
          </button>
        </div>

        <div ref={panelRef} className={`help-panel${helpOpen ? ' is-open' : ''}`} hidden={!helpOpen}>
          <div className="help-panel-title">help loaded</div>
          <div className="help-block">
            <div className="help-block-title">attendance rules</div>
            <ul className="help-list">
              <li className="help-line"><strong>minimum required:</strong> 75% at most colleges. some departments want 85%. check with your coordinator or pretend you didn&apos;t know.</li>
              <li className="help-line"><strong>safe misses:</strong> shows how many more classes you can bunk without crossing the line. use wisely. or don&apos;t. your call.</li>
              <li className="help-line"><strong>shortage:</strong> tells you how many classes you need to attend in a row to recover. yes, consecutively. no skipping in between.</li>
              <li className="help-line"><strong>projection grid:</strong> shows what happens to your % as more classes happen and you miss more. useful for planning your bunkage strategy.</li>
            </ul>
          </div>
        </div>

        <div className="form-grid">
          <div className="field">
            <label>subject name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Digital Electronics" onKeyDown={(e) => e.key === 'Enter' && addSubject()} />
          </div>
          <div className="field">
            <label>total classes held</label>
            <input type="number" value={total} onChange={(e) => setTotal(e.target.value)}
              placeholder="40" onKeyDown={(e) => e.key === 'Enter' && addSubject()} />
          </div>
          <div className="field">
            <label>classes you missed</label>
            <input type="number" value={missed} onChange={(e) => setMissed(e.target.value)}
              placeholder="5" onKeyDown={(e) => e.key === 'Enter' && addSubject()} />
          </div>
          <div className="field">
            <label>min % required</label>
            <input type="number" value={minReq} onChange={(e) => setMinReq(e.target.value)} />
          </div>
          <div className="field">
            <label>&nbsp;</label>
            <button className="btn-add" style={{ background: '#ff00ff' }} onClick={addSubject}>
              add subject
            </button>
          </div>
        </div>
      </div>

      <div className="subjects-grid">
        {subjects.length === 0 ? (
          <div className="empty-state">no subjects added yet. blissful ignorance.</div>
        ) : (
          subjects.map((s) => (
            <AttendanceCard key={s.id} subject={s} onDelete={deleteSubject} />
          ))
        )}
      </div>
    </div>
  );
}

function AttendanceCard({
  subject,
  onDelete,
}: {
  subject: AttendanceSubject;
  onDelete: (id: string) => void;
}) {
  const attended = subject.total - subject.missed;
  const percentage = ((attended / subject.total) * 100).toFixed(1);
  const isSafe = parseFloat(percentage) >= subject.minReq;

  let statusMsg: string;
  const statusClass = isSafe ? 'safe' : 'danger';

  if (isSafe) {
    const safeMisses = calculateSafeMisses(attended, subject.total, subject.minReq);
    statusMsg = safeMisses > 0
      ? `you can miss ${safeMisses} more classes safely`
      : `you are on the limit! can't miss any more classes`;
  } else {
    const recovery = calculateRecovery(attended, subject.total, subject.minReq);
    statusMsg = `shortage! must attend ${recovery} classes consecutively to recover`;
  }

  return (
    <div className="subject" style={{ borderLeftColor: isSafe ? '#00ff88' : '#ff4444' }}>
      <div className="subject-top">
        <div className="subject-name" style={{ color: isSafe ? '#00ff88' : '#ff4444' }}>
          {subject.name} {isSafe ? '✅' : '❌'}
        </div>
        <button className="btn-delete" onClick={() => onDelete(subject.id)}>delete</button>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span>attended:</span>
          <span style={{ color: '#e0e0e0' }}>{attended}/{subject.total}</span>
        </div>
        <div className="stat-item">
          <span>current_%:</span>
          <span style={{ color: isSafe ? '#00ff88' : '#ff4444' }}>{percentage}%</span>
        </div>
        <div className="stat-item">
          <span>min_req:</span>
          <span style={{ color: '#666' }}>{subject.minReq}%</span>
        </div>
      </div>

      <div
        className={`pass-alert ${statusClass}`}
        dangerouslySetInnerHTML={{ __html: statusMsg }}
      />

      <div className="grades-table">
        <div className="info-title" style={{ marginTop: 10, fontSize: 11 }}>
          attendance projection grid (total classes →)
        </div>
        <table style={{ minWidth: 600 }}>
          <thead>
            <tr>
              <th>missed \ total</th>
              {Array.from({ length: 11 }, (_, i) => (
                <th key={i}>{subject.total + i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }, (_, m) => {
              const mCount = subject.missed + m;
              return (
                <tr key={m}>
                  <td style={{ color: '#666', fontWeight: 'bold' }}>{mCount} missed</td>
                  {Array.from({ length: 11 }, (_, t) => {
                    const tCount = subject.total + t;
                    const p = (((tCount - mCount) / tCount) * 100).toFixed(1);
                    const ok = parseFloat(p) >= subject.minReq;
                    return (
                      <td key={t} style={{ color: ok ? '#00ff88' : '#ff4444' }}>
                        {p}% {ok ? '✅' : '❌'}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
