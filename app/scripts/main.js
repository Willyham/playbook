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
        localstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        'eve':          '../bower_components/raphael-amd/eve.0.3.4',
        'raphael.core': '../bower_components/raphael-amd/raphael.2.1.0.core',
        'raphael.svg':  '../bower_components/raphael-amd/raphael.2.1.0.svg',
        'raphael.vml':  '../bower_components/raphael-amd/raphael.2.1.0.vml',
        'raphael':      '../bower_components/raphael-amd/raphael.2.1.0.amd',
        'freeTransform': '../bower_components/raphael.free_transform/raphael.free_transform',
        'backbone.raphael': '../bower_components/backbone.raphael-amd/backbone.raphael',
        'backbone.transformable': '../bower_components/backbone.raphael.transformable/backbone.raphael.transformable'
    }
});

require([
    'backbone',
    'jquery',
    'PlaybookApp',
    'raphael',
    'backbone.raphael',
    'backbone.transformable',
    'freeTransform'
], function (Backbone, $, PlaybookApp) {
    var app = new PlaybookApp();
    app.init();
});
