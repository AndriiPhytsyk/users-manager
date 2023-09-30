app.directive('notificationDisplay', function (NotificationService) {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/notifications.html',
        link: function (scope) {
            scope.getClass = function (type) {
                return type === 'success' ? 'notification-success' : 'notification-danger'
            }
            scope.notifications = NotificationService.getNotifications();
            scope.$on('notificationAdded', function () {
                scope.notifications = NotificationService.getNotifications();
            });
        }
    };
});
