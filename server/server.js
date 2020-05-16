// шаблон сервера
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "medical_crm",
// });

// connection.connect();

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

app.post("/auth", function (req, res) {
  /*
  connection.query("SELECT * FROM users WHERE ...", function (error, results, fields) {
    if (error) {
        res.send(JSON.stringify({ message: "Ошибка сервера", error: 1 }));
    }
    res.send(JSON.stringify({ message: "ok" })); // результат из result можно запихнуть в ответ
  });
*/
});

app.listen(80, (err) => {
  if (err) return console.log("something bad happened", err);
  console.log("server is listening 80");
});
