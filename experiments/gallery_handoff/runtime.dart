// ignore_for_file: depend_on_referenced_packages, implementation_imports

import 'package:flax/runtime.dart';
import 'package:flax_test/src/runtime_tracker.dart';
import 'package:flutter/foundation.dart';

/// Experiment-only adoption adapter. Normal Session validation and hosts still run.
class GalleryRuntime extends FlaxTestRuntimeTracker {
  GalleryRuntime(
    super.inner, {
    required this.preloaded,
    required this.sources,
    required this.bootstrap,
    required this.inventory,
    required this.business,
    this.pinnedSources,
  });
  final bool preloaded;
  final Map<String, Uint8List> sources;
  final Map<String, FlaxJsSource>? pinnedSources;
  final String bootstrap, inventory, business;
  int skippedSources = 0, inventoryChecks = 0, compareUs = 0;
  int proxyCalls = 0;
  int typePartsCalls = 0, typePartsUs = 0;
  @override
  List<Object?> dartTypeParts(Type type) {
    final watch = Stopwatch()..start();
    typePartsCalls++;
    try {
      return super.dartTypeParts(type);
    } finally {
      typePartsUs += watch.elapsedMicroseconds;
    }
  }

  bool _registryClaimed = false;
  @override
  FlaxJsValue getGlobal(String name) {
    // Transfer this pinned registry to Session's one-time ownership claim.
    if (preloaded && name == '__flaxModules' && !_registryClaimed) {
      _registryClaimed = true;
      return const FlaxJsUndefined();
    }
    return super.getGlobal(name);
  }

  @override
  FlaxJsValue evaluateSource(FlaxJsSource source) {
    final expected = sources[source.sourceUrl];
    final pinned = pinnedSources;
    if (!preloaded || (expected == null && pinned?[source.sourceUrl] == null)) {
      return super.evaluateSource(source);
    }
    final watch = Stopwatch()..start();
    final same = pinned != null
        ? identical(pinned[source.sourceUrl], source)
        : listEquals(expected, source.bytes);
    compareUs += watch.elapsedMicroseconds;
    if (!same) {
      throw StateError('Changed preloaded module: ${source.sourceUrl}');
    }
    skippedSources++;
    if (source.sourceUrl == 'flax:base') {
      return super.evaluate(
        'globalThis.__galleryBaseInstall(globalThis, __flaxBaseCall)',
        sourceUrl: 'gallery:activate-base',
      );
    }
    return source.sourceUrl == bootstrap
        ? super.evaluate(
            'globalThis.__flaxModules',
            sourceUrl: 'gallery:adopt-registry',
          )
        : const FlaxJsUndefined();
  }

  @override
  FlaxJsValue evaluate(String source, {String sourceUrl = 'flax:eval'}) {
    if (preloaded && sourceUrl == 'flax:module-inventory') {
      if (source != inventory) throw StateError('Changed preloaded inventory');
      inventoryChecks++;
      return const FlaxJsUndefined();
    }
    if (preloaded && sourceUrl == 'flax:embedded/aggregate') {
      if (source != business) throw StateError('Changed preloaded application');
      return super.evaluate(
        'globalThis.__galleryActivate()',
        sourceUrl: sourceUrl,
      );
    }
    return super.evaluate(source, sourceUrl: sourceUrl);
  }

  @override
  FlaxJsValue? invokeProxyMember(
    FlaxJsObject receiver,
    int member,
    List<FlaxJsValue> arguments,
  ) {
    proxyCalls++;
    return super.invokeProxyMember(receiver, member, arguments);
  }
}
