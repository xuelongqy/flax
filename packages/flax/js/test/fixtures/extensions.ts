import * as extensions from '../../../.dart_tool/flax/ui/extensions_bindings.js';
import { Builder, Text, registerPage, type BuildContext } from '@flax/flutter/widgets';
import type { Widget } from '@flax/core/bindings';

const extensionHooks = {
  values: extensions.ExtensionValues(),
  context: null as BuildContext | null,
  result: null as Widget | null,
  route: extensions.ExtensionRoute(),
  page: extensions.ExtensionPage({ name: 'extension-page' }),
};
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

// Compiled only: the views retain their receiver and method generic scopes.
function typeContract(context: BuildContext) {
  const result: string = extensions.ListX([1]).mapFirst((value) => value.toFixed());
  const same: BuildContext = extensions.ContextX(context).same;
  // @ts-expect-error the receiver fixes the setter input type
  extensions.ListX(['a']).setFirstValue(1);
  // @ts-expect-error readonly Dart getters have no assignment surface
  extensions.StringX(' ').isBlank = false;
  // @ts-expect-error views do not construct Dart extension instances
  new extensions.StringX('a');
  return { result, same };
}
void typeContract;
