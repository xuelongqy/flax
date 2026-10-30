import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import '@flax/flutter/painting/_bindings/sdk_painting_StrutStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import '@flax/flutter/painting/_bindings/flutter_TextOverflow';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import '@flax/flutter/painting/_bindings/sdk_painting_TextWidthBasis';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextHeightBehavior';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream11 from '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_InlineSpan';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export type Text = TextDescription | _TextNative;
export type TextDescription = WidgetDescription & {
    readonly type: "flax.core/flutter#type:Text";
};
export interface _TextNative extends _FlaxDartWidget {
    readonly [_flaxDartTypeValue]: _TextNative;
    readonly [_flaxDartConstructors]?: {
        "": (data: string, options?: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            style?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            strutStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            textAlign?: upstream3.TextAlign | null | undefined;
            textDirection?: upstream4.TextDirection | null | undefined;
            locale?: Readonly<{
                "__flaxBound:dart:ui::Locale": readonly [];
            }> | null | undefined;
            softWrap?: boolean | null | undefined;
            overflow?: upstream6.TextOverflow | null | undefined;
            textScaleFactor?: number | null | undefined;
            textScaler?: Readonly<{
                "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
            }> | null | undefined;
            maxLines?: number | null | undefined;
            semanticsLabel?: string | null | undefined;
            semanticsIdentifier?: string | null | undefined;
            textWidthBasis?: upstream8.TextWidthBasis | null | undefined;
            textHeightBehavior?: Readonly<{
                "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
            }> | null | undefined;
            selectionColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
        }) => void;
        "rich": (textSpan: Readonly<{
            "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>, options?: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            style?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            strutStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            textAlign?: upstream3.TextAlign | null | undefined;
            textDirection?: upstream4.TextDirection | null | undefined;
            locale?: Readonly<{
                "__flaxBound:dart:ui::Locale": readonly [];
            }> | null | undefined;
            softWrap?: boolean | null | undefined;
            overflow?: upstream6.TextOverflow | null | undefined;
            textScaleFactor?: number | null | undefined;
            textScaler?: Readonly<{
                "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
            }> | null | undefined;
            maxLines?: number | null | undefined;
            semanticsLabel?: string | null | undefined;
            semanticsIdentifier?: string | null | undefined;
            textWidthBasis?: upstream8.TextWidthBasis | null | undefined;
            textHeightBehavior?: Readonly<{
                "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
            }> | null | undefined;
            selectionColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
        }) => void;
    };
    build(context: upstream12.BuildContext): Widget;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream14.StatelessElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream17.DiagnosticsTreeStyle | null | undefined;
    }): upstream16.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream16.DiagnosticsNode>;
    get data(): string | null;
    get textSpan(): upstream11.InlineSpan | null;
    get style(): upstream1.TextStyle | null;
    get strutStyle(): upstream2.StrutStyle | null;
    get textAlign(): upstream3.TextAlign | null;
    get textDirection(): upstream4.TextDirection | null;
    get locale(): upstream5.Locale | null;
    get softWrap(): boolean | null;
    get overflow(): upstream6.TextOverflow | null;
    get textScaleFactor(): number | null;
    get textScaler(): upstream7.TextScaler | null;
    get maxLines(): number | null;
    get semanticsLabel(): string | null;
    get semanticsIdentifier(): string | null;
    get textWidthBasis(): upstream8.TextWidthBasis | null;
    get textHeightBehavior(): upstream9.TextHeightBehavior | null;
    get selectionColor(): upstream10.Color | null;
    get key(): upstream0.Key | null;
}
export declare abstract class _TextNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Text>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Text;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/flutter#type:Text", readonly [], false];
    constructor(data: string, options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        strutStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        textAlign?: upstream3.TextAlign | null | undefined;
        textDirection?: upstream4.TextDirection | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        softWrap?: boolean | null | undefined;
        overflow?: upstream6.TextOverflow | null | undefined;
        textScaleFactor?: number | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | null | undefined;
        maxLines?: number | null | undefined;
        semanticsLabel?: string | null | undefined;
        semanticsIdentifier?: string | null | undefined;
        textWidthBasis?: upstream8.TextWidthBasis | null | undefined;
        textHeightBehavior?: Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null | undefined;
        selectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_TextNative>);
}
export declare function _TextFactory(data: Bindable<string>, options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    style?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    strutStyle?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    textAlign?: Bindable<upstream3.TextAlign | null> | undefined;
    textDirection?: Bindable<upstream4.TextDirection | null> | undefined;
    locale?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null> | undefined;
    softWrap?: Bindable<boolean | null> | undefined;
    overflow?: Bindable<upstream6.TextOverflow | null> | undefined;
    textScaleFactor?: Bindable<number | null> | undefined;
    textScaler?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
    }> | null> | undefined;
    maxLines?: Bindable<number | null> | undefined;
    semanticsLabel?: Bindable<string | null> | undefined;
    semanticsIdentifier?: Bindable<string | null> | undefined;
    textWidthBasis?: Bindable<upstream8.TextWidthBasis | null> | undefined;
    textHeightBehavior?: Bindable<Readonly<{
        "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
    }> | null> | undefined;
    selectionColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
}): Text;
export declare namespace _TextFactory {
    const __flaxJsx: {
        readonly props: ({
            "data": globalThis.Parameters<typeof _TextFactory>[0];
        } & globalThis.NonNullable<globalThis.Parameters<typeof _TextFactory>[1]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _TextFactory {
    function rich(textSpan: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>, options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        style?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null> | undefined;
        strutStyle?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null> | undefined;
        textAlign?: Bindable<upstream3.TextAlign | null> | undefined;
        textDirection?: Bindable<upstream4.TextDirection | null> | undefined;
        locale?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null> | undefined;
        softWrap?: Bindable<boolean | null> | undefined;
        overflow?: Bindable<upstream6.TextOverflow | null> | undefined;
        textScaleFactor?: Bindable<number | null> | undefined;
        textScaler?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | null> | undefined;
        maxLines?: Bindable<number | null> | undefined;
        semanticsLabel?: Bindable<string | null> | undefined;
        semanticsIdentifier?: Bindable<string | null> | undefined;
        textWidthBasis?: Bindable<upstream8.TextWidthBasis | null> | undefined;
        textHeightBehavior?: Bindable<Readonly<{
            "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
        }> | null> | undefined;
        selectionColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
    }): Text;
    namespace rich {
        const __flaxJsx: {
            readonly props: ({
                "textSpan": globalThis.Parameters<typeof rich>[0];
            } & globalThis.NonNullable<globalThis.Parameters<typeof rich>[1]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
declare const _TextBinding: typeof _TextFactory & (new (data: string, options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    strutStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    textAlign?: upstream3.TextAlign | null | undefined;
    textDirection?: upstream4.TextDirection | null | undefined;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
    softWrap?: boolean | null | undefined;
    overflow?: upstream6.TextOverflow | null | undefined;
    textScaleFactor?: number | null | undefined;
    textScaler?: Readonly<{
        "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
    }> | null | undefined;
    maxLines?: number | null | undefined;
    semanticsLabel?: string | null | undefined;
    semanticsIdentifier?: string | null | undefined;
    textWidthBasis?: upstream8.TextWidthBasis | null | undefined;
    textHeightBehavior?: Readonly<{
        "__flaxBound:dart:ui::TextHeightBehavior": readonly [];
    }> | null | undefined;
    selectionColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
}) => _TextNative) & (new (call: _FlaxProxySuper<_TextNative>) => _TextNative);
export declare const Text: typeof _TextBinding & _FlaxInstanceType<Text> & _FlaxDartType<Text, readonly ["class", "flax.core/flutter#type:Text", readonly [], false]>;
export {};
