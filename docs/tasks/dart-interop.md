# Dart Interop, Focus, Formatters and Review Fixes

## Scope

Protocol 8 unifies ordinary Dart objects and values as references, adds typed collection
conversion, escaped callback cleanup, weak identity caches, fixed generic types and
explicit generated proxies. FocusNode and TextInputFormatter use these shared paths.
Application disposal replaces session fallback disposal. Review fixes transfer callback
results before releasing temporaries, expand inherited members, canonicalize enum
returns and separate ordinary Object interop from explicit data selections. Native ABI
and engine remain unchanged. See [the decision](../decisions/0009-dart-interop.md).

## Review validation

The four review reproductions now live in the independent plugin fixture and real Hermes
framework tests. Before the fixes, all four correct assertions failed: inherited members
were missing, enum returns were strings, ordinary Object references were treated as
navigation data, and returned callbacks were retired before Dart could call them. Source
fingerprints and logs for this repair are in ignored `.local/interop-fixes`.

Both `check` and `check:ui` passed with protocol 8. Static validation includes 15
generator tests, 22 JS tests, reproducible generated output, Dart/TS compilation,
formatting and documentation checks. Runtime acceptance includes the native ABI test, 28
Hermes tests, standalone JIT and relocated AOT, 80 framework tests, 2 example tests,
macOS app integration and a 25.0 MB release build.

The new fixture verifies inherited getter/setter and generic methods, overridden
defaults, module order, listener/disposal inheritance and rejection of invalid
selections. Ordinary Object and explicit data methods coexist, including copied
constructor fields, callback values and Future results. Navigation generics keep their
type association while selected data parameters constrain the TS generic bound to
NavigationData.

Returned List/Map callbacks remain callable immediately and after delivery. Failed
conversion preserves previously accepted content. Actual Dart GC releases returned
closures after their owner drops them; session close rejects retained callbacks without
waiting for GC or disposing application objects. Canonical enums cover getters, methods,
static fields, collections/copies, Futures and callback arguments. A warm-cache loop of
100 enum reads makes exactly 100 host calls and retains the same number of handles.

Existing cost assertions remain unchanged: construction retains 31 handles and 6
subscriptions before unmount with one static sibling build; navigation returns to 34
handles and 2 subscriptions after 15 cycles with no pending Futures. Engine disposal
still sees zero live handles. Full UI verification did not change any non-ignored source
file. Native sources and lockfiles are unchanged from the repair baseline; no commit,
push or publication was performed.

The previous milestone below records the preceding protocol's completed validation.

## Previous milestone validation

Before editing, bindings generation and 11 generator tests passed; all 66 existing
framework tests passed against real Hermes. Source fingerprints and command logs are
kept in ignored `.local/interop` for this task.

`check` passed: reproducible generated output, 12 generator tests, 21 JS tests, Dart
analysis, formatting, TypeScript checks/builds, fixture/example bundles, documentation
links and native toolchain configuration.

`check:ui` passed on macOS arm64: native ABI tests, 28 Hermes runtime tests, standalone
JIT and relocated AOT loading, missing/corrupt asset rejection, 72 framework tests, 2
example tests, macOS integration and a release application build.

Focused verification also covers distinct wrappers for Dart objects with equal values,
the original Map's key equality, shared formatter use after one input unmounts, and
callbacks retained by Dart constructors/methods that throw. Integration uses Tab for
traversal and explicit requests for focus buttons: a clicked button can itself become
the current traversal position.

The full SDK parsing test has an explicit three-minute timeout: one loaded-machine run
exceeded the test runner's default 30 seconds. Its assertions are unchanged, and the
isolated rerun passed.

GC tests observed actual Hermes WeakRef collection and Dart Finalizer delivery. They
separately verify deterministic session cleanup and a cross-language cycle that remains
live until explicitly disconnected. No direct cleanup call represents GC evidence.

Measured checks retain one static sibling build and zero handles at runtime disposal.
The construction fixture uses 6 subscriptions and 31 handles before unmount, including
new key references. A text-input sequence uses 1 controller, 5 subscriptions and 2 label
rebuilds; its 20 object calls include controller reads and real value getters. Reading
two nested editing fields costs 4 getter calls. Each collection copy uses one host
invocation. These are fixture-specific counts, not timing guarantees.

Source fingerprints distinguish existing work from this task. Native sources and both
lockfiles are unchanged; generated assets and logs remain ignored. No commit, push or
publication was performed.

## Reproduction

```sh
dart run melos run check
dart run melos run check:ui
```

For prepared native assets, use `dart run melos run ui:test`. It generates plugin
fixtures in ignored output and enables the VM service for GC observation. No direct
cleanup call is used to claim a Finalizer fired.

## Limits and next work

No cross-language cycle collector, automatic application disposal, arbitrary Dart
generic instantiation or Promise-to-Future adapter. Proxy selection rejects required
accessors, optional/named or generic methods and asynchronous returns. Real getters add
expected bridge calls compared with the replaced snapshots. Composition injection does
not certify system IME behavior. Other engines and platforms remain unimplemented.

Continue with broader selected API coverage and measured interop costs. The current
contract is the basis for that work; old snapshots and session-owned application
disposal are not compatibility paths.
