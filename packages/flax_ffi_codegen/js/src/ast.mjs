import { XMLParser } from 'fast-xml-parser';
const identifierName = (name) => /^[A-Za-z_]\w*$/.test(name);

export function matches(name, selection) {
  if (!selection || !name) return false;
  const match = (pattern) =>
    new RegExp(
      '^' +
        pattern
          .split('*')
          .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
          .join('.*') +
        '$',
    ).test(name);
  return selection.include.some(match) && !(selection.exclude ?? []).some(match);
}

export function parseHeader(
  xml,
  {
    functions,
    enums,
    globals: globalNames,
    records,
    callbacks: callbackNames,
    variadic: varargs = {},
    charUnsigned = false,
    wcharUnsigned = false,
    language = 'c',
  },
) {
  const ast = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    parseAttributeValue: false,
    parseTagValue: false,
    isArray: (name, _path, _leaf, attribute) => !attribute && name !== 'CastXML',
  }).parse(xml).CastXML;
  if (!/^1\.4\.\d+$/.test(ast?.format ?? ''))
    throw new Error('Unsupported CastXML format');
  const nodes = Object.entries(ast).flatMap(([kind, values]) =>
    Array.isArray(values) ? values.map((value) => ({ ...value, kind })) : [],
  );
  const ids = new Map(nodes.filter((n) => n.id).map((n) => [n.id, n]));
  const layouts = new Map(),
    callbacks = Object.create(null),
    aliases = new Map();
  const abi = new Map();
  const allAliases = new Map();
  const aliasNodes = new Map();
  const recordIds = new Map();
  const abiDeclarations = [];
  const pendingCallbacks = new Map();
  const fail = (node, reason) => {
    const file = ids.get(node.file)?.name ?? '<header>';
    throw new Error(`${file}:${node.line ?? '?'} ${node.name ?? ''}: ${reason}`);
  };
  const queueCallback = (name, node) => {
    if (!name) return;
    if (pendingCallbacks.has(name) && pendingCallbacks.get(name).id !== node.id)
      fail(node, `ambiguous callback name ${name}; add distinct C typedef names`);
    pendingCallbacks.set(name, node);
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
    if (node.kind === 'Typedef' && /^[A-Za-z_]\w*$/.test(node.name)) {
      const id = canonical(node.id).id;
      if (
        !aliases.has(id) ||
        (ids.get(node.context)?.name === '::' &&
          !aliasNodes.get(id)?.some((n) => ids.get(n.context)?.name === '::'))
      )
        aliases.set(id, node.name);
      allAliases.set(id, [...(allAliases.get(id) ?? []), node.name]);
      aliasNodes.set(id, [...(aliasNodes.get(id) ?? []), node]);
    }
  }
  const qualified = (node) => {
    const names = [node.name];
    for (
      let parent = ids.get(node.context);
      parent &&
      ['Namespace', 'Class', 'Struct', 'Union'].includes(parent.kind) &&
      parent.name !== '::';
      parent = ids.get(parent.context)
    )
      names.unshift(parent.name);
    return names.join('::');
  };
  const recordCName = (node) => {
    const alias =
      aliasNodes.get(node.id)?.find((n) => ids.get(n.context)?.name === '::') ??
      aliasNodes.get(node.id)?.[0];
    return alias ? qualified(alias) : `${node.kind.toLowerCase()} ${qualified(node)}`;
  };
  function containsFunction(id) {
    const node = canonical(id);
    if (node.kind === 'FunctionType') return true;
    return (
      ['PointerType', 'ArrayType'].includes(node.kind) && containsFunction(node.type)
    );
  }
  // CastXML omits calling conventions. Compare compiler types against a default-C declaration.
  function cDeclaration(id, name, qualifiers = '') {
    const node = ids.get(id);
    if (node.kind === 'Typedef') {
      const target = canonical(id);
      if (
        !containsFunction(id) &&
        target.kind !== 'FundamentalType' &&
        !(target.kind === 'Enumeration' && language === 'c')
      )
        return `${qualifiers}${qualified(node)} ${name}`;
      return cDeclaration(node.type, name, qualifiers);
    }
    if (node.kind === 'ElaboratedType')
      return cDeclaration(node.type, name, qualifiers);
    if (node.kind === 'CvQualifiedType')
      return cDeclaration(
        node.type,
        name,
        qualifiers +
          (node.const === '1' ? 'const ' : '') +
          (node.volatile === '1' ? 'volatile ' : '') +
          (node.restrict === '1' ? '__restrict ' : ''),
      );
    if (node.kind === 'PointerType') {
      let pointer = `*${qualifiers}${name}`;
      if (['FunctionType', 'ArrayType'].includes(canonical(node.type).kind))
        pointer = `(${pointer})`;
      return cDeclaration(node.type, pointer);
    }
    if (node.kind === 'ArrayType') {
      const length = /^\d+$/.test(node.max)
        ? Number(node.max) - Number(node.min) + 1
        : '';
      return cDeclaration(node.type, `${name}[${length}]`, qualifiers);
    }
    if (node.kind === 'FunctionType') return cFunction(node, name);
    if (['Struct', 'Union', 'Class'].includes(node.kind))
      return `${qualifiers}${recordCName(node)} ${name}`;
    if (node.kind === 'Enumeration') {
      if (language === 'c') return cDeclaration(node.type, name, qualifiers);
      const alias = aliasNodes.get(node.id)?.[0];
      return alias
        ? `${qualifiers}${qualified(alias)} ${name}`
        : node.name
          ? `${qualifiers}enum ${qualified(node)} ${name}`
          : cDeclaration(node.type, name, qualifiers);
    }
    if (node.kind === 'FundamentalType')
      return `${qualifiers}${node.name === 'bool' && language === 'c' ? '_Bool' : node.name} ${name}`;
    fail(node, 'cannot verify this C ABI declaration');
  }
  function cFunction(node, name) {
    const args = (node.Argument ?? []).map((arg) => cDeclaration(arg.type, ''));
    if (node.Ellipsis) args.push('...');
    return cDeclaration(
      node.returns,
      `${name}(${args.length ? args.join(', ') : 'void'})`,
    );
  }
  function checkType(actual, declaration, callable = false) {
    const name = `flax_ffi_abi_type_${abiDeclarations.length}`;
    abiDeclarations.push(
      `typedef ${declaration(name)};\nFLAX_ABI_ASSERT(FLAX_ABI_${callable ? 'COMPATIBLE' : 'SAME'}(${actual}, ${name}));`,
    );
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
    if (node.name === 'char') return charUnsigned ? 'uint8' : 'int8';
    if (node.name === 'wchar_t') return `${wcharUnsigned ? 'uint' : 'int'}${node.size}`;
    if (node.name === 'char16_t') return 'uint16';
    if (node.name === 'char32_t') return 'uint32';
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
    const name = aliases.get(node.id) ?? node.name ?? `Anonymous_${layouts.size}`;
    if (!name || !/^[A-Za-z_]\w*$/.test(name))
      fail(node, 'unnamed aggregate needs a typedef');
    if (node.incomplete === '1') fail(node, 'opaque aggregate cannot cross by value');
    if (recordIds.has(name) && recordIds.get(name) !== node.id)
      fail(node, 'ambiguous aggregate name; add distinct C typedef names');
    recordIds.set(name, node.id);
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
          type: type(field.type, `${name}.${field.name}`),
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
          cType: recordCName(node),
          kind: union ? 'union' : 'struct',
          ...expected,
          fields,
          aliases: allAliases.get(node.id) ?? [],
          ...(pack === undefined ? {} : { pack }),
        };
        break;
      }
    }
    if (!chosen)
      fail(node, 'layout cannot be expressed by the current Flax descriptors');
    layouts.set(name, chosen);
    for (const field of members.filter((n) => n?.kind === 'Field')) {
      const value = canonical(field.type);
      const actual = `__typeof__(((${chosen.cType}*)0)->${field.name})`;
      if (language === 'c++' && value.kind === 'Enumeration')
        checkType(`__underlying_type(${actual})`, (name) =>
          cDeclaration(value.type, name),
        );
      else
        checkType(
          actual,
          (name) => cDeclaration(field.type, name),
          containsFunction(field.type),
        );
    }
    return { kind: 'record', name };
  }
  function signature(node, label = node.name) {
    const arguments_ = (node.Argument ?? []).map((arg, index) =>
      type(arg.type, `${label}.arg${index}`),
    );
    const result = {
      arguments: arguments_,
      return: type(node.returns, `${label}.return`),
    };
    if (node.Ellipsis) {
      const extra = varargs[node.name ?? label];
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
  function type(id, callbackName) {
    const node = canonical(id);
    const original = ids.get(id);
    if (node.kind === 'FundamentalType' && node.name !== 'void') {
      const name = node.name === 'bool' && language === 'c' ? '_Bool' : node.name;
      const value = scalar(node);
      abi.set(name, {
        name,
        size: bytes(node, 'size'),
        alignment: bytes(node, 'align'),
        ...(/^u?int\d+$/.test(value) ? { unsigned: value.startsWith('uint') } : {}),
      });
    }
    if (node.kind === 'PointerType')
      abi.set('void*', {
        name: 'void*',
        size: bytes(node, 'size'),
        alignment: bytes(node, 'align'),
      });
    if (
      original.kind === 'Typedef' &&
      identifierName(original.name) &&
      node.size &&
      node.align &&
      node.incomplete !== '1'
    )
      abi.set(qualified(original), {
        name: qualified(original),
        size: bytes(node, 'size'),
        alignment: bytes(node, 'align'),
      });
    if (node.kind === 'FundamentalType') return scalar(node);
    if (node.kind === 'PointerType') {
      const target = canonical(node.type);
      if (target.kind === 'FunctionType') {
        const names = allAliases.get(node.id) ??
          allAliases.get(target.id) ?? [callbackName];
        for (const name of names) queueCallback(name, target);
        return 'function';
      }
      return 'pointer';
    }
    if (node.kind === 'Enumeration') {
      const alias = aliasNodes.get(node.id)?.[0];
      if (language === 'c++' && (alias || node.name))
        checkType(
          `__underlying_type(${alias ? qualified(alias) : `enum ${qualified(node)}`})`,
          (name) => cDeclaration(node.type, name),
        );
      return type(node.type);
    }
    if (['Struct', 'Union'].includes(node.kind)) return record(node);
    if (node.kind === 'ArrayType') {
      if (!/^\d+$/.test(node.min) || !/^\d+$/.test(node.max))
        fail(node, 'flexible arrays require a C ABI wrapper');
      return {
        kind: 'array',
        element: type(node.type, callbackName ? `${callbackName}.element` : undefined),
        length: Number(node.max) - Number(node.min) + 1,
      };
    }
    fail(node, `unsupported type ${node.kind}`);
  }
  function select(kind, names) {
    const selected = nodes.filter((n) => n.kind === kind && matches(n.name, names));
    if (names?.include?.length && !selected.length)
      throw new Error(`No ${kind} matches the selection`);
    for (const name of names?.include ?? []) {
      if (!name.includes('*') && !selected.some((n) => n.name === name))
        throw new Error(`Selected ${kind} missing from AST: ${name}`);
    }
    return selected;
  }
  function selectTypes(selection, kind) {
    const candidates = nodes.filter((node) => {
      if (!node.name || !['Typedef', 'Struct', 'Union'].includes(node.kind))
        return false;
      const resolved = canonical(node.id);
      return kind === 'record'
        ? ['Struct', 'Union'].includes(resolved.kind)
        : resolved.kind === 'FunctionType' ||
            (resolved.kind === 'PointerType' &&
              canonical(resolved.type).kind === 'FunctionType');
    });
    for (const name of selection.include)
      if (!name.includes('*') && !candidates.some((node) => node.name === name))
        throw new Error(`Selected ${kind} missing from AST: ${name}`);
    for (const node of candidates.filter((node) => matches(node.name, selection))) {
      const resolved = canonical(node.id);
      if (kind === 'record') record(resolved);
      else
        queueCallback(
          node.name,
          resolved.kind === 'PointerType' ? canonical(resolved.type) : resolved,
        );
      if (kind === 'callback')
        checkType(
          `__typeof__((${qualified(node)}${resolved.kind === 'FunctionType' ? '*' : ''})0)`,
          (name) =>
            cDeclaration(
              node.id,
              resolved.kind === 'FunctionType' ? `(*${name})` : name,
            ),
          true,
        );
    }
  }
  selectTypes(records, 'record');
  selectTypes(callbackNames, 'callback');
  const selected = select('Function', functions);
  for (const node of selected) {
    if (
      node.static === '1' ||
      node.inline === '1' ||
      (node.mangled && node.mangled !== node.name)
    )
      fail(node, 'selected function needs an exported C ABI wrapper');
    if (node.attributes && /stdcall|fastcall|vectorcall/.test(node.attributes))
      fail(node, 'unsupported calling convention; use a C ABI wrapper');
  }
  const definitions = Object.fromEntries(selected.map((n) => [n.name, signature(n)]));
  for (const node of selected)
    checkType(
      `__typeof__(&${qualified(node)})`,
      (name) => cFunction(node, `(*${name})`),
      true,
    );
  const constants = Object.create(null);
  const constantCNames = Object.create(null);
  for (const node of nodes.filter((n) => n.kind === 'Enumeration')) {
    const whole = [node.name, ...(allAliases.get(node.id) ?? [])].some((name) =>
      matches(name, enums),
    );
    for (const value of node.EnumValue ?? []) {
      if (
        whole ||
        matches(value.name, enums) ||
        value.name.startsWith('__flax_macro_')
      ) {
        const name = value.name.replace('__flax_macro_', '');
        if (Object.hasOwn(constants, name) && constants[name] !== value.init)
          fail(node, `ambiguous constant ${name}; select one enum`);
        constants[name] = value.init;
        let expression = value.name.startsWith('__flax_macro_')
          ? name
          : language === 'c++' && node.name
            ? `${qualified(node)}::${value.name}`
            : language === 'c++'
              ? qualified({ ...node, name: value.name })
              : value.name;
        if (language === 'c++' && !value.name.startsWith('__flax_macro_'))
          expression = `static_cast<__underlying_type(__typeof__(${expression}))>(${expression})`;
        constantCNames[name] = expression;
      }
    }
  }
  for (const name of enums.include)
    if (
      !name.includes('*') &&
      !Object.hasOwn(constants, name) &&
      !nodes.some(
        (node) =>
          node.kind === 'Enumeration' &&
          (node.name === name || allAliases.get(node.id)?.includes(name)),
      )
    )
      throw new Error(`Selected enum or enumerator missing from AST: ${name}`);
  const globalNodes = select('Variable', globalNames);
  for (const node of globalNodes) {
    if (node.static === '1' || (node.mangled && node.mangled !== node.name))
      fail(node, 'selected global needs an exported C ABI accessor');
    const value = canonical(node.type);
    if (language === 'c++' && value.kind === 'Enumeration')
      checkType(`__underlying_type(__typeof__(${qualified(node)}))`, (name) =>
        cDeclaration(value.type, name),
      );
    else
      checkType(
        `__typeof__(${qualified(node)})`,
        (name) => cDeclaration(node.type, name),
        containsFunction(node.type),
      );
  }
  const globals = Object.fromEntries(
    globalNodes.map((n) => [n.name, type(n.type, n.name)]),
  );
  for (const [name, node] of pendingCallbacks) callbacks[name] = signature(node, name);
  const layoutNames = new Map();
  for (const layout of layouts.values()) {
    for (const name of [layout.name, ...layout.aliases]) {
      if (layoutNames.has(name) && layoutNames.get(name) !== layout)
        throw new Error(
          `Ambiguous aggregate alias ${name}; add distinct C typedef names`,
        );
      layoutNames.set(name, layout);
    }
  }
  const model = {
    definitions,
    callbacks,
    globals,
    constants,
    constantCNames,
    layouts: [...layouts.values()],
    abi: [...abi.values()],
    abiDeclarations,
  };
  return model;
}
