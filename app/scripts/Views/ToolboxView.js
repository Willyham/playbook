define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var ToolboxView = Backbone.View.extend({

            el: $('#toolbox'),
            template: _.template('<h3>Toolbox</h3>'),

            initialize: function(){

            },

            render: function(){
                this.$el.html(this.template());
            }
      });
        return ToolboxView;
    }
);