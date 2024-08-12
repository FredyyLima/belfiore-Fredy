function carregarCidades() {
    var estado = document.getElementById('estado').value;
    var cidades = {
        'SP': ['São Paulo', 'Campinas', 'Santos'],
        'PR': ['Curitiba', 'Londrina', 'Maringá']
        // outros estados e suas cidades
    };
    
    var cidadeSelect = document.getElementById('cidade');
    cidadeSelect.innerHTML = '<option value="">Selecione a Cidade</option>';
    
    if (estado) {
        cidades[estado].forEach(function(cidade) {
            var option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    }
}


function filtrarRepresentantes() {

    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;

    gerarRepresentantes(estado, cidade);
}

// Exemplo de lista de objetos que representam os estabelecimentos
const representantes = [
    {
        nome: "Frederico Carneiro Lima",
        cargo:"Vendedor",
        telefone:"(41)98862-7690",
        email: "frederico.lima@belfiorealimentos.com.br",
        estado: ["PR","SP"],
        cidade: ["Curitiba","Campinas"]
    },
    {
        nome: "Frederico Carneiro Lima2",
        cargo:"Vendedor",
        telefone:"(41)98862-7690",
        email: "frederico.lima@belfiorealimentos.com.br",
        estado: ["PR","SP"],
        cidade: ["Maringá","Santos"]
    }
    
];

function gerarRepresentantes(estadoFiltro, cidadeFiltro) {

    const lista = document.getElementById('representante');
    
    lista.innerHTML = ''; // Limpar a lista antes de adicionar novos itens

    let encontrouVendedor = false;

    representantes.forEach(representantes => {
        // Filtrar com base nos parâmetros fornecidos
        if (
            (estadoFiltro === '' || representantes.estado.includes(estadoFiltro)) &&
            (cidadeFiltro === '' || representantes.cidade.includes(cidadeFiltro))
        ) {
            encontrouVendedor = true;
            // var alinhamento = document.querySelector('#pontos_de_venda ul');

            // alinhamento.style.justifyContent = 'space-between';
            // Criação dos elementos
            const div = document.createElement('div')
            div.className = 'card card-orange'
            const divbody = document.createElement('div')
            divbody.className = 'card-body'

            lista.appendChild(div)
            div.appendChild(divbody)

            const pNome = document.createElement('p');
            pNome.id = 'nome';
            pNome.innerHTML = `<strong>Nome:</strong> ${representantes.nome}`;


            // Montar a estrutura
            divbody.appendChild(pNome);
  

            if (representantes.cargo) {
                const pcargo = document.createElement('p');
                pcargo.id = 'cargo';
                pcargo.innerHTML = `<strong>Cargo:</strong> ${representantes.cargo}`;
                divbody.appendChild(pcargo);
            }

            if (representantes.telefone) {
                const pTelefone = document.createElement('p');
                pTelefone.id = 'telefone';
                telefoneRepresentante = representantes.telefone.replace(/[\(\)\-\s]/g, '');
                pTelefone.innerHTML = `<strong>Telefone:</strong> <a href="https://wa.me/+55${telefoneRepresentante}">${representantes.telefone}</a>`;
                divbody.appendChild(pTelefone);
            }

            if (representantes.email) {
                const pEmail = document.createElement('p');
                pEmail.id = 'e-mail';
                pEmail.innerHTML = `<strong>E-mail:</strong> ${representantes.email}`;
                divbody.appendChild(pEmail);
            }

        } 
    });

                // Se nenhum ponto de venda foi encontrado, exibe a mensagem
                if (!encontrouVendedor) {
                    const div = document.createElement('div')
                    div.className = 'card card-orange'
                    const divbody = document.createElement('div')
                    divbody.className = 'card-body'
        
                    lista.appendChild(div)
                    div.appendChild(divbody)
        
                    const pNome = document.createElement('p');
                    pNome.id = 'nome';
                    pNome.innerHTML = `Não temos vendedor responsável pela cidade de ${cidadeFiltro}-${estadoFiltro}. <a href="blog.html">Clique Aqui</a> e fale conosco para melhor atedermos você!`;

                    // Montar a estrutura
                    divbody.appendChild(pNome);
                }
}