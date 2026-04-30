import {describe, expect, test} from '@jest/globals';
import { BatalhaRpg } from './batalha';
import { GuerreiroRpg } from './guerreiro';
import { InimigoRpg } from './inimigo';

describe('Quando uma batalha é encerrada', () => {
  test('Deve retornar derrota quando os atributos do personagem forem menores que os do inimigo', () => {
    const batalha = new BatalhaRpg();
    const personagem = new GuerreiroRpg("Teste", "Guerreiro", "Jogador1", 5, 2, 10, 20);
    const inimigo = new InimigoRpg("John Wick", 15, 8, 30, 40);

    const resultado = batalha.iniciarBatalha(personagem, inimigo);
    expect(resultado).toBe("derrota");
  });

  test('Deve retornar vitória quando os atributos do personagem forem maiores que os do inimigo', () => {
    const batalha = new BatalhaRpg();
    const personagem = new GuerreiroRpg("Teste", "Guerreiro", "Jogador1", 20, 10, 40, 50);
    const inimigo = new InimigoRpg("John Wick", 5, 2, 10, 15);

    const resultado = batalha.iniciarBatalha(personagem, inimigo);
    expect(resultado).toBe("vitoria");
  });

  test('Deve retornar a mensagem correta de acordo com o resultado da batalha', () => {
    const batalha = new BatalhaRpg();
    const personagem = new GuerreiroRpg("Teste", "Guerreiro", "Jogador1", 10, 5, 20, 30);
    const inimigo = new InimigoRpg("John Wick", 10, 5, 20, 30);

    const mensagem = batalha.obterMensagemResultado(personagem, inimigo);
    expect(["O personagem morreu.", "Ganhamos a batalha!", "A batalha terminou empatada."]).toContain(mensagem);
  });
});



