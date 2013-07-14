define([
    'jquery',
    'underscore',
    'backbone',
    'Models/Play',
    'localstorage'], function($,_,Backbone, Play){
        var Playbook = Backbone.Collection.extend({
            model: Play,
            localStorage: new Backbone.LocalStorage("Playbook")
        });
        return Playbook;
    }
);