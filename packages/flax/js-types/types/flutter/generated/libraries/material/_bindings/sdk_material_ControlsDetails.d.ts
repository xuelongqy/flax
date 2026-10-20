import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ControlsDetails extends Readonly<{
    "__flaxBound:package:flutter/src/material/stepper.dart::ControlsDetails": readonly [];
}> {
    readonly __ControlsDetails: unique symbol;
    readonly [_flaxDartTypeValue]: ControlsDetails;
    readonly currentStep: number;
    readonly stepIndex: number;
    readonly onStepContinue: (() => void) | null;
    readonly onStepCancel: (() => void) | null;
    readonly isActive: boolean;
}
export declare function _ControlsDetailsFactory(options: {
    currentStep: number;
    stepIndex: number;
    onStepCancel?: (() => void) | null | undefined;
    onStepContinue?: (() => void) | null | undefined;
}): ControlsDetails;
export interface _ControlsDetailsNative extends ControlsDetails {
    readonly [_flaxDartTypeValue]: _ControlsDetailsNative;
    get currentStep(): number;
    get stepIndex(): number;
    get onStepContinue(): (() => void) | null;
    get onStepCancel(): (() => void) | null;
    get isActive(): boolean;
}
export declare abstract class _ControlsDetailsNative extends _FlaxProxyBase {
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
export declare namespace _ControlsDetailsFactory {
    function implement(args: [options: {
        currentStep: number;
        stepIndex: number;
        onStepCancel?: (() => void) | null | undefined;
        onStepContinue?: (() => void) | null | undefined;
    }], implementation: {}): ControlsDetails;
}
declare const _ControlsDetailsBinding: typeof _ControlsDetailsFactory & (new (options: {
    currentStep: number;
    stepIndex: number;
    onStepCancel?: (() => void) | null | undefined;
    onStepContinue?: (() => void) | null | undefined;
}) => _ControlsDetailsNative);
export declare const ControlsDetails: typeof _ControlsDetailsBinding & _FlaxInstanceType<ControlsDetails> & _FlaxDartType<ControlsDetails, readonly ["class", "flax.core/sdk_material#type:ControlsDetails", readonly [], false]>;
export {};
