import Experiencia from "../Experiencia";
import * as THREE from "three";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default class Controles {
  constructor() {
    this.experiencia = new Experiencia();
    this.cena = this.experiencia.cena;
    this.tamanho = this.experiencia.tamanho;
    this.recursos = this.experiencia.recursos;
    this.tempo = this.experiencia.tempo;
    this.camera = this.experiencia.camera;
    this.quarto = this.experiencia.mundo.quarto.quartoAtual;

    GSAP.registerPlugin(ScrollTrigger);

    this.setCaminho();
  }

  setCaminho() {
    this.timeline = new GSAP.timeline();
    this.timeline.to(this.quarto.position, {
      x: () => {
        return this.tamanho.width * 0.0015;
      },
      scrollTrigger: {
        trigger: ".primeiro-movimento",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });
  }

  resize() {}

  update() {}
}
