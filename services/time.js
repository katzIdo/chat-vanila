/**
 * convert timestamp to HH:MM format
 */
export const timestampToHHMM = (timestamp) => {
  const time = new Date(timestamp);
  const min = time.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  return time.getHours() + ':' + min;
}