define([
    'jquery',
    'underscore',
    'backbone',
    'Views/PitchDetailsView'], function($,_,Backbone, PitchDetailsView){
        var PitchView = Backbone.View.extend({

            el: $('#pitch'),
            _model: null,
            _pitchDetailsView: null,

            listenToModel: function(){
                var self = this;
                this.listenTo(this._model, 'destroy', function(){
                    self.clearPlay();
                    self.render();
                });
                this.listenTo(this._model, 'change', this.render);
            },

            clearPlay: function(){
                if(!_.isNull(this._pitchDetailsView)){
                    this._pitchDetailsView.remove();
                }
                this.stopListening(this._model);
                this._model = null;
            },

            setPlay: function(model){
                if(!_.isNull(this._model)){
                    this.clearPlay();
                }
                this._model = model;
                this.listenToModel();
            },

            render: function(){
                this.$el.empty();
                // If we have a model, draw it.
                if(!_.isNull(this._model)){
                    this._pitchDetailsView = new PitchDetailsView(this._model);
                    this.$el.append(this._pitchDetailsView.render());
                }
                return this.$el;
            }
        });
        return PitchView;
    }
);