
function carregarCidades() {
    var estado = document.getElementById('estado').value;
    var cidades = {
        'SP': ['Adolfo','Aguaí','Águas da Prata','Águas de Lindóia','Águas de Santa Bárbara','Águas de São Pedro','Agudos','Alambari','Alfredo Marcondes','Altair','Altinópolis','Alto Alegre','Alumínio','Álvares Florence',
            'Álvares Machado','Álvaro de Carvalho','Alvinlândia','Americana','Américo Brasiliense','Américo de Campos','Amparo','Analândia','Andradina','Angatuba','Anhembi','Anhumas','Aparecida','Aparecida dOeste','Apiaí',
            'Araçariguama','Araçatuba','Araçoiaba da Serra','Aramina','Arandu','Arapeí','Araraquara','Araras','Arco-Íris','Arealva','Areias','Areiópolis','Ariranha','Artur Nogueira','Arujá','Aspásia','Assis','Atibaia',
            'Auriflama','Avaí','Avanhandava','Avaré','Bady Bassitt','Balbinos','Bálsamo','Bananal','Barão de Antonina','Barbosa','Bariri','Barra Bonita','Barra do Chapéu','Barra do Turvo','Barretos','Barrinha','Barueri',
            'Bastos','Batatais','Bauru','Bebedouro','Bento de Abreu','Bernardino de Campos','Bertioga','Bilac','Birigui','Biritiba Mirim',
            'Boa Esperança do Sul','Bocaina','Bofete','Boituva','Bom Jesus dos Perdões','Bom Sucesso de Itararé','Borá','Boraceia','Borborema','Borebi','Botucatu','Bragança Paulista','Braúna','Brejo Alegre',
            'Brodowski','Brotas','Buri','Buritama','Buritizal','Cabrália Paulista','Cabreúva','Caçapava','Cachoeira Paulista','Caconde','Cafelândia','Caiabu','Caieiras','Caiuá','Cajamar','Cajati','Cajobi','Cajuru',
            'Campina do Monte Alegre','Campinas','Campo Limpo Paulista','Campos do Jordão','Campos Novos Paulista','Cananéia','Canas','Cândido Mota','Cândido Rodrigues','Canitar','Capão Bonito','Capela do Alto',
            'Capivari','Caraguatatuba','Carapicuíba','Cardoso','Casa Branca','Cássia dos Coqueiros','Castilho','Catanduva','Catiguá','Cedral','Cerqueira César','Cerquilho','Cesário Lange','Charqueada','Chavantes',
            'Clementina','Colina','Colômbia','Conchal','Conchas','Cordeirópolis','Coroados','Coronel Macedo','Corumbataí','Cosmópolis','Cosmorama','Cotia','Cravinhos','Cristais Paulista','Cruzália',
            'Cruzeiro','Cubatão','Cunha','Descalvado','Diadema','Dirce Reis','Divinolândia','Dobrada','Dois Córregos','Dolcinópolis','Dourado','Dracena','Duartina',
           'Dumont','Echaporã','Eldorado','Elias Fausto','Elisiário','Embaúba','Embu das Artes','Embu-Guaçu','Emilianópolis','Engenheiro Coelho','Espírito Santo do Pinhal','Espírito Santo do Turvo','Estiva Gerbi',
           'Estrela do Norte','Estrela dOeste','Euclides da Cunha Paulista','Fartura','Fernando Prestes','Fernandópolis','Fernão','Ferraz de Vasconcelos','Flora Rica','Floreal','Flórida Paulista','Florínea','Franca',
           'Francisco Morato','Franco da Rocha','Gabriel Monteiro','Gália','Garça','Gastão Vidigal','Gavião Peixoto','General Salgado','Getulina','Glicério','Guaiçara','Guaimbê','Guaíra','Guapiaçu','Guapiara','Guará',
           'Guaraçaí','Guaraci','Guarani dOeste','Guarantã','Guararapes','Guararema','Guaratinguetá','Guareí','Guariba','Guarujá','Guarulhos','Guatapará','Guzolândia','Herculândia','Holambra','Hortolândia',
           'Iacanga','Iacri','Iaras','Ibaté','Ibirá','Ibirarema','Ibitinga','Ibiúna','Icém','Iepê','Igaraçu do Tietê','Igarapava','Igaratá','Iguape','Ilha Comprida',
           'Ilha Solteira','Ilhabela','Indaiatuba','Indiana','Indiaporã','Inúbia Paulista','Ipaussu','Iperó','Ipeúna','Ipiguá','Iporanga','Ipuã','Iracemápolis','Irapuã','Irapuru','Itaberá','Itaí','Itajobi','Itaju',
           'Itanhaém','Itaoca','Itapecerica da Serra','Itapetininga','Itapeva','Itapevi','Itapira','Itapirapuã Paulista','Itápolis','Itaporanga','Itapuí','Itapura','Itaquaquecetuba','Itararé','Itariri','Itatiba',
           'Itatinga','Itirapina','Itirapuã','Itobi','Itu','Itupeva','Ituverava','Jaborandi','Jaboticabal','Jacareí','Jaci','Jacupiranga','Jaguariúna','Jales','Jambeiro','Jandira','Jardinópolis','Jarinu','Jaú',
           'Jeriquara','Joanópolis','João Ramalho','José Bonifácio','Júlio Mesquita','Jumirim','Jundiaí','Junqueirópolis','Juquiá','Juquitiba','Lagoinha','Laranjal Paulista','Lavínia','Lavrinhas',
           'Leme','Lençóis Paulista','Limeira','Lindoia','Lins','Lorena','Lourdes','Louveira','Lucélia','Lucianópolis','Luiz Antônio','Luiziânia','Lupércio',
           'Lutécia','Macatuba','Macaubal','Macedônia','Magda','Mairinque','Mairiporã','Manduri','Marabá Paulista','Maracaí','Marapoama','Mariápolis','Marília','Marinópolis','Martinópolis','Matão','Mauá',
           'Mendonça','Meridiano','Mesópolis','Miguelópolis','Mineiros do Tietê','Mira Estrela','Miracatu','Mirandópolis','Mirante do Paranapanema','Mirassol','Mirassolândia','Mococa','Mogi das Cruzes','Mogi Guaçu',
           'Mogi Mirim','Mombuca','Monções','Mongaguá','Monte Alegre do Sul','Monte Alto','Monte Aprazível','Monte Azul Paulista','Monte Castelo','Monte Mor','Monteiro Lobato','Morro Agudo','Morungaba','Motuca',
           'Murutinga do Sul','Nantes','Narandiba','Natividade da Serra','Nazaré Paulista','Neves Paulista','Nhandeara','Nipoã','Nova Aliança','Nova Campina','Nova Canaã Paulista','Nova Castilho',
           'Nova Europa','Nova Granada','Nova Guataporanga','Nova Independência','Nova Luzitânia','Nova Odessa','Novais','Novo Horizonte','Nuporanga','Ocauçu','Óleo','Olímpia',
           'Onda Verde','Oriente','Orindiúva','Orlândia','Osasco','Oscar Bressane','Osvaldo Cruz','Ourinhos','Ouro Verde','Ouroeste','Pacaembu','Palestina','Palmares Paulista','Palmeira dOeste','Palmital',
           'Panorama','Paraguaçu Paulista','Paraibuna','Paraíso','Paranapanema','Paranapuã','Parapuã','Pardinho','Pariquera-Açu','Parisi','Patrocínio Paulista','Paulicéia','Paulínia','Paulistânia','Paulo de Faria',
           'Pederneiras','Pedra Bela','Pedranópolis','Pedregulho','Pedreira','Pedrinhas Paulista','Pedro de Toledo','Penápolis','Pereira Barreto','Pereiras','Peruíbe','Piacatu','Piedade','Pilar do Sul','Pindamonhangaba',
           'Pindorama','Pinhalzinho','Piquerobi','Piquete','Piracaia','Piracicaba','Piraju','Pirajuí','Pirangi','Pirapora do Bom Jesus','Pirapozinho','Pirassununga',
           'Piratininga','Pitangueiras','Planalto','Platina','Poá','Poloni','Pompeia','Pongaí','Pontal','Pontalinda','Pontes Gestal','Populina','Porangaba','Porto Feliz','Porto Ferreira','Potim','Potirendaba',
           'Pracinha','Pradópolis','Praia Grande','Pratânia','Presidente Alves','Presidente Bernardes','Presidente Epitácio','Presidente Prudente','Presidente Venceslau','Promissão','Quadra','Quatá','Queiroz',
           'Queluz','Quintana','Rafard','Rancharia','Redenção da Serra','Regente Feijó','Reginópolis','Registro','Restinga','Ribeira','Ribeirão Bonito','Ribeirão Branco','Ribeirão Corrente','Ribeirão do Sul',
           'Ribeirão dos Índios','Ribeirão Grande','Ribeirão Pires','Ribeirão Preto','Rifaina','Rincão','Rinópolis','Rio Claro','Rio das Pedras','Rio Grande da Serra','Riolândia','Riversul','Rosana','Roseira',
           'Rubiácea','Rubinéia','Sabino','Sagres','Sales','Sales Oliveira','Salesópolis','Salmourão','Saltinho','Salto','Salto de Pirapora','Salto Grande','Sandovalina',
           'Santa Adélia','Santa Albertina','Santa Bárbara dOeste','Santa Branca','Santa Clara dOeste','Santa Cruz da Conceição','Santa Cruz da Esperança','Santa Cruz das Palmeiras','Santa Cruz do Rio Pardo',
           'Santa Ernestina','Santa Fé do Sul','Santa Gertrudes','Santa Isabel','Santa Lúcia','Santa Maria da Serra','Santa Mercedes','Santa Rita do Passa Quatro','Santa Rita dOeste','Santa Rosa de Viterbo',
           'Santa Salete','Santana da Ponte Pensa','Santana de Parnaíba','Santo Anastácio','Santo André','Santo Antônio da Alegria','Santo Antônio de Posse','Santo Antônio do Aracanguá','Santo Antônio do Jardim',
           'Santo Antônio do Pinhal','Santo Expedito','Santópolis do Aguapeí','Santos','São Bento do Sapucaí','São Bernardo do Campo','São Caetano do Sul','São Carlos','São Francisco','São João da Boa Vista',
           'São João das Duas Pontes','São João de Iracema','São João do Pau-dAlho','São Joaquim da Barra','São José da Bela Vista','São José do Barreiro','São José do Rio Pardo','São José do Rio Preto',
           'São José dos Campos','São Lourenço da Serra','São Luiz do Paraitinga','São Manuel','São Miguel Arcanjo','São Paulo','São Pedro','São Pedro do Turvo','São Roque','São Sebastião',
           'São Sebastião da Grama','São Simão','São Vicente','Sarapuí','Sarutaiá','Sebastianópolis do Sul','Serra Azul','Serra Negra','Serrana','Sertãozinho','Sete Barras','Severínia','Silveiras',
           'Socorro','Sorocaba','Sud Mennucci','Sumaré','Suzanápolis','Suzano','Tabapuã','Tabatinga','Taboão da Serra','Taciba','Taguaí','Taiaçu','Taiúva','Tambaú','Tanabi','Tapiraí','Tapiratiba',
           'Taquaral','Taquaritinga','Taquarituba','Taquarivaí','Tarabai','Tarumã','Tatuí','Taubaté','Tejupá','Teodoro Sampaio','Terra Roxa','Tietê','Timburi','Torre de Pedra','Torrinha','Trabiju',
           'Tremembé','Três Fronteiras','Tuiuti','Tupã','Tupi Paulista','Turiúba','Turmalina','Ubarana','Ubatuba','Ubirajara','Uchoa','União Paulista','Urânia','Uru','Urupês','Valentim Gentil','Valinhos',
           'Valparaíso','Vargem','Vargem Grande do Sul','Vargem Grande Paulista','Várzea Paulista','Vera Cruz','Vinhedo','Viradouro','Vista Alegre do Alto','Vitória Brasil','Votorantim','Votuporanga','Zacarias'],
           
           
        'PR': ['Adrianópolis','Agudos do Sul','Almirante Tamandaré','Altamira do Paraná','Alto Paraíso','Alto Paraná','Alto Piquiri','Altônia','Alvorada do Sul','Amaporã','Ampére','Anahy','Andirá','Ângulo','Antonina','Antônio Olinto','Apucarana',
            'Arapongas','Arapoti','Arapuã','Araruna','Araucária','Ariranha do Ivaí','Assaí','Assis Chateaubriand','Astorga','Atalaia','Balsa Nova','Bandeirantes','Barbosa Ferraz','Barra do Jacaré','Barracão','Bela Vista da Caroba',
            'Bela Vista do Paraíso','Bituruna','Boa Esperança','Boa Esperança do Iguaçu','Boa Ventura de São Roque','Boa Vista da Aparecida','Bocaiúva do Sul','Bom Jesus do Sul','Bom Sucesso','Bom Sucesso do Sul','Borrazópolis',
            'Braganey','Brasilândia do Sul','Cafeara','Cafelândia','Cafezal do Sul','Califórnia','Cambará','Cambé','Cambira','Campina da Lagoa','Campina do Simão','Campina Grande do Sul','Campo Bonito','Campo do Tenente',
            'Campo Largo','Campo Magro','Campo Mourão','Cândido de Abreu','Candói','Cantagalo','Capanema','Capitão Leônidas Marques','Carambeí','Carlópolis',
            'Cascavel','Castro','Catanduvas','Centenário do Sul','Cerro Azul','Céu Azul','Chopinzinho','Cianorte','Cidade Gaúcha','Clevelândia','Colombo','Colorado',
            'Congonhinhas','Conselheiro Mairinck','Contenda','Corbélia','Cornélio Procópio','Coronel Domingos Soares','Coronel Vivida','Corumbataí do Sul','Cruz Machado','Cruzeiro do Iguaçu','Cruzeiro do Oeste',
            'Cruzeiro do Sul','Cruzmaltina','Curitiba','Curiúva','Diamante do Norte','Diamante do Sul','Diamante dOeste','Dois Vizinhos','Douradina','Doutor Camargo','Doutor Ulysses','Enéas Marques',
            'Engenheiro Beltrão','Entre Rios do Oeste','Esperança Nova','Espigão Alto do Iguaçu','Farol','Faxinal','Fazenda Rio Grande','Fênix','Fernandes Pinheiro','Figueira','Flor da Serra do Sul','Floraí',
            'Floresta','Florestópolis','Flórida','Formosa do Oeste','Foz do Iguaçu','Foz do Jordão','Francisco Alves','Francisco Beltrão','General Carneiro','Godoy Moreira','Goioerê','Goioxim','Grandes Rios',
            'Guaíra','Guairaçá','Guamiranga','Guapirama','Guaporema','Guaraci','Guaraniaçu','Guarapuava',
            'Guaraqueçaba','Guaratuba','Honório Serpa','Ibaiti','Ibema','Ibiporã','Icaraíma','Iguaraçu','Iguatu','Imbaú','Imbituva','Inácio Martins','Inajá','Indianópolis','Ipiranga','Iporã','Iracema do Oeste',
            'Irati','Iretama','Itaguajé','Itaipulândia','Itambaracá','Itambé','Itapejara dOeste','Itaperuçu','Itaúna do Sul','Ivaí','Ivaiporã','Ivaté','Ivatuba','Jaboti','Jacarezinho','Jaguapitã','Jaguariaíva',
            'Jandaia do Sul','Janiópolis','Japira','Japurá','Jardim Alegre','Jardim Olinda','Jataizinho','Jesuítas','Joaquim Távora','Jundiaí do Sul','Juranda','Jussara','Kaloré','Lapa','Laranjal','Laranjeiras do Sul',
            'Leópolis','Lidianópolis','Lindoeste','Loanda','Lobato','Londrina','Luiziana','Lunardelli','Lupionópolis','Mallet','Mamborê','Mandaguaçu','Mandaguari','Mandirituba','Manfrinópolis','Mangueirinha','Manoel Ribas',
            'Marechal Cândido Rondon','Maria Helena','Marialva','Marilândia do Sul','Marilena','Mariluz','Maringá','Mariópolis','Maripá','Marmeleiro','Marquinho','Marumbi','Matelândia','Matinhos','Mato Rico',
            'Mauá da Serra','Medianeira','Mercedes','Mirador','Miraselva','Missal','Moreira Sales','Morretes','Munhoz de Mello','Nossa Senhora das Graças','Nova Aliança do Ivaí','Nova América da Colina','Nova Aurora','Nova Cantu',
            'Nova Esperança do Sudoeste','Nova Esperança','Nova Fátima','Nova Laranjeiras','Nova Londrina','Nova Olímpia','Nova Prata do Iguaçu','Nova Santa Bárbara','Nova Santa Rosa','Nova Tebas','Novo Itacolomi',
            'Ortigueira','Ourizona','Ouro Verde do Oeste','Paiçandu','Palmas','Palmeira','Palmital','Palotina','Paraíso do Norte','Paranacity','Paranaguá','Paranapoema','Paranavaí','Pato Bragado','Pato Branco',
            'Paula Freitas','Paulo Frontin','Peabiru','Perobal','Pérola','Pérola dOeste','Piên','Pinhais','Pinhal de São Bento','Pinhalão','Pinhão','Piraí do Sul','Piraquara','Pitanga','Pitangueiras','Planaltina do Paraná',
            'Planalto','Ponta Grossa','Pontal do Paraná','Porecatu','Porto Amazonas','Porto Barreiro','Porto Rico','Porto Vitória','Prado Ferreira','Pranchita','Presidente Castelo Branco',
            'Primeiro de Maio','Prudentópolis','Quarto Centenário','Quatiguá','Quatro Barras','Quatro Pontes','Quedas do Iguaçu','Querência do Norte','Quinta do Sol','Quitandinha','Ramilândia','Rancho Alegre','Rancho Alegre dOeste',
            'Realeza','Rebouças','Renascença','Reserva','Reserva do Iguaçu','Ribeirão Claro','Ribeirão do Pinhal','Rio Azul','Rio Bom','Rio Bonito do Iguaçu','Rio Branco do Ivaí','Rio Branco do Sul',
            'Rio Negro','Rolândia','Roncador','Rondon','Rosário do Ivaí','Sabáudia','Salgado Filho','Salto do Itararé','Salto do Lontra','Santa Amélia','Santa Cecília do Pavão','Santa Cruz de Monte Castelo',
            'Santa Fé','Santa Helena','Santa Inês','Santa Isabel do Ivaí','Santa Izabel do Oeste','Santa Lúcia','Santa Maria do Oeste','Santa Mariana','Santa Mônica','Santa Tereza do Oeste',
            'Santa Terezinha de Itaipu','Santana do Itararé','Santo Antônio da Platina','Santo Antônio do Caiuá','Santo Antônio do Paraíso','Santo Antônio do Sudoeste','Santo Inácio','São Carlos do Ivaí',
            'São Jerônimo da Serra','São João','São João do Caiuá','São João do Ivaí','São João do Triunfo','São Jorge do Ivaí','São Jorge do Patrocínio','São Jorge dOeste','São José da Boa Vista',
            'São José das Palmeiras','São José dos Pinhais','São Manoel do Paraná',
            'São Mateus do Sul','São Miguel do Iguaçu','São Pedro do Iguaçu','São Pedro do Ivaí','São Pedro do Paraná','São Sebastião da Amoreira','São Tomé','Sapopema','Sarandi','Saudade do Iguaçu',
            'Sengés','Serranópolis do Iguaçu','Sertaneja','Sertanópolis','Siqueira Campos','Sulina','Tamarana','Tamboara','Tapejara','Tapira','Teixeira Soares','Telêmaco Borba','Terra Boa','Terra Rica',
            'Terra Roxa','Tibagi','Tijucas do Sul','Toledo','Tomazina','Três Barras do Paraná','Tunas do Paraná','Tuneiras do Oeste','Tupãssi','Turvo','Ubiratã','Umuarama','União da Vitória','Uniflor',
            'Uraí','Ventania','Vera Cruz do Oeste','Verê','Virmond','Vitorino','Wenceslau Braz','Xambrê']
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


//Aduto Sandim: (11)951590398 ['Mooca','Itaquera','Vila Guilherme', 'Vila Santana', 'Artur Alvim', 'Cidade Lider', 'Vila Formosa', 'Jardim Analia Franco', 'Vila Carrão', 'Sapopemba', 'Aricanduva']
//Inara Mel (11) 97750 0834-São Miguel abrange: Itaim Paulista, Jardim Helena, Vila Curuçá, Vila Progresso, Jd Robru
// Exemplo de lista de objetos que representam os estabelecimentos
const representantes = [
    {
        nome: "Bel Fiore Alimentos",
        cargo:"Loja da fábrica",
        telefone:"(11) 2966-4321",
        email: "contato@belfiorealimentos.com.br",
        estado: ["PR","SP"],
        cidade: ['Adrianópolis','Agudos do Sul','Almirante Tamandaré','Altamira do Paraná','Alto Paraíso','Alto Paraná','Alto Piquiri','Altônia','Alvorada do Sul','Amaporã','Ampére','Anahy','Andirá','Ângulo','Antonina','Antônio Olinto','Apucarana',
            'Arapongas','Arapoti','Arapuã','Araruna','Araucária','Ariranha do Ivaí','Assaí','Assis Chateaubriand','Astorga','Atalaia','Balsa Nova','Bandeirantes','Barbosa Ferraz','Barra do Jacaré','Barracão','Bela Vista da Caroba',
            'Bela Vista do Paraíso','Bituruna','Boa Esperança','Boa Esperança do Iguaçu','Boa Ventura de São Roque','Boa Vista da Aparecida','Bocaiúva do Sul','Bom Jesus do Sul','Bom Sucesso','Bom Sucesso do Sul','Borrazópolis',
            'Braganey','Brasilândia do Sul','Cafeara','Cafelândia','Cafezal do Sul','Califórnia','Cambará','Cambé','Cambira','Campina da Lagoa','Campina do Simão','Campina Grande do Sul','Campo Bonito','Campo do Tenente',
            'Campo Largo','Campo Magro','Campo Mourão','Cândido de Abreu','Candói','Cantagalo','Capanema','Capitão Leônidas Marques','Carambeí','Carlópolis',
            'Cascavel','Castro','Catanduvas','Centenário do Sul','Cerro Azul','Céu Azul','Chopinzinho','Cianorte','Cidade Gaúcha','Clevelândia','Colombo','Colorado',
            'Congonhinhas','Conselheiro Mairinck','Contenda','Corbélia','Cornélio Procópio','Coronel Domingos Soares','Coronel Vivida','Corumbataí do Sul','Cruz Machado','Cruzeiro do Iguaçu','Cruzeiro do Oeste',
            'Cruzeiro do Sul','Cruzmaltina','Curitiba','Curiúva','Diamante do Norte','Diamante do Sul','Diamante dOeste','Dois Vizinhos','Douradina','Doutor Camargo','Doutor Ulysses','Enéas Marques',
            'Engenheiro Beltrão','Entre Rios do Oeste','Esperança Nova','Espigão Alto do Iguaçu','Farol','Faxinal','Fazenda Rio Grande','Fênix','Fernandes Pinheiro','Figueira','Flor da Serra do Sul','Floraí',
            'Floresta','Florestópolis','Flórida','Formosa do Oeste','Foz do Iguaçu','Foz do Jordão','Francisco Alves','Francisco Beltrão','General Carneiro','Godoy Moreira','Goioerê','Goioxim','Grandes Rios',
            'Guaíra','Guairaçá','Guamiranga','Guapirama','Guaporema','Guaraci','Guaraniaçu','Guarapuava',
            'Guaraqueçaba','Guaratuba','Honório Serpa','Ibaiti','Ibema','Ibiporã','Icaraíma','Iguaraçu','Iguatu','Imbaú','Imbituva','Inácio Martins','Inajá','Indianópolis','Ipiranga','Iporã','Iracema do Oeste',
            'Irati','Iretama','Itaguajé','Itaipulândia','Itambaracá','Itambé','Itapejara dOeste','Itaperuçu','Itaúna do Sul','Ivaí','Ivaiporã','Ivaté','Ivatuba','Jaboti','Jacarezinho','Jaguapitã','Jaguariaíva',
            'Jandaia do Sul','Janiópolis','Japira','Japurá','Jardim Alegre','Jardim Olinda','Jataizinho','Jesuítas','Joaquim Távora','Jundiaí do Sul','Juranda','Jussara','Kaloré','Lapa','Laranjal','Laranjeiras do Sul',
            'Leópolis','Lidianópolis','Lindoeste','Loanda','Lobato','Londrina','Luiziana','Lunardelli','Lupionópolis','Mallet','Mamborê','Mandaguaçu','Mandaguari','Mandirituba','Manfrinópolis','Mangueirinha','Manoel Ribas',
            'Marechal Cândido Rondon','Maria Helena','Marialva','Marilândia do Sul','Marilena','Mariluz','Maringá','Mariópolis','Maripá','Marmeleiro','Marquinho','Marumbi','Matelândia','Matinhos','Mato Rico',
            'Mauá da Serra','Medianeira','Mercedes','Mirador','Miraselva','Missal','Moreira Sales','Morretes','Munhoz de Mello','Nossa Senhora das Graças','Nova Aliança do Ivaí','Nova América da Colina','Nova Aurora','Nova Cantu',
            'Nova Esperança do Sudoeste','Nova Esperança','Nova Fátima','Nova Laranjeiras','Nova Londrina','Nova Olímpia','Nova Prata do Iguaçu','Nova Santa Bárbara','Nova Santa Rosa','Nova Tebas','Novo Itacolomi',
            'Ortigueira','Ourizona','Ouro Verde do Oeste','Paiçandu','Palmas','Palmeira','Palmital','Palotina','Paraíso do Norte','Paranacity','Paranaguá','Paranapoema','Paranavaí','Pato Bragado','Pato Branco',
            'Paula Freitas','Paulo Frontin','Peabiru','Perobal','Pérola','Pérola dOeste','Piên','Pinhais','Pinhal de São Bento','Pinhalão','Pinhão','Piraí do Sul','Piraquara','Pitanga','Pitangueiras','Planaltina do Paraná',
            'Planalto','Ponta Grossa','Pontal do Paraná','Porecatu','Porto Amazonas','Porto Barreiro','Porto Rico','Porto Vitória','Prado Ferreira','Pranchita','Presidente Castelo Branco',
            'Primeiro de Maio','Prudentópolis','Quarto Centenário','Quatiguá','Quatro Barras','Quatro Pontes','Quedas do Iguaçu','Querência do Norte','Quinta do Sol','Quitandinha','Ramilândia','Rancho Alegre','Rancho Alegre dOeste',
            'Realeza','Rebouças','Renascença','Reserva','Reserva do Iguaçu','Ribeirão Claro','Ribeirão do Pinhal','Rio Azul','Rio Bom','Rio Bonito do Iguaçu','Rio Branco do Ivaí','Rio Branco do Sul',
            'Rio Negro','Rolândia','Roncador','Rondon','Rosário do Ivaí','Sabáudia','Salgado Filho','Salto do Itararé','Salto do Lontra','Santa Amélia','Santa Cecília do Pavão','Santa Cruz de Monte Castelo',
            'Santa Fé','Santa Helena','Santa Inês','Santa Isabel do Ivaí','Santa Izabel do Oeste','Santa Lúcia','Santa Maria do Oeste','Santa Mariana','Santa Mônica','Santa Tereza do Oeste',
            'Santa Terezinha de Itaipu','Santana do Itararé','Santo Antônio da Platina','Santo Antônio do Caiuá','Santo Antônio do Paraíso','Santo Antônio do Sudoeste','Santo Inácio','São Carlos do Ivaí',
            'São Jerônimo da Serra','São João','São João do Caiuá','São João do Ivaí','São João do Triunfo','São Jorge do Ivaí','São Jorge do Patrocínio','São Jorge dOeste','São José da Boa Vista',
            'São José das Palmeiras','São José dos Pinhais','São Manoel do Paraná',
            'São Mateus do Sul','São Miguel do Iguaçu','São Pedro do Iguaçu','São Pedro do Ivaí','São Pedro do Paraná','São Sebastião da Amoreira','São Tomé','Sapopema','Sarandi','Saudade do Iguaçu',
            'Sengés','Serranópolis do Iguaçu','Sertaneja','Sertanópolis','Siqueira Campos','Sulina','Tamarana','Tamboara','Tapejara','Tapira','Teixeira Soares','Telêmaco Borba','Terra Boa','Terra Rica',
            'Terra Roxa','Tibagi','Tijucas do Sul','Toledo','Tomazina','Três Barras do Paraná','Tunas do Paraná','Tuneiras do Oeste','Tupãssi','Turvo','Ubiratã','Umuarama','União da Vitória','Uniflor',
            'Uraí','Ventania','Vera Cruz do Oeste','Verê','Virmond','Vitorino','Wenceslau Braz','Xambrê', 'Adolfo','Aguaí','Águas da Prata','Águas de Lindóia','Águas de Santa Bárbara','Águas de São Pedro','Agudos','Alambari','Alfredo Marcondes','Altair','Altinópolis','Alto Alegre','Alumínio','Álvares Florence',
            'Álvares Machado','Álvaro de Carvalho','Alvinlândia','Americana','Américo Brasiliense','Américo de Campos','Amparo','Analândia','Andradina','Angatuba','Anhembi','Anhumas','Aparecida','Aparecida dOeste','Apiaí',
            'Araçariguama','Araçatuba','Araçoiaba da Serra','Aramina','Arandu','Arapeí','Araraquara','Araras','Arco-Íris','Arealva','Areias','Areiópolis','Ariranha','Artur Nogueira','Arujá','Aspásia','Assis','Atibaia',
            'Auriflama','Avaí','Avanhandava','Avaré','Bady Bassitt','Balbinos','Bálsamo','Bananal','Barão de Antonina','Barbosa','Bariri','Barra Bonita','Barra do Chapéu','Barra do Turvo','Barretos','Barrinha','Barueri',
            'Bastos','Batatais','Bauru','Bebedouro','Bento de Abreu','Bernardino de Campos','Bertioga','Bilac','Birigui','Biritiba Mirim',
            'Boa Esperança do Sul','Bocaina','Bofete','Boituva','Bom Jesus dos Perdões','Bom Sucesso de Itararé','Borá','Boraceia','Borborema','Borebi','Botucatu','Bragança Paulista','Braúna','Brejo Alegre',
            'Brodowski','Brotas','Buri','Buritama','Buritizal','Cabrália Paulista','Cabreúva','Caçapava','Cachoeira Paulista','Caconde','Cafelândia','Caiabu','Caieiras','Caiuá','Cajamar','Cajati','Cajobi','Cajuru',
            'Campina do Monte Alegre','Campinas','Campo Limpo Paulista','Campos do Jordão','Campos Novos Paulista','Cananéia','Canas','Cândido Mota','Cândido Rodrigues','Canitar','Capão Bonito','Capela do Alto',
            'Capivari','Caraguatatuba','Carapicuíba','Cardoso','Casa Branca','Cássia dos Coqueiros','Castilho','Catanduva','Catiguá','Cedral','Cerqueira César','Cerquilho','Cesário Lange','Charqueada','Chavantes',
            'Clementina','Colina','Colômbia','Conchal','Conchas','Cordeirópolis','Coroados','Coronel Macedo','Corumbataí','Cosmópolis','Cosmorama','Cotia','Cravinhos','Cristais Paulista','Cruzália',
            'Cruzeiro','Cubatão','Cunha','Descalvado','Diadema','Dirce Reis','Divinolândia','Dobrada','Dois Córregos','Dolcinópolis','Dourado','Dracena','Duartina',
           'Dumont','Echaporã','Eldorado','Elias Fausto','Elisiário','Embaúba','Embu das Artes','Embu-Guaçu','Emilianópolis','Engenheiro Coelho','Espírito Santo do Pinhal','Espírito Santo do Turvo','Estiva Gerbi',
           'Estrela do Norte','Estrela dOeste','Euclides da Cunha Paulista','Fartura','Fernando Prestes','Fernandópolis','Fernão','Ferraz de Vasconcelos','Flora Rica','Floreal','Flórida Paulista','Florínea','Franca',
           'Francisco Morato','Franco da Rocha','Gabriel Monteiro','Gália','Garça','Gastão Vidigal','Gavião Peixoto','General Salgado','Getulina','Glicério','Guaiçara','Guaimbê','Guaíra','Guapiaçu','Guapiara','Guará',
           'Guaraçaí','Guaraci','Guarani dOeste','Guarantã','Guararapes','Guararema','Guaratinguetá','Guareí','Guariba','Guarujá','Guarulhos','Guatapará','Guzolândia','Herculândia','Holambra','Hortolândia',
           'Iacanga','Iacri','Iaras','Ibaté','Ibirá','Ibirarema','Ibitinga','Ibiúna','Icém','Iepê','Igaraçu do Tietê','Igarapava','Igaratá','Iguape','Ilha Comprida',
           'Ilha Solteira','Ilhabela','Indaiatuba','Indiana','Indiaporã','Inúbia Paulista','Ipaussu','Iperó','Ipeúna','Ipiguá','Iporanga','Ipuã','Iracemápolis','Irapuã','Irapuru','Itaberá','Itaí','Itajobi','Itaju',
           'Itanhaém','Itaoca','Itapecerica da Serra','Itapetininga','Itapeva','Itapevi','Itapira','Itapirapuã Paulista','Itápolis','Itaporanga','Itapuí','Itapura','Itaquaquecetuba','Itararé','Itariri','Itatiba',
           'Itatinga','Itirapina','Itirapuã','Itobi','Itu','Itupeva','Ituverava','Jaborandi','Jaboticabal','Jacareí','Jaci','Jacupiranga','Jaguariúna','Jales','Jambeiro','Jandira','Jardinópolis','Jarinu','Jaú',
           'Jeriquara','Joanópolis','João Ramalho','José Bonifácio','Júlio Mesquita','Jumirim','Jundiaí','Junqueirópolis','Juquiá','Juquitiba','Lagoinha','Laranjal Paulista','Lavínia','Lavrinhas',
           'Leme','Lençóis Paulista','Limeira','Lindoia','Lins','Lorena','Lourdes','Louveira','Lucélia','Lucianópolis','Luiz Antônio','Luiziânia','Lupércio',
           'Lutécia','Macatuba','Macaubal','Macedônia','Magda','Mairinque','Mairiporã','Manduri','Marabá Paulista','Maracaí','Marapoama','Mariápolis','Marília','Marinópolis','Martinópolis','Matão','Mauá',
           'Mendonça','Meridiano','Mesópolis','Miguelópolis','Mineiros do Tietê','Mira Estrela','Miracatu','Mirandópolis','Mirante do Paranapanema','Mirassol','Mirassolândia','Mococa','Mogi das Cruzes','Mogi Guaçu',
           'Mogi Mirim','Mombuca','Monções','Mongaguá','Monte Alegre do Sul','Monte Alto','Monte Aprazível','Monte Azul Paulista','Monte Castelo','Monte Mor','Monteiro Lobato','Morro Agudo','Morungaba','Motuca',
           'Murutinga do Sul','Nantes','Narandiba','Natividade da Serra','Nazaré Paulista','Neves Paulista','Nhandeara','Nipoã','Nova Aliança','Nova Campina','Nova Canaã Paulista','Nova Castilho',
           'Nova Europa','Nova Granada','Nova Guataporanga','Nova Independência','Nova Luzitânia','Nova Odessa','Novais','Novo Horizonte','Nuporanga','Ocauçu','Óleo','Olímpia',
           'Onda Verde','Oriente','Orindiúva','Orlândia','Osasco','Oscar Bressane','Osvaldo Cruz','Ourinhos','Ouro Verde','Ouroeste','Pacaembu','Palestina','Palmares Paulista','Palmeira dOeste','Palmital',
           'Panorama','Paraguaçu Paulista','Paraibuna','Paraíso','Paranapanema','Paranapuã','Parapuã','Pardinho','Pariquera-Açu','Parisi','Patrocínio Paulista','Paulicéia','Paulínia','Paulistânia','Paulo de Faria',
           'Pederneiras','Pedra Bela','Pedranópolis','Pedregulho','Pedreira','Pedrinhas Paulista','Pedro de Toledo','Penápolis','Pereira Barreto','Pereiras','Peruíbe','Piacatu','Piedade','Pilar do Sul','Pindamonhangaba',
           'Pindorama','Pinhalzinho','Piquerobi','Piquete','Piracaia','Piracicaba','Piraju','Pirajuí','Pirangi','Pirapora do Bom Jesus','Pirapozinho','Pirassununga',
           'Piratininga','Pitangueiras','Planalto','Platina','Poá','Poloni','Pompeia','Pongaí','Pontal','Pontalinda','Pontes Gestal','Populina','Porangaba','Porto Feliz','Porto Ferreira','Potim','Potirendaba',
           'Pracinha','Pradópolis','Praia Grande','Pratânia','Presidente Alves','Presidente Bernardes','Presidente Epitácio','Presidente Prudente','Presidente Venceslau','Promissão','Quadra','Quatá','Queiroz',
           'Queluz','Quintana','Rafard','Rancharia','Redenção da Serra','Regente Feijó','Reginópolis','Registro','Restinga','Ribeira','Ribeirão Bonito','Ribeirão Branco','Ribeirão Corrente','Ribeirão do Sul',
           'Ribeirão dos Índios','Ribeirão Grande','Ribeirão Pires','Ribeirão Preto','Rifaina','Rincão','Rinópolis','Rio Claro','Rio das Pedras','Rio Grande da Serra','Riolândia','Riversul','Rosana','Roseira',
           'Rubiácea','Rubinéia','Sabino','Sagres','Sales','Sales Oliveira','Salesópolis','Salmourão','Saltinho','Salto','Salto de Pirapora','Salto Grande','Sandovalina',
           'Santa Adélia','Santa Albertina','Santa Bárbara dOeste','Santa Branca','Santa Clara dOeste','Santa Cruz da Conceição','Santa Cruz da Esperança','Santa Cruz das Palmeiras','Santa Cruz do Rio Pardo',
           'Santa Ernestina','Santa Fé do Sul','Santa Gertrudes','Santa Isabel','Santa Lúcia','Santa Maria da Serra','Santa Mercedes','Santa Rita do Passa Quatro','Santa Rita dOeste','Santa Rosa de Viterbo',
           'Santa Salete','Santana da Ponte Pensa','Santana de Parnaíba','Santo Anastácio','Santo André','Santo Antônio da Alegria','Santo Antônio de Posse','Santo Antônio do Aracanguá','Santo Antônio do Jardim',
           'Santo Antônio do Pinhal','Santo Expedito','Santópolis do Aguapeí','Santos','São Bento do Sapucaí','São Bernardo do Campo','São Caetano do Sul','São Carlos','São Francisco','São João da Boa Vista',
           'São João das Duas Pontes','São João de Iracema','São João do Pau-dAlho','São Joaquim da Barra','São José da Bela Vista','São José do Barreiro','São José do Rio Pardo','São José do Rio Preto',
           'São José dos Campos','São Lourenço da Serra','São Luiz do Paraitinga','São Manuel','São Miguel Arcanjo','São Paulo','São Pedro','São Pedro do Turvo','São Roque','São Sebastião',
           'São Sebastião da Grama','São Simão','São Vicente','Sarapuí','Sarutaiá','Sebastianópolis do Sul','Serra Azul','Serra Negra','Serrana','Sertãozinho','Sete Barras','Severínia','Silveiras',
           'Socorro','Sorocaba','Sud Mennucci','Sumaré','Suzanápolis','Suzano','Tabapuã','Tabatinga','Taboão da Serra','Taciba','Taguaí','Taiaçu','Taiúva','Tambaú','Tanabi','Tapiraí','Tapiratiba',
           'Taquaral','Taquaritinga','Taquarituba','Taquarivaí','Tarabai','Tarumã','Tatuí','Taubaté','Tejupá','Teodoro Sampaio','Terra Roxa','Tietê','Timburi','Torre de Pedra','Torrinha','Trabiju',
           'Tremembé','Três Fronteiras','Tuiuti','Tupã','Tupi Paulista','Turiúba','Turmalina','Ubarana','Ubatuba','Ubirajara','Uchoa','União Paulista','Urânia','Uru','Urupês','Valentim Gentil','Valinhos',
           'Valparaíso','Vargem','Vargem Grande do Sul','Vargem Grande Paulista','Várzea Paulista','Vera Cruz','Vinhedo','Viradouro','Vista Alegre do Alto','Vitória Brasil','Votorantim','Votuporanga','Zacarias']
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