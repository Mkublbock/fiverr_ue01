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
    app.get('/api/devices', getAvailable);
    app.post('/api/login', authenticate);
    app.post('/api/password', changePassword);

    /**
     * Send the list of available devices to the client
     * @param req The request
     * @param res The response
     */
    function getAvailable(req, res) {
        // TODO send list of available devices to the client
        res.send(available);
    }

    /**
     * Authenticate the user specified in the request
     * @param req The request
     * @param res The response
     */
    function authenticate(req, res) {
        readUser();
        // TODO check credentials and respond to client accordingly
        if (!req.body.username || !req.body.password) {
            // if one is null then send error message
            res.status(400).send({ error: 'No username or password entered!' })
        }else{
            if(req.body.username == user[1] && req.body.password == user[3]){
                res.send(true);
            }else{
                // send error message if username and password differ from config file
                res.status(400).send({ error: 'Wrong username or password!' })
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
        if (!req.body.oldPassword || !req.body.newPassword) {
            res.status(400).send({ error: 'No password entered!' })
        }else{
            if(req.body.oldPassword != user[3]){
                res.status(401).send({ error: 'Wrong password!' })
            }else{
                let text = user[0]+' '+user[1]+'\r\n'+user[3]+' '+req.body.newPassword;// set the new text for the config file
                // write text to config file
                fs.writeFile('resources/login.config', text, function (err) {
                    if(err){
                        throw err;
                    }
                });
                res.send(true);
            }
        }
    }

    /**
     * Read the user data from the login config file, parse it and store it in 'user'
     */
    function readUser() {
        // TODO load user data from file
        fs.readFile('resources/login.config', "utf8", function (err, data) {
            if(err){
                throw err;
            }else{
                //split data string with regex to get username and password as own value
                user = data.split(/[(\r\n' ')|(\n' ')]/);
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
