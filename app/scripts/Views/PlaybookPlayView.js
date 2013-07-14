define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlaybookPlayView = Backbone.View.extend({

            tagName:'li',
            template: _.template('Play: <%= name %> <span class="delete">[X]</span>'),
            model: null,

            events: {
                'click .delete': 'removePlay'
            },

            render: function(){
                this.$el.html(this.template(this.model.attributes));
                return this.$el;
            },

            removePlay: function(){
                this.$el.remove();
                this.model.destroy();
            }
        });
        return PlaybookPlayView;
    }
);