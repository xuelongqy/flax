// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
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
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import { _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters190, _flaxMemberParameters191, _flaxMemberParameters192, _flaxMemberParameters193, _flaxMemberParameters3, _flaxMemberParameters14, _flaxMemberParameters0 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorationMixin<S extends Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> = upstream0.StatefulWidget> extends Omit<upstream1.State<S>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.State<S>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [S] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [S] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RestorationMixin: unique symbol;
readonly [_flaxDartTypeValue]: RestorationMixin<S>;

readonly restorationId: string | null;
readonly bucket: upstream3.RestorationBucket | null;
readonly restorePending: boolean;
readonly widget: S;
readonly context: upstream4.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
restoreState(oldBucket: Readonly<{ "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [] }> | null, initialRestore: boolean): void;
didToggleBucket(oldBucket: Readonly<{ "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [] }> | null): void;
registerForRestoration(property: Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, restorationId: string): void;
unregisterFromRestoration(property: Readonly<{ "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): void;
didUpdateRestorationId(): void;
didUpdateWidget(oldWidget: (S | DartInput<S>)): void;
didChangeDependencies(): void;
dispose(): void;
initState(): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
build(context: upstream4.BuildContext): Widget;
}
defineObject("flax.core/sdk_widgets#type:RestorationMixin", ["restorationId","bucket","restorePending","widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RestorationMixin", "object", {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"restoreState":_flaxMemberParameters190,"didToggleBucket":_flaxMemberParameters191,"registerForRestoration":_flaxMemberParameters192,"unregisterFromRestoration":_flaxMemberParameters193,"didUpdateRestorationId":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters3,"didChangeDependencies":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"initState":_flaxMemberParameters2,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters14,"deactivate":_flaxMemberParameters2,"activate":_flaxMemberParameters2,"build":_flaxMemberParameters0}, {}), []);
export const RestorationMixin: object & _FlaxInstanceType<RestorationMixin<upstream0.StatefulWidget>> & _FlaxDartType<RestorationMixin<upstream0.StatefulWidget>, readonly ["class", "flax.core/sdk_widgets#type:RestorationMixin", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<RestorationMixin<upstream0.StatefulWidget>, object>({}, "flax.core/sdk_widgets#type:RestorationMixin", ["flax.core/components#type:State","flax.core/sdk_foundation#type:Diagnosticable","dart:core::Object"]) as object & _FlaxInstanceType<RestorationMixin<upstream0.StatefulWidget>> & _FlaxDartType<RestorationMixin<upstream0.StatefulWidget>, readonly ["class", "flax.core/sdk_widgets#type:RestorationMixin", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(RestorationMixin, "flax.core/sdk_widgets#type:RestorationMixin", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "restorationId" | "bucket" | "restorePending" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "restoreState" | "didToggleBucket" | "registerForRestoration" | "unregisterFromRestoration" | "didUpdateRestorationId" | "didUpdateWidget" | "didChangeDependencies" | "dispose" | "initState" | "reassemble" | "setState" | "deactivate" | "activate" | "build" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>] ? {readonly prototype: RestorationMixin<_Selected0>;} & _FlaxInstanceType<RestorationMixin<_Selected0>> & _FlaxDartType<RestorationMixin<_Selected0>> : never : never; }
