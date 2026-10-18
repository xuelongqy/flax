import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsFlags';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsFlags';
import type * as upstream2 from '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
import '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream6 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsRole';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsRole';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsValidationResult';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsValidationResult';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsHitTestBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsHitTestBehavior';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsInputType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsInputType';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream12 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsFlag';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SemanticsData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SemanticsData: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsData;
}
export interface SemanticsData {
    readonly [_flaxDartTypeValue]: SemanticsData;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream14.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream15.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    hasFlag(flag: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlag": readonly [];
    }>): boolean;
    hasAction(action: Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>): boolean;
    get flags(): number;
    get flagsCollection(): upstream1.SemanticsFlags;
    get actions(): number;
    get identifier(): string;
    get traversalParentIdentifier(): unknown | null;
    get traversalChildIdentifier(): unknown | null;
    get label(): string;
    get attributedLabel(): upstream2.AttributedString;
    get value(): string;
    get attributedValue(): upstream2.AttributedString;
    get increasedValue(): string;
    get attributedIncreasedValue(): upstream2.AttributedString;
    get decreasedValue(): string;
    get attributedDecreasedValue(): upstream2.AttributedString;
    get hint(): string;
    get attributedHint(): upstream2.AttributedString;
    get tooltip(): string;
    get headingLevel(): number;
    get textDirection(): upstream3.TextDirection | null;
    get textSelection(): upstream5.TextSelection | null;
    get scrollChildCount(): number | null;
    get scrollIndex(): number | null;
    get scrollPosition(): number | null;
    get scrollExtentMax(): number | null;
    get scrollExtentMin(): number | null;
    get platformViewId(): number | null;
    get maxValueLength(): number | null;
    get currentValueLength(): number | null;
    get linkUrl(): upstream6.Uri | null;
    get rect(): upstream4.Rect;
    get tags(): DartSet<upstream12.SemanticsTag> | null;
    get transform(): upstream13.Matrix4 | null;
    get customSemanticsActionIds(): DartList<number> | null;
    get role(): upstream7.SemanticsRole;
    get controlsNodes(): DartSet<string> | null;
    get validationResult(): upstream8.SemanticsValidationResult;
    get hitTestBehavior(): upstream9.SemanticsHitTestBehavior;
    get inputType(): upstream10.SemanticsInputType;
    get locale(): upstream11.Locale | null;
    get maxValue(): string | null;
    get minValue(): string | null;
}
export declare abstract class SemanticsData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsData", readonly [], false];
    constructor(options: {
        flagsCollection: Readonly<{
            "__flaxBound:dart:ui::SemanticsFlags": readonly [];
        }>;
        actions: number;
        identifier: string;
        traversalParentIdentifier: unknown | null;
        traversalChildIdentifier: unknown | null;
        attributedLabel: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        attributedValue: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        attributedIncreasedValue: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        attributedDecreasedValue: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        attributedHint: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        tooltip: string;
        textDirection: upstream3.TextDirection | null;
        rect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        textSelection: (Readonly<{
            "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>) | null;
        scrollIndex: number | null;
        scrollChildCount: number | null;
        scrollPosition: number | null;
        scrollExtentMax: number | null;
        scrollExtentMin: number | null;
        platformViewId: number | null;
        maxValueLength: number | null;
        currentValueLength: number | null;
        headingLevel: number;
        linkUrl: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null;
        role: upstream7.SemanticsRole;
        controlsNodes: DartSetInput<string, string> | null;
        validationResult: upstream8.SemanticsValidationResult;
        hitTestBehavior: upstream9.SemanticsHitTestBehavior;
        inputType: upstream10.SemanticsInputType;
        locale: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null;
        minValue: string | null;
        maxValue: string | null;
        tags?: DartSetInput<upstream12.SemanticsTag, Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
        }>> | null | undefined;
        transform?: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null | undefined;
        customSemanticsActionIds?: DartListInput<number, number> | null | undefined;
    });
}
export declare namespace SemanticsData {
    function implement(args: [options: {
        flagsCollection: Readonly<{
            "__flaxBound:dart:ui::SemanticsFlags": readonly [];
        }>;
        actions: number;
        identifier: string;
        traversalParentIdentifier: unknown | null;
        traversalChildIdentifier: unknown | null;
        attributedLabel: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        attributedValue: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        attributedIncreasedValue: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        attributedDecreasedValue: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        attributedHint: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }>;
        tooltip: string;
        textDirection: upstream3.TextDirection | null;
        rect: Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
        textSelection: (Readonly<{
            "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>) | null;
        scrollIndex: number | null;
        scrollChildCount: number | null;
        scrollPosition: number | null;
        scrollExtentMax: number | null;
        scrollExtentMin: number | null;
        platformViewId: number | null;
        maxValueLength: number | null;
        currentValueLength: number | null;
        headingLevel: number;
        linkUrl: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null;
        role: upstream7.SemanticsRole;
        controlsNodes: DartSetInput<string, string> | null;
        validationResult: upstream8.SemanticsValidationResult;
        hitTestBehavior: upstream9.SemanticsHitTestBehavior;
        inputType: upstream10.SemanticsInputType;
        locale: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null;
        minValue: string | null;
        maxValue: string | null;
        tags?: DartSetInput<upstream12.SemanticsTag, Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
        }>> | null | undefined;
        transform?: Readonly<{
            "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
        }> | null | undefined;
        customSemanticsActionIds?: DartListInput<number, number> | null | undefined;
    }], implementation: {}): SemanticsData;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "flags" | "flagsCollection" | "actions" | "identifier" | "traversalParentIdentifier" | "traversalChildIdentifier" | "label" | "attributedLabel" | "value" | "attributedValue" | "increasedValue" | "attributedIncreasedValue" | "decreasedValue" | "attributedDecreasedValue" | "hint" | "attributedHint" | "tooltip" | "headingLevel" | "textDirection" | "textSelection" | "scrollChildCount" | "scrollIndex" | "scrollPosition" | "scrollExtentMax" | "scrollExtentMin" | "platformViewId" | "maxValueLength" | "currentValueLength" | "linkUrl" | "rect" | "tags" | "transform" | "customSemanticsActionIds" | "role" | "controlsNodes" | "validationResult" | "hitTestBehavior" | "inputType" | "locale" | "maxValue" | "minValue" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "hasFlag" | "hasAction" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
