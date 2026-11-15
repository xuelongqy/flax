# Task: Canvas Survivors Game Design

Endless gameplay is implemented. Release acceptance remains incomplete because the 60 Hz
Android reference missed both Canvas cadence gates. iOS remains build-only.

## Goal and scope

Build a complete, replayable single-player action survival game that demonstrates Flax
Canvas 2D together with real Flutter UI, and provides a reproducible workload for
finding runtime problems. The user selected this genre and macOS, Android and iOS. The
concrete content, controls and budgets below are the approved version-one choices.

The latest approved visual direction uses dark industrial floor plates, compact cyan HUD
bars, square weapon cards, outlined upgrade cards and circular touch controls. Actors
use distinct upright directional views for movement and aiming, including side and back
views, instead of always facing the same way.

The touch throw is 24 logical pixels, with a 3-pixel radial deadzone and initial touches
anchored inside the visible idle pad. The mobile pad is 116 logical pixels with a
32-pixel thumb; the Pulse button is 88 pixels. Their faces have no MOVE, PULSE or
countdown text; direction marks, the crown, cooldown ring and accessibility labels
remain. Pulse retains its eight-second cooldown; clearer charge, ready and release
visuals use simulation time and respect Reduced Motion. The visual correction uses
compact height-responsive cyan HUD panels, consistent weapon/crown glyphs, broader floor
plates and dark actor contact shadows. The reference results below describe the revised
source and products.

The menu/display refinement also enlarges energy-crystal rendering from 18 to 30 world
units, about 67% larger on each axis. It reuses the existing atlas and draw path without
changing pickup mechanics, values or counts. The native reference runs below include
this visual size.

Working title: **Lumen Outpost**. A small maintenance drone collects energy and survives
an increasingly hostile arena for as long as its health lasts. Use a restrained science
fiction palette, readable animated sprites and distinct enemy silhouettes. A coherent
finished game, rather than a general game engine, is the deliverable.

Ship a standalone example under `examples/survivors`, using the maintained engines on
macOS arm64, Android arm64 and iOS arm64. macOS and Android use V8 JIT; iOS uses V8
jitless. The game works offline with bundled assets. Keep the existing Canvas package
example and its capability checks intact.

Version one excludes multiplayer, accounts, online rankings, purchases, procedural
levels, a level editor, a general physics engine, permanent combat upgrades, Windows,
browser delivery and Worker rendering. These are not prerequisites for validating a real
game on the selected platforms.

## Acceptance criteria

### Complete game

1. A player can start offline, learn the controls, choose upgrades, pause and survive
   repeating waves and guardians until health reaches zero, then inspect results and
   immediately start another run. Guardian clears never end the run.
2. The same content and combat rules run on all three platforms. Both movement and
   skills work concurrently on touch; keyboard focus changes never leave movement held.
3. Backgrounding, focus loss, portrait entry and window resizing preserve a paused run;
   returning never resumes combat without the player's action.
4. Asset failures have a visible retry path. Audio or persistence failure does not
   prevent play. Repeated entry, exit and restart release application-owned resources.
5. Settings and best results survive an ordinary application restart after a successful
   persistence flush. An interrupted process does not promise an active-run save.

### Menus and display options

1. Chinese and English are selectable in Settings and cover actions, upgrade effects,
   HUD labels, accessibility, failure messages and results. A profile without an
   explicit language uses Chinese; validated older saves and future-version write
   protection remain intact.
2. Optional FPS is off by default and saved with the language choice. It counts actual
   combat Canvas draws, publishes at most once per second and resets on interruption,
   upgrades and resume. Paused menus show an inactive reading. Turning it off removes
   its sampling and display; updates do not rebuild the whole game tree.
3. Menus, settings, pause and results use a coherent angular industrial cyan style.
   Upgrades follow the supplied concept's three prominent icon cards, dark translucent
   background, illuminated focus and segmented weapon/passive ranks. One-shot repairs
   show their immediate effect without implying permanent rank progression.
4. Native controls retain keyboard, touch, focus and accessibility behavior, with usable
   layouts at 640x360 desktop and supported mobile landscape safe areas. Reduced Motion
   removes animated highlight transitions. The enlarged text-free touch controls and
   combat input ownership remains unchanged.
5. Inspect Chinese and English native frames, save/reopen behavior and FPS enabled
   during both reference peak and normal measurements. An existing acceptance verdict
   applies only to its recorded source; the refinement needs current builds and an
   independent whole-outcome verdict.

### Performance and evidence

Use Release builds with the matching maintained engine. Record exact device, OS, engine
revision, display refresh rate, quality preset and game revision for every run. Physical
Android hardware and the macOS host are the current playtesting and debugging targets.
The user withdrew iPhone testing access on 2026-11-05 to use the phone personally.
Retain iOS source/build compatibility, but do not install, launch or debug on that
device. The revised iOS build is checked without using the phone; historical iPhone
results do not certify the latest visuals or performance. Simulators do not certify
physical-device performance. Reference-device evidence is not a promise about every
supported phone.

Balanced quality targets 60 Canvas submissions per second. Acceptance requires at least
57 distinct submissions per second linked to native raster frame IDs over each full,
independently anchored window. This is not measured display presentation. Measure a
600-active-second ordinary run from Start, alive with at least two guardian clears, and
a repeatable 60-second peak fixture containing 200 enemies, 300 projectiles, 150 pickups
and 300 decorative particles after 30 seconds of warmup. Peak equips all three weapons
at rank four and requires eight actual Pulse activations plus a complete real five-bolt
volley inside the measured window. Count new real bolt IDs once and report start/end
counters at the native timing boundaries; warmup emissions and shot events do not count.
Only fixture enemy-projectile slots are released before each step, then replenished to
300 before drawing. Keep upgrade/pause UI inside the normal timing window. Historical
starter-only peaks do not certify this workload. Difficulty and entity counts must not
silently change to make a performance check pass.

For each reference device, report JS update/draw encoding time, Canvas submission time,
Flutter UI and raster frame timings, frame callback intervals, and memory. Report p50,
p95 and p99 plus counts above 33.3 ms and 50 ms. The initial target is UI and raster p95
separately below 16.7 ms, and frame callback interval p99 below 33.4 ms in the 60-frame
mode. Never add pipelined UI/raster durations or describe callback intervals as measured
display presentation latency. A missed target remains visible until the cause is fixed
or a changed target is explicitly agreed.

Run at least 30 minutes of active play and 20 ordinary mount/unmount cycles. Separately
exercise three explicit health-zero/restart transitions after active play, labeling
their fixture origin and excluding them from natural defeat counts and active duration.
Compare quiescent memory after warmup with the same scene after the cycles;
image/player/listener counts must return to their stable baseline. RSS alone is
insufficient evidence of either a leak or its absence.

## Approach

### Alternatives and selected direction

| Approach                               | Benefit                                                                                           | Tradeoff and decision                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Action survival with automatic attacks | Natural growth in sprites, collisions and effects; one movement control works on both input types | Selected genre; keep upgrades and enemy behaviors small enough to finish                  |
| Tower defense                          | Strong drag/drop, menus and strategy interactions                                                 | Less continuous input pressure; not selected                                              |
| Platform game                          | Strong input and camera validation                                                                | Precise movement, level production and collision tuning would dominate this first example |

Use JS gameplay and Canvas 2D with Flutter interfaces through existing bindings. Putting
each actor in a Widget would add bridge and rebuild work to the combat path. A
third-party browser engine would introduce an additional compatibility project; direct
use of the existing Canvas API gives this first game a clearer diagnostic path.

### Encounter and progression

The encounter has no time limit. Only zero player health ends it; loading, pauses and
upgrade selection do not advance active time. The HUD always counts up. Ordinary waves
repeat every 90 active seconds:

| Cycle time       | Encounter                                              |
| ---------------- | ------------------------------------------------------ |
| 0 to 25 seconds  | Fodder swarm, initially two pursuers every 0.5 seconds |
| 25 to 50 seconds | Fast flanker-heavy pressure                            |
| 50 to 75 seconds | Mixed brutes and ranged sentries                       |
| 75 to 90 seconds | Lower-density recovery                                 |

The first guardian arrives at 120 active seconds. A clear grants 35 energy, restores 20%
maximum health, readies Pulse and schedules the next guardian 120 seconds later.
Ordinary waves continue during the fight. Keep at most one guardian and include it
inside the strict 200-enemy limit; defer when no slot or legal spawn exists. Guardians
alternate their initial radial/charge attack and retain locked telegraphs and two
health-based phases. Resolve all player damage before a clear's repair: a same-tick
fatal hit remains defeat.

Difficulty reaches its ceiling after 1,200 active seconds: enemy health is at most four
times base, ordinary movement 1.2 times base and contact/projectile damage 1.6 times
base. Guardian charge/volley limits and warning durations stay fixed. Spawn batches stay
at most three, with intervals no shorter than 0.28 seconds. Wave variety and boss cycles
continue at the ceiling.

Use one bounded arena, 3,200 by 1,800 world units, without blocking terrain. A following
camera fills the complete window aspect ratio, using 960 by 540 world units as the
nominal scale reference, and clamps at arena edges. Simulation and rendering share this
actual camera rectangle. Spawn enemy circles outside that view, inside the arena and at
least 580 world units from the player. Each bounded spawn attempt consumes two RNG draws
and samples beyond the ray exit from the expanded camera rectangle. If no legal spawn
point exists, defer that spawn instead of placing an enemy on the player. Enemy contact
and projectiles use simple circles; there is no rigid-body physics or navigation mesh.

The drone starts with a bolt weapon and needs eight energy for its first level. The
first offer contains bolt rank two, Orbit Blades and Chain Discharge. Later offers
include an eligible weapon whenever one remains. A level-up freezes combat and offers up
to three distinct eligible choices. Resolve accumulated level-ups in sequence before
resuming. No card may upgrade a capped stat or unlock an owned weapon. If all upgrades
are exhausted, offer a single 20-percent maximum-health repair. Energy requirements grow
to a ceiling of 320, keeping late repairs reachable.

| Content               | Version-one behavior                                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Three weapons         | Four ranks each: bolt fires 1/2/3/5-shot aimed fans; Orbit Blades uses 2/3/4/6 blades; Chain Discharge reaches 3/5/7/10 targets. Offer descriptions state the resulting count |
| Four passive upgrades | Fire rate, movement speed, pickup radius and maximum health; each has three ranks. Raising maximum health also adds the same amount to current health                         |
| Four enemy types      | Pursuer, fast flanker, armored brute and ranged sentry; silhouettes and attack warnings distinguish behavior                                                                  |
| Recurring guardians   | One at a time, two health-based phases, telegraphed radial shots and a charge, reward followed by continued play                                                              |
| One active skill      | Pulse damages and pushes nearby enemies. Eight-second cooldown; damage scales from 52 to 130 with the highest equipped weapon rank, while radius and push stay fixed          |

Keep enemy spawn schedules, damage, movement and upgrade coefficients in one small
content module. Exact balance coefficients are builder-owned playtesting choices; record
the content revision in replays. Keep local best score and longest survival time.
Results also show guardian clears in this run. Score is defeated enemies plus ten times
completed combat seconds, without a terminal bonus. Preserve historical stored scores
and win counts, but hide and never increase the legacy wins field. Cosmetic particles
never affect damage, score or experience. Do not add permanent power progression.

### Input and responsive presentation

| Interaction       | macOS                                                                 | Android and iOS                                                                                           |
| ----------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Move              | WASD or arrow keys; normalize diagonals                               | Press the visible left pad or start a floating pad elsewhere on the left; full speed at 24 logical pixels |
| Pulse             | Space, plus a clickable skill button                                  | Right-side skill button, usable while holding the joystick                                                |
| Pause             | Escape or pause button                                                | Pause button; system interruption pauses too                                                              |
| Upgrade and menus | Mouse, focus navigation and Enter; 1/2/3 select visible upgrade cards | Touch cards and buttons                                                                                   |

Keyboard shortcuts apply only to the foreground game and the appropriate state. Holding
Space must not repeatedly activate a skill when its cooldown expires: skills trigger on
a new press. Clear pressed keys, joystick ownership and queued skills on every
transition out of active play. UI clicks must not fall through into movement. Track the
joystick pointer independently from the skill finger; handle cancellation and pointer
capture loss as releases.

Android uses immersive fullscreen with hidden status and navigation bars. An edge swipe
may temporarily reveal the system bars; normal system navigation remains available.
Returning from another application restores fullscreen while leaving combat paused. iOS
requests hidden status bars and automatic Home Indicator hiding at startup and on resume
through Flutter's existing `SystemUiMode.immersiveSticky`. The Canvas and overlay scrim
cover the full viewport; foreground controls, menus and labels alone use the safe area.
This avoids painting opaque margins around a notched landscape display. Existing iPad
multitasking policy and generated property-list settings remain unchanged. Android and
iOS provide optional haptic feedback for an accepted pulse, player damage and a
confirmed upgrade. A mobile Settings switch disables it without changing combat rules.
Existing profiles retain their saved results and use the default for this added setting.
Unsupported haptic hardware does not prevent play.

Mobile supports landscape only; an unexpected portrait layout pauses the encounter and
displays a rotate prompt. macOS accepts every window shape with at least a 640 by 360
logical-pixel safe area; smaller layouts pause and show an enlarge-window prompt. The
battlefield fills the entire window without letterboxing. Preserve uniform actor scale
by extending the visible world on the extra axis instead of stretching sprites or
cropping combat space. For full-window dimensions `W,H`, use
`s = max(min(W / 960, H / 540), W / 3200, H / 1800)` and world viewport `W / s,H / s`.
The arena terms keep the view within world bounds. On resize, pause and clear held and
queued input before updating the shared viewport, redraw immediately, and require an
explicit Resume. Start and Restart reapply the current dimensions. Compute touch
coordinates from the actual laid-out safe-area rectangle; backing pixels are distinct
from Flutter logical pixels. Changes to any of the four safe-area insets also pause and
clear input, including a left/right swap that preserves the same usable dimensions.

Place health, experience and the combat clock at the top, weapon ranks along a compact
edge strip, and the touch movement/skill zones at the bottom corners. Respect safe areas
and keep warnings clear of controls. Use at least 48 by 48 Flutter logical pixels for
touch targets. Provide visible focus, labels and icons in addition to colors. Settings
include music/effect volume, quality and reduced motion. Reduced motion removes camera
shake and decorative flashes while retaining attack warnings and hit feedback. Use
Chinese or English interface text according to the saved language choice.

### Rendering and ownership

Use one Canvas 2D battle surface. Game owns the simulation and authoritative camera; a
JS scene draws that shared state. A JS StatefulWidget owns the scene, input listeners,
rAF callback and Flutter overlays. The Dart host initializes the maintained runtime,
Canvas, Material, localStorage and audioplayers plugins, bundles assets and forwards
application lifecycle as needed. Use available Flutter bindings for lifecycle first; any
required missing bridge stays a minimal example-local host callback, not a speculative
public lifecycle API.

Canvas draws the arena, actors, projectiles, pickups, particles and transient combat
labels. Flutter draws the HUD, menus, upgrade cards, pause, settings and results. Update
native HUD values on semantic changes; publish the clock once per displayed second and
skill cooldown at most ten times per second. No per-actor Widgets or per-frame
Widget-tree rebuilds are required.

The simulation runs at a fixed 1/60-second step. Drawing targets an average of 60 frames
per second, retaining deadline remainders across high-refresh display callbacks and
drawing at most once per callback. Process at most three simulation steps per callback.
Discard excess catch-up time and count it in diagnostics; the combat clock and cooldowns
advance only for completed simulation steps. A resume starts with a fresh timing
accumulator. Input is consumed at simulation-tick boundaries.

Use straightforward entity collections and explicit update functions. A uniform spatial
grid is appropriate for nearby collision queries at the proposed peak load; keep it
local to collision code. Further pooling, ECS frameworks, native gameplay code and
Workers require measured evidence. Separate gameplay RNG from decorative randomness;
render frequency and quality must not alter simulation for the same seed, tick inputs
and viewport-change trace. Different screen aspects can change visible spawn boundaries;
record the viewport trace when reproducing those encounters.

Reuse decoded sprite atlases and ImageBitmaps. Each frame starts from the existing
full-frame reset path so recorded history stays bounded. Keep ordinary frames free of
pixel readback, image decoding, blob export and text measurement. Cache static text
metrics and baked glow sprites. Live effects are localized; avoid an always-on
full-screen blur chain. Measure before changing shared Canvas ownership or protocols.

Two quality presets preserve all combat objects and warnings. Balanced uses a 960 by 540
pixel-area budget and fewer decorative particles; Detailed uses a 1,920 by 1,080
pixel-area budget and more decoration. Both backing axes follow the actual viewport
aspect. The 1x/2x cap applies per world unit, not per Flutter logical pixel. For logical
full-window `W,H`, world viewport width `Vw`, device pixel ratio `D`, preset limit
`Q = 1 or 2` and pixel budget `P = 960 * 540 * Q * Q`, use backing scale
`min(D, sqrt(P / (W * H)), 1920 / max(W, H), Q * Vw / W)`. Floor each backing dimension
at that scale with a minimum of one pixel. Extra-axis views retain the same area budget,
actual physical need, world-scale limit and longest-edge cap. Balanced is the mobile
default and Detailed the desktop default. Resize only when layout or the preset changes;
do not allocate a full device-pixel-ratio surface without a resolution cap.

### Assets, sound and persistence

Bundle a small licensed or original sprite atlas, floor tiles, interface icons, one
music loop and short effects. Track asset provenance with the example. Load and decode
before enabling Start; show bounded progress and a Retry action for required assets.
Read bytes from the Session AssetBundle and use existing Blob/createImageBitmap support.
No remote server is required. A cancelled or superseded load closes any later bitmap
instead of publishing it into an exited scene.

Use the existing trusted audioplayers integration: one music player and a bounded set of
at most eight reusable effect players. Audio asset placement must follow that plugin's
actual source contract; it does not automatically inherit the business bundle or
sandbox. Verify the example's packaged audio paths on every platform. A sound failure
switches to silent play and exposes a nonblocking message. Pause/interruption stops or
pauses playback; exit explicitly disposes players and subscriptions. Session close alone
does not dispose application-owned Dart objects.

Persist one versioned JSON profile in a dedicated localStorage namespace: preferences,
best score, longest survival time and the preserved historical win count. Validate
parsed fields and use defaults for invalid values. Preserve an unknown future schema
without overwriting it. Save at settings confirmation and results; flush accepted writes
at host lifecycle boundaries where execution is available. Synchronous setItem is not a
disk durability receipt. Report storage failure without ending the game. Process death
returns to the menu on the next launch; version one does not restore an in-progress
encounter.

### Runtime validation and reproducibility

Keep a developer-only fixed-seed encounter and a compact input log indexed by simulation
tick. Include game/content version, seed, selected upgrades and viewport changes. Replay
schema v2 starts with a tick-zero viewport and records later changes at their simulation
ticks, coalescing repeated dimensions and replacing repeated paused-tick entries. Reject
v1 instead of silently replaying different spawn geometry. Endless content uses
`lumen-endless-1`; reject finite-content traces. The developer replay has an independent
four-hour work budget that never ends gameplay. Apply each viewport before that tick's
input/step, including final actions. Replay the same trace to compare health, score,
spawn counts and end state; compare floating-point positions with a documented tolerance
rather than claiming cross-device bit identity. Quality changes may affect only
presentation. The replay is a debugging tool, not a user-facing recording feature or a
new public runtime API.

Investigate costs in their owning area: JS simulation and collision queries, Canvas
encoding and image retains, native recording, raster/effect cost, then allocation/GC and
lifecycle. Existing `drawImage` image-retain calls are a measurement candidate, not a
proven bottleneck. Reuse the current Canvas experiment probes where applicable.

Keep verification proportional: a small JS suite for simulation outcomes, upgrades and
replay; integration coverage for one complete UI flow and interruption/input cleanup;
device playthroughs and repeated-resource checks for macOS and Android, with off-device
iOS build checks under the current access scope. Do not mirror every content coefficient
or Canvas primitive in new tests. Changes to shared runtime code require the owning
checks and independent delivery review on the actual version.

## Current endless validation

The scoped TypeScript build and typecheck passed, along with 85 JavaScript cases on the
restored source. The cases cover 600-second pilot traces at 960x540 and 1280x540,
recurring guardians, finite late-game values, replay and bounded peak patterns. An
earlier endless snapshot passed 54 maintained macOS Debug headless cases, including 46
game/UI/audio cases and eight shutdown/error-flow cases. These include fake audio and
synthetic lifecycle fixtures. The later Canvas frame-stamp correction has separate
focused coverage.

The corrected probe linked Canvas submissions to native raster frame IDs across both
complete Release timing windows.

| Reference     | Peak submissions/s | 600-active-second ordinary submissions/s | Timing result |
| ------------- | -----------------: | ---------------------------------------: | ------------- |
| Android 60 Hz |             56.356 |                                   56.782 | FAIL          |
| macOS         |             59.834 |                                   59.789 | PASS          |

Both Android windows fell below the unchanged 57 submissions/s gate. The macOS reference
met the cadence, UI, raster and frame-interval limits. iOS validation covers the signed
generic arm64 Release build only.

The two phase UI candidates were reverted after 90-active-second Android diagnostics.
The mean first-six upgrade-open envelope rose from 166.7 ms to 176.8 ms and 185.6 ms.
The second candidate restored same-frame opens and still regressed on the first two cold
opens.

## Historical finite-content results and validation

The results below predate `lumen-endless-1` and describe the previous encounter and its
starter-only peak. They do not establish current endless gameplay or performance PASS.

The standalone implementation is in `examples/survivors`; the maintained-engine launcher
is `tool/survivors_run.dart`. It includes the complete encounter, bundled directional
actor atlas and industrial floor, Flutter HUD/menus, touch/keyboard input, sound,
haptics, persistence and gated acceptance workloads.

The design uses the current [Canvas contract](../architecture/canvas.md),
[Canvas example](../../packages/flax_canvas/example/README.md),
[application resources](../architecture/applications.md),
[localStorage contract](../architecture/local-storage.md) and
[audioplayers ownership rules](../../packages/flax_audioplayers/README.md). The existing
[Canvas experiments](../../experiments/canvas_native/README.md) distinguish batch
decoder measurements from real-window image and frame-cadence costs.

### Reference results

Release validation used a Mac14,13 with Apple M2 Max, macOS 27.2 (26B123), and a
physical Pixel 4 with Android 13 (TP1A.221005.002.B2). Android reported 90 Hz and macOS
reported 120 Hz; both used Balanced quality with a 60-submission Canvas cap and the
optional FPS overlay enabled in both measured windows. Peak contains 200 enemies, 300
projectiles, 150 pickups and 300 particles after 30 active warmup seconds. Each measured
peak accepted eight ordinary Pulse activations. Normal is a complete winning encounter;
upgrade/pause UI remains inside its timing window.

| Reference/window    | Native-linked Canvas submissions/s | UI p95 ms | Raster p95 ms | rAF interval p99 ms |
| ------------------- | ---------------------------------: | --------: | ------------: | ------------------: |
| Pixel 4 peak        |                             57.719 |     9.522 |         9.529 |              24.775 |
| Pixel 4 full normal |                             58.407 |     8.587 |         4.218 |              26.688 |
| M2 Max peak         |                             59.684 |     2.407 |         1.685 |               8.728 |
| M2 Max full normal  |                             59.777 |     1.840 |         1.124 |               8.893 |

All four windows met the existing cadence/timing thresholds, observed their native
raster drain marker and had no diagnostics overflow. The complete normal windows were
441.419 seconds on Android and 431.019 seconds on macOS. These are reference-device
observations, not guarantees about every phone or display presentation latency.

Android completed 1,800.017 active combat seconds in 1,833.168 combat-loop wall seconds,
with four completed encounters and four victories. macOS completed 1,800.000 active
seconds in 1,808.088 wall seconds, with four encounters and three victories. Each run
passed 20 ordinary View mount/unmount cycles: image handles and independent bitmap IDs
returned to zero, registrations returned to their warmed baseline, and native players
returned to zero. Each full run recorded 110 player creations and 110 completed
disposals, with no source/playback errors, pending preparations/sources/playback or
position polling. RSS is retained as process evidence; no isolated GPU-heap retention
claim is made.

| Check                                                    | Observed result                                                                                                                                                                                                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Game/control/replay/peak/pilot/scene tests and typecheck | 76 JS tests passed; refresh/jitter traces are separate from native FPS                                                                                                                                                                                   |
| Owning Core asset/binary/runtime checks                  | 7 asset, 5 strict binary-value and 59 maintained-engine runtime checks passed on unchanged owning sources                                                                                                                                                |
| Maintained Flutter UI and Canvas checks                  | 54 maintained Flutter cases passed, including bilingual settings, FPS persistence/draw sampling, safe UI/full-window geometry and real Dart audio lifetime/cleanup regressions; deterministic audio fixtures are identified separately from native sound |
| Vendored audio regressions                               | The maintained Flutter suite covers real file publication, terminal disposal, cancellation/completion and owning-View removal. The earlier 16 AVPlayer checks remain component evidence on unchanged native audio sources                                |
| Android/macOS Release smoke                              | Three cases passed per host: native game flow plus explicitly fake error and 12-gate shutdown cases; each real native flow created/disposed 20 players with zero errors                                                                                  |
| Android/macOS Release soak                               | Both complete runs passed the timing, encounter, duration and resource gates above                                                                                                                                                                       |
| iOS Release build only                                   | arm64 Runner.app built, signed and audited; no iPhone queried, installed, launched or debugged                                                                                                                                                           |

The audited normal Android APK passed Chinese/English switching, Chinese plus FPS-on
persistence after Done and force-stop/relaunch, two painted numeric FPS readings, large
touch controls, Home/return retaining PAUSED for at least eight seconds, and explicit
Resume advancing the clock. Native PNG inspection confirmed the Chinese industrial
panels and full-window battlefield. This focused flow did not exercise edge-swiped
system bars or assess tactile strength or subjective movement feel. Android was left at
its Chinese Start menu with FPS enabled and no active combat.

The audited normal macOS product showed Chinese settings and two painted FPS 60
readings. Switching to Finder retained PAUSED across 9.59 seconds and reactivation;
explicit Resume advanced the clock from 4 to 5 seconds (within a 3-second active bound),
then to 7 seconds. This is bounded pre/post elapsed evidence, not a direct paused-clock
measurement. Game content fills the client window; the native macOS title bar remains.
The earlier foreground-ownership refusal remains a historical failure with unknown
cause; the successful replay does not explain it.

### Problems exposed and fixes

The game exposed a production asset transport mismatch hidden by writable test assets.
Core's existing prefixed bundle now snapshots raw byte reads; `loadBuffer` delegation
and the strict writable-sharing guard remain intact. Canvas bitmap recognition avoids
exception-based probing and holds each image once per pending command batch, retaining
correct reset/flush ownership.

HUD changes bind to individual leaves instead of rebuilding the game tree every frame.
The drawing clock tolerates callback-service jitter while preserving accumulated 60 Hz
deadlines, rejecting duplicate/backward timestamps and clearing state on reset. Ordinary
unflipped/unrotated sprites draw directly at their world destinations; transformed
sprites preserve their original path. A production-encoder comparison preserved every
image crop, alpha and destination corner while reducing the static fixture from 648 to
525 commands. Native reference results above establish the actual performance outcome.

Audio prepares a source before explicitly resuming it, uses bounded players without
position polling, and cancels stale preparation/completion work during teardown.
Example-vendored `audioplayers` 6.8.1 and `audioplayers_darwin` 6.5.0 contain the small
lifecycle repairs documented in their `FLAX_PATCH.md` files. Dart workspace resolution
applies these root overrides to all workspace members; staged standalone consumers copy
the relative vendor paths. No shared SDK or pub-cache source was edited. These local
patches need maintenance until corresponding upstream behavior is available.

Dart file preparation can outlive the rejected JavaScript Future when a Session closes.
The vendored player now sets an irreversible disposal latch synchronously, shares its
disposal Future and checks creation, file/asset publication and resume boundaries before
native handoff or playing-state publication. Real IO and owning-View regressions cover
that lifetime fence. A separate test-only cleanup repair preserves a failing gate's
original error/stack, releases a held resume reply and waits for runtime closure before
one storage shutdown. A later successful smoke does not establish the unknown body cause
of the earlier masked failure.

Repeated byte-source writes could truncate a shared temporary file while another
AVPlayer was opening it. The local fallback now writes and closes a UUID sibling and
publishes it through atomic rename, preserving complete files for existing readers. A
controlled real AVPlayer/Dart writer experiment reproduced damaged-media failures with
truncate/write and none with immutable or atomically published input. Native decoder
diagnostics retain NSError causes, and acceptance records native stream errors and
requires an empty application audio-error status as well as healthy native ledgers. The
earlier failed run did not retain its underlying NSError, so it is historical failure
evidence rather than proof of that exact failure's cause. The final reference runs above
use the repaired source and strict gates.

The Android glyph probe still reproduces missing directly drawn small Canvas text on the
selected engine. The game bakes its HIT label at identity transform and reuses the
image; this is a working game path, not a general engine text fix. Flutter HUD text is
separate. The native A/B artifacts retain the unresolved engine finding.

### Evidence and limits

Build and run receipts under `build/survivors-*/` retain packaged code/signature, asset,
selected-engine binary identity and run-source digests. Full results and physical PNGs
are in the ignored `.local/survivors/` directory. Required product bytes and receipts
have separate immutable copies/manifests under the external
`canvas-survivors-ui-20261106/` acceptance archive. Earlier reference evidence remains
in `canvas-survivors-20261105/`.

Normal products and completed soak runs retain their original build/source identity. The
later smoke fixture changes only test cleanup; raw path, kind, mode and byte comparisons
outside that explicit test-file allowance link unchanged production code. Those checks
do not relabel an older execution as a new run. The independent whole-outcome verdict is
retained outside source with its exact package identity. A configured SDK source
revision does not prove which revision compiled an existing engine binary; receipts
preserve this distinction.

Current scope excludes iPhone runtime testing, other hardware/platform certification,
display presentation latency and isolated GPU-heap measurements. Whole-workspace
Prettier has three unchanged baseline documentation failures; supported task formatting
checks exclude those files and preserve their original bytes. Earlier failed cadence
runs and the cold-start/OCR physical-harness failures remain diagnostic failures; they
are not relabeled as passing evidence.

## Handoff

Use the standalone example and its [README](../../examples/survivors/README.md) for
launch/build commands. Products and receipts must identify the exact content revision;
iOS compatibility is build-only under the user's current device-access scope. Keep the
reference receipts with any subsequent changes and repeat affected checks and
independent review before claiming a new version accepted. Keep one example, one
simulation and one renderer.
