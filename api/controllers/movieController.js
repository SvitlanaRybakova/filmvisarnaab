const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  try {
    let movies = await Movie.find().exec();
    return res.json(movies);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
    throw error;
  }
};


const getMovieById = async (req, res) => {
  Movie.findById(req.params.movieId).exec(async(err, movie) => {
    if(err) {
      throw new Error ('error message: ', err)
    }
    return res.json(movie)
  })
}

module.exports = {
  getAllMovies,
  getMovieById,
};
