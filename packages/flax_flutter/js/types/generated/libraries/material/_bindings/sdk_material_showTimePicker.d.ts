import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
import '@flax/flutter/material/_bindings/sdk_material_TimeOfDay';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_TimePickerEntryMode';
import '@flax/flutter/material/_bindings/sdk_material_TimePickerEntryMode';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
declare function _flaxTopLevel_showTimePicker(options: {
    anchorPoint?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    barrierColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barrierDismissible?: boolean | undefined;
    barrierLabel?: string | null | undefined;
    builder?: ((context: upstream3.BuildContext, child: Widget | null) => Widget) | null | undefined;
    cancelText?: string | null | undefined;
    confirmText?: string | null | undefined;
    context: upstream3.BuildContext;
    emptyInitialInput?: boolean | undefined;
    errorInvalidText?: string | null | undefined;
    helpText?: string | null | undefined;
    hourLabelText?: string | null | undefined;
    initialEntryMode?: upstream4.TimePickerEntryMode | undefined;
    initialTime: Readonly<{
        "__flaxBound:package:flutter/src/material/time.dart::TimeOfDay": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream0.TimeOfDay];
    }>;
    minuteLabelText?: string | null | undefined;
    onEntryModeChanged?: ((mode: upstream4.TimePickerEntryMode) => void) | null | undefined;
    orientation?: upstream5.Orientation | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    switchToInputEntryModeIcon?: upstream7.Icon | null | undefined;
    switchToTimerEntryModeIcon?: upstream7.Icon | null | undefined;
    useRootNavigator?: boolean | undefined;
}): Promise<upstream0.TimeOfDay | null>;
export { _flaxTopLevel_showTimePicker as showTimePicker };
