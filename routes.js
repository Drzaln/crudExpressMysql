'use strict'

module.exports = (app) => {
    const controller = require('./controller')

    // GET
    app.route ('/').get (controller.welcome)
    app.route ('/users').get (controller.users)
    app.route ('/user/:id').get (controller.user)

    // POST
    app.route ('/user').post (controller.add)

    // PATCH
    app.route ('/user:id/').patch (controller.update)

    // DELETE
    app.route ('/user/:id').delete (controller.destroy)
}