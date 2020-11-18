const handler = require('serverless-express/handler');
const app = require('path/to/your/express/app');
 
module.exports.app = handler(app);
