import * as THREE from "three";
import Experiencia from "./Experiencia.js";

export default class Renderizar {
  constructor() {
    this.experiencia = new Experiencia();
    this.tamanho = this.experiencia.tamanho;
    this.cena = this.experiencia.cena;
    this.canvas = this.experiencia.canvas;
    this.camera = this.experiencia.camera;

    this.setRenderizar();
  }
  setRenderizar() {
    this.renderizar = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    this.renderizar.useLegacyLights = true;
    this.renderizar.outputEncoding = THREE.sRGBEncoding;
    this.renderizar.toneMapping = THREE.CineonToneMapping;
    this.renderizar.toneMappingExposure = 0.6;
    this.renderizar.shadowMap.enabled = true;
    this.renderizar.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderizar.setSize(this.tamanho.width, this.tamanho.height);
    this.renderizar.setPixelRatio(this.tamanho.pixelRatio);
  }

  resize() {
    this.renderizar.setSize(this.tamanho.width, this.tamanho.height);
    this.renderizar.setPixelRatio(this.tamanho.pixelRatio);
  }

  update() {
    //this.renderizar.setViewport(0, 0, this.tamanho.width, this.tamanho.height);
    this.renderizar.render(this.cena, this.camera.cameraOrtografica);
  }
}
