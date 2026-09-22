# Navigation and Application Sessions

Status: experimental macOS arm64 Hermes/V8 implementation. Flax uses real Flutter
Navigators and Routes. The application chooses a shared host stack or an explicitly
nested Navigator; FlaxView does not insert one or mirror its stack in JS.

## Session ownership

`FlaxSession(createRuntime: ..., source: ..., bindings: ..., sourceUrl: ..., onError: ...)`
owns one immutable application configuration and lazily loads its source once.
`FlaxView.session(session: session)` borrows its initial root. Only one initial root may
be mounted at a time; remounting preserves the JS application state. Each Route has a
separate content host. JS calls `runApp` at most once per session. An entry that only
registers named pages does not need an initial root.

The original FlaxView constructor still creates and owns an internal session. Use an
explicit session for an application whose pages can outlive its entry view:

- Shared stack: a host business scope above the participating routes owns the session.
- Nested stack: the mini-app container owns the session above its internal Navigator.

`close()` is idempotent and returns the same Future. It rejects new roots and
navigation, cancels pending host Future delivery, and waits for existing mounted hosts
and Routes to retire. Existing pages can still render, update their signals, and pop
during closing. The host must remove its pages; close never clears a shared Navigator.
Awaiting close while keeping those pages mounted intentionally waits. Source replacement
uses a new session; it cannot rewrite an existing session underneath another page.

Flutter owns inherited environments. A route pushed onto an ancestor Navigator does not
automatically inherit providers or themes below that Navigator. The example explicitly
provides Material above its host Navigator for its minimal JS pages.

## Generated API subset

| Type                  | Selected members                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| Navigator             | key, initialRoute, onGenerateRoute, onUnknownRoute, pages, onDidRemovePage; static of(context, rootNavigator) |
| NavigatorState        | mounted; push, pushNamed, pushReplacement, pop, maybePop, canPop                                              |
| Route                 | Parameter/return identity only; no constructor or JS disposal                                                 |
| RouteSettings         | name and arguments constructor parameters and readonly snapshot fields                                        |
| MaterialPageRoute     | builder, settings, maintainState, fullscreenDialog, from the standalone Material package                      |
| Page<Object?>         | Readonly key, name, arguments; no constructor or JS disposal                                                  |
| MaterialPage<Object?> | child, key, name, arguments, maintainState, fullscreenDialog, canPop, onPopInvoked                            |
| ValueKey              | String/integer constructor and readonly value                                                                 |
| NavigatorPopHandler   | key, enabled, onPopWithResult, child                                                                          |
| PopScope              | key, canPop, onPopInvokedWithResult, child                                                                    |

Generic route results are specialized to Dart Object? and the JS NavigationData subset.
Positionals remain positional; named arguments use the final options object. Widget
parameters except key can bind. Route constructor inputs are snapshots; bind properties
inside the returned widget tree instead.

```javascript
const selection = await Navigator.of(context).push(
  MaterialPageRoute({ builder: (context) => DetailsPage(context) }),
);
```

Navigator.of follows Flutter's nearest/root ancestor lookup. Its State wrapper borrows
an actual Flutter State through a weak reference, independently of the lookup Context.
Unmounted State wrappers report mounted=false and reject methods. Wrapper object
identity is not promised; a fresh lookup may return a new JS wrapper for the same
Flutter State. Internal identifiers are not reused. Public wrappers reject foreign
session references; this remains a trusted-code bridge, not a security sandbox. Mini-app
isolation remains an [open question](../decisions/open-questions.md).

For nested back handling, connect NavigatorPopHandler to the internal Navigator's
`maybePop(result)` to respect its PopScope. An explicit `pop` follows Flutter's
imperative semantics and does not serve as a guard check. Inactive navigation branches
should disable their handler. Async leave confirmation sets canPop=false first and
explicitly navigates after confirmation. No platform gesture support beyond the macOS
validation is claimed.

## Route and callback lifetime

Constructing a JS Route descriptor never runs its builder. Each accepted descriptor is
materialized as a new Dart Route. A generated subclass forwards the selected upstream
constructor and releases its lease from Flutter's actual Route.dispose.

The Route retains its builder independently of the triggering button or source page. Its
content host runs the JS builder at build time with a real Context and owns the last
valid result, subscriptions, and event references. Multiple Routes using the same JS
function have independent mounted results. Disposal of offstage content follows
maintainState; the Route retains enough input to build fresh content later. JS state
held by the Route's closure survives that content disposal.

A pop result and the end of an exit transition are separate events. Completing the
navigation Promise does not release still-mounted content. Session disposal waits for
both Route leases and mounted hosts. Failed construction releases unaccepted resources;
initial builder failures show an error widget, and later failures preserve valid
content.

Integration tests wait for outgoing content to disappear with a bounded frame-driven
wait before interacting with a global finder. A completed pop Future or a shorter Pages
list alone does not establish Widget disposal. Do not replace that lifecycle condition
with a fixed engine-specific delay. See the
[navigation owner tests](../../packages/flax_material_ui/test/ui/navigation_test.dart).

## Named page entries

Register factories synchronously during source initialization:

```javascript
import { bind, signal } from '@flax/core';
import { Column, Text, registerPage } from '@flax/flutter/widgets';

registerPage('orderDetails', (params) => {
  const count = signal(0);
  return Column({
    children: [
      Text(bind(() => `Order ${params.value.orderId}`)),
      Text(bind(() => `Count ${count.value}`)),
    ],
  });
});
```

The host can mount
`FlaxView.page(session: session, name: 'orderDetails', arguments: {'orderId': '42'})` as
an ordinary Widget or as a native MaterialPage child. JS uses
`PageContent('orderDetails', {key, arguments})`. Both enter the same content host;
constructing either description does not execute a factory. Multiple instances can use
one factory in the same session. Direct entry does not mount the runApp root.

A content identity consists of its session, registration name, and Flutter key/position.
The factory runs once on mount and may create local signals. Same-identity parameter
updates retain that content and state. Parameters are copied and recursively frozen
before entering a readonly signal; `.value` reads normally, `.bind` or `bind(fn)`
subscribes. Structural equality, independent of object-key order, prevents redundant
parameter delivery and notifications. The host snapshots mutable Dart input so later
mutation cannot silently alter the previous parameters. Build-time invalidations still
wait for the next frame. Changing the identity initializes fresh local state.

Duplicate/late registration, invalid names, and non-function factories fail explicitly.
Unknown entries, throwing factories, and Promise returns report an error and show a
bounded placeholder. Invalid later input keeps the last valid parameters/content. Other
mounted pages continue to work. Actual content unmount, including maintainState: false
eviction, releases its subscriptions and factory result; remount reinitializes local
signals while session-level state remains.

## Declarative Pages and host Router

`Navigator({pages: pages.bind, onDidRemovePage: ...})` passes an actual immutable
List<Page<Object?>> to Flutter. Page fields take creation-time values; update the whole
pages binding for configuration changes and bind properties inside each child for UI
changes. `MaterialPage({child: PageContent(...)})` does not execute the page factory.
Flutter performs Page.canUpdate matching, transitions, and reconciliation. Duplicate
non-null keys are rejected before commit. Unkeyed Pages follow Flutter's matching
semantics. Applications must retain a valid nonempty declarative stack.

When Flutter calls onDidRemovePage, JS receives the original current Page descriptor.
Its readonly key and ValueKey.value support synchronous application-data removal:

```javascript
onDidRemovePage: (removed) => {
  pages.value = pages.value.filter((page) => page.key.value !== removed.key.value);
};
```

This example assumes all Pages have unique ValueKeys. TypeScript callers narrow LocalKey
to ValueKey for its selected value getter. The application owns this data; Flax keeps no
second stack. Page.onPopInvoked supplies didPop/result and can report a blocked pop. It
may return a Promise whose rejection reaches onError. Adding a Page produces no Promise;
imperative push on that Page still does. Flutter also retires associated pageless Routes
when their underlying Page is removed.

Generated Page subclasses carry a lease for their descriptor, child, and callbacks. A
library's explicit adapter returns a FlaxPageRoute subclass. It retains the current
configuration at install, adopts replacement settings in changedInternalState, and
releases it on actual Route disposal. Mounted descendants own independent leases, so
retiring an old configuration cannot invalidate a still-mounted child. Material's small
adapter uses the public MaterialRouteTransitionMixin and reads current Route.settings;
it does not copy Flutter's stack or transition implementation.

A named page inside a host-owned ModalRoute also retains its session until that route's
TransitionRoute.completed resolves. Content unmount or a pop result alone cannot release
the last runtime owner during a transition. Closing rejects new entries and new Pages
while existing Routes may update, rebuild, pop, and retire. The host must remove its
retained routes before awaiting close, even if their Flax content has unmounted.

The [Pages owner tests](../../packages/flax_material_ui/test/ui/pages_test.dart) cover
registered factories, stable Page keys, updates, and replacement behavior. Host routing
uses ordinary Flutter Router/RouterDelegate/RouteInformationParser semantics; path
mapping belongs to the host. System deep-link registration and restoration remain
outside the supported navigation surface.

## Data and asynchronous delivery

NavigationData consists of null, booleans, strings, finite numbers (integer values must
be JS-safe), arrays, and string-keyed plain objects. Dart uses corresponding values,
Lists, and Maps. Each delivery copies a plain tree without a JSON string transport.
Object identity is not retained; repeated shared branches become independent copies.
Cycles, holes, undefined fields, accessors, functions, host references, and non-plain
objects are rejected. Optional omitted inputs use the upstream defaults.

Selected Dart Futures map to JS Promises. Synchronous invocation/validation errors throw
synchronously; asynchronous failures reject the Promise. UI void callbacks can return a
Promise, whose rejection reaches onError. Builders and Route factories remain
synchronous. A generated callback explicitly declared to return Future uses the reverse
Promise-to-Future conversion; its asynchronous error completes that Future rather than
calling onError. Closing rejects outstanding deliveries with an error containing
`FlaxSessionClosed`; late Dart completions cannot reenter a retired runtime. Closing
does not cancel the underlying Dart operation or arbitrarily schedule an application
Router transition.

The UI session coalesces checkpoints after JS calls and Future completions. Checkpoints
run after native entry returns and outside Flutter build/layout, with frame-time
requests postponed until after the frame. The existing drainMicrotasks best-effort job
hint is not a time limit. The base host timers enqueue through this same scheduler;
neither Future direction adds another thread, timer or polling loop. The pure runtime
API retains explicit microtask semantics. Unreturned application Promise chains do not
gain a general unhandled-rejection monitoring service.

## Boundaries and verification

Protocol 20 rejects earlier bundles and modules; the C ABI is unchanged. Host native
Router and JS Pages are implemented. go_router-specific adapters, system deep-link
registration, restoration, custom transitions, and additional platforms remain deferred.
URL parsing in the example does not register OS links.

See the
[navigation owner tests](../../packages/flax_material_ui/test/ui/navigation_test.dart),
[Pages decision](../decisions/0006-pages-and-router.md), and
[compatibility scope](external-binding-compatibility.md). Package checks own navigation
behavior; full `check:ui` reuses that owner integration and then adds only the
aggregate.

## Internal ownership boundaries

Navigation requests check session admission before changing the Flutter stack. Route
configuration adoption and content remounting retain resources independently of that
admission check. Final release goes through session methods after owned callbacks and
snapshots are cleaned up. Existing Page and Route leases remain distinct because their
Flutter replacement and disposal semantics differ.

## Native top-level dialogs

Generated showDialog uses Flutter directly and requires FlaxNavigatorObserver in the
target Navigator.observers (or MaterialApp.navigatorObservers). Its captured Route owns
the callback until TransitionRoute.completed, independently of its result Future and
source page. The observer serves concurrent sessions without keeping another stack. See
[function calls and dialogs](functions.md) for setup, scope and errors.
