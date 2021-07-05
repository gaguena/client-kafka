const Kafka = require('./client-kafka')

module.exports = class TopicProducer {
    constructor(topic) {
        let kafka = Kafka;
        this.topic = topic;
        this.producer = kafka.producer()
    }
    
    async push(message) {
        await this.producer.connect()
        console.log(`Sending message: ${message}, topic: ${this.topic}`)
        await this.producer.send({
            topic: this.topic,
            messages: [{ value: JSON.stringify(message) }]
        }).then(async () => {
            await this.producer.disconnect()
        })
    }
}