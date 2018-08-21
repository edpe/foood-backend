var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define collection and schema for Recipes
var Recipe = new Schema(
  {
    title: {
      type: String
    },

    duration: {
      type: String
    }
  },
  {
    collection: "recipes"
  }
);

module.exports = mongoose.model("Recipe", Recipe);
