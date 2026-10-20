import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream3 from '@flax/flutter/semantics/_bindings/sdk_semantics_ChildSemanticsConfigurationsResult';
import '@flax/flutter/semantics/_bindings/sdk_semantics_ChildSemanticsConfigurationsResult';
import type * as upstream4 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import type * as upstream5 from '@flax/flutter/semantics/_bindings/sdk_semantics_CustomSemanticsAction';
import '@flax/flutter/semantics/_bindings/sdk_semantics_CustomSemanticsAction';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsRole';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsRole';
import type * as upstream7 from '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
import '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
import type * as upstream8 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHintOverrides';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHintOverrides';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream10 from '@flax/flutter/semantics/_bindings/sdk_semantics_AccessibilityFocusBlockType';
import '@flax/flutter/semantics/_bindings/sdk_semantics_AccessibilityFocusBlockType';
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsValidationResult';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsValidationResult';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsHitTestBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsHitTestBehavior';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsInputType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsInputType';
import type * as upstream15 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
}> {
    readonly __SemanticsConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsConfiguration;
    get isSemanticBoundary(): boolean;
    get localeForSubtree(): upstream0.Locale | null;
    get locale(): upstream0.Locale | null;
    get isBlockingUserActions(): boolean;
    get explicitChildNodes(): boolean;
    get isBlockingSemanticsOfPreviouslyPaintedNodes(): boolean;
    readonly hasBeenAnnotated: boolean;
    get onTap(): (() => void) | null;
    get onLongPress(): (() => void) | null;
    get onScrollLeft(): (() => void) | null;
    get onDismiss(): (() => void) | null;
    get onScrollRight(): (() => void) | null;
    get onScrollUp(): (() => void) | null;
    get onScrollDown(): (() => void) | null;
    get onScrollToOffset(): ((targetOffset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => void) | null;
    get onIncrease(): (() => void) | null;
    get onDecrease(): (() => void) | null;
    get onCopy(): (() => void) | null;
    get onCut(): (() => void) | null;
    get onPaste(): (() => void) | null;
    get onShowOnScreen(): (() => void) | null;
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
    get onExpand(): (() => void) | null;
    get onCollapse(): (() => void) | null;
    get childConfigurationsDelegate(): ((p0: DartListInput<SemanticsConfiguration, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>>) => upstream3.ChildSemanticsConfigurationsResult) | null;
    get sortKey(): upstream4.SemanticsSortKey | null;
    get indexInParent(): number | null;
    get scrollChildCount(): number | null;
    get scrollIndex(): number | null;
    get platformViewId(): number | null;
    get maxValueLength(): number | null;
    get currentValueLength(): number | null;
    get isMergingSemanticsOfDescendants(): boolean;
    get customSemanticsActions(): DartMap<upstream5.CustomSemanticsAction, (() => void)>;
    get identifier(): string;
    get traversalParentIdentifier(): unknown | null;
    get traversalChildIdentifier(): unknown | null;
    get role(): upstream6.SemanticsRole;
    get label(): string;
    get attributedLabel(): upstream7.AttributedString;
    get value(): string;
    get attributedValue(): upstream7.AttributedString;
    get increasedValue(): string;
    get attributedIncreasedValue(): upstream7.AttributedString;
    get decreasedValue(): string;
    get attributedDecreasedValue(): upstream7.AttributedString;
    get hint(): string;
    get attributedHint(): upstream7.AttributedString;
    get tooltip(): string;
    get hintOverrides(): upstream8.SemanticsHintOverrides | null;
    get scopesRoute(): boolean;
    get namesRoute(): boolean;
    get isImage(): boolean;
    get liveRegion(): boolean;
    get textDirection(): upstream9.TextDirection | null;
    get isSelected(): boolean;
    get isExpanded(): boolean | null;
    get isEnabled(): boolean | null;
    get isChecked(): boolean | null;
    get isCheckStateMixed(): boolean | null;
    get isToggled(): boolean | null;
    get isInMutuallyExclusiveGroup(): boolean;
    get isFocusable(): boolean;
    get isFocused(): boolean | null;
    get accessibilityFocusBlockType(): upstream10.AccessibilityFocusBlockType;
    get isButton(): boolean;
    get isLink(): boolean;
    get linkUrl(): upstream11.Uri | null;
    get isHeader(): boolean;
    get headingLevel(): number;
    get isSlider(): boolean;
    get isKeyboardKey(): boolean;
    get isHidden(): boolean;
    get isTextField(): boolean;
    get isReadOnly(): boolean;
    get isObscured(): boolean;
    get isMultiline(): boolean;
    get isRequired(): boolean | null;
    get hasImplicitScrolling(): boolean;
    get textSelection(): upstream2.TextSelection | null;
    get scrollPosition(): number | null;
    get scrollExtentMax(): number | null;
    get scrollExtentMin(): number | null;
    get controlsNodes(): DartSet<string> | null;
    get validationResult(): upstream12.SemanticsValidationResult;
    get hitTestBehavior(): upstream13.SemanticsHitTestBehavior;
    get inputType(): upstream14.SemanticsInputType;
    get maxValue(): string | null;
    get minValue(): string | null;
    readonly tagsForChildren: DartIterable<upstream15.SemanticsTag> | null;
    getActionHandler(action: Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>): ((args: unknown | null) => void) | null;
    tagsChildrenWith(tag: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>): boolean;
    addTagForChildren(tag: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>): void;
    isCompatibleWith(other: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }> | null): boolean;
    absorb(child: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>): void;
    copy(): SemanticsConfiguration;
    set isSemanticBoundary(value: boolean);
    set localeForSubtree(value: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null);
    set locale(value: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null);
    set isBlockingUserActions(value: boolean);
    set explicitChildNodes(value: boolean);
    set isBlockingSemanticsOfPreviouslyPaintedNodes(value: boolean);
    set onTap(value: (() => void) | null);
    set onLongPress(value: (() => void) | null);
    set onScrollLeft(value: (() => void) | null);
    set onDismiss(value: (() => void) | null);
    set onScrollRight(value: (() => void) | null);
    set onScrollUp(value: (() => void) | null);
    set onScrollDown(value: (() => void) | null);
    set onScrollToOffset(value: ((targetOffset: upstream1.Offset) => void) | null);
    set onIncrease(value: (() => void) | null);
    set onDecrease(value: (() => void) | null);
    set onCopy(value: (() => void) | null);
    set onCut(value: (() => void) | null);
    set onPaste(value: (() => void) | null);
    set onShowOnScreen(value: (() => void) | null);
    set onMoveCursorForwardByCharacter(value: ((extendSelection: boolean) => void) | null);
    set onMoveCursorBackwardByCharacter(value: ((extendSelection: boolean) => void) | null);
    set onMoveCursorForwardByWord(value: ((extendSelection: boolean) => void) | null);
    set onMoveCursorBackwardByWord(value: ((extendSelection: boolean) => void) | null);
    set onSetSelection(value: ((selection: upstream2.TextSelection) => void) | null);
    set onSetText(value: ((text: string) => void) | null);
    set onDidGainAccessibilityFocus(value: (() => void) | null);
    set onDidLoseAccessibilityFocus(value: (() => void) | null);
    set onFocus(value: (() => void) | null);
    set onExpand(value: (() => void) | null);
    set onCollapse(value: (() => void) | null);
    set childConfigurationsDelegate(value: ((p0: DartList<SemanticsConfiguration>) => Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::ChildSemanticsConfigurationsResult": readonly [];
    }>) | null);
    set sortKey(value: (Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream4.SemanticsSortKey];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set indexInParent(value: number | null);
    set scrollChildCount(value: number | null);
    set scrollIndex(value: number | null);
    set platformViewId(value: number | null);
    set maxValueLength(value: number | null);
    set currentValueLength(value: number | null);
    set isMergingSemanticsOfDescendants(value: boolean);
    set customSemanticsActions(value: DartMapInput<upstream5.CustomSemanticsAction, (() => void), Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [];
    }>, (() => void)>);
    set identifier(value: string);
    set traversalParentIdentifier(value: unknown | null);
    set traversalChildIdentifier(value: unknown | null);
    set role(value: upstream6.SemanticsRole);
    set label(value: string);
    set attributedLabel(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set value(value: string);
    set attributedValue(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set increasedValue(value: string);
    set attributedIncreasedValue(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set decreasedValue(value: string);
    set attributedDecreasedValue(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set hint(value: string);
    set attributedHint(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set tooltip(value: string);
    set hintOverrides(value: (Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsHintOverrides": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set scopesRoute(value: boolean);
    set namesRoute(value: boolean);
    set isImage(value: boolean);
    set liveRegion(value: boolean);
    set textDirection(value: upstream9.TextDirection | null);
    set isSelected(value: boolean);
    set isExpanded(value: boolean | null);
    set isEnabled(value: boolean | null);
    set isChecked(value: boolean | null);
    set isCheckStateMixed(value: boolean | null);
    set isToggled(value: boolean | null);
    set isInMutuallyExclusiveGroup(value: boolean);
    set isFocusable(value: boolean);
    set isFocused(value: boolean | null);
    set accessibilityFocusBlockType(value: upstream10.AccessibilityFocusBlockType);
    set isButton(value: boolean);
    set isLink(value: boolean);
    set linkUrl(value: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>> | null);
    set isHeader(value: boolean);
    set headingLevel(value: number);
    set isSlider(value: boolean);
    set isKeyboardKey(value: boolean);
    set isHidden(value: boolean);
    set isTextField(value: boolean);
    set isReadOnly(value: boolean);
    set isObscured(value: boolean);
    set isMultiline(value: boolean);
    set isRequired(value: boolean | null);
    set hasImplicitScrolling(value: boolean);
    set textSelection(value: (Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>) | null);
    set scrollPosition(value: number | null);
    set scrollExtentMax(value: number | null);
    set scrollExtentMin(value: number | null);
    set controlsNodes(value: DartSetInput<string, string> | null);
    set validationResult(value: upstream12.SemanticsValidationResult);
    set hitTestBehavior(value: upstream13.SemanticsHitTestBehavior);
    set inputType(value: upstream14.SemanticsInputType);
    set maxValue(value: string | null);
    set minValue(value: string | null);
}
export declare function _SemanticsConfigurationFactory(): SemanticsConfiguration;
export interface _SemanticsConfigurationNative extends SemanticsConfiguration {
    readonly [_flaxDartTypeValue]: _SemanticsConfigurationNative;
    getActionHandler(action: Readonly<{
        "__flaxBound:dart:ui::SemanticsAction": readonly [];
    }>): ((args: unknown | null) => void) | null;
    tagsChildrenWith(tag: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>): boolean;
    addTagForChildren(tag: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>): void;
    isCompatibleWith(other: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }> | null): boolean;
    absorb(child: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>): void;
    copy(): SemanticsConfiguration;
    get isSemanticBoundary(): boolean;
    get localeForSubtree(): upstream0.Locale | null;
    get locale(): upstream0.Locale | null;
    get isBlockingUserActions(): boolean;
    get explicitChildNodes(): boolean;
    get isBlockingSemanticsOfPreviouslyPaintedNodes(): boolean;
    get hasBeenAnnotated(): boolean;
    get onTap(): (() => void) | null;
    get onLongPress(): (() => void) | null;
    get onScrollLeft(): (() => void) | null;
    get onDismiss(): (() => void) | null;
    get onScrollRight(): (() => void) | null;
    get onScrollUp(): (() => void) | null;
    get onScrollDown(): (() => void) | null;
    get onScrollToOffset(): ((targetOffset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) => void) | null;
    get onIncrease(): (() => void) | null;
    get onDecrease(): (() => void) | null;
    get onCopy(): (() => void) | null;
    get onCut(): (() => void) | null;
    get onPaste(): (() => void) | null;
    get onShowOnScreen(): (() => void) | null;
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
    get onExpand(): (() => void) | null;
    get onCollapse(): (() => void) | null;
    get childConfigurationsDelegate(): ((p0: DartListInput<SemanticsConfiguration, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
    }>>) => upstream3.ChildSemanticsConfigurationsResult) | null;
    get sortKey(): upstream4.SemanticsSortKey | null;
    get indexInParent(): number | null;
    get scrollChildCount(): number | null;
    get scrollIndex(): number | null;
    get platformViewId(): number | null;
    get maxValueLength(): number | null;
    get currentValueLength(): number | null;
    get isMergingSemanticsOfDescendants(): boolean;
    get customSemanticsActions(): DartMap<upstream5.CustomSemanticsAction, (() => void)>;
    get identifier(): string;
    get traversalParentIdentifier(): unknown | null;
    get traversalChildIdentifier(): unknown | null;
    get role(): upstream6.SemanticsRole;
    get label(): string;
    get attributedLabel(): upstream7.AttributedString;
    get value(): string;
    get attributedValue(): upstream7.AttributedString;
    get increasedValue(): string;
    get attributedIncreasedValue(): upstream7.AttributedString;
    get decreasedValue(): string;
    get attributedDecreasedValue(): upstream7.AttributedString;
    get hint(): string;
    get attributedHint(): upstream7.AttributedString;
    get tooltip(): string;
    get hintOverrides(): upstream8.SemanticsHintOverrides | null;
    get scopesRoute(): boolean;
    get namesRoute(): boolean;
    get isImage(): boolean;
    get liveRegion(): boolean;
    get textDirection(): upstream9.TextDirection | null;
    get isSelected(): boolean;
    get isExpanded(): boolean | null;
    get isEnabled(): boolean | null;
    get isChecked(): boolean | null;
    get isCheckStateMixed(): boolean | null;
    get isToggled(): boolean | null;
    get isInMutuallyExclusiveGroup(): boolean;
    get isFocusable(): boolean;
    get isFocused(): boolean | null;
    get accessibilityFocusBlockType(): upstream10.AccessibilityFocusBlockType;
    get isButton(): boolean;
    get isLink(): boolean;
    get linkUrl(): upstream11.Uri | null;
    get isHeader(): boolean;
    get headingLevel(): number;
    get isSlider(): boolean;
    get isKeyboardKey(): boolean;
    get isHidden(): boolean;
    get isTextField(): boolean;
    get isReadOnly(): boolean;
    get isObscured(): boolean;
    get isMultiline(): boolean;
    get isRequired(): boolean | null;
    get hasImplicitScrolling(): boolean;
    get textSelection(): upstream2.TextSelection | null;
    get scrollPosition(): number | null;
    get scrollExtentMax(): number | null;
    get scrollExtentMin(): number | null;
    get controlsNodes(): DartSet<string> | null;
    get validationResult(): upstream12.SemanticsValidationResult;
    get hitTestBehavior(): upstream13.SemanticsHitTestBehavior;
    get inputType(): upstream14.SemanticsInputType;
    get maxValue(): string | null;
    get minValue(): string | null;
    get tagsForChildren(): DartIterable<upstream15.SemanticsTag> | null;
    set isSemanticBoundary(value: boolean);
    set localeForSubtree(value: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null);
    set locale(value: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null);
    set isBlockingUserActions(value: boolean);
    set explicitChildNodes(value: boolean);
    set isBlockingSemanticsOfPreviouslyPaintedNodes(value: boolean);
    set onTap(value: (() => void) | null);
    set onLongPress(value: (() => void) | null);
    set onScrollLeft(value: (() => void) | null);
    set onDismiss(value: (() => void) | null);
    set onScrollRight(value: (() => void) | null);
    set onScrollUp(value: (() => void) | null);
    set onScrollDown(value: (() => void) | null);
    set onScrollToOffset(value: ((targetOffset: upstream1.Offset) => void) | null);
    set onIncrease(value: (() => void) | null);
    set onDecrease(value: (() => void) | null);
    set onCopy(value: (() => void) | null);
    set onCut(value: (() => void) | null);
    set onPaste(value: (() => void) | null);
    set onShowOnScreen(value: (() => void) | null);
    set onMoveCursorForwardByCharacter(value: ((extendSelection: boolean) => void) | null);
    set onMoveCursorBackwardByCharacter(value: ((extendSelection: boolean) => void) | null);
    set onMoveCursorForwardByWord(value: ((extendSelection: boolean) => void) | null);
    set onMoveCursorBackwardByWord(value: ((extendSelection: boolean) => void) | null);
    set onSetSelection(value: ((selection: upstream2.TextSelection) => void) | null);
    set onSetText(value: ((text: string) => void) | null);
    set onDidGainAccessibilityFocus(value: (() => void) | null);
    set onDidLoseAccessibilityFocus(value: (() => void) | null);
    set onFocus(value: (() => void) | null);
    set onExpand(value: (() => void) | null);
    set onCollapse(value: (() => void) | null);
    set childConfigurationsDelegate(value: ((p0: DartList<SemanticsConfiguration>) => Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::ChildSemanticsConfigurationsResult": readonly [];
    }>) | null);
    set sortKey(value: (Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsSortKey": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream4.SemanticsSortKey];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set indexInParent(value: number | null);
    set scrollChildCount(value: number | null);
    set scrollIndex(value: number | null);
    set platformViewId(value: number | null);
    set maxValueLength(value: number | null);
    set currentValueLength(value: number | null);
    set isMergingSemanticsOfDescendants(value: boolean);
    set customSemanticsActions(value: DartMapInput<upstream5.CustomSemanticsAction, (() => void), Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::CustomSemanticsAction": readonly [];
    }>, (() => void)>);
    set identifier(value: string);
    set traversalParentIdentifier(value: unknown | null);
    set traversalChildIdentifier(value: unknown | null);
    set role(value: upstream6.SemanticsRole);
    set label(value: string);
    set attributedLabel(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set value(value: string);
    set attributedValue(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set increasedValue(value: string);
    set attributedIncreasedValue(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set decreasedValue(value: string);
    set attributedDecreasedValue(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set hint(value: string);
    set attributedHint(value: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::AttributedString": readonly [];
    }>);
    set tooltip(value: string);
    set hintOverrides(value: (Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsHintOverrides": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set scopesRoute(value: boolean);
    set namesRoute(value: boolean);
    set isImage(value: boolean);
    set liveRegion(value: boolean);
    set textDirection(value: upstream9.TextDirection | null);
    set isSelected(value: boolean);
    set isExpanded(value: boolean | null);
    set isEnabled(value: boolean | null);
    set isChecked(value: boolean | null);
    set isCheckStateMixed(value: boolean | null);
    set isToggled(value: boolean | null);
    set isInMutuallyExclusiveGroup(value: boolean);
    set isFocusable(value: boolean);
    set isFocused(value: boolean | null);
    set accessibilityFocusBlockType(value: upstream10.AccessibilityFocusBlockType);
    set isButton(value: boolean);
    set isLink(value: boolean);
    set linkUrl(value: DartInput<Readonly<{
        "__flaxBound:dart:core::Uri": readonly [];
    }>> | null);
    set isHeader(value: boolean);
    set headingLevel(value: number);
    set isSlider(value: boolean);
    set isKeyboardKey(value: boolean);
    set isHidden(value: boolean);
    set isTextField(value: boolean);
    set isReadOnly(value: boolean);
    set isObscured(value: boolean);
    set isMultiline(value: boolean);
    set isRequired(value: boolean | null);
    set hasImplicitScrolling(value: boolean);
    set textSelection(value: (Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>) | null);
    set scrollPosition(value: number | null);
    set scrollExtentMax(value: number | null);
    set scrollExtentMin(value: number | null);
    set controlsNodes(value: DartSetInput<string, string> | null);
    set validationResult(value: upstream12.SemanticsValidationResult);
    set hitTestBehavior(value: upstream13.SemanticsHitTestBehavior);
    set inputType(value: upstream14.SemanticsInputType);
    set maxValue(value: string | null);
    set minValue(value: string | null);
}
export declare abstract class _SemanticsConfigurationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsConfiguration", readonly [], false];
    constructor();
}
export declare namespace _SemanticsConfigurationFactory {
    function implement(args: [], implementation: {}): SemanticsConfiguration;
}
declare const _SemanticsConfigurationBinding: typeof _SemanticsConfigurationFactory & (new () => _SemanticsConfigurationNative);
export declare const SemanticsConfiguration: typeof _SemanticsConfigurationBinding & _FlaxInstanceType<SemanticsConfiguration> & _FlaxDartType<SemanticsConfiguration, readonly ["class", "flax.core/sdk_semantics#type:SemanticsConfiguration", readonly [], false]>;
export {};
