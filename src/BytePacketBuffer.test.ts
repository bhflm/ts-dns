import { BytePacketBuffer } from "./BytePacketBuffer";

test('BytePacketBuffer', () => {
   const bytePacketBuf = new BytePacketBuffer();
   expect(bytePacketBuf.pos).toBe(0); 
});