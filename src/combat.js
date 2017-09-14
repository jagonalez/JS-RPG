export class Combat {
  constructor() {

  }
  attack(from, against) {
    let power
    let baseHitRate
    let baseAttackMultiplier
    let defense
    let defenseMultiplier
    let evade
    if (from.isPlayer) {
      power = from.equipment.weapon.attack + from.stats.strength/4 + from.level/4

      let critical = Math.random() * (31 - 1) + 1
      if (critical < 2) {
        power += from.equipment.weapon.attack/2
        console.log("CRITICAL!")
      }
      baseHitRate = from.equipment.weapon.attack + from.level/4
      baseAttackMultiplier = from.stats.strength/8 + from.stats.agility/16 + 1

    } else {
      power = from.strength
      baseHitRate = from.hitRate + from.level/4
      baseAttackMultiplier = from.attackMultiplier
    }

    if (against.isPlayer) {
      defense = against.equipment.defense
      evade = against.equipment.evade
      defenseMultiplier = against.stats.agility/8
      if (against.equipment.shield !== undefined) {
        defenseMultiplier += against.level/16
      }
    } else {
      defense = against.defense
      evade = 0
    }

    let done = false;
    while (!done) {
      if (baseAttackMultiplier < 1) {
        done = true
      } else {

        let complete = false

        while (!complete) {
          let hitChance = Math.random() * (99 - 0) + 0
          baseAttackMultiplier -= 1

          if (hitChance <= baseHitRate) {
            if (baseAttackMultiplier < 1) {
              done = true
              complete = true
            } else {
              let evasion = Math.random() * (99 - 0) + 0
              defenseMultiplier -= 1
              if (evasion < evade) {
                baseAttackMultiplier -= 1
                complete = true
              }
            }
          } else {
            baseAttackMultiplier -= 1
          }
        }
      }
    }

    let damage = power * (Math.random() * (150 - 100) + 100)/100 - defense
    return damage
  }
  cast(from, agaisnt) {

  }
}
