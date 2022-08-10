import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({  
  name: {
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
