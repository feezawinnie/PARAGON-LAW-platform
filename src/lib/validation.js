export function isValidEmail(value) {
  const v = value.trim();
  const at = v.indexOf("@");
  const dot = v.lastIndexOf(".");
  return at >= 1 && dot > at + 1 && dot < v.length - 1;
}
