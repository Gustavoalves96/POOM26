import { PersonagemRpg } from "./Personagem";

export class GuerreiroRpg extends PersonagemRpg {
 

  constructor(nome: string, classe: string, jogador: string, nivel: number, armaduraBase: number, ataqueBase: number, vidaBase: number) {
    super(nome, classe, jogador, nivel, armaduraBase, ataqueBase, vidaBase);
  }

    subirNivel(): void {
        this.nivel += 1;
        this.armaduraBase += 5;
        this.ataqueBase += 3;
        this.vidaBase += 20;
    }
}