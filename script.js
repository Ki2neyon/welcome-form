const form = document.getElementById('welcome-form');
const name = document.getElementById('name');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = name.value.trim();

    if (nameInput === '') {
        result.classList.add('error');
        result.textContent = ('Please enter your name.');
    } else {
        result.classList.remove('error');
        result.textContent = ('Welcome,' + nameInput + '!');
    }
});