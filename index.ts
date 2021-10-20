export function parseEmoji (emoji) {
  const [_, name, id] = emoji.slice(1, -1).split(":");
  return ":" + name + ":";
};
