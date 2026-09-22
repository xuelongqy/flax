# Generated Containers and Decoration

Core bindings expose real Flutter containers, decoration and physical/directional
geometry. They reuse protocol 20 object references and Widget hosts. There is no JS
painting implementation, style manager, extra production RenderObject or native ABI
change.

## Selected APIs

| Type                                                            | Selected surface                                                                                                                       |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Container                                                       | key, alignment, padding, color, isAntiAlias, decoration, foregroundDecoration, width, height, constraints, margin, child, clipBehavior |
| DecoratedBox                                                    | key, decoration, position, child                                                                                                       |
| Decoration, BoxBorder, BorderRadiusGeometry, EdgeInsetsGeometry | Abstract reference identity and subtype compatibility; no constructors                                                                 |
| BoxDecoration                                                   | Unnamed constructor, readonly fields and copyWith: color, border, borderRadius, shape                                                  |
| BorderSide                                                      | Constructor, readonly fields and copyWith: color, width, style, strokeAlign; none and strokeAlignInside/Center/Outside constants       |
| Border                                                          | Unnamed four-side constructor, all(color/width/style/strokeAlign), readonly sides and isUniform                                        |
| BorderDirectional                                               | Unnamed top/start/end/bottom constructor, readonly sides and isUniform                                                                 |
| Radius                                                          | circular, elliptical, readonly x/y and zero                                                                                            |
| BorderRadius                                                    | all, circular, only, readonly corners, copyWith and zero                                                                               |
| BorderRadiusDirectional                                         | all, circular, only, readonly directional corners and zero                                                                             |
| EdgeInsets                                                      | Existing all/symmetric plus fromLTRB/only, readonly sides and zero                                                                     |
| EdgeInsetsDirectional                                           | fromSTEB, only, all, symmetric, readonly sides and zero                                                                                |
| BoxConstraints                                                  | Unnamed min/max width/height constructor, tightFor/expand, four readonly fields                                                        |
| Enums                                                           | DecorationPosition, BoxShape, BorderStyle; existing Clip                                                                               |

Constructors keep Dart positional arguments and final named options. Widget parameters
except key accept explicit bindings; ordinary object constructors and methods do not.
Bind the whole decoration, padding, margin or constraints value to update it. Values are
real Dart references, not mutable JS mirrors. Getters cross the bridge; reuse a value
locally when it will be read repeatedly.

```javascript
const selected = signal(false);
const normal = BoxDecoration({
  border: Border.all({ width: 2, color: Color(0xffcccccc) }),
  borderRadius: BorderRadius.circular(10),
});
const active = normal.copyWith({
  border: Border.all({ width: 2, color: Color(0xff3366ff) }),
});
Container({
  padding: EdgeInsetsDirectional.only({ start: 12, end: 4 }),
  decoration: bind(() => (selected.value ? active : normal)),
  child: Text('Selected item'),
});
```

Omission and explicit undefined use upstream defaults; null is accepted only where Dart
allows it. Constant defaults retain their Dart identity. Numeric defaults emit valid
Dart infinity/negativeInfinity/nan expressions, verified with an independent fixture.
BoxConstraints preserves legal infinite bounds; Flax does not normalize constraints.
copyWith invokes the original object, retaining unselected fields and Flutter's null
semantics. To clear a BoxDecoration field, construct a new value. No methods absent from
the SDK, such as BorderRadiusDirectional.copyWith, are synthesized.

## Flutter behavior

Container combines width/height with constraints and adds decoration padding to explicit
padding. Border stroke alignment affects this inset. Margin is outside the decorated
box. DecoratedBox paints without adding border padding; its position controls whether it
paints behind or over its child. Container.foregroundDecoration paints over content.

A rounded or circular decoration does not clip its child. Explicitly set
Container.clipBehavior when clipping is needed; Flutter requires a decoration for that
operation. Directional borders, corners and insets resolve against the actual Flutter
Directionality. Flax does not duplicate direction state or implement geometry
resolution.

Property updates keep unchanged child descriptions. Native Container can insert or
remove internal wrappers when optional configuration changes, so Flutter decides whether
child State survives. Decoration may retain a zero Padding even when explicit padding
becomes null. Enabling clipping can insert a ClipPath and remount descendants. Keep
wrapper structure stable when preserving editing State, and create Controllers and
FocusNodes in the page factory, outside theme builders.

Conversion and constructor failures use existing Flax reporting and last-valid-update
recovery. Later layout or painting failures retain Flutter diagnostics. Conflicting
color/decoration, negative insets, invalid constraints and unsupported border/shape
combinations are not repaired by Flax; no extra release-mode assertions or transaction
rollback are promised.

## Verification and limits

The [decoration regressions](../../packages/flax/test/ui/decoration_test.dart) exercise
selected decoration, asymmetric directional geometry, clipping, updates, and native
Flutter comparisons within the owning package.

Framework tests compare native/Flax geometry and rendered pixels in the same process,
using fixed dimensions, an opaque background and no text in raster scenes. There are no
platform-independent golden snapshots. Test-only probes separately count child
layout/paint and Flax construction; static siblings remain unchanged. Weak object
reclamation remains distinct from deterministic subscription and session cleanup.

Images, gradients, shadows, transforms, animations, custom painting and Material input
border bindings remain unselected. Run the `flax` package check and integration command
for focused evidence; full `check:ui` invokes the same owner suite before the aggregate.
The regressions preserve the geometry, pixel and update-isolation checks. Their counters
describe those fixtures, not an SDK-wide performance guarantee.
