const { Transaction, History, User } = require('../models')

class TransactionController {
    static async getAll(req, res) {
        const { category, date, type } = req.query
        const { month, year } = +req.query
        // ? month Number & year Number
        try {
            const data = await Transaction.findAll({
                where: { category, date, month, year, type }
            })
            res.status(200).json(data)
        } catch (error) {
            console.error(error)
        }
    }
    static async getById(req, res) {
        const { UserId } = req.params
        try {
            const userData = await User.findOne(UserId)
            if (!userData) return res.status(400).json({ message: 'User not found' })
            res.status(200).json(userData)
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: error })
        }

    }
    static async postOne(req, res) {
        const { UserId, type, fullDate, date, receiptImage, category, notes } = req.body
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
        const { type, amount, fullDate, date, month, year, receiptImage, category, notes } = req.body
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