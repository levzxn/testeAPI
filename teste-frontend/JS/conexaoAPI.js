async function getAluno(){
    const conexao = await fetch('http://127.0.0.1:8000/alunos/')
    const retornoJson = await conexao.json()
    return retornoJson
}

async function postAluno(nome, rg, cpf, dataNasc){
    const conexao = await fetch('http://127.0.0.1:8000/alunos/',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            rg: rg, 
            cpf: cpf,
            data_nascimento: data_nascimento,
        })
    })
    const retornoJson = await conexao.json()
    return retornoJson
}

export const conexaoAPI = {
    getAluno,
    postAluno   
}