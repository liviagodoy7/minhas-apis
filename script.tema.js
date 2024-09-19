let jogadores = []; // Inicializa a lista de jogadores

// Função para carregar os dados do JSON
fetch('dados.tema.json')
    .then(resposta => resposta.json())
    .then(corpo => {
        jogadores = corpo.jogadores; // Armazena os jogadores carregados
        exibirJogadores(); // Chama a função para exibir jogadores
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));

function exibirJogadores() {
    const containerJogadores = document.getElementById("players");
    containerJogadores.innerHTML = ''; // Limpa o container antes de adicionar novos jogadores

    jogadores.forEach(jogador => {
        const divJogador = document.createElement("div");
        divJogador.classList.add("player");
        divJogador.innerHTML = `
            <img src="${jogador.imagem}" alt="${jogador.nome}">
            <h2>${jogador.nome}</h2>
            <p>Posição: ${jogador.posicao}</p>
            <button onclick="mostrarInfoJogador(${jogador.id})">Ver Detalhes</button>
        `;
        containerJogadores.appendChild(divJogador);
    });
}

function mostrarInfoJogador(id) {
    const jogador = jogadores.find(j => j.id === id);
    const caixaInfo = document.getElementById("player-info");
    
    if (jogador) {
        caixaInfo.innerHTML = `
            <h2>${jogador.nome}</h2>
            <p><strong>Posição:</strong> ${jogador.posicao}</p>
            <p><strong>Idade:</strong> ${jogador.idade}</p> <!-- Adicionando idade -->
            <p><strong>Time:</strong> ${jogador.time}</p>
            <img src="${jogador.imagem}" alt="${jogador.nome}">
        `;
        caixaInfo.style.display = "block"; // Mostra a caixa de informações
    }
}
    