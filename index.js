let currentChatUser = '';
        let currentChatRole = '';
        let alarmActive = false;
        let alarmInterval;

        // Funções de Emergência
        function sendEmergencyMessage() {
            showNotification('📧 Mensagem de emergência enviada para todos os familiares!');
            // Simular envio de mensagem
            console.log('Enviando mensagem de emergência...');
        }

        function callPolice() {
            showNotification('🚔 Chamando polícia... (190)');
            // Em um app real, faria a ligação
            console.log('Discando 190...');
        }

        function activateAlarm() {
            if (!alarmActive) {
                alarmActive = true;
                showNotification('🔊 Alarme ativado!');
                
                // Simular alarme sonoro
                alarmInterval = setInterval(() => {
                    console.log('ALARME! ALARME! ALARME!');
                    // Em um app real, tocaria um som alto
                }, 1000);

                // Desativar alarme após 10 segundos
                setTimeout(() => {
                    clearInterval(alarmInterval);
                    alarmActive = false;
                    showNotification('Alarme desativado automaticamente');
                }, 10000);
            }
        }

        // Sistema de Chat
        function openChat(name, role) {
            currentChatUser = name;
            currentChatRole = role;
            document.getElementById('chatTitle').textContent = `Chat com ${name}`;
            document.getElementById('chatModal').style.display = 'flex';
        }

        function closeChat() {
            document.getElementById('chatModal').style.display = 'none';
        }

        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (message) {
                const messagesContainer = document.getElementById('chatMessages');
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message message-sent';
                messageDiv.textContent = message;
                messagesContainer.appendChild(messageDiv);
                
                input.value = '';
                messagesContainer.scrollTop = messagesContainer.scrollHeight;

                // Simular resposta automática
                setTimeout(() => {
                    const responseDiv = document.createElement('div');
                    responseDiv.className = 'message message-received';
                    const responses = [
                        'Entendi! Obrigado(a) por avisar 😊',
                        'Tudo bem por aqui também!',
                        'Ok, nos falamos mais tarde!',
                        'Cuidado e qualquer coisa me chama!',
                        'Muito obrigado(a)! ❤️'
                    ];
                    responseDiv.textContent = responses[Math.floor(Math.random() * responses.length)];
                    messagesContainer.appendChild(responseDiv);
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }, 1500);
            }
        }

        function handleChatKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        // Controles do Mapa
        function zoomIn() {
            showNotification('🔍 Aumentando zoom do mapa');
            // Em uma implementação real, você controlaria o zoom do iframe
        }

        function zoomOut() {
            showNotification('🔍 Diminuindo zoom do mapa');
            // Em uma implementação real, você controlaria o zoom do iframe
        }

        function centerMap() {
            showNotification('📍 Centralizando mapa na localização atual');
            // Em uma implementação real, você centralizaria o mapa
        }

        // Detalhes de Localização
        function showLocationDetails(location) {
            showNotification(`📍 ${location}: Rua das Flores, 123 - Centro`);
        }

        // Sistema de Notificação
        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }

        // Inicializar
        document.addEventListener('DOMContentLoaded', function() {
            showNotification('🎉 ConectaFamília iniciado com sucesso!');
        });

        // Fechar chat clicando fora
        document.getElementById('chatModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeChat();
            }
        });

        function enableMapInteraction(container) {
    // Encontra o iframe dentro do container
    const iframe = container.querySelector('.google-map');
    if (iframe) {
        // Habilita eventos do mouse (permite zoom e arrastar)
        iframe.style.pointerEvents = 'auto'; 
        showNotification('Mapa liberado para interação. Role para fora para congelar.');
    }
}

function disableMapInteraction(container) {
    const iframe = container.querySelector('.google-map');
    if (iframe) {
        // Desabilita eventos do mouse (congela o mapa)
        iframe.style.pointerEvents = 'none';
        // Oculta notificação de liberação após 500ms, se ainda estiver visível
        setTimeout(() => {
             // Lógica para garantir que a notificação correta foi desativada se necessário.
             // Manter apenas a desativação do pointer-events é suficiente para a funcionalidade.
        }, 500);
    }
}