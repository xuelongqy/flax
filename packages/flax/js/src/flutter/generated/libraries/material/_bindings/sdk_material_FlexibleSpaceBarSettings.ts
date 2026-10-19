// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters0 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlexibleSpaceBarSettings extends _FlaxDartWidget, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/flexible_space_bar.dart::FlexibleSpaceBarSettings": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __FlexibleSpaceBarSettings: unique symbol;
readonly [_flaxDartTypeValue]: FlexibleSpaceBarSettings;

readonly toolbarOpacity: number;
readonly minExtent: number;
readonly maxExtent: number;
readonly currentExtent: number;
readonly isScrolledUnder: boolean | null;
readonly hasLeading: boolean | null;
readonly child: Widget;
readonly key: upstream2.Key | null;
updateShouldNotify(oldWidget: FlexibleSpaceBarSettings): boolean;
createElement(): upstream3.InheritedElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream5.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream6.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:FlexibleSpaceBarSettings", ["toolbarOpacity","minExtent","maxExtent","currentExtent","isScrolledUnder","hasLeading","child","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:FlexibleSpaceBarSettings", "object", {"updateShouldNotify":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:InheritedWidget");
export function _FlexibleSpaceBarSettingsFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; toolbarOpacity: number; minExtent: number; maxExtent: number; currentExtent: number; child: Widget; isScrolledUnder?: boolean | null | undefined; hasLeading?: boolean | null | undefined }): FlexibleSpaceBarSettings {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:FlexibleSpaceBarSettings", "", [{"name":"key"},{"name":"toolbarOpacity","required":true},{"name":"minExtent","required":true},{"name":"maxExtent","required":true},{"name":"currentExtent","required":true},{"name":"child","required":true},{"name":"isScrolledUnder"},{"name":"hasLeading"}], [], options) as FlexibleSpaceBarSettings;
}
export const FlexibleSpaceBarSettings: typeof _FlexibleSpaceBarSettingsFactory & _FlaxInstanceType<FlexibleSpaceBarSettings> & _FlaxDartType<FlexibleSpaceBarSettings, readonly ["class", "flax.core/sdk_material#type:FlexibleSpaceBarSettings", readonly [], false]> = _flaxBindInstanceType<FlexibleSpaceBarSettings, typeof _FlexibleSpaceBarSettingsFactory>(_FlexibleSpaceBarSettingsFactory, "flax.core/sdk_material#type:FlexibleSpaceBarSettings", ["flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _FlexibleSpaceBarSettingsFactory & _FlaxInstanceType<FlexibleSpaceBarSettings> & _FlaxDartType<FlexibleSpaceBarSettings, readonly ["class", "flax.core/sdk_material#type:FlexibleSpaceBarSettings", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "toolbarOpacity" | "minExtent" | "maxExtent" | "currentExtent" | "isScrolledUnder" | "hasLeading" | "child" | "key" | "updateShouldNotify" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/flexible_space_bar.dart::FlexibleSpaceBarSettings" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
