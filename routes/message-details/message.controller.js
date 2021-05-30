const validation = require('./message.validate');
const HttpResponsesConst = require('../../constants/http-responses.constants');
const formatResponse = require('../../constants/response-formate.constants').formatResponse;

const messageService = require('./message.service');



/**
 * End Point for send message from customer to ultimate AI
 * @param {*} req 
 * @param {*} res 
 */
async function sendMessage(req, res) {
	const reqBody = req.body;

	const errorRequest = await validation.createMessageValidation(reqBody);
	if (errorRequest.error) {
		return formatResponse(res, HttpResponsesConst.BadRequest, errorRequest.error);
	}
	messageService.sendUltimateAIRequest(reqBody)
		.then(async messageIntentResponse => {
			let intentResponse = messageIntentResponse.data.intents
			let HigherConfidence = getHigherConfidence(intentResponse);
			await saveToRepliesDB(req.body, intentResponse, HigherConfidence);
			formatResponse(res, HttpResponsesConst.OK, HigherConfidence);
		})
		.catch(e => formatResponse(res, HttpResponsesConst.InternalServerError, e.toString()));
}


function saveToRepliesDB(requestBody, intents, HigherConfidence) {
	return messageService.createMessage({
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
	sendMessage
};