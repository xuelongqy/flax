# flutter Binding Selection

[config.yaml](config.yaml) selects the public API subset. Types and defaults come from
analyzer rather than hand-maintained signatures. See the [rules guide](../README.md).

The selected context adaptation exposes BuildContext.mounted and size. Size selects
readonly width/height; the non-constructible SchedulerBinding mixin selects instance and
endOfFrame. Custom-component ancestor lookup uses the shared Context extension.
BoxConstraints references select four readonly fields. Directionality selects only the
static of method; Builder and LayoutBuilder select their real callback signatures.

Navigation selects Navigator, its borrowed State and explicitly instantiated Object?
methods, Route, constructible RouteSettings references, NavigatorPopHandler, and
PopScope. Only selected methods may create routes while the session is open. Route
ownership and Future delivery use the shared UI host, not generated state management.

Declarative navigation adds Page<Object?> identity, key/name/arguments fields,
Navigator.pages/onDidRemovePage, and ValueKey.value. Empty-list defaults are omitted
from real Dart calls so Navigator retains its upstream imperative-mode sentinel.
PageContent is a Flax content host, not a generated Flutter API.

The core module adds services.dart through additionalLibraries and selects
TextEditingController plus Dart-built TextEditingValue, TextSelection and TextRange
references. Calls use Flutter's own validation and disposal contracts; see
[editing values](../../../docs/architecture/text-input.md).

Color, FontWeight and TextStyle use ordinary object generation. Text.style accepts a
plain or bound value; copyWith preserves unexposed fields. See
[styles and themes](../../../docs/architecture/styles.md).

Generated ListView.builder uses explicit independent callback results and Flutter-owned
scrolling, caching and key matching. See
[lazy lists](../../../docs/architecture/lists.md).

Container/DecoratedBox and decoration, border, corner, inset and constraint selections
use ordinary generation. See [decoration](../../../docs/architecture/decoration.md).

Top-level applyBoxFit selects BoxFit and FittedSizes source/destination references.
Navigator selects observers; NavigatorObserver is an opaque type and
FlaxNavigatorObserver has a generated no-argument factory from the public Flax library.

WidgetState and WidgetStateProperty use generated enum, Set and automatically inferred
deferred generic factory support. The latter is materialized only when an exact selected
consumer provides its concrete Dart type.
