import * as extensions from '../../../.dart_tool/flax/ui/extensions_bindings.js';
import {
  Builder,
  State,
  StatefulWidget,
  Text,
  registerPage,
  type BuildContext,
} from '@flax/flutter/widgets';
import type { Widget } from '@flax/core/bindings';

const extensionHooks = {
  values: extensions.ExtensionValues(),
  context: null as BuildContext | null,
  result: null as Widget | null,
  child: Text('JS list child'),
  route: extensions.ExtensionRoute(),
  page: extensions.ExtensionPage({ name: 'extension-page' }),
  componentState: null as State | null,
  componentWidget: null as Widget | null,
};

class InputComponent extends StatefulWidget {
  createState(): State<InputComponent> {
    return new InputState();
  }
}
class InputState extends State<InputComponent> {
  build(context: BuildContext): Widget {
    extensionHooks.componentState = this;
    extensionHooks.context = context;
    return Text(`State input ${extensions.stateIsMounted(this)}`);
  }
}
extensionHooks.componentWidget = new InputComponent();
Object.assign(globalThis, { extensions, extensionHooks });
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
  const state = extensionHooks.values.state();
  const mounted: boolean = extensions.stateIsMounted(state);
  extensions.optionalStateIsMounted({ value: null });
  extensions.optionalStateIsMounted({ value: undefined });
  extensions.countMountedStates([state]);
  extensions.ExtensionValues.stateMounted(state);
  extensionHooks.values.matchesState(state);
  const column: Widget = extensions.columnWidgets([Text('JS child')]);
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
  return { result, same, mounted };
}
void typeContract;
