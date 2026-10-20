import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormField';
export type FormFieldBuilder<T extends unknown | null = unknown | null> = ((field: Readonly<{
    "__flaxBound:package:flutter/src/widgets/form.dart::FormFieldState": readonly [T];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.FormField<T>];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream1.FormField<T>];
}>) => Widget);
export type FormFieldBuilderInput<T extends unknown | null = unknown | null> = ((field: upstream0.FormFieldState<T>) => Widget);
