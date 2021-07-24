const request = require('supertest');
const app = require('../app.js')
const { User, Badge } = require('../models')
let {randomDate, sqlDateFormat, thirtyDaysFromNow, randomIntFromInterval} = require('../helpers/dateParser.js')
let formatter = require('../helpers/dateParser.js')

let user = {
    email: "test@email.com",
    password: "password123"
}

let user_id;

beforeAll(done => {
    User.create({...user, fullName: 'Test User', photoProfile: '', balance: 2000000}) // create user
    .then(user => {
        user_id = user.id

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
        done()
    })
    .catch(err => {
        done(err)
    })
})

describe('Add Transaction - SUCCESS', () => {
    test('POST transaction', (done) => {
        let index = Math.floor(Math.random()*5)
        let badge_id = badgesId[index]

        let newTransaction = {}
        let created = new Date()
        newTransaction.UserId = user_id
        newTransaction.type = 'Expense'
        newTransaction.amount = -300000
        newTransaction.fullDate
        newTransaction.date
        newTransaction.month
        newTransaction.year
        newTransaction.receiptImage
        newTransaction.category
        newTransaction.notes

        request(app)
        .post(`/transactions/${user_id}`)
        .send(newTransaction)
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

describe('Get Transaction - SUCCESS', () => {
    test('GET by category', (done) => {
        let index = Math.floor(Math.random()*5)
        let badge_id = badgesId[index]

        let newAchievement = {}
        let created = new Date()
        newAchievement.date = created.getDate()
        newAchievement.month = created.getMonth()
        newAchievement.year = created.getFullYear()

        request(app)
        .post(`/transactions/${user_id}`)
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