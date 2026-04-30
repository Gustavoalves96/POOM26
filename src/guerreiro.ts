export class GuerreiroRpg {
  private nome: string;
  private classe: string;
  private jogador: string;
  private nivel: number;
  private armaduraBase: number;
  private ataqueBase: number;
  private vidaBase: number;

  constructor(nome: string, classe: string, jogador: string, nivel: number, armaduraBase: number, ataqueBase: number, vidaBase: number) {
    this.nome = nome;
    this.classe = classe;
    this.jogador = jogador;
    this.nivel = nivel;
    this.armaduraBase = armaduraBase;
    this.ataqueBase = ataqueBase;
    this.vidaBase = vidaBase;
  }

    subirNivelG(): void {
        this.nivel += 1;
        this.armaduraBase += 5;
        this.ataqueBase += 3;
        this.vidaBase += 20;
    }

    definirNome(nome: string): void {
    if (!nome) throw new Error("NOME DO PERSONAGEM OBRIGATORIO");
    this.nome = nome;
  }

  definirJogador(jogador: string): void {
    if (!jogador) throw new Error("NOME DO JOGADOR OBRIGATORIO");
    this.jogador = jogador;
  }

  validarFicha(): void {
    if (!this.nome.trim() || !this.jogador.trim()) {
      throw new Error("ESCOLHA UM NOME PARA O PERSONAGEM E/OU JOGADOR!!");
    }
  }

  obterNome(): string {
    return this.nome;
  }

  obterClasse(): string {
    return this.classe;
  }

  obterJogador(): string {
    return this.jogador;
  }

  obterNivel(): number {
    return this.nivel;
  }

  obterArmaduraBase(): number {
    return this.armaduraBase;
  }

  obterAtaqueBase(): number {
    return this.ataqueBase;
  }

  obterVidaBase(): number {
    return this.vidaBase;
  }
}