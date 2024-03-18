import { conexaoAPI } from "./conexaoAPI.js"

const nome = document.querySelector('[data-nome]').value
const rg = document.querySelector('[data-rg]').value
const cpf = document.querySelector('[data-cpf]').value
const dataNasc = document.querySelector('[data-dataNasc]').value
const botaoVerAlunos = document.querySelector('data-botao-envio')

async function inserirAluno(evento){
    evento.preventDefault()
    const conexao = await conexaoAPI.postAluno(nome, rg, cpf, dataNasc)
}

botaoVerAlunos.addEventListener('click', async evento => await inserirAluno(evento))