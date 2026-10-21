// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters0, _flaxMemberParameters3, _flaxMemberParameters17 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutomaticKeepAliveClientMixin<T extends Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> = upstream0.StatefulWidget> extends Omit<upstream1.State<T>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.State<T>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AutomaticKeepAliveClientMixin: unique symbol;
readonly [_flaxDartTypeValue]: AutomaticKeepAliveClientMixin<T>;

readonly wantKeepAlive: boolean;
readonly widget: T;
readonly context: upstream3.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
updateKeepAlive(): void;
initState(): void;
deactivate(): void;
build(context: upstream3.BuildContext): Widget;
didUpdateWidget(oldWidget: (T | DartInput<T>)): void;
reassemble(): void;
setState(fn: (() => void)): void;
activate(): void;
dispose(): void;
didChangeDependencies(): void;
}
defineObject("flax.core/sdk_widgets#type:AutomaticKeepAliveClientMixin", ["wantKeepAlive","widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:AutomaticKeepAliveClientMixin", "object", {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"updateKeepAlive":_flaxMemberParameters2,"initState":_flaxMemberParameters2,"deactivate":_flaxMemberParameters2,"build":_flaxMemberParameters0,"didUpdateWidget":_flaxMemberParameters3,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters17,"activate":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"didChangeDependencies":_flaxMemberParameters2}, {}), []);
export const AutomaticKeepAliveClientMixin: object & _FlaxInstanceType<AutomaticKeepAliveClientMixin<upstream0.StatefulWidget>> & _FlaxDartType<AutomaticKeepAliveClientMixin<upstream0.StatefulWidget>, readonly ["class", "flax.core/sdk_widgets#type:AutomaticKeepAliveClientMixin", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<AutomaticKeepAliveClientMixin<upstream0.StatefulWidget>, object>({}, "flax.core/sdk_widgets#type:AutomaticKeepAliveClientMixin", ["flax.core/components#type:State","flax.core/sdk_foundation#type:Diagnosticable","dart:core::Object"]) as object & _FlaxInstanceType<AutomaticKeepAliveClientMixin<upstream0.StatefulWidget>> & _FlaxDartType<AutomaticKeepAliveClientMixin<upstream0.StatefulWidget>, readonly ["class", "flax.core/sdk_widgets#type:AutomaticKeepAliveClientMixin", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(AutomaticKeepAliveClientMixin, "flax.core/sdk_widgets#type:AutomaticKeepAliveClientMixin", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "wantKeepAlive" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "updateKeepAlive" | "initState" | "deactivate" | "build" | "didUpdateWidget" | "reassemble" | "setState" | "activate" | "dispose" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>] ? {readonly prototype: AutomaticKeepAliveClientMixin<_Selected0>;} & _FlaxInstanceType<AutomaticKeepAliveClientMixin<_Selected0>> & _FlaxDartType<AutomaticKeepAliveClientMixin<_Selected0>> : never : never; }
