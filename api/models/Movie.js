const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  actors: [String],
  ageLimit: String,
  description: String,    // Needs to be written in Swedish
  director: String,
  genre: String,
  image: String,
  language: String,
  length: String,       // Or should this be a Number? But info from OMDB is ie Runtime: "155 min"
  productionCountries: [String],
  productionYear: Number,
  title: String,
  youtubeTrailer: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
