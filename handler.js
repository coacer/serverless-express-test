const handler = require('serverless-express/handler');
const app = require('./src/app');
 
module.exports.app = handler(app);
