import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/cupertino-ui/_bindings/cupertino_ObstructingPreferredSizeWidget';
import '@flax/dart/ui/_bindings/flutter_Color';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoPageScaffold extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:cupertino_ui/src/page_scaffold.dart::CupertinoPageScaffold": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.cupertino/cupertino#type:CupertinoPageScaffold";
}
export declare function _CupertinoPageScaffoldFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    navigationBar?: Bindable<(Readonly<{
        "__flaxBound:package:cupertino_ui/src/page_scaffold.dart::ObstructingPreferredSizeWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    resizeToAvoidBottomInset?: Bindable<boolean> | undefined;
    child: Bindable<Widget>;
}): CupertinoPageScaffold;
export declare const CupertinoPageScaffold: typeof _CupertinoPageScaffoldFactory & _FlaxInstanceType<CupertinoPageScaffold> & _FlaxDartType<CupertinoPageScaffold, readonly ["class", "flax.cupertino/cupertino#type:CupertinoPageScaffold", readonly [], false]>;
