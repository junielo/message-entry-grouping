import express from 'express';
import { Router } from 'express';
import * as path from 'path';
import http from 'http';
import bodyParser from 'body-parser';
import grouping from './routes/grouping';

const app = express();
const server = new http.Server(app);

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  if (req.method === "OPTIONS")
  res.sendStatus(200);
  else
  next();
});
// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', grouping)

const port = process.env.PORT || 3333;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
