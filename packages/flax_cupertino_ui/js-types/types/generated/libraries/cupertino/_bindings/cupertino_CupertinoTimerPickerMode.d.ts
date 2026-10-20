import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoTimerPickerMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/date_picker.dart::CupertinoTimerPickerMode">, Readonly<{
    "__flaxBound:package:cupertino_ui/src/date_picker.dart::CupertinoTimerPickerMode": readonly [];
}> {
    readonly __CupertinoTimerPickerMode: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoTimerPickerMode;
    readonly name: string;
    readonly index: number;
}
export declare const CupertinoTimerPickerMode: Readonly<{
    hm: CupertinoTimerPickerMode;
    ms: CupertinoTimerPickerMode;
    hms: CupertinoTimerPickerMode;
    values: readonly CupertinoTimerPickerMode[];
} & _FlaxInstanceType<CupertinoTimerPickerMode> & _FlaxDartType<CupertinoTimerPickerMode, readonly ["class", "flax.cupertino/cupertino#type:CupertinoTimerPickerMode", readonly [], false]>>;
