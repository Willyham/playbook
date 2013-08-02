define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlayView = Backbone.View.extend({

            defaults: {
                width: 500,
                height: 500
            },

            className: 'playView',
            tagName: 'canvas',

            /**
             * The canvas 2d context
             */
            _context: null,

            /**
             * Initialise the PlayView, set the height and width of the canvas to fill the parent
             */
            initialize: function(){
                if(!this.model){
                    throw new Error('PlayView needs a Play model');
                }
                // Setup canvas
                this.$el.width(this.options.width);
                this.$el.height(this.options.height);
                this._context = this.el.getContext('2d');

                this.listenTo(this.model, 'destroy', this.removeCanvas);
                this.listenTo(this.model, 'change', this.render);
            },

            /**
             * Draw each player on the canvas.
             * @returns {*}
             */
            render: function(){
                var self = this;
                this.model.get('players').forEach(function(player){
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