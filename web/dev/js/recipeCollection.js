var Backbone = require("backbone");
var $ = require('jquery');

var Recipe = require('./recipeModel');

var Recipes = Backbone.Collection.extend({
    url: '/recipes',
    model: Recipe
});

module.exports = Recipes;
