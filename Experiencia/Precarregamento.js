import { EventEmitter } from "events";
import Experiencia from "./Experiencia";

export default class Precarregamento extends EventEmitter {
  constructor() {
    super();
    this.experiencia = new Experiencia();
    this.cena = this.experiencia.cena;
    this.tamanho = this.experiencia.tamanho;
    this.recursos = this.experiencia.recursos;
    this.camera = this.experiencia.camera;
    this.mundo = this.experiencia.mundo;
  }
}
