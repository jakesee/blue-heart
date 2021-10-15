const express = require('express')
const cowsay = require('cowsay')
const cors = require('cors')

const app = express();

// Serve our api route /cow that returns a custom talking text cow
app.get('/api/cow/:say', cors(), async (req, res, next) => {
    try {
        const text = req.params.say
        const moo = cowsay.say({ text })
        res.json({ moo })
    } catch (err) {
        next(err)
    }
})


app.use(express.static("./dist/blue-heart"));

app.get("/*", function (req, res) {
    res.sendFile("index.html", { root: "dist/blue-heart" });
});

app.listen(process.env.PORT || 8080);
console.log(`Running on port ${process.env.PORT || 8080}`);
