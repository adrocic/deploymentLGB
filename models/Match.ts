import mongoose = require('mongoose');

//Create the schema which posts will adhere to
const Match = new mongoose.Schema({ data: Object, gameId: Number });

//Export the schema as 'Post'
export default mongoose.model('Match', Match);
