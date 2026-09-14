# Task: Binding Coverage Expansion v1

Status: paused (user hold — next phase scope not yet decided; Wave A/E stopped)

## Goal and scope

Grow **explicit** Flax binding coverage after the External Binding Kit is stable. Follow
[ADR 0018](../decisions/0018-binding-coverage-strategy.md): selection YAML lists types
and members; acceptance is selected surface generates and is tested — **not** full
Flutter SDK export coverage or automatic whole-package binding.

This milestone uses UI protocol **20** and native ABI **2**. It does not invent license,
registry names, or support policy.

## Non-goals

- Automatic “point at a package directory and bind everything”
- Treating census percentages as release gates
- Broad protocol bumps without Architecture review (hard walls stay gated)
- Public publish decisions (open-questions)

## Approach

1. **Coverage map (Architecture):** inventory current Core / Material / Canvas /
   Cupertino selections; ordered in-envelope waves; hard-wall queue; Cupertino call;
   third-party pilot candidate. Map:
   [`docs/architecture/binding-coverage-map.md`](../architecture/binding-coverage-map.md).
2. **In-envelope expansion waves:** expand YAML for members already supported by
   protocol 20; regenerate; package-local + proportionate UI checks.
3. **One third-party pilot:** outside-checkout binding package for a small real library
   (or a thin wrapper), using the author template + Kit CLI, registered in a host smoke.
4. **Hard-wall queue:** document rejects that need Architecture / protocol work; do not
   silently widen the generator.

## Acceptance criteria

- Written coverage map with ordered waves and owners.
- At least one Material and/or Core selection wave lands with generate/check green and
  proportionate tests.
- Cupertino either gains a first non-empty selection wave **or** an explicit deferred
  rationale in the task record.
- One outside third-party (or vendor-namespace) pilot package generates, checks, and
  runs a minimal host/canary path.
- No claim of full Flutter SDK coverage.

## Results and validation

- **Coverage map (Architecture, 2026-09-13):**
  [`docs/architecture/binding-coverage-map.md`](../architecture/binding-coverage-map.md).
  Linked from `docs/README.md`, `docs/architecture/README.md`, and
  `docs/architecture/bindings.md`. `dart run melos run docs:check` EXIT 0.
- Inventory (YAML keys): `flax.core/flutter` 27 types + 107 classes; `components` 2
  classes; `flax.material/material` 5 types + 30 classes
  (`package:material_ui/material_ui.dart`); Canvas 2 classes (narrow); Cupertino empty
  scaffold (`capabilities: []`, no selection YAML).
- Census `.local/flax-binding-census/` remains planning evidence only (Protocol 18
  study; class-key baseline in that SUMMARY is stale vs current YAML).

### Cupertino decision

**First non-empty selection wave (Wave D), not deferral.** Reserved package and
`cupertino_ui` dependency already exist; ADR 0018 deferred a census universe, not a
small explicit shell. First slice: enable `bindings` +
`bindingNamespace: flax.cupertino`; library `package:cupertino_ui/cupertino_ui.dart`;
`CupertinoApp` / `CupertinoPageScaffold` / `CupertinoNavigationBar` / `CupertinoButton`
/ theme data. No SDK `package:flutter/cupertino.dart`; no vsync controllers in that
slice.

### Recommended next assignments

| Wave | Lead                       | First cut                                                                                                        |
| ---- | -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| A    | **Core**                   | `Icon`+`IconData`, `Spacer`, extra boxes, `GridView`/`PageView` builder subset, `MediaQuery`                     |
| B    | **UI bindings**            | `Material`/`InkWell`, `LinearProgressIndicator`, SnackBar/messenger, `DefaultTabController` tabs (no vsync ctor) |
| C    | **Architecture** then Core | Object-pool candidates (`Animation`, `ShapeBorder`, `ScrollPhysics`, …) only if conversion already exists        |
| D    | **UI bindings**            | Cupertino first YAML as above                                                                                    |
| E    | **Integration**            | Evaluate **`package:gap`** as outside vendor-namespace pilot (no invented pub/npm/license)                       |

Hard walls stay queued (nested Futures, async build/lifecycle, Widget-collection
callbacks, vsync construction, painting/sliver delegates). Codegen must not silently
widen. Canvas out of this milestone.

## Handoff

**Paused (2026-09-13):** User stopped implementation. Do not run Wave A/B/D/E until
Project lead re-opens with an explicit next-phase brief. Coverage map remains as
planning input only.

Architecture owns the map and hard-wall calls (coverage map slice complete).

**Dispatched (2026-09-13):**

- **Wave A → Core** — `Icon`+`IconData`, `Spacer`, extra boxes, `GridView`/`PageView`
  builder subset, `MediaQuery` (in-envelope only; drop hard-wall members).
- **Wave E → Integration** — evaluate `package:gap` as outside vendor-namespace pilot
  (no invented license/pub/npm names; `publish_to: none`).

Next after A/E report: **Wave B → UI**, then **Wave D Cupertino**. Wave C stays gated on
Architecture conversion review. Codegen supports generate/check rejects.
