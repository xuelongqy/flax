#!/usr/bin/env node
import { startFlaxDev } from '../src/dev.mjs';

const args = process.argv.slice(2);
const values = new Map();
let invalid = args.length % 2 !== 0;
for (let index = 0; !invalid && index < args.length; index += 2) {
  const name = args[index];
  if (
    !['--entry', '--out', '--port'].includes(name) ||
    values.has(name) ||
    args[index + 1] === undefined
  ) {
    invalid = true;
    break;
  }
  values.set(name, args[index + 1]);
}

const entry = values.get('--entry');
const out = values.get('--out');
const port = Number(values.get('--port') ?? '5173');
if (invalid || !entry || !out || !Number.isInteger(port) || port < 0 || port > 65535) {
  console.error(
    'Usage: flax-dev --entry <file> --out <file-or-module-directory> [--port <port>]',
  );
  process.exitCode = 2;
} else {
  try {
    const dev = await startFlaxDev({ entry, out, port });
    console.log(`Flax dev server: ws://127.0.0.1:${dev.port}`);
    console.log(
      dev.url ? `Flax module entry: ${dev.url}` : `Flax dev asset: ${dev.out}`,
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
