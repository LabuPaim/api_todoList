import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
  hardSkill: {
    type: String,
    required: true,
  },
  softSkill: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});


const Characters = mongoose.model('characters', CharacterSchema);

export = Characters;
