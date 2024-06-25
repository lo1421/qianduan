// Interactive elements handling
document.addEventListener('DOMContentLoaded', function() {
    // Submit message
    const submitMessage = document.getElementById('submitMessage');
    const userMessage = document.getElementById('userMessage');
    const chatContainer = document.getElementById('chatContainer');

    submitMessage.addEventListener('click', function() {
        const message = userMessage.value.trim();
        if (message !== '') {
            appendMessage(message, 'self');
            userMessage.value = '';
        } else {
            alert('请输入留言内容。');
        }
    });

    // Chat functionality
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');

    sendBtn.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message !== '') {
            appendMessage(message, 'self');
            simulateReply(message);
            chatInput.value = '';
        }
    });

    function simulateReply(message) {
        // 模拟回复消息，这里可以自定义回复的逻辑
        setTimeout(function() {
            appendMessage('您好！有什么可以帮助您的吗？', 'other');
        }, 1000);
    }

    function appendMessage(message, type) {
        const chatLog = document.createElement('div');
        chatLog.classList.add('chat
