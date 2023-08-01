let users = [
    { id: 1, username: "user1", displayName: "userA", age: 20 },
    { id: 2, username: "user2", displayName: "userB", age: 20 },
    { id: 3, username: "user3", displayName: "userC", age: 20 },
]

// Function 1
export function getUser() {
    return users
}

// Function 2
export function getUserById(userID) {
    return users.find(user => {
        return user.id === userID
    })
}

// Function 3
export function addUser(user) {
    users.push({
        id: users.length + 1,
        username: user.username,
        displayName: user.displayName,
        age: user.age
    })
}

// Function 4
export function updateUser(userID, user) {
    const userIndex = users.findIndex(eachUser => {
        return eachUser.id === userID
    })
    if (user.username != null) {
        users[userIndex].username = user.username
    }
    if (user.displayName != null) {
        users[userIndex].displayName = user.displayName
    }
    if (user.age != null) {
        users[userIndex].age = user.age
    }
    return user
}

// Function 5
export function deleteUserByID(userID) {
    users = users.filter(user => {
        return user.id !== userID
    })
}