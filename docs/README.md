# Documentation

Start with the [project README](../README.md) for supported scope and setup, then use
[Contributing](../CONTRIBUTING.md) for development and verification commands.

## Current contracts

| Area                                      | Authoritative entry                                                                                                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Layers and package ownership              | [Architecture](architecture/README.md), [packaging](architecture/packaging.md)                                                                             |
| Runtime and engines                       | [Runtime](architecture/runtime.md)                                                                                                                         |
| Generation and authoring                  | [Binding Generation](architecture/bindings.md), [author template](../packages/flax_codegen/docs/author-template.md)                                        |
| Host application bindings and SDKs        | [Quick start](guides/host-binding-quickstart.md), [advanced guide](guides/host-bindings.md), [runnable example](../examples/configured_bindings/README.md) |
| Capability status and remaining gaps      | [Binding Coverage Map](architecture/binding-coverage-map.md)                                                                                               |
| External binding verification             | [Verification scope](architecture/external-binding-verification.md)                                                                                        |
| Flutter lifecycle and application startup | [UI](architecture/ui.md), [applications](architecture/applications.md)                                                                                     |
| Values and ownership                      | [Interop](architecture/interop.md), [objects](architecture/objects.md)                                                                                     |
| Navigation and components                 | [Navigation](architecture/navigation.md), [components](architecture/components.md)                                                                         |
| Optional JSX and TSX                      | [Authoring guide](guides/jsx.md), [runnable example](../examples/jsx/README.md)                                                                            |
| Optional services                         | [Host and Fetch](architecture/host.md), [WebSocket](architecture/websocket.md), [storage](architecture/local-storage.md), [Canvas](architecture/canvas.md) |

Binding selection format 2, package metadata format 2, current-only Manifest 28, UI
protocol 24 and native ABI 2 are separate domains. See the project README for current
platform acceptance; broader API coverage and public distribution are unfinished.

## Decisions and active work

[Decisions](decisions/README.md) retain architectural rationale and explicit
supersession notices. [Open Questions](decisions/open-questions.md) lists unsettled
choices. [Active tasks](tasks/README.md) contain unfinished work and handoff guidance;
completed implementation histories are replaced by current contracts and reproducible
tests. Licenses, third-party notices and formal changelogs retain their own purpose.

The [module permission contract](architecture/permissions.md) describes implemented
declarations, approval, binding guards, consent, revocation and selected Files. The
[capability catalog](proposals/permissions.md) retains the iOS/Android design inventory;
its definitions do not imply every corresponding device service is implemented.

The [secure storage contract](architecture/secure-storage.md) is implemented in Core
with a separate optional Keychain/Keystore adapter. The
[design reference](proposals/secure-storage.md) records its rationale and future uses.
