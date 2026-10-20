// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsProperty';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import '@flax/flutter/foundation/_bindings/sdk_foundation_TextTreeConfiguration';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsSerializationDelegate';
import { _flaxMemberParameters75, _flaxMemberParameters381, _flaxMemberParameters77, _flaxMemberParameters2, _flaxMemberParameters78, _flaxMemberParameters79, _flaxMemberParameters80 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShortcutMapProperty extends Omit<upstream0.DiagnosticsProperty<DartMap<upstream2.ShortcutActivator, upstream1.Intent>>, _flaxOwnMembers0>, Omit<upstream3.DiagnosticsNode, _flaxOwnMembers0 | keyof upstream0.DiagnosticsProperty<DartMap<upstream2.ShortcutActivator, upstream1.Intent>>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutMapProperty": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty": readonly [DartMap<upstream2.ShortcutActivator, upstream1.Intent>] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }> { readonly __ShortcutMapProperty: unique symbol;
readonly [_flaxDartTypeValue]: ShortcutMapProperty;

readonly expandableValue: boolean;
readonly allowWrap: boolean;
readonly allowNameWrap: boolean;
readonly ifNull: string | null;
readonly ifEmpty: string | null;
readonly tooltip: string | null;
readonly missingIfNull: boolean;
readonly propertyType: upstream5.Type;
readonly value: DartMap<upstream2.ShortcutActivator, upstream1.Intent>;
readonly exception: unknown | null;
readonly defaultValue: unknown | null;
readonly isInteresting: boolean;
readonly level: upstream4.DiagnosticLevel;
readonly name: string | null;
readonly showSeparator: boolean;
readonly showName: boolean;
readonly linePrefix: string | null;
readonly emptyBodyDescription: string | null;
readonly style: upstream6.DiagnosticsTreeStyle | null;
readonly allowTruncate: boolean;
readonly textTreeConfiguration: upstream7.TextTreeConfiguration | null;
toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
valueToString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
getProperties(): DartList<upstream3.DiagnosticsNode>;
getChildren(): DartList<upstream3.DiagnosticsNode>;
isFiltered(minLevel: upstream4.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {minLevel?: upstream4.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:ShortcutMapProperty", ["expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","value","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ShortcutMapProperty", "object", {"valueToString":_flaxMemberParameters75}, {}), [], undefined, "flax.core/sdk_foundation#type:DiagnosticsNode");
export function _ShortcutMapPropertyFactory(name: string, value: DartMapInput<upstream2.ShortcutActivator, upstream1.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, options: { showName?: boolean | undefined; defaultValue?: {} | undefined; level?: upstream4.DiagnosticLevel | undefined; description?: string | null | undefined } = {}): ShortcutMapProperty {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ShortcutMapProperty", "", [{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true},{"name":"showName"},{"name":"defaultValue"},{"name":"level"},{"name":"description"}], [name, value], options) as ShortcutMapProperty;
}
const _ShortcutMapPropertyProxy = {type: "flax.core/sdk_widgets#type:ShortcutMapProperty", parameters: _flaxMemberParameters381, constructors: {"": _flaxMemberParameters381}, methods: {"toJsonMap":_flaxMemberParameters77,"valueToString":_flaxMemberParameters75,"toDescription":_flaxMemberParameters75,"getProperties":_flaxMemberParameters2,"getChildren":_flaxMemberParameters2,"isFiltered":_flaxMemberParameters78,"toTimelineArguments":_flaxMemberParameters2,"toJsonMapIterative":_flaxMemberParameters77,"toStringDeep":_flaxMemberParameters79,"toString":_flaxMemberParameters80}, getters: ["value","expandableValue","allowWrap","allowNameWrap","ifNull","ifEmpty","tooltip","missingIfNull","propertyType","exception","defaultValue","isInteresting","level","name","showSeparator","showName","linePrefix","emptyBodyDescription","style","allowTruncate","textTreeConfiguration"], setters: [], contextMembers: [], superMembers: ["get:value","get:expandableValue","get:allowWrap","get:allowNameWrap","get:ifNull","get:ifEmpty","get:tooltip","get:missingIfNull","get:propertyType","get:exception","get:defaultValue","get:isInteresting","get:level","get:name","get:showSeparator","get:showName","get:linePrefix","get:emptyBodyDescription","get:style","get:allowTruncate","get:textTreeConfiguration","toJsonMap","valueToString","toDescription","getProperties","getChildren","isFiltered","toTimelineArguments","toJsonMapIterative","toStringDeep","toString"]} as const;
export interface _ShortcutMapPropertyNative extends ShortcutMapProperty {
readonly [_flaxDartTypeValue]: _ShortcutMapPropertyNative;

toJsonMap(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
valueToString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
toDescription(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined}): string;
getProperties(): DartList<upstream3.DiagnosticsNode>;
getChildren(): DartList<upstream3.DiagnosticsNode>;
isFiltered(minLevel: upstream4.DiagnosticLevel): boolean;
toTimelineArguments(): DartMap<string, string> | null;
toJsonMapIterative(delegate: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [] }>): DartMap<string, unknown | null>;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream4.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {parentConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> | null | undefined; minLevel?: upstream4.DiagnosticLevel | undefined}): string;
get value(): DartMap<upstream2.ShortcutActivator, upstream1.Intent>;
get expandableValue(): boolean;
get allowWrap(): boolean;
get allowNameWrap(): boolean;
get ifNull(): string | null;
get ifEmpty(): string | null;
get tooltip(): string | null;
get missingIfNull(): boolean;
get propertyType(): upstream5.Type;
get exception(): unknown | null;
get defaultValue(): unknown | null;
get isInteresting(): boolean;
get level(): upstream4.DiagnosticLevel;
get name(): string | null;
get showSeparator(): boolean;
get showName(): boolean;
get linePrefix(): string | null;
get emptyBodyDescription(): string | null;
get style(): upstream6.DiagnosticsTreeStyle | null;
get allowTruncate(): boolean;
get textTreeConfiguration(): upstream7.TextTreeConfiguration | null;
}
export abstract class _ShortcutMapPropertyNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShortcutMapProperty>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShortcutMapProperty;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ShortcutMapProperty", readonly [], false];
constructor(name: string, value: DartMapInput<upstream2.ShortcutActivator, upstream1.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, options?: {showName?: boolean | undefined; defaultValue?: {} | undefined; level?: upstream4.DiagnosticLevel | undefined; description?: string | null | undefined}) { super(_ShortcutMapPropertyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ShortcutMapPropertyNative.prototype, _ShortcutMapPropertyProxy);
export namespace _ShortcutMapPropertyFactory { export function implement(args: [name: string, value: DartMapInput<upstream2.ShortcutActivator, upstream1.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, options?: {showName?: boolean | undefined; defaultValue?: {} | undefined; level?: upstream4.DiagnosticLevel | undefined; description?: string | null | undefined}], implementation: {}): ShortcutMapProperty {
return constructProxy(_ShortcutMapPropertyProxy, args, implementation) as ShortcutMapProperty; } }
const _ShortcutMapPropertyBinding = _flaxProxyFactory(_ShortcutMapPropertyFactory, _ShortcutMapPropertyNative) as unknown as typeof _ShortcutMapPropertyFactory & (new(name: string, value: DartMapInput<upstream2.ShortcutActivator, upstream1.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, options?: {showName?: boolean | undefined; defaultValue?: {} | undefined; level?: upstream4.DiagnosticLevel | undefined; description?: string | null | undefined}) => _ShortcutMapPropertyNative);
export const ShortcutMapProperty: typeof _ShortcutMapPropertyBinding & _FlaxInstanceType<ShortcutMapProperty> & _FlaxDartType<ShortcutMapProperty, readonly ["class", "flax.core/sdk_widgets#type:ShortcutMapProperty", readonly [], false]> = _flaxBindInstanceType<ShortcutMapProperty, typeof _ShortcutMapPropertyBinding>(_ShortcutMapPropertyBinding, "flax.core/sdk_widgets#type:ShortcutMapProperty", ["flax.core/sdk_foundation#type:DiagnosticsProperty","flax.core/sdk_foundation#type:DiagnosticsNode","dart:core::Object"]) as typeof _ShortcutMapPropertyBinding & _FlaxInstanceType<ShortcutMapProperty> & _FlaxDartType<ShortcutMapProperty, readonly ["class", "flax.core/sdk_widgets#type:ShortcutMapProperty", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "expandableValue" | "allowWrap" | "allowNameWrap" | "ifNull" | "ifEmpty" | "tooltip" | "missingIfNull" | "propertyType" | "value" | "exception" | "defaultValue" | "isInteresting" | "level" | "name" | "showSeparator" | "showName" | "linePrefix" | "emptyBodyDescription" | "style" | "allowTruncate" | "textTreeConfiguration" | "toJsonMap" | "valueToString" | "toDescription" | "getProperties" | "getChildren" | "isFiltered" | "toTimelineArguments" | "toJsonMapIterative" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutMapProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode";
