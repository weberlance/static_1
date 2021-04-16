export const isAuth = () => {
  const userData = JSON.parse(window.localStorage.getItem('user'));
  return !!userData;
};

export const sleep = (ml) => {
  const start = Date.now();
  let timer = 0;
  while (start + ml > Date.now() && timer < Infinity) {
    timer += 1;
  }
};

export const delay = (ml, cb, params = {}) => {
  setTimeout(() => cb(params), ml);
};

export const getUser = () => JSON.parse(localStorage.getItem('user'));
