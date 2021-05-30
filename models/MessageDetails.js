var mongoose = require('mongoose');
var MessageDetailsSchema = new mongoose.Schema({  
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

module.exports = mongoose.model('message_details', MessageDetailsSchema);
