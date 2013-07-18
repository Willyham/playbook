define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PitchDetailsView = Backbone.View.extend({

            className: 'pitchDetails',
            template: _.template('<h2><input type="text" value="<%= name %>"/></h2>'),
            _model: null,

            initialize: function(model){
                this._model = model;
                this.listenTo(this._model, 'change:name', this.render);
            },

            events: {
                'change input': 'renamePlay'
            },

            render: function(){
                return this.$el.html(this.template(this._model.toJSON()));
            },

            renamePlay: function(event){
                this._model.set('name', event.target.value);
                this._model.save();
            }
        });
        return PitchDetailsView;
    }
);