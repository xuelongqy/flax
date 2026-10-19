// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters20, _flaxMemberParameters3, _flaxMemberParameters14, _flaxMemberParameters0 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TickerProviderStateMixin<T extends Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> = upstream0.StatefulWidget> extends Omit<upstream1.State<T>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.State<T>>, Omit<upstream3.TickerProvider, _flaxOwnMembers0 | keyof upstream1.State<T> | keyof upstream2.Diagnosticable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> { readonly __TickerProviderStateMixin: unique symbol;
readonly [_flaxDartTypeValue]: TickerProviderStateMixin<T>;

readonly widget: T;
readonly context: upstream4.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createTicker(onTick: ((elapsed: upstream10.Duration) => void)): upstream9.Ticker;
activate(): void;
dispose(): void;
initState(): void;
didUpdateWidget(oldWidget: (T | DartInput<T>)): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
build(context: upstream4.BuildContext): Widget;
didChangeDependencies(): void;
}
defineObject("flax.core/sdk_widgets#type:TickerProviderStateMixin", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TickerProviderStateMixin", "object", {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"createTicker":_flaxMemberParameters20,"activate":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters3,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters14,"deactivate":_flaxMemberParameters2,"build":_flaxMemberParameters0,"didChangeDependencies":_flaxMemberParameters2}, {}), []);
export const TickerProviderStateMixin: object & _FlaxInstanceType<TickerProviderStateMixin<upstream0.StatefulWidget>> & _FlaxDartType<TickerProviderStateMixin<upstream0.StatefulWidget>, readonly ["class", "flax.core/sdk_widgets#type:TickerProviderStateMixin", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<TickerProviderStateMixin<upstream0.StatefulWidget>, object>({}, "flax.core/sdk_widgets#type:TickerProviderStateMixin", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/flutter#type:TickerProvider"]) as object & _FlaxInstanceType<TickerProviderStateMixin<upstream0.StatefulWidget>> & _FlaxDartType<TickerProviderStateMixin<upstream0.StatefulWidget>, readonly ["class", "flax.core/sdk_widgets#type:TickerProviderStateMixin", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(TickerProviderStateMixin, "flax.core/sdk_widgets#type:TickerProviderStateMixin", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createTicker" | "activate" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>] ? {readonly prototype: TickerProviderStateMixin<_Selected0>;} & _FlaxInstanceType<TickerProviderStateMixin<_Selected0>> & _FlaxDartType<TickerProviderStateMixin<_Selected0>> : never : never; }
