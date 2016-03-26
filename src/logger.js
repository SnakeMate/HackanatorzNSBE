var winstonLogger = require('winston');

winstonLogger.add(
  winstonLogger.transports.File, {
    filename: __dirname + '/LOGS/somefile.log',
    level: 'info',
    json: true,
    eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
    timestamp: true
  }
)

winstonLogger.log('info', 'Hello log files!');
winstonLogger.info('Hello again log files!');


module.exports = winstonLogger;
