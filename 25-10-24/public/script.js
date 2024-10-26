document.getElementById('enviarContato').addEventListener('click', function() {
    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;

    // Redireciona para a página de contato com os dados como parâmetros na URL
    window.location.href = `/contato?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&celular=${encodeURIComponent(celular)}`;
});