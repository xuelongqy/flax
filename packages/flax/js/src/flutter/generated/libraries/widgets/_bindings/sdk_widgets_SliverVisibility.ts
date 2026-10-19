// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverVisibility extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/indexed_stack.dart::SliverVisibility": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SliverVisibility: unique symbol;
readonly [_flaxDartTypeValue]: SliverVisibility;

readonly sliver: Widget;
readonly replacementSliver: Widget;
readonly visible: boolean;
readonly maintainState: boolean;
readonly maintainAnimation: boolean;
readonly maintainSize: boolean;
readonly maintainSemantics: boolean;
readonly maintainInteractivity: boolean;
readonly key: upstream1.Key | null;
build(context: upstream2.BuildContext): Widget;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream4.StatelessElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream5.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream6.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:SliverVisibility", ["sliver","replacementSliver","visible","maintainState","maintainAnimation","maintainSize","maintainSemantics","maintainInteractivity","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverVisibility", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _SliverVisibilityFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; sliver: Widget; replacementSliver?: Widget | undefined; visible?: boolean | undefined; maintainState?: boolean | undefined; maintainAnimation?: boolean | undefined; maintainSize?: boolean | undefined; maintainSemantics?: boolean | undefined; maintainInteractivity?: boolean | undefined }): SliverVisibility {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverVisibility", "", [{"name":"key"},{"name":"sliver","required":true},{"name":"replacementSliver"},{"name":"visible"},{"name":"maintainState"},{"name":"maintainAnimation"},{"name":"maintainSize"},{"name":"maintainSemantics"},{"name":"maintainInteractivity"}], [], options) as SliverVisibility;
}
export namespace _SliverVisibilityFactory {
export function maintain(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; sliver: Widget; replacementSliver?: Widget | undefined; visible?: boolean | undefined }): SliverVisibility {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverVisibility", "maintain", [{"name":"key"},{"name":"sliver","required":true},{"name":"replacementSliver"},{"name":"visible"}], [], options) as SliverVisibility;
}
}
export const SliverVisibility: typeof _SliverVisibilityFactory & _FlaxInstanceType<SliverVisibility> & _FlaxDartType<SliverVisibility, readonly ["class", "flax.core/sdk_widgets#type:SliverVisibility", readonly [], false]> = _flaxBindInstanceType<SliverVisibility, typeof _SliverVisibilityFactory>(_SliverVisibilityFactory, "flax.core/sdk_widgets#type:SliverVisibility", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SliverVisibilityFactory & _FlaxInstanceType<SliverVisibility> & _FlaxDartType<SliverVisibility, readonly ["class", "flax.core/sdk_widgets#type:SliverVisibility", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "sliver" | "replacementSliver" | "visible" | "maintainState" | "maintainAnimation" | "maintainSize" | "maintainSemantics" | "maintainInteractivity" | "key" | "build" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/indexed_stack.dart::SliverVisibility" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
