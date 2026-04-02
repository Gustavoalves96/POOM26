export class GuerreiroRpg {
    constructor(public nome: string, public classe: string, public jogador: string, public nivel: number, public armaduraBase: number, public ataqueBase: number, public vidaBase: number) {}

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
    constructor(public nome: string, public classe: string, public jogador: string, public nivel: number, public armaduraBase: number, public ataqueBase: number, public vidaBase: number) {}

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
    constructor(public nome: string, public classe: string, public jogador: string, public nivel: number, public armaduraBase: number, public ataqueBase: number, public vidaBase: number) {}

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