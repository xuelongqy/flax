import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream3 from '@flax/flutter/semantics/_bindings/sdk_semantics_AccessibilityFocusBlockType';
import '@flax/flutter/semantics/_bindings/sdk_semantics_AccessibilityFocusBlockType';
import type * as upstream4 from '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
import '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
import type * as upstream5 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHintOverrides';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHintOverrides';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream7 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import type * as upstream8 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsRole';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsRole';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsInputType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsInputType';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsValidationResult';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsValidationResult';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsHitTestBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsHitTestBehavior';
import type * as upstream13 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream14 from '@flax/flutter/semantics/_bindings/sdk_semantics_CustomSemanticsAction';
import '@flax/flutter/semantics/_bindings/sdk_semantics_CustomSemanticsAction';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SemanticsProperties extends Omit<upstream0.DiagnosticableTree, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsProperties": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SemanticsProperties: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsProperties;
}
export interface SemanticsProperties {
    readonly [_flaxDartTypeValue]: SemanticsProperties;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream17.DiagnosticsTreeStyle | null | undefined;
    }): upstream16.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream16.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    get enabled(): boolean | null;
    get checked(): boolean | null;
    get mixed(): boolean | null;
    get expanded(): boolean | null;
    get toggled(): boolean | null;
    get selected(): boolean | null;
    get button(): boolean | null;
    get link(): boolean | null;
    get header(): boolean | null;
    get textField(): boolean | null;
    get slider(): boolean | null;
    get keyboardKey(): boolean | null;
    get readOnly(): boolean | null;
    get focusable(): boolean | null;
    get focused(): boolean | null;
    get accessibilityFocusBlockType(): upstream3.AccessibilityFocusBlockType | null;
    get inMutuallyExclusiveGroup(): boolean | null;
    get hidden(): boolean | null;
    get obscured(): boolean | null;
    get multiline(): boolean | null;
    get scopesRoute(): boolean | null;
    get namesRoute(): boolean | null;
    get image(): boolean | null;
    get liveRegion(): boolean | null;
    get isRequired(): boolean | null;
    get maxValueLength(): number | null;
    get currentValueLength(): number | null;
    get identifier(): string | null;
    get traversalParentIdentifier(): unknown | null;
    get traversalChildIdentifier(): unknown | null;
    get label(): string | null;
    get attributedLabel(): upstream4.AttributedString | null;
    get value(): string | null;
    get attributedValue(): upstream4.AttributedString | null;
    get increasedValue(): string | null;
    get attributedIncreasedValue(): upstream4.AttributedString | null;
    get decreasedValue(): string | null;
    get attributedDecreasedValue(): upstream4.AttributedString | null;
    get hint(): string | null;
    get attributedHint(): upstream4.AttributedString | null;
    get tooltip(): string | null;
    get headingLevel(): number | null;
    get hintOverrides(): upstream5.SemanticsHintOverrides | null;
    get textDirection(): upstream6.TextDirection | null;
    get sortKey(): upstream7.SemanticsSortKey | null;
    get tagForChildren(): upstream8.SemanticsTag | null;
    get linkUrl(): upstream2.Uri | null;
    get onTap(): (() => void) | null;
    get onLongPress(): (() => void) | null;
    get onScrollLeft(): (() => void) | null;
    get onScrollRight(): (() => void) | null;
    get onScrollUp(): (() => void) | null;
    get onScrollDown(): (() => void) | null;
    get onIncrease(): (() => void) | null;
    get onDecrease(): (() => void) | null;
    get onCopy(): (() => void) | null;
    get onCut(): (() => void) | null;
    get onPaste(): (() => void) | null;
    get onMoveCursorForwardByCharacter(): ((extendSelection: boolean) => void) | null;
    get onMoveCursorBackwardByCharacter(): ((extendSelection: boolean) => void) | null;
    get onMoveCursorForwardByWord(): ((extendSelection: boolean) => void) | null;
    get onMoveCursorBackwardByWord(): ((extendSelection: boolean) => void) | null;
    get onSetSelection(): ((selection: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>) => void) | null;
    get onSetText(): ((text: string) => void) | null;
    get onDidGainAccessibilityFocus(): (() => void) | null;
    get onDidLoseAccessibilityFocus(): (() => void) | null;
    get onFocus(): (() => void) | null;
    get onDismiss(): (() => void) | null;
    get onExpand(): (() => void) | null;
    get onCollapse(): (() => void) | null;
    get customSemanticsActions(): DartMap<upstream14.CustomSemanticsAction, (() => void)> | null;
    get role(): upstream9.SemanticsRole | null;
    get controlsNodes(): DartSet<string> | null;
    get validationResult(): upstream11.SemanticsValidationResult;
    get hitTestBehavior(): upstream12.SemanticsHitTestBehavior | null;
    get inputType(): upstream10.SemanticsInputType | null;
    get maxValue(): string | null;
    get minValue(): string | null;
}
export declare abstract class SemanticsProperties extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsProperties>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsProperties;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsProperties", readonly [], false];
    constructor(options?: {
        enabled?: boolean | null | undefined;
        checked?: boolean | null | undefined;
        mixed?: boolean | null | undefined;
        expanded?: boolean | null | undefined;
        selected?: boolean | null | undefined;
        toggled?: boolean | null | undefined;
        button?: boolean | null | undefined;
        link?: boolean | null | undefined;
        linkUrl?: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null | undefined;
        header?: boolean | null | undefined;
        headingLevel?: number | null | undefined;
        textField?: boolean | null | undefined;
        slider?: boolean | null | undefined;
        keyboardKey?: boolean | null | undefined;
        readOnly?: boolean | null | undefined;
        focusable?: boolean | null | undefined;
        focused?: boolean | null | undefined;
        accessibilityFocusBlockType?: upstream3.AccessibilityFocusBlockType | null | undefined;
        inMutuallyExclusiveGroup?: boolean | null | undefined;
        hidden?: boolean | null | undefined;
        obscured?: boolean | null | undefined;
        multiline?: boolean | null | undefined;
        scopesRoute?: boolean | null | undefined;
        namesRoute?: boolean | null | undefined;
        image?: boolean | null | undefined;
        liveRegion?: boolean | null | undefined;
        isRequired?: boolean | null | undefined;
        maxValueLength?: number | null | undefined;
        currentValueLength?: number | null | undefined;
        identifier?: string | null | undefined;
        traversalParentIdentifier?: unknown | null | undefined;
        traversalChildIdentifier?: unknown | null | undefined;
        label?: string | null | undefined;
        attributedLabel?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        value?: string | null | undefined;
        attributedValue?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        increasedValue?: string | null | undefined;
        attributedIncreasedValue?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        decreasedValue?: string | null | undefined;
        attributedDecreasedValue?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        hint?: string | null | undefined;
        tooltip?: string | null | undefined;
        attributedHint?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        hintOverrides?: (Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsHintOverrides": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textDirection?: upstream6.TextDirection | null | undefined;
        sortKey?: (Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream7.SemanticsSortKey];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        tagForChildren?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
        }> | null | undefined;
        role?: upstream9.SemanticsRole | null | undefined;
        controlsNodes?: DartSetInput<string, string> | null | undefined;
        inputType?: upstream10.SemanticsInputType | null | undefined;
        validationResult?: upstream11.SemanticsValidationResult | undefined;
        hitTestBehavior?: upstream12.SemanticsHitTestBehavior | null | undefined;
        onTap?: (() => void) | null | undefined;
        onLongPress?: (() => void) | null | undefined;
        onScrollLeft?: (() => void) | null | undefined;
        onScrollRight?: (() => void) | null | undefined;
        onScrollUp?: (() => void) | null | undefined;
        onScrollDown?: (() => void) | null | undefined;
        onIncrease?: (() => void) | null | undefined;
        onDecrease?: (() => void) | null | undefined;
        onCopy?: (() => void) | null | undefined;
        onCut?: (() => void) | null | undefined;
        onPaste?: (() => void) | null | undefined;
        onMoveCursorForwardByCharacter?: ((extendSelection: boolean) => void) | null | undefined;
        onMoveCursorBackwardByCharacter?: ((extendSelection: boolean) => void) | null | undefined;
        onMoveCursorForwardByWord?: ((extendSelection: boolean) => void) | null | undefined;
        onMoveCursorBackwardByWord?: ((extendSelection: boolean) => void) | null | undefined;
        onSetSelection?: ((selection: upstream13.TextSelection) => void) | null | undefined;
        onSetText?: ((text: string) => void) | null | undefined;
        onDidGainAccessibilityFocus?: (() => void) | null | undefined;
        onDidLoseAccessibilityFocus?: (() => void) | null | undefined;
        onFocus?: (() => void) | null | undefined;
        onDismiss?: (() => void) | null | undefined;
        onExpand?: (() => void) | null | undefined;
        onCollapse?: (() => void) | null | undefined;
        customSemanticsActions?: DartMapInput<upstream14.CustomSemanticsAction, (() => void), Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [];
        }>, (() => void)> | null | undefined;
        minValue?: string | null | undefined;
        maxValue?: string | null | undefined;
    });
}
export declare namespace SemanticsProperties {
    function implement(args: [options?: {
        enabled?: boolean | null | undefined;
        checked?: boolean | null | undefined;
        mixed?: boolean | null | undefined;
        expanded?: boolean | null | undefined;
        selected?: boolean | null | undefined;
        toggled?: boolean | null | undefined;
        button?: boolean | null | undefined;
        link?: boolean | null | undefined;
        linkUrl?: DartInput<Readonly<{
            "__flaxBound:dart:core::Uri": readonly [];
        }>> | null | undefined;
        header?: boolean | null | undefined;
        headingLevel?: number | null | undefined;
        textField?: boolean | null | undefined;
        slider?: boolean | null | undefined;
        keyboardKey?: boolean | null | undefined;
        readOnly?: boolean | null | undefined;
        focusable?: boolean | null | undefined;
        focused?: boolean | null | undefined;
        accessibilityFocusBlockType?: upstream3.AccessibilityFocusBlockType | null | undefined;
        inMutuallyExclusiveGroup?: boolean | null | undefined;
        hidden?: boolean | null | undefined;
        obscured?: boolean | null | undefined;
        multiline?: boolean | null | undefined;
        scopesRoute?: boolean | null | undefined;
        namesRoute?: boolean | null | undefined;
        image?: boolean | null | undefined;
        liveRegion?: boolean | null | undefined;
        isRequired?: boolean | null | undefined;
        maxValueLength?: number | null | undefined;
        currentValueLength?: number | null | undefined;
        identifier?: string | null | undefined;
        traversalParentIdentifier?: unknown | null | undefined;
        traversalChildIdentifier?: unknown | null | undefined;
        label?: string | null | undefined;
        attributedLabel?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        value?: string | null | undefined;
        attributedValue?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        increasedValue?: string | null | undefined;
        attributedIncreasedValue?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        decreasedValue?: string | null | undefined;
        attributedDecreasedValue?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        hint?: string | null | undefined;
        tooltip?: string | null | undefined;
        attributedHint?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
        }> | null | undefined;
        hintOverrides?: (Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsHintOverrides": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textDirection?: upstream6.TextDirection | null | undefined;
        sortKey?: (Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream7.SemanticsSortKey];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        tagForChildren?: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
        }> | null | undefined;
        role?: upstream9.SemanticsRole | null | undefined;
        controlsNodes?: DartSetInput<string, string> | null | undefined;
        inputType?: upstream10.SemanticsInputType | null | undefined;
        validationResult?: upstream11.SemanticsValidationResult | undefined;
        hitTestBehavior?: upstream12.SemanticsHitTestBehavior | null | undefined;
        onTap?: (() => void) | null | undefined;
        onLongPress?: (() => void) | null | undefined;
        onScrollLeft?: (() => void) | null | undefined;
        onScrollRight?: (() => void) | null | undefined;
        onScrollUp?: (() => void) | null | undefined;
        onScrollDown?: (() => void) | null | undefined;
        onIncrease?: (() => void) | null | undefined;
        onDecrease?: (() => void) | null | undefined;
        onCopy?: (() => void) | null | undefined;
        onCut?: (() => void) | null | undefined;
        onPaste?: (() => void) | null | undefined;
        onMoveCursorForwardByCharacter?: ((extendSelection: boolean) => void) | null | undefined;
        onMoveCursorBackwardByCharacter?: ((extendSelection: boolean) => void) | null | undefined;
        onMoveCursorForwardByWord?: ((extendSelection: boolean) => void) | null | undefined;
        onMoveCursorBackwardByWord?: ((extendSelection: boolean) => void) | null | undefined;
        onSetSelection?: ((selection: upstream13.TextSelection) => void) | null | undefined;
        onSetText?: ((text: string) => void) | null | undefined;
        onDidGainAccessibilityFocus?: (() => void) | null | undefined;
        onDidLoseAccessibilityFocus?: (() => void) | null | undefined;
        onFocus?: (() => void) | null | undefined;
        onDismiss?: (() => void) | null | undefined;
        onExpand?: (() => void) | null | undefined;
        onCollapse?: (() => void) | null | undefined;
        customSemanticsActions?: DartMapInput<upstream14.CustomSemanticsAction, (() => void), Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [];
        }>, (() => void)> | null | undefined;
        minValue?: string | null | undefined;
        maxValue?: string | null | undefined;
    }], implementation: {}): SemanticsProperties;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "enabled" | "checked" | "mixed" | "expanded" | "toggled" | "selected" | "button" | "link" | "header" | "textField" | "slider" | "keyboardKey" | "readOnly" | "focusable" | "focused" | "accessibilityFocusBlockType" | "inMutuallyExclusiveGroup" | "hidden" | "obscured" | "multiline" | "scopesRoute" | "namesRoute" | "image" | "liveRegion" | "isRequired" | "maxValueLength" | "currentValueLength" | "identifier" | "traversalParentIdentifier" | "traversalChildIdentifier" | "label" | "attributedLabel" | "value" | "attributedValue" | "increasedValue" | "attributedIncreasedValue" | "decreasedValue" | "attributedDecreasedValue" | "hint" | "attributedHint" | "tooltip" | "headingLevel" | "hintOverrides" | "textDirection" | "sortKey" | "tagForChildren" | "linkUrl" | "onTap" | "onLongPress" | "onScrollLeft" | "onScrollRight" | "onScrollUp" | "onScrollDown" | "onIncrease" | "onDecrease" | "onCopy" | "onCut" | "onPaste" | "onMoveCursorForwardByCharacter" | "onMoveCursorBackwardByCharacter" | "onMoveCursorForwardByWord" | "onMoveCursorBackwardByWord" | "onSetSelection" | "onSetText" | "onDidGainAccessibilityFocus" | "onDidLoseAccessibilityFocus" | "onFocus" | "onDismiss" | "onExpand" | "onCollapse" | "customSemanticsActions" | "role" | "controlsNodes" | "validationResult" | "hitTestBehavior" | "inputType" | "maxValue" | "minValue" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsProperties" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
