define(['backbone','Views/SideView', 'Collections/Playbook'], function(Backbone, SideView, Playbook) {
    return function(){

        return {
            init: function(){

                var playbook = new Playbook();

                var sideView = new SideView(playbook);
                sideView.render();

                playbook.fetch();

                Backbone.history.start();
            }
        }
    }
});