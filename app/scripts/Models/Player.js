define([
    'jquery',
    'underscore',
    'backbone',
    'relational'], function($,_,Backbone){
        var Player = Backbone.RelationalModel.extend({
            defaults: {
                x: 0,
                y: 0,
                type: 'offence'
            }
        });
        return Player;
    }
);