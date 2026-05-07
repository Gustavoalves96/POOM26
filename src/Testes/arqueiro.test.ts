import {describe, expect, test} from '@jest/globals';
import { ArqueiroRpg } from '../Personagens/arqueiro';

describe('ArqueiroRpg subirNivel', () => {
  test('subirNivel aumenta armaduraBase em 3', () => {
    const arqueiro = new ArqueiroRpg('Teste', 'Arqueiro', 'Jogador1', 1, 15, 15, 120);
    const armaduraAntes = arqueiro.obterArmaduraBase();
    const nivelAntes = arqueiro.obterNivel();
    arqueiro.subirNivel();
    expect(arqueiro.obterArmaduraBase()).toBe(armaduraAntes + 3);
    expect(arqueiro.obterNivel()).toBe(nivelAntes + 1);
  });
});