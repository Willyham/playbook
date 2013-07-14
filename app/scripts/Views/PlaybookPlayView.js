define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlaybookPlayView = Backbone.View.extend({

            tagName:'li',
            template: _.template('<a href="/plays/<%= id %>"><%= name %></a><span class="delete">[X]</span>'),
            model: null,

            events: {
                'click .delete': 'removePlay'
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this.$el;
            },

            removePlay: function(){
                this.$el.remove();
                this.model.destroy();
            },

            selectPlay: function(){
                console.log(1);
            }
        });
        return PlaybookPlayView;
    }
);