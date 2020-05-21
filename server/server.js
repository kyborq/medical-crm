// шаблон сервера
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user01',
  password: '123456',
  database: 'medical',
});

connection.connect();

// для того, чтобы можно было обрабатывать req.body
app.use(bodyParser.text());
app.use(bodyParser.json());

// разрешаем CORS запросы на стороне сервера
app.use(cors());

// app.get("/users", function (req, res) {
//   /*
//     На данном маршруте нужно вывести содержимое файла users.dat
//   */
//   res.send("Маршрут для вывод содержимого файла пользователей");
// });

app.post('/auth', function (req, res) {
  console.log(req.body);
  let query = 'SELECT * FROM users WHERE `login`="' + req.body.login + '" AND `password`="' + req.body.password + '"';

  connection.query(query, function (error, results, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'пользователь не найден', error: 1 }));
    }
    res.send(JSON.stringify({ message: 'ok', content: results })); // результат из result можно запихнуть в ответ
  });
});

app.listen(80, (err) => {
  if (err) return console.log('something bad happened', err);
  console.log('server is listening 80');
});
