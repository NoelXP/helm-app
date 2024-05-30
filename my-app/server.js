const express = require("express")
const app = express();

var port = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000;

app.get("/", function(req, res) {
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        const randomNumber = Math.floor(Math.random() * 8) + 1;
        res.send(`Hello! Open your eyes and see! ${randomLetter}${randomNumber}`);
});


app.listen(3000, function() {
    console.log(`Example NodeJS app listening on port ${port}`)
})