# Widget Interfaces and Material Page Shells

UI protocol 20 supports selected native Widget interfaces and generated Scaffold, AppBar
and PreferredSize bindings on macOS arm64 Hermes/V8. The native ABI is unchanged.

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
still contain bindings and custom JS components.

## Selected API

| Type          | Selected constructors and parameters                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scaffold      | key, appBar, body, bottomNavigationBar, backgroundColor, resizeToAvoidBottomInset, primary, extendBody, extendBodyBehindAppBar                    |
| AppBar        | key, leading, automaticallyImplyLeading, title, actions, bottom, elevation, backgroundColor, foregroundColor, centerTitle, primary, toolbarHeight |
| PreferredSize | key, preferredSize, child                                                                                                                         |
| Size          | unnamed width/height and fromHeight(height); existing readonly width/height                                                                       |

PreferredSizeWidget is a non-constructible Widget interface identity. Its preferredSize
getter is implemented for Dart consumers, not exposed as a JS descriptor field. A custom
JS toolbar can be passed as PreferredSize.child. A Builder or custom component returning
AppBar does not itself implement PreferredSizeWidget. Native DartWidget inputs are
checked against their actual Dart interface; an opaque Widget TS type does not claim a
narrower interface without a typed declaration.

## Generation and ownership

Select native configuration contracts with `kind: widgetInterface`. Use the existing
`getters`, `setters` and `methods` selections, listing every additional public instance
member and every method parameter in declaration order. Select the contracts on an
implementing Widget with `widgetInterfaces`. Analyzer resolves inheritance and generic
substitution; compatible shared members are emitted once. Widget and diagnostic members
remain supplied by FlaxWidgetHost. Conflicts with its configuration and lifecycle
members are rejected. Generic interface declarations remain unsupported; generic methods
and bounds are preserved. Supporting generic interface declarations would require a
separate concrete-specialization contract and is intentionally deferred.

Generated hosts implement the Dart interface and directly forward to the cached real
configuration. Signatures may contain BuildContext, Widgets, callbacks, collections,
Records, Future/FutureOr, Stream, nullable types and generic methods without requiring
JS converters or binding owners for those native-only types. Required/optional
positional and named parameters, accessible constant defaults, setters and operators are
preserved. Optional defaults follow the concrete Dart implementation even when it
changes an inherited default or renames positional parameters. Inaccessible
types/defaults fail generation. Interface methods and properties are not exposed as JS
descriptor members. Ordinary bridge validation is unchanged.

Constructor validation happens before acceptance and does not mount children. The same
configuration is reused on mounting; forwarding adds no JS bridge call, constructor or
Element. Arguments, return values, exceptions and asynchronous identities stay native.
For example, CupertinoNavigationBar forwards both `preferredSize` and
`shouldFullyObstruct(BuildContext)` to its native configuration. CupertinoPageScaffold
therefore uses its real obstruction and layout behavior. AppBar's original preferredSize
object, including its private theme-height sentinel subtype, is preserved.

Manifest 8 records native member selections, Dart override source and explicit public
imports separately from bridge TypeRefs. Readers 2 through 7 retain their original
schemas and reject this metadata. Native members add no wire operations or owner rows;
existing declaration IDs, UI protocol 20 and native ABI 2 remain unchanged. See
[ADR 0029](../decisions/0029-native-widget-interface-members.md).

Interface Widgets still require fixed constructor arguments without direct or
collection-contained callbacks. Widgets inside child/children keep their own callback
ownership. A native setter mutates the target configuration according to its Dart
implementation; it does not create a reactive subscription or schedule a rebuild.

Interface types work in Widget parameters, typed Widget lists and native Widget results.
Callbacks declaring a narrower Widget-interface return type are rejected: existing
callback result hosts do not implement arbitrary interfaces. This does not restrict
ordinary callbacks returning Widget, whose content may be an AppBar.

An old interface configuration may still be read by native didUpdateWidget even if its
Widget was never mounted. Its cached Dart value follows the proxy's Dart lifetime;
releasing the bridge lease still releases every JS resource immediately.

Configuration replacement uses the existing prepare, validate, commit and release
sequence. Mounted children hold their own resources; new configurations do not reset
State when native type/key matching retains it. No application object disposal, upward
notification graph, extra Element, ComponentBoundary or runtimeType override is added.

The
[widget-interface owner tests](../../packages/flax_material_ui/test/ui/widget_interfaces_test.dart)
verify the selected Scaffold/AppBar/PreferredSize surface inside the Material UI
package. Drawer, SnackBar, ScaffoldState operations and arbitrary JS interface
implementation remain unselected. See
[the decision](../decisions/0011-widget-interface-configuration.md).
