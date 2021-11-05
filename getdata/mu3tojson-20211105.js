const fs = require("fs")

let data = fs.readFileSync("./国内地方台20211105.m3u")

let arr = data.toString().split(/#EXTINF:-1/)


arr.shift()

let newArr = []

arr.forEach(item => {
    newArr.push(item.split(/\r\n/))
})

let jsonArr = []

newArr.forEach(item =>{
    let channelName = item[0].match(/tvg-name="(\S*)" tvg-logo/)[1]
    
    let channelUrls = item[1]
    let find = jsonArr.filter(i => {
        return i.channelName === channelName
    })[0]

    if(find === undefined) {

        const state = true || channelName.indexOf("卫视") !== -1 || channelName.indexOf("湖南") !== -1 || channelName.indexOf("长沙") !== -1  || channelName.indexOf("NNM") !== -1  || channelName.indexOf("CGTN") !== -1  || channelName.indexOf("CCTV") !== -1 
        if(state) {
            jsonArr.push({
                channelName: channelName,
                channelUrls: [channelUrls]
            })
        }
        
    }else {
        find.channelUrls.unshift(channelUrls)
    }
})

jsonArr.sort((a,b) => {
    return a.channelName - b.channelName
})


fs.writeFileSync("mu3.json", JSON.stringify(jsonArr,"","\t"))


console.log(jsonArr.length)