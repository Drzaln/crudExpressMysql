'use strict'

const response = require('./response')
const connection = require('./connect')

exports.users = (req, res) => {
    connection.query ('SELECT * FROM persons', (err, rows, fields) => {
        if (err) {
            console.log(err)
        }else{
            response.ok(rows, res)
        }
    })
}

exports.welcome = (req, res) => {
    response.ok('Halo!', res)
}

exports.user = (req, res) => {
    connection.query (`SELECT * FROM persons WHERE id=${req.params.id}`, (err, rows, fields) => {
        if (err) {
            console.log(err)
        }else{
            response.ok(rows, res)
        }
    })
}

exports.add = (req, res) => {
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    connection.query(
        `INSERT INTO persons SET first_name="${first_name}", last_name="${last_name}"`, (err, rows, fields) => {
            if (err) {
                throw err
            } else {
                return res.send ({
                    err: false,
                    data: rows,
                    message: 'Data baru sudah dibuat'
                })
            }
        }
    )
}

exports.update = (req,res) => {
    let id = req.params.id
    let first_name = req.body.first_name
    let last_name = req.body.last_name

    connection.query(
        `UPDATE persons SET first_name="${first_name}", last_name="${last_name}" WHERE id=${id}`, (err, rows, fields) => {
            if (err) {
                throw err
            } else {
                return res.send({
                    err: false,
                    data: rows,
                    message: 'Data sudah diubah'
                })
            }
        }
    )
}

exports.destroy = (req, res) => {
    let id = req.params.id
    connection.query (`DELETE FROM persons WHERE id=${id}`, (err, rows, field) => {
        if (err) {
            throw err
        } else {
            return res.send({
                err: false,
                data: rows,
                message: 'Data sudah dihapus'
            })
        }
    })
}