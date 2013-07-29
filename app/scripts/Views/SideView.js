define([
    'jquery',
    'underscore',
    'backbone',
    'Views/PlaybookView',
    'Views/ToolboxView',
    'Models/Play'], function($,_,Backbone, PlaybookView, ToolboxView, Play){
        var SideView = Backbone.View.extend({

            el: $('#sideNav'),
            template: _.template('<h3 id="addPlay"><i class="icon-plus"></i>Create New Play</h3>'),
            _playbookView: null,
            _toolboxView: null,

            events: {
                'click #addPlay': 'addPlay'
            },

            initialize: function(playbook){
                this._playbookView = new PlaybookView(playbook);
                this._toolboxView = new ToolboxView();
            },

            render: function(){
                this.$el.prepend(this.template());
                this.$el.prepend(this._playbookView.render());
                this.$el.append(this._toolboxView.render());
            },

            addPlay: function(){
                var play = new Play();
                this._playbookView.addPlay(play);
            },

            selectPlay: function(model){
                this._playbookView.selectPlay(model);
                this._toolboxView.selectPlay(model);
            }
        });
        return SideView;
    }
);