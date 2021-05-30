var axios = require('axios');
const MessageDetails = require('../../models/MessageDetails');
/**
 * Save a new Messagge to database.
 * 
 * @param {object} messageData -
 */
async function createMessage(messageData) {
    return MessageDetails.create(messageData);
}

async function sendUltimateAIRequest(data) {
    var config = {
        method: 'post',
        url: 'https://chat.ultimate.ai/api/intents',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': '825765d4-7f8d-4d83-bb03-9d45ac9c27c0'
        },
        data: data
    };
    return axios(config);
}



module.exports = {
    createMessage,
    sendUltimateAIRequest
};