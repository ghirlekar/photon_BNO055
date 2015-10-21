var serialport = require('serialport');

var Serial = new serialport.SerialPort(process.argv[2], {
    baudrate: 115200,
    parser: serialport.parsers.readline('\r\n')
}, true, function(err) {
    if (err) console.error(err);
    else {
        Serial.on('data', console.log);
        Serial.on('error', console.error);
    }
});
