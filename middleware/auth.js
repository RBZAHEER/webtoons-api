const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("jwt");
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    console.log(process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
