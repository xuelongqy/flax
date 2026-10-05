(() => {
  if (globalThis.__flaxModules !== undefined) throw new Error('Duplicate Flax module registry');
  const registry = (function createFlaxModuleRegistry() {
  const records = new Map();
  const owners = new Map();
  let sealed = false;
  let closed = false;

  function open() {
    if (closed) throw new Error('FlaxSessionClosed: module registry');
  }

  function compatible(record, version, artifact) {
    if (
      (version !== undefined && record.metadata.version !== version) ||
      (artifact !== undefined && record.metadata.artifact !== artifact)
    ) {
      throw new Error(`Incompatible Flax module: ${record.metadata.specifier}`);
    }
  }

  function requireModule(specifier, version, artifact) {
    open();
    if (!sealed) throw new Error('Flax modules have not been sealed');
    const record = records.get(specifier);
    if (!record) throw new Error(`Missing Flax module: ${specifier}`);
    compatible(record, version, artifact);
    if (record.state === 'failed') throw record.error;
    // CommonJS factories publish their export getters before following imports.
    // Returning that same object also preserves identity through dependency cycles.
    if (record.state === 'ready' || record.state === 'initializing') {
      return record.module.exports;
    }
    record.state = 'initializing';
    try {
      record.factory(record.module, record.module.exports, (dependency) => {
        const dependencyVersion = record.metadata.dependencies[dependency];
        if (dependencyVersion === undefined) {
          throw new Error(`Undeclared Flax dependency: ${specifier} -> ${dependency}`);
        }
        return requireModule(dependency, dependencyVersion);
      });
      record.state = 'ready';
      record.factory = undefined;
      return record.module.exports;
    } catch (cause) {
      const error = new Error(`Flax module initialization failed: ${specifier}`);
      error.cause = cause;
      record.state = 'failed';
      record.error = error;
      record.factory = undefined;
      throw error;
    }
  }

  return Object.freeze({
    format: 'flax-cjs-1',
    define(metadata, factory) {
      open();
      if (sealed) throw new Error('Flax module registration is sealed');
      if (
        !metadata ||
        typeof metadata.specifier !== 'string' ||
        typeof metadata.owner !== 'string' ||
        typeof metadata.version !== 'string' ||
        typeof metadata.artifact !== 'string' ||
        !metadata.dependencies ||
        typeof factory !== 'function'
      ) {
        throw new TypeError('Invalid prepared Flax module');
      }
      if (records.has(metadata.specifier)) {
        throw new Error(`Duplicate Flax module: ${metadata.specifier}`);
      }
      if (owners.has(metadata.owner)) {
        throw new Error(`Duplicate Flax module owner: ${metadata.owner}`);
      }
      const value = Object.freeze({
        specifier: metadata.specifier,
        owner: metadata.owner,
        version: metadata.version,
        artifact: metadata.artifact,
        dependencies: Object.freeze({ ...metadata.dependencies }),
      });
      records.set(metadata.specifier, {
        metadata: value,
        factory,
        module: { exports: {} },
        state: 'registered',
        error: undefined,
      });
      owners.set(metadata.owner, metadata.specifier);
    },
    seal(expected) {
      open();
      if (sealed) throw new Error('Flax module registration is already sealed');
      if (!Array.isArray(expected) || records.size !== expected.length) {
        throw new Error('Flax module asset inventory does not match the manifest');
      }
      const seen = new Set();
      for (const metadata of expected) {
        const record = records.get(metadata.specifier);
        if (!record || seen.has(metadata.specifier)) {
          throw new Error(`Missing or duplicate Flax module: ${metadata.specifier}`);
        }
        seen.add(metadata.specifier);
        compatible(record, metadata.version, metadata.artifact);
        if (record.metadata.owner !== metadata.owner) {
          throw new Error(`Incompatible Flax module owner: ${metadata.specifier}`);
        }
        const actual = record.metadata.dependencies;
        const requested = metadata.dependencies;
        if (
          Object.keys(actual).length !== Object.keys(requested).length ||
          Object.keys(actual).some((name) => actual[name] !== requested[name])
        ) {
          throw new Error(`Incompatible Flax dependency graph: ${metadata.specifier}`);
        }
        for (const [name, version] of Object.entries(actual)) {
          const dependency = records.get(name);
          if (!dependency) throw new Error(`Missing Flax module: ${name}`);
          compatible(dependency, version);
        }
      }
      sealed = true;
    },
    require: requireModule,
    close() {
      closed = true;
    },
    dispose() {
      closed = true;
      records.clear();
      owners.clear();
    },
  });
})();
  Object.defineProperty(globalThis, '__flaxModules', {value: registry, configurable: false});
  return registry;
})()