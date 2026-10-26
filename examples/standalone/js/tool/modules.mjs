import { fileURLToPath } from 'node:url';
import { prepareModuleApplication, packApplication } from '@flax/build/application';

const application = await prepareModuleApplication({
  projectDirectory: fileURLToPath(new URL('../', import.meta.url)),
  modulesDirectory: 'esm',
  outputDirectory: '../assets/flax_esm',
});
await packApplication({ directory: application.directory });
console.log(`Native module application: ${application.directory}`);
