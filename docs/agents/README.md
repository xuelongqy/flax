# Agent ownership

This document defines durable ownership for Flax work. It applies to every agent that
works on the repository (Grok Bot, Cursor agents, cloud agents, and humans using the
same handoff rules). It is not tied to one product or chat surface.

Package capability ownership follows
[ADR 0017](../decisions/0017-package-boundaries.md). This file adds **who stewards which
area** when work is split across agents.

## How to use

1. Route a change to the owner of the capability or area being edited.
2. If the change crosses a public contract (ABI, UI protocol, host APIs, package
   metadata), involve **Architecture** before implementation drifts.
3. Keep durable handoffs in [`docs/tasks/`](../tasks/TEMPLATE.md). Do not copy private
   chat transcripts into the repository.
4. Prefer the smallest owner set that can finish the change. Project lead coordinates;
   package owners implement inside their boundary.

## Roles

### Project lead

- Owns priority, scope acceptance, cross-role coordination, and task routing.
- Maintains concise handoffs under `docs/tasks/` when work needs reviewable continuity.
- Does not default to implementing package code unless explicitly covering a gap.

### Architecture

- Owns `docs/architecture/` and `docs/decisions/` (including open questions).
- Stewards cross-package contracts: native ABI, UI binding protocol, host environment,
  navigation/session rules, and packaging boundaries described in architecture docs.
- May temporarily cover documentation consistency checks (`docs:check`, link lint) until
  a dedicated docs role is warranted.
- Does not default to editing a package implementation; routes that work to the package
  owner after the contract is clear.

### Workspace / Tooling

- Owns repository-root orchestration: `tool/`, Melos and pnpm workspace conventions,
  aggregate check sequencing, and CI under `.github/` (workflows and PR/Issue
  templates).
- Discovers packages by convention; does not own capability source inside `packages/*`.
- `flax_codegen` remains a separate package owner for the generator itself. Tooling owns
  how checks and scripts are wired at the workspace level.

### Examples / Integration

- Owns multi-package composition and outside-consumption verification:
  `examples/embedded`, `examples/standalone`, plus repository-level `tests/runtime` and
  `tests/compatibility` when they exercise cross-package contracts.
- Package-local examples and tests stay with each package owner.
- May temporarily cover `benchmarks/engines` until benchmarks need a dedicated owner.

### Package owners

Each `packages/<name>` directory has exactly one owner. That owner is responsible for
the package's Dart API, npm peer (when declared), bindings, tests, example, host
bootstrap, notices, and native code that the package owns.

| Package              | Focus                                                                           |
| -------------------- | ------------------------------------------------------------------------------- |
| `flax`               | Engine-independent runtime, sessions/views, shared native ABI/JSI, `@flax/core` |
| `flax_engine_hermes` | Hermes adapter, engine assets/build, engine-specific tests                      |
| `flax_engine_v8`     | V8 adapter, engine assets/build, engine-specific tests                          |
| `flax_material_ui`   | Generated Material bindings and package-local verification                      |
| `flax_cupertino_ui`  | Cupertino bindings (scaffold today; keep ownership even while empty)            |
| `flax_codegen`       | Binding/declaration generator and its package tests                             |
| `flax_fetch`         | Optional Fetch session plugin                                                   |
| `flax_websocket`     | Optional WebSocket session plugin                                               |
| `flax_local_storage` | Optional localStorage session plugin                                            |
| `flax_canvas`        | Optional Canvas 2D session support                                              |
| `flax_test`          | Shared engine-neutral test contracts and harnesses (dev-only)                   |

## Folded responsibilities

These areas are real but do not get a separate owner in the lean roster:

| Area                                     | Temporary cover        |
| ---------------------------------------- | ---------------------- |
| CI workflows / PR templates              | Workspace / Tooling    |
| Engine benchmarks (`benchmarks/engines`) | Examples / Integration |
| Docs lint and link consistency           | Architecture           |

Revisit splitting them out when the change volume justifies another owner.

## Operating sessions

The 15 logical stewardship roles are covered by 10 persistent operating sessions. A
session may steward several closely related packages, but each package keeps exactly one
owner and its existing capability boundary.

Those sessions are first-class chats in the conversation list. Nested subagents of
another chat are not operating sessions: they do not appear as sidebar entries, so they
cannot be opened later, steered independently, or used as the entry point for a module.
Project lead assigns work by writing a task handoff and naming the target session. The
human opens that chat or pastes the handoff into it. Nested subagents are only for
short, non-owned analysis that reports back to the parent chat.

| Session                 | Logical ownership                                                     |
| ----------------------- | --------------------------------------------------------------------- |
| Project lead            | Intake, priority, task routing, integration ownership, and acceptance |
| Architecture            | Architecture, decisions, and cross-package contracts                  |
| Core                    | `flax`, `@flax/core`, sessions, UI bridge, and shared native/JSI      |
| Engines                 | `flax_engine_hermes` and `flax_engine_v8`                             |
| Code generation         | `flax_codegen`                                                        |
| UI bindings             | `flax_material_ui` and `flax_cupertino_ui`                            |
| Host plugins            | `flax_fetch`, `flax_websocket`, and `flax_local_storage`              |
| Canvas                  | `flax_canvas`                                                         |
| Workspace / Tooling     | Root orchestration, Melos, pnpm, tools, and CI                        |
| Integration and Quality | `flax_test`, aggregate examples, compatibility tests, and benchmarks  |

The project lead is the normal entry point for new work. It assigns one implementation
lead for every cross-package task, records dependencies and acceptance criteria, and
coordinates workspace use. Package sessions may exchange a bounded technical dependency
through the human opening those chats or through a written handoff; they cannot message
another chat directly. They must report resulting contracts, risks, and completion
evidence to the project lead. They do not expand scope or recursively delegate
ownership. Unclear ownership returns to the project lead.

Architecture participates when work changes a public API, native ABI, UI protocol,
lifecycle rule, host contract, package boundary, or dependency direction. Integration
and Quality independently verifies complete cross-package behavior; package owners
remain responsible for their package-local tests.

Read-only analysis may share the main checkout. Only one session writes to that checkout
at a time. Parallel implementation uses project-lead-coordinated worktrees created from
an explicitly checked integration baseline. Session identifiers and private conversation
content stay outside the repository.

## Explicitly deferred owners

Do not create dedicated owners yet for:

- License, pub.dev names, npm scope, and release publishing (still open questions)
- Additional platforms beyond the current experimental macOS arm64 scope
- Flutter Web or remote native artifact distribution

## Collaboration rules

- Follow [ADR 0017](../decisions/0017-package-boundaries.md): source, fixtures, tests,
  and examples stay with the package that owns the capability.
- Contract changes update architecture or decision records before or with the
  implementation, not as an afterthought.
- Repository documentation, comments, and templates stay in English.
- Run checks proportional to the change; package checks for package work, aggregate or
  runtime checks when contracts or engines are affected. See `AGENTS.md` and
  `CONTRIBUTING.md`.
- Commit, push, and publish only when requested by the human driving the work.

## Roster size (lean)

- Logical ownership remains Project lead, Architecture, Workspace / Tooling, Examples /
  Integration, and one owner per package under `packages/*` (11 packages today).
- The 15 logical roles are staffed through the 10 operating sessions above, with folded
  coverage for CI, benchmarks, and documentation quality.
