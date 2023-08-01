// SIMPLE LOTTERY APP
//
// Input:
//   users: array of users
// Output:
//   pick a random winning user in users
// "khoa", "huy", "quan", "nhat", "nghia"
const users = [
    {name: "Khoa", age: 20}
];

function insertUser (n, a){
    const user = {
        name: n,
        age: a,
    }
    users.push(user);
}

insertUser('Binh', 21)
insertUser('Minh', 18)
insertUser('Quan', 19)
insertUser('KKK', 16)
insertUser('QQQ', 14)

// for(let i = 0; i < users.length; i++){
    // console.log(users[i]);
    
// }

function rand (arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
}

const winningUser = rand(users);
console.log(`The winning user is: ${winningUser.name} at age: ${winningUser.age}`);




