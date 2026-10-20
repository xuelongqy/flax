import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTreeMixin';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsOwner';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsOwner';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsTag';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsFlags';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsFlags';
import type * as upstream9 from '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
import '@flax/flutter/semantics/_bindings/sdk_semantics_AttributedString';
import type * as upstream10 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHintOverrides';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHintOverrides';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream12 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsSortKey';
import type * as upstream13 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream14 from '@flax/dart/core/_bindings/flutter_Uri';
import '@flax/dart/core/_bindings/flutter_Uri';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsRole';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsRole';
import type * as upstream16 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsValidationResult';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsValidationResult';
import type * as upstream17 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsHitTestBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsHitTestBehavior';
import type * as upstream18 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsInputType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsInputType';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/semantics/_bindings/sdk_semantics_DebugSemanticsDumpOrder';
import '@flax/flutter/semantics/_bindings/sdk_semantics_DebugSemanticsDumpOrder';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsFlag';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsConfiguration';
import type * as upstream26 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsData';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsData';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsEvent';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsNode extends Omit<upstream0.DiagnosticableTreeMixin, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DiagnosticableTreeMixin | keyof upstream1.DiagnosticableTree>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SemanticsNode: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsNode;
    readonly key: upstream3.Key | null;
    readonly id: number;
    get transform(): upstream5.Matrix4 | null;
    get rect(): upstream6.Rect;
    get parentSemanticsClipRect(): upstream6.Rect | null;
    get parentPaintClipRect(): upstream6.Rect | null;
    get indexInParent(): number | null;
    readonly isInvisible: boolean;
    get isMergedIntoParent(): boolean;
    get areUserActionsBlocked(): boolean;
    readonly isPartOfNodeMerging: boolean;
    readonly mergeAllDescendantsIntoThisNode: boolean;
    readonly hasChildren: boolean;
    readonly childrenCount: number;
    readonly childrenCountInTraversalOrder: number;
    readonly owner: upstream4.SemanticsOwner | null;
    readonly attached: boolean;
    readonly parent: SemanticsNode | null;
    get traversalParent(): SemanticsNode | null;
    readonly depth: number;
    get tags(): DartSet<upstream7.SemanticsTag> | null;
    readonly flagsCollection: upstream8.SemanticsFlags;
    readonly identifier: string;
    readonly traversalParentIdentifier: unknown | null;
    readonly traversalChildIdentifier: unknown | null;
    readonly label: string;
    readonly attributedLabel: upstream9.AttributedString;
    readonly value: string;
    readonly attributedValue: upstream9.AttributedString;
    readonly increasedValue: string;
    readonly attributedIncreasedValue: upstream9.AttributedString;
    readonly decreasedValue: string;
    readonly attributedDecreasedValue: upstream9.AttributedString;
    readonly hint: string;
    readonly attributedHint: upstream9.AttributedString;
    readonly tooltip: string;
    readonly hintOverrides: upstream10.SemanticsHintOverrides | null;
    readonly textDirection: upstream11.TextDirection | null;
    readonly sortKey: upstream12.SemanticsSortKey | null;
    readonly textSelection: upstream13.TextSelection | null;
    readonly isMultiline: boolean | null;
    readonly scrollChildCount: number | null;
    readonly scrollIndex: number | null;
    readonly scrollPosition: number | null;
    readonly scrollExtentMax: number | null;
    readonly scrollExtentMin: number | null;
    readonly platformViewId: number | null;
    readonly maxValueLength: number | null;
    readonly currentValueLength: number | null;
    readonly headingLevel: number;
    readonly linkUrl: upstream14.Uri | null;
    readonly role: upstream15.SemanticsRole;
    readonly controlsNodes: DartSet<string> | null;
    readonly minValue: string | null;
    readonly maxValue: string | null;
    readonly validationResult: upstream16.SemanticsValidationResult;
    readonly hitTestBehavior: upstream17.SemanticsHitTestBehavior;
    readonly inputType: upstream18.SemanticsInputType;
    toString(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        childOrder?: upstream20.DebugSemanticsDumpOrder | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        childOrder?: upstream20.DebugSemanticsDumpOrder | undefined;
        name?: string | null | undefined;
        style?: upstream22.DiagnosticsTreeStyle | null | undefined;
    }): upstream21.DiagnosticsNode;
    debugDescribeChildren(options?: {
        childOrder?: upstream20.DebugSemanticsDumpOrder | undefined;
    }): DartList<upstream21.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    visitChildren(visitor: ((node: SemanticsNode) => boolean)): void;
    isTagged(tag: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>): boolean;
    hasFlag(flag: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlag": readonly [];
    }>): boolean;
    updateWith(options: {
        childrenInInversePaintOrder?: DartListInput<SemanticsNode, Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
        config: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
        }> | null;
    }): void;
    getSemanticsData(): upstream26.SemanticsData;
    sendEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
    }>): void;
    debugListChildrenInOrder(childOrder: upstream20.DebugSemanticsDumpOrder): DartList<SemanticsNode>;
    set transform(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null);
    set rect(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>);
    set parentSemanticsClipRect(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null);
    set parentPaintClipRect(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null);
    set indexInParent(value: number | null);
    set isMergedIntoParent(value: boolean);
    set areUserActionsBlocked(value: boolean);
    set traversalParent(value: (Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set tags(value: DartSetInput<upstream7.SemanticsTag, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>> | null);
}
export declare function _SemanticsNodeFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    showOnScreen?: (() => void) | null | undefined;
}): SemanticsNode;
export declare namespace _SemanticsNodeFactory {
    function root(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        showOnScreen?: (() => void) | null | undefined;
        owner: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsOwner": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
    }): SemanticsNode;
}
export interface _SemanticsNodeNative extends SemanticsNode {
    readonly [_flaxDartTypeValue]: _SemanticsNodeNative;
    readonly [_flaxDartConstructors]?: {
        "": (options?: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            showOnScreen?: (() => void) | null | undefined;
        }) => void;
        "root": (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            showOnScreen?: (() => void) | null | undefined;
            owner: Readonly<{
                "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsOwner": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }>;
        }) => void;
    };
    toString(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
        childOrder?: upstream20.DebugSemanticsDumpOrder | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream22.DiagnosticsTreeStyle | null | undefined;
        childOrder?: upstream20.DebugSemanticsDumpOrder | undefined;
    }): upstream21.DiagnosticsNode;
    debugDescribeChildren(options?: {
        childOrder?: upstream20.DebugSemanticsDumpOrder | undefined;
    }): DartList<upstream21.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    visitChildren(visitor: ((node: SemanticsNode) => boolean)): void;
    isTagged(tag: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>): boolean;
    hasFlag(flag: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlag": readonly [];
    }>): boolean;
    updateWith(options: {
        config: Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsConfiguration": readonly [];
        }> | null;
        childrenInInversePaintOrder?: DartListInput<SemanticsNode, Readonly<{
            "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
    }): void;
    getSemanticsData(): upstream26.SemanticsData;
    sendEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics_event.dart::SemanticsEvent": readonly [];
    }>): void;
    debugListChildrenInOrder(childOrder: upstream20.DebugSemanticsDumpOrder): DartList<SemanticsNode>;
    get key(): upstream3.Key | null;
    get id(): number;
    get transform(): upstream5.Matrix4 | null;
    get rect(): upstream6.Rect;
    get parentSemanticsClipRect(): upstream6.Rect | null;
    get parentPaintClipRect(): upstream6.Rect | null;
    get indexInParent(): number | null;
    get isInvisible(): boolean;
    get isMergedIntoParent(): boolean;
    get areUserActionsBlocked(): boolean;
    get isPartOfNodeMerging(): boolean;
    get mergeAllDescendantsIntoThisNode(): boolean;
    get hasChildren(): boolean;
    get childrenCount(): number;
    get childrenCountInTraversalOrder(): number;
    get owner(): upstream4.SemanticsOwner | null;
    get attached(): boolean;
    get parent(): SemanticsNode | null;
    get traversalParent(): SemanticsNode | null;
    get depth(): number;
    get tags(): DartSet<upstream7.SemanticsTag> | null;
    get flagsCollection(): upstream8.SemanticsFlags;
    get identifier(): string;
    get traversalParentIdentifier(): unknown | null;
    get traversalChildIdentifier(): unknown | null;
    get label(): string;
    get attributedLabel(): upstream9.AttributedString;
    get value(): string;
    get attributedValue(): upstream9.AttributedString;
    get increasedValue(): string;
    get attributedIncreasedValue(): upstream9.AttributedString;
    get decreasedValue(): string;
    get attributedDecreasedValue(): upstream9.AttributedString;
    get hint(): string;
    get attributedHint(): upstream9.AttributedString;
    get tooltip(): string;
    get hintOverrides(): upstream10.SemanticsHintOverrides | null;
    get textDirection(): upstream11.TextDirection | null;
    get sortKey(): upstream12.SemanticsSortKey | null;
    get textSelection(): upstream13.TextSelection | null;
    get isMultiline(): boolean | null;
    get scrollChildCount(): number | null;
    get scrollIndex(): number | null;
    get scrollPosition(): number | null;
    get scrollExtentMax(): number | null;
    get scrollExtentMin(): number | null;
    get platformViewId(): number | null;
    get maxValueLength(): number | null;
    get currentValueLength(): number | null;
    get headingLevel(): number;
    get linkUrl(): upstream14.Uri | null;
    get role(): upstream15.SemanticsRole;
    get controlsNodes(): DartSet<string> | null;
    get minValue(): string | null;
    get maxValue(): string | null;
    get validationResult(): upstream16.SemanticsValidationResult;
    get hitTestBehavior(): upstream17.SemanticsHitTestBehavior;
    get inputType(): upstream18.SemanticsInputType;
    set transform(value: Readonly<{
        "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [];
    }> | null);
    set rect(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>);
    set parentSemanticsClipRect(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null);
    set parentPaintClipRect(value: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }> | null);
    set indexInParent(value: number | null);
    set isMergedIntoParent(value: boolean);
    set areUserActionsBlocked(value: boolean);
    set traversalParent(value: (Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set tags(value: DartSetInput<upstream7.SemanticsTag, Readonly<{
        "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsTag": readonly [];
    }>> | null);
}
export declare abstract class _SemanticsNodeNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsNode>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsNode;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_semantics#type:SemanticsNode", readonly [], false];
    constructor(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        showOnScreen?: (() => void) | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_SemanticsNodeNative>);
}
export declare namespace _SemanticsNodeFactory {
    function implement(args: [options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        showOnScreen?: (() => void) | null | undefined;
    }], implementation: {}): SemanticsNode;
}
declare const _SemanticsNodeBinding: typeof _SemanticsNodeFactory & (new (options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    showOnScreen?: (() => void) | null | undefined;
}) => _SemanticsNodeNative) & (new (call: _FlaxProxySuper<_SemanticsNodeNative>) => _SemanticsNodeNative);
export declare const SemanticsNode: typeof _SemanticsNodeBinding & _FlaxInstanceType<SemanticsNode> & _FlaxDartType<SemanticsNode, readonly ["class", "flax.core/sdk_semantics#type:SemanticsNode", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "key" | "id" | "transform" | "rect" | "parentSemanticsClipRect" | "parentPaintClipRect" | "indexInParent" | "isInvisible" | "isMergedIntoParent" | "areUserActionsBlocked" | "isPartOfNodeMerging" | "mergeAllDescendantsIntoThisNode" | "hasChildren" | "childrenCount" | "childrenCountInTraversalOrder" | "owner" | "attached" | "parent" | "traversalParent" | "depth" | "tags" | "flagsCollection" | "identifier" | "traversalParentIdentifier" | "traversalChildIdentifier" | "label" | "attributedLabel" | "value" | "attributedValue" | "increasedValue" | "attributedIncreasedValue" | "decreasedValue" | "attributedDecreasedValue" | "hint" | "attributedHint" | "tooltip" | "hintOverrides" | "textDirection" | "sortKey" | "textSelection" | "isMultiline" | "scrollChildCount" | "scrollIndex" | "scrollPosition" | "scrollExtentMax" | "scrollExtentMin" | "platformViewId" | "maxValueLength" | "currentValueLength" | "headingLevel" | "linkUrl" | "role" | "controlsNodes" | "minValue" | "maxValue" | "validationResult" | "hitTestBehavior" | "inputType" | "toString" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "visitChildren" | "isTagged" | "hasFlag" | "updateWith" | "getSemanticsData" | "sendEvent" | "debugListChildrenInOrder" | "__flaxBound:package:flutter/src/semantics/semantics.dart::SemanticsNode" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
