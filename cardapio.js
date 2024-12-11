const apiUrl = 'https://tech4japa.fly.dev/produtos';

async function fetchProdutos() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        const produtos = await response.json();
        exibirProdutos(produtos);
    } catch (error) {
        console.error(error);
    }
}

function exibirProdutos(produtos) {
    const linha1 = document.querySelector('.linha1');
    const linha2 = document.querySelector('.linha2');

    const meusProdutos = produtos.filter(produto => {
        return ['Sashimi', 'Hot Roll', 'Niguiri', 'Yakissoba', 'Temaki', 'Poke'].includes(produto.nome);
    });

    linha1.innerHTML = '';
    linha2.innerHTML = '';

    meusProdutos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add(index < 3 ? 'produtos1' : 'produtos2');

        produtoDiv.innerHTML = `
            <img id="foto-produto" src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <hr>
            <br>
            <p>${produto.descricao}<br><br></p>
            <a href="detalhes.html#${produto.nome.toLowerCase()}">
                <button id="detalhes">Detalhes</button>
            </a>
        `;

        if (index < 3) {
            linha1.appendChild(produtoDiv);
        } else {
            linha2.appendChild(produtoDiv);
        }
    });
}

