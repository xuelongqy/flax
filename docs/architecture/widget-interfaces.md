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

Select readonly configuration getters with kind: widgetInterface. Select contracts on an
implementing Widget with widgetInterfaces. Analyzer verifies public declarations,
inheritance, compatibility and all additional interface members. Standard Widget and
diagnostic members are supplied by the existing FlaxWidgetHost. Interface methods,
setters, generics, and direct or collection-contained constructor callbacks are outside
this subset. Widgets inside child/children keep their own callback ownership.

Generated hosts implement the actual Dart interface and forward its getters to the
validated native configuration. Constructor validation happens before acceptance and
does not mount children. The same fixed configuration is reused on mounting. Getter
reads add no bridge call, allocation, constructor call or Element. AppBar's original
preferredSize object is preserved, including its private Size subtype used by native
theme-height fallback.

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

The [embedded example](../../examples/embedded/README.md) includes a named scaffold page
whose JS owns the Scaffold. Dart supplies MaterialApp, navigation and a theme control.
Drawer, SnackBar, ScaffoldState operations and arbitrary JS interface implementation
remain unselected. See
[the decision](../decisions/0011-widget-interface-configuration.md).
