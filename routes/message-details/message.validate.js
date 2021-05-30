const Joi = require('@hapi/joi');


/**
 * Validate Request Parameters for create Message API
 * @param {*} params 
 */
async function createMessageValidation(params) {
	const schema = Joi.object({
			botId: Joi.string().required(),
			message: Joi.string().required()
	});
	return schema.validate(params);
}

module.exports = {
	createMessageValidation,
};