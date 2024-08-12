function mostrarCampoArquivo() {
    var selectCategoria = document.getElementById('categoria');
    var campoArquivo = document.getElementById('campoArquivo');

    // Verificar se o valor selecionado é diferente de "Revenda"
    if (selectCategoria.value !== "Revenda") {
        campoArquivo.style.display = "block"; // Mostrar o campo de upload de arquivo
    } else {
        campoArquivo.style.display = "none"; // Ocultar o campo de upload de arquivo
    }
}
