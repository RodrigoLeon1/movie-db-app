export const IMG_PLACEHOLDER = 'https://via.placeholder.com/500x750/060714/FFFFFF?text=Image%20not%20found';

export const getImageUrl = (imageSrc: string, imageWidth = 'w500') => {
  return `https://image.tmdb.org/t/p/${imageWidth}${imageSrc}`;
};
