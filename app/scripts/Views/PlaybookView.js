define([
    'jquery',
    'underscore',
    'backbone',
    'Views/PlaybookPlayView',
    'Models/Play'], function($,_,Backbone,PlaybookPlayView,Play){
        var PlaybookView = Backbone.View.extend({

            el: $('#playbook'),
            template: _.template('<h3>New Playbook</h3><ul id="playlist"></ul>'),

            events: {
                'click .copy': 'copyPlay'
            },

            initialize: function(){
                if(!this.collection){
                    throw new Error('PlaybookView needs a Playbook collection');
                }
                this.listenTo(this.collection, 'add', this.renderPlayItem);
            },

            /**
             * Initially draw just a list to contain the playbook
             * @returns {jQuery}
             */
            render: function(){
                return this.$el.html(this.template());
            },

            /**
             * Render a play as an item in the list.
             * @param {Play} model The play to render
             */
            renderPlayItem: function(model){
                var listItem = new PlaybookPlayView({
                    model: model
                });
                this.$el.find('#playlist').append(listItem.render());
            },

            /**
             * Set a play as selected, deselecting the current selected play
             * if one exists. Then save both models.
             * @param {Play} model
             */
            selectPlay: function(model){
                this.collection.forEach(function(play){
                    play.set('selected', false);
                    if(play.hasChanged()){
                        play.save();
                    }
                });
                model.set('selected', true);
                model.save();
            },

            /**
             * Copy a play. Get a model from the ID in the DOM,
             * then clone it by creating a new model without the IDs,
             * Finally, rename the play, add it to the collection and save.
             * @param event
             */
            copyPlay: function(event){
                var targetPlayID = $(event.target).data('id');
                var play = this.collection.get(targetPlayID);
                if(_.isUndefined(play)){
                    return;
                }

                // Make a copy of the play without the IDs or players relation
                var newPlay = new Play(play.omit(['id','cid','players']));

                // Clone each player over and set the to the ID of the new play.
                // Backbone (relational) will automatically update the ID in the player relation
                play.get('players').forEach(function(player){
                    var newPlayer = player.clone();
                    newPlayer.set('onPlay', newPlay.cid);
                });

                newPlay.set('name', play.get('name') + ' (copy)');
                newPlay.set('selected', false);

                this.collection.add(newPlay);
                newPlay.save();
            }
        });
        return PlaybookView;
    }
);