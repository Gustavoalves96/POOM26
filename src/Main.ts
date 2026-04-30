import prompt from "prompt-sync";
import { GuerreiroRpg } from "./guerreiro";
import { MagoRpg } from "./mago";
import { ArqueiroRpg } from "./arqueiro";
import { gerarInimigoAleatorio } from "./inimigo";
import { BatalhaRpg } from "./batalha";

const teclado = prompt();
const guerreiro: GuerreiroRpg = new GuerreiroRpg("", "Guerreiro", "Gustavo", 1, 20, 10, 150);
const mago: MagoRpg = new MagoRpg("", "Mago", "Gustavo", 1, 10, 20, 100);
const arqueiro: ArqueiroRpg = new ArqueiroRpg("", "Arqueiro", "Gustavo", 1, 15, 15, 120);
const batalhaRpg = new BatalhaRpg();
let personagemSelecionado: GuerreiroRpg | MagoRpg | ArqueiroRpg = guerreiro;

function subirNivelGuerreiro(personagem: GuerreiroRpg) {
    personagem.subirNivelG();
}

function subirNivelMago(personagem: MagoRpg) {
    personagem.subirNivelM();
}

function subirNivelArqueiro(personagem: ArqueiroRpg) {
    personagem.subirNivelA();
}

function subirNivel(personagem: GuerreiroRpg | MagoRpg | ArqueiroRpg): void {
    if (personagem instanceof GuerreiroRpg) {
        subirNivelGuerreiro(personagem);
        return;
    }

    if (personagem instanceof MagoRpg) {
        subirNivelMago(personagem);
        return;
    }

    subirNivelArqueiro(personagem);
}

function definirNome(personagem: GuerreiroRpg | MagoRpg | ArqueiroRpg) {
    try {
        const nomePersonagem = teclado("Nome do personagem: ").trim();
        personagem.definirNome(nomePersonagem);
    } catch (e) {
        console.log((e as Error).message);
    }
}

function definirJogador(personagem: GuerreiroRpg | MagoRpg | ArqueiroRpg) {
    try {
        const jogadorNome = teclado("Nome do jogador: ").trim();
        personagem.definirJogador(jogadorNome);
    } catch (e) {
        console.log((e as Error).message);
    }
}

function validarFicha(personagem: GuerreiroRpg | MagoRpg | ArqueiroRpg) {
    try {
        personagem.validarFicha();
    } catch (e) {
        console.log((e as Error).message);
    }
}

while (true) {
    console.log("\n Escolha a classe do seu personagem: ");
    console.log(" 1. Guerreiro: ");
    console.log(" 2. Mago: ");
    console.log(" 3. Arqueiro: ");
    console.log(" 4. Definir Nome do Personagem: ");
    console.log(" 5. Nome do Jogador: ");
    console.log(" 6. Exibir ficha do personagem: ");
    console.log(" 7. Subir nível do personagem: ");
    console.log(" 8. Iniciar batalha: ");
    console.log(" 9. ")

    const escolha = +teclado("Digite a opção: ");

    switch (escolha) {
        case 1:
            personagemSelecionado = guerreiro;
            console.log(`Classe selecionada: ${personagemSelecionado.obterClasse()}`);
            teclado("Pressione Enter para continuar...");
            break;

        case 2:
            personagemSelecionado = mago;
            console.log(`Classe selecionada: ${personagemSelecionado.obterClasse()}`);
            teclado("Pressione Enter para continuar...");
            break;

        case 3:
            personagemSelecionado = arqueiro;
            console.log(`Classe selecionada: ${personagemSelecionado.obterClasse()}`);
            teclado("Pressione Enter para continuar...");
            break;

        case 4:
            definirNome(personagemSelecionado);
            teclado("Pressione Enter para continuar...");
            break;

        case 5:
            definirJogador(personagemSelecionado);
            teclado("Pressione Enter para continuar...");
            break;

        case 6:
            validarFicha(personagemSelecionado);
            console.table(personagemSelecionado);
            teclado("Pressione Enter para continuar...");
            break;

        case 7:
            subirNivel(personagemSelecionado);
            console.log("=".repeat(40));
            console.log(`NÍVEL ATUAL: ${personagemSelecionado.obterNivel()}`);
            console.log("=".repeat(40));
            teclado("Pressione Enter para continuar...");
            break;

        case 8:
            const inimigo = gerarInimigoAleatorio();
            console.log("=".repeat(40));
            console.log(`BATALHA INICIADA: ${personagemSelecionado.obterNome()} VS ${inimigo.obterTipo()}`);
            console.log("-".repeat(40));
            console.log(batalhaRpg.obterMensagemResultado(personagemSelecionado, inimigo));
            console.log("=".repeat(40));
            teclado("Pressione Enter para continuar...");
            break;

        

        default:
            console.log("Opção inválida");

            break;
    }
}