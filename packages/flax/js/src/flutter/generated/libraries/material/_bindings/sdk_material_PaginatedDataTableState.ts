// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_PaginatedDataTable';
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
import { _flaxMemberParameters2, _flaxMemberParameters0, _flaxMemberParameters220, _flaxMemberParameters9, _flaxMemberParameters102 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PaginatedDataTableState extends Omit<upstream0.State<upstream1.PaginatedDataTable>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.PaginatedDataTable>>, Readonly<{ "__flaxBound:package:flutter/src/material/paginated_data_table.dart::PaginatedDataTableState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.PaginatedDataTable] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PaginatedDataTableState: unique symbol;
readonly [_flaxDartTypeValue]: PaginatedDataTableState;

readonly widget: upstream1.PaginatedDataTable;
readonly context: upstream3.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
initState(): void;
didUpdateWidget(oldWidget: upstream1.PaginatedDataTable): void;
reassemble(): void;
dispose(): void;
pageTo(rowIndex: number): void;
build(context: upstream3.BuildContext): Widget;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
didChangeDependencies(): void;
}
defineObject("flax.core/sdk_material#type:PaginatedDataTableState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_material#type:PaginatedDataTableState", "object", {"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters0,"reassemble":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"pageTo":_flaxMemberParameters220,"build":_flaxMemberParameters9,"setState":_flaxMemberParameters102,"deactivate":_flaxMemberParameters2,"activate":_flaxMemberParameters2,"didChangeDependencies":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _PaginatedDataTableStateFactory(): PaginatedDataTableState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:PaginatedDataTableState", "", _flaxMemberParameters2, [], {}) as PaginatedDataTableState;
}
export const PaginatedDataTableState: typeof _PaginatedDataTableStateFactory & _FlaxInstanceType<PaginatedDataTableState> & _FlaxDartType<PaginatedDataTableState, readonly ["class", "flax.core/sdk_material#type:PaginatedDataTableState", readonly [], false]> = _flaxBindInstanceType<PaginatedDataTableState, typeof _PaginatedDataTableStateFactory>(_PaginatedDataTableStateFactory, "flax.core/sdk_material#type:PaginatedDataTableState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PaginatedDataTableStateFactory & _FlaxInstanceType<PaginatedDataTableState> & _FlaxDartType<PaginatedDataTableState, readonly ["class", "flax.core/sdk_material#type:PaginatedDataTableState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "initState" | "didUpdateWidget" | "reassemble" | "dispose" | "pageTo" | "build" | "setState" | "deactivate" | "activate" | "didChangeDependencies" | "__flaxBound:package:flutter/src/material/paginated_data_table.dart::PaginatedDataTableState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
