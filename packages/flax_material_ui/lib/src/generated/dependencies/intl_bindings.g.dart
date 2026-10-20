// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:intl/date_symbols.dart' as api;
import 'package:flax/bindings.dart';
import 'package:intl/intl.dart' as api1;

import 'dart:core' as api2;

import 'package:intl/number_symbols.dart' as api3;

// ignore: unused_element
const _flaxOmitted = Object();
const dependency_intlBindings = FlaxBindingModule(
  'dependency_intl',
  [
    _flaxBinding175,
    _flaxBinding289,
    _flaxBinding338,
    FlaxObjectBinding(
      "flax.material/dependency_intl#type:NumberParserBase",
      [
        _flaxBinding339,
        _flaxBinding340,
        FlaxGetter.plain(
          "value",
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_value,
        ),
        _flaxBinding341,
        _flaxBinding342,
        _flaxBinding343,
        _flaxBinding344,
        _flaxBinding345,
        _flaxBinding346,
        _flaxBinding347,
        _flaxBinding348,
        _flaxBinding349,
        _flaxBinding350,
      ],
      {
        "invalidFormat": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_invalidFormat,
        ),
        "handleSpace": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_handleSpace,
        ),
        "asDigit": FlaxInstanceMethod.shared(
          _flaxBinding31,
          _NumberParserBase_asDigit,
        ),
        "checkPrefixes": FlaxInstanceMethod.plain(
          _flaxBinding351,
          flaxVoidType,
          _NumberParserBase_checkPrefixes,
        ),
        "checkSuffixes": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_checkSuffixes,
        ),
        "processNonDigit": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_processNonDigit,
        ),
        "parse": FlaxInstanceMethod.plain(
          _flaxBinding352,
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_parse,
        ),
        "invalidNumber": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_invalidNumber,
        ),
        "fromNormalized": FlaxInstanceMethod.plain(
          _flaxBinding353,
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_fromNormalized,
        ),
        "scaled": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "parsed",
              FlaxTypeRef("any", nullable: true),
            ),
            FlaxParameter.required("scale", flaxIntType),
          ],
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_scaled,
        ),
        "nan": FlaxInstanceMethod.plain(
          _flaxBinding352,
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_nan,
        ),
        "positiveInfinity": FlaxInstanceMethod.plain(
          _flaxBinding352,
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_positiveInfinity,
        ),
        "negativeInfinity": FlaxInstanceMethod.plain(
          _flaxBinding352,
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_negativeInfinity,
        ),
        "@super:invalidFormat": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_super_invalidFormat,
        ),
        "@super:handleSpace": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_super_handleSpace,
        ),
        "@super:asDigit": FlaxInstanceMethod.shared(
          _flaxBinding31,
          _NumberParserBase_super_asDigit,
        ),
        "@super:checkPrefixes": FlaxInstanceMethod.plain(
          _flaxBinding351,
          flaxVoidType,
          _NumberParserBase_super_checkPrefixes,
        ),
        "@super:checkSuffixes": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_super_checkSuffixes,
        ),
        "@super:processNonDigit": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_super_processNonDigit,
        ),
        "@super:parse": FlaxInstanceMethod.plain(
          _flaxBinding352,
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_super_parse,
        ),
        "@super:invalidNumber": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _NumberParserBase_super_invalidNumber,
        ),
        "@super:get:format": FlaxInstanceMethod.shared(
          _flaxBinding33,
          _NumberParserBase_super_get_format,
        ),
        "@super:get:text": FlaxInstanceMethod.shared(
          flaxStringCall,
          _NumberParserBase_super_get_text,
        ),
        "@super:get:value": FlaxInstanceMethod.plain(
          _flaxBinding352,
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_super_get_value,
        ),
        "@super:get:symbols": FlaxInstanceMethod.shared(
          _flaxBinding35,
          _NumberParserBase_super_get_symbols,
        ),
        "@super:get:gotPositive": FlaxInstanceMethod.shared(
          flaxBoolCall,
          _NumberParserBase_super_get_gotPositive,
        ),
        "@super:get:gotNegative": FlaxInstanceMethod.shared(
          flaxBoolCall,
          _NumberParserBase_super_get_gotNegative,
        ),
        "@super:get:gotPositiveSuffix": FlaxInstanceMethod.shared(
          flaxBoolCall,
          _NumberParserBase_super_get_gotPositiveSuffix,
        ),
        "@super:get:gotNegativeSuffix": FlaxInstanceMethod.shared(
          flaxBoolCall,
          _NumberParserBase_super_get_gotNegativeSuffix,
        ),
        "@super:get:done": FlaxInstanceMethod.shared(
          flaxBoolCall,
          _NumberParserBase_super_get_done,
        ),
        "@super:get:prefixesSkipped": FlaxInstanceMethod.shared(
          flaxBoolCall,
          _NumberParserBase_super_get_prefixesSkipped,
        ),
        "@super:get:scale": FlaxInstanceMethod.shared(
          flaxIntCall,
          _NumberParserBase_super_get_scale,
        ),
        "@super:get:replacements": FlaxInstanceMethod.shared(
          _flaxBinding37,
          _NumberParserBase_super_get_replacements,
        ),
        "@super:get:groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit":
            FlaxInstanceMethod.shared(
              flaxBoolCall,
              _NumberParserBase_super_get_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit,
            ),
        "@super:set:value": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", FlaxTypeRef("any", nullable: true))],
          flaxVoidType,
          _NumberParserBase_super_set_value,
        ),
        "@super:set:gotPositive": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_gotPositive,
        ),
        "@super:set:gotNegative": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_gotNegative,
        ),
        "@super:set:gotPositiveSuffix": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_gotPositiveSuffix,
        ),
        "@super:set:gotNegativeSuffix": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_gotNegativeSuffix,
        ),
        "@super:set:done": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_done,
        ),
        "@super:set:prefixesSkipped": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_prefixesSkipped,
        ),
        "@super:set:scale": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxIntType)],
          flaxVoidType,
          _NumberParserBase_super_set_scale,
        ),
      },
      constructors: {"@implementation": _flaxBinding354},
      create: _createNumberParserBase,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [
        FlaxSetter(
          "value",
          FlaxTypeRef("any", nullable: true),
          _NumberParserBase_set_value,
        ),
        _flaxBinding355,
        _flaxBinding356,
        _flaxBinding357,
        _flaxBinding358,
        _flaxBinding359,
        _flaxBinding360,
        _flaxBinding361,
      ],
      matches: _isNumberParserBase,
      methods: const {},
      proxy: FlaxProxyBinding([
        _flaxBinding362,
        _flaxBinding363,
        _flaxBinding364,
        _flaxBinding366,
        _flaxBinding367,
        _flaxBinding368,
        FlaxProxyMember(
          "parse",
          0,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding369,
        FlaxProxyMember(
          "fromNormalized",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("normalizedText", flaxStringType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:normalizedText:String:)->any?:",
          ),
        ),
        FlaxProxyMember(
          "scaled",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "parsed",
                FlaxTypeRef("any", nullable: true),
              ),
              FlaxCallbackParameter.plain("scale", flaxIntType),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:parsed:any?:,p:r:scale:int:)->any?:",
          ),
        ),
        FlaxProxyMember(
          "nan",
          0,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
        ),
        FlaxProxyMember(
          "positiveInfinity",
          0,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
        ),
        FlaxProxyMember(
          "negativeInfinity",
          0,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
        ),
        _flaxBinding370,
        _flaxBinding371,
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding372,
        _flaxBinding373,
        _flaxBinding374,
        _flaxBinding375,
        _flaxBinding376,
        _flaxBinding377,
        _flaxBinding378,
        _flaxBinding379,
        _flaxBinding380,
        _flaxBinding381,
        FlaxProxyMember(
          "value",
          2,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "value",
                FlaxTypeRef("any", nullable: true),
              ),
            ],
            flaxVoidType,
            id: "callback:<>(p:r:value:any?:)->void:",
          ),
          hasSuper: true,
        ),
        _flaxBinding382,
        _flaxBinding383,
        _flaxBinding384,
        _flaxBinding385,
        _flaxBinding386,
        _flaxBinding387,
        _flaxBinding388,
      ]),
    ),
    _flaxBinding422,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.material/dependency_intl#function:DateFormat.allLocalesWithSymbols",
      [],
      _flaxBinding18,
      _DateFormat_allLocalesWithSymbols,
    ),
    FlaxFunctionBinding(
      "flax.material/dependency_intl#function:DateFormat.shouldUseNativeDigitsByDefaultFor",
      [FlaxParameter.required("locale", flaxStringType)],
      flaxBoolType,
      _DateFormat_shouldUseNativeDigitsByDefaultFor,
    ),
    FlaxFunctionBinding(
      "flax.material/dependency_intl#function:DateFormat.useNativeDigitsByDefaultFor",
      [
        FlaxParameter.required("locale", flaxStringType),
        FlaxParameter.required("value", flaxBoolType),
      ],
      flaxVoidType,
      _DateFormat_useNativeDigitsByDefaultFor,
    ),
    FlaxFunctionBinding(
      "flax.material/dependency_intl#function:DateFormat.localeExists",
      [FlaxParameter.required("localeName", flaxNullableStringType)],
      flaxBoolType,
      _DateFormat_localeExists,
    ),
    FlaxFunctionBinding(
      "flax.material/dependency_intl#function:NumberFormat.localeExists",
      [FlaxParameter.required("localeName", flaxNullableStringType)],
      flaxBoolType,
      _NumberFormat_localeExists,
    ),
    FlaxFunctionBinding(
      "flax.material/dependency_intl#function:NumberFormat.numberOfIntegerDigits",
      [FlaxParameter.required("number", flaxNullableAnyType)],
      flaxIntType,
      _NumberFormat_numberOfIntegerDigits,
    ),
  ],
  constants: [
    FlaxConstantGroup(flaxStringType, {
      "flax.material/dependency_intl#read:DateFormat.ABBR_MONTH":
          api1.DateFormat.ABBR_MONTH,
      "flax.material/dependency_intl#read:DateFormat.DAY": api1.DateFormat.DAY,
      "flax.material/dependency_intl#read:DateFormat.ABBR_WEEKDAY":
          api1.DateFormat.ABBR_WEEKDAY,
      "flax.material/dependency_intl#read:DateFormat.WEEKDAY":
          api1.DateFormat.WEEKDAY,
      "flax.material/dependency_intl#read:DateFormat.ABBR_STANDALONE_MONTH":
          api1.DateFormat.ABBR_STANDALONE_MONTH,
      "flax.material/dependency_intl#read:DateFormat.STANDALONE_MONTH":
          api1.DateFormat.STANDALONE_MONTH,
      "flax.material/dependency_intl#read:DateFormat.NUM_MONTH":
          api1.DateFormat.NUM_MONTH,
      "flax.material/dependency_intl#read:DateFormat.NUM_MONTH_DAY":
          api1.DateFormat.NUM_MONTH_DAY,
      "flax.material/dependency_intl#read:DateFormat.NUM_MONTH_WEEKDAY_DAY":
          api1.DateFormat.NUM_MONTH_WEEKDAY_DAY,
      "flax.material/dependency_intl#read:DateFormat.ABBR_MONTH_DAY":
          api1.DateFormat.ABBR_MONTH_DAY,
      "flax.material/dependency_intl#read:DateFormat.ABBR_MONTH_WEEKDAY_DAY":
          api1.DateFormat.ABBR_MONTH_WEEKDAY_DAY,
      "flax.material/dependency_intl#read:DateFormat.MONTH":
          api1.DateFormat.MONTH,
      "flax.material/dependency_intl#read:DateFormat.MONTH_DAY":
          api1.DateFormat.MONTH_DAY,
      "flax.material/dependency_intl#read:DateFormat.MONTH_WEEKDAY_DAY":
          api1.DateFormat.MONTH_WEEKDAY_DAY,
      "flax.material/dependency_intl#read:DateFormat.ABBR_QUARTER":
          api1.DateFormat.ABBR_QUARTER,
      "flax.material/dependency_intl#read:DateFormat.QUARTER":
          api1.DateFormat.QUARTER,
      "flax.material/dependency_intl#read:DateFormat.YEAR":
          api1.DateFormat.YEAR,
      "flax.material/dependency_intl#read:DateFormat.YEAR_NUM_MONTH":
          api1.DateFormat.YEAR_NUM_MONTH,
      "flax.material/dependency_intl#read:DateFormat.YEAR_NUM_MONTH_DAY":
          api1.DateFormat.YEAR_NUM_MONTH_DAY,
      "flax.material/dependency_intl#read:DateFormat.YEAR_NUM_MONTH_WEEKDAY_DAY":
          api1.DateFormat.YEAR_NUM_MONTH_WEEKDAY_DAY,
      "flax.material/dependency_intl#read:DateFormat.YEAR_ABBR_MONTH":
          api1.DateFormat.YEAR_ABBR_MONTH,
      "flax.material/dependency_intl#read:DateFormat.YEAR_ABBR_MONTH_DAY":
          api1.DateFormat.YEAR_ABBR_MONTH_DAY,
      "flax.material/dependency_intl#read:DateFormat.YEAR_ABBR_MONTH_WEEKDAY_DAY":
          api1.DateFormat.YEAR_ABBR_MONTH_WEEKDAY_DAY,
      "flax.material/dependency_intl#read:DateFormat.YEAR_MONTH":
          api1.DateFormat.YEAR_MONTH,
      "flax.material/dependency_intl#read:DateFormat.YEAR_MONTH_DAY":
          api1.DateFormat.YEAR_MONTH_DAY,
      "flax.material/dependency_intl#read:DateFormat.YEAR_MONTH_WEEKDAY_DAY":
          api1.DateFormat.YEAR_MONTH_WEEKDAY_DAY,
      "flax.material/dependency_intl#read:DateFormat.YEAR_ABBR_QUARTER":
          api1.DateFormat.YEAR_ABBR_QUARTER,
      "flax.material/dependency_intl#read:DateFormat.YEAR_QUARTER":
          api1.DateFormat.YEAR_QUARTER,
      "flax.material/dependency_intl#read:DateFormat.HOUR24":
          api1.DateFormat.HOUR24,
      "flax.material/dependency_intl#read:DateFormat.HOUR24_MINUTE":
          api1.DateFormat.HOUR24_MINUTE,
      "flax.material/dependency_intl#read:DateFormat.HOUR24_MINUTE_SECOND":
          api1.DateFormat.HOUR24_MINUTE_SECOND,
      "flax.material/dependency_intl#read:DateFormat.HOUR":
          api1.DateFormat.HOUR,
      "flax.material/dependency_intl#read:DateFormat.HOUR_MINUTE":
          api1.DateFormat.HOUR_MINUTE,
      "flax.material/dependency_intl#read:DateFormat.HOUR_MINUTE_SECOND":
          api1.DateFormat.HOUR_MINUTE_SECOND,
      "flax.material/dependency_intl#read:DateFormat.HOUR_MINUTE_GENERIC_TZ":
          api1.DateFormat.HOUR_MINUTE_GENERIC_TZ,
      "flax.material/dependency_intl#read:DateFormat.HOUR_MINUTE_TZ":
          api1.DateFormat.HOUR_MINUTE_TZ,
      "flax.material/dependency_intl#read:DateFormat.HOUR_GENERIC_TZ":
          api1.DateFormat.HOUR_GENERIC_TZ,
      "flax.material/dependency_intl#read:DateFormat.HOUR_TZ":
          api1.DateFormat.HOUR_TZ,
      "flax.material/dependency_intl#read:DateFormat.MINUTE":
          api1.DateFormat.MINUTE,
      "flax.material/dependency_intl#read:DateFormat.MINUTE_SECOND":
          api1.DateFormat.MINUTE_SECOND,
      "flax.material/dependency_intl#read:DateFormat.SECOND":
          api1.DateFormat.SECOND,
    }),
  ],
  moduleId: "flax.material/dependency_intl",
  dependencyModules: ["flax.core/flutter"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "dart-type-tokens",
    "engine-type-handles",
    "generic-call-types",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "native-core-inputs",
    "native-functions",
    "native-navigation-objects",
    "native-widget-proxies",
    "proxy-super-constructors",
    "shared-static-readers",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.material/dependency_intl#type:DateFormat",
      api1.DateFormat,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.material/dependency_intl#type:DateSymbols",
      api.DateSymbols,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.material/dependency_intl#type:NumberFormat",
      api1.NumberFormat,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.material/dependency_intl#type:NumberParserBase",
      api1.NumberParserBase<Object?>,
      "object",
      typeFactory: _flaxType_NumberParserBase,
      factory: _flaxClass_NumberParserBase,
    ),
    FlaxDartClassTemplate(
      "flax.material/dependency_intl#type:NumberSymbols",
      api3.NumberSymbols,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
bool _isDateFormat(Object value) => value is api1.DateFormat;
Object? _DateFormat_dateTimeConstructor(Object value) =>
    (value as api1.DateFormat).dateTimeConstructor;
Object? _DateFormat_dateOnly(Object value) =>
    (value as api1.DateFormat).dateOnly;
Object? _DateFormat_locale(Object value) => (value as api1.DateFormat).locale;
Object? _DateFormat_pattern(Object value) => (value as api1.DateFormat).pattern;
Object? _DateFormat_dateSymbols(Object value) =>
    (value as api1.DateFormat).dateSymbols;
Object? _DateFormat_useNativeDigits(Object value) =>
    (value as api1.DateFormat).useNativeDigits;
Object? _DateFormat_digitMatcher(Object value) =>
    (value as api1.DateFormat).digitMatcher;
Object? _DateFormat_localeZeroCodeUnit(Object value) =>
    (value as api1.DateFormat).localeZeroCodeUnit;
Object? _DateFormat_localeZero(Object value) =>
    (value as api1.DateFormat).localeZero;
Object? _DateFormat_usesNativeDigits(Object value) =>
    (value as api1.DateFormat).usesNativeDigits;
Object? _DateFormat_usesAsciiDigits(Object value) =>
    (value as api1.DateFormat).usesAsciiDigits;
void _DateFormat_set_dateTimeConstructor(Object receiver, Object? value) {
  (receiver as api1.DateFormat).dateTimeConstructor =
      value
          as api2.DateTime Function(
            int year,
            int month,
            int day,
            int hour24,
            int minute,
            int second,
            int fractionalSecond,
            bool utc,
          );
}

void _DateFormat_set_useNativeDigits(Object receiver, Object? value) {
  (receiver as api1.DateFormat).useNativeDigits = value as bool;
}

Object? _DateFormat_allLocalesWithSymbols(Map<String, Object?> values) {
  return api1.DateFormat.allLocalesWithSymbols();
}

Object? _DateFormat_shouldUseNativeDigitsByDefaultFor(
  Map<String, Object?> values,
) {
  return api1.DateFormat.shouldUseNativeDigitsByDefaultFor(
    values["locale"] as String,
  );
}

Object? _DateFormat_useNativeDigitsByDefaultFor(Map<String, Object?> values) {
  api1.DateFormat.useNativeDigitsByDefaultFor(
    values["locale"] as String,
    values["value"] as bool,
  );
  return null;
}

Object? _DateFormat_localeExists(Map<String, Object?> values) {
  return api1.DateFormat.localeExists(values["localeName"] as String?);
}

Object? _DateFormat_format(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).format(values["date"] as api2.DateTime);
}

Object? _DateFormat_parse(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).parse(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_tryParse(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).tryParse(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_parseLoose(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).parseLoose(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_tryParseLoose(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.DateFormat).tryParseLoose(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_parseStrict(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).parseStrict(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_tryParseStrict(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.DateFormat).tryParseStrict(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_parseUTC(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).parseUTC(
    values["inputString"] as String,
  );
}

Object? _DateFormat_parseUtc(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).parseUtc(
    values["inputString"] as String,
  );
}

Object? _DateFormat_tryParseUtc(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).tryParseUtc(
    values["inputString"] as String,
  );
}

Object? _DateFormat_add_d(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_d();
}

Object? _DateFormat_add_E(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_E();
}

Object? _DateFormat_add_EEEE(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_EEEE();
}

Object? _DateFormat_add_LLL(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_LLL();
}

Object? _DateFormat_add_LLLL(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_LLLL();
}

Object? _DateFormat_add_M(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_M();
}

Object? _DateFormat_add_Md(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_Md();
}

Object? _DateFormat_add_MEd(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_MEd();
}

Object? _DateFormat_add_MMM(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_MMM();
}

Object? _DateFormat_add_MMMd(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_MMMd();
}

Object? _DateFormat_add_MMMEd(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_MMMEd();
}

Object? _DateFormat_add_MMMM(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_MMMM();
}

Object? _DateFormat_add_MMMMd(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_MMMMd();
}

Object? _DateFormat_add_MMMMEEEEd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.DateFormat).add_MMMMEEEEd();
}

Object? _DateFormat_add_QQQ(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_QQQ();
}

Object? _DateFormat_add_QQQQ(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_QQQQ();
}

Object? _DateFormat_add_y(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_y();
}

Object? _DateFormat_add_yM(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yM();
}

Object? _DateFormat_add_yMd(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yMd();
}

Object? _DateFormat_add_yMEd(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yMEd();
}

Object? _DateFormat_add_yMMM(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yMMM();
}

Object? _DateFormat_add_yMMMd(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yMMMd();
}

Object? _DateFormat_add_yMMMEd(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yMMMEd();
}

Object? _DateFormat_add_yMMMM(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yMMMM();
}

Object? _DateFormat_add_yMMMMd(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yMMMMd();
}

Object? _DateFormat_add_yMMMMEEEEd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.DateFormat).add_yMMMMEEEEd();
}

Object? _DateFormat_add_yQQQ(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yQQQ();
}

Object? _DateFormat_add_yQQQQ(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_yQQQQ();
}

Object? _DateFormat_add_H(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_H();
}

Object? _DateFormat_add_Hm(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_Hm();
}

Object? _DateFormat_add_Hms(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_Hms();
}

Object? _DateFormat_add_j(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_j();
}

Object? _DateFormat_add_jm(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_jm();
}

Object? _DateFormat_add_jms(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_jms();
}

Object? _DateFormat_add_jmv(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_jmv();
}

Object? _DateFormat_add_jmz(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_jmz();
}

Object? _DateFormat_add_jv(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_jv();
}

Object? _DateFormat_add_jz(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_jz();
}

Object? _DateFormat_add_m(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_m();
}

Object? _DateFormat_add_ms(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_ms();
}

Object? _DateFormat_add_s(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).add_s();
}

Object? _DateFormat_addPattern(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.DateFormat).addPattern(
    values["inputPattern"] as String?,
    values["separator"] as String,
  );
}

Object? _DateFormat_super_format(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_format(
    values["date"] as api2.DateTime,
  );
}

Object? _DateFormat_super_parse(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_parse(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_super_tryParse(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_tryParse(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_super_parseLoose(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_parseLoose(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_super_tryParseLoose(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_tryParseLoose(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_super_parseStrict(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_parseStrict(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_super_tryParseStrict(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_tryParseStrict(
    values["inputString"] as String,
    values["utc"] as bool,
  );
}

Object? _DateFormat_super_parseUTC(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_parseUTC(
    values["inputString"] as String,
  );
}

Object? _DateFormat_super_parseUtc(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_parseUtc(
    values["inputString"] as String,
  );
}

Object? _DateFormat_super_tryParseUtc(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_tryParseUtc(
    values["inputString"] as String,
  );
}

Object? _DateFormat_super_add_d(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_d();
}

Object? _DateFormat_super_add_E(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_E();
}

Object? _DateFormat_super_add_EEEE(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_EEEE();
}

Object? _DateFormat_super_add_LLL(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_LLL();
}

Object? _DateFormat_super_add_LLLL(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_LLLL();
}

Object? _DateFormat_super_add_M(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_M();
}

Object? _DateFormat_super_add_Md(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_Md();
}

Object? _DateFormat_super_add_MEd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_MEd();
}

Object? _DateFormat_super_add_MMM(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_MMM();
}

Object? _DateFormat_super_add_MMMd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_MMMd();
}

Object? _DateFormat_super_add_MMMEd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_MMMEd();
}

Object? _DateFormat_super_add_MMMM(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_MMMM();
}

Object? _DateFormat_super_add_MMMMd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_MMMMd();
}

Object? _DateFormat_super_add_MMMMEEEEd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_MMMMEEEEd();
}

Object? _DateFormat_super_add_QQQ(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_QQQ();
}

Object? _DateFormat_super_add_QQQQ(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_QQQQ();
}

Object? _DateFormat_super_add_y(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_y();
}

Object? _DateFormat_super_add_yM(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yM();
}

Object? _DateFormat_super_add_yMd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yMd();
}

Object? _DateFormat_super_add_yMEd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yMEd();
}

Object? _DateFormat_super_add_yMMM(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yMMM();
}

Object? _DateFormat_super_add_yMMMd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yMMMd();
}

Object? _DateFormat_super_add_yMMMEd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yMMMEd();
}

Object? _DateFormat_super_add_yMMMM(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yMMMM();
}

Object? _DateFormat_super_add_yMMMMd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yMMMMd();
}

Object? _DateFormat_super_add_yMMMMEEEEd(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yMMMMEEEEd();
}

Object? _DateFormat_super_add_yQQQ(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yQQQ();
}

Object? _DateFormat_super_add_yQQQQ(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_yQQQQ();
}

Object? _DateFormat_super_add_H(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_H();
}

Object? _DateFormat_super_add_Hm(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_Hm();
}

Object? _DateFormat_super_add_Hms(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_Hms();
}

Object? _DateFormat_super_add_j(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_j();
}

Object? _DateFormat_super_add_jm(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_jm();
}

Object? _DateFormat_super_add_jms(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_jms();
}

Object? _DateFormat_super_add_jmv(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_jmv();
}

Object? _DateFormat_super_add_jmz(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_jmz();
}

Object? _DateFormat_super_add_jv(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_jv();
}

Object? _DateFormat_super_add_jz(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_jz();
}

Object? _DateFormat_super_add_m(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_m();
}

Object? _DateFormat_super_add_ms(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_ms();
}

Object? _DateFormat_super_add_s(Object receiver, Map<String, Object?> values) {
  return (receiver as _DateFormatProxy)._flaxSuper_add_s();
}

Object? _DateFormat_super_addPattern(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateFormatProxy)._flaxSuper_addPattern(
    values["inputPattern"] as String?,
    values["separator"] as String,
  );
}

Object? _DateFormat_super_get_dateTimeConstructor(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_dateTimeConstructor;
Object? _DateFormat_super_get_dateOnly(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_dateOnly;
Object? _DateFormat_super_get_locale(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_locale;
Object? _DateFormat_super_get_pattern(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_pattern;
Object? _DateFormat_super_get_dateSymbols(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_dateSymbols;
Object? _DateFormat_super_get_useNativeDigits(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_useNativeDigits;
Object? _DateFormat_super_get_digitMatcher(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_digitMatcher;
Object? _DateFormat_super_get_localeZeroCodeUnit(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_localeZeroCodeUnit;
Object? _DateFormat_super_get_localeZero(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_localeZero;
Object? _DateFormat_super_get_usesNativeDigits(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_usesNativeDigits;
Object? _DateFormat_super_get_usesAsciiDigits(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateFormatProxy)._flaxSuperGet_usesAsciiDigits;
Object? _DateFormat_super_set_dateTimeConstructor(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateFormatProxy)._flaxSuperSet_dateTimeConstructor(
    values["value"]
        as api2.DateTime Function(
          int year,
          int month,
          int day,
          int hour24,
          int minute,
          int second,
          int fractionalSecond,
          bool utc,
        ),
  );
  return null;
}

Object? _DateFormat_super_set_useNativeDigits(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateFormatProxy)._flaxSuperSet_useNativeDigits(
    values["value"] as bool,
  );
  return null;
}

Object _createDateFormat(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api1.DateFormat(
        values["newPattern"] as String?,
        values["locale"] as String?,
      );
    case "d":
      return api1.DateFormat.d(values["locale"] as String?);
    case "E":
      return api1.DateFormat.E(values["locale"] as String?);
    case "EEEE":
      return api1.DateFormat.EEEE(values["locale"] as String?);
    case "EEEEE":
      return api1.DateFormat.EEEEE(values["locale"] as String?);
    case "LLL":
      return api1.DateFormat.LLL(values["locale"] as String?);
    case "LLLL":
      return api1.DateFormat.LLLL(values["locale"] as String?);
    case "M":
      return api1.DateFormat.M(values["locale"] as String?);
    case "Md":
      return api1.DateFormat.Md(values["locale"] as String?);
    case "MEd":
      return api1.DateFormat.MEd(values["locale"] as String?);
    case "MMM":
      return api1.DateFormat.MMM(values["locale"] as String?);
    case "MMMd":
      return api1.DateFormat.MMMd(values["locale"] as String?);
    case "MMMEd":
      return api1.DateFormat.MMMEd(values["locale"] as String?);
    case "MMMM":
      return api1.DateFormat.MMMM(values["locale"] as String?);
    case "MMMMd":
      return api1.DateFormat.MMMMd(values["locale"] as String?);
    case "MMMMEEEEd":
      return api1.DateFormat.MMMMEEEEd(values["locale"] as String?);
    case "QQQ":
      return api1.DateFormat.QQQ(values["locale"] as String?);
    case "QQQQ":
      return api1.DateFormat.QQQQ(values["locale"] as String?);
    case "y":
      return api1.DateFormat.y(values["locale"] as String?);
    case "yM":
      return api1.DateFormat.yM(values["locale"] as String?);
    case "yMd":
      return api1.DateFormat.yMd(values["locale"] as String?);
    case "yMEd":
      return api1.DateFormat.yMEd(values["locale"] as String?);
    case "yMMM":
      return api1.DateFormat.yMMM(values["locale"] as String?);
    case "yMMMd":
      return api1.DateFormat.yMMMd(values["locale"] as String?);
    case "yMMMEd":
      return api1.DateFormat.yMMMEd(values["locale"] as String?);
    case "yMMMM":
      return api1.DateFormat.yMMMM(values["locale"] as String?);
    case "yMMMMd":
      return api1.DateFormat.yMMMMd(values["locale"] as String?);
    case "yMMMMEEEEd":
      return api1.DateFormat.yMMMMEEEEd(values["locale"] as String?);
    case "yQQQ":
      return api1.DateFormat.yQQQ(values["locale"] as String?);
    case "yQQQQ":
      return api1.DateFormat.yQQQQ(values["locale"] as String?);
    case "H":
      return api1.DateFormat.H(values["locale"] as String?);
    case "Hm":
      return api1.DateFormat.Hm(values["locale"] as String?);
    case "Hms":
      return api1.DateFormat.Hms(values["locale"] as String?);
    case "j":
      return api1.DateFormat.j(values["locale"] as String?);
    case "jm":
      return api1.DateFormat.jm(values["locale"] as String?);
    case "jms":
      return api1.DateFormat.jms(values["locale"] as String?);
    case "jmv":
      return api1.DateFormat.jmv(values["locale"] as String?);
    case "jmz":
      return api1.DateFormat.jmz(values["locale"] as String?);
    case "jv":
      return api1.DateFormat.jv(values["locale"] as String?);
    case "jz":
      return api1.DateFormat.jz(values["locale"] as String?);
    case "m":
      return api1.DateFormat.m(values["locale"] as String?);
    case "ms":
      return api1.DateFormat.ms(values["locale"] as String?);
    case "s":
      return api1.DateFormat.s(values["locale"] as String?);
    case '@implementation':
      return _DateFormatProxy(
        values['@peer'] as FlaxProxyPeer,
        values["newPattern"] as String?,
        values["locale"] as String?,
      );
    case "@implementation:d":
      return _DateFormatProxy.d(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:E":
      return _DateFormatProxy.E(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:EEEE":
      return _DateFormatProxy.EEEE(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:EEEEE":
      return _DateFormatProxy.EEEEE(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:LLL":
      return _DateFormatProxy.LLL(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:LLLL":
      return _DateFormatProxy.LLLL(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:M":
      return _DateFormatProxy.M(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:Md":
      return _DateFormatProxy.Md(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:MEd":
      return _DateFormatProxy.MEd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:MMM":
      return _DateFormatProxy.MMM(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:MMMd":
      return _DateFormatProxy.MMMd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:MMMEd":
      return _DateFormatProxy.MMMEd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:MMMM":
      return _DateFormatProxy.MMMM(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:MMMMd":
      return _DateFormatProxy.MMMMd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:MMMMEEEEd":
      return _DateFormatProxy.MMMMEEEEd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:QQQ":
      return _DateFormatProxy.QQQ(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:QQQQ":
      return _DateFormatProxy.QQQQ(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:y":
      return _DateFormatProxy.y(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yM":
      return _DateFormatProxy.yM(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yMd":
      return _DateFormatProxy.yMd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yMEd":
      return _DateFormatProxy.yMEd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yMMM":
      return _DateFormatProxy.yMMM(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yMMMd":
      return _DateFormatProxy.yMMMd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yMMMEd":
      return _DateFormatProxy.yMMMEd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yMMMM":
      return _DateFormatProxy.yMMMM(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yMMMMd":
      return _DateFormatProxy.yMMMMd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yMMMMEEEEd":
      return _DateFormatProxy.yMMMMEEEEd(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yQQQ":
      return _DateFormatProxy.yQQQ(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:yQQQQ":
      return _DateFormatProxy.yQQQQ(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:H":
      return _DateFormatProxy.H(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:Hm":
      return _DateFormatProxy.Hm(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:Hms":
      return _DateFormatProxy.Hms(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:j":
      return _DateFormatProxy.j(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:jm":
      return _DateFormatProxy.jm(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:jms":
      return _DateFormatProxy.jms(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:jmv":
      return _DateFormatProxy.jmv(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:jmz":
      return _DateFormatProxy.jmz(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:jv":
      return _DateFormatProxy.jv(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:jz":
      return _DateFormatProxy.jz(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:m":
      return _DateFormatProxy.m(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:ms":
      return _DateFormatProxy.ms(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    case "@implementation:s":
      return _DateFormatProxy.s(
        values['@peer'] as FlaxProxyPeer,
        values["locale"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isDateSymbols(Object value) => value is api.DateSymbols;
Object? _DateSymbols_NAME(Object value) => (value as api.DateSymbols).NAME;
Object? _DateSymbols_ERAS(Object value) => (value as api.DateSymbols).ERAS;
Object? _DateSymbols_ERANAMES(Object value) =>
    (value as api.DateSymbols).ERANAMES;
Object? _DateSymbols_NARROWMONTHS(Object value) =>
    (value as api.DateSymbols).NARROWMONTHS;
Object? _DateSymbols_STANDALONENARROWMONTHS(Object value) =>
    (value as api.DateSymbols).STANDALONENARROWMONTHS;
Object? _DateSymbols_MONTHS(Object value) => (value as api.DateSymbols).MONTHS;
Object? _DateSymbols_STANDALONEMONTHS(Object value) =>
    (value as api.DateSymbols).STANDALONEMONTHS;
Object? _DateSymbols_SHORTMONTHS(Object value) =>
    (value as api.DateSymbols).SHORTMONTHS;
Object? _DateSymbols_STANDALONESHORTMONTHS(Object value) =>
    (value as api.DateSymbols).STANDALONESHORTMONTHS;
Object? _DateSymbols_WEEKDAYS(Object value) =>
    (value as api.DateSymbols).WEEKDAYS;
Object? _DateSymbols_STANDALONEWEEKDAYS(Object value) =>
    (value as api.DateSymbols).STANDALONEWEEKDAYS;
Object? _DateSymbols_SHORTWEEKDAYS(Object value) =>
    (value as api.DateSymbols).SHORTWEEKDAYS;
Object? _DateSymbols_STANDALONESHORTWEEKDAYS(Object value) =>
    (value as api.DateSymbols).STANDALONESHORTWEEKDAYS;
Object? _DateSymbols_NARROWWEEKDAYS(Object value) =>
    (value as api.DateSymbols).NARROWWEEKDAYS;
Object? _DateSymbols_STANDALONENARROWWEEKDAYS(Object value) =>
    (value as api.DateSymbols).STANDALONENARROWWEEKDAYS;
Object? _DateSymbols_SHORTQUARTERS(Object value) =>
    (value as api.DateSymbols).SHORTQUARTERS;
Object? _DateSymbols_QUARTERS(Object value) =>
    (value as api.DateSymbols).QUARTERS;
Object? _DateSymbols_AMPMS(Object value) => (value as api.DateSymbols).AMPMS;
Object? _DateSymbols_DATEFORMATS(Object value) =>
    (value as api.DateSymbols).DATEFORMATS;
Object? _DateSymbols_TIMEFORMATS(Object value) =>
    (value as api.DateSymbols).TIMEFORMATS;
Object? _DateSymbols_DATETIMEFORMATS(Object value) =>
    (value as api.DateSymbols).DATETIMEFORMATS;
Object? _DateSymbols_AVAILABLEFORMATS(Object value) =>
    (value as api.DateSymbols).AVAILABLEFORMATS;
Object? _DateSymbols_FIRSTDAYOFWEEK(Object value) =>
    (value as api.DateSymbols).FIRSTDAYOFWEEK;
Object? _DateSymbols_WEEKENDRANGE(Object value) =>
    (value as api.DateSymbols).WEEKENDRANGE;
Object? _DateSymbols_FIRSTWEEKCUTOFFDAY(Object value) =>
    (value as api.DateSymbols).FIRSTWEEKCUTOFFDAY;
Object? _DateSymbols_ZERODIGIT(Object value) =>
    (value as api.DateSymbols).ZERODIGIT;
void _DateSymbols_set_NAME(Object receiver, Object? value) {
  (receiver as api.DateSymbols).NAME = value as String;
}

void _DateSymbols_set_ERAS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).ERAS = value as List<String>;
}

void _DateSymbols_set_ERANAMES(Object receiver, Object? value) {
  (receiver as api.DateSymbols).ERANAMES = value as List<String>;
}

void _DateSymbols_set_NARROWMONTHS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).NARROWMONTHS = value as List<String>;
}

void _DateSymbols_set_STANDALONENARROWMONTHS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).STANDALONENARROWMONTHS = value as List<String>;
}

void _DateSymbols_set_MONTHS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).MONTHS = value as List<String>;
}

void _DateSymbols_set_STANDALONEMONTHS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).STANDALONEMONTHS = value as List<String>;
}

void _DateSymbols_set_SHORTMONTHS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).SHORTMONTHS = value as List<String>;
}

void _DateSymbols_set_STANDALONESHORTMONTHS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).STANDALONESHORTMONTHS = value as List<String>;
}

void _DateSymbols_set_WEEKDAYS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).WEEKDAYS = value as List<String>;
}

void _DateSymbols_set_STANDALONEWEEKDAYS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).STANDALONEWEEKDAYS = value as List<String>;
}

void _DateSymbols_set_SHORTWEEKDAYS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).SHORTWEEKDAYS = value as List<String>;
}

void _DateSymbols_set_STANDALONESHORTWEEKDAYS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).STANDALONESHORTWEEKDAYS = value as List<String>;
}

void _DateSymbols_set_NARROWWEEKDAYS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).NARROWWEEKDAYS = value as List<String>;
}

void _DateSymbols_set_STANDALONENARROWWEEKDAYS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).STANDALONENARROWWEEKDAYS =
      value as List<String>;
}

void _DateSymbols_set_SHORTQUARTERS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).SHORTQUARTERS = value as List<String>;
}

void _DateSymbols_set_QUARTERS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).QUARTERS = value as List<String>;
}

void _DateSymbols_set_AMPMS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).AMPMS = value as List<String>;
}

void _DateSymbols_set_DATEFORMATS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).DATEFORMATS = value as List<String>;
}

void _DateSymbols_set_TIMEFORMATS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).TIMEFORMATS = value as List<String>;
}

void _DateSymbols_set_DATETIMEFORMATS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).DATETIMEFORMATS = value as List<String>;
}

void _DateSymbols_set_AVAILABLEFORMATS(Object receiver, Object? value) {
  (receiver as api.DateSymbols).AVAILABLEFORMATS =
      value as Map<String, String>?;
}

void _DateSymbols_set_FIRSTDAYOFWEEK(Object receiver, Object? value) {
  (receiver as api.DateSymbols).FIRSTDAYOFWEEK = value as int;
}

void _DateSymbols_set_WEEKENDRANGE(Object receiver, Object? value) {
  (receiver as api.DateSymbols).WEEKENDRANGE = value as List<int>;
}

void _DateSymbols_set_FIRSTWEEKCUTOFFDAY(Object receiver, Object? value) {
  (receiver as api.DateSymbols).FIRSTWEEKCUTOFFDAY = value as int;
}

void _DateSymbols_set_ZERODIGIT(Object receiver, Object? value) {
  (receiver as api.DateSymbols).ZERODIGIT = value as String?;
}

Object? _DateSymbols_serializeToMap(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.DateSymbols).serializeToMap();
}

Object? _DateSymbols_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.DateSymbols).toString();
}

Object? _DateSymbols_super_serializeToMap(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DateSymbolsProxy)._flaxSuper_serializeToMap();
}

Object? _FlaxProxyDispatch0_super_call_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch0)._flaxSuper_toString();
}

Object? _FlaxProxyDispatch0_super_get_NAME(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch0)._flaxSuperGet_NAME;
Object? _DateSymbols_super_get_ERAS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_ERAS;
Object? _DateSymbols_super_get_ERANAMES(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_ERANAMES;
Object? _DateSymbols_super_get_NARROWMONTHS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_NARROWMONTHS;
Object? _DateSymbols_super_get_STANDALONENARROWMONTHS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_STANDALONENARROWMONTHS;
Object? _DateSymbols_super_get_MONTHS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_MONTHS;
Object? _DateSymbols_super_get_STANDALONEMONTHS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_STANDALONEMONTHS;
Object? _DateSymbols_super_get_SHORTMONTHS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_SHORTMONTHS;
Object? _DateSymbols_super_get_STANDALONESHORTMONTHS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_STANDALONESHORTMONTHS;
Object? _DateSymbols_super_get_WEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_WEEKDAYS;
Object? _DateSymbols_super_get_STANDALONEWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_STANDALONEWEEKDAYS;
Object? _DateSymbols_super_get_SHORTWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_SHORTWEEKDAYS;
Object? _DateSymbols_super_get_STANDALONESHORTWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_STANDALONESHORTWEEKDAYS;
Object? _DateSymbols_super_get_NARROWWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_NARROWWEEKDAYS;
Object? _DateSymbols_super_get_STANDALONENARROWWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_STANDALONENARROWWEEKDAYS;
Object? _DateSymbols_super_get_SHORTQUARTERS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_SHORTQUARTERS;
Object? _DateSymbols_super_get_QUARTERS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_QUARTERS;
Object? _DateSymbols_super_get_AMPMS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_AMPMS;
Object? _DateSymbols_super_get_DATEFORMATS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_DATEFORMATS;
Object? _DateSymbols_super_get_TIMEFORMATS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_TIMEFORMATS;
Object? _DateSymbols_super_get_DATETIMEFORMATS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_DATETIMEFORMATS;
Object? _DateSymbols_super_get_AVAILABLEFORMATS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_AVAILABLEFORMATS;
Object? _DateSymbols_super_get_FIRSTDAYOFWEEK(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_FIRSTDAYOFWEEK;
Object? _DateSymbols_super_get_WEEKENDRANGE(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_WEEKENDRANGE;
Object? _DateSymbols_super_get_FIRSTWEEKCUTOFFDAY(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_FIRSTWEEKCUTOFFDAY;
Object? _DateSymbols_super_get_ZERODIGIT(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _DateSymbolsProxy)._flaxSuperGet_ZERODIGIT;
Object? _DateSymbols_super_set_NAME(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_NAME(values["value"] as String);
  return null;
}

Object? _DateSymbols_super_set_ERAS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_ERAS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_ERANAMES(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_ERANAMES(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_NARROWMONTHS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_NARROWMONTHS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_STANDALONENARROWMONTHS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_STANDALONENARROWMONTHS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_MONTHS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_MONTHS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_STANDALONEMONTHS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_STANDALONEMONTHS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_SHORTMONTHS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_SHORTMONTHS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_STANDALONESHORTMONTHS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_STANDALONESHORTMONTHS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_WEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_WEEKDAYS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_STANDALONEWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_STANDALONEWEEKDAYS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_SHORTWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_SHORTWEEKDAYS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_STANDALONESHORTWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_STANDALONESHORTWEEKDAYS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_NARROWWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_NARROWWEEKDAYS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_STANDALONENARROWWEEKDAYS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_STANDALONENARROWWEEKDAYS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_SHORTQUARTERS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_SHORTQUARTERS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_QUARTERS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_QUARTERS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_AMPMS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_AMPMS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_DATEFORMATS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_DATEFORMATS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_TIMEFORMATS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_TIMEFORMATS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_DATETIMEFORMATS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_DATETIMEFORMATS(
    values["value"] as List<String>,
  );
  return null;
}

Object? _DateSymbols_super_set_AVAILABLEFORMATS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_AVAILABLEFORMATS(
    values["value"] as Map<String, String>?,
  );
  return null;
}

Object? _DateSymbols_super_set_FIRSTDAYOFWEEK(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_FIRSTDAYOFWEEK(
    values["value"] as int,
  );
  return null;
}

Object? _DateSymbols_super_set_WEEKENDRANGE(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_WEEKENDRANGE(
    values["value"] as List<int>,
  );
  return null;
}

Object? _DateSymbols_super_set_FIRSTWEEKCUTOFFDAY(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_FIRSTWEEKCUTOFFDAY(
    values["value"] as int,
  );
  return null;
}

Object? _DateSymbols_super_set_ZERODIGIT(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _DateSymbolsProxy)._flaxSuperSet_ZERODIGIT(
    values["value"] as String?,
  );
  return null;
}

Object _createDateSymbols(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.DateSymbols(
        NAME: values["NAME"] as String,
        ERAS: values["ERAS"] as List<String>,
        ERANAMES: values["ERANAMES"] as List<String>,
        NARROWMONTHS: values["NARROWMONTHS"] as List<String>,
        STANDALONENARROWMONTHS:
            values["STANDALONENARROWMONTHS"] as List<String>,
        MONTHS: values["MONTHS"] as List<String>,
        STANDALONEMONTHS: values["STANDALONEMONTHS"] as List<String>,
        SHORTMONTHS: values["SHORTMONTHS"] as List<String>,
        STANDALONESHORTMONTHS: values["STANDALONESHORTMONTHS"] as List<String>,
        WEEKDAYS: values["WEEKDAYS"] as List<String>,
        STANDALONEWEEKDAYS: values["STANDALONEWEEKDAYS"] as List<String>,
        SHORTWEEKDAYS: values["SHORTWEEKDAYS"] as List<String>,
        STANDALONESHORTWEEKDAYS:
            values["STANDALONESHORTWEEKDAYS"] as List<String>,
        NARROWWEEKDAYS: values["NARROWWEEKDAYS"] as List<String>,
        STANDALONENARROWWEEKDAYS:
            values["STANDALONENARROWWEEKDAYS"] as List<String>,
        SHORTQUARTERS: values["SHORTQUARTERS"] as List<String>,
        QUARTERS: values["QUARTERS"] as List<String>,
        AMPMS: values["AMPMS"] as List<String>,
        ZERODIGIT: values["ZERODIGIT"] as String?,
        DATEFORMATS: values["DATEFORMATS"] as List<String>,
        TIMEFORMATS: values["TIMEFORMATS"] as List<String>,
        AVAILABLEFORMATS: values["AVAILABLEFORMATS"] as Map<String, String>?,
        FIRSTDAYOFWEEK: values["FIRSTDAYOFWEEK"] as int,
        WEEKENDRANGE: values["WEEKENDRANGE"] as List<int>,
        FIRSTWEEKCUTOFFDAY: values["FIRSTWEEKCUTOFFDAY"] as int,
        DATETIMEFORMATS: values["DATETIMEFORMATS"] as List<String>,
      );
    case "deserializeFromMap":
      return api.DateSymbols.deserializeFromMap(
        values["map"] as Map<Object?, Object?>,
      );
    case '@implementation':
      return _DateSymbolsProxy(
        values['@peer'] as FlaxProxyPeer,
        NAME: values["NAME"] as String,
        ERAS: values["ERAS"] as List<String>,
        ERANAMES: values["ERANAMES"] as List<String>,
        NARROWMONTHS: values["NARROWMONTHS"] as List<String>,
        STANDALONENARROWMONTHS:
            values["STANDALONENARROWMONTHS"] as List<String>,
        MONTHS: values["MONTHS"] as List<String>,
        STANDALONEMONTHS: values["STANDALONEMONTHS"] as List<String>,
        SHORTMONTHS: values["SHORTMONTHS"] as List<String>,
        STANDALONESHORTMONTHS: values["STANDALONESHORTMONTHS"] as List<String>,
        WEEKDAYS: values["WEEKDAYS"] as List<String>,
        STANDALONEWEEKDAYS: values["STANDALONEWEEKDAYS"] as List<String>,
        SHORTWEEKDAYS: values["SHORTWEEKDAYS"] as List<String>,
        STANDALONESHORTWEEKDAYS:
            values["STANDALONESHORTWEEKDAYS"] as List<String>,
        NARROWWEEKDAYS: values["NARROWWEEKDAYS"] as List<String>,
        STANDALONENARROWWEEKDAYS:
            values["STANDALONENARROWWEEKDAYS"] as List<String>,
        SHORTQUARTERS: values["SHORTQUARTERS"] as List<String>,
        QUARTERS: values["QUARTERS"] as List<String>,
        AMPMS: values["AMPMS"] as List<String>,
        ZERODIGIT: values["ZERODIGIT"] as String?,
        DATEFORMATS: values["DATEFORMATS"] as List<String>,
        TIMEFORMATS: values["TIMEFORMATS"] as List<String>,
        AVAILABLEFORMATS: values["AVAILABLEFORMATS"] as Map<String, String>?,
        FIRSTDAYOFWEEK: values["FIRSTDAYOFWEEK"] as int,
        WEEKENDRANGE: values["WEEKENDRANGE"] as List<int>,
        FIRSTWEEKCUTOFFDAY: values["FIRSTWEEKCUTOFFDAY"] as int,
        DATETIMEFORMATS: values["DATETIMEFORMATS"] as List<String>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isNumberFormat(Object value) => value is api1.NumberFormat;
Object? _NumberFormat_negativePrefix(Object value) =>
    (value as api1.NumberFormat).negativePrefix;
Object? _NumberFormat_positivePrefix(Object value) =>
    (value as api1.NumberFormat).positivePrefix;
Object? _NumberFormat_negativeSuffix(Object value) =>
    (value as api1.NumberFormat).negativeSuffix;
Object? _NumberFormat_positiveSuffix(Object value) =>
    (value as api1.NumberFormat).positiveSuffix;
Object? _NumberFormat_maximumIntegerDigits(Object value) =>
    (value as api1.NumberFormat).maximumIntegerDigits;
Object? _NumberFormat_minimumIntegerDigits(Object value) =>
    (value as api1.NumberFormat).minimumIntegerDigits;
Object? _NumberFormat_maximumFractionDigits(Object value) =>
    (value as api1.NumberFormat).maximumFractionDigits;
Object? _NumberFormat_minimumFractionDigits(Object value) =>
    (value as api1.NumberFormat).minimumFractionDigits;
Object? _NumberFormat_minimumExponentDigits(Object value) =>
    (value as api1.NumberFormat).minimumExponentDigits;
Object? _NumberFormat_maximumSignificantDigits(Object value) =>
    (value as api1.NumberFormat).maximumSignificantDigits;
Object? _NumberFormat_minimumSignificantDigitsStrict(Object value) =>
    (value as api1.NumberFormat).minimumSignificantDigitsStrict;
Object? _NumberFormat_minimumSignificantDigits(Object value) =>
    (value as api1.NumberFormat).minimumSignificantDigits;
Object? _NumberFormat_significantDigits(Object value) =>
    (value as api1.NumberFormat).significantDigits;
Object? _NumberFormat_significantDigitsInUse(Object value) =>
    (value as api1.NumberFormat).significantDigitsInUse;
Object? _NumberFormat_multiplier(Object value) =>
    (value as api1.NumberFormat).multiplier;
Object? _NumberFormat_currencyName(Object value) =>
    (value as api1.NumberFormat).currencyName;
Object? _NumberFormat_currencySymbol(Object value) =>
    (value as api1.NumberFormat).currencySymbol;
Object? _NumberFormat_decimalDigits(Object value) =>
    (value as api1.NumberFormat).decimalDigits;
Object? _NumberFormat_locale(Object value) =>
    (value as api1.NumberFormat).locale;
Object? _NumberFormat_symbols(Object value) =>
    (value as api1.NumberFormat).symbols;
Object? _NumberFormat_localeZero(Object value) =>
    (value as api1.NumberFormat).localeZero;
void _NumberFormat_set_maximumIntegerDigits(Object receiver, Object? value) {
  (receiver as api1.NumberFormat).maximumIntegerDigits = value as int;
}

void _NumberFormat_set_minimumIntegerDigits(Object receiver, Object? value) {
  (receiver as api1.NumberFormat).minimumIntegerDigits = value as int;
}

void _NumberFormat_set_maximumFractionDigits(Object receiver, Object? value) {
  (receiver as api1.NumberFormat).maximumFractionDigits = value as int;
}

void _NumberFormat_set_minimumFractionDigits(Object receiver, Object? value) {
  (receiver as api1.NumberFormat).minimumFractionDigits = value as int;
}

void _NumberFormat_set_minimumExponentDigits(Object receiver, Object? value) {
  (receiver as api1.NumberFormat).minimumExponentDigits = value as int;
}

void _NumberFormat_set_maximumSignificantDigits(
  Object receiver,
  Object? value,
) {
  (receiver as api1.NumberFormat).maximumSignificantDigits = value as int?;
}

void _NumberFormat_set_minimumSignificantDigitsStrict(
  Object receiver,
  Object? value,
) {
  (receiver as api1.NumberFormat).minimumSignificantDigitsStrict =
      value as bool;
}

void _NumberFormat_set_minimumSignificantDigits(
  Object receiver,
  Object? value,
) {
  (receiver as api1.NumberFormat).minimumSignificantDigits = value as int?;
}

void _NumberFormat_set_significantDigits(Object receiver, Object? value) {
  (receiver as api1.NumberFormat).significantDigits = value as int?;
}

void _NumberFormat_set_significantDigitsInUse(Object receiver, Object? value) {
  (receiver as api1.NumberFormat).significantDigitsInUse = value as bool;
}

void _NumberFormat_set_currencyName(Object receiver, Object? value) {
  (receiver as api1.NumberFormat).currencyName = value as String?;
}

Object? _NumberFormat_localeExists(Map<String, Object?> values) {
  return api1.NumberFormat.localeExists(values["localeName"] as String?);
}

Object? _NumberFormat_numberOfIntegerDigits(Map<String, Object?> values) {
  return api1.NumberFormat.numberOfIntegerDigits(values["number"]);
}

Object? _NumberFormat_simpleCurrencySymbol(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.NumberFormat).simpleCurrencySymbol(
    values["currencyCode"] as String,
  );
}

Object? _NumberFormat_format(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.NumberFormat).format(values["number"]);
}

Object? _NumberFormat_parse(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.NumberFormat).parse(values["text"] as String);
}

Object? _NumberFormat_parseWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.NumberFormat)
      .parseWith<Object?, api1.NumberParserBase<Object?>>(
        values["parserGenerator"]
            as api1.NumberParserBase<Object?> Function(
              api1.NumberFormat p0,
              String p1,
            ),
        values["text"] as String,
      );
}

Object? _NumberFormat_tryParse(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.NumberFormat).tryParse(values["text"] as String);
}

Object? _NumberFormat_tryParseWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.NumberFormat)
      .tryParseWith<Object?, api1.NumberParserBase<Object?>>(
        values["parserGenerator"]
            as api1.NumberParserBase<Object?> Function(
              api1.NumberFormat p0,
              String p1,
            ),
        values["text"] as String,
      );
}

Object? _NumberFormat_turnOffGrouping(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api1.NumberFormat).turnOffGrouping();
  return null;
}

Object? _NumberFormat_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.NumberFormat).toString();
}

Object _createNumberFormat(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api1.NumberFormat(
        values["newPattern"] as String?,
        values["locale"] as String?,
      );
    case "decimalPattern":
      return api1.NumberFormat.decimalPattern(values["locale"] as String?);
    case "decimalPatternDigits":
      return api1.NumberFormat.decimalPatternDigits(
        locale: values["locale"] as String?,
        decimalDigits: values["decimalDigits"] as int?,
      );
    case "percentPattern":
      return api1.NumberFormat.percentPattern(values["locale"] as String?);
    case "decimalPercentPattern":
      return api1.NumberFormat.decimalPercentPattern(
        locale: values["locale"] as String?,
        decimalDigits: values["decimalDigits"] as int?,
      );
    case "scientificPattern":
      return api1.NumberFormat.scientificPattern(values["locale"] as String?);
    case "currencyPattern":
      return api1.NumberFormat.currencyPattern(
        values["locale"] as String?,
        values["currencyNameOrSymbol"] as String?,
      );
    case "currency":
      return api1.NumberFormat.currency(
        locale: values["locale"] as String?,
        name: values["name"] as String?,
        symbol: values["symbol"] as String?,
        decimalDigits: values["decimalDigits"] as int?,
        customPattern: values["customPattern"] as String?,
      );
    case "simpleCurrency":
      return api1.NumberFormat.simpleCurrency(
        locale: values["locale"] as String?,
        name: values["name"] as String?,
        decimalDigits: values["decimalDigits"] as int?,
      );
    case "compact":
      return api1.NumberFormat.compact(
        locale: values["locale"] as String?,
        explicitSign: values["explicitSign"] as bool,
      );
    case "compactLong":
      return api1.NumberFormat.compactLong(
        locale: values["locale"] as String?,
        explicitSign: values["explicitSign"] as bool,
      );
    case "compactSimpleCurrency":
      return api1.NumberFormat.compactSimpleCurrency(
        locale: values["locale"] as String?,
        name: values["name"] as String?,
        decimalDigits: values["decimalDigits"] as int?,
      );
    case "compactCurrency":
      return api1.NumberFormat.compactCurrency(
        locale: values["locale"] as String?,
        name: values["name"] as String?,
        symbol: values["symbol"] as String?,
        decimalDigits: values["decimalDigits"] as int?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isNumberParserBase(Object value) =>
    value is api1.NumberParserBase<Object?>;
Object? _NumberParserBase_format(Object value) =>
    (value as api1.NumberParserBase<Object?>).format;
Object? _NumberParserBase_text(Object value) =>
    (value as api1.NumberParserBase<Object?>).text;
Object? _NumberParserBase_value(Object value) =>
    (value as api1.NumberParserBase<Object?>).value;
Object? _NumberParserBase_symbols(Object value) =>
    (value as api1.NumberParserBase<Object?>).symbols;
Object? _NumberParserBase_gotPositive(Object value) =>
    (value as api1.NumberParserBase<Object?>).gotPositive;
Object? _NumberParserBase_gotNegative(Object value) =>
    (value as api1.NumberParserBase<Object?>).gotNegative;
Object? _NumberParserBase_gotPositiveSuffix(Object value) =>
    (value as api1.NumberParserBase<Object?>).gotPositiveSuffix;
Object? _NumberParserBase_gotNegativeSuffix(Object value) =>
    (value as api1.NumberParserBase<Object?>).gotNegativeSuffix;
Object? _NumberParserBase_done(Object value) =>
    (value as api1.NumberParserBase<Object?>).done;
Object? _NumberParserBase_prefixesSkipped(Object value) =>
    (value as api1.NumberParserBase<Object?>).prefixesSkipped;
Object? _NumberParserBase_scale(Object value) =>
    (value as api1.NumberParserBase<Object?>).scale;
Object? _NumberParserBase_replacements(Object value) =>
    (value as api1.NumberParserBase<Object?>).replacements;
Object? _NumberParserBase_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit(
  Object value,
) => (value as api1.NumberParserBase<Object?>)
    .groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit;
void _NumberParserBase_set_value(Object receiver, Object? value) {
  (receiver as api1.NumberParserBase<Object?>).value = value;
}

void _NumberParserBase_set_gotPositive(Object receiver, Object? value) {
  (receiver as api1.NumberParserBase<Object?>).gotPositive = value as bool;
}

void _NumberParserBase_set_gotNegative(Object receiver, Object? value) {
  (receiver as api1.NumberParserBase<Object?>).gotNegative = value as bool;
}

void _NumberParserBase_set_gotPositiveSuffix(Object receiver, Object? value) {
  (receiver as api1.NumberParserBase<Object?>).gotPositiveSuffix =
      value as bool;
}

void _NumberParserBase_set_gotNegativeSuffix(Object receiver, Object? value) {
  (receiver as api1.NumberParserBase<Object?>).gotNegativeSuffix =
      value as bool;
}

void _NumberParserBase_set_done(Object receiver, Object? value) {
  (receiver as api1.NumberParserBase<Object?>).done = value as bool;
}

void _NumberParserBase_set_prefixesSkipped(Object receiver, Object? value) {
  (receiver as api1.NumberParserBase<Object?>).prefixesSkipped = value as bool;
}

void _NumberParserBase_set_scale(Object receiver, Object? value) {
  (receiver as api1.NumberParserBase<Object?>).scale = value as int;
}

Object? _NumberParserBase_invalidFormat(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api1.NumberParserBase<Object?>).invalidFormat();
  return null;
}

Object? _NumberParserBase_handleSpace(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api1.NumberParserBase<Object?>).handleSpace();
  return null;
}

Object? _NumberParserBase_asDigit(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.NumberParserBase<Object?>).asDigit(
    values["char"] as String,
  );
}

Object? _NumberParserBase_checkPrefixes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api1.NumberParserBase<Object?>).checkPrefixes(
    skip: values["skip"] as bool,
  );
  return null;
}

Object? _NumberParserBase_checkSuffixes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api1.NumberParserBase<Object?>).checkSuffixes();
  return null;
}

Object? _NumberParserBase_processNonDigit(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api1.NumberParserBase<Object?>).processNonDigit();
  return null;
}

Object? _NumberParserBase_parse(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.NumberParserBase<Object?>).parse();
}

Object? _NumberParserBase_invalidNumber(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api1.NumberParserBase<Object?>).invalidNumber();
  return null;
}

Object? _NumberParserBase_fromNormalized(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.NumberParserBase<Object?>).fromNormalized(
    values["normalizedText"] as String,
  );
}

Object? _NumberParserBase_scaled(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.NumberParserBase<Object?>).scaled(
    values["parsed"],
    values["scale"] as int,
  );
}

Object? _NumberParserBase_nan(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.NumberParserBase<Object?>).nan();
}

Object? _NumberParserBase_positiveInfinity(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.NumberParserBase<Object?>).positiveInfinity();
}

Object? _NumberParserBase_negativeInfinity(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api1.NumberParserBase<Object?>).negativeInfinity();
}

Object? _NumberParserBase_super_invalidFormat(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuper_invalidFormat();
  return null;
}

Object? _NumberParserBase_super_handleSpace(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuper_handleSpace();
  return null;
}

Object? _NumberParserBase_super_asDigit(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _NumberParserBaseProxy)._flaxSuper_asDigit(
    values["char"] as String,
  );
}

Object? _NumberParserBase_super_checkPrefixes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuper_checkPrefixes(
    skip: values["skip"] as bool,
  );
  return null;
}

Object? _NumberParserBase_super_checkSuffixes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuper_checkSuffixes();
  return null;
}

Object? _NumberParserBase_super_processNonDigit(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuper_processNonDigit();
  return null;
}

Object? _NumberParserBase_super_parse(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _NumberParserBaseProxy)._flaxSuper_parse();
}

Object? _NumberParserBase_super_invalidNumber(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuper_invalidNumber();
  return null;
}

Object? _NumberParserBase_super_get_format(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_format;
Object? _NumberParserBase_super_get_text(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_text;
Object? _NumberParserBase_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_value;
Object? _NumberParserBase_super_get_symbols(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_symbols;
Object? _NumberParserBase_super_get_gotPositive(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_gotPositive;
Object? _NumberParserBase_super_get_gotNegative(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_gotNegative;
Object? _NumberParserBase_super_get_gotPositiveSuffix(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_gotPositiveSuffix;
Object? _NumberParserBase_super_get_gotNegativeSuffix(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_gotNegativeSuffix;
Object? _NumberParserBase_super_get_done(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_done;
Object? _NumberParserBase_super_get_prefixesSkipped(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_prefixesSkipped;
Object? _NumberParserBase_super_get_scale(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_scale;
Object? _NumberParserBase_super_get_replacements(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)._flaxSuperGet_replacements;
Object?
_NumberParserBase_super_get_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberParserBaseProxy)
    ._flaxSuperGet_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit;
Object? _NumberParserBase_super_set_value(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuperSet_value(values["value"]);
  return null;
}

Object? _NumberParserBase_super_set_gotPositive(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuperSet_gotPositive(
    values["value"] as bool,
  );
  return null;
}

Object? _NumberParserBase_super_set_gotNegative(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuperSet_gotNegative(
    values["value"] as bool,
  );
  return null;
}

Object? _NumberParserBase_super_set_gotPositiveSuffix(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuperSet_gotPositiveSuffix(
    values["value"] as bool,
  );
  return null;
}

Object? _NumberParserBase_super_set_gotNegativeSuffix(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuperSet_gotNegativeSuffix(
    values["value"] as bool,
  );
  return null;
}

Object? _NumberParserBase_super_set_done(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuperSet_done(
    values["value"] as bool,
  );
  return null;
}

Object? _NumberParserBase_super_set_prefixesSkipped(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuperSet_prefixesSkipped(
    values["value"] as bool,
  );
  return null;
}

Object? _NumberParserBase_super_set_scale(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _NumberParserBaseProxy)._flaxSuperSet_scale(
    values["value"] as int,
  );
  return null;
}

Object _createNumberParserBase(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _NumberParserBaseProxy<Object?>(
        values['@peer'] as FlaxProxyPeer,
        values["format"] as api1.NumberFormat,
        values["text"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isNumberSymbols(Object value) => value is api3.NumberSymbols;
Object? _NumberSymbols_NAME(Object value) => (value as api3.NumberSymbols).NAME;
Object? _NumberSymbols_DECIMAL_SEP(Object value) =>
    (value as api3.NumberSymbols).DECIMAL_SEP;
Object? _NumberSymbols_GROUP_SEP(Object value) =>
    (value as api3.NumberSymbols).GROUP_SEP;
Object? _NumberSymbols_PERCENT(Object value) =>
    (value as api3.NumberSymbols).PERCENT;
Object? _NumberSymbols_ZERO_DIGIT(Object value) =>
    (value as api3.NumberSymbols).ZERO_DIGIT;
Object? _NumberSymbols_PLUS_SIGN(Object value) =>
    (value as api3.NumberSymbols).PLUS_SIGN;
Object? _NumberSymbols_MINUS_SIGN(Object value) =>
    (value as api3.NumberSymbols).MINUS_SIGN;
Object? _NumberSymbols_EXP_SYMBOL(Object value) =>
    (value as api3.NumberSymbols).EXP_SYMBOL;
Object? _NumberSymbols_PERMILL(Object value) =>
    (value as api3.NumberSymbols).PERMILL;
Object? _NumberSymbols_INFINITY(Object value) =>
    (value as api3.NumberSymbols).INFINITY;
Object? _NumberSymbols_NAN(Object value) => (value as api3.NumberSymbols).NAN;
Object? _NumberSymbols_DECIMAL_PATTERN(Object value) =>
    (value as api3.NumberSymbols).DECIMAL_PATTERN;
Object? _NumberSymbols_SCIENTIFIC_PATTERN(Object value) =>
    (value as api3.NumberSymbols).SCIENTIFIC_PATTERN;
Object? _NumberSymbols_PERCENT_PATTERN(Object value) =>
    (value as api3.NumberSymbols).PERCENT_PATTERN;
Object? _NumberSymbols_CURRENCY_PATTERN(Object value) =>
    (value as api3.NumberSymbols).CURRENCY_PATTERN;
Object? _NumberSymbols_DEF_CURRENCY_CODE(Object value) =>
    (value as api3.NumberSymbols).DEF_CURRENCY_CODE;
Object? _NumberSymbols_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.NumberSymbols).toString();
}

Object? _NumberSymbols_super_get_DECIMAL_SEP(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_DECIMAL_SEP;
Object? _NumberSymbols_super_get_GROUP_SEP(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_GROUP_SEP;
Object? _NumberSymbols_super_get_PERCENT(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_PERCENT;
Object? _NumberSymbols_super_get_ZERO_DIGIT(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_ZERO_DIGIT;
Object? _NumberSymbols_super_get_PLUS_SIGN(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_PLUS_SIGN;
Object? _NumberSymbols_super_get_MINUS_SIGN(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_MINUS_SIGN;
Object? _NumberSymbols_super_get_EXP_SYMBOL(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_EXP_SYMBOL;
Object? _NumberSymbols_super_get_PERMILL(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_PERMILL;
Object? _NumberSymbols_super_get_INFINITY(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_INFINITY;
Object? _NumberSymbols_super_get_NAN(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_NAN;
Object? _NumberSymbols_super_get_DECIMAL_PATTERN(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_DECIMAL_PATTERN;
Object? _NumberSymbols_super_get_SCIENTIFIC_PATTERN(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_SCIENTIFIC_PATTERN;
Object? _NumberSymbols_super_get_PERCENT_PATTERN(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_PERCENT_PATTERN;
Object? _NumberSymbols_super_get_CURRENCY_PATTERN(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_CURRENCY_PATTERN;
Object? _NumberSymbols_super_get_DEF_CURRENCY_CODE(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _NumberSymbolsProxy)._flaxSuperGet_DEF_CURRENCY_CODE;
Object _createNumberSymbols(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.NumberSymbols(
        NAME: values["NAME"] as String,
        DECIMAL_SEP: values["DECIMAL_SEP"] as String,
        GROUP_SEP: values["GROUP_SEP"] as String,
        PERCENT: values["PERCENT"] as String,
        ZERO_DIGIT: values["ZERO_DIGIT"] as String,
        PLUS_SIGN: values["PLUS_SIGN"] as String,
        MINUS_SIGN: values["MINUS_SIGN"] as String,
        EXP_SYMBOL: values["EXP_SYMBOL"] as String,
        PERMILL: values["PERMILL"] as String,
        INFINITY: values["INFINITY"] as String,
        NAN: values["NAN"] as String,
        DECIMAL_PATTERN: values["DECIMAL_PATTERN"] as String,
        SCIENTIFIC_PATTERN: values["SCIENTIFIC_PATTERN"] as String,
        PERCENT_PATTERN: values["PERCENT_PATTERN"] as String,
        CURRENCY_PATTERN: values["CURRENCY_PATTERN"] as String,
        DEF_CURRENCY_CODE: values["DEF_CURRENCY_CODE"] as String,
      );
    case '@implementation':
      return _NumberSymbolsProxy(
        values['@peer'] as FlaxProxyPeer,
        NAME: values["NAME"] as String,
        DECIMAL_SEP: values["DECIMAL_SEP"] as String,
        GROUP_SEP: values["GROUP_SEP"] as String,
        PERCENT: values["PERCENT"] as String,
        ZERO_DIGIT: values["ZERO_DIGIT"] as String,
        PLUS_SIGN: values["PLUS_SIGN"] as String,
        MINUS_SIGN: values["MINUS_SIGN"] as String,
        EXP_SYMBOL: values["EXP_SYMBOL"] as String,
        PERMILL: values["PERMILL"] as String,
        INFINITY: values["INFINITY"] as String,
        NAN: values["NAN"] as String,
        DECIMAL_PATTERN: values["DECIMAL_PATTERN"] as String,
        SCIENTIFIC_PATTERN: values["SCIENTIFIC_PATTERN"] as String,
        PERCENT_PATTERN: values["PERCENT_PATTERN"] as String,
        CURRENCY_PATTERN: values["CURRENCY_PATTERN"] as String,
        DEF_CURRENCY_CODE: values["DEF_CURRENCY_CODE"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

abstract interface class _FlaxProxyDispatch0 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toString();
  String get _flaxSuperGet_NAME;
}

String _FlaxProxyDispatch0_call_toString(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toString();
  }
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

String _FlaxProxyDispatch0_get_NAME(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_NAME;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

final class _DateFormatProxy extends api1.DateFormat {
  final FlaxProxyPeer _flaxPeer;
  _DateFormatProxy(
    this._flaxPeer, [
    String? super.newPattern,
    String? super.locale,
  ]);
  _DateFormatProxy.d(this._flaxPeer, [String? super.locale]) : super.d();
  _DateFormatProxy.E(this._flaxPeer, [String? super.locale]) : super.E();
  _DateFormatProxy.EEEE(this._flaxPeer, [String? super.locale]) : super.EEEE();
  _DateFormatProxy.EEEEE(this._flaxPeer, [String? super.locale])
    : super.EEEEE();
  _DateFormatProxy.LLL(this._flaxPeer, [String? super.locale]) : super.LLL();
  _DateFormatProxy.LLLL(this._flaxPeer, [String? super.locale]) : super.LLLL();
  _DateFormatProxy.M(this._flaxPeer, [String? super.locale]) : super.M();
  _DateFormatProxy.Md(this._flaxPeer, [String? super.locale]) : super.Md();
  _DateFormatProxy.MEd(this._flaxPeer, [String? super.locale]) : super.MEd();
  _DateFormatProxy.MMM(this._flaxPeer, [String? super.locale]) : super.MMM();
  _DateFormatProxy.MMMd(this._flaxPeer, [String? super.locale]) : super.MMMd();
  _DateFormatProxy.MMMEd(this._flaxPeer, [String? super.locale])
    : super.MMMEd();
  _DateFormatProxy.MMMM(this._flaxPeer, [String? super.locale]) : super.MMMM();
  _DateFormatProxy.MMMMd(this._flaxPeer, [String? super.locale])
    : super.MMMMd();
  _DateFormatProxy.MMMMEEEEd(this._flaxPeer, [String? super.locale])
    : super.MMMMEEEEd();
  _DateFormatProxy.QQQ(this._flaxPeer, [String? super.locale]) : super.QQQ();
  _DateFormatProxy.QQQQ(this._flaxPeer, [String? super.locale]) : super.QQQQ();
  _DateFormatProxy.y(this._flaxPeer, [String? super.locale]) : super.y();
  _DateFormatProxy.yM(this._flaxPeer, [String? super.locale]) : super.yM();
  _DateFormatProxy.yMd(this._flaxPeer, [String? super.locale]) : super.yMd();
  _DateFormatProxy.yMEd(this._flaxPeer, [String? super.locale]) : super.yMEd();
  _DateFormatProxy.yMMM(this._flaxPeer, [String? super.locale]) : super.yMMM();
  _DateFormatProxy.yMMMd(this._flaxPeer, [String? super.locale])
    : super.yMMMd();
  _DateFormatProxy.yMMMEd(this._flaxPeer, [String? super.locale])
    : super.yMMMEd();
  _DateFormatProxy.yMMMM(this._flaxPeer, [String? super.locale])
    : super.yMMMM();
  _DateFormatProxy.yMMMMd(this._flaxPeer, [String? super.locale])
    : super.yMMMMd();
  _DateFormatProxy.yMMMMEEEEd(this._flaxPeer, [String? super.locale])
    : super.yMMMMEEEEd();
  _DateFormatProxy.yQQQ(this._flaxPeer, [String? super.locale]) : super.yQQQ();
  _DateFormatProxy.yQQQQ(this._flaxPeer, [String? super.locale])
    : super.yQQQQ();
  _DateFormatProxy.H(this._flaxPeer, [String? super.locale]) : super.H();
  _DateFormatProxy.Hm(this._flaxPeer, [String? super.locale]) : super.Hm();
  _DateFormatProxy.Hms(this._flaxPeer, [String? super.locale]) : super.Hms();
  _DateFormatProxy.j(this._flaxPeer, [String? super.locale]) : super.j();
  _DateFormatProxy.jm(this._flaxPeer, [String? super.locale]) : super.jm();
  _DateFormatProxy.jms(this._flaxPeer, [String? super.locale]) : super.jms();
  _DateFormatProxy.jmv(this._flaxPeer, [String? super.locale]) : super.jmv();
  _DateFormatProxy.jmz(this._flaxPeer, [String? super.locale]) : super.jmz();
  _DateFormatProxy.jv(this._flaxPeer, [String? super.locale]) : super.jv();
  _DateFormatProxy.jz(this._flaxPeer, [String? super.locale]) : super.jz();
  _DateFormatProxy.m(this._flaxPeer, [String? super.locale]) : super.m();
  _DateFormatProxy.ms(this._flaxPeer, [String? super.locale]) : super.ms();
  _DateFormatProxy.s(this._flaxPeer, [String? super.locale]) : super.s();
  @override
  String format(api2.DateTime date) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[date], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_format(date);
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_format(api2.DateTime date) {
    return super.format(date);
  }

  @override
  api2.DateTime parse(String inputString, [Object? utc = _flaxOmitted]) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      inputString,
      if (!identical(utc, _flaxOmitted)) utc,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_parse(inputString, utc);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DateTime;
    return _flaxConvertedResult;
  }

  api2.DateTime _flaxSuper_parse(
    String inputString, [
    Object? utc = _flaxOmitted,
  ]) {
    if (identical(utc, _flaxOmitted)) {
      return super.parse(inputString);
    }
    return super.parse(inputString, utc as bool);
  }

  @override
  api2.DateTime? tryParse(String inputString, [Object? utc = _flaxOmitted]) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[
      inputString,
      if (!identical(utc, _flaxOmitted)) utc,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_tryParse(inputString, utc);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DateTime?;
    return _flaxConvertedResult;
  }

  api2.DateTime? _flaxSuper_tryParse(
    String inputString, [
    Object? utc = _flaxOmitted,
  ]) {
    if (identical(utc, _flaxOmitted)) {
      return super.tryParse(inputString);
    }
    return super.tryParse(inputString, utc as bool);
  }

  @override
  api2.DateTime parseLoose(String inputString, [Object? utc = _flaxOmitted]) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      inputString,
      if (!identical(utc, _flaxOmitted)) utc,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_parseLoose(inputString, utc);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DateTime;
    return _flaxConvertedResult;
  }

  api2.DateTime _flaxSuper_parseLoose(
    String inputString, [
    Object? utc = _flaxOmitted,
  ]) {
    if (identical(utc, _flaxOmitted)) {
      return super.parseLoose(inputString);
    }
    return super.parseLoose(inputString, utc as bool);
  }

  @override
  api2.DateTime? tryParseLoose(
    String inputString, [
    Object? utc = _flaxOmitted,
  ]) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      inputString,
      if (!identical(utc, _flaxOmitted)) utc,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_tryParseLoose(inputString, utc);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DateTime?;
    return _flaxConvertedResult;
  }

  api2.DateTime? _flaxSuper_tryParseLoose(
    String inputString, [
    Object? utc = _flaxOmitted,
  ]) {
    if (identical(utc, _flaxOmitted)) {
      return super.tryParseLoose(inputString);
    }
    return super.tryParseLoose(inputString, utc as bool);
  }

  @override
  api2.DateTime parseStrict(String inputString, [Object? utc = _flaxOmitted]) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      inputString,
      if (!identical(utc, _flaxOmitted)) utc,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_parseStrict(inputString, utc);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DateTime;
    return _flaxConvertedResult;
  }

  api2.DateTime _flaxSuper_parseStrict(
    String inputString, [
    Object? utc = _flaxOmitted,
  ]) {
    if (identical(utc, _flaxOmitted)) {
      return super.parseStrict(inputString);
    }
    return super.parseStrict(inputString, utc as bool);
  }

  @override
  api2.DateTime? tryParseStrict(
    String inputString, [
    Object? utc = _flaxOmitted,
  ]) {
    final _flaxResult = _flaxPeer.call(6, <Object?>[
      inputString,
      if (!identical(utc, _flaxOmitted)) utc,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_tryParseStrict(inputString, utc);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DateTime?;
    return _flaxConvertedResult;
  }

  api2.DateTime? _flaxSuper_tryParseStrict(
    String inputString, [
    Object? utc = _flaxOmitted,
  ]) {
    if (identical(utc, _flaxOmitted)) {
      return super.tryParseStrict(inputString);
    }
    return super.tryParseStrict(inputString, utc as bool);
  }

  @override
  api2.DateTime parseUTC(String inputString) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[
      inputString,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_parseUTC(inputString);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DateTime;
    return _flaxConvertedResult;
  }

  api2.DateTime _flaxSuper_parseUTC(String inputString) {
    return super.parseUTC(inputString);
  }

  @override
  api2.DateTime parseUtc(String inputString) {
    final _flaxResult = _flaxPeer.call(8, <Object?>[
      inputString,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_parseUtc(inputString);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DateTime;
    return _flaxConvertedResult;
  }

  api2.DateTime _flaxSuper_parseUtc(String inputString) {
    return super.parseUtc(inputString);
  }

  @override
  api2.DateTime? tryParseUtc(String inputString) {
    final _flaxResult = _flaxPeer.call(9, <Object?>[
      inputString,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_tryParseUtc(inputString);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DateTime?;
    return _flaxConvertedResult;
  }

  api2.DateTime? _flaxSuper_tryParseUtc(String inputString) {
    return super.tryParseUtc(inputString);
  }

  @override
  api1.DateFormat add_d() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_d();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_d() {
    return super.add_d();
  }

  @override
  api1.DateFormat add_E() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_E();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_E() {
    return super.add_E();
  }

  @override
  api1.DateFormat add_EEEE() {
    final _flaxResult = _flaxPeer.call(12, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_EEEE();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_EEEE() {
    return super.add_EEEE();
  }

  @override
  api1.DateFormat add_LLL() {
    final _flaxResult = _flaxPeer.call(13, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_LLL();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_LLL() {
    return super.add_LLL();
  }

  @override
  api1.DateFormat add_LLLL() {
    final _flaxResult = _flaxPeer.call(14, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_LLLL();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_LLLL() {
    return super.add_LLLL();
  }

  @override
  api1.DateFormat add_M() {
    final _flaxResult = _flaxPeer.call(15, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_M();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_M() {
    return super.add_M();
  }

  @override
  api1.DateFormat add_Md() {
    final _flaxResult = _flaxPeer.call(16, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_Md();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_Md() {
    return super.add_Md();
  }

  @override
  api1.DateFormat add_MEd() {
    final _flaxResult = _flaxPeer.call(17, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_MEd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_MEd() {
    return super.add_MEd();
  }

  @override
  api1.DateFormat add_MMM() {
    final _flaxResult = _flaxPeer.call(18, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_MMM();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_MMM() {
    return super.add_MMM();
  }

  @override
  api1.DateFormat add_MMMd() {
    final _flaxResult = _flaxPeer.call(19, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_MMMd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_MMMd() {
    return super.add_MMMd();
  }

  @override
  api1.DateFormat add_MMMEd() {
    final _flaxResult = _flaxPeer.call(20, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_MMMEd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_MMMEd() {
    return super.add_MMMEd();
  }

  @override
  api1.DateFormat add_MMMM() {
    final _flaxResult = _flaxPeer.call(21, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_MMMM();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_MMMM() {
    return super.add_MMMM();
  }

  @override
  api1.DateFormat add_MMMMd() {
    final _flaxResult = _flaxPeer.call(22, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_MMMMd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_MMMMd() {
    return super.add_MMMMd();
  }

  @override
  api1.DateFormat add_MMMMEEEEd() {
    final _flaxResult = _flaxPeer.call(23, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_MMMMEEEEd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_MMMMEEEEd() {
    return super.add_MMMMEEEEd();
  }

  @override
  api1.DateFormat add_QQQ() {
    final _flaxResult = _flaxPeer.call(24, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_QQQ();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_QQQ() {
    return super.add_QQQ();
  }

  @override
  api1.DateFormat add_QQQQ() {
    final _flaxResult = _flaxPeer.call(25, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_QQQQ();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_QQQQ() {
    return super.add_QQQQ();
  }

  @override
  api1.DateFormat add_y() {
    final _flaxResult = _flaxPeer.call(26, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_y();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_y() {
    return super.add_y();
  }

  @override
  api1.DateFormat add_yM() {
    final _flaxResult = _flaxPeer.call(27, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yM();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yM() {
    return super.add_yM();
  }

  @override
  api1.DateFormat add_yMd() {
    final _flaxResult = _flaxPeer.call(28, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yMd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yMd() {
    return super.add_yMd();
  }

  @override
  api1.DateFormat add_yMEd() {
    final _flaxResult = _flaxPeer.call(29, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yMEd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yMEd() {
    return super.add_yMEd();
  }

  @override
  api1.DateFormat add_yMMM() {
    final _flaxResult = _flaxPeer.call(30, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yMMM();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yMMM() {
    return super.add_yMMM();
  }

  @override
  api1.DateFormat add_yMMMd() {
    final _flaxResult = _flaxPeer.call(31, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yMMMd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yMMMd() {
    return super.add_yMMMd();
  }

  @override
  api1.DateFormat add_yMMMEd() {
    final _flaxResult = _flaxPeer.call(32, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yMMMEd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yMMMEd() {
    return super.add_yMMMEd();
  }

  @override
  api1.DateFormat add_yMMMM() {
    final _flaxResult = _flaxPeer.call(33, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yMMMM();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yMMMM() {
    return super.add_yMMMM();
  }

  @override
  api1.DateFormat add_yMMMMd() {
    final _flaxResult = _flaxPeer.call(34, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yMMMMd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yMMMMd() {
    return super.add_yMMMMd();
  }

  @override
  api1.DateFormat add_yMMMMEEEEd() {
    final _flaxResult = _flaxPeer.call(35, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yMMMMEEEEd();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yMMMMEEEEd() {
    return super.add_yMMMMEEEEd();
  }

  @override
  api1.DateFormat add_yQQQ() {
    final _flaxResult = _flaxPeer.call(36, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yQQQ();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yQQQ() {
    return super.add_yQQQ();
  }

  @override
  api1.DateFormat add_yQQQQ() {
    final _flaxResult = _flaxPeer.call(37, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_yQQQQ();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_yQQQQ() {
    return super.add_yQQQQ();
  }

  @override
  api1.DateFormat add_H() {
    final _flaxResult = _flaxPeer.call(38, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_H();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_H() {
    return super.add_H();
  }

  @override
  api1.DateFormat add_Hm() {
    final _flaxResult = _flaxPeer.call(39, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_Hm();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_Hm() {
    return super.add_Hm();
  }

  @override
  api1.DateFormat add_Hms() {
    final _flaxResult = _flaxPeer.call(40, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_Hms();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_Hms() {
    return super.add_Hms();
  }

  @override
  api1.DateFormat add_j() {
    final _flaxResult = _flaxPeer.call(41, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_j();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_j() {
    return super.add_j();
  }

  @override
  api1.DateFormat add_jm() {
    final _flaxResult = _flaxPeer.call(42, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_jm();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_jm() {
    return super.add_jm();
  }

  @override
  api1.DateFormat add_jms() {
    final _flaxResult = _flaxPeer.call(43, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_jms();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_jms() {
    return super.add_jms();
  }

  @override
  api1.DateFormat add_jmv() {
    final _flaxResult = _flaxPeer.call(44, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_jmv();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_jmv() {
    return super.add_jmv();
  }

  @override
  api1.DateFormat add_jmz() {
    final _flaxResult = _flaxPeer.call(45, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_jmz();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_jmz() {
    return super.add_jmz();
  }

  @override
  api1.DateFormat add_jv() {
    final _flaxResult = _flaxPeer.call(46, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_jv();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_jv() {
    return super.add_jv();
  }

  @override
  api1.DateFormat add_jz() {
    final _flaxResult = _flaxPeer.call(47, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_jz();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_jz() {
    return super.add_jz();
  }

  @override
  api1.DateFormat add_m() {
    final _flaxResult = _flaxPeer.call(48, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_m();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_m() {
    return super.add_m();
  }

  @override
  api1.DateFormat add_ms() {
    final _flaxResult = _flaxPeer.call(49, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_ms();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_ms() {
    return super.add_ms();
  }

  @override
  api1.DateFormat add_s() {
    final _flaxResult = _flaxPeer.call(50, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_add_s();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_add_s() {
    return super.add_s();
  }

  @override
  api1.DateFormat addPattern(
    String? inputPattern, [
    Object? separator = _flaxOmitted,
  ]) {
    final _flaxResult = _flaxPeer.call(51, <Object?>[
      inputPattern,
      if (!identical(separator, _flaxOmitted)) separator,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_addPattern(inputPattern, separator);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.DateFormat;
    return _flaxConvertedResult;
  }

  api1.DateFormat _flaxSuper_addPattern(
    String? inputPattern, [
    Object? separator = _flaxOmitted,
  ]) {
    if (identical(separator, _flaxOmitted)) {
      return super.addPattern(inputPattern);
    }
    return super.addPattern(inputPattern, separator as String);
  }

  @override
  api2.DateTime Function(
    int year,
    int month,
    int day,
    int hour24,
    int minute,
    int second,
    int fractionalSecond,
    bool utc,
  )
  get dateTimeConstructor {
    final _flaxResult = _flaxPeer.call(52, const [], const {});
    if (!_flaxResult.$1) return super.dateTimeConstructor;
    final _flaxConvertedResult =
        _flaxResult.$2
            as api2.DateTime Function(
              int year,
              int month,
              int day,
              int hour24,
              int minute,
              int second,
              int fractionalSecond,
              bool utc,
            );
    return _flaxConvertedResult;
  }

  api2.DateTime Function(
    int year,
    int month,
    int day,
    int hour24,
    int minute,
    int second,
    int fractionalSecond,
    bool utc,
  )
  get _flaxSuperGet_dateTimeConstructor {
    return super.dateTimeConstructor;
  }

  @override
  bool get dateOnly {
    final _flaxResult = _flaxPeer.call(53, const [], const {});
    if (!_flaxResult.$1) return super.dateOnly;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_dateOnly {
    return super.dateOnly;
  }

  @override
  String get locale {
    final _flaxResult = _flaxPeer.call(54, const [], const {});
    if (!_flaxResult.$1) return super.locale;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_locale {
    return super.locale;
  }

  @override
  String? get pattern {
    final _flaxResult = _flaxPeer.call(55, const [], const {});
    if (!_flaxResult.$1) return super.pattern;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_pattern {
    return super.pattern;
  }

  @override
  api.DateSymbols get dateSymbols {
    final _flaxResult = _flaxPeer.call(56, const [], const {});
    if (!_flaxResult.$1) return super.dateSymbols;
    final _flaxConvertedResult = _flaxResult.$2 as api.DateSymbols;
    return _flaxConvertedResult;
  }

  api.DateSymbols get _flaxSuperGet_dateSymbols {
    return super.dateSymbols;
  }

  @override
  bool get useNativeDigits {
    final _flaxResult = _flaxPeer.call(57, const [], const {});
    if (!_flaxResult.$1) return super.useNativeDigits;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_useNativeDigits {
    return super.useNativeDigits;
  }

  @override
  api2.RegExp get digitMatcher {
    final _flaxResult = _flaxPeer.call(58, const [], const {});
    if (!_flaxResult.$1) return super.digitMatcher;
    final _flaxConvertedResult = _flaxResult.$2 as api2.RegExp;
    return _flaxConvertedResult;
  }

  api2.RegExp get _flaxSuperGet_digitMatcher {
    return super.digitMatcher;
  }

  @override
  int get localeZeroCodeUnit {
    final _flaxResult = _flaxPeer.call(59, const [], const {});
    if (!_flaxResult.$1) return super.localeZeroCodeUnit;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_localeZeroCodeUnit {
    return super.localeZeroCodeUnit;
  }

  @override
  String get localeZero {
    final _flaxResult = _flaxPeer.call(60, const [], const {});
    if (!_flaxResult.$1) return super.localeZero;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_localeZero {
    return super.localeZero;
  }

  @override
  bool get usesNativeDigits {
    final _flaxResult = _flaxPeer.call(61, const [], const {});
    if (!_flaxResult.$1) return super.usesNativeDigits;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_usesNativeDigits {
    return super.usesNativeDigits;
  }

  @override
  bool get usesAsciiDigits {
    final _flaxResult = _flaxPeer.call(62, const [], const {});
    if (!_flaxResult.$1) return super.usesAsciiDigits;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_usesAsciiDigits {
    return super.usesAsciiDigits;
  }

  @override
  set dateTimeConstructor(
    api2.DateTime Function(
      int year,
      int month,
      int day,
      int hour24,
      int minute,
      int second,
      int fractionalSecond,
      bool utc,
    )
    value,
  ) {
    final result = _flaxPeer.call(63, [value], const {});
    if (!result.$1) {
      super.dateTimeConstructor = value;
      return;
    }
  }

  void _flaxSuperSet_dateTimeConstructor(
    api2.DateTime Function(
      int year,
      int month,
      int day,
      int hour24,
      int minute,
      int second,
      int fractionalSecond,
      bool utc,
    )
    value,
  ) {
    super.dateTimeConstructor = value;
  }

  @override
  set useNativeDigits(bool value) {
    final result = _flaxPeer.call(64, [value], const {});
    if (!result.$1) {
      super.useNativeDigits = value;
      return;
    }
  }

  void _flaxSuperSet_useNativeDigits(bool value) {
    super.useNativeDigits = value;
  }
}

final class _DateSymbolsProxy extends api.DateSymbols
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _DateSymbolsProxy(
    this._flaxPeer, {
    required String super.NAME,
    required List<String> super.ERAS,
    required List<String> super.ERANAMES,
    required List<String> super.NARROWMONTHS,
    required List<String> super.STANDALONENARROWMONTHS,
    required List<String> super.MONTHS,
    required List<String> super.STANDALONEMONTHS,
    required List<String> super.SHORTMONTHS,
    required List<String> super.STANDALONESHORTMONTHS,
    required List<String> super.WEEKDAYS,
    required List<String> super.STANDALONEWEEKDAYS,
    required List<String> super.SHORTWEEKDAYS,
    required List<String> super.STANDALONESHORTWEEKDAYS,
    required List<String> super.NARROWWEEKDAYS,
    required List<String> super.STANDALONENARROWWEEKDAYS,
    required List<String> super.SHORTQUARTERS,
    required List<String> super.QUARTERS,
    required List<String> super.AMPMS,
    String? super.ZERODIGIT,
    required List<String> super.DATEFORMATS,
    required List<String> super.TIMEFORMATS,
    Map<String, String>? super.AVAILABLEFORMATS,
    required int super.FIRSTDAYOFWEEK,
    required List<int> super.WEEKENDRANGE,
    required int super.FIRSTWEEKCUTOFFDAY,
    required List<String> super.DATETIMEFORMATS,
  });
  @override
  Map<String, Object?> serializeToMap() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_serializeToMap();
    }
    final _flaxConvertedResult = _flaxResult.$2 as Map<String, Object?>;
    return _flaxConvertedResult;
  }

  Map<String, Object?> _flaxSuper_serializeToMap() {
    return super.serializeToMap();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get NAME => _FlaxProxyDispatch0_get_NAME(this, 2);
  String get _flaxSuperGet_NAME {
    return super.NAME;
  }

  @override
  List<String> get ERAS {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.ERAS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_ERAS {
    return super.ERAS;
  }

  @override
  List<String> get ERANAMES {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.ERANAMES;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_ERANAMES {
    return super.ERANAMES;
  }

  @override
  List<String> get NARROWMONTHS {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.NARROWMONTHS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_NARROWMONTHS {
    return super.NARROWMONTHS;
  }

  @override
  List<String> get STANDALONENARROWMONTHS {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.STANDALONENARROWMONTHS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_STANDALONENARROWMONTHS {
    return super.STANDALONENARROWMONTHS;
  }

  @override
  List<String> get MONTHS {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.MONTHS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_MONTHS {
    return super.MONTHS;
  }

  @override
  List<String> get STANDALONEMONTHS {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.STANDALONEMONTHS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_STANDALONEMONTHS {
    return super.STANDALONEMONTHS;
  }

  @override
  List<String> get SHORTMONTHS {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.SHORTMONTHS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_SHORTMONTHS {
    return super.SHORTMONTHS;
  }

  @override
  List<String> get STANDALONESHORTMONTHS {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.STANDALONESHORTMONTHS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_STANDALONESHORTMONTHS {
    return super.STANDALONESHORTMONTHS;
  }

  @override
  List<String> get WEEKDAYS {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1) return super.WEEKDAYS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_WEEKDAYS {
    return super.WEEKDAYS;
  }

  @override
  List<String> get STANDALONEWEEKDAYS {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.STANDALONEWEEKDAYS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_STANDALONEWEEKDAYS {
    return super.STANDALONEWEEKDAYS;
  }

  @override
  List<String> get SHORTWEEKDAYS {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.SHORTWEEKDAYS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_SHORTWEEKDAYS {
    return super.SHORTWEEKDAYS;
  }

  @override
  List<String> get STANDALONESHORTWEEKDAYS {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.STANDALONESHORTWEEKDAYS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_STANDALONESHORTWEEKDAYS {
    return super.STANDALONESHORTWEEKDAYS;
  }

  @override
  List<String> get NARROWWEEKDAYS {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.NARROWWEEKDAYS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_NARROWWEEKDAYS {
    return super.NARROWWEEKDAYS;
  }

  @override
  List<String> get STANDALONENARROWWEEKDAYS {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.STANDALONENARROWWEEKDAYS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_STANDALONENARROWWEEKDAYS {
    return super.STANDALONENARROWWEEKDAYS;
  }

  @override
  List<String> get SHORTQUARTERS {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.SHORTQUARTERS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_SHORTQUARTERS {
    return super.SHORTQUARTERS;
  }

  @override
  List<String> get QUARTERS {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    if (!_flaxResult.$1) return super.QUARTERS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_QUARTERS {
    return super.QUARTERS;
  }

  @override
  List<String> get AMPMS {
    final _flaxResult = _flaxPeer.call(19, const [], const {});
    if (!_flaxResult.$1) return super.AMPMS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_AMPMS {
    return super.AMPMS;
  }

  @override
  List<String> get DATEFORMATS {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.DATEFORMATS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_DATEFORMATS {
    return super.DATEFORMATS;
  }

  @override
  List<String> get TIMEFORMATS {
    final _flaxResult = _flaxPeer.call(21, const [], const {});
    if (!_flaxResult.$1) return super.TIMEFORMATS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_TIMEFORMATS {
    return super.TIMEFORMATS;
  }

  @override
  List<String> get DATETIMEFORMATS {
    final _flaxResult = _flaxPeer.call(22, const [], const {});
    if (!_flaxResult.$1) return super.DATETIMEFORMATS;
    final _flaxConvertedResult = _flaxResult.$2 as List<String>;
    return _flaxConvertedResult;
  }

  List<String> get _flaxSuperGet_DATETIMEFORMATS {
    return super.DATETIMEFORMATS;
  }

  @override
  Map<String, String>? get AVAILABLEFORMATS {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.AVAILABLEFORMATS;
    final _flaxConvertedResult = _flaxResult.$2 as Map<String, String>?;
    return _flaxConvertedResult;
  }

  Map<String, String>? get _flaxSuperGet_AVAILABLEFORMATS {
    return super.AVAILABLEFORMATS;
  }

  @override
  int get FIRSTDAYOFWEEK {
    final _flaxResult = _flaxPeer.call(24, const [], const {});
    if (!_flaxResult.$1) return super.FIRSTDAYOFWEEK;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_FIRSTDAYOFWEEK {
    return super.FIRSTDAYOFWEEK;
  }

  @override
  List<int> get WEEKENDRANGE {
    final _flaxResult = _flaxPeer.call(25, const [], const {});
    if (!_flaxResult.$1) return super.WEEKENDRANGE;
    final _flaxConvertedResult = _flaxResult.$2 as List<int>;
    return _flaxConvertedResult;
  }

  List<int> get _flaxSuperGet_WEEKENDRANGE {
    return super.WEEKENDRANGE;
  }

  @override
  int get FIRSTWEEKCUTOFFDAY {
    final _flaxResult = _flaxPeer.call(26, const [], const {});
    if (!_flaxResult.$1) return super.FIRSTWEEKCUTOFFDAY;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_FIRSTWEEKCUTOFFDAY {
    return super.FIRSTWEEKCUTOFFDAY;
  }

  @override
  String? get ZERODIGIT {
    final _flaxResult = _flaxPeer.call(27, const [], const {});
    if (!_flaxResult.$1) return super.ZERODIGIT;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_ZERODIGIT {
    return super.ZERODIGIT;
  }

  @override
  set NAME(String value) {
    final result = _flaxPeer.call(28, [value], const {});
    if (!result.$1) {
      super.NAME = value;
      return;
    }
  }

  void _flaxSuperSet_NAME(String value) {
    super.NAME = value;
  }

  @override
  set ERAS(List<String> value) {
    final result = _flaxPeer.call(29, [value], const {});
    if (!result.$1) {
      super.ERAS = value;
      return;
    }
  }

  void _flaxSuperSet_ERAS(List<String> value) {
    super.ERAS = value;
  }

  @override
  set ERANAMES(List<String> value) {
    final result = _flaxPeer.call(30, [value], const {});
    if (!result.$1) {
      super.ERANAMES = value;
      return;
    }
  }

  void _flaxSuperSet_ERANAMES(List<String> value) {
    super.ERANAMES = value;
  }

  @override
  set NARROWMONTHS(List<String> value) {
    final result = _flaxPeer.call(31, [value], const {});
    if (!result.$1) {
      super.NARROWMONTHS = value;
      return;
    }
  }

  void _flaxSuperSet_NARROWMONTHS(List<String> value) {
    super.NARROWMONTHS = value;
  }

  @override
  set STANDALONENARROWMONTHS(List<String> value) {
    final result = _flaxPeer.call(32, [value], const {});
    if (!result.$1) {
      super.STANDALONENARROWMONTHS = value;
      return;
    }
  }

  void _flaxSuperSet_STANDALONENARROWMONTHS(List<String> value) {
    super.STANDALONENARROWMONTHS = value;
  }

  @override
  set MONTHS(List<String> value) {
    final result = _flaxPeer.call(33, [value], const {});
    if (!result.$1) {
      super.MONTHS = value;
      return;
    }
  }

  void _flaxSuperSet_MONTHS(List<String> value) {
    super.MONTHS = value;
  }

  @override
  set STANDALONEMONTHS(List<String> value) {
    final result = _flaxPeer.call(34, [value], const {});
    if (!result.$1) {
      super.STANDALONEMONTHS = value;
      return;
    }
  }

  void _flaxSuperSet_STANDALONEMONTHS(List<String> value) {
    super.STANDALONEMONTHS = value;
  }

  @override
  set SHORTMONTHS(List<String> value) {
    final result = _flaxPeer.call(35, [value], const {});
    if (!result.$1) {
      super.SHORTMONTHS = value;
      return;
    }
  }

  void _flaxSuperSet_SHORTMONTHS(List<String> value) {
    super.SHORTMONTHS = value;
  }

  @override
  set STANDALONESHORTMONTHS(List<String> value) {
    final result = _flaxPeer.call(36, [value], const {});
    if (!result.$1) {
      super.STANDALONESHORTMONTHS = value;
      return;
    }
  }

  void _flaxSuperSet_STANDALONESHORTMONTHS(List<String> value) {
    super.STANDALONESHORTMONTHS = value;
  }

  @override
  set WEEKDAYS(List<String> value) {
    final result = _flaxPeer.call(37, [value], const {});
    if (!result.$1) {
      super.WEEKDAYS = value;
      return;
    }
  }

  void _flaxSuperSet_WEEKDAYS(List<String> value) {
    super.WEEKDAYS = value;
  }

  @override
  set STANDALONEWEEKDAYS(List<String> value) {
    final result = _flaxPeer.call(38, [value], const {});
    if (!result.$1) {
      super.STANDALONEWEEKDAYS = value;
      return;
    }
  }

  void _flaxSuperSet_STANDALONEWEEKDAYS(List<String> value) {
    super.STANDALONEWEEKDAYS = value;
  }

  @override
  set SHORTWEEKDAYS(List<String> value) {
    final result = _flaxPeer.call(39, [value], const {});
    if (!result.$1) {
      super.SHORTWEEKDAYS = value;
      return;
    }
  }

  void _flaxSuperSet_SHORTWEEKDAYS(List<String> value) {
    super.SHORTWEEKDAYS = value;
  }

  @override
  set STANDALONESHORTWEEKDAYS(List<String> value) {
    final result = _flaxPeer.call(40, [value], const {});
    if (!result.$1) {
      super.STANDALONESHORTWEEKDAYS = value;
      return;
    }
  }

  void _flaxSuperSet_STANDALONESHORTWEEKDAYS(List<String> value) {
    super.STANDALONESHORTWEEKDAYS = value;
  }

  @override
  set NARROWWEEKDAYS(List<String> value) {
    final result = _flaxPeer.call(41, [value], const {});
    if (!result.$1) {
      super.NARROWWEEKDAYS = value;
      return;
    }
  }

  void _flaxSuperSet_NARROWWEEKDAYS(List<String> value) {
    super.NARROWWEEKDAYS = value;
  }

  @override
  set STANDALONENARROWWEEKDAYS(List<String> value) {
    final result = _flaxPeer.call(42, [value], const {});
    if (!result.$1) {
      super.STANDALONENARROWWEEKDAYS = value;
      return;
    }
  }

  void _flaxSuperSet_STANDALONENARROWWEEKDAYS(List<String> value) {
    super.STANDALONENARROWWEEKDAYS = value;
  }

  @override
  set SHORTQUARTERS(List<String> value) {
    final result = _flaxPeer.call(43, [value], const {});
    if (!result.$1) {
      super.SHORTQUARTERS = value;
      return;
    }
  }

  void _flaxSuperSet_SHORTQUARTERS(List<String> value) {
    super.SHORTQUARTERS = value;
  }

  @override
  set QUARTERS(List<String> value) {
    final result = _flaxPeer.call(44, [value], const {});
    if (!result.$1) {
      super.QUARTERS = value;
      return;
    }
  }

  void _flaxSuperSet_QUARTERS(List<String> value) {
    super.QUARTERS = value;
  }

  @override
  set AMPMS(List<String> value) {
    final result = _flaxPeer.call(45, [value], const {});
    if (!result.$1) {
      super.AMPMS = value;
      return;
    }
  }

  void _flaxSuperSet_AMPMS(List<String> value) {
    super.AMPMS = value;
  }

  @override
  set DATEFORMATS(List<String> value) {
    final result = _flaxPeer.call(46, [value], const {});
    if (!result.$1) {
      super.DATEFORMATS = value;
      return;
    }
  }

  void _flaxSuperSet_DATEFORMATS(List<String> value) {
    super.DATEFORMATS = value;
  }

  @override
  set TIMEFORMATS(List<String> value) {
    final result = _flaxPeer.call(47, [value], const {});
    if (!result.$1) {
      super.TIMEFORMATS = value;
      return;
    }
  }

  void _flaxSuperSet_TIMEFORMATS(List<String> value) {
    super.TIMEFORMATS = value;
  }

  @override
  set DATETIMEFORMATS(List<String> value) {
    final result = _flaxPeer.call(48, [value], const {});
    if (!result.$1) {
      super.DATETIMEFORMATS = value;
      return;
    }
  }

  void _flaxSuperSet_DATETIMEFORMATS(List<String> value) {
    super.DATETIMEFORMATS = value;
  }

  @override
  set AVAILABLEFORMATS(Map<String, String>? value) {
    final result = _flaxPeer.call(49, [value], const {});
    if (!result.$1) {
      super.AVAILABLEFORMATS = value;
      return;
    }
  }

  void _flaxSuperSet_AVAILABLEFORMATS(Map<String, String>? value) {
    super.AVAILABLEFORMATS = value;
  }

  @override
  set FIRSTDAYOFWEEK(int value) {
    final result = _flaxPeer.call(50, [value], const {});
    if (!result.$1) {
      super.FIRSTDAYOFWEEK = value;
      return;
    }
  }

  void _flaxSuperSet_FIRSTDAYOFWEEK(int value) {
    super.FIRSTDAYOFWEEK = value;
  }

  @override
  set WEEKENDRANGE(List<int> value) {
    final result = _flaxPeer.call(51, [value], const {});
    if (!result.$1) {
      super.WEEKENDRANGE = value;
      return;
    }
  }

  void _flaxSuperSet_WEEKENDRANGE(List<int> value) {
    super.WEEKENDRANGE = value;
  }

  @override
  set FIRSTWEEKCUTOFFDAY(int value) {
    final result = _flaxPeer.call(52, [value], const {});
    if (!result.$1) {
      super.FIRSTWEEKCUTOFFDAY = value;
      return;
    }
  }

  void _flaxSuperSet_FIRSTWEEKCUTOFFDAY(int value) {
    super.FIRSTWEEKCUTOFFDAY = value;
  }

  @override
  set ZERODIGIT(String? value) {
    final result = _flaxPeer.call(53, [value], const {});
    if (!result.$1) {
      super.ZERODIGIT = value;
      return;
    }
  }

  void _flaxSuperSet_ZERODIGIT(String? value) {
    super.ZERODIGIT = value;
  }
}

final class _NumberParserBaseProxy<_Owner0 extends Object?>
    extends api1.NumberParserBase<_Owner0> {
  final FlaxProxyPeer _flaxPeer;
  _NumberParserBaseProxy(
    this._flaxPeer,
    api1.NumberFormat super.format,
    String super.text,
  );
  @override
  void invalidFormat() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_invalidFormat();
      return;
    }
    return;
  }

  void _flaxSuper_invalidFormat() {
    super.invalidFormat();
    return;
  }

  @override
  void handleSpace() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_handleSpace();
      return;
    }
    return;
  }

  void _flaxSuper_handleSpace() {
    super.handleSpace();
    return;
  }

  @override
  int? asDigit(String char) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[char], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_asDigit(char);
    }
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? _flaxSuper_asDigit(String char) {
    return super.asDigit(char);
  }

  @override
  void checkPrefixes({Object? skip = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[], <String, Object?>{
      if (!identical(skip, _flaxOmitted)) "skip": skip,
    });
    if (!_flaxResult.$1) {
      _flaxSuper_checkPrefixes(skip: skip);
      return;
    }
    return;
  }

  void _flaxSuper_checkPrefixes({Object? skip = _flaxOmitted}) {
    if (identical(skip, _flaxOmitted)) {
      super.checkPrefixes();
      return;
    }
    super.checkPrefixes(skip: skip as bool);
    return;
  }

  @override
  void checkSuffixes() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_checkSuffixes();
      return;
    }
    return;
  }

  void _flaxSuper_checkSuffixes() {
    super.checkSuffixes();
    return;
  }

  @override
  void processNonDigit() {
    final _flaxResult = _flaxPeer.call(5, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_processNonDigit();
      return;
    }
    return;
  }

  void _flaxSuper_processNonDigit() {
    super.processNonDigit();
    return;
  }

  @override
  _Owner0 parse() {
    final _flaxResult = _flaxPeer.call(6, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_parse();
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_parse() {
    return super.parse();
  }

  @override
  void invalidNumber() {
    final _flaxResult = _flaxPeer.call(7, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_invalidNumber();
      return;
    }
    return;
  }

  void _flaxSuper_invalidNumber() {
    super.invalidNumber();
    return;
  }

  @override
  _Owner0 fromNormalized(String normalizedText) {
    final _flaxResult = _flaxPeer.call(8, <Object?>[
      normalizedText,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: fromNormalized');
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  @override
  _Owner0 scaled(_Owner0 parsed, int scale) {
    final _flaxResult = _flaxPeer.call(9, <Object?>[
      parsed,
      scale,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: scaled');
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  @override
  _Owner0 nan() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: nan');
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  @override
  _Owner0 positiveInfinity() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: positiveInfinity');
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  @override
  _Owner0 negativeInfinity() {
    final _flaxResult = _flaxPeer.call(12, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: negativeInfinity');
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  @override
  api1.NumberFormat get format {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.format;
    final _flaxConvertedResult = _flaxResult.$2 as api1.NumberFormat;
    return _flaxConvertedResult;
  }

  api1.NumberFormat get _flaxSuperGet_format {
    return super.format;
  }

  @override
  String get text {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.text;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_text {
    return super.text;
  }

  @override
  _Owner0? get value {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0?;
    return _flaxConvertedResult;
  }

  _Owner0? get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api3.NumberSymbols get symbols {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.symbols;
    final _flaxConvertedResult = _flaxResult.$2 as api3.NumberSymbols;
    return _flaxConvertedResult;
  }

  api3.NumberSymbols get _flaxSuperGet_symbols {
    return super.symbols;
  }

  @override
  bool get gotPositive {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.gotPositive;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_gotPositive {
    return super.gotPositive;
  }

  @override
  bool get gotNegative {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    if (!_flaxResult.$1) return super.gotNegative;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_gotNegative {
    return super.gotNegative;
  }

  @override
  bool get gotPositiveSuffix {
    final _flaxResult = _flaxPeer.call(19, const [], const {});
    if (!_flaxResult.$1) return super.gotPositiveSuffix;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_gotPositiveSuffix {
    return super.gotPositiveSuffix;
  }

  @override
  bool get gotNegativeSuffix {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.gotNegativeSuffix;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_gotNegativeSuffix {
    return super.gotNegativeSuffix;
  }

  @override
  bool get done {
    final _flaxResult = _flaxPeer.call(21, const [], const {});
    if (!_flaxResult.$1) return super.done;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_done {
    return super.done;
  }

  @override
  bool get prefixesSkipped {
    final _flaxResult = _flaxPeer.call(22, const [], const {});
    if (!_flaxResult.$1) return super.prefixesSkipped;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_prefixesSkipped {
    return super.prefixesSkipped;
  }

  @override
  int get scale {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.scale;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_scale {
    return super.scale;
  }

  @override
  Map<String, Function> get replacements {
    final _flaxResult = _flaxPeer.call(24, const [], const {});
    if (!_flaxResult.$1) return super.replacements;
    final _flaxConvertedResult = _flaxResult.$2 as Map<String, Function>;
    return _flaxConvertedResult;
  }

  Map<String, Function> get _flaxSuperGet_replacements {
    return super.replacements;
  }

  @override
  bool get groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit {
    final _flaxResult = _flaxPeer.call(25, const [], const {});
    if (!_flaxResult.$1)
      return super.groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit {
    return super.groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit;
  }

  @override
  set value(_Owner0? value) {
    final result = _flaxPeer.call(26, [value], const {});
    if (!result.$1) {
      super.value = value;
      return;
    }
  }

  void _flaxSuperSet_value(_Owner0? value) {
    super.value = value;
  }

  @override
  set gotPositive(bool value) {
    final result = _flaxPeer.call(27, [value], const {});
    if (!result.$1) {
      super.gotPositive = value;
      return;
    }
  }

  void _flaxSuperSet_gotPositive(bool value) {
    super.gotPositive = value;
  }

  @override
  set gotNegative(bool value) {
    final result = _flaxPeer.call(28, [value], const {});
    if (!result.$1) {
      super.gotNegative = value;
      return;
    }
  }

  void _flaxSuperSet_gotNegative(bool value) {
    super.gotNegative = value;
  }

  @override
  set gotPositiveSuffix(bool value) {
    final result = _flaxPeer.call(29, [value], const {});
    if (!result.$1) {
      super.gotPositiveSuffix = value;
      return;
    }
  }

  void _flaxSuperSet_gotPositiveSuffix(bool value) {
    super.gotPositiveSuffix = value;
  }

  @override
  set gotNegativeSuffix(bool value) {
    final result = _flaxPeer.call(30, [value], const {});
    if (!result.$1) {
      super.gotNegativeSuffix = value;
      return;
    }
  }

  void _flaxSuperSet_gotNegativeSuffix(bool value) {
    super.gotNegativeSuffix = value;
  }

  @override
  set done(bool value) {
    final result = _flaxPeer.call(31, [value], const {});
    if (!result.$1) {
      super.done = value;
      return;
    }
  }

  void _flaxSuperSet_done(bool value) {
    super.done = value;
  }

  @override
  set prefixesSkipped(bool value) {
    final result = _flaxPeer.call(32, [value], const {});
    if (!result.$1) {
      super.prefixesSkipped = value;
      return;
    }
  }

  void _flaxSuperSet_prefixesSkipped(bool value) {
    super.prefixesSkipped = value;
  }

  @override
  set scale(int value) {
    final result = _flaxPeer.call(33, [value], const {});
    if (!result.$1) {
      super.scale = value;
      return;
    }
  }

  void _flaxSuperSet_scale(int value) {
    super.scale = value;
  }
}

final class _NumberSymbolsProxy extends api3.NumberSymbols
    implements _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _NumberSymbolsProxy(
    this._flaxPeer, {
    required String super.NAME,
    required String super.DECIMAL_SEP,
    required String super.GROUP_SEP,
    required String super.PERCENT,
    required String super.ZERO_DIGIT,
    required String super.PLUS_SIGN,
    required String super.MINUS_SIGN,
    required String super.EXP_SYMBOL,
    required String super.PERMILL,
    required String super.INFINITY,
    required String super.NAN,
    required String super.DECIMAL_PATTERN,
    required String super.SCIENTIFIC_PATTERN,
    required String super.PERCENT_PATTERN,
    required String super.CURRENCY_PATTERN,
    required String super.DEF_CURRENCY_CODE,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get NAME => _FlaxProxyDispatch0_get_NAME(this, 1);
  String get _flaxSuperGet_NAME {
    return super.NAME;
  }

  @override
  String get DECIMAL_SEP {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.DECIMAL_SEP;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_DECIMAL_SEP {
    return super.DECIMAL_SEP;
  }

  @override
  String get GROUP_SEP {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.GROUP_SEP;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_GROUP_SEP {
    return super.GROUP_SEP;
  }

  @override
  String get PERCENT {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.PERCENT;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_PERCENT {
    return super.PERCENT;
  }

  @override
  String get ZERO_DIGIT {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.ZERO_DIGIT;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_ZERO_DIGIT {
    return super.ZERO_DIGIT;
  }

  @override
  String get PLUS_SIGN {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.PLUS_SIGN;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_PLUS_SIGN {
    return super.PLUS_SIGN;
  }

  @override
  String get MINUS_SIGN {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.MINUS_SIGN;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_MINUS_SIGN {
    return super.MINUS_SIGN;
  }

  @override
  String get EXP_SYMBOL {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.EXP_SYMBOL;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_EXP_SYMBOL {
    return super.EXP_SYMBOL;
  }

  @override
  String get PERMILL {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.PERMILL;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_PERMILL {
    return super.PERMILL;
  }

  @override
  String get INFINITY {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.INFINITY;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_INFINITY {
    return super.INFINITY;
  }

  @override
  String get NAN {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1) return super.NAN;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_NAN {
    return super.NAN;
  }

  @override
  String get DECIMAL_PATTERN {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.DECIMAL_PATTERN;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_DECIMAL_PATTERN {
    return super.DECIMAL_PATTERN;
  }

  @override
  String get SCIENTIFIC_PATTERN {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.SCIENTIFIC_PATTERN;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_SCIENTIFIC_PATTERN {
    return super.SCIENTIFIC_PATTERN;
  }

  @override
  String get PERCENT_PATTERN {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.PERCENT_PATTERN;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_PERCENT_PATTERN {
    return super.PERCENT_PATTERN;
  }

  @override
  String get CURRENCY_PATTERN {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.CURRENCY_PATTERN;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_CURRENCY_PATTERN {
    return super.CURRENCY_PATTERN;
  }

  @override
  String get DEF_CURRENCY_CODE {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.DEF_CURRENCY_CODE;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_DEF_CURRENCY_CODE {
    return super.DEF_CURRENCY_CODE;
  }
}

Function _flaxGeneric_NumberFormat_parseWith<
  _Method0 extends Object?,
  _Method1 extends api1.NumberParserBase<_Method0>
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api1.NumberFormat).parseWith<_Method0, _Method1>(
      values["parserGenerator"]
          as _Method1 Function(api1.NumberFormat p0, String p1),
      values["text"] as String,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required(
        "parserGenerator",
        types.define<_Method1 Function(api1.NumberFormat p0, String p1)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("p0", _flaxBinding32),
                FlaxCallbackParameter.plain("p1", flaxStringType),
              ],
              types.ref<_Method1>(withinCallback: true),
              FlaxCallbackAdapters.wrap2<api1.NumberFormat, String, _Method1>,
              id:
                  types
                      .key<
                        _Method1 Function(api1.NumberFormat p0, String p1)
                      >() +
                  ":callback:<>(p:r:p0:object:flax.material/dependency_intl#type:NumberFormat,p:r:p1:String:)->parameter:",
              invoke: FlaxCallbackAdapters
                  .invoke2<api1.NumberFormat, String, _Method1>,
              matches: FlaxCallbackAdapters
                  .matches2<api1.NumberFormat, String, _Method1>,
            ),
          ),
        ),
      ),
      FlaxParameter.required("text", flaxStringType),
    ],
    types.ref<_Method0>(),
    invoke,
  );
};
Function _flaxGeneric_NumberFormat_tryParseWith<
  _Method0 extends Object?,
  _Method1 extends api1.NumberParserBase<_Method0>
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api1.NumberFormat).tryParseWith<_Method0, _Method1>(
      values["parserGenerator"]
          as _Method1 Function(api1.NumberFormat p0, String p1),
      values["text"] as String,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required(
        "parserGenerator",
        types.define<_Method1 Function(api1.NumberFormat p0, String p1)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("p0", _flaxBinding32),
                FlaxCallbackParameter.plain("p1", flaxStringType),
              ],
              types.ref<_Method1>(withinCallback: true),
              FlaxCallbackAdapters.wrap2<api1.NumberFormat, String, _Method1>,
              id:
                  types
                      .key<
                        _Method1 Function(api1.NumberFormat p0, String p1)
                      >() +
                  ":callback:<>(p:r:p0:object:flax.material/dependency_intl#type:NumberFormat,p:r:p1:String:)->parameter:",
              invoke: FlaxCallbackAdapters
                  .invoke2<api1.NumberFormat, String, _Method1>,
              matches: FlaxCallbackAdapters
                  .matches2<api1.NumberFormat, String, _Method1>,
            ),
          ),
        ),
      ),
      FlaxParameter.required("text", flaxStringType),
    ],
    types.ref<_Method0?>(),
    invoke,
  );
};
Type _flaxType_NumberParserBase<_Owner0 extends Object?>() =>
    api1.NumberParserBase<_Owner0>;
Function _flaxClass_NumberParserBase<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isNumberParserBase(Object value) =>
      value is api1.NumberParserBase<_Owner0>;
  // ignore: unused_element
  Object? _NumberParserBase_format(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).format;
  // ignore: unused_element
  Object? _NumberParserBase_text(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).text;
  // ignore: unused_element
  Object? _NumberParserBase_value(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).value;
  // ignore: unused_element
  Object? _NumberParserBase_symbols(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).symbols;
  // ignore: unused_element
  Object? _NumberParserBase_gotPositive(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).gotPositive;
  // ignore: unused_element
  Object? _NumberParserBase_gotNegative(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).gotNegative;
  // ignore: unused_element
  Object? _NumberParserBase_gotPositiveSuffix(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).gotPositiveSuffix;
  // ignore: unused_element
  Object? _NumberParserBase_gotNegativeSuffix(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).gotNegativeSuffix;
  // ignore: unused_element
  Object? _NumberParserBase_done(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).done;
  // ignore: unused_element
  Object? _NumberParserBase_prefixesSkipped(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).prefixesSkipped;
  // ignore: unused_element
  Object? _NumberParserBase_scale(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).scale;
  // ignore: unused_element
  Object? _NumberParserBase_replacements(Object value) =>
      (value as api1.NumberParserBase<_Owner0>).replacements;
  // ignore: unused_element
  Object? _NumberParserBase_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit(
    Object value,
  ) => (value as api1.NumberParserBase<_Owner0>)
      .groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit;
  void _NumberParserBase_set_value(Object value, Object? input) {
    (value as api1.NumberParserBase<_Owner0>).value = input as _Owner0?;
  }

  void _NumberParserBase_set_gotPositive(Object value, Object? input) {
    (value as api1.NumberParserBase<_Owner0>).gotPositive = input as bool;
  }

  void _NumberParserBase_set_gotNegative(Object value, Object? input) {
    (value as api1.NumberParserBase<_Owner0>).gotNegative = input as bool;
  }

  void _NumberParserBase_set_gotPositiveSuffix(Object value, Object? input) {
    (value as api1.NumberParserBase<_Owner0>).gotPositiveSuffix = input as bool;
  }

  void _NumberParserBase_set_gotNegativeSuffix(Object value, Object? input) {
    (value as api1.NumberParserBase<_Owner0>).gotNegativeSuffix = input as bool;
  }

  void _NumberParserBase_set_done(Object value, Object? input) {
    (value as api1.NumberParserBase<_Owner0>).done = input as bool;
  }

  void _NumberParserBase_set_prefixesSkipped(Object value, Object? input) {
    (value as api1.NumberParserBase<_Owner0>).prefixesSkipped = input as bool;
  }

  void _NumberParserBase_set_scale(Object value, Object? input) {
    (value as api1.NumberParserBase<_Owner0>).scale = input as int;
  }

  Object? _NumberParserBase_super_get_format(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_format;
  Object? _NumberParserBase_super_get_text(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_text;
  Object? _NumberParserBase_super_get_value(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_value;
  Object? _NumberParserBase_super_get_symbols(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_symbols;
  Object? _NumberParserBase_super_get_gotPositive(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_gotPositive;
  Object? _NumberParserBase_super_get_gotNegative(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_gotNegative;
  Object? _NumberParserBase_super_get_gotPositiveSuffix(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)
      ._flaxSuperGet_gotPositiveSuffix;
  Object? _NumberParserBase_super_get_gotNegativeSuffix(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)
      ._flaxSuperGet_gotNegativeSuffix;
  Object? _NumberParserBase_super_get_done(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_done;
  Object? _NumberParserBase_super_get_prefixesSkipped(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_prefixesSkipped;
  Object? _NumberParserBase_super_get_scale(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_scale;
  Object? _NumberParserBase_super_get_replacements(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperGet_replacements;
  Object?
  _NumberParserBase_super_get_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit(
    Object value,
    Map<String, Object?> values,
  ) => (value as _NumberParserBaseProxy<_Owner0>)
      ._flaxSuperGet_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit;
  Object? _NumberParserBase_super_set_value(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperSet_value(
      values['value'] as _Owner0?,
    );
    return null;
  }

  Object? _NumberParserBase_super_set_gotPositive(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperSet_gotPositive(
      values['value'] as bool,
    );
    return null;
  }

  Object? _NumberParserBase_super_set_gotNegative(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperSet_gotNegative(
      values['value'] as bool,
    );
    return null;
  }

  Object? _NumberParserBase_super_set_gotPositiveSuffix(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperSet_gotPositiveSuffix(
      values['value'] as bool,
    );
    return null;
  }

  Object? _NumberParserBase_super_set_gotNegativeSuffix(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperSet_gotNegativeSuffix(
      values['value'] as bool,
    );
    return null;
  }

  Object? _NumberParserBase_super_set_done(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperSet_done(
      values['value'] as bool,
    );
    return null;
  }

  Object? _NumberParserBase_super_set_prefixesSkipped(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperSet_prefixesSkipped(
      values['value'] as bool,
    );
    return null;
  }

  Object? _NumberParserBase_super_set_scale(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _NumberParserBaseProxy<_Owner0>)._flaxSuperSet_scale(
      values['value'] as int,
    );
    return null;
  }

  Object? _NumberParserBase_invalidFormat(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api1.NumberParserBase<_Owner0>).invalidFormat();
    return null;
  }

  Object? _NumberParserBase_super_invalidFormat(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _NumberParserBaseProxy<_Owner0>)._flaxSuper_invalidFormat();
    return null;
  }

  Object? _NumberParserBase_handleSpace(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api1.NumberParserBase<_Owner0>).handleSpace();
    return null;
  }

  Object? _NumberParserBase_super_handleSpace(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _NumberParserBaseProxy<_Owner0>)._flaxSuper_handleSpace();
    return null;
  }

  Object? _NumberParserBase_asDigit(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api1.NumberParserBase<_Owner0>).asDigit(
      values["char"] as String,
    );
  }

  Object? _NumberParserBase_super_asDigit(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _NumberParserBaseProxy<_Owner0>)._flaxSuper_asDigit(
      values["char"] as String,
    );
  }

  Object? _NumberParserBase_checkPrefixes(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api1.NumberParserBase<_Owner0>).checkPrefixes(
      skip: values["skip"] as bool,
    );
    return null;
  }

  Object? _NumberParserBase_super_checkPrefixes(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _NumberParserBaseProxy<_Owner0>)._flaxSuper_checkPrefixes(
      skip: values["skip"] as bool,
    );
    return null;
  }

  Object? _NumberParserBase_checkSuffixes(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api1.NumberParserBase<_Owner0>).checkSuffixes();
    return null;
  }

  Object? _NumberParserBase_super_checkSuffixes(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _NumberParserBaseProxy<_Owner0>)._flaxSuper_checkSuffixes();
    return null;
  }

  Object? _NumberParserBase_processNonDigit(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api1.NumberParserBase<_Owner0>).processNonDigit();
    return null;
  }

  Object? _NumberParserBase_super_processNonDigit(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _NumberParserBaseProxy<_Owner0>)._flaxSuper_processNonDigit();
    return null;
  }

  Object? _NumberParserBase_parse(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api1.NumberParserBase<_Owner0>).parse();
  }

  Object? _NumberParserBase_super_parse(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _NumberParserBaseProxy<_Owner0>)._flaxSuper_parse();
  }

  Object? _NumberParserBase_invalidNumber(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api1.NumberParserBase<_Owner0>).invalidNumber();
    return null;
  }

  Object? _NumberParserBase_super_invalidNumber(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _NumberParserBaseProxy<_Owner0>)._flaxSuper_invalidNumber();
    return null;
  }

  Object? _NumberParserBase_fromNormalized(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api1.NumberParserBase<_Owner0>).fromNormalized(
      values["normalizedText"] as String,
    );
  }

  Object? _NumberParserBase_scaled(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api1.NumberParserBase<_Owner0>).scaled(
      values["parsed"] as _Owner0,
      values["scale"] as int,
    );
  }

  Object? _NumberParserBase_nan(Object receiver, Map<String, Object?> values) {
    return (receiver as api1.NumberParserBase<_Owner0>).nan();
  }

  Object? _NumberParserBase_positiveInfinity(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api1.NumberParserBase<_Owner0>).positiveInfinity();
  }

  Object? _NumberParserBase_negativeInfinity(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api1.NumberParserBase<_Owner0>).negativeInfinity();
  }

  // ignore: unused_element
  Object _createNumberParserBase(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "@implementation":
        return _NumberParserBaseProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          values["format"] as api1.NumberFormat,
          values["text"] as String,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  return FlaxDartClass(
    api1.NumberParserBase<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain("format", _flaxBinding32, _NumberParserBase_format),
        FlaxGetter.plain("text", flaxStringType, _NumberParserBase_text),
        FlaxGetter.plain(
          "value",
          types.ref<_Owner0?>(),
          _NumberParserBase_value,
        ),
        FlaxGetter.plain("symbols", _flaxBinding34, _NumberParserBase_symbols),
        FlaxGetter.plain(
          "gotPositive",
          flaxBoolType,
          _NumberParserBase_gotPositive,
        ),
        FlaxGetter.plain(
          "gotNegative",
          flaxBoolType,
          _NumberParserBase_gotNegative,
        ),
        FlaxGetter.plain(
          "gotPositiveSuffix",
          flaxBoolType,
          _NumberParserBase_gotPositiveSuffix,
        ),
        FlaxGetter.plain(
          "gotNegativeSuffix",
          flaxBoolType,
          _NumberParserBase_gotNegativeSuffix,
        ),
        FlaxGetter.plain("done", flaxBoolType, _NumberParserBase_done),
        FlaxGetter.plain(
          "prefixesSkipped",
          flaxBoolType,
          _NumberParserBase_prefixesSkipped,
        ),
        FlaxGetter.plain("scale", flaxIntType, _NumberParserBase_scale),
        FlaxGetter.plain(
          "replacements",
          _flaxBinding36,
          _NumberParserBase_replacements,
        ),
        FlaxGetter.plain(
          "groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit",
          flaxBoolType,
          _NumberParserBase_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit,
        ),
      ],
      {
        "invalidFormat": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_invalidFormat,
        ),
        "handleSpace": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_handleSpace,
        ),
        "asDigit": FlaxInstanceMethod.plain(
          _flaxBinding423,
          flaxNullableIntType,
          _NumberParserBase_asDigit,
        ),
        "checkPrefixes": FlaxInstanceMethod.plain(
          _flaxBinding351,
          flaxVoidType,
          _NumberParserBase_checkPrefixes,
        ),
        "checkSuffixes": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_checkSuffixes,
        ),
        "processNonDigit": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_processNonDigit,
        ),
        "parse": FlaxInstanceMethod.plain(
          _flaxBinding352,
          types.ref<_Owner0>(),
          _NumberParserBase_parse,
        ),
        "invalidNumber": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_invalidNumber,
        ),
        "fromNormalized": FlaxInstanceMethod.plain(
          _flaxBinding353,
          types.ref<_Owner0>(),
          _NumberParserBase_fromNormalized,
        ),
        "scaled": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required("parsed", types.ref<_Owner0>()),
            FlaxParameter.required("scale", flaxIntType),
          ],
          types.ref<_Owner0>(),
          _NumberParserBase_scaled,
        ),
        "nan": FlaxInstanceMethod.plain(
          _flaxBinding352,
          types.ref<_Owner0>(),
          _NumberParserBase_nan,
        ),
        "positiveInfinity": FlaxInstanceMethod.plain(
          _flaxBinding352,
          types.ref<_Owner0>(),
          _NumberParserBase_positiveInfinity,
        ),
        "negativeInfinity": FlaxInstanceMethod.plain(
          _flaxBinding352,
          types.ref<_Owner0>(),
          _NumberParserBase_negativeInfinity,
        ),
        "@super:invalidFormat": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_super_invalidFormat,
        ),
        "@super:handleSpace": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_super_handleSpace,
        ),
        "@super:asDigit": FlaxInstanceMethod.plain(
          _flaxBinding423,
          flaxNullableIntType,
          _NumberParserBase_super_asDigit,
        ),
        "@super:checkPrefixes": FlaxInstanceMethod.plain(
          _flaxBinding351,
          flaxVoidType,
          _NumberParserBase_super_checkPrefixes,
        ),
        "@super:checkSuffixes": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_super_checkSuffixes,
        ),
        "@super:processNonDigit": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_super_processNonDigit,
        ),
        "@super:parse": FlaxInstanceMethod.plain(
          _flaxBinding352,
          types.ref<_Owner0>(),
          _NumberParserBase_super_parse,
        ),
        "@super:invalidNumber": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxVoidType,
          _NumberParserBase_super_invalidNumber,
        ),
        "@super:get:format": FlaxInstanceMethod.plain(
          _flaxBinding352,
          _flaxBinding32,
          _NumberParserBase_super_get_format,
        ),
        "@super:get:text": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxStringType,
          _NumberParserBase_super_get_text,
        ),
        "@super:get:value": FlaxInstanceMethod.plain(
          _flaxBinding352,
          types.ref<_Owner0?>(),
          _NumberParserBase_super_get_value,
        ),
        "@super:get:symbols": FlaxInstanceMethod.plain(
          _flaxBinding352,
          _flaxBinding34,
          _NumberParserBase_super_get_symbols,
        ),
        "@super:get:gotPositive": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxBoolType,
          _NumberParserBase_super_get_gotPositive,
        ),
        "@super:get:gotNegative": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxBoolType,
          _NumberParserBase_super_get_gotNegative,
        ),
        "@super:get:gotPositiveSuffix": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxBoolType,
          _NumberParserBase_super_get_gotPositiveSuffix,
        ),
        "@super:get:gotNegativeSuffix": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxBoolType,
          _NumberParserBase_super_get_gotNegativeSuffix,
        ),
        "@super:get:done": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxBoolType,
          _NumberParserBase_super_get_done,
        ),
        "@super:get:prefixesSkipped": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxBoolType,
          _NumberParserBase_super_get_prefixesSkipped,
        ),
        "@super:get:scale": FlaxInstanceMethod.plain(
          _flaxBinding352,
          flaxIntType,
          _NumberParserBase_super_get_scale,
        ),
        "@super:get:replacements": FlaxInstanceMethod.plain(
          _flaxBinding352,
          _flaxBinding36,
          _NumberParserBase_super_get_replacements,
        ),
        "@super:get:groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit":
            FlaxInstanceMethod.plain(
              _flaxBinding352,
              flaxBoolType,
              _NumberParserBase_super_get_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit,
            ),
        "@super:set:value": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", types.ref<_Owner0?>())],
          flaxVoidType,
          _NumberParserBase_super_set_value,
        ),
        "@super:set:gotPositive": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_gotPositive,
        ),
        "@super:set:gotNegative": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_gotNegative,
        ),
        "@super:set:gotPositiveSuffix": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_gotPositiveSuffix,
        ),
        "@super:set:gotNegativeSuffix": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_gotNegativeSuffix,
        ),
        "@super:set:done": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_done,
        ),
        "@super:set:prefixesSkipped": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxBoolType)],
          flaxVoidType,
          _NumberParserBase_super_set_prefixesSkipped,
        ),
        "@super:set:scale": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", flaxIntType)],
          flaxVoidType,
          _NumberParserBase_super_set_scale,
        ),
      },
      constructors: {"@implementation": _flaxBinding354},
      create: _createNumberParserBase,
      matches: _isNumberParserBase,
      setters: [
        FlaxSetter("value", types.ref<_Owner0?>(), _NumberParserBase_set_value),
        FlaxSetter(
          "gotPositive",
          flaxBoolType,
          _NumberParserBase_set_gotPositive,
        ),
        FlaxSetter(
          "gotNegative",
          flaxBoolType,
          _NumberParserBase_set_gotNegative,
        ),
        FlaxSetter(
          "gotPositiveSuffix",
          flaxBoolType,
          _NumberParserBase_set_gotPositiveSuffix,
        ),
        FlaxSetter(
          "gotNegativeSuffix",
          flaxBoolType,
          _NumberParserBase_set_gotNegativeSuffix,
        ),
        FlaxSetter("done", flaxBoolType, _NumberParserBase_set_done),
        FlaxSetter(
          "prefixesSkipped",
          flaxBoolType,
          _NumberParserBase_set_prefixesSkipped,
        ),
        FlaxSetter("scale", flaxIntType, _NumberParserBase_set_scale),
      ],
      supertypes: [
        "flax.material/dependency_intl#type:NumberParserBase",
        ...["dart:core::Object"],
      ],
      listenerPairs: {},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "invalidFormat",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "handleSpace",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "asDigit",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("char", flaxStringType)],
            flaxNullableIntType,
            id:
                types.key<int? Function(String char)>() +
                ":callback:<>(p:r:char:String:)->int?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "checkPrefixes",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "skip",
                flaxBoolType,
                required: false,
                positional: false,
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function({bool skip})>() +
                ":callback:<>(n:o:skip:bool:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "checkSuffixes",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "processNonDigit",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "parse",
          0,
          FlaxCallbackBinding.signature(
            [],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function()>() + ":callback:<>()->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "invalidNumber",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "fromNormalized",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("normalizedText", flaxStringType)],
            types.ref<_Owner0>(withinCallback: true),
            id:
                types.key<_Owner0 Function(String normalizedText)>() +
                ":callback:<>(p:r:normalizedText:String:)->parameter:",
          ),
        ),
        FlaxProxyMember(
          "scaled",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "parsed",
                types.ref<_Owner0>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain("scale", flaxIntType),
            ],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(_Owner0 parsed, int scale)>() + ":callback:<>(p:r:parsed:parameter:,p:r:scale:int:)->parameter:",
          ),
        ),
        FlaxProxyMember(
          "nan",
          0,
          FlaxCallbackBinding.signature(
            [],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function()>() + ":callback:<>()->parameter:",
          ),
        ),
        FlaxProxyMember(
          "positiveInfinity",
          0,
          FlaxCallbackBinding.signature(
            [],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function()>() + ":callback:<>()->parameter:",
          ),
        ),
        FlaxProxyMember(
          "negativeInfinity",
          0,
          FlaxCallbackBinding.signature(
            [],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function()>() + ":callback:<>()->parameter:",
          ),
        ),
        FlaxProxyMember(
          "format",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding32,
            id: types.key<api1.NumberFormat Function()>() + ":callback:<>()->object:flax.material/dependency_intl#type:NumberFormat",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "text",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<_Owner0?>(withinCallback: true),
            id:
                types.key<_Owner0? Function()>() +
                ":callback:<>()->parameter?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "symbols",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding34,
            id: types.key<api3.NumberSymbols Function()>() + ":callback:<>()->object:flax.material/dependency_intl#type:NumberSymbols",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "gotPositive",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "gotNegative",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "gotPositiveSuffix",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "gotNegativeSuffix",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "done",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "prefixesSkipped",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "scale",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxIntType,
            id: types.key<int Function()>() + ":callback:<>()->int:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "replacements",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding36,
            id:
                types.key<Map<String, Function> Function()>() +
                ":callback:<>()->map:[function:][String:]",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "value",
          2,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "value",
                types.ref<_Owner0?>(withinCallback: true),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(_Owner0? value)>() +
                ":callback:<>(p:r:value:parameter?:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "gotPositive",
          2,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("value", flaxBoolType)],
            flaxVoidType,
            id:
                types.key<void Function(bool value)>() +
                ":callback:<>(p:r:value:bool:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "gotNegative",
          2,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("value", flaxBoolType)],
            flaxVoidType,
            id:
                types.key<void Function(bool value)>() +
                ":callback:<>(p:r:value:bool:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "gotPositiveSuffix",
          2,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("value", flaxBoolType)],
            flaxVoidType,
            id:
                types.key<void Function(bool value)>() +
                ":callback:<>(p:r:value:bool:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "gotNegativeSuffix",
          2,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("value", flaxBoolType)],
            flaxVoidType,
            id:
                types.key<void Function(bool value)>() +
                ":callback:<>(p:r:value:bool:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "done",
          2,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("value", flaxBoolType)],
            flaxVoidType,
            id:
                types.key<void Function(bool value)>() +
                ":callback:<>(p:r:value:bool:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "prefixesSkipped",
          2,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("value", flaxBoolType)],
            flaxVoidType,
            id:
                types.key<void Function(bool value)>() +
                ":callback:<>(p:r:value:bool:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "scale",
          2,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("value", flaxIntType)],
            flaxVoidType,
            id:
                types.key<void Function(int value)>() +
                ":callback:<>(p:r:value:int:)->void:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
  );
};
const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[8,8,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[2,2,[],[]]]", _flaxShape1),
];
Function _flaxShape0<
  _Shape0,
  _Shape1,
  _Shape2,
  _Shape3,
  _Shape4,
  _Shape5,
  _Shape6,
  _Shape7,
  _Shape8
>() => (FlaxDartTypes types, bool withinCallback) {
  Object _callback0(FlaxCallback _flaxBridgeCallback) =>
      (
        _Shape0 p0,
        _Shape1 p1,
        _Shape2 p2,
        _Shape3 p3,
        _Shape4 p4,
        _Shape5 p5,
        _Shape6 p6,
        _Shape7 p7,
      ) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        positional.add(p1);
        positional.add(p2);
        positional.add(p3);
        positional.add(p4);
        positional.add(p5);
        positional.add(p6);
        positional.add(p7);
        return _flaxBridgeCallback.call(positional, named) as _Shape8;
      };
  bool _callback0Matches(Object value) =>
      value
          is _Shape8 Function(
            _Shape0 year,
            _Shape1 month,
            _Shape2 day,
            _Shape3 hour24,
            _Shape4 minute,
            _Shape5 second,
            _Shape6 fractionalSecond,
            _Shape7 utc,
          );
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as _Shape8 Function(
          _Shape0 year,
          _Shape1 month,
          _Shape2 day,
          _Shape3 hour24,
          _Shape4 minute,
          _Shape5 second,
          _Shape6 fractionalSecond,
          _Shape7 utc,
        ))(
      positional[0] as _Shape0,
      positional[1] as _Shape1,
      positional[2] as _Shape2,
      positional[3] as _Shape3,
      positional[4] as _Shape4,
      positional[5] as _Shape5,
      positional[6] as _Shape6,
      positional[7] as _Shape7,
    );
  }

  return types.define<
    _Shape8 Function(
      _Shape0 year,
      _Shape1 month,
      _Shape2 day,
      _Shape3 hour24,
      _Shape4 minute,
      _Shape5 second,
      _Shape6 fractionalSecond,
      _Shape7 utc,
    )
  >(
    FlaxTypeRef(
      "callback",
      nullable: false,
      callback: FlaxCallbackBinding(
        [
          FlaxCallbackParameter.plain(
            "year",
            types.ref<_Shape0>(withinCallback: true),
          ),
          FlaxCallbackParameter.plain(
            "month",
            types.ref<_Shape1>(withinCallback: true),
          ),
          FlaxCallbackParameter.plain(
            "day",
            types.ref<_Shape2>(withinCallback: true),
          ),
          FlaxCallbackParameter.plain(
            "hour24",
            types.ref<_Shape3>(withinCallback: true),
          ),
          FlaxCallbackParameter.plain(
            "minute",
            types.ref<_Shape4>(withinCallback: true),
          ),
          FlaxCallbackParameter.plain(
            "second",
            types.ref<_Shape5>(withinCallback: true),
          ),
          FlaxCallbackParameter.plain(
            "fractionalSecond",
            types.ref<_Shape6>(withinCallback: true),
          ),
          FlaxCallbackParameter.plain(
            "utc",
            types.ref<_Shape7>(withinCallback: true),
          ),
        ],
        types.ref<_Shape8>(withinCallback: true),
        _callback0,
        id:
            types
                .key<
                  _Shape8 Function(
                    _Shape0 year,
                    _Shape1 month,
                    _Shape2 day,
                    _Shape3 hour24,
                    _Shape4 minute,
                    _Shape5 second,
                    _Shape6 fractionalSecond,
                    _Shape7 utc,
                  )
                >() +
            ":callback:<>(p:r:year:parameter:,p:r:month:parameter:,p:r:day:parameter:,p:r:hour24:parameter:,p:r:minute:parameter:,p:r:second:parameter:,p:r:fractionalSecond:parameter:,p:r:utc:parameter:)->parameter:",
        invoke: _callback0Invoke,
        matches: _callback0Matches,
      ),
    ),
    withinCallback: withinCallback,
  );
};
Function _flaxShape1<_Shape0, _Shape1, _Shape2>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape2 Function(_Shape0 p0, _Shape1 p1)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "p0",
                types.ref<_Shape0>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "p1",
                types.ref<_Shape1>(withinCallback: true),
              ),
            ],
            types.ref<_Shape2>(withinCallback: true),
            FlaxCallbackAdapters.wrap2<_Shape0, _Shape1, _Shape2>,
            id:
                types.key<_Shape2 Function(_Shape0 p0, _Shape1 p1)>() +
                ":callback:<>(p:r:p0:parameter:,p:r:p1:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke2<_Shape0, _Shape1, _Shape2>,
            matches: FlaxCallbackAdapters.matches2<_Shape0, _Shape1, _Shape2>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Object _callback0(FlaxCallback _flaxBridgeCallback) =>
    (int p0, int p1, int p2, int p3, int p4, int p5, int p6, bool p7) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      positional.add(p3);
      positional.add(p4);
      positional.add(p5);
      positional.add(p6);
      positional.add(p7);
      return _flaxBridgeCallback.call(positional, named) as api2.DateTime;
    };
bool _callback0Matches(Object value) =>
    value
        is api2.DateTime Function(
          int year,
          int month,
          int day,
          int hour24,
          int minute,
          int second,
          int fractionalSecond,
          bool utc,
        );
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api2.DateTime Function(
        int year,
        int month,
        int day,
        int hour24,
        int minute,
        int second,
        int fractionalSecond,
        bool utc,
      ))(
    positional[0] as int,
    positional[1] as int,
    positional[2] as int,
    positional[3] as int,
    positional[4] as int,
    positional[5] as int,
    positional[6] as int,
    positional[7] as bool,
  );
}

Object _callback1(FlaxCallback _flaxBridgeCallback) =>
    (api1.NumberFormat p0, String p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return _flaxBridgeCallback.call(positional, named)
          as api1.NumberParserBase<Object?>;
    };
bool _callback1Matches(Object value) =>
    value
        is api1.NumberParserBase<Object?> Function(
          api1.NumberFormat p0,
          String p1,
        );
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.NumberParserBase<Object?> Function(
        api1.NumberFormat p0,
        String p1,
      ))(positional[0] as api1.NumberFormat, positional[1] as String);
}

Object _callback2(FlaxCallback _flaxBridgeCallback) =>
    (api1.NumberFormat p0, String p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return _flaxBridgeCallback.call(positional, named)
          as api1.NumberParserBase<Object?>;
    };
bool _callback2Matches(Object value) =>
    value
        is api1.NumberParserBase<Object?> Function(
          api1.NumberFormat p0,
          String p1,
        );
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api1.NumberParserBase<Object?> Function(
        api1.NumberFormat p0,
        String p1,
      ))(positional[0] as api1.NumberFormat, positional[1] as String);
}

Object _collection0Create() => <String, Object?>{};
bool _collection0Matches(Object value) => value is Map<String, Object?>;
Object _collection1Create() => <String>[];
bool _collection1Matches(Object value) => value is List<String>;
Object _collection2Create() => <String>[];
Object _collection2Restore(Object value) =>
    (value as Iterable<Object?>).cast<String>();
bool _collection2Matches(Object value) => value is Iterable<String>;
Object _collection3Create() => <String, String>{};
bool _collection3Matches(Object value) => value is Map<String, String>;
Object _collection4Create() => <int>[];
bool _collection4Matches(Object value) => value is List<int>;
Object _collection5Create() => <int>[];
Object _collection5Restore(Object value) =>
    (value as Iterable<Object?>).cast<int>();
bool _collection5Matches(Object value) => value is Iterable<int>;
Object _collection6Create() => <String, Function>{};
bool _collection6Matches(Object value) => value is Map<String, Function>;
Object _collection7Create() => <Object?, Object?>{};
bool _collection7Matches(Object value) => value is Map<Object?, Object?>;
const _flaxBinding0 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("date", flaxDateTimeType)],
  flaxStringType,
  id: "callback:<>(p:r:date:object:flax.core/flutter#type:DateTime)->String:",
);
const _flaxBinding1 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("inputString", flaxStringType)],
  flaxDateTimeType,
  id: "callback:<>(p:r:inputString:String:)->object:flax.core/flutter#type:DateTime",
);
const _flaxBinding2 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:DateTime",
  nullable: true,
);
const _flaxBinding3 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("inputString", flaxStringType)],
  _flaxBinding2,
  id: "callback:<>(p:r:inputString:String:)->object?:flax.core/flutter#type:DateTime",
);
const _flaxBinding4 = FlaxTypeRef(
  "object",
  id: "flax.material/dependency_intl#type:DateFormat",
);
const _flaxBinding5 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding4,
  id: "callback:<>()->object:flax.material/dependency_intl#type:DateFormat",
);
const _flaxBinding6 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("year", flaxIntType),
    FlaxCallbackParameter.plain("month", flaxIntType),
    FlaxCallbackParameter.plain("day", flaxIntType),
    FlaxCallbackParameter.plain("hour24", flaxIntType),
    FlaxCallbackParameter.plain("minute", flaxIntType),
    FlaxCallbackParameter.plain("second", flaxIntType),
    FlaxCallbackParameter.plain("fractionalSecond", flaxIntType),
    FlaxCallbackParameter.plain("utc", flaxBoolType),
  ],
  flaxDateTimeType,
  _callback0,
  id: "callback:<>(p:r:year:int:,p:r:month:int:,p:r:day:int:,p:r:hour24:int:,p:r:minute:int:,p:r:second:int:,p:r:fractionalSecond:int:,p:r:utc:bool:)->object:flax.core/flutter#type:DateTime",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding7 = FlaxTypeRef("callback", callback: _flaxBinding6);
const _flaxBinding8 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding7,
  id: "callback:<>()->callback:<>(p:r:year:int:,p:r:month:int:,p:r:day:int:,p:r:hour24:int:,p:r:minute:int:,p:r:second:int:,p:r:fractionalSecond:int:,p:r:utc:bool:)->object:flax.core/flutter#type:DateTime",
);
const _flaxBinding9 = FlaxTypeRef(
  "object",
  id: "flax.material/dependency_intl#type:DateSymbols",
);
const _flaxBinding10 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding9,
  id: "callback:<>()->object:flax.material/dependency_intl#type:DateSymbols",
);
const _flaxBinding11 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:RegExp",
);
const _flaxBinding12 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding11,
  id: "callback:<>()->object:flax.core/flutter#type:RegExp",
);
const _flaxBinding13 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding7)],
  flaxVoidType,
  id: "callback:<>(p:r:value:callback:<>(p:r:year:int:,p:r:month:int:,p:r:day:int:,p:r:hour24:int:,p:r:minute:int:,p:r:second:int:,p:r:fractionalSecond:int:,p:r:utc:bool:)->object:flax.core/flutter#type:DateTime)->void:",
);
const _flaxBinding14 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxBoolType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:bool:)->void:",
);
const _flaxBinding15 = FlaxTypeRef(
  "map",
  item: flaxNullableAnyType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[any?:][String:]",
    _collection0Create,
    _collection0Matches,
  ),
);
const _flaxBinding16 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding15,
  id: "callback:<>()->map:[any?:][String:]",
);
const _flaxBinding17 = FlaxTypeRef(
  "iterable",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection2Create,
    _collection2Matches,
    restore: _collection2Restore,
  ),
);
const _flaxBinding18 = FlaxTypeRef(
  "list",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection1Create,
    _collection1Matches,
  ),
  iterable: _flaxBinding17,
);
const _flaxBinding19 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding18,
  id: "callback:<>()->list:[String:]",
);
const _flaxBinding20 = FlaxTypeRef(
  "map",
  nullable: true,
  item: flaxStringType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[String:][String:]",
    _collection3Create,
    _collection3Matches,
  ),
);
const _flaxBinding21 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding20,
  id: "callback:<>()->map?:[String:][String:]",
);
const _flaxBinding22 = FlaxTypeRef(
  "iterable",
  item: flaxIntType,
  collection: FlaxCollectionBinding(
    "iterable:[int:]",
    _collection5Create,
    _collection5Matches,
    restore: _collection5Restore,
  ),
);
const _flaxBinding23 = FlaxTypeRef(
  "list",
  item: flaxIntType,
  collection: FlaxCollectionBinding(
    "list:[int:]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding22,
);
const _flaxBinding24 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding23,
  id: "callback:<>()->list:[int:]",
);
const _flaxBinding25 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxStringType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:String:)->void:",
);
const _flaxBinding26 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding18)],
  flaxVoidType,
  id: "callback:<>(p:r:value:list:[String:])->void:",
);
const _flaxBinding27 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding20)],
  flaxVoidType,
  id: "callback:<>(p:r:value:map?:[String:][String:])->void:",
);
const _flaxBinding28 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxIntType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:int:)->void:",
);
const _flaxBinding29 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding23)],
  flaxVoidType,
  id: "callback:<>(p:r:value:list:[int:])->void:",
);
const _flaxBinding30 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableStringType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:String?:)->void:",
);
const _flaxBinding31 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("char", flaxStringType)],
  flaxNullableIntType,
  id: "callback:<>(p:r:char:String:)->int?:",
);
const _flaxBinding32 = FlaxTypeRef(
  "object",
  id: "flax.material/dependency_intl#type:NumberFormat",
);
const _flaxBinding33 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding32,
  id: "callback:<>()->object:flax.material/dependency_intl#type:NumberFormat",
);
const _flaxBinding34 = FlaxTypeRef(
  "object",
  id: "flax.material/dependency_intl#type:NumberSymbols",
);
const _flaxBinding35 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding34,
  id: "callback:<>()->object:flax.material/dependency_intl#type:NumberSymbols",
);
const _flaxBinding36 = FlaxTypeRef(
  "map",
  item: flaxFunctionType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[function:][String:]",
    _collection6Create,
    _collection6Matches,
  ),
);
const _flaxBinding37 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding36,
  id: "callback:<>()->map:[function:][String:]",
);
const _flaxBinding38 = FlaxGetter.plain(
  "dateTimeConstructor",
  _flaxBinding7,
  _DateFormat_dateTimeConstructor,
);
const _flaxBinding39 = FlaxGetter.plain(
  "dateOnly",
  flaxBoolType,
  _DateFormat_dateOnly,
);
const _flaxBinding40 = FlaxGetter.plain(
  "locale",
  flaxStringType,
  _DateFormat_locale,
);
const _flaxBinding41 = FlaxGetter.plain(
  "pattern",
  flaxNullableStringType,
  _DateFormat_pattern,
);
const _flaxBinding42 = FlaxGetter.plain(
  "dateSymbols",
  _flaxBinding9,
  _DateFormat_dateSymbols,
);
const _flaxBinding43 = FlaxGetter.plain(
  "useNativeDigits",
  flaxBoolType,
  _DateFormat_useNativeDigits,
);
const _flaxBinding44 = FlaxGetter.plain(
  "digitMatcher",
  _flaxBinding11,
  _DateFormat_digitMatcher,
);
const _flaxBinding45 = FlaxGetter.plain(
  "localeZeroCodeUnit",
  flaxIntType,
  _DateFormat_localeZeroCodeUnit,
);
const _flaxBinding46 = FlaxGetter.plain(
  "localeZero",
  flaxStringType,
  _DateFormat_localeZero,
);
const _flaxBinding47 = FlaxGetter.plain(
  "usesNativeDigits",
  flaxBoolType,
  _DateFormat_usesNativeDigits,
);
const _flaxBinding48 = FlaxGetter.plain(
  "usesAsciiDigits",
  flaxBoolType,
  _DateFormat_usesAsciiDigits,
);
const _flaxBinding49 = FlaxSetter(
  "dateTimeConstructor",
  _flaxBinding7,
  _DateFormat_set_dateTimeConstructor,
);
const _flaxBinding50 = FlaxSetter(
  "useNativeDigits",
  flaxBoolType,
  _DateFormat_set_useNativeDigits,
);
const _flaxBinding51 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _DateFormat_format,
);
const _flaxBinding52 = <FlaxParameter>[
  FlaxParameter.required("inputString", flaxStringType),
  FlaxParameter("utc", flaxBoolType, required: false, defaultValue: false),
];
const _flaxBinding53 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  flaxDateTimeType,
  _DateFormat_parse,
);
const _flaxBinding54 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding2,
  _DateFormat_tryParse,
);
const _flaxBinding55 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  flaxDateTimeType,
  _DateFormat_parseLoose,
);
const _flaxBinding56 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding2,
  _DateFormat_tryParseLoose,
);
const _flaxBinding57 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  flaxDateTimeType,
  _DateFormat_parseStrict,
);
const _flaxBinding58 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding2,
  _DateFormat_tryParseStrict,
);
const _flaxBinding59 = FlaxInstanceMethod.shared(
  _flaxBinding1,
  _DateFormat_parseUTC,
);
const _flaxBinding60 = FlaxInstanceMethod.shared(
  _flaxBinding1,
  _DateFormat_parseUtc,
);
const _flaxBinding61 = FlaxInstanceMethod.shared(
  _flaxBinding3,
  _DateFormat_tryParseUtc,
);
const _flaxBinding62 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_d,
);
const _flaxBinding63 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_E,
);
const _flaxBinding64 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_EEEE,
);
const _flaxBinding65 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_LLL,
);
const _flaxBinding66 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_LLLL,
);
const _flaxBinding67 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_M,
);
const _flaxBinding68 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_Md,
);
const _flaxBinding69 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_MEd,
);
const _flaxBinding70 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_MMM,
);
const _flaxBinding71 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_MMMd,
);
const _flaxBinding72 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_MMMEd,
);
const _flaxBinding73 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_MMMM,
);
const _flaxBinding74 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_MMMMd,
);
const _flaxBinding75 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_MMMMEEEEd,
);
const _flaxBinding76 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_QQQ,
);
const _flaxBinding77 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_QQQQ,
);
const _flaxBinding78 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_y,
);
const _flaxBinding79 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yM,
);
const _flaxBinding80 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yMd,
);
const _flaxBinding81 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yMEd,
);
const _flaxBinding82 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yMMM,
);
const _flaxBinding83 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yMMMd,
);
const _flaxBinding84 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yMMMEd,
);
const _flaxBinding85 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yMMMM,
);
const _flaxBinding86 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yMMMMd,
);
const _flaxBinding87 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yMMMMEEEEd,
);
const _flaxBinding88 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yQQQ,
);
const _flaxBinding89 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_yQQQQ,
);
const _flaxBinding90 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_H,
);
const _flaxBinding91 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_Hm,
);
const _flaxBinding92 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_Hms,
);
const _flaxBinding93 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_j,
);
const _flaxBinding94 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_jm,
);
const _flaxBinding95 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_jms,
);
const _flaxBinding96 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_jmv,
);
const _flaxBinding97 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_jmz,
);
const _flaxBinding98 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_jv,
);
const _flaxBinding99 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_jz,
);
const _flaxBinding100 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_m,
);
const _flaxBinding101 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_ms,
);
const _flaxBinding102 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DateFormat_add_s,
);
const _flaxBinding103 = <FlaxParameter>[
  FlaxParameter.required("inputPattern", flaxNullableStringType),
  FlaxParameter(
    "separator",
    flaxStringType,
    required: false,
    defaultValue: ' ',
  ),
];
const _flaxBinding104 = FlaxInstanceMethod.plain(
  _flaxBinding103,
  _flaxBinding4,
  _DateFormat_addPattern,
);
const _flaxBinding105 = <FlaxParameter>[
  FlaxParameter("newPattern", flaxNullableStringType, required: false),
  FlaxParameter("locale", flaxNullableStringType, required: false),
];
const _flaxBinding106 = <FlaxParameter>[
  FlaxParameter("locale", flaxNullableStringType, required: false),
];
const _flaxBinding107 = FlaxProxyMember(
  "format",
  0,
  _flaxBinding0,
  hasSuper: true,
);
const _flaxBinding108 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("inputString", flaxStringType),
    FlaxCallbackParameter.plain("utc", flaxBoolType, required: false),
  ],
  flaxDateTimeType,
  id: "callback:<>(p:r:inputString:String:,p:o:utc:bool:)->object:flax.core/flutter#type:DateTime",
);
const _flaxBinding109 = FlaxProxyMember(
  "parse",
  0,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding110 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("inputString", flaxStringType),
    FlaxCallbackParameter.plain("utc", flaxBoolType, required: false),
  ],
  _flaxBinding2,
  id: "callback:<>(p:r:inputString:String:,p:o:utc:bool:)->object?:flax.core/flutter#type:DateTime",
);
const _flaxBinding111 = FlaxProxyMember(
  "tryParse",
  0,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding112 = FlaxProxyMember(
  "parseLoose",
  0,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding113 = FlaxProxyMember(
  "tryParseLoose",
  0,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding114 = FlaxProxyMember(
  "parseStrict",
  0,
  _flaxBinding108,
  hasSuper: true,
);
const _flaxBinding115 = FlaxProxyMember(
  "tryParseStrict",
  0,
  _flaxBinding110,
  hasSuper: true,
);
const _flaxBinding116 = FlaxProxyMember(
  "parseUTC",
  0,
  _flaxBinding1,
  hasSuper: true,
);
const _flaxBinding117 = FlaxProxyMember(
  "parseUtc",
  0,
  _flaxBinding1,
  hasSuper: true,
);
const _flaxBinding118 = FlaxProxyMember(
  "tryParseUtc",
  0,
  _flaxBinding3,
  hasSuper: true,
);
const _flaxBinding119 = FlaxProxyMember(
  "add_d",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding120 = FlaxProxyMember(
  "add_E",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding121 = FlaxProxyMember(
  "add_EEEE",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding122 = FlaxProxyMember(
  "add_LLL",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding123 = FlaxProxyMember(
  "add_LLLL",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding124 = FlaxProxyMember(
  "add_M",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding125 = FlaxProxyMember(
  "add_Md",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding126 = FlaxProxyMember(
  "add_MEd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding127 = FlaxProxyMember(
  "add_MMM",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding128 = FlaxProxyMember(
  "add_MMMd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding129 = FlaxProxyMember(
  "add_MMMEd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding130 = FlaxProxyMember(
  "add_MMMM",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding131 = FlaxProxyMember(
  "add_MMMMd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding132 = FlaxProxyMember(
  "add_MMMMEEEEd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding133 = FlaxProxyMember(
  "add_QQQ",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding134 = FlaxProxyMember(
  "add_QQQQ",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding135 = FlaxProxyMember(
  "add_y",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding136 = FlaxProxyMember(
  "add_yM",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding137 = FlaxProxyMember(
  "add_yMd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding138 = FlaxProxyMember(
  "add_yMEd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding139 = FlaxProxyMember(
  "add_yMMM",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding140 = FlaxProxyMember(
  "add_yMMMd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding141 = FlaxProxyMember(
  "add_yMMMEd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding142 = FlaxProxyMember(
  "add_yMMMM",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding143 = FlaxProxyMember(
  "add_yMMMMd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding144 = FlaxProxyMember(
  "add_yMMMMEEEEd",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding145 = FlaxProxyMember(
  "add_yQQQ",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding146 = FlaxProxyMember(
  "add_yQQQQ",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding147 = FlaxProxyMember(
  "add_H",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding148 = FlaxProxyMember(
  "add_Hm",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding149 = FlaxProxyMember(
  "add_Hms",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding150 = FlaxProxyMember(
  "add_j",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding151 = FlaxProxyMember(
  "add_jm",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding152 = FlaxProxyMember(
  "add_jms",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding153 = FlaxProxyMember(
  "add_jmv",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding154 = FlaxProxyMember(
  "add_jmz",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding155 = FlaxProxyMember(
  "add_jv",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding156 = FlaxProxyMember(
  "add_jz",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding157 = FlaxProxyMember(
  "add_m",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding158 = FlaxProxyMember(
  "add_ms",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding159 = FlaxProxyMember(
  "add_s",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding160 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("inputPattern", flaxNullableStringType),
    FlaxCallbackParameter.plain("separator", flaxStringType, required: false),
  ],
  _flaxBinding4,
  id: "callback:<>(p:r:inputPattern:String?:,p:o:separator:String:)->object:flax.material/dependency_intl#type:DateFormat",
);
const _flaxBinding161 = FlaxProxyMember(
  "addPattern",
  0,
  _flaxBinding160,
  hasSuper: true,
);
const _flaxBinding162 = FlaxProxyMember(
  "dateTimeConstructor",
  1,
  _flaxBinding8,
  hasSuper: true,
);
const _flaxBinding163 = FlaxProxyMember(
  "dateOnly",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding164 = FlaxProxyMember(
  "locale",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding165 = FlaxProxyMember(
  "pattern",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding166 = FlaxProxyMember(
  "dateSymbols",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding167 = FlaxProxyMember(
  "useNativeDigits",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding168 = FlaxProxyMember(
  "digitMatcher",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding169 = FlaxProxyMember(
  "localeZeroCodeUnit",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding170 = FlaxProxyMember(
  "localeZero",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding171 = FlaxProxyMember(
  "usesNativeDigits",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding172 = FlaxProxyMember(
  "usesAsciiDigits",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding173 = FlaxProxyMember(
  "dateTimeConstructor",
  2,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding174 = FlaxProxyMember(
  "useNativeDigits",
  2,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding175 = FlaxObjectBinding(
  "flax.material/dependency_intl#type:DateFormat",
  [
    _flaxBinding38,
    _flaxBinding39,
    _flaxBinding40,
    _flaxBinding41,
    _flaxBinding42,
    _flaxBinding43,
    _flaxBinding44,
    _flaxBinding45,
    _flaxBinding46,
    _flaxBinding47,
    _flaxBinding48,
  ],
  {
    "format": _flaxBinding51,
    "parse": _flaxBinding53,
    "tryParse": _flaxBinding54,
    "parseLoose": _flaxBinding55,
    "tryParseLoose": _flaxBinding56,
    "parseStrict": _flaxBinding57,
    "tryParseStrict": _flaxBinding58,
    "parseUTC": _flaxBinding59,
    "parseUtc": _flaxBinding60,
    "tryParseUtc": _flaxBinding61,
    "add_d": _flaxBinding62,
    "add_E": _flaxBinding63,
    "add_EEEE": _flaxBinding64,
    "add_LLL": _flaxBinding65,
    "add_LLLL": _flaxBinding66,
    "add_M": _flaxBinding67,
    "add_Md": _flaxBinding68,
    "add_MEd": _flaxBinding69,
    "add_MMM": _flaxBinding70,
    "add_MMMd": _flaxBinding71,
    "add_MMMEd": _flaxBinding72,
    "add_MMMM": _flaxBinding73,
    "add_MMMMd": _flaxBinding74,
    "add_MMMMEEEEd": _flaxBinding75,
    "add_QQQ": _flaxBinding76,
    "add_QQQQ": _flaxBinding77,
    "add_y": _flaxBinding78,
    "add_yM": _flaxBinding79,
    "add_yMd": _flaxBinding80,
    "add_yMEd": _flaxBinding81,
    "add_yMMM": _flaxBinding82,
    "add_yMMMd": _flaxBinding83,
    "add_yMMMEd": _flaxBinding84,
    "add_yMMMM": _flaxBinding85,
    "add_yMMMMd": _flaxBinding86,
    "add_yMMMMEEEEd": _flaxBinding87,
    "add_yQQQ": _flaxBinding88,
    "add_yQQQQ": _flaxBinding89,
    "add_H": _flaxBinding90,
    "add_Hm": _flaxBinding91,
    "add_Hms": _flaxBinding92,
    "add_j": _flaxBinding93,
    "add_jm": _flaxBinding94,
    "add_jms": _flaxBinding95,
    "add_jmv": _flaxBinding96,
    "add_jmz": _flaxBinding97,
    "add_jv": _flaxBinding98,
    "add_jz": _flaxBinding99,
    "add_m": _flaxBinding100,
    "add_ms": _flaxBinding101,
    "add_s": _flaxBinding102,
    "addPattern": _flaxBinding104,
    "@super:format": FlaxInstanceMethod.shared(
      _flaxBinding0,
      _DateFormat_super_format,
    ),
    "@super:parse": FlaxInstanceMethod.plain(
      _flaxBinding52,
      flaxDateTimeType,
      _DateFormat_super_parse,
    ),
    "@super:tryParse": FlaxInstanceMethod.plain(
      _flaxBinding52,
      _flaxBinding2,
      _DateFormat_super_tryParse,
    ),
    "@super:parseLoose": FlaxInstanceMethod.plain(
      _flaxBinding52,
      flaxDateTimeType,
      _DateFormat_super_parseLoose,
    ),
    "@super:tryParseLoose": FlaxInstanceMethod.plain(
      _flaxBinding52,
      _flaxBinding2,
      _DateFormat_super_tryParseLoose,
    ),
    "@super:parseStrict": FlaxInstanceMethod.plain(
      _flaxBinding52,
      flaxDateTimeType,
      _DateFormat_super_parseStrict,
    ),
    "@super:tryParseStrict": FlaxInstanceMethod.plain(
      _flaxBinding52,
      _flaxBinding2,
      _DateFormat_super_tryParseStrict,
    ),
    "@super:parseUTC": FlaxInstanceMethod.shared(
      _flaxBinding1,
      _DateFormat_super_parseUTC,
    ),
    "@super:parseUtc": FlaxInstanceMethod.shared(
      _flaxBinding1,
      _DateFormat_super_parseUtc,
    ),
    "@super:tryParseUtc": FlaxInstanceMethod.shared(
      _flaxBinding3,
      _DateFormat_super_tryParseUtc,
    ),
    "@super:add_d": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_d,
    ),
    "@super:add_E": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_E,
    ),
    "@super:add_EEEE": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_EEEE,
    ),
    "@super:add_LLL": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_LLL,
    ),
    "@super:add_LLLL": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_LLLL,
    ),
    "@super:add_M": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_M,
    ),
    "@super:add_Md": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_Md,
    ),
    "@super:add_MEd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_MEd,
    ),
    "@super:add_MMM": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_MMM,
    ),
    "@super:add_MMMd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_MMMd,
    ),
    "@super:add_MMMEd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_MMMEd,
    ),
    "@super:add_MMMM": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_MMMM,
    ),
    "@super:add_MMMMd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_MMMMd,
    ),
    "@super:add_MMMMEEEEd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_MMMMEEEEd,
    ),
    "@super:add_QQQ": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_QQQ,
    ),
    "@super:add_QQQQ": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_QQQQ,
    ),
    "@super:add_y": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_y,
    ),
    "@super:add_yM": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yM,
    ),
    "@super:add_yMd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yMd,
    ),
    "@super:add_yMEd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yMEd,
    ),
    "@super:add_yMMM": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yMMM,
    ),
    "@super:add_yMMMd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yMMMd,
    ),
    "@super:add_yMMMEd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yMMMEd,
    ),
    "@super:add_yMMMM": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yMMMM,
    ),
    "@super:add_yMMMMd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yMMMMd,
    ),
    "@super:add_yMMMMEEEEd": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yMMMMEEEEd,
    ),
    "@super:add_yQQQ": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yQQQ,
    ),
    "@super:add_yQQQQ": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_yQQQQ,
    ),
    "@super:add_H": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_H,
    ),
    "@super:add_Hm": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_Hm,
    ),
    "@super:add_Hms": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_Hms,
    ),
    "@super:add_j": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_j,
    ),
    "@super:add_jm": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_jm,
    ),
    "@super:add_jms": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_jms,
    ),
    "@super:add_jmv": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_jmv,
    ),
    "@super:add_jmz": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_jmz,
    ),
    "@super:add_jv": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_jv,
    ),
    "@super:add_jz": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_jz,
    ),
    "@super:add_m": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_m,
    ),
    "@super:add_ms": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_ms,
    ),
    "@super:add_s": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DateFormat_super_add_s,
    ),
    "@super:addPattern": FlaxInstanceMethod.plain(
      _flaxBinding103,
      _flaxBinding4,
      _DateFormat_super_addPattern,
    ),
    "@super:get:dateTimeConstructor": FlaxInstanceMethod.shared(
      _flaxBinding8,
      _DateFormat_super_get_dateTimeConstructor,
    ),
    "@super:get:dateOnly": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _DateFormat_super_get_dateOnly,
    ),
    "@super:get:locale": FlaxInstanceMethod.shared(
      flaxStringCall,
      _DateFormat_super_get_locale,
    ),
    "@super:get:pattern": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _DateFormat_super_get_pattern,
    ),
    "@super:get:dateSymbols": FlaxInstanceMethod.shared(
      _flaxBinding10,
      _DateFormat_super_get_dateSymbols,
    ),
    "@super:get:useNativeDigits": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _DateFormat_super_get_useNativeDigits,
    ),
    "@super:get:digitMatcher": FlaxInstanceMethod.shared(
      _flaxBinding12,
      _DateFormat_super_get_digitMatcher,
    ),
    "@super:get:localeZeroCodeUnit": FlaxInstanceMethod.shared(
      flaxIntCall,
      _DateFormat_super_get_localeZeroCodeUnit,
    ),
    "@super:get:localeZero": FlaxInstanceMethod.shared(
      flaxStringCall,
      _DateFormat_super_get_localeZero,
    ),
    "@super:get:usesNativeDigits": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _DateFormat_super_get_usesNativeDigits,
    ),
    "@super:get:usesAsciiDigits": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _DateFormat_super_get_usesAsciiDigits,
    ),
    "@super:set:dateTimeConstructor": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding7)],
      flaxVoidType,
      _DateFormat_super_set_dateTimeConstructor,
    ),
    "@super:set:useNativeDigits": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _DateFormat_super_set_useNativeDigits,
    ),
  },
  constructors: {
    "": _flaxBinding105,
    "d": _flaxBinding106,
    "E": _flaxBinding106,
    "EEEE": _flaxBinding106,
    "EEEEE": _flaxBinding106,
    "LLL": _flaxBinding106,
    "LLLL": _flaxBinding106,
    "M": _flaxBinding106,
    "Md": _flaxBinding106,
    "MEd": _flaxBinding106,
    "MMM": _flaxBinding106,
    "MMMd": _flaxBinding106,
    "MMMEd": _flaxBinding106,
    "MMMM": _flaxBinding106,
    "MMMMd": _flaxBinding106,
    "MMMMEEEEd": _flaxBinding106,
    "QQQ": _flaxBinding106,
    "QQQQ": _flaxBinding106,
    "y": _flaxBinding106,
    "yM": _flaxBinding106,
    "yMd": _flaxBinding106,
    "yMEd": _flaxBinding106,
    "yMMM": _flaxBinding106,
    "yMMMd": _flaxBinding106,
    "yMMMEd": _flaxBinding106,
    "yMMMM": _flaxBinding106,
    "yMMMMd": _flaxBinding106,
    "yMMMMEEEEd": _flaxBinding106,
    "yQQQ": _flaxBinding106,
    "yQQQQ": _flaxBinding106,
    "H": _flaxBinding106,
    "Hm": _flaxBinding106,
    "Hms": _flaxBinding106,
    "j": _flaxBinding106,
    "jm": _flaxBinding106,
    "jms": _flaxBinding106,
    "jmv": _flaxBinding106,
    "jmz": _flaxBinding106,
    "jv": _flaxBinding106,
    "jz": _flaxBinding106,
    "m": _flaxBinding106,
    "ms": _flaxBinding106,
    "s": _flaxBinding106,
    "@implementation": _flaxBinding105,
    "@implementation:d": _flaxBinding106,
    "@implementation:E": _flaxBinding106,
    "@implementation:EEEE": _flaxBinding106,
    "@implementation:EEEEE": _flaxBinding106,
    "@implementation:LLL": _flaxBinding106,
    "@implementation:LLLL": _flaxBinding106,
    "@implementation:M": _flaxBinding106,
    "@implementation:Md": _flaxBinding106,
    "@implementation:MEd": _flaxBinding106,
    "@implementation:MMM": _flaxBinding106,
    "@implementation:MMMd": _flaxBinding106,
    "@implementation:MMMEd": _flaxBinding106,
    "@implementation:MMMM": _flaxBinding106,
    "@implementation:MMMMd": _flaxBinding106,
    "@implementation:MMMMEEEEd": _flaxBinding106,
    "@implementation:QQQ": _flaxBinding106,
    "@implementation:QQQQ": _flaxBinding106,
    "@implementation:y": _flaxBinding106,
    "@implementation:yM": _flaxBinding106,
    "@implementation:yMd": _flaxBinding106,
    "@implementation:yMEd": _flaxBinding106,
    "@implementation:yMMM": _flaxBinding106,
    "@implementation:yMMMd": _flaxBinding106,
    "@implementation:yMMMEd": _flaxBinding106,
    "@implementation:yMMMM": _flaxBinding106,
    "@implementation:yMMMMd": _flaxBinding106,
    "@implementation:yMMMMEEEEd": _flaxBinding106,
    "@implementation:yQQQ": _flaxBinding106,
    "@implementation:yQQQQ": _flaxBinding106,
    "@implementation:H": _flaxBinding106,
    "@implementation:Hm": _flaxBinding106,
    "@implementation:Hms": _flaxBinding106,
    "@implementation:j": _flaxBinding106,
    "@implementation:jm": _flaxBinding106,
    "@implementation:jms": _flaxBinding106,
    "@implementation:jmv": _flaxBinding106,
    "@implementation:jmz": _flaxBinding106,
    "@implementation:jv": _flaxBinding106,
    "@implementation:jz": _flaxBinding106,
    "@implementation:m": _flaxBinding106,
    "@implementation:ms": _flaxBinding106,
    "@implementation:s": _flaxBinding106,
  },
  create: _createDateFormat,
  matches: _isDateFormat,
  setters: [_flaxBinding49, _flaxBinding50],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding107,
    _flaxBinding109,
    _flaxBinding111,
    _flaxBinding112,
    _flaxBinding113,
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding116,
    _flaxBinding117,
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding120,
    _flaxBinding121,
    _flaxBinding122,
    _flaxBinding123,
    _flaxBinding124,
    _flaxBinding125,
    _flaxBinding126,
    _flaxBinding127,
    _flaxBinding128,
    _flaxBinding129,
    _flaxBinding130,
    _flaxBinding131,
    _flaxBinding132,
    _flaxBinding133,
    _flaxBinding134,
    _flaxBinding135,
    _flaxBinding136,
    _flaxBinding137,
    _flaxBinding138,
    _flaxBinding139,
    _flaxBinding140,
    _flaxBinding141,
    _flaxBinding142,
    _flaxBinding143,
    _flaxBinding144,
    _flaxBinding145,
    _flaxBinding146,
    _flaxBinding147,
    _flaxBinding148,
    _flaxBinding149,
    _flaxBinding150,
    _flaxBinding151,
    _flaxBinding152,
    _flaxBinding153,
    _flaxBinding154,
    _flaxBinding155,
    _flaxBinding156,
    _flaxBinding157,
    _flaxBinding158,
    _flaxBinding159,
    _flaxBinding161,
    _flaxBinding162,
    _flaxBinding163,
    _flaxBinding164,
    _flaxBinding165,
    _flaxBinding166,
    _flaxBinding167,
    _flaxBinding168,
    _flaxBinding169,
    _flaxBinding170,
    _flaxBinding171,
    _flaxBinding172,
    _flaxBinding173,
    _flaxBinding174,
  ]),
);
const _flaxBinding176 = FlaxGetter.plain(
  "NAME",
  flaxStringType,
  _DateSymbols_NAME,
);
const _flaxBinding177 = FlaxGetter.plain(
  "ERAS",
  _flaxBinding18,
  _DateSymbols_ERAS,
);
const _flaxBinding178 = FlaxGetter.plain(
  "ERANAMES",
  _flaxBinding18,
  _DateSymbols_ERANAMES,
);
const _flaxBinding179 = FlaxGetter.plain(
  "NARROWMONTHS",
  _flaxBinding18,
  _DateSymbols_NARROWMONTHS,
);
const _flaxBinding180 = FlaxGetter.plain(
  "STANDALONENARROWMONTHS",
  _flaxBinding18,
  _DateSymbols_STANDALONENARROWMONTHS,
);
const _flaxBinding181 = FlaxGetter.plain(
  "MONTHS",
  _flaxBinding18,
  _DateSymbols_MONTHS,
);
const _flaxBinding182 = FlaxGetter.plain(
  "STANDALONEMONTHS",
  _flaxBinding18,
  _DateSymbols_STANDALONEMONTHS,
);
const _flaxBinding183 = FlaxGetter.plain(
  "SHORTMONTHS",
  _flaxBinding18,
  _DateSymbols_SHORTMONTHS,
);
const _flaxBinding184 = FlaxGetter.plain(
  "STANDALONESHORTMONTHS",
  _flaxBinding18,
  _DateSymbols_STANDALONESHORTMONTHS,
);
const _flaxBinding185 = FlaxGetter.plain(
  "WEEKDAYS",
  _flaxBinding18,
  _DateSymbols_WEEKDAYS,
);
const _flaxBinding186 = FlaxGetter.plain(
  "STANDALONEWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_STANDALONEWEEKDAYS,
);
const _flaxBinding187 = FlaxGetter.plain(
  "SHORTWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_SHORTWEEKDAYS,
);
const _flaxBinding188 = FlaxGetter.plain(
  "STANDALONESHORTWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_STANDALONESHORTWEEKDAYS,
);
const _flaxBinding189 = FlaxGetter.plain(
  "NARROWWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_NARROWWEEKDAYS,
);
const _flaxBinding190 = FlaxGetter.plain(
  "STANDALONENARROWWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_STANDALONENARROWWEEKDAYS,
);
const _flaxBinding191 = FlaxGetter.plain(
  "SHORTQUARTERS",
  _flaxBinding18,
  _DateSymbols_SHORTQUARTERS,
);
const _flaxBinding192 = FlaxGetter.plain(
  "QUARTERS",
  _flaxBinding18,
  _DateSymbols_QUARTERS,
);
const _flaxBinding193 = FlaxGetter.plain(
  "AMPMS",
  _flaxBinding18,
  _DateSymbols_AMPMS,
);
const _flaxBinding194 = FlaxGetter.plain(
  "DATEFORMATS",
  _flaxBinding18,
  _DateSymbols_DATEFORMATS,
);
const _flaxBinding195 = FlaxGetter.plain(
  "TIMEFORMATS",
  _flaxBinding18,
  _DateSymbols_TIMEFORMATS,
);
const _flaxBinding196 = FlaxGetter.plain(
  "DATETIMEFORMATS",
  _flaxBinding18,
  _DateSymbols_DATETIMEFORMATS,
);
const _flaxBinding197 = FlaxGetter.plain(
  "AVAILABLEFORMATS",
  _flaxBinding20,
  _DateSymbols_AVAILABLEFORMATS,
);
const _flaxBinding198 = FlaxGetter.plain(
  "FIRSTDAYOFWEEK",
  flaxIntType,
  _DateSymbols_FIRSTDAYOFWEEK,
);
const _flaxBinding199 = FlaxGetter.plain(
  "WEEKENDRANGE",
  _flaxBinding23,
  _DateSymbols_WEEKENDRANGE,
);
const _flaxBinding200 = FlaxGetter.plain(
  "FIRSTWEEKCUTOFFDAY",
  flaxIntType,
  _DateSymbols_FIRSTWEEKCUTOFFDAY,
);
const _flaxBinding201 = FlaxGetter.plain(
  "ZERODIGIT",
  flaxNullableStringType,
  _DateSymbols_ZERODIGIT,
);
const _flaxBinding202 = FlaxSetter(
  "NAME",
  flaxStringType,
  _DateSymbols_set_NAME,
);
const _flaxBinding203 = FlaxSetter(
  "ERAS",
  _flaxBinding18,
  _DateSymbols_set_ERAS,
);
const _flaxBinding204 = FlaxSetter(
  "ERANAMES",
  _flaxBinding18,
  _DateSymbols_set_ERANAMES,
);
const _flaxBinding205 = FlaxSetter(
  "NARROWMONTHS",
  _flaxBinding18,
  _DateSymbols_set_NARROWMONTHS,
);
const _flaxBinding206 = FlaxSetter(
  "STANDALONENARROWMONTHS",
  _flaxBinding18,
  _DateSymbols_set_STANDALONENARROWMONTHS,
);
const _flaxBinding207 = FlaxSetter(
  "MONTHS",
  _flaxBinding18,
  _DateSymbols_set_MONTHS,
);
const _flaxBinding208 = FlaxSetter(
  "STANDALONEMONTHS",
  _flaxBinding18,
  _DateSymbols_set_STANDALONEMONTHS,
);
const _flaxBinding209 = FlaxSetter(
  "SHORTMONTHS",
  _flaxBinding18,
  _DateSymbols_set_SHORTMONTHS,
);
const _flaxBinding210 = FlaxSetter(
  "STANDALONESHORTMONTHS",
  _flaxBinding18,
  _DateSymbols_set_STANDALONESHORTMONTHS,
);
const _flaxBinding211 = FlaxSetter(
  "WEEKDAYS",
  _flaxBinding18,
  _DateSymbols_set_WEEKDAYS,
);
const _flaxBinding212 = FlaxSetter(
  "STANDALONEWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_set_STANDALONEWEEKDAYS,
);
const _flaxBinding213 = FlaxSetter(
  "SHORTWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_set_SHORTWEEKDAYS,
);
const _flaxBinding214 = FlaxSetter(
  "STANDALONESHORTWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_set_STANDALONESHORTWEEKDAYS,
);
const _flaxBinding215 = FlaxSetter(
  "NARROWWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_set_NARROWWEEKDAYS,
);
const _flaxBinding216 = FlaxSetter(
  "STANDALONENARROWWEEKDAYS",
  _flaxBinding18,
  _DateSymbols_set_STANDALONENARROWWEEKDAYS,
);
const _flaxBinding217 = FlaxSetter(
  "SHORTQUARTERS",
  _flaxBinding18,
  _DateSymbols_set_SHORTQUARTERS,
);
const _flaxBinding218 = FlaxSetter(
  "QUARTERS",
  _flaxBinding18,
  _DateSymbols_set_QUARTERS,
);
const _flaxBinding219 = FlaxSetter(
  "AMPMS",
  _flaxBinding18,
  _DateSymbols_set_AMPMS,
);
const _flaxBinding220 = FlaxSetter(
  "DATEFORMATS",
  _flaxBinding18,
  _DateSymbols_set_DATEFORMATS,
);
const _flaxBinding221 = FlaxSetter(
  "TIMEFORMATS",
  _flaxBinding18,
  _DateSymbols_set_TIMEFORMATS,
);
const _flaxBinding222 = FlaxSetter(
  "DATETIMEFORMATS",
  _flaxBinding18,
  _DateSymbols_set_DATETIMEFORMATS,
);
const _flaxBinding223 = FlaxSetter(
  "AVAILABLEFORMATS",
  _flaxBinding20,
  _DateSymbols_set_AVAILABLEFORMATS,
);
const _flaxBinding224 = FlaxSetter(
  "FIRSTDAYOFWEEK",
  flaxIntType,
  _DateSymbols_set_FIRSTDAYOFWEEK,
);
const _flaxBinding225 = FlaxSetter(
  "WEEKENDRANGE",
  _flaxBinding23,
  _DateSymbols_set_WEEKENDRANGE,
);
const _flaxBinding226 = FlaxSetter(
  "FIRSTWEEKCUTOFFDAY",
  flaxIntType,
  _DateSymbols_set_FIRSTWEEKCUTOFFDAY,
);
const _flaxBinding227 = FlaxSetter(
  "ZERODIGIT",
  flaxNullableStringType,
  _DateSymbols_set_ZERODIGIT,
);
const _flaxBinding228 = FlaxInstanceMethod.shared(
  _flaxBinding16,
  _DateSymbols_serializeToMap,
);
const _flaxBinding229 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _DateSymbols_toString,
);
const _flaxBinding230 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch0_super_call_toString,
);
const _flaxBinding231 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch0_super_get_NAME,
);
const _flaxBinding232 = <FlaxParameter>[
  FlaxParameter.required("NAME", flaxStringType),
  FlaxParameter.required("ERAS", _flaxBinding18),
  FlaxParameter.required("ERANAMES", _flaxBinding18),
  FlaxParameter.required("NARROWMONTHS", _flaxBinding18),
  FlaxParameter.required("STANDALONENARROWMONTHS", _flaxBinding18),
  FlaxParameter.required("MONTHS", _flaxBinding18),
  FlaxParameter.required("STANDALONEMONTHS", _flaxBinding18),
  FlaxParameter.required("SHORTMONTHS", _flaxBinding18),
  FlaxParameter.required("STANDALONESHORTMONTHS", _flaxBinding18),
  FlaxParameter.required("WEEKDAYS", _flaxBinding18),
  FlaxParameter.required("STANDALONEWEEKDAYS", _flaxBinding18),
  FlaxParameter.required("SHORTWEEKDAYS", _flaxBinding18),
  FlaxParameter.required("STANDALONESHORTWEEKDAYS", _flaxBinding18),
  FlaxParameter.required("NARROWWEEKDAYS", _flaxBinding18),
  FlaxParameter.required("STANDALONENARROWWEEKDAYS", _flaxBinding18),
  FlaxParameter.required("SHORTQUARTERS", _flaxBinding18),
  FlaxParameter.required("QUARTERS", _flaxBinding18),
  FlaxParameter.required("AMPMS", _flaxBinding18),
  FlaxParameter("ZERODIGIT", flaxNullableStringType, required: false),
  FlaxParameter.required("DATEFORMATS", _flaxBinding18),
  FlaxParameter.required("TIMEFORMATS", _flaxBinding18),
  FlaxParameter("AVAILABLEFORMATS", _flaxBinding20, required: false),
  FlaxParameter.required("FIRSTDAYOFWEEK", flaxIntType),
  FlaxParameter.required("WEEKENDRANGE", _flaxBinding23),
  FlaxParameter.required("FIRSTWEEKCUTOFFDAY", flaxIntType),
  FlaxParameter.required("DATETIMEFORMATS", _flaxBinding18),
];
const _flaxBinding233 = FlaxTypeRef(
  "map",
  item: flaxNullableAnyType,
  key: flaxNullableAnyType,
  collection: FlaxCollectionBinding(
    "map:[any?:][any?:]",
    _collection7Create,
    _collection7Matches,
  ),
);
const _flaxBinding234 = <FlaxParameter>[
  FlaxParameter.required("map", _flaxBinding233),
];
const _flaxBinding235 = FlaxProxyMember(
  "serializeToMap",
  0,
  _flaxBinding16,
  hasSuper: true,
);
const _flaxBinding236 = FlaxProxyMember(
  "toString",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding237 = FlaxProxyMember(
  "NAME",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding238 = FlaxProxyMember(
  "ERAS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding239 = FlaxProxyMember(
  "ERANAMES",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding240 = FlaxProxyMember(
  "NARROWMONTHS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding241 = FlaxProxyMember(
  "STANDALONENARROWMONTHS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding242 = FlaxProxyMember(
  "MONTHS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding243 = FlaxProxyMember(
  "STANDALONEMONTHS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding244 = FlaxProxyMember(
  "SHORTMONTHS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding245 = FlaxProxyMember(
  "STANDALONESHORTMONTHS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding246 = FlaxProxyMember(
  "WEEKDAYS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding247 = FlaxProxyMember(
  "STANDALONEWEEKDAYS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding248 = FlaxProxyMember(
  "SHORTWEEKDAYS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding249 = FlaxProxyMember(
  "STANDALONESHORTWEEKDAYS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding250 = FlaxProxyMember(
  "NARROWWEEKDAYS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding251 = FlaxProxyMember(
  "STANDALONENARROWWEEKDAYS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding252 = FlaxProxyMember(
  "SHORTQUARTERS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding253 = FlaxProxyMember(
  "QUARTERS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding254 = FlaxProxyMember(
  "AMPMS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding255 = FlaxProxyMember(
  "DATEFORMATS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding256 = FlaxProxyMember(
  "TIMEFORMATS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding257 = FlaxProxyMember(
  "DATETIMEFORMATS",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding258 = FlaxProxyMember(
  "AVAILABLEFORMATS",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding259 = FlaxProxyMember(
  "FIRSTDAYOFWEEK",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding260 = FlaxProxyMember(
  "WEEKENDRANGE",
  1,
  _flaxBinding24,
  hasSuper: true,
);
const _flaxBinding261 = FlaxProxyMember(
  "FIRSTWEEKCUTOFFDAY",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding262 = FlaxProxyMember(
  "ZERODIGIT",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding263 = FlaxProxyMember(
  "NAME",
  2,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding264 = FlaxProxyMember(
  "ERAS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding265 = FlaxProxyMember(
  "ERANAMES",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding266 = FlaxProxyMember(
  "NARROWMONTHS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding267 = FlaxProxyMember(
  "STANDALONENARROWMONTHS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding268 = FlaxProxyMember(
  "MONTHS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding269 = FlaxProxyMember(
  "STANDALONEMONTHS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding270 = FlaxProxyMember(
  "SHORTMONTHS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding271 = FlaxProxyMember(
  "STANDALONESHORTMONTHS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding272 = FlaxProxyMember(
  "WEEKDAYS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding273 = FlaxProxyMember(
  "STANDALONEWEEKDAYS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding274 = FlaxProxyMember(
  "SHORTWEEKDAYS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding275 = FlaxProxyMember(
  "STANDALONESHORTWEEKDAYS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding276 = FlaxProxyMember(
  "NARROWWEEKDAYS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding277 = FlaxProxyMember(
  "STANDALONENARROWWEEKDAYS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding278 = FlaxProxyMember(
  "SHORTQUARTERS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding279 = FlaxProxyMember(
  "QUARTERS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding280 = FlaxProxyMember(
  "AMPMS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding281 = FlaxProxyMember(
  "DATEFORMATS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding282 = FlaxProxyMember(
  "TIMEFORMATS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding283 = FlaxProxyMember(
  "DATETIMEFORMATS",
  2,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding284 = FlaxProxyMember(
  "AVAILABLEFORMATS",
  2,
  _flaxBinding27,
  hasSuper: true,
);
const _flaxBinding285 = FlaxProxyMember(
  "FIRSTDAYOFWEEK",
  2,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding286 = FlaxProxyMember(
  "WEEKENDRANGE",
  2,
  _flaxBinding29,
  hasSuper: true,
);
const _flaxBinding287 = FlaxProxyMember(
  "FIRSTWEEKCUTOFFDAY",
  2,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding288 = FlaxProxyMember(
  "ZERODIGIT",
  2,
  _flaxBinding30,
  hasSuper: true,
);
const _flaxBinding289 = FlaxObjectBinding(
  "flax.material/dependency_intl#type:DateSymbols",
  [
    _flaxBinding176,
    _flaxBinding177,
    _flaxBinding178,
    _flaxBinding179,
    _flaxBinding180,
    _flaxBinding181,
    _flaxBinding182,
    _flaxBinding183,
    _flaxBinding184,
    _flaxBinding185,
    _flaxBinding186,
    _flaxBinding187,
    _flaxBinding188,
    _flaxBinding189,
    _flaxBinding190,
    _flaxBinding191,
    _flaxBinding192,
    _flaxBinding193,
    _flaxBinding194,
    _flaxBinding195,
    _flaxBinding196,
    _flaxBinding197,
    _flaxBinding198,
    _flaxBinding199,
    _flaxBinding200,
    _flaxBinding201,
  ],
  {
    "serializeToMap": _flaxBinding228,
    "toString": _flaxBinding229,
    "@super:serializeToMap": FlaxInstanceMethod.shared(
      _flaxBinding16,
      _DateSymbols_super_serializeToMap,
    ),
    "@super:toString": _flaxBinding230,
    "@super:get:NAME": _flaxBinding231,
    "@super:get:ERAS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_ERAS,
    ),
    "@super:get:ERANAMES": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_ERANAMES,
    ),
    "@super:get:NARROWMONTHS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_NARROWMONTHS,
    ),
    "@super:get:STANDALONENARROWMONTHS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_STANDALONENARROWMONTHS,
    ),
    "@super:get:MONTHS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_MONTHS,
    ),
    "@super:get:STANDALONEMONTHS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_STANDALONEMONTHS,
    ),
    "@super:get:SHORTMONTHS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_SHORTMONTHS,
    ),
    "@super:get:STANDALONESHORTMONTHS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_STANDALONESHORTMONTHS,
    ),
    "@super:get:WEEKDAYS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_WEEKDAYS,
    ),
    "@super:get:STANDALONEWEEKDAYS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_STANDALONEWEEKDAYS,
    ),
    "@super:get:SHORTWEEKDAYS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_SHORTWEEKDAYS,
    ),
    "@super:get:STANDALONESHORTWEEKDAYS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_STANDALONESHORTWEEKDAYS,
    ),
    "@super:get:NARROWWEEKDAYS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_NARROWWEEKDAYS,
    ),
    "@super:get:STANDALONENARROWWEEKDAYS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_STANDALONENARROWWEEKDAYS,
    ),
    "@super:get:SHORTQUARTERS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_SHORTQUARTERS,
    ),
    "@super:get:QUARTERS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_QUARTERS,
    ),
    "@super:get:AMPMS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_AMPMS,
    ),
    "@super:get:DATEFORMATS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_DATEFORMATS,
    ),
    "@super:get:TIMEFORMATS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_TIMEFORMATS,
    ),
    "@super:get:DATETIMEFORMATS": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _DateSymbols_super_get_DATETIMEFORMATS,
    ),
    "@super:get:AVAILABLEFORMATS": FlaxInstanceMethod.shared(
      _flaxBinding21,
      _DateSymbols_super_get_AVAILABLEFORMATS,
    ),
    "@super:get:FIRSTDAYOFWEEK": FlaxInstanceMethod.shared(
      flaxIntCall,
      _DateSymbols_super_get_FIRSTDAYOFWEEK,
    ),
    "@super:get:WEEKENDRANGE": FlaxInstanceMethod.shared(
      _flaxBinding24,
      _DateSymbols_super_get_WEEKENDRANGE,
    ),
    "@super:get:FIRSTWEEKCUTOFFDAY": FlaxInstanceMethod.shared(
      flaxIntCall,
      _DateSymbols_super_get_FIRSTWEEKCUTOFFDAY,
    ),
    "@super:get:ZERODIGIT": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _DateSymbols_super_get_ZERODIGIT,
    ),
    "@super:set:NAME": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxStringType)],
      flaxVoidType,
      _DateSymbols_super_set_NAME,
    ),
    "@super:set:ERAS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_ERAS,
    ),
    "@super:set:ERANAMES": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_ERANAMES,
    ),
    "@super:set:NARROWMONTHS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_NARROWMONTHS,
    ),
    "@super:set:STANDALONENARROWMONTHS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_STANDALONENARROWMONTHS,
    ),
    "@super:set:MONTHS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_MONTHS,
    ),
    "@super:set:STANDALONEMONTHS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_STANDALONEMONTHS,
    ),
    "@super:set:SHORTMONTHS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_SHORTMONTHS,
    ),
    "@super:set:STANDALONESHORTMONTHS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_STANDALONESHORTMONTHS,
    ),
    "@super:set:WEEKDAYS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_WEEKDAYS,
    ),
    "@super:set:STANDALONEWEEKDAYS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_STANDALONEWEEKDAYS,
    ),
    "@super:set:SHORTWEEKDAYS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_SHORTWEEKDAYS,
    ),
    "@super:set:STANDALONESHORTWEEKDAYS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_STANDALONESHORTWEEKDAYS,
    ),
    "@super:set:NARROWWEEKDAYS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_NARROWWEEKDAYS,
    ),
    "@super:set:STANDALONENARROWWEEKDAYS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_STANDALONENARROWWEEKDAYS,
    ),
    "@super:set:SHORTQUARTERS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_SHORTQUARTERS,
    ),
    "@super:set:QUARTERS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_QUARTERS,
    ),
    "@super:set:AMPMS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_AMPMS,
    ),
    "@super:set:DATEFORMATS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_DATEFORMATS,
    ),
    "@super:set:TIMEFORMATS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_TIMEFORMATS,
    ),
    "@super:set:DATETIMEFORMATS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding18)],
      flaxVoidType,
      _DateSymbols_super_set_DATETIMEFORMATS,
    ),
    "@super:set:AVAILABLEFORMATS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding20)],
      flaxVoidType,
      _DateSymbols_super_set_AVAILABLEFORMATS,
    ),
    "@super:set:FIRSTDAYOFWEEK": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxIntType)],
      flaxVoidType,
      _DateSymbols_super_set_FIRSTDAYOFWEEK,
    ),
    "@super:set:WEEKENDRANGE": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding23)],
      flaxVoidType,
      _DateSymbols_super_set_WEEKENDRANGE,
    ),
    "@super:set:FIRSTWEEKCUTOFFDAY": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxIntType)],
      flaxVoidType,
      _DateSymbols_super_set_FIRSTWEEKCUTOFFDAY,
    ),
    "@super:set:ZERODIGIT": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableStringType)],
      flaxVoidType,
      _DateSymbols_super_set_ZERODIGIT,
    ),
  },
  constructors: {
    "": _flaxBinding232,
    "deserializeFromMap": _flaxBinding234,
    "@implementation": _flaxBinding232,
  },
  create: _createDateSymbols,
  matches: _isDateSymbols,
  setters: [
    _flaxBinding202,
    _flaxBinding203,
    _flaxBinding204,
    _flaxBinding205,
    _flaxBinding206,
    _flaxBinding207,
    _flaxBinding208,
    _flaxBinding209,
    _flaxBinding210,
    _flaxBinding211,
    _flaxBinding212,
    _flaxBinding213,
    _flaxBinding214,
    _flaxBinding215,
    _flaxBinding216,
    _flaxBinding217,
    _flaxBinding218,
    _flaxBinding219,
    _flaxBinding220,
    _flaxBinding221,
    _flaxBinding222,
    _flaxBinding223,
    _flaxBinding224,
    _flaxBinding225,
    _flaxBinding226,
    _flaxBinding227,
  ],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding235,
    _flaxBinding236,
    _flaxBinding237,
    _flaxBinding238,
    _flaxBinding239,
    _flaxBinding240,
    _flaxBinding241,
    _flaxBinding242,
    _flaxBinding243,
    _flaxBinding244,
    _flaxBinding245,
    _flaxBinding246,
    _flaxBinding247,
    _flaxBinding248,
    _flaxBinding249,
    _flaxBinding250,
    _flaxBinding251,
    _flaxBinding252,
    _flaxBinding253,
    _flaxBinding254,
    _flaxBinding255,
    _flaxBinding256,
    _flaxBinding257,
    _flaxBinding258,
    _flaxBinding259,
    _flaxBinding260,
    _flaxBinding261,
    _flaxBinding262,
    _flaxBinding263,
    _flaxBinding264,
    _flaxBinding265,
    _flaxBinding266,
    _flaxBinding267,
    _flaxBinding268,
    _flaxBinding269,
    _flaxBinding270,
    _flaxBinding271,
    _flaxBinding272,
    _flaxBinding273,
    _flaxBinding274,
    _flaxBinding275,
    _flaxBinding276,
    _flaxBinding277,
    _flaxBinding278,
    _flaxBinding279,
    _flaxBinding280,
    _flaxBinding281,
    _flaxBinding282,
    _flaxBinding283,
    _flaxBinding284,
    _flaxBinding285,
    _flaxBinding286,
    _flaxBinding287,
    _flaxBinding288,
  ]),
);
const _flaxBinding290 = FlaxGetter.plain(
  "negativePrefix",
  flaxStringType,
  _NumberFormat_negativePrefix,
);
const _flaxBinding291 = FlaxGetter.plain(
  "positivePrefix",
  flaxStringType,
  _NumberFormat_positivePrefix,
);
const _flaxBinding292 = FlaxGetter.plain(
  "negativeSuffix",
  flaxStringType,
  _NumberFormat_negativeSuffix,
);
const _flaxBinding293 = FlaxGetter.plain(
  "positiveSuffix",
  flaxStringType,
  _NumberFormat_positiveSuffix,
);
const _flaxBinding294 = FlaxGetter.plain(
  "maximumIntegerDigits",
  flaxIntType,
  _NumberFormat_maximumIntegerDigits,
);
const _flaxBinding295 = FlaxGetter.plain(
  "minimumIntegerDigits",
  flaxIntType,
  _NumberFormat_minimumIntegerDigits,
);
const _flaxBinding296 = FlaxGetter.plain(
  "maximumFractionDigits",
  flaxIntType,
  _NumberFormat_maximumFractionDigits,
);
const _flaxBinding297 = FlaxGetter.plain(
  "minimumFractionDigits",
  flaxIntType,
  _NumberFormat_minimumFractionDigits,
);
const _flaxBinding298 = FlaxGetter.plain(
  "minimumExponentDigits",
  flaxIntType,
  _NumberFormat_minimumExponentDigits,
);
const _flaxBinding299 = FlaxGetter.plain(
  "maximumSignificantDigits",
  flaxNullableIntType,
  _NumberFormat_maximumSignificantDigits,
);
const _flaxBinding300 = FlaxGetter.plain(
  "minimumSignificantDigitsStrict",
  flaxBoolType,
  _NumberFormat_minimumSignificantDigitsStrict,
);
const _flaxBinding301 = FlaxGetter.plain(
  "minimumSignificantDigits",
  flaxNullableIntType,
  _NumberFormat_minimumSignificantDigits,
);
const _flaxBinding302 = FlaxGetter.plain(
  "significantDigits",
  flaxNullableIntType,
  _NumberFormat_significantDigits,
);
const _flaxBinding303 = FlaxGetter.plain(
  "significantDigitsInUse",
  flaxBoolType,
  _NumberFormat_significantDigitsInUse,
);
const _flaxBinding304 = FlaxGetter.plain(
  "multiplier",
  flaxIntType,
  _NumberFormat_multiplier,
);
const _flaxBinding305 = FlaxGetter.plain(
  "currencyName",
  flaxNullableStringType,
  _NumberFormat_currencyName,
);
const _flaxBinding306 = FlaxGetter.plain(
  "currencySymbol",
  flaxStringType,
  _NumberFormat_currencySymbol,
);
const _flaxBinding307 = FlaxGetter.plain(
  "decimalDigits",
  flaxNullableIntType,
  _NumberFormat_decimalDigits,
);
const _flaxBinding308 = FlaxGetter.plain(
  "locale",
  flaxStringType,
  _NumberFormat_locale,
);
const _flaxBinding309 = FlaxGetter.plain(
  "symbols",
  _flaxBinding34,
  _NumberFormat_symbols,
);
const _flaxBinding310 = FlaxGetter.plain(
  "localeZero",
  flaxIntType,
  _NumberFormat_localeZero,
);
const _flaxBinding311 = FlaxSetter(
  "maximumIntegerDigits",
  flaxIntType,
  _NumberFormat_set_maximumIntegerDigits,
);
const _flaxBinding312 = FlaxSetter(
  "minimumIntegerDigits",
  flaxIntType,
  _NumberFormat_set_minimumIntegerDigits,
);
const _flaxBinding313 = FlaxSetter(
  "maximumFractionDigits",
  flaxIntType,
  _NumberFormat_set_maximumFractionDigits,
);
const _flaxBinding314 = FlaxSetter(
  "minimumFractionDigits",
  flaxIntType,
  _NumberFormat_set_minimumFractionDigits,
);
const _flaxBinding315 = FlaxSetter(
  "minimumExponentDigits",
  flaxIntType,
  _NumberFormat_set_minimumExponentDigits,
);
const _flaxBinding316 = FlaxSetter(
  "maximumSignificantDigits",
  flaxNullableIntType,
  _NumberFormat_set_maximumSignificantDigits,
);
const _flaxBinding317 = FlaxSetter(
  "minimumSignificantDigitsStrict",
  flaxBoolType,
  _NumberFormat_set_minimumSignificantDigitsStrict,
);
const _flaxBinding318 = FlaxSetter(
  "minimumSignificantDigits",
  flaxNullableIntType,
  _NumberFormat_set_minimumSignificantDigits,
);
const _flaxBinding319 = FlaxSetter(
  "significantDigits",
  flaxNullableIntType,
  _NumberFormat_set_significantDigits,
);
const _flaxBinding320 = FlaxSetter(
  "significantDigitsInUse",
  flaxBoolType,
  _NumberFormat_set_significantDigitsInUse,
);
const _flaxBinding321 = FlaxSetter(
  "currencyName",
  flaxNullableStringType,
  _NumberFormat_set_currencyName,
);
const _flaxBinding322 = <FlaxParameter>[
  FlaxParameter.required("currencyCode", flaxStringType),
];
const _flaxBinding323 = FlaxInstanceMethod.plain(
  _flaxBinding322,
  flaxStringType,
  _NumberFormat_simpleCurrencySymbol,
);
const _flaxBinding324 = <FlaxParameter>[
  FlaxParameter.required("number", flaxNullableAnyType),
];
const _flaxBinding325 = FlaxInstanceMethod.plain(
  _flaxBinding324,
  flaxStringType,
  _NumberFormat_format,
);
const _flaxBinding326 = <FlaxParameter>[
  FlaxParameter.required("text", flaxStringType),
];
const _flaxBinding327 = FlaxInstanceMethod.plain(
  _flaxBinding326,
  flaxNumType,
  _NumberFormat_parse,
);
const _flaxBinding328 = FlaxTypeRef(
  "object",
  id: "flax.material/dependency_intl#type:NumberParserBase",
  dartType: FlaxDartTypes.typeOf<api1.NumberParserBase<Object?>>,
);
const _flaxBinding329 = FlaxInstanceMethod.plain(
  _flaxBinding326,
  flaxNullableNumType,
  _NumberFormat_tryParse,
);
const _flaxBinding330 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _NumberFormat_turnOffGrouping,
);
const _flaxBinding331 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _NumberFormat_toString,
);
const _flaxBinding332 = <FlaxParameter>[
  FlaxParameter("locale", flaxNullableStringType, required: false),
  FlaxParameter("decimalDigits", flaxNullableIntType, required: false),
];
const _flaxBinding333 = <FlaxParameter>[
  FlaxParameter("locale", flaxNullableStringType, required: false),
  FlaxParameter(
    "currencyNameOrSymbol",
    flaxNullableStringType,
    required: false,
  ),
];
const _flaxBinding334 = <FlaxParameter>[
  FlaxParameter("locale", flaxNullableStringType, required: false),
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("symbol", flaxNullableStringType, required: false),
  FlaxParameter("decimalDigits", flaxNullableIntType, required: false),
  FlaxParameter("customPattern", flaxNullableStringType, required: false),
];
const _flaxBinding335 = <FlaxParameter>[
  FlaxParameter("locale", flaxNullableStringType, required: false),
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("decimalDigits", flaxNullableIntType, required: false),
];
const _flaxBinding336 = <FlaxParameter>[
  FlaxParameter("locale", flaxNullableStringType, required: false),
  FlaxParameter(
    "explicitSign",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding337 = <FlaxParameter>[
  FlaxParameter("locale", flaxNullableStringType, required: false),
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("symbol", flaxNullableStringType, required: false),
  FlaxParameter("decimalDigits", flaxNullableIntType, required: false),
];
const _flaxBinding338 = FlaxObjectBinding(
  "flax.material/dependency_intl#type:NumberFormat",
  [
    _flaxBinding290,
    _flaxBinding291,
    _flaxBinding292,
    _flaxBinding293,
    _flaxBinding294,
    _flaxBinding295,
    _flaxBinding296,
    _flaxBinding297,
    _flaxBinding298,
    _flaxBinding299,
    _flaxBinding300,
    _flaxBinding301,
    _flaxBinding302,
    _flaxBinding303,
    _flaxBinding304,
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding307,
    _flaxBinding308,
    _flaxBinding309,
    _flaxBinding310,
  ],
  {
    "simpleCurrencySymbol": _flaxBinding323,
    "format": _flaxBinding325,
    "parse": _flaxBinding327,
    "parseWith": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "parserGenerator",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("p0", _flaxBinding32),
                FlaxCallbackParameter.plain("p1", flaxStringType),
              ],
              _flaxBinding328,
              _callback1,
              id: "callback:<>(p:r:p0:object:flax.material/dependency_intl#type:NumberFormat,p:r:p1:String:)->object:flax.material/dependency_intl#type:NumberParserBase<any?:>",
              invoke: _callback1Invoke,
              matches: _callback1Matches,
            ),
          ),
        ),
        FlaxParameter.required("text", flaxStringType),
      ],
      FlaxTypeRef("any", nullable: true),
      _NumberFormat_parseWith,
      genericFactory: _flaxGeneric_NumberFormat_parseWith,
      ownerTypes: [],
    ),
    "tryParse": _flaxBinding329,
    "tryParseWith": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "parserGenerator",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("p0", _flaxBinding32),
                FlaxCallbackParameter.plain("p1", flaxStringType),
              ],
              _flaxBinding328,
              _callback2,
              id: "callback:<>(p:r:p0:object:flax.material/dependency_intl#type:NumberFormat,p:r:p1:String:)->object:flax.material/dependency_intl#type:NumberParserBase<any?:>",
              invoke: _callback2Invoke,
              matches: _callback2Matches,
            ),
          ),
        ),
        FlaxParameter.required("text", flaxStringType),
      ],
      FlaxTypeRef("any", nullable: true),
      _NumberFormat_tryParseWith,
      genericFactory: _flaxGeneric_NumberFormat_tryParseWith,
      ownerTypes: [],
    ),
    "turnOffGrouping": _flaxBinding330,
    "toString": _flaxBinding331,
  },
  constructors: {
    "": _flaxBinding105,
    "decimalPattern": _flaxBinding106,
    "decimalPatternDigits": _flaxBinding332,
    "percentPattern": _flaxBinding106,
    "decimalPercentPattern": _flaxBinding332,
    "scientificPattern": _flaxBinding106,
    "currencyPattern": _flaxBinding333,
    "currency": _flaxBinding334,
    "simpleCurrency": _flaxBinding335,
    "compact": _flaxBinding336,
    "compactLong": _flaxBinding336,
    "compactSimpleCurrency": _flaxBinding335,
    "compactCurrency": _flaxBinding337,
  },
  create: _createNumberFormat,
  matches: _isNumberFormat,
  setters: [
    _flaxBinding311,
    _flaxBinding312,
    _flaxBinding313,
    _flaxBinding314,
    _flaxBinding315,
    _flaxBinding316,
    _flaxBinding317,
    _flaxBinding318,
    _flaxBinding319,
    _flaxBinding320,
    _flaxBinding321,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding339 = FlaxGetter.plain(
  "format",
  _flaxBinding32,
  _NumberParserBase_format,
);
const _flaxBinding340 = FlaxGetter.plain(
  "text",
  flaxStringType,
  _NumberParserBase_text,
);
const _flaxBinding341 = FlaxGetter.plain(
  "symbols",
  _flaxBinding34,
  _NumberParserBase_symbols,
);
const _flaxBinding342 = FlaxGetter.plain(
  "gotPositive",
  flaxBoolType,
  _NumberParserBase_gotPositive,
);
const _flaxBinding343 = FlaxGetter.plain(
  "gotNegative",
  flaxBoolType,
  _NumberParserBase_gotNegative,
);
const _flaxBinding344 = FlaxGetter.plain(
  "gotPositiveSuffix",
  flaxBoolType,
  _NumberParserBase_gotPositiveSuffix,
);
const _flaxBinding345 = FlaxGetter.plain(
  "gotNegativeSuffix",
  flaxBoolType,
  _NumberParserBase_gotNegativeSuffix,
);
const _flaxBinding346 = FlaxGetter.plain(
  "done",
  flaxBoolType,
  _NumberParserBase_done,
);
const _flaxBinding347 = FlaxGetter.plain(
  "prefixesSkipped",
  flaxBoolType,
  _NumberParserBase_prefixesSkipped,
);
const _flaxBinding348 = FlaxGetter.plain(
  "scale",
  flaxIntType,
  _NumberParserBase_scale,
);
const _flaxBinding349 = FlaxGetter.plain(
  "replacements",
  _flaxBinding36,
  _NumberParserBase_replacements,
);
const _flaxBinding350 = FlaxGetter.plain(
  "groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit",
  flaxBoolType,
  _NumberParserBase_groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit,
);
const _flaxBinding351 = <FlaxParameter>[
  FlaxParameter("skip", flaxBoolType, required: false, defaultValue: false),
];
const _flaxBinding352 = <FlaxParameter>[];
const _flaxBinding353 = <FlaxParameter>[
  FlaxParameter.required("normalizedText", flaxStringType),
];
const _flaxBinding354 = <FlaxParameter>[
  FlaxParameter.required("format", _flaxBinding32),
  FlaxParameter.required("text", flaxStringType),
];
const _flaxBinding355 = FlaxSetter(
  "gotPositive",
  flaxBoolType,
  _NumberParserBase_set_gotPositive,
);
const _flaxBinding356 = FlaxSetter(
  "gotNegative",
  flaxBoolType,
  _NumberParserBase_set_gotNegative,
);
const _flaxBinding357 = FlaxSetter(
  "gotPositiveSuffix",
  flaxBoolType,
  _NumberParserBase_set_gotPositiveSuffix,
);
const _flaxBinding358 = FlaxSetter(
  "gotNegativeSuffix",
  flaxBoolType,
  _NumberParserBase_set_gotNegativeSuffix,
);
const _flaxBinding359 = FlaxSetter(
  "done",
  flaxBoolType,
  _NumberParserBase_set_done,
);
const _flaxBinding360 = FlaxSetter(
  "prefixesSkipped",
  flaxBoolType,
  _NumberParserBase_set_prefixesSkipped,
);
const _flaxBinding361 = FlaxSetter(
  "scale",
  flaxIntType,
  _NumberParserBase_set_scale,
);
const _flaxBinding362 = FlaxProxyMember(
  "invalidFormat",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding363 = FlaxProxyMember(
  "handleSpace",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding364 = FlaxProxyMember(
  "asDigit",
  0,
  _flaxBinding31,
  hasSuper: true,
);
const _flaxBinding365 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "skip",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(n:o:skip:bool:)->void:",
);
const _flaxBinding366 = FlaxProxyMember(
  "checkPrefixes",
  0,
  _flaxBinding365,
  hasSuper: true,
);
const _flaxBinding367 = FlaxProxyMember(
  "checkSuffixes",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding368 = FlaxProxyMember(
  "processNonDigit",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding369 = FlaxProxyMember(
  "invalidNumber",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding370 = FlaxProxyMember(
  "format",
  1,
  _flaxBinding33,
  hasSuper: true,
);
const _flaxBinding371 = FlaxProxyMember(
  "text",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding372 = FlaxProxyMember(
  "symbols",
  1,
  _flaxBinding35,
  hasSuper: true,
);
const _flaxBinding373 = FlaxProxyMember(
  "gotPositive",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding374 = FlaxProxyMember(
  "gotNegative",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding375 = FlaxProxyMember(
  "gotPositiveSuffix",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding376 = FlaxProxyMember(
  "gotNegativeSuffix",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding377 = FlaxProxyMember(
  "done",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding378 = FlaxProxyMember(
  "prefixesSkipped",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding379 = FlaxProxyMember(
  "scale",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding380 = FlaxProxyMember(
  "replacements",
  1,
  _flaxBinding37,
  hasSuper: true,
);
const _flaxBinding381 = FlaxProxyMember(
  "groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding382 = FlaxProxyMember(
  "gotPositive",
  2,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding383 = FlaxProxyMember(
  "gotNegative",
  2,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding384 = FlaxProxyMember(
  "gotPositiveSuffix",
  2,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding385 = FlaxProxyMember(
  "gotNegativeSuffix",
  2,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding386 = FlaxProxyMember(
  "done",
  2,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding387 = FlaxProxyMember(
  "prefixesSkipped",
  2,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding388 = FlaxProxyMember(
  "scale",
  2,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding389 = FlaxGetter.plain(
  "NAME",
  flaxStringType,
  _NumberSymbols_NAME,
);
const _flaxBinding390 = FlaxGetter.plain(
  "DECIMAL_SEP",
  flaxStringType,
  _NumberSymbols_DECIMAL_SEP,
);
const _flaxBinding391 = FlaxGetter.plain(
  "GROUP_SEP",
  flaxStringType,
  _NumberSymbols_GROUP_SEP,
);
const _flaxBinding392 = FlaxGetter.plain(
  "PERCENT",
  flaxStringType,
  _NumberSymbols_PERCENT,
);
const _flaxBinding393 = FlaxGetter.plain(
  "ZERO_DIGIT",
  flaxStringType,
  _NumberSymbols_ZERO_DIGIT,
);
const _flaxBinding394 = FlaxGetter.plain(
  "PLUS_SIGN",
  flaxStringType,
  _NumberSymbols_PLUS_SIGN,
);
const _flaxBinding395 = FlaxGetter.plain(
  "MINUS_SIGN",
  flaxStringType,
  _NumberSymbols_MINUS_SIGN,
);
const _flaxBinding396 = FlaxGetter.plain(
  "EXP_SYMBOL",
  flaxStringType,
  _NumberSymbols_EXP_SYMBOL,
);
const _flaxBinding397 = FlaxGetter.plain(
  "PERMILL",
  flaxStringType,
  _NumberSymbols_PERMILL,
);
const _flaxBinding398 = FlaxGetter.plain(
  "INFINITY",
  flaxStringType,
  _NumberSymbols_INFINITY,
);
const _flaxBinding399 = FlaxGetter.plain(
  "NAN",
  flaxStringType,
  _NumberSymbols_NAN,
);
const _flaxBinding400 = FlaxGetter.plain(
  "DECIMAL_PATTERN",
  flaxStringType,
  _NumberSymbols_DECIMAL_PATTERN,
);
const _flaxBinding401 = FlaxGetter.plain(
  "SCIENTIFIC_PATTERN",
  flaxStringType,
  _NumberSymbols_SCIENTIFIC_PATTERN,
);
const _flaxBinding402 = FlaxGetter.plain(
  "PERCENT_PATTERN",
  flaxStringType,
  _NumberSymbols_PERCENT_PATTERN,
);
const _flaxBinding403 = FlaxGetter.plain(
  "CURRENCY_PATTERN",
  flaxStringType,
  _NumberSymbols_CURRENCY_PATTERN,
);
const _flaxBinding404 = FlaxGetter.plain(
  "DEF_CURRENCY_CODE",
  flaxStringType,
  _NumberSymbols_DEF_CURRENCY_CODE,
);
const _flaxBinding405 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _NumberSymbols_toString,
);
const _flaxBinding406 = <FlaxParameter>[
  FlaxParameter.required("NAME", flaxStringType),
  FlaxParameter.required("DECIMAL_SEP", flaxStringType),
  FlaxParameter.required("GROUP_SEP", flaxStringType),
  FlaxParameter.required("PERCENT", flaxStringType),
  FlaxParameter.required("ZERO_DIGIT", flaxStringType),
  FlaxParameter.required("PLUS_SIGN", flaxStringType),
  FlaxParameter.required("MINUS_SIGN", flaxStringType),
  FlaxParameter.required("EXP_SYMBOL", flaxStringType),
  FlaxParameter.required("PERMILL", flaxStringType),
  FlaxParameter.required("INFINITY", flaxStringType),
  FlaxParameter.required("NAN", flaxStringType),
  FlaxParameter.required("DECIMAL_PATTERN", flaxStringType),
  FlaxParameter.required("SCIENTIFIC_PATTERN", flaxStringType),
  FlaxParameter.required("PERCENT_PATTERN", flaxStringType),
  FlaxParameter.required("CURRENCY_PATTERN", flaxStringType),
  FlaxParameter.required("DEF_CURRENCY_CODE", flaxStringType),
];
const _flaxBinding407 = FlaxProxyMember(
  "DECIMAL_SEP",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding408 = FlaxProxyMember(
  "GROUP_SEP",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding409 = FlaxProxyMember(
  "PERCENT",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding410 = FlaxProxyMember(
  "ZERO_DIGIT",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding411 = FlaxProxyMember(
  "PLUS_SIGN",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding412 = FlaxProxyMember(
  "MINUS_SIGN",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding413 = FlaxProxyMember(
  "EXP_SYMBOL",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding414 = FlaxProxyMember(
  "PERMILL",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding415 = FlaxProxyMember(
  "INFINITY",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding416 = FlaxProxyMember(
  "NAN",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding417 = FlaxProxyMember(
  "DECIMAL_PATTERN",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding418 = FlaxProxyMember(
  "SCIENTIFIC_PATTERN",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding419 = FlaxProxyMember(
  "PERCENT_PATTERN",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding420 = FlaxProxyMember(
  "CURRENCY_PATTERN",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding421 = FlaxProxyMember(
  "DEF_CURRENCY_CODE",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding422 = FlaxObjectBinding(
  "flax.material/dependency_intl#type:NumberSymbols",
  [
    _flaxBinding389,
    _flaxBinding390,
    _flaxBinding391,
    _flaxBinding392,
    _flaxBinding393,
    _flaxBinding394,
    _flaxBinding395,
    _flaxBinding396,
    _flaxBinding397,
    _flaxBinding398,
    _flaxBinding399,
    _flaxBinding400,
    _flaxBinding401,
    _flaxBinding402,
    _flaxBinding403,
    _flaxBinding404,
  ],
  {
    "toString": _flaxBinding405,
    "@super:toString": _flaxBinding230,
    "@super:get:NAME": _flaxBinding231,
    "@super:get:DECIMAL_SEP": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_DECIMAL_SEP,
    ),
    "@super:get:GROUP_SEP": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_GROUP_SEP,
    ),
    "@super:get:PERCENT": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_PERCENT,
    ),
    "@super:get:ZERO_DIGIT": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_ZERO_DIGIT,
    ),
    "@super:get:PLUS_SIGN": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_PLUS_SIGN,
    ),
    "@super:get:MINUS_SIGN": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_MINUS_SIGN,
    ),
    "@super:get:EXP_SYMBOL": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_EXP_SYMBOL,
    ),
    "@super:get:PERMILL": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_PERMILL,
    ),
    "@super:get:INFINITY": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_INFINITY,
    ),
    "@super:get:NAN": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_NAN,
    ),
    "@super:get:DECIMAL_PATTERN": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_DECIMAL_PATTERN,
    ),
    "@super:get:SCIENTIFIC_PATTERN": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_SCIENTIFIC_PATTERN,
    ),
    "@super:get:PERCENT_PATTERN": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_PERCENT_PATTERN,
    ),
    "@super:get:CURRENCY_PATTERN": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_CURRENCY_PATTERN,
    ),
    "@super:get:DEF_CURRENCY_CODE": FlaxInstanceMethod.shared(
      flaxStringCall,
      _NumberSymbols_super_get_DEF_CURRENCY_CODE,
    ),
  },
  constructors: {"": _flaxBinding406, "@implementation": _flaxBinding406},
  create: _createNumberSymbols,
  matches: _isNumberSymbols,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding236,
    _flaxBinding237,
    _flaxBinding407,
    _flaxBinding408,
    _flaxBinding409,
    _flaxBinding410,
    _flaxBinding411,
    _flaxBinding412,
    _flaxBinding413,
    _flaxBinding414,
    _flaxBinding415,
    _flaxBinding416,
    _flaxBinding417,
    _flaxBinding418,
    _flaxBinding419,
    _flaxBinding420,
    _flaxBinding421,
  ]),
);
const _flaxBinding423 = <FlaxParameter>[
  FlaxParameter.required("char", flaxStringType),
];
