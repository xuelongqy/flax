import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ControlsDetails extends Readonly<{
    "__flaxBound:package:flutter/src/material/stepper.dart::ControlsDetails": readonly [];
}> {
    readonly __ControlsDetails: unique symbol;
    readonly [_flaxDartTypeValue]: ControlsDetails;
}
export interface ControlsDetails {
    readonly [_flaxDartTypeValue]: ControlsDetails;
    get currentStep(): number;
    get stepIndex(): number;
    get onStepContinue(): (() => void) | null;
    get onStepCancel(): (() => void) | null;
    get isActive(): boolean;
}
export declare abstract class ControlsDetails extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ControlsDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ControlsDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:ControlsDetails", readonly [], false];
    constructor(options: {
        currentStep: number;
        stepIndex: number;
        onStepCancel?: (() => void) | null | undefined;
        onStepContinue?: (() => void) | null | undefined;
    });
}
export declare namespace ControlsDetails {
    function implement(args: [options: {
        currentStep: number;
        stepIndex: number;
        onStepCancel?: (() => void) | null | undefined;
        onStepContinue?: (() => void) | null | undefined;
    }], implementation: {}): ControlsDetails;
}
