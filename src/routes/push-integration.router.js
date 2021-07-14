import express from express

module.exports = app => {
  let router = express.Router()
  let productIntegrationController = new ProductIntegrationController()

  router.post("/", productIntegrationController.push)

  app.use('/products/integrations', router);
}
