async function getAluno(){
    const conexao = await fetch('url-da-api')
    const retornoJson = await conexao.json()
    return retornoJson
}

async function postAluno(nome, rg, cpf, dataNasc){
    conexao = await fetch('url-da-api',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            rg: rg, 
            cpf: cpf,
            dataNasc: dataNasc,
        })
    })
    const retornoJson = await conexao.json()
    return retornoJson
}

export const exportarConexao = {
    getAluno,
    postAluno   
}