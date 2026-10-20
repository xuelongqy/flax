import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ViewConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [];
}> {
    readonly __ViewConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: ViewConfiguration;
    readonly logicalConstraints: upstream0.BoxConstraints;
    readonly physicalConstraints: upstream0.BoxConstraints;
    readonly devicePixelRatio: number;
    toMatrix(): upstream2.Matrix4;
    shouldUpdateMatrix(oldConfiguration: Readonly<{
        "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [];
    }>): boolean;
    toPhysicalSize(logicalSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream3.Size;
    toString(): string;
}
export declare function _ViewConfigurationFactory(options?: {
    physicalConstraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | undefined;
    logicalConstraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | undefined;
    devicePixelRatio?: number | undefined;
}): ViewConfiguration;
export declare namespace _ViewConfigurationFactory {
    function fromView(view: Readonly<{
        "__flaxBound:dart:ui::FlutterView": readonly [];
    }>): ViewConfiguration;
}
export interface _ViewConfigurationNative extends ViewConfiguration {
    readonly [_flaxDartTypeValue]: _ViewConfigurationNative;
    toMatrix(): upstream2.Matrix4;
    shouldUpdateMatrix(oldConfiguration: Readonly<{
        "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [];
    }>): boolean;
    toPhysicalSize(logicalSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream3.Size;
    toString(): string;
    get logicalConstraints(): upstream0.BoxConstraints;
    get physicalConstraints(): upstream0.BoxConstraints;
    get devicePixelRatio(): number;
}
export declare abstract class _ViewConfigurationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ViewConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ViewConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ViewConfiguration", readonly [], false];
    constructor(options?: {
        physicalConstraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | undefined;
        logicalConstraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | undefined;
        devicePixelRatio?: number | undefined;
    });
}
export declare namespace _ViewConfigurationFactory {
    function implement(args: [options?: {
        physicalConstraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | undefined;
        logicalConstraints?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
        }>) | undefined;
        devicePixelRatio?: number | undefined;
    }], implementation: {}): ViewConfiguration;
}
declare const _ViewConfigurationBinding: typeof _ViewConfigurationFactory & (new (options?: {
    physicalConstraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | undefined;
    logicalConstraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | undefined;
    devicePixelRatio?: number | undefined;
}) => _ViewConfigurationNative);
export declare const ViewConfiguration: typeof _ViewConfigurationBinding & _FlaxInstanceType<ViewConfiguration> & _FlaxDartType<ViewConfiguration, readonly ["class", "flax.core/sdk_rendering#type:ViewConfiguration", readonly [], false]>;
export {};
