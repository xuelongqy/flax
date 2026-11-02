# Task: video_player bindings

Status: complete

## Goal and scope

Add the optional `flax_video_player` capability using generated bindings to upstream
`video_player` 2.14.1. Deliver paired `@flax/video-player` declarations and
`@flax/video-player-runtime` implementation modules, a package-local example, and tests.
Do not add another player facade, engine, mpv backend, or unsupported Flax platforms.

## Acceptance criteria

- The public upstream library generates through the existing Core provider and explicit
  `video_player_platform_interface` dependency opt-in.
- Package metadata, type projection, module delivery and dependency locks are
  consistent.
- The example controls remote HTTPS video through JS bindings and explicitly starts
  controller cleanup on unmount.
- Tests distinguish fake-platform bridge coverage from actual macOS native playback.
- Existing synchronous disposal behavior remains intact when a subclass returns a
  Future.

## Approach

Use `FlaxVideoPlayerPlugin` to select the generated module. Native media IO is not yet a
permission-scoped backend, so this plugin rejects sandboxed Sessions. Ordinary
controller ownership and Future delivery remain unchanged. A shared codegen correction
prevents inheriting synchronous disposal metadata over an asynchronous override.

The local app and outer Playground use one side-effect-free showcase and two official
HTTPS trailers through `VideoPlayerController.networkUrl`. No video files are bundled.
Isolated runners stage private Dart example dependencies for shared test fixtures
without adding them to production deliverable discovery.

## Results and validation

Passed:

- `dart test test/bindability_test.dart --reporter expanded` from `flax_codegen`: 30
  tests.
- Package checks, including Dart analysis, binding reproducibility, JS builds/type
  checks, plugin metadata and example bridge tests.
- The example's five bridge tests: controls and bidirectional clip switching,
  compact-window scrolling, initialization failure/recovery, close while initialization
  is pending, and switch while initialization is pending.
- The gallery imports the same HTTPS showcase, installs the video plugin, and exercises
  its entrance and controller cleanup in the aggregate tour.
- Package integration on maintained macOS arm64 V8 Debug, including real HTTPS sources,
  native dimensions, advancing playback, pause, seek, volume, loop, speed and both clip
  switches. Native time-label assertions use the controller's reported duration rather
  than assuming container and AVAsset durations are identical.
- The complete isolated aggregate check: eight widget tests and the native macOS gallery
  tour, including both HTTPS trailers and zero runtime handles on Session close.
  Headless startup tours explicitly use the shared platform fake; native acceptance
  keeps the real AVFoundation plugin.
- Private-example staging regression and existing example-tool tests: 20 passing;
  package-metadata/archive guards: 42 passing.
- Scoped package layout, public type and delivery metadata checks; documentation lint
  and local links; frozen Pub/pnpm resolution; independent source review.
- macOS arm64 Release export and engine/signature audit, with the copied output's
  signature rechecked by `codesign --verify --deep --strict`.

The final package/integration rerun passed. Debug application compilation also passed,
but the shared build-only auditor requires hardened runtime signing even for Debug and
rejected that export. Its security checks were not weakened; the Release export passed
instead. Native Android/iOS playback, Release playback, other network formats and a
codec matrix remain unverified.

The earlier local ad-hoc Release audit predates the latest UI and HTTPS conversion and
does not certify a notarized release. Its receipt is retained locally at
`.local/receipts/video-player-release-pre-https.json`; the disposable application copy
is removed during worktree cleanup. Rebuild before auditing the current Release. Current
source and new example bundles contain no video files; native buffering or temporary
cache is still possible.

## Handoff

The package and shared Playground entrance are implemented; nothing is published. Use
`dart run tool/example_run.dart --package=flax_video_player` with the maintained Flutter
SDK to launch the local example; omit `--package` for the Playground. Preserve the
existing unsupported-platform and scoped-media boundaries when adding another backend
later.
