// шаблон сервера
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'medical',
});

connection.connect();

// для того, чтобы можно было обрабатывать req.body
app.use(bodyParser.text());
app.use(bodyParser.json());

// разрешаем CORS запросы на стороне сервера
app.use(cors());

connection.query('SET SESSION wait_timeout = 604800'); // Seven days connection timeout

// ------------------------------ POST
app.post('/auth', function (req, res) {
  const query = 'SELECT * FROM users WHERE `login`="' + req.body.login + '" AND `password`="' + req.body.password + '"';

  connection.query(query, function (error, results, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'ошибка выполнения запроса', error: 0 }));
    }

    if (results.length !== 0) {
      res.send(JSON.stringify({ message: 'ok', user_id: results[0].id })); // результат из result можно запихнуть в ответ
    } else {
      res.send(JSON.stringify({ message: 'пользователь не найден', error: 1 }));
    }
  });
});

app.post('/services', function (req, res) {
  const query = 'INSERT INTO `services`(`clinic_id`, `name`, `cost`, `duration`) VALUES (1,"' + req.body.service + '",' + req.body.cost + ',' + req.body.duration + ')';

  connection.query(query, function (error, results, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'непредвиденная ошибка', error: 1 }));
    }
    res.send(JSON.stringify({ message: 'ok' })); // результат из result можно запихнуть в ответ
  });
});

app.post('/clients', function (req, res) {
  const query =
    'INSERT INTO `clients`(`clinic_id`, `fio`, `registration`, `bday`, `phone`) VALUES (1,"' +
    req.body.fio +
    '","' +
    req.body.register +
    '","' +
    req.body.birthday +
    '","' +
    req.body.phone +
    '")';

  connection.query(query, function (error, results, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'непредвиденная ошибка', error: 1, err_message: error }));
      console.log(error);
    }
    res.send(JSON.stringify({ message: 'ok' })); // результат из result можно запихнуть в ответ
  });
});

app.post('/stuff', function (req, res) {
  const query = 'INSERT INTO `stuff`(`clinic_id`, `fio`, `spec`, `time`) VALUES (1,"' + req.body.fio + '","' + req.body.spec + '",' + req.body.dur + ')';

  connection.query(query, function (error, results, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'непредвиденная ошибка', error: 1 }));
    }
    res.send(JSON.stringify({ message: 'ok' })); // результат из result можно запихнуть в ответ
  });
});

app.post('/records', function (req, res) {
  console.log(req.body);
  const query =
    'INSERT INTO `records` (`clinic_id`, `datetime`, `service_id`, `client_id`, `stuff_id`) VALUES (1, "' +
    req.body.datetime +
    '", ' +
    req.body.ser +
    ', ' +
    req.body.client +
    ',' +
    req.body.doc +
    ')';
  console.log(query);

  connection.query(query, function (error, results, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'непредвиденная ошибка', error: 1 }));
    }
    res.send(JSON.stringify({ message: 'ok' })); // результат из result можно запихнуть в ответ
  });
});

// ------------------------------ GET
app.get('/stuff', function (req, res) {
  const query = 'SELECT * FROM stuff WHERE `clinic_id`=1';

  connection.query(query, function (error, result, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'неожиданная ошибка', error: 1 }));
    }
    res.send(JSON.stringify({ message: 'ok', content: result })); // результат из result можно запихнуть в ответ
  });
});

app.get('/clients', function (req, res) {
  const query = 'SELECT * FROM clients WHERE `clinic_id`=1';

  connection.query(query, function (error, result, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'неожиданная ошибка', error: 1 }));
    }
    res.send(JSON.stringify({ message: 'ok', content: result })); // результат из result можно запихнуть в ответ
  });
});

app.get('/services', function (req, res) {
  const query = 'SELECT * FROM services WHERE `clinic_id`=1';

  connection.query(query, function (error, result, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'неожиданная ошибка', error: 1 }));
    }
    res.send(JSON.stringify({ message: 'ok', content: result })); // результат из result можно запихнуть в ответ
  });
});

app.get('/schedule', function (req, res) {
  const query =
    "SELECT `records`.`id` AS 'record_id', `records`.`datetime`, `records`.`stuff_id` AS 'doctor_id', `stuff`.`fio` AS 'doctor', `clients`.`fio` AS 'client', `services`.`name` AS 'service', `services`.`id` FROM `records` INNER JOIN `stuff` ON `stuff`.`id` = `records`.`stuff_id` INNER JOIN `clients` ON `clients`.`id` = `records`.`client_id` INNER JOIN `services` ON `services`.`id` = `records`.`service_id`";

  connection.query(query, function (error, result, fields) {
    if (error) {
      res.send(JSON.stringify({ message: 'неожиданная ошибка', error: 1 }));
    }
    res.send(JSON.stringify({ message: 'ok', content: result })); // результат из result можно запихнуть в ответ
  });
});

app.listen(80, (err) => {
  if (err) return console.log('something bad happened', err);
  console.log('server is listening 80');
});
