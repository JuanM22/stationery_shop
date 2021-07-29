const dbConnection = require('./dbConnection');
dbConnection.connectToDatabase();

const express = require('express');
var session = require('express-session');
const cors = require('cors');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const Login = require('./model/Login');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.static("public"));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000, }
}));
app.use(cookieParser('keyboard cat'));
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload());

passport.use(new LocalStrategy(
    function (username, password, done) {
        Login.findOne({ username: username }, (err, login) => {
            if (err) return done(err);
            if (!login) return done(null, false, { message: 'Incorrect Username.' });
            if (login.password !== password) return done(null, false, { message: 'Incorrect Password.' });
            return done(null, login);
        })
    }
));

passport.serializeUser((login, done) => {
    done(null, login.id);
});

passport.deserializeUser((id, done) => {
    Login.findOne({ _id: id }, (err, login) => {
        done(err, login);
    })
});

require('./lib/Routes')(app);

app.get('/login', (req, res, next) => {
    passport.authenticate('local', (err, login, info) => {
        if (err) throw err;
        if (!login) res.send('Credenciales Incorrectas');
        else {
            req.login(login, (err) => {
                if (err) throw err;
                res.send('Login successfully');
            });
        }
    })(req, res, next);
});

app.get('/logout', (req, res) => {
    req.logOut();
    res.clearCookie("connect.sid").send("Log out successfully");
});

const port = 8090;

app.listen(port, function () {
    console.log('Server running at localhost:' + port);
});


