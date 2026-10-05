# @your-scope/your-package-runtime

Runtime source delivery for the sibling declaration-only package. Generate bindings,
then run `pnpm run build` to emit this package's JavaScript and the sibling public
types. Register a Dart plugin that requests `@your-scope/your-package/api` and registers
`exampleBindings`. Installing this npm package alone does not activate the plugin.
