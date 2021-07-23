const { createWorker } = require('tesseract.js');

const worker = createWorker();

module.exports = (receiptImage) => {
    // let result
    (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(receiptImage);
        // result = text
        console.log(text);
        await worker.terminate();
    })();
    // return result
}