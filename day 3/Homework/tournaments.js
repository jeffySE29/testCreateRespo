import { getUserById } from './users.js'
let tournaments = [
    { tourID: 1, name: "lottery", prize: "5000", members: [1, 2], locked: false },
    { tourID: 2, name: "tour", prize: "2 ticket tour", members: [3], locked: false }
]

// Function 6.1
export function getTournament() {
    return tournaments
}

// Function 6.2
export function getTournamentById(tourID) {
    return tournaments.find(tour => {
        return tour.tourID === tourID
    })
}

// Function 7
export function addTournament(tournament) {
    tournaments.push({
        tourID: tournaments.length + 1,
        name: tournament.name,
        prize: tournament.prize,
        members: tournament.members.push(...tournament.members),
        locked: false
    })
}

// Check duplicate
export function check_Dup(userID, members) {
    let count = 0;
    for (let i = 0; i < members.length; i++) {
        if (members[i] === userID) {
            count++;
            break
        }
    }
    return (count > 0) ? true : false
}

// Function 8
export function addUserToTour(tourID, userID) {
    const tourIndex = tournaments.findIndex(eachTour => {
        return eachTour.tourID === tourID
    })
    tournaments[tourIndex].members.push(userID)
}

// Function 9.1
export function deleteTournamentByID(tourID) {
    tournaments = tournaments.filter(eachTour => {
        return eachTour.tourID !== tourID
    })
}

// Function 9.2
export function deleteUserInTournamentById(tourID, userID) {
    let tour = getTournamentById(tourID)
    tour.members = tour.members.filter(eachMem => {
        return eachMem !== userID
    })
}

function randomMember(arr) {
    const ranIndex = Math.floor(Math.random() * arr.length)
    return arr[ranIndex]
}

// Function 10
export function who_Win(tourID) {
    let tour = getTournamentById(tourID)
    const winningUserID = randomMember(tour.members)
    let user = getUserById(winningUserID)
    tour.locked = true
    return user
}