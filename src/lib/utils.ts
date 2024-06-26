import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const now = new Date();
export const formattedDate = now.toLocaleDateString('en-US', { // en-US for US English
  month: '2-digit',
  day: '2-digit',
  year: 'numeric',
  hour:'2-digit'

});