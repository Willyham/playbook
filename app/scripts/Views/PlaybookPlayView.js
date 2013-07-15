define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlaybookPlayView = Backbone.View.extend({

            tagName:'li',
            template: _.template('<a href="/plays/<%= id %>"><%= name %></a><em class="delete">[X]</em>'),

            model: null,

            events: {
                'click .delete': 'removePlay'
            },

            render: function(){
                var id = this.model.isNew() ? this.model.get('cId') : this.model.get('id');
                this.$el.html(this.template({
                    id: id,
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