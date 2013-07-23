define([
    'jquery',
    'underscore',
    'backbone',
    'Views/Players/PlayerView'], function($,_,Backbone, PlayerView){
        var ToolboxView = Backbone.View.extend({

            el: $('#toolbox'),
            template: _.template('<h3>Toolbox</h3><div id="playerList"></div>'),

            initialize: function(){

            },

            render: function(){
                var player = new PlayerView();
                this.$el.html(this.template());
                var playerList = this.$el.find('#playerList');
                playerList.append(player.render());
            }
      });
        return ToolboxView;
    }
);