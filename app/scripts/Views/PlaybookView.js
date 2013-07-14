define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlaybookView = Backbone.View.extend({

            tagName:'ul',
            template: _.template('Play: <%= name %>'),
            collection: null,

            initialize: function( playbook ){
                this.collection = playbook;
                this.listenTo(this.collection, 'add', this.render);
            },

            render: function(model){
                debugger;
                var data = this.template(model);
                this.$el.append(data);
                return this.$el;
            },

            addPlay: function(model){
                this.collection.add(model);
            }
        });
        return PlaybookView;
    }
);