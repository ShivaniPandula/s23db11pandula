require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
 )

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var AirlineTicketRouter = require('./routes/AirlineTicket');
var gridbuildRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var AirlineTicket = require("./models/AirlineTicket");
var resourceRouter=require("./routes/resource")


var app = express();

const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString);

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Get the default connection
var db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/AirlineTicket', AirlineTicketRouter);
app.use('/board', gridbuildRouter);
app.use('/choose', chooseRouter);
app.use('/resource',resourceRouter)

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function recreateDB() {
  // Delete everything
  await AirlineTicket.deleteMany();
  let instance1 = new AirlineTicket({ passengerName: "Shivani", ticketNumber: 11200, seatNumber: 25 });
  await instance1.save();
  console.log("First object saved");
  let instance2 = new AirlineTicket({ passengerName: "Samyuktha", ticketNumber: 11201, seatNumber: 26 });
  await instance2.save();
  console.log("Second object saved");
  let instance3 = new AirlineTicket({ passengerName: "Lavanya", ticketNumber: 11202, seatNumber: 27 });
  await instance3.save();
  console.log("Third object saved");
}

let reseed = true;
if (reseed) {
  recreateDB();
}

module.exports = app;
