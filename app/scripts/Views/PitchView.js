define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PitchView = Backbone.View.extend({

            el: $('#pitch'),
            collection: null,
            template: _.template('<h2><%= name %></h2>'),

            initialize: function(playbook){
                this.collection = playbook;
            },

            render: function(){
                return this.$el;
            },

            addPlay: function(model){
                this.collection.create(model);
            }
        });
        return PitchView;
    }
);