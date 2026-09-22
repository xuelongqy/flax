# 0005: Navigation Sessions and Route Ownership

Status: accepted for the experimental macOS arm64 Hermes implementation.

## Decision

Use Flutter Navigator for both host-shared and explicitly nested stacks. Navigation
structure and JS session ownership are independent. Expose FlaxSession and a borrowing
FlaxView constructor while preserving the original owning convenience constructor. Do
not add a global navigation-mode flag or a second stack synchronized from JS.

A host scope owns a session across its pages. Each generated Route retains its callbacks
and releases them through actual Flutter disposal; mounted page content separately owns
subscriptions, Context references, and retained builder results. Completing a pop result
is not the disposal boundary. Closing prevents new navigation, cancels pending
deliveries, and waits for hosts and Routes; it never removes unrelated host pages.

Borrow NavigatorState through weak references and validate actual mounted state.
Navigation data is a copied plain tree. Generic navigation results specialize to Object?
with explicit validation of the supported JS data subset.

Map selected host Futures to Promises in the UI session. Run coalesced microtask
checkpoints outside native calls and Flutter build/layout. Preserve explicit checkpoint
semantics in the pure runtime API. Keep builders synchronous; observe rejections
returned by UI void events. Late completions after close cannot invoke the engine.

Generate signatures and concrete calls from analyzer models, with explicit State, Route,
snapshot, and generic adaptations. Route subclasses only add ownership cleanup to the
selected upstream class. Version the UI contract independently of the native C ABI.

## Rationale and limits

An entry page can disappear while another page still uses its JS application.
Route-owned callbacks and explicit session ownership prevent the source Element from
becoming an accidental lifetime boundary. Flutter still controls transitions and content
retention.

The same implementation supports mini-app containers and host navigation. Independent
Pages and Router entries are defined by [ADR 0006](0006-pages-and-router.md), without a
second history stack. Typed Promise/Future conversion is part of the current
[interop contract](../architecture/interop.md). System deep-link registration,
restoration and mobile gesture certification remain separate work.

This extends [contextual builders](0004-contextual-builders.md). The current contract is
in [navigation and sessions](../architecture/navigation.md).
