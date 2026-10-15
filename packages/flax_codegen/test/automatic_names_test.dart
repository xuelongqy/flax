import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    root = root.parent;
  }
  final uri = Uri.file(
    p.join(
      root.path,
      'packages/flax_codegen/test/fixtures/bindability/public_names.dart',
    ),
  ).toString();

  test('automatic names match explicit selections and compile', () async {
    final explicit = FlaxCodegenBindingConfig.parseStrict(
      '''
format: 2
name: public_names
library: $uri
jsPackage: '@example/public-names'
dartOutput: unused.dart
tsOutput: unused.ts
types: [Names_enum]
'''
      r'''
classes:
  Base_names:
    kind: object
    constructors: {'': []}
    getters: [inherited_value]
  Counter_names:
    kind: object
    constructors: {'': [initial_value, $bonus, arguments], from_value: [initial_value]}
    getters: [total_count, $value, arguments, inherited_value]
    setters: [total_count, $value, arguments]
    instanceMethods: {add_value: [step_value, $bonus], eval: [arguments], privateParameter: [_value], invalidParameter: [arguments]}
    staticGetters: [shared_count]
    staticSetters: [shared_count]
    methods: {add$value: [step_value]}
  Proxy_names:
    kind: object
    proxy: extends
    constructors: {'': []}
    getters: [arguments]
    instanceMethods: {eval: [arguments], privateParameter: [_value]}
functions:
  under_score_function: {parameters: [under_score_value, $bonus]}
  $echo: {parameters: [dollar$value]}
  named_arguments: {parameters: [arguments]}
topLevel:
  getters: [shared_value]
  setters: [shared_value]
extensions:
  String_names:
    getters: [text_length, arguments]
    methods: {repeat_value: [repeat_count, $separator], eval: [arguments]}
    staticGetters: [total_count]
    staticSetters: [total_count]
    staticMethods: {add$value: [step_value], let: [arguments]}
  $Names:
    methods: {$echo: [$value]}
''',
    );
    final parser = FlaxCodegenBindingParser(root.path);
    addTearDown(parser.dispose);
    final proposal = await parser.proposeLibrary(
      FlaxCodegenBindingConfig(
        explicit.name,
        uri,
        explicit.jsPackage,
        explicit.dartOutput,
        explicit.tsOutput,
        const {},
      ),
    );
    final actual = proposal.config;
    final counter = actual.classes['Counter_names']!;
    final expected = explicit.classes['Counter_names']!;
    expect(counter.constructors, expected.constructors);
    expect(counter.getters.toSet(), expected.getters.toSet());
    expect(counter.setters.toSet(), expected.setters.toSet());
    expect(counter.instanceMethods, expected.instanceMethods);
    expect(counter.staticGetters, expected.staticGetters);
    expect(counter.staticSetters, expected.staticSetters);
    expect(counter.methods, expected.methods);
    final proxy = actual.classes['Proxy_names']!;
    expect(proxy.proxy, 'extends');
    expect(
      proxy.instanceMethods,
      explicit.classes['Proxy_names']!.instanceMethods,
    );
    expect(actual.functions.keys.toSet(), explicit.functions.keys.toSet());
    for (final name in explicit.functions.keys) {
      expect(
        actual.functions[name]!.parameters,
        explicit.functions[name]!.parameters,
      );
    }
    expect(actual.topLevel!.getters, explicit.topLevel!.getters);
    expect(actual.topLevel!.setters, explicit.topLevel!.setters);
    expect(actual.extensions.keys.toSet(), explicit.extensions.keys.toSet());
    final autoModule = await parser.parse(actual);
    final explicitParser = FlaxCodegenBindingParser(root.path);
    addTearDown(explicitParser.dispose);
    final explicitModule = await explicitParser.parse(explicit);
    for (final extension in autoModule.extensions) {
      final expected = explicitModule.extensions.singleWhere(
        (value) => value.name == extension.name,
      );
      expect(
        extension.members.map((m) => m.exportName).toSet(),
        expected.members.map((m) => m.exportName).toSet(),
      );
      for (final member in extension.members) {
        expect(
          member.call.parameters.map((p) => p.name),
          expected.members
              .singleWhere((m) => m.id == member.id)
              .call
              .parameters
              .map((p) => p.name),
        );
      }
    }
    expect(
      proposal.skips.any(
        (s) =>
            s.target == 'Counter_names.invalidParameter.arguments' &&
            s.code == 'required_parameter_name',
      ),
      isFalse,
    );
    expect(
      proposal.skips.any(
        (s) =>
            s.target == 'Proxy_names.wildcard._' &&
            s.code == 'required_parameter_name',
      ),
      isTrue,
    );
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([autoModule]),
      autoModule,
      dartTestSource: r'''
void main() {
  test('generated names preserve arguments and extension state', () {
    expect(_function_under_score_function({'under_score_value': 2, r'$bonus': 3}), 5);
    expect(_function_$echo({r'dollar$value': 7}), 7);
    expect(_function_named_arguments({'arguments': 5}), 5);
    final counter = _createCounter_names('', {'initial_value': 1, r'$bonus': 2, 'arguments': 3});
    expect(_Counter_names_arguments(counter), 6);
    _Counter_names_set_arguments(counter, 4);
    expect(_Counter_names_eval(counter, {'arguments': 2}), 6);
    expect(_Counter_names_privateParameter(counter, {'_value': 7}), 7);
    expect(_extension_String_names_getter_text_length({'receiver': 'abc'}), 3);
    expect(_extension_String_names_getter_arguments({'receiver': 'abc'}), 3);
    expect(_extension_String_names_method_eval({'receiver': 'abc', 'arguments': 2}), 5);
    expect(_extension_String_names_staticMethod_let({'arguments': 5}), 5);
    expect(_extension_String_names_method_repeat_value({'receiver': 'a', 'repeat_count': 2, r'$separator': ':'}), 'a:a');
    expect(_extension_$Names_method_$echo({'receiver': 'a', r'$value': 'b'}), 'ab');
    _extension_String_names_staticSetter_total_count({'value': 3});
    expect(_extension_String_names_staticMethod_add$value({'step_value': 2}), 5);
    expect(_extension_String_names_staticGetter_total_count({}), 5);
  });
}
''',
      consumerSource: r'''
import { Counter_names, Names_enum, String_names, $Names, $echo, under_score_function, named_arguments, getShared_value, setShared_value } from './plugin.js';
const enumName: string = Names_enum.function.name;
const enumIndex: number = Names_enum.arguments.index;
const counter = Counter_names(1, {$bonus: 2, arguments: 3});
counter.total_count = 3;
counter.$value = 4;
counter.arguments = 4;
const reserved: number = counter.eval({arguments: 2});
const privateParameter: number = counter.privateParameter(7);
const count: number = counter.add_value(2, {$bonus: 1});
const inherited: number = counter.inherited_value;
Counter_names.from_value(2);
Counter_names.setShared_count(3);
Counter_names.add$value(1);
const text: string = String_names('a').repeat_value(2, {$separator: ':'});
const length: number = String_names('a').arguments;
const extensionReserved: number = String_names('a').eval({arguments: 3});
const staticExtensionReserved: number = String_names.let({arguments: 5});
String_names.setTotal_count(3);
String_names.add$value(1);
const echo: string = $Names('a').$echo('b');
const value: number = $echo(under_score_function(1, {$bonus: 2}));
const namedReserved: number = named_arguments({arguments: 5});
setShared_value(getShared_value());
// @ts-expect-error private Dart members remain inaccessible
counter._privateMethod();
// @ts-expect-error required argument types remain checked
counter.add_value('bad');
// @ts-expect-error a required named parameter remains required
named_arguments({});
// @ts-expect-error class namespace exports still require a legal binding name
Counter_names.function;
''',
    );
  });
}
