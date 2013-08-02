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
            _dummyPlayers: null,
            _playModel: null,
            _playType: null,

            /**
             * Create a dummy Players collection which we'll use to draw the toolbox.
             * When we switch between plays, we'll refill the collection based on the defaults for that
             * type of play
             */
            initialize: function(){
                this._dummyPlayers = new Players();
                this.listenTo(this._dummyPlayers, 'reset', this._renderPlayers);
            },

            events: {
                'click .player' : 'addPlayer'
            },

            render: function(){
                return this.$el.html(this.template());
            },

            /**
             * Render the who player collection.
             * @param {Players} players The players collection
             * @private
             */
            _renderPlayers: function(players){
                players.forEach(_.bind(this._renderPlayer, this));
            },

            /**
             * Render a single player.
             * @param {Player} player The player to render
             * @private
             */
            _renderPlayer: function(player){
                var pv = new PlayerView({
                    model: player
                });
                var playerList = this.$el.find('#playerList');
                playerList.append(pv.render());
            },

            /**
             * Change play type by resetting the dummy players collection
             * @param playModel
             * @private
             *
             * TODO: move players into player factory.
             */
            _changePlayType: function(playModel){
                // Clear current player list
                this.$el.find('#playerList').empty();
                var newModels = [];
                var type = playModel.get('type');
                switch(type){
                    case 'football':
                        var offence = new Player({
                            type: 'offence'
                        });
                        var defence = new Player({
                            type: 'defence'
                        });
                        newModels.push(offence, defence);
                        break;
                    case 'ultimate':
                        var handler = new Player({
                            type: 'handler'
                        });
                        newModels.push(handler);
                }

                // Reset the collection, which will call 'add' for new models
                this._dummyPlayers.reset(newModels);
            },

            /**
             * Take the selected player type from the dummy players collection
             * and create a clone of the player. Then, set that player's playID and save the model.
             * @param event
             * TODO: Don't rely on the text to select player type
             */
            addPlayer: function(event){
                var targetPlayerType = $(event.target).text();
                var player = _.first( this._dummyPlayers.where({
                    'type' : targetPlayerType
                }));
                if(_.isUndefined(player)){
                    return;
                }

                var newPlayer = player.clone();
                newPlayer.set('onPlay', this._playModel.get('id'));
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
                this._playModel = play;
                this.listenTo(this._playModel, 'change:type', this._changePlayType);
                var newPlayType = this._playModel.get('type');
                if(this._playType !== newPlayType){
                    this._playType = newPlayType;
                    this._changePlayType(this._playModel);
                }
            }
      });
        return ToolboxView;
    }
);