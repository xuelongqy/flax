// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:flutter/widget_previews.dart' as api;
import 'package:flax/bindings.dart';

import 'dart:ui' as api1;

import 'package:flutter/cupertino.dart' as api2;
import 'package:flutter/widgets.dart' as api3;

// ignore: unused_element
const _flaxOmitted = Object();
const sdk_widget_previewsBindings = FlaxBindingModule(
  'sdk_widget_previews',
  [
    _flaxBinding52,
    _flaxBinding60,
    _flaxBinding82,
    _flaxBinding104,
    _flaxBinding116,
    _flaxBinding55,
  ],
  functions: [],
  constants: [],
  moduleId: "flax.core/sdk_widget_previews",
  dependencyModules: [
    "flax.core/flutter",
    "flax.core/sdk_dart_ui",
    "flax.core/sdk_widgets",
  ],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "lazy-js-iterables",
    "native-navigation-objects",
    "native-widget-proxies",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.core/sdk_widget_previews#type:MultiPreview",
      api.MultiPreview,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_widget_previews#type:MultiPreviewThemeData",
      api.MultiPreviewThemeData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_widget_previews#type:Preview",
      api.Preview,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_widget_previews#type:PreviewBuilder",
      api.PreviewBuilder,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_widget_previews#type:PreviewLocalizationsData",
      api.PreviewLocalizationsData,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_widget_previews#type:PreviewThemeData",
      api.PreviewThemeData,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
bool _isMultiPreview(Object value) => value is api.MultiPreview;
Object? _MultiPreview_previews(Object value) =>
    (value as api.MultiPreview).previews;
Object? _MultiPreview_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.MultiPreview).transform();
}

Object? _MultiPreview_super_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _MultiPreviewProxy)._flaxSuper_transform();
}

Object _createMultiPreview(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _MultiPreviewProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isMultiPreviewThemeData(Object value) =>
    value is api.MultiPreviewThemeData;
Object? _MultiPreviewThemeData_themes(Object value) =>
    (value as api.MultiPreviewThemeData).themes;
Object _createMultiPreviewThemeData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.MultiPreviewThemeData(
        values["themes"] as List<api.PreviewThemeData>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPreview(Object value) => value is api.Preview;
Object? _Preview_group(Object value) => (value as api.Preview).group;
Object? _Preview_name(Object value) => (value as api.Preview).name;
Object? _Preview_size(Object value) => (value as api.Preview).size;
Object? _Preview_textScaleFactor(Object value) =>
    (value as api.Preview).textScaleFactor;
Object? _Preview_wrapper(Object value) => (value as api.Preview).wrapper;
Object? _Preview_theme(Object value) => (value as api.Preview).theme;
Object? _Preview_brightness(Object value) => (value as api.Preview).brightness;
Object? _Preview_localizations(Object value) =>
    (value as api.Preview).localizations;
Object? _Preview_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Preview).transform();
}

Object? _Preview_toBuilder(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Preview).toBuilder();
}

Object? _Preview_super_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as _PreviewProxy)._flaxSuper_transform();
}

Object? _Preview_super_toBuilder(Object receiver, Map<String, Object?> values) {
  return (receiver as _PreviewProxy)._flaxSuper_toBuilder();
}

Object? _Preview_super_get_group(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewProxy)._flaxSuperGet_group;
Object? _Preview_super_get_name(Object receiver, Map<String, Object?> values) =>
    (receiver as _PreviewProxy)._flaxSuperGet_name;
Object? _Preview_super_get_size(Object receiver, Map<String, Object?> values) =>
    (receiver as _PreviewProxy)._flaxSuperGet_size;
Object? _Preview_super_get_textScaleFactor(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewProxy)._flaxSuperGet_textScaleFactor;
Object? _Preview_super_get_wrapper(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewProxy)._flaxSuperGet_wrapper;
Object? _Preview_super_get_theme(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewProxy)._flaxSuperGet_theme;
Object? _Preview_super_get_brightness(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewProxy)._flaxSuperGet_brightness;
Object? _Preview_super_get_localizations(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewProxy)._flaxSuperGet_localizations;
Object _createPreview(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _PreviewProxy(
        values['@peer'] as FlaxProxyPeer,
        group: values["group"] as String,
        name: values["name"] as String?,
        size: values["size"] as api1.Size?,
        textScaleFactor: values["textScaleFactor"] as double?,
        wrapper: values["wrapper"] as api3.Widget Function(api3.Widget p0)?,
        theme: values["theme"] as api.PreviewThemeData Function()?,
        brightness: values["brightness"] as api1.Brightness?,
        localizations:
            values["localizations"] as api.PreviewLocalizationsData Function()?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPreviewBuilder(Object value) => value is api.PreviewBuilder;
Object? _PreviewBuilder_group(Object value) =>
    (value as api.PreviewBuilder).group;
Object? _PreviewBuilder_name(Object value) =>
    (value as api.PreviewBuilder).name;
Object? _PreviewBuilder_size(Object value) =>
    (value as api.PreviewBuilder).size;
Object? _PreviewBuilder_textScaleFactor(Object value) =>
    (value as api.PreviewBuilder).textScaleFactor;
Object? _PreviewBuilder_wrapper(Object value) =>
    (value as api.PreviewBuilder).wrapper;
Object? _PreviewBuilder_theme(Object value) =>
    (value as api.PreviewBuilder).theme;
Object? _PreviewBuilder_brightness(Object value) =>
    (value as api.PreviewBuilder).brightness;
Object? _PreviewBuilder_localizations(Object value) =>
    (value as api.PreviewBuilder).localizations;
void _PreviewBuilder_set_group(Object receiver, Object? value) {
  (receiver as api.PreviewBuilder).group = value as String?;
}

void _PreviewBuilder_set_name(Object receiver, Object? value) {
  (receiver as api.PreviewBuilder).name = value as String?;
}

void _PreviewBuilder_set_size(Object receiver, Object? value) {
  (receiver as api.PreviewBuilder).size = value as api1.Size?;
}

void _PreviewBuilder_set_textScaleFactor(Object receiver, Object? value) {
  (receiver as api.PreviewBuilder).textScaleFactor = value as double?;
}

void _PreviewBuilder_set_wrapper(Object receiver, Object? value) {
  (receiver as api.PreviewBuilder).wrapper =
      value as api3.Widget Function(api3.Widget p0)?;
}

void _PreviewBuilder_set_theme(Object receiver, Object? value) {
  (receiver as api.PreviewBuilder).theme =
      value as api.PreviewThemeData Function()?;
}

void _PreviewBuilder_set_brightness(Object receiver, Object? value) {
  (receiver as api.PreviewBuilder).brightness = value as api1.Brightness?;
}

void _PreviewBuilder_set_localizations(Object receiver, Object? value) {
  (receiver as api.PreviewBuilder).localizations =
      value as api.PreviewLocalizationsData Function()?;
}

Object? _PreviewBuilder_addWrapper(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.PreviewBuilder).addWrapper(
    values["newWrapper"] as api3.Widget Function(api3.Widget p0),
  );
  return null;
}

Object? _PreviewBuilder_build(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PreviewBuilder).build();
}

Object _createPreviewBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.PreviewBuilder();
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPreviewLocalizationsData(Object value) =>
    value is api.PreviewLocalizationsData;
Object? _PreviewLocalizationsData_locale(Object value) =>
    (value as api.PreviewLocalizationsData).locale;
Object? _PreviewLocalizationsData_supportedLocales(Object value) =>
    (value as api.PreviewLocalizationsData).supportedLocales;
Object? _PreviewLocalizationsData_localizationsDelegates(Object value) =>
    (value as api.PreviewLocalizationsData).localizationsDelegates;
Object? _PreviewLocalizationsData_localeListResolutionCallback(Object value) =>
    (value as api.PreviewLocalizationsData).localeListResolutionCallback;
Object? _PreviewLocalizationsData_localeResolutionCallback(Object value) =>
    (value as api.PreviewLocalizationsData).localeResolutionCallback;
Object? _PreviewLocalizationsData_super_get_locale(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewLocalizationsDataProxy)._flaxSuperGet_locale;
Object? _PreviewLocalizationsData_super_get_supportedLocales(
  Object receiver,
  Map<String, Object?> values,
) =>
    (receiver as _PreviewLocalizationsDataProxy)._flaxSuperGet_supportedLocales;
Object? _PreviewLocalizationsData_super_get_localizationsDelegates(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewLocalizationsDataProxy)
    ._flaxSuperGet_localizationsDelegates;
Object? _PreviewLocalizationsData_super_get_localeListResolutionCallback(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewLocalizationsDataProxy)
    ._flaxSuperGet_localeListResolutionCallback;
Object? _PreviewLocalizationsData_super_get_localeResolutionCallback(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _PreviewLocalizationsDataProxy)
    ._flaxSuperGet_localeResolutionCallback;
Object _createPreviewLocalizationsData(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case '@implementation':
      if (!values.containsKey("supportedLocales")) {
        return _PreviewLocalizationsDataProxy(
          values['@peer'] as FlaxProxyPeer,
          locale: values["locale"] as api1.Locale?,
          localizationsDelegates:
              values["localizationsDelegates"]
                  as Iterable<api3.LocalizationsDelegate<Object?>>?,
          localeListResolutionCallback:
              values["localeListResolutionCallback"]
                  as api1.Locale? Function(
                    List<api1.Locale>? locales,
                    Iterable<api1.Locale> supportedLocales,
                  )?,
          localeResolutionCallback:
              values["localeResolutionCallback"]
                  as api1.Locale? Function(
                    api1.Locale? locale,
                    Iterable<api1.Locale> supportedLocales,
                  )?,
        );
      }
      return _PreviewLocalizationsDataProxy(
        values['@peer'] as FlaxProxyPeer,
        locale: values["locale"] as api1.Locale?,
        supportedLocales: values["supportedLocales"] as List<api1.Locale>,
        localizationsDelegates:
            values["localizationsDelegates"]
                as Iterable<api3.LocalizationsDelegate<Object?>>?,
        localeListResolutionCallback:
            values["localeListResolutionCallback"]
                as api1.Locale? Function(
                  List<api1.Locale>? locales,
                  Iterable<api1.Locale> supportedLocales,
                )?,
        localeResolutionCallback:
            values["localeResolutionCallback"]
                as api1.Locale? Function(
                  api1.Locale? locale,
                  Iterable<api1.Locale> supportedLocales,
                )?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPreviewThemeData(Object value) => value is api.PreviewThemeData;
Object? _PreviewThemeData_apply(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PreviewThemeData).apply(
    values["context"] as api3.BuildContext,
    values["child"] as api3.Widget,
  );
}

Object _createPreviewThemeData(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _PreviewThemeDataProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _MultiPreviewProxy extends api.MultiPreview {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _MultiPreviewProxy(this._flaxPeer);
  @override
  // ignore: must_call_super
  List<api.Preview> transform() {
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "transform";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
      if (!_flaxResult.$1) {
        return _flaxSuper_transform();
      }
      final _flaxConvertedResult = _flaxResult.$2 as List<api.Preview>;
      if (!(_flaxCalledSuper))
        throw StateError("transform must call super.transform()");
      return _flaxConvertedResult;
    } finally {
      _flaxActiveSuperMember = _flaxPreviousSuperMember;
      _flaxCalledSuper = _flaxPreviousCalledSuper;
    }
  }

  List<api.Preview> _flaxSuper_transform() {
    if (_flaxActiveSuperMember == "transform") _flaxCalledSuper = true;
    return super.transform();
  }

  @override
  List<api.Preview> get previews {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as List<api.Preview>;
    return _flaxConvertedResult;
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _PreviewProxy extends api.Preview {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _PreviewProxy(
    this._flaxPeer, {
    String super.group,
    String? super.name,
    api1.Size? super.size,
    double? super.textScaleFactor,
    api3.Widget Function(api3.Widget p0)? super.wrapper,
    api.PreviewThemeData Function()? super.theme,
    api1.Brightness? super.brightness,
    api.PreviewLocalizationsData Function()? super.localizations,
  });
  @override
  // ignore: must_call_super
  api.Preview transform() {
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "transform";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
      if (!_flaxResult.$1) {
        return _flaxSuper_transform();
      }
      final _flaxConvertedResult = _flaxResult.$2 as api.Preview;
      if (!(_flaxCalledSuper))
        throw StateError("transform must call super.transform()");
      return _flaxConvertedResult;
    } finally {
      _flaxActiveSuperMember = _flaxPreviousSuperMember;
      _flaxCalledSuper = _flaxPreviousCalledSuper;
    }
  }

  api.Preview _flaxSuper_transform() {
    if (_flaxActiveSuperMember == "transform") _flaxCalledSuper = true;
    return super.transform();
  }

  @override
  api.PreviewBuilder toBuilder() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toBuilder();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.PreviewBuilder;
    return _flaxConvertedResult;
  }

  api.PreviewBuilder _flaxSuper_toBuilder() {
    return super.toBuilder();
  }

  @override
  String get group {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.group;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_group {
    return super.group;
  }

  @override
  String? get name {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.name;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_name {
    return super.name;
  }

  @override
  api1.Size? get size {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.size;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Size?;
    return _flaxConvertedResult;
  }

  api1.Size? get _flaxSuperGet_size {
    return super.size;
  }

  @override
  double? get textScaleFactor {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.textScaleFactor;
    final _flaxConvertedResult = _flaxResult.$2 as double?;
    return _flaxConvertedResult;
  }

  double? get _flaxSuperGet_textScaleFactor {
    return super.textScaleFactor;
  }

  @override
  api3.Widget Function(api3.Widget p0)? get wrapper {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.wrapper;
    final _flaxConvertedResult =
        _flaxResult.$2 as api3.Widget Function(api3.Widget p0)?;
    return _flaxConvertedResult;
  }

  api3.Widget Function(api3.Widget p0)? get _flaxSuperGet_wrapper {
    return super.wrapper;
  }

  @override
  api.PreviewThemeData Function()? get theme {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.theme;
    final _flaxConvertedResult =
        _flaxResult.$2 as api.PreviewThemeData Function()?;
    return _flaxConvertedResult;
  }

  api.PreviewThemeData Function()? get _flaxSuperGet_theme {
    return super.theme;
  }

  @override
  api1.Brightness? get brightness {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.brightness;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Brightness?;
    return _flaxConvertedResult;
  }

  api1.Brightness? get _flaxSuperGet_brightness {
    return super.brightness;
  }

  @override
  api.PreviewLocalizationsData Function()? get localizations {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.localizations;
    final _flaxConvertedResult =
        _flaxResult.$2 as api.PreviewLocalizationsData Function()?;
    return _flaxConvertedResult;
  }

  api.PreviewLocalizationsData Function()? get _flaxSuperGet_localizations {
    return super.localizations;
  }
}

final class _PreviewLocalizationsDataProxy
    extends api.PreviewLocalizationsData {
  final FlaxProxyPeer _flaxPeer;
  _PreviewLocalizationsDataProxy(
    this._flaxPeer, {
    api1.Locale? super.locale,
    List<api1.Locale> super.supportedLocales,
    Iterable<api3.LocalizationsDelegate<Object?>>? super.localizationsDelegates,
    api1.Locale? Function(
      List<api1.Locale>? locales,
      Iterable<api1.Locale> supportedLocales,
    )?
    super.localeListResolutionCallback,
    api1.Locale? Function(
      api1.Locale? locale,
      Iterable<api1.Locale> supportedLocales,
    )?
    super.localeResolutionCallback,
  });
  @override
  api1.Locale? get locale {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.locale;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Locale?;
    return _flaxConvertedResult;
  }

  api1.Locale? get _flaxSuperGet_locale {
    return super.locale;
  }

  @override
  List<api1.Locale> get supportedLocales {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.supportedLocales;
    final _flaxConvertedResult = _flaxResult.$2 as List<api1.Locale>;
    return _flaxConvertedResult;
  }

  List<api1.Locale> get _flaxSuperGet_supportedLocales {
    return super.supportedLocales;
  }

  @override
  Iterable<api3.LocalizationsDelegate<Object?>>? get localizationsDelegates {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.localizationsDelegates;
    final _flaxConvertedResult =
        _flaxResult.$2 as Iterable<api3.LocalizationsDelegate<Object?>>?;
    return _flaxConvertedResult;
  }

  Iterable<api3.LocalizationsDelegate<Object?>>?
  get _flaxSuperGet_localizationsDelegates {
    return super.localizationsDelegates;
  }

  @override
  api1.Locale? Function(
    List<api1.Locale>? locales,
    Iterable<api1.Locale> supportedLocales,
  )?
  get localeListResolutionCallback {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.localeListResolutionCallback;
    final _flaxConvertedResult =
        _flaxResult.$2
            as api1.Locale? Function(
              List<api1.Locale>? locales,
              Iterable<api1.Locale> supportedLocales,
            )?;
    return _flaxConvertedResult;
  }

  api1.Locale? Function(
    List<api1.Locale>? locales,
    Iterable<api1.Locale> supportedLocales,
  )?
  get _flaxSuperGet_localeListResolutionCallback {
    return super.localeListResolutionCallback;
  }

  @override
  api1.Locale? Function(
    api1.Locale? locale,
    Iterable<api1.Locale> supportedLocales,
  )?
  get localeResolutionCallback {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.localeResolutionCallback;
    final _flaxConvertedResult =
        _flaxResult.$2
            as api1.Locale? Function(
              api1.Locale? locale,
              Iterable<api1.Locale> supportedLocales,
            )?;
    return _flaxConvertedResult;
  }

  api1.Locale? Function(
    api1.Locale? locale,
    Iterable<api1.Locale> supportedLocales,
  )?
  get _flaxSuperGet_localeResolutionCallback {
    return super.localeResolutionCallback;
  }
}

final class _PreviewThemeDataProxy extends api.PreviewThemeData {
  final FlaxProxyPeer _flaxPeer;
  _PreviewThemeDataProxy(this._flaxPeer);
  @override
  api3.Widget apply(api3.BuildContext context, api3.Widget child) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      context,
      child,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: apply');
    }
    final _flaxConvertedResult = _flaxResult.$2 as api3.Widget;
    return _flaxConvertedResult;
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[1,1,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape1),
  FlaxDartShapeTemplate("[\"callback\",[2,2,[],[]]]", _flaxShape2),
];
Function _flaxShape0<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape1 Function(_Shape0 p0)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "p0",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            FlaxCallbackAdapters.wrap1<_Shape0, _Shape1>,
            id:
                types.key<_Shape1 Function(_Shape0 p0)>() +
                ":callback:<>(p:r:p0:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke1<_Shape0, _Shape1>,
            matches: FlaxCallbackAdapters.matches1<_Shape0, _Shape1>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape1<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
  return types.define<_Shape0 Function()>(
    FlaxTypeRef(
      "callback",
      nullable: false,
      callback: FlaxCallbackBinding(
        [],
        types.ref<_Shape0>(withinCallback: true),
        FlaxCallbackAdapters.wrap0<_Shape0>,
        id: types.key<_Shape0 Function()>() + ":callback:<>()->parameter:",
        invoke: FlaxCallbackAdapters.invoke0<_Shape0>,
        matches: FlaxCallbackAdapters.matches0<_Shape0>,
      ),
    ),
    withinCallback: withinCallback,
  );
};
Function _flaxShape2<_Shape0, _Shape1, _Shape2>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types
          .define<_Shape2 Function(_Shape0 locales, _Shape1 supportedLocales)>(
            FlaxTypeRef(
              "callback",
              nullable: false,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "locales",
                    types.ref<_Shape0>(withinCallback: true),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "supportedLocales",
                    types.ref<_Shape1>(withinCallback: true),
                    required: true,
                    positional: true,
                  ),
                ],
                types.ref<_Shape2>(withinCallback: true),
                FlaxCallbackAdapters.wrap2<_Shape0, _Shape1, _Shape2>,
                id:
                    types
                        .key<
                          _Shape2 Function(
                            _Shape0 locales,
                            _Shape1 supportedLocales,
                          )
                        >() +
                    ":callback:<>(p:r:locales:parameter:,p:r:supportedLocales:parameter:)->parameter:",
                invoke: FlaxCallbackAdapters.invoke2<_Shape0, _Shape1, _Shape2>,
                matches:
                    FlaxCallbackAdapters.matches2<_Shape0, _Shape1, _Shape2>,
              ),
            ),
            withinCallback: withinCallback,
          );
    };
Object _collection0Create() => <api.Preview>[];
bool _collection0Matches(Object value) => value is List<api.Preview>;
Object _collection1Create() => <api.Preview>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Preview>();
bool _collection1Matches(Object value) => value is Iterable<api.Preview>;
Object _collection2Create() => <api1.Locale>[];
bool _collection2Matches(Object value) => value is List<api1.Locale>;
Object _collection3Create() => <api1.Locale>[];
Object _collection3Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.Locale>();
bool _collection3Matches(Object value) => value is Iterable<api1.Locale>;
Object _collection4Create() => <api3.LocalizationsDelegate<Object?>>[];
Object _collection4Restore(Object value) =>
    (value as Iterable<Object?>).cast<api3.LocalizationsDelegate<Object?>>();
bool _collection4Matches(Object value) =>
    value is Iterable<api3.LocalizationsDelegate<Object?>>;
Object _collection5Create() => <api.PreviewThemeData>[];
bool _collection5Matches(Object value) => value is List<api.PreviewThemeData>;
Object _collection6Create() => <api.PreviewThemeData>[];
Object _collection6Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.PreviewThemeData>();
bool _collection6Matches(Object value) =>
    value is Iterable<api.PreviewThemeData>;
const _flaxBinding0 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widget_previews#type:Preview",
);
const _flaxBinding1 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_widget_previews#type:Preview]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding2 = FlaxTypeRef(
  "list",
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_widget_previews#type:Preview]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding1,
);
const _flaxBinding3 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding2,
  id: "callback:<>()->list:[object:flax.core/sdk_widget_previews#type:Preview]",
);
const _flaxBinding4 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding0,
  id: "callback:<>()->object:flax.core/sdk_widget_previews#type:Preview",
);
const _flaxBinding5 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widget_previews#type:PreviewBuilder",
);
const _flaxBinding6 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding5,
  id: "callback:<>()->object:flax.core/sdk_widget_previews#type:PreviewBuilder",
);
const _flaxBinding7 = FlaxTypeRef("String");
const _flaxBinding8 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding7,
  id: "callback:<>()->String:",
);
const _flaxBinding9 = FlaxTypeRef("String", nullable: true);
const _flaxBinding10 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding9,
  id: "callback:<>()->String?:",
);
const _flaxBinding11 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Size",
  nullable: true,
);
const _flaxBinding12 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding11,
  id: "callback:<>()->object?:flax.core/flutter#type:Size",
);
const _flaxBinding13 = FlaxTypeRef("double", nullable: true);
const _flaxBinding14 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding13,
  id: "callback:<>()->double?:",
);
const _flaxBinding15 = FlaxTypeRef("widget");
const _flaxBinding16 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "p0",
      _flaxBinding15,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding15,
  FlaxCallbackAdapters.wrap1<api3.Widget, api3.Widget>,
  id: "callback:<>(p:r:p0:widget:)->widget:",
  invoke: FlaxCallbackAdapters.invoke1<api3.Widget, api3.Widget>,
  matches: FlaxCallbackAdapters.matches1<api3.Widget, api3.Widget>,
);
const _flaxBinding17 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding16,
);
const _flaxBinding18 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding17,
  id: "callback:<>()->callback?:<>(p:r:p0:widget:)->widget:",
);
const _flaxBinding19 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widget_previews#type:PreviewThemeData",
);
const _flaxBinding20 = FlaxCallbackBinding(
  [],
  _flaxBinding19,
  FlaxCallbackAdapters.wrap0<api.PreviewThemeData>,
  id: "callback:<>()->object:flax.core/sdk_widget_previews#type:PreviewThemeData",
  invoke: FlaxCallbackAdapters.invoke0<api.PreviewThemeData>,
  matches: FlaxCallbackAdapters.matches0<api.PreviewThemeData>,
);
const _flaxBinding21 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding20,
);
const _flaxBinding22 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding21,
  id: "callback:<>()->callback?:<>()->object:flax.core/sdk_widget_previews#type:PreviewThemeData",
);
const _flaxBinding23 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dart_ui#type:Brightness",
  nullable: true,
);
const _flaxBinding24 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding23,
  id: "callback:<>()->enum?:flax.core/sdk_dart_ui#type:Brightness",
);
const _flaxBinding25 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widget_previews#type:PreviewLocalizationsData",
);
const _flaxBinding26 = FlaxCallbackBinding(
  [],
  _flaxBinding25,
  FlaxCallbackAdapters.wrap0<api.PreviewLocalizationsData>,
  id: "callback:<>()->object:flax.core/sdk_widget_previews#type:PreviewLocalizationsData",
  invoke: FlaxCallbackAdapters.invoke0<api.PreviewLocalizationsData>,
  matches: FlaxCallbackAdapters.matches0<api.PreviewLocalizationsData>,
);
const _flaxBinding27 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding26,
);
const _flaxBinding28 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding27,
  id: "callback:<>()->callback?:<>()->object:flax.core/sdk_widget_previews#type:PreviewLocalizationsData",
);
const _flaxBinding29 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
  nullable: true,
);
const _flaxBinding30 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding29,
  id: "callback:<>()->object?:flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding31 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding32 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding31,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection3Create,
    _collection3Matches,
    restore: _collection3Restore,
  ),
);
const _flaxBinding33 = FlaxTypeRef(
  "list",
  item: _flaxBinding31,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding32,
);
const _flaxBinding34 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding33,
  id: "callback:<>()->list:[object:flax.core/sdk_dart_ui#type:Locale]",
);
const _flaxBinding35 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:LocalizationsDelegate",
  dartType: FlaxDartTypes.typeOf<api3.LocalizationsDelegate<Object?>>,
);
const _flaxBinding36 = FlaxTypeRef(
  "iterable",
  nullable: true,
  item: _flaxBinding35,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_widgets#type:LocalizationsDelegate<any?:>]",
    _collection4Create,
    _collection4Matches,
    restore: _collection4Restore,
  ),
);
const _flaxBinding37 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding36,
  id: "callback:<>()->iterable?:[object:flax.core/sdk_widgets#type:LocalizationsDelegate<any?:>]",
);
const _flaxBinding38 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding31,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dart_ui#type:Locale]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding32,
);
const _flaxBinding39 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "locales",
      _flaxBinding38,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "supportedLocales",
      _flaxBinding32,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding29,
  FlaxCallbackAdapters
      .wrap2<List<api1.Locale>?, Iterable<api1.Locale>, api1.Locale?>,
  id: "callback:<>(p:r:locales:list?:[object:flax.core/sdk_dart_ui#type:Locale],p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<List<api1.Locale>?, Iterable<api1.Locale>, api1.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<List<api1.Locale>?, Iterable<api1.Locale>, api1.Locale?>,
);
const _flaxBinding40 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding39,
);
const _flaxBinding41 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding40,
  id: "callback:<>()->callback?:<>(p:r:locales:list?:[object:flax.core/sdk_dart_ui#type:Locale],p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding42 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "locale",
      _flaxBinding29,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "supportedLocales",
      _flaxBinding32,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding29,
  FlaxCallbackAdapters.wrap2<api1.Locale?, Iterable<api1.Locale>, api1.Locale?>,
  id: "callback:<>(p:r:locale:object?:flax.core/sdk_dart_ui#type:Locale,p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
  invoke: FlaxCallbackAdapters
      .invoke2<api1.Locale?, Iterable<api1.Locale>, api1.Locale?>,
  matches: FlaxCallbackAdapters
      .matches2<api1.Locale?, Iterable<api1.Locale>, api1.Locale?>,
);
const _flaxBinding43 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding42,
);
const _flaxBinding44 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding43,
  id: "callback:<>()->callback?:<>(p:r:locale:object?:flax.core/sdk_dart_ui#type:Locale,p:r:supportedLocales:iterable:[object:flax.core/sdk_dart_ui#type:Locale])->object?:flax.core/sdk_dart_ui#type:Locale",
);
const _flaxBinding45 = FlaxTypeRef(
  "context",
  id: "flax.core/flutter#type:BuildContext",
);
const _flaxBinding46 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "context",
      _flaxBinding45,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "child",
      _flaxBinding15,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding15,
  id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:child:widget:)->widget:",
);
const _flaxBinding47 = FlaxGetter(
  "previews",
  _flaxBinding2,
  _MultiPreview_previews,
);
const _flaxBinding48 = FlaxInstanceMethod.signature(
  _flaxBinding3,
  _MultiPreview_transform,
);
const _flaxBinding49 = <FlaxParameter>[];
const _flaxBinding50 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding3,
  hasSuper: true,
);
const _flaxBinding51 = FlaxProxyMember("previews", 1, _flaxBinding3);
const _flaxBinding52 = FlaxObjectBinding(
  "flax.core/sdk_widget_previews#type:MultiPreview",
  [_flaxBinding47],
  {
    "transform": _flaxBinding48,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _MultiPreview_super_transform,
    ),
  },
  constructors: {"@implementation": _flaxBinding49},
  create: _createMultiPreview,
  matches: _isMultiPreview,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding50, _flaxBinding51]),
);
const _flaxBinding53 = FlaxInstanceMethod.signature(
  _flaxBinding46,
  _PreviewThemeData_apply,
);
const _flaxBinding54 = FlaxProxyMember("apply", 0, _flaxBinding46);
const _flaxBinding55 = FlaxObjectBinding(
  "flax.core/sdk_widget_previews#type:PreviewThemeData",
  [],
  {"apply": _flaxBinding53},
  constructors: {"@implementation": _flaxBinding49},
  create: _createPreviewThemeData,
  matches: _isPreviewThemeData,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding54]),
);
const _flaxBinding56 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding19,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_widget_previews#type:PreviewThemeData]",
    _collection6Create,
    _collection6Matches,
    restore: _collection6Restore,
  ),
);
const _flaxBinding57 = FlaxTypeRef(
  "list",
  item: _flaxBinding19,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_widget_previews#type:PreviewThemeData]",
    _collection5Create,
    _collection5Matches,
  ),
  iterable: _flaxBinding56,
);
const _flaxBinding58 = FlaxGetter(
  "themes",
  _flaxBinding57,
  _MultiPreviewThemeData_themes,
);
const _flaxBinding59 = <FlaxParameter>[
  FlaxParameter("themes", _flaxBinding57, required: true),
];
const _flaxBinding60 = FlaxObjectBinding(
  "flax.core/sdk_widget_previews#type:MultiPreviewThemeData",
  [_flaxBinding58],
  {},
  constructors: {"": _flaxBinding59},
  create: _createMultiPreviewThemeData,
  matches: _isMultiPreviewThemeData,
  setters: [],
  supertypes: [
    "flax.core/sdk_widget_previews#type:PreviewThemeData",
    "dart:core::Object",
  ],
  parent: _flaxBinding55,
);
const _flaxBinding61 = FlaxGetter("group", _flaxBinding7, _Preview_group);
const _flaxBinding62 = FlaxGetter("name", _flaxBinding9, _Preview_name);
const _flaxBinding63 = FlaxGetter("size", _flaxBinding11, _Preview_size);
const _flaxBinding64 = FlaxGetter(
  "textScaleFactor",
  _flaxBinding13,
  _Preview_textScaleFactor,
);
const _flaxBinding65 = FlaxGetter("wrapper", _flaxBinding17, _Preview_wrapper);
const _flaxBinding66 = FlaxGetter("theme", _flaxBinding21, _Preview_theme);
const _flaxBinding67 = FlaxGetter(
  "brightness",
  _flaxBinding23,
  _Preview_brightness,
);
const _flaxBinding68 = FlaxGetter(
  "localizations",
  _flaxBinding27,
  _Preview_localizations,
);
const _flaxBinding69 = FlaxInstanceMethod.signature(
  _flaxBinding4,
  _Preview_transform,
);
const _flaxBinding70 = FlaxInstanceMethod.signature(
  _flaxBinding6,
  _Preview_toBuilder,
);
const _flaxBinding71 = <FlaxParameter>[
  FlaxParameter(
    "group",
    _flaxBinding7,
    required: false,
    defaultValue: 'Default',
  ),
  FlaxParameter("name", _flaxBinding9, required: false),
  FlaxParameter("size", _flaxBinding11, required: false),
  FlaxParameter("textScaleFactor", _flaxBinding13, required: false),
  FlaxParameter("wrapper", _flaxBinding17, required: false),
  FlaxParameter("theme", _flaxBinding21, required: false),
  FlaxParameter("brightness", _flaxBinding23, required: false),
  FlaxParameter("localizations", _flaxBinding27, required: false),
];
const _flaxBinding72 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding73 = FlaxProxyMember(
  "toBuilder",
  0,
  _flaxBinding6,
  hasSuper: true,
);
const _flaxBinding74 = FlaxProxyMember(
  "group",
  1,
  _flaxBinding8,
  hasSuper: true,
);
const _flaxBinding75 = FlaxProxyMember(
  "name",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding76 = FlaxProxyMember(
  "size",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding77 = FlaxProxyMember(
  "textScaleFactor",
  1,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding78 = FlaxProxyMember(
  "wrapper",
  1,
  _flaxBinding18,
  hasSuper: true,
);
const _flaxBinding79 = FlaxProxyMember(
  "theme",
  1,
  _flaxBinding22,
  hasSuper: true,
);
const _flaxBinding80 = FlaxProxyMember(
  "brightness",
  1,
  _flaxBinding24,
  hasSuper: true,
);
const _flaxBinding81 = FlaxProxyMember(
  "localizations",
  1,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding82 = FlaxObjectBinding(
  "flax.core/sdk_widget_previews#type:Preview",
  [
    _flaxBinding61,
    _flaxBinding62,
    _flaxBinding63,
    _flaxBinding64,
    _flaxBinding65,
    _flaxBinding66,
    _flaxBinding67,
    _flaxBinding68,
  ],
  {
    "transform": _flaxBinding69,
    "toBuilder": _flaxBinding70,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding4,
      _Preview_super_transform,
    ),
    "@super:toBuilder": FlaxInstanceMethod.signature(
      _flaxBinding6,
      _Preview_super_toBuilder,
    ),
    "@super:get:group": FlaxInstanceMethod.signature(
      _flaxBinding8,
      _Preview_super_get_group,
    ),
    "@super:get:name": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _Preview_super_get_name,
    ),
    "@super:get:size": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _Preview_super_get_size,
    ),
    "@super:get:textScaleFactor": FlaxInstanceMethod.signature(
      _flaxBinding14,
      _Preview_super_get_textScaleFactor,
    ),
    "@super:get:wrapper": FlaxInstanceMethod.signature(
      _flaxBinding18,
      _Preview_super_get_wrapper,
    ),
    "@super:get:theme": FlaxInstanceMethod.signature(
      _flaxBinding22,
      _Preview_super_get_theme,
    ),
    "@super:get:brightness": FlaxInstanceMethod.signature(
      _flaxBinding24,
      _Preview_super_get_brightness,
    ),
    "@super:get:localizations": FlaxInstanceMethod.signature(
      _flaxBinding28,
      _Preview_super_get_localizations,
    ),
  },
  constructors: {"@implementation": _flaxBinding71},
  create: _createPreview,
  matches: _isPreview,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding72,
    _flaxBinding73,
    _flaxBinding74,
    _flaxBinding75,
    _flaxBinding76,
    _flaxBinding77,
    _flaxBinding78,
    _flaxBinding79,
    _flaxBinding80,
    _flaxBinding81,
  ]),
);
const _flaxBinding83 = FlaxGetter(
  "group",
  _flaxBinding9,
  _PreviewBuilder_group,
);
const _flaxBinding84 = FlaxGetter("name", _flaxBinding9, _PreviewBuilder_name);
const _flaxBinding85 = FlaxGetter("size", _flaxBinding11, _PreviewBuilder_size);
const _flaxBinding86 = FlaxGetter(
  "textScaleFactor",
  _flaxBinding13,
  _PreviewBuilder_textScaleFactor,
);
const _flaxBinding87 = FlaxGetter(
  "wrapper",
  _flaxBinding17,
  _PreviewBuilder_wrapper,
);
const _flaxBinding88 = FlaxGetter(
  "theme",
  _flaxBinding21,
  _PreviewBuilder_theme,
);
const _flaxBinding89 = FlaxGetter(
  "brightness",
  _flaxBinding23,
  _PreviewBuilder_brightness,
);
const _flaxBinding90 = FlaxGetter(
  "localizations",
  _flaxBinding27,
  _PreviewBuilder_localizations,
);
const _flaxBinding91 = FlaxSetter(
  "group",
  _flaxBinding9,
  _PreviewBuilder_set_group,
);
const _flaxBinding92 = FlaxSetter(
  "name",
  _flaxBinding9,
  _PreviewBuilder_set_name,
);
const _flaxBinding93 = FlaxSetter(
  "size",
  _flaxBinding11,
  _PreviewBuilder_set_size,
);
const _flaxBinding94 = FlaxSetter(
  "textScaleFactor",
  _flaxBinding13,
  _PreviewBuilder_set_textScaleFactor,
);
const _flaxBinding95 = FlaxSetter(
  "wrapper",
  _flaxBinding17,
  _PreviewBuilder_set_wrapper,
);
const _flaxBinding96 = FlaxSetter(
  "theme",
  _flaxBinding21,
  _PreviewBuilder_set_theme,
);
const _flaxBinding97 = FlaxSetter(
  "brightness",
  _flaxBinding23,
  _PreviewBuilder_set_brightness,
);
const _flaxBinding98 = FlaxSetter(
  "localizations",
  _flaxBinding27,
  _PreviewBuilder_set_localizations,
);
const _flaxBinding99 = FlaxTypeRef("callback", callback: _flaxBinding16);
const _flaxBinding100 = FlaxTypeRef("void");
const _flaxBinding101 = <FlaxParameter>[
  FlaxParameter("newWrapper", _flaxBinding99, required: true),
];
const _flaxBinding102 = FlaxInstanceMethod(
  _flaxBinding101,
  _flaxBinding100,
  _PreviewBuilder_addWrapper,
);
const _flaxBinding103 = FlaxInstanceMethod.signature(
  _flaxBinding4,
  _PreviewBuilder_build,
);
const _flaxBinding104 = FlaxObjectBinding(
  "flax.core/sdk_widget_previews#type:PreviewBuilder",
  [
    _flaxBinding83,
    _flaxBinding84,
    _flaxBinding85,
    _flaxBinding86,
    _flaxBinding87,
    _flaxBinding88,
    _flaxBinding89,
    _flaxBinding90,
  ],
  {"addWrapper": _flaxBinding102, "build": _flaxBinding103},
  constructors: {"": _flaxBinding49},
  create: _createPreviewBuilder,
  matches: _isPreviewBuilder,
  setters: [
    _flaxBinding91,
    _flaxBinding92,
    _flaxBinding93,
    _flaxBinding94,
    _flaxBinding95,
    _flaxBinding96,
    _flaxBinding97,
    _flaxBinding98,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding105 = FlaxGetter(
  "locale",
  _flaxBinding29,
  _PreviewLocalizationsData_locale,
);
const _flaxBinding106 = FlaxGetter(
  "supportedLocales",
  _flaxBinding33,
  _PreviewLocalizationsData_supportedLocales,
);
const _flaxBinding107 = FlaxGetter(
  "localizationsDelegates",
  _flaxBinding36,
  _PreviewLocalizationsData_localizationsDelegates,
);
const _flaxBinding108 = FlaxGetter(
  "localeListResolutionCallback",
  _flaxBinding40,
  _PreviewLocalizationsData_localeListResolutionCallback,
);
const _flaxBinding109 = FlaxGetter(
  "localeResolutionCallback",
  _flaxBinding43,
  _PreviewLocalizationsData_localeResolutionCallback,
);
const _flaxBinding110 = <FlaxParameter>[
  FlaxParameter("locale", _flaxBinding29, required: false),
  FlaxParameter(
    "supportedLocales",
    _flaxBinding33,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("localizationsDelegates", _flaxBinding36, required: false),
  FlaxParameter(
    "localeListResolutionCallback",
    _flaxBinding40,
    required: false,
  ),
  FlaxParameter("localeResolutionCallback", _flaxBinding43, required: false),
];
const _flaxBinding111 = FlaxProxyMember(
  "locale",
  1,
  _flaxBinding30,
  hasSuper: true,
);
const _flaxBinding112 = FlaxProxyMember(
  "supportedLocales",
  1,
  _flaxBinding34,
  hasSuper: true,
);
const _flaxBinding113 = FlaxProxyMember(
  "localizationsDelegates",
  1,
  _flaxBinding37,
  hasSuper: true,
);
const _flaxBinding114 = FlaxProxyMember(
  "localeListResolutionCallback",
  1,
  _flaxBinding41,
  hasSuper: true,
);
const _flaxBinding115 = FlaxProxyMember(
  "localeResolutionCallback",
  1,
  _flaxBinding44,
  hasSuper: true,
);
const _flaxBinding116 = FlaxObjectBinding(
  "flax.core/sdk_widget_previews#type:PreviewLocalizationsData",
  [
    _flaxBinding105,
    _flaxBinding106,
    _flaxBinding107,
    _flaxBinding108,
    _flaxBinding109,
  ],
  {
    "@super:get:locale": FlaxInstanceMethod.signature(
      _flaxBinding30,
      _PreviewLocalizationsData_super_get_locale,
    ),
    "@super:get:supportedLocales": FlaxInstanceMethod.signature(
      _flaxBinding34,
      _PreviewLocalizationsData_super_get_supportedLocales,
    ),
    "@super:get:localizationsDelegates": FlaxInstanceMethod.signature(
      _flaxBinding37,
      _PreviewLocalizationsData_super_get_localizationsDelegates,
    ),
    "@super:get:localeListResolutionCallback": FlaxInstanceMethod.signature(
      _flaxBinding41,
      _PreviewLocalizationsData_super_get_localeListResolutionCallback,
    ),
    "@super:get:localeResolutionCallback": FlaxInstanceMethod.signature(
      _flaxBinding44,
      _PreviewLocalizationsData_super_get_localeResolutionCallback,
    ),
  },
  constructors: {"@implementation": _flaxBinding110},
  create: _createPreviewLocalizationsData,
  matches: _isPreviewLocalizationsData,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding111,
    _flaxBinding112,
    _flaxBinding113,
    _flaxBinding114,
    _flaxBinding115,
  ]),
);
