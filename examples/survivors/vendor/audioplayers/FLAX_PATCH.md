# Example-local audio lifetime, preparation and byte publication patches

Upstream: [audioplayers 6.8.1](https://pub.dev/packages/audioplayers/versions/6.8.1).
Published archive SHA256:
`2ba4bb2944baacbdd5372ff8254a8e7feb8c10d7739545e392f5605a8f618745`. Original main
changed source SHA256:
`f11a7ac63231d6f20d2e3422f82eec3b22f37d77bf8c8187f8a04733d8c1fc12`. The published source
was copied from the existing local pub cache. Its MIT LICENSE is retained. Survivors
declares the relative override. Dart shares resolution across this repository's
workspace, so other workspace packages and examples also select this copy. The staged
standalone Survivors consumer keeps its relative override; unrelated outside consumers
use their own dependency resolution. Shared SDK and pub-cache files are not modified.
Public Dart/JS APIs and plugin registration are unchanged. The upstream workspace
resolution marker is removed for standalone use.

`_completePrepared` owns a prepared-event subscription and timeout timer. Both are
canceled in finally, and native setter errors propagate eagerly. Upstream
non-eager Future.wait leaves a canceled request waiting for its replacement's prepared
event or 30-second timeout. The real Dart AudioPlayer regression holds the new source,
rejects only the old native setter, and checks that the old caller and its listener
retire while the new request stays pending. No caller API changes.

`_resume` rechecks the current desired state after the native reply before publishing
playing or starting position updates. A genuine completion or explicit stop received
before that reply must remain effective. This preserves the existing direct
setSource-while-playing behavior; it does not filter completion events globally.

Disposal now sets a private terminal latch synchronously and returns one shared Future.
The latch is independent of mutable playback intent. Source entry, creation completion,
asset-cache completion, byte-cache directory/write/rename completion and playback
handoffs check it before publishing state or entering native code. This matters when a
Flax session closes: rejecting the JavaScript Future does not cancel the underlying
Dart file I/O. A later file result must not prepare a player that has already been
disposed. Ordinary paused and stopped preparation remains supported. Teardown can still
stop and release, and cleanup attempts native disposal once while preserving its first
error. Completion and resume replies cannot restart playback or position updates after
the terminal latch is set.

Deterministic regressions hold real directory, staging-write and rename boundaries,
including data-URI conversion, cold/cached assets and ordinary owning-View removal.
They check no late native source/resume handoff, shared disposal, stream/timer cleanup
and unpublished-file cleanup. Existing replacement, preparation cancellation, completion
and atomic-publication/error regressions remain in force.

The macOS/iOS/Linux byte-source fallback writes a unique sibling file, closes it and
renames it over the existing content-hash path before passing that path to the native
player. Concurrent players and decoders therefore never read an inode being truncated by
another byte-source write. A failed write or rename cleans its unpublished sibling
without masking the original error. The existing hash, filename, same-source behavior
and Android/web direct-byte branches remain unchanged; this does not eliminate hash
collisions. The real Dart AudioPlayer regression holds a truncating open while active
and fresh readers use the published sound, and covers write, rename and cleanup errors.
