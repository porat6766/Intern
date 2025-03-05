import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string) => {
  let parsedDate;

  if (date.toLowerCase() === "today") {
    parsedDate = new Date();
  } else if (date.toLowerCase() === "yesterday") {
    parsedDate = new Date();
    parsedDate.setDate(parsedDate.getDate() - 1); // אתמול
  } else {
    parsedDate = new Date(date);
  }

  //
  if (isNaN(parsedDate.getTime())) {
    return "Invalid Date";
  }


  return parsedDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
