// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetsServiceExtensions extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/service_extensions.dart::WidgetsServiceExtensions">, Readonly<{ "__flaxBound:package:flutter/src/widgets/service_extensions.dart::WidgetsServiceExtensions": readonly [] }> { readonly __WidgetsServiceExtensions: unique symbol;
readonly [_flaxDartTypeValue]: WidgetsServiceExtensions;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_widgets#type:WidgetsServiceExtensions", ["debugDumpApp","debugDumpFocusTree","showPerformanceOverlay","didSendFirstFrameEvent","didSendFirstFrameRasterizedEvent","fastReassemble","profileWidgetBuilds","profileUserWidgetBuilds","debugAllowBanner","accessibilityEvaluations"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_WidgetsServiceExtensions_api = {
debugDumpApp: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "debugDumpApp"),
debugDumpFocusTree: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "debugDumpFocusTree"),
showPerformanceOverlay: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "showPerformanceOverlay"),
didSendFirstFrameEvent: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "didSendFirstFrameEvent"),
didSendFirstFrameRasterizedEvent: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "didSendFirstFrameRasterizedEvent"),
fastReassemble: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "fastReassemble"),
profileWidgetBuilds: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "profileWidgetBuilds"),
profileUserWidgetBuilds: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "profileUserWidgetBuilds"),
debugAllowBanner: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "debugAllowBanner"),
accessibilityEvaluations: enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "accessibilityEvaluations"),
values: Object.freeze([enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "debugDumpApp"), enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "debugDumpFocusTree"), enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "showPerformanceOverlay"), enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "didSendFirstFrameEvent"), enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "didSendFirstFrameRasterizedEvent"), enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "fastReassemble"), enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "profileWidgetBuilds"), enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "profileUserWidgetBuilds"), enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "debugAllowBanner"), enumValue<WidgetsServiceExtensions>("flax.core/sdk_widgets#type:WidgetsServiceExtensions", "accessibilityEvaluations")]),
};
export const WidgetsServiceExtensions = Object.freeze(_flaxBindInstanceType<WidgetsServiceExtensions, typeof _flaxEnum_WidgetsServiceExtensions_api>(_flaxEnum_WidgetsServiceExtensions_api, "flax.core/sdk_widgets#type:WidgetsServiceExtensions", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_WidgetsServiceExtensions_api & _FlaxInstanceType<WidgetsServiceExtensions> & _FlaxDartType<WidgetsServiceExtensions, readonly ["class", "flax.core/sdk_widgets#type:WidgetsServiceExtensions", readonly [], false]>);
