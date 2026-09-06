# Repository Tools

This directory owns repository maintenance tooling, not the future end-user CLI.

The local Markdown link checker parses Markdown links and GitHub-style heading anchors,
checks repository targets, and skips external URLs. It performs no network requests.
Fenced examples are not treated as links. Its tests cover real valid and invalid inputs
in temporary directories.

Run through the [documented commands](../CONTRIBUTING.md#checks). The tooling test
command is `pnpm run test:tooling`.

Future engine fetch/build and release assembly tools belong here only when implemented.
A task should have one working command owner; avoid duplicating build logic in Melos,
package scripts, and CI.
