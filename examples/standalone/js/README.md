# Standalone JS Application

The private @flax/example-standalone project describes the complete Material
application. MaterialApp supplies Theme and Navigator. HomePage uses real Flutter State,
explicitly owns its TextEditingController, and keeps independent signals for title and
result text. DetailsPage returns a structured navigation result.

TypeScript and the bundler use normal package exports. Configuration is self-contained;
there are no repository source aliases or imports from root tools.

```sh
pnpm run typecheck
pnpm run bundle
```

Build the Flax workspace packages first when working inside this repository. The bundle
is an ES2019 IIFE written to the sibling Flutter project's ignored assets/app.js. Node
and esbuild are development tools; application code has no Node or browser dependencies.

The [external verification](../../../docs/architecture/applications.md) installs packed
Flax packages and runs these same commands outside the workspace. Public package names,
registry publication and project creation commands remain undecided.
