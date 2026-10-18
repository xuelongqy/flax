import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SnapshotPainter extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotPainter": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __SnapshotPainter: unique symbol;
    readonly [_flaxDartTypeValue]: SnapshotPainter;
}
export interface SnapshotPainter {
    readonly [_flaxDartTypeValue]: SnapshotPainter;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    get hasListeners(): boolean;
}
export declare abstract class SnapshotPainter extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SnapshotPainter>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SnapshotPainter;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SnapshotPainter", readonly [], false];
    constructor();
    abstract paintSnapshot(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, image: Readonly<{
        "__flaxBound:dart:ui::Image": readonly [];
    }>, sourceSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, pixelRatio: number): void;
    abstract paint(context: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
    }>, offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, painter: ((context: upstream2.PaintingContext, offset: upstream3.Offset) => void)): void;
    abstract shouldRepaint(oldPainter: Readonly<{
        "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotPainter": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): boolean;
}
export declare namespace SnapshotPainter {
    function implement(args: [], implementation: {
        paintSnapshot: ((context: upstream2.PaintingContext, offset: upstream3.Offset, size: upstream4.Size, image: upstream5.Image, sourceSize: upstream4.Size, pixelRatio: number) => void);
        paint: ((context: upstream2.PaintingContext, offset: upstream3.Offset, size: upstream4.Size, painter: ((context: Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [];
        }>, offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) => void)) => void);
        shouldRepaint: ((oldPainter: SnapshotPainter) => boolean);
    }): SnapshotPainter;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "paintSnapshot" | "paint" | "shouldRepaint" | "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotPainter" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
