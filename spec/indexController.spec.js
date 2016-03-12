const request = require('supertest');
const app = require('../src/app');

describe('IndexController', () => {
    it('should return \'Hello World!\'', (done) => {
        request(app)
        .get('/helloworld')
        .expect(200)
        .end((err, res) => {
            if (err) {
                console.log(`ERROR ${JSON.stringify(err)}`);
                done.fail();
            } else {
                // ASSERT
                expect(res.text).toEqual('Hello World!');
                done();
            }
        });
    });
});