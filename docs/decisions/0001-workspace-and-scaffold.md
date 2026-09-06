# ADR 0001: Workspace and Scaffold Boundaries

Status: accepted

Date: 2026-09-06

## Context

Flax will combine Flutter packages, a JS SDK, generated bindings, and embedded JS
engines. It needs a maintainable shared workspace and concise context for AI-assisted
development before runtime implementation begins.

## Decision

Use one repository with Dart/Flutter packages directly under `packages/`, JS packages
under `js/`, and separate native code and binding-rule directories.

Use Pub workspace and Melos for Dart, pnpm for JS, and CMake for Flax-owned native
configuration. Melos supplies the common task entry point. Keep the root packages
private and commit both dependency lockfiles.

Use generated Flutter API bindings and a JSI-based native abstraction as the design
direction. Initially keep base Flutter bindings within the Dart host package and
separate Material/Cupertino bindings.

Create complete package scaffolds with empty entry points. Keep engine implementations
and runnable examples out of this initial milestone.

Use generic AGENTS.md instructions, linked architecture documents, and task-specific
handoffs. Repository prose and code comments use English.

## Consequences

Dart and JS tooling retain their normal package boundaries. A binding change can span
both package trees, so generation ownership and cross-layer reviews matter.

The repository can validate its tooling without claiming an implemented framework. The
Hermes placeholder does not determine the default engine.

Agent guidance remains tool-independent. No per-vendor agent configuration or shared
chronological session log is introduced.
