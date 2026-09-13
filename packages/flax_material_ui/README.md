# flax_material_ui

Exports materialBindings, generated from the standalone material_ui TextButton,
TextField, MaterialPageRoute, and MaterialPage APIs. Register it alongside
flutterBindings in FlaxBindingRegistry. Generated host types use the public
flax/bindings.dart extension and preserve Flutter Element matching.

Publication is disabled. See
[generation and supported parameters](../../docs/architecture/bindings.md) and
[UI semantics](../../docs/architecture/ui.md).

Install `flax_material_ui` and `@flax/material-ui` at the same exact version, then add
`materialBindings` beside `flutterBindings`:

```yaml
dependencies:
  flax_material_ui: <version>
```

```dart
final bindings = FlaxBindingRegistry([flutterBindings, materialBindings]);
```

```sh
pnpm add @flax/core@<core-version> @flax/material-ui@<material-version>
```

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
