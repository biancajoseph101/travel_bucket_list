const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   res.send('This is root!');
// });

app.use('/api', routes);
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
