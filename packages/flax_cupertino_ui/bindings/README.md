# Cupertino UI Binding Rules

`flax_bindings.yaml` discovers the supported public `cupertino_ui` library. Ordinary
constructors and members use the shared automatic selection and Core provider index. The
remaining overrides preserve native Widget interfaces and the existing reactive
rendering adapters for CupertinoApp, CupertinoPageScaffold and CupertinoButton.
`flax_overrides.yaml` excludes `package:cupertino_ui/src/l10n/`, including concrete
language implementations, `getCupertinoTranslation` and `kCupertinoSupportedLanguages`.
Their Dart implementations remain available to `GlobalCupertinoLocalizations.delegate`;
the public localization queries and delegate access stay bound. Unsupported signatures
retain skip reasons.

The shared JS host owns `runApp`, so its native Flutter function is excluded. Use
`runApp` from `@flax/flutter/widgets`. Intl is not opted in, so its formatter types and
the formatter-taking `GlobalCupertinoLocalizations` constructor are not exposed to JS.
The upstream Dart localization implementation keeps its Intl dependency.

See [generation design](../../../docs/architecture/bindings.md) and
[binding guidance](../../flax/bindings/AGENTS.md).
