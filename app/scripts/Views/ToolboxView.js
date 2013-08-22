define([
    'jquery',
    'underscore',
    'backbone',
    'Views/Players/PlayerView',
    'Models/Player',
    'Collections/Players'], function($,_,Backbone, PlayerView, Player, Players){
        var ToolboxView = Backbone.View.extend({

            el: $('#toolbox'),
            template: _.template('<h3>Toolbox</h3><div id="playerList"></div>'),
            _playModel: null,
            _playType: null,

            /**
             * Create a dummy Players collection which we'll use to draw the toolbox.
             * When we switch between plays, we'll refill the collection based on the defaults for that
             * type of play
             */
            initialize: function(){

            },

            events: {
                'click'/* .player'*/ : 'addPlayer'
            },

            render: function(){
                return this.$el.html(this.template());
            },

            /**
             * Change play type by resetting the dummy players collection
             * @param playModel
             * @private
             *
             * TODO: move players into player factory.
             */
            _changePlayType: function(playModel){

            },

            /**
             * Take the selected player type from the dummy players collection
             * and create a clone of the player. Then, set that player's playID and save the model.
             * @param event
             */
            addPlayer: function(event){
                var newPlayer = new Player({
                    type: 'circle',
                    x: 100,
                    y: 100,
                    width: 50,
                    height: 50
                });
                this._playModel.players.push(newPlayer);
                this._playModel.save();
            },

            /**
             * Select a play. Listen to the model for changes to the type so we can switch players
             * in the toolbox
             * @param {Play} play The play to select.
             */
            selectPlay: function(play){
                if(this._playModel){
                    //Stop listening to a model we aren't drawing.
                    this._playModel.stopListening();
                }
                //Listen to changes to the model while we're showing it
                this._playModel = play;
                this.listenTo(this._playModel, 'change:type', this._changePlayType);
                this.listenTo(this._playModel, 'destroy', this._emptyToolbox);
                this._changePlayType(this._playModel);
            },

            _emptyToolbox: function(){
                this.$el.find('#playerList').empty();
            }
      });
        return ToolboxView;
    }
);