// const tesseract = require('./tesseract')

// *indomaret
// const url = 'https://pbs.twimg.com/media/EdS8xTIUEAAG-zn.jpg'
// *alfamart
// const url = 'https://i.imgur.com/ncYqNfe.png'
// *alfamart 2 #fail
// const url = 'https://cdn-2.tstatic.net/makassar/foto/bank/images/ua-alfa.jpg'
// *btdelivery 
// const url = 'https://passingthroughresearcher.files.wordpress.com/2019/06/img_20190511_084303.jpg?w=546&h=510&crop=1'
// *cafe
// const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/1200px-ReceiptSwiss.jpg'
// *transmart #lowQuality
// const url = 'https://4.bp.blogspot.com/-b3hc5E4A7Yk/WHjxOheQxLI/AAAAAAAAATw/i7CR0k5BpzMPjNvf5YJpID3HzAPM31ARQCLcB/s1600/20170108_192114.jpg'
// *carrefour #crumpled
// const url = 'https://s.kaskus.id/r540x540/images/2016/01/30/232510_20160130102928.jpg'
// *farmer's market california
// const url = 'https://www.bridgeandtunnelclub.com/bigmap/queens/astoria/21-6131ststreet/californiafarmersmarket/receipt_2012_05_26.jpg'
// *IKEA indonesia #2 fail
// const url = 'https://media-cdn.tripadvisor.com/media/photo-s/08/ac/5f/08/ikea-alam-sutera.jpg'
// *IKEA indonesia
// const url = 'https://1.bp.blogspot.com/-VwohzHQtNtU/WuVj3ybuXGI/AAAAAAAAVJE/h07LhpQ_KBA5W3QiFoCkWdmUVNkHU42xQCK4BGAYYCw/s1600/IMG_20180429_131801.jpg'



// ! parser function
module.exports = (data) => {
    // tesseract(url)
    // .then(data => {
    // !versi split
    // if (!data) return console.log(`Sorry we can't read your receipt`)
    const totalPriceArr = data.split('\n')
    let totalPriceStr = totalPriceArr.filter(ele => ele.search(/total/i) >= 0)[0]
    totalPriceStr = totalPriceStr.split(' ')[totalPriceStr.split(' ').length - 1]
    const totalPriceNumber = Number(Math.abs(totalPriceStr.replace(',', '')))
    const totalPriceObj = {
        total: totalPriceNumber
    }
    // console.log(totalPriceObj)
    return totalPriceObj

    // })
    // .catch(err => console.error(err))

    // !versi regex (fail)
    // const input = str.search(/total/i)
    // const totalPrice = str.substring(input)
    // console.log(totalPrice)
}

