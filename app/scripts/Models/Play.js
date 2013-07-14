define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var Play = Backbone.Model.extend({
            validate: function(){
                return true;
            }
        });
        return Play;
    }
);