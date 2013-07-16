define([
    'jquery',
    'underscore',
    'backbone',
    'Views/PlaybookView',
    'Models/Play'], function($,_,Backbone, PlaybookView, Play){
        var SideView = Backbone.View.extend({

            el: $('#sideNav'),
            template: _.template('<h3 id="addPlay"><i class="icon-plus"></i>Create New Play</h3>'),
            _playbookView: null,

            events: {
                'click #addPlay': 'addPlay'
            },

            initialize: function(playbook){
                this._playbookView = new PlaybookView(playbook);
            },

            render: function(){
                this.$el.append(this._playbookView.render());
                this.$el.append(this.template());
            },

            addPlay: function(){
                var play = new Play();
                this._playbookView.addPlay(play);
            }
        });
        return SideView;
    }
);