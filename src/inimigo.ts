export class InimigoRpg {
    tipo: string;
    nivel: number;
    armaduraBase: number;
    ataqueBase: number;
    vidaBase: number;

    constructor(tipo: string, nivel: number, armaduraBase: number, ataqueBase: number, vidaBase: number) {
        this.tipo = tipo;
        this.nivel = nivel;
        this.armaduraBase = armaduraBase;
        this.ataqueBase = ataqueBase;
        this.vidaBase = vidaBase;
    }
}

const tiposInimigo = ["Cobra Gigante", "Lagarto Mortal", "John Wick"] as const;

function numeroAleatorio(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

export function gerarInimigoAleatorio(): InimigoRpg {
    const tipo = tiposInimigo[numeroAleatorio(0, tiposInimigo.length - 1)] ?? "Cobra Gigante";

    const nivel = numeroAleatorio(1, 10);
    const armaduraBase = numeroAleatorio(8, 60);
    const ataqueBase = numeroAleatorio(8, 38);
    const vidaBase = numeroAleatorio(90, 240);

    return new InimigoRpg(tipo, nivel, armaduraBase, ataqueBase, vidaBase);
}