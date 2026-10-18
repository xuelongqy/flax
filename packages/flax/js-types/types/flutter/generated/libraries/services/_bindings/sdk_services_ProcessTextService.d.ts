import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_ProcessTextAction';
import '@flax/flutter/services/_bindings/sdk_services_ProcessTextAction';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ProcessTextService extends Readonly<{
    "__flaxBound:package:flutter/src/services/process_text.dart::ProcessTextService": readonly [];
}> {
    readonly __ProcessTextService: unique symbol;
    readonly [_flaxDartTypeValue]: ProcessTextService;
    queryTextActions(): Promise<DartList<upstream0.ProcessTextAction>>;
    processTextAction(id: string, text: string, readOnly: boolean): Promise<string | null>;
}
export declare namespace _ProcessTextServiceFactory {
    function implement(args: [], implementation: {
        queryTextActions: (() => Promise<DartListInput<upstream0.ProcessTextAction, Readonly<{
            "__flaxBound:package:flutter/src/services/process_text.dart::ProcessTextAction": readonly [];
        }>>>);
        processTextAction: ((id: string, text: string, readOnly: boolean) => Promise<string | null>);
    }): ProcessTextService;
}
export declare const ProcessTextService: typeof _ProcessTextServiceFactory & _FlaxInstanceType<ProcessTextService> & _FlaxDartType<ProcessTextService, readonly ["class", "flax.core/sdk_services#type:ProcessTextService", readonly [], false]>;
