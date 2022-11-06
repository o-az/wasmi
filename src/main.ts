import * as fs from 'node:fs/promises';
import { ___dirname, isHttp } from './utilities';

function getWasmInstance(wasmCode: Uint8Array) {
  const wasmModule = new WebAssembly.Module(wasmCode);
  const wasmInstance = new WebAssembly.Instance(wasmModule);
  return wasmInstance;
}

export async function getRemoteWasm(remoteURL: string) {
  const wasmFile = await fetch(remoteURL);
  const wasmCode = await wasmFile.arrayBuffer();
  const wasmInstance = getWasmInstance(new Uint8Array(wasmCode));
  return wasmInstance;
}

export async function getLocalWasm(localPath: string) {
  const wasmFile = await fs.readFile(localPath);
  const wasmCode = new Uint8Array(wasmFile);
  const wasmInstance = getWasmInstance(wasmCode);
  return wasmInstance;
}

export const getWasmFile = async (filePath: string) =>
  await fs.readFile(filePath);

export const importLocalWasm = async (localPath: string) =>
  await import(localPath);

export const getWasmAs8BitArray = async (filePath: string) =>
  new Uint8Array(await fs.readFile(`${___dirname}/${filePath}`));

export const getWasm = async (wasmPath: string) =>
  isHttp(wasmPath)
    ? await getRemoteWasm(wasmPath)
    : await getLocalWasm(wasmPath);
