const express = require('express');
const app = express();
const PORT = 3000;

const path = require('node:path');
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessage');

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
