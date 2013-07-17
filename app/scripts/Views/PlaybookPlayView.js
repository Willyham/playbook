define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlaybookPlayView = Backbone.View.extend({

            tagName:'li',
            template: _.template('<%= selected %><i class="icon-move"></i><a href="#/play/<%= id %>"><%= name %></a><span class="playActions"><em class="playAction copy">copy</em><em class="playAction delete">delete</em></span>'),
            model: null,

            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
            },

            events: {
                'click .delete': 'removePlay',
                'click .copy': 'copyPlay'
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this.$el;
            },

            removePlay: function(){
                this.$el.remove();
                this.model.destroy();
            },

            copyPlay: function(){
                //TODO: clone play
            }
        });
        return PlaybookPlayView;
    }
);