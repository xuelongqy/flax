# Dart Objects and Bridge References

Status: implemented on macOS arm64 Hermes/V8, UI protocol 21. The native C ABI is
unchanged. See [the interop decision](../decisions/0009-dart-interop.md).

## Identity and application ownership

Constructors, getters, setters, selected methods and static fields call real Dart APIs.
Ordinary types may have no constructor or disposal method. Returned, previously unseen
bound Dart objects can be wrapped. The identity table uses Dart identity rather than
`==`. Ordinary result encoding reuses a compatible live JS wrapper. Separately created
deferred wrappers may materialize to the same Dart object; they remain distinct JS
aliases and share the Dart identity's lifetime. Collections use
[typed views](interop.md) of the same original instance. Invalid, released,
type-incompatible and cross-session JS references fail before invoking Dart.

Applications follow Flutter ownership rules and call exposed disposal methods
themselves. The bridge does not restrict disposal based on where an object came from.
Successful disposal revokes its wrapper; repeated disposal or other access then fails.
If Dart throws, the error propagates and the wrapper is not revoked. Dart may already
have performed side effects, so applications must not assume rollback or blindly retry.
Removing a paired listener from a successfully disposed wrapper remains safe.

Automatic binding may recognize a conventional synchronous `void dispose()` method so
the explicit call receives this wrapper-revocation behavior without per-class
configuration. Recognition does not make Flax the owner and never schedules disposal.

**Session close never disposes application objects.** It removes registered listeners,
revokes callbacks, releases bridge references and destroys the engine after accepted
mounts, Routes and transitions finish. Existing accepted pages can still use and replace
objects while closing. New roots and navigation remain prohibited.

Descriptors and mounted properties independently borrow references, including objects
inside collections. Accepting and mounting both validate them. Static Widget reuse does
not bypass validation or share Element/State ownership. Flutter handles Controller and
FocusNode attachment, replacement and detachment.

## Values are references too

TextEditingValue, TextSelection, TextRange, BoxConstraints, EdgeInsets, ValueKey and
RouteSettings use the same object path. Their selected fields are real getters; each
access crosses the bridge. `copyWith` returns an actual new Dart object, with no
snapshot restoration. Saving an old editing value keeps that immutable value unchanged
after its controller receives another value. Enum results use canonical JS enum
instances.

Constructors and methods retain omitted arguments so Dart supplies real defaults.
Explicit null remains distinct. Optional undefined means omission; it is not silently
converted to null inside collections. Widget, Page and Route construction still uses its
own descriptors. Navigation and named-page parameters retain their data-copy contract.

## Callbacks, listeners and collection

A generated Dart closure retains a shared JS callback wrapper. Explicit release and a
Dart Finalizer use the same idempotent function-handle cleanup. The finalization token
holds no strong reference to that wrapper or its owner. A running callback remains
usable until it returns. Builders retain their result per mounted instance.

Paired listeners reuse a Dart closure for the same object, pair and JS function.
Repeated registration and one-at-a-time removal call the real Dart methods. UI void
callbacks observe Promise rejections; synchronous value callbacks propagate failures to
the caller. Flutter enforces disposal and notification preconditions without
class-specific guards.

The JS identity cache stores the weak aliases for each Dart identity. Existing UI
checkpoints inspect at most 64 identities, remove expired aliases, and release the Dart
table entry only after the last alias expires. Explicit release and session close revoke
all aliases for the identity. The checkpoint then drains engine microtasks and clears
kept objects. There is no timer, idle polling or FinalizationRegistry dependency.
Reclamation requires engine GC and subsequent UI activity; session close does not wait
for either.

There is no cross-language cycle collector. A Dart object retaining a JS closure that
retains its wrapper forms a cycle, including captures through a shared lexical scope.
Applications remove listeners or clear long-lived registrations to break it. Session
close clears all bridge holdings even when such a cycle remains. This is separate from
calling application disposal methods.

## Page cleanup

Register cleanup during the synchronous named-page factory:

```javascript
registerPage('scroll', (_, lifecycle) => {
  const controller = ScrollController();
  const offset = signal(0);
  const update = () => {
    offset.value = controller.offset;
  };
  controller.addListener(update);
  lifecycle.onDispose(() => controller.dispose());
  lifecycle.onDispose(() => controller.removeListener(update));
  return SingleChildScrollView({ controller, child: Text('Content') });
});
```

Cleanup runs once per registration in reverse order, after content descendants unmount,
while the engine is alive. Factory or descriptor failure also runs registered cleanup.
Errors are reported individually and do not stop later cleanup. Cleanup is synchronous.
Ordinary rebuild and parameter updates preserve content state; actual unmount, including
`maintainState: false`, runs cleanup. Borrowers of shared objects remove their own
listeners; their creator remains responsible for disposal.

## Selected mutable objects

ScrollController supports its initial offset, persistence flag, debug label, hasClients,
offset, jumpTo, animateTo and listener/disposal methods. SingleChildScrollView and
ListView.builder borrow it. Flutter's single/multiple-position rules apply directly,
including release-mode behavior.

`animateTo(offset, {duration, curve})` accepts real Duration and Curve references and
returns `Promise<void>` through the existing Dart Future conversion. Flutter owns the
animation, curve calculation and interruption semantics. Session shutdown retires bridge
delivery; it does not transfer ownership of the controller or replace explicit page
cleanup.

Core selects non-constructible Curve with transform(t), Cubic(a, b, c, d) with its four
getters and inherited transform, and Curves.linear/ease/easeIn/easeOut/easeInOut. Curves
is a static constant container. These values use the same object-reference path as
[shapes and cursors](styles.md#shapes-cursors-and-density). The
[shared-object tests](../../packages/flax_material_ui/test/ui/shared_objects_test.dart)
exercise intermediate/final scroll positions, Future completion and closing during an
animation.

TextEditingController and FocusNode use this same mechanism. See
[text input](text-input.md), [collection wrappers](interop.md), and
[generator limits](bindings.md). No automatic reactive tracking is installed. Stream,
Future and Promise conversion occurs only at explicitly generated typed API positions.

## Callback results

A successful ordinary synchronous callback transfers closures inside returned List/Map
values to their Dart owners before releasing conversion temporaries. Failed conversion
releases only the resources prepared by that attempt. Escaped closures use the same Dart
Finalizer and deterministic session cleanup as stored constructor/method callbacks;
active invocations retain their function until return. Widget builders, Route factories
and mounted subtrees keep their existing result ownership.

Widget parameters may contain callbacks in typed List elements and Map values. A weak
Dart closure association identifies Flax callbacks even when a Dart collection returns
them to a Widget. Each mount adapts its own callbacks; native Dart closures remain
unchanged. Only containers needing adaptation are copied, retaining shared references
and cycles without changing the application's collection. Unknown Object/dynamic
contents are not searched for callbacks, and callback Map keys fail generation.

Mounted Widget/Widget? callbacks own each invocation's result independently, using the
same child host and unmounted-result cleanup as lazy lists. A failure reports once and
returns a bounded error placeholder; it never reuses another invocation's content.
Nullable results accept null, while Promise and invalid descriptions fail. Nested void
events report Promise rejection through the existing UI boundary.

Returned Dart functions and Widgets use the existing weak JS reference cache. A saved
function remains callable after removal from its source collection. Releasing a bridge
reference never disposes an application object. Calls retain their conversion resources
until result handoff. Escaping Flax Widgets independently hold configuration resources
before temporary holds are released; native wrappers need no field inspection. See
[configuration ownership](interop.md#widget-configuration-and-mounting). Closing revokes
all remaining configuration records and bridge entries deterministically.

GC observations exclude known cross-language cycles: even a closure with no apparent
free variables may retain its lexical environment. If that environment also holds the
returned wrapper, applications must break the relationship or close the session. Weak
caches do not implement cross-language cycle collection.

Dart access to properties implemented in JS uses the same callback ownership as methods.
See [generated proxy properties](proxy-properties.md); session cleanup still never
substitutes for application disposal.
