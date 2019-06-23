const sql = require('mysql')

// const connect = sql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'myapp'
// })

const connect = sql.createConnection({
    host: 'remotemysql.com',
    user: 'Io9W8WluqD',
    password: 'WRzo7qXpKC',
    database: 'Io9W8WluqD'
})

connect.connect((err) => {
    if (err) {
        throw err
    }
})

module.exports = connect