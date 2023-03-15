import * as THREE from "three";
import Experiencia from "./Experiencia";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  constructor() {
    this.experiencia = new Experiencia();
    this.tamanho = this.experiencia.tamanho;
    this.cena = this.experiencia.cena;
    this.canvas = this.experiencia.canvas;

    this.criarCameraPerspectiva();
    this.criarCameraOrtografica();
    this.setControles();
  }

  criarCameraPerspectiva() {
    this.cameraPerspectiva = new THREE.PerspectiveCamera(
      35,
      this.tamanho.aspect,
      0.1,
      1000
    );
    this.cena.add(this.cameraPerspectiva);
    this.cameraPerspectiva.position.x = 29;
    this.cameraPerspectiva.position.y = 14;
    this.cameraPerspectiva.position.z = 12;
  }

  criarCameraOrtografica() {
    this.cameraOrtografica = new THREE.OrthographicCamera(
      (-this.tamanho.aspect * this.tamanho.frustrum) / 2,
      (this.tamanho.aspect * this.tamanho.frustrum) / 2,
      this.tamanho.frustrum / 2,
      -this.tamanho.frustrum / 2,
      -50,
      50
    );
    this.cameraOrtografica.position.y = 5.65;
    this.cameraOrtografica.position.z = 10;
    this.cameraOrtografica.rotation.x = -Math.PI / 6;

    this.cena.add(this.cameraOrtografica);
  }

  setControles() {
    this.controles = new OrbitControls(this.cameraPerspectiva, this.canvas);
    this.controles.enableDamping = true;
    this.controles.enableZoom = false;
  }

  resize() {
    // Atualizando Camera Perpectiva no redimensionar
    this.cameraPerspectiva.aspect = this.tamanho.aspect;
    this.cameraPerspectiva.updateProjectionMatrix();

    // Atualizando Camera Ortografica no redimensionar
    this.cameraOrtografica.left =
      (-this.tamanho.aspect * this.tamanho.frustrum) / 2;
    this.cameraOrtografica.right =
      (this.tamanho.aspect * this.tamanho.frustrum) / 2;
    this.cameraOrtografica.top = this.tamanho.frustrum / 2;
    this.cameraOrtografica.bottom = -this.tamanho.frustrum / 2;
    this.cameraOrtografica.updateProjectionMatrix();
  }

  update() {
    this.controles.update();
  }
}
