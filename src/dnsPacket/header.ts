// https://datatracker.ietf.org/doc/html/rfc1035#section-4.1.1
enum OPCODES {
    QUERY,
    IQUERY,
    STATUS,
    RESERVED
}

enum ResponseCodes {
    NO_ERROR,
    FORMAT_ERROR,
    SERVER_FAILURE,
    NAME_ERROR,
    NOT_IMPLEMENTED,
    REFUSED,
    RESERVED
}

export interface IHeader {
    QR: 0 | 1 // 1bit
    OPCODE: OPCODES
    AA: boolean // bit response
    TC: boolean // truncation 
    RD: boolean // recursion desired bit 
    RA: boolean // recursion available 
    Z: boolean // reserved must be zero in all queries & responses 
    RCODE: ResponseCodes 
    QDCODE: number // u16 int specifying number of entries in question section 
    ANCOUNT: number // u16 int specifying number of entries in answer section 
    NSCOUNT: number // u16 int specifying number of name server resource records in authority records section 
    ARCOUNT: number
    ID: number
}

export class Header implements IHeader {
    QR: 0 | 1
    OPCODE: OPCODES
    AA: boolean 
    TC: boolean 
    RD: boolean 
    RA: boolean 
    Z: boolean 
    RCODE: ResponseCodes 
    QDCODE: number 
    ANCOUNT: number 
    NSCOUNT: number 
    ARCOUNT: number
    ID: number
}