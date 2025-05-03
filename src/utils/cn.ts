import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/*
 * Combines class names using clsx and tailwind-merge.
 * @param inputs - Class names to combine.
 * @returns Combined class names.
 * @example 'cn("bg-red-500", "text-white")' => 'bg-red-500 text-white'
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
