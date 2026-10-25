# Flax FFI codegen

`@flax/ffi-codegen` is an optional Node development package. It reuses CastXML to
generate TypeScript definitions and ownership-driven classes for `@flax/ffi`.
Applications execute the existing V8 FFI backend; the frontend and its Node dependencies
are not shipped to a device. No developer-authored Dart FFI facade is required.

See the [package guide](js/README.md), [runnable example](example/README.md) and
[architecture](../../docs/architecture/ffi-codegen.md). The
[Wallet Core acceptance](test/wallet_core/README.md) exercises a real external C API
without depending on its Dart bindings. The package is private and unpublished.
