define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var Play = Backbone.Model.extend({
            url: '/play'
        });
        return Play;
    }
);