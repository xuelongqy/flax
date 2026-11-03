# Audio player example

The package example and outer Playground share a side-effect-free JS showcase. Playback
uses the upstream audioplayers plugin through generated bindings, not a custom host
dispatcher. Network sources require internet and may use native buffers.

The two original SoundHelix tracks are credited in [NOTICE](assets/NOTICE.md) and are
not bundled. Selecting a track prepares it without autoplay; changing selection retires
the old player and starts the new one paused. Controls cover play/pause, timeline seek,
restart, volume, looping and playback rate. Appearance follows the host theme, including
the compact scrolling layout.

```sh
dart run tool/example_run.dart --package=flax_audioplayers
```

Run from the repository root with the maintained SDK and repository-local `TMPDIR`.
Platform acceptance is limited to the checks actually recorded for this package.

The twelve widget tests install explicit player/global platform fakes and verify
controls, Streams and cleanup, including pending native creation and source preparation.
The separate native integration entry installs no fake and verifies HTTPS preparation
and an advancing playhead through the real plugin. Neither establishes audible quality,
audio routing/interruption behavior, background playback or a codec/platform matrix.

Pending source tests withhold the prepared event, not the native `setSourceUrl` Future.
They do not establish cancellation or complete cleanup of a stalled native source
setter. Separate delayed volume/rate tests verify that consecutive clicks retain the
latest request while native setters are pending.

The selected audioplayers Dart code marks loop completion as completed and stops its
position updater. The showcase resumes through the upstream API on loop completion to
keep Dart state, the playhead and one-click pause consistent with native looping.

Known upstream diagnostic: audioplayers_darwin 6.5.0 replies twice to `getDuration`
(`handleAsync` falls through after its duration result). The engine reports the
duplicate response and ignores it. No dependency-cache patch or replacement backend is
installed.
