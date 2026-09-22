import {
  getDefaultTargetPlatform,
  getKIsWeb,
  TargetPlatform,
} from '@flax/flutter/foundation';
import { SizedBox, registerPage, runApp } from '@flax/flutter/widgets';
import { getKTabScrollDuration, kToolbarHeight } from '@flax/flutter/material';
import { FixtureValues } from '../../../.dart_tool/flax/ui/readonly_values_bindings.js';

registerPage('readonly', () => SizedBox({}));
runApp(SizedBox({}));

// Importing and exporting accessor functions must not read dynamic Dart values.
Object.assign(globalThis, {
  readonlyValues: {
    getKIsWeb,
    getDefaultTargetPlatform,
    getKTabScrollDuration,
    kToolbarHeight,
    values: FixtureValues,
    platform: TargetPlatform,
    fulfilled: null as number | null,
    rejected: '',
    pendingDeliveries: 0,
    capture(read: () => unknown): string {
      try {
        read();
        return '';
      } catch (error) {
        return String(error);
      }
    },
  },
});

// These branches are only checked by TypeScript, never executed.
if (false) {
  // @ts-expect-error Returned Duration keeps the Core provider type.
  const number: number = getKTabScrollDuration();
  // @ts-expect-error Generic callback relationships remain visible.
  const wrong: number = FixtureValues.identity('value');
}
