import * as THREE from "three";
import Experiencia from "../Experiencia";
import GSAP from "gsap";
import GUI from "lil-gui";

export default class Ambiente {
  constructor() {
    this.experiencia = new Experiencia();
    this.cena = this.experiencia.cena;
    this.recursos = this.experiencia.recursos;

    this.obj = {
      colorObj: { r: 0, g: 0, b: 0 },
      intensity: 3,
    };

    this.setLuzSol();
  }

  setLuzSol() {
    this.luzSol = new THREE.DirectionalLight("#ffffff", 3);
    this.luzSol.castShadow = true;
    this.luzSol.shadow.camera.far = 20;
    this.luzSol.shadow.mapSize.set(2048, 2048);
    this.luzSol.shadow.normalBias = 0.05;
    this.luzSol.position.set(1.5, 7, 3);

    this.cena.add(this.luzSol);

    this.luzAmbiente = new THREE.AmbientLight("#ffffff", 1);
    this.cena.add(this.luzAmbiente);
  }
  muteTema(tema) {
    if (tema === "escuro") {
      GSAP.to(this.luzSol.color, {
        b: 0.6313725490196078,
        g: 0.27058823529411763,
        r: 0.27450980392156865,
      });
      GSAP.to(this.luzAmbiente.color, {
        b: 0.6313725490196078,
        g: 0.27058823529411763,
        r: 0.27450980392156865,
      });
      GSAP.to(this.luzSol, {
        intensity: 1,
      });
      GSAP.to(this.luzAmbiente, {
        intensity: 1,
      });
    } else {
      GSAP.to(this.luzSol.color, {
        r: 255 / 255,
        g: 255 / 255,
        b: 255 / 255,
      });
      GSAP.to(this.luzAmbiente.color, {
        r: 255 / 255,
        g: 255 / 255,
        b: 255 / 255,
      });
      GSAP.to(this.luzSol, {
        intensity: 1.1,
      });
      GSAP.to(this.luzAmbiente, {
        intensity: 1.1,
      });
    }
  }

  resize() {}

  update() {}
}
