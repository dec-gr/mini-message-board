const { Router } = require('express');
const db = require('../db/queries');

const indexRouter = Router();

let nextId = 2;

const messages = [
  {
    text: 'Bye there!',
    user: 'Amando',
    added: new Date(),
    id: 0,
  },
  {
    text: 'Goodbye World!',
    user: 'Charles',
    added: new Date(),
    id: 1,
  },
];

//get all messages
//get message from id

//indexRouter.get('/', (req, res) => res.send('This is the index'));

indexRouter.get('/', async (req, res) => {
  const messages1 = await db.getAllMessages();
  res.render('index', { messages: messages1 });
});

indexRouter.get('/messages/:messageId', async (req, res) => {
  const { messageId } = req.params;
  const message = await db.getMessage(messageId);
  res.render('messageDetails', { message: message });
});

indexRouter.get('/new', (req, res) => {
  res.render('form');
});

indexRouter.post('/new', async (req, res) => {
  // messages.push({
  //   user: req.body.name,
  //   text: req.body.message,
  //   added: new Date(),
  // });
  const username = req.body.name;
  const message = req.body.message;
  const added = new Date();
  console.log(req.body);
  console.log(message);
  await db.postMessage({ username, message, added });
  res.redirect('/');
});

module.exports = indexRouter;
