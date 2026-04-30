import { InimigoRpg } from "./inimigo";
import { GuerreiroRpg } from "./guerreiro";
import { MagoRpg } from "./mago";
import { ArqueiroRpg } from "./arqueiro";

type PersonagemRpg = GuerreiroRpg | MagoRpg | ArqueiroRpg;

export type ResultadoBatalha = "vitoria" | "derrota" | "empate";

export class BatalhaRpg {
	private calcularAtributosTotais(personagem: PersonagemRpg | InimigoRpg): number {
		return personagem.obterNivel() + personagem.obterArmaduraBase() + personagem.obterAtaqueBase() + personagem.obterVidaBase();
	}

	private gerarVariacao(base: number): number {
		const faixa = Math.max(5, Math.round(base * 0.08));
		const sorte = Math.floor(Math.random() * (faixa * 2 + 1)) - faixa;
		return base + sorte;
	}

	private aplicarCritico(poder: number, chance: number): number {
		if (Math.random() >= chance) {
			return poder;
		}

		return Math.round(poder * 1.25);
	}

	iniciarBatalha(personagem: PersonagemRpg, inimigo: InimigoRpg): ResultadoBatalha {
		const atributosPersonagem = this.calcularAtributosTotais(personagem);
		const atributosInimigo = this.calcularAtributosTotais(inimigo);

		let poderPersonagem = this.gerarVariacao(atributosPersonagem);
		let poderInimigo = this.gerarVariacao(atributosInimigo);

		const diferenca = Math.abs(atributosPersonagem - atributosInimigo);
		const chanceCritico = diferenca <= 20 ? 0.22 : 0.1;

		poderPersonagem = this.aplicarCritico(poderPersonagem, chanceCritico);
		poderInimigo = this.aplicarCritico(poderInimigo, chanceCritico);

		if (poderInimigo > poderPersonagem) {
			return "derrota";
		}

		if (poderInimigo < poderPersonagem) {
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