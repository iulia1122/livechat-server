var app = require('express')();

var messages = [
    { videoId: 1, messages: [{ username: 'Maria', message: 'Hi everyone! :)' }] },
    { videoId: 2, messages: [{username: 'Martin', message: 'Nice video' }]}
];

module.exports.getComments = () => messages;