define([
    'jquery',
    'underscore',
    'backbone',
    'raphael',
    'Views/Players/PlayerView'], function($, _, Backbone, Raphael, PlayerView){
        var PlayView = Backbone.View.extend({

            defaults: {
                width: 500,
                height: 500
            },

            className: 'playView',

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

                // Set the dimensions on the underlying DOM element or the actual canvas wont scale.
                this.el.width = this.options.width;
                this.el.height = this.options.height;

                this.listenTo(this.model, 'destroy', this.removeCanvas);
                this.listenTo(this.model, 'change', this.render);

                //Listen to adding or removing players
                this.listenTo(this.model.players, 'add', this.render);
                this.listenTo(this.model.players, 'remove', this.render);

                this._paper = Raphael(this.el, this.$el.width(), this.$el.height()-50);
            },

            renderPlayer: function(player){
                debugger;
                // Create a new instance of the view, and render
                new PlayerView({
                    paper: this._paper,
                    model: player,
                    saveOnChange: false
                }).render();
            },

            /**
             * Draw each player on the canvas.
             * @returns {*}
             */
            render: function(){
                var self = this;
                this.model.players.forEach(function(player){
                    self.renderPlayer(player);
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