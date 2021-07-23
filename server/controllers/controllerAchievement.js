const { Achievement, Badge, User } = require('../models')

class Controller {
    static addAchievement(req, res) {
        let userId = req.params.userId
        let badgeId = req.params.badgeId
        let newAchievement = {}

        let created = new Date()

        newAchievement.UserId = userId
        newAchievement.BadgeId = badgeId
        newAchievement.date = created.getDate()
        newAchievement.month = created.getMonth() + 1
        newAchievement.year = created.getFullYear()

        Achievement.create(newAchievement)
        .then(achievement => {
            res.status(200).json(achievement)
        })
        .catch(err => {
            res.status(500).json({message: err })
        })
    }
}

module.exports = Controller