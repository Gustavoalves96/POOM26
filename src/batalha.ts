import { InimigoRpg } from "./inimigo";
import { ArqueiroRpg, GuerreiroRpg, MagoRpg } from "./personagem";

type PersonagemRpg = GuerreiroRpg | MagoRpg | ArqueiroRpg;

export type ResultadoBatalha = "vitoria" | "derrota" | "empate";

export class BatalhaRpg {
	private calcularAtributosTotais(personagem: PersonagemRpg | InimigoRpg): number {
		return personagem.nivel + personagem.armaduraBase + personagem.ataqueBase + personagem.vidaBase;
	}

	iniciarBatalha(personagem: PersonagemRpg, inimigo: InimigoRpg): ResultadoBatalha {
		const atributosPersonagem = this.calcularAtributosTotais(personagem);
		const atributosInimigo = this.calcularAtributosTotais(inimigo);

		if (atributosInimigo > atributosPersonagem) {
			return "derrota";
		}

		if (atributosInimigo < atributosPersonagem) {
			return "vitoria";
		}

		return "empate";
	}

	obterMensagemResultado(personagem: PersonagemRpg, inimigo: InimigoRpg): string {
		const resultado = this.iniciarBatalha(personagem, inimigo);

		if (resultado === "derrota") {
			return "O personagem morreu.";
		}

		if (resultado === "vitoria") {
			return "Ganhamos a batalha!";
		}

		return "A batalha terminou empatada.";
	}
}