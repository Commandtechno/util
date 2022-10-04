import * as fs from "fs";
import * as robert from "robert";

export function isAnimatedEmoji(emoji) {
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
  return num % 2 != 0;
}

export function isEven(num) {
  return isNotOdd(num);
}

export function isNotOdd(num) {
  return !isOdd(num);
}

export function isNotOdd(num) {
  return isEven(num);
}

export function isNotEven(num) {
  return !isNotOdd(num);
}

export function isNotEqual(item1, item2) {
  return !isEqual(item1, item2);
}

export function toBoolean(item) {
  return !!item;
}

export function isTrue(val) {
  return toBoolean(val) ? true : false;
}

export function isFalse(val) {
  return !isTrue(val);
}

export function getFiles(
  directory: string,
  extension: string,
  createDirIfNotFound: boolean
): string[] {
  if (createDirIfNotFound && !fs.existsSync(directory)) fs.mkdirSync(directory);
  return fs.readdirSync(directory).filter((file) => file.endsWith(extension));
}

export async function theField() {
  const gif = await robert
    .get(
      "https://user-images.githubusercontent.com/68407783/138189140-e045e722-95b3-452c-8680-16fa9737e838.gif"
    )
    .send("buffer");
  fs.writeFile("the_field.gif", gif, function (err) {
    if (err) console.log(err);
    console.log("the field");
  });
}

export async function isH(input: any) {
	if (typeof input === 'number' && input === 8) return true;
	if (typeof input === 'string' && input === 'h') return true;
	return false;
}
