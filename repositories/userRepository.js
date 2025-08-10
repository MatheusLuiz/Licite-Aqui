const bd = require('../config/bd');
const User = require('../models/userModel');


class UserRepository{
    static async create(user) {
        const [rows] = await bd.query(
            'CALL sp_inserir_usuario(?,?,?,?,?)',
            [
                User.nomeCompleto,
                User.email,
                User.sexo,
                User.dataNascimento,
                User.cpf
            ]
        );

        return rows[0][0];
    }
}

module.exports = UserRepository;