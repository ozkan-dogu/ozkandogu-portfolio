import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getYearsOfExperience(startYear: number, startMonth: number): string {
  const now = new Date();
  const start = new Date(startYear, startMonth - 1);
  const diffYears = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  const full = Math.floor(diffYears);
  const display = diffYears - full >= 0.8 ? full + 1 : full;
  return `${display}+`;
}
