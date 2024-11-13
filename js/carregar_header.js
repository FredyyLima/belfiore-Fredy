
function carregarHeader(){
    let header_menu = "";

    header_menu += `
        <li><a href="index.html">PÁGINA INICIAL</a></li>
        <li><a href="about-us.html">SOBRE NÓS</a></li>
        <li><a href="trabalhe_conosco.html">TRABALHE CONOSCO</a></li>
        <li><a href="pontos_de_venda.html">PONTOS DE VENDA</a></li>
        <li><a href="representantes.html">REPRESENTANTES</a></li>
        <li><a href="blog.html">CONTATO</a></li>
    `
    document.getElementById("menu_header").innerHTML = header_menu
}