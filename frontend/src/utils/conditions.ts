// export default function cn(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
}