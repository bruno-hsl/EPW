document.getElementById('enviarContato').addEventListener('click', function() {
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;

    window.location.href = `/contato?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&celular=${encodeURIComponent(celular)}`;
});
