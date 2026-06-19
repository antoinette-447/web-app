console.log('☕ Добро пожаловать в Lighter Coffee House!');

// Плавная загрузка страницы.

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('✨ Страница загружена! Наслаждайтесь кофе ☕');
    
    // Кнопка бронирования столика.
    
    const bookingButtons = document.querySelectorAll('.header-btn, .hero-btn');
    
    bookingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            showNotification(
                '✨ Столик забронирован!',
                'Мы свяжемся с вами в ближайшее время для подтверждения.',
                'success'
            );
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
        
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 20px rgba(179, 123, 72, 0.4)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Форма обратной связи.
    
    const subscribeBtn = document.querySelector('.contacts__btn');
    
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const nameInput = document.querySelector('.contacts__input input[placeholder="Ваше имя"]');
            const emailInput = document.querySelector('.contacts__input input[placeholder="Ваш email"]');
            const checkbox = document.querySelector('.contacts__checkbox-input');
            
            [nameInput, emailInput].forEach(input => {
                if (input) {
                    input.style.borderColor = '#645F4C';
                    input.style.boxShadow = 'none';
                }
            });
            
            if (!nameInput || nameInput.value.trim().length < 2) {
                showNotification(
                    '❌ Ошибка',
                    'Пожалуйста, введите ваше имя (минимум 2 символа).',
                    'error'
                );
                if (nameInput) {
                    nameInput.style.borderColor = '#e74c3c';
                    nameInput.style.boxShadow = '0 0 10px rgba(231, 76, 60, 0.3)';
                    nameInput.focus();
                }
                return;
            }
            
            if (!emailInput || emailInput.value.trim() === '') {
                showNotification(
                    '❌ Ошибка',
                    'Пожалуйста, введите ваш email.',
                    'error'
                );
                if (emailInput) {
                    emailInput.style.borderColor = '#e74c3c';
                    emailInput.style.boxShadow = '0 0 10px rgba(231, 76, 60, 0.3)';
                    emailInput.focus();
                }
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                showNotification(
                    '❌ Ошибка',
                    'Пожалуйста, введите корректный email (например, name@domain.com).',
                    'error'
                );
                if (emailInput) {
                    emailInput.style.borderColor = '#e74c3c';
                    emailInput.style.boxShadow = '0 0 10px rgba(231, 76, 60, 0.3)';
                    emailInput.focus();
                }
                return;
            }
            
            if (!checkbox || !checkbox.checked) {
                showNotification(
                    '❌ Ошибка',
                    'Пожалуйста, согласитесь на обработку персональных данных.',
                    'error'
                );
                if (checkbox) {
                    checkbox.parentElement.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        checkbox.parentElement.style.transform = 'scale(1)';
                    }, 300);
                }
                return;
            }
            
            showNotification(
                '✅ Успешно отправлено!',
                `Спасибо, ${nameInput.value.trim()}! Мы свяжемся с вами в ближайшее время.`,
                'success'
            );
            
            this.textContent = '✓ Отправлено!';
            this.style.backgroundColor = '#27ae60';
            setTimeout(() => {
                this.textContent = 'Отправить сообщение';
                this.style.backgroundColor = '#B37B48';
            }, 2000);
            
            nameInput.value = '';
            emailInput.value = '';
            checkbox.checked = false;
        });
    }
    
    // Плавное появление карточек.
    
    const cards = document.querySelectorAll('.card, .menu-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + index * 150);
    });
    
    // Анимация для страницы "О нас".
    
    const aboutTitle = document.querySelector('.about__content h1');
    if (aboutTitle) {
        aboutTitle.style.opacity = '0';
        aboutTitle.style.transform = 'translateX(-30px)';
        aboutTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            aboutTitle.style.opacity = '1';
            aboutTitle.style.transform = 'translateX(0)';
        }, 300);
    }
    
    const aboutText = document.querySelector('.about__content p');
    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(-30px)';
        aboutText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            aboutText.style.opacity = '1';
            aboutText.style.transform = 'translateX(0)';
        }, 500);
    }
    
    const aboutMission = document.querySelector('.about__mission');
    if (aboutMission) {
        aboutMission.style.opacity = '0';
        aboutMission.style.transform = 'scale(0.95)';
        aboutMission.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            aboutMission.style.opacity = '1';
            aboutMission.style.transform = 'scale(1)';
        }, 700);
    }
    
    // Эффекты для карточек.
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 40px rgba(179, 123, 72, 0.2)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Эффекты для соцсетей.
    
    const socialIcons = document.querySelectorAll('.footer__social');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(-5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Функции уведомлений.

function showNotification(title, message, type = 'success') {
    const oldNotifications = document.querySelectorAll('.custom-notification');
    oldNotifications.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };
    
    const bgColor = colors[type] || colors.success;
    
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        max-width: 420px;
        background: #2A1F16;
        border-left: 6px solid ${bgColor};
        border-radius: 16px;
        padding: 24px 28px;
        font-family: 'Manrope', sans-serif;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        transform: translateX(120%);
        transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        border: 1px solid rgba(179, 123, 72, 0.3);
        backdrop-filter: blur(10px);
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 16px;">
            <div style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: ${bgColor}33; display: flex; align-items: center; justify-content: center; font-size: 22px;">
                ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
            </div>
            <div style="flex: 1;">
                <h4 style="margin: 0 0 6px 0; color: #F9F2E8; font-size: 18px; font-weight: 700; line-height: 1.2;">
                    ${title}
                </h4>
                <p style="margin: 0; color: rgba(249, 242, 232, 0.8); font-size: 16px; line-height: 1.5;">
                    ${message}
                </p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: none;
                border: none;
                color: rgba(249, 242, 232, 0.5);
                font-size: 20px;
                cursor: pointer;
                padding: 0 0 0 8px;
                transition: color 0.3s ease;
                flex-shrink: 0;
            " onmouseenter="this.style.color='#F9F2E8'" onmouseleave="this.style.color='rgba(249, 242, 232, 0.5)'">
                ✕
            </button>
        </div>
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: ${bgColor}; border-radius: 0 0 16px 16px; animation: progressBar 4s linear forwards;">
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(120%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 500);
        }
    }, 4500);
}

// Стили для анимаций.
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes progressBar {
        from { width: 100%; }
        to { width: 0%; }
    }
`;
document.head.appendChild(styleSheet);