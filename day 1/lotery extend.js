// Simple Loterry app (Extended)
// Input:
//   users: array of users (input from file)
// Output:
//   pick a random winning user in users

// Homework: Enhance the program with the following features
//   1. only pick user has age greater than 17 (using .filter())
//   2. generate id for each user when inserting (brainstorm your own idea)

const fs = require('fs');
let users = [];

function insertUser(n, a) {
    const user = {
        name: n,
        age: a,
    }
    users.push(user);
}

function getUserFromFile(filename, callback) {

    fs.readFile(filename, 'utf8', function (err, data) {
        callback(data);
    })
}

//viết dễ hiểu
// const filecallback = (data) => {
//     const lines = data.split('\n');
//     for (let i = 0; i < lines.length; i++) {
//         let line = lines[i].split(' ');
//         // console.log(line);
//         let name = line[0];
//         let age = line[1];
//         insertUser(name, age);
//     }
//     const winningUser = rand(users);
//     console.log(`The winning user is: ${winningUser.name} at age: ${winningUser.age}`);
// }

// getUserFromFile('3 - users.txt', filecallback);

//viết gọn
getUserFromFile('3 - users.txt', (data) => {
    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].split(' ');
        // console.log(line);
        let name = line[0];
        let age = line[1];
        insertUser(name, age);
    }
    users = users.filter(user => {
        if(user.age >= 17 ) return true;
        else return false;
    })
    const winningUser = rand(users);
    console.log(`The winning user is: ${winningUser.name} at age: ${winningUser.age}`);
});


function rand(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}




// console.log(users);
//filter()