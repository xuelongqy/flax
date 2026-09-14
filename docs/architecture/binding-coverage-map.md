# Binding Coverage Expansion v1 — coverage map

Planning map for **explicit** selection growth after External Binding Kit v1. Follow
[ADR 0018](../decisions/0018-binding-coverage-strategy.md): list types and members;
acceptance is that the **selected** surface generates and is tested. This is **not**
full Flutter SDK export coverage, full-type exposure, or automatic whole-package
binding.

Baseline: UI protocol **20**, native ABI **2**. Do not bump either for in-envelope
waves. Census percentages under `.local/flax-binding-census/` are **planning evidence
only**, not gates. Do not invent license, pub.dev names, npm scope, or support policy
([open questions](../decisions/open-questions.md)).

Related: [binding generation](bindings.md), [interop hard walls](interop.md),
[task record](../tasks/binding-coverage-expansion-v1.md).

## Current inventory (orders of magnitude)

Counts are YAML keys in committed selection files (2026-09-13). They are not
export-namespace coverage.

| Module                   | Package / files                                  | `types` | `classes` | Other                                             | Notes                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------ | ------: | --------: | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flax.core/flutter`      | `packages/flax/bindings/config.yaml`             |  **27** |   **107** | 1 function (`applyBoxFit`); 6 `callbackSnapshots` | Widgets, layout/decoration geometry, navigation, text input, dart:async Stream family, `Duration`, listenables                                                                                                                                            |
| `flax.core/components`   | `packages/flax/bindings/components.yaml`         |       0 |     **2** | host proxy                                        | `StatefulWidget`, `State` — small by design                                                                                                                                                                                                               |
| `flax.material/material` | `packages/flax_material_ui/bindings/config.yaml` |   **5** |    **30** | 1 function (`showDialog`)                         | Library **`package:material_ui/material_ui.dart`** (not `package:flutter/material.dart`)                                                                                                                                                                  |
| `flax.canvas/canvas`     | `packages/flax_canvas/bindings/config.yaml`      |       0 |     **2** | —                                                 | `FlaxCanvasSurface`, `FlaxCanvasView` (`jsName: CanvasView`) — **narrow by design**                                                                                                                                                                       |
| Cupertino (none)         | `packages/flax_cupertino_ui`                     |       — |         — | no selection YAML                                 | `capabilities: []`; no `bindingNamespace`; empty library scaffold. Pubspec already depends on `cupertino_ui: 1.0.2`. Reserved identity `flax.cupertino` is assigned only once `bindings` exist ([ADR 0022](../decisions/0022-stable-binding-identity.md)) |

### Already strong in Core

Layout/text/chrome: `Text`, `Row`/`Column`/`Wrap`, `Stack`/`Positioned`/`Align`,
`Expanded`/`Flexible`, `Padding`/`SizedBox`/`Container`/`DecoratedBox`,
`ListView`/`SingleChildScrollView`, `GestureDetector`, `Form`/`Focus`/`SafeArea`,
builders (`Builder`/`LayoutBuilder`/`StatefulBuilder`), navigation, text editing,
Stream/`StreamBuilder`. `Duration` is already a selected object (the 2026-09-12 census
still listed it as a thinning `unsupported_core_type`).

### Already strong in Material

App shell (`MaterialApp`, `Scaffold`, `AppBar`, `Drawer`, `NavigationBar`), buttons,
`TextField`/`InputDecoration`, theme objects, `Card`/`ListTile`, `Checkbox`/`Switch`,
`CircularProgressIndicator`, `RefreshIndicator`, `showDialog`.

### Main gaps (interesting types, not a to-bind-all list)

Census (Protocol 18 static study, 2026-09-12): widgets interesting-type denominator
**411**, material_ui **619**, combined partial ceiling **~96%**, full-type ceiling
**~12%**. Then-current YAML (~75 flutter / ~15 material **class** keys) is **stale**
versus today's **107 / 30**. The gap that matters: selected interesting widgets and
Material chrome are still a **small subset** of the partial-generatable pool.

High-frequency **unselected** application types (in-envelope candidates unless noted):

- Core widgets: `Icon` (+ `IconData`), `Spacer`, extra box widgets, `GridView` /
  `PageView` builder subsets, `MediaQuery` / `MediaQueryData`, `DefaultTextStyle`,
  `Hero` (constructor subset), `Image` (**often blocked** on `ImageProvider`).
- Material chrome: `Material`, `InkWell`, `LinearProgressIndicator`, `SnackBar` /
  `ScaffoldMessenger`, chips, `Tooltip`, `Radio`/`Slider`, `CircleAvatar`, `TabBar`
  **via** `DefaultTabController` (avoid `TabController`/`vsync`).
- Object-pool (raises how many **members** fit; not a coverage KPI): `Animation`,
  `ShapeBorder`, `ScrollPhysics`, `MouseCursor`, `Curve`, `VisualDensity`.
- Hard-wall shaped: slivers (`SliverChildDelegate`), transitions (`Animation`),
  `ColorFilter`/`CustomClipper`, layout delegates, `ImageProvider`.

Canvas stays out of expansion waves unless a Canvas-owned task says otherwise.

## Expansion rules

- **In-envelope:** member shapes already generate under protocol 20 and the current
  object pool. Package owner + Codegen expand YAML and regenerate. No protocol bump.
- **Object-pool add:** selecting a high-frequency dependency type with **existing**
  conversion/lifetime rules is a selection change. **New** conversion or lifetime
  semantics need Architecture review first
  ([ADR 0018](../decisions/0018-binding-coverage-strategy.md)).
- **Hard wall:** documented generator/interop reject. Queue it; do **not** silently
  widen the generator or treat a census miss as a protocol requirement.

Protocol 20 already generates Future **parameters**, first-level Future collections, and
FutureOr in supported positions ([interop](interop.md)). The ADR 0018 “Future
parameters” bullet is a protocol-18-era hard wall; **nested** Future / FutureOr
completion values remain out of envelope.

## In-envelope backlog

Each wave is a **member subset** on named types. Stop at generate/check + proportionate
tests. Do not require every constructor or conventional instance member.

### Wave A — Core widgets (highest leverage)

Owner: **Core** (`packages/flax` / `flax.core/flutter`). Codegen supports rejects.
Integration: proportionate `ui:test` / package tests, not a full dual-engine matrix
unless the wave touches engines.

Suggested first slice (constructors already likely in-envelope: scalars, `Widget`,
`Key`, existing geometry/`Color`/`TextStyle`):

- `Icon` + `IconData` (value object; keep font/package fields that are scalars)
- `Spacer`
- `FractionallySizedBox`, `LimitedBox`, `Offstage`, `AbsorbPointer`
- `DefaultTextStyle` (reuse selected `TextStyle`)
- `GridView` and/or `PageView` **builder** subsets using the same independent-child
  pattern as `ListView.builder` ([lazy lists](lists.md))
- `MediaQuery` / `MediaQueryData` (static `of` / padding/`size`; skip exotic views)

Defer in this wave: `Image`/`ImageProvider`, `Transform` if it needs `Matrix4` without
an existing selection, `CustomPaint` / delegates, slivers.

### Wave B — Material chrome

Owner: **UI bindings** (`flax_material_ui`). Library stays
`package:material_ui/material_ui.dart`.

Suggested first slice:

- `Material`, `InkWell` (common ink/splash; drop members that need unselected
  `ShapeBorder` until Wave C)
- `LinearProgressIndicator`
- `SnackBar`, `SnackBarAction`, `ScaffoldMessenger` (prefer widgets/methods whose shapes
  already match protocol 20 Future **results**)
- `Tooltip`, `Chip` (one concrete chip class before the full family)
- `Radio`, `Slider`
- `CircleAvatar`
- `DefaultTabController` + `TabBar` + `Tab` + `TabBarView` (**not** `TabController`
  constructors that require `vsync`)

### Wave C — optional object pool

Owner: **Architecture** reviews conversion/lifetime; **Core** (and Material if the type
is owned there) selects. Codegen confirms existing rules suffice.

Candidates from the census thinning buckets, only if they reuse current object / enum /
callback conversion:

- `Animation` / `Animation<double>` as `Listenable`-like objects (not implicit `vsync`
  construction)
- `ShapeBorder` / a small `OutlinedBorder` subset
- `ScrollPhysics`
- `MouseCursor`
- `Curve` (or a named enum/object subset already representable)
- `VisualDensity`

Do **not** select `DiagnosticPropertiesBuilder` (debug/diagnostics API).

### Wave D — Cupertino first non-empty selection

See [Cupertino decision](#cupertino-decision) below. Owner: **UI bindings**.

### Wave E — third-party / vendor-namespace pilot

See [Pilot candidate](#pilot-candidate-for-evaluation). Owner: **Integration** leads the
outside host/canary; Codegen supports the Kit CLI; Architecture reviews
namespace/identity only if the candidate needs a contract exception (it should not).

## Hard-wall queue (do not silently widen)

Escalate to Architecture (and protocol/generator contract work) before selecting these
shapes. Current protocol-20 / interop rejects include:

| Wall                                             | Typical hits                                                                                                                   | Notes                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Nested Future / FutureOr completion values       | Deep async signatures                                                                                                          | First-level Future params/results are in-envelope                                             |
| Async lifecycle or **build** callbacks           | `Future<Widget> build(...)` and similar                                                                                        | Build/lifecycle stay synchronous                                                              |
| Callbacks transporting **Widget collections**    | `List<Widget> Function(...)` as callback traffic                                                                               | Independent **single** Widget results remain the ListView pattern                             |
| Map **callback keys**                            | `Map` keyed by functions                                                                                                       | Documented generator fail                                                                     |
| `vsync` / `TickerProvider` construction          | `AnimationController`, `TabController`                                                                                         | Widgets that **hide** vsync internally (e.g. `DefaultTabController`) may still be in-envelope |
| Unselected painting/render delegates             | `ColorFilter`, `CustomClipper`, `MultiChildLayoutDelegate`, `SliverChildDelegate`, `ImageProvider`, `AssetBundle`, `LayerLink` | Object-pool **or** new conversion; not a silent emit                                          |
| Native Route references in unsupported positions | Some navigation members                                                                                                        | Follow [functions](functions.md) / navigation contracts                                       |

Census “completely ungeneratable” rows are almost all `unselected_dependency`, not
Stream/Future dominance. Filling them is a **pool or conversion** decision, not a reason
to auto-bind the SDK.

## Cupertino decision

**Call: first non-empty selection wave (Wave D), not deferral.**

Rationale:

- `flax_cupertino_ui` is already a reserved capability package with a `cupertino_ui`
  Dart dependency, matching how Material binds `package:material_ui/material_ui.dart`
  rather than the Flutter SDK Material library.
- ADR 0018 left Cupertino as a **later census universe**; it did not forbid a small
  explicit selection. Keeping the package empty indefinitely contradicts the “real
  track” in the expansion task.
- A first wave can stay in-envelope and mirror Material’s original shell: app +
  scaffold + navigation bar + button + theme data.

Recommended first YAML (UI implements; Architecture does not invent members here):

- Enable `capabilities: [bindings]` and `bindingNamespace: flax.cupertino`.
- Config as a **direct child** of `bindings/` with `format: 1`.
- `library: package:cupertino_ui/cupertino_ui.dart` (confirm public export URI at
  implementation time; do not point at `src/`).
- Types/classes subset: `CupertinoApp`, `CupertinoPageScaffold`,
  `CupertinoNavigationBar`, `CupertinoButton`, `CupertinoTheme` / `CupertinoThemeData`
  (drop members that require unselected painting types).

Explicitly **not** this wave: a Cupertino interesting-type census as a release gate;
`package:flutter/cupertino.dart` as the library URI; vsync-heavy controllers.

## Pilot candidate (for evaluation)

**Candidate for evaluation:** bind a **small real Flutter widget package** with a tiny
public Widget surface whose constructors are scalars / `Widget` / already selected Core
types — specifically evaluate **`package:gap`** (Gap / MaxGap / SliverGap).

Why this class of library:

- In-envelope shaped (typically `double`, optional `Color` — `Color` is already selected
  in Core).
- Small enough for the author template + `validate|check|generate --config` outside the
  Flax checkout.
- Not a Flax official `flax.*` namespace. The evaluator chooses a vendor
  `bindingNamespace` they control (pattern only: `com.example…` / `io.github…` per
  [ADR 0022](../decisions/0022-stable-binding-identity.md)).

Do **not** invent a Flax pub.dev name, npm scope, license text, or support window for
the pilot package. Keep `publish_to: none` / npm `private: true`. The M4 canary
`canary.pure` Counter and the Codegen author-template Gauge remain **fixtures**, not
this pilot.

Reject as first pilot if evaluation shows CustomPaint, `ImageProvider`, or vsync-only
APIs. Then pick another small Widget package with the same envelope rule — still as a
candidate, still without invented registry names.

## Owners for next cuts

| Cut                                                        | Lead                                                  | Support                                                              |
| ---------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| This map / hard-wall calls / object-pool conversion review | **Architecture**                                      | Codegen (diagnostics)                                                |
| Wave A Core YAML + regenerate                              | **Core**                                              | Codegen; Integration for proportionate UI evidence                   |
| Wave B Material YAML + regenerate                          | **UI bindings**                                       | Codegen; Core if a type must be owned in `flax.core`                 |
| Wave C object pool                                         | **Architecture** then Core (and UI if Material-owned) | Codegen                                                              |
| Wave D Cupertino first selection                           | **UI bindings**                                       | Core (shared identities); Codegen; Integration example/smoke         |
| Wave E outside pilot                                       | **Integration**                                       | Codegen (Kit CLI); Architecture only if a contract exception appears |
| Canvas                                                     | **Canvas**                                            | Out of this milestone unless a separate task expands it              |
| Priority / worktrees                                       | **Project lead**                                      | —                                                                    |

Suggested immediate assignments: **Core → Wave A first slice**; **UI → Wave B first
slice** (can follow Wave A if checkout contention); **UI → Wave D** after the Cupertino
`bindings` metadata cut is sequenced; **Integration → Wave E** evaluation of
`package:gap` (parallelizable in a worktree).
