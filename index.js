require('dotenv').config()
const express = require('express') // импортируем модули в файл

const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000;
const sequelize = require('./db') // Подключаем БД
const models = require('./models/models')
const app = express(); // создаем обьект через функцию експерсс

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
      await  sequelize.authenticate() //Устанавливаем подключение к БД
        await sequelize.sync() // Сверяет состояние ЬД со схемой данных
        app.listen(PORT, () => console.log('Server started on port' + ' ' + 5000 )) // указываем какой порт должен прослушивать наш сервер
    } catch (e) {
        console.log(e)
    }
}

start();