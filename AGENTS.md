# Working on Flax

## Current scope

Flax currently contains workspace infrastructure and empty package entry points. The
intended product is a pure-JS frontend backed by Flutter, with generated bindings and a
JSI-based native engine boundary. Those runtime features are not implemented.

Prioritize sound engineering judgment. Follow explicit user instructions when they
differ from repository conventions. Keep work within the requested scope.

## Start here

1. Read the [README](README.md) for current status and setup.
2. Read the [architecture overview](docs/architecture/README.md) and the README of the
   area being changed.
3. Check [accepted decisions](docs/decisions/README.md) and
   [open questions](docs/decisions/open-questions.md) before changing boundaries.
4. Read any more specific AGENTS.md in the affected directory.

Use targeted searches. Do not load the whole repository or old task records when a
scoped README and current source files answer the question.

## Commands

From the root:

```sh
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
dart run melos run check
```

Use the [scoped command table](CONTRIBUTING.md#checks) for smaller changes. Resolve
dependency changes without frozen flags only when intentionally updating the manifests
and lockfiles together.

## Editing rules

- Write repository documentation, comments, and templates in English.
- Preserve unrelated edits and inspect the working tree before changing files.
- Keep real implementation, proposals, and placeholders clearly distinguished.
- Do not invent public APIs, successful stub commands, or passing runtime tests.
- Keep runtime JS free of implicit Node.js or browser dependencies.
- Change binding rules or generator sources before regenerating outputs. See
  [binding ownership](bindings/AGENTS.md).
- Coordinate changes across Dart, JS, and native boundaries when their contracts change.
  See [native guidance](native/AGENTS.md).
- Update architecture or decision records when public interfaces, dependency
  relationships, or architectural decisions change. Routine edits need no diary.
- Run checks proportional to the change. Report failures and untested behavior
  accurately; a scaffolding check is not runtime or platform certification.
- Commit, push, and publish only when requested.

## Task continuity

Use the [task template](docs/tasks/TEMPLATE.md) when a task needs a durable handoff.
Keep one concise record per task, with scope, evidence, blockers, and next steps. Store
disposable notes in the ignored `.local/` directory.

Do not create a shared turn-by-turn log or copy private conversation transcripts into
this public repository. Durable documentation should describe the project and decisions
rather than the agent session.
