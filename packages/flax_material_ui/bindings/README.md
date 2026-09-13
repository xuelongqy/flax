# material_ui Binding Selection

[config.yaml](config.yaml) selects the public API subset. Types and defaults come from
analyzer rather than hand-maintained signatures. See the [rules guide](../README.md).

MaterialPageRoute specializes its result to Object?. Its generated subclass retains a
Route lease until Flutter disposes the actual route. It uses the standard Material
transition and a page-owned builder; describing a route never executes that builder.

MaterialPage specializes its result to Object? and selects an explicit same-package Page
Route adapter. Selected inherited fields and callbacks come from analyzer; optional
private callback defaults remain omitted from the actual constructor call. The adapter
uses public MaterialRouteTransitionMixin and shared FlaxPageRoute ownership.

TextField selects borrowed controllers, text events, and basic single/multiline input
configuration from the standalone Material package. Its referenced TextInputAction
retains the actual Flutter declaration identity. See
[text input](../../../docs/architecture/text-input.md).

RefreshIndicator selects the native asynchronous onRefresh callback and child. The
generated callback converts its JavaScript Promise to the Future awaited by Flutter.

TextField selects style and decoration. Omitted decoration preserves the Dart constant
default; null removes it. InputDecoration and ThemeData, TextTheme and ColorScheme use
ordinary objects; Theme selects its Widget constructor and static of(context). See
[styles and themes](../../../docs/architecture/styles.md).

showDialog selects explicit context/rootNavigator/builder roles for observed native
Route ownership, with Object? results copied as NavigationData. AlertDialog and
MaterialApp.navigatorObservers complete the selected UI path. See
[function selection](../../../docs/architecture/functions.md).

ButtonStyle selects the WidgetStateProperty-backed background, foreground, overlay and
elevation fields. TextButton.style accepts the real style object or a whole-property
binding. Exact Color? and double? properties are materialized from the shared deferred
generic factory selection.
