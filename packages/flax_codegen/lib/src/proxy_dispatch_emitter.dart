part of 'emitter.dart';

class _ProxyDispatch {
  _ProxyDispatch(this.name, this.owner, this.owners);

  final String name;
  final FlaxCodegenClassModel owner;
  final List<FlaxCodegenClassModel> owners;
  final operations = <String>[];
  String helper(String operation) =>
      '${name}_${operation.replaceAll(':', '_')}';
}

extension _ProxyEmission on FlaxCodegenBindingEmitter {
  void _findProxyDispatch(FlaxCodegenModuleModel module) {
    _proxyDispatch.clear();
    _classProxyDispatch.clear();
    final signatures = <(String, String), Map<String, FlaxCodegenClassModel>>{};
    void add(FlaxCodegenClassModel owner, String operation, Object payload) {
      final proxy = owner.proxy!;
      final key = (
        operation,
        jsonEncode([
          payload,
          proxy.hasSuperCallback(operation),
          proxy.mustCallSuperAccessors.contains(operation),
        ]),
      );
      (signatures[key] ??= {})[owner.id] = owner;
    }

    // Only fully closed member signatures may share a generic owner's body.
    for (final owner in module.classes.where(
      (c) => c.proxy?.kind == 'extends' && !c.proxy!.widgetInterface,
    )) {
      final proxy = owner.proxy!;
      for (final method in proxy.methods.where(
        (m) =>
            !m.deferredFactory &&
            // Object overrides can inherit covariance from the native class.
            m.operatorName != '==' &&
            m.name != 'noSuchMethod' &&
            m.typeParameters.isEmpty &&
            m.typeArguments.isEmpty &&
            _isClosedType(m.result) &&
            m.parameters.every((p) => _isClosedType(p.type)) &&
            !(owner.kind == 'widget' &&
                m.name == 'createState' &&
                m.result.kind == 'state'),
      )) {
        final concrete = owner.methods
            .where((m) => m.instance && m.name == method.name)
            .firstOrNull;
        if (concrete != null &&
            (!_isClosedType(concrete.result) ||
                concrete.parameters.any((p) => !_isClosedType(p.type)))) {
          continue;
        }
        add(owner, 'call:${method.name}', [
          FlaxCodegenManifestCodec.encodeMethod(method),
          FlaxCodegenManifestCodec.encodeMethod(concrete ?? method),
        ]);
      }
      for (final getter in proxy.getters.where((g) => _isClosedType(g.type))) {
        add(
          owner,
          'get:${getter.name}',
          FlaxCodegenManifestCodec.encodeGetter(getter),
        );
      }
      for (final setter in proxy.setters.where((s) => _isClosedType(s.type))) {
        add(
          owner,
          'set:${setter.name}',
          FlaxCodegenManifestCodec.encodeGetter(setter),
        );
      }
    }

    final groups = <String, _ProxyDispatch>{};
    for (final entry in signatures.entries.where((e) => e.value.length > 1)) {
      final participants = entry.value.values.toList()
        ..sort((a, b) => a.id.compareTo(b.id));
      final key = jsonEncode(participants.map((c) => c.id).toList());
      final group = groups.putIfAbsent(
        key,
        () => _ProxyDispatch(
          '_FlaxProxyDispatch${groups.length}',
          participants.first,
          participants,
        ),
      );
      group.operations.add(entry.key.$1);
    }
    final ranked = groups.values.toList()
      ..sort((a, b) {
        final savings = (b.operations.length * (b.owners.length - 1)).compareTo(
          a.operations.length * (a.owners.length - 1),
        );
        return savings == 0 ? a.name.compareTo(b.name) : savings;
      });
    for (final group in ranked) {
      // Bound interface metadata while keeping the largest repeated bodies shared.
      group.owners.removeWhere(
        (owner) => (_classProxyDispatch[owner.id]?.length ?? 0) >= 3,
      );
      if (group.owners.length < 2) continue;
      _proxyDispatch.add(group);
      for (final owner in group.owners) {
        (_classProxyDispatch[owner.id] ??= []).add(group);
      }
    }
  }

  void _writeProxy(
    StringBuffer output,
    FlaxCodegenClassModel source, {
    _ProxyDispatch? group,
  }) {
    final type = source.typeParameters.isEmpty
        ? source
        : _vmClass(source, _vmParameters(source.typeParameters, '_Owner'));
    _genericDartParameters.addAll(type.typeArguments);
    final proxy = type.proxy!;
    final ctor = _proxyConstructor(type);
    final signatureHelpers = StringBuffer();
    final groups = _classProxyDispatch[type.id] ?? const <_ProxyDispatch>[];
    final className = '_${type.name}Proxy';
    final contracts = StringBuffer();
    final functions = StringBuffer();
    var out = group == null ? output : contracts;
    final parameterNames = proxy.methods
        .expand((m) => m.parameters.map((p) => p.name))
        .toSet();
    String fresh(String name) {
      while (parameterNames.contains(name)) {
        name = '${name}_';
      }
      parameterNames.add(name);
      return name;
    }

    final receiver = fresh('_flaxReceiver');
    final member = fresh('_flaxMember');
    final access = group == null ? '' : '$receiver.';
    bool includes(String operation) =>
        group == null || group.operations.contains(operation);
    final needsSuperGuard =
        proxy.mustCallSuperAccessors.any(includes) ||
        proxy.methods.any(
          (method) =>
              includes('call:${method.name}') &&
              proxy.hasSuperMethod(method.name) &&
              method.mustCallSuper,
        );
    if (needsSuperGuard && group == null) {
      out.writeln('// Only bridge super-call bookkeeping is mutable.');
      out.writeln('// ignore: must_be_immutable');
    }
    if (group != null) {
      out.writeln('abstract interface class ${group.name} {');
      out.writeln('FlaxProxyPeer get _flaxPeer;');
      if (needsSuperGuard) {
        out.writeln('String? get _flaxActiveSuperMember;');
        out.writeln('set _flaxActiveSuperMember(String? value);');
        out.writeln('bool get _flaxCalledSuper;');
        out.writeln('set _flaxCalledSuper(bool value);');
      }
    } else {
      final mixins = [
        if (!proxy.widgetInterface &&
            (type.kind == 'widget' || _isWidgetObject(type)))
          'FlaxWidgetProxy',
      ];
      out.writeln(
        'final class $className${_dartStaticGenerics(type.typeParameters)} '
        '${proxy.widgetInterface ? 'extends ${_dartName('StatelessWidget')} with FlaxWidgetProxy implements' : proxy.kind} '
        '${_dartName(type.name)}${_typeArgs(type.typeArguments)}'
        '${mixins.isEmpty ? '' : ' with ${mixins.join(', ')}'}'
        '${groups.isEmpty ? '' : ' implements ${groups.map((g) => g.name).join(', ')}'} {',
      );
      if (proxy.callbacks.isEmpty) {
        out.writeln(
          '// This field keeps the actual JS subclass reachable from Dart.',
        );
        out.writeln('// ignore: unused_field');
      }
      out.writeln('final FlaxProxyPeer _flaxPeer;');
      if (needsSuperGuard) {
        out.writeln('String? _flaxActiveSuperMember;');
        out.writeln('bool _flaxCalledSuper = false;');
      }
    }
    String? slot(String operation, int index) {
      if (group != null) {
        final local = group.operations.indexOf(operation);
        return local < 0 ? null : member;
      }
      return '$index';
    }

    void emitSuperGuard(
      String member,
      FlaxCodegenTypeRef result,
      void Function() body,
    ) {
      // Retired void invocations are inert; an in-flight override still checks super.
      if (result.kind == 'void') {
        out.writeln('if (!${access}_flaxPeer.active) return;');
      }
      out.writeln(
        'final _flaxPreviousSuperMember = ${access}_flaxActiveSuperMember;',
      );
      out.writeln(
        'final _flaxPreviousCalledSuper = ${access}_flaxCalledSuper;',
      );
      out.writeln('${access}_flaxActiveSuperMember = ${_quote(member)};');
      out.writeln('${access}_flaxCalledSuper = false;');
      out.writeln('try {');
      body();
      out.writeln('} finally {');
      out.writeln(
        '${access}_flaxActiveSuperMember = _flaxPreviousSuperMember;',
      );
      out.writeln('${access}_flaxCalledSuper = _flaxPreviousCalledSuper;');
      out.writeln('}');
    }

    void emitPeerResult(FlaxCodegenTypeRef result, {bool generic = false}) {
      if (result.kind == 'void') return;
      final value = result.kind == 'future'
          ? _futureCallbackValue(
              '_flaxResult.\$2',
              result.item!,
              generic: generic,
            )
          : _callbackResultCast('_flaxResult.\$2', result, generic: generic);
      final nullable = result.kind == 'future' && result.nullable
          ? '_flaxResult.\$2 == null ? null : '
          : '';
      final annotation = result.kind == 'never'
          ? '${_dartDeclaredType(result, generic: generic)} '
          : '';
      out.writeln('final ${annotation}_flaxConvertedResult = $nullable$value;');
    }

    void emitRequiredSuperCheck(
      FlaxCodegenTypeRef result,
      String message, {
      bool generic = false,
      String? called,
      bool deferredContext = false,
    }) {
      called ??= '${access}_flaxCalledSuper';
      if (result.kind == 'future' || result.kind == 'futureOr') {
        final item = _dartDeclaredType(result.item!, generic: generic);
        final async = result.kind == 'futureOr'
            ? ' && _flaxConvertedResult is Future<$item>'
            : result.nullable
            ? ' && _flaxConvertedResult != null'
            : '';
        if (deferredContext) {
          // The direct-super field is restored on return; the context is local.
          out.writeln(
            'final _flaxCalledDirectSuper = ${access}_flaxCalledSuper;',
          );
          out.writeln(
            'if (!($called)$async) return _flaxConvertedResult.then<$item>((value) { if (!(_flaxCalledDirectSuper || _flaxContextCalledSuper)) throw StateError(${_quote(message)}); return value; });',
          );
        } else {
          out.writeln(
            'if (!($called)$async) return _flaxConvertedResult.then<$item>((_) => throw StateError(${_quote(message)}));',
          );
        }
      }
      out.writeln('if (!($called)) throw StateError(${_quote(message)});');
    }

    for (final constructor
        in group != null
            ? <FlaxCodegenConstructorModel>[]
            : proxy.kind == 'extends'
            ? _proxyConstructors(type).map(_runtimeConstructor)
            : [ctor]) {
      final fields = ['this._flaxPeer'];
      final parameters = _superParameters(constructor.parameters);
      if (parameters.isNotEmpty) fields.add(parameters);
      out.writeln(
        '$className${constructor.name.isEmpty ? '' : '.${constructor.name}'}(${fields.join(', ')})${proxy.kind == 'extends' && constructor.name.isNotEmpty ? ' : super.${constructor.name}()' : ''};',
      );
    }

    final ownerArguments = {
      for (final parameter in type.typeParameters)
        parameter.genericIdentity: FlaxCodegenTypeRef(
          'parameter',
          name: parameter.name,
          genericIdentity: parameter.genericIdentity,
        ),
    };
    _ProxyDispatch? shared(String operation) => group == null
        ? groups.where((g) => g.operations.contains(operation)).firstOrNull
        : null;
    if (group != null) out = functions;
    for (final (index, declaredMethod) in proxy.methods.indexed) {
      final memberIndex = slot('call:${declaredMethod.name}', index);
      if (memberIndex == null) continue;
      // Owner and method parameters keep their independent lexical identities.
      final method = declaredMethod.typeParameters.isEmpty
          ? declaredMethod
          : declaredMethod.specialize(ownerArguments);
      if (type.kind == 'widget' &&
          method.name == 'createState' &&
          method.result.kind == 'state') {
        out.writeln(
          '@override ${_dartDeclaredType(method.result)} createState() {',
        );
        out.writeln(
          'return flaxCreateWidgetState(_flaxPeer, $memberIndex, this, _${type.name}State.new, super.createState);',
        );
        out.writeln('}');
        out.writeln(
          '${_dartDeclaredType(method.result)} _flaxSuper_createState() => super.createState();',
        );
        continue;
      }
      final superBacked =
          (proxy.kind == 'extends' || proxy.widgetInterface) &&
          proxy.hasSuperMethod(method.name);
      final generic = method.typeParameters.isNotEmpty;
      final declarations = <String>[];
      final optional = <String>[];
      final named = <String>[];
      for (final parameter in method.parameters) {
        if (parameter.positional && parameter.required) {
          declarations.add(
            '${_dartInputType(parameter.type, generic: generic)} ${parameter.name}',
          );
        } else if (parameter.positional) {
          optional.add('Object? ${parameter.name} = _flaxOmitted');
        } else {
          named.add(
            parameter.required
                ? 'required ${_dartInputType(parameter.type, generic: generic)} ${parameter.name}'
                : 'Object? ${parameter.name} = _flaxOmitted',
          );
        }
      }
      if (optional.isNotEmpty) declarations.add('[${optional.join(', ')}]');
      if (named.isNotEmpty) declarations.add('{${named.join(', ')}}');
      final sharedMethod = shared('call:${method.name}');
      if (group == null) out.writeln('@override');
      if (superBacked && method.mustCallSuper) {
        // The analyzer cannot follow our checked lexical-super forwarding.
        out.writeln('// ignore: must_call_super');
      }
      out.writeln(
        '${_dartDeclaredType(method.result, generic: generic)} ${group != null
            ? group.helper('call:${method.name}')
            : method.operatorName == null
            ? method.name
            : 'operator ${method.operatorName == 'unary-' ? '-' : method.operatorName}'}${_dartGenerics(method.typeParameters)}(${[if (group != null) '${group.name} $receiver, int $member', ...declarations].join(', ')}) {',
      );
      final genericUse = method.typeParameters.isEmpty
          ? ''
          : '<${method.typeParameters.map((p) => p.name).join(', ')}>';
      final superTarget = 'super.${method.name}$genericUse';
      final concreteParameters =
          type.methods
              .where(
                (candidate) =>
                    candidate.instance && candidate.name == method.name,
              )
              .firstOrNull
              ?.parameters ??
          method.parameters;
      String superParameterType(FlaxCodegenParameterModel parameter) {
        final index = method.parameters.indexWhere(
          (p) => p.name == parameter.name,
        );
        final concrete = parameter.positional
            ? concreteParameters
                  .where((p) => p.positional)
                  .elementAtOrNull(
                    method.parameters
                        .take(index)
                        .where((p) => p.positional)
                        .length,
                  )
            : concreteParameters
                  .where((p) => !p.positional && p.name == parameter.name)
                  .firstOrNull;
        return _dartInputType(
          concrete?.type ?? parameter.type,
          generic: generic,
        );
      }

      String superArgument(FlaxCodegenParameterModel parameter) {
        final target = superParameterType(parameter);
        if (target == 'Object?' ||
            parameter.required &&
                target == _dartInputType(parameter.type, generic: generic)) {
          return parameter.name;
        }
        return '${parameter.name} as $target';
      }

      final positional = method.parameters.where((p) => p.positional).toList();
      final namedParameters = method.parameters
          .where((p) => !p.positional)
          .toList();
      void writeCall(
        int count,
        Set<String> omitted, {
        required bool directSuper,
      }) {
        final arguments = <String>[
          for (var i = 0; i < count; i++) superArgument(positional[i]),
          for (final parameter in namedParameters)
            if (!omitted.contains(parameter.name))
              '${parameter.name}: ${superArgument(parameter)}',
        ];
        var call = directSuper && method.operatorName != null
            ? _operatorExpression('super', method.operatorName!, arguments)
            : '$superTarget(${arguments.join(', ')})';
        if (namedParameters.where((p) => !p.required).length >=
            _applyOmissionThreshold) {
          final parameters = [
            for (final p in method.parameters)
              FlaxCodegenParameterModel(
                name: p.name,
                type: p.type,
                required: p.required,
                positional: p.positional,
                omitWhenAbsent: !p.required,
                defaultCode: p.defaultCode,
              ),
          ];
          call = _applyCall(
            superTarget,
            parameters,
            superArgument,
            (p) => '!identical(${p.name}, _flaxOmitted)',
          );
          if (method.result.kind != 'void') {
            call =
                '($call as ${_dartDeclaredType(method.result, generic: generic)})';
          }
        }
        out.writeln(
          method.result.kind == 'void' ? '$call; return;' : 'return $call;',
        );
      }

      final requiredCount = positional.where((p) => p.required).length;
      void emitDispatch({required bool directSuper}) {
        if (!directSuper) {
          final arguments = method.parameters
              .map((p) => '${p.positional ? '' : '${p.name}: '}${p.name}')
              .join(', ');
          final call =
              '${access}_flaxSuper_${method.name}$genericUse($arguments)';
          out.writeln(
            method.result.kind == 'void' ? '$call; return;' : 'return $call;',
          );
          return;
        }
        if (optional.isNotEmpty) {
          void emitPosition(int count) {
            if (count == positional.length) {
              writeCall(count, const {}, directSuper: directSuper);
              return;
            }
            out.writeln(
              'if (identical(${positional[count].name}, _flaxOmitted)) {',
            );
            writeCall(count, const {}, directSuper: directSuper);
            out.writeln('}');
            emitPosition(count + 1);
          }

          emitPosition(requiredCount);
          return;
        }
        if (namedParameters.where((p) => !p.required).length >=
            _applyOmissionThreshold) {
          writeCall(positional.length, const {}, directSuper: directSuper);
          return;
        }
        void emitNamed(int index, Set<String> omitted) {
          if (index == namedParameters.length) {
            writeCall(positional.length, omitted, directSuper: directSuper);
            return;
          }
          final parameter = namedParameters[index];
          if (parameter.required) {
            emitNamed(index + 1, omitted);
            return;
          }
          out.writeln('if (identical(${parameter.name}, _flaxOmitted)) {');
          emitNamed(index + 1, {...omitted, parameter.name});
          out.writeln('}');
          emitNamed(index + 1, omitted);
        }

        emitNamed(0, const {});
      }

      void emitPeerCall({bool checkRequiredSuper = false}) {
        if (generic) {
          final (signature, callbackHelpers) = _withVmFactory(const [], () {
            final actual = method.specialize({
              for (final p in method.typeParameters)
                p.genericIdentity: FlaxCodegenTypeRef(
                  'parameter',
                  name: p.name,
                  genericIdentity: p.genericIdentity,
                ),
            });
            final signature = _callbackBinding(
              FlaxCodegenTypeRef(
                'callback',
                parameters: actual.parameters,
                result: actual.result,
              ),
            );
            final callbackHelpers = StringBuffer();
            _usesVmCallbackResult |= _writeCallbackAdapters(
              callbackHelpers,
              _callbacks.entries.toList(),
            );
            return (signature, callbackHelpers);
          });
          final parameters = [...type.typeParameters, ...method.typeParameters];
          final helper = '_flaxProxySignature_${type.name}_${method.name}';
          // Session-cached callback metadata must not capture this receiver.
          signatureHelpers.writeln(
            'FlaxCallbackBinding $helper${_dartStaticGenerics(parameters)}(FlaxDartTypes types) {',
          );
          signatureHelpers.write(callbackHelpers);
          signatureHelpers.writeln('return $signature; }');
          out.writeln(
            'final _flaxSignature = _flaxPeer.active ? _flaxPeer.genericSignature($memberIndex, [${method.typeParameters.map((p) => p.name).join(',')}], $helper<${parameters.map((p) => p.name).join(',')}>) : null;',
          );
          if (superBacked) {
            if (method.mustCallSuper) {
              out.writeln('var _flaxContextCalledSuper = false;');
            }
            out.writeln(
              '${_dartDeclaredType(method.result, generic: true)} _flaxContextSuper(${declarations.join(', ')}) {',
            );
            if (method.mustCallSuper) {
              out.writeln('_flaxContextCalledSuper = true;');
            }
            emitDispatch(directSuper: false);
            out.writeln('}');
          }
        }
        out.writeln(
          'final _flaxResult = ${access}_flaxPeer.call($memberIndex, <Object?>[',
        );
        for (final parameter in method.parameters.where((p) => p.positional)) {
          final value = parameter.snapshot == null
              ? parameter.name
              : '_snapshot${parameter.snapshot}(${parameter.name})';
          out.writeln(
            '${parameter.required ? '' : 'if (!identical(${parameter.name}, _flaxOmitted)) '}$value,',
          );
        }
        out.writeln('], <String, Object?>{');
        for (final parameter in method.parameters.where((p) => !p.positional)) {
          final value = parameter.snapshot == null
              ? parameter.name
              : '_snapshot${parameter.snapshot}(${parameter.name})';
          out.writeln(
            '${parameter.required ? '' : 'if (!identical(${parameter.name}, _flaxOmitted)) '}${_quote(parameter.name)}: $value,',
          );
        }
        out.writeln(
          '}${generic ? ', signature: _flaxSignature${superBacked ? ', superCall: _flaxSignature == null ? null : _flaxContextSuper' : ''}' : ''});',
        );
        out.writeln('if (!_flaxResult.\$1) {');
        if (superBacked) {
          emitDispatch(directSuper: false);
        } else {
          out.writeln(
            "throw StateError('Missing proxy method: ${method.name}');",
          );
        }
        out.writeln('}');
        final result = method.result;
        final bottom = result.kind == 'never' && !result.nullable;
        if (!bottom) emitPeerResult(result, generic: generic);
        if (checkRequiredSuper) {
          emitRequiredSuperCheck(
            result,
            '${method.name} must call super.${method.name}()',
            generic: generic,
            called: generic && superBacked
                ? '_flaxCalledSuper || _flaxContextCalledSuper'
                : '${access}_flaxCalledSuper',
            deferredContext: generic && superBacked,
          );
        }
        out.writeln(
          bottom
              ? 'return ${_callbackResultCast('_flaxResult.\$2', result, generic: generic)};'
              : result.kind == 'void'
              ? 'return;'
              : 'return _flaxConvertedResult;',
        );
      }

      if (sharedMethod != null) {
        final arguments = method.parameters
            .map((p) => '${p.positional ? '' : '${p.name}: '}${p.name}')
            .join(', ');
        out.writeln(
          'return ${sharedMethod.helper('call:${method.name}')}(this, $memberIndex${arguments.isEmpty ? '' : ', $arguments'});',
        );
      } else {
        if (superBacked && method.mustCallSuper) {
          emitSuperGuard(
            method.name,
            method.result,
            () => emitPeerCall(checkRequiredSuper: true),
          );
        } else {
          emitPeerCall();
        }
      }
      out.writeln('}');
      if (superBacked) {
        if (group != null) {
          contracts.writeln(
            '${_dartDeclaredType(method.result, generic: generic)} _flaxSuper_${method.name}${_dartGenerics(method.typeParameters)}(${declarations.join(', ')});',
          );
        } else {
          out.writeln(
            '${_dartDeclaredType(method.result, generic: generic)} _flaxSuper_${method.name}${_dartGenerics(method.typeParameters)}(${declarations.join(', ')}) {',
          );
          if (method.mustCallSuper) {
            out.writeln(
              'if (_flaxActiveSuperMember == ${_quote(method.name)}) _flaxCalledSuper = true;',
            );
          }
          emitDispatch(directSuper: true);
          out.writeln('}');
        }
      }
    }
    for (final (index, getter) in proxy.getters.indexed) {
      final member = slot('get:${getter.name}', proxy.methods.length + index);
      if (member == null) continue;
      final fallback =
          proxy.kind == 'extends' && proxy.hasSuperGetter(getter.name);
      final operation = 'get:${getter.name}';
      final requiredSuper = proxy.mustCallSuperAccessors.contains(operation);
      final sharedGetter = shared(operation);
      if (sharedGetter != null) {
        if (requiredSuper) out.writeln('// ignore: must_call_super');
        out.writeln(
          '@override ${_dartDeclaredType(getter.type)} get ${getter.name} => ${sharedGetter.helper(operation)}(this, $member);',
        );
      } else {
        final fallbackRead = group == null
            ? 'super.${getter.name}'
            : '${access}_flaxSuperGet_${getter.name}';
        out.writeln(
          '${group == null ? '@override ' : ''}${_dartDeclaredType(getter.type)} ${group == null ? 'get ${getter.name}' : '${group.helper(operation)}(${group.name} $receiver, int $member)'} {',
        );
        void emitGetter() {
          out.writeln(
            '${fallback || getter.type.kind != 'void' ? 'final _flaxResult = ' : ''}${access}_flaxPeer.call($member, const [], const {});',
          );
          if (fallback) {
            out.writeln(
              getter.type.kind == 'void'
                  ? 'if (!_flaxResult.\$1) { $fallbackRead; return; }'
                  : 'if (!_flaxResult.\$1) return $fallbackRead;',
            );
          }
          final bottom = getter.type.kind == 'never' && !getter.type.nullable;
          if (!bottom) emitPeerResult(getter.type);
          if (requiredSuper) {
            emitRequiredSuperCheck(
              getter.type,
              '$operation must read super.${getter.name}',
            );
          }
          out.writeln(
            bottom
                ? 'return ${_callbackResultCast('_flaxResult.\$2', getter.type, generic: false)};'
                : getter.type.kind == 'void'
                ? 'return;'
                : 'return _flaxConvertedResult;',
          );
        }

        if (requiredSuper) {
          emitSuperGuard(operation, getter.type, emitGetter);
        } else {
          emitGetter();
        }
        out.writeln('}');
      }
      if (fallback) {
        if (group != null) {
          contracts.writeln(
            '${_dartDeclaredType(getter.type)} get _flaxSuperGet_${getter.name};',
          );
        } else {
          out.writeln(
            '${_dartDeclaredType(getter.type)} get _flaxSuperGet_${getter.name} {',
          );
          if (requiredSuper) {
            out.writeln(
              'if (_flaxActiveSuperMember == ${_quote(operation)}) _flaxCalledSuper = true;',
            );
          }
          out.writeln(
            '${getter.type.kind == 'void' ? '' : 'return '}super.${getter.name};',
          );
          out.writeln('}');
        }
      }
    }
    for (final (index, setter) in proxy.setters.indexed) {
      final member = slot(
        'set:${setter.name}',
        proxy.methods.length + proxy.getters.length + index,
      );
      if (member == null) continue;
      final fallback =
          proxy.kind == 'extends' && proxy.hasSuperSetter(setter.name);
      final operation = 'set:${setter.name}';
      final requiredSuper = proxy.mustCallSuperAccessors.contains(operation);
      final sharedSetter = shared(operation);
      if (sharedSetter != null) {
        if (requiredSuper) out.writeln('// ignore: must_call_super');
        out.writeln(
          '@override set ${setter.name}(${_dartInputType(setter.type)} value) => ${sharedSetter.helper(operation)}(this, $member, value);',
        );
      } else {
        final fallbackWrite = group == null
            ? 'super.${setter.name} = value'
            : '${access}_flaxSuperSet_${setter.name}(value)';
        out.writeln(
          '${group == null ? '@override set ${setter.name}(' : 'void ${group.helper(operation)}(${group.name} $receiver, int $member, '}${_dartInputType(setter.type)} value) {',
        );
        void emitSetter() {
          out.writeln(
            '${fallback ? 'final result = ' : ''}${access}_flaxPeer.call($member, [value], const {});',
          );
          if (fallback) {
            out.writeln('if (!result.\$1) { $fallbackWrite; return; }');
          }
          if (requiredSuper) {
            emitRequiredSuperCheck(
              const FlaxCodegenTypeRef('void'),
              '$operation must write super.${setter.name}',
            );
          }
        }

        if (requiredSuper) {
          emitSuperGuard(
            operation,
            const FlaxCodegenTypeRef('void'),
            emitSetter,
          );
        } else {
          emitSetter();
        }
        out.writeln('}');
      }
      if (fallback) {
        if (group != null) {
          contracts.writeln(
            'void _flaxSuperSet_${setter.name}(${_dartInputType(setter.type)} value);',
          );
        } else {
          out.writeln(
            'void _flaxSuperSet_${setter.name}(${_dartInputType(setter.type)} value) {',
          );
          if (requiredSuper) {
            out.writeln(
              'if (_flaxActiveSuperMember == ${_quote(operation)}) _flaxCalledSuper = true;',
            );
          }
          out.writeln('super.${setter.name} = value;');
          out.writeln('}');
        }
      }
    }
    if (group == null) {
      out.writeln('}');
      out.write(signatureHelpers);
    } else {
      contracts.writeln('}');
      output
        ..write(contracts)
        ..write(functions);
    }
  }
}
