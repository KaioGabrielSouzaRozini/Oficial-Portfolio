import EventEmitter from "events";
export default class Tema extends EventEmitter {
  constructor() {
    super();

    this.tema = "claro";

    this.botaoBarra = document.querySelector(".botao-barra");
    this.circulo = document.querySelector(".circulo");

    this.setEventListers();
  }
  setEventListers() {
    this.botaoBarra.addEventListener("click", () => {
      this.circulo.classList.toggle("slide");
      this.tema = this.tema === "claro" ? "escuro" : "claro";
      document.body.classList.toggle("escuro-tema");
      document.body.classList.toggle("claro-tema");

      this.emit("switch", this.tema);
    });
  }
}
