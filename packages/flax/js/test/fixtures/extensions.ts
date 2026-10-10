import * as extensions from '../../../.dart_tool/flax/ui/extensions_bindings.js';
import {
  Builder,
  Navigator,
  State,
  StatefulWidget,
  Text,
  registerPage,
  type BuildContext,
} from '@flax/flutter/widgets';
import type { Widget } from '@flax/core/bindings';
import { Stream } from '@flax/dart/async';

const extensionHooks = {
  values: extensions.ExtensionValues(),
  context: null as BuildContext | null,
  result: null as Widget | null,
  child: Text('JS list child'),
  route: extensions.ExtensionRoute(),
  page: extensions.ExtensionPage({ name: 'extension-page' }),
  componentState: null as State | null,
  componentWidget: null as Widget | null,
  makeComponent: () => new InputComponent(),
  duplicateStateEvents: (values: AsyncIterable<State | null>) =>
    Stream.fromAsyncIterable(
      (async function* () {
        for await (const value of values) {
          yield value;
          yield null;
        }
      })(),
    ),
};

class InputComponent extends StatefulWidget {
  #label = 'State input';
  get label(): string {
    return this.#label;
  }
  createState(): State<InputComponent> {
    return new InputState();
  }
}
class InputState extends State<InputComponent> {
  build(context: BuildContext): Widget {
    extensionHooks.componentState = this;
    extensionHooks.context = context;
    return Text(`${this.widget.label} ${extensions.stateIsMounted(this)}`);
  }
}
extensionHooks.componentWidget = new InputComponent();
Object.assign(globalThis, { extensions, extensionHooks, Stream, Navigator });
registerPage('extensions', () =>
  Builder({
    builder: (context) => {
      extensionHooks.context = context;
      return Text('Extension views');
    },
  }),
);
registerPage('extension-result', () => extensionHooks.result ?? Text('No result'));
registerPage('state-inputs', () => new InputComponent());

// Compiled only: the views retain their receiver and method generic scopes.
function typeContract(context: BuildContext) {
  const result: string = extensions.ListX([1]).mapFirst((value) => value.toFixed());
  const same: BuildContext = extensions.ContextX(context).same;
  extensions.ReferenceValues.setGlobalContext(context);
  const current: BuildContext | null = extensions.ReferenceValues.currentContext;
  extensions.ReferenceValues.setGlobalContext(current);
  extensions.ReferenceValues.setGlobalContext(null);
  // @ts-expect-error undefined is not a Context setter value
  extensions.ReferenceValues.setGlobalContext(undefined);
  const state = extensionHooks.values.state();
  extensionHooks.values.nativeState = state;
  const savedState: State | null = extensionHooks.values.nativeState;
  extensions.ExtensionValues.setSharedState(savedState);
  extensions.ReferenceValues.setGlobalState(extensions.ExtensionValues.sharedState);
  extensions.ReferenceValues.setGlobalState(null);
  const mounted: boolean = extensions.stateIsMounted(state);
  const stateView = extensions.StateX(state);
  stateView.through((value) => value);
  stateView.throughMaybe((value) => value);
  stateView.throughLater((value) => value);
  stateView.throughStream((value) => value);
  stateView.throughStream(extensionHooks.duplicateStateEvents);
  stateView.throughRecord((value) => value);
  stateView.reader()(state);
  stateView.visitor()((value) => {
    extensions.stateIsMounted(value);
  });
  // @ts-expect-error State callback results require compatible State references
  stateView.through(() => Text('Wrong type'));
  extensions.optionalStateIsMounted({ value: null });
  extensions.optionalStateIsMounted({ value: undefined });
  extensions.countMountedStates([state]);
  extensions.ExtensionValues.stateMounted(state);
  extensionHooks.values.matchesState(state);
  const column: Widget = extensions.columnWidgets([Text('JS child')]);
  extensionHooks.values.selectedWidget = column;
  extensions.ExtensionValues.setSharedWidget(extensionHooks.values.selectedWidget);
  extensions.ReferenceValues.setGlobalWidget(extensions.ExtensionValues.sharedWidget);
  extensionHooks.values.selectedWidget = extensions.ReferenceValues.globalWidget;
  extensionHooks.values.selectedWidget = null;
  // @ts-expect-error State attributes require genuine State references
  extensionHooks.values.nativeState = { mounted: true };
  // @ts-expect-error Widget writes require compatible Widgets
  extensionHooks.values.selectedWidget = 1;
  // @ts-expect-error undefined is not a setter value
  extensions.ReferenceValues.setGlobalState(undefined);
  extensions.columnWidgets(extensionHooks.values.widgets);
  extensionHooks.values.column([column]);
  extensions.columnWidgetGroups([[column, null], null]);
  extensions.futureColumnWidgets(Promise.resolve([column]));
  // @ts-expect-error State inputs require genuine State references
  extensions.stateIsMounted({ mounted: true });
  // @ts-expect-error only nullable Widget elements can be null
  extensions.columnWidgets([null]);
  // @ts-expect-error the receiver fixes the setter input type
  extensions.ListX(['a']).setFirstValue(1);
  // @ts-expect-error readonly Dart getters have no assignment surface
  extensions.StringX(' ').isBlank = false;
  // @ts-expect-error views do not construct Dart extension instances
  new extensions.StringX('a');
  return { result, same, current, mounted };
}
void typeContract;
