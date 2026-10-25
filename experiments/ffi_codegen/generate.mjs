import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, basename, resolve } from 'node:path';
import { XMLParser } from 'fast-xml-parser';

// Experimental CastXML adapter, not the public Flax generator API.
export async function generate({
  xml,
  output,
  profile,
  functions,
  prefix,
  varargs = {},
  resource,
}) {
  const ast = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    parseAttributeValue: false,
    parseTagValue: false,
    isArray: (name, _path, _leaf, attribute) => !attribute && name !== 'CastXML',
  }).parse(await readFile(xml, 'utf8')).CastXML;
  if (!ast?.format?.startsWith('1.')) throw new Error('Unsupported CastXML format');
  const nodes = Object.entries(ast).flatMap(([kind, values]) =>
    Array.isArray(values) ? values.map((value) => ({ ...value, kind })) : [],
  );
  const ids = new Map(nodes.filter((n) => n.id).map((n) => [n.id, n]));
  const layouts = new Map(),
    callbacks = {},
    aliases = new Map();
  const fail = (node, reason) => {
    const file = ids.get(node.file)?.name ?? xml;
    throw new Error(
      `${basename(file)}:${node.line ?? '?'} ${node.name ?? ''}: ${reason}`,
    );
  };
  const canonical = (id) => {
    const seen = new Set();
    let node = ids.get(id);
    while (
      node &&
      ['Typedef', 'CvQualifiedType', 'ElaboratedType'].includes(node.kind)
    ) {
      if (seen.has(node.id)) fail(node, 'cyclic type alias');
      seen.add(node.id);
      node = ids.get(node.type);
    }
    if (!node) throw new Error(`Missing CastXML type ${id}`);
    return node;
  };
  for (const node of nodes) {
    if (node.kind === 'Typedef' && /^Cg[A-Z]/.test(node.name))
      aliases.set(canonical(node.id).id, node.name);
  }
  const bytes = (node, field) => {
    const bits = Number(node[field]);
    if (!Number.isSafeInteger(bits) || bits < 0 || bits % 8)
      fail(node, `unsupported ${field}: ${node[field]}`);
    return bits / 8;
  };
  const align = (size, alignment) => Math.ceil(size / alignment) * alignment;
  function scalar(node) {
    if (node.name === 'void') return 'void';
    if (node.name === 'bool' || node.name === '_Bool') return 'c_bool';
    if (node.name === 'char') return 'char';
    if (node.name === 'float') return 'float32';
    if (node.name === 'double') return 'float64';
    const integer = node.name
      .split(' ')
      .filter((word) => !['signed', 'unsigned'].includes(word))
      .join(' ');
    if (
      ![
        'char',
        'short',
        'short int',
        'int',
        'long',
        'long int',
        'long long',
        'long long int',
      ].includes(integer)
    )
      fail(node, `unsupported fundamental type ${node.name}`);
    const size = Number(node.size);
    if (![8, 16, 32, 64].includes(size)) fail(node, 'unsupported scalar width');
    return `${/unsigned/.test(node.name) ? 'uint' : 'int'}${size}`;
  }
  function dimensions(type) {
    if (typeof type === 'string') {
      if (type === 'pointer' || type === 'function') {
        const pointer = nodes.find((n) => n.kind === 'PointerType');
        return { size: bytes(pointer, 'size'), alignment: bytes(pointer, 'align') };
      }
      const node = nodes.find(
        (n) => n.kind === 'FundamentalType' && scalarName(n) === type,
      );
      if (!node) throw new Error(`No scalar layout for ${type}`);
      return { size: bytes(node, 'size'), alignment: bytes(node, 'align') };
    }
    if (type.kind === 'record') return layouts.get(type.name);
    if (type.kind === 'array') {
      const element = dimensions(type.element);
      return { size: element.size * type.length, alignment: element.alignment };
    }
    throw new Error('Unsupported layout');
  }
  function scalarName(n) {
    if (n.name === 'void' || ![8, 16, 32, 64].includes(Number(n.size))) return null;
    try {
      return scalar(n);
    } catch {
      return null;
    }
  }
  function record(node) {
    const name = aliases.get(node.id) ?? node.name;
    if (!name || !/^[A-Za-z_]\w*$/.test(name))
      fail(node, 'unnamed aggregate needs a typedef');
    if (node.incomplete === '1') fail(node, 'opaque aggregate cannot cross by value');
    if (layouts.has(name)) return { kind: 'record', name };
    const members = (node.members ?? '')
      .split(' ')
      .filter(Boolean)
      .map((id) => ids.get(id));
    const fields = members
      .filter((n) => n?.kind === 'Field')
      .map((field) => {
        if (field.bits !== undefined) fail(field, 'bitfields require a C wrapper');
        if (!field.name) fail(field, 'anonymous fields need an explicit mapping');
        return {
          name: field.name,
          type: type(field.type),
          offset: bytes(field, 'offset'),
        };
      });
    if (!fields.length) fail(node, 'empty aggregate');
    const expected = { size: bytes(node, 'size'), alignment: bytes(node, 'align') };
    const union = node.kind === 'Union';
    let chosen;
    for (const pack of union ? [undefined] : [undefined, 1, 2, 4, 8, 16]) {
      let size = 0,
        alignment = 1;
      let matches = true;
      for (const field of fields) {
        const dim = dimensions(field.type);
        const a = Math.min(dim.alignment, pack ?? dim.alignment);
        const offset = union ? 0 : align(size, a);
        matches &&= offset === field.offset;
        size = union ? Math.max(size, dim.size) : offset + dim.size;
        alignment = Math.max(alignment, a);
      }
      if (
        matches &&
        alignment === expected.alignment &&
        align(size, alignment) === expected.size
      ) {
        chosen = {
          name,
          kind: union ? 'union' : 'struct',
          ...expected,
          fields,
          ...(pack === undefined ? {} : { pack }),
        };
        break;
      }
    }
    if (!chosen)
      fail(node, 'layout cannot be expressed by the current Flax descriptors');
    layouts.set(name, chosen);
    return { kind: 'record', name };
  }
  function signature(node) {
    const arguments_ = (node.Argument ?? []).map((arg) => type(arg.type));
    const result = { arguments: arguments_, return: type(node.returns) };
    if (node.Ellipsis) {
      const extra = varargs[node.name];
      if (!Array.isArray(extra))
        fail(node, 'variadic function needs explicit promoted argument types');
      if (
        extra.some(
          (t) =>
            !['int32', 'uint32', 'int64', 'uint64', 'float64', 'pointer'].includes(t),
        )
      )
        fail(node, 'invalid default-promotion types');
      result.fixedArguments = arguments_.length;
      arguments_.push(...extra);
    }
    return result;
  }
  function type(id) {
    const node = canonical(id);
    if (node.kind === 'FundamentalType') return scalar(node);
    if (node.kind === 'PointerType') {
      const target = canonical(node.type);
      if (target.kind === 'FunctionType') {
        const name = aliases.get(node.id);
        if (name && !callbacks[name]) callbacks[name] = signature(target);
        return 'function';
      }
      return 'pointer';
    }
    if (node.kind === 'Enumeration') return type(node.type);
    if (['Struct', 'Union'].includes(node.kind)) return record(node);
    if (node.kind === 'ArrayType') {
      if (!/^\d+$/.test(node.min) || !/^\d+$/.test(node.max))
        fail(node, 'flexible arrays need an explicit mapping in this prototype');
      return {
        kind: 'array',
        element: type(node.type),
        length: Number(node.max) - Number(node.min) + 1,
      };
    }
    fail(node, `unsupported type ${node.kind}`);
  }
  const selected = nodes.filter(
    (n) =>
      n.kind === 'Function' &&
      (functions ? functions.includes(n.name) : n.name.startsWith(prefix)),
  );
  if (functions && selected.length !== functions.length)
    throw new Error('Selected function missing from AST');
  const definitions = Object.fromEntries(selected.map((n) => [n.name, signature(n)]));
  const constants = {};
  for (const node of nodes.filter((n) => n.kind === 'Enumeration')) {
    for (const value of node.EnumValue ?? []) {
      if (value.name.startsWith('CG_') || value.name.startsWith('__flax_macro_'))
        constants[value.name.replace('__flax_macro_', '')] = value.init;
    }
  }
  const globals = Object.fromEntries(
    nodes
      .filter((n) => n.kind === 'Variable' && n.name.startsWith('cg_'))
      .map((n) => [n.name, type(n.type)]),
  );
  const model = {
    profile,
    definitions,
    callbacks,
    globals,
    constants,
    layouts: [...layouts.values()],
  };
  const expr = (value) => {
    if (typeof value === 'string') return JSON.stringify(value);
    if (value.kind === 'record') return value.name;
    if (value.kind === 'array') return `array(${expr(value.element)}, ${value.length})`;
    throw new Error('Unsupported emitted type');
  };
  const emitSignature = (sig) =>
    `{ arguments: [${sig.arguments.map(expr).join(', ')}], return: ${expr(sig.return)}${sig.fixedArguments === undefined ? '' : `, fixedArguments: ${sig.fixedArguments}`} }`;
  const recordCode = model.layouts.map(
    (r) =>
      `export const ${r.name} = ${r.kind}({ ${r.fields.map((f) => `${JSON.stringify(f.name)}: ${expr(f.type)}`).join(', ')} }${r.pack ? `, { pack: ${r.pack} }` : ''});`,
  );
  const constantCode = Object.entries(constants).map(([name, value]) => {
    const exact = BigInt(value);
    const literal =
      exact <= BigInt(Number.MAX_SAFE_INTEGER) &&
      exact >= BigInt(Number.MIN_SAFE_INTEGER)
        ? String(exact)
        : `${exact}n`;
    return `export const ${name} = ${literal};`;
  });
  const defs =
    [
      '// Experimental generated bindings. Do not edit.',
      ...(recordCode.length ? ["import {struct, union, array} from '@flax/ffi';"] : []),
      ...recordCode,
      ...constantCode,
      `export const callbacks = { ${Object.entries(callbacks)
        .map(([n, s]) => `${n}: ${emitSignature(s)}`)
        .join(', ')} } as const;`,
      `export const globals = ${JSON.stringify(globals)} as const;`,
      `export const definitions = {\n${Object.entries(definitions)
        .map(([n, s]) => `  ${n}: ${emitSignature(s)},`)
        .join('\n')}\n} as const;`,
    ].join('\n') + '\n';
  const checks = model.layouts
    .map(
      (r) =>
        `check(sizeOf(${r.name}) === ${r.size} && alignOf(${r.name}) === ${r.alignment}, '${r.name} size/alignment');\n${r.fields.map((f) => `check(offsetOf(${r.name}, '${f.name}') === ${f.offset}, '${r.name}.${f.name} offset');`).join('\n')}`,
    )
    .join('\n');
  const names = model.layouts.map((r) => r.name);
  let binding = `// Experimental generated bindings. Do not edit.
import {NativeFinalizer, sizeOf, alignOf, offsetOf} from '@flax/ffi';
import type {DynamicLibrary} from '@flax/ffi';
import {definitions${names.length ? ', ' + names.join(', ') : ''}} from './definitions.g.js';
function check(value: boolean, message: string) { if (!value) throw new Error(message); }
export function createBindings(library: DynamicLibrary) {
${checks}
const native = library.getFunctions(definitions);
`;
  if (resource) {
    const { name, create, destroy, method } = resource;
    if (!/^[A-Za-z_]\w*$/.test(name)) throw new Error('Invalid resource class name');
    for (const symbol of [create, destroy, method])
      if (!definitions[symbol]) throw new Error('Resource symbol missing');
    if (
      JSON.stringify(definitions[destroy]) !==
      JSON.stringify({ arguments: ['pointer'], return: 'void' })
    )
      throw new Error('Destructor must be void(pointer)');
    // shortcut: this probe validates one Counter shape; generalize resource mapping after acceptance.
    if (
      JSON.stringify(definitions[create]) !==
        JSON.stringify({ arguments: ['int32'], return: 'pointer' }) ||
      JSON.stringify(definitions[method]) !==
        JSON.stringify({ arguments: ['pointer', 'int32'], return: 'int32' })
    )
      throw new Error(
        'This prototype resource requires int32 -> pointer and (pointer, int32) -> int32',
      );
    binding += `const finalizer = new NativeFinalizer(native.${destroy});
class ${name} {
  #pointer: bigint;
  #detach = {};
  constructor(value: number) {
    const pointer = native.${create}(value);
    if (pointer === 0n) throw new Error('Native allocation failed');
    try { finalizer.attach(this, pointer, {detach: this.#detach}); }
    catch (error) { native.${destroy}(pointer); throw error; }
    this.#pointer = pointer;
  }
  add(value: number) {
    if (this.#pointer === 0n) throw new Error('Resource closed');
    return native.${method}(this.#pointer, value);
  }
  close() {
    if (this.#pointer === 0n) return;
    // Keep GC ownership when the caller has already closed the library.
    void library.handle;
    finalizer.detach(this.#detach);
    const pointer = this.#pointer;
    this.#pointer = 0n;
    native.${destroy}(pointer);
  }
}
return {native, ${name}};
`;
  } else binding += 'return {native};\n';
  binding += '}\n';
  await mkdir(output, { recursive: true });
  await writeFile(resolve(output, 'definitions.g.ts'), defs);
  await writeFile(resolve(output, 'bindings.g.ts'), binding);
  await writeFile(resolve(output, 'model.json'), JSON.stringify(model, null, 2) + '\n');
  return model;
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const config = JSON.parse(await readFile(process.argv[2], 'utf8'));
  await generate(config);
}
