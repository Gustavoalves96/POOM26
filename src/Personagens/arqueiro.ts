import { PersonagemRpg } from "./Personagem";

export class ArqueiroRpg extends PersonagemRpg {
 

  constructor(nome: string, classe: string, jogador: string, nivel: number, armaduraBase: number, ataqueBase: number, vidaBase: number) {
    super(nome, classe, jogador, nivel, armaduraBase, ataqueBase, vidaBase);
  }

    subirNivel(): void {
        this.nivel += 1;
        this.armaduraBase += 3;
        this.ataqueBase += 5;
        this.vidaBase += 15;
    }
}
