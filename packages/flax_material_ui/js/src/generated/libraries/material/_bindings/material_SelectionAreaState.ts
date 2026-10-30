// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/material-ui/_bindings/material_SelectionArea';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegionState';
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
import { _flaxMemberParameters0, _flaxMemberParameters4, _flaxMemberParameters1, _flaxMemberParameters112 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionAreaState extends Omit<upstream0.State<upstream1.SelectionArea>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.SelectionArea>>, Readonly<{ "__flaxBound:package:material_ui/src/selection_area.dart::SelectionAreaState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.SelectionArea] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SelectionAreaState: unique symbol;
readonly [_flaxDartTypeValue]: SelectionAreaState;

readonly selectableRegion: upstream3.SelectableRegionState;
readonly widget: upstream1.SelectionArea;
readonly context: upstream4.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
build(context: upstream4.BuildContext): Widget;
initState(): void;
didUpdateWidget(oldWidget: upstream1.SelectionArea): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
dispose(): void;
didChangeDependencies(): void;
}
defineObject("flax.material/material#type:SelectionAreaState", ["selectableRegion","widget","context","mounted"], [], _flaxBindingMethods("flax.material/material#type:SelectionAreaState", "object", {"build":_flaxMemberParameters0,"initState":_flaxMemberParameters4,"didUpdateWidget":_flaxMemberParameters1,"reassemble":_flaxMemberParameters4,"setState":_flaxMemberParameters112,"deactivate":_flaxMemberParameters4,"activate":_flaxMemberParameters4,"dispose":_flaxMemberParameters4,"didChangeDependencies":_flaxMemberParameters4}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _SelectionAreaStateFactory(): SelectionAreaState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:SelectionAreaState", "", _flaxMemberParameters4, [], {}) as SelectionAreaState;
}
export const SelectionAreaState: typeof _SelectionAreaStateFactory & _FlaxInstanceType<SelectionAreaState> & _FlaxDartType<SelectionAreaState, readonly ["class", "flax.material/material#type:SelectionAreaState", readonly [], false]> = _flaxBindInstanceType<SelectionAreaState, typeof _SelectionAreaStateFactory>(_SelectionAreaStateFactory, "flax.material/material#type:SelectionAreaState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SelectionAreaStateFactory & _FlaxInstanceType<SelectionAreaState> & _FlaxDartType<SelectionAreaState, readonly ["class", "flax.material/material#type:SelectionAreaState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "selectableRegion" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "build" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "didChangeDependencies" | "__flaxBound:package:material_ui/src/selection_area.dart::SelectionAreaState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
