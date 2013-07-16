define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlaybookPlayView = Backbone.View.extend({

            tagName:'li',
            template: _.template('<a href="/plays/<%= id %>"><%= name %></a><em class="delete">[X]</em>'),
            model: null,

            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
            },

            events: {
                'click .delete': 'removePlay'
            },

            render: function(){
                this.$el.html(this.template({
                    id: this.model.get('id'),
                    name: this.model.get('name')
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