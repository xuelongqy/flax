# Persistent localStorage

The optional `flax_local_storage` plugin installs localStorage, Storage, StorageEvent
and onstorage. The base environment supplies global addEventListener,
removeEventListener and dispatchEvent without window or document. Bare runtimes install
neither environment. See [host plugins](host.md).

## Namespace and initialization

FlaxSession and an owned FlaxView accept a nullable, immutable `namespace`. The plugin
reads FlaxHostContext.namespace. Null selects the default application area; a nonempty
string selects exactly that case-sensitive area. The default area has no string alias.
There is no hierarchy, fallback, route inference or Widget ancestor lookup.

Same-namespace sessions in the isolate share data. An owned View replaces its session
when namespace changes; ordinary rebuilds preserve it. Borrowed session/page Views use
their existing session, with no namespace override. Closing a session deletes no data.
An explicit empty namespace is rejected.

Await FlaxLocalStoragePlugin.initialize before installing any instance. It opens one
Hive CE 2.19.3 ordinary box, loading records for all namespaces so subsequent installs
stay synchronous. The default directory uses path_provider 2.1.6 Application Support
with a `flax/local_storage` subdirectory. An explicit directory is also supported.
Concurrent or repeated initialization with identical configuration reuses the result.
Changing directory/quota requires shutdown; incomplete initialization is not silently
awaited during plugin installation. Failed initialization may be retried explicitly.

Flax opens its box with an explicit path and never calls Hive.init or Hive.close. The
host's initialized directory and other boxes remain intact. The reserved box name
`flax_local_storage_v1` must not already be open, including by application code. A box
opening concurrently at another path is rejected without closing it. The reserved box
belongs exclusively to Flax: application code must not open, close, delete or write it,
including during plugin initialization. Hive's public API cannot distinguish which
caller created a same-name, same-path concurrently opened box, so that misuse is outside
the ownership contract rather than reported as a detected conflict. Hive has no public
"initialized" query; no private implementation state is required. Applications must
close Flax sessions and await plugin shutdown before calling global Hive close or delete
operations.

## Strings, quota and persistence

Storage converts keys and values to strings using Web IDL-style conversion, including
argument-count and Symbol checks. getItem returns null for missing keys; property reads
return undefined. Values are not automatically serialized as JSON.

Integer Hive record IDs address tuples containing namespace, complete key and value.
Strings use explicit UTF-16 bytes, preserving long keys, null characters, emoji and lone
surrogates. Only area/key indexes and quota totals are stored separately in Dart; Hive's
box is the authoritative in-memory value store. There is no per-session JS data mirror.

Quota counts two bytes per key/value UTF-16 code unit, independently for each namespace.
The default is 10 MiB, configurable at initialization. A quota violation throws
QuotaExceededError before mutation. Identical writes, deleting an absent key and
clearing an empty area neither write nor notify. clear affects only the selected area.

A successful synchronous call accepts an in-memory change. Hive persists asynchronously
and may roll back failed writes. Flax handles every write Future, repairs indexes and
quota from actual box contents after failure, and reports the error through the owning
session if it remains alive, otherwise Flutter's error reporter. Pending disk work holds
no JS handles. It cannot throw synchronously from an already returned setItem call.
Pending operations for the same namespace and key reuse one Hive record ID, so a failed
delete followed by another accepted write cannot leave duplicate records. If metadata
cannot be rebuilt after Hive rolls back, ordinary access is disabled and flush or
shutdown remains available to report the persistence failure and close the box.

flush waits accepted writes, flushes Hive and reports persistence failures. shutdown
rejects while sessions are attached, otherwise flushes and closes only this box.
Repeated shutdown is safe. Multi-call transactions and stable enumeration order across
restarts are not promised. Session closing still allows accepted page cleanup to
read/write; final plugin disposal revokes access. Process termination does not guarantee
a flush.

## Properties and events

Storage supports property read/write/delete, `in`, Object.keys and symbol expandos via
Proxy. Prototype members take precedence on reads: a stored `getItem` key remains
accessible through getItem('getItem') without replacing the method. Illegal receivers
and direct Storage construction throw. key converts its index to an unsigned 32-bit
integer. Symbol property keys remain JS properties rather than persistent strings.

Proxy cannot implement every Web IDL exotic-object invariant: accessor definitions,
generic descriptors without `value` or `writable`, explicit non-configurable named
definitions, preventExtensions and replacing the prototype are rejected before storage
mutation. A descriptor with an explicit `value: undefined` stores the string
`"undefined"`. The normal named-property API remains available. Enumeration fetches key
names in one host call; JS property descriptor checks still read their values.

Each effective memory change queues a storage event to other attached sessions in the
same namespace. Source sessions do not receive their own event. Events carry key,
oldValue, newValue, the receiver's localStorage as storageArea, and an empty url because
Flax has no Document URL. clear uses null for the three change fields. These events are
logical notifications, not persistence receipts; Hive rollback reports an error without
inventing an application mutation event.

Delivery uses the recipient's existing safe checkpoint, preserving order and avoiding
synchronous cross-engine reentry. Callback this, target and currentTarget are
globalThis. Function/object listeners, removal, once, capture identity and signal
cleanup reuse base EventTarget. Closing cancels queued notifications and clears
listeners; no polling is used. onstorage shares that same dispatcher.

## Supported scope

Verified targets remain macOS arm64 Hermes and V8, UI protocol 20 and native ABI 2.
There is no encryption, TTL, sessionStorage, automatic JSON or cross-isolate/process
shared notification contract. Separate processes can reopen persisted storage after the
previous owner closes. Applications must coordinate process and isolate ownership of a
storage directory.

Storage JS/types live in `packages/flax_local_storage/js`; embedded source is generated
into the Dart package. It imports no Fetch or WebSocket implementation. Framework tests
use the existing embedded harness; Hive tests also cover real failed I/O and a fresh
process.
