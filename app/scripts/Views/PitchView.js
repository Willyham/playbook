define([
    'jquery',
    'underscore',
    'backbone',
    'Views/PitchDetailsView',
    'Views/PlayView',
    'raphael'], function($,_,Backbone, PitchDetailsView, PlayView, Raphael){
        var PitchView = Backbone.View.extend({

            el: $('#pitch'),
            _model: null,
            _pitchDetailsView: null,
            _playView: null,


            /**
             * Initialise the PitchView.
             * Initially draw the pitch without a play (model)
             */
            initialize: function(){

            },

            /**
             * Set the model to draw. If we already had one set, then destroy the current play
             * @param model
             */
            setPlay: function(model){
                if(!_.isNull(this._model)){
                    this.clearPlay();
                }
                this._model = model;
                this.listenToModel();
            },

            listenToModel: function(){
                var self = this;
                this.listenTo(this._model, 'destroy', function(){
                    self.clearPlay();
                    self.render();
                });
                this.listenTo(this._model, 'change', this.render);
            },

            /**
             * If we have a PitchDetailsView, destroy it and the PlayView.
             * Stop listening to changes to the model, and lose the reference to it.
             */
            clearPlay: function(){
                if(!_.isNull(this._pitchDetailsView)){
                    this._pitchDetailsView.remove();
                    this._playView.remove();
                }
                this.stopListening(this._model);
                this._model = null;
            },

            /**
             * Render the PitchView, optionally drawing the Play if we have one set
             * @returns {jQuery}
             */
            render: function(){
                this.$el.empty();
                // If we have a model, draw it.
                if(!_.isNull(this._model)){
                    this._renderPlay(this._model);
                }
                return this.$el;
            },

            /**
             * Render the Play by creating a pitch details view and a PlayView.
             * @param {Play} model The Play to render.
             * @private
             */
            _renderPlay: function(model){
                this._pitchDetailsView = new PitchDetailsView({
                    model: model
                });
                this._playView = new PlayView({
                    model: model,
                    width: this.$el.width(),
                    height: this.$el.height()
                });
                this.$el.append(this._pitchDetailsView.render());
                this.$el.append(this._playView.render());
            }
        });
        return PitchView;
    }
);