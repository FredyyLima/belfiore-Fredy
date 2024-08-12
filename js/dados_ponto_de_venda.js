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

function carregarBairros() {
    var cidade = document.getElementById('cidade').value;
    var bairros = {
        'São Paulo': ['Centro_SP', 'Vila Mariana', 'Itaim Bibi'],
        'Curitiba': ['Centro_CWB', 'Pinheirinho', 'Bacacheri'],
        'Campinas': ['Centro_CAMP', 'Bairro2', 'Bairro3'],
        'Santos': ['Centro_SNT', 'Bairro4', 'Bairro5'],
        'Londrina': ['Centro_LOND', 'Bairro6', 'Bairro7'],
        'Maringá': ['Centro_MGF', 'Bairro8', 'Bairro9']
        // outras cidades e seus bairros
    };
    
    var bairroSelect = document.getElementById('bairro');
    bairroSelect.innerHTML = '<option value="">Selecione o Bairro</option>';
    
    if (cidade) {
        bairros[cidade].forEach(function(bairro) {
            var option = document.createElement('option');
            option.value = bairro;
            option.textContent = bairro;
            bairroSelect.appendChild(option);
        });
    }
}

function mostrarPontosDeVenda() {


    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    
        // Verifique se os valores estão sendo capturados corretamente
        console.log("Estado:", estado);
        console.log("Cidade:", cidade);
        console.log("Bairro:", bairro);

    gerarPontosDeVenda(estado, cidade, bairro);
}

// Exemplo de lista de objetos que representam os estabelecimentos
const estabelecimentos = [
    {
        nome: "Sorveteria BelFiore",
        endereco: "Rua teste, 123 - bairro: teste - Cidade: Teste - Estado: Teste",
        telefone: "(41)1234-5678",
        whatsapp: "(41)99999-9999",
        email: "teste@testando.com.br",
        link: "https://g.co/kgs/JTZrx5w",
        estado: "SP",
        cidade: "São Paulo",
        bairro: "Centro_SP"
    },
    {
        nome: "Sorveteria Tropical",
        endereco: "Av. Brasil, 456 - bairro: Centro - Cidade: Curitiba - Estado: PR",
        telefone: "(41)4444-4444",
        whatsapp: "",
        email: "tropical@testando.com.br",
        link: "https://g.co/kgs/TropicalTest",
        estado: "SP",
        cidade: "São Paulo",
        bairro: "Centro_SP"
    },
    {
        nome: "Sorveteria Tropical",
        endereco: "Av. Brasil, 456 - bairro: Centro - Cidade: Curitiba - Estado: PR",
        telefone: "(41)4444-4444",
        whatsapp: "",
        email: "tropical@testando.com.br",
        link: "https://g.co/kgs/TropicalTest",
        estado: "SP",
        cidade: "São Paulo",
        bairro: "Centro_SP"
    },
    {
        nome: "Sorveteria Tropical",
        endereco: "Av. Brasil, 456 - bairro: Centro - Cidade: Curitiba - Estado: PR",
        telefone: "(41)4444-4444",
        whatsapp: "",
        email: "tropical@testando.com.br",
        link: "https://g.co/kgs/TropicalTest",
        estado: "PR",
        cidade: "Curitiba",
        bairro: "Centro_CWB"
    },
    {
        nome: "Sorveteria Tropical",
        endereco: "Av. Brasil, 456 - bairro: Centro - Cidade: Curitiba - Estado: PR",
        telefone: "(41)4444-4444",
        whatsapp: "",
        email: "tropical@testando.com.br",
        link: "https://g.co/kgs/TropicalTest",
        estado: "SP",
        cidade: "São Paulo",
        bairro: "Centro_SP"
    },
    {
        nome: "Sorveteria Tropical",
        endereco: "Av. Brasil, 456 - bairro: Centro - Cidade: Curitiba - Estado: PR",
        telefone: "(41)4444-4444",
        whatsapp: "",
        email: "tropical@testando.com.br",
        link: "https://g.co/kgs/TropicalTest",
        estado: "PR",
        cidade: "Maringá",
        bairro: "Bairro9"
    },
    {
        nome: "Sorveteria Tropical",
        endereco: "Av. Brasil, 456 - bairro: Centro - Cidade: Curitiba - Estado: PR",
        telefone: "(41)4444-4444",
        whatsapp: "",
        email: "tropical@testando.com.br",
        link: "https://g.co/kgs/TropicalTest",
        estado: "SP",
        cidade: "São Paulo",
        bairro: "Vila Mariana"
    },
    {
        nome: "Sorveteria Tropical",
        endereco: "Av. Brasil, 456 - bairro: Centro - Cidade: Curitiba - Estado: PR",
        telefone: "(41)4444-4444",
        whatsapp: "",
        email: "tropical@testando.com.br",
        link: "https://g.co/kgs/TropicalTest",
        estado: "PR",
        cidade: "Curitiba",
        bairro: "Pinheirinho"
    },
    {
        nome: "Sorveteria Tropical",
        endereco: "Av. Brasil, 456 - bairro: Centro - Cidade: Curitiba - Estado: PR",
        telefone: "(41)4444-4444",
        whatsapp: "",
        email: "tropical@testando.com.br",
        link: "https://g.co/kgs/TropicalTest",
        estado: "SP",
        cidade: "Campinas",
        bairro: "Centro_CAMP"
    },
    {
        nome: "Sorveteria Tropical",
        endereco: "Av. Brasil, 456 - bairro: Centro - Cidade: Curitiba - Estado: PR",
        telefone: "(41)4444-4444",
        whatsapp: "",
        email: "tropical@testando.com.br",
        link: "https://g.co/kgs/TropicalTest",
        estado: "PR",
        cidade: "Curitiba",
        bairro: "Pinheirinho"
    },
    // Adicione mais objetos conforme necessário
];

// Função para gerar a lista de pontos de venda
function gerarPontosDeVenda(estadoFiltro, cidadeFiltro, bairroFiltro) {

    console.log("Gerando pontos de venda para:", estadoFiltro, cidadeFiltro, bairroFiltro);



    const lista = document.getElementById('lista_pontos_de_venda');
    lista.innerHTML = ''; // Limpar a lista antes de adicionar novos itens

    let encontrouPontosDeVenda = false;

    estabelecimentos.forEach(estabelecimento => {
        // Filtrar com base nos parâmetros fornecidos
        if (
            (estadoFiltro === '' || estabelecimento.estado === estadoFiltro) &&
            (cidadeFiltro === '' || estabelecimento.cidade === cidadeFiltro) &&
            (bairroFiltro === '' || estabelecimento.bairro === bairroFiltro)
        ) {
            encontrouPontosDeVenda = true;
            var alinhamento = document.querySelector('#pontos_de_venda ul');

            alinhamento.style.justifyContent = 'space-between';
            // Criação dos elementos
            const li = document.createElement('li');
            const div = document.createElement('div');
            div.className = 'ponto_de_venda col-md-10';

            const img = document.createElement('img');
            img.src = "../food-code/images/localizacao.png";
            img.width = 200;
            img.height = 200;

            const pNome = document.createElement('p');
            pNome.id = 'nome';
            pNome.textContent = estabelecimento.nome;

            // Montar a estrutura
            div.appendChild(img);
            div.appendChild(pNome);
  

            if (estabelecimento.endereco) {
                const pEndereco = document.createElement('p');
                pEndereco.id = 'endereco';
                pEndereco.innerHTML = `<strong>Endereço:</strong> ${estabelecimento.endereco}`;
                div.appendChild(pEndereco);
            }

            if (estabelecimento.telefone) {
                const pTelefone = document.createElement('p');
                pTelefone.id = 'telefone';
                pTelefone.innerHTML = `<strong>Telefone:</strong> ${estabelecimento.telefone}`;
                div.appendChild(pTelefone);
            }

            if (estabelecimento.whatsapp) {
                const pWhatsapp = document.createElement('p');
                pWhatsapp.id = 'whatsapp';
                pWhatsapp.innerHTML = `<strong>Whatsapp:</strong> ${estabelecimento.whatsapp}`;
                div.appendChild(pWhatsapp);
            }

            if (estabelecimento.email) {
                const pEmail = document.createElement('p');
                pEmail.id = 'e-mail';
                pEmail.innerHTML = `<strong>E-mail:</strong> ${estabelecimento.email}`;
                div.appendChild(pEmail);
            }

            const btn = document.createElement('button');
            btn.className = 'btn btn-primary mb-10';
            btn.id = 'btn_form';
            btn.textContent = 'Como chegar?';
            btn.onclick = function() {
                window.location.href = estabelecimento.link;
            };
            
            div.appendChild(btn);

            li.appendChild(div);
            lista.appendChild(li);
        } 
    });

                // Se nenhum ponto de venda foi encontrado, exibe a mensagem
                if (!encontrouPontosDeVenda) {
                    var alinhamento = document.querySelector('#pontos_de_venda ul');

                    alinhamento.style.justifyContent = 'center';
                    alinhamento.style.textAlign = 'center';
                    const li = document.createElement('li');
                    const p = document.createElement('p');
                    p.innerHTML = `Nenhum ponto de venda encontrado no <strong>${bairroFiltro.replace('_', ' ')}</strong> em <strong>${cidadeFiltro}</strong>.`;
                    p.className = 'sem_ponto_de_venda';
                    li.appendChild(p);
                    lista.appendChild(li);

                    const li2 = document.createElement('li');
                    const p2 = document.createElement('p');

                    // Texto com cidade e bairro dinâmicos
                    p2.innerHTML = `Quer representar a BelFiore em <strong>${cidadeFiltro}</strong> no <strong>${bairroFiltro.replace('_', ' ')}</strong>? Clique no botão abaixo e preencha o formulário de cadastro que nossa equipe entrará em contato, o mais breve possível.`;
                    
                    p2.className = 'quer_ser_revendedor';
                    li2.appendChild(p2);
                    
                    // Criar o botão para o formulário de cadastro
                    const btnCadastro = document.createElement('button');
                    btnCadastro.className = 'btn btn-primary mb-10';
                    btnCadastro.textContent = 'Preencher formulário de cadastro';
                    
                    // Adicionar link ao botão
                    btnCadastro.onclick = function() {
                        window.location.href = 'trabalhe_conosco.html'; // Substitua pelo URL do formulário
                    };
                    btnCadastro.className = 'btn btn-primary mb-3'
                    btnCadastro.id="btn_form"
                    li2.appendChild(btnCadastro);
                    lista.appendChild(li2);
                }
}

// Chamar a função para gerar os pontos de venda quando a página carregar
// document.addEventListener('DOMContentLoaded', gerarPontosDeVenda);

