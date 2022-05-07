const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    // if token's length is larger than 500 then its google auth
    isCustomAuth = token.length < 500;
    const jwtSecret = process.env.JWT_SECRET;

    if (token && isCustomAuth) {
      const decodedData = jwt.verify(token, jwtSecret);
      req.userId = decodedData?.id;
    } else {
      // For google auth
      const decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
