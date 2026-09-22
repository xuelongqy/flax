# Generated Top-level Functions

UI protocol 20 includes named JS exports for selected public Dart functions. Calls share
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

Selected scalar, enum, object, collection, synchronous callback, returned function, and
Future conversions reuse member-call behavior. Dart invocation/conversion errors throw
synchronously into JS; Future completion uses the UI Promise checkpoint and close
cancellation. Unsupported signatures fail generation. Widget builder inputs require an
explicit mounted-result owner; ordinary top-level functions cannot retain them.

## Native dialogs

Material `showDialog` is called directly with Dart `Object?` specialization. Its result
uses NavigationData copying. AlertDialog selects key, title, content, actions, and
scrollable; child bindings and custom State work normally.

Install a stable observer on the Navigator that the function will use. For a Dart host:

```dart
final observer = FlaxNavigatorObserver();
// Keep this instance across rebuilds; Flutter associates it with one Navigator.
final app = MaterialApp(navigatorObservers: [observer], home: content);
```

For a JS-owned MaterialApp:

```typescript
import { FlaxNavigatorObserver } from '@flax/core/navigation';
import { Navigator, Text } from '@flax/flutter/widgets';
import {
  AlertDialog,
  MaterialApp,
  TextButton,
  showDialog,
} from '@flax/flutter/material';

const observer = FlaxNavigatorObserver();
const app = MaterialApp({ navigatorObservers: [observer], home });

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
Navigator; `useRootNavigator: false` chooses the nearest one. Missing observers fail
before invoking the function or opening a dialog. Other observers may coexist, and one
installed Flax observer can serve multiple sessions without belonging to any of them.

## Route callback ownership

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
    data:
      result: true
    route:
      context: context
      rootNavigator: useRootNavigator
      builders: [builder]
```

These roles describe a restricted contract: the function synchronously pushes exactly
one TransitionRoute and returns a Future. Each selected builder is a synchronous,
non-null WidgetBuilder with a BuildContext parameter. No function names are inferred.
Asynchronous navigation, arbitrary Route subclasses, and independent dialog windows are
outside this contract.

During that call the observer captures the actual didPush notification. A nested call
temporarily replaces and then restores the current record. The Route retains its
builders independently of the source Context, page, or event; Flutter first invokes a
builder when it builds the dialog. The existing content host owns each mounted result.
The observer does not maintain a page stack or replace Flutter theme/transition code.

The result Future and TransitionRoute.completed have separate responsibilities. The
first delivers the Promise result; the second releases the Route lease after exit.
Mounted content retains its own resources until unmount. If invocation throws after
pushing, the accepted Route still owns its resources until it actually exits; native
side effects are not rolled back.

Every failed builder invocation shows an error placeholder for that invocation. Errors
are reported once and later valid builds can recover. Promise builders and invalid Widget
returns are rejected. Closing rejects new dialogs and cancels pending Promise delivery,
while accepted dialogs can still rebuild and return. The host must remove them before
close can finish. Application disposal remains the application's responsibility. See
[navigation ownership](navigation.md).
