export const setItem = (key, data) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.log("No local storage to set");
    // console.log(data);
  }
};

export const getItem = (key, fallBack = []) => {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch (e) {
    return fallBack;
  }
};
