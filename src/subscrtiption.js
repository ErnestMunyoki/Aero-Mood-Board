const buttons = document.querySelectorAll('.plan-toggle button');
const cards = document.querySelectorAll('.plan-card');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        cards.forEach(card => card.classList.remove('active'));
        button.classList.add('active');
        const target = button.getAttribute('data-plan');
        document.getElementById(target).classList.add('active');
    });
});