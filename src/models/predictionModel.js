import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const predictionsSchema = new Schema({
    date: {
        type: String
    },
    temperature: {
        type: Number
    },
    relativeHumidity: {
        type: Number,

    },
    windSpeed: {
        type: Number
    },
    spreads: {
        type: Number
    },
    risk:{
        type:String
    }

});