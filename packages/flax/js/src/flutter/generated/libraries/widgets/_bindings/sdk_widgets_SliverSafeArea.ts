// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverSafeArea extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/safe_area.dart::SliverSafeArea": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SliverSafeArea: unique symbol;
readonly [_flaxDartTypeValue]: SliverSafeArea;

readonly left: boolean;
readonly top: boolean;
readonly right: boolean;
readonly bottom: boolean;
readonly minimum: upstream2.EdgeInsets;
readonly sliver: Widget;
readonly key: upstream1.Key | null;
build(context: upstream3.BuildContext): Widget;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream5.StatelessElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream6.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream7.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:SliverSafeArea", ["left","top","right","bottom","minimum","sliver","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverSafeArea", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _SliverSafeAreaFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; left?: boolean | undefined; top?: boolean | undefined; right?: boolean | undefined; bottom?: boolean | undefined; minimum?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined; sliver: Widget }): SliverSafeArea {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverSafeArea", "", [{"name":"key"},{"name":"left"},{"name":"top"},{"name":"right"},{"name":"bottom"},{"name":"minimum"},{"name":"sliver","required":true}], [], options) as SliverSafeArea;
}
export declare namespace _SliverSafeAreaFactory { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _SliverSafeAreaFactory>[0]>); readonly slot: null; readonly many: false; }; }
export const SliverSafeArea: typeof _SliverSafeAreaFactory & _FlaxInstanceType<SliverSafeArea> & _FlaxDartType<SliverSafeArea, readonly ["class", "flax.core/sdk_widgets#type:SliverSafeArea", readonly [], false]> = _flaxBindInstanceType<SliverSafeArea, typeof _SliverSafeAreaFactory>(_SliverSafeAreaFactory, "flax.core/sdk_widgets#type:SliverSafeArea", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SliverSafeAreaFactory & _FlaxInstanceType<SliverSafeArea> & _FlaxDartType<SliverSafeArea, readonly ["class", "flax.core/sdk_widgets#type:SliverSafeArea", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "left" | "top" | "right" | "bottom" | "minimum" | "sliver" | "key" | "build" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/safe_area.dart::SliverSafeArea" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
