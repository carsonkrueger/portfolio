import path from "path";

export function staticPath(...filePaths: string[]): string {
  return path.join(__dirname, ...filePaths);
}
