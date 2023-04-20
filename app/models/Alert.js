const { Schema, model } = require('mongoose');

const alertSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    unique: true,
  },
  recordedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  level: {
    type: String,
    enum: ['severe', 'high', 'medium', 'low'],
    required: true,
  },
  ImmediateAttention: {
    type: Boolean,
    required: true,
  },
  nurse: { type: Number, ref: 'Nurse', required: true },
  patient: { type: Number, ref: 'Patient', required: true },
});

const Alert = model('Alert', alertSchema);
module.exports = { Alert };
