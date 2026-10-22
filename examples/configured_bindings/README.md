# Configured host bindings

Start with [default_app](default_app/README.md) for one app scope without a scope YAML
or explicit output paths. This shopping host demonstrates the advanced case: separate
SDK/internal scopes, custom directories, per-View generated plugins and provider reuse.

This is a runnable macOS arm64 Flutter application, with checked-in Pub manifests, a
separate pnpm workspace, three normal miniapps and one negative-test miniapp. Its source
and configuration are the same inputs used by the outside-consumer verifier; running the
application does not call that verifier or create temporary projects.

The host uses Dart annotations for shop/admin and the default app scope. Annotations are
enabled without a flag when library is omitted: shop uses sources: [lib/api.dart], while
admin/app use the default scan of this package's lib. The unexported
lib/src/app_api.dart uses @FlaxExport() and belongs to app. The existing Money provider
and unbound delivery dependency retain legacy configuration-only selection. FlaxIgnore
keeps Cart.debugLabel out of the SDK. The CLI and optional build_runner use the same
binding model; the host script below uses build_runner.

The generated host/bindings/js_modules.json is the normal JS preparation configuration.
pnpm run build compiles every local scope directly and prepares the host module assets;
adding a scope does not require another JS entry list. The host/modules project remains
an explicit format-1 compatibility example and is not used by the normal build script.
Node is needed on the development/CI machine only.

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

| View                    | Injected plugins                                                    | Behavior                                                                                                      |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Shop A / Shop B         | FlaxMaterialPlugin + shopPlugin + deliveryPlugin + FlaxPricesPlugin | Add item calls add(1); a cart.quantities subscription updates both shops automatically.                       |
| Internal manager        | FlaxMaterialPlugin + adminPlugin + appPlugin + FlaxPricesPlugin     | Reset cart calls resetCart(); Host app name calls the default-scope hostAppName().                            |
| Missing internal plugin | FlaxMaterialPlugin + shopPlugin + deliveryPlugin + FlaxPricesPlugin | Try internal API lazily imports the internal SDK; the missing module is rejected before resetCart() executes. |

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
4. Internal manager **Host app name**: its result shows Configured host, from the
   unexported Dart file annotated without a scope.
5. Missing internal plugin **Try internal API**, twice: both attempts show the real
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

| Area                                            | Source                                                                                                                                                                        |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host APIs, including an unbound Dart dependency | [api.dart](host/lib/api.dart), [vendor](vendor/lib/configured_delivery.dart)                                                                                                  |
| Four binding selections                         | [shop](host/bindings/flax_bindings.yaml), [delivery](host/bindings/flax_delivery.yaml), [internal](host/bindings/flax_admin.yaml), [default app](host/bindings/flax_app.yaml) |
| Existing Money provider                         | [provider metadata](provider/flax_package.yaml), [provider bindings](provider/bindings/flax_bindings.yaml)                                                                    |
| Startup and per-View injection                  | [main.dart](host/lib/main.dart), [plugins](host/lib/configured_host.dart), [module configuration](host/modules/flax.modules.json)                                             |
| Independent business projects                   | [Shop A](miniapps/first/package.json), [Shop B](miniapps/second/package.json), [manager](miniapps/manager/package.json), [shared bundler](miniapps/build.mjs)                 |

Public native/TS outputs live in `host/lib/src/generated/sdk/` and
`host/js/sdk/src/generated/`. Internal outputs use sibling `internal/` directories. Each
generation command processes all sibling YAML scopes. Source-scanned scopes also
generate public Dart exports under host/lib/flax_bindings/. These carriers are for
Dart/provider references; npm consumers still receive only public declarations.

The host uses the optional build_runner entry configured in
[build.yaml](host/build.yaml). Its inputs include the binding YAML/npm files; its
outputs list declares every public/internal generated path. Run dart run flax_cli:flax
sync after scope/path changes to update that Flax-owned list automatically. The provider
keeps its CLI configuration and exposes its existing metadata through
[additional_public_assets](provider/build.yaml). No duplicate Money binding is
generated.

## Build, pack and test separately

From this example root, these are ordinary build scripts:

```sh
pnpm run generate:provider
pnpm run generate:host
pnpm run build:host
pnpm run build:apps
pnpm run pack:sdk
```

Run `pnpm run watch:host` for ongoing binding generation alongside other host builders.
It updates binding sources; run the normal host/miniapp builds when their artifacts are
needed. `pnpm run generate:host:cli` retains the original CLI entry. Stop watch before
using the CLI writer; CLI check can verify build_runner's output without writing.

Only `provider/js-types` and `host/js/sdk` are packed. Their hostBindings marker and
exports let miniapps build without reading host/assets/flax_modules. Legacy runtime
packages and the internal project stay private. Archives are written beside their
package.json: `provider/js-types/example-prices-0.0.0.tgz` and
`host/js/sdk/example-shop-0.0.0.tgz`. This command never publishes.

The host declares typesSdk: {name: '@example/shop', scopes: [shop, delivery]} in
flax_package.yaml. Run generation and the normal host JS build after changing the public
selection or paths. It fills ordinary npm exports, a declaration allowlist and a
declaration-only tsconfig.flax.json, preserving the existing SDK version, scripts,
publishConfig and tsconfig.json. A new SDK would receive a small tsconfig.json extending
that generated base. The default directory is js/sdk; no per-scope SDK source list or
special publication command is needed. Generated prepack uses the ordinary types script;
an existing prepack is kept.

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
