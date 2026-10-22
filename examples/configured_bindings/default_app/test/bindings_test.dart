import 'package:configured_default_app/cart.dart';
import 'package:configured_default_app/flax_bindings.dart';
import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('default plugin invokes generated app bindings', () {
    expect(appPlugin.id, 'binding:app.configured.default.app/app');
    expect(appPlugin.jsModules, {'@flax/app/app'});
    expect(appPlugin.bindingModules, [appBindings]);
    final functions = appBindings.functions;
    final add = functions.singleWhere((entry) => entry.id.endsWith(':addItem'));
    final read = functions.singleWhere(
      (entry) => entry.id.endsWith(':cartQuantity'),
    );
    final before = read.invoke({}) as int;
    expect(add.invoke({}), before + 1);
    expect(read.invoke({}), cartQuantity());
    expect(appPlugin, isA<FlaxPlugin>());
    expect(adminPlugin.jsModules, {'@flax/app/admin'});
    expect(adminPlugin.bindingModules, [adminBindings]);
    expect(functions.any((entry) => entry.id.endsWith(':resetCart')), isFalse);
    expect(adminBindings.functions.single.invoke({}), 1);
    expect(read.invoke({}), 1);
  });
}
