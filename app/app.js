// Define your AngularJS module
const app = angular.module("myApp", []);

// Define a controller for your module
app.controller("myController", function ($scope, usersService) {

    const usersData = usersService.getUsers();

    $scope.createUser = function () {
        console.log('create user');
        alert('user clicked')
    };

    $scope.tableHeaders = ['username', 'first name', 'last name', 'email', 'type'];
    $scope.users = usersData;
});



