const {
  ServiceBroker
} = require('moleculer');
const config = require('config');

const HelloSvc = require('./services/hello/hello-service');

const broker = new ServiceBroker(config.get('moleculer.broker'));

broker.createService(HelloSvc);

broker.start();