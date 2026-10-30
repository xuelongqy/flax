// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
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
import { _flaxMemberParameters4 } from "@flax/material-ui/_bindings/material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface UserAccountsDrawerHeader extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:material_ui/src/user_accounts_drawer_header.dart::UserAccountsDrawerHeader": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __UserAccountsDrawerHeader: unique symbol;
readonly [_flaxDartTypeValue]: UserAccountsDrawerHeader;

readonly decoration: upstream2.Decoration | null;
readonly margin: upstream3.EdgeInsetsGeometry | null;
readonly currentAccountPicture: Widget | null;
readonly otherAccountsPictures: DartList<Widget> | null;
readonly currentAccountPictureSize: upstream4.Size;
readonly otherAccountsPicturesSize: upstream4.Size;
readonly accountName: Widget | null;
readonly accountEmail: Widget | null;
readonly onDetailsPressed: (() => void) | null;
readonly arrowColor: upstream5.Color;
readonly key: upstream1.Key | null;
createState(): upstream6.State<UserAccountsDrawerHeader>;
createElement(): upstream7.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
defineObject("flax.material/material#type:UserAccountsDrawerHeader", ["decoration","margin","currentAccountPicture","otherAccountsPictures","currentAccountPictureSize","otherAccountsPicturesSize","accountName","accountEmail","onDetailsPressed","arrowColor","key"], [], _flaxBindingMethods("flax.material/material#type:UserAccountsDrawerHeader", "object", {"createState":_flaxMemberParameters4,"createElement":_flaxMemberParameters4}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _UserAccountsDrawerHeaderFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; decoration?: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; margin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; currentAccountPicture?: Widget | null | undefined; otherAccountsPictures?: DartListInput<Widget, Widget> | null | undefined; currentAccountPictureSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; otherAccountsPicturesSize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; accountName: Widget | null; accountEmail: Widget | null; onDetailsPressed?: (() => void) | null | undefined; arrowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined }): UserAccountsDrawerHeader {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:UserAccountsDrawerHeader", "", [{"name":"key"},{"name":"decoration"},{"name":"margin"},{"name":"currentAccountPicture"},{"name":"otherAccountsPictures"},{"name":"currentAccountPictureSize"},{"name":"otherAccountsPicturesSize"},{"name":"accountName","required":true},{"name":"accountEmail","required":true},{"name":"onDetailsPressed"},{"name":"arrowColor"}], [], options) as UserAccountsDrawerHeader;
}
export declare namespace _UserAccountsDrawerHeaderFactory { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _UserAccountsDrawerHeaderFactory>[0]>); readonly slot: null; readonly many: false; }; }
export const UserAccountsDrawerHeader: typeof _UserAccountsDrawerHeaderFactory & _FlaxInstanceType<UserAccountsDrawerHeader> & _FlaxDartType<UserAccountsDrawerHeader, readonly ["class", "flax.material/material#type:UserAccountsDrawerHeader", readonly [], false]> = _flaxBindInstanceType<UserAccountsDrawerHeader, typeof _UserAccountsDrawerHeaderFactory>(_UserAccountsDrawerHeaderFactory, "flax.material/material#type:UserAccountsDrawerHeader", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _UserAccountsDrawerHeaderFactory & _FlaxInstanceType<UserAccountsDrawerHeader> & _FlaxDartType<UserAccountsDrawerHeader, readonly ["class", "flax.material/material#type:UserAccountsDrawerHeader", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "decoration" | "margin" | "currentAccountPicture" | "otherAccountsPictures" | "currentAccountPictureSize" | "otherAccountsPicturesSize" | "accountName" | "accountEmail" | "onDetailsPressed" | "arrowColor" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/user_accounts_drawer_header.dart::UserAccountsDrawerHeader" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
