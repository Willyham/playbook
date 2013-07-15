define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PitchView = Backbone.View.extend({

            el: $('#pitch'),
            collection: null,
            template: _.template('<h2><%= name %></h2>'),

            render: function( model ){
                return this.$el;
            }
        });
        return PitchView;
    }
);