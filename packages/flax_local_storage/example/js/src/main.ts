import type {} from '@flax/local-storage/globals';
import { runApp, Text } from '@flax/core/flutter';

localStorage.setItem('example', 'ready');
runApp(Text(`localStorage ${localStorage.getItem('example')}`));
