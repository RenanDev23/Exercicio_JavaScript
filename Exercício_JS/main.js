document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-deposito');
    const campoA = document.getElementById('campo-A');
    const campoB = document.getElementById('campo-B');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        if (campoA.value === '' || campoB.value === '') {
            errorMessage.innerText = 'Preencha este campo.';
            errorMessage.style.display = 'block';
            return;
        }

        const numA = parseInt(campoA.value);
        const numB = parseInt(campoB.value);

        if (numA < 0 || numA > 8) {
            errorMessage.style.display = 'block';
            return;
        }

        if (numB < 1 || numB > 9 || numB <= numA) {
            errorMessage.innerText = 'ERRO TENTE NOVAMENTE!';
            errorMessage.style.display = 'block';
            return;
        }

        successMessage.innerText = 'Correto, parabéns!';
        successMessage.style.display = 'block';
    });

    campoA.addEventListener('input', function () {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    });

    campoB.addEventListener('input', function () {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    });
});