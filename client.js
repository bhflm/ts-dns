const fs = require('fs');

const dgram = require('dgram');

const HOST = '0.0.0.0';
const PORT = 21000;
const message = Buffer.from('My KungFu is Good!');
const client = dgram.createSocket('udp4');

// Read packet
const response_packet = Buffer.from(fs.readFileSync('./packets/response_packet.txt'));
// This needs to be parsed to a DNS Packet

client.send(response_packet, 0, response_packet.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});