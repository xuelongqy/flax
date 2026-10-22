# Flax CLI

Optional project setup for an existing Flutter host. Binding generation belongs to
`flax_codegen` and works independently through its CLI or `build_runner`.

With this package available, run from the Flutter package root:

```sh
dart run flax_cli:flax init
flutter pub get
pnpm --dir js install
```

The `flax` executable exposes the same commands when installed. Init adds missing
dependencies/assets and JS build/page templates while preserving existing source,
scripts, dependency selectors and custom configuration. It does not install packages,
edit `main.dart`, publish an SDK or generate bindings.

After writing annotations, run `dart run build_runner build` (or
`dart run flax_codegen generate`) and the normal JS build. SDK npm configuration is
maintained by `@flax/build` from the generated binding plan.

`dart run flax_cli:flax sync` remains an optional compatibility helper for old projects
that explicitly list generated output paths in `build.yaml`. Default annotation
generation does not need init or sync. Custom JS builds must incorporate module
preparation themselves; init never replaces their scripts.

For the complete annotate/build/run sequence and unpublished local dependency setup,
follow the [host quick start](../../docs/guides/host-binding-quickstart.md).
