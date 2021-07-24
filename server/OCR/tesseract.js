const { createWorker } = require('tesseract.js');

const worker = createWorker();

module.exports = (receiptImageUrl) => {
    const innerFunction = (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(receiptImageUrl);
        await worker.terminate();

        return text
    })();

    return innerFunction
}