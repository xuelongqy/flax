import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderTapRegion';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderTapRegion';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TapRegionRegistry extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/tap_region.dart::TapRegionRegistry": readonly [];
}> {
    readonly __TapRegionRegistry: unique symbol;
    readonly [_flaxDartTypeValue]: TapRegionRegistry;
    registerTapRegion(region: Readonly<{
        "__flaxBound:package:flutter/src/widgets/tap_region.dart::RenderTapRegion": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBoxWithHitTestBehavior": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream2.RenderBox];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBoxMixin": readonly [upstream2.RenderBox];
    }>): void;
    unregisterTapRegion(region: Readonly<{
        "__flaxBound:package:flutter/src/widgets/tap_region.dart::RenderTapRegion": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBoxWithHitTestBehavior": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObjectWithChildMixin": readonly [upstream2.RenderBox];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/proxy_box.dart::RenderProxyBoxMixin": readonly [upstream2.RenderBox];
    }>): void;
}
export declare namespace _TapRegionRegistryFactory {
    function implement(args: [], implementation: {
        registerTapRegion: ((region: upstream1.RenderTapRegion) => void);
        unregisterTapRegion: ((region: upstream1.RenderTapRegion) => void);
    }): TapRegionRegistry;
}
export declare namespace _TapRegionRegistryFactory {
    function of(context: upstream0.BuildContext): TapRegionRegistry;
}
export declare namespace _TapRegionRegistryFactory {
    function maybeOf(context: upstream0.BuildContext): TapRegionRegistry | null;
}
export declare const TapRegionRegistry: typeof _TapRegionRegistryFactory & _FlaxInstanceType<TapRegionRegistry> & _FlaxDartType<TapRegionRegistry, readonly ["class", "flax.core/sdk_widgets#type:TapRegionRegistry", readonly [], false]>;
