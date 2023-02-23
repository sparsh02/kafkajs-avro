const KafkaAvro = require("kafkajs-avro");

(async () =>{

    const conn_options = {
        clientId: "<client-id>",
        brokers: ["<hostname>:9092"],
        avro: {
            url: "https://<hostname>:<port>"
        }
    }
    const kafka = new KafkaAvro(conn_options);

    /* Producer */
    const producer = kafka.avro.producer()
    await producer.connect()

    setInterval(() => {
        producer.send({
            topic: "<topic>",
            messages: [{
                subject: "<subject>",
                version: "latest",
                value: { value: 1 }
            }]
        })
    }, 1000)

    /* Consumer */
    const consumer = kafka.avro.consumer({ groupId: "<consumer-group-id>" })
    await consumer.connect()
    await consumer.subscribe({ topic: "<topic>" })

    consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(message.value)
        }
    })
})()