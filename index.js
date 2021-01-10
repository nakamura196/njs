const express = require('express'); 
const cors = require('cors')
const app = express();

app.use(cors())

// axios を require してインスタンスを生成する
const axiosBase = require('axios');
const axios = axiosBase.create({
  //baseURL: 'http://localhost:4000', // バックエンドB のURL:port を指定する
  headers: {
    'Content-Type': 'application/json',
    //'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
});


// GET API定義
app.get('/', (req, res) => {

 //end('GETパラメータ取得: ' + );

 const uri = req.query.u

 // [2] バックエンドB に対してリクエストを投げる
 axios.get(uri)
 .then(function(response) {

   // [4] フロントエンドに対してレスポンスを返す
   res.send(response.data);
 })
 .catch(function(error) {
   //console.log('ERROR!! occurred in Backend.')
   res.send({})
 });
});

// 通常は3000ポートを使用（ポートを解放する必要あり）
app.listen('3000', () => {
 console.log('プログラムスタート');
});