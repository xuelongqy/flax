import type {} from '@flax/fetch/globals';
import { runApp, Text } from '@flax/core/flutter';

if (typeof fetch !== 'function') throw Error('Fetch was not installed');
runApp(Text('Fetch ready'));
