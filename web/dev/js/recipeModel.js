var Backbone = require("backbone");
var $ = require('jquery');

var Recipe = Backbone.Model.extend({
    initialize: function(){
        console.log('Recipe initialized');
    }
});

module.exports = Recipe;
