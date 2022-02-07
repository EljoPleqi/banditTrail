const { verify } = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
  const accessToken = req.headers('accessToken');

  if (!token) return res.json({ error: 'User not logged in' });

  try {
    const validToken = verify(accessToken, ACCESS_TOKEN_SECRET);
    if (validToken) return next();
  } catch (error) {
    return res.json({ error });
  }
};
