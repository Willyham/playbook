define(['backbone','Views/SideView', 'Collections/Playbook', 'Views/PitchView'], function(Backbone, SideView, Playbook, PitchView) {
    return function(){

        return {
            init: function(){

                var playbook = new Playbook();

                var sideView = new SideView(playbook);
                sideView.render();

                var pitchView = new PitchView(playbook);
                pitchView.render();

                playbook.fetch();

                Backbone.history.start();
            }
        }
    }
});