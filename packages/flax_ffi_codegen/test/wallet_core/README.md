# Wallet Core external-consumer acceptance

This runner reads a local `wallet_core_bindings` checkout and matching Wallet Core 4.8.4
binary products. It copies inputs into a disposable consumer without modifying that
checkout. No vendor headers, libraries, private keys from users, or generated Dart
bindings are committed here. The keys and mnemonic in the probe are fixed upstream test
vectors.

The consumer installs packed `@flax/ffi` and `@flax/ffi-codegen` npm artifacts. The
public esbuild adapter generates the entire C API and stages the declared native
libraries automatically. Application calls go directly from JS to C; existing Dart
wallet bindings are used only to compare exported function names. The Flutter host
provides an ordinary Session and observes lifecycle counters.

## Run

Use the matching SDKs and engines described by the
[FFI acceptance setup](../../../flax_ffi/test/runtime/README.md). From the repository
root:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
export PYTHONDONTWRITEBYTECODE=1
export FLAX_CASTXML=/absolute/path/to/castxml
python3 packages/flax_ffi_codegen/test/wallet_core/run.py \
  --target macos \
  --wallet-root /absolute/path/to/wallet_core_bindings \
  --flutter-root /absolute/path/to/matching-macos-sdk \
  --engine-output /absolute/path/to/ffi-dlopen-engine
python3 packages/flax_ffi_codegen/test/wallet_core/run.py \
  --target ios-simulator --simulator SIMULATOR_UUID \
  --wallet-root /absolute/path/to/wallet_core_bindings \
  --ios-artifacts /absolute/path/to/wallet_core_bindings_libs \
  --flutter-root /absolute/path/to/matching-ios-sdk \
  --engine-output /absolute/path/to/ffi-dlopen-engine
```

The macOS default is `example/libTrustWalletCore.dylib`; `--macos-library` overrides it.
The iOS artifacts directory must contain `WalletCore/WalletCore.xcframework` and
`WalletCoreSwiftProtobuf/WalletCoreSwiftProtobuf.xcframework`. The runner copies only
their arm64-capable Simulator slices while preserving XCFramework metadata. The normal
build adapter selects those slices and packages the dependency graph. Do not substitute
the old 4.2.10 CocoaPods cache: it lacks functions declared by the 4.8.4 headers.

Logs and binary/header hashes remain under `.local/ffi-codegen/wallet/<target>/`.
Disposable applications and Simulator installations are removed after each run.
[results.json](results.json) records the acceptance baseline.

## Scope

| Check                  | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full header extraction | 83 headers, 464 function definitions, 435 enum values, 7 integer constants and 3 complete record layouts; all argument/return signatures match Dart ffigen on Apple arm64, and all function names match the selected binary exports.                                                                                                                                                                                                                                                                                                   |
| Apple ABI consistency  | Compiler assertions for macOS arm64, iOS Simulator arm64 and iOS device arm64; strict TypeScript checks; cached generation preserves output timestamps. Device compilation is a header check only.                                                                                                                                                                                                                                                                                                                                     |
| Real JS calls          | UTF-8 and signed char, `size_t`, bool, all eight signed/unsigned integer widths, enums, opaque/nullable pointers, byte input/output, Base58, hashing, deterministic signatures, BIP39/BIP84 derivation and Ethereum ABI encoding.                                                                                                                                                                                                                                                                                                      |
| Resource ownership     | Borrowed zero-copy bytes stay inside the native owner's lifetime; copied bytes survive native deletion. Every consecutive allocation is checked for null before use. Sixteen null/throw cases and seven cleanup-throw cases track each native pointer and confirm exact-once cleanup. Attachment failure, manual close, automatic Session GC and Session close release each observed class allocation once.                                                                                                                            |
| Packaging              | macOS dylib and iOS XCFramework dependency products are embedded through optional native assets. Three extra macOS libraries cover legacy, multiple modern and mixed legacy/modern platform commands; they must package, load in V8 and return 42. Every embedded image declares the expected platform and has the expected arm64 architecture and rewritten imports. Wrong-platform arm64 images, an undeclared vendor dependency and a nonexistent Swift alias are rejected by real builds. The generator is absent from runtime JS. |

Binding all functions does not execute every operation. This is not a full Wallet SDK,
chain transaction/signing protocol test suite, or a certification of every possible C
declaration. Wallet Core primarily exposes opaque pointers and integer arguments. Its
three complete records are one-byte API namespace placeholders; it does not exercise
complex by-value records, callbacks, floating-point arguments or variadic functions.
Those remain covered by the separate [runtime fixture](../runtime/README.md).

Two header-local string variables, `TWStellarPassphrase_Stellar` and
`TWStellarPassphrase_Kin`, are not exported symbols and are not integer constants. The
current constant generator rejects them. A small C accessor can expose them if needed;
silently generating a `dlsym` lookup would be incorrect. The runner verifies that
string-constant generation fails explicitly. Pointer ownership, argument lengths and
returned TWData/TWString ownership still need library-specific rules.

Bitfields, flexible array members and nontrivial C++ objects do not gain support from
this integration. No physical iOS device, Android, Windows, WASM or Node native FFI
execution is covered. No package is published.

## Binding usage

`run.py` writes the complete native manifest with explicit resource rules. The raw C API
stays accessible alongside generated classes:

```js
import { Buffer, DynamicLibrary, toBuffer } from '@flax/ffi';
import { createBindings } from './generated/wallet/bindings.g.js';

const library = DynamicLibrary.codeAsset('wallet-core/core');
const { native: tw, PrivateKey } = createBindings(library);
const bytes = Buffer.alloc(32, 1);
// TWData is an opaque C object, not a pointer to the JS byte storage.
const data = tw.TWDataCreateWithBytes(bytes, BigInt(bytes.length));
try {
  const key = new PrivateKey(data);
  try {
    const result = key.data();
    try {
      const copy = toBuffer(
        tw.TWDataBytes(result),
        Number(tw.TWDataSize(result)),
        true,
      );
      console.log(copy.length); // 32; the copy owns its JS storage.
    } finally {
      tw.TWDataDelete(result);
    }
  } finally {
    key.close(); // Optional deterministic release; GC/Session close also owns cleanup.
  }
} finally {
  tw.TWDataDelete(data);
  library.close();
}
```

The [probe](probe.mjs) includes the full vectors. `lifecycle.c` adds counters around
actual Wallet Core private-key creation/deletion solely for verification; ordinary
wallet calls do not pass through that observer.

The signing/address helpers protect each allocation before making the next native call.
A null result throws before entering that allocation's cleanup scope, so null pointers
are neither passed to dependent C calls nor released. If a later call fails, earlier
TWData or private-key results are still released.

The regression cases fail each allocation in the string, data, signing and address flows
by returning null or throwing before allocation. Successful stages use real Wallet Core
allocation/deletion functions. A per-pointer ledger rejects an incorrect or repeated
deletion before it can reach C, and every case must finish with no live entries.
Separate cases throw immediately after a real deletion and verify that the remaining
outer cleanup still runs without retrying the completed release.
