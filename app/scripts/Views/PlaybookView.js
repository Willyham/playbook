define([
    'jquery',
    'underscore',
    'backbone',
    'Views/PlaybookPlayView',
    'Models/Play'], function($,_,Backbone,PlaybookPlayView,Play){
        var PlaybookView = Backbone.View.extend({

            tagName:'ul',
            collection: null,

            events: {
                'click .copy': 'copyPlay'
            },

            initialize: function(playbook){
                this.collection = playbook;
                this.listenTo(this.collection, 'add', this.renderPlay);
            },

            render: function(){
                return this.$el;
            },

            renderPlay: function(model){
                var listItem = new PlaybookPlayView({
                    model: model
                });
                this.$el.append(listItem.render());
            },

            addPlay: function(model){
                this.collection.create(model);
            },

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

            copyPlay: function(event){
                var targetPlayID = $(event.target).data('id');
                var play = this.collection.get(targetPlayID);
                if(_.isUndefined(play)){
                    return;
                }
                var newPlay = new Play(play.omit(['id','cid']));
                newPlay.set('name', play.get('name') + ' (copy)');
                newPlay.set('selected', false);
                this.collection.add(newPlay);
                newPlay.save();

            }
        });
        return PlaybookView;
    }
);