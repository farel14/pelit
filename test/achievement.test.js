const request = require('supertest');
const app = require('../app.js')
const { User, Badge } = require('../models')
let {randomDate, sqlDateFormat, thirtyDaysFromNow, randomIntFromInterval} = require('../helpers/dateParser.js')
let formatter = require('../helpers/dateParser.js')

let user = {
    email: "test@email.com",
    password: "password123"
}

let badgesId = []
let user_id;

beforeAll(done => {
    User.create({...user, fullName: 'Test User', photoProfile: '', balance: 2000000}) // create user
    .then(user => {
        user_id = user.id
    
        let newBadges = []

        for (let i = 0; i < 5; i++) {
            let badge = {}
            badge.name = `Badge ${i}`
            badge.description = `This is bagde ${i}`
            badge.imgUrl = `ImageLink badge ${i}`

            newBadges.push(badge)
        }

        return Badge.bulkCreate(newBadges) // create badges
    })
    .then(badges => {    
        for (let i = 0; i < badges.length; i++) {
            badgesId.push(badges[i].id)
        }
        // console.log(badges, 'BADGES!')
        done()
    })
    .catch(err => {
        console.log('ERRRRRORRR CREATE BADGE')
        done(err)
    })
})


afterAll(done => {
    User.destroy({ truncate: true, cascade: true})
    .then(() => {
        return Badge.destroy({ truncate: true, cascade: true})
    })
    .then(() => {
        done()
    })
    .catch(err => {
        done(err)
    })
})

describe('Post Achievement - SUCCESS', () => {
    test('Success add new achievement', (done) => {
        let index = Math.floor(Math.random()*5)
        let badge_id = badgesId[index]

        let newAchievement = {}
        let created = new Date()
        newAchievement.date = created.getDate()
        newAchievement.month = created.getMonth() + 1
        newAchievement.year = created.getFullYear()

        request(app)
        .post(`/achievement/${user_id}/${badge_id}`)
        .send(newAchievement)
        .end((err, res) => {
            if (err) {
                done(err)
            } else {
                // console.log(res.body, 'BODY')
                expect(res.status).toBe(200)
                expect(res.body.UserId).toBe(user_id)
                expect(res.body.BadgeId).toBe(badge_id)
                expect(res.body).toHaveProperty('date', expect.any(Number))
                expect(res.body).toHaveProperty('month', expect.any(Number))
                expect(res.body).toHaveProperty('year', expect.any(Number))
                done()
            }
        })
    })
})