import { bind, signal } from '@flax/core';
import {
  Builder,
  Column,
  PreferredSize,
  SizedBox,
  Text,
  TextEditingController,
  FocusNode,
  registerPage,
  StatefulWidget,
  State,
} from '@flax/flutter/widgets';
import { Size } from '@flax/flutter/services';
import { ValueKey } from '@flax/flutter/foundation';
import { AppBar, Scaffold, TextButton, TextField } from '@flax/flutter/material';
import {
  ExtentFrame,
  ExtentTile,
  ExtentProbe,
  MetadataFrame,
} from '../../../.dart_tool/flax/ui/widget_interfaces_bindings.js';
import type { PreferredSizeWidget, Widget } from '@flax/flutter/widgets';

export const height = signal<number | null>(null);
export const bottomHeight = signal<number | null>(null);
export const title = signal('Orders');
export const mode = signal('appbar');
export const key = signal('bar');
export let factories = 0;
export let disposals = 0;
export let controller: ReturnType<typeof TextEditingController>;
export let focus: ReturnType<typeof FocusNode>;

class Toolbar extends StatefulWidget {
  createState() {
    return new ToolbarState();
  }
}
class ToolbarState extends State<Toolbar> {
  count = 0;
  build() {
    return TextButton({
      onPressed: () =>
        this.setState(() => {
          this.count++;
        }),
      child: Text(`Toolbar ${this.count}`),
    });
  }
}

function appBar(): PreferredSizeWidget | null {
  const widgetKey = ValueKey(key.value);
  if (mode.value === 'none') return null;
  if (mode.value === 'native')
    return ExtentProbe.plain as unknown as PreferredSizeWidget;
  if (mode.value === 'native-header') return ExtentProbe.header as PreferredSizeWidget;
  if (mode.value === 'invalid')
    return Text('Invalid') as unknown as PreferredSizeWidget;
  if (mode.value === 'builder')
    return Builder({ builder: () => AppBar() }) as unknown as PreferredSizeWidget;
  if (mode.value === 'fixed-bind') {
    // Bypass only the JS constructor to exercise Dart's acceptance boundary.
    return {
      kind: 'widget',
      type: AppBar().type,
      ctor: '',
      args: { toolbarHeight: height.bind },
    } as unknown as PreferredSizeWidget;
  }
  if (mode.value === 'custom')
    return PreferredSize({
      key: widgetKey,
      preferredSize: Size.fromHeight(height.value ?? 56),
      child: new Toolbar(),
    });
  return AppBar({
    key: widgetKey,
    toolbarHeight: height.value,
    title: Text(title.bind, { key: ValueKey('bar-title') }),
    bottom:
      bottomHeight.value === null
        ? null
        : PreferredSize({
            preferredSize: Size.fromHeight(bottomHeight.value),
            child: Text('Bottom'),
          }),
  });
}

registerPage('scaffold-test', (_, lifecycle) => {
  factories++;
  controller = TextEditingController({ text: 'Retained' });
  focus = FocusNode();
  lifecycle.onDispose(() => {
    focus.dispose();
    controller.dispose();
    disposals++;
  });
  const count = signal(0);
  const body = Column({
    key: ValueKey('body'),
    children: [
      TextField({ controller, focusNode: focus }),
      TextButton({
        onPressed: () => count.value++,
        child: Text(bind(() => `Count ${count.value}`)),
      }),
      Text('Static sibling', { key: ValueKey('static-sibling') }),
    ],
  });
  return Scaffold({ key: ValueKey('scaffold'), appBar: bind(appBar), body });
});

export const extent = signal(24);
export const tileLabel = signal('Tile child');
export const itemMode = signal('generated');
registerPage('metadata-only', () =>
  MetadataFrame({
    item: bind(() =>
      ExtentTile({ extent: extent.value, child: Text('Never mounted') }),
    ),
  }),
);
registerPage('interface-fixture', () => {
  const shared = ExtentTile({ extent: 20, child: Text(tileLabel.bind) });
  return ExtentFrame({
    item: bind(() =>
      itemMode.value === 'native'
        ? ExtentProbe.native
        : itemMode.value === 'opaque'
          ? (ExtentProbe.opaque as typeof ExtentProbe.native)
          : ExtentTile({ extent: extent.value, child: Text('Primary') }),
    ),
    items: [shared, shared],
  });
});

// These constants also exercise Widget compatibility without mounting content.
export const empty: Widget = SizedBox();
export { AppBar, Scaffold, PreferredSize, Size, ExtentProbe };
Object.assign(globalThis, {
  interfaces: {
    height,
    bottomHeight,
    title,
    mode,
    key,
    extent,
    tileLabel,
    itemMode,
    AppBar,
    Scaffold,
    PreferredSize,
    Size,
    ExtentProbe,
    get controller() {
      return controller;
    },
    get focus() {
      return focus;
    },
    get factories() {
      return factories;
    },
    get disposals() {
      return disposals;
    },
  },
});
