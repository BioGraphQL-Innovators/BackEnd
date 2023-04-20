const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    _id: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    role: {
      type: String,
      enum: ['Nurse', 'Patient'],
      required: true,
    },
  },
  // eslint-disable-next-line comma-dangle
  { discriminatorKey: 'role' }
);

const User = model('User', userSchema);

const nurseSchema = new Schema({
  patients: [{ type: Number, ref: 'Patient', required: true }],
});

const Nurse = User.discriminator('Nurse', nurseSchema);

const patientSchema = new Schema({
  message_tip: { type: String },
  nurse: { type: Number, ref: 'Nurse', required: true },
});

const Patient = User.discriminator('Patient', patientSchema);

module.exports = { User, Nurse, Patient };
