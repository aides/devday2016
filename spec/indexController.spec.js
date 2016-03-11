const request = require('supertest');
const app = require('../src/app');

describe('IndexController', function() {
    it('should return \'Hello World123!\'', function(done) {
        request(app)
        .get('/helloworld')
        .expect(200)
        .end((err, res) => {
            if (err) {
                console.log(`ERROR ${JSON.stringify(err)}`);
                done.fail();
            } else {
                expect(res.text).toEqual('Hello World!');
                done();
            }
        });
    });
});