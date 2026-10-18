import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RouteInformationReportingType extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationReportingType">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationReportingType": readonly [];
}> {
    readonly __RouteInformationReportingType: unique symbol;
    readonly [_flaxDartTypeValue]: RouteInformationReportingType;
    readonly name: string;
    readonly index: number;
}
export declare const RouteInformationReportingType: Readonly<{
    none: RouteInformationReportingType;
    neglect: RouteInformationReportingType;
    navigate: RouteInformationReportingType;
    values: readonly RouteInformationReportingType[];
} & _FlaxInstanceType<RouteInformationReportingType> & _FlaxDartType<RouteInformationReportingType, readonly ["class", "flax.core/sdk_widgets#type:RouteInformationReportingType", readonly [], false]>>;
