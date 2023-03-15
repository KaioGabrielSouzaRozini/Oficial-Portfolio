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
    ScrollTrigger.matchMedia({
      // PC
      "(min-width: 969px)": () => {
        console.log("pc");
        this.primeiroMovimento = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".primeiro-movimento",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            // markers: true,
            invalidateOnRefresh: true,
          },
        });
        this.primeiroMovimento.fromTo(
          this.quarto.position,
          { x: 0, y: -0.5, z: 0 },
          {
            x: () => {
              return this.tamanho.width * 0.0014;
            },
          }
        );

        // Segundo Movimento
        this.segundoMovimento = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".segundo-movimento",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
          .to(
            this.quarto.position,
            {
              x: () => {
                return -1;
              },
              z: () => {
                return this.tamanho.height * 0.002;
              },
            },
            "same"
          )
          .to(
            this.quarto.scale,
            {
              x: 0.6,
              y: 0.6,
              z: 0.6,
            },
            "same"
          );
      },

      // Mobile
      "(max-width: 969px)": () => {
        console.log("mobile");
      },

      all: function () {},
    });
  }

  resize() {}

  update() {}
}
