define([
    'jquery',
    'underscore',
    'backbone',
    'Models/Player',
    'localstorage'], function($,_,Backbone, Player){
        var Players = Backbone.Collection.extend({
            model: Player
        });
        return Players;
    }
);