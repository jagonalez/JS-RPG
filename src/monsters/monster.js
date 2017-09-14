//level, hp, xp, gil, attackMultiplier, strength, accuracy, defense, speedMin, speedMax, immune, weakness, boss, type
export class Monster {
  constructor(name, room, level, hp, xp, gil, attackMultiplier, strength, accuracy, defense, magicDefense, speedMin, speedMax, immune, weak, type, boss) {
    Object.assign(this, { name, room, level, hp, xp, gil, attackMultiplier, strength, accuracy, defense, magicDefense, speedMin, speedMax, immune, weak, type, boss })
  }
}
export const Monster = [
  new Monster("Snake", 1, 10, 35, 125, 36, 2, ),
  new Monster("Toad", 1, 11, 46, 89, 24, 11)
]
