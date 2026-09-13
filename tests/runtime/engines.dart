// This fixture is copied into an independent consumer with both engine dependencies.
// ignore_for_file: depend_on_referenced_packages

import 'dart:io';

import 'package:flax/runtime.dart';

// __FLAX_ENGINE_IMPORTS__

void check(bool result, String message) {
  if (!result) throw StateError(message);
}

void main() {
  final factories = <String, FlaxJsRuntime Function()>{
    // __FLAX_ENGINE_FACTORIES__
  };
  check(factories.length >= 2, 'At least two engines are required');
  for (var i = 0; i < 20; i++) {
    for (final leftFactory in factories.entries) {
      for (final rightFactory in factories.entries) {
        final left = leftFactory.value();
        final right = rightFactory.value();
        final object = left.evaluate('({value: 42})') as FlaxJsObject;
        var rejected = false;
        final global = right.evaluate('globalThis') as FlaxJsObject;
        try {
          global.setProperty('foreign', object);
        } on ArgumentError {
          rejected = true;
        }
        check(rejected, 'A foreign runtime reference was accepted');
        left.registerHostFunction(
          'otherRuntime',
          (_, args) => right.evaluate('21 * 2'),
        );
        check(
          (left.evaluate('otherRuntime()') as FlaxJsNumber).value == 42,
          'Nested runtime invocation failed',
        );
        global.release();
        object.release();
        if (i.isEven) {
          left.dispose();
          check(
            (right.evaluate('1 + 2') as FlaxJsNumber).value == 3,
            '${rightFactory.key} stopped with ${leftFactory.key}',
          );
          right.dispose();
        } else {
          right.dispose();
          check(
            (left.evaluate('1 + 2') as FlaxJsNumber).value == 3,
            '${leftFactory.key} stopped with ${rightFactory.key}',
          );
          left.dispose();
        }
      }
    }
  }
  stdout.writeln(
    'All engines coexist, reject foreign objects, reenter and recreate.',
  );
}
