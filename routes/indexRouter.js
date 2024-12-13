const { Router } = require('express');

const indexRouter = Router();

let nextId = 2;

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
    id: 0,
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
    id: 1,
  },
];

//indexRouter.get('/', (req, res) => res.send('This is the index'));

indexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

indexRouter.get('/messages/:messageId', (req, res) => {
  const { messageId } = req.params;

  const messageIdInt = parseInt(messageId);
  console.log(messageIdInt);
  const message = messages.find((obj) => obj.id === messageIdInt);
  console.log(message);
  res.render('messageDetails', { message: message });
});

indexRouter.get('/new', (req, res) => {
  res.render('form', { nextId: nextId });
});

indexRouter.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
    id: nextId,
  });
  nextId++;
  res.redirect('/');
});

module.exports = indexRouter;
