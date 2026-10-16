# ADR 0045: Native Route and Page Objects

Status: accepted. Supersedes the generated ownership subclasses and Page adapters in ADR
0005 and ADR 0006, and the callback leases in ADR 0014.

## Decision

Route and Page declarations use `kind: object`. Their real constructors, members,
callbacks, generic types, proxy overrides and checked casts reuse ordinary binding
conversion. Flutter calls the original Page.createRoute and updates Route.settings.
There is no generated ownership subclass, Page adapter or retained JS descriptor. The
maintained engine's joint GC traces the actual Dart/JS callback graph, including cycles.
A constructed but unused value needs no explicit disposal.

Navigation arguments, results and pop callbacks use the same conversion as functions.
Selected Dart objects retain identity; List/Map values return DartList/DartMap views.
Named-page entry parameters keep their separate frozen plain-data snapshot contract.
Broad results use the shared `asDart(value, Target)` checked view when their JS type is
unclear. Navigator and showDialog introduce no special result conversion or cast API.

## Navigation lifetime

GC does not decide when to pop a Route or shut down an application. Real Dart closures
and proxy peers retain their JS dependencies through joint GC while the Session is live.
No Route-to-Session registry, navigation capture scope or transition lease exists.
FlaxNavigatorObserver remains optional; Widget observer-list inputs use ordinary
defaults and preserve the supplied list without injection.

Session close rejects new navigation and cancels pending asynchronous delivery. It
drains mounted JS content and active bridge calls, then revokes all remaining callbacks
before destroying the runtime. A pure Dart Route, native exit animation or never-built
builder does not block closing. Late void callbacks are inert; result callbacks throw
StateError before entering the destroyed engine. Applications keep the Session open
while offstage JS content must remain usable. Close never pops Routes or disposes
application objects.

Navigator members and configured Route functions call Flutter directly. The existing
navigation roles preserve close admission and UI builder error policy; the runtime no
longer requires exactly one synchronous push or a TransitionRoute. Ordinary result and
parameter conversion is unchanged, including Route objects returned as data.

Native Widget hosts transfer their mount retention when Flutter reuses an Element for
content from another session. Failed updates retain the last valid content and session.

## Compatibility and limits

Generated modules require `native-navigation-objects`. Regenerate providers, consumers
and module assets together. Retired `kind: route`, `kind: page` and `pageAdapter`
selections fail with migration diagnostics. Manifest 23 removes obsolete navigation
Context/root-Navigator roles; regenerate providers and consumers together. Selection
format 2, UI protocol 24, engine binding extension 8 and native ABI 2 are unchanged; no
engine API is added.

Route subclasses use Flutter's own admission and lifecycle rules. Callback ownership is
generic; arbitrary delayed navigation side effects are not inferred from signatures. The
current [navigation contract](../architecture/navigation.md) records setup and
verification.
