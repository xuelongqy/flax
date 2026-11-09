# Lumen Outpost

An offline survival game using Flax Canvas 2D for combat and real Flutter widgets for
menus, the HUD, upgrades and settings. Fight endless waves until health reaches zero.
macOS and Android use maintained V8 JIT; iOS uses maintained V8 jitless.

The opening quickly offers a weapon choice. Bolt ranks fire 1/2/3/5-shot fans, Orbit
Blades grow to six blades and Chain Discharge reaches ten targets. Swarm, flanking,
siege and recovery phases repeat every 90 active seconds. The first guardian arrives at
two minutes; each clear repairs 20% health, grants energy, readies Pulse and starts a
two-minute interval before the next guardian. Ordinary enemies keep spawning.

Difficulty stops increasing after 20 active minutes, permanent equipment keeps its
existing rank caps, and later levels offer repairs with a bounded energy requirement.
Time always counts up. Score is kills plus ten times completed active seconds. Older
profile records are preserved; historical win counts are hidden and never increased.

## Launch

Use the maintained Flutter SDK and its matching local engines. Run from the repository
root; generated platform projects and compiler temporaries stay on the workspace volume.

```sh
export FLUTTER_ROOT=/path/to/maintained/flutter
export PATH="$FLUTTER_ROOT/bin:$PATH"
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
dart run tool/survivors_run.dart --release
```

The launcher builds only the game's JS dependency closure, stages a standalone consumer,
creates the selected platform project, builds with official local-engine arguments,
audits its engine libraries and preserves the product in
`build/survivors-<target>-<mode>/`. `--build-only` stops after the audited build. Normal
products contain no integration-test entry or acceptance commands. Bundle resources are
loaded from the owning Session's AssetBundle; audioplayers receives decoded bundled
bytes through `BytesSource`.

| Target                 | Environment before launch                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| macOS arm64            | `FLAX_CHECK_TARGET=macos-arm64` (default on this host)                                                                         |
| Physical Android arm64 | `FLAX_CHECK_TARGET=android-arm64`, `FLAX_CHECK_DEVICE=<adb-id>`, `ANDROID_HOME=/path/to/android-sdk`                           |
| Physical iOS arm64     | `FLAX_CHECK_TARGET=ios-device-arm64`, `FLAX_CHECK_DEVICE=<iphone-id>`, `FLAX_IOS_TEAM=<current-team-id>`; requires `--release` |
| iOS arm64 Simulator    | `FLAX_CHECK_TARGET=ios-simulator-arm64`, `FLAX_CHECK_DEVICE=<simulator-id>`; omit `--release`                                  |

Android's binary audit also needs the installed NDK LLVM tools. Append that bin path
after the Apple toolchain so NDK clang does not replace the system compiler, for
example:

```sh
export PATH="$PATH:$ANDROID_HOME/ndk/<installed-version>/toolchains/llvm/prebuilt/darwin-x86_64/bin"
```

Use the host directory supplied by your installed NDK on other systems. No shared SDK or
global environment changes are required.

Android uses immersive fullscreen. Swiping from an edge can temporarily reveal system
bars; returning to the app reapplies fullscreen. iOS requests Flutter's
`SystemUiMode.immersiveSticky` at startup and on resume. The battlefield fills the whole
window, including the area beneath display cutouts. The HUD, menus and resting touch
controls stay inside the safe area. The floating joystick uses the full window.

The iOS bundle ID is `dev.flax.lumenoutpost`. The staged project uses existing signing
configuration and the V8 Extended Virtual Addressing entitlement. No platform projects
are copied into source. `build.json` records product and engine audit details; a build
alone does not establish gameplay or performance acceptance. macOS receipts include the
full signed root CodeDirectory SHA-256, sealing Dart resources in Debug and nested AOT
code in Release; run.json links that exact build receipt.

## Controls and ownership

WASD or arrows move, a new Space press activates pulse, and Escape pauses. Touch uses a
left-side joystick and the right-side pulse button. The visible idle pad accepts an
immediate directional press; touches elsewhere on the left start a floating pad. A
3-logical-pixel deadzone filters small drift and 24 pixels reaches full speed, with an
eased response between them. Choose upgrades with the cards or 1/2/3. On Android and
iOS, pulse, player damage and upgrade choices provide optional haptic feedback; it can
be disabled in Settings. The battlefield fills the entire window at its actual aspect
ratio, using one uniform actor scale. Extra width or height reveals more of the arena.
Mobile is landscape-only; desktop accepts any window shape with a usable safe area of at
least 640x360 logical pixels. Background, focus, portrait and undersized-window
transitions pause and clear input. Safe-area changes, including a left/right cutout
swap, also pause and clear input. Every resize redraws the new viewport while paused;
Resume is explicit. The simulation and renderer share one camera, and developer replay
v2 records viewport changes with tick inputs so aspect-dependent spawns reproduce
correctly.

The industrial battlefield uses a separately baked floor texture and upright eight-way
actor poses. Movement and nearby targets determine facing; idle actors retain their last
direction. The HUD uses compact cyan bars, weapon cards and circular touch controls.
Pulse shows its existing cooldown and readiness, then releases a brief cyan shockwave.
Reduced Motion keeps the readiness cue and a quiet ring without rotating charge arcs or
radial marks. These visuals never change damage, range or cooldown.

Energy-crystal sprite quads increase from 18 to 30 world units, about 67% larger on each
axis, for clearer drops on landscape phones. Pickup reach, attraction, energy value,
population limits and the existing atlas/draw path remain unchanged.

Start waits for both scene images; Retry reloads failed assets. Audio and persistence
failures permit silent or unsaved play and show status text. Settings and results use
one versioned profile in the dedicated `lumen-outpost` namespace; writes acknowledge a
host storage flush. No active encounter is restored after process death.

Settings includes Chinese/English selection and an optional FPS display. Chinese is the
default for profiles without a language choice; FPS is off by default. Both choices are
saved as optional fields in profile version 1, preserving validated older saves and
future-version write protection. The counter measures actual combat Canvas draws over
active wall-time windows and updates once per second. Pausing clears the reading;
resuming starts a new window. It does not measure physical display presentation.

Menus use angular cyan framing, while upgrade cards retain the battlefield beneath a
dark scrim and show the offered weapon, effect and resulting rank. Native buttons keep
pointer, keyboard focus and screen-reader interactions; Reduced Motion removes their
animated highlight transitions.

Original sprite and sound provenance is in [ASSETS.md](ASSETS.md). Reproduce the seven
mono PCM WAV assets with `python3 examples/survivors/tool/generate_audio.py` from the
root. The generator uses the Python standard library and checks format, length and
clipping.

The example pins local audioplayers copies to settle canceled source preparations,
release their listeners and prevent file preparation from reaching native playback after
disposal. Disposal is terminal and repeated calls share one Future. Public audio APIs
remain unchanged. The patches and upstream provenance are documented in
[the Dart patch](vendor/audioplayers/FLAX_PATCH.md) and
[the Darwin patch](vendor/audioplayers_darwin/FLAX_PATCH.md); the shared SDK and package
cache are not modified.

These overrides participate in the repository's shared Dart workspace resolution, so
other examples in this worktree also use the patched packages. A staged standalone
Survivors consumer keeps its relative overrides; unrelated outside consumers retain
their own dependency selection.

## Checks and evidence

```sh
pnpm --filter @flax/example-survivors run typecheck
pnpm --filter @flax/example-survivors run test
dart test tool/test/survivors_run_test.dart
dart run tool/survivors_run.dart --release --acceptance
```

`--acceptance` builds a separate test application with compile-time gated hooks. Its
`survivors-ui-smoke` scenario drives real Flutter controls and Canvas rendering: actual
one-time asset failure and retry, keyboard movement, concurrent joystick/pulse touch,
pointer cancellation, upgrade selection, pause/resume, Flutter lifecycle interruption,
nonterminal guardian rewards, health-zero results, restart, settings, acknowledged
persistence across store reopen, JS component disposal and runtime disposal. Fixtures
accelerate the simulation; they do not replace rendering with an image or certify
full-length encounters. Synthetic lifecycle dispatch is not physical OS testing.

`--soak` runs 20 ordinary owning-View mount/unmount cycles and awaits real native player
disposal replies after runtime shutdown. It then measures a synthetic peak fixture after
30 seconds of warmup for 60 combat seconds: 200 enemies, 300 projectiles, 150 pickups
and 300 decorative particles, with all three weapons at rank four. Population
replenishment cost is included; observed count ranges and weapon ranks are reported.
Before each step, only fixture enemy-projectile slots are released for real five-bolt
volleys; all populations are restored before drawing. New real bolt IDs and complete
five-bolt volleys are counted once, with counter differences anchored to the native
measurement window. At least one complete volley must occur inside that window. Only
this fixture replenishes health and suppresses upgrades. It must observe at least eight
actual Pulse activations. This maximum-rank workload is distinct from historical
starter-only peak results. The normal workload uses ordinary progression and health.

The soak then completes at least 1,800 active fixed-step combat seconds using the
read-only pilot, quantized into ordinary Flutter key events. After active play, three
explicit health-zero/restart checks run separately and are labeled as fixtures rather
than natural defeats. Its 45-minute wall limit fails explicitly if it cannot progress.
This is an automated workload, not human play. Reports keep JS update, JS drawing,
Canvas commit host-callback time, Flutter UI, Flutter raster and rAF callback intervals
separate. Commit samples carry native Flutter frame numbers and raw Scheduler vsync
timestamps. Reports include actual logical viewport and safe-area dimensions, world
camera rectangle, backing pixel dimensions and reproducible seed/content identity;
platform aspects are not assumed identical. The normal measurement starts at ordinary
Start and spans 600 active seconds, requiring positive health past the former deadline
and at least two ordinary guardian clears. Upgrade/pause UI remains inside the shared
native/JS window. JS collection stops outside that window; 144,000 samples per
stream/15-minute bounds fail explicitly on overflow. The nominal 60FPS target permits
five percent tolerance: at least 57 distinct Canvas submissions linked to native raster
timings per second over the independently anchored full window. Missing leading/trailing
time stays in the denominator. The entire normal window includes upgrade/pause UI; those
intervals are not subtracted. A separate dirty Flutter frame after each window must
appear in the native timing batch within eight seconds before capture closes; the
Release engine can batch timings for one second. Receipts retain matched/unmatched IDs,
window boundaries and the raster marker. JS stream counts must agree with the
update/draw contract, allowing at most two boundary draws and the first interval after
each resume. A missed cadence, UI/raster p95 or callback p99 target fails the acceptance
result; missing samples fail as well. Callback intervals are not display presentation
latency. RSS and application/native-player release receipts have distinct meanings.
Chained image-handle callbacks, real lifecycle-observer registrations and detached game
focus are compared with a warmed empty-scene baseline across 20 cycles; the probe is not
a native heap allocation trace.

Healthy native smoke requires both music and effect source setters to settle
successfully, plus source-to-resume completion accounting after upgrade, defeat,
guardian reward and reopen. Bounded settled checks require zero source/playback errors
and no app silent-play warning; an early successful setter alone is insufficient. A
separate focused broken-media regression checks the visible silent-play warning and that
later events stop attempting playback.

The smoke also runs a separate gated audio fake case to expose shutdown ordering. Its
fake receipts are not native-platform evidence. Failure cleanup waits for Session
closure before its single storage shutdown and preserves the original gate error and
stack. Native source setter start/settlement and ordinary-unmount overlap are recorded
separately; a backend that settles before removal is reported without claiming overlap
coverage.

Smoke and soak products live in separate `build/survivors-*-acceptance/` and
`build/survivors-*-soak/` directories, with `acceptance.log`, `build.json` and a
product-linked `run.json`. Current receipts/PNGs are archived under `previous/` before
rebuilding. Streamed logs (including partial timeout output) survive failure, and the
scenario failure marker stops Android logcat collection promptly. A smoke PASS does not
certify the design's 30-minute, fixed peak, physical interruption or performance
criteria. See the
[task acceptance criteria](../../docs/tasks/canvas-survivors.md#performance-and-evidence).
