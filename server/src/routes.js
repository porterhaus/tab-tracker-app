const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.post('/register',
  AuthenticationController.register)
  
  app.post('/login',
  (req, res) => {
    res.send({
        message: `Hello ${req.body.email}. You are now logged in.`
    })
  })
}
