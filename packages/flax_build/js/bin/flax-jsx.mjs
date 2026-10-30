#!/usr/bin/env node
import { existsSync, watch } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { FlaxJsxProject } from '../src/jsx.mjs';

const args = process.argv.slice(2);
if (args.some((arg) => arg !== '--watch') || args.length > 1) {
  console.error('Usage: flax-jsx [--watch]');
  process.exitCode = 2;
} else {
  const root = process.cwd();
  const project = new FlaxJsxProject(root);
  const watchers = new Map();
  let timer;
  function generate() {
    try {
      project.invalidate();
      project.prepare();
      console.log(
        project.enabled
          ? `Generated ${project.generated}`
          : 'JSX is disabled; cleaned owned declarations',
      );
    } catch (error) {
      console.error(error.message);
      if (!args.includes('--watch')) process.exitCode = 1;
    } finally {
      if (args.includes('--watch')) {
        for (const file of project.dependencies ?? []) {
          if (
            !file.startsWith(root + '/') &&
            !file.includes('/node_modules/typescript/')
          )
            observe(dirname(file));
        }
      }
    }
  }
  function observe(directory) {
    if (watchers.has(directory) || !existsSync(directory)) return;
    const watcher = watch(directory, { recursive: directory === root }, (_, name) => {
      if (!name || /(?:^|\/)(?:node_modules|\.git|dist|build)\//.test(name)) return;
      const file = resolve(directory, name);
      if (
        file === project.generated ||
        (!project.dependencies?.includes(file) &&
          !/\.[cm]?[jt]sx?$|(?:tsconfig[^/]*|package)\.json$/.test(file))
      )
        return;
      clearTimeout(timer);
      timer = setTimeout(generate, 50);
    });
    watcher.on('error', (error) => console.error(error.message));
    watchers.set(directory, watcher);
  }
  if (args.includes('--watch')) observe(root);
  generate();
  if (!args.includes('--watch')) project.close();
  else {
    const close = () => {
      clearTimeout(timer);
      for (const watcher of watchers.values()) watcher.close();
      project.close();
    };
    process.once('SIGINT', close);
    process.once('SIGTERM', close);
  }
}
