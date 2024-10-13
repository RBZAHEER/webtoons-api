const express = require("express");
const router = express.Router();

const {
  getAllWebtoons,
  addWebtoon,
  getWebtoonById,
  deleteWebtoonById,
} = require("../controllers/webtoonController.js");
const auth = require("../middleware/auth.js");
const apiLimiter = require("../utils/rateLimiter.js");

// Apply rate limiter globally to all routes
router.use(apiLimiter);

router.get("/webtoons", getAllWebtoons, auth);
router.post("/webtoons", addWebtoon); // Protected route just write "auth" function here
router.get("/webtoons/:id", getWebtoonById);
router.delete("/webtoons/:id", deleteWebtoonById, auth); // Protected route just write "auth" function here
module.exports = router;
