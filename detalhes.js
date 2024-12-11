document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            const emailInput = form.querySelector('input[type="email"]');
            const checkbox = form.querySelector('input[type="checkbox"]');
            const email = emailInput.value.trim();
            
            if (!email) {
                prompt('Por favor, preencha seu e-mail.');
                return;
            }

            if (email.length < 10 || !validateEmail(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            if (!checkbox.checked) {
                checkbox.style.backgroundColor = 'red'; 
                alert('Você precisa aceitar os termos de uso.');
                return;
            } else {
                checkbox.style.backgroundColor = ''; 
            }

            alert(`E-mail "${email}" cadastrado com sucesso!`);
        });
    });
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
}