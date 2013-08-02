define([
    'jquery',
    'underscore',
    'backbone',
    'Collections/Players'], function($,_,Backbone,Players){
        var Play = Backbone.Model.extend({

            constructor: function(){
                this.players = new Players();
                Backbone.Model.apply(this, arguments);
            },

            defaults: function(){
                return {
                    name: 'New Play',
                        type: 'football',
                    selected: false
                }
            },

            parse: function(attributes){
                if(attributes.players){
                    this.players.reset(attributes.players);
                    attributes = _.omit(attributes, 'players');
                }
                return attributes;
            },

            toJSON: function(){
                var attributes = _.clone(this.attributes);
                var playersJSON = this.players.toJSON();
                if(!_.isEmpty(playersJSON)){
                    attributes.players = playersJSON;
                }
                return attributes;
            }

        });
        return Play;
    }
);