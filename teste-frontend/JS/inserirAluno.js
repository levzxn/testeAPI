import { conexaoAPI } from "./conexaoAPI.js"

const nome = document.querySelector('[data-nome]').value
const rg = document.querySelector('[data-rg]').value
const cpf = document.querySelector('[data-cpf]').value
const dataNasc = document.querySelector('[data-dataNasc]').value
const botaoVerAlunos = document.querySelector('botao-ver')

async function inserirAluno(){
    const conexao = conexaoAPI.postAluno(nome, rg, cpf, dataNasc)
}