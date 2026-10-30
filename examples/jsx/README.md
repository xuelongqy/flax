# JSX and TSX example

This independent JS project enables optional JSX while reusing the ordinary standalone
Flutter host. `Counter` defines its parameters once in its constructor; generated types
provide JSX attributes. The example mixes TSX, JSX/JSDoc, ordinary factory calls,
explicit signals, keyed native State, and real LayoutBuilder Context callbacks.

From the repository root after installing workspace dependencies:

```sh
pnpm --filter @flax/example-jsx run typecheck
pnpm --filter @flax/example-jsx run build
pnpm --filter @flax/example-jsx run types:watch
```

The last command is optional and stays running for editing. Builds write an independent
module application to `examples/jsx/assets/flax/`. The JSX switch belongs only to this
JS project; existing examples remain disabled.

For a live application, prepare the existing standalone host's module inventory with its
normal bundle command, then start this project's module endpoint:

```sh
pnpm --filter @flax/example-standalone run bundle
pnpm --filter @flax/example-jsx run dev
```

In another terminal, run `examples/standalone/lib/main_esm.dart` with the maintained
Flutter engine and `--dart-define=FLAX_MODULE_URL=http://127.0.0.1:5173/main.js`. Follow
the [standalone host setup](../standalone/README.md#native-esm-example) for the
platform's local-engine flags. Applying source changes in this native ESM mode requires
replacing the owning Session; the endpoint does not automatically restart the host.

For save-driven hot reload, use the existing factory-HMR mode instead of the native
module endpoint. Run these commands in two terminals from the repository root:

```sh
pnpm --filter @flax/example-jsx run dev:hmr
```

```sh
dart run examples/jsx/tool/run.dart
```

The runner stages the existing standalone host and adds the existing WebSocket plugin.
Use the maintained Flutter SDK and repository-local `TMPDIR`, `TMP`, and `TEMP` as in
the root setup instructions. Keep the host module inventory prepared with the bundle
command above. In `main.tsx`, change `label={label}` inside `DemoState.build` to
`label={label + ' live'}` and save. The counter labels update automatically while their
counts remain unchanged. Saving the original expression updates the UI again.

Method-body edits in `counter.tsx` also reload through its `Demo` importer while
preserving counts. Change the click increment or the Text label and save to try it.
Classes initialized only from literals and constructor parameters do not depend on an
imported component's method bodies. More complex initialization retains conservative
dependency checks. Constructor, field, and module initializer changes require a restart.
The native host loads `/@flax/dev.js` and enables the framework's debug-only
`developmentMode`. Drag the floating reload icon to move it within the viewport. After
saving an initializer edit, click it to read the newest complete script and replace only
this Session. Counts reset and the button stays in place. The Flutter process keeps
running. Normal method edits still use state-preserving HMR; rejected edits do not
automatically restart or migrate application state.

Tap a counter to update its native State. The alternate ordinary construction path is
used by the native parity test, which also checks keyed reorder, signal updates,
Context, and disposal. The example's `jsx` constructor parameter selects that comparison
path; `package.json` remains the sole project switch enabling JSX compilation.

See the [JSX guide](../../docs/guides/jsx.md) for supported constructor forms and
content mapping. Multiple Widgets in a single-child slot require an explicit layout.
