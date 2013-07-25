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

            initialize: function(){
                this._dummyPlayers = new Players();
                this.listenTo(this._dummyPlayers, 'add', this.renderPlayer);
            },

            addDummyPlayers: function(){
                var offence = new Player({
                    type: 'offence'
                });
                var defence = new Player({
                    type: 'defence'
                });
                this._dummyPlayers.add([offence, defence]);
            },

            events: {
                'click .player' : 'addPlayer'
            },

            renderPlayer: function(player){
                var pv = new PlayerView(player);
                var playerList = this.$el.find('#playerList');
                playerList.append(pv.render());
            },

            render: function(){
                this.$el.html(this.template());
            },

            addPlayer: function(event){
                var targetPlayerType = $(event.target).attr('type');
                var player = _.first( this._dummyPlayers.where({
                    'type' : targetPlayerType
                }));
                if(_.isUndefined(player)){
                    return;
                }
                console.log(player);
            }
      });
        return ToolboxView;
    }
);