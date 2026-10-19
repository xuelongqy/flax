import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_Step';
import '@flax/flutter/material/_bindings/sdk_material_Step';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_StepperType';
import '@flax/flutter/material/_bindings/sdk_material_StepperType';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_ControlsDetails';
import '@flax/flutter/material/_bindings/sdk_material_ControlsDetails';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream11 from '@flax/flutter/material/_bindings/sdk_material_StepState';
import '@flax/flutter/material/_bindings/sdk_material_StepState';
import type * as upstream12 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream13 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Stepper extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/stepper.dart::Stepper": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Stepper: unique symbol;
    readonly [_flaxDartTypeValue]: Stepper;
    readonly steps: DartList<upstream2.Step>;
    readonly physics: upstream4.ScrollPhysics | null;
    readonly controller: upstream3.ScrollController | null;
    readonly type: upstream5.StepperType;
    readonly currentStep: number;
    readonly onStepTapped: ((value: number) => void) | null;
    readonly onStepContinue: (() => void) | null;
    readonly onStepCancel: (() => void) | null;
    readonly controlsBuilder: ((context: upstream6.BuildContext, details: Readonly<{
        "__flaxBound:package:flutter/src/material/stepper.dart::ControlsDetails": readonly [];
    }>) => Widget) | null;
    readonly elevation: number | null;
    readonly margin: upstream8.EdgeInsetsGeometry | null;
    readonly connectorColor: upstream9.WidgetStateProperty<upstream10.Color> | null;
    readonly connectorThickness: number | null;
    readonly stepIconBuilder: ((stepIndex: number, stepState: upstream11.StepState) => Widget | null) | null;
    readonly stepIconHeight: number | null;
    readonly stepIconWidth: number | null;
    readonly stepIconMargin: upstream12.EdgeInsets | null;
    readonly clipBehavior: upstream13.Clip;
    readonly headerPadding: upstream8.EdgeInsetsGeometry | null;
    readonly contentPadding: upstream8.EdgeInsetsGeometry | null;
    readonly key: upstream1.Key | null;
    createState(): upstream14.State<Stepper>;
    createElement(): upstream15.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream17.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream17.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream19.DiagnosticsTreeStyle | null | undefined;
    }): upstream18.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream18.DiagnosticsNode>;
}
export declare function _StepperFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    steps: DartListInput<upstream2.Step, Readonly<{
        "__flaxBound:package:flutter/src/material/stepper.dart::Step": readonly [];
    }>>;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    physics?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
    type?: upstream5.StepperType | undefined;
    currentStep?: number | undefined;
    onStepTapped?: ((value: number) => void) | null | undefined;
    onStepContinue?: (() => void) | null | undefined;
    onStepCancel?: (() => void) | null | undefined;
    controlsBuilder?: ((context: upstream6.BuildContext, details: upstream7.ControlsDetails) => Widget) | null | undefined;
    elevation?: number | null | undefined;
    margin?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    connectorColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream10.Color];
    }> | null | undefined;
    connectorThickness?: number | null | undefined;
    stepIconBuilder?: ((stepIndex: number, stepState: upstream11.StepState) => Widget | null) | null | undefined;
    stepIconHeight?: number | null | undefined;
    stepIconWidth?: number | null | undefined;
    stepIconMargin?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    clipBehavior?: upstream13.Clip | undefined;
    headerPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    contentPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}): Stepper;
export declare const Stepper: typeof _StepperFactory & _FlaxInstanceType<Stepper> & _FlaxDartType<Stepper, readonly ["class", "flax.core/sdk_material#type:Stepper", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "steps" | "physics" | "controller" | "type" | "currentStep" | "onStepTapped" | "onStepContinue" | "onStepCancel" | "controlsBuilder" | "elevation" | "margin" | "connectorColor" | "connectorThickness" | "stepIconBuilder" | "stepIconHeight" | "stepIconWidth" | "stepIconMargin" | "clipBehavior" | "headerPadding" | "contentPadding" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/stepper.dart::Stepper" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
