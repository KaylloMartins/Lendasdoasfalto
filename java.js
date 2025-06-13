// Dados dos modelos
const carros = [
    {
        nome: "Mustang GT500",
        imagem: "imagens/mustang/gt500.jpg",
        cor: "--mustang-red",
        specs: {
            motor: "5.2L V8 Supercharged",
            potencia: "760 HP",
            cambio: "7-speed dual-clutch"
        }
    },
    // ... outros modelos
];

// Gerador de cards
function criarCards() {
    const container = document.querySelector('.modelos-destaque');
    
    carros.forEach(carro => {
        const card = document.createElement('div');
        card.className = 'modelo-card';
        card.style.borderTop = `5px solid var(${carro.cor})`;
        
        card.innerHTML = `
            <img src="${carro.imagem}" alt="${carro.nome}">
            <h2 class="modelo-title">${carro.nome}</h2>
        `;
        
        container.appendChild(card);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', criarCards);