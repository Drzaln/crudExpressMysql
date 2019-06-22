'use strict'

exports.ok = (val, res) => {
    const data = {
        status: 200,
        values: val,
    }
    res.json (data)
    res.end()
}