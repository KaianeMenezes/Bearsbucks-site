const chatbotBtn = document.getElementById('chatbotBtn');
const chatbox = document.getElementById('chatbox');
const chatMessages = document.getElementById('chatMessages');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');

chatbotBtn.addEventListener('click', () => {
    chatbox.style.display = chatbox.style.display === 'flex' ? 'none' : 'flex';
});

function addMessage(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    msgDiv.textContent = message;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botResponse(userText) {
    const text = userText.toLowerCase();
    let response = 'Desculpe, não entendi. Pode reformular? 💭';

    if (text.includes('produto') || text.includes('sabores') || text.includes('bebida')) {
        response = 'Temos bubble teas deliciosos! 🧋 Sabores de abacaxi, manga, cereja, kiwi e muito mais! Na nossa aba de Menu tem tudo o que você precisa.';
    } else if (text.includes('pagamento') || text.includes('forma de pagamento')) {
        response = 'Aceitamos Pix, cartão de crédito, débito e dinheiro. 💳';
    } else if (text.includes('horário') || text.includes('funcionamento')) {
        response = 'Atendemos de segunda a sábado, das 8h às 18h. ⏰';
    } else if (text.includes('contato') || text.includes('falar com')) {
        response = 'Você pode falar com a gente pelo WhatsApp (11) 98488-5691 ou e-mail kaianebts@gmail.com 💌';
    } else if (text.includes('oi') || text.includes('olá') || text.includes('bom dia') || text.includes('boa tarde')) {
        response = 'Oi! 😊 Seja bem-vindo(a) à Bearsbucks! Como posso te ajudar hoje?';
    } else if (text.includes('endereço') || text.includes('local') || text.includes('lugar') || text.includes('localização')) {
        response = 'Nos encontramos na Av. Santa Catarina, 1929 - Vila Mascote, São Paulo - SP, 04378-400';
    }

    setTimeout(() => addMessage(response, 'bot'), 500);
}

sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (text === '') return;
    addMessage(text, 'user');
    userInput.value = '';
    botResponse(text);
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});

