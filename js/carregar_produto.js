const produtos = [
    {
        id:0,
        nome:'AÇAÍ NATIVO PREMIUM',
        descricao:'<strong>Ingredientes: </strong>Polpa de açaí, água, açúcar, açúcar líquido invertido, melhorador de cremosidade (dextrose, açúcar, amido e maltodextrina), mistura de corantes artificiais alimentícios (maltodextrina, corantes INS 123 e INS 133 e antiumectante INS 551) e estabilizantes e emulsificantes INS 415, INS 412 e INS 466.</br> <strong>NÃO CONTÉM GLUTEN</strong> </br><strong>ALÉRGICOS: PODE CONTER LEITE</strong>',
        infos:{
        '&nbsp;Valor energético (kcal)': [100,60,3],
        '&nbsp;Carboidratos (g)': [21,13,4],
        '&nbsp;&nbsp;Açúcares totais (g)': [17,10],
        '&nbsp;&nbsp;&nbsp;Açúcares adicionais (g)': [17,10,32],
        '&nbsp;Proteínas (g)': [0,0,0],
        '&nbsp;&nbsp;Gorduras totais (g)': [2.2,1.3,2],
        '&nbsp;&nbsp;&nbsp;Gorduras saturadas (g)': [0.7,0.4,2],
        '&nbsp;&nbsp;&nbsp;Gorduras trans (g)':[0,0,0],
        '&nbsp;Fibras alimentares (g)': [2.7,1.6,6],
        '&nbsp;Sódio (mg)': [0,0,0]
        },
        porcao:'3',
        tamanho:'220ML',
        img:'./images/Acai_BelFrozen_Nativo/BELFROZEN_NATIVO 500ML.png'
        },
        {
        id:1,
        nome:'AÇAÍ NATIVO PREMIUM',
        descricao:'<strong>Ingredientes: </strong>Polpa de açaí, água, açúcar, açúcar líquido invertido, melhorador de cremosidade (dextrose, açúcar, amido e maltodextrina), mistura de corantes artificiais alimentícios (maltodextrina, corantes INS 123 e INS 133 e antiumectante INS 551) e estabilizantes e emulsificantes INS 415, INS 412 e INS 466.</br> <strong>NÃO CONTÉM GLUTEN</strong>',
        infos:{
        '&nbsp;Valor energético (kcal)': [100,60,3],
        '&nbsp;Carboidratos (g)': [21,13,4],
        '&nbsp;&nbsp;Açúcares totais (g)': [17,10],
        '&nbsp;&nbsp;&nbsp;Açúcares adicionais (g)': [17,10,32],
        '&nbsp;Proteínas (g)': [0,0,0],
        '&nbsp;&nbsp;Gorduras totais (g)': [2.2,1.3,2],
        '&nbsp;&nbsp;&nbsp;Gorduras saturadas (g)': [0.7,0.4,2],
        '&nbsp;&nbsp;&nbsp;Gorduras trans (g)':[0,0,0],
        '&nbsp;Fibras alimentares (g)': [2.7,1.6,6],
        '&nbsp;Sódio (mg)': [0,0,0]
        },
        porcao:'8',
        tamanho:'500ML',
        img:'./images/Acai_BelFrozen_Nativo/BELFROZEN_NATIVO 500ML.png'
        },
];

// Este é o código que deve ser adicionado à página inicial, onde o produto é selecionado
// Você deve armazenar o nome do produto no localStorage ao clicar no produto
function selecionarProduto(nomeProduto) {
    localStorage.setItem('idProduto', nomeProduto);
    window.location.href = 'single-product.html';  // Redireciona para a página do produto
}

window.onload = function() {
    const produtoSelecionado = localStorage.getItem('idProduto');

   const index = produtos.findIndex((produtos) => {
        return +produtos.id === +produtoSelecionado
   })
   console.log(index)
   console.log(produtos[index].nome)
   console.log(produtos[index].descricao)
   console.log(produtos[index].img)
    if (index > -1) {
        // Preenchendo os elementos do HTML com os dados do produto
        document.getElementById('nome_produto').innerHTML = `<h4>${produtos[index].nome} - ${produtos[index].tamanho}</h4>`;
        document.getElementById('descricao_produto').innerHTML = `<p>${produtos[index].descricao}</p>`;
        document.getElementById('img_produto').innerHTML = `<img src="${produtos[index].img}" width="400px" height="400px">`

// Montando a tabela nutricional
let tabelaHtml = `<table border="1" style="width:100%; text-align:center;">
<thead>
    <tr>
        <th colspan="4" style="text-align: center">INFORMAÇÃO NUTRICIONAL </br>
        Porção por embalagem: Cerca de ${produtos[index].porcao}</br>
            Porção: 60 g (1 bola)
        </th>
    </tr>
    <tr>
        <th></th>
        <th style="text-align: center">100 g</th>
        <th style="text-align: center">60 g</th>
        <th style="text-align: center">% VD*</th>
    </tr>
</thead>
<tbody>`;

for (const [key, value] of Object.entries(produtos[index].infos)) {

    if (value[0] === undefined){
        value[0] = "-";
    }
    if (value[1] === undefined){
        value[1] = "-";
    }
    if (value[2] === undefined){
        value[2] = "-";
    }

tabelaHtml += `<tr>
  <td style="text-align:left;"><strong>${key}</strong></td>
  <td>${value[0]}</td>
  <td>${value[1]}</td>
  <td>${value[2]}</td>
</tr>`;
}

tabelaHtml += `<tr>
<td colspan="4" style="text-align:left;">* Percentual de valores diários fornecidos pela porção</td>
</tr>
</tbody>
</table>`;

document.getElementById('infos_produto').innerHTML = tabelaHtml;

    }
};


