import * as dartCore from '@flax/dart/core';
import * as services from '@flax/flutter/services';
import * as widgets from '@flax/flutter/widgets';
import * as material from '@flax/flutter/material';

const curve: widgets.Curve = widgets.Cubic(0.42, 0, 1, 1);
const transformed: number = curve.transform(0.5);
const ease: widgets.Cubic = widgets.Curves.ease;
const coefficient: number = ease.a;
const linear: widgets.Curve = widgets.Curves.linear;
const cursor: services.MouseCursor = services.SystemMouseCursors.click;
const systemCursor: services.SystemMouseCursor = services.SystemMouseCursors.text;
const deferred: services.MouseCursor = services.MouseCursor.defer;
const uncontrolled: services.MouseCursor = services.MouseCursor.uncontrolled;
const side = widgets.BorderSide({ width: 2 });
const rounded = widgets.RoundedRectangleBorder({
  side,
  borderRadius: widgets.BorderRadius.circular(8),
});
const outline: widgets.OutlinedBorder = rounded;
const shape: widgets.ShapeBorder = outline;
const inheritedSide: widgets.BorderSide = outline.side;
const radius: widgets.BorderRadiusGeometry = rounded.borderRadius;
const circle: widgets.CircleBorder = widgets
  .CircleBorder()
  .copyWith({ eccentricity: 0.5 });
const stadium: widgets.StadiumBorder = widgets.StadiumBorder().copyWith({ side: null });
rounded.copyWith({ borderRadius: null, side: undefined });
const border = widgets.Border.all();
const boxBorder: widgets.BoxBorder = border;
const boxShape: widgets.ShapeBorder = boxBorder;
widgets.BoxDecoration({ border });
material.Material({ shape: boxShape });
material.Material({ shape: circle });
material.InkWell({ mouseCursor: cursor, customBorder: stadium });
material.InkWell({ mouseCursor: null, customBorder: null });

const density = material.VisualDensity({ horizontal: -1, vertical: -2 });
const copiedDensity: material.VisualDensity = density.copyWith({ vertical: null });
const horizontal: number = copiedDensity.horizontal;
material.VisualDensity.comfortable.copyWith({ horizontal: undefined });
material.VisualDensity.compact.copyWith();
const shapeProperty =
  widgets.WidgetStateProperty.resolveWith<widgets.OutlinedBorder | null>((states) =>
    states.contains(widgets.WidgetState.pressed) ? circle : rounded,
  );
const cursorProperty =
  widgets.WidgetStateProperty.resolveWith<services.MouseCursor | null>(() => cursor);
const style = material.ButtonStyle({
  shape: shapeProperty,
  mouseCursor: cursorProperty,
  visualDensity: density,
});
const readShape: widgets.WidgetStateProperty<widgets.OutlinedBorder | null> | null =
  style.shape;
const readCursor: widgets.WidgetStateProperty<services.MouseCursor | null> | null =
  style.mouseCursor;
const readDensity: material.VisualDensity | null = style.visualDensity;
style.copyWith({ shape: null, mouseCursor: undefined, visualDensity: null });
material.TextButton({ onPressed: () => {}, child: widgets.Text('Button'), style });

const parent = widgets.AlwaysScrollableScrollPhysics();
const physics: widgets.ScrollPhysics = widgets.NeverScrollableScrollPhysics({ parent });
const inheritedParent: widgets.ScrollPhysics | null = physics.parent;
widgets.ClampingScrollPhysics({ parent: null });
widgets.BouncingScrollPhysics({ parent: undefined });
widgets.ScrollPhysics({ parent });
widgets.SingleChildScrollView({ physics });
widgets.ListView.builder({ physics, itemBuilder: () => widgets.Text('Item') });
const controller = widgets.ScrollController();
const completion: Promise<void> = controller.animateTo(100, {
  duration: dartCore.Duration({ milliseconds: 300 }),
  curve,
});

// @ts-expect-error Abstract Curve has no constructor export.
widgets.Curve();
// @ts-expect-error Abstract ShapeBorder has no constructor export.
widgets.ShapeBorder();
// @ts-expect-error Abstract OutlinedBorder has no constructor export.
widgets.OutlinedBorder();
// @ts-expect-error Static containers are not constructors.
widgets.Curves();
// @ts-expect-error Cursor sessions and constructors are not selected.
services.MouseCursor();
// @ts-expect-error System cursor instances have no public constructor.
services.SystemMouseCursor();
// @ts-expect-error Static cursor constants have no instance constructor.
services.SystemMouseCursors();
// @ts-expect-error Unselected provider members are not consumer extensions.
curve.transformInternal(0.5);
// @ts-expect-error Cursor lifecycle APIs are outside the selected surface.
cursor.createSession(1);
// @ts-expect-error Physics algorithms are outside the selected surface.
physics.applyTo(parent);
// @ts-expect-error Border is a ShapeBorder, but not an OutlinedBorder.
const wrongOutline: widgets.OutlinedBorder = border;
// @ts-expect-error A BoxBorder cannot be the result of an outlined-shape callback.
widgets.WidgetStateProperty.resolveWith<widgets.OutlinedBorder | null>(() => border);
material.ButtonStyle({
  // @ts-expect-error A property specialized for BoxBorder is not a button shape.
  shape: widgets.WidgetStateProperty.resolveWith<widgets.Border>(() => border),
});
// @ts-expect-error Shapes cannot replace cursor callback results.
widgets.WidgetStateProperty.resolveWith<services.MouseCursor | null>(() => circle);
// @ts-expect-error Button shape requires a state property, not a bare border.
material.ButtonStyle({ shape: rounded });
// @ts-expect-error Density is owned by Material and is not a Core value.
widgets.VisualDensity();
// @ts-expect-error Core shapes retain non-null constructor defaults.
widgets.RoundedRectangleBorder({ side: null });
// @ts-expect-error Density constructor values are not nullable.
material.VisualDensity({ horizontal: null });
// @ts-expect-error Unselected Bouncing parameters retain their Dart default.
widgets.BouncingScrollPhysics({ decelerationRate: 1 });
// @ts-expect-error A curve is not a scroll physics object.
widgets.SingleChildScrollView({ physics: curve });
// @ts-expect-error animateTo requires both duration and curve.
controller.animateTo(100, { curve });
// @ts-expect-error Durations remain Dart references, not raw milliseconds.
controller.animateTo(100, { curve, duration: 300 });
// @ts-expect-error Curves remain Dart references, not JavaScript functions.
controller.animateTo(100, { curve: (t: number) => t, duration: dartCore.Duration() });
