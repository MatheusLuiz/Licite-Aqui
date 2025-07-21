const mysql = require('mysql2/promise');
const dotenv = require('dotenv');


dotenv.config();

class DataBase {
    constructor(){
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database:process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }

    async getConnnection() {
        try {
            const connectionn = await this.pool.getConnection();
            console.log('Conectado ao banco de dados!');
            return connectionn;
        } catch (error) {
            console.error('Erro ao conectar ao banco de dados', error);
            throw error;
        }
    }

    async query(sql,params) {
        const connection = await this.getConnnection();

        try {
            const [results] = await connection.query(sql, params);
            return results;
        } catch (error) {
            console.error('erro na consulta', error);
            throw error;
        } finally {
            connection.release();
        }
    }
}

const db = new DataBase();
module.exports = db;