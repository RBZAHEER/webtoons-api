const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 100, // 1 minutes
  max: 5, // Limit each IP to 5 requests per `window` (here, per 1 minutes)
  message: "Too many requests from this IP, please try again after 1 minutes",
});

module.exports = limiter;
