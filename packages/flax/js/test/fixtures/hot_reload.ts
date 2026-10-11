import {
  registerPage,
  runApp,
  ScrollController,
  StatefulWidget,
  State,
  Text,
  TextEditingController,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';
import { registerComponentStateVariant } from '@flax/core/bindings';
import { AsyncCallbacks } from '../../../.dart_tool/flax/ui/interop_bindings.js';

type Module = { exports: Record<string, unknown> };
type DevModule = {
  id: string;
  dependencies: Record<string, string>;
  factory: (module: Module) => void;
};
type DevRegistry = {
  class<T extends Function>(
    name: string,
    candidate: T,
    signature: { fields: string[]; private: string[]; init: string },
  ): T;
  load(value: { entry: string; modules: DevModule[] }): unknown;
  apply(value: { inventory: string[]; modules: DevModule[] }): unknown;
  require(id: string): Record<string, unknown>;
};

const dev = (globalThis as typeof globalThis & { __flaxModules: { dev: DevRegistry } })
  .__flaxModules.dev;
const moduleId = '/test/hot_reload.ts';

let activeState: object | null = null;
let initCount = 0;
let disposeCount = 0;
let buildCount = 0;
let reassembleCount = 0;
const callbackEvents: string[] = [];
const futureEvents: string[] = [];
let finishPendingFuture: (() => void) | undefined;
let futureImplementation = async (value: number): Promise<number> => {
  futureEvents.push(`future:v1:start:${value}`);
  // Hold the callback across reload on both fake and real device clocks.
  await new Promise<void>((resolve) => {
    finishPendingFuture = resolve;
  });
  futureEvents.push(`future:v1:end:${value}`);
  return value + 1;
};
const futureCallbacks = AsyncCallbacks((value) => futureImplementation(value));

type FactoryOptions = {
  label?: string;
  extraField?: boolean;
  extraPage?: boolean;
  omitPage?: boolean;
  fail?: boolean;
};

function moduleFor(version: number, options: FactoryOptions = {}): DevModule {
  return {
    id: moduleId,
    dependencies: {},
    factory(module) {
      let HotReloadWidget = class HotReloadWidget extends StatefulWidget {
        createState(): State<HotReloadWidget> {
          return new HotReloadState();
        }
      };

      let HotReloadState = class HotReloadState extends State<HotReloadWidget> {
        count = 0;
        textController = TextEditingController({ text: 'seed' });
        scrollController = ScrollController({ initialScrollOffset: 12 });
        dynamicListener = () => this.handleListener();
        boundListener = this.handleListener.bind(this);

        initState(): void {
          super.initState();
          activeState = this;
          initCount++;
        }

        setCount(value: number): void {
          this.setState(() => {
            this.count = value;
          });
        }

        bump(): void {
          this.setState(() => {
            this.count += version === 1 ? 1 : 2;
          });
        }

        handleListener(): void {
          callbackEvents.push(`listener:v${version}`);
        }

        handleTimer(): void {
          callbackEvents.push(`timer:v${version}`);
        }

        armCallbacks(): void {
          this.textController.addListener(this.dynamicListener);
          this.textController.addListener(this.boundListener);
          setTimeout(() => this.handleTimer(), 20);
          setTimeout(this.handleTimer.bind(this), 20);
        }

        build(_context: BuildContext): Widget {
          buildCount++;
          return Text(`${options.label ?? `V${version}`} ${this.count}`);
        }

        reassemble(): void {
          reassembleCount++;
          super.reassemble();
        }

        dispose(): void {
          disposeCount++;
          this.textController.removeListener(this.dynamicListener);
          this.textController.removeListener(this.boundListener);
          this.textController.dispose();
          this.scrollController.dispose();
          super.dispose();
        }
      };

      if (options.extraField) {
        Object.defineProperty(HotReloadState.prototype, 'addedFieldMarker', {
          configurable: true,
          value: true,
        });
      }
      HotReloadWidget = dev.class('HotReloadWidget', HotReloadWidget, {
        fields: [],
        private: [],
        init: '',
      });
      HotReloadState = dev.class('HotReloadState', HotReloadState, {
        fields: [
          'count',
          'textController',
          'scrollController',
          'dynamicListener',
          'boundListener',
          ...(options.extraField ? ['addedField'] : []),
        ],
        private: [],
        init: [
          'count = 0',
          "textController = TextEditingController({ text: 'seed' })",
          'scrollController = ScrollController({ initialScrollOffset: 12 })',
          'dynamicListener = () => this.handleListener()',
          'boundListener = this.handleListener.bind(this)',
        ].join('\n'),
      });
      module.exports.HotReloadState = HotReloadState;
      module.exports.Text = Text;

      runApp(new HotReloadWidget());
      if (!options.omitPage) registerPage('hot-reload', () => new HotReloadWidget());
      if (options.extraPage) registerPage('hot-reload-extra', () => Text('extra'));
      if (options.fail) throw new Error('staged failure');
    },
  };
}

dev.load({ entry: moduleId, modules: [moduleFor(1)] });

Object.assign(globalThis, {
  hotReload: {
    get StateClass() {
      return dev.require(moduleId).HotReloadState;
    },
    get Text() {
      return dev.require(moduleId).Text;
    },
    get state() {
      return activeState;
    },
    get initCount() {
      return initCount;
    },
    get disposeCount() {
      return disposeCount;
    },
    get buildCount() {
      return buildCount;
    },
    get reassembleCount() {
      return reassembleCount;
    },
    reload(version: number, label?: string) {
      return dev.apply({
        inventory: [moduleId],
        modules: [moduleFor(version, { label })],
      });
    },
    reloadWithField() {
      return dev.apply({
        inventory: [moduleId],
        modules: [moduleFor(2, { extraField: true })],
      });
    },
    reloadWithExtraPage() {
      return dev.apply({
        inventory: [moduleId],
        modules: [moduleFor(2, { extraPage: true })],
      });
    },
    reloadWithoutPage() {
      return dev.apply({
        inventory: [moduleId],
        modules: [moduleFor(2, { omitPage: true })],
      });
    },
    failReload() {
      return dev.apply({
        inventory: [moduleId],
        modules: [moduleFor(2, { fail: true })],
      });
    },
    selectTickerVariantOnMountedState() {
      registerComponentStateVariant(
        activeState!,
        'flax.core/components#stateVariant:TickerProviderState',
      );
    },
    get callbackEvents() {
      return callbackEvents;
    },
    clearCallbackEvents() {
      callbackEvents.length = 0;
    },
    registerLatePage() {
      registerPage('hot-reload-late', () => Text('late'));
    },
    get futureEvents() {
      return futureEvents;
    },
    startFuture(value: number) {
      void futureCallbacks.apply(value).then((result) => {
        futureEvents.push(`future:result:${result}`);
      });
    },
    replaceFutureImplementation() {
      futureImplementation = async (value: number) => {
        futureEvents.push(`future:v2:${value}`);
        return value + 2;
      };
    },
    completeFuture() {
      if (!finishPendingFuture) throw new Error('No pending test Future');
      const complete = finishPendingFuture;
      finishPendingFuture = undefined;
      complete();
    },
  },
});
