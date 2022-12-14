export const animals = [
  "ð",
  "ðĶ",
  "ð",
  "ðĶŪ",
  "ðâðĶš",
  "ðĐ",
  "ð",
  "ðââŽ",
  "ð",
  "ð",
  "ð",
  "ðĶ",
  "ðĶ",
  "ðĶŽ",
  "ð",
  "ð",
  "ð",
  "ð",
  "ð",
  "ð",
  "ðŠ",
  "ðŦ",
  "ðĶ",
  "ðĶ",
  "ð",
  "ðĶĢ",
  "ðĶ",
  "ðĶ",
  "ð",
  "ð",
  "ð",
  "ðĶŦ",
  "ðĶ",
  "ðĶĶ",
  "ðĶĻ",
  "ðĶ",
  "ðĶĄ",
  "ðĪ",
  "ðĶ",
  "ðĶĒ",
  "ðĶĪ",
  "ðĶĐ",
  "ðĶ",
  "ð",
  "ðĶ",
  "ðĶ",
  "ðģ",
  "ð",
  "ðĶ­",
  "ð",
  "ð ",
  "ð",
  "ð",
  "ð",
  "ð",
];

export interface Action {
  emoji: string;
  position: "top" | "right";
}

const actions: Action[] = [
  { emoji: "ðĪ", position: "top" },
  { emoji: "ð­", position: "top" },
  { emoji: "ðŽ", position: "top" },
  { emoji: "ðŊ", position: "top" },
  { emoji: "ðŦ", position: "top" },
  { emoji: "ðĒ", position: "top" },
  { emoji: "ðĨ", position: "top" },
  { emoji: "ðĻ", position: "right" },
];

export const getRandomEmoji = () => {
  const animal = animals[Math.floor(Math.random() * animals.length)];
  console.log(animal);
  const action = actions[Math.floor(Math.random() * actions.length)];

  return { animal, action };
};
