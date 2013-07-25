define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlayerView = Backbone.View.extend({

            className: 'player',
            _model: null,
            template: _.template('<%= type %>'),

            initialize: function(model){
                this._model = model;
            },

            render: function(){
                this.$el.append(this.template(this._model.toJSON()));
                return this.$el;
            }
        });
        return PlayerView;
    }
);