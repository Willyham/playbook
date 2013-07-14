define([
    'jquery',
    'underscore',
    'backbone',
    'Views/PlaybookView'], function($,_,Backbone, PlaybookView){
        var SideView = Backbone.View.extend({

            el: $('#sideNav'),
            template: _.template('<div id="addPlay">New Play</div>'),

            events: {
                'click #addPlay': 'addPlay'
            },

            initialize: function(){
            },

            render: function(){
                var playbookView = new PlaybookView();
                this.$el.html(playbookView.render()).append(this.template());
            },

            addPlay: function(){
                console.log(1);
            }
        });
        return SideView;
    }
);