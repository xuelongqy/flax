# flax_material_ui

Exports materialBindings, generated from the standalone material_ui TextButton,
TextField, Material, InkWell, progress, MaterialPageRoute, and MaterialPage APIs.
Register it alongside flutterBindings in FlaxBindingRegistry. Generated host types use
the public flax/bindings.dart extension and preserve Flutter Element matching.

The public Material library is `@flax/flutter/material`. It exports the safe primitive
constant `kToolbarHeight` directly and exposes the Dart-backed duration through
`getKTabScrollDuration()`, reusing Core's `Duration` object binding and identity. The
dynamic read remains lazy through the existing session; no Dart value is captured during
module import. See
[top-level values](../../docs/architecture/bindings.md#public-libraries-and-top-level-readonly-declarations).

Publication is disabled. See
[generation and supported parameters](../../docs/architecture/bindings.md) and
[UI semantics](../../docs/architecture/ui.md).

Install `flax_material_ui` in the Dart host and add `materialBindings` beside
`flutterBindings`. `@flax/material-ui` is the physical JavaScript implementation and
module-delivery package; application source and declaration-only consumers import the
public API from `@flax/flutter/material`:

```yaml
dependencies:
  flax_material_ui: <version>
```

```dart
final bindings = FlaxBindingRegistry([flutterBindings, materialBindings]);
```

Hosts that bundle the implementation directly keep `@flax/material-ui` at the matching
version. Applications that include it in `Flax.moduleAssets` can let business JavaScript
install only the `@flax/flutter` declarations; add `FlaxMaterialPlugin` to each
`FlaxView` / `FlaxSession` that should inject `@flax/flutter/material`. See
[package boundaries](../../docs/architecture/packaging.md#application-module-inventory-and-host-delivery).

Navigation now includes explicit sessions, shared or nested Flutter Navigators,
Route-owned callbacks, copied data, and UI Future delivery. See the
[navigation contract](../../docs/architecture/navigation.md) for the selected subset and
lifecycle rules.

The explicit MaterialPage adapter extends FlaxPageRoute and uses the upstream public
MaterialRouteTransitionMixin. Current Route.settings supply the child and configuration;
Flutter owns matching and transitions. The adapter's implementation stays in this
package and imports only the public shared Flax extension.

TextField selects text events and basic input configuration, borrowing the core
TextEditingController. TextInputAction is a generated enum. See
[text input](../../docs/architecture/text-input.md) for exact parameters and IME limits.

Generated Theme, ThemeData, TextTheme, ColorScheme and InputDecoration support host
queries and local theme overrides. TextField accepts style and decoration bindings. See
[styles and themes](../../docs/architecture/styles.md); values and dependencies use the
existing Dart object and Widget paths.

Generated MaterialType, Material, InkWell and LinearProgressIndicator reuse Core Color,
TextStyle, BorderRadius, Clip, keys and callback conversion. The
[owning selection](bindings/config.yaml) defines the exposed constructor parameters;
unselected parameters retain their upstream defaults. Material supplies the native ink
surface. Text style animation retains Flutter's `TextStyle.inherit` constraints.

The [combined UI tests](test/ui/binding_slice_test.dart) exercise Core Spacer geometry,
tap/long-press/hover/highlight callbacks, reactive progress, inherited and explicit
styles, semantics, unmounting and session closure. Indeterminate progress uses bounded
frame pumps. The [strict TypeScript fixture](js/test/types.ts) verifies public Core
value types and rejects incompatible enum, callback, child and scalar inputs.

Material.shape and InkWell.customBorder reuse Core ShapeBorder references;
InkWell.mouseCursor accepts a Core MouseCursor. Material retains its native
shape/borderRadius mutual exclusion. ButtonStyle construction, getters and copyWith also
select shape, mouseCursor and visualDensity. Shape and cursor remain typed state
properties, resolved by Flutter with concrete-use validation. Only OutlinedBorder
subtypes are button shapes; an existing Border can still be used by Material or
BoxDecoration.

VisualDensity belongs to this package's material_ui declaration. Its constructor,
getters and copyWith select horizontal/vertical, plus standard/comfortable/compact
constants. The [shared-object tests](test/ui/shared_objects_test.dart) compare shape,
clipping and density with native controls and exercise cursors, state changes, scrolling
and callback retirement. The [strict TS cases](js/test/shared_objects.types.ts) check
inheritance, nullable/default arguments, provider limits and invalid state-property
types. See [styles](../../docs/architecture/styles.md#shapes-cursors-and-density).

Generated Scaffold and AppBar support complete page shells. AppBar arguments are fixed;
bind the containing Scaffold.appBar for dynamic configuration. Its child Text/Widget
bindings remain local. See [page shells](../../docs/architecture/widget-interfaces.md).

Generated MaterialApp selects home, title and basic theme configuration for JS-owned
application roots. See
[standalone applications](../../docs/architecture/applications.md).

Generated showDialog calls native Flutter directly; install a stable
FlaxNavigatorObserver on its target Navigator. AlertDialog supplies title, content,
actions and scrolling. MaterialApp now selects navigatorObservers. See
[dialogs and Route ownership](../../docs/architecture/functions.md).

RefreshIndicator uses the generated reverse direction: its JavaScript `onRefresh`
returns a Promise, and Flutter receives the corresponding Future without a component
specific adapter.
