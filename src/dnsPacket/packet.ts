import { IHeader } from './header';
import { IQuestion } from './question';
import { IRecords } from './records';

// We need to build a parser bc this is the message that comes inside the buffer on the udp server messsage

class DNSPacket {
    Header: IHeader
    Question: IQuestion
    Answer: IRecords
    Authority: IRecords
    Additional: IRecords

    constructor(msg) {
        // We receive the data to parse; 
        this.Header = this.parseHeader(msg);
    };
};

