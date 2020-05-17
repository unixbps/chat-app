const users = []

//addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    //CLean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

// addUser({
//     id: 22,
//     username: 'Pratheesh',
//     room: 'india'
// })

// addUser({
//     id: 32,
//     username: 'Andrew',
//     room: 'india'
// })

// addUser({
//     id: 42,
//     username: 'Mike',
//     room: 'india'
// })

// addUser({
//     id: 52,
//     username: 'bps',
//     room: 'AP'
// })

// console.log(users)

// //  const user = getUser(32)
// //  console.log(user)

//  const userList = getUsersInRoom('ap')
//  console.log(userList)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}