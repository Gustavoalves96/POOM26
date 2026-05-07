import {describe, expect, test} from '@jest/globals';
import { GuerreiroRpg } from '../Personagens/guerreiro';

describe('GuerreiroRpg subirNivel', () => {
  test('subirNivel aumenta armaduraBase em 5', () => {
    const guerreiro = new GuerreiroRpg('Teste', 'Guerreiro', 'Jogador1', 1, 10, 5, 30);
    const armaduraAntes = guerreiro.obterArmaduraBase();
    const nivelAntes = guerreiro.obterNivel();
    guerreiro.subirNivel();
    expect(guerreiro.obterArmaduraBase()).toBe(armaduraAntes + 5);
    expect(guerreiro.obterNivel()).toBe(nivelAntes + 1);
  });
  test('subirNivel aumenta vidaBase em 20', () => {
    const guerreiro = new GuerreiroRpg('Teste', 'Guerreiro', 'Jogador1', 1, 10, 5, 30);
    const vidaAntes = guerreiro.obterVidaBase();
    const nivelAntes = guerreiro.obterNivel();
    guerreiro.subirNivel();
    expect(guerreiro.obterVidaBase()).toBe(vidaAntes + 20);
    expect(guerreiro.obterNivel()).toBe(nivelAntes + 1);
  });
});

