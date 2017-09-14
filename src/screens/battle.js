var Container = PIXI.Container,
autoDetectRenderer = PIXI.autoDetectRenderer,
loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite,
TextureCache = PIXI.utils.TextureCache

const names = ['ress', 'barks', 'zayin', 'poff', 'aya']

export class Battle {
  constructor(stage, party) {
    this.stage = stage
    this.chars = []
    this.party = party
    this.menuTop = 550
    this.menuHeight = 170
    this.hpTexts = []
    this.mpTexts = []
  }
  menu() {
    let canvas = this.drawBox(360, this.menuHeight)
    let sprite = new Sprite(PIXI.Texture.fromCanvas(canvas))
    sprite.x = 0
    sprite.y = this.menuTop
    this.stage.addChild(sprite)

    canvas = this.drawBox(this.menuTop + 48, this.menuHeight)
    sprite = new Sprite(PIXI.Texture.fromCanvas(canvas))
    sprite.x = 362
    sprite.y = this.menuTop
    this.stage.addChild(sprite)
  }

  drawBox(height, width) {
    let canvas = document.createElement('canvas')
    canvas.width = height
    canvas.height = width
    let context = canvas.getContext('2d')
    let backgroundGradient = context.createLinearGradient(0, 0, 0, canvas.height)

    backgroundGradient.addColorStop(0, "#0000FF")
    backgroundGradient.addColorStop(1, "#0099FF")
    context.fillStyle = backgroundGradient

    context.fillRect(0,0, canvas.width, canvas.height)
    context.lineWidth = 15

    let gradient = context.createLinearGradient(canvas.width - 10, 0, canvas.width, 0)
    gradient.addColorStop(0, "#000000")
    gradient.addColorStop(0.5, "#ffffff")
    gradient.addColorStop(1, "#555555")
    context.strokeStyle = gradient
    context.beginPath()
    context.moveTo(canvas.width, 0)
    context.lineTo(canvas.width, 165)
    context.stroke()

    gradient = context.createLinearGradient(10, 0, 0, 0)
    gradient.addColorStop(0, "#000000")
    gradient.addColorStop(0.5, "#ffffff")
    gradient.addColorStop(1, "#555555")
    context.strokeStyle = gradient
    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(0, canvas.height)
    context.stroke()

    gradient = context.createLinearGradient(0, 0, 0, 10)
    gradient.addColorStop(0, "#000000")
    gradient.addColorStop(0.5, "#ffffff")
    gradient.addColorStop(1, "#555555")
    context.strokeStyle = gradient
    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(canvas.width, 0)
    context.stroke()

    gradient = context.createLinearGradient(0, canvas.height - 10, 0, canvas.height)
    gradient.addColorStop(0, "#000000")
    gradient.addColorStop(0.5, "#ffffff")
    gradient.addColorStop(1, "#555555")
    context.strokeStyle = gradient
    context.beginPath()
    context.moveTo(0, canvas.height)
    context.lineTo(canvas.width, canvas.height)
    context.stroke()

    context.rect(0, 0, 12, 12)
    context.fillStyle = "#bdbdbd"
    context.shadowColor = "#494949"
    context.shadowBlur = 5
    context.fill()

    context.rect(canvas.width - 12, 0, 12, 12)
    context.fill()

    context.rect(0, canvas.height - 13, 12, 12)
    context.fill()

    context.rect(canvas.width - 12, canvas.height - 13, 12, 12)
    context.fill()

    return canvas

  }

  background() {
    var texture = TextureCache["images/battle.png"];
    //row delta = 160
    //column dleta = 256
    var x = (3 * 256) + 16
    var y = (6 * 160) + 16

    texture.frame = new PIXI.Rectangle(x, y, 240, 147)
    var bg = new Sprite(texture)
    bg.scale.x = 4;
    bg.scale.y = 4;
    this.stage.addChild(bg);
  }

  characters() {
    let characterX = 760
    let characterY = 235
    let textY = this.menuTop + 30
    let hpLabelText = new PIXI.Text("HP", {
      fontFamily: "Press Start 2P",
      fontSize: 12,
      fill: "#ececec",
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 3,
      dropShadowAngle: 0.2,
      dropShadowDistance: 0,
    })
    hpLabelText.x = 640
    hpLabelText.y = this.menuTop + 10
    let mpLabelText = new PIXI.Text("MP", {
      fontFamily: "Press Start 2P",
      fontSize: 12,
      fill: "#ececec",
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 3,
      dropShadowAngle: 0.2,
      dropShadowDistance: 0,
    })
    mpLabelText.x = 840
    mpLabelText.y = this.menuTop + 10

    this.stage.addChild(hpLabelText)
    this.stage.addChild(mpLabelText)

    this.party.members.forEach(c => {
      let texture = TextureCache["images/characters/" + c.firstName.toLowerCase() + "battle.png"]
      texture.frame = new PIXI.Rectangle(32, 0, 32, 32)
      let char = new Sprite(texture)
      char.scale.set(1.85 , 2.5)

      char.x = characterX
      char.y = characterY

      this.stage.addChild(char)

      characterX += 32
      characterY += 1.85*32

      let firstNameText = new PIXI.Text(c.firstName, {
        fontFamily: "Press Start 2P",
        fontSize: 16,
        fill: "#ececec",
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 3,
        dropShadowAngle: 0.2,
        dropShadowDistance: 0,
      })
      firstNameText.x = 400
      firstNameText.y = textY

      let hpText = new PIXI.Text(c.stats.hitPoints, {
        fontFamily: "Press Start 2P",
        fontSize: 16,
        fill: "#ececec",
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 3,
        dropShadowAngle: 0.2,
        dropShadowDistance: 0,
      })
      hpText.x = 660
      hpText.y = textY


      let mpText = new PIXI.Text(c.stats.magicPoints, {
        fontFamily: "Press Start 2P",
        fontSize: 16,
        fill: "#ececec",
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 3,
        dropShadowAngle: 0.2,
        dropShadowDistance: 0,
      })
      mpText.x = 860
      mpText.y = textY

      textY += 28
      this.stage.addChild(firstNameText)
      this.stage.addChild(hpText)
      this.stage.addChild(mpText)

    })
  }
  showHP() {
    let textY = this.menuTop + 30
    this.party.members.forEach(c => {
      let hpText = new PIXI.Text(c.hp  + "/", {
        fontFamily: "Press Start 2P",
        fontSize: 16,
        fill: "#ececec",
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 3,
        dropShadowAngle: 0.2,
        dropShadowDistance: 0,
      })

      hpText.x = 650
      hpText.y = textY
      hpText.anchor.x = 1

      let mpText = new PIXI.Text(c.mp  + "/", {
        fontFamily: "Press Start 2P",
        fontSize: 16,
        fill: "#ececec",
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 3,
        dropShadowAngle: 0.2,
        dropShadowDistance: 0,
      })

      mpText.x = 850
      mpText.y = textY
      mpText.anchor.x = 1

      textY += 28

      this.stage.addChild(hpText)
      this.stage.addChild(mpText)
      this.hpTexts.push(hpText)
      this.mpTexts.push(mpText)

    })
  }

  updateHP() {

  }

  show() {
    this.background()
    this.menu()
    this.characters()
    this.showHP()
  }

  update() {
    for (let i=0; i < this.party.members.length; i++) {
      this.hpTexts[i].text = this.party.members[i].hp + "/"
      this.mpTexts[i].text = this.party.members[i].mp + "/"
    }
  }
}
