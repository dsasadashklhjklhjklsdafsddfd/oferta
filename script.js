document.addEventListener('DOMContentLoaded', function () {
    let clickCount = 0;
    const button = document.getElementById('magicButton');
    const message = document.getElementById('message');
    const hiddenButton = document.getElementById('hiddenButton');
    const finalMessage = document.getElementById('finalMessage');

    // Botão principal com interatividade
    button.addEventListener('click', function () {
        clickCount++;

        if (clickCount === 1) {
            button.textContent = 'Aguarde... desbloqueando...';
        } else if (clickCount === 2) {
            button.textContent = 'Quase lá...';
        } else if (clickCount === 3) {
            button.textContent = 'Preparando o Premium...';
        } else if (clickCount === 4) {
            button.textContent = 'Último clique! 🔓';
        } else if (clickCount === 5) {
            message.classList.remove('hidden');
            button.textContent = 'Modo Premium Desbloqueado! 😎';
        } else if (clickCount > 5) {
            message.classList.add('hidden');
            button.textContent = 'Desbloquear Modo Premium';
            clickCount = 0;
        }
    });

    // Exibir mensagem final ao clicar no botão escondido
    hiddenButton.addEventListener('click', function () {
        finalMessage.classList.remove('hidden');
        hiddenButton.textContent = 'Mensagem revelada! 🎉';
    });
});
