app.service('usersService', function () {
    this.users = [
        {
            userName: 'user1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            type: 'User',
            id: 1
        },
        {
            userName: 'user2',
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            type: 'Admin',
            id: 2
        },
        {
            userName: 'user3',
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice.johnson@example.com',
            type: 'User',
            id: 3
        },
        {
            userName: 'user4',
            firstName: 'Bob',
            lastName: 'Wilson',
            email: 'bob.wilson@example.com',
            type: 'User',
            id: 4
        },
        {
            userName: 'user5',
            firstName: 'Ella',
            lastName: 'Davis',
            email: 'ella.davis@example.com',
            type: 'Admin',
            id: 5
        },
        {
            userName: 'user6',
            firstName: 'David',
            lastName: 'Lee',
            email: 'david.lee@example.com',
            type: 'User',
            id: 6
        },
        {
            userName: 'user7',
            firstName: 'Grace',
            lastName: 'Brown',
            email: 'grace.brown@example.com',
            type: 'User',
            id: 7
        },
        {
            userName: 'user8',
            firstName: 'Sam',
            lastName: 'Johnson',
            email: 'sam.johnson@example.com',
            type: 'Admin',
            id: 8
        },
        {
            userName: 'user9',
            firstName: 'Olivia',
            lastName: 'Smith',
            email: 'olivia.smith@example.com',
            type: 'User',
            id: 9
        },
        {
            userName: 'user10',
            firstName: 'Liam',
            lastName: 'Wilson',
            email: 'liam.wilson@example.com',
            type: 'User',
            id: 10
        }
    ];


    this.addUser = function (user) {
        this.users.push(user);
    }

    this.editUser = function (user) {
        const index = this.users.findIndex(u => u.id === user.id);
        this.users[index] = user;
    }

    this.deleteUser = function(id) {
        const index = this.users.findIndex(u => u.id === id);
        this.users.splice(index, 1);
    }


});
