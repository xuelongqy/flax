# Lazy Lists and Independent Widget Results

Status: generated ListView.builder on the maintained Flutter engine, using UI protocol
23 and the unchanged native ABI. Flutter owns scrolling, caching, key matching and
keep-alive. There is no JS virtual list or parallel item-state table.

## Selected API

ListView.builder selects key, itemCount, itemBuilder, findChildIndexCallback,
scrollDirection, reverse, controller, primary, physics, shrinkWrap, padding, itemExtent,
addAutomaticKeepAlives, addRepaintBoundaries and addSemanticIndexes. Other constructors
and parameters are not exposed. Defaults come from the real Dart constructor.

All selected parameters except key accept bindings. itemBuilder has the real synchronous
(BuildContext, int) -> Widget? signature; findChildIndexCallback accepts a Key and
returns an index or null. It receives the existing ValueKey wrapper when that is the
actual key. A TS assertion can narrow Key to the ValueKey type used by the application.

Use bounded constraints, such as the existing SizedBox, for the viewport. With
shrinkWrap false, a large itemCount does not create every item. Flutter may build extra
items within its cache region or retain items requesting keep-alive.

ListView.builder and SingleChildScrollView accept a nullable, bindable ScrollPhysics
reference. Core selects ScrollPhysics, ClampingScrollPhysics, BouncingScrollPhysics,
AlwaysScrollableScrollPhysics and NeverScrollableScrollPhysics. Constructors expose only
parent, and subclasses inherit the parent getter; other parameters keep their Dart
defaults. Flutter owns parent composition, user-drag acceptance and edge behavior.
NeverScrollableScrollPhysics does not prohibit programmatic ScrollController calls. The
[shared-object tests](../../packages/flax_material_ui/test/ui/shared_objects_test.dart)
exercise drag rejection, clamping/bouncing boundaries and parent identity/composition.

## Binding and data updates

The [lazy-list owner tests](../../packages/flax_material_ui/test/ui/lazy_list_test.dart)
bind itemCount and builders against the Material UI package fixture. A bound
findChildIndexCallback can capture a Map from stable key values to new indices. Data
changes update these parameters in the same frame; ordinary signal.value reads do not
subscribe the whole builder.

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

Callbacks stored by mounted Widget constructors reuse ordinary callback result
conversion. JS executes synchronously when Flutter requests a child. The actual Widget
is returned, with its native identity, key and selected interface; no result host,
deferred Builder or pending-adoption queue is added. No constructor-specific callback
list or public lifecycle marker is required. Existing semantic metadata remains
compatible.

An escaped generated configuration retains its bridge dependencies while Dart holds it,
including before its first mount. Each mounted generated host owns its own signal
subscriptions; replacing a callback cannot retire a child still held by Dart or Flutter.
Unmount releases mounted subscriptions, and actual Dart GC releases discarded
configurations. Session close revokes bridge holdings immediately and does not wait for
configuration GC. No result history is indexed by item index or key. See
[bridge references and GC](references.md).

## Errors and Flutter boundaries

A base Widget callback error, invalid return or Promise reports once through the session
and produces a bounded error placeholder for that invocation. Narrow Widget-interface
callbacks propagate the original error because the placeholder does not implement their
interface. It never returns another invocation's content. Later valid calls can recover.
Builder and LayoutBuilder follow the same invocation-isolated rule.

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
