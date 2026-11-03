# Task: audioplayers generated bindings

Status: complete

## Goal and scope

Add `flax_audioplayers` as an optional generated binding package for audioplayers 6.8.1,
with paired declaration/runtime npm packages and a shared package/Playground example.
Keep real upstream players, sources, Futures, Streams and asynchronous disposal. No
recording, background service, alternate audio engine or new Flax platform is included.

## Acceptance criteria

- Reproducible public-library bindings and complete type/module delivery.
- Explicit player ownership, subscription cancellation and pending-load cleanup.
- A theme-aware compact example, HTTPS source selection and native playback controls.
- Independent package and outer-gallery tests, plus real native HTTPS execution.
- No bundled music, custom downloader, persistent cache or sandbox bypass claim.

## Approach

Follow [package boundaries](../architecture/packaging.md) and the existing video
package. `FlaxAudioplayersPlugin` selects `audioBindings` and `@flax/audioplayers`,
rejects sandboxed Sessions, and delegates to the generated plugin. Native IO remains
upstream IO rather than Core Fetch or a scoped filesystem service.

The showcase uses two original SoundHelix MP3 URLs with artist credit and no autoplay.
Source keys retain a player until selection changes. State cancels its four
subscriptions and starts upstream asynchronous disposal on unmount; Session close does
not dispose application objects. Native creation itself has no cancellation API, so its
gated test releases creation before expecting disposal completion.

A shared generator correction recognizes opted-in dependency types reexported through a
configured public source facade. Dependency-owned carriers keep priority; hidden and
unexported types remain excluded. This makes AudioContextConfig and its enums available
without importing a private upstream library as an application API.

## Results and validation

Passed:

- Generation, public type projection and JS module inventories.
- Twelve package-example widget tests: controls and Streams, compact viewport, pending
  preparation, pending creation, source replacement, errors, loop completion and
  non-loop completion. The loop regression first reproduced the incorrect paused state.
  Late completion cannot override explicit pause or a pending loop-disable request; both
  intent regressions failed before the corresponding guard was added. Delayed mute and
  playback-rate setter regressions also failed before fixing the toggles to read
  upstream's synchronous request values instead of stale display state.
- Nine outer-gallery widget tests, including ordinary/staged tours and optional-plugin
  admission; the gallery now declares eleven entrances.
- The public-reexport regression failed before the fix; all nineteen dependency-policy
  tests and focused analyzer checks passed afterwards.
- Thirty-four bindability/public-carrier tests passed. The outer prepared factory and
  inventory were regenerated and checked for AudioContextConfig and its enums.
- The selected HTTPS MP3 endpoints returned byte-range responses and ffprobe identified
  MP3 stereo at 44.1 kHz. No media file was retained in the source tree.

The package check and final native package integration passed, including a real loop
reached by seeking near the end of the track. Independent generator and example reviews
passed after the completion-intent regressions. The final isolated aggregate check also
passed, including the nine staged widget tests and native eleven-entrance tour with zero
bridge handles at Session disposal. Fake results are not native playback evidence.
Android/iOS devices, other platforms, audible quality, interruption/routing behavior,
background playback, codec matrices and Release playback are not verified by these
tests.

The upstream Darwin `getDuration` duplicate-response diagnostic remains documented in
the example guide. The engine ignores the duplicate; no third-party cache patch or
replacement backend was introduced.

## Handoff

The optional package and shared Playground entrance are implemented and remain
unpublished. Run the example from the repository root with the maintained Flutter SDK
and repository-local temporary directory:

```sh
dart run tool/example_run.dart --package=flax_audioplayers
```

The outer example uses `dart run tool/example_run.dart` and its normal host-signing
setup.
