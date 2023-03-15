import * as THREE from "three";

import Tamanho from "./Util/Tamanho";
import Tempo from "./Util/Tempo";
import Recursos from "./Util/Recursos";
import espolhos from "./Util/espolhos";

import Camera from "./Camera";
import Tema from "./Tema";
import Renderizar from "./Renderizar";
import Precarregamento from "./Precarregamento";

import Mundo from "./Mundo/Mundo";

export default class Experiencia {
  constructor(canvas) {
    if (Experiencia.instance) {
      return Experiencia.instance;
    }
    Experiencia.instance = this;
    this.canvas = canvas;
    this.cena = new THREE.Scene();
    this.tempo = new Tempo();
    this.tamanho = new Tamanho();
    this.camera = new Camera();
    this.renderizar = new Renderizar();
    this.recursos = new Recursos(espolhos);
    this.tema = new Tema();
    this.mundo = new Mundo();
    this.precarregamento = new Precarregamento();

    this.tamanho.on("resize", () => {
      this.resize();
    });
    this.tempo.on("update", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.mundo.update();
    this.renderizar.resize();
  }

  update() {
    this.camera.update();
    this.renderizar.update();
  }
}
