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

            _renderPlayers: function(players){
                players.forEach(_.bind(this._renderPlayer, this));
            },

            _renderPlayer: function(player){
                var pv = new PlayerView(player);
                var playerList = this.$el.find('#playerList');
                playerList.append(pv.render());
            },

            //TODO: move players into player factory.
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

            addPlayer: function(event){
                var targetPlayerType = $(event.target).attr('type');
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

            selectPlay: function(playModel){
                if(this._playModel){
                    this._playModel.stopListening();
                }
                this._playModel = playModel;
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