module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: 'Your account was registered!'
    })
  })
}
