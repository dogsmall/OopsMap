
// var fs = require('fs')
var Address = require('../server/models/map.js')
// var crypto = require('crypto')
var _ = require('lodash')
var baiduMap = require('baidumap')
var bdmap = baiduMap.create({ 'ak': 'SAfpoRYD364XIm2G1WU39vrt3dEXVRw6' })
async function search(year, quarter) {
  let points = await Address.find({ year: year, quarter: quarter })
  points.map(async function (x) {
    let point = bdmap.search({ 'query': x.keyword, 'region': '北京' })
    let results = JSON.parse(point).results
    if (!_.isNil(results[0])) {
      x.x = obj.location.lng
      x.y = obj.location.lat
      x.tag = 1
      await x.save()
    } else {
      x.tag = 0
      await x.save()
    }
  })
}
Promise.all(search(year = 2017, quarter = 1))

// fs.readFile('Address.csv', function (err, data) {
//     if (err) {
//         console.log(err)
//     }
//     let lines = data.toString().split('\n')
//     // console.log(lines)
//     let lineObj = []
//     lines.map((e) => {
//         let line = e.split('\t')
//         // console.log(line)
//         // let picNames = []
//         let picNames=line[8].split('/')
//         // console.log(parseInt(line[5]))
//         // console.log(picNames)

//         let obj = {
//             city: line[0],
//             county: line[1],
//             region: line[2],
//             street: line[3],
//             keyword: line[4],
//             year: parseInt(line[5]),
//             quarter: line[6],
//             picName: picNames,
//             x:null,
//             y:null,
//             check:false
//         }
//         // console.log(obj)
//         lineObj.push(obj)

//     })
//     // console.log(lineObj)

//     for (let i = 0; i < lineObj.length; i++) {
//         let lineinfo = lineObj[i];
//         // console.log(lineinfo)

//             // // console.log('未找到url')
//             Address.findOneAndUpdate({ 'keyword': lineinfo.keyword,'quarter':lineinfo.quarter }, { $set: lineinfo }, { upsert: true }, function (err) {
//                 if (err) {
//                     console.log(err)
//                 }
//                 console.log("=======================已经保存===========================")
//                 console.log(i)
//             })
//     }

// })
