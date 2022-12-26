export const getImageUrl = (imageSrc: string, imageWidth = 'w500') => {
  return `https://image.tmdb.org/t/p/${imageWidth}${imageSrc}`;
};
