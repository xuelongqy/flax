import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface NavigationDestinationLabelBehavior extends DartEnum {
    readonly __NavigationDestinationLabelBehavior: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const NavigationDestinationLabelBehavior: Readonly<{
    alwaysShow: NavigationDestinationLabelBehavior;
    alwaysHide: NavigationDestinationLabelBehavior;
    onlyShowSelected: NavigationDestinationLabelBehavior;
    values: readonly NavigationDestinationLabelBehavior[];
} & _FlaxInstanceType<NavigationDestinationLabelBehavior>>;
