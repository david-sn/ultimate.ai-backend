const Joi = require('@hapi/joi');


/**
 * Validate Request Parameters for create Worker API
 * @param {*} params 
 */
async function createWorkerValidation(params) {
	const schema = Joi.object({
		name: {
			first: Joi.string().required(),
			last: Joi.string().required()
		},
		siteId: Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i).required()
	});
	return schema.validate(params);
}

module.exports = {
	createWorkerValidation,
};