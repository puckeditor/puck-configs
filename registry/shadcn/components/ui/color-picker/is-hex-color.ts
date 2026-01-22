export function isHexColor(hex: string): boolean {
  const hexRegex = /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

  return hexRegex.test(hex);
}
