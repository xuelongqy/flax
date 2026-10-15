import {
  dartType as selectDartType,
  dartTypes as nativeTypes,
} from '@flax/core/bindings';
import { bind, signal } from '@flax/core';
import {
  Builder,
  Navigator,
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
  CallbackTile,
  InterfaceBuilder,
  InterfaceListBuilder,
  InterfaceNestedBuilder,
  InterfaceNullableBuilder,
  InterfaceAsyncBuilder,
  InterfaceFutureOrBuilder,
  InterfaceStreamBuilder,
  WidgetResultBuilder,
  InterfaceRoute,
  InterfacePage,
  openInterfacePanel,
  interfaceStream,
  GenericTile,
  GenericViewCalls,
} from '../../../.dart_tool/flax/ui/widget_interfaces_bindings.js';
import type { ExtentContract } from '../../../.dart_tool/flax/ui/widget_interfaces_bindings.js';
import type { PreferredSizeWidget, Widget, Page } from '@flax/flutter/widgets';

const StringKey = selectDartType(ValueKey, nativeTypes.string);

const genericSuffix = signal('');
const StringTile = GenericTile.$type(nativeTypes.string);
class InterfaceTile extends StringTile {
  #prefix = 'JS';
  override read(value?: number): number {
    return super.read(value) + 1;
  }
  override defaults(
    value?: Parameters<InstanceType<typeof StringTile>['defaults']>[0],
  ) {
    return super.defaults(value);
  }
  override describe(): string {
    return `${this.#prefix}:${super.describe()}${genericSuffix.value}`;
  }
  override build(context: import('@flax/flutter/widgets').BuildContext) {
    return super.build(context);
  }
}
class NestedInterfaceTile extends GenericTile.$type(
  nativeTypes.list(nativeTypes.string),
) {}
let genericCurrent: InterfaceTile | undefined;
let genericWeak: WeakRef<InterfaceTile> | undefined;
let genericTaps = 0;
registerPage('generic-interface', () => {
  const tile = new InterfaceTile('value', {
    child: Text('Generic child'),
    onTap: () => genericTaps++,
  });
  genericCurrent = tile;
  genericWeak = new WeakRef(tile);
  const nested = new NestedInterfaceTile(['nested'], { child: Text('Nested child') });
  if (tile.value !== 'value' || nested.value.get(0) !== 'nested')
    throw new Error('Generic Widget contract members were not bound');
  if (GenericViewCalls.nestedValue(nested).get(0) !== 'nested')
    throw new Error('Nested Widget interface lost its type');
  return Column({
    children: [
      tile,
      nested,
      Text(bind(() => `Observed ${GenericViewCalls.describe(tile)}`)),
    ],
  });
});
Object.assign(globalThis, {
  genericWidgets: {
    suffix: genericSuffix,
    keep: () => GenericViewCalls.keep(genericCurrent!),
    clear: () => GenericViewCalls.clear(),
    drop: () => {
      genericCurrent = undefined;
    },
    value: () => GenericViewCalls.stringValue(genericCurrent!),
    defaultsStable: () => GenericViewCalls.defaultsStable(genericCurrent!),
    taps: () => genericTaps,
    alive: () => genericWeak?.deref() !== undefined,
    rejectWrongType: () => {
      try {
        GenericViewCalls.stringValue(
          new NestedInterfaceTile(['wrong'], {
            child: Text('Wrong'),
          }) as unknown as InterfaceTile,
        );
        return false;
      } catch {
        return true;
      }
    },
  },
});

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
  const widgetKey = StringKey(key.value);
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
      type: 'flax.material/material#type:AppBar',
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
    title: Text(
      bind(() => title.bind.read()),
      { key: StringKey('bar-title') },
    ),
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
    key: StringKey('body'),
    children: [
      TextField({ controller, focusNode: focus }),
      TextButton({
        onPressed: () => count.value++,
        child: Text(bind(() => `Count ${count.value}`)),
      }),
      Text('Static sibling', { key: StringKey('static-sibling') }),
    ],
  });
  return Scaffold({ key: StringKey('scaffold'), appBar: bind(appBar), body });
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

const callbackMode = signal('generated');
const callbackKind = signal('interface');
const callbackRevision = signal(0);
const callbackLabel = signal('Callback child');
const callbackDiscard = signal(false);
const callbackPages = signal<readonly Page[]>([]);
let taps = 0;
let callbackContext: Parameters<typeof Navigator.of>[0];
function interfaceResult(): ExtentContract {
  if (callbackMode.value === 'native') return ExtentProbe.native;
  if (callbackMode.value === 'invalid') return ExtentProbe.plain as ExtentContract;
  if (callbackMode.value === 'throw') throw Error('interface callback failure');
  if (callbackMode.value === 'null') return null as unknown as ExtentContract;
  if (callbackMode.value === 'callback')
    return CallbackTile({ callback: () => taps++, callbacks: [() => taps++] });
  return ExtentTile({ child: Text(callbackLabel.bind) });
}
registerPage('callback-fixture', () =>
  Builder({
    builder: bind(() => {
      callbackRevision.value;
      callbackMode.value;
      const kind = callbackKind.value,
        discard = callbackDiscard.value;
      return (context) => {
        callbackContext = context;
        if (kind === 'base')
          return WidgetResultBuilder({ discard, builder: () => ExtentProbe.plain });
        if (kind === 'list')
          return InterfaceListBuilder({
            builder: () => [interfaceResult(), interfaceResult()],
          });
        if (kind === 'nested')
          return InterfaceNestedBuilder({ builders: [() => interfaceResult()] });
        if (kind === 'nullable')
          return InterfaceNullableBuilder({ builder: () => interfaceResult() });
        if (kind === 'future-or')
          return InterfaceFutureOrBuilder({ builder: () => interfaceResult() });
        if (kind === 'future-or-async')
          return InterfaceFutureOrBuilder({ builder: async () => interfaceResult() });
        if (kind === 'stream')
          return InterfaceStreamBuilder({
            builder: () => interfaceStream(interfaceResult()),
          });
        if (kind === 'async')
          return InterfaceAsyncBuilder({ builder: async () => interfaceResult() });
        return InterfaceBuilder({ discard, builder: () => interfaceResult() });
      };
    }),
  }),
);
registerPage('callback-pages', () =>
  Navigator({
    pages: bind(() => [
      InterfacePage({ key: StringKey('base'), builder: () => ExtentProbe.native }),
      ...callbackPages.value,
    ]),
    onDidRemovePage: (page) => {
      callbackPages.value = callbackPages.value.filter((value) => value !== page);
    },
  }),
);
Object.assign(globalThis, {
  widgetCallbacks: {
    mode: callbackMode,
    kind: callbackKind,
    revision: callbackRevision,
    label: callbackLabel,
    discard: callbackDiscard,
    get taps() {
      return taps;
    },
    open: () =>
      Navigator.of(callbackContext).push(
        InterfaceRoute({ builder: () => interfaceResult() }),
      ),
    openPanel: () =>
      openInterfacePanel({ origin: callbackContext, content: () => interfaceResult() }),
    pop: () => Navigator.of(callbackContext).pop(),
    setPage: (revision: number) => {
      callbackPages.value = [
        InterfacePage({
          key: StringKey('page'),
          builder: () => ExtentTile({ child: Text(`Page ${revision}`) }),
        }),
      ];
    },
    clearPages: () => {
      callbackPages.value = [];
    },
  },
});
