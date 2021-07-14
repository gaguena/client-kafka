const Kafka = require('./provider-kafka')

module.exports = class TopicConsumer {
    constructor(groupName) {
        this.consumer = kafka.consumer({ groupId: groupName })
    }

    async read(topicName) {
        await this.consumer.connect()
        await this.consumer.subscribe({ topic: topicName, fromBeginning: true })
        await this.consumer.run({
            eachMessage: async ({ message }) => {
                console.log({
                    value: message.value.toString(),
                })
            },
        })
    }
}
