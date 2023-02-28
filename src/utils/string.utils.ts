export const truncate = (text: string, limit: number = 130) => {
  return text.slice(0, limit).concat('...');
};
