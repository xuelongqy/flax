import { bind, signal } from '@flax/core';
import * as dartCore from '@flax/dart/core';
import * as foundation from '@flax/flutter/foundation';
import * as services from '@flax/flutter/services';
import * as widgets from '@flax/flutter/widgets';
import * as material from '@flax/flutter/material';

const core = Object.freeze({ ...dartCore, ...foundation, ...services, ...widgets });

const side = widgets.BorderSide({ color: services.Color(0xff1565c0), width: 2 });
const rounded = widgets.RoundedRectangleBorder({
  side,
  borderRadius: widgets.BorderRadius.circular(24),
});
const circle = widgets.CircleBorder({ side, eccentricity: 0.5 });
const border = widgets.Border.all({ color: services.Color(0xff1565c0), width: 2 });
const parent = widgets.AlwaysScrollableScrollPhysics();
const shared = {
  core,
  material,
  side,
  rounded,
  circle,
  border,
  parent,
  shape: signal<widgets.ShapeBorder | null>(rounded),
  outline: signal<widgets.ShapeBorder | null>(rounded),
  cursor: signal<services.MouseCursor | null>(services.SystemMouseCursors.text),
  density: signal(material.VisualDensity.standard),
  showButton: signal(true),
  enabled: signal(true),
  shapeStates: [] as boolean[],
  cursorStates: [] as boolean[],
  taps: 0,
  presses: 0,
  physics: signal<widgets.ScrollPhysics | null>(
    widgets.NeverScrollableScrollPhysics({ parent }),
  ),
  contentHeight: signal(1000),
  controller: null as widgets.ScrollController | null,
  listController: null as widgets.ScrollController | null,
  completed: 0,
  disposed: 0,
};
Object.assign(globalThis, { shared });

const shapeProperty =
  widgets.WidgetStateProperty.resolveWith<widgets.OutlinedBorder | null>((states) => {
    const pressed = states.contains(widgets.WidgetState.pressed);
    shared.shapeStates.push(pressed);
    return pressed ? circle : rounded;
  });
const cursorProperty =
  widgets.WidgetStateProperty.resolveWith<services.MouseCursor | null>((states) => {
    const disabled = states.contains(widgets.WidgetState.disabled);
    shared.cursorStates.push(disabled);
    return disabled
      ? services.SystemMouseCursors.forbidden
      : services.SystemMouseCursors.click;
  });

widgets.registerPage('shared-objects', () =>
  widgets.Column({
    children: [
      material.Material({
        key: foundation.ValueKey('shared-surface'),
        type: material.MaterialType.card,
        color: services.Color(0xffe3f2fd),
        shape: shared.shape.bind,
        clipBehavior: widgets.Clip.antiAlias,
        child: material.InkWell({
          key: foundation.ValueKey('shared-ink'),
          mouseCursor: shared.cursor.bind,
          customBorder: shared.outline.bind,
          onTap: () => shared.taps++,
          child: widgets.SizedBox({ width: 240, height: 80 }),
        }),
      }),
      widgets.SizedBox({
        height: 100,
        child: widgets.Center({
          child: bind(() =>
            shared.showButton.value
              ? material.TextButton({
                  key: foundation.ValueKey('shared-button'),
                  style: bind(() =>
                    material.ButtonStyle({
                      shape: shapeProperty,
                      mouseCursor: cursorProperty,
                      visualDensity: shared.density.value,
                    }),
                  ),
                  onPressed: bind(() =>
                    shared.enabled.value ? () => shared.presses++ : null,
                  ),
                  child: widgets.Text('Shared button'),
                })
              : null,
          ),
        }),
      }),
      widgets.Container({
        key: foundation.ValueKey('shared-decoration'),
        width: 40,
        height: 40,
        decoration: widgets.BoxDecoration({ border }),
      }),
    ],
  }),
);

widgets.registerPage('shared-scroll', (_, lifecycle) => {
  const controller = widgets.ScrollController();
  const listController = widgets.ScrollController();
  shared.controller = controller;
  shared.listController = listController;
  lifecycle.onDispose(() => {
    controller.dispose();
    listController.dispose();
    shared.disposed += 2;
  });
  return widgets.Column({
    children: [
      widgets.SizedBox({
        width: 240,
        height: 180,
        child: widgets.SingleChildScrollView({
          key: foundation.ValueKey('shared-scroll'),
          controller,
          primary: false,
          physics: shared.physics.bind,
          child: widgets.SizedBox({ height: shared.contentHeight.bind }),
        }),
      }),
      widgets.SizedBox({
        width: 240,
        height: 180,
        child: widgets.ListView.builder({
          key: foundation.ValueKey('shared-list'),
          controller: listController,
          primary: false,
          physics: shared.physics.bind,
          itemCount: 30,
          itemExtent: 40,
          itemBuilder: (_, index) => widgets.Text(`Item ${index}`),
        }),
      }),
    ],
  });
});

widgets.registerPage('shared-invalid-material', () =>
  material.Material({ shape: rounded, borderRadius: widgets.BorderRadius.circular(8) }),
);
