export function setAuth(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
export function isAuthenticated() {
  return !!localStorage.getItem('user');
}
export function signOut() {
  localStorage.removeItem('user');
  localStorage.removeItem('configKey');
}
