# Lazy Lists and Independent Widget Results

Status: generated ListView.builder on the existing macOS arm64 Hermes/V8 host, using UI
protocol 20 and the unchanged native ABI. Flutter owns scrolling, caching, key matching
and keep-alive. There is no JS virtual list or parallel item-state table.

## Selected API

ListView.builder selects key, itemCount, itemBuilder, findChildIndexCallback,
scrollDirection, reverse, controller, primary, shrinkWrap, padding, itemExtent,
addAutomaticKeepAlives, addRepaintBoundaries and addSemanticIndexes. Other constructors
and parameters are not exposed. Defaults come from the real Dart constructor.

All selected parameters except key accept bindings. itemBuilder has the real synchronous
(BuildContext, int) -> Widget? signature; findChildIndexCallback accepts a Key and
returns an index or null. It receives the existing ValueKey wrapper when that is the
actual key. A TS assertion can narrow Key to the ValueKey type used by the application.

Use bounded constraints, such as the existing SizedBox, for the viewport. With
shrinkWrap false, a large itemCount does not create every item. Flutter may build extra
items within its cache region or retain items requesting keep-alive.

## Binding and data updates

The [example](../../examples/embedded/js/src/lazy_list.ts) binds itemCount and a builder
that captures the current data array. A bound findChildIndexCallback captures a Map from
stable key values to new indices. Data changes update these parameters in the same
frame; individual item counters bind only their labels. Ordinary signal.value reads do
not subscribe the whole builder.

Stable keys and findChildIndexCallback allow Flutter to move mounted Elements. They do
not preserve State after actual unmount. The example keeps counters in page-owned JS
data, creates counters only for visited rows, and explicitly disposes its
ScrollController when page content unmounts. Do not allocate disposable Controllers in a
repeatedly called itemBuilder without an appropriate application owner.

The callback receives Flutter's original Sliver Element Context, which can be shared by
multiple indices. It is not the identity of an item. Use a Builder inside the returned
subtree when its own descendant Context is needed. Inherited dependencies and their
rebuilds follow Flutter, including dependencies registered on the shared Sliver Context.

## Independent result ownership

A Widget constructor can explicitly select independently owned callback results:

```yaml
independentWidgetCallbacks:
  builder: [itemBuilder]
```

The generator validates the selected constructor and callback signature and emits Dart
metadata. It does not infer ownership from a component name, callback name or index. The
callback must take a non-null BuildContext first and return Widget or Widget?. Existing
required positional callback restrictions still apply. There is no new JS wire format or
protocol migration.

JS executes synchronously when Flutter requests the child, not during descriptor
validation or inside a deferred replacement Builder. Each non-null result is wrapped by
an internal host carrying the child's key. The host owns the description through update
and disposal; inner generated hosts retain their usual independent leases. Callback
replacement cannot release resources that mounted children still use.

Results await initial adoption until the existing safe UI checkpoint after the frame. A
mounted host takes its own reference. Results that Flutter discards are released at that
checkpoint, without waiting for another invocation or GC. Pending results also prevent
session destruction. No result history is indexed by item index or key.

## Errors and Flutter boundaries

An independent callback error, invalid return or Promise reports once through the
session and produces a bounded error placeholder for that invocation. It never returns
another invocation's content. Later valid calls can recover. Existing Builder and
LayoutBuilder retain their previous-result recovery; item property bindings also retain
their existing recovery behavior.

Explicit null is forwarded to Flutter and may terminate construction. Undefined is not
null and is rejected. In pinned Flutter 3.47.2, changing an already materialized middle
item to null while later items remain can assert in a fixed-extent list; a pure Dart
control reproduces this. Use the data/itemCount update to remove items. Flax does not
replace null with an empty Widget or change Flutter's list reconciliation.

Keys must satisfy Flutter's uniqueness rules. Flax does not prebuild the entire dataset
to validate keys. Signals invalidated during build/layout remain deferred to the next
frame, and Future/microtask handling uses the existing UI contract.

## Validation

Independent generated plugin fixtures cover repeated calls, shared descriptions,
discarded results, nullable returns and errors. Real Hermes/V8 framework tests cover
viewport costs, local updates, key moves, unkeyed positions, keep-alive, Context and
closing. The existing example and macOS integration test exercise real scrolling and
reentry. Run the existing bindings:check, ui:test, check and check:ui commands; no new
command or test host package is required.
