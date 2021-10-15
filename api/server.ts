import express from 'express';
import cowsay from 'cowsay';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DATABASE } from './database'

const accessTokenSecret = 'kj.hfdbl38249rphfdenbL63';

const app = express();

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));

app.post('/api/login', (req: any, res: any) => {
    const { username, password } = req.body;

});

app.use('/api/me/*', (req: any, res: any, next: any) => {
    console.log('everytime');

    next();
});

// Serve our api route /cow that returns a custom talking text cow
app.get('/api/cow/:say', async (req: any, res: any, next: any) => {
    try {
        const text = req.params.say
        const moo = cowsay.say({ text })
        res.json({ moo })
    } catch (err) {
        next(err)
    }
});

app.use(express.static("./dist/blue-heart"));

app.get("/*", function (req: any, res: any) {
  res.sendFile("index.html", { root: "dist/blue-heart" });
});

app.listen(process.env.PORT || 8080);
console.log(`Running on port ${process.env.PORT || 8080}`);
