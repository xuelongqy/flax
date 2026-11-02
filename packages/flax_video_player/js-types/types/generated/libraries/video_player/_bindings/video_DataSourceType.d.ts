import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DataSourceType extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DataSourceType": readonly [];
}> {
    readonly __DataSourceType: unique symbol;
    readonly [_flaxDartTypeValue]: DataSourceType;
    readonly name: string;
    readonly index: number;
}
export declare const DataSourceType: Readonly<{
    asset: DataSourceType;
    network: DataSourceType;
    file: DataSourceType;
    contentUri: DataSourceType;
    values: readonly DataSourceType[];
} & _FlaxInstanceType<DataSourceType> & _FlaxDartType<DataSourceType, readonly ["class", "flax.video/video#type:DataSourceType", readonly [], false]>>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DataSourceType";
export {};
