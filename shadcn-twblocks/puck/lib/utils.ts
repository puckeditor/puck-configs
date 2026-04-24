import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const adjectives = ["amazing", "new", "wonderful", "beautiful", "smart"];

export function getAdjective(arr = adjectives): string {
  return arr[0];
}

export function isHexColor(hex: string): boolean {
  const hexRegex = /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;

  return hexRegex.test(hex);
}
