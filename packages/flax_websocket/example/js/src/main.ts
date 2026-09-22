import type {} from '@flax/websocket/globals';
import { runApp, Text } from '@flax/flutter/widgets';

if (typeof WebSocket !== 'function') throw Error('WebSocket was not installed');
runApp(Text('WebSocket ready'));
