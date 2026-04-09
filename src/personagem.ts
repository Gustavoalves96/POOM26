export class GuerreiroRpg {
  nome: string;
  classe: string;
  jogador: string;
  nivel: number;
  armaduraBase: number;
  ataqueBase: number;
  vidaBase: number;

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
}

export class MagoRpg {
  nome: string;
  classe: string;
  jogador: string;
  nivel: number;
  armaduraBase: number;
  ataqueBase: number;
  vidaBase: number;

  constructor(nome: string, classe: string, jogador: string, nivel: number, armaduraBase: number, ataqueBase: number, vidaBase: number) {
    this.nome = nome;
    this.classe = classe;
    this.jogador = jogador;
    this.nivel = nivel;
    this.armaduraBase = armaduraBase;
    this.ataqueBase = ataqueBase;
    this.vidaBase = vidaBase;
  }

    subirNivelM(): void {
        this.nivel += 1;
        this.armaduraBase += 2;
        this.ataqueBase += 8;
        this.vidaBase += 10;
    }

    definirNome(nome: string): void {
    const valor = nome.trim();
    if (!valor) throw new Error("NOME DO PERSONAGEM OBRIGATORIO");
    this.nome = valor;
  }

  definirJogador(jogador: string): void {
    const valor = jogador.trim();
    if (!valor) throw new Error("NOME DO JOGADOR OBRIGATORIO");
    this.jogador = valor;
  }

  validarFicha(): void {
    if (!this.nome.trim() || !this.jogador.trim()) {
      throw new Error("ESCOLHA UM NOME PARA O PERSONAGEM E/OU JOGADOR!!");
    }
  }
}

export class ArqueiroRpg {
  nome: string;
  classe: string;
  jogador: string;
  nivel: number;
  armaduraBase: number;
  ataqueBase: number;
  vidaBase: number;

  constructor(nome: string, classe: string, jogador: string, nivel: number, armaduraBase: number, ataqueBase: number, vidaBase: number) {
    this.nome = nome;
    this.classe = classe;
    this.jogador = jogador;
    this.nivel = nivel;
    this.armaduraBase = armaduraBase;
    this.ataqueBase = ataqueBase;
    this.vidaBase = vidaBase;
  }

    subirNivelA(): void {
        this.nivel += 1;
        this.armaduraBase += 3;
        this.ataqueBase += 5;
        this.vidaBase += 15;
    }

    definirNome(nome: string): void {
    const valor = nome.trim();
    if (!valor) throw new Error("NOME DO PERSONAGEM OBRIGATORIO");
    this.nome = valor;
  }

  definirJogador(jogador: string): void {
    const valor = jogador.trim();
    if (!valor) throw new Error("NOME DO JOGADOR OBRIGATORIO");
    this.jogador = valor;
  }

  validarFicha(): void {
    if (!this.nome.trim() || !this.jogador.trim()) {
      throw new Error("ESCOLHA UM NOME PARA O PERSONAGEM E/OU JOGADOR!!");
    }
  }
}