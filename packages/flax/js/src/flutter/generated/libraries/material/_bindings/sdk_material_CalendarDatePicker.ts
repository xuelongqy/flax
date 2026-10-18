// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_DatePickerMode';
import '@flax/flutter/material/_bindings/sdk_material_DatePickerMode';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_CalendarDelegate';
import '@flax/flutter/material/_bindings/sdk_material_CalendarDelegate';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CalendarDatePicker extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/calendar_date_picker.dart::CalendarDatePicker": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CalendarDatePicker: unique symbol;
readonly [_flaxDartTypeValue]: CalendarDatePicker;

readonly initialDate: upstream2.DateTime | null;
readonly firstDate: upstream2.DateTime;
readonly lastDate: upstream2.DateTime;
readonly currentDate: upstream2.DateTime;
readonly onDateChanged: ((value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>) => void);
readonly onDisplayedMonthChanged: ((value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>) => void) | null;
readonly initialCalendarMode: upstream3.DatePickerMode;
readonly selectableDayPredicate: ((day: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>) => boolean) | null;
readonly calendarDelegate: upstream4.CalendarDelegate<upstream2.DateTime>;
readonly key: upstream1.Key | null;
createState(): upstream5.State<CalendarDatePicker>;
createElement(): upstream6.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream8.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:CalendarDatePicker", ["initialDate","firstDate","lastDate","currentDate","onDateChanged","onDisplayedMonthChanged","initialCalendarMode","selectableDayPredicate","calendarDelegate","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:CalendarDatePicker", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters1,"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugDescribeChildren":_flaxMemberParameters0}, {}), []);
export function _CalendarDatePickerFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; initialDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null; firstDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; lastDate: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>>; currentDate?: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null | undefined; onDateChanged: ((value: upstream2.DateTime) => void); onDisplayedMonthChanged?: ((value: upstream2.DateTime) => void) | null | undefined; initialCalendarMode?: upstream3.DatePickerMode | undefined; selectableDayPredicate?: ((day: upstream2.DateTime) => boolean) | null | undefined; calendarDelegate?: Readonly<{ "__flaxBound:package:flutter/src/material/date.dart::CalendarDelegate": readonly [upstream2.DateTime] }> | undefined }): CalendarDatePicker {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:CalendarDatePicker", "", [{"name":"key","required":false,"positional":false},{"name":"initialDate","required":true,"positional":false},{"name":"firstDate","required":true,"positional":false},{"name":"lastDate","required":true,"positional":false},{"name":"currentDate","required":false,"positional":false},{"name":"onDateChanged","required":true,"positional":false},{"name":"onDisplayedMonthChanged","required":false,"positional":false},{"name":"initialCalendarMode","required":false,"positional":false},{"name":"selectableDayPredicate","required":false,"positional":false},{"name":"calendarDelegate","required":false,"positional":false}], [], options) as CalendarDatePicker;
}
export const CalendarDatePicker: typeof _CalendarDatePickerFactory & _FlaxInstanceType<CalendarDatePicker> & _FlaxDartType<CalendarDatePicker, readonly ["class", "flax.core/sdk_material#type:CalendarDatePicker", readonly [], false]> = _flaxBindInstanceType<CalendarDatePicker, typeof _CalendarDatePickerFactory>(_CalendarDatePickerFactory, "flax.core/sdk_material#type:CalendarDatePicker", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CalendarDatePickerFactory & _FlaxInstanceType<CalendarDatePicker> & _FlaxDartType<CalendarDatePicker, readonly ["class", "flax.core/sdk_material#type:CalendarDatePicker", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "initialDate" | "firstDate" | "lastDate" | "currentDate" | "onDateChanged" | "onDisplayedMonthChanged" | "initialCalendarMode" | "selectableDayPredicate" | "calendarDelegate" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/calendar_date_picker.dart::CalendarDatePicker" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
