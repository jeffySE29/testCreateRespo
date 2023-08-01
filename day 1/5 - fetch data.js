const axios = require('axios')
const prompt = require('prompt-sync');

function fetchQuestions(nQuestion, callback) {
    axios.get(`https://opentdb.com/api.php?amount=${nQuestion}`).then((res) => {
        callback(res.data.results)
    })
}

//
fetchQuestions(3, (questions) => {
    // let userInput = prompt('questions: ');
    console.log(questions);
})