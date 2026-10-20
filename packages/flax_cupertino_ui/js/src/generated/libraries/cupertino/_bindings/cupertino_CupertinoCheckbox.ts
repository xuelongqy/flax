// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters0 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoCheckbox extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:cupertino_ui/src/checkbox.dart::CupertinoCheckbox": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoCheckbox: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoCheckbox;

readonly value: boolean | null;
readonly onChanged: ((value: boolean | null) => void) | null;
readonly mouseCursor: upstream2.MouseCursor | null;
readonly activeColor: upstream3.Color | null;
readonly fillColor: upstream4.WidgetStateProperty<upstream3.Color | null> | null;
readonly inactiveColor: upstream3.Color | null;
readonly checkColor: upstream3.Color | null;
readonly tristate: boolean;
readonly focusColor: upstream3.Color | null;
readonly focusNode: upstream5.FocusNode | null;
readonly autofocus: boolean;
readonly side: upstream6.BorderSide | null;
readonly shape: upstream7.OutlinedBorder | null;
readonly tapTargetSize: upstream8.Size | null;
readonly semanticLabel: string | null;
readonly key: upstream1.Key | null;
createState(): upstream9.State<CupertinoCheckbox>;
createElement(): upstream10.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream12.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream12.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream14.DiagnosticsTreeStyle | null | undefined}): upstream13.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream13.DiagnosticsNode>;
}
defineObject("flax.cupertino/cupertino#type:CupertinoCheckbox", ["value","onChanged","mouseCursor","activeColor","fillColor","inactiveColor","checkColor","tristate","focusColor","focusNode","autofocus","side","shape","tapTargetSize","semanticLabel","key"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoCheckbox", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _CupertinoCheckboxFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; value: boolean | null; tristate?: boolean | undefined; onChanged: ((value: boolean | null) => void) | null; mouseCursor?: Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; activeColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; inactiveColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; fillColor?: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null] }> | null | undefined; checkColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; focusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; autofocus?: boolean | undefined; side?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::OutlinedBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; tapTargetSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; semanticLabel?: string | null | undefined }): CupertinoCheckbox {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoCheckbox", "", [{"name":"key"},{"name":"value","required":true},{"name":"tristate"},{"name":"onChanged","required":true},{"name":"mouseCursor"},{"name":"activeColor"},{"name":"inactiveColor"},{"name":"fillColor"},{"name":"checkColor"},{"name":"focusColor"},{"name":"focusNode"},{"name":"autofocus"},{"name":"side"},{"name":"shape"},{"name":"tapTargetSize"},{"name":"semanticLabel"}], [], options) as CupertinoCheckbox;
}
export namespace _CupertinoCheckboxFactory { export declare const width: number; }
_flaxDefineStaticGetters(_CupertinoCheckboxFactory, "flax.cupertino/cupertino#read:CupertinoCheckbox.", ["width"]);
export const CupertinoCheckbox: typeof _CupertinoCheckboxFactory & _FlaxInstanceType<CupertinoCheckbox> & _FlaxDartType<CupertinoCheckbox, readonly ["class", "flax.cupertino/cupertino#type:CupertinoCheckbox", readonly [], false]> = _flaxBindInstanceType<CupertinoCheckbox, typeof _CupertinoCheckboxFactory>(_CupertinoCheckboxFactory, "flax.cupertino/cupertino#type:CupertinoCheckbox", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoCheckboxFactory & _FlaxInstanceType<CupertinoCheckbox> & _FlaxDartType<CupertinoCheckbox, readonly ["class", "flax.cupertino/cupertino#type:CupertinoCheckbox", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "value" | "onChanged" | "mouseCursor" | "activeColor" | "fillColor" | "inactiveColor" | "checkColor" | "tristate" | "focusColor" | "focusNode" | "autofocus" | "side" | "shape" | "tapTargetSize" | "semanticLabel" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/checkbox.dart::CupertinoCheckbox" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
