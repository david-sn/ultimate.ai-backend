var mongoose = require('mongoose');

/** This is a worker who send the asset Schcema represent a model worker_details on database. */
var WorkerDetailsSchema = new mongoose.Schema({  
    botId: String,
    message: String,
    intents:[{
        confidence:String,
        name:String
    }],
    higherConfidence:{
        confidence:String,
        name:String
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true });

module.exports = mongoose.model('worker_details', WorkerDetailsSchema);
