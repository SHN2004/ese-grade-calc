import RotatingTagline from './RotatingTagline';

export default function Header() {
  return (
    <div className="header">
      <div className="brand">
        <h1>grade calc</h1>
        <span className="slash">/</span>
        <span className="author">ryyan safar</span>
      </div>
      <div className="subtitle">
        &gt; calculation tools for nammude pareekshakal —{' '}
        <RotatingTagline />
        <span className="cursor">_</span>
      </div>
    </div>
  );
}
