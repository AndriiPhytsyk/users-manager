app.directive('userForm', function(usersService) {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/userForm.html',
        controller: function($scope) {
            $scope.userData = {
                userName: '',
                firstName: '',
                lastName: '',
                email: '',
                type: '',
                password: '',
                repeatPassword: ''
                // Add more form fields here
            };

            $scope.submitted = false;

            function resetForm() {
                for (let key in $scope.userData) {
                    $scope.userData[key] = '';
                }
            }



            $scope.submitForm = function () {
                $scope.submitted = true;
                if (!$scope.userForm.valid) return;
                usersService.addUser({...$scope.userData});
                resetForm();
                $scope.submitted = false;
            }
        }
    };
});
