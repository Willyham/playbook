define([
    'jquery',
    'underscore',
    'backbone',
    'Views/PlaybookView'], function($,_,Backbone, PlaybookView){
        var SideView = Backbone.View.extend({

            el: $('#sideNav'),
            template: _.template('<div id="addPlay">New Play</div>'),
            _playbookView: null,

            events: {
                'click #addPlay': 'addPlay'
            },

            initialize: function(playbook){
                this._playbookView = new PlaybookView(playbook);
            },

            render: function(){
                this.$el.append(this.template());
            },

            addPlay: function(){
                this._playbookView.addPlay({
                    name: 'testing'
                })
            }
        });
        return SideView;
    }
);