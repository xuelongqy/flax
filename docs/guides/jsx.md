# Optional JSX and TSX

JSX is an experimental, optional authoring syntax. Enable it in the **application JS
project's** `package.json`; existing projects keep JSX disabled:

```json
{ "flax": { "jsx": true } }
```

Use `@flax/build` and the existing Flax esbuild or Vite plugin, or native module
preparation. All three lower JSX before the ordinary semantic compiler. Emitted code
calls the original factory or constructor directly. There is no React runtime,
reconciler, extra Widget boundary, or JSX dispatcher. Restart the development command
after changing the switch.

## Setup and editing

Add these settings to the project's existing `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "allowJs": true,
    "checkJs": true
  },
  "include": ["src/**/*", "flax-jsx.generated.d.ts"]
}
```

Retain the existing compiler options and source include patterns. `allowJs` and
`checkJs` enable checking `.jsx` and JSDoc; TSX-only projects can omit them. Add
`flax-jsx.generated.d.ts` to `.gitignore`. Use an optional include pattern rather than a
required `files` entry, so disabling JSX can remove the declaration safely.

Run `flax-jsx` before the project's normal `tsc --noEmit` command. The build adapters
also generate contracts before compiling. Run `flax-jsx --watch` for editing without
starting the application. The Vite development server updates contracts after saved
source changes. Saved constructor and imported type changes, additions, deletions, and
renames regenerate the owned file atomically; unchanged contents retain their mtime.
Generation failures fail builds and keep the last valid declaration for recovery.

The generated declaration uses standard TypeScript JSX contracts. Attribute completion
was verified in VS Code with TypeScript 6.0.3 and WebStorm 2026.2.3 with its bundled
TypeScript 6.0.3. WebStorm completed both an application constructor's `Counter.label`
and the SDK factory's `Text.data` using the original generated declarations. No Flax IDE
plugin or additional compatibility declaration is required for these verified cases. The
TypeScript language service also exposes constructor attributes before a successful JSX
build. SDK props are available before their first JSX use. Application constructors
remain the only handwritten parameter declaration; JSDoc supplies JS parameter types.

In WebStorm, select the bundled TypeScript under **Settings | Languages & Frameworks |
TypeScript** and enable the language service and service-powered type engine. In the
tested installation, selecting the project's TypeScript 7.0.2 package produced a
`native-preview` directory error in the IDE's type-query channel. Selecting the bundled
6.0.3 service resolved that environment issue; the application's build compiler stayed
on 7.0.2. This is a tested configuration, not a claim that every TypeScript 7 or
JetBrains version has the same limitation.

Unsaved constructor edits need to be saved before generated JSX attributes update.
Hover/navigation can lead to generated declarations; automatic constructor-to-JSX
parameter rename is not promised. Other IDE versions and the full JSX/JSDoc editor
interaction matrix remain unverified. React-specific lint rules, Hooks, and React
component plugins do not define Flax behavior.

## Parameters and children

```tsx
import { Column, Text, StatelessWidget, type Widget } from '@flax/flutter/widgets';

export class Greeting extends StatelessWidget {
  constructor(
    readonly name: string,
    readonly child: Widget,
    readonly count = 0,
  ) {
    super();
  }
  build(): Widget {
    return (
      <Column>
        <Text data={`${this.name}: ${this.count}`} />
        {this.child}
      </Column>
    );
  }
}

const view = (
  <Greeting count={2} name="Flax">
    <Text data="Child" />
  </Greeting>
);
// Direct construction with arguments evaluated in their original source order:
// new Greeting(name, child, count)
```

Attributes map to the original positional parameter names and order. A final object
parameter named `options` exposes its declared fields as attributes. Dictionaries,
callable objects, class instances, and other business objects stay under their parameter
name. Defaults, explicit undefined/null, callback signatures, Bindable values, fixed
properties, and real Keys keep their existing types. Local temporaries preserve
attribute evaluation order and contextual callback types.

A compatible `child` has priority over `children`. An owning binding can select another
primary Widget slot; Material's Scaffold selects `body`. A list slot accepts individual
nested Widgets, one Widget array, or its original collection/binding input. Multiple
children in a single slot require an explicit Column, Row, Stack, or another layout.
Explicit slot attributes and nested content cannot overwrite each other.

An expression must have either a single-Widget type or the slot's collection type.
Normalize a `Widget | Widget[]` value into one array before passing it; the compiler
rejects mixed expressions rather than adding a runtime type check or nested arrays.

Use Text for text content. There is no implicit Text/Column, Fragment, boolean
filtering, or recursive array flattening. Use expressions for conditional Widgets and
return an explicit valid Widget or collection accepted by that slot.

## Supported tags

SDK Widget factories with one non-generic signature carry an erased `__flaxJsx` type
contract generated by their binding owner. Named factories such as `Text.rich` and
`ListView.builder` use the same contract. Named imports, aliases, and re-exports
preserve their declaration identity. `__flaxJsx` and the generated instance `jsxProps`
are reserved, type-only contracts; application code must not read them at runtime.

Application tags support named exported, non-generic classes directly extending Flax's
StatelessWidget or StatefulWidget, with one ordinary constructor. Keep using the
original API for local/default classes, custom inheritance, abstract components,
overloads, destructuring, rest parameters, generic JSX tags, attribute spreads, and
components exposing both a primary `child` and a separate native `children` input. Those
ordinary calls can freely contain supported JSX results or callbacks.

A JSX expression has the shared Widget type. Narrow interfaces such as Scaffold's
`appBar`, or callbacks requiring a concrete Widget subtype, use ordinary factory calls.
No assertions, `any`, or fake ReactElement are added to weaken these checks.

Relative `.jsx`, `.tsx`, and `.ts` module specifiers become `.js` during compilation.
Using emitted `.js` specifiers in source works in all supported adapters, including
imports of `.jsx` sources. Native module staging rejects conflicting output names.

## Binding ownership

The binding generator emits argument contracts from its existing constructor models; SDK
authors do not duplicate props. An owning class selection can add `jsxContent: body`
when its primary Widget parameter has another name. This is generator-only module
metadata and does not change the strict transport Manifest, UI protocol, or native ABI.
Providers ship the generated contracts with their existing declarations. Ordinary SDK
imports never activate a global JSX namespace; only an enabled application's generated
entry does so.

See the [runnable example](../../examples/jsx/README.md) and the
[implementation record](../tasks/optional-jsx-support.md) for validation and limits.
