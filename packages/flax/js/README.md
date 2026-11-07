# @flax/core-runtime

The physical JavaScript runtime and Core binding-delivery package. Applications import
signals from `@flax/core`, binding transport from `@flax/core/bindings`, Flax-owned
navigation from `@flax/core/navigation`, and host declarations from `@flax/core/host`.
`@flax/core/assets` exports `getAssetBundle()` for the Session's native Flutter
resources; its types use the optional `@flax/flutter` peer installed by UI applications.
Public Flutter and Dart SDK declarations live under `@flax/flutter/*` and
`@flax/dart/*`; this package may physically carry their selected implementation modules
without changing those public specifiers.

Install the same version as the Dart `flax` package:

```sh
pnpm add @flax/core@<version> @flax/core-runtime@<version>
```

The public `@flax/core` package contains declarations only. The default Dart plugin
injects the prepared runtime modules; business bundles resolve public imports through
that inventory. Installing this source package does not activate a plugin. `/host`
declares globals installed by the Dart session host. Compile sources using that global
entry in an ES-only TypeScript project; `lib.dom` declares a competing browser
environment. `flax_modules.json` describes public modules physically delivered by this
package for host preparation and bundler resolution.

Sessions always provide fetch, Headers, Request and Response through this host entry,
including with an empty plugin list. The first HTTP request creates a client owned by
that Session. Configure `fetchBaseUrl` on the Dart Session or View for relative URLs.

Core also declares the shared `window` global alias, User Timing marks/measures and
`PerformanceObserver` (mark/measure only), plus secure `crypto.getRandomValues` and
`crypto.randomUUID`. They are installed by every Session without renderer plugins. See
the [host contract](../../../docs/architecture/host.md#basic-environment).

This package is private while Flax is under development.

Signals support Widget-independent business subscriptions through `effect` and
`signal.subscribe(listener)`. Both return a stop function owned by the caller. Signals
also expose `peek()`; `untracked` and `action` reuse the same signals-core instance. See
[subscription cleanup](../../../docs/architecture/ui.md#business-subscriptions) for
scheduling, ownership, and examples.

Generic Dart class exports provide `Bag.$type(dartTypes.string)` to select a real
`Bag<String>` owner. The returned handle keeps its default/named constructors and is
also usable with `asDart` and nested type tokens. All exports share one registered
selector function; generated proxy classes declare its type without duplicating its JS
implementation. It reuses `dartType` and its caches. See
[Dart type selection](../../../docs/architecture/bindings.md#dart-type-selection).

`@flax/core/bindings` exports shared `asDart(value, Target)` and `getDartType(value)`.
The former checks the real Dart instance before returning a selected class view; the
latter returns diagnostic Dart `runtimeType` text on demand. They do not construct or
copy objects. Generated target tokens, session identity and Context/State lifetimes are
validated by the existing bridge. See
[checked views](../../../docs/architecture/objects.md#checked-views-and-dart-type-diagnostics).

## Unlinking a view or listener

```ts
import { addJointListener, ownJointObject, unlinkJoint } from '@flax/core';
import { TextEditingController } from '@flax/flutter/widgets';

const controller = TextEditingController({ text: 'draft' });
const view = ownJointObject(controller);
const listener = addJointListener(view, () => console.log(controller.text));

unlinkJoint(view); // Releases the Dart edge of this view immediately.
controller.text = 'updated';
unlinkJoint(listener); // Removes exactly this listener registration.
```

Each call to `ownJointObject` creates a separate view with the source's Dart type and
identity. The session accepts live ordinary Dart objects, and throws `TypeError` for
borrowed Context or State, custom JS implementations, and released or foreign
references. Use a controller whose disposal the session owns or observes.

`addJointListener` supports generated `TextEditingController` bindings. Each call
registers a separate synchronous callback, including repeated use of the same function.
The registration has its own lifetime and a callback that unlinks itself can finish the
current invocation. Keep the returned token for explicit removal.

`unlinkJoint` returns `true` on the first successful call and `false` on repeats. It
throws `TypeError` for values without a capability from the current session. After
unlinking an object view, other views and normal Dart ownership remain usable.

Pure JS/Wasm Dedicated Workers use `Worker` in main sessions. They include non-HTML
`ImageData`, `ImageBitmap` and `createImageBitmap`, CPU Blob decoding/transforms, and
image clone/transfer. Worker script types are available through `@flax/core/host/worker`
without Image/HTMLImageElement, window or document globals; see the
[worker contract](../../../docs/architecture/dedicated-workers.md).
