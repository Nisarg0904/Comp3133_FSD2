const Movie = require("./models/Movie");

const resolvers = {
  Query: {
    getAllMovies: async () => {
      return await Movie.find();
    },
    getMovieById: async (_, { id }) => {
      return await Movie.findById(id);
    },
  },
  Mutation: {
    addMovie: async (
      _,
      { name, director_name, production_house, release_date, rating }
    ) => {
      const newMovie = new Movie({
        name,
        director_name,
        production_house,
        release_date,
        rating,
      });
      await newMovie.save();
      return newMovie;
    },
    updateMovie: async (
      _,
      { id, name, director_name, production_house, release_date, rating }
    ) => {
      const updatedMovie = await Movie.findByIdAndUpdate(
        id,
        { name, director_name, production_house, release_date, rating },
        { new: true }
      );
      return updatedMovie;
    },
    deleteMovie: async (_, { id }) => {
      const movie = await Movie.findByIdAndDelete(id);
      if (!movie) return "Movie not found";
      return "Movie deleted successfully";
    },
  },
};

module.exports = resolvers;
