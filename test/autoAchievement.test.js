const request = require('supertest');
const app = require('../app.js')
const { Achievement, Badge, User, Target, Transaction } = require('../models')
var cron = require('node-cron')
const sequelize = require("sequelize");
const Op = sequelize.Op;
const { Expo } = require ('expo-server-sdk')
const expo = new Expo()
let {randomDate, sqlDateFormat, thirtyDaysFromNow, randomIntFromInterval} = require('../helpers/dateParser.js')
let formatter = require('../helpers/dateParser.js')
const { autoAchievement } = require('../controllers/controllerAchievement');
const Controller = require('../controllers/controllerAchievement')
// const {jest} = require ('@jest/globals')
const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

let user = {
    email: "test@email.com",
    password: "password123"
}

let user_id;
let pushToken;
let targets = []

beforeAll(done => {
    User.create({...user, fullName: 'Test User', photoProfile: '', balance: 2000000, pushToken: "ExponentPushToken[lWVeNgF_A_VAyBqN2Tum6o]"}) // create user
    .then(user => {
        user_id = user.id
        pushToken = user.pushToken

        let target = {}
        target.UserId = user_id
        target.startDate = new Date('2021-01-01')
        target.endDate = sqlDateFormat(thirtyDaysFromNow(target.startDate, 30))
        target.monthlyTarget = randomIntFromInterval(5000000, 20000000)
        target.isActive = true

        console.log(target)

        return Target.create(target)
    })
    .then(() => {    
        let trans = {}
        trans.UserId = user_id
        trans.type = 'Expense'
        trans.amount = 300000
        trans.fullDate = '2021-01-15'
        trans.receiptImage = ''
        trans.category = 'Transportation'
        trans.notes = 'asdasdasd'
        trans.title = 'makan'

        return Transaction.create(trans)
    })
    .then(() => {
        done()
    })
    .catch(err => {
        console.log('ERRRRRORRR CREATE')
        done(err)
    })
})


afterAll(done => {
    User.destroy({ truncate: true, cascade: true})
    .then(() => {
        return Target.destroy({ truncate: true, cascade: true})
    })
    .then(() => {
        return Transaction.destroy({ truncate: true, cascade: true})
    })
    .then(() => {
        done()
    })
    .catch(err => {
        done(err)
    })
})

describe('Auto Achievement - SUCCESS', () => {
    const log = console.log; // save original console.log function
    beforeEach(() => {
        consoleSpy.mockClear()
      })
    afterAll(() => {
        console.log = log; // restore original console.log after all tests
    });
    test('Success run new achievement', (done) => {
        expect(console.log.mock.calls.length).toBe(0);
        autoAchievement();
        expect(console.log).toHaveBeenCalled();
        // expect(console.log.mock.calls.length).toBe(2);
        // expect(console.log.mock.calls[0][0]).toBe("Hello World")
        done()
    })
})