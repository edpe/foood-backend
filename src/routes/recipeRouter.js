var express = require('express');
var app = express();
var recipeRouter = express.Router();

// Require Recipe model in routes module
var Recipe = require('../models/Recipe');

// Defined store route
recipeRouter.route('/add/post').post(function (req, res) {
  var recipes = new Recipe(req.body);
      recipes.save()
    .then(recipes => {
    res.status(200).json({Recipe: 'Recipe added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Define get data route
recipeRouter.route('/').get(function (req, res) {
  Recipe.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});

// Define edit route
recipeRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Recipe.findById(id, function (err, recipes){
      res.json(recipes);
  });
});

//  Define update route
recipeRouter.route('/update/:id').post(function (req, res) {
  Recipe.findById(req.params.id, function(err, recipes) {
    if (!recipes)
      return next(new Error('Could not load Document'));
    else {

      recipes.recipes = req.body.recipes;

      recipes.save().then(recipes => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Define delete | remove | destroy route
recipeRouter.route('/delete/:id').get(function (req, res) {
  Recipe.findByIdAndRemove({_id: req.params.id},
	   function(err, recipes){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = recipeRouter;
