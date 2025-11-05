export function hasConfigKey() {
  const key = localStorage.getItem('configKey');
  return !!key && key.length >= 100 && key.length <= 1000;
}
