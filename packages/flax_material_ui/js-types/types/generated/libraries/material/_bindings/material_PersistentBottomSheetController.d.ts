import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PersistentBottomSheetController extends Readonly<{
    "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldFeatureController": readonly [Readonly<{
        "__flaxBound:package:material_ui/src/scaffold.dart::_StandardBottomSheet": readonly [];
    }>, void];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/scaffold.dart::PersistentBottomSheetController": readonly [];
}>, Readonly<{
    "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldFeatureController": readonly [Readonly<{
        "__flaxBound:package:material_ui/src/scaffold.dart::_StandardBottomSheet": readonly [];
    }>, void];
}> {
    readonly __PersistentBottomSheetController: unique symbol;
    readonly [_flaxDartTypeValue]: PersistentBottomSheetController;
    readonly closed: Promise<void>;
    readonly close: (() => void);
    readonly setState: ((fn: (() => void)) => void) | null;
}
export declare const PersistentBottomSheetController: object & _FlaxInstanceType<PersistentBottomSheetController> & _FlaxDartType<PersistentBottomSheetController, readonly ["class", "flax.material/material#type:PersistentBottomSheetController", readonly [], false]>;
