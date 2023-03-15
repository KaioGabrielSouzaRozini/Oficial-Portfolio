import * as THREE from "three";
import { EventEmitter } from "events";
import Experiencia from "../Experiencia";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export default class Recursos extends EventEmitter {
  constructor(espolhos) {
    super();
    this.experiencia = new Experiencia();
    this.renderizar = this.experiencia.renderizar;

    this.espolhos = espolhos;

    this.itens = {};
    this.queue = this.espolhos.length;

    this.loaded = 0;

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("/draco/");
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
  }

  startLoading() {
    for (const espolhos of this.espolhos) {
      if (espolhos.type === "glbModel") {
        this.loaders.gltfLoader.load(espolhos.path, (file) => {
          this.singleAssetLoaded(espolhos, file);
        });
      }
    }
  }
  singleAssetLoaded(espolhos, file) {
    this.itens[espolhos.name] = file;
    this.loaded++;
    console.log("espolhos estão carregando");
    if (this.loaded === this.queue) {
      console.log("todos os espolhos foram carregado");
      this.emit("ready");
    }
  }
}
