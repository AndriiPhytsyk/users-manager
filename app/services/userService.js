app.service('usersService', function() {
    this.users = [
        {
            userName: 'user1',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            type: 'User'
        },
        {
            userName: 'user2',
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            type: 'Admin'
        },
        {
            userName: 'user3',
            firstName: 'Alice',
            lastName: 'Johnson',
            email: 'alice.johnson@example.com',
            type: 'User'
        },
        {
            userName: 'user4',
            firstName: 'Bob',
            lastName: 'Wilson',
            email: 'bob.wilson@example.com',
            type: 'User'
        },
        {
            userName: 'user5',
            firstName: 'Ella',
            lastName: 'Davis',
            email: 'ella.davis@example.com',
            type: 'Admin'
        },
        {
            userName: 'user6',
            firstName: 'David',
            lastName: 'Lee',
            email: 'david.lee@example.com',
            type: 'User'
        },
        {
            userName: 'user7',
            firstName: 'Grace',
            lastName: 'Brown',
            email: 'grace.brown@example.com',
            type: 'User'
        },
        {
            userName: 'user8',
            firstName: 'Sam',
            lastName: 'Johnson',
            email: 'sam.johnson@example.com',
            type: 'Admin'
        },
        {
            userName: 'user9',
            firstName: 'Olivia',
            lastName: 'Smith',
            email: 'olivia.smith@example.com',
            type: 'User'
        },
        {
            userName: 'user10',
            firstName: 'Liam',
            lastName: 'Wilson',
            email: 'liam.wilson@example.com',
            type: 'User'
        }
    ]; // Example data property



    this.getUsers = function() {
        return this.users;
    };


});
