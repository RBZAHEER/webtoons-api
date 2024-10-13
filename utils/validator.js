const Joi = require("joi");

const webtoonSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(), // Updated to 'description'
  characters: Joi.array().items(Joi.string()).required(),
});

module.exports = {
  webtoonSchema,
};
