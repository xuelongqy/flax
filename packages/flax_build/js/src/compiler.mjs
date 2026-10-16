import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import MagicString from 'magic-string';
import {
  API,
  DiagnosticCategory,
  SignatureKind,
  SymbolFlags,
  TypeFlags,
} from 'typescript/unstable/sync';
import {
  SyntaxKind,
  isCallExpression,
  isNewExpression,
  isExpressionWithTypeArguments,
  isPropertyAccessExpression,
  isElementAccessExpression,
  isMethodDeclaration,
  isImportDeclaration,
  isExportDeclaration,
  isClassDeclaration,
  isClassExpression,
} from 'typescript/unstable/ast';

const typeMarker = 'flaxDartTypeCases';
const methodMarker = 'flaxDartMethodCases';
const keyMarker = 'flaxDartTypeKey';
const markerProperties = new WeakMap();

function property(checker, type, marker) {
  if (!type) return;
  let cache = markerProperties.get(checker);
  if (!cache) markerProperties.set(checker, (cache = new Map()));
  // Native checker calls cross a process boundary; cache within this snapshot only.
  let properties = cache.get(type.id);
  if (!properties) cache.set(type.id, (properties = checker.getPropertiesOfType(type)));
  return properties.find((p) => p.name.startsWith(`__@${marker}@`));
}

function canonical(checker, symbol) {
  return symbol?.flags & SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
}

/** One TS project service for a build or dev server; it holds no application values. */
export class FlaxCompiler {
  constructor({ root = process.cwd() } = {}) {
    this.root = resolve(root);
    this.openFiles = new Set();
    this.projects = new Set();
    this.inferredFiles = new Set();
    this.changed = new Set();
    this.dependencies = new Map();
    this.sources = new Map();
    this.compiled = new Map();
  }

  invalidate(files) {
    files = new Set([...files].map((file) => resolve(file)));
    if (files.size) this.compiled.clear();
    for (const file of files) {
      this.changed.add(file);
      this.sources.delete(file);
    }
    const affected = [...this.dependencies]
      .filter(([, dependencies]) => [...files].some((file) => dependencies.has(file)))
      .map(([file]) => file);
    return affected;
  }

  close() {
    this.snapshot?.dispose();
    this.api?.close();
    this.snapshot = this.api = undefined;
    this.openFiles.clear();
    this.projects.clear();
    this.inferredFiles.clear();
    this.changed.clear();
    this.dependencies.clear();
    this.sources.clear();
    this.compiled.clear();
  }

  transform(code, filename) {
    if (/[?&](?:raw|url)(?:[=&]|$)/.test(filename)) return { code, dependencies: [] };
    filename = resolve(filename.split(/[?#]/, 1)[0]);
    if (!/\.[cm]?tsx?$/.test(filename) || /\.d\.[cm]?ts$/.test(filename))
      return { code, dependencies: [] };
    if (code.startsWith('// GENERATED CODE. Selected public API subset;'))
      return { code, dependencies: [] };
    const cached = this.compiled.get(filename);
    if (cached?.source === code && !this.changed.size) return cached.output;
    if (this.openFiles.has(filename) && this.sources.get(filename) !== code)
      this.invalidate([filename]);
    this.sources.set(filename, code);
    this.api ??= new API({
      cwd: this.root,
      fs: { readFile: (file) => this.sources.get(resolve(file)) },
    });
    let directory = dirname(filename);
    let config;
    while (true) {
      const candidate = resolve(directory, 'tsconfig.json');
      if (existsSync(candidate)) {
        config = candidate;
        break;
      }
      const parent = dirname(directory);
      if (parent === directory) break;
      directory = parent;
    }
    const openProjects = config && !this.projects.has(config) ? [config] : [];
    if (config) this.projects.add(config);
    const openFiles = !config && !this.openFiles.has(filename) ? [filename] : [];
    if (!config) this.inferredFiles.add(filename);
    this.openFiles.add(filename);
    const previous = this.snapshot;
    // openFiles are LSP-style buffers. Close them before observing disk changes.
    if (this.changed.size) {
      this.api.clearSourceFileCache();
      if (this.inferredFiles.size) {
        const closed = this.api.updateSnapshot({ closeFiles: [...this.inferredFiles] });
        closed.dispose();
        openFiles.splice(0, openFiles.length, ...this.inferredFiles);
      }
    }
    if (!previous || openFiles.length || openProjects.length || this.changed.size) {
      this.snapshot = this.api.updateSnapshot({
        openFiles,
        openProjects,
        ...(this.changed.size ? { fileChanges: { changed: [...this.changed] } } : {}),
      });
      previous?.dispose();
    }
    this.changed.clear();
    const project = config
      ? this.snapshot.getProject(config)
      : this.snapshot.getDefaultProjectForFile(filename);
    if (!project) throw new Error(`Unable to open TypeScript project for ${filename}`);
    const source = project.program.getSourceFile(filename);
    if (!source || source.text !== code)
      throw new Error(
        `Flax generic compilation must run before other source transforms: ${filename}`,
      );
    const checker = project.checker;
    const edits = [];
    const extraImports = new Map();
    const contexts = new Map();
    const identifiers = new Set(
      code.match(/[$\p{ID_Start}][$\p{ID_Continue}]*/gu) ?? [],
    );
    function unique(name) {
      while (identifiers.has(name)) name += '_';
      identifiers.add(name);
      return name;
    }
    const runtime = unique('__flaxTypes');
    let usesRuntime = false;
    function fail(node, message) {
      const position = source.getLineAndCharacterOfPosition(node.getStart(source));
      throw new Error(
        `${filename}:${position.line + 1}:${position.character + 1}: ${message}`,
      );
    }
    function text(node) {
      return code.slice(node.getStart(source), node.end);
    }
    function rendered(start, end) {
      let result = code.slice(start, end);
      for (const edit of edits
        .filter((e) => e.start >= start && e.end <= end)
        .sort((a, b) => b.start - a.start))
        result =
          result.slice(0, edit.start - start) +
          edit.text +
          result.slice(edit.end - start);
      return result;
    }
    function replace(start, end, value) {
      for (let i = edits.length - 1; i >= 0; i--) {
        const edit = edits[i];
        if (edit.start >= start && edit.end <= end) edits.splice(i, 1);
        else if (edit.start < end && edit.end > start)
          throw new Error('Overlapping Flax generic transforms');
      }
      edits.push({ start, end, text: value });
    }
    const modules = [];
    for (const statement of source.statements) {
      if (!isImportDeclaration(statement) || !statement.importClause) continue;
      const symbol = checker.getSymbolAtLocation(statement.moduleSpecifier);
      if (!symbol) continue;
      modules.push({
        specifier: statement.moduleSpecifier.text,
        symbol,
      });
    }

    function nativeClass(type) {
      const marker = property(checker, type, keyMarker);
      if (!marker) return false;
      const classes = (type.getSymbol()?.declarations ?? [])
        .map((h) => h.resolve(project))
        .filter((d) => d && (isClassDeclaration(d) || isClassExpression(d)));
      return (
        !classes.length ||
        marker.declarations.some((h) => {
          const owner = h.resolve(project)?.parent;
          return (
            owner &&
            classes.some(
              (d) =>
                d.pos === owner.pos &&
                d.end === owner.end &&
                d.getSourceFile() === owner.getSourceFile(),
            )
          );
        })
      );
    }

    function runtimeToken(symbol) {
      symbol = canonical(checker, symbol);
      if (!symbol) return;
      for (const module of modules) {
        const exports = (module.exports ??= checker.getExportsOfModule(module.symbol));
        let value = exports.find(
          (e) => e.name === symbol.name && canonical(checker, e)?.id === symbol.id,
        );
        if (!value)
          value = exports.find((e) => canonical(checker, e)?.id === symbol.id);
        const exported = value && {
          name: value.name,
          symbol: canonical(checker, value),
        };
        if (!exported || !nativeClass(checker.getTypeOfSymbol(exported.symbol)))
          continue;
        let name = extraImports.get(module.specifier);
        if (!name) extraImports.set(module.specifier, (name = unique('__flaxBinding')));
        return `${name}[${JSON.stringify(exported.name)}]`;
      }
      // Locally declared binding exports can be referenced without a new import.
      const declarations = symbol.declarations.map((h) =>
        h.resolve(project)?.getSourceFile(),
      );
      if (
        declarations.some((s) => s?.fileName === filename) &&
        nativeClass(checker.getTypeOfSymbol(symbol))
      )
        return symbol.name;
    }

    function sharedProjection(type) {
      return type
        .getSymbol()
        ?.declarations.some(
          (h) =>
            /[\\/](?:typescript|@typescript[\\/]typescript-[^\\/]+)[\\/](?:dist[\\/])?lib[\\/]lib\.[^\\/]*\.d\.ts$/.test(
              h.path,
            ) || /[\\/]runtime[\\/]bindings\.(?:d\.)?ts$/.test(h.path),
        );
    }

    function token(type, node, stack = new Set()) {
      if (!type || type.isErrorType()) fail(node, 'Cannot resolve a Dart generic type');
      usesRuntime = true;
      if (stack.has(type.id))
        fail(node, 'Recursive structural types require an explicit Dart type token');
      const next = new Set(stack).add(type.id);
      const flags = type.flags;
      if (flags & TypeFlags.TypeParameter)
        fail(
          node,
          'This type parameter has no runtime Dart type; pass an existing $type / dartType token',
        );
      const primitives = [
        [TypeFlags.StringLike, 'string'],
        [TypeFlags.NumberLike, 'num'],
        [TypeFlags.BooleanLike, 'bool'],
        [TypeFlags.BigIntLike, 'bigInt'],
        [TypeFlags.Void, 'void'],
        [TypeFlags.Never, 'never'],
        [TypeFlags.Null, 'null'],
        [TypeFlags.Unknown | TypeFlags.Any, 'unknown'],
        [TypeFlags.NonPrimitive, 'object'],
      ];
      for (const [mask, name] of primitives)
        if (flags & mask) return `${runtime}.dartTypes.${name}`;
      const symbol = type.getAliasSymbol() ?? type.getSymbol();
      const runtimeAlias = symbol?.declarations.some((h) =>
        /[\\/]runtime[\\/]bindings\.(?:d\.)?ts$/.test(h.path),
      );
      if ((symbol?.name === 'Widget' || symbol?.name === 'DartWidget') && runtimeAlias)
        return `${runtime}.dartTypes.widget`;
      const inputBuilders = {
        DartListInput: ['list', 1],
        DartIterableInput: ['iterable', 1],
        DartMapInput: ['map', 2],
        DartSetInput: ['set', 1],
      };
      const input = runtimeAlias && inputBuilders[symbol.name];
      if (input) {
        const arguments_ = type.getAliasTypeArguments().slice(0, input[1]);
        return `${runtime}.dartTypes.${input[0]}(${arguments_.map((t) => token(t, node, next)).join(', ')})`;
      }
      if (type.isUnionType()) {
        const parts = type.getTypes();
        if (parts.every((t) => t.flags & TypeFlags.BooleanLike))
          return `${runtime}.dartTypes.bool`;
        const values = parts.filter((t) => !(t.flags & TypeFlags.Null));
        if (values.length === 1 && values.length < parts.length)
          return `${runtime}.dartTypes.nullable(${token(values[0], node, next)})`;
        if (values.length === 2) {
          const promise = values.find(
            (t) =>
              t.isTypeReference() &&
              t.getSymbol()?.name === 'Promise' &&
              sharedProjection(t),
          );
          const inner = promise && checker.getTypeArguments(promise)[0];
          const direct = values.find((t) => t !== promise);
          if (inner && direct && inner.id === direct.id) {
            const selected = `${runtime}.dartTypes.futureOr(${token(inner, node, next)})`;
            return parts.length > values.length
              ? `${runtime}.dartTypes.nullable(${selected})`
              : selected;
          }
        }
        fail(
          node,
          'A Dart type cannot represent this union; use an explicit Dart type token',
        );
      }
      const name = type.getSymbol()?.name;
      const builders = {
        Array: 'list',
        ReadonlyArray: 'list',
        DartList: 'list',
        DartIterable: 'iterable',
        Iterable: 'iterable',
        DartMap: 'map',
        Map: 'map',
        ReadonlyMap: 'map',
        DartSet: 'set',
        Set: 'set',
        ReadonlySet: 'set',
        Promise: 'future',
        FlaxStreamReference: 'stream',
      };
      const builder = builders[name];
      if (builder && sharedProjection(type) && type.isTypeReference()) {
        const arguments_ = checker.getTypeArguments(type);
        return `${runtime}.dartTypes.${builder}(${arguments_.map((t) => token(t, node, next)).join(', ')})`;
      }
      const native = runtimeToken(symbol) ?? runtimeToken(type.getSymbol());
      if (native) {
        const arguments_ = type.isTypeReference()
          ? checker.getTypeArguments(type)
          : type.getAliasTypeArguments();
        return arguments_.length
          ? `${native}.$type(${arguments_.map((t) => token(t, node, next)).join(', ')})`
          : native;
      }
      fail(
        node,
        `No Dart type token for ${checker.typeToString(type)}; use an authenticated binding or $type / dartType token`,
      );
    }

    function methodName(expression) {
      if (isPropertyAccessExpression(expression)) return expression.name.text;
      if (isElementAccessExpression(expression)) {
        const type = checker.getTypeAtLocation(expression.argumentExpression);
        if (type?.isStringLiteralType()) return type.value;
      }
    }

    function binding(node) {
      const expression = node.expression;
      const type = checker.getNonNullableType(checker.getTypeAtLocation(expression));
      if (property(checker, type, typeMarker)) {
        if (property(checker, type, keyMarker) && !nativeClass(type)) return;
        return {
          kind: property(checker, type, keyMarker) ? 'class' : 'function',
          expression,
        };
      }
      return memberBinding(expression);
    }

    function memberBinding(expression) {
      if (
        isPropertyAccessExpression(expression) ||
        isElementAccessExpression(expression)
      ) {
        const owner = expression.expression;
        const name = methodName(expression);
        if (name === undefined) return;
        const ownerType = checker.getNonNullableType(checker.getTypeAtLocation(owner));
        if (property(checker, ownerType, typeMarker) && nativeClass(ownerType))
          return { kind: 'constructor', owner, name };
        const marker = property(checker, ownerType, methodMarker);
        const methods = marker && checker.getTypeOfSymbol(marker);
        if (
          methods &&
          checker.getPropertyOfType(checker.getNonNullableType(methods), name)
        ) {
          const extension = property(checker, ownerType, 'flaxDartExtensionTypes');
          const ownerArguments = extension
            ? checker.getTypeArguments(
                checker.getNonNullableType(checker.getTypeOfSymbol(extension)),
              )
            : [];
          const member = checker.getPropertyOfType(ownerType, name);
          const getter = member?.declarations.some((h) => {
            const declaration = h.resolve(project);
            return (
              declaration?.kind === SyntaxKind.PropertySignature ||
              declaration?.kind === SyntaxKind.GetAccessor
            );
          });
          return { kind: 'method', owner, name, ownerArguments, getter };
        }
      }
    }

    let diagnostics;
    function infer(node, signature) {
      const target = signature?.getTarget();
      if (!target) return [];
      const parameters = target.getTypeParameters();
      if (!parameters.length) return [];
      const found = new Map();
      const ids = new Set(parameters.map((t) => t.id));
      const seen = new Set();
      function uncertain(type, visited = new Set()) {
        if (
          type.flags &
          (TypeFlags.Any |
            TypeFlags.Unknown |
            TypeFlags.Never |
            TypeFlags.TypeParameter)
        )
          return true;
        if (visited.has(type.id)) return false;
        const next = new Set(visited).add(type.id);
        const children = type.isUnionType()
          ? type.getTypes()
          : type.isTypeReference()
            ? checker.getTypeArguments(type)
            : type.getAliasTypeArguments();
        return children.some((t) => uncertain(t, next));
      }
      function match(formal, actual) {
        if (!formal || !actual) return;
        const key = `${formal.id}:${actual.id}`;
        if (seen.has(key)) return;
        seen.add(key);
        if (ids.has(formal.id)) {
          const previous = found.get(formal.id);
          if (!previous || uncertain(previous)) found.set(formal.id, actual);
          return;
        }
        if (formal.isUnionType()) {
          for (const member of formal.getTypes()) {
            if (ids.has(member.id)) match(member, actual);
            else if (actual.isUnionType()) {
              for (const value of actual.getTypes()) match(member, value);
            } else match(member, actual);
          }
          return;
        }
        const aliasArguments = formal.getAliasTypeArguments();
        if (
          aliasArguments.some((t) => ids.has(t.id)) &&
          !actual.getAliasTypeArguments().length
        ) {
          if (aliasArguments.length === 1 && ids.has(aliasArguments[0].id))
            match(aliasArguments[0], actual);
          return;
        }
        if (
          formal.isTypeReference() &&
          actual.isTypeReference() &&
          formal.getSymbol()?.id === actual.getSymbol()?.id
        ) {
          const left = checker.getTypeArguments(formal);
          const right = checker.getTypeArguments(actual);
          left.forEach((value, i) => match(value, right[i]));
        }
      }
      match(
        checker.getReturnTypeOfSignature(target),
        checker.getReturnTypeOfSignature(signature),
      );
      const left = target.getParameters();
      const right = signature.getParameters();
      left.forEach((parameter, i) =>
        match(
          checker.getTypeOfSymbol(parameter),
          right[i] && checker.getTypeOfSymbol(right[i]),
        ),
      );
      match(checker.getReturnTypeOfSignature(target), checker.getContextualType(node));
      const values = parameters.map((t) => found.get(t.id));
      // Empty and ambiguous inputs retain the declaration's existing bound default.
      if (values.some((t) => !t || uncertain(t))) return [];
      diagnostics ??= project.program.getSemanticDiagnostics(filename);
      if (
        diagnostics.some(
          (d) =>
            d.category === DiagnosticCategory.Error &&
            d.pos < node.end &&
            d.end > node.getStart(source),
        )
      )
        return [];
      return values;
    }

    function typedSuper(node) {
      const expression = node.expression;
      if (
        !isCallExpression(node) ||
        (!isPropertyAccessExpression(expression) &&
          !isElementAccessExpression(expression)) ||
        expression.expression.kind !== SyntaxKind.SuperKeyword
      )
        return false;
      const name = methodName(expression);
      if (name === undefined) return false;
      let method = node.parent;
      while (method && !isMethodDeclaration(method)) {
        if (isClassDeclaration(method) || isClassExpression(method)) return false;
        method = method.parent;
      }
      const baseType = checker.getTypeAtLocation(expression.expression);
      const marker = property(checker, baseType, methodMarker);
      const methods = marker && checker.getTypeOfSymbol(marker);
      if (
        !methods ||
        !checker.getPropertyOfType(checker.getNonNullableType(methods), name)
      )
        return false;
      const types = node.typeArguments?.length
        ? node.typeArguments.map((t) => checker.getTypeFromTypeNode(t))
        : method?.typeParameters?.length
          ? method.typeParameters.map((t) => checker.getTypeAtLocation(t.name))
          : infer(node, checker.getResolvedSignature(node));
      if (!types.length) return false;
      if (!method || !method.typeParameters?.length) {
        const tokens = types.map((t) => token(t, node)).join(', ');
        const args = node.arguments
          .map((a) => rendered(a.getStart(source), a.end))
          .join(', ');
        usesRuntime = true;
        replace(
          node.getStart(source),
          node.end,
          `${runtime}.invokeDartSuper(this, ${text(expression)}, ${JSON.stringify(name)}, [${args}], [${tokens}])`,
        );
        return true;
      }
      if ((method.name.text ?? method.name.getText(source)) !== name)
        fail(
          node,
          'A generic override can forward its super context only to the same method',
        );
      if (
        types.length !== method.typeParameters.length ||
        types.some(
          (argument, i) =>
            argument.id !==
            checker.getTypeAtLocation(method.typeParameters[i].name)?.id,
        )
      )
        fail(
          node,
          "Generic super must forward this invocation's type parameters; select other closed types in a non-generic method",
        );
      let context = contexts.get(method);
      if (!context) {
        const parameters = method.parameters;
        const last = parameters.at(-1);
        const contextType = last?.type && checker.getTypeFromTypeNode(last.type);
        if (
          contextType &&
          checker.getPropertyOfType(checker.getNonNullableType(contextType), 'super')
        )
          context = last.name.getText(source);
        else {
          if (parameters.some((p) => p.dotDotDotToken))
            fail(
              method,
              'A rest-parameter override must accept an explicit generic super context',
            );
          const signature = checker.getSignaturesOfType(
            checker.getTypeAtLocation(expression),
            SignatureKind.Call,
          )[0];
          const count = signature?.getParameters().length;
          if (count === undefined)
            fail(method, 'Cannot determine the native super parameter layout');
          const added = [];
          for (let i = parameters.length; i < count; i++)
            added.push(unique('__flaxOmitted'));
          context = unique('__flaxCall');
          added.push(context);
          const trailingComma = code
            .slice(parameters.pos, parameters.end)
            .trimEnd()
            .endsWith(',');
          edits.push({
            start: parameters.end,
            end: parameters.end,
            text: `${parameters.length && !trailingComma ? ', ' : ''}${added.join(', ')}`,
          });
        }
        contexts.set(method, context);
      }
      const args = node.arguments
        .map((a) => rendered(a.getStart(source), a.end))
        .join(', ');
      usesRuntime = true;
      replace(
        node.getStart(source),
        node.end,
        `${runtime}.invokeDartSuper(this, ${text(expression)}, ${JSON.stringify(name)}, [${args}], null, ${context})`,
      );
      return true;
    }

    function visit(node) {
      node.forEachChild(visit);
      if (isPropertyAccessExpression(node) || isElementAccessExpression(node)) {
        const target = memberBinding(node);
        if (
          target?.kind === 'method' &&
          target.ownerArguments.length &&
          target.getter
        ) {
          if (node.questionDotToken)
            fail(
              node,
              'Use an explicit dartType selector before optional extension access',
            );
          let tokens;
          try {
            tokens = target.ownerArguments.map((t) => token(t, node)).join(', ');
          } catch {
            return;
          }
          usesRuntime = true;
          replace(
            node.getStart(source),
            node.end,
            `${runtime}.dartType(${rendered(target.owner.getStart(source), target.owner.end)}, ${JSON.stringify(target.name)}, ${tokens})()`,
          );
        }
        return;
      }
      if (
        !isCallExpression(node) &&
        !isNewExpression(node) &&
        !isExpressionWithTypeArguments(node)
      )
        return;
      if (typedSuper(node)) return;
      const target = binding(node);
      if (!target || target.getter) return;
      // Instantiation expressions and heritage clauses need explicit arguments.
      const explicit = node.typeArguments?.length > 0;
      const signature =
        isCallExpression(node) || isNewExpression(node)
          ? checker.getResolvedSignature(node)
          : undefined;
      const types = [
        ...(target.ownerArguments ?? []),
        ...(explicit
          ? node.typeArguments.map((t) => checker.getTypeFromTypeNode(t))
          : infer(node, signature)),
      ];
      if (!types.length) return;
      if (node.questionDotToken || node.expression.questionDotToken)
        fail(
          node,
          'Use an explicit $type / dartType selector before an optional generic call',
        );
      let tokens;
      try {
        tokens = types.map((type) => token(type, node)).join(', ');
      } catch (error) {
        if (explicit) throw error;
        return;
      }
      const expression = node.expression;
      let selected;
      if (target.kind === 'class')
        selected = `${rendered(expression.getStart(source), expression.end)}.$type(${tokens})`;
      else if (target.kind === 'constructor')
        selected = `${rendered(target.owner.getStart(source), target.owner.end)}.$type(${tokens})[${JSON.stringify(target.name)}]`;
      else if (target.kind === 'method') {
        usesRuntime = true;
        selected = `${runtime}.dartType(${rendered(target.owner.getStart(source), target.owner.end)}, ${JSON.stringify(target.name)}, ${tokens})`;
      } else {
        usesRuntime = true;
        selected = `${runtime}.dartType(${rendered(expression.getStart(source), expression.end)}, ${tokens})`;
      }
      replace(
        expression.getStart(source),
        explicit ? node.typeArguments.end + 1 : expression.end,
        `(${selected})`,
      );
    }
    visit(source);
    const result = new MagicString(code);
    for (const edit of edits) {
      if (edit.start === edit.end) result.appendLeft(edit.start, edit.text);
      else result.overwrite(edit.start, edit.end, edit.text);
    }
    const imports = [...extraImports].map(
      ([specifier, name]) => `import * as ${name} from ${JSON.stringify(specifier)};`,
    );
    if (usesRuntime && edits.length)
      imports.unshift(`import * as ${runtime} from '@flax/core/bindings';`);
    if (imports.length && edits.length)
      result.appendLeft(
        code.startsWith('#!') ? code.indexOf('\n') + 1 : 0,
        imports.join('\n') + '\n',
      );
    const dependencySet = new Set(config ? [config] : []);
    function typeDependencies(file, recursive = false) {
      for (const statement of file.statements) {
        if (!isImportDeclaration(statement) && !isExportDeclaration(statement))
          continue;
        if (!statement.moduleSpecifier) continue;
        const names = [
          statement.importClause?.name,
          ...(
            statement.importClause?.namedBindings?.elements ??
            statement.exportClause?.elements ??
            []
          ).map((e) => e.name),
        ].filter(Boolean);
        const typeOnly =
          statement.isTypeOnly ||
          statement.importClause?.isTypeOnly ||
          statement.importClause?.namedBindings?.elements?.some((e) => e.isTypeOnly) ||
          names.some((name) => {
            const target = canonical(checker, checker.getSymbolAtLocation(name));
            return target && !(target.flags & SymbolFlags.Value);
          });
        const symbol = checker.getSymbolAtLocation(statement.moduleSpecifier);
        for (const declaration of symbol?.declarations ?? []) {
          const path = declaration.resolve(project)?.getSourceFile();
          if (!path || path.fileName === filename || dependencySet.has(path.fileName))
            continue;
          if (
            !recursive &&
            !typeOnly &&
            !path.isDeclarationFile &&
            !/[\\/](?:generated|_bindings|\.dart_tool)[\\/]/.test(path.fileName) &&
            !statement.moduleSpecifier.text.startsWith('@flax/')
          )
            continue;
          dependencySet.add(path.fileName);
          typeDependencies(path, true);
        }
      }
    }
    typeDependencies(source);
    const dependencies = [...dependencySet];
    this.dependencies.set(filename, new Set(dependencies));
    const output = {
      code: result.toString(),
      dependencies,
      ...(edits.length
        ? {
            map: result.generateMap({
              source: filename,
              includeContent: true,
              hires: 'boundary',
            }),
          }
        : {}),
    };
    this.compiled.set(filename, { source: code, output });
    return output;
  }
}
