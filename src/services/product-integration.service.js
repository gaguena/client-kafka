const BaseException = require("../exception/base-exception");
const TopicProducer = require("../kafka/producer-kafka")

module.exports = class ProductIntegrationService {

    constructor() {
        this.productIntegration = new TopicProducer(process.env.PRODUCT_INTEGRATION_TOPIC);
    }

    push(product) {
        try {
            this.productIntegration.push(product);
        } catch (ex) {
            console.error(ex);
            throw new BaseException(ex);
        }
    }
}
