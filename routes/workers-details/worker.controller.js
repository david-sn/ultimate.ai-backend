const validation = require('./worker.validate');
const HttpResponsesConst = require('../../constants/http-responses.constants');
const formatResponse = require('../../constants/response-formate.constants').formatResponse;

const workerService = require('./worker.service');



/**
 * End Point for find all Workers
 * @param {*} req 
 * @param {*} res 
 */
async function getAllWorkers(req, res) {
	const reqQuery = req.query;

	const errorRequest = validation.getAllWorkersValidation(reqQuery);
	if (errorRequest.error) {
		return formatResponse(res, HttpResponsesConst.BadRequest, errorRequest.error);
	}
	workerService.sendUltimateAIRequest(req.body)
		.then(async workers => {
			let intentResponse = workers.data.intents
			let HigherConfidence = getHigherConfidence(intentResponse);
			await saveToRepliesDB(req.body, intentResponse, HigherConfidence);
			formatResponse(res, HttpResponsesConst.OK, HigherConfidence);
		})
		.catch(e => formatResponse(res, HttpResponsesConst.InternalServerError, e.toString()));
}


function saveToRepliesDB(requestBody, intents, HigherConfidence) {
	return workerService.createWorker({
		botId: requestBody.botId,
		message: requestBody.message,
		intents: intents,
		higherConfidence: HigherConfidence,
	})
}


function getHigherConfidence(intents) {
	return intents.reduce(function (prev, current) {
		return (prev.confidence > current.confidence) ? prev : current
	});
}

module.exports = {
	getAllWorkers
};