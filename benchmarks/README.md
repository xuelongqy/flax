# Benchmarks

The [engine suite](engines/README.md) preserves historical Hermes/V8 comparisons from
the retired independent Dart AOT deployment. The reports and engine-free statistical
tests remain available; `bench:engines` and `bench:engines:smoke` reject execution.

Use `dart run tool/check_engine_application.dart profile` for current V8 startup, GC,
frame and memory measurements. Flutter layout and painting remain end-to-end
measurements rather than pure JS engine results.
