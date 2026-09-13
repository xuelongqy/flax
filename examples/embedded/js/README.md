# Embedded JS App

`src/main.ts` uses the actual runtime and generated Flutter/Material packages. Signals
hold local state; `.bind` and `bind(fn)` connect properties and dynamic subtrees.

Builder reads Directionality.of(context) directly. LayoutBuilder chooses a label from
constraints.maxWidth; both return descriptions at Flutter's actual callback time.
Neither callback implicitly subscribes to signals.

The root `example:bundle` command uses esbuild 0.28.2 to emit an ES2019 IIFE into the
Flutter asset directory. No modules are loaded at runtime. See the
[embedded example](../README.md) for run and check commands.

[Navigation](src/navigation.ts) is shared by the separate shared_navigation.ts and
nested_navigation.ts bundle entries. They differ only in the explicitly constructed
Navigator. Node participates in bundling only.

[Pages](src/pages.ts) registers orderDetails and pageStack without runApp. The host can
enter either directly. The first factory keeps local state while readonly parameters
change; the second maintains application-owned Page data and applies onDidRemovePage by
ValueKey. Node remains a build-time tool.

`src/scroll.ts`, imported by the Pages bundle, registers the scroll demonstration. It
owns its ScrollController and listener and registers synchronous page cleanup.

The Text input entry opens the named [textEditing page](src/text_editing.ts). It shows
single and multiline Material fields, editing snapshots, complete value replacement,
clear, controller replacement and reentry. The macOS test injects composition through
Flutter's input channel; system IME behavior is not certified by that test.

The components page demonstrates class-based State, property signals, State-owned input
resources, configuration/key updates, lazy rows and navigation.
