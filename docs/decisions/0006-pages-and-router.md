# ADR 0006: Named Pages and Host Router

Status: accepted.

## Decision

Expose named synchronous JS factories through registerPage, JS PageContent, and Dart
FlaxView.page. Source initialization is separate from root mounting; each session loads
once and may have no runApp root. A mounted content identity owns local factory state.
Same-identity arguments become copied, frozen readonly signal values, with structural
equality suppressing redundant delivery. Flutter key/name/session changes reset content;
actual content unmount, including maintainState eviction, ends local state.

Use Flutter Pages on both sides. Applications own declarative page data and update it
synchronously through onDidRemovePage. Flutter owns Route creation, matching,
transitions, and associated imperative routes. Original JS Page descriptors return
through removal callbacks; Page.onPopInvoked delivers results. Adding a Page has no
implicit Promise. Host Router maps paths to factories without a go_router dependency.

Generated Page subclasses carry configuration leases. Explicit per-library adapters
extend the public shared FlaxPageRoute base, adopting current settings and releasing
callbacks only after their actual owners retire. The Material adapter uses public
PageRoute/MaterialRouteTransitionMixin APIs. Named content in native host routes retains
the session through TransitionRoute.completed. Closing stops new entries while
preserving accepted routes' rebuild/exit/cleanup paths; only the host removes its
routes.

Page metadata uses the versioned UI contract without changing the native ABI, engine or
existing Future/checkpoint/error contracts. Optional private callback and empty-list
defaults are omitted from generated constructor calls and inherited through super
parameters. Empty-list omission preserves upstream sentinel identity; the generator does
not name private functions or substitute callbacks.

## Rationale and consequences

Named entries let a host directly select JS content without executing an unwanted home
page. Readonly reactive parameters preserve local state during query changes without
rerunning an entire factory. One shared content host avoids separate Dart/JS semantics.

Page configuration lifetime differs from mounted content and from a completed pop
result. Explicit ownership at Route adoption/disposal protects callbacks during updates
and exit animations while mounted descendants retain their own resources. No JS stack
matching algorithm or universal navigation manager is needed.

The current in-repository Router integration is covered by the macOS arm64 Hermes and V8
UI checks. System deep-link registration, restoration, router-package adapters and
custom transitions remain separate work. This experimental protocol has no stable
compatibility promise.

See the [contract](../architecture/navigation.md) and
[verification scope](../architecture/external-binding-compatibility.md).
