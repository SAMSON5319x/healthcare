import mongoose from 'mongoose';

const { Schema } = mongoose;

const appointmentSchema = new Schema({
    patientName: {
        type: String,
        required: true,
    },
    doctorName: {
        type: String,
        required: true,
    },
    appointmentDate: {
        type: Date,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Cancelled'],
        default: 'Scheduled',
    },
}, {
    timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;