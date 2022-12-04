const amqpHandler = (amqplib) => {
  const createConnection = async (connectionString) =>
    amqplib.connect(connectionString).catch((err) => {
      console.error(err);
      throw err;
    });

  const dropConnection = async (conn) => conn.close();

  const createChannel = async (conn) =>
    conn.createChannel().catch((err) => {
      console.error(err);
      throw err;
    });

  const dropChannel = async (ch) => ch.close();

  const sendMessage = async (ch, queue, msg) =>
    ch.sendToQueue(queue, Buffer.from(msg))

  const receiveMessage = async (ch, queue, callback) =>
    ch.consume(queue, (msg) => {
      callback(msg.content);
    });

  return {
    createConnection,
    dropConnection,
    createChannel,
    dropChannel,
    sendMessage,
    receiveMessage,
  };
};

module.exports = amqpHandler;
