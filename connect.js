const sql = require('mysql')

// const connect = sql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'myapp'
// })

const connect = sql.createConnection({
    host: 'fdb26.awardspace.net',
    user: '3078762_myapp',
    password: 'myapp123.',
    database: '3078762_myapp'
})

connect.connect((err) => {
    if (err) {
        throw err
    }
})

module.exports = connect