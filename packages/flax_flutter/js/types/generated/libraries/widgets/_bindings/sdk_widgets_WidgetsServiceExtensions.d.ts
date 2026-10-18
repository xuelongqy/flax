import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetsServiceExtensions extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/service_extensions.dart::WidgetsServiceExtensions">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/service_extensions.dart::WidgetsServiceExtensions": readonly [];
}> {
    readonly __WidgetsServiceExtensions: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetsServiceExtensions;
    readonly name: string;
    readonly index: number;
}
export declare const WidgetsServiceExtensions: Readonly<{
    debugDumpApp: WidgetsServiceExtensions;
    debugDumpFocusTree: WidgetsServiceExtensions;
    showPerformanceOverlay: WidgetsServiceExtensions;
    didSendFirstFrameEvent: WidgetsServiceExtensions;
    didSendFirstFrameRasterizedEvent: WidgetsServiceExtensions;
    fastReassemble: WidgetsServiceExtensions;
    profileWidgetBuilds: WidgetsServiceExtensions;
    profileUserWidgetBuilds: WidgetsServiceExtensions;
    debugAllowBanner: WidgetsServiceExtensions;
    accessibilityEvaluations: WidgetsServiceExtensions;
    values: readonly WidgetsServiceExtensions[];
} & _FlaxInstanceType<WidgetsServiceExtensions> & _FlaxDartType<WidgetsServiceExtensions, readonly ["class", "flax.core/sdk_widgets#type:WidgetsServiceExtensions", readonly [], false]>>;
