import { fileURLToPath } from 'node:url';

const httpRegex =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export const isHttp = (url: string) => httpRegex.test(url);

export const ___dirname = fileURLToPath(new URL('.', import.meta.url));

// export const whatThePath = (path: string) =>
//   fileURLToPath(new URL(path, import.meta.url));
