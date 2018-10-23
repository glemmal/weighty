
/**
 * Store wrapper
 */

function get (key, fallback) {
  const item = window.localStorage.getItem(key);

  return item ? JSON.parse(item) : fallback;
}

function setItem (key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

export {
  get,
  setItem
}