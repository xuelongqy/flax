import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FloatingHeaderSnapConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_persistent_header.dart::FloatingHeaderSnapConfiguration": readonly [];
}> {
    readonly __FloatingHeaderSnapConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: FloatingHeaderSnapConfiguration;
    readonly curve: upstream0.Curve;
    readonly duration: upstream1.Duration;
}
export declare function _FloatingHeaderSnapConfigurationFactory(options?: {
    curve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
    duration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | undefined;
}): FloatingHeaderSnapConfiguration;
export interface _FloatingHeaderSnapConfigurationNative extends FloatingHeaderSnapConfiguration {
    readonly [_flaxDartTypeValue]: _FloatingHeaderSnapConfigurationNative;
    get curve(): upstream0.Curve;
    get duration(): upstream1.Duration;
}
export declare abstract class _FloatingHeaderSnapConfigurationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FloatingHeaderSnapConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FloatingHeaderSnapConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", readonly [], false];
    constructor(options?: {
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>) | undefined;
    });
}
export declare namespace _FloatingHeaderSnapConfigurationFactory {
    function implement(args: [options?: {
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | undefined;
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
        }>) | undefined;
    }], implementation: {}): FloatingHeaderSnapConfiguration;
}
declare const _FloatingHeaderSnapConfigurationBinding: typeof _FloatingHeaderSnapConfigurationFactory & (new (options?: {
    curve?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
    }>) | undefined;
    duration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream1.Duration];
    }>) | undefined;
}) => _FloatingHeaderSnapConfigurationNative);
export declare const FloatingHeaderSnapConfiguration: typeof _FloatingHeaderSnapConfigurationBinding & _FlaxInstanceType<FloatingHeaderSnapConfiguration> & _FlaxDartType<FloatingHeaderSnapConfiguration, readonly ["class", "flax.core/sdk_rendering#type:FloatingHeaderSnapConfiguration", readonly [], false]>;
export {};
