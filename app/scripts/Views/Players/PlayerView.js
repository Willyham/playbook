define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PlayerView = Backbone.RaphaelTransformableView.extend({

            className: 'player',
            template: _.template('<%= type %>'),

            initialize: function(){
                if(!this.model){
                    throw new Error('PlayerView needs a Player model');
                }
            },

            render: function(){
                var element;
                switch(this.model.get('type')){
                    case 'rectangle':
                        element = this.options.paper.rect(this.model.get('x'), this.model.get('y'), this.model.get('width'),this.model.get('height'));
                        break;
                    case 'circle':
                        element = this.options.paper.circle(this.model.get('x'), this.model.get('y'), this.model.get('width')/2);
                        break;
                }
                this.initElement(element, {
                    keepRatio: [ 'axisX', 'axisY', 'bboxCorners', 'bboxSides' ]
                });
            }
        });
        return PlayerView;
    }
);