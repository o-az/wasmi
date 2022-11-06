import assert from 'node:assert';
import { getWasm, getWasmAs8BitArray } from './main';
import { ___dirname } from './utilities';

const wasmFromFile = await getWasm(`${___dirname}/wasm-files/add.wasm`);

const wasmFromURL = await getWasm(
  'https://cdn.discordapp.com/attachments/979680368527568919/1038418609451585617/add.wasm'
);

import * as importedWasm from './wasm-files/add.wasm';
console.log(`wasmAdd: `, importedWasm.add(1, 2));

//@ts-ignore
console.log(`wasmFromURL: ${wasmFromURL.exports.add(3, 4)}`);
//@ts-ignore
console.log(`wasmFromFile: ${wasmFromFile.exports.add(5, 6)}`);
//@ts-ignore
assert(wasmFromFile.exports.add(1, 2) === wasmFromURL.exports.add(1, 2));

const expectedEightBitArray = new Uint8Array([
  0, 97, 115, 109, 1, 0, 0, 0, 1, 7, 1, 96, 2, 127, 127, 1, 127, 3, 2, 1, 0, 7,
  7, 1, 3, 97, 100, 100, 0, 0, 10, 9, 1, 7, 0, 32, 0, 32, 1, 106, 11,
]);

const wasmEightBitArray = await getWasmAs8BitArray('./wasm-files/add.wasm');

assert(wasmEightBitArray.length === expectedEightBitArray.length);
assert(
  wasmEightBitArray.every(
    (value, index) => value === expectedEightBitArray[index]
  )
);
console.log(
  `wasm as 8 bit array: `,
  await getWasmAs8BitArray('./wasm-files/add.wasm')
);
