document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const spinner = document.getElementById('spinner')
    const loginButton = document.getElementById('login-button');

    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if(!login || !password) {
        errorMessage.textContent = 'Preencha todos os campos.';
        errorMessage.style.display = 'block';

        setTimeout(()=> {
            errorMessage.style.display = 'none'
        }, 3000)
        return;
    }

    spinner.style.display = 'block'
    loginButton.disabled = true;

    try {

        const response = await fetch('/usuariosLogin', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({username: login, senha: password})
        });
        
        if (response.ok) {
            window.location.href = '/dashboard';
        } else {
            const errorText = await response.text();
            errorMessage.textContent.errorText || 'Erro ao fazer o login.';
            errorMessage.style.display = 'block';
        }
    } catch (error) {
        console.error('Erro na requisicao', error);
        errorMessage.textContent = 'Erro na conexao. tente novamente';
        errorMessage.style.display = 'block';
    } finally {
        spinner.style.display = 'none';
        loginButton.disabled = false;

        setTimeout(()=>{
            errorMessage.style.display = 'none';
        }, 3000);
    }

})