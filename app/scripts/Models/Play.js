define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var Play = Backbone.Model.extend({
            defaults: {
                name: 'New Play',
                type: 'football',
                selected: false
            }
        });
        return Play;
    }
);