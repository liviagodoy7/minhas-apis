//Função para consumir API
function buscar(){
    //Carrega o JSON e processa os dados
    fetch('dados.json').then(resposta => resposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value;
        var encontrado = false;
        corpo.forEach(pessoa => {
            if(identificador == pessoa.cpf) {
                var link1 = `<a href="${pessoa.link}">Visite nosso site</a>`;
                document.getElementById('imagem').innerHTML = pessoa.imagem;
                document.getElementById('nome').innerHTML = pessoa.nome;
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
                document.getElementById('cidade').innerHTML = pessoa.cidade;
                document.getElementById('pais').innerHTML = pessoa.pais;
                document.getElementById('link').innerHTML = pessoa.link1;
               
                document.getElementById('erro').innerHTML = "";
                encontrado = true;
                }
        })
        if (!encontrado) {
            document.getElementById('erro').innerHTML = "Registro Inválido";
        }
        
        

    
    console.log(corpo)
    
    });
}
//     var identificador = document.getElementById('valor').value;
    
    

    


// //Link com JQUERY
var link1 = `<a href="${dados1.link}">Visite nosso site</a>`;
fetch(`https://economia.awesomeapi.com.br/last/USD-BRL `).then(resposta=> {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = economia.USDBRL.bid;
    document.getElementById('valorDia').innerHTML = economia.USDBRL.high;
    document.getElementById('MvalorDia').innerHTML = economia.USDBRL.low;
})