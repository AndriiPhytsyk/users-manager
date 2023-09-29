app.directive('userForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/userForm.html', // Template URL for your component
        // scope: {
        //     // Define component inputs (bindings) using scope
        //     title: '@', // Text binding
        //     items: '=' // Two-way binding (for passing data)
        // },
        controller: function($scope) {
            $scope.userData = {
                userName: 'user1',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                type: 'User',
                password: '123',
                repeatPassword: '123'
                // Add more form fields here
            };

            $scope.submitForm = function () {
                console.log($scope.userForm);
                console.log($scope.userForm);

            }
        }
    };
});
