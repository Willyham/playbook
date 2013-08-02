/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        localstorage: {
            deps: ['backbone']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        bootstrap: 'vendor/bootstrap',
        localstorage: '../bower_components/backbone.localStorage/backbone.localStorage'
    }
});

require([
    'backbone',
    'jquery',
    'PlaybookApp'
], function (Backbone, $, PlaybookApp) {
    var app = new PlaybookApp();
    app.init();
});
