import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ScrollableDetails extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollableDetails": readonly [];
}> {
    readonly __ScrollableDetails: unique symbol;
    readonly [_flaxDartTypeValue]: ScrollableDetails;
}
export interface ScrollableDetails {
    readonly [_flaxDartTypeValue]: ScrollableDetails;
    copyWith(options?: {
        direction?: upstream0.AxisDirection | null | undefined;
        controller?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        decorationClipBehavior?: upstream3.Clip | null | undefined;
    }): ScrollableDetails;
    toString(): string;
    get direction(): upstream0.AxisDirection;
    get controller(): upstream1.ScrollController | null;
    get physics(): upstream2.ScrollPhysics | null;
    get decorationClipBehavior(): upstream3.Clip | null;
    get clipBehavior(): upstream3.Clip | null;
}
export declare abstract class ScrollableDetails extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScrollableDetails>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ScrollableDetails;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ScrollableDetails", readonly [], false];
    constructor(options: {
        direction: upstream0.AxisDirection;
        controller?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        clipBehavior?: upstream3.Clip | null | undefined;
        decorationClipBehavior?: upstream3.Clip | null | undefined;
    });
}
export declare namespace ScrollableDetails {
    function implement(args: [options: {
        direction: upstream0.AxisDirection;
        controller?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        clipBehavior?: upstream3.Clip | null | undefined;
        decorationClipBehavior?: upstream3.Clip | null | undefined;
    }], implementation: {}): ScrollableDetails;
}
