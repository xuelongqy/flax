# @flax/fetch-runtime

Runtime source for the optional Dart `flax_fetch` plugin. Public declarations live in
the declaration-only `@flax/fetch` package. Import `@flax/fetch/globals` as a type-only
import to declare installed globals. The package root exports types only; it does not
create a second set of constructors.

Install both npm packages at the same version as Dart `flax_fetch`. This source package
delivers prepared modules and the generated host bootstrap. Public imports resolve
through the plugin inventory; private implementation imports are rejected.

Dart plugin registration installs the prebuilt script once per session. Application code
uses the standard global names. See the
[host contract](../../../docs/architecture/host.md).

The original Axios Fetch adapter is a test dependency, never part of the installed host
bundle. Tests bundle its async generators using esbuild's standard lowering because the
pinned Hermes parser does not accept that syntax.

This package owns only the HTTP API and Body adaptation. Import Blob, File, FormData and
Streams types from `@flax/core/host`; the session base environment owns their
constructors. Fetch uses those existing constructors without installing another copy.
