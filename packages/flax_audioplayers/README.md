# Flax audioplayers

Optional generated bindings for `audioplayers` 6.8.1. Applications import
`@flax/audioplayers`; `@flax/audioplayers-runtime` owns physical delivery. Install
`FlaxAudioplayersPlugin()` on the owning View or Session.

Upstream players, sources, Futures and Streams retain their real Dart APIs. Cancel
subscriptions and explicitly dispose application-owned players on unmount. Session close
clears bridge resources, not application objects.

## Trust and platforms

Native file/network IO and audio caches bypass Core Fetch and scoped resources. These
bindings are for trusted applications; sandboxed Sessions are rejected. Upstream
platform coverage does not extend Flax runtime support. Format, rate, audio focus and
device behavior remain platform-dependent. No recording, background service or
alternative engine is installed.

See the [example](example/README.md) and
[package contract](../../docs/architecture/packaging.md).

## Checks

Use the maintained SDK and repository-local temporary directory from
[contributing](../../CONTRIBUTING.md#checks):

```sh
dart run tool/package.dart check flax_audioplayers
dart run tool/package.dart integration flax_audioplayers
```

Fake-platform tests verify binding behavior, not sound output; native integration checks
are recorded separately in the example guide.
