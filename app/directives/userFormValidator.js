app.directive('uniqueValidator', function (usersService) {

    function checkUniqueness(value, users) {
        return !users.some(user => user.userName === value);
    }

    function checkIfSameUser(value, user) {
        const otherUsers = usersService.users.filter(u => u.id !== user.id);
        return otherUsers.some(u => u.userName === value);
    }

    return {
        require: 'ngModel',
        scope: {
            isEditMode: '=?',
            user: '=?'
        },
        link: function (scope, element, attrs, ngModelCtrl) {
            ngModelCtrl.$validators.uniqueValidator = function (modelValue, viewValue) {
                return (scope.isEditMode && !checkIfSameUser(viewValue, scope.user)) || checkUniqueness(viewValue, usersService.users);
            };
        }
    };
});


app.directive('passwordsEqual', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$validators.passwordsEqual = function (modelValue, viewValue) {
                // Get the values of the password and confirm password fields
                const password = modelValue || viewValue;
                const confirmPassword = scope.$eval(attrs.passwordsEqual);

                // Check if the passwords match
                return password === confirmPassword.$viewValue;
            };

            // Watch for changes in the confirm password field
            scope.$watch(attrs.passwordsEqual, function () {
                ngModel.$validate();
            });
        },
    };
});

