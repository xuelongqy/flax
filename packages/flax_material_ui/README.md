# flax_material_ui

Owns generated bindings for the supported public `material_ui` library. Automatic
selection covers its public declarations, retaining explicit skip reasons for
unsupported signatures. Widget interfaces, existing reactive rendering adapters and
dialog lifecycle metadata remain configured. Generated types use the shared
`flax/bindings.dart` conversion and proxy mechanisms. `Brightness` and `TextInputAction`
remain convenience exports of their Core providers, without new binding identities.

Core no longer generates Flutter Material or Cupertino bindings. Import this package's
JS API from `@flax/material-ui`, and install `FlaxMaterialPlugin` in the host. The old
`@flax/flutter/material` entry is removed; it is not an alias for these Dart classes.

The public Material library is `@flax/material-ui`. It exports the safe primitive
constant `kToolbarHeight` directly and exposes the Dart-backed duration through
`getKTabScrollDuration()`, reusing Core's `Duration` object binding and identity. The
dynamic read remains lazy through the existing session; no Dart value is captured during
module import. See
[top-level values](../../docs/architecture/bindings.md#public-libraries-and-top-level-readonly-declarations).

Publication is disabled. See
[generation and supported parameters](../../docs/architecture/bindings.md) and
[UI semantics](../../docs/architecture/ui.md).

Install `flax_material_ui` in the Dart host and add `materialBindings` beside
`flutterBindings`. `@flax/material-ui-runtime` is the physical JavaScript implementation
and module-delivery package. Application source and declaration-only consumers import
the public API from `@flax/material-ui`:

```yaml
dependencies:
  flax_material_ui: <version>
```

```dart
final bindings = FlaxBindingRegistry([flutterBindings, materialBindings]);
```

Hosts that bundle the implementation directly keep `@flax/material-ui-runtime` at the
matching version. Applications that include it in `Flax.moduleAssets` can let business
JavaScript install only the `@flax/material-ui` declarations; add `FlaxMaterialPlugin`
to each `FlaxView` / `FlaxSession` that should inject `@flax/material-ui`. See
[package boundaries](../../docs/architecture/packaging.md#application-module-inventory-and-host-delivery).

Binding selection follows the shared four rules: generate the configured `material_ui`
source, reuse Core and declared providers, generate external types only through an
owner-local opt-in, otherwise skip the affected signature. The package declares a direct
Dart dependency on `flax_cupertino_ui`. Its public types package depends on
`@flax/cupertino-ui`; its source package depends on both `@flax/cupertino-ui` and
`@flax/cupertino-ui-runtime`. Types declarations alone are insufficient for provider
reuse. Generated Dart dependency imports use the provider Manifest's
`modules[].dartLibrary` package URI, which may point into generated `lib/src`; the
provider's main Dart entry point need not export that module. JS delivery follows the
declared runtime dependency without inlining its implementation. Binding wiring does not
activate host-capability plugins.

Intl formatters are not exposed by this binding package. Applications use
`GlobalMaterialLocalizations.delegate` or `.delegates`; Dart loads concrete translations
and constructs their formatters internally. The public localization queries and base
interfaces remain bound. The formatter-taking `GlobalMaterialLocalizations` constructor
and JS subclass construction through it are skipped by the normal dependency rules.
Upstream Material still depends on `intl` inside Dart. A separately declared Intl
binding provider could support these constructor signatures in a future selection; no
such package is currently provided. See the
[binding dependency policy](../../docs/architecture/packaging.md#binding-dependency-policy).

Navigation now includes explicit sessions, shared or nested Flutter Navigators, native
callback ownership, ordinary Dart reference results, and UI Future delivery. See the
[navigation contract](../../docs/architecture/navigation.md) for the selected subset and
lifecycle rules.

MaterialPage and MaterialPageRoute use their real Dart constructors and ordinary object
bindings. Page.createRoute and current settings are managed by Flutter. Joint GC retains
callbacks while either language owns them. Observer-list inputs preserve constructor
defaults and supplied order; FlaxNavigatorObserver is optional and does not delay
Session close. Closing a Session revokes its JS callbacks; Flutter still owns Route
transitions and application disposal.

TextField selects text events and basic input configuration, borrowing the core
TextEditingController. TextInputAction is a generated enum. See
[text input](../../docs/architecture/text-input.md) for exact parameters and IME limits.

Generated Theme, ThemeData, TextTheme, ColorScheme and InputDecoration support host
queries and local theme overrides. TextField accepts style and decoration bindings. See
[styles and themes](../../docs/architecture/styles.md); values and dependencies use the
existing Dart object and Widget paths.

Generated MaterialType, Material, InkWell and LinearProgressIndicator reuse Core Color,
TextStyle, BorderRadius, Clip, keys and callback conversion. The
[owning selection](bindings/flax_bindings.yaml) defines the exposed constructor
parameters; unselected parameters retain their upstream defaults. Material supplies the
native ink surface. Text style animation retains Flutter's `TextStyle.inherit`
constraints.

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

Generated showDialog calls native Flutter directly without requiring an observer.
AlertDialog supplies title, content, actions and scrolling. MaterialApp selects
navigatorObservers. See
[dialogs and Route ownership](../../docs/architecture/functions.md).

RefreshIndicator uses the generated reverse direction: its JavaScript `onRefresh`
returns a Promise, and Flutter receives the corresponding Future without a component
specific adapter.
