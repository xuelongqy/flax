# ADR 0018: Binding Coverage Strategy

Status: accepted

Date: 2026-09-12

## Context

UI protocol 18 and the binding generator support an explicit, fail-closed selection
model: packages list the Dart types and members they expose, and unsupported signatures
fail at generation time rather than emitting permissive stubs. A Protocol 18 bindability
census of `package:flutter/widgets.dart` (plus the core binding `additionalLibraries`)
and `package:material_ui/material_ui.dart` showed a high ceiling for _partial_
generatability and a low ceiling for _full_ public-surface exposure. Treating export
coverage or full-type generation as acceptance criteria would push incorrect protocol
growth and false progress.

Package/ABI compatibility policy and stable ABI evolution remain separate open
questions. This record only settles how binding coverage is planned and accepted.

## Decision

Use **explicit selection** as the only binding coverage strategy under UI protocol 18
(and any successor that keeps the same fail-closed model).

Acceptance for an expanded binding surface is:

- the **selected types** and **selected members** generate successfully; and
- they are covered by the owning package's proportionate checks or UI tests.

The following are **not** acceptance criteria:

- full-type generatability (every public constructor and conventional instance member);
- export-namespace coverage of a Flutter or Material library;
- 100% partial generatability of any census denominator.

### Census denominator (when measuring ceilings)

When estimating protocol ceilings or prioritizing selection:

- Count **interesting types** in the library under study (Widget subclasses and related
  controllers, notifiers, state/context helpers; Material studies may also include
  theme, data, and style types), not every exported class.
- Use `package:material_ui/material_ui.dart` for Material, not
  `package:flutter/material.dart`.
- Use `package:flutter/widgets.dart` plus the same `additionalLibraries` as
  `packages/flax/bindings/config.yaml` for the widgets study.
- Parameter and field dependency types outside that denominator may appear in reason
  buckets; they do **not** enter the primary denominator.

Census percentages are planning evidence only. They are not permanent KPIs and must not
be copied into this decision as fixed targets.

### Expansion gates

- **In-envelope selection** (members whose shapes already generate under the current
  protocol and object pool): the package owner and Codegen may expand selection YAML and
  regenerate without a protocol bump.
- **Hard walls** that require Architecture review and, when needed, a protocol or
  generator contract change before selection proceeds include at least: Future
  parameters, nested Futures / FutureOr, asynchronous lifecycle or build callbacks,
  callbacks that transport collections of Widgets, and other generation rejects
  documented in the binding and interop contracts.
- Adding high-frequency dependency types to an optional object selection pool (for
  example Duration, Animation, ShapeBorder, ScrollPhysics) is a selection/object-pool
  change when it reuses existing conversion rules; new conversion or lifetime semantics
  still need Architecture review.

Cupertino and painting-or-animation libraries as primary census universes remain later
work and are not decided here.

## Alternatives

**Require near-complete export or full-type coverage before shipping binding packages.**
Rejected: the census full-type ceiling is structurally low because of out-of-denominator
painting, animation, and diagnostics dependencies. That goal conflicts with explicit
selection and fail-closed generation.

**Treat partial-generatability percentage as a release gate.** Rejected: the metric is a
ceiling estimate from a static study, not proof that every interesting type should be
selected, and it drifts with Flutter SDK and tool fidelity.

**Fold coverage rules into the package/ABI compatibility or stable-ABI open questions.**
Rejected: those concerns are about versioned host/guest evolution and publication; this
decision is about how APIs are chosen and accepted inside the current protocol envelope.

## Consequences

Material UI, core Flutter bindings, and Codegen share one coverage vocabulary: select
what applications need, generate what the envelope supports, and escalate only hard
walls. Tasks must not use full-type percentage or export coverage as done criteria.

Architecture reviews focus on protocol and conversion changes, not routine selection
lists. Optional dependency object-pool expansions can raise how many members fit inside
a type's selected subset without changing the acceptance rule above.

This ADR is **accepted**. It does not by itself change UI protocol 18 or native ABI 2;
it only locks coverage strategy, acceptance criteria, and expansion gates.

## Appendix: census reference (non-normative)

A 2026-09-12 Protocol 18 bindability census (static fixpoint mirroring generator
allowlists; not a per-type dry-run emit) reported roughly 96% partial and 12% full
generatability over the widgets + material_ui interesting-type denominator. Artifacts
live under the repository `.local/flax-binding-census/` working tree (and any synced
copy). Those figures inform prioritization only and are not part of this decision's
normative text.
