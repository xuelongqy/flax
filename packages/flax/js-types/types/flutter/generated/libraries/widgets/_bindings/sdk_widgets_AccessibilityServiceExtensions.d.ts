import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AccessibilityServiceExtensions extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/service_extensions.dart::AccessibilityServiceExtensions": readonly [];
}> {
    readonly __AccessibilityServiceExtensions: unique symbol;
    readonly [_flaxDartTypeValue]: AccessibilityServiceExtensions;
    readonly name: string;
    readonly index: number;
    readonly extensionName: string;
}
export declare const AccessibilityServiceExtensions: Readonly<{
    getSemanticsTree: AccessibilityServiceExtensions;
    getIssuesAndSemanticsTree: AccessibilityServiceExtensions;
    enableSemantics: AccessibilityServiceExtensions;
    disposeSemantics: AccessibilityServiceExtensions;
    values: readonly AccessibilityServiceExtensions[];
} & _FlaxInstanceType<AccessibilityServiceExtensions> & _FlaxDartType<AccessibilityServiceExtensions, readonly ["class", "flax.core/sdk_widgets#type:AccessibilityServiceExtensions", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "extensionName" | "__flaxBound:package:flutter/src/widgets/service_extensions.dart::AccessibilityServiceExtensions";
export {};
