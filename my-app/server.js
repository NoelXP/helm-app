const express = require("express")
const app = express();

var port = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000;

app.get("/", function(req, res) {
    res.send("Hello World, And I can change it here?");
});


app.listen(3000, function() {
    console.log(`Example NodeJS app listening on port ${port}`)
})