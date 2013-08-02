define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var PitchDetailsView = Backbone.View.extend({

            className: 'pitchDetails',
            tagName: 'div',
            template: _.template('<h2><input type="text" value="<%= name %>"/></h2> <div id="playTypeToggle"><em><%= type %></em></div>'),

            initialize: function(){
                if(!this.model){
                    throw new Error('PitchDetailsView requires a Play model');
                }
                this.listenTo(this.model, 'change:name', this.render);
            },

            events: {
                'change input': 'renamePlay',
                'click #playTypeToggle' : 'togglePlayType'
            },

            render: function(){
                return this.$el.html(this.template({
                    name: this.model.get('name'),
                    type: this.model.get('type')
                }));
            },

            renamePlay: function(event){
                this.model.set('name', event.target.value);
                this.model.save();
            },

            /**
             * Toggle between play types.
             * TODO: Allow more than 2 types
             */
            togglePlayType: function(){
                if(this.model.get('type') == 'football'){
                    this.model.set('type', 'ultimate');
                }
                else {
                    this.model.set('type', 'football');
                }
                this.model.save();
            }
        });
        return PitchDetailsView;
    }
);