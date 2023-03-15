import * as THREE from "three";
import Experiencia from "../Experiencia";

export default class Terreno {
  constructor() {
    this.experience = new Experiencia();
    this.cena = this.experience.cena;

    this.setTerreno();
    this.setCirculos();
  }
  setTerreno() {
    this.geometria = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      side: THREE.BackSide,
    });
    this.plano = new THREE.Mesh(this.geometria, this.material);
    this.cena.add(this.plano);
    this.plano.rotation.x = Math.PI / 2;
    this.plano.position.y = -0.8;
    this.plano.receiveShadow = true;
  }

  setCirculos() {
    const geometria = new THREE.CircleGeometry(5, 64);

    const material = new THREE.MeshStandardMaterial({ color: 0xff8484 });
    const material2 = new THREE.MeshStandardMaterial({ color: 0x7f80c5 });
    const material3 = new THREE.MeshStandardMaterial({ color: 0xbe77b5 });

    this.primeiroCirculo = new THREE.Mesh(geometria, material);
    this.segundoCirculo = new THREE.Mesh(geometria, material2);
    this.terceiroCirculo = new THREE.Mesh(geometria, material3);

    this.primeiroCirculo.position.y = -0.79;

    this.segundoCirculo.position.y = -0.78;
    this.segundoCirculo.position.x = 2;

    this.terceiroCirculo.position.y = -0.77;

    this.primeiroCirculo.scale.set(0, 0, 0);
    this.segundoCirculo.scale.set(0, 0, 0);
    this.terceiroCirculo.scale.set(0, 0, 0);

    this.primeiroCirculo.rotation.x =
      this.segundoCirculo.rotation.x =
      this.terceiroCirculo.rotation.x =
        -Math.PI / 2;

    this.primeiroCirculo.receiveShadow =
      this.segundoCirculo.receiveShadow =
      this.terceiroCirculo.receiveShadow =
        true;
    this.cena.add(this.primeiroCirculo);
    this.cena.add(this.segundoCirculo);
    this.cena.add(this.terceiroCirculo);
  }

  resize() {}

  update() {}
}
