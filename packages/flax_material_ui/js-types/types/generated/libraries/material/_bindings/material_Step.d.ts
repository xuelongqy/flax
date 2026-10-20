import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_StepState';
import '@flax/material-ui/_bindings/material_StepState';
import type * as upstream1 from '@flax/material-ui/_bindings/material_StepStyle';
import '@flax/material-ui/_bindings/material_StepStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Step extends Readonly<{
    "__flaxBound:package:material_ui/src/stepper.dart::Step": readonly [];
}> {
    readonly __Step: unique symbol;
    readonly [_flaxDartTypeValue]: Step;
    readonly title: Widget;
    readonly subtitle: Widget | null;
    readonly content: Widget;
    readonly state: upstream0.StepState;
    readonly isActive: boolean;
    readonly label: Widget | null;
    readonly stepStyle: upstream1.StepStyle | null;
}
export declare function _StepFactory(options: {
    title: Widget;
    subtitle?: Widget | null | undefined;
    content: Widget;
    state?: upstream0.StepState | undefined;
    isActive?: boolean | undefined;
    label?: Widget | null | undefined;
    stepStyle?: (Readonly<{
        "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): Step;
export interface _StepNative extends Step {
    readonly [_flaxDartTypeValue]: _StepNative;
    get title(): Widget;
    get subtitle(): Widget | null;
    get content(): Widget;
    get state(): upstream0.StepState;
    get isActive(): boolean;
    get label(): Widget | null;
    get stepStyle(): upstream1.StepStyle | null;
}
export declare abstract class _StepNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Step>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Step;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:Step", readonly [], false];
    constructor(options: {
        title: Widget;
        subtitle?: Widget | null | undefined;
        content: Widget;
        state?: upstream0.StepState | undefined;
        isActive?: boolean | undefined;
        label?: Widget | null | undefined;
        stepStyle?: (Readonly<{
            "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _StepFactory {
    function implement(args: [options: {
        title: Widget;
        subtitle?: Widget | null | undefined;
        content: Widget;
        state?: upstream0.StepState | undefined;
        isActive?: boolean | undefined;
        label?: Widget | null | undefined;
        stepStyle?: (Readonly<{
            "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): Step;
}
declare const _StepBinding: typeof _StepFactory & (new (options: {
    title: Widget;
    subtitle?: Widget | null | undefined;
    content: Widget;
    state?: upstream0.StepState | undefined;
    isActive?: boolean | undefined;
    label?: Widget | null | undefined;
    stepStyle?: (Readonly<{
        "__flaxBound:package:material_ui/src/stepper.dart::StepStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}) => _StepNative);
export declare const Step: typeof _StepBinding & _FlaxInstanceType<Step> & _FlaxDartType<Step, readonly ["class", "flax.material/material#type:Step", readonly [], false]>;
export {};
