import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SnapshotMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotMode">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotMode": readonly [];
}> {
    readonly __SnapshotMode: unique symbol;
    readonly [_flaxDartTypeValue]: SnapshotMode;
    readonly name: string;
    readonly index: number;
}
export declare const SnapshotMode: Readonly<{
    permissive: SnapshotMode;
    normal: SnapshotMode;
    forced: SnapshotMode;
    values: readonly SnapshotMode[];
} & _FlaxInstanceType<SnapshotMode> & _FlaxDartType<SnapshotMode, readonly ["class", "flax.core/sdk_widgets#type:SnapshotMode", readonly [], false]>>;
