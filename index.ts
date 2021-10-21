import * as fs from 'fs';

export function isAnimatedEmojo(emoji) {
  const [animated, _, _] = emoji.slice(1, -1).split(":");
  return animated == `a`;
}

export function parseEmoji(emoji) {
  const [_, name, id] = emoji.slice(1, -1).split(":");
  return `:` + name + `:`;
}

export function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

export function isFile(path) {
  return !isDirectory(path);
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
  return !isEqual(item1, item2);
}

export function getFiles: (directory: string, extension: string, createDirIfNotFound: boolean): string[] {
		if (createDirIfNotFound && !fs.existsSync(directory)) fs.mkdirSync(directory);
		return fs.readdirSync(directory).filter((file) => file.endsWith(extension));
}
