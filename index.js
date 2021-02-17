const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const passport = require('passport');
const users = require('./routes/api/users');

const db = require('./db')
const jokeRouter = require('./routes/joke-router')
const aboutmeRouter = require('./routes/aboutme-router')

const app = express()

/*const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})*/
const PORT = process.env.PORT || 3001;
var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is listening at http://%s:%s", host, port);
});
/*if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}*/
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api', jokeRouter)
app.use('/apiaboutme', aboutmeRouter)

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);