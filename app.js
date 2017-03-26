require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

//---------------------------------------------------------------------------------------------------------------

// Database
var MongoClient = require('mongodb').MongoClient;   // retrieve data base
var assert = require('assert');

//-----------------------------------------------------------------------------------------------------------------

// Server
var app = express();
app.get('env');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// connect to DB
MongoClient.connect(process.env.MONGODB_URI, function (err, db) {
    assert.equal(null, err);
    console.log("Connected to database.");
    db.collection('users').insert(
        [
            {
                type: 'user',
                name: 'Adam Jammour',
                email: 'aj645@bath.ac.uk',
                password: 'adam'
            },
            {
                type: 'user',
                name: 'Justine Jose',
                email: 'jpj26@bath.ac.uk',
                password: 'justine'
            }
        ],
        function (err, res) {
            if (err) {
                db.close();
                return console.log(err);
            }
        }
    );
    db.collection('users').findOne({ "name": "Justine Jose" }, function(err, foundObject) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            console.log(foundObject.email);

            foundObject.email = "just@bath.ac.uk";

            db.collection('users').save(function (err, updatedObject) {
                if (err) {
                    console.log(err);
                    res.status(500).send();
                }
            })
        }
    });
    // db.collection('sports').insert(
    //     [
    //         { Tennis : {
    //             Day1: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //             Day2: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //             Day3: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //             Day4: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //             Day5: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //         } },
    //         { Football : {
    //             Day1: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //             Day2: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //             Day3: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //             Day4: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //             Day5: {
    //                 Court1: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court2: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court3: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court4: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court5: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court6: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court7: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //                 Court8: {
    //                     "08:00 - 09:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "09:00 - 10:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "10:00 - 11:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "11:00 - 12:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "12:00 - 13:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "13:00 - 14:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "14:00 - 15:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "15:00 - 16:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "16:00 - 17:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "17:00 - 18:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "18:00 - 19:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "19:00 - 20:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "20:00 - 21:00":
    //                         {
    //                             available: "Y"
    //                         },
    //                     "21:00 - 22:00":
    //                         {
    //                             available: "Y"
    //                         }
    //                 },
    //             },
    //         } }
    //     ],
    //     function (err, res) {
    //         if (err) {
    //             db.close();
    //             return console.log(err);
    //         }
    //     }
    // );
    //console.log("Added Data.");
    //db.collection('users').insert({ "foo" : "bar" });
    //db.collection('users').find();
    //console.log(db.collection('users').find().pretty());
    //console.log('Find.');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
