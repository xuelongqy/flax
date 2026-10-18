// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedModelElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedModelElement';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"oldWidget","required":true,"positional":true},{"name":"dependencies","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"aspect","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"oldWidget","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters7 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InheritedModel<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/inherited_model.dart::InheritedModel": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __InheritedModel: unique symbol;
readonly [_flaxDartTypeValue]: InheritedModel<T>;

readonly child: Widget;
readonly key: upstream2.Key | null;
createElement(): upstream4.InheritedModelElement<T>;
updateShouldNotifyDependent(oldWidget: InheritedModel<T>, dependencies: DartSetInput<T, (T | DartInput<T>)>): boolean;
isSupportedAspect(aspect: {}): boolean;
updateShouldNotify(oldWidget: upstream0.InheritedWidget): boolean;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream6.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream7.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:InheritedModel", ["child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:InheritedModel", "object", {"createElement":_flaxMemberParameters0,"updateShouldNotifyDependent":_flaxMemberParameters1,"isSupportedAspect":_flaxMemberParameters2,"updateShouldNotify":_flaxMemberParameters3,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters4,"toStringShallow":_flaxMemberParameters5,"toStringDeep":_flaxMemberParameters6,"toDiagnosticsNode":_flaxMemberParameters7,"debugDescribeChildren":_flaxMemberParameters0}, {}), []);
export namespace _InheritedModelFactory { function _flaxDefault_inheritFrom<T extends InheritedModel<{}> = InheritedModel<{}>>(context: upstream3.BuildContext, options: { aspect?: unknown | null | undefined } = {}): T | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["aspect"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:InheritedModel.inheritFrom", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.aspect]);
return _flaxResult as T | null;
}
export const inheritFrom = _flaxDefineDartCallTypes(_flaxDefault_inheritFrom, {"id":"flax.core/sdk_widgets#function:InheritedModel.inheritFrom","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"aspect","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_inheritFrom, _FlaxSignature1>;
}
export const InheritedModel: typeof _InheritedModelFactory & _FlaxInstanceType<InheritedModel<unknown | null>> & _FlaxDartType<InheritedModel<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:InheritedModel", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<InheritedModel<unknown | null>, typeof _InheritedModelFactory>(_InheritedModelFactory, "flax.core/sdk_widgets#type:InheritedModel", ["flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _InheritedModelFactory & _FlaxInstanceType<InheritedModel<unknown | null>> & _FlaxDartType<InheritedModel<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:InheritedModel", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(InheritedModel, "flax.core/sdk_widgets#type:InheritedModel", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "key" | "createElement" | "updateShouldNotifyDependent" | "isSupportedAspect" | "updateShouldNotify" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/inherited_model.dart::InheritedModel" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: InheritedModel<_Selected0>;} & _FlaxInstanceType<InheritedModel<_Selected0>> & _FlaxDartType<InheritedModel<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [InheritedModel<{}>] ? (context: upstream3.BuildContext,options?: {aspect?: unknown | null | undefined}) => _Selected0 | null : never : never; }
