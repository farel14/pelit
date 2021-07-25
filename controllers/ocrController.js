const tesseract = require('../OCR')

class OCRController {
    static postOcr(req, res) {
        const { imageUrl } = req.body

        if (!imageUrl) return res.status(400).json({message: 'bad request'})

        tesseract(imageUrl)
            .then(dataObj => {
                res.status(200).json(dataObj)
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