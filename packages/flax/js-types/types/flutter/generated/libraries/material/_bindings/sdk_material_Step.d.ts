import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_StepState';
import '@flax/flutter/material/_bindings/sdk_material_StepState';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_StepStyle';
import '@flax/flutter/material/_bindings/sdk_material_StepStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Step extends Readonly<{
    "__flaxBound:package:flutter/src/material/stepper.dart::Step": readonly [];
}> {
    readonly __Step: unique symbol;
    readonly [_flaxDartTypeValue]: Step;
}
export interface Step {
    readonly [_flaxDartTypeValue]: Step;
    get title(): Widget;
    get subtitle(): Widget | null;
    get content(): Widget;
    get state(): upstream0.StepState;
    get isActive(): boolean;
    get label(): Widget | null;
    get stepStyle(): upstream1.StepStyle | null;
}
export declare abstract class Step extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Step>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Step;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:Step", readonly [], false];
    constructor(options: {
        title: Widget;
        subtitle?: Widget | null | undefined;
        content: Widget;
        state?: upstream0.StepState | undefined;
        isActive?: boolean | undefined;
        label?: Widget | null | undefined;
        stepStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/material/stepper.dart::StepStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace Step {
    function implement(args: [options: {
        title: Widget;
        subtitle?: Widget | null | undefined;
        content: Widget;
        state?: upstream0.StepState | undefined;
        isActive?: boolean | undefined;
        label?: Widget | null | undefined;
        stepStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/material/stepper.dart::StepStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): Step;
}
