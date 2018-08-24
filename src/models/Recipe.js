var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define collection and schema for Recipes
var Recipe = new Schema(
  {
    title: {
      type: String
    },

    ingredients: [
      {
        title: {
          type: String
        },
        quantity: {
          type: String
        },
        measurement: {
          type: String
        }
      }
    ],

    method: {
      step: {
        type: String
      }
    },

    duration: {
      type: String
    },

    image: {
      type: String
    }
  },
  {
    collection: "recipes"
  }
);

module.exports = mongoose.model("Recipe", Recipe);
