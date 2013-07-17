define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PitchView = Backbone.View.extend({

            el: $('#pitch'),
            template: _.template('<h2><%= name %></h2>'),
            _model: null,

            listenToModel: function(){
                this.listenTo(this._model, 'destroy', this.clearPlay);
                this.listenTo(this._model, 'change', this.render);
            },

            clearPlay: function(){
                this.stopListening(this._model);
                this._model = null;
            },

            setPlay: function(model){
                this._model = model;
                this.listenToModel();
            },

            render: function(){
                this.$el.empty();
                // If we have a model, draw it.
                if(!_.isNull(this._model)){
                    this.$el.append(this.template(this._model.toJSON()));
                }
                return this.$el;
            }
        });
        return PitchView;
    }
);