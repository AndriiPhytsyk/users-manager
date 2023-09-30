app.directive('userForm', function (usersService, NotificationService) {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/userForm.html',
        scope: {
            mode: '=?', // Use = for two-way binding (object)
            selectedUser: '=?'
        },
        link: function (scope) {

        },
        controller: function ($scope) {

            const emptyUser = {
                userName: 'qwe',
                firstName: 'qwe',
                lastName: 'qwe',
                email: 'qwe@gmail.com',
                type: 'User',
                password: 'qwe',
                repeatPassword: 'qwe'
            };

            $scope.$watch('selectedUser', function () {
                $scope.userData = $scope.selectedUser || emptyUser;
            });

            $scope.submitted = false;

            function resetForm() {
                for (let key in $scope.userData) {
                    $scope.userData[key] = '';
                }
            }

            $scope.submitForm = function (actionType) {
                $scope.submitted = true;
                if (!$scope.userForm.$valid) return;
                if (actionType === 'create') {
                    usersService.addUser({...$scope.userData});
                    resetForm();
                } else {
                    usersService.editUser({...$scope.userData});
                }
                NotificationService.addNotification('success', `User successfully ${actionType === 'create' ? 'created': 'updated'}`);
                $scope.submitted = false;
            }

            $scope.deleteUser = function () {
                usersService.deleteUser($scope.selectedUser.id);
                NotificationService.addNotification('danger', 'User successfully deleted');
                $scope.selectedUser = null;
                $scope.mode.edit = false;
            }

            $scope.closeForm = function () {
                this.mode.edit = false;
                this.mode.create = false;
            }
        }
    };
});
