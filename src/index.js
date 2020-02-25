'use strict';

const Hapi = require('@hapi/hapi');

const users = [
    { id: 1, name: 'Dadang' },
    { id: 2, name: 'Bambang'},
    { id: 3, name: 'Sularto'}
]

const hero = [
    {id: 1, name:'gatot kaca'},
    {id:2, name:'superman'}
]

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return users;
        }
    });

    server.route({
        method : 'GET',
        path: '/user/{id}',
        handler: (request, h) => {
            let user =  users.find((userId) => userId.id === parseInt(request.params.id));
            if(!user){
                return h.response('User does not exists').code(422);
            }
            return user;
        }
    });

    const init = async () => {
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

module.exports = server;