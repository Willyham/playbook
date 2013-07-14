define([
    'jquery',
    'underscore',
    'backbone',
    'Models/Play'], function($,_,Backbone, Play){
        var Playbook = Backbone.Collection.extend({
            model: Play
        });
        return Playbook;
    }
);