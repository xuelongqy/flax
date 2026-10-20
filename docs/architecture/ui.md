# Flutter Host and Reactive Updates

Status: experimental embedded UI using the [maintained Flutter engine](runtime.md). The
[embedded example](../../examples/embedded/README.md) exercises the real path.

## Public surfaces

`FlaxView` receives `createRuntime`, `source`, optional `sourceUrl`, a
`FlaxBindingRegistry`, and optional `onError(Object, StackTrace)`. The factory transfers
ownership of a fresh runtime to that view. `FlaxView.session(session: ...)` instead
borrows an explicit FlaxSession.
`FlaxView.page(session: ..., name: ..., arguments: ...)` mounts a named page with
readonly reactive parameters; see [navigation and sessions](navigation.md). Do not
return an already shared runtime. Register `flutterBindings` and, when needed,
`materialBindings` using the public package entries. `package:flax/bindings.dart` is the
extension entry for generated modules. `package:flax/runtime.dart` remains independent
of Flutter UI types.

The JS app calls `runApp(widget)` at most once, or only registers named pages. This
supplies the root of the current view; it does not create a window. JS constructors
preserve Flutter names, positional arguments, and a final options object for named
arguments. Descriptors and value objects are immutable. Omitted/undefined arguments use
generated upstream defaults; explicit null is accepted only for nullable parameters.
ValueKey accepts strings and safe integers. Keys and value-object constructor arguments
cannot contain bindings.

```javascript
import { signal, computed } from '@flax/core';
import { Column, Text, runApp } from '@flax/flutter/widgets';
import { TextButton } from '@flax/material-ui';

const count = signal(0);
const label = computed(() => `Count: ${count.value}`);
runApp(
  Column({
    children: [
      Text(label.bind),
      TextButton({ onPressed: () => count.value++, child: Text('Increment') }),
    ],
  }),
);
```

`signal` exposes mutable `.value` and stable `.bind`. `computed` exposes readonly
`.value` and `.bind`. `bind(fn)` describes an expression, and `batch(fn)` batches JS
writes. These wrap the unmodified `@preact/signals-core` dependency. Reading `.value`
inside `computed`, `bind`, or `effect` tracks dependencies; an ordinary read outside a
reactive callback takes a snapshot. Every mounted dynamic parameter owns its own
observer; constructing descriptors does not subscribe them. Bind the whole EdgeInsets
value to change padding. Nullable callbacks, `child`, and `children` can all be bound.

## Business subscriptions

`@flax/core` also exports `effect`, `untracked`, and `action` from the same signals-core
instance used by Flax bindings. Both mutable and computed signals expose `peek()` and
`subscribe(listener)`. These APIs need no Widget, mounted view, or `__flaxInvalidate`
host function. A signal can live in a shared business module; consumers in the same JS
runtime import that instance. Separate session runtimes do not share JS signal objects.

```javascript
import { signal, effect } from '@flax/core';

const count = signal(0);
const stop = effect(() => {
  console.log(count.value);
  return () => console.log('Cleanup before the next run or stop');
});

count.value = 1; // Cleans up the previous run, then runs synchronously with 1.
stop(); // Unsubscribes and runs the final cleanup. Safe to call again.
count.value = 2; // This effect no longer runs.
```

`effect` runs immediately, tracks all signal reads in its synchronous callback, and
reruns when dependencies change. Its optional returned cleanup runs before the next
execution and when stopped. `signal.subscribe(listener)` also calls the listener
immediately and returns an unsubscribe function, but observes only that signal: reads
inside the listener do not add dependencies. Computed subscriptions notify only when
their result changes. Both forms follow `batch` synchronously, independently of Flutter
frame scheduling. Keep effect callbacks and cleanup synchronous; reads after an async
boundary are not tracked.

The caller owns business subscriptions and must call their stop functions when the
owning service, page, or component ends. Widget unmount only stops Flax-owned property
bindings; it does not stop independently created effects. A named page factory can
register `lifecycle.onDispose(stop)`. A custom State can store the stop function and
call it from `dispose` before `super.dispose()`. Runtime disposal ends JS execution but
does not replace explicit cleanup of resources acquired by an effect.

`peek()` reads one signal without tracking. `untracked(fn)` does the same for a block
and returns its result. `action(fn)` returns a function that batches synchronous writes
and runs without tracking, preserving its arguments, return value, and `this` receiver.
Use `batch(fn)` for an immediate transaction and `action(fn)` for a reusable operation.
These APIs retain upstream exception behavior; they do not roll back writes or route
business errors through the Widget host's `onError` callback.

Upstream `createModel` and concrete `Signal`, `Computed`, and `Effect` classes are not
public Flax APIs. `createModel` recursively rewrites model objects and expects native
signal branding, which is incompatible with Flax's frozen signal wrappers. Plain
business objects with explicit stop functions need no additional model abstraction.

## Frame and Element behavior

The JS observer reports a property token through `__flaxInvalidate`; it does not call
setState directly. Dart coalesces tokens per host and reads the latest values in a
scheduled frame callback, before the build phase. Each dirty host commits once per
frame. Notifications raised during build wait until the next frame. `batch` combines JS
notifications; frame coalescing also works for separate writes before one frame.

Each generated Dart Widget class has a distinct Flax host class and shares a common
State implementation. Flutter therefore applies its own `runtimeType + key` matching.
Keyed children move with their Elements and States; unkeyed children match by position.
Changing type or key replaces the node. Conditional children mount/unmount normally.
Duplicate sibling keys and invalid descriptor arguments are rejected before a structural
snapshot is accepted. A property-only change retains unchanged child Widget instances.
Local builds may still cause ancestor layout or paint work.

Native widgets remain in the host Flutter tree, inheriting Theme, Directionality, and
constraints normally. Selected builder callbacks also receive a real Context reference.
Use the standalone Material package for the example shell and generated Material
widgets; SDK Material declarations and standalone package declarations have distinct
identities.

## Contextual builders and members

```javascript
Builder({
  builder: (context) =>
    Text(Directionality.of(context) === TextDirection.rtl ? 'RTL' : 'LTR'),
});

LayoutBuilder({
  builder: (context, constraints) =>
    Text(constraints.maxWidth < 300 ? 'Compact' : 'Wide'),
});
```

These callbacks execute synchronously from real Flutter Builder/LayoutBuilder widgets,
at build/layout time. Constructing or validating a descriptor does not execute its
builder. Directionality.of registers a dependency on the actual callback Element, so
Flutter invokes the builder when that inherited value changes. It does not require bind.
Ordinary signal.value reads inside a builder still do not establish subscriptions.
Signal invalidations during either build or layout wait for the next frame.

BuildContext is not constructible or disposable from JS. The weak reference cache reuses
a live Element's wrapper across rebuilds and callback replacements. Captured contexts
may be used in later synchronous events. mounted reports the actual Element state, while
ancestor queries reject inactive or unmounted contexts. Unmount clears the Dart object
reference and cached JS wrapper; a previously captured wrapper returns false from
mounted and rejects member calls. Public wrappers reject forged and foreign references.
This identity checking is not a security sandbox for arbitrary guest code.

The owner may outlive internal native Elements, such as a replaced list Sliver. Existing
UI checkpoints rotate through at most 64 Context records and revoke unmounted Elements.
Inactive Elements that remain mounted keep their identity for reactivation. Access
checks apply even before that sweep. Owner unmount and session teardown clear all their
remaining Contexts immediately. Native callback Contexts need no Flax mount owner and
borrow the actual Element weakly. Last-alias JS GC and Element GC use the shared
[reference cleanup mechanism](references.md); unmount cleanup requires no GC, timer or
idle polling.

BoxConstraints exposes only minWidth, maxWidth, minHeight, and maxHeight as a frozen
reference, including Infinity. Each selected field reads its real Dart getter. Enums
returned by Dart share identity with the generated JS constants, including ===.

Mounted builders return actual Widgets through the shared typed callback conversion,
even when several nodes share a function or descriptor. Escaped configurations follow
Dart references and GC; mounted descendants keep their own subscriptions through
reconciliation. Callback replacement releases the old function when its owners finish.
Base Widget builder errors, Promise returns and invalid structures reach onError and
display a bounded ErrorWidget for that invocation. Narrow Widget-interface failures
propagate the original error. Subsequent valid invocations can recover without replacing
the runtime.

## Ownership and recovery

Session methods own mounted-content and Route counts. New entry admission requires an
open session; resource retention remains possible while accepted Routes rebuild during
closing. Owners release their callbacks, subscriptions and snapshots before returning
their final session retention. Closing completes only after mounted content, Routes and
microtask cleanup retire. FlaxSession forwards that completion without a second runtime
closing state.

Callbacks have an immutable member/UI scope established when decoded or mounted. Shared
argument conversion and cleanup surround explicit member, event, builder and Route
result paths. Page callbacks receive their UI scope before their configuration is built.

Updates prepare and validate their inputs before committing new content and releasing
old resources. Constructor validation still happens before accepting a descriptor and
never invokes builders. A node with no binding or callback parameters retains its
validated native Widget for reuse by its mounts. Callback detection includes typed List
elements and Map values. Bound or callback-bearing nodes construct with their mounted
inputs. This cache belongs only to that node and is cleared on release; mounted
Elements, States, observers and child callbacks remain independent.

Each node snapshot owns parsed values and JS references. Mounted properties retain
separate leases, so replacing a parent snapshot cannot release resources still used by
an old Flutter Element. Bound initial snapshots transfer to the mounted property; they
do not keep a removed first subtree alive. Equivalent bindings keep their existing
subscriptions across reconciliation. Changed properties replace their subscriptions and
event references. Unmount unregisters tokens, invokes observer cleanup, and releases
references. Already retired Dart event closures ignore subsequent calls.

An internal session root is keyed by factory, source, source URL, and registry. Normal
parent rebuilds retain the session. Changing those inputs replaces that entire subtree.
Flutter unmounts descendants before disposing the internal root, so observer cleanup
runs while the engine is alive. Root disposal requests session closing; the runtime is
destroyed after mounted JS content and active bridge calls drain. Owning views use
separate engines. Borrowing views use their explicitly owned session. Dart Routes and
escaped callbacks do not independently delay close; callbacks are revoked on completion.

Initial load failures clean up the runtime and display a bounded ErrorWidget.
Event/binding failures reach `onError`, or FlutterError.reportError by default. Failed
recoverable updates retain their last valid content, and later valid signal changes can
recover. Observers use monotonically increasing session-local tokens; old queued
notifications cannot reach newly mounted nodes. Builders run synchronously. UI sessions
deliver selected Dart Futures as Promises and generated Future-returning callbacks in
the other direction as real Dart Futures. Both directions use safe microtask
checkpoints. UI void events may return a Promise without becoming a Dart Future. See the
[navigation contract](navigation.md) for scheduling, closing, and error behavior.

## Experimental protocol and limits

Protocol 24 generated descriptors carry `kind`, declaration-origin `type`, constructor
`ctor`, and an `args` map; enum descriptors carry type and member name. Binding
descriptors expose `read()` and `observe(token)`, which returns cleanup.
`__flaxMount(root, version)` checks the protocol against the Dart registry. The public
extension API and protocol are experimental, not a stable serialization format.
References cross the existing JSI bridge as real objects and functions, without JSON
encoding or native ABI changes.

Generated members resolve a checked session operation once with
`__flaxResolveOperation`, then invoke its numeric slot with `__flaxInvokeOperation`.
Static methods, object members and context getters share this transport while retaining
their own typed validation. The internal `__flaxBindings` helpers create cached
contexts, canonical enums, and real Dart references. They are implementation details
rather than an application API. Earlier bundles/modules are rejected; no compatibility
layer is provided for experimental protocols.

Additional Context APIs, additional Controllers, runtime module loading and other
platforms remain deferred. There is no security sandbox or execution-time limit, and no
claim of production performance or platform support beyond this macOS validation.

Named page factories also receive an explicit PageLifecycle argument. Its onDispose
callbacks run after content descendants unmount. Generated Controllers use creator-owned
object references, while Widgets borrow them. See [owned objects](objects.md).

Protocol 24 retains [Dart references and callbacks](objects.md),
[collections and generics](interop.md), and
[editing, focus and formatters](text-input.md). It includes Promise-to-Future callback
results and the dart:async Stream/FutureOr envelope without changing object ownership or
the existing UI scheduler. Older module versions are rejected.

Selected text styles, Material input decoration and host/local themes are described in
[styles and themes](styles.md). Theme.of uses Flutter inherited dependencies, without
implicit signal subscriptions or a copied theme environment.

List builders can select [independent Widget results](lists.md). Each invocation owns
its returned child separately; ordinary Builder recovery is unchanged.

Generated containers and decoration retain Flutter internal structure and paint
semantics. Changing wrapper presence may remount descendants; see
[decoration](decoration.md).

Custom JS classes use real Flutter State and synchronous setState alongside these
property subscriptions. See [components](components.md) for identity and lifecycle.

Generated ValueListenableBuilder and ListenableBuilder use Flutter listener semantics.
Single Widget callback arguments preserve the real child configuration; see
[Widget interop](interop.md#widget-configuration-and-mounting) for Dart retention and
GC.
