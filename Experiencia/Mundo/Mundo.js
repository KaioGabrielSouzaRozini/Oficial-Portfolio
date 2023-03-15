import * as THREE from "three";

import Experiencia from "../Experiencia";
import Ambiente from "./Ambiente";

import Quarto from "./Quarto";
import Terreno from "./Terreno";
import Controles from "./Controles";

import { EventEmitter } from "events";

export default class Mundo extends EventEmitter {
  constructor() {
    super();
    this.experiencia = new Experiencia();
    this.tamanho = this.experiencia.tamanho;
    this.cena = this.experiencia.cena;
    this.canvas = this.experiencia.canvas;
    this.camera = this.experiencia.camera;
    this.recursos = this.experiencia.recursos;
    this.tema = this.experiencia.tema;

    this.recursos.on("ready", () => {
      this.ambiente = new Ambiente();
      this.quarto = new Quarto();
      this.terreno = new Terreno();
      this.controles = new Controles();
      this.emit("mundopronto");
    });

    this.tema.on("switch", (tema) => {
      this.mudaTema(tema);
    });
  }
  mudaTema(tema) {
    if (this.ambiente) {
      this.ambiente.muteTema(tema);
    }
  }
  resize() {}
  update() {
    if (this.quarto) {
      this.quarto.update();
    }
  }
}
