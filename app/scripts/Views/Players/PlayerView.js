define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlayerView = Backbone.View.extend({

            className: 'player',

            initialize: function(){

            },

            render: function(){
                return this.$el;
            }
        });
        return PlayerView;
    }
);