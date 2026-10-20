# material_ui Binding Selection

[flax_bindings.yaml](flax_bindings.yaml) discovers the supported complete public
`material_ui` entry. Ordinary declarations and members use shared automatic selection;
inline overrides retain Widget interfaces, existing reactive rendering adapters, route
builder metadata and host ownership of `runApp`. Required `intl` types are owner-local
views; Cupertino APIs reuse their declared provider. Types and defaults come from
analyzer rather than hand-maintained signatures. See the [rules guide](../README.md).

The source-directory exclusion `package:material_ui/src/l10n/` keeps concrete language
implementations, `getMaterialTranslation` and `kMaterialSupportedLanguages` out of JS
bindings. Their Dart code remains available to `GlobalMaterialLocalizations.delegate`.
The public `GlobalMaterialLocalizations` and `MaterialLocalizations` APIs stay bound.

Rendering adapters keep their existing `.bind` constructor inputs. Removing their
member-selection overrides would switch them to immediate real-object construction; that
is a different API contract. Newly discovered ordinary members use automatic selection
without extra class-specific signatures.

MaterialPageRoute and MaterialPage use ordinary object bindings, with Object? as their
default result type. Explicit runtime type selection uses the shared checked type APIs.
Flutter owns construction, Material transitions and Page.createRoute. Selected inherited
fields and callbacks come from analyzer; optional private callback defaults remain
omitted from the actual constructor call.

The original Dart builder retains its JS callback through joint GC while its Session is
live; describing a route never executes that builder. Mounted JS content retains its own
bridge resources. Session close drains those mounts, then revokes remaining callbacks
without waiting for a native Route or exit transition.

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

showDialog selects navigation admission and UI error handling for its typed builder. Its
Object? result uses ordinary Dart reference conversion. Navigator lookup stays in
Flutter and requires no observer. AlertDialog completes the selected UI path. See
[function selection](../../../docs/architecture/functions.md).

ButtonStyle selects the WidgetStateProperty-backed background, foreground, overlay and
elevation fields. TextButton.style accepts the real style object or a whole-property
binding. Exact Color? and double? properties are materialized from the shared deferred
generic factory selection.
