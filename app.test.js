const request = require('supertest')
const app = require('./app')
    // const jest = require('jest')


describe('POSTS API', () => {

    const interval = setInterval(() => {
        // ...
    }, 1000000);
    interval.unref();

    jest.setTimeout(1000000)
    it('GET /api/posts return all posts', async() => {
            const response = await request(app).get('/api/posts')
            expect(response.statusCode).toBe(200);
        })
        // it('GET /api/posts return all posts', async() => {

    // })

})