import 'package:analyzer/dart/analysis/utilities.dart';
import 'package:analyzer/dart/ast/ast.dart';
import 'package:analyzer/dart/ast/visitor.dart';
import 'package:path/path.dart' as p;

const flaxCodegenClosedAdaptersOutput =
    'lib/src/generated/closed_adapters.g.dart';
final _closedAdapterName = RegExp(
  r'^(_callback\d+|_collection\d+|_future\d+)(?:Create|Matches|Restore|Snapshot|Invoke|Adapt)?$',
);

typedef _AdapterEdit = (int start, int end, String value);

String _editAdapterSource(String source, List<_AdapterEdit> edits) {
  edits.sort((a, b) => a.$1.compareTo(b.$1));
  final out = StringBuffer();
  var offset = 0;
  for (final (start, end, value) in edits) {
    if (start < offset) throw StateError('Overlapping adapter edits.');
    out.write(source.substring(offset, start));
    out.write(value);
    offset = end;
  }
  return (out..write(source.substring(offset))).toString();
}

final class _AdapterSource {
  _AdapterSource(this.path, this.text)
    : unit = parseString(content: text).unit {
    unit.accept(scope);
  }

  final String path, text;
  final CompilationUnit unit;
  final scope = _AdapterScope();
  final edits = <_AdapterEdit>[];
  final renamed = <String, String>{};
  final removed = <FunctionDeclaration>[];
}

final class _AdapterGroup {
  _AdapterGroup(this.source, this.base, this.functions);
  final _AdapterSource source;
  final String base;
  final List<FunctionDeclaration> functions;
  final types = <(int, int, String, String)>[];
  String? key;
}

// A parsed identifier is rewritten only when it still refers to the top-level
// adapter. Generic factory-local adapters deliberately reuse the same names.
final class _AdapterScope extends RecursiveAstVisitor<void> {
  final identifiers = <SimpleIdentifier>[];
  final namedTypes = <NamedType>[];
  final typeParameters = <TypeParameterList>[];
  final shadows = <AstNode, Set<String>>{};
  final unsupportedBindings = <String>{};

  AstNode? _blockScope(AstNode node) {
    var parent = node.parent;
    while (parent != null) {
      if (parent is Block || parent is ForStatement || parent is ForElement) {
        return parent;
      }
      parent = parent.parent;
    }
    return null;
  }

  void _declare(String? name, AstNode? scope) {
    if (name != null && scope != null) {
      shadows.putIfAbsent(scope, () => {}).add(name);
    }
  }

  bool isReference(SimpleIdentifier node) {
    if (node.isQualified ||
        node.parent is Label ||
        node.parent is BreakStatement ||
        node.parent is ContinueStatement ||
        node.inDeclarationContext()) {
      return false;
    }
    var parent = node.parent;
    while (parent != null) {
      if (shadows[parent]?.contains(node.name) == true) return false;
      parent = parent.parent;
    }
    return true;
  }

  @override
  void visitSimpleIdentifier(SimpleIdentifier node) {
    identifiers.add(node);
    super.visitSimpleIdentifier(node);
  }

  @override
  void visitNamedType(NamedType node) {
    namedTypes.add(node);
    super.visitNamedType(node);
  }

  @override
  void visitTypeParameterList(TypeParameterList node) {
    typeParameters.add(node);
    super.visitTypeParameterList(node);
  }

  @override
  void visitFunctionDeclaration(FunctionDeclaration node) {
    if (node.parent is! CompilationUnit) {
      _declare(node.name.lexeme, _blockScope(node));
    }
    super.visitFunctionDeclaration(node);
  }

  @override
  void visitVariableDeclaration(VariableDeclaration node) {
    _declare(node.name.lexeme, _blockScope(node));
    super.visitVariableDeclaration(node);
  }

  @override
  void visitFormalParameterList(FormalParameterList node) {
    for (final parameter in node.parameters) {
      _declare(parameter.name?.lexeme, node.parent);
    }
    super.visitFormalParameterList(node);
  }

  @override
  void visitCatchClause(CatchClause node) {
    _declare(node.exceptionParameter?.name.lexeme, node);
    _declare(node.stackTraceParameter?.name.lexeme, node);
    super.visitCatchClause(node);
  }

  @override
  void visitDeclaredIdentifier(DeclaredIdentifier node) {
    _declare(node.name.lexeme, _blockScope(node));
    super.visitDeclaredIdentifier(node);
  }

  @override
  void visitDeclaredVariablePattern(DeclaredVariablePattern node) {
    // Generated adapters do not currently declare patterns. Leave any matching
    // adapter local until the emitter needs pattern-scope-aware rewriting.
    unsupportedBindings.add(node.name.lexeme);
    super.visitDeclaredVariablePattern(node);
  }
}

const _adapterPlainTypes = {
  'Object',
  'String',
  'bool',
  'int',
  'double',
  'num',
  'dynamic',
  'void',
  'Never',
  'Null',
  'Function',
  'List',
  'Map',
  'Set',
  'Iterable',
  'Future',
  'FutureOr',
  'Stream',
  'FlaxCallback',
};
const _adapterImports = {
  'dart:core',
  'dart:async',
  'package:flax/bindings.dart',
};

List<_AdapterGroup> _closedGroups(
  _AdapterSource source,
  Map<String, String> identities,
) {
  final imports = <String, String>{};
  for (final directive in source.unit.directives.whereType<ImportDirective>()) {
    final uri = directive.uri.stringValue;
    if (uri == null ||
        directive.configurations.isNotEmpty ||
        directive.combinators.isNotEmpty ||
        directive.deferredKeyword != null) {
      return [];
    }
    if (directive.prefix case final prefix?) {
      imports[prefix.name] = uri;
    } else if (!_adapterImports.contains(uri)) {
      return [];
    }
  }
  final functions = <String, List<FunctionDeclaration>>{};
  final globals = <String>{
    for (final declaration in source.unit.declarations)
      if (declaration is TopLevelVariableDeclaration)
        for (final variable in declaration.variables.variables)
          variable.name.lexeme
      else if (declaration is FunctionDeclaration)
        declaration.name.lexeme,
  };
  for (final function
      in source.unit.declarations.whereType<FunctionDeclaration>()) {
    final base = _closedAdapterName.firstMatch(function.name.lexeme)?[1];
    if (base != null) functions.putIfAbsent(base, () => []).add(function);
  }
  final result = <_AdapterGroup>[];
  for (final entry in functions.entries) {
    final group = _AdapterGroup(source, entry.key, entry.value);
    final names = group.functions.map((f) => f.name.lexeme).toSet();
    if (names.any(source.scope.unsupportedBindings.contains)) continue;
    final canonical = <String>[];
    var supported = true;
    for (final function in group.functions) {
      final scan = _AdapterScope();
      function.accept(scan);
      if (scan.typeParameters.isNotEmpty ||
          function.metadata.isNotEmpty ||
          scan.identifiers.any(
            (id) =>
                (id.name.startsWith('_') || globals.contains(id.name)) &&
                !names.contains(id.name) &&
                scan.isReference(id),
          )) {
        supported = false;
        break;
      }
      final replacements = <int, (int, String)>{
        function.name.offset: (
          function.name.end,
          function.name.lexeme.replaceFirst(group.base, 'GROUP'),
        ),
        for (final id in scan.identifiers)
          if (names.contains(id.name) && scan.isReference(id))
            id.offset: (id.end, id.name.replaceFirst(group.base, 'GROUP')),
      };
      final consumedPrefixes = <int>{};
      for (final type in scan.namedTypes) {
        final prefix = type.importPrefix;
        if (prefix == null) {
          if (!_adapterPlainTypes.contains(type.name.lexeme)) supported = false;
          continue;
        }
        final uri = imports[prefix.name.lexeme];
        if (uri == null) {
          supported = false;
          continue;
        }
        consumedPrefixes.add(prefix.offset);
        final imported = '$uri::${type.name.lexeme}';
        final identity = identities[imported] ?? imported;
        replacements[prefix.offset] = (type.name.end, 'TYPE[$identity]');
        group.types.add((prefix.offset, type.name.end, uri, type.name.lexeme));
      }
      for (
        var token = function.beginToken;
        token.offset < function.end;
        token = token.next!
      ) {
        if (imports.containsKey(token.lexeme) &&
            !consumedPrefixes.contains(token.offset)) {
          supported = false;
        }
      }
      final tokens = <String>[];
      var token = function.beginToken;
      while (token.offset < function.end) {
        final replacement = replacements[token.offset];
        if (replacement == null) {
          tokens.add(token.lexeme);
          token = token.next!;
        } else {
          tokens.add(replacement.$2);
          do {
            token = token.next!;
          } while (token.offset < replacement.$1);
        }
      }
      canonical.add(tokens.join(' '));
    }
    if (supported) {
      group.key = canonical.join('\n');
      result.add(group);
    }
  }
  return result;
}

Map<String, String> flaxCodegenShareClosedAdapters(
  Map<String, String> input,
  Map<String, String> identities,
) {
  final sources = [
    for (final path in input.keys.toList()..sort())
      _AdapterSource(path, input[path]!),
  ];
  final groups = <String, List<_AdapterGroup>>{};
  for (final source in sources) {
    for (final group in _closedGroups(source, identities)) {
      groups.putIfAbsent(group.key!, () => []).add(group);
    }
  }
  final selected = [
    for (final key in groups.keys.toList()..sort())
      if (groups[key]!.map((g) => g.source.path).toSet().length > 1)
        groups[key]!,
  ];
  if (selected.isEmpty) return input;
  if (input.containsKey(flaxCodegenClosedAdaptersOutput)) {
    throw StateError(
      '$flaxCodegenClosedAdaptersOutput is reserved for shared adapters.',
    );
  }
  final uris =
      selected.expand((g) => g.first.types.map((t) => t.$3)).toSet().toList()
        ..sort();
  final used = <String>{};
  for (final group in selected) {
    for (final function in group.first.functions) {
      for (
        var token = function.beginToken;
        token.offset < function.end;
        token = token.next!
      ) {
        used.add(token.lexeme);
      }
    }
  }
  var prefixIndex = 0;
  final prefixes = <String, String>{};
  for (final uri in uris) {
    while (used.contains('t$prefixIndex')) {
      prefixIndex++;
    }
    prefixes[uri] = 't${prefixIndex++}';
  }
  final helper = StringBuffer()
    ..writeln('// GENERATED CODE. Selected public API subset; do not edit.')
    ..writeln('// Regenerate with dart run melos run bindings:generate.')
    ..writeln(
      '// ignore_for_file: type=lint, unused_import, unnecessary_import, unnecessary_cast, deprecated_member_use',
    )
    // An explicit prefixed core import suppresses Dart's implicit core import.
    ..writeln("import 'dart:core';")
    ..writeln("import 'dart:async';")
    ..writeln("import 'package:flax/bindings.dart';");
  for (final uri in uris) {
    helper.writeln("import '$uri' as ${prefixes[uri]};");
  }
  var adapterIndex = 0;
  for (final group in selected) {
    final first = group.first;
    String public;
    do {
      public = 'flaxAdapter${adapterIndex++}';
    } while (first.functions.any(
      (f) => used.contains(f.name.lexeme.replaceFirst(first.base, public)),
    ));
    final names = first.functions.map((f) => f.name.lexeme).toSet();
    for (final function in first.functions) {
      final scope = _AdapterScope();
      function.accept(scope);
      final edits = <_AdapterEdit>[
        (
          function.name.offset,
          function.name.end,
          function.name.lexeme.replaceFirst(first.base, public),
        ),
        for (final (start, end, uri, name) in first.types)
          if (start >= function.offset && end <= function.end)
            (start, end, '${prefixes[uri]}.$name'),
        for (final id in scope.identifiers)
          if (id.offset >= function.offset &&
              id.end <= function.end &&
              names.contains(id.name) &&
              scope.isReference(id))
            (id.offset, id.end, id.name.replaceFirst(first.base, public)),
      ];
      helper.writeln(
        _editAdapterSource(
          first.source.text.substring(function.offset, function.end),
          [
            for (final (start, end, value) in edits)
              (start - function.offset, end - function.offset, value),
          ],
        ),
      );
    }
    for (final original in group) {
      original.source.removed.addAll(original.functions);
      for (final function in original.functions) {
        original.source.renamed[function.name.lexeme] = function.name.lexeme
            .replaceFirst(original.base, public);
      }
    }
  }
  final output = Map<String, String>.of(input);
  for (final source in sources.where((s) => s.removed.isNotEmpty)) {
    final used = <String>{};
    for (
      var token = source.unit.beginToken;
      !token.isEof;
      token = token.next!
    ) {
      used.add(token.lexeme);
    }
    var alias = '_flaxAdapters';
    for (var suffix = 0; used.contains(alias); suffix++) {
      alias = '_flaxAdapters$suffix';
    }
    for (final function in source.removed) {
      source.edits.add((function.offset, function.end, ''));
    }
    for (final id in source.scope.identifiers) {
      final name = source.renamed[id.name];
      if (name == null ||
          !source.scope.isReference(id) ||
          source.removed.any((f) => id.offset >= f.offset && id.end <= f.end)) {
        continue;
      }
      source.edits.add((id.offset, id.end, '$alias.$name'));
    }
    final import = p.posix.relative(
      flaxCodegenClosedAdaptersOutput,
      from: p.posix.dirname(source.path),
    );
    source.edits.add((
      source.unit.directives.last.end,
      source.unit.directives.last.end,
      "\nimport '$import' as $alias;\n",
    ));
    output[source.path] = _editAdapterSource(source.text, source.edits);
  }
  output[flaxCodegenClosedAdaptersOutput] = helper.toString();
  return output;
}
