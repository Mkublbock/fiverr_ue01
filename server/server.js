/*jslint node: true */
/*jslint esversion: 6*/
/*jslint eqeqeq: true */

/* global require */

(function () {
    "use strict";

    const express = require("express");
    const app = express();
    const fs = require("fs");

    const bodyParser = require("body-parser");
    const cors = require("cors");

    let user;
    let available;

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cors());

    // TODO add REST methods

    /**
     * Send the list of available devices to the client
     * @param req The request
     * @param res The response
     */
    app.get('/api/devices', getAvailable);

    function getAvailable(req, res) {
        // TODO send list of available devices to the client
        res.send(available);
    }

    /**
     * Authenticate the user specified in the request
     * @param req The request
     * @param res The response
     */
    app.post('/api/login', authenticate);

    function authenticate(req, res) {
        // TODO check credentials and respond to client accordingly
        if (!req.body.username || !req.body.password) {
            res.status(400);
            res.send('No username or password entered');
        }else{
            if(req.body.username == "admin@mail.com" && req.body.password == "qwerty"){
                res.send(true);
            }else{
                res.status(400);
                res.send(user);
            }
        }
    }

    /**
     * Change the users password and store it to the login config file
     * @param req The request
     * @param res The response
     */
    function changePassword(req, res) {
        // TODO check old password and store new password

    }

    /**
     * Read the user data from the login config file, parse it and store it in 'user'
     */
    function readUser() {
        // TODO load user data from file
        fs.readFile('resources/login.config', function (err, data) {
            if(err){
                throw err;
            }else{
                user = data;
            }
        });
    }

    /**
     * Read the available devices data from the json file and store it in 'available'
     */
    function readAvailable() {
        // TODO load available devices from file
        fs.readFile('resources/devices.json', function (err, data) {
            if(err){
                throw err;
            }else {
                available = data;
            }
        });
    }

    const server = app.listen(8081, function () {
        readUser();
        readAvailable();

        const host = server.address().address;
        const port = server.address().port;
        console.log("Big Smart Production Server listening at http://%s:%s", host, port);
    });
})();
