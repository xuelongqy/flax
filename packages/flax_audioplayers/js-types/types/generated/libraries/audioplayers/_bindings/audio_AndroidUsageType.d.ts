import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AndroidUsageType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidUsageType": readonly [];
}> {
    readonly __AndroidUsageType: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidUsageType;
    readonly name: string;
    readonly index: number;
    readonly value: number;
}
export declare const AndroidUsageType: Readonly<{
    unknown: AndroidUsageType;
    media: AndroidUsageType;
    voiceCommunication: AndroidUsageType;
    voiceCommunicationSignalling: AndroidUsageType;
    alarm: AndroidUsageType;
    notification: AndroidUsageType;
    notificationRingtone: AndroidUsageType;
    notificationCommunicationRequest: AndroidUsageType;
    notificationCommunicationInstant: AndroidUsageType;
    notificationCommunicationDelayed: AndroidUsageType;
    notificationEvent: AndroidUsageType;
    assistanceAccessibility: AndroidUsageType;
    assistanceNavigationGuidance: AndroidUsageType;
    assistanceSonification: AndroidUsageType;
    game: AndroidUsageType;
    virtualSource: AndroidUsageType;
    assistant: AndroidUsageType;
    values: readonly AndroidUsageType[];
    fromInt(value: number): AndroidUsageType;
} & _FlaxInstanceType<AndroidUsageType> & _FlaxDartType<AndroidUsageType, readonly ["class", "flax.audio/audio#type:AndroidUsageType", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "__flaxBound:package:audioplayers_platform_interface/src/api/audio_context.dart::AndroidUsageType";
export {};
