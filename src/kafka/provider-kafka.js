const { Kafka, logLevel } = require('kafkajs')

module.exports = class Provider {

  create() {
    if (process.env.NODE_ENV !== 'dev') {
      let config = this.defaultConfig();
      config.ssl = {
        rejectUnauthorized: false,
        ca: [fs.readFileSync(process.env.CA, process.env.ENCODING)],
        passphrase: process.env.PASS,
        pfx: fs.readFileSync(process.env.PFX)
      };
    }
    return new Kafka(this.defaultConfig())
  }

  _defaultConfig() {
    return {
      clientId: process.env.KAFKA_CLIENT_GROUP_ID,
      brokers: process.env.KAFKA_BROKERS_URLS,
      logLevel: logLevel.ERROR,
      ssl: undefined
    };
  }
}
