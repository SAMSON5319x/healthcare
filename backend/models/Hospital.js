import mongoose from 'mongoose';

const { Schema } = mongoose;

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    website: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;