var express = require('express');
var cors = require('cors');  // 引入cors 中间件，解决跨域

var app = express();
app.use(cors());

// 前端发送的是get请求，接口是flowers. 返回的数据code 表示成功或失败，obj 表示数据
// 数据中Cn 表示中文名称，En表示中文名称
app.get('/flowers', (req, res) => {
    res.json({
        code: 0,
        obj: [
            {
                CnName:'荷花',
                EnName: 'lotus'
            },
            {
                CnName:'康乃馨',
                EnName: 'carnations'
            },
            {
                CnName:'牡丹',
                EnName: 'peony'
            }
        ]
    })
})
app.listen(3000, () => {
    console.log('server start at 3000');
})