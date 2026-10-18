import { type Widget } from '@flax/core/bindings';
export type SemanticIndexCallback = ((widget: Widget, localIndex: number) => number | null);
export type SemanticIndexCallbackInput = ((widget: Widget, localIndex: number) => number | null);
