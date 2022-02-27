require('dotenv').config({ path: './config.env' });

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const jwt = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
  const accessToken = req.header('accessToken');

  if (!accessToken) return res.json({ error: 'User not logged in' });

  try {
    const validToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    if (validToken) return next();
  } catch (error) {
    return res.json({ error });
  }
};
