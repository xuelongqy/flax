/** Self-contained runtime code. Preparation embeds this function in a local asset. */
export function createFlaxModuleRegistry() {
  const records = new Map();
  const owners = new Map();
  const devRecords = new Map();
  const devClasses = new Map();
  const devPages = new Map();
  let sealed = false;
  let closed = false;
  let devEntry;
  let devModule;
  let devTransaction;
  let devRootOwner;

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

  function restartRequired(message) {
    const error = new Error(`Flax hot reload requires restart: ${message}`);
    error.restartRequired = true;
    return error;
  }

  function devFactory(value) {
    if (typeof value === 'function') return value;
    if (typeof value !== 'string') throw new TypeError('Invalid Flax dev factory');
    const factory = (0, eval)(`(${value})`);
    if (typeof factory !== 'function') throw new TypeError('Invalid Flax dev factory');
    return factory;
  }

  function devRecord(value) {
    if (
      !value ||
      typeof value.id !== 'string' ||
      value.id.length === 0 ||
      (value.revision !== undefined &&
        (typeof value.revision !== 'string' || value.revision.length === 0)) ||
      !value.dependencies ||
      typeof value.dependencies !== 'object'
    ) {
      throw new TypeError('Invalid Flax dev module');
    }
    return {
      id: value.id,
      revision: value.revision,
      dependencies: Object.freeze({ ...value.dependencies }),
      factory: devFactory(value.factory),
      module: { exports: {} },
      state: 'registered',
      error: undefined,
      classes: new Set(),
    };
  }

  function requireDev(specifier, staging = false) {
    open();
    const staged = staging ? devTransaction?.records.get(specifier) : undefined;
    const record = staged ?? devRecords.get(specifier);
    if (!record) return requireModule(specifier);
    if (record.state === 'failed') throw record.error;
    if (record.state === 'ready' || record.state === 'initializing') {
      return record.module.exports;
    }
    record.state = 'initializing';
    const previous = devModule;
    devModule = record;
    try {
      record.factory(record.module, record.module.exports, (dependency) => {
        const target = record.dependencies[dependency];
        if (typeof target !== 'string') {
          throw new Error(
            `Undeclared Flax dev dependency: ${record.id} -> ${dependency}`,
          );
        }
        return requireDev(target, staging);
      });
      for (const id of record.classes) {
        const entry = (staging ? devTransaction.classes : devClasses).get(id);
        const constructor = devClasses.get(id)?.constructor ?? entry.constructor;
        entry.prototypeMembers = memberDescriptors(
          constructor.prototype,
          prototypeExcluded,
        );
        entry.staticMembers = memberDescriptors(constructor, staticExcluded);
        entry.prototypeKeys = new Set(entry.prototypeMembers.keys());
        entry.staticKeys = new Set(entry.staticMembers.keys());
      }
      record.state = 'ready';
      return record.module.exports;
    } catch (cause) {
      const detail = cause instanceof Error ? cause.message : String(cause);
      const error = new Error(
        `Flax dev module initialization failed: ${record.id}: ${detail}`,
      );
      error.cause = cause;
      if (cause?.restartRequired === true) error.restartRequired = true;
      record.state = 'failed';
      record.error = error;
      throw error;
    } finally {
      devModule = previous;
    }
  }

  function memberKeys(value, excluded) {
    return new Set(Reflect.ownKeys(value).filter((key) => !excluded.has(key)));
  }

  function memberDescriptors(value, excluded) {
    return new Map(
      [...memberKeys(value, excluded)].map((key) => [
        key,
        Object.getOwnPropertyDescriptor(value, key),
      ]),
    );
  }

  function signature(value, candidate) {
    const fields = Array.isArray(value?.fields) ? [...value.fields].sort() : null;
    const privateFields = Array.isArray(value?.private)
      ? [...value.private].sort()
      : null;
    const init = value?.init;
    const context = value?.context ?? '';
    if (
      fields === null ||
      privateFields === null ||
      typeof init !== 'string' ||
      typeof context !== 'string' ||
      fields.some((name) => typeof name !== 'string') ||
      privateFields.some((name) => typeof name !== 'string')
    ) {
      throw new TypeError('Invalid Flax dev class signature');
    }
    return {
      fields,
      private: privateFields,
      init,
      context,
      super: Object.getPrototypeOf(candidate),
    };
  }

  function sameNames(left, right) {
    return (
      left.length === right.length &&
      left.every((value, index) => value === right[index])
    );
  }

  function hostDependencies(records) {
    const result = new Set();
    for (const record of records.values()) {
      for (const target of Object.values(record.dependencies)) {
        if (typeof target === 'string' && target.startsWith('@flax/'))
          result.add(target);
      }
    }
    return [...result].sort();
  }

  const prototypeExcluded = new Set(['constructor']);
  const staticExcluded = new Set(['length', 'name', 'prototype']);

  function validateMembers(target, candidate, tracked, name) {
    const next = new Set(candidate.keys());
    for (const key of tracked) {
      if (next.has(key)) continue;
      const descriptor = Object.getOwnPropertyDescriptor(target, key);
      if (descriptor && !descriptor.configurable) {
        throw restartRequired(`${name} has a non-configurable member`);
      }
    }
    for (const key of next) {
      const descriptor = Object.getOwnPropertyDescriptor(target, key);
      if (descriptor && !descriptor.configurable) {
        throw restartRequired(`${name} has a non-configurable member`);
      }
      if (!descriptor && !Object.isExtensible(target)) {
        throw restartRequired(`${name} is not extensible`);
      }
    }
    return next;
  }

  function replaceMembers(target, candidate, previous, next, undo) {
    if (undo) {
      const descriptors = Object.getOwnPropertyDescriptors(target);
      undo.push(() => {
        for (const key of Reflect.ownKeys(target)) {
          if (!Object.prototype.hasOwnProperty.call(descriptors, key))
            delete target[key];
        }
        Object.defineProperties(target, descriptors);
      });
    }
    for (const key of previous) {
      if (!next.has(key)) delete target[key];
    }
    for (const key of next) {
      const descriptor = { ...candidate.get(key) };
      // Temporary behavior must remain reversible until the whole batch validates.
      if (undo) descriptor.configurable = true;
      Object.defineProperty(target, key, descriptor);
    }
  }

  function restoreStagedMembers(transaction) {
    while (transaction.undo.length) transaction.undo.pop()();
  }

  function validateDevClass(candidate, transaction) {
    const live = devClasses.get(candidate.id);
    if (!live) return;
    if (
      !sameNames(live.signature.fields, candidate.signature.fields) ||
      !sameNames(live.signature.private, candidate.signature.private)
    ) {
      throw restartRequired(`class fields changed: ${candidate.id}`);
    }
    if (live.signature.init !== candidate.signature.init) {
      throw restartRequired(`class initialization changed: ${candidate.id}`);
    }
    if (
      live.signature.init.length > 0 &&
      live.signature.context !== candidate.signature.context
    ) {
      throw restartRequired(`class initialization context changed: ${candidate.id}`);
    }
    if (live.signature.init.length > 0) {
      const record = transaction.records.get(candidate.moduleId);
      for (const target of Object.values(record?.dependencies ?? {})) {
        if (
          target !== candidate.moduleId &&
          !target.startsWith('@flax/') &&
          transaction.records.has(target)
        ) {
          throw restartRequired(
            `class initialization dependency changed: ${candidate.id}`,
          );
        }
      }
    }
    if (live.signature.super !== candidate.signature.super) {
      throw restartRequired(`class superclass changed: ${candidate.id}`);
    }
    // A re-evaluated class creates a fresh private brand even when the spelling is unchanged.
    if (live.signature.private.length > 0) {
      throw restartRequired(`private class changed: ${candidate.id}`);
    }
    candidate.prototypeKeys = validateMembers(
      live.constructor.prototype,
      candidate.prototypeMembers,
      live.prototypeKeys,
      candidate.id,
    );
    candidate.staticKeys = validateMembers(
      live.constructor,
      candidate.staticMembers,
      live.staticKeys,
      candidate.id,
    );
  }

  function validateDevTransaction(transaction) {
    if (transaction.records.size > 0 && !transaction.records.has(devEntry)) {
      throw restartRequired('the application entry is no longer reloadable');
    }
    const inventory = new Set(transaction.inventory);
    for (const id of devRecords.keys()) {
      if (!inventory.has(id)) throw restartRequired(`module removed: ${id}`);
    }
    const nextRecords = new Map(devRecords);
    for (const [id, record] of transaction.records) nextRecords.set(id, record);
    if (!sameNames(hostDependencies(devRecords), hostDependencies(nextRecords))) {
      throw restartRequired('host module contract changed');
    }
    for (const [id, staged] of transaction.records) {
      const live = devRecords.get(id);
      if (!live) continue;
      for (const classId of live.classes) {
        if (!staged.classes.has(classId))
          throw restartRequired(`class removed: ${classId}`);
      }
    }
    for (const candidate of transaction.classes.values()) {
      validateDevClass(candidate, transaction);
    }
    const stagedModules = new Set(transaction.records.keys());
    let nextRootOwner = devRootOwner;
    if (nextRootOwner !== undefined && stagedModules.has(nextRootOwner))
      nextRootOwner = undefined;
    if (transaction.rootOwner !== undefined) {
      if (nextRootOwner !== undefined)
        throw restartRequired('duplicate application root registration');
      nextRootOwner = transaction.rootOwner;
    }
    if ((nextRootOwner !== undefined) !== (devRootOwner !== undefined)) {
      throw restartRequired('application root registration changed');
    }

    const nextPages = new Map(devPages);
    for (const [name, owner] of nextPages) {
      if (stagedModules.has(owner)) nextPages.delete(name);
    }
    for (const [name, page] of transaction.pages) {
      if (nextPages.has(name))
        throw restartRequired(`duplicate page registration: ${name}`);
      nextPages.set(name, page.owner);
    }
    if (
      nextPages.size !== devPages.size ||
      [...devPages.keys()].some((name) => !nextPages.has(name))
    ) {
      throw restartRequired('page registration changed');
    }
    transaction.nextRootOwner = nextRootOwner;
    transaction.nextPages = nextPages;
  }

  function commitDevTransaction(transaction) {
    for (const candidate of transaction.classes.values()) {
      const live = devClasses.get(candidate.id);
      if (!live) {
        devClasses.set(candidate.id, candidate);
        continue;
      }
      replaceMembers(
        live.constructor.prototype,
        candidate.prototypeMembers,
        live.prototypeKeys,
        candidate.prototypeKeys,
      );
      replaceMembers(
        live.constructor,
        candidate.staticMembers,
        live.staticKeys,
        candidate.staticKeys,
      );
      live.prototypeKeys = candidate.prototypeKeys;
      live.staticKeys = candidate.staticKeys;
      live.prototypeMembers = candidate.prototypeMembers;
      live.staticMembers = candidate.staticMembers;
    }
    for (const [id, record] of transaction.records) devRecords.set(id, record);
    for (const [name, page] of transaction.pages) page.apply(page.factory);
    devRootOwner = transaction.nextRootOwner;
    devPages.clear();
    for (const [name, owner] of transaction.nextPages) devPages.set(name, owner);
  }

  const dev = Object.freeze({
    get active() {
      return devEntry !== undefined;
    },
    get staging() {
      return devTransaction !== undefined;
    },
    get revisions() {
      return Object.fromEntries(
        [...devRecords]
          .filter(([, record]) => record.revision !== undefined)
          .map(([id, record]) => [id, record.revision]),
      );
    },
    class(name, candidate, value) {
      if (!devModule || typeof name !== 'string' || typeof candidate !== 'function') {
        throw new TypeError('Flax dev class requires an active module');
      }
      const id = `${devModule.id}#${name}`;
      const candidateSignature = signature(value, candidate);
      const existing = devClasses.get(id);
      const entry = {
        id,
        moduleId: devModule.id,
        constructor: candidate,
        signature: candidateSignature,
        prototypeMembers: memberDescriptors(candidate.prototype, prototypeExcluded),
        staticMembers: memberDescriptors(candidate, staticExcluded),
        prototypeKeys: memberKeys(candidate.prototype, prototypeExcluded),
        staticKeys: memberKeys(candidate, staticExcluded),
      };
      devModule.classes.add(id);
      if (devTransaction) {
        devTransaction.classes.set(id, entry);
        if (existing) {
          validateDevClass(entry, devTransaction);
          replaceMembers(
            existing.constructor.prototype,
            entry.prototypeMembers,
            existing.prototypeKeys,
            entry.prototypeKeys,
            devTransaction.undo,
          );
          replaceMembers(
            existing.constructor,
            entry.staticMembers,
            existing.staticKeys,
            entry.staticKeys,
            devTransaction.undo,
          );
        }
        return existing?.constructor ?? candidate;
      }
      if (existing) throw new Error(`Duplicate Flax dev class: ${id}`);
      devClasses.set(id, entry);
      return candidate;
    },
    captureRoot(root) {
      if (!devEntry) return false;
      if (!devTransaction) {
        if (devModule) devRootOwner = devModule.id;
        return false;
      }
      if (devTransaction.hasRoot) throw new Error('Duplicate hot application root');
      if (!devModule) throw new Error('Hot application root requires an active module');
      devTransaction.hasRoot = true;
      devTransaction.root = root;
      devTransaction.rootOwner = devModule.id;
      return true;
    },
    capturePage(name, factory, apply) {
      if (!devEntry) return false;
      if (!devTransaction) {
        if (devModule) devPages.set(name, devModule.id);
        return false;
      }
      if (devTransaction.pages.has(name))
        throw new Error(`Duplicate hot page: ${name}`);
      if (!devModule)
        throw new Error('Hot page registration requires an active module');
      devTransaction.pages.set(name, { factory, apply, owner: devModule.id });
      return true;
    },
    load(value) {
      open();
      if (devEntry !== undefined)
        throw new Error('Flax dev application is already loaded');
      if (!value || typeof value.entry !== 'string' || !Array.isArray(value.modules)) {
        throw new TypeError('Invalid Flax dev application');
      }
      for (const module of value.modules) {
        const record = devRecord(module);
        if (devRecords.has(record.id))
          throw new Error(`Duplicate Flax dev module: ${record.id}`);
        devRecords.set(record.id, record);
      }
      devEntry = value.entry;
      if (!devRecords.has(devEntry))
        throw new Error(`Missing Flax dev entry: ${devEntry}`);
      return requireDev(devEntry);
    },
    require(specifier) {
      return requireDev(specifier);
    },
    apply(value) {
      open();
      if (devEntry === undefined) throw new Error('Flax dev application is not loaded');
      if (!value || !Array.isArray(value.modules) || !Array.isArray(value.inventory)) {
        throw new TypeError('Invalid Flax hot update');
      }
      const transaction = {
        records: new Map(),
        classes: new Map(),
        pages: new Map(),
        hasRoot: false,
        root: undefined,
        rootOwner: undefined,
        inventory: value.inventory,
        undo: [],
      };
      const modules = new Map();
      const changed = new Set();
      const importers = new Map();
      for (const module of value.modules) {
        if (modules.has(module.id))
          throw new Error(`Duplicate Flax hot module: ${module.id}`);
        modules.set(module.id, module);
        if (
          module.revision === undefined ||
          module.revision !== devRecords.get(module.id)?.revision
        )
          changed.add(module.id);
        for (const target of Object.values(module.dependencies ?? {})) {
          if (!importers.has(target)) importers.set(target, new Set());
          importers.get(target).add(module.id);
        }
      }
      for (const id of changed) {
        for (const importer of importers.get(id) ?? []) changed.add(importer);
      }
      for (const id of changed) {
        const module = modules.get(id);
        const record = devRecord(module);
        if (transaction.records.has(record.id)) {
          throw new Error(`Duplicate Flax hot module: ${record.id}`);
        }
        transaction.records.set(record.id, record);
      }
      devTransaction = transaction;
      try {
        requireDev(devEntry, true);
        validateDevTransaction(transaction);
        if (transaction.records.size === 0)
          return Object.freeze({ status: 'reloaded' });
        const hotStage = globalThis.__flaxHotStage;
        const hotCommit = globalThis.__flaxHotCommit;
        if (devRootOwner !== undefined || devPages.size > 0) {
          if (typeof hotStage !== 'function' || typeof hotCommit !== 'function') {
            throw new Error('Flax hot reload host is unavailable');
          }
          hotStage(
            transaction.hasRoot ? transaction.root : undefined,
            JSON.stringify([...transaction.pages.keys()]),
          );
        }
        restoreStagedMembers(transaction);
        commitDevTransaction(transaction);
        if (devRootOwner !== undefined || devPages.size > 0) hotCommit();
        return Object.freeze({ status: 'reloaded' });
      } finally {
        try {
          restoreStagedMembers(transaction);
        } finally {
          devTransaction = undefined;
        }
      }
    },
  });

  return Object.freeze({
    format: 'flax-cjs-1',
    dev,
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
    require(specifier) {
      // Older bundles pass version/hash arguments; only the host inventory owns those.
      return requireModule(specifier);
    },
    close() {
      closed = true;
    },
    dispose() {
      closed = true;
      records.clear();
      owners.clear();
      devRecords.clear();
      devClasses.clear();
      devPages.clear();
    },
  });
}

export function moduleRegistrySource() {
  return `(() => {
  if (globalThis.__flaxModules !== undefined) throw new Error('Duplicate Flax module registry');
  const registry = (${createFlaxModuleRegistry.toString()})();
  Object.defineProperty(globalThis, '__flaxModules', {value: registry, configurable: false});
  return registry;
})()`;
}
