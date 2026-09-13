# 0015: Session namespace and persistent localStorage

Status: accepted

## Decision

Use a nullable session namespace as an exact storage area selector. Install optional
localStorage through the existing plugin mechanism. The application explicitly awaits
Hive CE initialization and owns flush/shutdown. Open one dedicated box with an explicit
path, without reconfiguring the host's Hive singleton or closing its other boxes.
Reserve that box name for Flax; application code must not open, close, delete or write
it.

Reuse Hive's ordinary-box memory visibility and asynchronous durability. Report failed
writes, rebuild metadata from Hive after rollback, and distinguish logical storage
notifications from persistence acknowledgements. Base global event methods reuse
EventTarget; storage events use the existing session checkpoint.

## Consequences

New namespace installs remain synchronous and do not load another JS mirror. Sessions
share only when their exact namespace matches; null is a distinct default area. Hive
initialization must precede session installation. Shutdown requires detached sessions.
Applications needing stronger transaction or cross-process coordination guarantees must
provide them separately. See the [storage contract](../architecture/local-storage.md).
Hive's public API detects already-open and different-path ownership conflicts but cannot
identify the creator of a same-name, same-path concurrent open. That application misuse
is outside the supported ownership contract; Flax does not depend on Hive internals to
add another ownership mechanism.
