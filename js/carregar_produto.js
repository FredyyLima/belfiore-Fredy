const produtos = [
    {
        id: 0,
        nome: "BEL FROZEN NATIVO",
        descricao:"<strong>Ingredientes:</strong> Polpa de açaí, água, base para preparo de sorbet açaí (fibra, edulcorante INS 965i e estabilizantes INS 466, INS 412, INS 415, INS 414 e INS 418) e mistura de corantes artificiais alimentícios (maltodextrina, corantes INS 123 e INS 133 e antiumectante INS 551). <strong>NÃO CONTÉM GLÚTEN.</strong>",
        infos:{
            "&nbsp;Valor Energético (kcal)": [93,56,3],
            "&nbsp;Carboidrato (g)":[32,19,6],
            "&nbsp;&nbsp;Açúcares totais (g)": [0,0],
            "&nbsp;&nbsp;&nbsp;Açúcares adicionados (g)": [0,0,0],
            "&nbsp;Proteínas (g)": [0,0,0],
            "&nbsp;&nbsp;Gorduras totais (g)": [1.8,1.1,2],
            "&nbsp;&nbsp;&nbsp;Gorduras saturadas (g)": [0.5,0.3,2],
            "&nbsp;&nbsp;&nbsp;Gorduras trans (g)": [0,0,0],
            "&nbsp;Fibras alimentares (g)": [2.3,1.4,6],
            "&nbsp;Sódio (mg)": [14,8,0]
        },
        img: "./images/Acai_BelFrozen_Nativo/BELFROZEN_NATIVO.PNG",
    },
    {
        id: 1,
        nome: "BEL FROZEN BANANA +GUARANÁ",
        descricao:"<strong>Ingredientes:</strong> Polpa de açaí, água, açúcar, açúcar líquido invertido,\
         melhorador de cremosidade (dextrose, açúcar, amido e maltodextrina), pó para gelados comestíveis\
          sabor banana (açúcar, amido de milho (Bacillus thuringiensis, Streptomyces viridochromogenes,\
           Agrobacterium tumefaciens, Zea mays, Sphingobium herbicidorovans, Diabrotica virgifera, Dicossoma sp,\
            Thermoccocales spp., Bacillus substilis, Stenotrophomonas maltophilia), aromatizante sintético idêntico\
             ao natural, corantes artificiais: INS 110 e <strong>amarelo tartrazina (INS 102)</strong>), extrato natural de guaraná,\
              aroma idêntico natural guaraná, mistura de corantes artificiais alimentícios (maltodextrina,\
               corantes INS 123 e INS 133 e antiumectante INS 551), ácido cítrico e estabilizantes e emulsificantes\
                INS 415, INS 412 e INS 466. Contém sulfito. </br> <strong>NÃO CONTÉM GLÚTEN.</strong> </br> <strong>ALÉRGICOS: PODE CONTER LEITE</strong>",
        infos:{
            "&nbsp;Valor Energético (kcal)": [93,56,3],
            "&nbsp;Carboidrato (g)":[32,19,6],
            "&nbsp;&nbsp;Açúcares totais (g)": [0,0],
            "&nbsp;&nbsp;&nbsp;Açúcares adicionados (g)": [0,0,0],
            "&nbsp;Proteínas (g)": [0,0,0],
            "&nbsp;&nbsp;Gorduras totais (g)": [1.8,1.1,2],
            "&nbsp;&nbsp;&nbsp;Gorduras saturadas (g)": [0.5,0.3,2],
            "&nbsp;&nbsp;&nbsp;Gorduras trans (g)": [0,0,0],
            "&nbsp;Fibras alimentares (g)": [2.3,1.4,6],
            "&nbsp;Sódio (mg)": [14,8,0]
        },
        img: images/BELFROZEN_BANANA.PNG,
    }
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
        document.getElementById('nome_produto').innerHTML = `<h4>${produtos[index].nome}</h4>`;
        document.getElementById('descricao_produto').innerHTML = `<p>${produtos[index].descricao}</p>`;
        document.getElementById('img_produto').innerHTML = `<img src="./${produtos[index].img}" width="400px" height="400px">`

// Montando a tabela nutricional
let tabelaHtml = `<table border="1" style="width:100%; text-align:center;">
<thead>
    <tr>
        <th colspan="4" style="text-align: center">INFORMAÇÃO NUTRICIONAL </br>
        Porção por embalagem: Cerca de 8</br>
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


