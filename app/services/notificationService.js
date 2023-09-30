app.service('NotificationService', function ($rootScope, $timeout) {
        const notifications = [];

        function addNotification(type, message) {
            notifications.push({ type: type, message: message });
            $rootScope.$emit('notificationAdded');
            $timeout(() => {
                notifications.pop();
            }, 1500)
        }

        function getNotifications() {
            return notifications;
        }

        return {
            addNotification: addNotification,
            getNotifications: getNotifications
        };
    });
