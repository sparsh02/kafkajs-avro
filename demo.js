const KafkaAvro = require('kafka-avro');
const kafka =  require('kafkajs');

console.log(KafkaAvro.CODES);
const KafkaAvro = require('kafka-avro');

const kafkaAvro = new KafkaAvro({
    kafkaBroker: 'localhost:9092',
    schemaRegistry: 'http://localhost:8081',
});