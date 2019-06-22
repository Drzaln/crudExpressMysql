const sql = require('mysql')

const connect = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myapp'
})

connect.connect((err) => {
    if (err) {
        throw err
    }
})

module.exports = connect