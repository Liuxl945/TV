const fs = require("fs")

let data = fs.readFileSync("./国内地方台202110.m3u")
let oldJson = JSON.parse(fs.readFileSync("./live.json").toString())


let arr = data.toString().split(/\n/)



let newArr = []

for (let i = 0; i < arr.length - 1; i++) {
    const element = arr[i];
    if(element.includes("#EXTINF:-1")) {
        newArr.push({
            channelName: element.replace("#EXTINF:-1 ,", "").trim(),
            channelUrls: arr[i + 1].trim()
        })
    }
}

let jsonArr = []

newArr.forEach(item => {
    let find = jsonArr.filter(i => {
        return i.channelName === item.channelName
    })[0]

    // let isNeed = oldJson.filter(i => {
    //     return i.channelName === item.channelName
    // })

    if(find === undefined) {
        jsonArr.push({
            channelName: item.channelName,
            channelUrls: [item.channelUrls]
        })
    }else {
        find.channelUrls.push(item.channelUrls)
    }
    
})

jsonArr.sort((a,b) => {
    return a.channelName - b.channelName
})


fs.writeFileSync("mu3.json", JSON.stringify(jsonArr,"","\t"))


console.log(jsonArr.length)