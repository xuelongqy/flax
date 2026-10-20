// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_PopupMenuEntry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/painting/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters49, _flaxMemberParameters2 } from "@flax/material-ui/_bindings/material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopupMenuDivider extends _FlaxDartWidget, Omit<upstream0.PopupMenuEntry<never>, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.PopupMenuEntry<never>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.PopupMenuEntry<never> | keyof upstream1.StatefulWidget>, Readonly<{ "__flaxBound:package:material_ui/src/popup_menu.dart::PopupMenuDivider": readonly [] }>, Readonly<{ "__flaxBound:package:material_ui/src/popup_menu.dart::PopupMenuEntry": readonly [never] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PopupMenuDivider: unique symbol;
readonly [_flaxDartTypeValue]: PopupMenuDivider;

readonly height: number;
readonly thickness: number | null;
readonly indent: number | null;
readonly endIndent: number | null;
readonly radius: upstream3.BorderRadiusGeometry | null;
readonly color: upstream4.Color | null;
readonly key: upstream2.Key | null;
represents(value: unknown): boolean;
createState(): upstream5.State<PopupMenuDivider>;
createElement(): upstream6.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream8.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
defineObject("flax.material/material#type:PopupMenuDivider", ["height","thickness","indent","endIndent","radius","color","key"], [], _flaxBindingMethods("flax.material/material#type:PopupMenuDivider", "object", {"represents":_flaxMemberParameters49,"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _PopupMenuDividerFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; height?: number | undefined; thickness?: number | null | undefined; indent?: number | null | undefined; endIndent?: number | null | undefined; radius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined } = {}): PopupMenuDivider {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:PopupMenuDivider", "", [{"name":"key"},{"name":"height"},{"name":"thickness"},{"name":"indent"},{"name":"endIndent"},{"name":"radius"},{"name":"color"}], [], options) as PopupMenuDivider;
}
export const PopupMenuDivider: typeof _PopupMenuDividerFactory & _FlaxInstanceType<PopupMenuDivider> & _FlaxDartType<PopupMenuDivider, readonly ["class", "flax.material/material#type:PopupMenuDivider", readonly [], false]> = _flaxBindInstanceType<PopupMenuDivider, typeof _PopupMenuDividerFactory>(_PopupMenuDividerFactory, "flax.material/material#type:PopupMenuDivider", ["flax.material/material#type:PopupMenuEntry","flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PopupMenuDividerFactory & _FlaxInstanceType<PopupMenuDivider> & _FlaxDartType<PopupMenuDivider, readonly ["class", "flax.material/material#type:PopupMenuDivider", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "height" | "thickness" | "indent" | "endIndent" | "radius" | "color" | "key" | "represents" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/popup_menu.dart::PopupMenuDivider" | "__flaxBound:package:material_ui/src/popup_menu.dart::PopupMenuEntry" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
