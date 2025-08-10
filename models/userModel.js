const db = require('../config/bd');


class UserModel {

    constructor(id_usuario, nomeCompleto, email, sexo, dataNascimento,cpf){
        this.id_usuario = id_usuario;
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
    }
}

module.exports = UserModel;