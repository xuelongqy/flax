import 'dart:convert';

import 'manifest_codec.dart';

const _maximumNodes = 20000000;
const _maximumDepth = 128;
const _memberLists = {
  'constructors',
  'getters',
  'setters',
  'staticGetters',
  'staticSetters',
  'methods',
};

/// File encoding only; semantic codecs still decode each generic lexical scope.
final class FlaxCodegenManifestStorage {
  static Map<String, Object?> compact(Map<String, Object?> manifest) {
    final types = <Map<String, Object?>>[];
    final indexes = <String, int>{};
    final members = <String, (Map<String, Object?>, int)>{};
    Object? visit(Object? value, {bool member = false}) {
      if (value is List) {
        return [for (final item in value) visit(item, member: member)];
      }
      if (value is! Map<String, Object?>) return value;
      final fields = {
        for (final entry in value.entries)
          entry.key: visit(
            entry.value,
            member: _memberLists.contains(entry.key),
          ),
      };
      if (!_isType(value)) {
        if (member && _isMember(fields)) {
          final key = _canonical(fields);
          members.update(
            key,
            (row) => (row.$1, row.$2 + 1),
            ifAbsent: () => (fields, 1),
          );
        }
        return fields;
      }
      final index = indexes.putIfAbsent(_canonical(fields), () {
        types.add(fields);
        return types.length - 1;
      });
      return {r'$type': index};
    }

    final typed = visit(manifest)! as Map<String, Object?>;
    // Singleton rows stay inline; references must save more than their table cost.
    final shared = {
      for (final entry in members.entries)
        if (entry.value.$2 > 1 && entry.key.length > 96)
          entry.key: entry.value.$1,
    };
    final memberIndexes = <String, int>{};
    final memberTable = <Map<String, Object?>>[];
    Object? share(Object? value, {bool member = false}) {
      if (value is List) {
        return [for (final item in value) share(item, member: member)];
      }
      if (value is! Map<String, Object?>) return value;
      if (member && _isMember(value)) {
        final key = _canonical(value);
        if (shared.containsKey(key)) {
          final index = memberIndexes.putIfAbsent(key, () {
            memberTable.add(value);
            return memberTable.length - 1;
          });
          return {r'$member': index};
        }
      }
      return {
        for (final entry in value.entries)
          entry.key: share(
            entry.value,
            member: _memberLists.contains(entry.key),
          ),
      };
    }

    return {
      ...share(typed)! as Map<String, Object?>,
      'typeTable': types,
      'memberTable': memberTable,
    };
  }

  static Object? expand(
    Object? value,
    FlaxCodegenManifestDiagnostics diagnostics,
  ) {
    final typed = _expandTable(
      value,
      diagnostics,
      'typeTable',
      r'$type',
      _isType,
    );
    if (diagnostics.items.isNotEmpty) return null;
    return _expandTable(
      typed,
      diagnostics,
      'memberTable',
      r'$member',
      _isMember,
    );
  }

  static Object? _expandTable(
    Object? value,
    FlaxCodegenManifestDiagnostics diagnostics,
    String table,
    String reference,
    bool Function(Map<String, Object?>) accepts,
  ) {
    if (value is! Map<String, Object?> || !value.containsKey(table)) {
      return value;
    }
    Never invalid(String pointer, String message) {
      diagnostics.add(pointer: pointer, message: message);
      throw const FormatException();
    }

    try {
      final raw = value[table];
      if (raw is! List) invalid('/$table', 'Expected a list.');
      final types = <Map<String, Object?>>[];
      final sizes = <int>[];
      final depths = <int>[];
      final dependencies = <Set<int>>[];
      final unique = <String>{};
      final used = <int>{};
      var nodes = 0;
      var deepest = 0;
      Object? visit(
        Object? item,
        String pointer,
        Set<int> references, [
        int depth = 0,
      ]) {
        if (depth > deepest) deepest = depth;
        if (deepest > _maximumDepth) {
          invalid(pointer, 'Expanded Manifest exceeds the depth limit.');
        }
        // References must not turn a small file into an exponential type tree.
        if (++nodes > _maximumNodes) {
          invalid(pointer, 'Expanded Manifest exceeds the node limit.');
        }
        if (item is List) {
          return [
            for (var i = 0; i < item.length; i++)
              visit(item[i], '$pointer/$i', references, depth + 1),
          ];
        }
        if (item is! Map<String, Object?>) return item;
        if (item[reference] is num) {
          final index = item[reference];
          if (item.length != 1 ||
              index is! int ||
              index < 0 ||
              index >= types.length) {
            invalid(
              pointer,
              'Expected a reference to an earlier $table entry.',
            );
          }
          nodes += sizes[index] - 1;
          if (depth + depths[index] > deepest) deepest = depth + depths[index];
          if (deepest > _maximumDepth) {
            invalid(pointer, 'Expanded Manifest exceeds the depth limit.');
          }
          if (nodes > _maximumNodes) {
            invalid(pointer, 'Expanded Manifest exceeds the node limit.');
          }
          references.add(index);
          return types[index];
        }
        return {
          for (final entry in item.entries)
            entry.key: visit(
              entry.value,
              flaxCodegenManifestPointer(pointer, entry.key),
              references,
              depth + 1,
            ),
        };
      }

      for (var i = 0; i < raw.length; i++) {
        final pointer = '/$table/$i';
        final entry = raw[i];
        if (entry is! Map<String, Object?> || !accepts(entry)) {
          invalid(
            pointer,
            'Expected a ${table == 'typeTable' ? 'type' : 'member'} description.',
          );
        }
        if (!unique.add(_canonical(entry))) {
          invalid(pointer, 'Duplicate $table entry.');
        }
        nodes = 0;
        deepest = 0;
        final references = <int>{};
        types.add(visit(entry, pointer, references)! as Map<String, Object?>);
        sizes.add(nodes);
        depths.add(deepest);
        dependencies.add(references);
      }
      nodes = 0;
      deepest = 0;
      final expanded = visit(
        {
          for (final entry in value.entries)
            if (entry.key != table) entry.key: entry.value,
        },
        '',
        used,
      );
      // Every entry must participate in semantic validation, including its slots.
      for (var i = types.length - 1; i >= 0; i--) {
        if (used.contains(i)) used.addAll(dependencies[i]);
      }
      if (used.length != types.length) {
        invalid('/$table', 'Unused $table entry.');
      }
      return expanded;
    } on FormatException {
      return null;
    }
  }
}

bool _isType(Map<String, Object?> value) =>
    value['kind'] is String &&
    value['nullable'] is bool &&
    value['dartArguments'] is List;

bool _isMember(Map<String, Object?> value) =>
    value['name'] is String &&
    (value['parameters'] is List || value.containsKey('type'));

String _canonical(Object? value) {
  Object? sorted(Object? item) {
    if (item is List) return [for (final child in item) sorted(child)];
    if (item is! Map<String, Object?>) return item;
    return {
      for (final key in item.keys.toList()..sort()) key: sorted(item[key]),
    };
  }

  return jsonEncode(sorted(value));
}
