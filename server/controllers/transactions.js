const { Transaction, History, User } = require('../models')
const sequelize = require('sequelize');
const Op = sequelize.Op;

class TransactionController {
    static async getAll(req, res) {
        const { category, type } = req.query
        const { date, month, year } = +req.query
        // ? month Number & year Number
        try {
            const data = await Transaction.findAll({
                where: { category, date, month, year, type }
            })
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({message: err})
        }
    }

    static getAllByUserId(req, res) {
        let userId = +req.params.UserId

        Transaction.findAll({
            where: {
                UserId: userId
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
    }

    static getByCategory(req, res) {
        let userId = +req.params.UserId
        let monthNum = +req.body.month

        Transaction.findAll({
            where: {
                month: monthNum,
                UserId: userId
            },
            attributes: [
                'category',
                [sequelize.fn('sum', sequelize.col('amount')), 'amount']
            ],
            group: ['category']
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
    }

    static getByDate(req, res) {
        let userId = +req.params.UserId
        let monthNum = +req.body.month

        Transaction.findAll({
            where: {
                month: monthNum,
                UserId: userId
            },
            attributes: [
                'date',
                [sequelize.fn('sum', sequelize.col('amount')), 'amount']
            ],
            group: ['date']
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
    }

    static getBetweenTwoDates(req, res) {
        let startDate = req.body.startDate
        let endDate = req.body.endDate
        let userId = +req.params.UserId

        let allTransactions;

        Transaction.findAll({
            where: {
                UserId: userId,
                fullDate: {
                    [Op.between]: [startDate, endDate]
                }
            }
        })
        .then(data => {
            allTransactions = [...data]
            return Transaction.findAll({
                attributes: [
                    [sequelize.fn('sum', sequelize.col('amount')), 'amount']
                ],
                where: {
                    UserId: userId,
                    fullDate: {
                        [Op.between]: [startDate, endDate]
                    }
                }
            })
        })
        .then(output => {
            res.status(200).json({total: output[0].amount, data: allTransactions})
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
    }

    static async postOne(req, res) {
        let UserId = req.params.UserId
        const { type, fullDate, date, receiptImage, category, notes } = req.body
        const { amount, month, year } = +req.body
        // ? month Number & year Number
        // ! amount positive -budget, amount negative +budget
        try {
            const userInstance = await User.findOne(UserId)

            if (!userInstance) return res.status(400).json({ message: 'User not found' })

            const newData = await Transaction.create({
                UserId, type, amount, fullDate, date, month, year, receiptImage, category, notes
            })

            // ? update balance
            userInstance.balance -= amount
            await userInstance.save()

            await History.create({ event: `A transaction with id ${newData.id} has been created and user ${UserId} balance has been updated` })
            res.status(201).json(newData)

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: error })
        }
    }
    static async putOne(req, res) {
        const { TransactionId } = +req.params
        const { type, fullDate, receiptImage, category, notes } = req.body
        const { amount, date, month, year } = +req.body
        try {
            const oldTransaction = await Transaction.findOne(TransactionId)
            if (!oldTransaction) return res.status(400).json({ message: 'Transaction not found' })

            if (amount) {
                // ? update balance
                const UserId = oldTransaction.UserId
                const userInstance = await User.findOne(UserId)
                userInstance.balance = userInstance.balance - Number(oldTransaction.amount) + amount
            }

            Transaction.update({
                type, fullDate, date, month, year, receiptImage, category, notes
            }, {
                where: {
                    id: TransactionId
                }
            })

            await userInstance.save()
            await History.create({ event: `A transaction with id ${TransactionId} has been updated and user ${UserId} balance has been updated` })
            res.status(200).json({ status: 'success' })

        } catch (error) {
            console.error(error)
            res.status(500).json({ message: error })
        }

    }
    static async deleteOne(req, res) {
        const { TransactionId } = +req.params
        try {
            const transactionInstance = await Transaction.findOne(TransactionId)
            if (!transactionInstance) return res.status(400).json({ message: 'Transaction not found' })
            const UserId = transactionInstance.UserId

            // ? update balance
            const userInstance = await User.findOne(UserId)
            userInstance.balance += Number(transactionInstance.amount)
            userInstance.save()

            // ? deleting transaction
            transactionInstance.destroy()

            await History.create({ event: `A transaction with id ${TransactionId} has been deleted` })
            res.status(200).json({ status: 'success' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: error })
        }
    }
}

module.exports = TransactionController