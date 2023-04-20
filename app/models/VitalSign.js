const { Schema, model } = require('mongoose');

const vitalSignSchema = new Schema({
  recordedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  heartRate: {
    type: Number,
    required: true,
  },
  bloodPressure: {
    type: Number,
    required: true,
  },
  respiratoryRate: {
    type: Number,
    required: true,
  },
  bodyTemperature: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  nurse: { type: Number, ref: 'Nurse' },
  patient: { type: Number, ref: 'Patient', required: true },
});

const VitalSign = model('VitalSign', vitalSignSchema);
module.exports = { VitalSign };
