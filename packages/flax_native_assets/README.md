# Shared native assets

Build-time owner of Android `libc++_shared.so` and Windows CRT DLLs. Both engine
packages depend on this hook, so each shared library is registered once even in Flutter
debug builds. The hook reuses an installed engine package's locked SDK and verifies its
complete manifest; it does not compile an engine or bridge. Engine hooks compare their
SDK copies with the owner's hashes before omitting these assets. A mismatch fails the
build.

For local candidate input, set `sdkArchive` and `sdkSha256` user-defines for this
package as well as the engine package. Other platforms produce no shared assets.
