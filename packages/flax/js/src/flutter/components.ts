import {
  componentStateCall,
  componentStateWidget,
  registerComponent,
  registerComponentBase,
  registerComponentState,
  type ComponentWidget,
  type Widget,
} from '@flax/core/bindings';
import type { ValueKey } from './generated/libraries/foundation/_bindings/flutter_ValueKey.js';
import type { BuildContext } from './generated/libraries/widgets/_bindings/flutter_BuildContext.js';

export interface WidgetOptions {
  readonly key?: ValueKey | null | undefined;
}

/** Immutable configuration. Each mount gets its own real Flutter Element. */
export abstract class StatelessWidget implements ComponentWidget {
  readonly kind = 'component' as const;
  readonly key: ValueKey | null;
  constructor(options: WidgetOptions = {}) {
    this.key = options.key ?? null;
    registerComponent(this, new.target, false, options.key);
  }
  abstract build(context: BuildContext): Widget;
}

export abstract class StatefulWidget implements ComponentWidget {
  readonly kind = 'component' as const;
  readonly key: ValueKey | null;
  constructor(options: WidgetOptions = {}) {
    this.key = options.key ?? null;
    registerComponent(this, new.target, true, options.key);
  }
  abstract createState(): State;
}

/** Paired with a Flutter-owned State only when createState returns. */
export abstract class State<T extends StatefulWidget = StatefulWidget> {
  constructor() {
    registerComponentState(this);
  }
  get widget(): T {
    return componentStateWidget(this) as T;
  }
  get context(): BuildContext {
    return componentStateCall(this, 'context', []) as BuildContext;
  }
  get mounted(): boolean {
    return componentStateCall(this, 'mounted', []) as boolean;
  }
  setState(callback: () => void): void {
    if (typeof callback !== 'function')
      throw new TypeError('Expected a setState callback');
    componentStateCall(this, 'setState', [callback]);
  }
  initState(): void {
    this.invokeSuper('initState', []);
  }
  didChangeDependencies(): void {
    this.invokeSuper('didChangeDependencies', []);
  }
  didUpdateWidget(oldWidget: T): void {
    this.invokeSuper('didUpdateWidget', [oldWidget]);
  }
  deactivate(): void {
    this.invokeSuper('deactivate', []);
  }
  activate(): void {
    this.invokeSuper('activate', []);
  }
  dispose(): void {
    this.invokeSuper('dispose', []);
  }
  reassemble(): void {
    this.invokeSuper('reassemble', []);
  }
  abstract build(context: BuildContext): Widget;
  protected invokeSuper(name: string, args: readonly unknown[]): unknown {
    return componentStateCall(this, `super:${name}`, args);
  }
}

registerComponentBase(StatelessWidget, false);
registerComponentBase(StatefulWidget, true);
