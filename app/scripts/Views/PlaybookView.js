define([
    'jquery',
    'underscore',
    'backbone',
    'Views/PlaybookPlayView'], function($,_,Backbone,PlaybookPlayView){
        var PlaybookView = Backbone.View.extend({

            tagName:'ul',
            collection: null,

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
            }
        });
        return PlaybookView;
    }
);