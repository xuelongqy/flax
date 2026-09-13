# Benchmarks

The [engine suite](engines/README.md) compares prepared Hermes and V8 assets through an
independent Dart AOT consumer. It separates source loading, JS execution, Flax bridge
workloads, signals, descriptor construction, process RSS, and library size.

Use `dart run melos run bench:engines:smoke` to verify workloads and reports, or
`dart run melos run bench:engines` for ten independent process samples per engine, case,
and size. Neither command downloads or builds engines. See the suite README for
prerequisites, timing boundaries, and result interpretation.

Flutter layout, painting, and frame timings remain separate end-to-end measurements in
the standalone application verification. They are not pure JS engine results.
