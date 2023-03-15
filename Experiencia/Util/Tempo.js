import EventEmitter from "events";

export default class Tempo extends EventEmitter {
  constructor() {
    super();
    this.start = Date.now();
    this.atual = this.start;
    this.percorrido = 0;
    this.delta = 16;

    this.update();
  }

  update() {
    const tempoPercorrido = Date.now();
    this.delta = tempoPercorrido - this.atual;
    this.atual = tempoPercorrido;
    this.percorrido = this.atual - this.start;

    this.emit("update");
    window.requestAnimationFrame(() => this.update());
  }
}
