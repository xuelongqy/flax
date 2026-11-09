# Example-local preparation cancellation patch

Upstream:
[audioplayers_darwin 6.5.0](https://pub.dev/packages/audioplayers_darwin/versions/6.5.0).
Published archive SHA256:
`1ca553add991384ecf421b9569da850f3ab2472ffb83f6970b0416365abc51be`. Original main
changed source SHA256:
`86ad7189269a8cc08012407228988e73d9d10f7df2c7685ce01b1182cad7d13d`. The published source
was copied from the existing local pub cache. Its MIT LICENSE is retained. Survivors
declares the relative override. Dart shares resolution across this repository's
workspace, so other workspace packages and examples also select this copy. The staged
standalone Survivors consumer keeps its relative override; unrelated outside consumers
use their own dependency resolution. Shared SDK and pub-cache files are not modified.
Public Dart/JS APIs and plugin registration are unchanged. The upstream workspace
resolution marker is removed for standalone use.

Each native source preparation owns its item/generation, checked continuation and KVO
observation. Reset, replacement and disposal retire/invalidate/resume only that matching
record exactly once. KVO snapshots enter MainActor; stale or duplicate callbacks are
ignored. A post-await generation/item guard prevents ready-then-reset from publishing
stale prepared events. Disposed players cannot prepare or resume. Cancellation returns
`DarwinAudioPreparationCancelled` to the original method caller and is never broadcast
into a replacement event stream. Genuine failures and STOP/LOOP semantics remain.

Failed items retain AVPlayerItem.error's domain, code and localized description, plus
the immediate underlying NSError's corresponding fields when available. The existing
Darwin error details carry this diagnostic without dumping source URLs or NSError
userInfo. A real corrupt-media AVPlayer regression verifies that its failure cause
survives preparation settlement. No failure is retried or reclassified as cancellation.

Playback completion also owns its captured item and playback epoch. Pause, stop and
reset invalidate that epoch; resume and a new item's publication arm the current
observer. Acknowledging the same already-ready item preserves its observer and epoch so
its genuine in-flight completion remains valid. Completion validates ownership before
and after seeking its captured item, completes mode cleanup, then publishes the event.
An old queued notification or seek continuation cannot stop, release or complete fresh
playback. Direct source replacement while playing keeps its existing playing intent.

The macOS AVPlayer/KVO test reproduces upstream release's leaked continuation, then
verifies bounded preparation and playback scenarios, including an old seek held across
replacement, queued completion across pause/resume, duplicate completion and direct
source replacement while playing. Test-only private accessors are appended only to a
scratch source copy, never shipped in the Flutter plugin. Complete native Flutter
lifecycle proof is recorded separately after integration.

Survivors reserves unique player IDs prefixed with `lumen-outpost-bgm-` for its bundled
background music. A local WAV prepared in loop mode under one of those IDs uses
`AVAudioPlayer` to loop without an end-seek or per-wrap completion event. The native
player prepares off the main actor, reuses the source on resume and retains its paused
position. Source replacement and disposal discard stale preparation results. All other
players use the existing `AVPlayer` path and completion events. The native proof uses an
extensionless copy of the bundled WAV to match the actual Dart audio cache.
