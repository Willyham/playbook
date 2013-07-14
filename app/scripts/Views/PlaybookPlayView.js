define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlaybookPlayView = Backbone.View.extend({

            tagName:'li',
            template: _.template('Play: <%= name %>'),
            model: null,

            render: function(){
                this.$el.html(this.template(this.model.attributes));
                return this.$el;
            }
        });
        return PlaybookPlayView;
    }
);