import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  whatsapp: {
    type: String,
    required: true,
  },

}, {

  timestamps: true,

});

const Location = mongoose.model(
  "Location",
  locationSchema
);

export default Location;