# Session-scoped host plugins

Status: Accepted.

## Decision

Install basic host APIs and optional plugins once per FlaxSession. Isolate defaults are
copied when a session is created; an explicit list replaces them. New public Dart types
use the Flax prefix. Bare FlaxJsRuntime behavior remains unchanged.

Reuse the existing safe UI checkpoint for timer tasks, plugin callbacks and Fetch
completion. Closing cancels operations before the runtime is destroyed. Application
object disposal remains the application's responsibility.

Fetch uses one HttpClient per instance, explicit bulk byte copies and standard Streams.
Its JavaScript is embedded in the Dart plugin so consumers need no installation import.
Binary transport raises the native ABI to 2; it does not change UI protocol 12.

## Rationale and limits

Capabilities such as Fetch are optional because applications may use generated Dart
clients instead. Session ownership prevents requests and globals leaking between views
that belong to different applications. Standard implementations are pinned and bundled;
Flax does not emulate a DOM or an entire Node environment.

Real BYOB requires detach, so the pinned Hermes build includes a small recorded standard
transfer patch. Returning copied buffers while pretending the input detached is invalid.
See the [host contract](../architecture/host.md) for the supported surface and
limitations.

## Shared data ownership update

Blob, File, FormData, Web Streams and encoding streams now belong to the default base
environment. This replaces their original Fetch-only installation boundary. Fetch owns
HTTP operations and Body adaptation and reuses the base constructors. No additional
shared package or plugin dependency resolver is introduced.
