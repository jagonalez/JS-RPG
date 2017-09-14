import { Characters } from './characters/characters'
import { Combat } from './combat'
import { PlayerMovement } from './player-movement'
import { Keyboard } from './keyboard'
import { Battle } from './screens/battle'
import { Party } from './party'

function ready() {
  if (!window.document || window.document.readyState === "complete") {
    return Promise.resolve()
  } else {
    return new Promise( (resolve) => {
      var done = function() {
        window.document.removeEventListener('DOMContentLoaded', done)
        window.removeEventListener('load', done)
        resolve();
      }
      window.document.addEventListener('DOMContentLoaded', done);
      window.addEventListener('load', done);
    })
  }
}
function main() {
  return ready()
  .then(() => {


    var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache

    var renderer = autoDetectRenderer(960, 720)
    renderer.view.style.position = "absolute"
    //Add the canvas to the HTML document
    document.body.appendChild(renderer.view)

    //Create a container object called the `stage`
    var stage = new Container()
    loader
      .add("images/characters/resswalk.png")
      .add("images/characters/zayinwalk.png")
      .add("images/characters/barkswalk.png")
      .add("images/characters/ayawalk.png")
      .add("images/characters/poffwalk.png")
      .add("images/characters/ressbattle.png")
      .add("images/characters/zayinbattle.png")
      .add("images/characters/barksbattle.png")
      .add("images/characters/ayabattle.png")
      .add("images/characters/poffbattle.png")
      .add("images/tilesets/tileset.png")
      .add("images/battle.png")
      .load(setup)

    //Tell the `renderer` to `render` the `stage`
    //renderer.render(stage)
    let keyboard
    let movement
    let party
    let battle

    function setup() {
      keyboard = new Keyboard()
      movement = new PlayerMovement(keyboard, stage, renderer)
      party = new Party()
      Characters.forEach(c => party.add(c))
      battle = new Battle(stage, party)
      battle.show()


      requestAnimationFrame(gameLoop)
    }

    function gameLoop() {
      requestAnimationFrame(gameLoop)
      battle.update()
      renderer.render(stage)
    }

  })

}

main()
