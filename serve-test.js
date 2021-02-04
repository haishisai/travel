let express = require('express');
let app = express();

let cors = require('cors');  // 引入cors 中间件，解决跨域   npm install express cors --save
// app.use(cors());

// 前端发送的是get请求，接口是flowers. 返回的数据code 表示成功或失败，obj 表示数据
// 数据中Cn 表示中文名称，En表示中文名称
app.post('/test', (req, res) => {
  res.json({
    code: 0,
  })
})

let ccc = { "name": "pd" }


//  jsonp  1用回调函数把数据包裹起来  2数据需要是字符串
app.get('/test2', (req, res) => {
  let msg = JSON.stringify(ccc)
  res.send(`pdcb(${msg})`); 
})

app.get('/test3', (req, res) => {
  var data = {
    "name": "Monkey"
  };
  data = JSON.stringify(data)
  var callback = 'pdcb2'+'('+data+');';
  res.send(callback)
})




app.listen(9000, () => {
  console.log('server start at 9000');
})

