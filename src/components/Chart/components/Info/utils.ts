export const getCorrectKey = (key: string) =>
  key.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
