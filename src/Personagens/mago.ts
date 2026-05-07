import { PersonagemRpg } from "./Personagem";

export class MagoRpg extends PersonagemRpg {
  
  constructor(nome: string, classe: string, jogador: string, nivel: number, armaduraBase: number, ataqueBase: number, vidaBase: number) {
    super(nome, classe, jogador, nivel, armaduraBase, ataqueBase, vidaBase);
    
  }

    subirNivel(): void {
        this.nivel += 1;
        this.armaduraBase += 2;
        this.ataqueBase += 8;
        this.vidaBase += 10;
    }
}
