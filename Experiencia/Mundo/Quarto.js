import * as THREE from "three";
import Experiencia from "../Experiencia";
import GSAP from "gsap";

export default class Quarto {
  constructor() {
    this.experiencia = new Experiencia();
    this.cena = this.experiencia.cena;
    this.recursos = this.experiencia.recursos;
    this.quarto = this.recursos.itens.quarto;
    this.quartoAtual = this.quarto.scene;
    this.tempo = this.experiencia.tempo;
    this.precarregamento = this.experiencia.precarregamento;
    this.quartoFilho = {};

    this.lerp = {
      atual: 0,
      alvo: 0,
      alivio: 0.1,
    };
    this.tempo.on("update", () => {
      this.update();
    });
    this.precarregamento.on("acabouAnimacao", () => {
      this.noMovimentoMouse();
    });

    this.setModelo();
  }

  setModelo() {
    this.quartoAtual.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupChild) => {
          groupChild.castShadow = true;
          groupChild.receiveShadow = true;
        });
      }
      if (child.name === "Mesa") {
        child.position.x = -2.44216;
        child.position.z = 1.38502;
      }

      child.scale.set(0, 0, 0);

      this.quartoFilho[child.name.toLowerCase()] = child;
    });

    this.luz = new THREE.PointLight(0xff0000, 1, 50);
    this.luz.position.set(-2.14965, -2.61245, 3.10312);
    this.quartoAtual.add(this.luz);

    this.cena.add(this.quartoAtual);
    this.quartoAtual.scale.set(0.3, 0.3, 0.3);
    this.quartoAtual.position.y -= 0.5;

    this.quartoFilho["luz"] = this.luz;
  }

  noMovimentoMouse() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.alvo = this.rotation * 0.1;
    });
  }

  resize() {}
  update() {
    this.lerp.atual = GSAP.utils.interpolate(
      this.lerp.atual,
      this.lerp.alvo,
      this.lerp.alivio
    );

    this.quartoAtual.rotation.y = this.lerp.atual;
  }
}
