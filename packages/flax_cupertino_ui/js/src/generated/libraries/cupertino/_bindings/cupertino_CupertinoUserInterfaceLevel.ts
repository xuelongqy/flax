// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoUserInterfaceLevelData';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoUserInterfaceLevelData';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters26, _flaxMemberParameters48 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoUserInterfaceLevel extends _FlaxDartWidget, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{ "__flaxBound:package:cupertino_ui/src/interface_level.dart::CupertinoUserInterfaceLevel": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoUserInterfaceLevel: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoUserInterfaceLevel;

readonly child: Widget;
readonly key: upstream2.Key | null;
updateShouldNotify(oldWidget: CupertinoUserInterfaceLevel): boolean;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream6.InheritedElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream7.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
defineObject("flax.cupertino/cupertino#type:CupertinoUserInterfaceLevel", ["child","key"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoUserInterfaceLevel", "object", {"updateShouldNotify":_flaxMemberParameters48}, {}), [], undefined, "flax.core/sdk_widgets#type:InheritedWidget");
export function _CupertinoUserInterfaceLevelFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; data: upstream3.CupertinoUserInterfaceLevelData; child: Widget }): CupertinoUserInterfaceLevel {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoUserInterfaceLevel", "", [{"name":"key"},{"name":"data","required":true},{"name":"child","required":true}], [], options) as CupertinoUserInterfaceLevel;
}
export declare namespace _CupertinoUserInterfaceLevelFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoUserInterfaceLevelFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoUserInterfaceLevelFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoUserInterfaceLevelFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _CupertinoUserInterfaceLevelFactory { export function of(context: upstream4.BuildContext): upstream3.CupertinoUserInterfaceLevelData {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.cupertino/cupertino#function:CupertinoUserInterfaceLevel.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters26);
return _flaxResult as upstream3.CupertinoUserInterfaceLevelData;
} }
export namespace _CupertinoUserInterfaceLevelFactory { export function maybeOf(context: upstream4.BuildContext): upstream3.CupertinoUserInterfaceLevelData | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.cupertino/cupertino#function:CupertinoUserInterfaceLevel.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters26);
return _flaxResult as upstream3.CupertinoUserInterfaceLevelData | null;
} }
export const CupertinoUserInterfaceLevel: typeof _CupertinoUserInterfaceLevelFactory & _FlaxInstanceType<CupertinoUserInterfaceLevel> & _FlaxDartType<CupertinoUserInterfaceLevel, readonly ["class", "flax.cupertino/cupertino#type:CupertinoUserInterfaceLevel", readonly [], false]> = _flaxBindInstanceType<CupertinoUserInterfaceLevel, typeof _CupertinoUserInterfaceLevelFactory>(_CupertinoUserInterfaceLevelFactory, "flax.cupertino/cupertino#type:CupertinoUserInterfaceLevel", ["flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoUserInterfaceLevelFactory & _FlaxInstanceType<CupertinoUserInterfaceLevel> & _FlaxDartType<CupertinoUserInterfaceLevel, readonly ["class", "flax.cupertino/cupertino#type:CupertinoUserInterfaceLevel", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "key" | "updateShouldNotify" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/interface_level.dart::CupertinoUserInterfaceLevel" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
