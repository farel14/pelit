const tesseract = require("../OCR");

class OCRController {
  static postOcr(req, res) {
    const imageUrl = req.file.buffer;
    console.log("masuk controller", imageUrl);
    // const imageUrl = req.urlImage
    // const { imageUrl } = req.body
    // console.log(req.body)
    // console.log('da IMAGE',imageUrl)

    if (!imageUrl) return res.status(400).json({ message: "bad request" });

    tesseract(imageUrl)
      .then((dataObj) => {
        console.log("masuk tesseract", dataObj);
        res.status(200).json(dataObj);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "fail" });
      });
    // if (totalPrice) {
    // } else {

    // }
  }
}
module.exports = OCRController;
