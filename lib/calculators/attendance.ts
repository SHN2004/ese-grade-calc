export function calculateSafeMisses(attended: number, total: number, minReq: number): number {
  return Math.floor((attended * 100 / minReq) - total);
}

export function calculateRecovery(attended: number, total: number, minReq: number): number {
  return Math.ceil((minReq * total - 100 * attended) / (100 - minReq));
}
