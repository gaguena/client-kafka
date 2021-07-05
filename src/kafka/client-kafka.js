const {Kafka} = require('kafkajs')

module.exports = new Kafka({
  clientId: 'kafka-client-dev',
  brokers: ['127.0.0.1:9092']
})