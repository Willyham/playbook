define([
    'jquery',
    'underscore',
    'backbone'], function($,_,Backbone){
        var AppRouter = Backbone.Router.extend({

            _playbook: null,
            _sideView: null,
            _pitchView: null,

            routes: {
                'play/:id': 'openPlay'
            },

            initialize: function(playbook, sideView, pitchView){
                this._playbook = playbook;
                this._sideView = sideView;
                this._pitchView = pitchView;
            },

            openPlay: function(id){
                var model = this._playbook.get(id);
                console.log(model);
            }
        });
        return AppRouter;
    }
);
