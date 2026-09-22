# Styles and Themes

Protocol 20 uses generated bindings to construct and read real Dart style and theme
objects. Flutter performs color conversion, typography merging, seed-color generation,
dependency tracking and rendering. There is no JS theme store or style mirror.

## Selected APIs

The exact selections are in the [core rules](../../packages/flax/bindings/config.yaml)
and [Material rules](../../packages/flax_material_ui/bindings/config.yaml).

| Module   | Selected surface                                                                                                                                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Core     | Color and FontWeight construction, readonly fields and static weights; TextStyle construction/copyWith; Text.style; FontStyle; WidgetState and WidgetStateProperty; selected ShapeBorder/OutlinedBorder values and mouse cursor constants                                             |
| Material | InputDecoration construction/copyWith; TextField.style/decoration; Theme and Theme.of; ThemeData and TextTheme construction/copyWith; ColorScheme.fromSeed/copyWith; ButtonStyle and TextButton.style; Brightness; VisualDensity; Material.shape and InkWell.customBorder/mouseCursor |

Full component themes, Material input borders, font loading, Cupertino Theme and
AnimatedTheme bindings remain outside this subset. Material uses the standalone
material_ui package. Re-exported core types share their actual declaration identity.

## Values and defaults

Constructors and copyWith calls enter Dart synchronously. Readonly fields call real Dart
getters; they are not snapshots. Keep values locally when reading them repeatedly within
one builder. No global style cache is provided.

FontWeight is a class, not an enum. Its normal/w400 and bold/w700 constants share actual
Dart identity. FontStyle and Brightness use canonical enum wrappers. Equal values are
not interned: ThemeData.copyWith creates a new ColorScheme even when the colorScheme
argument is omitted. A live Dart instance reuses its existing JS wrapper.

Flutter owns copyWith semantics, including unselected fields. Passing null usually keeps
the existing field; it does not mean clear. To remove errorText, construct a new
InputDecoration without that error. TextField decoration has a different constructor
contract: omission uses Dart's default InputDecoration(), while explicit null removes
the decoration. Optional named parameters accept undefined as omission, including with
TS exactOptionalPropertyTypes enabled. Required parameters still reject undefined, and
collection elements do not acquire optional-parameter semantics.

Ordinary constructors and methods do not accept bindings. Bind the whole Widget
property:

```typescript
const error = signal<string | null>(null);
TextField({
  controller,
  decoration: bind(() =>
    InputDecoration({ labelText: 'Name', errorText: error.value }),
  ),
});
```

Updating a style reference does not mutate previously returned immutable Dart values.
These values have no disposal method. Controller and FocusNode disposal stays with the
application; session close only clears bridge resources.

## Widget state properties

WidgetState uses canonical enum wrappers for every Flutter value. A generic
WidgetStateProperty created with `resolveWith` remains deferred until it is supplied to
a concrete Dart position such as ButtonStyle.backgroundColor, elevation, shape or
mouseCursor. That first use constructs the real `WidgetStateProperty<Color?>`,
`WidgetStateProperty<double?>`, `WidgetStateProperty<OutlinedBorder?>` or
`WidgetStateProperty<MouseCursor?>`; subsequent uses of the same concrete type reuse it.
Using one wrapper at two incompatible types fails before the target Widget is built.

The resolver receives a `DartSet<WidgetState>` backed by Flutter's real state set, so
`contains` and iteration retain Dart enum identity and Set behavior. The callback is
invoked only when Flutter resolves the property. Calling `resolve` before the deferred
object has entered a concrete Dart position fails because no runtime type can be
inferred.

ButtonStyle fields and copyWith calls use the real Dart object. TextButton.style can be
bound as a whole property; changing the binding replaces the style through the existing
Widget update path. Flax does not mirror button states or compute Material colors in JS.

The concrete use validates every resolver result. A `Border` cannot satisfy a button's
`OutlinedBorder` result, and a shape cannot satisfy `MouseCursor`. Unmounting releases
mount-owned callbacks; closing the session retires remaining callbacks without disposing
application objects. A retained non-void resolver invoked after retirement throws
`StateError('Retired JS callback')` without entering JavaScript.

## Shapes, cursors and density

Core owns non-constructible `ShapeBorder` and `OutlinedBorder` references; the latter
exposes `side`. `RoundedRectangleBorder` selects side and borderRadius, `CircleBorder`
selects side and eccentricity, and `StadiumBorder` selects side. Their constructors,
getters and `copyWith` calls retain Dart defaults and subtype relationships. Existing
`BoxBorder`, `Border` and `BorderDirectional` keep their identities and also satisfy
`ShapeBorder`; they do not satisfy `OutlinedBorder`.

Material.shape and InkWell.customBorder borrow `ShapeBorder` values. Material retains
its native assertion that shape and borderRadius cannot both be supplied. Painting,
clipping and shape interpolation stay in Dart. ButtonStyle.shape instead requires a
`WidgetStateProperty<OutlinedBorder?>?`.

Core exposes MouseCursor.defer/uncontrolled and
SystemMouseCursors.basic/click/text/forbidden as real cursor references. Neither cursor
type exposes an instance constructor or cursor-session creation. InkWell.mouseCursor
accepts the cursor directly; ButtonStyle.mouseCursor uses
`WidgetStateProperty<MouseCursor?>?` so Flutter can resolve current button states.

Material owns `VisualDensity` from `package:material_ui/material_ui.dart`. Construction,
getters and `copyWith` select horizontal/vertical, alongside
standard/comfortable/compact constants. ButtonStyle construction, getters and `copyWith`
select visualDensity as well as shape and mouseCursor. Replace the bound style to update
these values; native Material layout and density constraints continue to apply.

The
[shared-object UI tests](../../packages/flax_material_ui/test/ui/shared_objects_test.dart)
compare shape clipping and density updates with native Dart controls, exercise actual
mouse cursors and button states, and verify invalid-result and cleanup boundaries. The
[strict TS cases](../../packages/flax_material_ui/js/test/shared_objects.types.ts) cover
the corresponding positive and negative public-type relationships.

## Host and local themes

Theme.of receives the actual Context of a generated Builder. The lookup registers
Flutter inherited dependencies and does not require bind:

```typescript
Builder({
  builder: (context) => {
    const theme = Theme.of(context);
    return Text('Title', { style: theme.textTheme.titleLarge });
  },
});
```

Theme accepts a real ThemeData, and its data and child can be bound. Read a local theme
from a Builder below that Theme; the Context used to construct it still refers to its
ancestors.

```typescript
const local = signal(
  ThemeData({
    colorScheme: ColorScheme.fromSeed({
      seedColor: Color(0xff793ac1),
      brightness: Brightness.dark,
    }),
  }),
);
Theme({
  data: local.bind,
  child: Builder({
    builder: (context) =>
      Text('Local title', { style: Theme.of(context).textTheme.titleLarge }),
  }),
});
```

Recalculate host.copyWith in a host-dependent Builder to follow host updates. An
independently constructed ThemeData keeps its specified values. Neither changes the
surrounding theme. Theme.of also depends on localizations and inherited Cupertino data:
an independent Material theme can receive legitimate Builder callbacks after ancestor
changes. Framework tests compare this with pure Dart rather than suppressing native
notifications.

Create page signals, Controllers and FocusNodes in registerPage's factory, and register
cleanup there. Theme builders can run repeatedly and should only describe UI.
Element/key matching retains editing state; ordinary signal writes update the
corresponding bound Flax hosts. Flutter's own editing and painting rebuilds are distinct
from Flax scheduling.

See the [style owner tests](../../packages/flax_material_ui/test/ui/styles_test.dart).
They exercise derived typography, local Theme, input decoration, focus, formatting, and
updates within the Material UI owner. Routes continue to use their actual Flutter
ancestors; Flax does not copy a source page's local theme into a new Route.
