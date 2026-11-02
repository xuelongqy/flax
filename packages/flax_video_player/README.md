# Flax video_player

Optional generated bindings for the public `video_player` Dart library. Application
JavaScript imports `@flax/video-player`; the physical implementation package is
`@flax/video-player-runtime`. Both use version 0.0.0 and remain unpublished.

## Host setup

Depend on `flax_video_player`, prepare `@flax/video-player` from its runtime package in
the host module inventory, then install `FlaxVideoPlayerPlugin()` on the owning
`FlaxView` or `FlaxSession`. The plugin contributes `videoBindings` and selects its
prepared JS module. Core owns Flutter/Dart provider types; there is no second player,
dispatcher, browser video element or frame transport.

The upstream `VideoPlayerController`, `VideoPlayerValue`, video Widgets, captions and
options retain their original Dart APIs. Unsupported signatures keep generator skip
reasons. Controllers are application-owned: remove listeners and explicitly await
`controller.dispose()` when a shutdown sequence needs native cleanup to finish before
closing the Session. A Flutter State's synchronous `dispose` can start that Future but
cannot await it. Session close does not dispose application objects.

## Platform and trust boundaries

The selected upstream plugin provides Android, iOS and macOS implementations. Flax's
maintained engine determines actual supported targets and minimum OS versions. No
Windows/Linux, mpv backend, Web runtime or additional codec stack is installed here.
Network formats and codecs remain platform-dependent.

These are bindings for trusted application code, not a permission-scoped media service.
Native media networking does not pass through Core Fetch, and upstream asset/file
constructors do not consume the Flax scoped resource backends. The plugin rejects
sandboxed Sessions. Hosts must not expose these bindings as a way around module
permissions. `VideoPlayerController.asset` uses Flutter's host asset namespace, not the
Session's selected business AssetBundle. Configure upstream network entitlements and
Android permissions when enabling network sources.

See the [example](example/README.md) and the
[package contract](../../docs/architecture/packaging.md).

## Checks

Run from the repository root with the maintained Flutter SDK and repository-local
`TMPDIR` described in [contributing](../../CONTRIBUTING.md#checks):

```sh
dart run tool/package.dart check flax_video_player
dart run tool/package.dart integration flax_video_player
```

The package UI suite uses a deliberately fake upstream platform to verify bridge
behavior; only the example's native integration test establishes real video playback.
Platform validation limits are recorded with that example, not inferred from generation.
