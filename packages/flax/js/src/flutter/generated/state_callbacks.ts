// GENERATED CODE. Selected host overrides; do not edit.
// Regenerate with dart run melos run bindings:generate.
import type { Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/core/flutter';
export abstract class StateLifecycle<T> {
protected abstract invokeSuper(name: string, args: readonly unknown[]): unknown;
initState(): void { return this.invokeSuper("initState", []) as void; }
didUpdateWidget(oldWidget: T): void { return this.invokeSuper("didUpdateWidget", [oldWidget]) as void; }
reassemble(): void { return this.invokeSuper("reassemble", []) as void; }
deactivate(): void { return this.invokeSuper("deactivate", []) as void; }
activate(): void { return this.invokeSuper("activate", []) as void; }
dispose(): void { return this.invokeSuper("dispose", []) as void; }
abstract build(context: upstream0.BuildContext): Widget;
didChangeDependencies(): void { return this.invokeSuper("didChangeDependencies", []) as void; }
}
