export class BytePacketBuffer {
    _buf: Uint8Array;
    _pos: number;

    constructor() {
        this._buf = new Uint8Array();
        this._pos = 0;
    }

    /// Current position within buffer
    get pos() {
        return this._pos
    }

    /// Step the buffer position forward a specific number of steps
    set step(steps: number) {
        this._pos = this._pos + steps;
    }

    /// Change the buffer position
    set seek(pos: number) {
        this._pos = pos;
    }

    read(): number {
        if (this._pos >= 512) {
            throw Error('End of buffer');
        }
        const res = this._buf[this._pos];
        this._pos = this._pos + 1;
        return res;
    }

    // Get a single byte, without changing the buffer position
    getB(): number {
        if (this._pos >= 15) {
            throw Error('End of buffer');
        }
        return this._buf[this._pos];
    }
    
    getRange(start: number, len: number): Uint8Array {
    if (start + len >= 512) {
        throw Error('End of buffer');
      }
      return this._buf.slice(start, start+len);
    }
    
    // Read two bytes, stepping two steps forward
    readU16(): number {
        const res = this.read() << 8 | this.read();
        return res;
    }


    /// Read four bytes, stepping four steps forward
    readU32(): number {
        const res = (this.read() << 24) | (this.read() << 16) | (this.read() << 8) | (this.read() << 0);
        return res;
    }



}