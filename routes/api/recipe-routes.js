const express = require('express');
const Recipe  = require('../../models/Recipe');
const router = express.Router();
const mongoose = require('mongoose');
const RecipeBook = require('../../models/RecipeBook');
// const axios = require('axios');

router.post('/recipes/create/:id', (req, res, next) => {
    Recipe.create({
      recipeName: req.body.recipeName,
      preptime: req.body.preptime,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      image: req.body.image,
    })
    // console.log('=========================', req.body)
    .then (response => {
      console.log('???????Response????????1111111`', response);
      console.log('???????req.params????????22222222', req.params.id);
      RecipeBook.findByIdAndUpdate(req.params.id, {$push: {recipes: response._id}})
      .then(response => {
        console.log('???????req.params????????22222222', response);

        
        res.json(response)
      })
    .catch(err => {
      res.json(err)
    })
     
     
      console.log(response);
    })
    .catch(err => {
      res.json(err);
    })
  });


// GET route => to get all the recipes
// router.get('/recipes', (req, res, next) => {
//   Recipe.find().populate('author')
//     .then(allTheRecipes => {
//       res.json(allTheRecipes);
//     })
//     .catch(err => {
//       res.json(err);
//     })
// });

// GET route => to get a specific recipe/detailed view
router.get('/recipes/:label', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.label)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
                                   
  Recipe.findOne({label: req.params.label})
    .then(response => {
      res.session.currentRecipe = response;
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

// PUT route => to update a specific recipe
router.put('/recipes/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({message: `Recipe with ${req.params.id} is updated successfully.`});
    })
    .catch(err => {
      res.json(err);
    })
});

router.delete('/recipes/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  Recipe.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({message: `Recipe with ${req.params.id} is removed successfully.`});
    })
    .catch( err => {
      res.json(err);
    })
})


//Recipe Session

router.get('/currentrecipe', (req, res, next) => {
  res.json(req.session.currentRecipe)
})

router.post('/currentrecipe', (req, res, next) => {
  req.session.currentRecipe = req.body;
  res.json({message: 'success'})
})






module.exports = router;