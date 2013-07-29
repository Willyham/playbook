define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PitchDetailsView = Backbone.View.extend({

            className: 'pitchDetails',
            tagName: 'div',
            template: _.template('<h2><input type="text" value="<%= name %>"/></h2> <div id="playTypeToggle"><em><%= type %></em></div>'),
            _model: null,

            initialize: function(model){
                this._model = model;
                this.listenTo(this._model, 'change:name', this.render);
            },

            events: {
                'change input': 'renamePlay',
                'click #playTypeToggle' : 'togglePlayType'
            },

            render: function(){
                return this.$el.html(this.template(this._model.toJSON()));
            },

            renamePlay: function(event){
                this._model.set('name', event.target.value);
                this._model.save();
            },

            togglePlayType: function(){
                if(this._model.get('type') == 'football'){
                    this._model.set('type', 'ultimate');
                }
                else {
                    this._model.set('type', 'football');
                }
                this._model.save();
            }
        });
        return PitchDetailsView;
    }
);