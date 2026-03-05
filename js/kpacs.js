document.addEventListener('DOMContentLoaded', () => {
    const authOverlay = document.getElementById('auth-overlay');
    const navContact = document.getElementById('nav-contact');
    const closeAuth = document.getElementById('close-auth');
    const authTitle = document.getElementById('auth-title');
    const authInputs = document.getElementById('auth-inputs');
    const btnSubmit = document.getElementById('btn-submit');
    const btnLoginView = document.getElementById('btn-login-view');
    const btnRegisterView = document.getElementById('btn-register-view');
    const togglePassword = document.getElementById('toggle-password');
    const passwordField = document.getElementById('password-field');
    const logo = document.querySelector('.logo-area');


    // 1. Abrir/Cerrar Modal
    navContact.addEventListener('click', (e) => {
        e.preventDefault();
        authOverlay.classList.remove('hidden');
        logo.classList.add('cargando');
    });

    closeAuth.addEventListener('click', () => {
        authOverlay.classList.add('hidden');
        authInputs.classList.add('hidden');
        btnSubmit.classList.add('hidden');
        logo.classList.remove('cargando');
    });

    // 2. BOTONES DE INICIO/REGISTRO (Ahora sí funcionan)
    btnLoginView.addEventListener('click', () => {
        authTitle.innerText = "Iniciar Sesión";
        authInputs.classList.remove('hidden');
        btnSubmit.classList.remove('hidden');
    });

    btnRegisterView.addEventListener('click', () => {
        authTitle.innerText = "Registrarse";
        authInputs.classList.remove('hidden');
        btnSubmit.classList.remove('hidden');
    });

    // 3. El Ojito
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const isPassword = passwordField.getAttribute('type') === 'password';
            passwordField.setAttribute('type', isPassword ? 'text' : 'password');
            this.src = isPassword ? 'img/eye__on.svg' : 'img/eye__off.svg';
        });
    }
});

