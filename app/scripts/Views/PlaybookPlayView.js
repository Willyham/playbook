define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlaybookPlayView = Backbone.View.extend({

            tagName:'li',
            template: _.template('<div class="playItem <%= selected%>"><img class="football" src="../../images/football.svg"/><a href="#/play/<%= id %>"><%= name %></a><span class="playActions"><em class="playAction copy" data-id="<%= id %>">copy</em><em class="playAction delete">delete</em></span></div>'),
            model: null,

            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
            },

            events: {
                'click .delete': 'removePlay',
                'click .copy': 'copyPlay'
            },

            render: function(){
                this.$el.html(this.template({
                    id: this.model.get('id'),
                    name: this.model.get('name'),
                    selected: this.model.get('selected') ? 'selected' : ''
                }));
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