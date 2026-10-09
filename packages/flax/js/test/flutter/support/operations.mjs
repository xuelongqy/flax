// Numeric transport fixtures. Flutter tests exercise the actual Dart operations.
const callbacks = new Map();
const operations = [];
export function operationHost(category, callback) {
  const previous = callbacks.get(category);
  if (callback) callbacks.set(category, callback);
  else callbacks.delete(category);
  globalThis.__flaxResolveOperation = (version, type, category, operation, member) => {
    operations.push({ version, type, category, operation, member });
    return operations.length - 1;
  };
  globalThis.__flaxInvokeOperation = (slot, id, ...args) => {
    const entry = operations[slot];
    if (!entry) throw Error('Unknown operation');
    const call = callbacks.get(entry.category);
    if (!call) throw Error('Missing operation host');
    const { version, type, operation, member } = entry;
    if (entry.category === 'top') return call(version, type, ...args);
    if (entry.category === 'static') return call(version, type, member, ...args);
    if (entry.category === 'context') return call(version, type, id, member, ...args);
    return call(version, type, id, operation, member, ...args);
  };
  return previous;
}
