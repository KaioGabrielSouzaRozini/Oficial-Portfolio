import { EventEmitter } from "events";
import Experiencia from "./Experiencia";
import GSAP from "gsap";

export default class Precarregamento extends EventEmitter {
  constructor() {
    super();
    this.experiencia = new Experiencia();
    this.cena = this.experiencia.cena;
    this.tamanho = this.experiencia.tamanho;
    this.recursos = this.experiencia.recursos;
    this.camera = this.experiencia.camera;
    this.mundo = this.experiencia.mundo;

    this.mundo.on("mundopronto", () => {
      this.setEspolhos();
      this.introducao();
    });
  }

  setEspolhos() {
    this.quarto = this.experiencia.mundo.quarto.quartoAtual;
    this.quartoFilho = this.experiencia.mundo.quarto.quartoFilho;
    console.log(this.quartoFilho);
  }

  intro() {
    return new Promise((resolve) => {
      this.segundaLinhaDoTempo = new GSAP.timeline();
      this.segundaLinhaDoTempo
        .to(this.quartoFilho.rua.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.4,
        })
        .to(this.quartoFilho.bocadelobo.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.2,
        })
        .to(this.quartoFilho.meiofio2.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.2,
        })
        .to(
          this.quartoFilho.piso.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.4,
          },

          "same"
        )
        .to(
          this.quartoFilho.andar1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.4,
          },
          "same"
        )
        .to(
          this.quartoFilho.telhado1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same3"
        )
        .to(
          this.quartoFilho.telhado2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same4"
        )
        .to(
          this.quartoFilho.telhado3.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same3"
        )
        .to(
          this.quartoFilho.telhado4.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same4"
        )
        .to(this.quartoFilho.telhado5.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.2,
        })
        .to(
          this.quartoFilho.porta1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "porta"
        )
        .to(
          this.quartoFilho.tela1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "porta"
        )
        .to(this.quartoFilho.portadentro.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.2,
        })
        .to(
          this.quartoFilho.tela3.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "porta"
        )
        .to(this.quartoFilho.cadeira1.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.cadeira2.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.cadeira3.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.cadeira4.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.letraspartefrente.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.caixinha1.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.tijela1.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.tijela2.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.caixinha2.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.tijela3.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.1,
        })
        .to(this.quartoFilho.andar2.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.4,
        })
        .to(this.quartoFilho.cercabase1.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.2,
        })
        .to(
          this.quartoFilho.cerca1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same5"
        )
        .to(
          this.quartoFilho.cerca2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same5"
        )
        .to(
          this.quartoFilho.cerca3.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same5"
        )
        .to(
          this.quartoFilho.cerca4.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same5"
        )
        .to(this.quartoFilho.cercabase2.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.2,
        })
        .to(
          this.quartoFilho.cerca5.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same6"
        )
        .to(
          this.quartoFilho.cerca6.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same6"
        )
        .to(
          this.quartoFilho.cerca7.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same6"
        )
        .to(
          this.quartoFilho.cerca8.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same6"
        )
        .to(
          this.quartoFilho.telhado6.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same7"
        )
        .to(
          this.quartoFilho.telhado7.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same8"
        )
        .to(
          this.quartoFilho.telhado8.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same7"
        )
        .to(
          this.quartoFilho.telhado9.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same8"
        )
        .to(
          this.quartoFilho.telhado10.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same7"
        )
        .to(
          this.quartoFilho.telhado11.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same8"
        )
        .to(
          this.quartoFilho.telhado12.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same7"
        )
        .to(
          this.quartoFilho.telhado13.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same8"
        )
        .to(this.quartoFilho.luzjaponesa1.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.2,
        })
        .to(this.quartoFilho.luzjaponesa001.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.2,
        })
        .to(this.quartoFilho.luzjaponesa.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1)",
          duration: 0.2,
        })
        .to(
          this.quartoFilho.arcondicionado5.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same9"
        )
        .to(
          this.quartoFilho.arcondicionado4.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same9"
        )
        .to(
          this.quartoFilho.cortina1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same10"
        )
        .to(
          this.quartoFilho.cortina2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same10"
        )
        .to(
          this.quartoFilho.cano.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same10"
        )
        .to(
          this.quartoFilho.placa1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.4,
          },
          "placa"
        )
        .to(
          this.quartoFilho.placa2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.4,
          },
          "placa"
        )
        .to(
          this.quartoFilho.andar2002.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same9"
        )
        .to(
          this.quartoFilho.arcondicionado3.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same9"
        )
        .to(
          this.quartoFilho.escada1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "same9"
        )
        .to(
          this.quartoFilho.poste1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "poste"
        )
        .to(
          this.quartoFilho.poste2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "poste"
        )
        .to(
          this.quartoFilho.luzesjapao2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "luzjapao"
        )
        .to(
          this.quartoFilho.luzesjapao1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.2,
          },
          "luzjapao"
        )
        .to(
          this.quartoFilho.escada.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same11"
        )
        .to(
          this.quartoFilho.baseescada.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same11"
        )
        .to(
          this.quartoFilho.corremao.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same11"
        )
        .to(
          this.quartoFilho.escadafinal.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.3,
          },
          "same11"
        )
        .to(
          this.quartoFilho.juggernout.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.speedcola.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.quickreviver.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.telaporta.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.arvore.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.placadescartada1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.placadescartada2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.tela2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.cortina3.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.arcondicionado2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.arcondicionado1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.placa4.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.placa3.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.janela1.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.janela2.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(
          this.quartoFilho.mesa.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.1,
          },
          "same1"
        )
        .to(this.quarto.rotation, {
          y: 6.3,
          duration: 3.5,
          onComplete: resolve,
        });
    });
  }

  onScroll(e) {
    if (e.deltaY > 0) {
      console.log("evento adicionado");
      window.removeEventListener("wheel", this.scrollUmaVez);
      this.comecaIntroducao();
    }
  }

  introducao() {
    this.scrollUmaVez = this.onScroll.bind(this);
    window.addEventListener("wheel", this.scrollUmaVez);
  }
  async comecaIntroducao() {
    document.querySelector(".titulo-terceiro-titulo").style.color =
      "transparent";

    document
      .querySelector(".imagemFlecha")
      .removeChild(document.querySelector(".flecha"));
    await this.intro();
    this.emit("acabouAnimacao");
    document.body.style.overflow = "inherit";
    document.querySelector(".titulo-main-titulo").style.color =
      "var(--cor-texto)";
    document.querySelector(".titulo-main-descricao").style.color =
      "var(--cor-texto)";
    document.querySelector(".titulo-segundo-titulo").style.color =
      "var(--cor-texto)";
    document.querySelector(".titulo-segundo-descricao").style.color =
      "var(--cor-texto)";
  }
}
