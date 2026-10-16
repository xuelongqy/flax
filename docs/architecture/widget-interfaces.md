# Widget Interfaces and Material Page Shells

UI protocol 24 supports selected native Widget interfaces and generated Scaffold, AppBar
and PreferredSize bindings on the maintained Flutter engine. The native ABI is
unchanged.

## Fixed configuration and local children

Scaffold properties except key accept bindings. AppBar and PreferredSize constructor
arguments are fixed values: update the containing property to replace their
configuration. Their descendants retain the existing State and explicit signals
behavior.

```typescript
const height = signal(56);
const title = signal('Orders');
const body = buildBody();

Scaffold({
  appBar: bind(() =>
    AppBar({
      toolbarHeight: height.value,
      title: Text(title.bind),
    }),
  ),
  body,
});
```

Changing height rebuilds the Scaffold configuration so Flutter reads the new preferred
size. Changing title only updates Text. Flutter can relayout ancestors without
rebuilding their Widgets, but that does not reevaluate a preferred size previously read
by Scaffold. Flax does not track child-to-parent configuration dependencies.

This rule applies to every direct argument of the two interface-bearing Widgets,
including title, actions, bottom and child. Binding those arguments is rejected in TS,
JS construction and Dart acceptance. Bind the containing property instead. Optional
undefined remains omission; null follows the native signature. Child descriptors can
still contain bindings and custom JS components. Native argument conversion reads child
bindings outside the parent signal computation. Composed child bindings retain their own
dependencies. If conversion fails before mounting, the parent retains the failed inputs
as recovery dependencies until it accepts a valid configuration. This dependency
isolation applies to `bind()` and built-in signal bindings; custom Binding readers
retain their own tracking behavior.

## Selected API

| Type          | Selected constructors and parameters                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scaffold      | key, appBar, body, bottomNavigationBar, backgroundColor, resizeToAvoidBottomInset, primary, extendBody, extendBodyBehindAppBar                    |
| AppBar        | key, leading, automaticallyImplyLeading, title, actions, bottom, elevation, backgroundColor, foregroundColor, centerTitle, primary, toolbarHeight |
| PreferredSize | key, preferredSize, child                                                                                                                         |
| Size          | unnamed width/height and fromHeight(height); existing readonly width/height                                                                       |

PreferredSizeWidget exposes an abstract JS subclass constructor backed by a generated
StatelessWidget implementing the real Dart interface. Its public preferredSize getter
uses ordinary object conversion. Existing native values retain their original identity.
A custom JS toolbar can also be passed as PreferredSize.child. A Builder or custom
component returning AppBar does not itself implement PreferredSizeWidget. Native
DartWidget inputs are checked against their actual Dart interface; an opaque Widget TS
type does not claim a narrower interface without a typed declaration.

## Generation and ownership

Select native configuration contracts with `kind: widgetInterface` and select a Widget's
contracts with `widgetInterfaces`. Analyzer checks the actual implemented interface and
substitutes the Widget owner's generic arguments. Generic contracts use the existing
native object view and checked engine type handles, including nested arguments.
Nongeneric contracts retain opaque Widget tokens and native member selections, without
exposing every native member as a JS API. Dependency providers retain the same generic
Widget contracts after Manifest projection; automatic and explicit consumers reuse their
object views without rebinding the interface. Selected members of generic contracts also
populate the implementing Widget's native view; they do not need to be selected again on
that Widget.

Interface-bearing factories construct the actual Dart Widget through the shared object
factory. Flutter reads its original fields and invokes its original methods directly. No
generated forwarding host, extra Element, copied method default or additional bridge
call is needed. Members named `configuration`, `node` or `buildNative` therefore have no
special conflict. Private constant defaults and private types in native-only signatures
remain in their declaring Dart library; they do not need a JS converter or public
import. Members explicitly exposed to JS still follow ordinary public conversion rules.

For JS inheritance, select `proxy: extends` on the real Dart Widget class and select the
members to override. The existing generated Dart subclass preserves the actual
interface, JS receiver, private fields, method overrides and direct `super` calls.
Generic classes use `Class.$type` with the same checked type factories as other
bindings. A raw JS object is not a Flutter Widget and does not become one by supplying
an interface Type token; a compiled Dart class must implement that interface.

Select `proxy: implements` on a `kind: widgetInterface` declaration to generate that
compiled class through the shared proxy emitter. The JS subclass supplies the selected
interface members and a synchronous `build`. The native base supplies Flutter's Element
and diagnostics behavior; `super({key})` forwards the optional key. Generic and
inherited interfaces use the same checked type factories and member conversions. Only
convertible public members can be overridden; native-only interfaces with private
signatures keep their value-only selection. Automatic selection adds the proxy when its
complete conversion is available and continues to reuse dependency providers.

The generated TypeScript view preserves selected parent interfaces and their generic
arguments, so a child interface can be passed to an API expecting its parent without a
cast. A native-only parent contributes its nominal interface identity without exposing
unconvertible members.

```typescript
class Toolbar extends PreferredSizeWidget {
  get preferredSize() {
    return Size.fromHeight(56);
  }
  build(context: BuildContext) {
    return Text('Orders');
  }
}
Scaffold({ appBar: new Toolbar() });
```

This adds no wrapper Widget or separate lifecycle/GC implementation. Ordinary JS
subclasses can override their JS parent's methods and use `super`; the abstract
interface itself has no Dart build or member implementation to call. Native
configurations read by Flutter remain direct Dart calls; a JS override uses the existing
synchronous proxy call.

CupertinoNavigationBar and AppBar are actual native configurations. Their preferred
sizes, obstruction behavior, callback/Future/Stream identities and private sentinel
subtypes are preserved. Their native members add no JS calls when Flutter reads them. A
native setter follows Dart behavior and does not schedule a rebuild.

Manifest 24 additionally records `proxy.widgetInterface`, preserving the native base
choice through generic specialization and dependency projections. Native-only members
record only kind, name and parameter names, without forwarding source or import fields.
Previous formats are rejected. Regenerate providers and consumers together. Declaration
IDs, selection format 2, UI protocol 24, internal engine binding extension 8 and native
ABI 2 stay unchanged. See
[the native-value decision](../decisions/0044-native-widget-interface-values.md), which
supersedes the forwarding implementation in ADR 0029.

Modules exposing interface subclass constructors require `widget-interface-proxies`, so
an older host rejects their registration before construction.

Interface Widgets require fixed constructor arguments and accept ordinary typed
callbacks, including callbacks inside supported collections. The native configuration
uses the original closures during validation, mounting and later Dart reuse; it does not
clone callbacks per mount. Widgets inside child/children keep their own mounted
subscriptions. A native setter mutates the target configuration according to its Dart
implementation; it does not create a reactive subscription or schedule a rebuild.

Interface types work in Widget parameters, typed Widget lists and native Widget results.
Ordinary and mounted callbacks share conversion for interface-typed arguments and
results, including nullable results, Futures and direct typed Widget lists. Returned
Dart functions use the same conversions. For example,
`PreferredSizeWidget Function(BuildContext)` can return an AppBar or PreferredSize,
while a plain Text fails the interface check. Configured Route/Page builders forward the
original typed closure and preserve its actual result without an extra content host.
Navigation entries add only close admission and optional UI error handling.

Callback results preserve native Widget identity and native configurations' selected
interfaces. Narrow interface failures propagate the original error; an ErrorWidget
cannot satisfy an arbitrary interface. Only base `Widget` and `List<Widget>` UI
callbacks can use the existing error placeholder. Synchronous callbacks still reject
Promises. Finite List/Set/Map/Record aggregates, including nullable elements and async
compositions, retain each Widget configuration before temporary conversion holds are
released. Widget Iterable callbacks use the shared lazy typed adapter. Concrete native
class signatures such as `Text Function()` materialize the real native configuration and
validate its Dart type. Selected `proxy: extends` classes can also return a JS subclass
backed by a native Dart subclass. Base Widget and interface signatures retain their
existing host and reactive configuration semantics.

A previous interface configuration may still be read by native didUpdateWidget even if
its Widget was never mounted. The actual Dart value follows Dart references. Escaped
callbacks and generated child configurations use the shared weak cleanup mechanism, so a
saved native configuration remains usable after its original host unmounts. Unmount
releases mounted subscriptions immediately; discarded configurations release bridge
handles after actual Dart GC. Session close revokes all bridge holdings without waiting
for GC or disposing application values.

Configuration replacement uses the existing prepare, validate, commit and release
sequence. Mounted children hold their own resources; new configurations do not reset
State when native type/key matching retains it. No application object disposal, upward
notification graph, extra Element or ComponentBoundary is added for interfaces. Selected
native JS subclasses use a weak runtimeType token to preserve Flutter type matching
between JS classes.

The
[widget-interface owner tests](../../packages/flax_material_ui/test/ui/widget_interfaces_test.dart)
verify the selected Scaffold/AppBar/PreferredSize surface inside the Material UI
package. SnackBar, ScaffoldState operations and arbitrary JS interface implementation
remain unselected. See
[the decision](../decisions/0011-widget-interface-configuration.md).
