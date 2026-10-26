import { runApp, Text } from '@flax/flutter/widgets';
import settings from './settings.json' with { type: 'json' };
import source algorithm from './answer.wasm';
import { answer } from './answer.wasm';

const { label } = await import('./message.js');
const instance = new WebAssembly.Instance(algorithm);
runApp(Text(`${label}: ${settings.prefix} ${answer() + instance.exports.answer()}`));
