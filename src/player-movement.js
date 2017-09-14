const Container = PIXI.Container,
autoDetectRenderer = PIXI.autoDetectRenderer,
loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite,
TextureCache = PIXI.utils.TextureCache

export class PlayerMovement {
  constructor(keyboard, stage, renderer) {
    this.keyboard = keyboard
    this.keyboard.addDownHandler(e => this.down(e))
    this.keyboard.addUpHandler(e => this.up(e))

    this.char = undefined;
    this.stage = stage
    this.renderer = renderer

    this.frameX = 0
    this.frameY = 0

    this.canWalk = true
    this.cellX = 16
    this.cellY = 24

    this.direction = 1
    this.vertical = undefined

    this.playerX = 0
    this.playerY = 0

    this.count = 0;

    this.cells = 0;
    this.canWalk = true;
  }

  down(event) {
    switch (event.keyCode) {
      case this.keyboard.KEYS.DOWN:
        this.frameY = 0
        this.vertical = true;
        this.direction = 1;
        break
      case this.keyboard.KEYS.LEFT:
        this.frameY = 48
        this.vertical = false;
        this.direction = -1;
        break
      case this.keyboard.KEYS.RIGHT:
        this.frameY = 96
        this.vertical = false;
        this.direction = 1;
        break
      case this.keyboard.KEYS.UP:
        this.frameY = 144
        this.vertical = true;
        this.direction = -1;
        break
    }
    this.startWalking();
  }

  up(event) {
    this.canWalk = false

    this.timerId = setTimeout(() => {
      this.frameX = 32
      this.render()
      this.canWalk = true
    }, 100)
  }
  startWalking(direction) {
    this.cells++;

    if (this.cells % 2 === 0 && !this.canWalk) {
      this.cells = 0;
      return
    }
    if (this.vertical) {
      this.playerY += this.direction * this.cellY/2
    } else {
      this.playerX += this.direction * this.cellX/2
    }

    this.render()

    this.count++;
    if (this.count <= 1) {
      setTimeout(() => {
        this.startWalking()
      }, 100)
    } else {
      this.count = 0
    }
  }

  stopWalking() {
    this.canWalk = false;
  }
  render() {
    var texture = TextureCache["images/characters/resswalk.png"];

    if (this.frameX >= 96)
      this.frameX = 0

    if (this.char !== undefined)
      this.stage.removeChild(this.char)

    texture.frame = new PIXI.Rectangle(this.frameX, this.frameY, 32, 48)
    this.frameX += 64;
    this.char = new Sprite(texture)
    this.char.scale.set(2, 2)
    this.char.x = this.playerX;
    this.char.y = this.playerY;

    this.stage.addChild(this.char);
    //this.renderer.render(this.stage);
  }

}
