const amqplib = require("amqplib/channel_api");
const amqpHandler = require("./lib");
const dotenv = require("dotenv");
dotenv.config();

const { createConnection, createChannel, sendMessage } = amqpHandler(amqplib);

const queue = "tasks1";

(async () => {
  const rabbitConnectionString = `amqp://${process.env.RABBIT_USER}:${process.env.RABBIT_PASSWORD}@${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`;
  const conn = await createConnection(rabbitConnectionString);
  const ch = await createChannel(conn);

  await ch.assertQueue(queue);

  sendMessage(ch, queue, "something to do");
})();
