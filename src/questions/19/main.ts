export const countSundays = (start: number, end: number): number => {
  let count = 0;
  for (let i = start; i < end; i += 1) {
    for (let j = 1; j <= 12; j += 1) {
      const day = new Date(`${i}-${j.toString().padStart(2, '0')}-01`).getUTCDay();
      if (day === 0) {
        count += 1;
      }
    }
  }
  return count;
};
