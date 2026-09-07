const mongoose = require('mongoose');

const disposalPointSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, 'El nombre del punto es obligatorio'] 
    },
    type: { 
      type: String, 
      enum: ['Aprovechables', 'Orgánicos', 'No aprovechables', 'Pilas y baterías', 'Electrónicos'], 
      required: [true, 'El tipo de residuo es obligatorio'] 
    },
    description: { 
      type: String 
    },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
    },
    schedule: { 
      type: String, 
      default: 'Lunes a Viernes: 7:00 AM - 6:00 PM' 
    },
    active: { 
      type: Boolean, 
      default: true 
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('DisposalPoint', disposalPointSchema);