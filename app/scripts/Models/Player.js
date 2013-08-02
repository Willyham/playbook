define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var Player = Backbone.Model.extend({
            defaults: {
                x: 500,
                y: 500,
                type: 'offence'
            }
        });
        return Player;
    }
);