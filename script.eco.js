//Conectar com a API utilizando o FETCH

fetch ('dados.eco.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

    document.getElementById('imagem').innerHTML = corpo.imagem
    document.getElementById('nome').innerHTML = corpo.nome
    document.getElementById('disco').innerHTML = corpo.album
    document.getElementById('estilo').innerHTML = corpo.style
    document.getElementById('preco').innerHTML = corpo.price
    document.getElementById('imagem2').innerHTML = corpo.imagem2
    document.getElementById('nome2').innerHTML = corpo.nome2
    document.getElementById('disco2').innerHTML = corpo.album2
    document.getElementById('estilo2').innerHTML = corpo.style2
    document.getElementById('preco2').innerHTML = corpo.price2
    document.getElementById('imagem3').innerHTML = corpo.imagem3
    document.getElementById('nome3').innerHTML = corpo.nome3
    document.getElementById('disco3').innerHTML = corpo.album3
    document.getElementById('estilo3').innerHTML = corpo.style3
    document.getElementById('preco3').innerHTML = corpo.price3
    
})