const server = require('../src/index.js');

 
beforeAll((done) => {
    server.events.on('start', () => {
        done();
    });
});

afterAll((done) => {
    server.events.on('stop', () => {
        done();
    });
    server.stop();
});

test('should get all user',async function () {
    const data = await server.inject('/');
    expect(data.statusCode).toBe(200);
    expect(data.result.length).toBe(3);
});

test('should get user by id 1 successfully',async function () {
    const data = await server.inject('/user/1');
    expect(data.statusCode).toBe(200);
    expect(data.result.name).toBe('Dadang');
});

test('should fail when getting user with id 5',async function (){
    const data = await server.inject('/user/5');
    expect(data.statusCode).toBe(422);
    expect(data.result).toBe('User does not exists');
});


