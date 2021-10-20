import * as fs from 'fs';

export function parseEmoji(emoji) {
  const [_, name, id] = emoji.slice(1, -1).split(":");
  return ":" + name + ":";
}

export function isDirectory() {
  return fs.lstatSync(path).isDirectory();
}

export function isEqual(item1, item2) {
  return item1 == item2;
}

export function isOdd(num) {
  return num % 2 != 0
}

export function isEven(num) {
  return isNotOdd(num)
}

export function isNotOdd(num){
  return !isOdd(num)
}

export function isNotEqual(item1, item2) {
  return item1 != item2;
}
