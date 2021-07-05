const TopicConsumer = require('./src/kafka/consumer-kafka');
const mock = require('./src/service/mock');
const ProductService = require('./src/service/product-service');

let productService = new ProductService();

productService.send(mock);

new TopicConsumer('kafka-client-dev').read()

