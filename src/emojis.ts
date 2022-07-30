export const animals = [
  "🐒",
  "🦍",
  "🐕",
  "🦮",
  "🐕‍🦺",
  "🐩",
  "🐈",
  "🐈‍⬛",
  "🐅",
  "🐆",
  "🐎",
  "🦓",
  "🦌",
  "🦬",
  "🐄",
  "🐂",
  "🐃",
  "🐏",
  "🐑",
  "🐐",
  "🐪",
  "🐫",
  "🦙",
  "🦒",
  "🐘",
  "🦣",
  "🦏",
  "🦛",
  "🐁",
  "🐀",
  "🐇",
  "🦫",
  "🦔",
  "🦦",
  "🦨",
  "🦘",
  "🦡",
  "🐤",
  "🦆",
  "🦢",
  "🦤",
  "🦩",
  "🦜",
  "🐉",
  "🦕",
  "🦖",
  "🐳",
  "🐋",
  "🦭",
  "🐟",
  "🐠",
  "🐌",
  "🐜",
  "🐛",
  "🐝",
];

export interface Action {
  emoji: string;
  position: "top" | "right";
}

const actions: Action[] = [
  { emoji: "💤", position: "top" },
  { emoji: "💭", position: "top" },
  { emoji: "💬", position: "top" },
  { emoji: "🗯", position: "top" },
  { emoji: "💫", position: "top" },
  { emoji: "💢", position: "top" },
  { emoji: "💥", position: "top" },
  { emoji: "💨", position: "right" },
];

export const getRandomEmoji = () => {
  const animal = animals[Math.floor(Math.random() * animals.length)];
  console.log(animal);
  const action = actions[Math.floor(Math.random() * actions.length)];

  return { animal, action };
};
