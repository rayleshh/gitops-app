const http = require('http');

// Logger
const { createLogger, format, transports } = require('winston');

// const logger = createLogger({
//   level: 'info',
//   exitOnError: false,
//   format: format.json(),
//   transports: [
//     new transports.File({ filename: `/var/log/datadog-app-teste/app.log` }),
//   ],
// });

// module.exports = logger;

// Datadog
const tracer = require('dd-trace').init()

// APP
const hostname = '0.0.0.0';
const port = 8080;


console.log(process.env.ENVIRONMENT || 'e2e');

// if (process.env.ENVIRONMENT === 'prod') {	
//     process.exit(1);	
// }

const server = http.createServer((_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Vitao!\n');
//   logger.info('Get API: ' + Math.random() ,{color: 'blue' });
  console.log('Get API: ' + Math.random()');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
