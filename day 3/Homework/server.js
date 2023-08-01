import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { addUser, deleteUserByID, getUser, getUserById, updateUser } from './users.js'
import { addTournament, addUserToTour, check_Dup, deleteTournamentByID, 
    deleteUserInTournamentById, getTournament, getTournamentById, who_Win } from './tournaments.js'

const server = express()
const PORT = 3000

server.use(bodyParser.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('welcome to my server')
})

server.listen(PORT, () => {
    console.log('Server is running')
})

// 1. GET /users
server.get('/users', (req, res) => {
    res.send(getUser())
})

// 2. GET /users/:id
server.get('/users/:id', (req, res) => {
    const userID = parseInt(req.params.id)
    res.send(getUserById(userID))
})

// 3. POST /users
//  - body: { username, displayName, age }
server.post('/users', (req, res) => {
    const user = req.body
    if (user?.username && user?.displayName && user?.age) {
        addUser(user)
        res.send('User added')
    } else {
        res.status(400).send(`Missing field`)
    }
})

// 4. PUT /users/:id
//  - body: { username, displayName, age }
server.put('/users/:id', (req, res) => {
    const userID = parseInt(req.params.id)
    const user = req.body

    if (user?.id) {
        updateUser(userID, user)
        res.send(`User updated`)
    } else {
        res.status(400).send(`Missing field id`)
    }
})

// 5. DELETE /users/:id
server.delete('/users/:id', (req, res) => {
    const userID = parseInt(req.params.id)
    deleteUserByID(userID)
    res.send(`User deleted`)
})

// 6.1 GET /tournaments
server.get('/tournaments', (req, res) => {
    res.send(getTournament())
})

// 6.2 GET /tournaments/:tournamentId
server.get('/tournaments/:tournamentId', (req, res) => {
    const tourID = parseInt(req.params.tournamentId)
    res.send(getTournamentById(tourID))
})

// 7. POST /tournaments
//  - body: { name, prize }
server.post('/tournaments', (req, res) => {
    const tour = (req.body)
    if (tour?.name && tour?.prize && tour?.members) {
        addTournament(tour)
        res.send('Tournament added')
    } else {
        res.status(400).send(`Missing field`)
    }
})

// 8. POST /tournaments/:tournamentId/users/:userId
server.post('/tournaments/:tournamentId/users/:userId', (req, res) => {
    const tourID = parseInt(req.params.tournamentId)
    const userID = parseInt(req.params.userId)
    const tour = getTournamentById(tourID)
    const user = getUserById(userID)
    if (tour != null) {
        if (!tour.locked) {
            if (user != null) {
                if (!check_Dup(userID, tour.members)) {
                    addUserToTour(tourID, userID)
                    res.send('User has been added to the tournament')
                } else {
                    res.status(400).send('Already registered user')
                }
            } else {
                res.status(404).send('User not found')
            }
        } else {
            res.send('This tournament is over')
        }
    } else {
        res.status(404).send('Tournament not found')
    }
})

// 9.1 DELETE /tournaments/:tournamentId
server.delete('/tournaments/:tournamentId', (req, res) => {
    const tourID = parseInt(req.params.tournamentId)
    deleteTournamentByID(tourID)
    res.send('Tournament deleted')
})

// 9.2 DELETE /tournaments/:tournamentId/users/:userId
server.delete('/tournaments/:tournamentId/users/:userId', (req, res) => {
    const tourID = parseInt(req.params.tournamentId)
    const userID = parseInt(req.params.userId)
    const tour = getTournamentById(tourID)
    const user = getUserById(userID)
    if (tour != null) {
        if (!tour.locked) {
            if (user != null) {
                deleteUserInTournamentById(tourID, userID)
                res.send('User has been deleted out of the tournament')
            } else {
                res.status(404).send('User not found')
            }
        } else {
            res.send('This tournament is over')
        }
    } else {
        res.status(404).send('Tournament not found')
    }
})

// 10. POST /tournaments/:tournamentId/finalize
server.post('/tournaments/:tournamentId/finalize', (req, res) => {
    const tourID = parseInt(req.params.tournamentId)
    res.send(who_Win(tourID))
})