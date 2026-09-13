// Transport fixtures only. Real Dart construction and semantics run in Flutter tests.
export function objectHost() {
  const api = globalThis.__flaxBindings;
  const calls = [];
  const objects = new Map();
  let next = 100;
  globalThis.__flaxCreateObject = (version, type, descriptor) => {
    calls.push({ version, type, descriptor });
    const id = next++;
    objects.set(id, { ...descriptor.args });
    return api.object(type, id);
  };
  globalThis.__flaxObject = (version, type, id, op, member, ...args) => {
    calls.push({ version, type, id, op, member, args });
    const fields = objects.get(id);
    if (op === 'get') return fields?.[member] ?? null;
    if (op === 'set') fields[member] = args[0];
  };
  return { api, calls, objects };
}
