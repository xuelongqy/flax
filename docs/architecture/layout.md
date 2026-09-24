# Generated Layout and Parent Data

The core bindings expose selected Expanded, Flexible, Stack, Positioned and Align
constructors. Flutter owns constraints, layout, clipping and ParentData. These additions
use the existing generated StatefulWidget hosts and protocol 21; they add no layout
engine, RenderObject wrapper or native ABI operation.

## Selected APIs

| Type                 | Selected surface                                                                      |
| -------------------- | ------------------------------------------------------------------------------------- |
| Expanded             | key, flex, required child                                                             |
| Flexible             | key, flex, fit, required child                                                        |
| Stack                | key, alignment, textDirection, fit, clipBehavior, children                            |
| Positioned           | Unnamed constructor: key, left, top, right, bottom, width, height, required child     |
| Align                | key, alignment, widthFactor, heightFactor, child                                      |
| AlignmentGeometry    | Abstract reference identity; no JS constructor                                        |
| Alignment            | Positional x/y constructor, readonly x/y, nine standard position constants            |
| AlignmentDirectional | Positional start/y constructor, readonly start/y, nine standard directional constants |
| Enums                | FlexFit, StackFit, Clip                                                               |

All selected Widget parameters except key accept explicit bindings. Alignment values are
real Dart objects; their constructors accept ordinary values, and getters read Dart.
Both concrete alignment types can be passed to AlignmentGeometry parameters. Updating
alignment binds the whole object, without a JS geometry implementation.

Omitted or undefined parameters keep the upstream defaults. Stack defaults to
AlignmentDirectional.topStart and Align to Alignment.center, including the actual Dart
constant identity. Explicit null is only valid for nullable parameters. Expanded keeps
its native tight fit and exposes no fit option. Other constructors and members,
including Positioned.fill and directional positioning constructors, are not selected.

## Flutter semantics

Expanded and Flexible must be under a Row, Column or Flex with the same legal ancestor
path as native Flutter. Positioned must be under Stack. Flax's StatefulWidget hosts
preserve that path; inserting a RenderObject widget such as Padding between Expanded and
Row remains invalid. Put padding inside Expanded when padding its allocated area.

```javascript
Column({
  children: [
    Text('Items'),
    Expanded({
      child: ListView.builder({
        itemCount: 10000,
        itemBuilder: (_, index) => Text(`Item ${index}`),
      }),
    }),
  ],
});
```

The example requires a finite available height, such as a Scaffold body. Flax does not
insert bounds, reposition nodes or repair invalid parent relationships.

Flex, position and alignment bindings use the existing frame batching. Updating one
layout host preserves unchanged child Widget instances. Flutter performs the necessary
layout and paint work; those operations are distinct from Flax host rebuilds. Same type
and key retain eligible State, while type/key changes use Flutter's normal remounting.

Directionality changes are resolved by Flutter. Alignment uses physical left/right;
AlignmentDirectional uses start/end. Stack can override the ambient direction with its
textDirection parameter. No additional JS listener or mirrored direction state exists.

Synchronous conversion and constructor errors use the existing Flax error callback and
last-valid-update recovery. Errors discovered later by Flutter, such as invalid
ParentData ancestry or an unbounded Flex, use Flutter diagnostics. There is no layout
transaction rollback or additional release-mode assertion layer.

## Verification

The [layout regressions](../../packages/flax/test/ui/layout_test.dart) keep layout
ownership inside the core package and compare generated layout behavior with native Dart
layouts.

Framework tests compare sizes, positions and ParentData against native Dart layouts.
They also check local batching, keyed State, shared descriptions, synchronous builders,
defaults and Flutter diagnostics. Example tests verify editing/focus identity,
scrolling, filtering and reentry. macOS integration exercises the same bundled JS page.

Use `dart run tool/package.dart check flax` for static coverage and its integration
command for real UI verification with prepared assets. Full `check:ui` invokes the same
owner suite before the aggregate. Fixture counters are not a general performance
guarantee.

Container and decoration add native border insets, margins, constraints and explicit
clipping. See [decoration semantics](decoration.md) for structural update behavior.
