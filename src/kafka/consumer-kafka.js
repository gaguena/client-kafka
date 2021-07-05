const Kafka = require('./client-kafka')

module.exports = class TopicConsumer {
    constructor(consumer) {
        let kafka = Kafka;
        this.consumer = kafka.consumer({ groupId: consumer })
    }

    async read() {
        await this.consumer.connect()
        await this.consumer.subscribe({ topic: 'lmtracking', fromBeginning: true })
        await this.consumer.run({
            eachMessage: async ({ message }) => {
                console.log({
                    value: message.value.toString(),
                })
            },
        })
    }
}