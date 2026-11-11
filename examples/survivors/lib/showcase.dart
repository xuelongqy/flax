import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';

import 'flax_survivors.dart';

FlaxBindingModule createSurvivorsExampleBindings({
  FlaxJsRuntime Function() createRuntime = FlaxV8Engine.createRuntime,
}) => FlaxBindingModule(
  'Lumen Outpost playground',
  [
    FlaxWidgetBinding('flax.example/survivors#Game', const {
      '': [],
    }, (node) => _GameHost(node, createRuntime)),
  ],
  moduleId: 'flax.example/survivors',
  uiProtocol: flaxBindingVersion,
  requiredCapabilities: const [],
);

class _GameHost extends FlaxWidgetHost {
  _GameHost(super.node, this.createRuntime);
  final FlaxJsRuntime Function() createRuntime;
  final bundle = FlaxPrefixedAssetBundle(
    prefix: 'packages/flax_survivors/assets/flax',
  );

  @override
  FlaxSurvivorsView buildNative(Map<String, Object?> values) =>
      FlaxSurvivorsView(assetBundle: bundle, createRuntime: createRuntime);
}
