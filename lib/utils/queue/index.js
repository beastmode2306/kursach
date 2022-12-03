const amqplib = require("amqplib/callback_api");
const queue = "tasks";

amqplib.connect("amqp://guest:guest@rabbitmq:5672/", (err, conn) => {
  if (err) throw err;

  // Sender
  conn.createChannel((err, ch1) => {
    if (err) throw err;

    ch1.assertQueue(queue);

    setInterval(() => {
      ch1.sendToQueue(queue, Buffer.from("something to do"));
      console.log("msg sent");
    }, 1000);
  });
});
