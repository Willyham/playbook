define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlayView = Backbone.View.extend({

            className: 'playView',
            tagName: 'canvas',
            _model: null,

            _width: null,
            _height: null,
            _context: null,

            initialize: function(model, width, height){
                this._model = model;
                this._width = width;
                this._height = height;

                // Setup canvas
                this.$el.width(this._width);
                this.$el.height(this._height);
                this._context = this.el.getContext('2d');

                this.listenTo(this._model, 'destroy', this.removeCanvas);
                this.listenTo(this._model, 'change', this.render);
            },

            render: function(){
                var self = this;
                this._model.get('players').forEach(function(player){
                    self._context.beginPath();
                    self._context.arc(player.get('x'), player.get('y'), 2, 0, 2 * Math.PI, false);
                    self._context.fill();
                });
                return this.$el;
            },

            removeCanvas: function(){
                this.$el.remove();
            }
        });
        return PlayView;
    }
);