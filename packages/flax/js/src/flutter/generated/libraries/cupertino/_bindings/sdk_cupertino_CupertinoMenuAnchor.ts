// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters0 } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoMenuAnchor extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/menu_anchor.dart::CupertinoMenuAnchor": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoMenuAnchor: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoMenuAnchor;

readonly controller: upstream2.MenuController | null;
readonly onOpen: (() => void) | null;
readonly onClose: (() => void) | null;
readonly onAnimationStatusChanged: ((status: upstream3.AnimationStatus) => void) | null;
readonly constraints: upstream4.BoxConstraints | null;
readonly constrainCrossAxis: boolean;
readonly consumeOutsideTaps: boolean;
readonly enableSwipe: boolean;
readonly enableLongPressToOpen: boolean;
readonly useRootOverlay: boolean;
readonly overlayPadding: upstream5.EdgeInsetsGeometry;
readonly menuChildren: DartList<Widget>;
readonly builder: ((context: upstream6.BuildContext, controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [] }>, child: Widget | null) => Widget) | null;
readonly child: Widget | null;
readonly childFocusNode: upstream7.FocusNode | null;
readonly key: upstream1.Key | null;
createState(): upstream8.State<CupertinoMenuAnchor>;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream11.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream12.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream12.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
}
defineObject("flax.core/sdk_cupertino#type:CupertinoMenuAnchor", ["controller","onOpen","onClose","onAnimationStatusChanged","constraints","constrainCrossAxis","consumeOutsideTaps","enableSwipe","enableLongPressToOpen","useRootOverlay","overlayPadding","menuChildren","builder","child","childFocusNode","key"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoMenuAnchor", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _CupertinoMenuAnchorFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [] }> | null | undefined; onOpen?: (() => void) | null | undefined; onClose?: (() => void) | null | undefined; onAnimationStatusChanged?: ((status: upstream3.AnimationStatus) => void) | null | undefined; constraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | null | undefined; constrainCrossAxis?: boolean | undefined; consumeOutsideTaps?: boolean | undefined; enableSwipe?: boolean | undefined; enableLongPressToOpen?: boolean | undefined; useRootOverlay?: boolean | undefined; overlayPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined; menuChildren: DartListInput<Widget, Widget>; builder?: ((context: upstream6.BuildContext, controller: upstream2.MenuController, child: Widget | null) => Widget) | null | undefined; child?: Widget | null | undefined; childFocusNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined }): CupertinoMenuAnchor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_cupertino#type:CupertinoMenuAnchor", "", [{"name":"key"},{"name":"controller"},{"name":"onOpen"},{"name":"onClose"},{"name":"onAnimationStatusChanged"},{"name":"constraints"},{"name":"constrainCrossAxis"},{"name":"consumeOutsideTaps"},{"name":"enableSwipe"},{"name":"enableLongPressToOpen"},{"name":"useRootOverlay"},{"name":"overlayPadding"},{"name":"menuChildren","required":true},{"name":"builder"},{"name":"child"},{"name":"childFocusNode"}], [], options) as CupertinoMenuAnchor;
}
export namespace _CupertinoMenuAnchorFactory { export function maybeHasLeadingOf(context: upstream6.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_cupertino#function:CupertinoMenuAnchor.maybeHasLeadingOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export const CupertinoMenuAnchor: typeof _CupertinoMenuAnchorFactory & _FlaxInstanceType<CupertinoMenuAnchor> & _FlaxDartType<CupertinoMenuAnchor, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoMenuAnchor", readonly [], false]> = _flaxBindInstanceType<CupertinoMenuAnchor, typeof _CupertinoMenuAnchorFactory>(_CupertinoMenuAnchorFactory, "flax.core/sdk_cupertino#type:CupertinoMenuAnchor", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoMenuAnchorFactory & _FlaxInstanceType<CupertinoMenuAnchor> & _FlaxDartType<CupertinoMenuAnchor, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoMenuAnchor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "controller" | "onOpen" | "onClose" | "onAnimationStatusChanged" | "constraints" | "constrainCrossAxis" | "consumeOutsideTaps" | "enableSwipe" | "enableLongPressToOpen" | "useRootOverlay" | "overlayPadding" | "menuChildren" | "builder" | "child" | "childFocusNode" | "key" | "createState" | "debugDescribeChildren" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "__flaxBound:package:flutter/src/cupertino/menu_anchor.dart::CupertinoMenuAnchor" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
