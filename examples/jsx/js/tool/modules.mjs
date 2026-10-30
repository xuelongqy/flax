import { prepareModuleApplication } from '@flax/build/application';
import { fileURLToPath } from 'node:url';
const application = await prepareModuleApplication({
  projectDirectory: fileURLToPath(new URL('../', import.meta.url)),
  modulesDirectory: 'src',
});
console.log(`JSX module application: ${application.directory}`);
