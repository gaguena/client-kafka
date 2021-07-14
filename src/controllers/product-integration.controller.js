import ProductIntegrationService from "../services/product-integration.service"

module.exports = class ProductIntegrationController {

  constructor() {
    this.productService = new ProductIntegrationService(topicName);
  }

  push (req, resp) {
    try {
      this.productService.push(req.body);
      resp.json({status: 'Success integration push'})
    } catch(ex) {
      resp.status(500).json({message: 'Error integration push'});
    }
  }
}