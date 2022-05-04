import * as dgram from 'dgram';
import { logger } from './logger';


const PORT = 21000;
const server = dgram.createSocket('udp4');

server.on('error', (error) => {
  logger.error("UDPServer", error)
  server.close()
})

server.on('listening',function(){
  const address = server.address();
  const port = address.port;

  logger.info('UDPServer listening @ ' + port);
  logger.info('UDPServer IP: ' + address.address);
}); 

server.on('message',function(msg, info){
  logger.info(msg.toString, "| Received ${msg.length} bytes from ${info.address}:${info.port}")
  
  const response = {
      serverPort: 8080, // check TBD
      timestamp: (new Date()).toJSON(),
      received: {
          message: msg.toString(),
          fromIP: info.address,
          fromPort: info.port
      }
  }
  const data = Buffer.from(JSON.stringify(response));


  server.send(data, info.port, 'localhost', function(error: unknown){
      if(error){
          logger.error('UPDServer error: ', error);
      } else {
        logger.debug('Data sent');
      }
  })
});

server.on('close', () => {
  logger.info("UDPServer Closed socket");
})

server.bind(PORT);