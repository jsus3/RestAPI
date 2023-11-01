const mongoose = require('mobgoose');
const Schema = mongoose.Schema;

//create ninja Schema & model

const NinjaSchema = new Schema({
    name: {
        type: String, required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    availability:{
        type: Boolean, default: false
    }
    //add in geo location

});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.export = Ninja;