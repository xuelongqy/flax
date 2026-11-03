import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AndroidContentType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidContentType": readonly [];
}> {
    readonly __AndroidContentType: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidContentType;
    readonly name: string;
    readonly index: number;
    readonly value: number;
}
export declare const AndroidContentType: Readonly<{
    unknown: AndroidContentType;
    speech: AndroidContentType;
    music: AndroidContentType;
    movie: AndroidContentType;
    sonification: AndroidContentType;
    values: readonly AndroidContentType[];
    fromInt(value: number): AndroidContentType;
} & _FlaxInstanceType<AndroidContentType> & _FlaxDartType<AndroidContentType, readonly ["class", "flax.audio/audio#type:AndroidContentType", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidContentType";
export {};
