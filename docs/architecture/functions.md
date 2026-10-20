# Generated Top-level Functions

UI protocol 24 includes named JS exports for selected public Dart functions. Calls share
one typed host entry, `FlaxFunctionBinding`, and the existing argument/result
conversion. The generator emits direct Dart calls; it does not register one host
function per API, install application globals, or use reflection. The native ABI
remains 2.

## Selection and calls

Modules may select `functions` without selecting classes. Public re-exports and
`additionalLibraries` resolve to declaration identities. The same declaration cannot be
registered twice; unrelated declarations with the same export name are rejected.

```yaml
functions:
  applyBoxFit:
    parameters: [fit, inputSize, outputSize]
```

Positional parameters retain declaration order; named parameters use a final options
object. `undefined` omits optional arguments, while `null` follows Dart nullability.
Function parameters are ordinary values and cannot subscribe to signals. Private
defaults remain omitted from direct calls so the real function supplies their values.

`typeArguments` selects legal concrete Dart types; TS preserves its generic constraints
and associations without supplying runtime type arguments. `data.parameters` selects
parameter names and `data.result: true` selects the result for explicit NavigationData
conversion. Other Object positions use ordinary Dart interop.

Direct Context parameters are selected automatically and use existing mounted Context
references. For example, `bool isDark(BuildContext context)` can read
`Theme.of(context)` from the Context received by a JS Builder. Constructors and setters
may also pass or store that real Dart Context. This is borrowing: it neither keeps the
Flutter element mounted nor transfers its ownership. Invalid or inactive references fail
conversion.

Direct State inputs also use the existing borrowed reference conversion, for example
`bool isMounted(State state) => state.mounted`. A native State wrapper or a live JS
State resolves to the real Flutter State; forged, foreign-session and unmounted States
are rejected. Passing or saving a State does not keep it mounted. State callbacks use
the same converters in both directions: `void visit(void Function(State) callback)` can
deliver a mounted native State to JS, and a JS callback can return an existing live
State. Returned Dart functions, nested callbacks and supported async compositions reuse
the same validity checks at invocation or delivery.

Widget collections follow the same input conversion as methods and extensions. For
example, `Widget stack(List<Widget> children) => Column(children: children)` accepts
`stack([Text('one'), Text('two')])` or a compatible native Dart Widget list. Native
Widget identity, JS Widget subclasses, nullable elements and nested typed lists keep
their existing conversion rules. Supported Future inputs use the same recursive
conversion. Invalid immediate values fail before invocation; invalid Future completion
values fail asynchronously. List inputs add no new host or ownership configuration.

Selected scalar, enum, object, collection, synchronous callback, returned function, and
Future conversions reuse member-call behavior. Dart invocation/conversion errors throw
synchronously into JS; Future completion uses the UI Promise checkpoint and close
cancellation. Unsupported signatures fail generation.

Ordinary functions, object constructors, methods, and returned Dart functions invoke JS
callbacks directly. The original arguments, including the actual native Context, return
values, synchronous order and exceptions are preserved. Supported signatures include
indexed and named arguments, nullable Widget results, nested callback values, and Future
results; a Future requires a Dart API that actually accepts one. A synchronous Flutter
builder still rejects a Promise.

A generated Dart closure retains its JS function until that closure is collected or the
session closes. Widget configurations returned by JS retain their own bridge resources;
Flutter owns their Elements, State, and build scheduling. Ordinary callbacks create no
extra content host and infer no enclosing Route ownership. Configured navigation calls
below use the same callback graph and explicit Session-close boundary. See
[bridge references and GC](references.md).

## Native dialogs

Material `showDialog` is called directly with Dart `Object?` specialization. Its result
uses ordinary value conversion, including Dart object, DartList and DartMap references.
AlertDialog selects key, title, content, actions, and scrollable; child bindings and
custom State work normally.

A host-created or JS-created Navigator needs no Flax observer. Use the ordinary
MaterialApp, CupertinoApp or Navigator constructor:

```typescript
import { Navigator, Text } from '@flax/flutter/widgets';
import {
  AlertDialog,
  MaterialApp,
  TextButton,
  showDialog,
} from '@flax/flutter/material';

const app = MaterialApp({ home });

const result = await showDialog({
  context,
  builder: (dialogContext) =>
    AlertDialog({
      title: Text('Confirm'),
      actions: [
        TextButton({
          onPressed: () => Navigator.of(dialogContext).pop({ accepted: true }),
          child: Text('Accept'),
        }),
      ],
    }),
});
```

The caller obtains `context` below the target Navigator. The default uses the root
Navigator; `useRootNavigator: false` chooses the nearest one. Flutter owns this lookup
and any application-supplied observers. FlaxNavigatorObserver remains optional.

## Navigation admission and callbacks

```yaml
functions:
  showDialog:
    parameters:
      - context
      - builder
      - barrierDismissible
      - barrierColor
      - barrierLabel
      - useSafeArea
      - useRootNavigator
      - routeSettings
      - fullscreenDialog
      - requestFocus
    typeArguments: ['Object?']
    route:
      builders: [builder]
```

`route` marks a navigation entry so new calls are rejected during Session closing.
`route: {}` is sufficient when no callback needs UI error handling. Optional `builders`
names selected typed callback parameters; duplicate, missing and non-callback names are
rejected. Context and root-Navigator lookup belong to the original Dart function and are
not binding roles. Remove the retired `route.context` and `route.rootNavigator` fields
from existing configurations.

Handwritten bindings use `FlaxRouteCallBinding(['builder'])`, or
`FlaxRouteCallBinding()` when admission is the only policy. Manifest 28 carries this
reduced metadata; providers and consumers must be regenerated together.

The function and its callbacks use ordinary signature validation and conversion: an
`async` function, nullable Future, synchronous result, no Context parameter, optional
callback, named/indexed callback arguments, nullable result and supported async callback
are all permitted. For example, an async helper can take a NavigatorState plus
`Widget? Function({required int index})?`, await application work, and then push a
Route. The callback receives a JS options object such as `{ index: 7 }`. A Future
callback is accepted only when the Dart API declares one; a synchronous Flutter builder
still rejects a Promise. Generic calls keep the same metadata when selecting runtime
types.

Function names and application side effects are not inferred. An admitted async call may
continue its Dart work after close starts; Flax cannot cancel application-owned Futures
or roll back a later native push. Callback access and result delivery still obey the
Session boundary. The runtime never captures or counts pushes, and Route subclasses do
not need a TransitionRoute completion Future.

The original Dart closure retains its JS callback through joint GC. Result conversion
preserves the actual Widget and its selected interfaces. Escaped configurations and
mounted resources use the shared reference mechanism. Flutter owns its theme,
transitions and stack; a native side effect is not rolled back if the call throws.

Failed base Widget builders show an error placeholder for that invocation. Narrow
interface builders propagate their original error. Errors are reported once and later
valid builds can recover while the Session is live. Invalid callback values and results
retain their ordinary type checks; UI error handling does not change a Dart signature.

Closing rejects new dialogs, cancels pending Promise delivery and drains mounted JS
content and active bridge calls. It does not wait for native Route exit animations or
for escaped callbacks to become unreachable. On completion all remaining JS callbacks
are revoked. Void callbacks ignore later calls; result callbacks throw StateError before
entering the destroyed runtime. A later build may therefore show Flutter's error widget.
Keep the Session open if a dialog must continue running JS. Application disposal remains
the application's responsibility. See [navigation ownership](navigation.md).
