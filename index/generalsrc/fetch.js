// let eur = ''
// async function euro() {
//     let data = await fetch('https://api.cryptonator.com/api/ticker/eur-try')
//     let datas = await data.json()
//     console.log(JSON.parse(datas))




// }
// euro()
const usdTag = document.querySelector('#dollar')
const euroTag = document.querySelector('#euro')
const btcTag = document.querySelector('#btc')
const dogeTag = document.querySelector('#doge')
axios.get('https://api.cryptonator.com/api/ticker/usd-try', { headers: { Accept: 'application/json' } }).then(res => {
    usdTag.innerHTMl = `$/₺ = ${res.data.ticker.price}`

}).catch(err => {
    console.log(err)
})
axios.get('https://api.cryptonator.com/api/ticker/eur-try', { headers: { Accept: 'application/json' } }).then(res => {
    euroTag.innerHTMl = `€/₺ = ${res.data.ticker.price}`

}).catch(err => {
    console.log(err)
})
axios.get('https://api.cryptonator.com/api/ticker/btc-usd', { headers: { Accept: 'application/json' } }).then(res => {
    btcTag.innerHTMl = `BTC/$ = ${Math.floor(res.data.ticker.price)}`

}).catch(err => {
    console.log(err)
})
axios.get('https://api.cryptonator.com/api/ticker/doge-usd', { headers: { Accept: 'application/json' } }).then(res => {
    dogeTag.innerHTMl = `DOGE/$ = ${(res.data.ticker.price)}`

}).catch(err => {
    console.log(err)
})