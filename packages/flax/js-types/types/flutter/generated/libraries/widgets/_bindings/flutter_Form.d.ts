import { type FlaxInstanceType as _FlaxInstanceType, type NavigationData, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FormState';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Form extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/form.dart::Form": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:Form";
}
export declare function _FormFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    canPop?: Bindable<boolean | null> | undefined;
    onPopInvoked?: Bindable<((didPop: boolean) => void) | null> | undefined;
    onPopInvokedWithResult?: Bindable<((didPop: boolean, result: NavigationData | null) => void) | null> | undefined;
    onWillPop?: Bindable<(() => Promise<boolean>) | null> | undefined;
    onChanged?: Bindable<(() => void) | null> | undefined;
    autovalidateMode?: Bindable<upstream1.AutovalidateMode | null> | undefined;
}): Form;
export declare namespace _FormFactory {
    function maybeOf(context: upstream3.BuildContext): upstream2.FormState | null;
}
export declare namespace _FormFactory {
    function of(context: upstream3.BuildContext): upstream2.FormState;
}
export declare const Form: typeof _FormFactory & _FlaxInstanceType<Form> & _FlaxDartType<Form, readonly ["class", "flax.core/flutter#type:Form", readonly [], false]>;
