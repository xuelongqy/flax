// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
import '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_TimePickerEntryMode';
import '@flax/flutter/material/_bindings/sdk_material_TimePickerEntryMode';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
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
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TimePickerDialog extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/time_picker.dart::TimePickerDialog": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TimePickerDialog: unique symbol;
readonly [_flaxDartTypeValue]: TimePickerDialog;

readonly initialTime: upstream2.TimeOfDay;
readonly cancelText: string | null;
readonly confirmText: string | null;
readonly helpText: string | null;
readonly errorInvalidText: string | null;
readonly hourLabelText: string | null;
readonly minuteLabelText: string | null;
readonly restorationId: string | null;
readonly initialEntryMode: upstream3.TimePickerEntryMode;
readonly orientation: upstream4.Orientation | null;
readonly onEntryModeChanged: ((mode: upstream3.TimePickerEntryMode) => void) | null;
readonly switchToInputEntryModeIcon: upstream5.Icon | null;
readonly switchToTimerEntryModeIcon: upstream5.Icon | null;
readonly emptyInitialInput: boolean;
readonly key: upstream1.Key | null;
createState(): upstream6.State<TimePickerDialog>;
createElement(): upstream7.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:TimePickerDialog", ["initialTime","cancelText","confirmText","helpText","errorInvalidText","hourLabelText","minuteLabelText","restorationId","initialEntryMode","orientation","onEntryModeChanged","switchToInputEntryModeIcon","switchToTimerEntryModeIcon","emptyInitialInput","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:TimePickerDialog", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters1,"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugDescribeChildren":_flaxMemberParameters0}, {}), []);
export function _TimePickerDialogFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; initialTime: Readonly<{ "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.TimeOfDay] }>; cancelText?: string | null | undefined; confirmText?: string | null | undefined; helpText?: string | null | undefined; errorInvalidText?: string | null | undefined; hourLabelText?: string | null | undefined; minuteLabelText?: string | null | undefined; restorationId?: string | null | undefined; initialEntryMode?: upstream3.TimePickerEntryMode | undefined; orientation?: upstream4.Orientation | null | undefined; onEntryModeChanged?: ((mode: upstream3.TimePickerEntryMode) => void) | null | undefined; switchToInputEntryModeIcon?: upstream5.Icon | null | undefined; switchToTimerEntryModeIcon?: upstream5.Icon | null | undefined; emptyInitialInput?: boolean | undefined }): TimePickerDialog {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:TimePickerDialog", "", [{"name":"key","required":false,"positional":false},{"name":"initialTime","required":true,"positional":false},{"name":"cancelText","required":false,"positional":false},{"name":"confirmText","required":false,"positional":false},{"name":"helpText","required":false,"positional":false},{"name":"errorInvalidText","required":false,"positional":false},{"name":"hourLabelText","required":false,"positional":false},{"name":"minuteLabelText","required":false,"positional":false},{"name":"restorationId","required":false,"positional":false},{"name":"initialEntryMode","required":false,"positional":false},{"name":"orientation","required":false,"positional":false},{"name":"onEntryModeChanged","required":false,"positional":false},{"name":"switchToInputEntryModeIcon","required":false,"positional":false},{"name":"switchToTimerEntryModeIcon","required":false,"positional":false},{"name":"emptyInitialInput","required":false,"positional":false}], [], options) as TimePickerDialog;
}
export const TimePickerDialog: typeof _TimePickerDialogFactory & _FlaxInstanceType<TimePickerDialog> & _FlaxDartType<TimePickerDialog, readonly ["class", "flax.core/sdk_material#type:TimePickerDialog", readonly [], false]> = _flaxBindInstanceType<TimePickerDialog, typeof _TimePickerDialogFactory>(_TimePickerDialogFactory, "flax.core/sdk_material#type:TimePickerDialog", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TimePickerDialogFactory & _FlaxInstanceType<TimePickerDialog> & _FlaxDartType<TimePickerDialog, readonly ["class", "flax.core/sdk_material#type:TimePickerDialog", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "initialTime" | "cancelText" | "confirmText" | "helpText" | "errorInvalidText" | "hourLabelText" | "minuteLabelText" | "restorationId" | "initialEntryMode" | "orientation" | "onEntryModeChanged" | "switchToInputEntryModeIcon" | "switchToTimerEntryModeIcon" | "emptyInitialInput" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/time_picker.dart::TimePickerDialog" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
