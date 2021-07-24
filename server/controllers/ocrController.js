const tesseract = require('../OCR')

class OCRController {
    static postOcr(req, res) {
        const { imageUrl } = req.body

        tesseract(imageUrl)
            .then(totalPrice => {
                res.status(200).json(totalPrice)
            })
            .catch(err => {
                console.error(err)
                res.status(500).json({ message: 'fail' })
            })
        // if (totalPrice) {
        // } else {

        // }
    }
}
module.exports = OCRController