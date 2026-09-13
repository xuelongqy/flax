# @flax/material-ui

Exports generated TextButton, TextField, MaterialPageRoute, and MaterialPage bindings
from the standalone material_ui package. Core re-exported types retain their identity
through @flax/core/flutter. No legacy SDK Material constructors are silently
substituted.

Install this package at the same version as Dart `flax_material_ui`. It contains the
application-side generated factories and declarations; Dart registration remains
explicit through `materialBindings`.

Publication is disabled. See
[generation and supported parameters](../../../docs/architecture/bindings.md) and
[UI semantics](../../../docs/architecture/ui.md).

Navigation now includes explicit sessions, shared or nested Flutter Navigators,
Route-owned callbacks, copied data, and UI Future delivery. See the
[navigation contract](../../../docs/architecture/navigation.md) for the selected subset
and lifecycle rules.

MaterialPage has readonly key/name/arguments and creation-time configuration. Use
PageContent for named content, a Navigator.pages binding for configuration changes, and
onPopInvoked for a pop result. Merely constructing or adding a Page produces no Promise.

TextField selects text events and basic input configuration, borrowing the core
TextEditingController. TextInputAction is a generated enum. See
[text input](../../../docs/architecture/text-input.md) for exact parameters and IME
limits.

Generated Theme, ThemeData, TextTheme, ColorScheme and InputDecoration support host
queries and local theme overrides. TextField accepts style and decoration bindings. See
[styles and themes](../../../docs/architecture/styles.md); values and dependencies use
the existing Dart object and Widget paths.

Scaffold accepts a typed, bindable appBar. AppBar itself uses fixed configuration;
update Scaffold.appBar to replace it while keeping descendant signals local. See
[page shells](../../../docs/architecture/widget-interfaces.md).

showDialog is a named function export using a configured FlaxNavigatorObserver and the
existing Future-to-Promise contract. AlertDialog accepts bound child properties; dialog
function arguments are ordinary values. See
[dialogs](../../../docs/architecture/functions.md).

RefreshIndicator accepts a Promise-returning `onRefresh`. The generated binding converts
that result into the Future awaited by Flutter; ordinary Widget bindings and callback
replacement keep their existing behavior.
