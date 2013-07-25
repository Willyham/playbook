define([
    'backbone',
    'AppRouter',
    'Collections/Playbook',
    'Views/SideView',
    'Views/PitchView',
    'Views/ToolboxView'], function(Backbone, AppRouter, Playbook, SideView, PitchView, ToolboxView) {
    return function(){

        return {
            init: function(){

                var playbook = new Playbook();

                // Create and render side view
                var sideView = new SideView(playbook);
                sideView.render();

                // Create and render the pitch view
                var pitchView = new PitchView();
                pitchView.render();

                // Fetch the playbook after creating the views so that add is called
                var loadPlaybook = playbook.fetch();

                loadPlaybook.done(function(){

                    // Create router
                    var appRouter = new AppRouter(playbook, sideView, pitchView);

                    // Start 'em up
                    Backbone.history.start();
                });
            }
        }
    }
});