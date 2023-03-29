export function setItem(value) {
  localStorage.setItem("dindin-auth", value);
}

export function setObjectItem(value) {
  localStorage.setItem("dindin-auth", JSON.stringify(value));
}

export function getItem(key) {
  return localStorage.getItem(key);
}

export function getObjectItem() {
  const value = localStorage.getItem("dindin-auth");
  return value ? JSON.parse(value) : "";
}

export function removeItem() {
  localStorage.removeItem("dindin-auth");
}

export function clear() {
  localStorage.clear();
}
