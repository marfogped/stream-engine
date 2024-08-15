import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export const isFileTypeValid = (file: File) => {
  const validTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const validExtensions = [".pdf", ".doc", ".docx"];

  const fileExtension = file.name
    .substring(file.name.lastIndexOf("."))
    .toLowerCase();
  return (
    validTypes.includes(file.type) && validExtensions.includes(fileExtension)
  );
};
