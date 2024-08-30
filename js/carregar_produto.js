
// Exemplo de lista de objetos que representam os estabelecimentos
const produtos = [
    {
        nome: "BEL FROZEN NATIVO",
        descricao:"Ingredientes: Polpa de açaí, água, base para preparo de sorbet açaí (fibra, edulcorante INS 965i e estabilizantes INS 466, INS 412, INS 415, INS 414 e INS 418) e mistura de corantes artificiais alimentícios (maltodextrina, corantes INS 123 e INS 133 e antiumectante INS 551). NÃO CONTÉM GLÚTEN.",
        infos:{
            "Valor Energético": [93,56,3],
            "Carboidrato":[32,19,6],
            "Açúcares totais": [0,0],
            "Açúcares adicionados": [0,0,0],
            "Proteínas": [0,0,0],
            "Gorduras totais": [1.8,1.1,2],
            "Gorduras saturadas": [0.5,0.3,2],
            "Gorduras trans": [0,0,0],
            "Fibras alimentares": [2.3,1.4,6],
            "Sódio": [14,8,0]
        },
        img: "./images/BELFROZEN_NATIVO.PNG",
    }
];

function mostrarProduto(produtoId) {
    localStorage.setItem('produtoSelecionado', produtoId);
    window.location.href = 'single-product.html';
}

// Na página de detalhes do produto
window.onload = function(produtoSelecionado) {
    console.log(produtoSelecionado)
    // Obtém o produto a partir do array 'produtos'
    const produto = produtos[produtoSelecionado];

    // Preenche o nome do produto
    document.getElementById('nome_produto').textContent = produto.nome;

    // Preenche a imagem do produto
    document.getElementById('img_produto').src = produto.img;

    // Preenche a descrição do produto
    document.getElementById('descricao_produto').textContent = produto.descricao;

    // Preenche as informações nutricionais
    let infosHtml = "";
    for (let chave in produto.infos) {
        infosHtml += `<strong>${chave}:</strong> ${produto.infos[chave].join(', ')}<br>`;
    }
    document.getElementById('infos_produto').innerHTML = infosHtml;
}