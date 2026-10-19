// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconData';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { _flaxMemberParameters96, _flaxMemberParameters203, _flaxMemberParameters98, _flaxMemberParameters2, _flaxMemberParameters99, _flaxMemberParameters100, _flaxMemberParameters101 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IconDataProperty extends Omit<upstream0.DiagnosticsProperty<upstream1.IconData>, _flaxOwnMembers0>, Omit<upstream2.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<upstream1.IconData>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_data.dart::IconDataProperty": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [upstream1.IconData] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __IconDataProperty: unique symbol;
readonly [_flaxDartTypeValue]: IconDataProperty;

}
defineObject("flax.core/sdk_widgets#type:IconDataProperty", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:IconDataProperty", "object", {"valueToString":_flaxMemberParameters96}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
const _IconDataPropertyProxy = {type: "flax.core/sdk_widgets#type:IconDataProperty", parameters: _flaxMemberParameters203, constructors: {"": _flaxMemberParameters203}, methods: {"toJsonMap":_flaxMemberParameters98,"valueToString":_flaxMemberParameters96,"toDescription":_flaxMemberParameters96,"getProperties":_flaxMemberParameters2,"getChildren":_flaxMemberParameters2,"isFiltered":_flaxMemberParameters99,"toTimelineArguments":_flaxMemberParameters2,"toJsonMapIterative":_flaxMemberParameters98,"toStringDeep":_flaxMemberParameters100,"toString":_flaxMemberParameters101}, getters: ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:value","get:exception","get:defaultValue","get:isInteresting","get:level","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface IconDataProperty {
readonly [_flaxDartTypeValue]: IconDataProperty;

toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
valueToString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
getProperties(): DartList<upstream2.DiagnosticsNode>;
getChildren(): DartList<upstream2.DiagnosticsNode>;
isFiltered(minLevel: upstream4.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream4.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream4.DiagnosticLevel | undefined}): string;
get expandableValue(): boolean;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get ifNull(): string | null;
get ifEmpty(): string | null;
get tooltip(): string | null;
get missingIfNull(): boolean;
get propertyType(): upstream5.Type;
get value(): upstream1.IconData | null;
get exception(): unknown | null;
get defaultValue(): unknown | null;
get isInteresting(): boolean;
get level(): upstream4.DiagnosticLevel;
get name(): string | null;
get showSeparator(): boolean;
get showName(): boolean;
get linePrefix(): string | null;
get emptyBodyDescription(): string | null;
get style(): upstream3.DiagnosticsTreeStyle | null;
get allowTruncate(): boolean;
get textTreeConfiguration(): upstream6.TextTreeConfiguration | null;
}
export abstract class IconDataProperty extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IconDataProperty>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IconDataProperty;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:IconDataProperty", readonly [], false];
constructor(name: string, value: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_data.dart::IconData": readonly [] }> | null, options?: {ifNull?: string | null | undefined; showName?: boolean | undefined; style?: upstream3.DiagnosticsTreeStyle | undefined; level?: upstream4.DiagnosticLevel | undefined}) { super(_IconDataPropertyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(IconDataProperty.prototype, _IconDataPropertyProxy);
export namespace IconDataProperty { export function implement(args: [name: string, value: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_data.dart::IconData": readonly [] }> | null, options?: {ifNull?: string | null | undefined; showName?: boolean | undefined; style?: upstream3.DiagnosticsTreeStyle | undefined; level?: upstream4.DiagnosticLevel | undefined}], implementation: {}): IconDataProperty {
return constructProxy(_IconDataPropertyProxy, args, implementation) as IconDataProperty; } }
_flaxBindInstanceType<IconDataProperty, typeof IconDataProperty>(IconDataProperty, "flax.core/sdk_widgets#type:IconDataProperty", ["flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/widgets/icon_data.dart::IconDataProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
