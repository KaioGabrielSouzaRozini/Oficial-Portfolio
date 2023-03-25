import Experiencia from "../Experiencia";
import * as THREE from "three";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ASScroll from "@ashthornton/asscroll";

export default class Controles {
  constructor() {
    this.experiencia = new Experiencia();
    this.cena = this.experiencia.cena;
    this.tamanho = this.experiencia.tamanho;
    this.recursos = this.experiencia.recursos;
    this.tempo = this.experiencia.tempo;
    this.camera = this.experiencia.camera;
    this.quarto = this.experiencia.mundo.quarto.quartoAtual;
    this.precarregamento = this.experiencia.precarregamento;

    this.quarto.children.forEach((child) => {
      if (child.type === "PointLight") {
        this.luz = child;
      }
    });

    this.primeiroCirculo = this.experiencia.mundo.terreno.primeiroCirculo;
    this.segundoCirculo = this.experiencia.mundo.terreno.segundoCirculo;
    this.terceiroCirculo = this.experiencia.mundo.terreno.terceiroCirculo;

    GSAP.registerPlugin(ScrollTrigger);

    this.setCaminho();
  }

  setCaminho() {
    ScrollTrigger.matchMedia({
      // PC
      "(min-width: 969px)": () => {
        console.log("pc");

        this.quarto.scale.set(0.3, 0.3, 0.3);
        this.luz.position.set(-2.14965, -2.61245, 3.10312);

        this.camera.cameraOrtografica.position.set(0, 5.6, 10);
        this.quarto.position.set(0, 0, 0);

        this.primeiroMovimento = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".primeiro-movimento",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
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
                return this.tamanho.width * -0.0014;
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
        this.terceiroMovimento = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".terceiro-movimento",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
          .to(
            this.camera.cameraOrtografica.position,
            {
              y: 3.4,
              x: () => {
                return this.tamanho.width * -0.001 - 8.5;
              },
            },
            "same"
          )
          .to(
            this.quarto.scale,
            {
              x: 2.2,
              y: 2.2,
              z: 2.2,
            },
            "same"
          );
      },

      // Mobile
      "(max-width: 969px)": () => {
        console.log("mobile");
        this.quarto.scale.set(0.27, 0.27, 0.27);
        this.luz.position.set(-2.14965, -2.61245, 3.10312);

        this.camera.cameraOrtografica.position.set(0, 5.6, 10);
        this.quarto.position.set(0, -0.5, 0);

        this.primeiroMovimento = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".primeiro-movimento",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            // invalidateOnRefresh: true,
          },
        }).to(this.quarto.scale, {
          x: 0.4,
          y: 0.4,
          z: 0.4,
        });

        // Second section -----------------------------------------
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
            this.quarto.scale,
            {
              x: 0.6,
              y: 0.6,
              z: 0.6,
            },
            "same"
          )
          .to(
            this.luz,
            {
              width: 0.3 * 3.4,
              height: 0.4 * 3.4,
            },
            "same"
          )
          .to(
            this.quarto.position,
            {
              x: -0.5,
            },
            "same"
          );

        // Third section -----------------------------------------
        this.terceiroMovimento = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".terceiro-movimento",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
          .to(
            this.quarto.position,
            {
              x: 10.2,
              y: 1,
            },
            "same"
          )
          .to(
            this.quarto.scale,
            {
              x: 3.5,
              y: 3.5,
              z: 3.5,
            },
            "same"
          );
      },

      all: () => {
        this.circuloPrimeiro = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".primeiro-movimento",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }).to(this.primeiroCirculo.scale, {
          x: 3,
          y: 3,
          z: 3,
        });

        // Second section -----------------------------------------
        this.circuloSegundo = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".segundo-movimento",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }).to(
          this.segundoCirculo.scale,
          {
            x: 3,
            y: 3,
            z: 3,
          },
          "same"
        );

        // Third section -----------------------------------------
        this.circuloTerceciro = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".terceiro-movimento",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }).to(this.terceiroCirculo.scale, {
          x: 3,
          y: 3,
          z: 3,
        });

        this.segundaLinhaDoTempo = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".terceiro-movimento",
            start: "center center",
          },
        });

        this.quarto.children.forEach((child) => {
          if (child.name === "Mesa") {
            this.um = GSAP.to(child.position, {
              x: -2.92612,
              z: 1.86898,
              duration: 0.2,
            });
          }
          if (child.name === "PoteBolo") {
            this.dois = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "BolinhasDeChuva") {
            this.tres = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "PoteBolinhos") {
            this.quatro = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "BolinhoNoPalito1") {
            this.cinco = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.1,
            });
          }
          if (child.name === "BolinhoNoPalito2") {
            this.seis = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.1,
            });
          }
          if (child.name === "BolinhoNoPalito3") {
            this.sete = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.1,
            });
          }
          if (child.name === "BoteBoloDoce2") {
            this.oito = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "BoloDoce11") {
            this.nove = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "BoloDoce22") {
            this.dez = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "BoloDoce33") {
            this.onze = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "Tijela1001") {
            this.doze = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "BoteBoloDoce") {
            this.treze = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "BoloDoce1") {
            this.quatorze = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "BoloDoce2") {
            this.quinze = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "BoloDoce3") {
            this.dezesseis = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "TabuaSUshi") {
            this.dezesete = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.3,
            });
          }
          if (child.name === "Sushis") {
            this.dezoito = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "Sushis1") {
            this.dezenove = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "Sashimi2") {
            this.vinte = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.1,
            });
          }
          if (child.name === "Sashimi3") {
            this.vinteUm = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.1,
            });
          }
          if (child.name === "Sashimi4") {
            this.vinteDois = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.1,
            });
          }
          if (child.name === "Sashimi5") {
            this.vinteTres = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.1,
            });
          }
          if (child.name === "sashimi1") {
            this.vinteQuatro = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.1,
            });
          }
          if (child.name === "Cadeira1001") {
            this.vinteCinco = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
          if (child.name === "Cadeira1002") {
            this.vinteSeis = GSAP.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2)",
              duration: 0.2,
            });
          }
        });
        this.segundaLinhaDoTempo.add(this.um);
        this.segundaLinhaDoTempo.add(this.dois);
        this.segundaLinhaDoTempo.add(this.tres);
        this.segundaLinhaDoTempo.add(this.quatro);
        this.segundaLinhaDoTempo.add(this.cinco);
        this.segundaLinhaDoTempo.add(this.seis);
        this.segundaLinhaDoTempo.add(this.sete);
        this.segundaLinhaDoTempo.add(this.oito);
        this.segundaLinhaDoTempo.add(this.nove);
        this.segundaLinhaDoTempo.add(this.dez);
        this.segundaLinhaDoTempo.add(this.onze);
        this.segundaLinhaDoTempo.add(this.doze);
        this.segundaLinhaDoTempo.add(this.treze);
        this.segundaLinhaDoTempo.add(this.quatorze);
        this.segundaLinhaDoTempo.add(this.quinze);
        this.segundaLinhaDoTempo.add(this.dezesseis);
        this.segundaLinhaDoTempo.add(this.dezesete);
        this.segundaLinhaDoTempo.add(this.dezoito);
        this.segundaLinhaDoTempo.add(this.dezenove);
        this.segundaLinhaDoTempo.add(this.vinte);
        this.segundaLinhaDoTempo.add(this.vinteUm);
        this.segundaLinhaDoTempo.add(this.vinteDois);
        this.segundaLinhaDoTempo.add(this.vinteTres);
        this.segundaLinhaDoTempo.add(this.vinteQuatro);
        this.segundaLinhaDoTempo.add(this.vinteCinco);
        this.segundaLinhaDoTempo.add(this.vinteSeis);
      },
    });
  }

  resize() {}

  update() {}
}
