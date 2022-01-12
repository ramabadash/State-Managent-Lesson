export const addLike = url => {
  return { type: 'LIKE_INCREMENT', payload: { url } };
};
