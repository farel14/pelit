const { createWorker } = require('tesseract.js');

const worker = createWorker();

module.exports = (receiptImage) => {
    (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(receiptImage);
        // console.log(text);
        await worker.terminate();
    })();
    return text
}