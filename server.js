const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./server/database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./server/passport');
const mongoose = require('mongoose');

// Route requires
const players = require('./routes/api/players');

const app = express()
const PORT = 8080
// Route requires



// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

const user = require('./routes/user')
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Routes
app.use('/user', user)

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));
// use Routes
app.use('/api/players', players);
//app.use('/api/nbaplayercombined', nbaplayers);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Starting Server 
app.listen(process.env.PORT || 8080, function () {
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
