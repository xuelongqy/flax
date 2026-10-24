# Historical direct JavaScript FFI experiment

The prototype has been promoted to the maintained
[`@flax/ffi` package](../../packages/flax_ffi/README.md). Active fixtures, runners and
commands now live in the package's
[runtime acceptance suite](../../packages/flax_ffi/test/runtime/README.md). Production
native code is owned by the Flutter engine repository under `flax/native/src/ffi/`; the
duplicate experiment source has been removed after a byte-for-byte comparison.

[results.json](results.json) preserves the earlier source hashes, negative controls, GC
measurements and platform receipts. Its recorded `experiments/` paths describe the
historical layout and are not current build inputs. Current package acceptance is
recorded separately; no historical result is being represented as a new test run.
