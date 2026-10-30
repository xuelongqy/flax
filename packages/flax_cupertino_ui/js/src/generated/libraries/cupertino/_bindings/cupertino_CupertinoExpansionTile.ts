// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ExpansibleController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ExpansibleController';
import type * as upstream3 from '@flax/cupertino-ui/_bindings/cupertino_ExpansionTileTransitionMode';
import '@flax/cupertino-ui/_bindings/cupertino_ExpansionTileTransitionMode';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters0 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoExpansionTile extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:cupertino_ui/src/expansion_tile.dart::CupertinoExpansionTile": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoExpansionTile: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoExpansionTile;

readonly title: Widget;
readonly controller: upstream2.ExpansibleController | null;
readonly child: Widget;
readonly transitionMode: upstream3.ExpansionTileTransitionMode;
readonly key: upstream1.Key | null;
createState(): upstream4.State<CupertinoExpansionTile>;
createElement(): upstream5.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream7.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
defineObject("flax.cupertino/cupertino#type:CupertinoExpansionTile", ["title","controller","child","transitionMode","key"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoExpansionTile", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _CupertinoExpansionTileFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; title: Widget; child: Widget; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/expansible.dart::ExpansibleController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; transitionMode?: upstream3.ExpansionTileTransitionMode | undefined }): CupertinoExpansionTile {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoExpansionTile", "", [{"name":"key"},{"name":"title","required":true},{"name":"child","required":true},{"name":"controller"},{"name":"transitionMode"}], [], options) as CupertinoExpansionTile;
}
export declare namespace _CupertinoExpansionTileFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoExpansionTileFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoExpansionTileFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoExpansionTileFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export const CupertinoExpansionTile: typeof _CupertinoExpansionTileFactory & _FlaxInstanceType<CupertinoExpansionTile> & _FlaxDartType<CupertinoExpansionTile, readonly ["class", "flax.cupertino/cupertino#type:CupertinoExpansionTile", readonly [], false]> = _flaxBindInstanceType<CupertinoExpansionTile, typeof _CupertinoExpansionTileFactory>(_CupertinoExpansionTileFactory, "flax.cupertino/cupertino#type:CupertinoExpansionTile", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoExpansionTileFactory & _FlaxInstanceType<CupertinoExpansionTile> & _FlaxDartType<CupertinoExpansionTile, readonly ["class", "flax.cupertino/cupertino#type:CupertinoExpansionTile", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "title" | "controller" | "child" | "transitionMode" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/expansion_tile.dart::CupertinoExpansionTile" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
