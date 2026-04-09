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