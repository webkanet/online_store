const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
process.env.DB_NAME, // Название БД
    process.env.DB_USER, //Имя пользователя
    process.env.DB_PASSWORD, //Передаем пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)