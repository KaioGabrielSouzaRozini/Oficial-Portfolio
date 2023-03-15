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

    this.lerp = {
      atual: 0,
      alvo: 0,
      alivio: 0.1,
    };
    this.tempo.on("update", () => {
      this.update();
    });

    this.setModelo();
    this.noMovimentoMouse();
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
      if (
        child.name === "PoteBolo" ||
        child.name === "PoteBolinhos" ||
        child.name === "BolinhoNoPalito1" ||
        child.name === "BolinhoNoPalito2" ||
        child.name === "BolinhoNoPalito3" ||
        child.name === "BolinhasDeChuva" ||
        child.name === "BoteBoloDoce2" ||
        child.name === "BoteBoloDoce" ||
        child.name === "BoloDoce11" ||
        child.name === "BoloDoce1" ||
        child.name === "BoloDoce2" ||
        child.name === "BoloDoce3" ||
        child.name === "BoloDoce22" ||
        child.name === "BoloDoce33" ||
        child.name === "TabuaSUshi" ||
        child.name === "sashimi1" ||
        child.name === "Sashimi2" ||
        child.name === "Sashimi3" ||
        child.name === "Sashimi4" ||
        child.name === "Sashimi5" ||
        child.name === "Sushis" ||
        child.name === "Sushis1" ||
        child.name === "Tijela1001" ||
        child.name === "Cadeira1001" ||
        child.name === "Cadeira1002"
      ) {
        child.scale.set(0, 0, 0);
      }
      console.log(child);
    });

    this.luz = new THREE.PointLight(0xff0000, 2, 100);
    this.luz.position.set(-2.14965, -2.61245, 3.10312);
    this.quartoAtual.add(this.luz);

    this.cena.add(this.quartoAtual);
    this.quartoAtual.scale.set(0.3, 0.3, 0.3);
    this.quartoAtual.position.y -= 0.5;
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
