const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getMessage(id) {
  console.log('HERE');
  const { rows } = await pool.query(
    'SELECT * FROM messages WHERE id = $1 LIMIT 1',
    [id]
  );
  console.log('DONE WITH');
  return rows[0];
}

async function postMessage({ username, message, added }) {
  await pool.query(
    'INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)',
    [username, message, added]
  );
}

module.exports = {
  getAllMessages,
  getMessage,
  postMessage,
};
