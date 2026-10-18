import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AppLifecycleState extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::AppLifecycleState">, Readonly<{
    "__flaxBound:dart:ui::AppLifecycleState": readonly [];
}> {
    readonly __AppLifecycleState: unique symbol;
    readonly [_flaxDartTypeValue]: AppLifecycleState;
    readonly name: string;
    readonly index: number;
}
export declare const AppLifecycleState: Readonly<{
    detached: AppLifecycleState;
    resumed: AppLifecycleState;
    inactive: AppLifecycleState;
    hidden: AppLifecycleState;
    paused: AppLifecycleState;
    values: readonly AppLifecycleState[];
} & _FlaxInstanceType<AppLifecycleState> & _FlaxDartType<AppLifecycleState, readonly ["class", "flax.core/sdk_dart_ui#type:AppLifecycleState", readonly [], false]>>;
