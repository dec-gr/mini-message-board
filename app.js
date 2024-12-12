const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessage');

app.use('/new', newMessageRouter);
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
