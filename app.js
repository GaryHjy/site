const express = require('express')
const app = express()

app.use(express.static('dist'))

app.get('*',function(request,response){
  request.sendfile('./dist/index.html')
})

app.listen(80,function(){
  console.log('连接成功')
})
