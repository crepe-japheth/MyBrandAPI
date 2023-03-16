const chai = require('chai')
const app = require('./../app')
const chaiHttp = require('chai-http')
const { response } = require('./../app')


chai.should()

chai.use(chaiHttp)

describe('POSTS API', () => {


    it('GET /api/posts', async(done) => {
        chai.request(app).get('/api/posts//').end((err, response) => {
            response.should.have.status(200)
            response.should.be.a('array')
        })
        done()
    })

    it('GET /api/posts/id', async(done) => {
        done()
        const id = '640b83c3bc6b7f6daf9e3cbf'
        chai.request(app).get('/api/posts/' + id).end((err, response) => {
            response.should.have.status(200)
            response.body.should.be.a('object')
            response.body.should.have.property('title')
        })
    })


    it('GET /api/posts create post', async(done) => {
        done()
        const post = {
            "author": "Jon Fingas",
            "title": "Internal 'Minecraft' demo reportedly uses AI to play the game for you",
            "description": "Microsoft has spent years teaching AI to play Minecraft, but it's apparently making enough progress that the game needs very little human involvement. Semaforsources claim Microsoft has produced an internal demo that lets you control Minecraft simply by telli…",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/L1yaPYndcn_2.xvt0msHHw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-02/fafa6930-aed7-11ed-b7fd-2c3ffa56eec5.cf.jpg",
            "content": "Microsoft has spent years teaching AI to play Minecraft, but it's apparently making enough progress that the game needs very little human involvement. Semaforsources claim Microsoft has produced an i… [+1358 chars]"
        }
        chai.request(app).post('/api/posts').send(post).end((err, response) => {
            response.should.have.status(201)
            response.body.should.be.a('object')
            response.body.should.have.property('title')
        })
    })


    it('GET /api/posts update post', async(done) => {
        done()
        const id = '640b83c3bc6b7f6daf9e3cbf'
        const post = {
            "author": "Japheth Fingas",
        }
        chai.request(app).patch('/api/posts/' + id).send(post).end((err, response) => {
            response.should.have.status(201)
            response.body.should.be.a('object')
            response.body.should.have.property('data')
        })
    })

    it('GET /api/posts delete post', async(done) => {
        done()
        const id = '640b83c3bc6b7f6daf9e3cbf'
        chai.request(app).delete('/api/posts/' + id).end((err, response) => {
            response.should.have.status(204)
        })
    })

})