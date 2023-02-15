export const setLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocal = (key) => {
  let value = localStorage.getItem(key);
  return JSON.parse(value);
};
export const clearLocal = () => {
  localStorage.clear();
};

export const microfeeeStorageKeys = {
  authToken: "token",
  userDetails: "userdeatails",
};
