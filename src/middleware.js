export const middleware = (state) => (next) => (action) => {
  return next(action);
};
