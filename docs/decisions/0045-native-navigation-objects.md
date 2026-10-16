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

GC does not decide when to pop a Route or shut down an application.
FlaxNavigatorObserver holds the participating session until TransitionRoute.completed,
independently of its result Future and mounted content. Weak associations identify the
sessions contributing real Routes and Pages. Observers refresh current Page settings
before session close; replacing a Page can move this retention to another session
without replacing the Route. Reading an unrelated host Route acquires no navigation
ownership.

Selected Widget List<NavigatorObserver> constructor inputs install one stable private
observer before the supplied observers. A host-created Navigator accepting Flax
navigation values installs a stable FlaxNavigatorObserver itself. Generated push
operations validate this before navigation. Configured top-level Route functions still
synchronously push exactly one observed TransitionRoute. Session close rejects new
navigation and cancels pending Future delivery; accepted content may rebuild and exit.
The application removes its Routes, and Flax never calls application disposal as a GC
side effect.

Navigator members and Route functions share the same observation scope. Rejected calls
acquire no new navigation ownership; accepted native side effects remain retained even
when the invocation subsequently throws.

Ordinary object and Stream constructor inputs retain their defaults and native list
identity; they do not acquire observers. Direct push/replace rejects a known
non-TransitionRoute before native navigation. Pop/replacement results remain ordinary
values, including Route objects that are being returned as data.

Native Widget hosts transfer their mount retention when Flutter reuses an Element for
content from another session. Failed updates retain the last valid content and session.

## Compatibility and limits

Generated modules require `native-navigation-objects`. Regenerate providers, consumers
and module assets together. Retired `kind: route`, `kind: page` and `pageAdapter`
selections fail with migration diagnostics. Manifest 22, selection format 2, UI protocol
24, engine binding extension 8 and native ABI 2 are unchanged; no engine API is added.

Non-TransitionRoute values can pass through ordinary bindings, but session-close
tracking requires Flutter's explicit transition-completion Future. Arbitrary delayed
navigation side effects are not inferred from callback signatures. The current
[navigation contract](../architecture/navigation.md) records setup and verification.
