const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    title:{

        type: String,
        required:true

    },
    reps:{

        type: String,
        required: true

    },
    load:{
        type:Number,
        required:true

    }
},{timeStamp:true});

module.exports = mongoose.model('workout',workoutsSchema);
//module.exports = mongoose.model.workout || mongoose.model('workout', workoutsSchema);