// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartRecord as _FlaxDartRecord } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayPortalController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayPortalController';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayChildLocation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayChildLocation';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverlayPortal extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortal": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __OverlayPortal: unique symbol;
readonly [_flaxDartTypeValue]: OverlayPortal;

readonly controller: upstream2.OverlayPortalController;
readonly overlayChildBuilder: ((context: upstream3.BuildContext) => Widget);
readonly child: Widget | null;
readonly overlayLocation: upstream4.OverlayChildLocation;
readonly key: upstream1.Key | null;
createState(): upstream7.State<OverlayPortal>;
createElement(): upstream8.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream10.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:OverlayPortal", ["controller","overlayChildBuilder","child","overlayLocation","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:OverlayPortal", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _OverlayPortalFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [] }>; overlayChildBuilder: ((context: upstream3.BuildContext) => Widget); overlayLocation?: upstream4.OverlayChildLocation | undefined; child?: Widget | null | undefined }): OverlayPortal {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:OverlayPortal", "", [{"name":"key"},{"name":"controller","required":true},{"name":"overlayChildBuilder","required":true},{"name":"overlayLocation"},{"name":"child"}], [], options) as OverlayPortal;
}
export declare namespace _OverlayPortalFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _OverlayPortalFactory>[0]>), "child"> & ({ "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _OverlayPortalFactory>[0]>)["child"]; children?: never } | { "child"?: never; children?: (globalThis.NonNullable<globalThis.Parameters<typeof _OverlayPortalFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _OverlayPortalFactory {
export function targetsRootOverlay(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [] }>; overlayChildBuilder: ((context: upstream3.BuildContext) => Widget); child?: Widget | null | undefined }): OverlayPortal {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:OverlayPortal", "targetsRootOverlay", [{"name":"key"},{"name":"controller","required":true},{"name":"overlayChildBuilder","required":true},{"name":"child"}], [], options) as OverlayPortal;
}
export declare namespace targetsRootOverlay { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof targetsRootOverlay>[0]>), "child"> & ({ "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof targetsRootOverlay>[0]>)["child"]; children?: never } | { "child"?: never; children?: (globalThis.NonNullable<globalThis.Parameters<typeof targetsRootOverlay>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
}
export namespace _OverlayPortalFactory {
export function overlayChildLayoutBuilder(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; controller: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [] }>; overlayChildBuilder: ((context: upstream3.BuildContext, info: _FlaxDartRecord<{ readonly $1: upstream5.Size; readonly $2: upstream6.Matrix4; readonly $3: upstream5.Size }>) => Widget); overlayLocation?: upstream4.OverlayChildLocation | undefined; child: Widget | null }): OverlayPortal {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:OverlayPortal", "overlayChildLayoutBuilder", [{"name":"key"},{"name":"controller","required":true},{"name":"overlayChildBuilder","required":true},{"name":"overlayLocation"},{"name":"child","required":true}], [], options) as OverlayPortal;
}
export declare namespace overlayChildLayoutBuilder { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof overlayChildLayoutBuilder>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof overlayChildLayoutBuilder>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof overlayChildLayoutBuilder>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
}
export const OverlayPortal: typeof _OverlayPortalFactory & _FlaxInstanceType<OverlayPortal> & _FlaxDartType<OverlayPortal, readonly ["class", "flax.core/sdk_widgets#type:OverlayPortal", readonly [], false]> = _flaxBindInstanceType<OverlayPortal, typeof _OverlayPortalFactory>(_OverlayPortalFactory, "flax.core/sdk_widgets#type:OverlayPortal", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _OverlayPortalFactory & _FlaxInstanceType<OverlayPortal> & _FlaxDartType<OverlayPortal, readonly ["class", "flax.core/sdk_widgets#type:OverlayPortal", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "controller" | "overlayChildBuilder" | "child" | "overlayLocation" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortal" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
