const CustomerOrder = require('../data/customerOrder');
const dadosMock = require('../data/mock');
const Kafka = require('./provider-kafka')

module.exports = class TopicProducer {
    constructor (topicName) {
        let kafka = Kafka;
        this.topicName = topicName;
        this.producer = kafka.producer()
    }
    
    async push (messageData) {
        await this.producer.connect()
        await this.producer.send({
            topic: this.topicName,
            messages: [{ value: JSON.stringify(messageData) }]
        }).then(async () => {
            await this.producer.disconnect()
        })
    }
}