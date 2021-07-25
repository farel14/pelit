const { Transaction, History, User } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

class TransactionController {
  static async getAll(req, res) {
    const { category, type } = req.query;
    const { date, month, year } = +req.query;
    // ? month Number & year Number
    try {
      const data = await Transaction.findAll({
        where: { category, date, month, year, type },
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static getAllByUserId(req, res) {
    let userId = +req.params.UserId;

    Transaction.findAll({
      where: {
        UserId: userId,
      },
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }

  static getByType(req, res) {
    let userId = +req.params.UserId;
    let type = req.params.type
    let month = +req.body.month;

    Transaction.findAll({
      where: {
        UserId: userId,
        month: month,
        type: type
      },
    })
      .then((data) => {
            data.forEach(ele => {
                ele.type === 'Expense' ? ele.amount *= -1 : null
                return ele
            })

        let total = 0
        for (let i = 0; i < data.length; i++) {
            total += data[i].amount
        }

        res.status(200).json({total, data});
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }


  static getAllGroupedByCategory(req, res) {
    let userId = +req.params.UserId;
    let monthNum = +req.body.month;

    Transaction.findAll({
      where: {
        month: monthNum,
        UserId: userId,
      },
      order: ['category']
    })
      .then((data) => {
        let group = []
        let flag = true
        data.forEach(ele => {
            ele.type === 'Expense' ? ele.amount *= -1 : null
            if (group.length > 0) {
                for (let i = 0; i < group.length; i++) {
                    if (group[i].category == ele.category) {
                        flag = true
                        group[i].total += ele.amount
                        group[i].items.push({
                            id: ele.id,
                            title: ele.title,
                            nameDate: `${ele.date} ${ele.fullDate.toLocaleString('default', { month: 'long' })}`,
                            type: ele.type,
                            title: ele.title,
                            amount: ele.amount,
                            date: ele.date,
                            month: ele.month,
                            year: ele.year,
                            fullDate: ele.fullDate
                        })
                    } else {
                        flag = false
                    }        
                }    
            } else {
                flag = false
            }

            if (flag == false) {
                group.push({
                    category: ele.category,
                    total: ele.amount,
                    items: [{
                        id: ele.id,
                        title: ele.title,
                        nameDate: `${ele.date} ${ele.fullDate.toLocaleString('default', { month: 'long' })}`,
                        type: ele.type,
                        title: ele.title,
                        amount: ele.amount,
                        date: ele.date,
                        month: ele.month,
                        year: ele.year,
                        fullDate: ele.fullDate
                    }]
                })
            }
            return ele
        })
        res.status(200).json(group);
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }


  static getAllGroupedByDate(req, res) {
    let userId = +req.params.UserId;
    let monthNum = +req.body.month;

    Transaction.findAll({
      where: {
        month: monthNum,
        UserId: userId,
      },
      order: [['date', 'DESC']]
    })
      .then((data) => {
        let group = []
        let flag = true
        data.forEach(ele => {
            ele.type === 'Expense' ? ele.amount *= -1 : null
            if (group.length > 0) {
                for (let i = 0; i < group.length; i++) {
                    if (group[i].date == ele.date) {
                        flag = true
                        group[i].total += ele.amount
                        group[i].items.push({
                            id: ele.id,
                            title: ele.title,
                            category: ele.category,
                            type: ele.type,
                            title: ele.title,
                            amount: ele.amount,
                            month: ele.month,
                            year: ele.year,
                            fullDate: ele.fullDate
                        })
                    } else {
                        flag = false
                    }        
                }    
            } else {
                flag = false
            }

            if (flag == false) {
                group.push({
                    date: ele.date,
                    nameDate: `${ele.date} ${ele.fullDate.toLocaleString('default', { month: 'long' })}`,
                    total: ele.amount,
                    items: [{
                        id: ele.id,
                        title: ele.title,
                        category: ele.category,
                        type: ele.type,
                        title: ele.title,
                        amount: ele.amount,
                        month: ele.month,
                        year: ele.year,
                        fullDate: ele.fullDate
                    }]
                })
            }
            return ele
        })

        res.status(200).json(group);
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }


  static getBetweenTwoDates(req, res) {
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let userId = +req.params.UserId;

    let allTransactions;

    Transaction.findAll({
      where: {
        UserId: userId,
        fullDate: {
          [Op.between]: [startDate, endDate],
        },
      },
    })
      .then((data) => {
        allTransactions = [...data]
            allTransactions.forEach(ele => {
                ele.type === 'Expense' ? ele.amount *= -1 : null
                return ele
            })

            let output = 0
            console.log(allTransactions.length)
            for (let i = 0; i < allTransactions.length; i++) {
                console.log(allTransactions[i].amount)
                output += allTransactions[i].amount
            }

            res
            .status(200)
            .json({ total: output, data: allTransactions });
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }

  static getBetweenTwoDatesByType(req, res) {
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let userId = +req.params.UserId;
    let type = req.params.type

    let allTransactions;

    Transaction.findAll({
      where: {
        UserId: userId,
        type: type,
        fullDate: {
          [Op.between]: [startDate, endDate],
        },
      },
    })
      .then((data) => {
        allTransactions = [...data]
            allTransactions.forEach(ele => {
                ele.type === 'Expense' ? ele.amount *= -1 : null
                return ele
            })

            let output = 0
            console.log(allTransactions.length)
            for (let i = 0; i < allTransactions.length; i++) {
                console.log(allTransactions[i].amount)
                output += allTransactions[i].amount
            }

            res
            .status(200)
            .json({ total: output, data: allTransactions });
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }

  static async postOne(req, res) {
    let UserId = req.params.UserId;
    let { type, fullDate, category, note, amount, title } = req.body;

    const fullDateArr = fullDate.split("-");
    const year = fullDateArr[0];
    const month = fullDateArr[1];
    const date = fullDateArr[2];
    try {
      const newData = await Transaction.create({
        UserId,
        type,
        amount: +amount,
        fullDate,
        date,
        month,
        year,
        receiptImage: req.urlImage,
        category,
        note,
        title,
      });

      await History.create({
        event: `A transaction with id ${newData.id} has been created and user ${UserId} balance has been updated`,
      });
      res.status(201).json(newData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error });
    }
  }
  static async putOne(req, res) {
    const { TransactionId } = +req.params;
    const { type, fullDate, receiptImage, category, notes } = req.body;
    const { amount, date, month, year } = +req.body;
    try {
      const oldTransaction = await Transaction.findOne(TransactionId);
      if (!oldTransaction)
        return res.status(400).json({ message: "Transaction not found" });

      if (amount) {
        // ? update balance
        const UserId = oldTransaction.UserId;
        const userInstance = await User.findOne(UserId);
        userInstance.balance =
          userInstance.balance - Number(oldTransaction.amount) + amount;
      }

      Transaction.update(
        {
          type,
          fullDate,
          date,
          month,
          year,
          receiptImage,
          category,
          notes,
        },
        {
          where: {
            id: TransactionId,
          },
        }
      );

      await userInstance.save();
      await History.create({
        event: `A transaction with id ${TransactionId} has been updated and user ${UserId} balance has been updated`,
      });
      res.status(200).json({ status: "success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error });
    }
  }
  static async deleteOne(req, res) {
    const { TransactionId } = +req.params;
    try {
      const transactionInstance = await Transaction.findOne(TransactionId);
      if (!transactionInstance)
        return res.status(400).json({ message: "Transaction not found" });
      const UserId = transactionInstance.UserId;

      // ? update balance
      const userInstance = await User.findOne(UserId);
      userInstance.balance += Number(transactionInstance.amount);
      userInstance.save();

      // ? deleting transaction
      transactionInstance.destroy();

      await History.create({
        event: `A transaction with id ${TransactionId} has been deleted`,
      });
      res.status(200).json({ status: "success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error });
    }
  }
}

module.exports = TransactionController;
