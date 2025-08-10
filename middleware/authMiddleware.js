const jwt = require('jsonwebtoken');

const authenticationToken = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return redirectToLogin(res, 'Acesso Nao Autorizado');
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if(error) {
            return redirectToLogin(res, 'Token Invalido');
        }
        req.user = user;
        next();
    });

    const redirectToLogin = (res, message) => {
        res.status(401).send(`
            <html>
                <body>
                
                        <p>${message}</p>
    <p>Redirecionando para a pagina de login...</p>
    <script>
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);
    </script>
                
                </body>
            
            </html>
        `);
    };
};

module.exports = authenticationToken;