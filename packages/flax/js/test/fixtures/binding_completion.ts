import { registerPage, Text } from '@flax/flutter/widgets';
import * as core from '@flax/dart/core';
import { Stream } from '@flax/dart/async';
import * as api from '../../../.dart_tool/flax/ui/binding_completion_bindings.js';
import {
  dartSuper,
  dartTypes,
  dartType,
  asDart,
  getDartType,
} from '@flax/core/bindings';

const Selected = api.MultiProxy.$type(dartTypes.string);
class CompletionChild extends Selected {
  #suffix = '!';
  constructor() {
    super(dartSuper(Selected, 'right', { value: 'seed' }));
  }
  override transform(value: string): string {
    return super.transform(value) + this.#suffix;
  }
}
class CompletionLeftChild extends Selected {
  constructor() {
    super('left');
  }
}
class CompletionHiddenChild extends Selected {
  constructor() {
    super(dartSuper(Selected, 'hidden', 'hidden'));
  }
}
class CompletionGetter extends api.GetterProxy {
  override get value(): number {
    return 9;
  }
}
class CompletionSetter extends api.SetterProxy {
  #written = 0;
  override set value(value: number) {
    this.#written = value;
  }
  get written(): number {
    return this.#written;
  }
}
class CompletionDecorated extends api.CompletionDecorated {
  #suffix = '!';
  override decorate(value: string) {
    return super.decorate(value) + this.#suffix;
  }
}
class CompletionFuture extends api.CompletionFuture<number> {
  #calls = 0;
  override then(...args: any[]): any {
    this.#calls++;
    return Reflect.apply(super.then, this, args);
  }
  get calls(): number {
    return this.#calls;
  }
  override echo(result: number): number {
    return super.echo(result) + 1;
  }
}
class CompletionStream extends api.CompletionStream<number> {}
class CompletionWidget extends api.CompletionWidget {
  #suffix = '!';
  override label(value: string): string {
    return super.label(value) + this.#suffix;
  }
}
Object.assign(globalThis, {
  completion: {
    ...api,
    core,
    Stream,
    dartTypes,
    dartType,
    dartSuper,
    asDart,
    getDartType,
    CompletionChild,
    CompletionLeftChild,
    CompletionHiddenChild,
    CompletionGetter,
    CompletionSetter,
    CompletionDecorated,
    CompletionFuture,
    CompletionStream,
    CompletionWidget,
  },
});
registerPage('binding-completion', () => Text('binding completion'));
registerPage('completion-held', () => api.readCompletionWidget());
registerPage('completion-default', () => api.defaultWidget());
registerPage('completion-cell', () => api.completionCell());
