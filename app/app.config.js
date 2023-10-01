app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/templates/home.html', // Path to your view template
            controller: 'myController' // Controller for this route
        })
        .when('/403', {
            templateUrl: 'app/templates/403.html',
        })
        .when('/404', {
            templateUrl: 'app/templates/404.html',
        })
        .otherwise({
            redirectTo: '/404' // Default route if none of the above matches
        });
});
