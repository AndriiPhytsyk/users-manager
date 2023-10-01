app.directive('notificationDisplay', function (notificationService) {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/notifications.html',
        link: function (scope) {
            scope.getClass = function (type) {
                return type === 'success' ? 'notification-success' : 'notification-danger'
            }
            scope.notifications = notificationService.getNotifications();
            scope.$on('notificationAdded', function () {
                scope.notifications = notificationService.getNotifications();
            });
        }
    };
});
