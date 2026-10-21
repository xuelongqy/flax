# Configured host bindings

This is a runnable macOS arm64 Flutter application, with checked-in Pub manifests, a
separate pnpm workspace, three normal miniapps and one negative-test miniapp. Its source
and configuration are the same inputs used by the outside-consumer verifier; running the
application does not call that verifier or create temporary projects.

The complete [host binding integration guide](../../docs/guides/host-bindings.md)
explains configuration, provider reuse, View plugins, types-only SDK packaging and
compatible host upgrades.

## Run from this checkout

First select the maintained Flutter fork and build its matching macOS debug engine as
described in the [repository setup](../../README.md#quick-start). Xcode and macOS 15 or
newer are required. Use that fork's bin directory on PATH; a stock Flutter SDK cannot
load the Flax engine.

From the repository root:

```sh
export FLUTTER_ROOT=/path/to/flutter-fork
export PATH="$FLUTTER_ROOT/bin:$PATH"
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
pnpm run js:build
cd examples/configured_bindings
pnpm install --frozen-lockfile
pnpm run generate
pnpm run build
```

The Dart projects are members of the repository Pub workspace. This example owns its
pnpm workspace and lockfile. Its fixed file overrides consume framework artifacts from
the checkout, while its SDK/provider types are local workspace dependencies. No example
package must exist on npm. If framework JS changes after installation, reinstall this
example with `pnpm install --force` after the repository JS build.

Launch the actual host from this example:

```sh
cd host
flutter --local-engine-src-path="$FLUTTER_ROOT/engine/src" \
  --local-engine=flax_mac_debug_arm64 \
  --local-engine-host=flax_mac_debug_arm64 run --no-pub -d macos
```

The window displays four FlaxViews together. Each card names its injected plugins and
APIs. The buttons and live results below the divider are rendered by that JS miniapp.

| View                    | Injected plugins                                            | Behavior                                                                                                      |
| ----------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Shop A / Shop B         | FlaxMaterialPlugin + FlaxPublicSdkPlugin + FlaxPricesPlugin | Add item calls add(1); a cart.quantities subscription updates both shops automatically.                       |
| Internal manager        | FlaxMaterialPlugin + FlaxInternalPlugin + FlaxPricesPlugin  | Reset cart calls resetCart() and returns the 1200-cent unit price.                                            |
| Missing internal plugin | FlaxMaterialPlugin + FlaxPublicSdkPlugin + FlaxPricesPlugin | Try internal API lazily imports the internal SDK; the missing module is rejected before resetCart() executes. |

These are real Material TextButtons created by each JS miniapp. Their handlers call host
APIs and update local signals rendered through Text(...bind). Each shop also consumes
the same Dart broadcast Stream<int> with listen(). The live row shows the shared
quantity and total; the row below it records that miniapp's last button call and
delivery result. Startup only subscribes and reads the initial quantity. All four
sessions stay mounted during clicks; their calls/attempts counters keep increasing.

Try this sequence after launching:

1. Shop A **Add item**: both shops show live quantity 2 and total 2400 cents. Shop B
   still has calls=0, proving its update came from the subscription.
2. Shop B **Add item**: both live rows show quantity 3 and total 3600 cents. Only Shop
   B's own call counter increases; its call result also shows delivery 4 days.
3. Internal manager **Reset cart**: both live rows return to quantity 1 and total 1200
   cents automatically, without any shop click.
4. Missing internal plugin **Try internal API**, twice: both attempts show the real
   missing-module error, without changing the cart or restarting a View.

Each shop owns its JS signal and subscription; their shared source is the
application-owned Dart Cart. add() and resetCart() use the same quantity setter, which
emits only when the value changes. A new subscriber reads the initial quantity after
starting its subscription, then receives subsequent changes. Leaving a View cancels its
subscription; other Views keep listening. The application-wide controller remains open
for the host's lifetime and can serve new View sessions. No timer, manual read or JS
global shared between sessions is involved.

The manager retains only its internal plugin and does not subscribe to the public SDK.
The failure miniapp catches its lazy import rejection inside the click handler and
displays it through its signal. Miniapp contents scroll when their allocated space is
short; narrow host windows also stack the cards vertically.

## Files to follow

| Area                                            | Source                                                                                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host APIs, including an unbound Dart dependency | [api.dart](host/lib/api.dart), [vendor](vendor/lib/configured_delivery.dart)                                                                                  |
| Three binding selections                        | [shop](host/bindings/flax_bindings.yaml), [delivery](host/bindings/flax_delivery.yaml), [internal](host/bindings/flax_admin.yaml)                             |
| Existing Money provider                         | [provider metadata](provider/flax_package.yaml), [provider bindings](provider/bindings/flax_bindings.yaml)                                                    |
| Startup and per-View injection                  | [main.dart](host/lib/main.dart), [plugins](host/lib/configured_host.dart), [module configuration](host/modules/flax.modules.json)                             |
| Independent business projects                   | [Shop A](miniapps/first/package.json), [Shop B](miniapps/second/package.json), [manager](miniapps/manager/package.json), [shared bundler](miniapps/build.mjs) |

Public native/TS outputs live in `host/lib/src/generated/sdk/` and
`host/js/sdk/runtime/src/generated/`. Internal outputs use sibling `internal/`
directories. Each generation command processes all sibling YAML scopes.

## Build, pack and test separately

From this example root, these are ordinary build scripts:

```sh
pnpm run generate:provider
pnpm run generate:host
pnpm run build:host
pnpm run build:apps
pnpm run pack:sdk
```

Only `provider/js-types` and `host/js/sdk/types` are packed. The two runtime packages
and both internal packages stay private. Archives are written beside their package.json:
`provider/js-types/example-prices-0.0.0.tgz` and
`host/js/sdk/types/example-shop-0.0.0.tgz`. This command never publishes.

The normal application bundles are generated in `host/applications/`; host factory
assets live in `host/assets/flax_modules/`. These are build outputs, not source inputs.

From `host/`, run the actual bundle-based startup test and the directory-based View
contracts with the same engine:

```sh
flutter --local-engine-src-path="$FLUTTER_ROOT/engine/src" \
  --local-engine=flax_mac_debug_arm64 \
  --local-engine-host=flax_mac_debug_arm64 test --no-pub
```

`demo_test.dart` starts the same main.dart as the desktop app, clicks the JS buttons,
checks passive cross-View updates and retained View elements, and verifies that repeated
denied calls do not increment adminCalls. `application_test.dart` also checks
subscription cleanup, the remaining subscriber after one View closes, fresh sessions
after all Views close, simultaneous public/internal Views and missing native bindings.
The `forbidden` project deliberately has internal declarations but runs without the
internal plugin in the negative test.

See
[compatible upgrades](../../docs/guides/host-bindings.md#5-upgrade-the-host-without-rebuilding-old-miniapps)
to update the host while keeping these miniapp outputs unchanged. The outside-consumer
gate, `dart run tool/check_configured_bindings.dart`, additionally installs packed
declarations into isolated projects and tests legacy version/hash imports. It is an
additional check, not application setup.
