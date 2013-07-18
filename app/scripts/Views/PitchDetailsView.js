define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PitchDetailsView = Backbone.View.extend({

            template: _.template('<h2><%= name %></h2>'),
            _model: null,

            initialize: function(model){
                this._model = model
            },

            listenToModel: function(){
                this.listenTo(this._model, 'change:name', this.render);
            },

            render: function(){
                return this.$el.html(this.template(this._model.toJSON()));
            }
        });
        return PitchDetailsView;
    }
);