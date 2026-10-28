import { construct, type Widget } from '@flax/core/bindings';

/** The trusted Dart host owns configuration and the two restricted JS sessions. */
export function createSandboxExample(): Widget {
  return construct(
    'widget',
    'flax.example/sandbox#Playground',
    '',
    [],
    [],
    {},
  ) as Widget;
}
