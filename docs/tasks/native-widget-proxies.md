# Task: Native Widget proxies

Status: complete

## Goal and scope

Allow selected native Widget bindings to be subclassed from JavaScript while retaining
ordinary descriptor factories and Flutter's own Elements. Reuse the existing object,
callback, weak configuration lease and component State mechanisms. No SDK, ABI or UI
protocol change, publication, commit or CI execution is part of this task.

## Acceptance criteria

- Concrete Widget signatures accept actual compatible Dart configurations and reject
  incompatible values, including nullable, list and Future callback results.
- Selected native subclasses preserve Stateless, Stateful, Inherited and RenderObject
  behavior, native super calls, fresh State per mount and cleanup.
- Generated Dart and strict TypeScript compile, including named constructors and
  concrete generic specialization; provider manifests use format 16.
- Workspace checks, Hermes/V8 UI suites and Hermes release application checks pass.

## Approach

Use `FlaxWidgetProxy` only for weak native subclass type identity. Generate a typed
`FlaxComponentStateBase<NativeWidget>` adapter for JS State factories; an unchanged or
explicitly forwarded native State factory retains the original Flutter State. See
[components](../architecture/components.md) and [bindings](../architecture/bindings.md).

## Results and validation

Generator tests pass (537/537), including native constructor signatures and strict
TypeScript compilation. Hermes and V8 each pass all 421 framework UI tests, package
examples and aggregate application verification. The two native Widget tests cover
concrete conversions, State factories, native render callbacks, replacement, repeated
mounting, State reuse rejection and cleanup after a missing dispose super call.

The standalone Hermes macOS release application passes the actual native Text subclass
scenario after its source packages are removed and the application is relocated.
Production release compilation took 63.45 seconds; external package, debug integration,
release and relocation verification took 241.03 seconds. These are individual runs, not
comparative performance claims. Workspace tests and analysis pass. The root check
stopped at documentation formatting; after correcting Markdown formatting and heading
levels, the remaining official format, TypeScript, documentation, archive/consumer and
native configuration checks all passed. No implementation tests were weakened.
Disposable command logs and the release receipt are in
`.local/native-widget-implementation/`.

## Handoff

Implementation and validation are complete. No commit, push, CI trigger or SDK rebuild
was performed. Generic State variants still require the actual native Widget State type;
unselected virtual methods and constructors remain outside the selected surface.
