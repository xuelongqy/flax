# JavaScript Packages

This directory is managed by the root pnpm workspace.

| Package                                | Intended role                 |
| -------------------------------------- | ----------------------------- |
| [runtime](runtime/README.md)           | Signals and host API surfaces |
| [flutter](flutter/README.md)           | Flutter base API bindings     |
| [material_ui](material_ui/README.md)   | Material UI bindings          |
| [cupertino_ui](cupertino_ui/README.md) | Cupertino UI bindings         |
| [cli](cli/README.md)                   | Developer commands            |

Each package compiles an empty TypeScript module to ESM and type declarations. These
private workspace names do not claim a registered public npm scope.

Runtime TypeScript uses explicit ECMAScript libraries without implicit DOM or Node.js
globals. Future CLI-specific Node types must stay scoped to the CLI.

See [contribution commands](../CONTRIBUTING.md#checks) and
[package boundaries](../docs/architecture/packaging.md).
