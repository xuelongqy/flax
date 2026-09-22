# ADR 0018: Binding Coverage Strategy

Status: accepted

Date: 2026-09-12

## Context

The generator uses explicit, fail-closed selection: packages list the Dart types and
members they expose, and unsupported signatures fail at generation time rather than
emitting permissive stubs. A visible export, a representable subset and a tested public
surface are different claims. Treating them as equivalent encourages incorrect protocol
growth and false progress.

This decision was introduced with UI protocol 18 and remains applicable to protocol 20.
Version domains and package ownership are now defined by ADRs 0021–0025. This record
settles how binding coverage is planned and accepted.

## Decision

Use **explicit selection** for the currently implemented binding surface. Broader
full-library and whitelist product modes remain design work; this decision does not
define their YAML or prohibit a future evidence-backed proposal.

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

- **Supported selection** (members whose shapes already generate under the current
  protocol and provider set): the package owner and Codegen may expand selection YAML
  and regenerate without a protocol bump.
- **New conversion or lifetime behavior** requires Architecture review and, when needed,
  a protocol or generator contract change. Examples still outside the contract include
  unsupported nested Future/FutureOr values, asynchronous lifecycle or build callbacks
  and callbacks transporting Widget collections. Supported Future parameters, FutureOr
  and generic typedefs are no longer gaps. The
  [coverage map](../architecture/binding-coverage-map.md) owns the current inventory.
- Adding dependency types or members through a canonical provider is a selection change
  when it reuses existing conversion rules. Existing imported owners cannot be
  duplicated or have their published member surfaces silently expanded. New conversion
  or lifetime semantics still need Architecture review.

Cupertino and painting-or-animation libraries as primary census universes remain later
work and are not decided here.

## Alternatives

**Require near-complete export or full-type coverage before accepting useful bindings.**
Rejected: a useful selected surface can be tested independently of unrelated painting,
animation and diagnostic dependencies. A larger declaration count cannot substitute for
correct conversion and lifetime behavior.

**Treat partial-generatability percentage as a release gate.** Rejected: the metric is a
ceiling estimate from a static study, not proof that every interesting type should be
selected, and it drifts with Flutter SDK and tool fidelity.

**Fold coverage rules into the package/ABI compatibility or stable-ABI open questions.**
Rejected: those concerns are about versioned host/guest evolution and publication; this
decision is about how APIs are chosen and accepted inside the current protocol envelope.

## Consequences

Material UI, core Flutter bindings, and Codegen share one coverage vocabulary: select
what applications need, generate supported shapes, and review new contracts. Tasks must
not use full-type percentage or export coverage as done criteria.

Architecture reviews focus on protocol and conversion changes, not routine selection
lists. Provider additions can enable more selected members without changing the
acceptance rule above.

This ADR does not itself change the UI protocol or native ABI. Current versions and
verification limits are in the
[compatibility contract](../architecture/external-binding-compatibility.md).

## Appendix: census reference (non-normative)

The 2026-09-12 protocol-18 census was a static fixpoint study of older selections, not
per-type emission or runtime acceptance. Its counts and first-failure diagnoses are not
current coverage. Preserve the measured input set and distinguish static discovery,
generation, compilation and runtime checks when making a new measurement. Reproduce a
disputed boundary with the existing small capability fixtures before commissioning a new
SDK-wide study.
