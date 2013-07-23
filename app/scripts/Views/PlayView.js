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

            initialize: function(model, width, height){
                this._model = model;
                this._width = width;
                this._height = height;

                // Setup canvas
                this.$el.width(this._width);
                this.$el.height(this._height);

                this.listenTo(this._model, 'destroy', function(){
                    self.clearPlay();
                });
                this.listenTo(this._model, 'change', this.render);
            },

            render: function(){
                return this.$el;
            }
        });
        return PlayView;
    }
);