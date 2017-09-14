
export class Keyboard {
  constructor() {
    this.KEYS = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    }
    this.downHandlers = []
    this.upHandlers = []
    window.addEventListener("keydown", throttle(function (e) { this.keyDown(e) }, 100, this))
    window.addEventListener("keyup", e => this.keyUp(e))
  }
  throttle(fn, wait) {

  }
  addUpHandler(handler) {
    this.upHandlers.push(handler)
  }

  removeUpHandler(handler) {
    let index = this.upHandlers.findIndex(i => i === handler)
    this.upHandlers.splice(index, 1)
  }

  addDownHandler(handler) {
    this.downHandlers.push(handler)
  }

  removeDownHandler(handler) {
    let index = this.downHandlers.findIndex(i => i === handler)
    this.downHandlers.splice(index, 1)
  }

  keyDown(event) {
    this.downHandlers.forEach(h => h(event))
  }

  keyUp(event) {
    this.upHandlers.forEach(h => h(event))
  }
}

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 500)
  var last
  var deferTimer
  var context = scope || this
  return function () {
    var now = +new Date;

    var args = arguments
    if (last && now < (last + threshhold)) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
