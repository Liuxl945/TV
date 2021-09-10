const fs = require("fs")

let data = fs.readFileSync("./国内地方台202110.m3u")

let arr = data.toString().split(/\n/)


let newArr = []

arr.forEach(item => {
    newArr.push(item.split(","))
})

let jsonArr = []

newArr.forEach(item =>{
    let channelName = item[0].slice(0,item[0].indexOf(" "))
    let channelUrls = item[1]
    let find = jsonArr.filter(i => {
        return i.channelName === channelName
    })[0]

    if(find === undefined) {
        console.log()

        const state = channelName.indexOf("卫视") !== -1 || channelName.indexOf("湖南") !== -1 || channelName.indexOf("长沙") !== -1  || channelName.indexOf("NNM") !== -1  || channelName.indexOf("CGTN") !== -1  || channelName.indexOf("CCTV") !== -1 
        if(state) {
            jsonArr.push({
                channelName: channelName,
                channelUrls: [channelUrls]
            })
        }
        
    }else {
        find.channelUrls.push(channelUrls)
    }
})

jsonArr.sort((a,b) => {
    return a.channelName - b.channelName
})


fs.writeFileSync("mu3.json", JSON.stringify(jsonArr,"","\t"))


console.log(jsonArr.length)