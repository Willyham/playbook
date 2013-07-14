define(['backbone','Views/PlaybookView'], function(Backbone, PlaybookView) {
    return function(){

        return {
            init: function(){

                var $body = $('body');
                var playbookView = new PlaybookView();
                $body.html(playbookView.render());

            }
        }
    }
});