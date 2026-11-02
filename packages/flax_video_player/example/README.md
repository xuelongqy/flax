# Video player example

Two official Blender trailers stream directly over HTTPS through the real native
`video_player` implementation: Big Buck Bunny and Sintel. JavaScript uses the existing
`VideoPlayerController.networkUrl(Uri.parse(url))` binding; no video files are bundled
and there is no download manager, custom cache or Dart player facade.

Playback requires internet access. The native player buffers data and may use its own
temporary cache, so streaming does not mean zero runtime memory or disk use. A remote
server failure is displayed in the player; switching to the other source remains
available. Both links support HTTP byte ranges for seeking.

JavaScript owns each controller and controls play, pause, scrubbing, looping, volume and
speed through generated bindings. Switching creates a keyed player with ordinary Flutter
cleanup; the new source starts paused at zero, even if the previous source was still
loading or playing.

From the repository root, using the maintained Flutter SDK:

```sh
dart run tool/example_run.dart --package=flax_video_player
```

Build and audit a local Release application without launching it:

```sh
dart run tool/example_run.dart --package=flax_video_player --build-only --release
```

The launcher prepares a disposable platform project and uses the existing local engine.
Configure native network entitlements/permissions as described in the
[package contract](../README.md#platform-and-trust-boundaries).

## Checks

`test/application_test.dart` verifies network source construction, controls, switching,
error recovery and cleanup with an explicit platform fake. These widget tests do not
contact the trailer servers. `integration_test/app_test.dart` uses the real native
backend and requires access to the two HTTPS URLs, including range requests.

Native acceptance targets macOS arm64 with the maintained V8 Debug engine. Android/iOS,
Release playback, arbitrary URLs, other codecs, audible output, device routes and
audio-session interruptions require separate validation.

## Shared gallery entrance

`@flax/example-video-player/showcase` exports `createVideoPlayerExample` without a
`runApp` side effect. The outer [Playground](../../../examples/embedded/README.md)
imports the same factory and installs `FlaxVideoPlayerPlugin`. Both entrances use the
same remote sources, with no package-specific asset argument or copied media.

## Trailer sources and credits

- [Big Buck Bunny trailer](https://download.blender.org/peach/trailer/trailer_iphone.m4v):
  H.264/AAC, 480 × 270, approximately 33 seconds.
- [Sintel trailer](https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4):
  H.264/AAC, 854 × 480, approximately 52 seconds.

The trailers are unmodified remote originals. Their credits and CC BY 3.0 source links
are recorded in [the bundled text notice](assets/NOTICE.md) and shown in the player.
