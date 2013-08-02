define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlayerView = Backbone.View.extend({

            className: 'player',
            template: _.template('<%= type %>'),

            initialize: function(){
                if(!this.model){
                    throw new Error('PlayerView needs a Player model');
                }
            },

            render: function(){
                this.$el.append(this.template({
                    type: this.model.get('type')
                }));
                return this.$el;
            }
        });
        return PlayerView;
    }
);