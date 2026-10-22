# flax_annotations

Pure Dart annotations for Flax binding selection. This package has no runtime, Flutter,
analyzer or build_runner dependency. Applications import it as a normal Dart dependency;
flax_codegen remains a development dependency.

```dart
import 'package:flax_annotations/flax_annotations.dart';

@FlaxExport() // scope: 'app'
class Cart {
  int quantity = 1;

  @FlaxIgnore()
  String get debugLabel => 'Dart only';
}
```

No scope YAML is needed for a single app binding. Keep package-level metadata with a
stable bindingNamespace, then run dart run flax_codegen generate. The default app
selection scans this package's lib and writes conventional Dart/TS outputs, a public
Dart export library and a shared manifest. It also exports appPlugin for explicit
FlaxView injection. The optional build_runner entry shares these defaults.

Add a format-2 scope YAML only to change defaults: sources can restrict discovery, and
name/output fields can select separate scopes or directories. Use scope: 'shop' for a
configured shop scope. If any scope YAML exists, app must be included explicitly when
used; no implicit app is appended to a multi-scope configuration.

Legacy library configurations retain their original selection rules; annotations: true
still enables annotation discovery through their public entry. See the
[host integration guide](../../docs/guides/host-bindings.md).

FlaxExport does not select top-level variables, individual members or parameters.
FlaxIgnore does not remove parameters or enum values. The CLI reports these misplaced
annotations at their Dart source location.
