import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';

final widgetInterfacesSelection = {
  'Key': FlaxCodegenClassSelection({}, kind: 'object'),
  'ExtentContract': FlaxCodegenClassSelection(
    {},
    kind: 'widgetInterface',
    getters: ['extent'],
  ),
  'LabelledContract': FlaxCodegenClassSelection(
    {},
    kind: 'widgetInterface',
    getters: ['extent', 'label'],
  ),
  'ExtentTile': FlaxCodegenClassSelection(
    {
      '': ['key', 'extent', 'label', 'child'],
    },
    widgetInterfaces: ['LabelledContract'],
  ),
  'ExtentFrame': FlaxCodegenClassSelection({
    '': ['key', 'item', 'items'],
  }),
  'MetadataFrame': FlaxCodegenClassSelection({
    '': ['key', 'item'],
  }),
  'ExtentProbe': FlaxCodegenClassSelection(
    {},
    kind: 'object',
    staticGetters: ['native', 'plain', 'opaque', 'header'],
  ),
  'CallbackTile': FlaxCodegenClassSelection(
    {
      '': ['key', 'callback', 'callbacks'],
    },
    widgetInterfaces: ['ExtentContract'],
  ),
  'InterfaceBuilder': FlaxCodegenClassSelection({
    '': ['key', 'builder', 'discard'],
  }),
  'InterfaceListBuilder': FlaxCodegenClassSelection({
    '': ['key', 'builder'],
  }),
  'InterfaceNestedBuilder': FlaxCodegenClassSelection({
    '': ['key', 'builders'],
  }),
  'WidgetResultBuilder': FlaxCodegenClassSelection({
    '': ['key', 'builder', 'discard'],
  }),
  'InterfaceNullableBuilder': FlaxCodegenClassSelection({
    '': ['key', 'builder'],
  }),
  'InterfaceAsyncBuilder': FlaxCodegenClassSelection({
    '': ['key', 'builder'],
  }),
  'InterfaceFutureOrBuilder': FlaxCodegenClassSelection({
    '': ['key', 'builder'],
  }),
  'InterfaceStreamBuilder': FlaxCodegenClassSelection({
    '': ['key', 'builder'],
  }),
  'InterfaceRoute': FlaxCodegenClassSelection({
    '': ['builder'],
  }, kind: 'route'),
  'InterfacePage': FlaxCodegenClassSelection(
    {
      '': ['key', 'builder'],
    },
    kind: 'page',
    getters: ['key'],
    pageAdapter: FlaxCodegenPageAdapterModel(
      Directory.current.uri
          .resolve('test/fixtures/widget_interfaces.dart')
          .toString(),
      'adaptInterfacePage',
    ),
  ),
};
