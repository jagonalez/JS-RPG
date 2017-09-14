export class Party {
  constructor() {
    this.members = []
  }

  add(character) {
    this.members.push(character)
  }

  remove(character) {
    let index = this.members.findIndex(i => i === character)
    this.members.splice(index, 1)
  }
}
