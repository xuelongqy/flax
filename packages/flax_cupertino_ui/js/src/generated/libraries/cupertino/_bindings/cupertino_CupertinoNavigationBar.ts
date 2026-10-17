// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"joiner","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import '@flax/flutter/cupertino/_bindings/cupertino_ObstructingPreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Border';
import '@flax/flutter/widgets/_bindings/flutter_Border';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsDirectional';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsDirectional';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoNavigationBar extends _FlaxDartWidget, upstream0.StatefulWidget, Omit<upstream1.ObstructingPreferredSizeWidget, 'kind'> { readonly __CupertinoNavigationBar: unique symbol;

readonly preferredSize: upstream7.Size;
readonly largeTitle: Widget | null;
readonly leading: Widget | null;
readonly automaticallyImplyLeading: boolean;
readonly automaticallyImplyMiddle: boolean;
readonly previousPageTitle: string | null;
readonly middle: Widget | null;
readonly trailing: Widget | null;
readonly backgroundColor: upstream4.Color | null;
readonly automaticBackgroundVisibility: boolean;
readonly padding: upstream5.EdgeInsetsDirectional | null;
readonly border: upstream3.Border | null;
readonly transitionBetweenRoutes: boolean;
readonly enableBackgroundFilterBlur: boolean;
readonly heroTag: {};
readonly bottom: upstream6.PreferredSizeWidget | null;
readonly key: upstream2.Key | null;
shouldFullyObstruct(context: upstream8.BuildContext): boolean;
createState(): upstream9.State<CupertinoNavigationBar>;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
}
defineObject("flax.cupertino/cupertino#type:CupertinoNavigationBar", ["preferredSize","largeTitle","leading","automaticallyImplyLeading","automaticallyImplyMiddle","previousPageTitle","middle","trailing","backgroundColor","automaticBackgroundVisibility","padding","border","transitionBetweenRoutes","enableBackgroundFilterBlur","heroTag","bottom","key"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoNavigationBar", "object", {"shouldFullyObstruct":_flaxMemberParameters0,"createState":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters1,"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3}, {}), []);
export function _CupertinoNavigationBarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; leading?: Widget | null | undefined; automaticallyImplyLeading?: boolean | undefined; automaticallyImplyMiddle?: boolean | undefined; previousPageTitle?: string | null | undefined; middle?: Widget | null | undefined; trailing?: Widget | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; automaticBackgroundVisibility?: boolean | undefined; enableBackgroundFilterBlur?: boolean | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> | null | undefined; transitionBetweenRoutes?: boolean | undefined; heroTag?: {} | undefined; bottom?: upstream6.PreferredSizeWidget | null | undefined } = {}): CupertinoNavigationBar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoNavigationBar", "", [{"name":"key","fixed":true,"required":false,"positional":false},{"name":"leading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyLeading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyMiddle","fixed":true,"required":false,"positional":false},{"name":"previousPageTitle","fixed":true,"required":false,"positional":false},{"name":"middle","fixed":true,"required":false,"positional":false},{"name":"trailing","fixed":true,"required":false,"positional":false},{"name":"border","fixed":true,"required":false,"positional":false},{"name":"backgroundColor","fixed":true,"required":false,"positional":false},{"name":"automaticBackgroundVisibility","fixed":true,"required":false,"positional":false},{"name":"enableBackgroundFilterBlur","fixed":true,"required":false,"positional":false},{"name":"padding","fixed":true,"required":false,"positional":false},{"name":"transitionBetweenRoutes","fixed":true,"required":false,"positional":false},{"name":"heroTag","fixed":true,"required":false,"positional":false},{"name":"bottom","fixed":true,"required":false,"positional":false}], [], options) as CupertinoNavigationBar;
}
export namespace _CupertinoNavigationBarFactory {
export function large(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; largeTitle?: Widget | null | undefined; leading?: Widget | null | undefined; automaticallyImplyLeading?: boolean | undefined; automaticallyImplyTitle?: boolean | undefined; previousPageTitle?: string | null | undefined; trailing?: Widget | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; automaticBackgroundVisibility?: boolean | undefined; enableBackgroundFilterBlur?: boolean | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> | null | undefined; transitionBetweenRoutes?: boolean | undefined; heroTag?: {} | undefined; bottom?: upstream6.PreferredSizeWidget | null | undefined } = {}): CupertinoNavigationBar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoNavigationBar", "large", [{"name":"key","fixed":true,"required":false,"positional":false},{"name":"largeTitle","fixed":true,"required":false,"positional":false},{"name":"leading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyLeading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyTitle","fixed":true,"required":false,"positional":false},{"name":"previousPageTitle","fixed":true,"required":false,"positional":false},{"name":"trailing","fixed":true,"required":false,"positional":false},{"name":"border","fixed":true,"required":false,"positional":false},{"name":"backgroundColor","fixed":true,"required":false,"positional":false},{"name":"automaticBackgroundVisibility","fixed":true,"required":false,"positional":false},{"name":"enableBackgroundFilterBlur","fixed":true,"required":false,"positional":false},{"name":"padding","fixed":true,"required":false,"positional":false},{"name":"transitionBetweenRoutes","fixed":true,"required":false,"positional":false},{"name":"heroTag","fixed":true,"required":false,"positional":false},{"name":"bottom","fixed":true,"required":false,"positional":false}], [], options) as CupertinoNavigationBar;
}
}
export const CupertinoNavigationBar: typeof _CupertinoNavigationBarFactory & _FlaxInstanceType<CupertinoNavigationBar> & _FlaxDartType<CupertinoNavigationBar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoNavigationBar", readonly [], false]> = _flaxBindInstanceType<CupertinoNavigationBar, typeof _CupertinoNavigationBarFactory>(_CupertinoNavigationBarFactory, "flax.cupertino/cupertino#type:CupertinoNavigationBar", ["flax.core/components#type:StatefulWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable","flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget","flax.core/flutter#type:PreferredSizeWidget"]) as typeof _CupertinoNavigationBarFactory & _FlaxInstanceType<CupertinoNavigationBar> & _FlaxDartType<CupertinoNavigationBar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoNavigationBar", readonly [], false]>;
