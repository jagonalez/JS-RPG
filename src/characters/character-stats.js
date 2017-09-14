export class CharacterStats {
  constructor() {
    this.hitPoints = 0;
    this.magicPoints = 0;
    this.experiencePoints = 0;
    this.strength = 0; //physical attack power
    this.agility = 0;
    this.stamina = 0; //defense
    this.intellect = 0; //effectiveness of attack magic
    this.spirit = 0; // calc magic defense
    this.attack = 0; //
    this.magic = 0;
    this.accuracy = 0; // hit rate
    this.defense = 0;
    this.evasion = 0; // dodge rate
    this.magicDefense = 0; // res to magica attacks
    this.magicEvasion = 0; // dodge rate for magic
  }

  change(data) {
    this.hitPoints = data[0]
    this.magicPoints = data[1]
    this.experiencePoints = data[2]
    this.strength = data[3]
    this.agility = data[4]
    this.stamina = data[5]
    this.intellect = data[6]
    this.spirit = data[7]
  }
}
