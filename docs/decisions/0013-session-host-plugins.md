# Session-scoped host plugins

Status: Accepted.

## Decision

Install basic host APIs, including Fetch, and optional plugins once per FlaxSession.
Isolate defaults are copied when a session is created; an explicit list replaces them.
New public Dart types use the Flax prefix. Bare FlaxJsRuntime behavior remains
unchanged.

Reuse the existing safe UI checkpoint for timer tasks, plugin callbacks and Fetch
completion. Closing cancels operations before the runtime is destroyed. Application
object disposal remains the application's responsibility.

Fetch lazily creates one HttpClient per Session on its first request, with explicit bulk
byte copies and standard Streams. Its JavaScript is embedded in Core, so consumers need
no separate package, plugin registration or installation import. Binary transport
requires native ABI 2. That version is independent of the UI protocol.

## Rationale and limits

Fetch is a default part of the Session host environment alongside its shared data and
stream types. Generated Dart clients remain an application choice. Session ownership
prevents requests and globals leaking between views that belong to different
applications. Standard implementations are pinned and bundled; Flax does not emulate a
DOM or an entire Node environment.

Real BYOB requires engine buffer detachment. Returning copied buffers while pretending
the input detached is invalid. See the [host contract](../architecture/host.md) for the
supported surface and limitations.

## Shared data ownership update

Blob, File, FormData, Web Streams and encoding streams now belong to the default base
environment. This replaces their original Fetch-only installation boundary. Fetch owns
HTTP operations and Body adaptation inside Core and reuses the base constructors. No
additional shared package or plugin dependency resolver is introduced.

## Core Fetch ownership update

Fetch is always installed for Sessions, including `plugins: []`; bare FlaxJsRuntime
instances remain unchanged. The private, unpublished `flax_fetch`, `@flax/fetch` and
`@flax/fetch-runtime` packages are removed. `@flax/core/host` owns the HTTP
declarations. Relative URLs use the owning Session/View `fetchBaseUrl`, validated as
absolute HTTP(S).

The client remains session-local and is not constructed by Headers, Request, Response or
shutdown. Session close cancels requests, closes an existing client and rejects pending
work before releasing JS handles. Network permissions remain a separate, deferred host
policy; default Fetch does not add browser origin, cookies or CORS.
