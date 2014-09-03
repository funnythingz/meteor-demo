if (Meteor.isClient) {

    Router.configure({
        layoutTemplate: 'layout',
        notFoundTemplate: 'notFound'
    });

    var HomeController = RouteController.extend({
        template: 'home'
    });

    var AboutController = RouteController.extend({
        template: 'about'
    });

    var ShowController = RouteController.extend({

        template: 'show',

        data: function() {
            return this.params._id;
        }

    });

    Router.map(function() {

        this.route('home', {
            path: '/',
            controller: HomeController
        });

        this.route('about', {
            path: '/about',
            controller: AboutController
        });

        this.route('show', {
            path: '/show/:_id',
            controller: ShowController,
        });

    });

}
