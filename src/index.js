'use strict';

const server = require('./server/server');

console.log('--- Identity Service ---');
console.log('Service is up.');

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err);
});

process.on('uncaughtRejection', (err) => {
    console.error('Unhandled Rejection', err);
});

server.start({ port: 8080 });
