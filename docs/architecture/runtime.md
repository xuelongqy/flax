# Runtime Design

Status: intended architecture; no runtime behavior is implemented.

## Product direction

JavaScript describes interfaces, state, and interactions while Dart and Flutter own
widgets, layout, painting, animation, and native controllers. Flax does not introduce an
HTML/CSS/DOM rendering layer or require React or Vue.

Flet informed the initial investigation. Flax is intended to use generated JS bindings
and a local runtime integration, not Flet's Python runtime or transport.

## Engines and host environment

JSI is the intended engine-facing abstraction. A C ABI separates the C++ runtime from
Dart FFI. Engine initialization, bytecode, debugging, and distribution remain
engine-specific concerns.

Hermes, QuickJS-NG, and V8 are candidates. A default engine and supported platform
matrix remain undecided. JSI compatibility does not establish identical language
features, performance, or platform support.

Timers, networking, module loading, and other host services need explicit ownership.
They are not supplied merely by embedding an engine. Browser-based Flutter Web interop
is a separate future path.

## Scheduling and callbacks

The runtime must serialize engine access and respect Dart isolate callback constraints.
A synchronous Flutter builder must invoke JS and return to the correct UI isolate
execution path. FFI availability alone does not establish safe synchronous reentry.

The timing of events, microtasks, signal flushes, and Flutter frame updates must be
defined and tested across engines before an API is promised.

## Signals and Flutter dependencies

The design favors explicit signal binding descriptors. Reading a signal value produces a
snapshot; consuming a binding descriptor subscribes the relevant component property.
Computed expressions use explicit bindings.

Signals will schedule updates to the corresponding Dart host State or Element. Flutter
widgets remain immutable. Local rebuilds can still cause wider layout or paint work.

JS reactive dependencies and Flutter inherited dependencies are distinct. A Theme lookup
made with the actual context during a synchronous builder should register the normal
Flutter dependency and does not require an additional signal binding solely for theme
changes.

No signal classes, binding functions, or component constructors are exported yet.

## Context, controllers, and lifetime

BuildContext is intended to be a borrowed handle to a real Flutter Element, valid within
the appropriate builder execution. It is not an unrestricted long-lived JS value.

Controllers are real Dart objects accessed through JS handles. The bridge will need
synchronous calls, listeners, Future-to-Promise mapping, and error propagation with
explicit ownership.

Component teardown must release owned subscriptions, callbacks, and controllers.
Borrowed host objects must not be disposed by the guest. JS garbage collection alone is
insufficient for deterministic Flutter resource disposal. Runtime shutdown must prevent
later callbacks from entering a destroyed instance.

## Deferred concerns

Instance isolation, capability boundaries, hot reload, inspector integration, and
concrete cross-language interfaces remain open. JSI is not itself a mini-app security
boundary.

Node, Python, Rust, and other backend integrations are deferred. The first host
integration is Dart/Flutter.
