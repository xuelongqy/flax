part of 'parser.dart';

/// Native contracts describe the real Widget, never a forwarding host.
final class _WidgetInterfaceParser {
  String _memberName(ExecutableElement member) =>
      member is MethodElement &&
          member.name == '-' &&
          member.formalParameters.isEmpty
      ? 'unary-'
      : member.name!;

  Map<String, ExecutableElement> _members(InterfaceType type) {
    final widget = type.allSupertypes.firstWhere(
      (t) =>
          identity(t.element) ==
          'package:flutter/src/widgets/framework.dart::Widget',
    );
    final supplied = <String>{};
    for (final base in [widget, ...widget.allSupertypes]) {
      supplied.addAll(base.element.methods.map((m) => 'method:${m.name}'));
      supplied.addAll(base.element.getters.map((m) => 'getter:${m.name}'));
      supplied.addAll(base.element.setters.map((m) => 'setter:${m.name}'));
    }
    final result = <String, ExecutableElement>{};
    for (final base in [type, ...type.allSupertypes]) {
      for (final (kind, members) in <(String, Iterable<ExecutableElement>)>[
        ('getter', base.element.getters),
        ('setter', base.element.setters),
        ('method', base.element.methods),
      ]) {
        for (final member in members) {
          if (member.isStatic || member.isPrivate) continue;
          final key = '$kind:${_memberName(member)}';
          if (supplied.contains(key)) continue;
          final resolved = switch (kind) {
            'getter' => type.lookUpGetter(member.name!, type.element.library),
            'setter' => type.lookUpSetter(member.name!, type.element.library),
            _ => type.lookUpMethod(_memberName(member), type.element.library),
          };
          if (resolved == null) {
            throw StateError(
              'Widget interface ${type.element.name}: Cannot resolve $key',
            );
          }
          result.putIfAbsent(key, () => resolved);
        }
      }
    }
    return result;
  }

  List<FlaxCodegenWidgetMember> parse(
    InterfaceType type,
    FlaxCodegenClassSelection selection,
  ) {
    final members = _members(type);
    final selected = <String, List<String>>{
      for (final name in selection.getters) 'getter:$name': [],
      for (final name in selection.setters) 'setter:$name': [],
      for (final entry in selection.methods.entries)
        if (type.element.getMethod(entry.key)?.isStatic != true)
          'method:${entry.key}': entry.value,
    };
    if (selection.constructors.isNotEmpty ||
        selection.instanceMethods.isNotEmpty ||
        selection.proxy != null && selection.proxy != 'implements') {
      throw StateError(
        'Widget interface ${type.element.name}: Only native getters, setters and methods may be selected',
      );
    }
    for (final key in {...members.keys, ...selected.keys}) {
      if (!members.containsKey(key) || !selected.containsKey(key)) {
        throw StateError(
          'Widget interface ${type.element.name}: Select every interface member; invalid or missing $key',
        );
      }
    }
    return [
      for (final key in members.keys.toList()..sort())
        _member(key, members[key]!, selected[key]!),
    ];
  }

  FlaxCodegenWidgetMember _member(
    String key,
    ExecutableElement member,
    List<String> selected,
  ) {
    final parameters = member.formalParameters.map((p) => p.name!).toList();
    if (key.startsWith('method:') &&
        selected.join(',') != parameters.join(',')) {
      throw StateError(
        'Widget interface ${member.enclosingElement?.name}: Select all parameters in declaration order: $key',
      );
    }
    return FlaxCodegenWidgetMember(
      kind: key.substring(0, key.indexOf(':')),
      name: _memberName(member),
      parameters: parameters,
    );
  }

  void validateProxyBase(InterfaceType contract, InterfaceType base) {
    ExecutableElement? resolve(InterfaceType type, ExecutableElement member) =>
        switch (member) {
          GetterElement() => type.lookUpGetter(member.name!, member.library),
          SetterElement() => type.lookUpSetter(member.name!, member.library),
          _ => type.lookUpMethod(member.name!, member.library),
        };
    for (final type in [contract, ...contract.allSupertypes]) {
      for (final member in <ExecutableElement>[
        ...type.element.getters,
        ...type.element.setters,
        ...type.element.methods,
      ]) {
        if (!member.isStatic &&
            member.isPrivate &&
            resolve(base, member) == null) {
          throw StateError(
            'Widget interface ${contract.element.name}: Cannot implement private member ${member.name}',
          );
        }
      }
    }
    final checked = <String>{};
    for (final type in [base, ...base.allSupertypes]) {
      for (final member in <ExecutableElement>[
        ...type.element.getters,
        ...type.element.setters,
        ...type.element.methods,
      ]) {
        if (member.isStatic ||
            member.isPrivate ||
            !checked.add('${member.runtimeType}:${member.name}')) {
          continue;
        }
        final required = resolve(contract, member);
        final supplied = resolve(base, member);
        if (required == null || supplied == null) continue;
        final build = member is MethodElement && member.name == 'build';
        final valid = contract.element.library.typeSystem.isSubtypeOf(
          build ? required.type : supplied.type,
          build ? supplied.type : required.type,
        );
        if (!valid) {
          throw StateError(
            'Widget interface ${contract.element.name}: Incompatible native Widget member ${member.name}',
          );
        }
      }
    }
  }

  void validateImplementation(
    InterfaceType actual,
    List<(InterfaceType, FlaxCodegenClassSelection)> contracts,
  ) {
    final implementation = _members(actual);
    for (final (contract, selection) in contracts) {
      if (selection.kind == 'widgetInterface') parse(contract, selection);
      for (final entry in _members(contract).entries) {
        final member = implementation[entry.key];
        if (member == null ||
            !actual.element.library.typeSystem.isSubtypeOf(
                  member.type,
                  entry.value.type,
                ) &&
                !member.formalParameters.any((p) => p.isCovariant)) {
          throw StateError(
            'Widget interface ${actual.element.name}: Conflicting interface signatures: ${entry.key}',
          );
        }
      }
    }
  }
}
