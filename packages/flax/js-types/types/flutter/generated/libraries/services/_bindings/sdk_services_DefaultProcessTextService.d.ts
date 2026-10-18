import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_ProcessTextService';
import '@flax/flutter/services/_bindings/sdk_services_ProcessTextService';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_ProcessTextAction';
import '@flax/flutter/services/_bindings/sdk_services_ProcessTextAction';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DefaultProcessTextService extends Omit<upstream0.ProcessTextService, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/services/process_text.dart::DefaultProcessTextService": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/process_text.dart::ProcessTextService": readonly [];
}> {
    readonly __DefaultProcessTextService: unique symbol;
    readonly [_flaxDartTypeValue]: DefaultProcessTextService;
}
export interface DefaultProcessTextService {
    readonly [_flaxDartTypeValue]: DefaultProcessTextService;
    queryTextActions(): Promise<DartList<upstream1.ProcessTextAction>>;
    processTextAction(id: string, text: string, readOnly: boolean): Promise<string | null>;
}
export declare abstract class DefaultProcessTextService extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DefaultProcessTextService>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DefaultProcessTextService;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:DefaultProcessTextService", readonly [], false];
    constructor();
}
export declare namespace DefaultProcessTextService {
    function implement(args: [], implementation: {}): DefaultProcessTextService;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "queryTextActions" | "processTextAction" | "__flaxBound:package:flutter/src/services/process_text.dart::DefaultProcessTextService" | "__flaxBound:package:flutter/src/services/process_text.dart::ProcessTextService";
export {};
