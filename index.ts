import * as fs from 'fs';

export function parseEmoji (emoji) {
  const [_, name, id] = emoji.slice(1, -1).split(":");
  return ":" + name + ":";
};

export function isDirectory () {
  return fs.lstatSync(path).isDirectory();
}

export function isOdd( num) {
  return num % 2 != 0
}
