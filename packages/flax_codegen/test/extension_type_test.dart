import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  test('Flutter extension types use representation conversion in both generation modes', () async {
    final root = p.normalize(p.join(Directory.current.path, '../..'));
    final source = FlaxCodegenBindingParser(root);
    addTearDown(source.dispose);
    final coreConfig = FlaxCodegenBindingConfig.read(
      p.join(root, 'packages/flax/bindings/config.yaml'),
    );
    final stateConfig = FlaxCodegenBindingConfig(
      'components',
      'package:flutter/widgets.dart',
      '@test/extension-state',
      'unused.dart',
      'unused.ts',
      const {
        'State': FlaxCodegenClassSelection({}, kind: 'state'),
        'StatefulWidget': FlaxCodegenClassSelection({}, kind: 'object'),
      },
    );
    await source.prepare([coreConfig, stateConfig]);
    FlaxCodegenModuleModel provider(
      FlaxCodegenModuleModel parsed,
      String id, {
      bool state = false,
    }) => FlaxCodegenModuleModel(
      name: parsed.name,
      moduleId: id,
      library: parsed.library,
      jsPackage: state ? '@test/extension-state' : parsed.jsPackage,
      dartOutput: parsed.dartOutput,
      tsOutput: parsed.tsOutput,
      classes: parsed.classes,
      types: parsed.types,
      typeLibraries: parsed.typeLibraries,
      functions: parsed.functions,
      extensions: parsed.extensions,
      snapshots: parsed.snapshots,
      typedefs: parsed.typedefs,
      topLevel: parsed.topLevel,
      publicLibraries: state ? const [] : parsed.publicLibraries,
      requiredCapabilities: parsed.requiredCapabilities,
      internalTypeNames: parsed.internalTypeNames,
      stateVariants: parsed.stateVariants,
    );
    final core = provider(await source.parse(coreConfig), 'flax.core/flutter');
    final states = provider(
      await source.parse(stateConfig),
      'flax.core/components',
      state: true,
    );
    final parser = FlaxCodegenBindingParser(root)
      ..prepareModules([core, states]);
    addTearDown(parser.dispose);
    final seed = FlaxCodegenBindingConfig(
      'extension_types',
      Uri.file(p.join(root, 'packages/flax/test/fixtures/extension_types.dart'))
          .toString(),
      '@test/extension-types',
      'unused.dart',
      'unused.ts',
      const {},
    );
    final proposal = await parser.proposeLibrary(seed);
    const names = [
      'WidgetBox',
      'MaybeWidget',
      'MaybeCount',
      'ContextBox',
      'StateBox',
      'PreferredBox',
      'GenericBox',
      'WidgetGroup',
      'WidgetInfo',
      'FutureWidget',
      'WidgetStream',
      'WidgetCallback',
      'ReflectiveBox',
      'RouteBox',
      'PageBox',
      'PageFutureCallback',
    ];
    expect(proposal.config.types, containsAll(names));
    expect(
      proposal.skips
          .where((skip) => names.contains(skip.target))
          .map((skip) => skip.code),
      everyElement('no_members'),
    );
    final automatic = await parser.parse(proposal.config);
    for (final (name, parameters) in [
      ('unownedPageBox', <String>[]),
      ('routeBoxInstalled', ['value']),
      ('pageBoxName', ['value']),
    ]) {
      expect(proposal.config.functions, contains(name));
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          seed.name,
          seed.library,
          seed.jsPackage,
          seed.dartOutput,
          seed.tsOutput,
          const {},
          functions: {name: FlaxCodegenFunctionSelection(parameters)},
        ),
      );
      expect(module.functions.single.call.parameters.length, parameters.length);
    }
    final explicit = await parser.parse(
      FlaxCodegenBindingConfig(
        seed.name,
        seed.library,
        seed.jsPackage,
        seed.dartOutput,
        seed.tsOutput,
        const {},
        types: names,
        functions: proposal.config.functions,
      ),
    );
    for (final module in [automatic, explicit]) {
      for (final function in module.functions) {
        for (final type in [
          function.call.result,
          ...function.call.parameters.map((parameter) => parameter.type),
        ]) {
          final encoded = FlaxCodegenManifestCodec.encodeTypeRef(type);
          final diagnostics = FlaxCodegenManifestDiagnostics(
            'extension-types.json',
          );
          final restored = FlaxCodegenManifestCodec.decodeTypeRef(
            encoded,
            diagnostics,
            r'$/type',
          )!;
          expect(diagnostics.items, isEmpty);
          expect(FlaxCodegenManifestCodec.encodeTypeRef(restored), encoded);
        }
      }
    }
    expect(
      FlaxCodegenManifestCodec.encodeModule(automatic)['functions'],
      FlaxCodegenManifestCodec.encodeModule(explicit)['functions'],
    );
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([core, states, explicit]),
      explicit,
      consumerSource: '''
import {
  echoWidgetBox, echoContextBox, echoStateBox, echoPreferredBox,
  echoMaybeWidget, echoMaybeCount,
  optionalWidgetBox, echoWidgetGroup, echoWidgetInfo, echoFutureWidget,
  echoWidgetStream, widgetEvents, collectWidgetEvents, buildWidgetBox, keepWidgetCallback, echoGenericWidgetBox,
} from './plugin.js';
import type { Widget } from '@flax/core/bindings';
import type { BuildContext, PreferredSizeWidget } from '@flax/flutter/widgets';
type State = Parameters<typeof echoStateBox>[0];
function check(widget: Widget, context: BuildContext, state: State,
  preferred: PreferredSizeWidget) {
  const child: Widget = echoWidgetBox(widget);
  const empty: Widget | null = echoMaybeWidget(null);
  const number: number | null = echoMaybeCount(null);
  const same: BuildContext = echoContextBox(context);
  const nativeState: State = echoStateBox(state);
  const sized: PreferredSizeWidget = echoPreferredBox(preferred);
  optionalWidgetBox();
  optionalWidgetBox({value: null});
  optionalWidgetBox({value: undefined});
  echoWidgetGroup([widget, null]);
  echoWidgetInfo({child: widget, context});
  echoFutureWidget(Promise.resolve(widget));
  echoWidgetStream(widgetEvents(widget));
  collectWidgetEvents(echoWidgetStream(widgetEvents(widget)));
  const built: Widget = buildWidgetBox(value => {
    const same: BuildContext = value;
    return widget;
  }, context);
  keepWidgetCallback(() => widget)(context);
  echoGenericWidgetBox(widget);
  // @ts-expect-error extension types retain their representation's input type
  echoWidgetBox(1);
  // @ts-expect-error nonnullable representations reject null
  echoContextBox(null);
  // @ts-expect-error synchronous Widget callbacks cannot return a Promise
  buildWidgetBox(async () => widget, context);
  return {child, same, nativeState, sized, built};
}
void check;
''',
    );
  }, timeout: const Timeout(Duration(minutes: 3)));
}
