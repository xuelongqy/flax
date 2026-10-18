// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipTriggerMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipTriggerMode';
import type * as upstream6 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipPositionContext';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TooltipPositionContext';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawTooltip extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::RawTooltip": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawTooltip: unique symbol;
readonly [_flaxDartTypeValue]: RawTooltip;

readonly semanticsTooltip: string | null;
readonly tooltipBuilder: ((context: upstream2.BuildContext, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>) => Widget);
readonly hoverDelay: upstream4.Duration;
readonly touchDelay: upstream4.Duration;
readonly dismissDelay: upstream4.Duration;
readonly enableTapToDismiss: boolean;
readonly triggerMode: upstream5.TooltipTriggerMode;
readonly enableFeedback: boolean;
readonly onTriggered: (() => void) | null;
readonly animationStyle: upstream6.AnimationStyle;
readonly positionDelegate: ((context: Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::TooltipPositionContext": readonly [] }>) => upstream7.Offset) | null;
readonly ignorePointer: boolean;
readonly child: Widget;
readonly key: upstream1.Key | null;
createState(): upstream9.State<RawTooltip>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream11.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream12.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream12.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream14.DiagnosticsTreeStyle | null | undefined}): upstream13.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream13.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:RawTooltip", ["semanticsTooltip","tooltipBuilder","hoverDelay","touchDelay","dismissDelay","enableTapToDismiss","triggerMode","enableFeedback","onTriggered","animationStyle","positionDelegate","ignorePointer","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RawTooltip", "object", {"createState":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters1,"createElement":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugDescribeChildren":_flaxMemberParameters0}, {}), []);
export function _RawTooltipFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; semanticsTooltip: string | null; tooltipBuilder: ((context: upstream2.BuildContext, animation: upstream3.Animation<number>) => Widget); hoverDelay?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }> | undefined; touchDelay?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }> | undefined; dismissDelay?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }> | undefined; enableTapToDismiss?: boolean | undefined; triggerMode?: upstream5.TooltipTriggerMode | undefined; enableFeedback?: boolean | undefined; onTriggered?: (() => void) | null | undefined; animationStyle?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; positionDelegate?: ((context: upstream8.TooltipPositionContext) => Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) | null | undefined; ignorePointer?: boolean | undefined; child: Widget }): RawTooltip {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RawTooltip", "", [{"name":"key","required":false,"positional":false},{"name":"semanticsTooltip","required":true,"positional":false},{"name":"tooltipBuilder","required":true,"positional":false},{"name":"hoverDelay","required":false,"positional":false},{"name":"touchDelay","required":false,"positional":false},{"name":"dismissDelay","required":false,"positional":false},{"name":"enableTapToDismiss","required":false,"positional":false},{"name":"triggerMode","required":false,"positional":false},{"name":"enableFeedback","required":false,"positional":false},{"name":"onTriggered","required":false,"positional":false},{"name":"animationStyle","required":false,"positional":false},{"name":"positionDelegate","required":false,"positional":false},{"name":"ignorePointer","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as RawTooltip;
}
export namespace _RawTooltipFactory { export function dismissAllToolTips(): boolean {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:RawTooltip.dismissAllToolTips", []);
return _flaxResult as boolean;
} }
export const RawTooltip: typeof _RawTooltipFactory & _FlaxInstanceType<RawTooltip> & _FlaxDartType<RawTooltip, readonly ["class", "flax.core/sdk_widgets#type:RawTooltip", readonly [], false]> = _flaxBindInstanceType<RawTooltip, typeof _RawTooltipFactory>(_RawTooltipFactory, "flax.core/sdk_widgets#type:RawTooltip", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RawTooltipFactory & _FlaxInstanceType<RawTooltip> & _FlaxDartType<RawTooltip, readonly ["class", "flax.core/sdk_widgets#type:RawTooltip", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "semanticsTooltip" | "tooltipBuilder" | "hoverDelay" | "touchDelay" | "dismissDelay" | "enableTapToDismiss" | "triggerMode" | "enableFeedback" | "onTriggered" | "animationStyle" | "positionDelegate" | "ignorePointer" | "child" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::RawTooltip" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
