export const getUser = () => {
  const requestParams = {};

  return fetch('https://randomuser.me/api/', requestParams)
    .then((response) => {
      if (/^[45]..$/.test(response.status)) {
        throw new Error({ error: response.statusText });
      }

      return response.json();
    });
};

export const blank = () => {};
