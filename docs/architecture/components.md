# Custom Widgets, State and Signals

JS `StatelessWidget`, `StatefulWidget` and `State<T>` use real Flutter Elements and
State. They work in generated children, named pages, builders, Routes, Pages and lazy
lists. The implementation targets the existing macOS arm64 Hermes/V8 runtime.

## Application API

```typescript
class Counter extends StatefulWidget {
  constructor(
    readonly initial = 0,
    options: WidgetOptions = {},
  ) {
    super(options);
  }
  createState(): State<Counter> {
    return new CounterState();
  }
}

class CounterState extends State<Counter> {
  count = 0;
  readonly detail = signal('Ready');

  initState(): void {
    super.initState();
    this.count = this.widget.initial;
  }

  build(context: BuildContext): Widget {
    return Column({
      children: [
        Text(`Count: ${this.count}`),
        Text(this.detail.bind),
        TextButton({
          child: Text('Increment'),
          onPressed: () =>
            this.setState(() => {
              this.count++;
            }),
        }),
      ],
    });
  }
}

runApp(new Counter(3));
```

The imports are `signal` from `@flax/core`, component/layout types from
`@flax/flutter/widgets`, and `TextButton` from `@flax/flutter/material`. Existing
generated constructors retain their function syntax.

Application components are class-based Flutter Widgets. An arbitrary JavaScript function
that returns a Widget is not a component and receives no mount, State or lifecycle
ownership. Flutter callback APIs such as builders remain ordinary functions; their
callback/result lifetime follows the generated Flutter API contract rather than creating
a second component model.

A Widget is configuration. Its instance is shallow-frozen on acceptance, after the
subclass constructor finishes. Its referenced signals and controllers are not frozen.
Fields do not automatically subscribe or unwrap bindings. Share a signal explicitly or
pass a new configuration; use `.bind` in the returned generated properties.

Each actual mount creates a fresh JS State. Reusing one State, including after disposal,
is rejected. One Widget instance can appear in multiple positions with separate States.
The readonly `widget` getter refers to the current original JS configuration;
`didUpdateWidget(oldWidget)` receives the previous original configuration. The old
configuration remains retained until the hook returns. TS `State<T>` associates those
values statically; it introduces no runtime generic tag.

## Native lifecycle and identity

Flutter creates the real State before attaching its Element. JS State constructors can
initialize fields, but `widget`, `context` and `setState` are unavailable there;
`mounted` is false. `initState`, `didChangeDependencies`, `didUpdateWidget`,
`deactivate`, `activate`, `dispose`, `reassemble` and `build` follow Flutter's
lifecycle. Describing or validating a Widget does not call `createState` or `build`.

Overrides call explicit `super` at the desired point. Generated Dart entries call the
actual parent implementation, without virtual recursion or an automatic second call.
Required-super metadata comes from analyzer. Missing calls are diagnosed; Flax does not
supply a missing call. A JS intermediate base class uses ordinary JS inheritance.

The Context belongs to the actual component Element. Theme and Directionality register
native dependencies and trigger the appropriate lifecycle/build calls. Inherited queries
in `initState` remain invalid. Deactivated Elements retain identity, and reactivation
uses the same Context. During dispose, native State.mounted can still be true while its
already-unmounted Context reports false. Afterwards the JS State is retired, mounted
returns false, and widget/context/setState access fails.

JS component proxies expose a cached Dart `Type` token through `runtimeType`. The
session and original JS constructor determine identity; class names only label the
token. Different classes with the same name remain distinct. The token retains no JS
handle or runtime, and reading it never crosses the bridge. Native Dart `is`/`as`,
generic parameters and interface implementation remain those of the actual proxy.

The real proxy carries the original application key, including null. There is no outer
component boundary or internal type key. Flutter applies its normal type/key matching,
including unkeyed mixed-type lists. Stable application keys are still appropriate for
logical items that move; native matching does not preserve already-unmounted State.
Generated native Widget hosts keep their existing types.

## State variants and native mixins

The exact Flutter `State<T>` binding defines fixed `proxyVariants`. A JavaScript State
chooses its variant by extending the generated TypeScript base:

```typescript
class PageState extends SingleTickerProviderState<Page> {
  initState(): void {
    super.initState();
    this.controller = AnimationController({
      vsync: this,
      duration: Duration({ milliseconds: 300 }),
    });
  }

  dispose(): void {
    this.controller.dispose();
    super.dispose();
  }
}
```

Flutter still creates the real State host. Its generated Dart class applies the selected
Flutter mixins in configuration order and applies `FlaxStateProxy` last. Therefore a JS
`super.dispose()` or `super.build(context)` enters the actual Dart mixin chain.
`SingleTickerProviderState` and `TickerProviderState` implement the real
`TickerProvider` interface; `KeepAliveTickerState` also exposes `wantKeepAlive`,
`updateKeepAlive()` and the required direct-super build path.

Passing `this` to a Dart interface parameter resolves the live component-State ID back
to that real host and validates the requested interface. Plain State, arbitrary JS
objects, foreign-session States and disposed States fail before the Dart call. The
reference is invalid immediately after disposal. Variants are pre-generated; Flax never
reads JavaScript source to synthesize Dart mixins at runtime.

## Queries and layout measurements

An initialized, live Dart `FlaxSession` exposes
`Type componentType(FlaxJsFunction constructor)`. It borrows the function reference and
neither executes the constructor nor mounts content. The caller still releases its owned
function handle. The returned token works with native `find.byType`, `tap`, `getSize`
and `getRect`. Multiple instances require the normal Finder disambiguation. Foreign
runtime references and non-component constructors are rejected. Saved tokens remain
comparable and printable after the session closes.

JS Contexts expose `findAncestorWidgetOfExactType(ComponentClass)`. The result is the
nearest same-session ancestor's original JS Widget configuration, or null. Lookup
excludes self and subclasses, does not construct the class, and does not subscribe to
changes. Updated parent configurations are visible through an existing child Context.
Queries require an active mounted Context and are invalid in deactivate/dispose. This
extension queries custom JS components, not arbitrary generated Dart Widgets or State.
It does not turn a JS constructor into a Dart generic type argument.

`BuildContext.size` returns a real readonly `Size` reference with width and height. Read
it after layout; Flutter's build-time and non-RenderBox diagnostics still apply. A
Widget is configuration and can mount repeatedly: dimensions belong to the particular
Context. LayoutBuilder supplies constraints, not the resulting size.

```typescript
async measure(): Promise<void> {
  await SchedulerBinding.instance.endOfFrame;
  if (!this.mounted) return;
  const size = this.context.size;
  // Consume size?.width and size?.height here.
}
```

Use this in an independent async method or an async-capable event. Build and lifecycle
hooks stay synchronous. The generated SchedulerBinding singleton and Future getter call
the real Flutter API: an idle request schedules a frame, otherwise it waits for the
current frame. JS resumes at the existing safe microtask checkpoint. Multiple waiters
work independently; session close rejects pending delivery and ignores late completion.
The application checks mounted if a component disappears before delivery. There is no
ongoing size subscription, polling or JS scheduler. addPostFrameCallback, GlobalKey,
whole-tree selectors, ancestor-State queries and RenderObject access are not exposed by
this change.

## Updates and errors

`setState` executes its JS callback synchronously inside Dart `State.setState`, then
lets Flutter mark the Element dirty. All supplied callbacks execute; Flutter coalesces
builds. If the callback throws, previous mutations remain and that invocation does not
mark a rebuild. Promise/thenable returns are rejected; ordinary return values are
ignored. Flutter's invalid build-time and lifecycle checks still apply.

Signals keep their existing scheduling. `.value` does not track a component build.
Signal-only property updates do not call the component's build; build/layout-time
invalidations wait for the next frame. A simultaneous State rebuild and property update
reuse matching mounted subscriptions and retire stale notifications.

Each mount owns one last valid build result. Conversion validates before replacing the
result; mounted descendants retain independent leases. A failed build reports through
onError and retains its last valid content, or shows a bounded ErrorWidget on first
failure. Later builds can recover. State fields are not rolled back.

Invalid createState and initState failures report through onError and leave an error
host that can unmount normally. The failed hook is not replayed. Exceptions, Promise
returns and missing required super calls in `didChangeDependencies`, `didUpdateWidget`,
`deactivate`, `activate` and `reassemble` report once through onError (or FlutterError
by default). They do not escape the State hook: Flutter must finish its Element
operation so normal child-first unmount remains possible. User code after the failure is
not resumed, and no missing super call is supplied. Flutter continues its normal build
scheduling; a subsequent failed build uses the existing last-valid-result behavior.
Mutated application fields are not rolled back. Disposal failures, including a missing
super call, report through onError at the Element boundary so one failing State does not
interrupt unmounting its ancestors and siblings. Invalid user lifecycle code is not
promised a repaired native State; bridge cleanup is still deterministic.

## Ownership and limits

Dart APIs may save a component Widget without mounting it. Its configuration owns the JS
descriptor independently; each actual mount still creates a separate State. Weak
configuration caches and detached Finalizer records permit collection after Dart and JS
release their references. See
[Widget ownership](interop.md#widget-configuration-and-mounting).

Application dispose runs after Flutter children unmount. Release application-created
Controller/FocusNode objects and remove listeners there; call super explicitly. Session
close never disposes those application objects automatically. Component results,
Contexts, JS State and Widget handles are released after active calls return. Late JS
State calls fail before entering a retired Dart State.

Existing accepted Routes may rebuild while a session closes. Component mount leases keep
the runtime alive until their cleanup finishes, alongside existing Route and transition
leases. Named-page lifecycle cleanup remains available for page-factory resources.

UI protocol 21 includes component type metadata, ancestor queries, returned Dart
functions and Widget references; previous protocols are rejected. The C ABI and runtime
microtask API are unchanged. There is no arbitrary Flutter concrete-class inheritance,
dynamic mixin composition, JS GlobalKey/currentState, state restoration, JS source hot
reload, automatic build tracking or new engine/platform. `reassemble` forwards Flutter's
lifecycle only.
