import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsRole extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::SemanticsRole">, Readonly<{
    "__flaxBound:dart:ui::SemanticsRole": readonly [];
}> {
    readonly __SemanticsRole: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsRole;
    readonly name: string;
    readonly index: number;
}
export declare const SemanticsRole: Readonly<{
    none: SemanticsRole;
    tab: SemanticsRole;
    tabBar: SemanticsRole;
    tabPanel: SemanticsRole;
    dialog: SemanticsRole;
    alertDialog: SemanticsRole;
    table: SemanticsRole;
    cell: SemanticsRole;
    row: SemanticsRole;
    columnHeader: SemanticsRole;
    dragHandle: SemanticsRole;
    spinButton: SemanticsRole;
    comboBox: SemanticsRole;
    menuBar: SemanticsRole;
    menu: SemanticsRole;
    menuItem: SemanticsRole;
    menuItemCheckbox: SemanticsRole;
    menuItemRadio: SemanticsRole;
    list: SemanticsRole;
    listItem: SemanticsRole;
    form: SemanticsRole;
    tooltip: SemanticsRole;
    loadingSpinner: SemanticsRole;
    progressBar: SemanticsRole;
    hotKey: SemanticsRole;
    radioGroup: SemanticsRole;
    status: SemanticsRole;
    alert: SemanticsRole;
    complementary: SemanticsRole;
    contentInfo: SemanticsRole;
    main: SemanticsRole;
    navigation: SemanticsRole;
    region: SemanticsRole;
    values: readonly SemanticsRole[];
} & _FlaxInstanceType<SemanticsRole> & _FlaxDartType<SemanticsRole, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsRole", readonly [], false]>>;
