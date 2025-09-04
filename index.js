const noblox = require('noblox.js')
const settings = require("./settings.json")

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function generateStock() {
    let json = {}
    const template = require("./template.json")
    
    json.time =  Math.floor(Date.now() / 1000)

    const stock = template.stock;
    for (let i = 0; i < stock.length; i++) {
        const randomChance = getRndInteger(1, stock[i][1])
        if (randomChance == 1) {
            const randomAmount = getRndInteger(stock[i][2], stock[i][3]);
            json[stock[i][0]] = randomAmount
        } else {
            json[stock[i][0]] = 0
        }
    }

    return json;
}

// console.log(generateStock())

async function doStockLoop() {
    setTimeout(async () => {
        await noblox.setDatastoreEntry(settings.universe, "globalStuff", "stock", generateStock())
        const ds = await noblox.getDatastoreEntry(settings.universe, "globalStuff", "stock")
        console.log("Stock Generated! Stock: "+JSON.stringify(ds.data))

        doStockLoop();
    }, 300*1000)
}

async function startApp () {
    const currentUser = await noblox.setAPIKey(settings.api)

    await noblox.setDatastoreEntry(settings.universe, "globalStuff", "stock", generateStock())
    const ds = await noblox.getDatastoreEntry(settings.universe, "globalStuff", "stock")
    console.log("Stock Generated! Stock: "+JSON.stringify(ds.data))

    doStockLoop();
}
startApp()