import { construct, type Widget } from '@flax/core/bindings';

/** The Dart entrance owns a separate game session and its packaged resources. */
export function createSurvivorsExample(): Widget {
  return construct('widget', 'flax.example/survivors#Game', '', [], [], {}) as Widget;
}
