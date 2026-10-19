// Storage references share JSON only; Dart still decodes each lexical type scope.
export function expandManifestMembers(manifest) {
  const raw = manifest.memberTable;
  if (raw === undefined) return manifest;
  if (!Array.isArray(raw)) throw new Error('Expected memberTable list');
  const entries = [],
    sizes = [],
    depths = [],
    dependencies = [];
  const unique = new Set(),
    used = new Set();
  let nodes = 0,
    deepest = 0;
  const canonical = (value) =>
    JSON.stringify(value, (_key, child) =>
      child && typeof child === 'object' && !Array.isArray(child)
        ? Object.fromEntries(
            Object.keys(child)
              .sort()
              .map((key) => [key, child[key]]),
          )
        : child,
    );
  const check = (depth) => {
    deepest = Math.max(deepest, depth);
    if (nodes > 20_000_000 || deepest > 128)
      throw new Error('Expanded Manifest exceeds node or depth limit');
  };
  function visit(value, references, depth = 0) {
    nodes++;
    check(depth);
    if (Array.isArray(value))
      return value.map((item) => visit(item, references, depth + 1));
    if (!value || typeof value !== 'object') return value;
    if (typeof value.$member === 'number') {
      const index = value.$member;
      if (
        Object.keys(value).length !== 1 ||
        !Number.isSafeInteger(index) ||
        index < 0 ||
        index >= entries.length
      )
        throw new Error('Expected reference to an earlier memberTable entry');
      nodes += sizes[index] - 1;
      check(depth + depths[index]);
      references.add(index);
      return entries[index];
    }
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [
        key,
        visit(child, references, depth + 1),
      ]),
    );
  }
  for (const value of raw) {
    if (
      !value ||
      Array.isArray(value) ||
      typeof value !== 'object' ||
      typeof value.name !== 'string' ||
      (!Array.isArray(value.parameters) && !Object.hasOwn(value, 'type'))
    )
      throw new Error('Expected memberTable description');
    const key = canonical(value);
    if (unique.has(key)) throw new Error('Duplicate memberTable entry');
    unique.add(key);
    nodes = 0;
    deepest = 0;
    const references = new Set();
    entries.push(visit(value, references));
    sizes.push(nodes);
    depths.push(deepest);
    dependencies.push(references);
  }
  nodes = 0;
  deepest = 0;
  const { memberTable: _table, ...body } = manifest;
  const result = visit(body, used);
  for (let i = entries.length - 1; i >= 0; i--)
    if (used.has(i)) for (const dependency of dependencies[i]) used.add(dependency);
  if (used.size !== entries.length) throw new Error('Unused memberTable entry');
  return result;
}
