var axios = require('axios');
const WorkerDetails = require('../../models/WorkerDetails');
/**
 * Save a new Worker to database.
 * 
 * @param {object} workerData - The poroperties of the Worker, ex(name.first, name.last)
 */
async function createWorker(workerData) {
    return WorkerDetails.create(workerData);
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
    createWorker,
    sendUltimateAIRequest
};