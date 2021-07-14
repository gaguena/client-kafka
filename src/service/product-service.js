const TopicProducer = require("../kafka/producer-kafka")

module.exports = class ProductService {

    constructor() {
        this.productIntegration = new TopicProducer('lmtracking01');
    }

    send(product) {
        try {
            this.productIntegration.push(product);
        } catch (ex) {
            console.error(ex);
        }
    }
}
