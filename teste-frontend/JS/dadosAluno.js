import { conexaoAPI } from "./conexaoAPI.js";
const containerDados = document.querySelector('[data-aluno]')
const botaoVer = document.querySelector('[data-ver]')

async function listarDados(){
    const alunoDados = await conexaoAPI.getAluno()
    alunoDados.forEach(aluno => {
        containerDados.innerHTML =
        `
        <li class="dado__aluno">
            <p class="nome__aluno">${aluno.nome}</p>
            <p class="rg__aluno">${aluno.rg}</p>
            <p class="cpf__aluno">${aluno.cpf}</p>
            <p class="dataNasc__aluno">${aluno.data_nascimento}</p>
        </li>
        `
    });
}

botaoVer.addEventListener('click', async () => await listarDados())