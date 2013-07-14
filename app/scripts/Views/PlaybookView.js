define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlaybookView = Backbone.View.extend({

            tagName:'ul',
            className:'nav nav-list',
            template: _.template('test'),

            initialize: function(){

            },

            render: function(){
                var data = this.template();
                this.$el.append(data);
                return this.$el;
            }
        });
        return PlaybookView;
    }
);