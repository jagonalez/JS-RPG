export class Character {
  constructor(firstName, lastName, sprite) {
    this.firstName = firstName
    this.lastName = lastName
    this.sprite = sprite
    this.hp = 0
    this.mp = 0
  }

  setLevel(level) {
    this.level = level;
    this.stats.change(this.levels[level])
    this.hp = this.stats.hitPoints
    this.mp = this.stats.magicPoints
  }
  equip() {

  }
  unequip() {

  }

}
