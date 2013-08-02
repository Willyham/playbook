define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var Player = Backbone.Model.extend({
            defaults: {
                x: 0,
                y: 0,
                type: 'offence'
            }
        });
        return Player;
    }
);