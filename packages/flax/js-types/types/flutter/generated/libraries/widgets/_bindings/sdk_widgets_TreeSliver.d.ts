import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverNode';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLayoutDimensions';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverLayoutDimensions';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TreeSliverController';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_TreeSliverIndentationType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TreeSliverIndentationType';
import type * as upstream8 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream9 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TreeSliver<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliver": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __TreeSliver: unique symbol;
    readonly [_flaxDartTypeValue]: TreeSliver<T>;
    readonly tree: DartList<upstream2.TreeSliverNode<T>>;
    readonly treeNodeBuilder: ((context: upstream3.BuildContext, node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>, animationStyle: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) => Widget);
    readonly treeRowExtentBuilder: ((node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>, dimensions: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLayoutDimensions": readonly [];
    }>) => number);
    readonly controller: upstream6.TreeSliverController | null;
    readonly onNodeToggle: ((node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>) => void) | null;
    readonly toggleAnimationStyle: upstream4.AnimationStyle | null;
    readonly indentation: upstream7.TreeSliverIndentationType;
    readonly addAutomaticKeepAlives: boolean;
    readonly addRepaintBoundaries: boolean;
    readonly addSemanticIndexes: boolean;
    readonly semanticIndexCallback: ((widget: Widget, localIndex: number) => number | null);
    readonly semanticIndexOffset: number;
    readonly findChildIndexCallback: ((p0: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) => number | null) | null;
    readonly key: upstream1.Key | null;
    createState(): upstream10.State<TreeSliver<T>>;
    createElement(): upstream11.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
export declare function _TreeSliverFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    tree: DartListInput<upstream2.TreeSliverNode<_FlaxDartOutput<T>>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [_FlaxDartOutput<T>];
    }>>;
    treeNodeBuilder?: ((context: upstream3.BuildContext, node: upstream2.TreeSliverNode<unknown | null>, animationStyle: upstream4.AnimationStyle) => Widget) | undefined;
    treeRowExtentBuilder?: ((node: upstream2.TreeSliverNode<unknown | null>, dimensions: upstream5.SliverLayoutDimensions) => number) | undefined;
    controller?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverController": readonly [];
    }> | null | undefined;
    onNodeToggle?: ((node: upstream2.TreeSliverNode<unknown | null>) => void) | null | undefined;
    toggleAnimationStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    indentation?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_tree.dart::TreeSliverIndentationType": readonly [];
    }> | undefined;
    addAutomaticKeepAlives?: boolean | undefined;
    addRepaintBoundaries?: boolean | undefined;
    addSemanticIndexes?: boolean | undefined;
    semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined;
    semanticIndexOffset?: number | undefined;
    findChildIndexCallback?: ((p0: upstream1.Key) => number | null) | null | undefined;
}): TreeSliver<T>;
export declare function _TreeSliverFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    tree: DartListInput<upstream2.TreeSliverNode<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>>;
    treeNodeBuilder?: ((context: upstream3.BuildContext, node: upstream2.TreeSliverNode<unknown | null>, animationStyle: upstream4.AnimationStyle) => Widget) | undefined;
    treeRowExtentBuilder?: ((node: upstream2.TreeSliverNode<unknown | null>, dimensions: upstream5.SliverLayoutDimensions) => number) | undefined;
    controller?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverController": readonly [];
    }> | null | undefined;
    onNodeToggle?: ((node: upstream2.TreeSliverNode<unknown | null>) => void) | null | undefined;
    toggleAnimationStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    indentation?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver_tree.dart::TreeSliverIndentationType": readonly [];
    }> | undefined;
    addAutomaticKeepAlives?: boolean | undefined;
    addRepaintBoundaries?: boolean | undefined;
    addSemanticIndexes?: boolean | undefined;
    semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined;
    semanticIndexOffset?: number | undefined;
    findChildIndexCallback?: ((p0: upstream1.Key) => number | null) | null | undefined;
}): TreeSliver<unknown | null>;
export declare namespace _TreeSliverFactory {
    function setDefaultToggleAnimationStyle(value: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
}
export declare namespace _TreeSliverFactory {
    const defaultToggleAnimationStyle: upstream4.AnimationStyle;
}
export declare namespace _TreeSliverFactory {
    const defaultAnimationCurve: upstream8.Curve;
}
export declare namespace _TreeSliverFactory {
    const defaultAnimationDuration: upstream9.Duration;
}
export declare namespace _TreeSliverFactory {
    function wrapChildToToggleNode(options: {
        child: Widget;
        node: Readonly<{
            "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
        }>;
    }): Widget;
}
export declare namespace _TreeSliverFactory {
    function defaultTreeRowExtentBuilder(node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>, dimensions: Readonly<{
        "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverLayoutDimensions": readonly [];
    }>): number;
}
export declare namespace _TreeSliverFactory {
    function defaultTreeNodeBuilder(context: upstream3.BuildContext, node: Readonly<{
        "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [unknown | null];
    }>, toggleAnimationStyle: Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): Widget;
}
export declare const TreeSliver: typeof _TreeSliverFactory & _FlaxInstanceType<TreeSliver<unknown | null>> & _FlaxDartType<TreeSliver<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:TreeSliver", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "tree" | "treeNodeBuilder" | "treeRowExtentBuilder" | "controller" | "onNodeToggle" | "toggleAnimationStyle" | "indentation" | "addAutomaticKeepAlives" | "addRepaintBoundaries" | "addSemanticIndexes" | "semanticIndexCallback" | "semanticIndexOffset" | "findChildIndexCallback" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliver" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            tree: DartListInput<upstream2.TreeSliverNode<_Selected0>, Readonly<{
                "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverNode": readonly [_Selected0];
            }>>;
            treeNodeBuilder?: ((context: upstream3.BuildContext, node: upstream2.TreeSliverNode<unknown | null>, animationStyle: upstream4.AnimationStyle) => Widget) | undefined;
            treeRowExtentBuilder?: ((node: upstream2.TreeSliverNode<unknown | null>, dimensions: upstream5.SliverLayoutDimensions) => number) | undefined;
            controller?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/sliver_tree.dart::TreeSliverController": readonly [];
            }> | null | undefined;
            onNodeToggle?: ((node: upstream2.TreeSliverNode<unknown | null>) => void) | null | undefined;
            toggleAnimationStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            indentation?: Readonly<{
                "__flaxBound:package:flutter/src/rendering/sliver_tree.dart::TreeSliverIndentationType": readonly [];
            }> | undefined;
            addAutomaticKeepAlives?: boolean | undefined;
            addRepaintBoundaries?: boolean | undefined;
            addSemanticIndexes?: boolean | undefined;
            semanticIndexCallback?: ((widget: Widget, localIndex: number) => number | null) | undefined;
            semanticIndexOffset?: number | undefined;
            findChildIndexCallback?: ((p0: upstream1.Key) => number | null) | null | undefined;
        }): TreeSliver<_Selected0>;
        readonly prototype: TreeSliver<_Selected0>;
    } & _FlaxInstanceType<TreeSliver<_Selected0>> & _FlaxDartType<TreeSliver<_Selected0>> : never : never;
}
export {};
