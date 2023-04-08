import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';

console.log(process.env.DB_HOST);

const db = new Sequelize('agenciaviajes', 'root', '', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;