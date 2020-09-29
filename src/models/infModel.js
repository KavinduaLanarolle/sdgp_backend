import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const registerSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: 'Enter email',
        unique:true
    },
    address: {
        type: String
    },
    contact: {
        type: String
    },
    nic: {
        type: String
    },
    password: {
        type: String,
        required: 'Enter password'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});