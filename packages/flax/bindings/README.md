# Flutter Binding Selection

[flax_bindings.yaml](flax_bindings.yaml) selects declaration names. Ordinary
constructors, members, parameter types and defaults come from the existing
analyzer-based automatic selector. Inline overrides retain adapter kinds, proxy choices,
callback signatures and lifecycle policy. [flax_components.yaml](flax_components.yaml)
keeps the fixed State mixin combinations. The `flax_sdk_*.yaml` files add all public
Flutter libraries and `dart:ui` as automatic scopes in this same package. They reuse the
existing Manifest source index: one implementation owns a declaration, and other public
libraries reexport it. Config order does not decide parents or generic providers. See
the [rules guide](../README.md).

The shared `renderOnlyWidget` YAML anchor clears instance members for Widgets that keep
reactive constructor descriptions. Constructors/static members are still inferred.
Native Widget views and proxies retain real-object delivery. Fixed generic description
owners and State mixins remain explicit. Core events, keys and offsets use ordinary Dart
references; they do not need callback snapshots.

The Context adapter exposes convertible BuildContext getters. Size, BoxConstraints,
Directionality and the non-constructible SchedulerBinding mixin infer their supported
members within the selected type pool. Custom-component ancestor lookup uses the shared
Context extension. Builder and LayoutBuilder use their real callback signatures.

Navigation selects Navigator, its borrowed State and shared generic methods, Route,
constructible RouteSettings references, NavigatorPopHandler, and PopScope. Only selected
methods may create routes while the session is open. Route ownership and Future delivery
use the shared UI host, not generated state management.

Declarative navigation adds Page<Object?> identity, key/name/arguments fields,
Navigator.pages/onDidRemovePage, and ValueKey.value. Empty-list defaults are omitted
from real Dart calls so Navigator retains its upstream imperative-mode sentinel.
PageContent is a Flax content host, not a generated Flutter API.

The core module adds services.dart through additionalLibraries and selects
TextEditingController plus Dart-built TextEditingValue, TextSelection and TextRange
references. Calls use Flutter's own validation and disposal contracts; see
[editing values](../../../docs/architecture/text-input.md).

The dart:core selection includes the ordinary `Iterator<E>` interface with `current` and
`moveNext()`. It has no JS constructor or source adapter. Downstream automatic APIs
reuse this Core provider and the ordinary object/generic conversion rules. Closed
signatures keep callback, nested collection, async and Record element conversion in
shared native metadata; all signature views reuse the Core JS prototype.

Color, FontWeight and TextStyle use ordinary object generation. Text.style accepts a
plain or bound value; copyWith preserves unexposed fields. See
[styles and themes](../../../docs/architecture/styles.md).

Generated ListView.builder uses explicit independent callback results and Flutter-owned
scrolling, caching and key matching. See
[lazy lists](../../../docs/architecture/lists.md).

Container/DecoratedBox and decoration, border, corner, inset and constraint selections
use ordinary generation. See [decoration](../../../docs/architecture/decoration.md).

Top-level applyBoxFit selects BoxFit and FittedSizes source/destination references.
Navigator selects observers; NavigatorObserver uses ordinary object bindings and
FlaxNavigatorObserver has a generated no-argument factory from the public Flax library.

WidgetState and WidgetStateProperty reuse generated enum, Set and checked generic
function conversion. Their public reexports share the same Core providers.
