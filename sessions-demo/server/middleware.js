const config = require('./config');

module.exports = {
  authenticate: (req, res, next) => {
    let rb = req.body
    if(rb.username === config.username && rb.password === config.password) {
      next()
    } else {
      res.status(403)
    }
  }
}