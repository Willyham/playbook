define([
    'jquery',
    'underscore',
    'backbone',
    'Models/Player',
    'relational'], function($,_,Backbone,Player){
        var Play = Backbone.RelationalModel.extend({
            defaults: {
                name: 'New Play',
                type: 'football',
                selected: false
            },
            relations: [{
                type: Backbone.HasMany,
                key: 'players',
                relatedModel: Player,
                reverseRelation: {
                    key: 'onPlay',
                    includeInJSON: 'id'
                }
            }]
        });
        return Play;
    }
);