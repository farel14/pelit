const { Achievement, Badge, User } = require('../models')

class Controller {
    static addAchievement(req, res) {
        let userId = req.params.userId
        let newAchievement = {}

        newAchievement.UserId = userId
        Achievement.create({
            include: [User]
        })
        .then(badges => {
            res.status(200).json(badges)
        })
        .catch(err => {
            res.status(500).json({message: err })
        })
    }

    static getBadgeById(req, res) {
        let badgeId = req.params.badgeId

        Badge.findAll({
            where: {
                id: badgeId
              },
            include: [User]
        })
        .then(badge => {
            res.status(200).json(badge)
        })
        .catch(err => {
            res.status(500).json({message: err })
        })
    }
}

module.exports = Controller