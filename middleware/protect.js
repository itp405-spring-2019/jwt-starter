const jwt = require('jsonwebtoken');

module.exports = function protect(request, response, next) {
  try {
    let [type, token] = request.header('Authorization').split(' ');
    let decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    next();
  } catch (err) {
    // response.status(401).json(err);
    response.status(401).json({
      error: 'Requests must provide an Authorization header containing a valid token'
    });
  }
};