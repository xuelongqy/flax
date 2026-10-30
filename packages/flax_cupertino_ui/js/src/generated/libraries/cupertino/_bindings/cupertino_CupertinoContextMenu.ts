// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters0 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoContextMenu extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:cupertino_ui/src/context_menu.dart::CupertinoContextMenu": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoContextMenu: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoContextMenu;

readonly builder: ((context: upstream2.BuildContext, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>) => Widget);
readonly child: Widget | null;
readonly actions: DartList<Widget>;
readonly enableHapticFeedback: boolean;
readonly key: upstream1.Key | null;
createState(): upstream6.State<CupertinoContextMenu>;
createElement(): upstream7.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
defineObject("flax.cupertino/cupertino#type:CupertinoContextMenu", ["builder","child","actions","enableHapticFeedback","key"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoContextMenu", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _CupertinoContextMenuFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; actions: DartListInput<Widget, Widget>; child: Widget; enableHapticFeedback?: boolean | undefined }): CupertinoContextMenu {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoContextMenu", "", [{"name":"key"},{"name":"actions","required":true},{"name":"child","required":true},{"name":"enableHapticFeedback"}], [], options) as CupertinoContextMenu;
}
export declare namespace _CupertinoContextMenuFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoContextMenuFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoContextMenuFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoContextMenuFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _CupertinoContextMenuFactory {
export function builder(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; actions: DartListInput<Widget, Widget>; builder: ((context: upstream2.BuildContext, animation: upstream3.Animation<number>) => Widget); enableHapticFeedback?: boolean | undefined }): CupertinoContextMenu {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoContextMenu", "builder", [{"name":"key"},{"name":"actions","required":true},{"name":"builder","required":true},{"name":"enableHapticFeedback"}], [], options) as CupertinoContextMenu;
}
export declare namespace builder { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof builder>[0]>); readonly slot: null; readonly many: false; }; }
}
export namespace _CupertinoContextMenuFactory { export declare const kOpenBorderRadius: number; }
export namespace _CupertinoContextMenuFactory { export declare const kEndBoxShadow: DartList<upstream4.BoxShadow>; }
export namespace _CupertinoContextMenuFactory { export declare const animationOpensAt: number; }
export namespace _CupertinoContextMenuFactory { export declare const kBackgroundColor: upstream5.Color; }
_flaxDefineStaticGetters(_CupertinoContextMenuFactory, "flax.cupertino/cupertino#read:CupertinoContextMenu.", ["kOpenBorderRadius","kEndBoxShadow","animationOpensAt","kBackgroundColor"]);
export const CupertinoContextMenu: typeof _CupertinoContextMenuFactory & _FlaxInstanceType<CupertinoContextMenu> & _FlaxDartType<CupertinoContextMenu, readonly ["class", "flax.cupertino/cupertino#type:CupertinoContextMenu", readonly [], false]> = _flaxBindInstanceType<CupertinoContextMenu, typeof _CupertinoContextMenuFactory>(_CupertinoContextMenuFactory, "flax.cupertino/cupertino#type:CupertinoContextMenu", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoContextMenuFactory & _FlaxInstanceType<CupertinoContextMenu> & _FlaxDartType<CupertinoContextMenu, readonly ["class", "flax.cupertino/cupertino#type:CupertinoContextMenu", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "builder" | "child" | "actions" | "enableHapticFeedback" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/context_menu.dart::CupertinoContextMenu" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
