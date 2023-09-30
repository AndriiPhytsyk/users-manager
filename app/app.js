// Define your AngularJS module
const app = angular.module("myApp", []);

// Define a controller for your module
app.controller("myController", function ($scope, usersService) {

    $scope.mode = {
        edit: false,
        create: false
    }

    $scope.selectedUser = null;

    $scope.selectUser = function (user) {
        $scope.mode.edit = true;
        $scope.mode.create = false;
        $scope.selectedUser = {...user};

    }

    $scope.createUser = function () {
        this.selectedUser = null;
        $scope.mode.create = !$scope.mode.create;
        $scope.mode.edit = false;
    };

    $scope.tableHeaders = ['username', 'first name', 'last name', 'email', 'type'];
    $scope.users = usersService.users;
});



