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

            /**
             * Initialise the SideView
             * Creates a PlaybookView and a ToolboxView
             */
            initialize: function(){
                if(!this.collection){
                    throw new Error('SideView needs a Playbook collection');
                }
                this._playbookView = new PlaybookView({
                    collection: this.collection
                });
                this._toolboxView = new ToolboxView();
            },

            /**
             * Render the SideView.
             * Draw the add play button and the playbook and toolbox views
             */
            render: function(){
                this.$el.prepend(this.template());
                this.$el.prepend(this._playbookView.render());
                this.$el.append(this._toolboxView.render());
            },

            /**
             * Create a new play and add it to the collection
             */
            addPlay: function(){
                var play = new Play();
                this.collection.create(play);
            },

            /**
             * Select a play to be drawn.
             * @param {Play} model The play to draw
             */
            selectPlay: function(model){
                this._playbookView.selectPlay(model);
                this._toolboxView.selectPlay(model);
            }
        });
        return SideView;
    }
);