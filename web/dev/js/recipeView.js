var Backbone = require("backbone");
var $ = require('jquery');

var Recipe = require('./recipeModel');

var RecipeView = Backbone.View.extend({

    initialize: function() {
        this.model = new Recipe();
        console.log(this.model);
        this.render();
    },

    render: function (){
        $('#container').html('dupa');
    }

});

module.exports = RecipeView;
