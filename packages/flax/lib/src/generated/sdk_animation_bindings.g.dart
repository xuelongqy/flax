// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:flutter/animation.dart' as api;
import 'package:flax/bindings.dart';

import 'dart:ui' as api1;

import 'package:flutter/foundation.dart' as api2;

import 'dart:core' as api3;

import 'package:flutter/widgets.dart' as api4;
import 'package:flutter/physics.dart' as api5;
import 'package:flutter/scheduler.dart' as api6;

import 'closed_adapters.g.dart' as _flaxAdapters;

// ignore: unused_element
const _flaxOmitted = Object();
const sdk_animationBindings = FlaxBindingModule(
  'sdk_animation',
  [
    FlaxEnumBinding(
      "flax.core/sdk_animation#type:AnimationStatus",
      {
        "dismissed": api.AnimationStatus.dismissed,
        "forward": api.AnimationStatus.forward,
        "reverse": api.AnimationStatus.reverse,
        "completed": api.AnimationStatus.completed,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.core/sdk_animation#type:AnimationBehavior",
      {
        "normal": api.AnimationBehavior.normal,
        "preserve": api.AnimationBehavior.preserve,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:AlwaysStoppedAnimation",
      [
        _flaxBinding79,
        FlaxGetter.plain(
          "value",
          FlaxTypeRef("any", nullable: true),
          _AlwaysStoppedAnimation_value,
        ),
        _flaxBinding80,
        _flaxBinding81,
        _flaxBinding82,
        _flaxBinding83,
      ],
      {
        "addListener": _flaxBinding84,
        "removeListener": _flaxBinding85,
        "addStatusListener": _flaxBinding86,
        "removeStatusListener": _flaxBinding87,
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AlwaysStoppedAnimation_drive,
          genericFactory: _flaxGeneric_AlwaysStoppedAnimation_drive,
          ownerTypes: [_flaxDefault_AlwaysStoppedAnimation_0],
        ),
        "toString": _flaxBinding88,
        "toStringDetails": _flaxBinding89,
        "@super:addListener": _flaxBinding90,
        "@super:removeListener": _flaxBinding91,
        "@super:addStatusListener": _flaxBinding92,
        "@super:removeStatusListener": _flaxBinding93,
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AlwaysStoppedAnimation_super_drive,
          genericFactory: _flaxGeneric_AlwaysStoppedAnimation_super_drive,
          ownerTypes: [_flaxDefault_AlwaysStoppedAnimation_0],
        ),
        "@super:toString": _flaxBinding94,
        "@super:toStringDetails": _flaxBinding95,
        "@super:get:value": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("any", nullable: true),
          _AlwaysStoppedAnimation_super_get_value,
        ),
        "@super:get:status": _flaxBinding97,
        "@super:get:isDismissed": _flaxBinding98,
        "@super:get:isCompleted": _flaxBinding99,
        "@super:get:isAnimating": _flaxBinding100,
        "@super:get:isForwardOrCompleted": _flaxBinding101,
      },
      constructors: {"": _flaxBinding102, "@implementation": _flaxBinding102},
      create: _createAlwaysStoppedAnimation,
      disposeMethod: null,
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "flax.core/sdk_animation#type:Animation",
        "flax.core/flutter#type:Listenable",
        "dart:core::Object",
        "flax.core/flutter#type:ValueListenable",
      ],
      setters: [],
      matches: _isAlwaysStoppedAnimation,
      methods: const {},
      proxy: FlaxProxyBinding([
        _flaxBinding103,
        _flaxBinding104,
        _flaxBinding105,
        _flaxBinding106,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback0,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
            genericFactory: _callback0Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding109,
        _flaxBinding110,
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
        _flaxBinding111,
        _flaxBinding112,
        _flaxBinding113,
        _flaxBinding114,
        _flaxBinding115,
      ]),
    ),
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:Animatable",
      [],
      {
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _Animatable_transform,
        ),
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _Animatable_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Animatable_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _Animatable_chain,
        ),
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _Animatable_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Animatable_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _Animatable_super_chain,
        ),
      },
      constructors: {
        "fromCallback": _flaxBinding122,
        "@implementation": _flaxBinding96,
      },
      create: _createAnimatable,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isAnimatable,
      methods: const {},
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            FlaxTypeRef(
              "object",
              id: "flax.core/sdk_animation#type:Animatable",
            ),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<any?:>",
          ),
          hasSuper: true,
        ),
      ]),
    ),
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:Animation",
      [
        FlaxGetter.plain(
          "value",
          FlaxTypeRef("any", nullable: true),
          _Animation_value,
        ),
        _flaxBinding123,
        _flaxBinding124,
        _flaxBinding125,
        _flaxBinding126,
        _flaxBinding127,
      ],
      {
        "addListener": _flaxBinding128,
        "removeListener": _flaxBinding129,
        "addStatusListener": _flaxBinding130,
        "removeStatusListener": _flaxBinding131,
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Animation_drive,
          genericFactory: _flaxGeneric_Animation_drive,
          ownerTypes: [_flaxDefault_Animation_0],
        ),
        "toString": _flaxBinding132,
        "toStringDetails": _flaxBinding133,
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Animation_super_drive,
          genericFactory: _flaxGeneric_Animation_super_drive,
          ownerTypes: [_flaxDefault_Animation_0],
        ),
        "@super:toString": _flaxBinding94,
        "@super:toStringDetails": _flaxBinding95,
        "@super:get:isDismissed": _flaxBinding98,
        "@super:get:isCompleted": _flaxBinding99,
        "@super:get:isAnimating": _flaxBinding100,
        "@super:get:isForwardOrCompleted": _flaxBinding101,
      },
      constructors: {
        "fromValueListenable": _flaxBinding137,
        "@implementation": _flaxBinding96,
      },
      create: _createAnimation,
      disposeMethod: null,
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "flax.core/flutter#type:Listenable",
        "dart:core::Object",
        "flax.core/flutter#type:ValueListenable",
      ],
      setters: [],
      matches: _isAnimation,
      methods: const {},
      proxy: FlaxProxyBinding([
        _flaxBinding138,
        _flaxBinding139,
        _flaxBinding140,
        _flaxBinding141,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback1,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback1Invoke,
            matches: _callback1Matches,
            genericFactory: _callback1Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding109,
        _flaxBinding110,
        _flaxBinding142,
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
        ),
        _flaxBinding112,
        _flaxBinding113,
        _flaxBinding114,
        _flaxBinding115,
      ]),
    ),
    _flaxBinding232,
    _flaxBinding233,
    _flaxBinding239,
    _flaxBinding242,
    _flaxBinding245,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:AnimationMax",
      [
        FlaxGetter.plain(
          "first",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_first,
        ),
        FlaxGetter.plain(
          "next",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_next,
        ),
        _flaxBinding246,
        FlaxGetter.plain("value", FlaxTypeRef("num"), _AnimationMax_value),
        _flaxBinding247,
        _flaxBinding248,
        _flaxBinding249,
        _flaxBinding250,
        _flaxBinding234,
      ],
      {
        "didStartListening": _flaxBinding251,
        "didStopListening": _flaxBinding252,
        "toString": _flaxBinding253,
        "addListener": _flaxBinding254,
        "removeListener": _flaxBinding255,
        "addStatusListener": _flaxBinding256,
        "removeStatusListener": _flaxBinding257,
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_drive,
          genericFactory: _flaxGeneric_AnimationMax_drive,
          ownerTypes: [_flaxDefault_AnimationMax_0],
        ),
        "toStringDetails": _flaxBinding258,
        "didRegisterListener": _flaxBinding259,
        "didUnregisterListener": _flaxBinding260,
        "clearListeners": _flaxBinding261,
        "notifyListeners": _flaxBinding262,
        "clearStatusListeners": _flaxBinding263,
        "notifyStatusListeners": _flaxBinding264,
        "@super:didStartListening": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMax_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMax_super_didStopListening,
        ),
        "@super:toString": _flaxBinding94,
        "@super:addListener": _flaxBinding90,
        "@super:removeListener": _flaxBinding91,
        "@super:addStatusListener": _flaxBinding92,
        "@super:removeStatusListener": _flaxBinding93,
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_super_drive,
          genericFactory: _flaxGeneric_AnimationMax_super_drive,
          ownerTypes: [_flaxDefault_AnimationMax_0],
        ),
        "@super:toStringDetails": _flaxBinding95,
        "@super:didRegisterListener": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMax_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMax_super_didUnregisterListener,
        ),
        "@super:clearListeners": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMax_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMax_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMax_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod.shared(
          _flaxBinding6,
          _AnimationMax_super_notifyStatusListeners,
        ),
        "@super:get:value": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("num"),
          _AnimationMax_super_get_value,
        ),
        "@super:get:first": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_super_get_next,
        ),
        "@super:get:status": _flaxBinding97,
        "@super:get:isDismissed": _flaxBinding98,
        "@super:get:isCompleted": _flaxBinding99,
        "@super:get:isAnimating": _flaxBinding100,
        "@super:get:isForwardOrCompleted": _flaxBinding101,
        "@super:get:isListening": FlaxInstanceMethod.shared(
          flaxBoolCall,
          _AnimationMax_super_get_isListening,
        ),
      },
      constructors: {"": _flaxBinding266, "@implementation": _flaxBinding266},
      create: _createAnimationMax,
      disposeMethod: null,
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "flax.core/sdk_animation#type:CompoundAnimation",
        "flax.core/sdk_animation#type:Animation",
        "flax.core/flutter#type:Listenable",
        "dart:core::Object",
        "flax.core/flutter#type:ValueListenable",
        "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
        "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
        "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
      ],
      setters: [],
      matches: _isAnimationMax,
      methods: const {},
      proxy: FlaxProxyBinding([
        _flaxBinding267,
        _flaxBinding268,
        _flaxBinding109,
        _flaxBinding103,
        _flaxBinding104,
        _flaxBinding105,
        _flaxBinding106,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback3,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback3Invoke,
            matches: _callback3Matches,
            genericFactory: _callback3Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding110,
        _flaxBinding195,
        _flaxBinding196,
        _flaxBinding198,
        _flaxBinding199,
        _flaxBinding200,
        _flaxBinding201,
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("num"),
            id: "callback:<>()->num:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "first",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>()->object:flax.core/sdk_animation#type:Animation<num:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "next",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>()->object:flax.core/sdk_animation#type:Animation<num:>",
          ),
          hasSuper: true,
        ),
        _flaxBinding111,
        _flaxBinding112,
        _flaxBinding113,
        _flaxBinding114,
        _flaxBinding115,
        _flaxBinding269,
      ]),
    ),
    _flaxBinding283,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:AnimationMin",
      [
        FlaxGetter.plain(
          "first",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_first,
        ),
        FlaxGetter.plain(
          "next",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_next,
        ),
        _flaxBinding284,
        FlaxGetter.plain("value", FlaxTypeRef("num"), _AnimationMin_value),
        _flaxBinding285,
        _flaxBinding286,
        _flaxBinding287,
        _flaxBinding288,
        _flaxBinding234,
      ],
      {
        "didStartListening": _flaxBinding289,
        "didStopListening": _flaxBinding290,
        "toString": _flaxBinding291,
        "addListener": _flaxBinding292,
        "removeListener": _flaxBinding293,
        "addStatusListener": _flaxBinding294,
        "removeStatusListener": _flaxBinding295,
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_drive,
          genericFactory: _flaxGeneric_AnimationMin_drive,
          ownerTypes: [_flaxDefault_AnimationMin_0],
        ),
        "toStringDetails": _flaxBinding296,
        "didRegisterListener": _flaxBinding297,
        "didUnregisterListener": _flaxBinding298,
        "clearListeners": _flaxBinding299,
        "notifyListeners": _flaxBinding300,
        "clearStatusListeners": _flaxBinding301,
        "notifyStatusListeners": _flaxBinding302,
        "@super:didStartListening": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMin_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMin_super_didStopListening,
        ),
        "@super:toString": _flaxBinding94,
        "@super:addListener": _flaxBinding90,
        "@super:removeListener": _flaxBinding91,
        "@super:addStatusListener": _flaxBinding92,
        "@super:removeStatusListener": _flaxBinding93,
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_super_drive,
          genericFactory: _flaxGeneric_AnimationMin_super_drive,
          ownerTypes: [_flaxDefault_AnimationMin_0],
        ),
        "@super:toStringDetails": _flaxBinding95,
        "@super:didRegisterListener": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMin_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMin_super_didUnregisterListener,
        ),
        "@super:clearListeners": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMin_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMin_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _AnimationMin_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod.shared(
          _flaxBinding6,
          _AnimationMin_super_notifyStatusListeners,
        ),
        "@super:get:value": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("num"),
          _AnimationMin_super_get_value,
        ),
        "@super:get:first": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_super_get_next,
        ),
        "@super:get:status": _flaxBinding97,
        "@super:get:isDismissed": _flaxBinding98,
        "@super:get:isCompleted": _flaxBinding99,
        "@super:get:isAnimating": _flaxBinding100,
        "@super:get:isForwardOrCompleted": _flaxBinding101,
        "@super:get:isListening": FlaxInstanceMethod.shared(
          flaxBoolCall,
          _AnimationMin_super_get_isListening,
        ),
      },
      constructors: {"": _flaxBinding266, "@implementation": _flaxBinding266},
      create: _createAnimationMin,
      disposeMethod: null,
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "flax.core/sdk_animation#type:CompoundAnimation",
        "flax.core/sdk_animation#type:Animation",
        "flax.core/flutter#type:Listenable",
        "dart:core::Object",
        "flax.core/flutter#type:ValueListenable",
        "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
        "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
        "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
      ],
      setters: [],
      matches: _isAnimationMin,
      methods: const {},
      proxy: FlaxProxyBinding([
        _flaxBinding267,
        _flaxBinding268,
        _flaxBinding109,
        _flaxBinding103,
        _flaxBinding104,
        _flaxBinding105,
        _flaxBinding106,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback5,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback5Invoke,
            matches: _callback5Matches,
            genericFactory: _callback5Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding110,
        _flaxBinding195,
        _flaxBinding196,
        _flaxBinding198,
        _flaxBinding199,
        _flaxBinding200,
        _flaxBinding201,
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("num"),
            id: "callback:<>()->num:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "first",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>()->object:flax.core/sdk_animation#type:Animation<num:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "next",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>()->object:flax.core/sdk_animation#type:Animation<num:>",
          ),
          hasSuper: true,
        ),
        _flaxBinding111,
        _flaxBinding112,
        _flaxBinding113,
        _flaxBinding114,
        _flaxBinding115,
        _flaxBinding269,
      ]),
    ),
    _flaxBinding330,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:AnimationWithParentMixin",
      [
        FlaxGetter.plain(
          "parent",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationWithParentMixin_parent,
        ),
        _flaxBinding331,
      ],
      {
        "addListener": _flaxBinding332,
        "removeListener": _flaxBinding333,
        "addStatusListener": _flaxBinding334,
        "removeStatusListener": _flaxBinding335,
      },
      constructors: {},
      create: _createAnimationWithParentMixin,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isAnimationWithParentMixin,
      methods: const {},
    ),
    _flaxBinding351,
    _flaxBinding375,
    _flaxBinding396,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:CompoundAnimation",
      [
        _flaxBinding397,
        FlaxGetter.plain(
          "value",
          FlaxTypeRef("any", nullable: true),
          _CompoundAnimation_value,
        ),
        _flaxBinding398,
        _flaxBinding399,
        _flaxBinding400,
        _flaxBinding401,
        _flaxBinding234,
        FlaxGetter.plain(
          "first",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_first,
        ),
        FlaxGetter.plain(
          "next",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_next,
        ),
      ],
      {
        "addListener": _flaxBinding402,
        "removeListener": _flaxBinding403,
        "addStatusListener": _flaxBinding404,
        "removeStatusListener": _flaxBinding405,
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_drive,
          genericFactory: _flaxGeneric_CompoundAnimation_drive,
          ownerTypes: [_flaxDefault_CompoundAnimation_0],
        ),
        "toString": _flaxBinding406,
        "toStringDetails": _flaxBinding407,
        "didRegisterListener": _flaxBinding408,
        "didUnregisterListener": _flaxBinding409,
        "didStartListening": _flaxBinding410,
        "didStopListening": _flaxBinding411,
        "clearListeners": _flaxBinding412,
        "notifyListeners": _flaxBinding413,
        "clearStatusListeners": _flaxBinding414,
        "notifyStatusListeners": _flaxBinding415,
        "@super:addListener": _flaxBinding90,
        "@super:removeListener": _flaxBinding91,
        "@super:addStatusListener": _flaxBinding92,
        "@super:removeStatusListener": _flaxBinding93,
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter.required(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_super_drive,
          genericFactory: _flaxGeneric_CompoundAnimation_super_drive,
          ownerTypes: [_flaxDefault_CompoundAnimation_0],
        ),
        "@super:toString": _flaxBinding94,
        "@super:toStringDetails": _flaxBinding95,
        "@super:didRegisterListener": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _CompoundAnimation_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _CompoundAnimation_super_didUnregisterListener,
        ),
        "@super:didStartListening": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _CompoundAnimation_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _CompoundAnimation_super_didStopListening,
        ),
        "@super:clearListeners": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _CompoundAnimation_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _CompoundAnimation_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod.shared(
          flaxVoidCall,
          _CompoundAnimation_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod.shared(
          _flaxBinding6,
          _CompoundAnimation_super_notifyStatusListeners,
        ),
        "@super:get:first": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_super_get_next,
        ),
        "@super:get:status": _flaxBinding97,
        "@super:get:isDismissed": _flaxBinding98,
        "@super:get:isCompleted": _flaxBinding99,
        "@super:get:isAnimating": _flaxBinding100,
        "@super:get:isForwardOrCompleted": _flaxBinding101,
        "@super:get:isListening": FlaxInstanceMethod.shared(
          flaxBoolCall,
          _CompoundAnimation_super_get_isListening,
        ),
      },
      constructors: {"@implementation": _flaxBinding416},
      create: _createCompoundAnimation,
      disposeMethod: null,
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "flax.core/sdk_animation#type:Animation",
        "flax.core/flutter#type:Listenable",
        "dart:core::Object",
        "flax.core/flutter#type:ValueListenable",
        "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
        "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
        "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
      ],
      setters: [],
      matches: _isCompoundAnimation,
      methods: const {},
      proxy: FlaxProxyBinding([
        _flaxBinding103,
        _flaxBinding104,
        _flaxBinding105,
        _flaxBinding106,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback6,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback6Invoke,
            matches: _callback6Matches,
            genericFactory: _callback6Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding109,
        _flaxBinding110,
        _flaxBinding195,
        _flaxBinding196,
        _flaxBinding267,
        _flaxBinding268,
        _flaxBinding198,
        _flaxBinding199,
        _flaxBinding200,
        _flaxBinding201,
        FlaxProxyMember(
          "first",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>()->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "next",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>()->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        _flaxBinding111,
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
        ),
        _flaxBinding112,
        _flaxBinding113,
        _flaxBinding114,
        _flaxBinding115,
        _flaxBinding269,
      ]),
    ),
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:ConstantTween",
      [
        FlaxGetter.plain(
          "begin",
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_begin,
        ),
        FlaxGetter.plain(
          "end",
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_end,
        ),
      ],
      {
        "lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_lerp,
        ),
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_transform,
        ),
        "toString": _flaxBinding417,
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _ConstantTween_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _ConstantTween_chain,
        ),
        "@super:lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_lerp,
        ),
        "@super:transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_transform,
        ),
        "@super:toString": _flaxBinding94,
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _ConstantTween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _ConstantTween_super_chain,
        ),
        "@super:get:begin": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", FlaxTypeRef("any", nullable: true))],
          flaxVoidType,
          _ConstantTween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", FlaxTypeRef("any", nullable: true))],
          flaxVoidType,
          _ConstantTween_super_set_end,
        ),
      },
      constructors: {"": _flaxBinding102, "@implementation": _flaxBinding102},
      create: _createConstantTween,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/sdk_animation#type:Tween",
        "flax.core/sdk_animation#type:Animatable",
        "dart:core::Object",
      ],
      setters: [
        FlaxSetter(
          "begin",
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_set_begin,
        ),
        FlaxSetter(
          "end",
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_set_end,
        ),
      ],
      matches: _isConstantTween,
      methods: const {},
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "lerp",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding109,
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            FlaxTypeRef(
              "object",
              id: "flax.core/sdk_animation#type:Animatable",
            ),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "begin",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "end",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "begin",
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
        FlaxProxyMember(
          "end",
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
      ]),
    ),
    _flaxBinding372,
    _flaxBinding424,
    _flaxBinding441,
    _flaxBinding467,
    _flaxBinding475,
    _flaxBinding481,
    _flaxBinding487,
    _flaxBinding493,
    _flaxBinding503,
    _flaxBinding533,
    _flaxBinding544,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:ParametricCurve",
      [],
      {
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ParametricCurve_transform,
        ),
        "transformInternal": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ParametricCurve_transformInternal,
        ),
        "toString": _flaxBinding545,
        "@super:transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ParametricCurve_super_transform,
        ),
        "@super:transformInternal": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ParametricCurve_super_transformInternal,
        ),
        "@super:toString": _flaxBinding94,
      },
      constructors: {"@implementation": _flaxBinding96},
      create: _createParametricCurve,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isParametricCurve,
      methods: const {},
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "transformInternal",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding109,
      ]),
    ),
    _flaxBinding559,
    _flaxBinding580,
    _flaxBinding592,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:ReverseTween",
      [
        FlaxGetter.plain(
          "begin",
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_begin,
        ),
        FlaxGetter.plain(
          "end",
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_end,
        ),
        FlaxGetter.plain(
          "parent",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Tween"),
          _ReverseTween_parent,
        ),
      ],
      {
        "lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_lerp,
        ),
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_transform,
        ),
        "toString": _flaxBinding593,
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _ReverseTween_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _ReverseTween_chain,
        ),
        "@super:lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_lerp,
        ),
        "@super:transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_transform,
        ),
        "@super:toString": _flaxBinding94,
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _ReverseTween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _ReverseTween_super_chain,
        ),
        "@super:get:parent": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Tween"),
          _ReverseTween_super_get_parent,
        ),
        "@super:get:begin": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", FlaxTypeRef("any", nullable: true))],
          flaxVoidType,
          _ReverseTween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", FlaxTypeRef("any", nullable: true))],
          flaxVoidType,
          _ReverseTween_super_set_end,
        ),
      },
      constructors: {"": _flaxBinding595, "@implementation": _flaxBinding595},
      create: _createReverseTween,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/sdk_animation#type:Tween",
        "flax.core/sdk_animation#type:Animatable",
        "dart:core::Object",
      ],
      setters: [
        FlaxSetter(
          "begin",
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_set_begin,
        ),
        FlaxSetter(
          "end",
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_set_end,
        ),
      ],
      matches: _isReverseTween,
      methods: const {},
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "lerp",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding109,
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            FlaxTypeRef(
              "object",
              id: "flax.core/sdk_animation#type:Animatable",
            ),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "parent",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Tween"),
            id: "callback:<>()->object:flax.core/sdk_animation#type:Tween<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "begin",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "end",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "begin",
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
        FlaxProxyMember(
          "end",
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
      ]),
    ),
    _flaxBinding603,
    _flaxBinding624,
    _flaxBinding636,
    _flaxBinding647,
    _flaxBinding663,
    _flaxBinding671,
    _flaxBinding687,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:Tween",
      [
        FlaxGetter.plain(
          "begin",
          FlaxTypeRef("any", nullable: true),
          _Tween_begin,
        ),
        FlaxGetter.plain("end", FlaxTypeRef("any", nullable: true), _Tween_end),
      ],
      {
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _Tween_transform,
        ),
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _Tween_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Tween_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _Tween_chain,
        ),
        "lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _Tween_lerp,
        ),
        "toString": _flaxBinding688,
        "@super:transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_transform,
        ),
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Tween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _Tween_super_chain,
        ),
        "@super:lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_lerp,
        ),
        "@super:toString": _flaxBinding94,
        "@super:get:begin": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", FlaxTypeRef("any", nullable: true))],
          flaxVoidType,
          _Tween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", FlaxTypeRef("any", nullable: true))],
          flaxVoidType,
          _Tween_super_set_end,
        ),
      },
      constructors: {"": _flaxBinding689, "@implementation": _flaxBinding689},
      create: _createTween,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/sdk_animation#type:Animatable",
        "dart:core::Object",
      ],
      setters: [
        FlaxSetter(
          "begin",
          FlaxTypeRef("any", nullable: true),
          _Tween_set_begin,
        ),
        FlaxSetter("end", FlaxTypeRef("any", nullable: true), _Tween_set_end),
      ],
      matches: _isTween,
      methods: const {},
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            FlaxTypeRef(
              "object",
              id: "flax.core/sdk_animation#type:Animatable",
            ),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "lerp",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding109,
        FlaxProxyMember(
          "begin",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "end",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "begin",
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
        FlaxProxyMember(
          "end",
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
      ]),
    ),
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:TweenSequence",
      [],
      {
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _TweenSequence_transform,
        ),
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _TweenSequence_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _TweenSequence_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _TweenSequence_chain,
        ),
        "toString": _flaxBinding690,
        "@super:transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          FlaxTypeRef("any", nullable: true),
          _TweenSequence_super_transform,
        ),
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          FlaxTypeRef("any", nullable: true),
          _TweenSequence_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _TweenSequence_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _TweenSequence_super_chain,
        ),
        "@super:toString": _flaxBinding94,
      },
      constructors: {"": _flaxBinding694, "@implementation": _flaxBinding694},
      create: _createTweenSequence,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/sdk_animation#type:Animatable",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isTweenSequence,
      methods: const {},
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            FlaxTypeRef(
              "object",
              id: "flax.core/sdk_animation#type:Animatable",
            ),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<any?:>",
          ),
          hasSuper: true,
        ),
        _flaxBinding109,
      ]),
    ),
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:TweenSequenceItem",
      [
        FlaxGetter.plain(
          "tween",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _TweenSequenceItem_tween,
        ),
        _flaxBinding695,
      ],
      {
        "@super:get:tween": FlaxInstanceMethod.plain(
          _flaxBinding96,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _TweenSequenceItem_super_get_tween,
        ),
        "@super:get:weight": FlaxInstanceMethod.shared(
          flaxDoubleCall,
          _TweenSequenceItem_super_get_weight,
        ),
      },
      constructors: {"": _flaxBinding696, "@implementation": _flaxBinding696},
      create: _createTweenSequenceItem,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isTweenSequenceItem,
      methods: const {},
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "tween",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef(
              "object",
              id: "flax.core/sdk_animation#type:Animatable",
            ),
            id: "callback:<>()->object:flax.core/sdk_animation#type:Animatable<any?:>",
          ),
          hasSuper: true,
        ),
        _flaxBinding697,
      ]),
    ),
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_animation#read:kAlwaysCompleteAnimation",
      [],
      _flaxBinding13,
      _read_kAlwaysCompleteAnimation,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#read:kAlwaysDismissedAnimation",
      [],
      _flaxBinding13,
      _read_kAlwaysDismissedAnimation,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStatus.isDismissed%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding1)],
      flaxBoolType,
      _enum_AnimationStatus_get_isDismissed,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStatus.isCompleted%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding1)],
      flaxBoolType,
      _enum_AnimationStatus_get_isCompleted,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStatus.isAnimating%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding1)],
      flaxBoolType,
      _enum_AnimationStatus_get_isAnimating,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStatus.isForwardOrCompleted%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding1)],
      flaxBoolType,
      _enum_AnimationStatus_get_isForwardOrCompleted,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStyle.lerp",
      [
        FlaxParameter.required("a", _flaxBinding21),
        FlaxParameter.required("b", _flaxBinding21),
        FlaxParameter.required("t", flaxDoubleType),
      ],
      _flaxBinding21,
      _AnimationStyle_lerp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:CatmullRomCurve.validateControlPoints",
      [
        FlaxParameter.required("controlPoints", _flaxBinding698),
        FlaxParameter("reasons", _flaxBinding700, required: false),
        FlaxParameter(
          "tension",
          flaxDoubleType,
          required: false,
          defaultValue: 0.0,
        ),
      ],
      flaxBoolType,
      _CatmullRomCurve_validateControlPoints,
    ),
  ],
  constants: [
    FlaxConstantGroup(_flaxBinding22, {
      "flax.core/sdk_animation#read:AnimationStyle.noAnimation":
          api.AnimationStyle.noAnimation,
    }),
  ],
  moduleId: "flax.core/sdk_animation",
  dependencyModules: [
    "flax.core/flutter",
    "flax.core/sdk_dart_ui",
    "flax.core/sdk_foundation",
    "flax.core/sdk_physics",
    "flax.core/sdk_scheduler",
  ],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "call-layouts",
    "dart-type-tokens",
    "engine-type-handles",
    "generic-call-types",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "lazy-js-iterables",
    "native-navigation-objects",
    "native-widget-proxies",
    "proxy-super-constructors",
    "shared-static-readers",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AlwaysStoppedAnimation",
      api.AlwaysStoppedAnimation<Object?>,
      "object",
      typeFactory: _flaxType_AlwaysStoppedAnimation,
      factory: _flaxClass_AlwaysStoppedAnimation,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:Animatable",
      api.Animatable<Object?>,
      "object",
      typeFactory: _flaxType_Animatable,
      factory: _flaxClass_Animatable,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:Animation",
      api.Animation<Object?>,
      "object",
      typeFactory: _flaxType_Animation,
      factory: _flaxClass_Animation,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationBehavior",
      api.AnimationBehavior,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationController",
      api.AnimationController,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationEagerListenerMixin",
      api.AnimationEagerListenerMixin,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
      api.AnimationLazyListenerMixin,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
      api.AnimationLocalListenersMixin,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
      api.AnimationLocalStatusListenersMixin,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationMax",
      api.AnimationMax<num>,
      "object",
      typeFactory: _flaxType_AnimationMax,
      factory: _flaxClass_AnimationMax,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationMean",
      api.AnimationMean,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationMin",
      api.AnimationMin<num>,
      "object",
      typeFactory: _flaxType_AnimationMin,
      factory: _flaxClass_AnimationMin,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationStatus",
      api.AnimationStatus,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationStyle",
      api.AnimationStyle,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:AnimationWithParentMixin",
      api.AnimationWithParentMixin<Object?>,
      "object",
      typeFactory: _flaxType_AnimationWithParentMixin,
      factory: _flaxClass_AnimationWithParentMixin,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:CatmullRomCurve",
      api.CatmullRomCurve,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:CatmullRomSpline",
      api.CatmullRomSpline,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ColorTween",
      api.ColorTween,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:CompoundAnimation",
      api.CompoundAnimation<Object?>,
      "object",
      typeFactory: _flaxType_CompoundAnimation,
      factory: _flaxClass_CompoundAnimation,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ConstantTween",
      api.ConstantTween<Object?>,
      "object",
      typeFactory: _flaxType_ConstantTween,
      factory: _flaxClass_ConstantTween,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:Curve2D",
      api.Curve2D,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:Curve2DSample",
      api.Curve2DSample,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:CurveTween",
      api.CurveTween,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:CurvedAnimation",
      api.CurvedAnimation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ElasticInCurve",
      api.ElasticInCurve,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ElasticInOutCurve",
      api.ElasticInOutCurve,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ElasticOutCurve",
      api.ElasticOutCurve,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:FlippedCurve",
      api.FlippedCurve,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:FlippedTweenSequence",
      api.FlippedTweenSequence,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:IntTween",
      api.IntTween,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:Interval",
      api.Interval,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ParametricCurve",
      api.ParametricCurve<Object?>,
      "object",
      typeFactory: _flaxType_ParametricCurve,
      factory: _flaxClass_ParametricCurve,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ProxyAnimation",
      api.ProxyAnimation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:RectTween",
      api.RectTween,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ReverseAnimation",
      api.ReverseAnimation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ReverseTween",
      api.ReverseTween<Object?>,
      "object",
      typeFactory: _flaxType_ReverseTween,
      factory: _flaxClass_ReverseTween,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:SawTooth",
      api.SawTooth,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:SizeTween",
      api.SizeTween,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:Split",
      api.Split,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:StepTween",
      api.StepTween,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:ThreePointCubic",
      api.ThreePointCubic,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:Threshold",
      api.Threshold,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:TrainHoppingAnimation",
      api.TrainHoppingAnimation,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:Tween",
      api.Tween<Object?>,
      "object",
      typeFactory: _flaxType_Tween,
      factory: _flaxClass_Tween,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:TweenSequence",
      api.TweenSequence<Object?>,
      "object",
      typeFactory: _flaxType_TweenSequence,
      factory: _flaxClass_TweenSequence,
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_animation#type:TweenSequenceItem",
      api.TweenSequenceItem<Object?>,
      "object",
      typeFactory: _flaxType_TweenSequenceItem,
      factory: _flaxClass_TweenSequenceItem,
    ),
  ],
  dartShapes: _flaxDartShapes,
);
final sdk_animationPlugin = FlaxBindingPlugin(
  id: "binding:flax.core/sdk_animation",
  bindingModules: [sdk_animationBindings],
  jsModules: {"@flax/flutter/animation", "@flax/flutter/widgets"},
);
Object? _read_kAlwaysCompleteAnimation(Map<String, Object?> values) =>
    api.kAlwaysCompleteAnimation;
Object? _read_kAlwaysDismissedAnimation(Map<String, Object?> values) =>
    api.kAlwaysDismissedAnimation;
bool _isAlwaysStoppedAnimation(Object value) =>
    value is api.AlwaysStoppedAnimation<Object?>;
Object? _AlwaysStoppedAnimation_status(Object value) =>
    (value as api.AlwaysStoppedAnimation<Object?>).status;
Object? _AlwaysStoppedAnimation_value(Object value) =>
    (value as api.AlwaysStoppedAnimation<Object?>).value;
Object? _AlwaysStoppedAnimation_isDismissed(Object value) =>
    (value as api.AlwaysStoppedAnimation<Object?>).isDismissed;
Object? _AlwaysStoppedAnimation_isCompleted(Object value) =>
    (value as api.AlwaysStoppedAnimation<Object?>).isCompleted;
Object? _AlwaysStoppedAnimation_isAnimating(Object value) =>
    (value as api.AlwaysStoppedAnimation<Object?>).isAnimating;
Object? _AlwaysStoppedAnimation_isForwardOrCompleted(Object value) =>
    (value as api.AlwaysStoppedAnimation<Object?>).isForwardOrCompleted;
Object? _AlwaysStoppedAnimation_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AlwaysStoppedAnimation<Object?>).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AlwaysStoppedAnimation_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AlwaysStoppedAnimation<Object?>).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AlwaysStoppedAnimation_addStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AlwaysStoppedAnimation<Object?>).addStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AlwaysStoppedAnimation_removeStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AlwaysStoppedAnimation<Object?>).removeStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AlwaysStoppedAnimation_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AlwaysStoppedAnimation<Object?>).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _AlwaysStoppedAnimation_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AlwaysStoppedAnimation<Object?>).toString();
}

Object? _AlwaysStoppedAnimation_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AlwaysStoppedAnimation<Object?>).toStringDetails();
}

Object? _FlaxProxyDispatch0_super_call_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch0)._flaxSuper_addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _FlaxProxyDispatch0_super_call_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch0)._flaxSuper_removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _FlaxProxyDispatch0_super_call_addStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch0)._flaxSuper_addStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _FlaxProxyDispatch0_super_call_removeStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch0)._flaxSuper_removeStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AlwaysStoppedAnimation_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AlwaysStoppedAnimationProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _FlaxProxyDispatch1_super_call_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch1)._flaxSuper_toString();
}

Object? _FlaxProxyDispatch2_super_call_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch2)._flaxSuper_toStringDetails();
}

Object? _AlwaysStoppedAnimation_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AlwaysStoppedAnimationProxy)._flaxSuperGet_value;
Object? _FlaxProxyDispatch0_super_get_status(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch0)._flaxSuperGet_status;
Object? _FlaxProxyDispatch2_super_get_isDismissed(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch2)._flaxSuperGet_isDismissed;
Object? _FlaxProxyDispatch2_super_get_isCompleted(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch2)._flaxSuperGet_isCompleted;
Object? _FlaxProxyDispatch2_super_get_isAnimating(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch2)._flaxSuperGet_isAnimating;
Object? _FlaxProxyDispatch2_super_get_isForwardOrCompleted(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch2)._flaxSuperGet_isForwardOrCompleted;
Object _createAlwaysStoppedAnimation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AlwaysStoppedAnimation<Object?>(values["value"]);
    case '@implementation':
      return _AlwaysStoppedAnimationProxy<Object?>(
        values['@peer'] as FlaxProxyPeer,
        values["value"],
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAnimatable(Object value) => value is api.Animatable<Object?>;
Object? _Animatable_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Animatable<Object?>).transform(values["t"] as double);
}

Object? _Animatable_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Animatable<Object?>).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _Animatable_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Animatable<Object?>).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _Animatable_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Animatable<Object?>).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _Animatable_super_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimatableProxy)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _Animatable_super_animate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimatableProxy)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _Animatable_super_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as _AnimatableProxy)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object _createAnimatable(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "fromCallback":
      return api.Animatable<Object?>.fromCallback(
        values["callback"] as Object? Function(double value),
      );
    case '@implementation':
      return _AnimatableProxy<Object?>(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAnimation(Object value) => value is api.Animation<Object?>;
Object? _Animation_value(Object value) =>
    (value as api.Animation<Object?>).value;
Object? _Animation_status(Object value) =>
    (value as api.Animation<Object?>).status;
Object? _Animation_isDismissed(Object value) =>
    (value as api.Animation<Object?>).isDismissed;
Object? _Animation_isCompleted(Object value) =>
    (value as api.Animation<Object?>).isCompleted;
Object? _Animation_isAnimating(Object value) =>
    (value as api.Animation<Object?>).isAnimating;
Object? _Animation_isForwardOrCompleted(Object value) =>
    (value as api.Animation<Object?>).isForwardOrCompleted;
Object? _Animation_addListener(Object receiver, Map<String, Object?> values) {
  (receiver as api.Animation<Object?>).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _Animation_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Animation<Object?>).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _Animation_addStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Animation<Object?>).addStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _Animation_removeStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Animation<Object?>).removeStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _Animation_drive(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Animation<Object?>).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _Animation_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Animation<Object?>).toString();
}

Object? _Animation_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Animation<Object?>).toStringDetails();
}

Object? _Animation_super_drive(Object receiver, Map<String, Object?> values) {
  return (receiver as _AnimationProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object _createAnimation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "fromValueListenable":
      return api.Animation<Object?>.fromValueListenable(
        values["listenable"] as api2.ValueListenable<Object?>,
        transformer: values["transformer"] as Object? Function(Object? p0)?,
      );
    case '@implementation':
      return _AnimationProxy<Object?>(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAnimationController(Object value) => value is api.AnimationController;
Object? _AnimationController_status(Object value) =>
    (value as api.AnimationController).status;
Object? _AnimationController_value(Object value) =>
    (value as api.AnimationController).value;
Object? _AnimationController_isDismissed(Object value) =>
    (value as api.AnimationController).isDismissed;
Object? _AnimationController_isCompleted(Object value) =>
    (value as api.AnimationController).isCompleted;
Object? _AnimationController_isAnimating(Object value) =>
    (value as api.AnimationController).isAnimating;
Object? _AnimationController_isForwardOrCompleted(Object value) =>
    (value as api.AnimationController).isForwardOrCompleted;
Object? _AnimationController_lowerBound(Object value) =>
    (value as api.AnimationController).lowerBound;
Object? _AnimationController_upperBound(Object value) =>
    (value as api.AnimationController).upperBound;
Object? _AnimationController_debugLabel(Object value) =>
    (value as api.AnimationController).debugLabel;
Object? _AnimationController_animationBehavior(Object value) =>
    (value as api.AnimationController).animationBehavior;
Object? _AnimationController_view(Object value) =>
    (value as api.AnimationController).view;
Object? _AnimationController_duration(Object value) =>
    (value as api.AnimationController).duration;
Object? _AnimationController_reverseDuration(Object value) =>
    (value as api.AnimationController).reverseDuration;
Object? _AnimationController_velocity(Object value) =>
    (value as api.AnimationController).velocity;
Object? _AnimationController_lastElapsedDuration(Object value) =>
    (value as api.AnimationController).lastElapsedDuration;
void _AnimationController_set_duration(Object receiver, Object? value) {
  (receiver as api.AnimationController).duration = value as api3.Duration?;
}

void _AnimationController_set_reverseDuration(Object receiver, Object? value) {
  (receiver as api.AnimationController).reverseDuration =
      value as api3.Duration?;
}

void _AnimationController_set_value(Object receiver, Object? value) {
  (receiver as api.AnimationController).value = value as double;
}

Object? _AnimationController_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _AnimationController_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).toString();
}

Object? _AnimationController_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).toStringDetails();
}

Object? _AnimationController_resync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationController).resync(
    values["vsync"] as api6.TickerProvider,
  );
  return null;
}

Object? _AnimationController_reset(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationController).reset();
  return null;
}

Object? _AnimationController_forward(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).forward(
    from: values["from"] as double?,
  );
}

Object? _AnimationController_reverse(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).reverse(
    from: values["from"] as double?,
  );
}

Object? _AnimationController_toggle(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).toggle(
    from: values["from"] as double?,
  );
}

Object? _AnimationController_animateTo(
  Object receiver,
  Map<String, Object?> values,
) {
  final _flaxHas1 = values.containsKey("curve");
  return flaxInvokeWithDefaults(
    (receiver as api.AnimationController).animateTo,
    <Object?>[
      values["target"] as double,
      (_flaxHas1 ? values["curve"] as api.Curve : null),
      values["duration"] as api3.Duration?,
    ],
    <int>[1 | (_flaxHas1 ? 2 : 0) | 4],
    const <String>["", "curve", "duration"],
  ) as api6.TickerFuture;
}

Object? _AnimationController_animateBack(
  Object receiver,
  Map<String, Object?> values,
) {
  final _flaxHas1 = values.containsKey("curve");
  return flaxInvokeWithDefaults(
    (receiver as api.AnimationController).animateBack,
    <Object?>[
      values["target"] as double,
      (_flaxHas1 ? values["curve"] as api.Curve : null),
      values["duration"] as api3.Duration?,
    ],
    <int>[1 | (_flaxHas1 ? 2 : 0) | 4],
    const <String>["", "curve", "duration"],
  ) as api6.TickerFuture;
}

Object? _AnimationController_repeat(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).repeat(
    count: values["count"] as int?,
    max: values["max"] as double?,
    min: values["min"] as double?,
    period: values["period"] as api3.Duration?,
    reverse: values["reverse"] as bool,
  );
}

Object? _AnimationController_fling(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).fling(
    animationBehavior: values["animationBehavior"] as api.AnimationBehavior?,
    springDescription: values["springDescription"] as api5.SpringDescription?,
    velocity: values["velocity"] as double,
  );
}

Object? _AnimationController_animateWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).animateWith(
    values["simulation"] as api5.Simulation,
  );
}

Object? _AnimationController_animateBackWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).animateBackWith(
    values["simulation"] as api5.Simulation,
  );
}

Object? _AnimationController_stop(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationController).stop(
    canceled: values["canceled"] as bool,
  );
  return null;
}

Object? _AnimationController_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationControllerProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _AnimationController_super_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_didRegisterListener();
  return null;
}

Object? _AnimationController_super_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_didUnregisterListener();
  return null;
}

Object? _AnimationController_super_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_dispose();
  return null;
}

Object? _AnimationController_super_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_clearListeners();
  return null;
}

Object? _AnimationController_super_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_notifyListeners();
  return null;
}

Object? _AnimationController_super_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_clearStatusListeners();
  return null;
}

Object? _AnimationController_super_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _AnimationController_super_resync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_resync(
    values["vsync"] as api6.TickerProvider,
  );
  return null;
}

Object? _AnimationController_super_reset(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_reset();
  return null;
}

Object? _AnimationController_super_forward(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationControllerProxy)._flaxSuper_forward(
    from: values["from"] as double?,
  );
}

Object? _AnimationController_super_reverse(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationControllerProxy)._flaxSuper_reverse(
    from: values["from"] as double?,
  );
}

Object? _AnimationController_super_toggle(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationControllerProxy)._flaxSuper_toggle(
    from: values["from"] as double?,
  );
}

Object? _AnimationController_super_animateTo(
  Object receiver,
  Map<String, Object?> values,
) {
  final _flaxHas1 = values.containsKey("curve");
  return flaxInvokeWithDefaults(
    (receiver as _AnimationControllerProxy)._flaxSuper_animateTo,
    <Object?>[
      values["target"] as double,
      (_flaxHas1 ? values["curve"] as api.Curve : null),
      values["duration"] as api3.Duration?,
    ],
    <int>[1 | (_flaxHas1 ? 2 : 0) | 4],
    const <String>["", "curve", "duration"],
  ) as api6.TickerFuture;
}

Object? _AnimationController_super_animateBack(
  Object receiver,
  Map<String, Object?> values,
) {
  final _flaxHas1 = values.containsKey("curve");
  return flaxInvokeWithDefaults(
    (receiver as _AnimationControllerProxy)._flaxSuper_animateBack,
    <Object?>[
      values["target"] as double,
      (_flaxHas1 ? values["curve"] as api.Curve : null),
      values["duration"] as api3.Duration?,
    ],
    <int>[1 | (_flaxHas1 ? 2 : 0) | 4],
    const <String>["", "curve", "duration"],
  ) as api6.TickerFuture;
}

Object? _AnimationController_super_repeat(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationControllerProxy)._flaxSuper_repeat(
    count: values["count"] as int?,
    max: values["max"] as double?,
    min: values["min"] as double?,
    period: values["period"] as api3.Duration?,
    reverse: values["reverse"] as bool,
  );
}

Object? _AnimationController_super_fling(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationControllerProxy)._flaxSuper_fling(
    animationBehavior: values["animationBehavior"] as api.AnimationBehavior?,
    springDescription: values["springDescription"] as api5.SpringDescription?,
    velocity: values["velocity"] as double,
  );
}

Object? _AnimationController_super_animateWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationControllerProxy)._flaxSuper_animateWith(
    values["simulation"] as api5.Simulation,
  );
}

Object? _AnimationController_super_animateBackWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationControllerProxy)._flaxSuper_animateBackWith(
    values["simulation"] as api5.Simulation,
  );
}

Object? _AnimationController_super_stop(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuper_stop(
    canceled: values["canceled"] as bool,
  );
  return null;
}

Object? _AnimationController_super_get_lowerBound(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_lowerBound;
Object? _AnimationController_super_get_upperBound(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_upperBound;
Object? _AnimationController_super_get_debugLabel(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_debugLabel;
Object? _AnimationController_super_get_animationBehavior(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_animationBehavior;
Object? _AnimationController_super_get_view(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_view;
Object? _AnimationController_super_get_duration(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_duration;
Object? _AnimationController_super_get_reverseDuration(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_reverseDuration;
Object? _AnimationController_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_value;
Object? _AnimationController_super_get_velocity(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_velocity;
Object? _AnimationController_super_get_lastElapsedDuration(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationControllerProxy)._flaxSuperGet_lastElapsedDuration;
Object? _AnimationController_super_set_duration(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuperSet_duration(
    values["value"] as api3.Duration?,
  );
  return null;
}

Object? _AnimationController_super_set_reverseDuration(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuperSet_reverseDuration(
    values["value"] as api3.Duration?,
  );
  return null;
}

Object? _AnimationController_super_set_value(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuperSet_value(
    values["value"] as double,
  );
  return null;
}

Object _createAnimationController(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AnimationController(
        value: values["value"] as double?,
        duration: values["duration"] as api3.Duration?,
        reverseDuration: values["reverseDuration"] as api3.Duration?,
        debugLabel: values["debugLabel"] as String?,
        lowerBound: values["lowerBound"] as double,
        upperBound: values["upperBound"] as double,
        animationBehavior: values["animationBehavior"] as api.AnimationBehavior,
        vsync: values["vsync"] as api6.TickerProvider,
      );
    case "unbounded":
      return api.AnimationController.unbounded(
        value: values["value"] as double,
        duration: values["duration"] as api3.Duration?,
        reverseDuration: values["reverseDuration"] as api3.Duration?,
        debugLabel: values["debugLabel"] as String?,
        vsync: values["vsync"] as api6.TickerProvider,
        animationBehavior: values["animationBehavior"] as api.AnimationBehavior,
      );
    case '@implementation':
      return _AnimationControllerProxy(
        values['@peer'] as FlaxProxyPeer,
        value: values["value"] as double?,
        duration: values["duration"] as api3.Duration?,
        reverseDuration: values["reverseDuration"] as api3.Duration?,
        debugLabel: values["debugLabel"] as String?,
        lowerBound: values["lowerBound"] as double,
        upperBound: values["upperBound"] as double,
        animationBehavior: values["animationBehavior"] as api.AnimationBehavior,
        vsync: values["vsync"] as api6.TickerProvider,
      );
    case "@implementation:unbounded":
      return _AnimationControllerProxy.unbounded(
        values['@peer'] as FlaxProxyPeer,
        value: values["value"] as double,
        duration: values["duration"] as api3.Duration?,
        reverseDuration: values["reverseDuration"] as api3.Duration?,
        debugLabel: values["debugLabel"] as String?,
        vsync: values["vsync"] as api6.TickerProvider,
        animationBehavior: values["animationBehavior"] as api.AnimationBehavior,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAnimationEagerListenerMixin(Object value) =>
    value is api.AnimationEagerListenerMixin;
Object? _AnimationEagerListenerMixin_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationEagerListenerMixin).didRegisterListener();
  return null;
}

Object? _AnimationEagerListenerMixin_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationEagerListenerMixin).didUnregisterListener();
  return null;
}

Object? _AnimationEagerListenerMixin_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationEagerListenerMixin).dispose();
  return null;
}

Object _createAnimationEagerListenerMixin(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isAnimationLazyListenerMixin(Object value) =>
    value is api.AnimationLazyListenerMixin;
Object? _AnimationLazyListenerMixin_isListening(Object value) =>
    (value as api.AnimationLazyListenerMixin).isListening;
Object? _AnimationLazyListenerMixin_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLazyListenerMixin).didRegisterListener();
  return null;
}

Object? _AnimationLazyListenerMixin_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLazyListenerMixin).didUnregisterListener();
  return null;
}

Object? _AnimationLazyListenerMixin_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLazyListenerMixin).didStartListening();
  return null;
}

Object? _AnimationLazyListenerMixin_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLazyListenerMixin).didStopListening();
  return null;
}

Object _createAnimationLazyListenerMixin(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isAnimationLocalListenersMixin(Object value) =>
    value is api.AnimationLocalListenersMixin;
Object? _AnimationLocalListenersMixin_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalListenersMixin).didRegisterListener();
  return null;
}

Object? _AnimationLocalListenersMixin_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalListenersMixin).didUnregisterListener();
  return null;
}

Object? _AnimationLocalListenersMixin_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalListenersMixin).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AnimationLocalListenersMixin_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalListenersMixin).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AnimationLocalListenersMixin_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalListenersMixin).clearListeners();
  return null;
}

Object? _AnimationLocalListenersMixin_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalListenersMixin).notifyListeners();
  return null;
}

Object _createAnimationLocalListenersMixin(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isAnimationLocalStatusListenersMixin(Object value) =>
    value is api.AnimationLocalStatusListenersMixin;
Object? _AnimationLocalStatusListenersMixin_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalStatusListenersMixin).didRegisterListener();
  return null;
}

Object? _AnimationLocalStatusListenersMixin_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalStatusListenersMixin).didUnregisterListener();
  return null;
}

Object? _AnimationLocalStatusListenersMixin_addStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalStatusListenersMixin).addStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AnimationLocalStatusListenersMixin_removeStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalStatusListenersMixin).removeStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AnimationLocalStatusListenersMixin_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalStatusListenersMixin).clearStatusListeners();
  return null;
}

Object? _AnimationLocalStatusListenersMixin_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationLocalStatusListenersMixin).notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object _createAnimationLocalStatusListenersMixin(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isAnimationMax(Object value) => value is api.AnimationMax<num>;
Object? _AnimationMax_first(Object value) =>
    (value as api.AnimationMax<num>).first;
Object? _AnimationMax_next(Object value) =>
    (value as api.AnimationMax<num>).next;
Object? _AnimationMax_status(Object value) =>
    (value as api.AnimationMax<num>).status;
Object? _AnimationMax_value(Object value) =>
    (value as api.AnimationMax<num>).value;
Object? _AnimationMax_isDismissed(Object value) =>
    (value as api.AnimationMax<num>).isDismissed;
Object? _AnimationMax_isCompleted(Object value) =>
    (value as api.AnimationMax<num>).isCompleted;
Object? _AnimationMax_isAnimating(Object value) =>
    (value as api.AnimationMax<num>).isAnimating;
Object? _AnimationMax_isForwardOrCompleted(Object value) =>
    (value as api.AnimationMax<num>).isForwardOrCompleted;
Object? _AnimationMax_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).didStartListening();
  return null;
}

Object? _AnimationMax_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).didStopListening();
  return null;
}

Object? _AnimationMax_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationMax<num>).toString();
}

Object? _AnimationMax_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AnimationMax_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AnimationMax_addStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).addStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AnimationMax_removeStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).removeStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AnimationMax_drive(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationMax<num>).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _AnimationMax_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationMax<num>).toStringDetails();
}

Object? _AnimationMax_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).didRegisterListener();
  return null;
}

Object? _AnimationMax_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).didUnregisterListener();
  return null;
}

Object? _AnimationMax_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).clearListeners();
  return null;
}

Object? _AnimationMax_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).notifyListeners();
  return null;
}

Object? _AnimationMax_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).clearStatusListeners();
  return null;
}

Object? _AnimationMax_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMax<num>).notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _AnimationMax_super_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMaxProxy)._flaxSuper_didStartListening();
  return null;
}

Object? _AnimationMax_super_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMaxProxy)._flaxSuper_didStopListening();
  return null;
}

Object? _AnimationMax_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationMaxProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _AnimationMax_super_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMaxProxy)._flaxSuper_didRegisterListener();
  return null;
}

Object? _AnimationMax_super_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMaxProxy)._flaxSuper_didUnregisterListener();
  return null;
}

Object? _AnimationMax_super_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMaxProxy)._flaxSuper_clearListeners();
  return null;
}

Object? _AnimationMax_super_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMaxProxy)._flaxSuper_notifyListeners();
  return null;
}

Object? _AnimationMax_super_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMaxProxy)._flaxSuper_clearStatusListeners();
  return null;
}

Object? _AnimationMax_super_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMaxProxy)._flaxSuper_notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _AnimationMax_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMaxProxy)._flaxSuperGet_value;
Object? _AnimationMax_super_get_first(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMaxProxy)._flaxSuperGet_first;
Object? _AnimationMax_super_get_next(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMaxProxy)._flaxSuperGet_next;
Object? _AnimationMax_super_get_isListening(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMaxProxy)._flaxSuperGet_isListening;
Object _createAnimationMax(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AnimationMax<num>(
        values["first"] as api.Animation<num>,
        values["next"] as api.Animation<num>,
      );
    case '@implementation':
      return _AnimationMaxProxy<num>(
        values['@peer'] as FlaxProxyPeer,
        values["first"] as api.Animation<num>,
        values["next"] as api.Animation<num>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAnimationMean(Object value) => value is api.AnimationMean;
Object? _AnimationMean_first(Object value) =>
    (value as api.AnimationMean).first;
Object? _AnimationMean_next(Object value) => (value as api.AnimationMean).next;
Object? _AnimationMean_status(Object value) =>
    (value as api.AnimationMean).status;
Object? _AnimationMean_value(Object value) =>
    (value as api.AnimationMean).value;
Object? _AnimationMean_isDismissed(Object value) =>
    (value as api.AnimationMean).isDismissed;
Object? _AnimationMean_isCompleted(Object value) =>
    (value as api.AnimationMean).isCompleted;
Object? _AnimationMean_isAnimating(Object value) =>
    (value as api.AnimationMean).isAnimating;
Object? _AnimationMean_isForwardOrCompleted(Object value) =>
    (value as api.AnimationMean).isForwardOrCompleted;
Object? _AnimationMean_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationMean).toString();
}

Object? _AnimationMean_drive(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationMean).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _AnimationMean_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationMean).toStringDetails();
}

Object? _AnimationMean_super_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMeanProxy)._flaxSuper_didStartListening();
  return null;
}

Object? _AnimationMean_super_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMeanProxy)._flaxSuper_didStopListening();
  return null;
}

Object? _AnimationMean_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationMeanProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _AnimationMean_super_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMeanProxy)._flaxSuper_didRegisterListener();
  return null;
}

Object? _AnimationMean_super_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMeanProxy)._flaxSuper_didUnregisterListener();
  return null;
}

Object? _AnimationMean_super_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMeanProxy)._flaxSuper_clearListeners();
  return null;
}

Object? _AnimationMean_super_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMeanProxy)._flaxSuper_notifyListeners();
  return null;
}

Object? _AnimationMean_super_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMeanProxy)._flaxSuper_clearStatusListeners();
  return null;
}

Object? _AnimationMean_super_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMeanProxy)._flaxSuper_notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _AnimationMean_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMeanProxy)._flaxSuperGet_value;
Object? _AnimationMean_super_get_first(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMeanProxy)._flaxSuperGet_first;
Object? _AnimationMean_super_get_next(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMeanProxy)._flaxSuperGet_next;
Object? _AnimationMean_super_get_isListening(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMeanProxy)._flaxSuperGet_isListening;
Object _createAnimationMean(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AnimationMean(
        left: values["left"] as api.Animation<double>,
        right: values["right"] as api.Animation<double>,
      );
    case '@implementation':
      return _AnimationMeanProxy(
        values['@peer'] as FlaxProxyPeer,
        left: values["left"] as api.Animation<double>,
        right: values["right"] as api.Animation<double>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAnimationMin(Object value) => value is api.AnimationMin<num>;
Object? _AnimationMin_first(Object value) =>
    (value as api.AnimationMin<num>).first;
Object? _AnimationMin_next(Object value) =>
    (value as api.AnimationMin<num>).next;
Object? _AnimationMin_status(Object value) =>
    (value as api.AnimationMin<num>).status;
Object? _AnimationMin_value(Object value) =>
    (value as api.AnimationMin<num>).value;
Object? _AnimationMin_isDismissed(Object value) =>
    (value as api.AnimationMin<num>).isDismissed;
Object? _AnimationMin_isCompleted(Object value) =>
    (value as api.AnimationMin<num>).isCompleted;
Object? _AnimationMin_isAnimating(Object value) =>
    (value as api.AnimationMin<num>).isAnimating;
Object? _AnimationMin_isForwardOrCompleted(Object value) =>
    (value as api.AnimationMin<num>).isForwardOrCompleted;
Object? _AnimationMin_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).didStartListening();
  return null;
}

Object? _AnimationMin_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).didStopListening();
  return null;
}

Object? _AnimationMin_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationMin<num>).toString();
}

Object? _AnimationMin_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AnimationMin_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AnimationMin_addStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).addStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AnimationMin_removeStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).removeStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AnimationMin_drive(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationMin<num>).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _AnimationMin_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationMin<num>).toStringDetails();
}

Object? _AnimationMin_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).didRegisterListener();
  return null;
}

Object? _AnimationMin_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).didUnregisterListener();
  return null;
}

Object? _AnimationMin_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).clearListeners();
  return null;
}

Object? _AnimationMin_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).notifyListeners();
  return null;
}

Object? _AnimationMin_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).clearStatusListeners();
  return null;
}

Object? _AnimationMin_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationMin<num>).notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _AnimationMin_super_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMinProxy)._flaxSuper_didStartListening();
  return null;
}

Object? _AnimationMin_super_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMinProxy)._flaxSuper_didStopListening();
  return null;
}

Object? _AnimationMin_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationMinProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _AnimationMin_super_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMinProxy)._flaxSuper_didRegisterListener();
  return null;
}

Object? _AnimationMin_super_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMinProxy)._flaxSuper_didUnregisterListener();
  return null;
}

Object? _AnimationMin_super_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMinProxy)._flaxSuper_clearListeners();
  return null;
}

Object? _AnimationMin_super_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMinProxy)._flaxSuper_notifyListeners();
  return null;
}

Object? _AnimationMin_super_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMinProxy)._flaxSuper_clearStatusListeners();
  return null;
}

Object? _AnimationMin_super_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationMinProxy)._flaxSuper_notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _AnimationMin_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMinProxy)._flaxSuperGet_value;
Object? _AnimationMin_super_get_first(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMinProxy)._flaxSuperGet_first;
Object? _AnimationMin_super_get_next(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMinProxy)._flaxSuperGet_next;
Object? _AnimationMin_super_get_isListening(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationMinProxy)._flaxSuperGet_isListening;
Object _createAnimationMin(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AnimationMin<num>(
        values["first"] as api.Animation<num>,
        values["next"] as api.Animation<num>,
      );
    case '@implementation':
      return _AnimationMinProxy<num>(
        values['@peer'] as FlaxProxyPeer,
        values["first"] as api.Animation<num>,
        values["next"] as api.Animation<num>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object? _enum_AnimationStatus_get_isDismissed(Map<String, Object?> values) =>
    (values["receiver"] as api.AnimationStatus).isDismissed;
Object? _enum_AnimationStatus_get_isCompleted(Map<String, Object?> values) =>
    (values["receiver"] as api.AnimationStatus).isCompleted;
Object? _enum_AnimationStatus_get_isAnimating(Map<String, Object?> values) =>
    (values["receiver"] as api.AnimationStatus).isAnimating;
Object? _enum_AnimationStatus_get_isForwardOrCompleted(
  Map<String, Object?> values,
) => (values["receiver"] as api.AnimationStatus).isForwardOrCompleted;
bool _isAnimationStyle(Object value) => value is api.AnimationStyle;
Object? _AnimationStyle_curve(Object value) =>
    (value as api.AnimationStyle).curve;
Object? _AnimationStyle_duration(Object value) =>
    (value as api.AnimationStyle).duration;
Object? _AnimationStyle_reverseCurve(Object value) =>
    (value as api.AnimationStyle).reverseCurve;
Object? _AnimationStyle_reverseDuration(Object value) =>
    (value as api.AnimationStyle).reverseDuration;
Object? _AnimationStyle_lerp(Map<String, Object?> values) {
  return api.AnimationStyle.lerp(
    values["a"] as api.AnimationStyle?,
    values["b"] as api.AnimationStyle?,
    values["t"] as double,
  );
}

Object? _AnimationStyle_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationStyle).toStringShort();
}

Object? _AnimationStyle_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationStyle).toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _AnimationStyle_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationStyle).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _AnimationStyle_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationStyle).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _AnimationStyle_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationStyle).copyWith(
    curve: values["curve"] as api.Curve?,
    duration: values["duration"] as api3.Duration?,
    reverseCurve: values["reverseCurve"] as api.Curve?,
    reverseDuration: values["reverseDuration"] as api3.Duration?,
  );
}

Object? _AnimationStyle_merge(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationStyle).merge(
    values["other"] as api.AnimationStyle?,
  );
}

Object? _AnimationStyle_super_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationStyleProxy)._flaxSuper_toStringShort();
}

Object? _AnimationStyle_super_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationStyleProxy)._flaxSuper_toString(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _AnimationStyle_super_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationStyleProxy)._flaxSuper_toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _AnimationStyle_super_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationStyleProxy)._flaxSuper_debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _AnimationStyle_super_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationStyleProxy)._flaxSuper_copyWith(
    curve: values["curve"] as api.Curve?,
    duration: values["duration"] as api3.Duration?,
    reverseCurve: values["reverseCurve"] as api.Curve?,
    reverseDuration: values["reverseDuration"] as api3.Duration?,
  );
}

Object? _AnimationStyle_super_merge(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationStyleProxy)._flaxSuper_merge(
    values["other"] as api.AnimationStyle?,
  );
}

Object? _AnimationStyle_super_get_curve(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationStyleProxy)._flaxSuperGet_curve;
Object? _AnimationStyle_super_get_duration(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationStyleProxy)._flaxSuperGet_duration;
Object? _AnimationStyle_super_get_reverseCurve(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationStyleProxy)._flaxSuperGet_reverseCurve;
Object? _AnimationStyle_super_get_reverseDuration(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AnimationStyleProxy)._flaxSuperGet_reverseDuration;
Object _createAnimationStyle(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AnimationStyle(
        curve: values["curve"] as api.Curve?,
        duration: values["duration"] as api3.Duration?,
        reverseCurve: values["reverseCurve"] as api.Curve?,
        reverseDuration: values["reverseDuration"] as api3.Duration?,
      );
    case '@implementation':
      return _AnimationStyleProxy(
        values['@peer'] as FlaxProxyPeer,
        curve: values["curve"] as api.Curve?,
        duration: values["duration"] as api3.Duration?,
        reverseCurve: values["reverseCurve"] as api.Curve?,
        reverseDuration: values["reverseDuration"] as api3.Duration?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAnimationWithParentMixin(Object value) =>
    value is api.AnimationWithParentMixin<Object?>;
Object? _AnimationWithParentMixin_parent(Object value) =>
    (value as api.AnimationWithParentMixin<Object?>).parent;
Object? _AnimationWithParentMixin_status(Object value) =>
    (value as api.AnimationWithParentMixin<Object?>).status;
Object? _AnimationWithParentMixin_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationWithParentMixin<Object?>).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AnimationWithParentMixin_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationWithParentMixin<Object?>).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _AnimationWithParentMixin_addStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationWithParentMixin<Object?>).addStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _AnimationWithParentMixin_removeStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationWithParentMixin<Object?>).removeStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object _createAnimationWithParentMixin(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isCatmullRomCurve(Object value) => value is api.CatmullRomCurve;
Object? _CatmullRomCurve_flipped(Object value) =>
    (value as api.CatmullRomCurve).flipped;
Object? _CatmullRomCurve_controlPoints(Object value) =>
    (value as api.CatmullRomCurve).controlPoints;
Object? _CatmullRomCurve_tension(Object value) =>
    (value as api.CatmullRomCurve).tension;
Object? _CatmullRomCurve_validateControlPoints(Map<String, Object?> values) {
  return api.CatmullRomCurve.validateControlPoints(
    values["controlPoints"] as List<api1.Offset>?,
    reasons: values["reasons"] as List<String>?,
    tension: values["tension"] as double,
  );
}

Object? _CatmullRomCurve_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CatmullRomCurve).transform(values["t"] as double);
}

Object? _CatmullRomCurve_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CatmullRomCurve).transformInternal(
    values["t"] as double,
  );
}

Object? _CatmullRomCurve_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CatmullRomCurve).toString();
}

Object? _FlaxProxyDispatch10_super_call_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch10)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _FlaxProxyDispatch11_super_call_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch11)._flaxSuper_transformInternal(
    values["t"] as double,
  );
}

Object? _CatmullRomCurve_super_get_controlPoints(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CatmullRomCurveProxy)._flaxSuperGet_controlPoints;
Object? _CatmullRomCurve_super_get_tension(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CatmullRomCurveProxy)._flaxSuperGet_tension;
Object? _FlaxProxyDispatch11_super_get_flipped(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch11)._flaxSuperGet_flipped;
Object _createCatmullRomCurve(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CatmullRomCurve(
        values["controlPoints"] as List<api1.Offset>,
        tension: values["tension"] as double,
      );
    case "precompute":
      return api.CatmullRomCurve.precompute(
        values["controlPoints"] as List<api1.Offset>,
        tension: values["tension"] as double,
      );
    case '@implementation':
      return _CatmullRomCurveProxy(
        values['@peer'] as FlaxProxyPeer,
        values["controlPoints"] as List<api1.Offset>,
        tension: values["tension"] as double,
      );
    case "@implementation:precompute":
      return _CatmullRomCurveProxy.precompute(
        values['@peer'] as FlaxProxyPeer,
        values["controlPoints"] as List<api1.Offset>,
        tension: values["tension"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCatmullRomSpline(Object value) => value is api.CatmullRomSpline;
Object? _FlaxProxyDispatch12_super_call_generateSamples(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch12)._flaxSuper_generateSamples(
    end: values["end"] as double,
    start: values["start"] as double,
    tolerance: values["tolerance"] as double,
  );
}

Object? _FlaxProxyDispatch12_super_call_findInverse(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch12)._flaxSuper_findInverse(
    values["x"] as double,
  );
}

Object? _FlaxProxyDispatch12_super_call_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch12)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _FlaxProxyDispatch12_super_call_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch12)._flaxSuper_transformInternal(
    values["t"] as double,
  );
}

Object? _FlaxProxyDispatch12_super_get_samplingSeed(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch12)._flaxSuperGet_samplingSeed;
Object _createCatmullRomSpline(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CatmullRomSpline(
        values["controlPoints"] as List<api1.Offset>,
        tension: values["tension"] as double,
        startHandle: values["startHandle"] as api1.Offset?,
        endHandle: values["endHandle"] as api1.Offset?,
      );
    case "precompute":
      return api.CatmullRomSpline.precompute(
        values["controlPoints"] as List<api1.Offset>,
        tension: values["tension"] as double,
        startHandle: values["startHandle"] as api1.Offset?,
        endHandle: values["endHandle"] as api1.Offset?,
      );
    case '@implementation':
      return _CatmullRomSplineProxy(
        values['@peer'] as FlaxProxyPeer,
        values["controlPoints"] as List<api1.Offset>,
        tension: values["tension"] as double,
        startHandle: values["startHandle"] as api1.Offset?,
        endHandle: values["endHandle"] as api1.Offset?,
      );
    case "@implementation:precompute":
      return _CatmullRomSplineProxy.precompute(
        values['@peer'] as FlaxProxyPeer,
        values["controlPoints"] as List<api1.Offset>,
        tension: values["tension"] as double,
        startHandle: values["startHandle"] as api1.Offset?,
        endHandle: values["endHandle"] as api1.Offset?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isColorTween(Object value) => value is api.ColorTween;
Object? _ColorTween_begin(Object value) => (value as api.ColorTween).begin;
Object? _ColorTween_end(Object value) => (value as api.ColorTween).end;
void _ColorTween_set_begin(Object receiver, Object? value) {
  (receiver as api.ColorTween).begin = value as api1.Color?;
}

void _ColorTween_set_end(Object receiver, Object? value) {
  (receiver as api.ColorTween).end = value as api1.Color?;
}

Object? _ColorTween_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorTween).lerp(values["t"] as double);
}

Object? _ColorTween_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorTween).transform(values["t"] as double);
}

Object? _ColorTween_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorTween).toString();
}

Object? _ColorTween_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorTween).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _ColorTween_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorTween).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _ColorTween_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ColorTween).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _ColorTween_super_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as _ColorTweenProxy)._flaxSuper_lerp(values["t"] as double);
}

Object? _ColorTween_super_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ColorTweenProxy)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _ColorTween_super_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ColorTweenProxy)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _ColorTween_super_animate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ColorTweenProxy)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _ColorTween_super_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as _ColorTweenProxy)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _ColorTween_super_get_begin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ColorTweenProxy)._flaxSuperGet_begin;
Object? _ColorTween_super_get_end(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ColorTweenProxy)._flaxSuperGet_end;
Object? _ColorTween_super_set_begin(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ColorTweenProxy)._flaxSuperSet_begin(
    values["value"] as api1.Color?,
  );
  return null;
}

Object? _ColorTween_super_set_end(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ColorTweenProxy)._flaxSuperSet_end(
    values["value"] as api1.Color?,
  );
  return null;
}

Object _createColorTween(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ColorTween(
        begin: values["begin"] as api1.Color?,
        end: values["end"] as api1.Color?,
      );
    case '@implementation':
      return _ColorTweenProxy(
        values['@peer'] as FlaxProxyPeer,
        begin: values["begin"] as api1.Color?,
        end: values["end"] as api1.Color?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCompoundAnimation(Object value) =>
    value is api.CompoundAnimation<Object?>;
Object? _CompoundAnimation_status(Object value) =>
    (value as api.CompoundAnimation<Object?>).status;
Object? _CompoundAnimation_value(Object value) =>
    (value as api.CompoundAnimation<Object?>).value;
Object? _CompoundAnimation_isDismissed(Object value) =>
    (value as api.CompoundAnimation<Object?>).isDismissed;
Object? _CompoundAnimation_isCompleted(Object value) =>
    (value as api.CompoundAnimation<Object?>).isCompleted;
Object? _CompoundAnimation_isAnimating(Object value) =>
    (value as api.CompoundAnimation<Object?>).isAnimating;
Object? _CompoundAnimation_isForwardOrCompleted(Object value) =>
    (value as api.CompoundAnimation<Object?>).isForwardOrCompleted;
Object? _CompoundAnimation_first(Object value) =>
    (value as api.CompoundAnimation<Object?>).first;
Object? _CompoundAnimation_next(Object value) =>
    (value as api.CompoundAnimation<Object?>).next;
Object? _CompoundAnimation_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _CompoundAnimation_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _CompoundAnimation_addStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).addStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _CompoundAnimation_removeStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).removeStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _CompoundAnimation_drive(Object receiver, Map<String, Object?> values) {
  return (receiver as api.CompoundAnimation<Object?>).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _CompoundAnimation_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CompoundAnimation<Object?>).toString();
}

Object? _CompoundAnimation_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CompoundAnimation<Object?>).toStringDetails();
}

Object? _CompoundAnimation_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).didRegisterListener();
  return null;
}

Object? _CompoundAnimation_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).didUnregisterListener();
  return null;
}

Object? _CompoundAnimation_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).didStartListening();
  return null;
}

Object? _CompoundAnimation_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).didStopListening();
  return null;
}

Object? _CompoundAnimation_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).clearListeners();
  return null;
}

Object? _CompoundAnimation_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).notifyListeners();
  return null;
}

Object? _CompoundAnimation_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).clearStatusListeners();
  return null;
}

Object? _CompoundAnimation_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CompoundAnimation<Object?>).notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _CompoundAnimation_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _CompoundAnimationProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _CompoundAnimation_super_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CompoundAnimationProxy)._flaxSuper_didRegisterListener();
  return null;
}

Object? _CompoundAnimation_super_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CompoundAnimationProxy)._flaxSuper_didUnregisterListener();
  return null;
}

Object? _CompoundAnimation_super_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CompoundAnimationProxy)._flaxSuper_didStartListening();
  return null;
}

Object? _CompoundAnimation_super_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CompoundAnimationProxy)._flaxSuper_didStopListening();
  return null;
}

Object? _CompoundAnimation_super_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CompoundAnimationProxy)._flaxSuper_clearListeners();
  return null;
}

Object? _CompoundAnimation_super_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CompoundAnimationProxy)._flaxSuper_notifyListeners();
  return null;
}

Object? _CompoundAnimation_super_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CompoundAnimationProxy)._flaxSuper_clearStatusListeners();
  return null;
}

Object? _CompoundAnimation_super_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CompoundAnimationProxy)._flaxSuper_notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _CompoundAnimation_super_get_first(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CompoundAnimationProxy)._flaxSuperGet_first;
Object? _CompoundAnimation_super_get_next(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CompoundAnimationProxy)._flaxSuperGet_next;
Object? _CompoundAnimation_super_get_isListening(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CompoundAnimationProxy)._flaxSuperGet_isListening;
Object _createCompoundAnimation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _CompoundAnimationProxy<Object?>(
        values['@peer'] as FlaxProxyPeer,
        first: values["first"] as api.Animation<Object?>,
        next: values["next"] as api.Animation<Object?>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isConstantTween(Object value) => value is api.ConstantTween<Object?>;
Object? _ConstantTween_begin(Object value) =>
    (value as api.ConstantTween<Object?>).begin;
Object? _ConstantTween_end(Object value) =>
    (value as api.ConstantTween<Object?>).end;
void _ConstantTween_set_begin(Object receiver, Object? value) {
  (receiver as api.ConstantTween<Object?>).begin = value;
}

void _ConstantTween_set_end(Object receiver, Object? value) {
  (receiver as api.ConstantTween<Object?>).end = value;
}

Object? _ConstantTween_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ConstantTween<Object?>).lerp(values["t"] as double);
}

Object? _ConstantTween_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ConstantTween<Object?>).transform(
    values["t"] as double,
  );
}

Object? _ConstantTween_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ConstantTween<Object?>).toString();
}

Object? _ConstantTween_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ConstantTween<Object?>).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _ConstantTween_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ConstantTween<Object?>).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _ConstantTween_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ConstantTween<Object?>).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _ConstantTween_super_lerp(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ConstantTweenProxy)._flaxSuper_lerp(
    values["t"] as double,
  );
}

Object? _ConstantTween_super_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ConstantTweenProxy)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _ConstantTween_super_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ConstantTweenProxy)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _ConstantTween_super_animate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ConstantTweenProxy)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _ConstantTween_super_chain(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ConstantTweenProxy)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _ConstantTween_super_get_begin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ConstantTweenProxy)._flaxSuperGet_begin;
Object? _ConstantTween_super_get_end(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ConstantTweenProxy)._flaxSuperGet_end;
Object? _ConstantTween_super_set_begin(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ConstantTweenProxy)._flaxSuperSet_begin(values["value"]);
  return null;
}

Object? _ConstantTween_super_set_end(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ConstantTweenProxy)._flaxSuperSet_end(values["value"]);
  return null;
}

Object _createConstantTween(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ConstantTween<Object?>(values["value"]);
    case '@implementation':
      return _ConstantTweenProxy<Object?>(
        values['@peer'] as FlaxProxyPeer,
        values["value"],
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCurve2D(Object value) => value is api.Curve2D;
Object? _Curve2D_samplingSeed(Object value) =>
    (value as api.Curve2D).samplingSeed;
Object? _Curve2D_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Curve2D).transform(values["t"] as double);
}

Object? _Curve2D_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Curve2D).transformInternal(values["t"] as double);
}

Object? _Curve2D_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Curve2D).toString();
}

Object? _Curve2D_generateSamples(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Curve2D).generateSamples(
    end: values["end"] as double,
    start: values["start"] as double,
    tolerance: values["tolerance"] as double,
  );
}

Object? _Curve2D_findInverse(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Curve2D).findInverse(values["x"] as double);
}

Object _createCurve2D(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _Curve2DProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCurve2DSample(Object value) => value is api.Curve2DSample;
Object? _Curve2DSample_t(Object value) => (value as api.Curve2DSample).t;
Object? _Curve2DSample_value(Object value) =>
    (value as api.Curve2DSample).value;
Object? _Curve2DSample_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Curve2DSample).toString();
}

Object? _Curve2DSample_super_get_t(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _Curve2DSampleProxy)._flaxSuperGet_t;
Object? _Curve2DSample_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _Curve2DSampleProxy)._flaxSuperGet_value;
Object _createCurve2DSample(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Curve2DSample(
        values["t"] as double,
        values["value"] as api1.Offset,
      );
    case '@implementation':
      return _Curve2DSampleProxy(
        values['@peer'] as FlaxProxyPeer,
        values["t"] as double,
        values["value"] as api1.Offset,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCurveTween(Object value) => value is api.CurveTween;
Object? _CurveTween_curve(Object value) => (value as api.CurveTween).curve;
void _CurveTween_set_curve(Object receiver, Object? value) {
  (receiver as api.CurveTween).curve = value as api.Curve;
}

Object? _CurveTween_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.CurveTween).transform(values["t"] as double);
}

Object? _CurveTween_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.CurveTween).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _CurveTween_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.CurveTween).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _CurveTween_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.CurveTween).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _CurveTween_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.CurveTween).toString();
}

Object? _FlaxProxyDispatch13_super_call_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch13)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _FlaxProxyDispatch13_super_call_animate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch13)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _FlaxProxyDispatch13_super_call_chain(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch13)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _CurveTween_super_get_curve(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CurveTweenProxy)._flaxSuperGet_curve;
Object? _CurveTween_super_set_curve(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CurveTweenProxy)._flaxSuperSet_curve(
    values["value"] as api.Curve,
  );
  return null;
}

Object _createCurveTween(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CurveTween(curve: values["curve"] as api.Curve);
    case '@implementation':
      return _CurveTweenProxy(
        values['@peer'] as FlaxProxyPeer,
        curve: values["curve"] as api.Curve,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCurvedAnimation(Object value) => value is api.CurvedAnimation;
Object? _CurvedAnimation_status(Object value) =>
    (value as api.CurvedAnimation).status;
Object? _CurvedAnimation_value(Object value) =>
    (value as api.CurvedAnimation).value;
Object? _CurvedAnimation_isDismissed(Object value) =>
    (value as api.CurvedAnimation).isDismissed;
Object? _CurvedAnimation_isCompleted(Object value) =>
    (value as api.CurvedAnimation).isCompleted;
Object? _CurvedAnimation_isAnimating(Object value) =>
    (value as api.CurvedAnimation).isAnimating;
Object? _CurvedAnimation_isForwardOrCompleted(Object value) =>
    (value as api.CurvedAnimation).isForwardOrCompleted;
Object? _CurvedAnimation_parent(Object value) =>
    (value as api.CurvedAnimation).parent;
Object? _CurvedAnimation_curve(Object value) =>
    (value as api.CurvedAnimation).curve;
Object? _CurvedAnimation_reverseCurve(Object value) =>
    (value as api.CurvedAnimation).reverseCurve;
Object? _CurvedAnimation_isDisposed(Object value) =>
    (value as api.CurvedAnimation).isDisposed;
void _CurvedAnimation_set_curve(Object receiver, Object? value) {
  (receiver as api.CurvedAnimation).curve = value as api.Curve;
}

void _CurvedAnimation_set_reverseCurve(Object receiver, Object? value) {
  (receiver as api.CurvedAnimation).reverseCurve = value as api.Curve?;
}

void _CurvedAnimation_set_isDisposed(Object receiver, Object? value) {
  (receiver as api.CurvedAnimation).isDisposed = value as bool;
}

Object? _CurvedAnimation_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CurvedAnimation).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _CurvedAnimation_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CurvedAnimation).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _CurvedAnimation_addStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CurvedAnimation).addStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _CurvedAnimation_removeStatusListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.CurvedAnimation).removeStatusListener(
    values["listener"] as void Function(api.AnimationStatus status),
  );
  return null;
}

Object? _CurvedAnimation_drive(Object receiver, Map<String, Object?> values) {
  return (receiver as api.CurvedAnimation).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _CurvedAnimation_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CurvedAnimation).toString();
}

Object? _CurvedAnimation_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.CurvedAnimation).toStringDetails();
}

Object? _CurvedAnimation_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.CurvedAnimation).dispose();
  return null;
}

Object? _CurvedAnimation_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _CurvedAnimationProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _CurvedAnimation_super_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CurvedAnimationProxy)._flaxSuper_dispose();
  return null;
}

Object? _CurvedAnimation_super_get_parent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CurvedAnimationProxy)._flaxSuperGet_parent;
Object? _CurvedAnimation_super_get_curve(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CurvedAnimationProxy)._flaxSuperGet_curve;
Object? _CurvedAnimation_super_get_reverseCurve(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CurvedAnimationProxy)._flaxSuperGet_reverseCurve;
Object? _CurvedAnimation_super_get_isDisposed(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CurvedAnimationProxy)._flaxSuperGet_isDisposed;
Object? _CurvedAnimation_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CurvedAnimationProxy)._flaxSuperGet_value;
Object? _CurvedAnimation_super_set_curve(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CurvedAnimationProxy)._flaxSuperSet_curve(
    values["value"] as api.Curve,
  );
  return null;
}

Object? _CurvedAnimation_super_set_reverseCurve(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CurvedAnimationProxy)._flaxSuperSet_reverseCurve(
    values["value"] as api.Curve?,
  );
  return null;
}

Object? _CurvedAnimation_super_set_isDisposed(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _CurvedAnimationProxy)._flaxSuperSet_isDisposed(
    values["value"] as bool,
  );
  return null;
}

Object _createCurvedAnimation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.CurvedAnimation(
        parent: values["parent"] as api.Animation<double>,
        curve: values["curve"] as api.Curve,
        reverseCurve: values["reverseCurve"] as api.Curve?,
      );
    case '@implementation':
      return _CurvedAnimationProxy(
        values['@peer'] as FlaxProxyPeer,
        parent: values["parent"] as api.Animation<double>,
        curve: values["curve"] as api.Curve,
        reverseCurve: values["reverseCurve"] as api.Curve?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isElasticInCurve(Object value) => value is api.ElasticInCurve;
Object? _ElasticInCurve_flipped(Object value) =>
    (value as api.ElasticInCurve).flipped;
Object? _ElasticInCurve_period(Object value) =>
    (value as api.ElasticInCurve).period;
Object? _ElasticInCurve_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ElasticInCurve).transform(values["t"] as double);
}

Object? _ElasticInCurve_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ElasticInCurve).transformInternal(
    values["t"] as double,
  );
}

Object? _ElasticInCurve_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ElasticInCurve).toString();
}

Object? _ElasticInCurve_super_get_period(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ElasticInCurveProxy)._flaxSuperGet_period;
Object _createElasticInCurve(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ElasticInCurve(values["period"] as double);
    case '@implementation':
      return _ElasticInCurveProxy(
        values['@peer'] as FlaxProxyPeer,
        values["period"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isElasticInOutCurve(Object value) => value is api.ElasticInOutCurve;
Object? _ElasticInOutCurve_flipped(Object value) =>
    (value as api.ElasticInOutCurve).flipped;
Object? _ElasticInOutCurve_period(Object value) =>
    (value as api.ElasticInOutCurve).period;
Object? _ElasticInOutCurve_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ElasticInOutCurve).transform(values["t"] as double);
}

Object? _ElasticInOutCurve_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ElasticInOutCurve).transformInternal(
    values["t"] as double,
  );
}

Object? _ElasticInOutCurve_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ElasticInOutCurve).toString();
}

Object? _ElasticInOutCurve_super_get_period(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ElasticInOutCurveProxy)._flaxSuperGet_period;
Object _createElasticInOutCurve(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ElasticInOutCurve(values["period"] as double);
    case '@implementation':
      return _ElasticInOutCurveProxy(
        values['@peer'] as FlaxProxyPeer,
        values["period"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isElasticOutCurve(Object value) => value is api.ElasticOutCurve;
Object? _ElasticOutCurve_flipped(Object value) =>
    (value as api.ElasticOutCurve).flipped;
Object? _ElasticOutCurve_period(Object value) =>
    (value as api.ElasticOutCurve).period;
Object? _ElasticOutCurve_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ElasticOutCurve).transform(values["t"] as double);
}

Object? _ElasticOutCurve_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ElasticOutCurve).transformInternal(
    values["t"] as double,
  );
}

Object? _ElasticOutCurve_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ElasticOutCurve).toString();
}

Object? _ElasticOutCurve_super_get_period(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ElasticOutCurveProxy)._flaxSuperGet_period;
Object _createElasticOutCurve(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ElasticOutCurve(values["period"] as double);
    case '@implementation':
      return _ElasticOutCurveProxy(
        values['@peer'] as FlaxProxyPeer,
        values["period"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFlippedCurve(Object value) => value is api.FlippedCurve;
Object? _FlippedCurve_flipped(Object value) =>
    (value as api.FlippedCurve).flipped;
Object? _FlippedCurve_curve(Object value) => (value as api.FlippedCurve).curve;
Object? _FlippedCurve_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.FlippedCurve).transform(values["t"] as double);
}

Object? _FlippedCurve_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FlippedCurve).transformInternal(
    values["t"] as double,
  );
}

Object? _FlippedCurve_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.FlippedCurve).toString();
}

Object? _FlippedCurve_super_get_curve(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlippedCurveProxy)._flaxSuperGet_curve;
Object _createFlippedCurve(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FlippedCurve(values["curve"] as api.Curve);
    case '@implementation':
      return _FlippedCurveProxy(
        values['@peer'] as FlaxProxyPeer,
        values["curve"] as api.Curve,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFlippedTweenSequence(Object value) => value is api.FlippedTweenSequence;
Object? _FlippedTweenSequence_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FlippedTweenSequence).transform(
    values["t"] as double,
  );
}

Object? _FlippedTweenSequence_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FlippedTweenSequence).toString();
}

Object? _FlippedTweenSequence_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FlippedTweenSequence).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _FlippedTweenSequence_animate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FlippedTweenSequence).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _FlippedTweenSequence_chain(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.FlippedTweenSequence).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object _createFlippedTweenSequence(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FlippedTweenSequence(
        values["items"] as List<api.TweenSequenceItem<double>>,
      );
    case '@implementation':
      return _FlippedTweenSequenceProxy(
        values['@peer'] as FlaxProxyPeer,
        values["items"] as List<api.TweenSequenceItem<double>>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isIntTween(Object value) => value is api.IntTween;
Object? _IntTween_begin(Object value) => (value as api.IntTween).begin;
Object? _IntTween_end(Object value) => (value as api.IntTween).end;
void _IntTween_set_begin(Object receiver, Object? value) {
  (receiver as api.IntTween).begin = value as int?;
}

void _IntTween_set_end(Object receiver, Object? value) {
  (receiver as api.IntTween).end = value as int?;
}

Object? _IntTween_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as api.IntTween).lerp(values["t"] as double);
}

Object? _IntTween_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.IntTween).transform(values["t"] as double);
}

Object? _IntTween_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.IntTween).toString();
}

Object? _IntTween_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.IntTween).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _IntTween_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.IntTween).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _IntTween_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.IntTween).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _FlaxProxyDispatch18_super_call_lerp(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch18)._flaxSuper_lerp(
    values["t"] as double,
  );
}

Object? _FlaxProxyDispatch18_super_call_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch18)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _FlaxProxyDispatch18_super_call_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch18)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _FlaxProxyDispatch18_super_call_animate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch18)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _FlaxProxyDispatch18_super_call_chain(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch18)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _FlaxProxyDispatch18_super_get_begin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch18)._flaxSuperGet_begin;
Object? _FlaxProxyDispatch18_super_get_end(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch18)._flaxSuperGet_end;
Object? _FlaxProxyDispatch18_super_set_begin(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch18)._flaxSuperSet_begin(
    values["value"] as int?,
  );
  return null;
}

Object? _FlaxProxyDispatch18_super_set_end(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch18)._flaxSuperSet_end(values["value"] as int?);
  return null;
}

Object _createIntTween(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.IntTween(
        begin: values["begin"] as int?,
        end: values["end"] as int?,
      );
    case '@implementation':
      return _IntTweenProxy(
        values['@peer'] as FlaxProxyPeer,
        begin: values["begin"] as int?,
        end: values["end"] as int?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isInterval(Object value) => value is api.Interval;
Object? _Interval_flipped(Object value) => (value as api.Interval).flipped;
Object? _Interval_begin(Object value) => (value as api.Interval).begin;
Object? _Interval_end(Object value) => (value as api.Interval).end;
Object? _Interval_curve(Object value) => (value as api.Interval).curve;
Object? _Interval_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Interval).transform(values["t"] as double);
}

Object? _Interval_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Interval).transformInternal(values["t"] as double);
}

Object? _Interval_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Interval).toString();
}

Object? _Interval_super_get_begin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _IntervalProxy)._flaxSuperGet_begin;
Object? _Interval_super_get_end(Object receiver, Map<String, Object?> values) =>
    (receiver as _IntervalProxy)._flaxSuperGet_end;
Object? _Interval_super_get_curve(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _IntervalProxy)._flaxSuperGet_curve;
Object _createInterval(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      final _flaxHas2 = values.containsKey("curve");
      return flaxInvokeWithDefaults(
        api.Interval.new,
        <Object?>[
          values["begin"] as double,
          values["end"] as double,
          (_flaxHas2 ? values["curve"] as api.Curve : null),
        ],
        <int>[1 | 2 | (_flaxHas2 ? 4 : 0)],
        const <String>["", "", "curve"],
      ) as api.Interval;
    case '@implementation':
      final _flaxHas3 = values.containsKey("curve");
      return flaxInvokeWithDefaults(
        _IntervalProxy.new,
        <Object?>[
          values['@peer'] as FlaxProxyPeer,
          values["begin"] as double,
          values["end"] as double,
          (_flaxHas3 ? values["curve"] as api.Curve : null),
        ],
        <int>[1 | 2 | 4 | (_flaxHas3 ? 8 : 0)],
        const <String>["", "", "", "curve"],
      ) as api.Interval;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isParametricCurve(Object value) => value is api.ParametricCurve<Object?>;
Object? _ParametricCurve_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ParametricCurve<Object?>).transform(
    values["t"] as double,
  );
}

Object? _ParametricCurve_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ParametricCurve<Object?>).transformInternal(
    values["t"] as double,
  );
}

Object? _ParametricCurve_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ParametricCurve<Object?>).toString();
}

Object? _ParametricCurve_super_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ParametricCurveProxy)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _ParametricCurve_super_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ParametricCurveProxy)._flaxSuper_transformInternal(
    values["t"] as double,
  );
}

Object _createParametricCurve(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _ParametricCurveProxy<Object?>(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isProxyAnimation(Object value) => value is api.ProxyAnimation;
Object? _ProxyAnimation_status(Object value) =>
    (value as api.ProxyAnimation).status;
Object? _ProxyAnimation_value(Object value) =>
    (value as api.ProxyAnimation).value;
Object? _ProxyAnimation_isDismissed(Object value) =>
    (value as api.ProxyAnimation).isDismissed;
Object? _ProxyAnimation_isCompleted(Object value) =>
    (value as api.ProxyAnimation).isCompleted;
Object? _ProxyAnimation_isAnimating(Object value) =>
    (value as api.ProxyAnimation).isAnimating;
Object? _ProxyAnimation_isForwardOrCompleted(Object value) =>
    (value as api.ProxyAnimation).isForwardOrCompleted;
Object? _ProxyAnimation_parent(Object value) =>
    (value as api.ProxyAnimation).parent;
void _ProxyAnimation_set_parent(Object receiver, Object? value) {
  (receiver as api.ProxyAnimation).parent = value as api.Animation<double>?;
}

Object? _ProxyAnimation_drive(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ProxyAnimation).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _ProxyAnimation_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ProxyAnimation).toString();
}

Object? _ProxyAnimation_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ProxyAnimation).toStringDetails();
}

Object? _ProxyAnimation_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ProxyAnimationProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _ProxyAnimation_super_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ProxyAnimationProxy)._flaxSuper_didRegisterListener();
  return null;
}

Object? _ProxyAnimation_super_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ProxyAnimationProxy)._flaxSuper_didUnregisterListener();
  return null;
}

Object? _ProxyAnimation_super_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ProxyAnimationProxy)._flaxSuper_didStartListening();
  return null;
}

Object? _ProxyAnimation_super_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ProxyAnimationProxy)._flaxSuper_didStopListening();
  return null;
}

Object? _ProxyAnimation_super_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ProxyAnimationProxy)._flaxSuper_clearListeners();
  return null;
}

Object? _ProxyAnimation_super_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ProxyAnimationProxy)._flaxSuper_notifyListeners();
  return null;
}

Object? _ProxyAnimation_super_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ProxyAnimationProxy)._flaxSuper_clearStatusListeners();
  return null;
}

Object? _ProxyAnimation_super_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ProxyAnimationProxy)._flaxSuper_notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _ProxyAnimation_super_get_parent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ProxyAnimationProxy)._flaxSuperGet_parent;
Object? _ProxyAnimation_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ProxyAnimationProxy)._flaxSuperGet_value;
Object? _ProxyAnimation_super_get_isListening(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ProxyAnimationProxy)._flaxSuperGet_isListening;
Object? _ProxyAnimation_super_set_parent(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ProxyAnimationProxy)._flaxSuperSet_parent(
    values["value"] as api.Animation<double>?,
  );
  return null;
}

Object _createProxyAnimation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ProxyAnimation(values["animation"] as api.Animation<double>?);
    case '@implementation':
      return _ProxyAnimationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["animation"] as api.Animation<double>?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRectTween(Object value) => value is api.RectTween;
Object? _RectTween_begin(Object value) => (value as api.RectTween).begin;
Object? _RectTween_end(Object value) => (value as api.RectTween).end;
void _RectTween_set_begin(Object receiver, Object? value) {
  (receiver as api.RectTween).begin = value as api1.Rect?;
}

void _RectTween_set_end(Object receiver, Object? value) {
  (receiver as api.RectTween).end = value as api1.Rect?;
}

Object? _RectTween_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RectTween).lerp(values["t"] as double);
}

Object? _RectTween_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RectTween).transform(values["t"] as double);
}

Object? _RectTween_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RectTween).toString();
}

Object? _RectTween_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RectTween).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _RectTween_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RectTween).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _RectTween_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.RectTween).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _RectTween_super_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as _RectTweenProxy)._flaxSuper_lerp(values["t"] as double);
}

Object? _RectTween_super_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _RectTweenProxy)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _RectTween_super_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _RectTweenProxy)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _RectTween_super_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as _RectTweenProxy)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _RectTween_super_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as _RectTweenProxy)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _RectTween_super_get_begin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _RectTweenProxy)._flaxSuperGet_begin;
Object? _RectTween_super_get_end(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _RectTweenProxy)._flaxSuperGet_end;
Object? _RectTween_super_set_begin(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _RectTweenProxy)._flaxSuperSet_begin(
    values["value"] as api1.Rect?,
  );
  return null;
}

Object? _RectTween_super_set_end(Object receiver, Map<String, Object?> values) {
  (receiver as _RectTweenProxy)._flaxSuperSet_end(
    values["value"] as api1.Rect?,
  );
  return null;
}

Object _createRectTween(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.RectTween(
        begin: values["begin"] as api1.Rect?,
        end: values["end"] as api1.Rect?,
      );
    case '@implementation':
      return _RectTweenProxy(
        values['@peer'] as FlaxProxyPeer,
        begin: values["begin"] as api1.Rect?,
        end: values["end"] as api1.Rect?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isReverseAnimation(Object value) => value is api.ReverseAnimation;
Object? _ReverseAnimation_status(Object value) =>
    (value as api.ReverseAnimation).status;
Object? _ReverseAnimation_value(Object value) =>
    (value as api.ReverseAnimation).value;
Object? _ReverseAnimation_isDismissed(Object value) =>
    (value as api.ReverseAnimation).isDismissed;
Object? _ReverseAnimation_isCompleted(Object value) =>
    (value as api.ReverseAnimation).isCompleted;
Object? _ReverseAnimation_isAnimating(Object value) =>
    (value as api.ReverseAnimation).isAnimating;
Object? _ReverseAnimation_isForwardOrCompleted(Object value) =>
    (value as api.ReverseAnimation).isForwardOrCompleted;
Object? _ReverseAnimation_parent(Object value) =>
    (value as api.ReverseAnimation).parent;
Object? _ReverseAnimation_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ReverseAnimation).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _ReverseAnimation_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ReverseAnimation).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _ReverseAnimation_drive(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ReverseAnimation).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _ReverseAnimation_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ReverseAnimation).toString();
}

Object? _ReverseAnimation_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ReverseAnimation).toStringDetails();
}

Object? _ReverseAnimation_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ReverseAnimationProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _ReverseAnimation_super_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ReverseAnimationProxy)._flaxSuper_didRegisterListener();
  return null;
}

Object? _ReverseAnimation_super_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ReverseAnimationProxy)._flaxSuper_didUnregisterListener();
  return null;
}

Object? _ReverseAnimation_super_didStartListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ReverseAnimationProxy)._flaxSuper_didStartListening();
  return null;
}

Object? _ReverseAnimation_super_didStopListening(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ReverseAnimationProxy)._flaxSuper_didStopListening();
  return null;
}

Object? _ReverseAnimation_super_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ReverseAnimationProxy)._flaxSuper_clearStatusListeners();
  return null;
}

Object? _ReverseAnimation_super_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ReverseAnimationProxy)._flaxSuper_notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _ReverseAnimation_super_get_parent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ReverseAnimationProxy)._flaxSuperGet_parent;
Object? _ReverseAnimation_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ReverseAnimationProxy)._flaxSuperGet_value;
Object? _ReverseAnimation_super_get_isListening(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ReverseAnimationProxy)._flaxSuperGet_isListening;
Object _createReverseAnimation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ReverseAnimation(values["parent"] as api.Animation<double>);
    case '@implementation':
      return _ReverseAnimationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["parent"] as api.Animation<double>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isReverseTween(Object value) => value is api.ReverseTween<Object?>;
Object? _ReverseTween_begin(Object value) =>
    (value as api.ReverseTween<Object?>).begin;
Object? _ReverseTween_end(Object value) =>
    (value as api.ReverseTween<Object?>).end;
Object? _ReverseTween_parent(Object value) =>
    (value as api.ReverseTween<Object?>).parent;
void _ReverseTween_set_begin(Object receiver, Object? value) {
  (receiver as api.ReverseTween<Object?>).begin = value;
}

void _ReverseTween_set_end(Object receiver, Object? value) {
  (receiver as api.ReverseTween<Object?>).end = value;
}

Object? _ReverseTween_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ReverseTween<Object?>).lerp(values["t"] as double);
}

Object? _ReverseTween_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ReverseTween<Object?>).transform(
    values["t"] as double,
  );
}

Object? _ReverseTween_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ReverseTween<Object?>).toString();
}

Object? _ReverseTween_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ReverseTween<Object?>).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _ReverseTween_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ReverseTween<Object?>).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _ReverseTween_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ReverseTween<Object?>).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _ReverseTween_super_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as _ReverseTweenProxy)._flaxSuper_lerp(
    values["t"] as double,
  );
}

Object? _ReverseTween_super_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ReverseTweenProxy)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _ReverseTween_super_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ReverseTweenProxy)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _ReverseTween_super_animate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ReverseTweenProxy)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _ReverseTween_super_chain(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _ReverseTweenProxy)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _ReverseTween_super_get_parent(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ReverseTweenProxy)._flaxSuperGet_parent;
Object? _ReverseTween_super_get_begin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ReverseTweenProxy)._flaxSuperGet_begin;
Object? _ReverseTween_super_get_end(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ReverseTweenProxy)._flaxSuperGet_end;
Object? _ReverseTween_super_set_begin(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ReverseTweenProxy)._flaxSuperSet_begin(values["value"]);
  return null;
}

Object? _ReverseTween_super_set_end(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _ReverseTweenProxy)._flaxSuperSet_end(values["value"]);
  return null;
}

Object _createReverseTween(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ReverseTween<Object?>(values["parent"] as api.Tween<Object?>);
    case '@implementation':
      return _ReverseTweenProxy<Object?>(
        values['@peer'] as FlaxProxyPeer,
        values["parent"] as api.Tween<Object?>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSawTooth(Object value) => value is api.SawTooth;
Object? _SawTooth_flipped(Object value) => (value as api.SawTooth).flipped;
Object? _SawTooth_count(Object value) => (value as api.SawTooth).count;
Object? _SawTooth_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SawTooth).transform(values["t"] as double);
}

Object? _SawTooth_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.SawTooth).transformInternal(values["t"] as double);
}

Object? _SawTooth_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SawTooth).toString();
}

Object? _SawTooth_super_get_count(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SawToothProxy)._flaxSuperGet_count;
Object _createSawTooth(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SawTooth(values["count"] as int);
    case '@implementation':
      return _SawToothProxy(
        values['@peer'] as FlaxProxyPeer,
        values["count"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSizeTween(Object value) => value is api.SizeTween;
Object? _SizeTween_begin(Object value) => (value as api.SizeTween).begin;
Object? _SizeTween_end(Object value) => (value as api.SizeTween).end;
void _SizeTween_set_begin(Object receiver, Object? value) {
  (receiver as api.SizeTween).begin = value as api1.Size?;
}

void _SizeTween_set_end(Object receiver, Object? value) {
  (receiver as api.SizeTween).end = value as api1.Size?;
}

Object? _SizeTween_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SizeTween).lerp(values["t"] as double);
}

Object? _SizeTween_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SizeTween).transform(values["t"] as double);
}

Object? _SizeTween_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SizeTween).toString();
}

Object? _SizeTween_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SizeTween).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _SizeTween_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SizeTween).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _SizeTween_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.SizeTween).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _SizeTween_super_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as _SizeTweenProxy)._flaxSuper_lerp(values["t"] as double);
}

Object? _SizeTween_super_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SizeTweenProxy)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _SizeTween_super_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _SizeTweenProxy)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _SizeTween_super_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as _SizeTweenProxy)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _SizeTween_super_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as _SizeTweenProxy)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _SizeTween_super_get_begin(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SizeTweenProxy)._flaxSuperGet_begin;
Object? _SizeTween_super_get_end(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SizeTweenProxy)._flaxSuperGet_end;
Object? _SizeTween_super_set_begin(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _SizeTweenProxy)._flaxSuperSet_begin(
    values["value"] as api1.Size?,
  );
  return null;
}

Object? _SizeTween_super_set_end(Object receiver, Map<String, Object?> values) {
  (receiver as _SizeTweenProxy)._flaxSuperSet_end(
    values["value"] as api1.Size?,
  );
  return null;
}

Object _createSizeTween(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SizeTween(
        begin: values["begin"] as api1.Size?,
        end: values["end"] as api1.Size?,
      );
    case '@implementation':
      return _SizeTweenProxy(
        values['@peer'] as FlaxProxyPeer,
        begin: values["begin"] as api1.Size?,
        end: values["end"] as api1.Size?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSplit(Object value) => value is api.Split;
Object? _Split_flipped(Object value) => (value as api.Split).flipped;
Object? _Split_split(Object value) => (value as api.Split).split;
Object? _Split_beginCurve(Object value) => (value as api.Split).beginCurve;
Object? _Split_endCurve(Object value) => (value as api.Split).endCurve;
Object? _Split_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Split).transform(values["t"] as double);
}

Object? _Split_transformInternal(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Split).transformInternal(values["t"] as double);
}

Object? _Split_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Split).toString();
}

Object? _Split_super_get_split(Object receiver, Map<String, Object?> values) =>
    (receiver as _SplitProxy)._flaxSuperGet_split;
Object? _Split_super_get_beginCurve(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SplitProxy)._flaxSuperGet_beginCurve;
Object? _Split_super_get_endCurve(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SplitProxy)._flaxSuperGet_endCurve;
Object _createSplit(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      final _flaxHas1 = values.containsKey("beginCurve");
      final _flaxHas2 = values.containsKey("endCurve");
      return flaxInvokeWithDefaults(
        api.Split.new,
        <Object?>[
          values["split"] as double,
          (_flaxHas1 ? values["beginCurve"] as api.Curve : null),
          (_flaxHas2 ? values["endCurve"] as api.Curve : null),
        ],
        <int>[1 | (_flaxHas1 ? 2 : 0) | (_flaxHas2 ? 4 : 0)],
        const <String>["", "beginCurve", "endCurve"],
      ) as api.Split;
    case '@implementation':
      final _flaxHas2 = values.containsKey("beginCurve");
      final _flaxHas3 = values.containsKey("endCurve");
      return flaxInvokeWithDefaults(
        _SplitProxy.new,
        <Object?>[
          values['@peer'] as FlaxProxyPeer,
          values["split"] as double,
          (_flaxHas2 ? values["beginCurve"] as api.Curve : null),
          (_flaxHas3 ? values["endCurve"] as api.Curve : null),
        ],
        <int>[1 | 2 | (_flaxHas2 ? 4 : 0) | (_flaxHas3 ? 8 : 0)],
        const <String>["", "", "beginCurve", "endCurve"],
      ) as api.Split;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isStepTween(Object value) => value is api.StepTween;
Object? _StepTween_begin(Object value) => (value as api.StepTween).begin;
Object? _StepTween_end(Object value) => (value as api.StepTween).end;
void _StepTween_set_begin(Object receiver, Object? value) {
  (receiver as api.StepTween).begin = value as int?;
}

void _StepTween_set_end(Object receiver, Object? value) {
  (receiver as api.StepTween).end = value as int?;
}

Object? _StepTween_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as api.StepTween).lerp(values["t"] as double);
}

Object? _StepTween_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.StepTween).transform(values["t"] as double);
}

Object? _StepTween_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.StepTween).toString();
}

Object? _StepTween_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.StepTween).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _StepTween_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.StepTween).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _StepTween_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.StepTween).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object _createStepTween(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.StepTween(
        begin: values["begin"] as int?,
        end: values["end"] as int?,
      );
    case '@implementation':
      return _StepTweenProxy(
        values['@peer'] as FlaxProxyPeer,
        begin: values["begin"] as int?,
        end: values["end"] as int?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isThreePointCubic(Object value) => value is api.ThreePointCubic;
Object? _ThreePointCubic_flipped(Object value) =>
    (value as api.ThreePointCubic).flipped;
Object? _ThreePointCubic_a1(Object value) => (value as api.ThreePointCubic).a1;
Object? _ThreePointCubic_b1(Object value) => (value as api.ThreePointCubic).b1;
Object? _ThreePointCubic_midpoint(Object value) =>
    (value as api.ThreePointCubic).midpoint;
Object? _ThreePointCubic_a2(Object value) => (value as api.ThreePointCubic).a2;
Object? _ThreePointCubic_b2(Object value) => (value as api.ThreePointCubic).b2;
Object? _ThreePointCubic_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ThreePointCubic).transform(values["t"] as double);
}

Object? _ThreePointCubic_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ThreePointCubic).transformInternal(
    values["t"] as double,
  );
}

Object? _ThreePointCubic_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ThreePointCubic).toString();
}

Object? _ThreePointCubic_super_get_a1(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ThreePointCubicProxy)._flaxSuperGet_a1;
Object? _ThreePointCubic_super_get_b1(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ThreePointCubicProxy)._flaxSuperGet_b1;
Object? _ThreePointCubic_super_get_midpoint(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ThreePointCubicProxy)._flaxSuperGet_midpoint;
Object? _ThreePointCubic_super_get_a2(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ThreePointCubicProxy)._flaxSuperGet_a2;
Object? _ThreePointCubic_super_get_b2(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ThreePointCubicProxy)._flaxSuperGet_b2;
Object _createThreePointCubic(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ThreePointCubic(
        values["a1"] as api1.Offset,
        values["b1"] as api1.Offset,
        values["midpoint"] as api1.Offset,
        values["a2"] as api1.Offset,
        values["b2"] as api1.Offset,
      );
    case '@implementation':
      return _ThreePointCubicProxy(
        values['@peer'] as FlaxProxyPeer,
        values["a1"] as api1.Offset,
        values["b1"] as api1.Offset,
        values["midpoint"] as api1.Offset,
        values["a2"] as api1.Offset,
        values["b2"] as api1.Offset,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isThreshold(Object value) => value is api.Threshold;
Object? _Threshold_flipped(Object value) => (value as api.Threshold).flipped;
Object? _Threshold_threshold(Object value) =>
    (value as api.Threshold).threshold;
Object? _Threshold_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Threshold).transform(values["t"] as double);
}

Object? _Threshold_transformInternal(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Threshold).transformInternal(values["t"] as double);
}

Object? _Threshold_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Threshold).toString();
}

Object? _Threshold_super_get_threshold(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _ThresholdProxy)._flaxSuperGet_threshold;
Object _createThreshold(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Threshold(values["threshold"] as double);
    case '@implementation':
      return _ThresholdProxy(
        values['@peer'] as FlaxProxyPeer,
        values["threshold"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTrainHoppingAnimation(Object value) =>
    value is api.TrainHoppingAnimation;
Object? _TrainHoppingAnimation_status(Object value) =>
    (value as api.TrainHoppingAnimation).status;
Object? _TrainHoppingAnimation_value(Object value) =>
    (value as api.TrainHoppingAnimation).value;
Object? _TrainHoppingAnimation_isDismissed(Object value) =>
    (value as api.TrainHoppingAnimation).isDismissed;
Object? _TrainHoppingAnimation_isCompleted(Object value) =>
    (value as api.TrainHoppingAnimation).isCompleted;
Object? _TrainHoppingAnimation_isAnimating(Object value) =>
    (value as api.TrainHoppingAnimation).isAnimating;
Object? _TrainHoppingAnimation_isForwardOrCompleted(Object value) =>
    (value as api.TrainHoppingAnimation).isForwardOrCompleted;
Object? _TrainHoppingAnimation_currentTrain(Object value) =>
    (value as api.TrainHoppingAnimation).currentTrain;
Object? _TrainHoppingAnimation_onSwitchedTrain(Object value) =>
    (value as api.TrainHoppingAnimation).onSwitchedTrain;
void _TrainHoppingAnimation_set_onSwitchedTrain(
  Object receiver,
  Object? value,
) {
  (receiver as api.TrainHoppingAnimation).onSwitchedTrain =
      value as void Function()?;
}

Object? _TrainHoppingAnimation_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.TrainHoppingAnimation).drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _TrainHoppingAnimation_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.TrainHoppingAnimation).toString();
}

Object? _TrainHoppingAnimation_toStringDetails(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.TrainHoppingAnimation).toStringDetails();
}

Object? _TrainHoppingAnimation_super_drive(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TrainHoppingAnimationProxy)._flaxSuper_drive<Object?>(
    values["child"] as api.Animatable<Object?>,
  );
}

Object? _TrainHoppingAnimation_super_didRegisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TrainHoppingAnimationProxy)._flaxSuper_didRegisterListener();
  return null;
}

Object? _TrainHoppingAnimation_super_didUnregisterListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TrainHoppingAnimationProxy)._flaxSuper_didUnregisterListener();
  return null;
}

Object? _TrainHoppingAnimation_super_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TrainHoppingAnimationProxy)._flaxSuper_dispose();
  return null;
}

Object? _TrainHoppingAnimation_super_clearListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TrainHoppingAnimationProxy)._flaxSuper_clearListeners();
  return null;
}

Object? _TrainHoppingAnimation_super_notifyListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TrainHoppingAnimationProxy)._flaxSuper_notifyListeners();
  return null;
}

Object? _TrainHoppingAnimation_super_clearStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TrainHoppingAnimationProxy)._flaxSuper_clearStatusListeners();
  return null;
}

Object? _TrainHoppingAnimation_super_notifyStatusListeners(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TrainHoppingAnimationProxy)._flaxSuper_notifyStatusListeners(
    values["status"] as api.AnimationStatus,
  );
  return null;
}

Object? _TrainHoppingAnimation_super_get_currentTrain(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TrainHoppingAnimationProxy)._flaxSuperGet_currentTrain;
Object? _TrainHoppingAnimation_super_get_onSwitchedTrain(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TrainHoppingAnimationProxy)._flaxSuperGet_onSwitchedTrain;
Object? _TrainHoppingAnimation_super_get_value(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TrainHoppingAnimationProxy)._flaxSuperGet_value;
Object? _TrainHoppingAnimation_super_set_onSwitchedTrain(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _TrainHoppingAnimationProxy)._flaxSuperSet_onSwitchedTrain(
    values["value"] as void Function()?,
  );
  return null;
}

Object _createTrainHoppingAnimation(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TrainHoppingAnimation(
        values["_currentTrain"] as api.Animation<double>,
        values["_nextTrain"] as api.Animation<double>?,
        onSwitchedTrain: values["onSwitchedTrain"] as void Function()?,
      );
    case '@implementation':
      return _TrainHoppingAnimationProxy(
        values['@peer'] as FlaxProxyPeer,
        values["_currentTrain"] as api.Animation<double>,
        values["_nextTrain"] as api.Animation<double>?,
        onSwitchedTrain: values["onSwitchedTrain"] as void Function()?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTween(Object value) => value is api.Tween<Object?>;
Object? _Tween_begin(Object value) => (value as api.Tween<Object?>).begin;
Object? _Tween_end(Object value) => (value as api.Tween<Object?>).end;
void _Tween_set_begin(Object receiver, Object? value) {
  (receiver as api.Tween<Object?>).begin = value;
}

void _Tween_set_end(Object receiver, Object? value) {
  (receiver as api.Tween<Object?>).end = value;
}

Object? _Tween_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Tween<Object?>).transform(values["t"] as double);
}

Object? _Tween_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Tween<Object?>).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _Tween_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Tween<Object?>).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _Tween_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Tween<Object?>).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _Tween_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Tween<Object?>).lerp(values["t"] as double);
}

Object? _Tween_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Tween<Object?>).toString();
}

Object? _Tween_super_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as _TweenProxy)._flaxSuper_transform(values["t"] as double);
}

Object? _Tween_super_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as _TweenProxy)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _Tween_super_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as _TweenProxy)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _Tween_super_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as _TweenProxy)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _Tween_super_lerp(Object receiver, Map<String, Object?> values) {
  return (receiver as _TweenProxy)._flaxSuper_lerp(values["t"] as double);
}

Object? _Tween_super_get_begin(Object receiver, Map<String, Object?> values) =>
    (receiver as _TweenProxy)._flaxSuperGet_begin;
Object? _Tween_super_get_end(Object receiver, Map<String, Object?> values) =>
    (receiver as _TweenProxy)._flaxSuperGet_end;
Object? _Tween_super_set_begin(Object receiver, Map<String, Object?> values) {
  (receiver as _TweenProxy)._flaxSuperSet_begin(values["value"]);
  return null;
}

Object? _Tween_super_set_end(Object receiver, Map<String, Object?> values) {
  (receiver as _TweenProxy)._flaxSuperSet_end(values["value"]);
  return null;
}

Object _createTween(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Tween<Object?>(
        begin: ((values["begin"] == null ? null : values["begin"])) as Object?,
        end: ((values["end"] == null ? null : values["end"])) as Object?,
      );
    case '@implementation':
      return _TweenProxy<Object?>(
        values['@peer'] as FlaxProxyPeer,
        begin: values["begin"],
        end: values["end"],
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTweenSequence(Object value) => value is api.TweenSequence<Object?>;
Object? _TweenSequence_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TweenSequence<Object?>).transform(
    values["t"] as double,
  );
}

Object? _TweenSequence_evaluate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TweenSequence<Object?>).evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _TweenSequence_animate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TweenSequence<Object?>).animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _TweenSequence_chain(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TweenSequence<Object?>).chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object? _TweenSequence_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TweenSequence<Object?>).toString();
}

Object? _TweenSequence_super_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TweenSequenceProxy)._flaxSuper_transform(
    values["t"] as double,
  );
}

Object? _TweenSequence_super_evaluate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TweenSequenceProxy)._flaxSuper_evaluate(
    values["animation"] as api.Animation<double>,
  );
}

Object? _TweenSequence_super_animate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TweenSequenceProxy)._flaxSuper_animate(
    values["parent"] as api.Animation<double>,
  );
}

Object? _TweenSequence_super_chain(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _TweenSequenceProxy)._flaxSuper_chain(
    values["parent"] as api.Animatable<double>,
  );
}

Object _createTweenSequence(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TweenSequence<Object?>(
        values["items"] as List<api.TweenSequenceItem<Object?>>,
      );
    case '@implementation':
      return _TweenSequenceProxy<Object?>(
        values['@peer'] as FlaxProxyPeer,
        values["items"] as List<api.TweenSequenceItem<Object?>>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTweenSequenceItem(Object value) =>
    value is api.TweenSequenceItem<Object?>;
Object? _TweenSequenceItem_tween(Object value) =>
    (value as api.TweenSequenceItem<Object?>).tween;
Object? _TweenSequenceItem_weight(Object value) =>
    (value as api.TweenSequenceItem<Object?>).weight;
Object? _TweenSequenceItem_super_get_tween(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TweenSequenceItemProxy)._flaxSuperGet_tween;
Object? _TweenSequenceItem_super_get_weight(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TweenSequenceItemProxy)._flaxSuperGet_weight;
Object _createTweenSequenceItem(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TweenSequenceItem<Object?>(
        tween: values["tween"] as api.Animatable<Object?>,
        weight: values["weight"] as double,
      );
    case '@implementation':
      return _TweenSequenceItemProxy<Object?>(
        values['@peer'] as FlaxProxyPeer,
        tween: values["tween"] as api.Animatable<Object?>,
        weight: values["weight"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

abstract interface class _FlaxProxyDispatch2 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toStringDetails();
  bool get _flaxSuperGet_isDismissed;
  bool get _flaxSuperGet_isCompleted;
  bool get _flaxSuperGet_isAnimating;
  bool get _flaxSuperGet_isForwardOrCompleted;
}

String _FlaxProxyDispatch2_call_toStringDetails(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toStringDetails();
  }
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

bool _FlaxProxyDispatch2_get_isDismissed(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_isDismissed;
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

bool _FlaxProxyDispatch2_get_isCompleted(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_isCompleted;
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

bool _FlaxProxyDispatch2_get_isAnimating(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_isAnimating;
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

bool _FlaxProxyDispatch2_get_isForwardOrCompleted(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_isForwardOrCompleted;
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch0 {
  FlaxProxyPeer get _flaxPeer;
  void _flaxSuper_addListener(void Function() listener);
  void _flaxSuper_removeListener(void Function() listener);
  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  );
  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  );
  api.AnimationStatus get _flaxSuperGet_status;
}

void _FlaxProxyDispatch0_call_addListener(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
  void Function() listener,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    listener,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    _flaxReceiver._flaxSuper_addListener(listener);
    return;
  }
  return;
}

void _FlaxProxyDispatch0_call_removeListener(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
  void Function() listener,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    listener,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    _flaxReceiver._flaxSuper_removeListener(listener);
    return;
  }
  return;
}

void _FlaxProxyDispatch0_call_addStatusListener(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
  void Function(api.AnimationStatus status) listener,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    listener,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    _flaxReceiver._flaxSuper_addStatusListener(listener);
    return;
  }
  return;
}

void _FlaxProxyDispatch0_call_removeStatusListener(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
  void Function(api.AnimationStatus status) listener,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    listener,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    _flaxReceiver._flaxSuper_removeStatusListener(listener);
    return;
  }
  return;
}

api.AnimationStatus _FlaxProxyDispatch0_get_status(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_status;
  final _flaxConvertedResult = _flaxResult.$2 as api.AnimationStatus;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch1 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toString();
}

String _FlaxProxyDispatch1_call_toString(
  _FlaxProxyDispatch1 _flaxReceiver,
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

abstract interface class _FlaxProxyDispatch11 {
  FlaxProxyPeer get _flaxPeer;
  double _flaxSuper_transformInternal(double t);
  api.Curve get _flaxSuperGet_flipped;
}

double _FlaxProxyDispatch11_call_transformInternal(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
  double t,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    t,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_transformInternal(t);
  }
  final _flaxConvertedResult = _flaxResult.$2 as double;
  return _flaxConvertedResult;
}

api.Curve _FlaxProxyDispatch11_get_flipped(
  _FlaxProxyDispatch11 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_flipped;
  final _flaxConvertedResult = _flaxResult.$2 as api.Curve;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch10 {
  FlaxProxyPeer get _flaxPeer;
  double _flaxSuper_transform(double t);
}

double _FlaxProxyDispatch10_call_transform(
  _FlaxProxyDispatch10 _flaxReceiver,
  int _flaxMember,
  double t,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    t,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_transform(t);
  }
  final _flaxConvertedResult = _flaxResult.$2 as double;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch18 {
  FlaxProxyPeer get _flaxPeer;
  int _flaxSuper_lerp(double t);
  int _flaxSuper_transform(double t);
  int _flaxSuper_evaluate(api.Animation<double> animation);
  api.Animation<int> _flaxSuper_animate(api.Animation<double> parent);
  api.Animatable<int> _flaxSuper_chain(api.Animatable<double> parent);
  int? get _flaxSuperGet_begin;
  int? get _flaxSuperGet_end;
  void _flaxSuperSet_begin(int? value);
  void _flaxSuperSet_end(int? value);
}

int _FlaxProxyDispatch18_call_lerp(
  _FlaxProxyDispatch18 _flaxReceiver,
  int _flaxMember,
  double t,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    t,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_lerp(t);
  }
  final _flaxConvertedResult = _flaxResult.$2 as int;
  return _flaxConvertedResult;
}

int _FlaxProxyDispatch18_call_transform(
  _FlaxProxyDispatch18 _flaxReceiver,
  int _flaxMember,
  double t,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    t,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_transform(t);
  }
  final _flaxConvertedResult = _flaxResult.$2 as int;
  return _flaxConvertedResult;
}

int _FlaxProxyDispatch18_call_evaluate(
  _FlaxProxyDispatch18 _flaxReceiver,
  int _flaxMember,
  api.Animation<double> animation,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    animation,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_evaluate(animation);
  }
  final _flaxConvertedResult = _flaxResult.$2 as int;
  return _flaxConvertedResult;
}

api.Animation<int> _FlaxProxyDispatch18_call_animate(
  _FlaxProxyDispatch18 _flaxReceiver,
  int _flaxMember,
  api.Animation<double> parent,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    parent,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_animate(parent);
  }
  final _flaxConvertedResult = _flaxResult.$2 as api.Animation<int>;
  return _flaxConvertedResult;
}

api.Animatable<int> _FlaxProxyDispatch18_call_chain(
  _FlaxProxyDispatch18 _flaxReceiver,
  int _flaxMember,
  api.Animatable<double> parent,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    parent,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_chain(parent);
  }
  final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<int>;
  return _flaxConvertedResult;
}

int? _FlaxProxyDispatch18_get_begin(
  _FlaxProxyDispatch18 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_begin;
  final _flaxConvertedResult = _flaxResult.$2 as int?;
  return _flaxConvertedResult;
}

int? _FlaxProxyDispatch18_get_end(
  _FlaxProxyDispatch18 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_end;
  final _flaxConvertedResult = _flaxResult.$2 as int?;
  return _flaxConvertedResult;
}

void _FlaxProxyDispatch18_set_begin(
  _FlaxProxyDispatch18 _flaxReceiver,
  int _flaxMember,
  int? value,
) {
  final result = _flaxReceiver._flaxPeer.call(_flaxMember, [value], const {});
  if (!result.$1) {
    _flaxReceiver._flaxSuperSet_begin(value);
    return;
  }
}

void _FlaxProxyDispatch18_set_end(
  _FlaxProxyDispatch18 _flaxReceiver,
  int _flaxMember,
  int? value,
) {
  final result = _flaxReceiver._flaxPeer.call(_flaxMember, [value], const {});
  if (!result.$1) {
    _flaxReceiver._flaxSuperSet_end(value);
    return;
  }
}

abstract interface class _FlaxProxyDispatch12 {
  FlaxProxyPeer get _flaxPeer;
  Iterable<api.Curve2DSample> _flaxSuper_generateSamples({
    Object? start = _flaxOmitted,
    Object? end = _flaxOmitted,
    Object? tolerance = _flaxOmitted,
  });
  double _flaxSuper_findInverse(double x);
  api1.Offset _flaxSuper_transform(double t);
  api1.Offset _flaxSuper_transformInternal(double t);
  int get _flaxSuperGet_samplingSeed;
}

Iterable<api.Curve2DSample> _FlaxProxyDispatch12_call_generateSamples(
  _FlaxProxyDispatch12 _flaxReceiver,
  int _flaxMember, {
  Object? start = _flaxOmitted,
  Object? end = _flaxOmitted,
  Object? tolerance = _flaxOmitted,
}) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{
      if (!identical(start, _flaxOmitted)) "start": start,
      if (!identical(end, _flaxOmitted)) "end": end,
      if (!identical(tolerance, _flaxOmitted)) "tolerance": tolerance,
    },
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_generateSamples(
      start: start,
      end: end,
      tolerance: tolerance,
    );
  }
  final _flaxConvertedResult = _flaxResult.$2 as Iterable<api.Curve2DSample>;
  return _flaxConvertedResult;
}

double _FlaxProxyDispatch12_call_findInverse(
  _FlaxProxyDispatch12 _flaxReceiver,
  int _flaxMember,
  double x,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    x,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_findInverse(x);
  }
  final _flaxConvertedResult = _flaxResult.$2 as double;
  return _flaxConvertedResult;
}

api1.Offset _FlaxProxyDispatch12_call_transform(
  _FlaxProxyDispatch12 _flaxReceiver,
  int _flaxMember,
  double t,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    t,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_transform(t);
  }
  final _flaxConvertedResult = _flaxResult.$2 as api1.Offset;
  return _flaxConvertedResult;
}

api1.Offset _FlaxProxyDispatch12_call_transformInternal(
  _FlaxProxyDispatch12 _flaxReceiver,
  int _flaxMember,
  double t,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    t,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_transformInternal(t);
  }
  final _flaxConvertedResult = _flaxResult.$2 as api1.Offset;
  return _flaxConvertedResult;
}

int _FlaxProxyDispatch12_get_samplingSeed(
  _FlaxProxyDispatch12 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_samplingSeed;
  final _flaxConvertedResult = _flaxResult.$2 as int;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch13 {
  FlaxProxyPeer get _flaxPeer;
  double _flaxSuper_evaluate(api.Animation<double> animation);
  api.Animation<double> _flaxSuper_animate(api.Animation<double> parent);
  api.Animatable<double> _flaxSuper_chain(api.Animatable<double> parent);
}

double _FlaxProxyDispatch13_call_evaluate(
  _FlaxProxyDispatch13 _flaxReceiver,
  int _flaxMember,
  api.Animation<double> animation,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    animation,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_evaluate(animation);
  }
  final _flaxConvertedResult = _flaxResult.$2 as double;
  return _flaxConvertedResult;
}

api.Animation<double> _FlaxProxyDispatch13_call_animate(
  _FlaxProxyDispatch13 _flaxReceiver,
  int _flaxMember,
  api.Animation<double> parent,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    parent,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_animate(parent);
  }
  final _flaxConvertedResult = _flaxResult.$2 as api.Animation<double>;
  return _flaxConvertedResult;
}

api.Animatable<double> _FlaxProxyDispatch13_call_chain(
  _FlaxProxyDispatch13 _flaxReceiver,
  int _flaxMember,
  api.Animatable<double> parent,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    parent,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_chain(parent);
  }
  final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<double>;
  return _flaxConvertedResult;
}

final class _AlwaysStoppedAnimationProxy<_Owner0 extends Object?>
    extends api.AlwaysStoppedAnimation<_Owner0>
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _AlwaysStoppedAnimationProxy(this._flaxPeer, _Owner0 super.value);
  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 0, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 1, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 2, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 3, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(4, [
            U,
          ], _flaxProxySignature_AlwaysStoppedAnimation_drive<_Owner0, U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 6);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  _Owner0 get value {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 8);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 9);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 10);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 11);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 12);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }
}

FlaxCallbackBinding _flaxProxySignature_AlwaysStoppedAnimation_drive<
  _Owner0 extends Object?,
  U extends Object?
>(FlaxDartTypes types) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

final class _AnimatableProxy<_Owner0 extends Object?>
    extends api.Animatable<_Owner0> {
  final FlaxProxyPeer _flaxPeer;
  _AnimatableProxy(this._flaxPeer);
  @override
  _Owner0 transform(double t) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: transform');
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  @override
  _Owner0 evaluate(api.Animation<double> animation) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      animation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_evaluate(animation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<_Owner0> animate(api.Animation<double> parent) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animate(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<_Owner0> chain(api.Animatable<double> parent) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_chain(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animatable<_Owner0> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }
}

final class _AnimationProxy<_Owner0 extends Object?>
    extends api.Animation<_Owner0>
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _AnimationProxy(this._flaxPeer);
  @override
  void addListener(void Function() listener) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      listener,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addListener');
    }
    return;
  }

  @override
  void removeListener(void Function() listener) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      listener,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: removeListener');
    }
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[
      listener,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: addStatusListener');
    }
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      listener,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: removeStatusListener');
    }
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(4, [
            U,
          ], _flaxProxySignature_Animation_drive<_Owner0, U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 6);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  api.AnimationStatus get status {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as api.AnimationStatus;
    return _flaxConvertedResult;
  }

  @override
  _Owner0 get value {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 9);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 10);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 11);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 12);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }
}

FlaxCallbackBinding _flaxProxySignature_Animation_drive<
  _Owner0 extends Object?,
  U extends Object?
>(FlaxDartTypes types) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _AnimationControllerProxy extends api.AnimationController
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _AnimationControllerProxy(
    this._flaxPeer, {
    double? super.value,
    api3.Duration? super.duration,
    api3.Duration? super.reverseDuration,
    String? super.debugLabel,
    double super.lowerBound,
    double super.upperBound,
    api.AnimationBehavior super.animationBehavior,
    required api6.TickerProvider super.vsync,
  });
  _AnimationControllerProxy.unbounded(
    this._flaxPeer, {
    double super.value,
    api3.Duration? super.duration,
    api3.Duration? super.reverseDuration,
    String? super.debugLabel,
    required api6.TickerProvider super.vsync,
    api.AnimationBehavior super.animationBehavior,
  }) : super.unbounded();
  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 0, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 1, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 2, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 3, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(4, [
            U,
          ], _flaxProxySignature_AnimationController_drive<U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 6);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  void didRegisterListener() {
    final _flaxResult = _flaxPeer.call(7, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didRegisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didRegisterListener() {
    super.didRegisterListener();
    return;
  }

  @override
  void didUnregisterListener() {
    final _flaxResult = _flaxPeer.call(8, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didUnregisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didUnregisterListener() {
    super.didUnregisterListener();
    return;
  }

  @override
  // ignore: must_call_super
  void dispose() {
    if (!_flaxPeer.active) return;
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "dispose";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(9, <Object?>[], <String, Object?>{});
      if (!_flaxResult.$1) {
        _flaxSuper_dispose();
        return;
      }
      if (!(_flaxCalledSuper))
        throw StateError("dispose must call super.dispose()");
      return;
    } finally {
      _flaxActiveSuperMember = _flaxPreviousSuperMember;
      _flaxCalledSuper = _flaxPreviousCalledSuper;
    }
  }

  void _flaxSuper_dispose() {
    if (_flaxActiveSuperMember == "dispose") _flaxCalledSuper = true;
    super.dispose();
    return;
  }

  @override
  void clearListeners() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearListeners() {
    super.clearListeners();
    return;
  }

  @override
  void notifyListeners() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyListeners();
      return;
    }
    return;
  }

  void _flaxSuper_notifyListeners() {
    super.notifyListeners();
    return;
  }

  @override
  void clearStatusListeners() {
    final _flaxResult = _flaxPeer.call(12, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearStatusListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearStatusListeners() {
    super.clearStatusListeners();
    return;
  }

  @override
  void notifyStatusListeners(api.AnimationStatus status) {
    final _flaxResult = _flaxPeer.call(13, <Object?>[
      status,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyStatusListeners(status);
      return;
    }
    return;
  }

  void _flaxSuper_notifyStatusListeners(api.AnimationStatus status) {
    super.notifyStatusListeners(status);
    return;
  }

  @override
  void resync(api6.TickerProvider vsync) {
    final _flaxResult = _flaxPeer.call(14, <Object?>[
      vsync,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_resync(vsync);
      return;
    }
    return;
  }

  void _flaxSuper_resync(api6.TickerProvider vsync) {
    super.resync(vsync);
    return;
  }

  @override
  void reset() {
    final _flaxResult = _flaxPeer.call(15, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_reset();
      return;
    }
    return;
  }

  void _flaxSuper_reset() {
    super.reset();
    return;
  }

  @override
  api6.TickerFuture forward({Object? from = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(16, <Object?>[], <String, Object?>{
      if (!identical(from, _flaxOmitted)) "from": from,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_forward(from: from);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api6.TickerFuture;
    return _flaxConvertedResult;
  }

  api6.TickerFuture _flaxSuper_forward({Object? from = _flaxOmitted}) {
    final _flaxHas0 = !identical(from, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.forward,
      <Object?>[(_flaxHas0 ? from as double? : null)],
      <int>[(_flaxHas0 ? 1 : 0)],
      const <String>["from"],
    ) as api6.TickerFuture);
  }

  @override
  api6.TickerFuture reverse({Object? from = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(17, <Object?>[], <String, Object?>{
      if (!identical(from, _flaxOmitted)) "from": from,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_reverse(from: from);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api6.TickerFuture;
    return _flaxConvertedResult;
  }

  api6.TickerFuture _flaxSuper_reverse({Object? from = _flaxOmitted}) {
    final _flaxHas0 = !identical(from, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.reverse,
      <Object?>[(_flaxHas0 ? from as double? : null)],
      <int>[(_flaxHas0 ? 1 : 0)],
      const <String>["from"],
    ) as api6.TickerFuture);
  }

  @override
  api6.TickerFuture toggle({Object? from = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(18, <Object?>[], <String, Object?>{
      if (!identical(from, _flaxOmitted)) "from": from,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toggle(from: from);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api6.TickerFuture;
    return _flaxConvertedResult;
  }

  api6.TickerFuture _flaxSuper_toggle({Object? from = _flaxOmitted}) {
    final _flaxHas0 = !identical(from, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.toggle,
      <Object?>[(_flaxHas0 ? from as double? : null)],
      <int>[(_flaxHas0 ? 1 : 0)],
      const <String>["from"],
    ) as api6.TickerFuture);
  }

  @override
  api6.TickerFuture animateTo(
    double target, {
    Object? duration = _flaxOmitted,
    Object? curve = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      19,
      <Object?>[target],
      <String, Object?>{
        if (!identical(duration, _flaxOmitted)) "duration": duration,
        if (!identical(curve, _flaxOmitted)) "curve": curve,
      },
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_animateTo(target, duration: duration, curve: curve);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api6.TickerFuture;
    return _flaxConvertedResult;
  }

  api6.TickerFuture _flaxSuper_animateTo(
    double target, {
    Object? duration = _flaxOmitted,
    Object? curve = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(duration, _flaxOmitted);
    final _flaxHas2 = !identical(curve, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.animateTo,
      <Object?>[
        target,
        (_flaxHas1 ? duration as api3.Duration? : null),
        (_flaxHas2 ? curve as api.Curve : null),
      ],
      <int>[1 | (_flaxHas1 ? 2 : 0) | (_flaxHas2 ? 4 : 0)],
      const <String>["", "duration", "curve"],
    ) as api6.TickerFuture);
  }

  @override
  api6.TickerFuture animateBack(
    double target, {
    Object? duration = _flaxOmitted,
    Object? curve = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      20,
      <Object?>[target],
      <String, Object?>{
        if (!identical(duration, _flaxOmitted)) "duration": duration,
        if (!identical(curve, _flaxOmitted)) "curve": curve,
      },
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_animateBack(target, duration: duration, curve: curve);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api6.TickerFuture;
    return _flaxConvertedResult;
  }

  api6.TickerFuture _flaxSuper_animateBack(
    double target, {
    Object? duration = _flaxOmitted,
    Object? curve = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(duration, _flaxOmitted);
    final _flaxHas2 = !identical(curve, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.animateBack,
      <Object?>[
        target,
        (_flaxHas1 ? duration as api3.Duration? : null),
        (_flaxHas2 ? curve as api.Curve : null),
      ],
      <int>[1 | (_flaxHas1 ? 2 : 0) | (_flaxHas2 ? 4 : 0)],
      const <String>["", "duration", "curve"],
    ) as api6.TickerFuture);
  }

  @override
  api6.TickerFuture repeat({
    Object? min = _flaxOmitted,
    Object? max = _flaxOmitted,
    Object? reverse = _flaxOmitted,
    Object? period = _flaxOmitted,
    Object? count = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(21, <Object?>[], <String, Object?>{
      if (!identical(min, _flaxOmitted)) "min": min,
      if (!identical(max, _flaxOmitted)) "max": max,
      if (!identical(reverse, _flaxOmitted)) "reverse": reverse,
      if (!identical(period, _flaxOmitted)) "period": period,
      if (!identical(count, _flaxOmitted)) "count": count,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_repeat(
        min: min,
        max: max,
        reverse: reverse,
        period: period,
        count: count,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api6.TickerFuture;
    return _flaxConvertedResult;
  }

  api6.TickerFuture _flaxSuper_repeat({
    Object? min = _flaxOmitted,
    Object? max = _flaxOmitted,
    Object? reverse = _flaxOmitted,
    Object? period = _flaxOmitted,
    Object? count = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(min, _flaxOmitted);
    final _flaxHas1 = !identical(max, _flaxOmitted);
    final _flaxHas2 = !identical(reverse, _flaxOmitted);
    final _flaxHas3 = !identical(period, _flaxOmitted);
    final _flaxHas4 = !identical(count, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.repeat,
      <Object?>[
        (_flaxHas0 ? min as double? : null),
        (_flaxHas1 ? max as double? : null),
        (_flaxHas2 ? reverse as bool : null),
        (_flaxHas3 ? period as api3.Duration? : null),
        (_flaxHas4 ? count as int? : null),
      ],
      <int>[
        (_flaxHas0 ? 1 : 0) |
            (_flaxHas1 ? 2 : 0) |
            (_flaxHas2 ? 4 : 0) |
            (_flaxHas3 ? 8 : 0) |
            (_flaxHas4 ? 16 : 0),
      ],
      const <String>["min", "max", "reverse", "period", "count"],
    ) as api6.TickerFuture);
  }

  @override
  api6.TickerFuture fling({
    Object? velocity = _flaxOmitted,
    Object? springDescription = _flaxOmitted,
    Object? animationBehavior = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(22, <Object?>[], <String, Object?>{
      if (!identical(velocity, _flaxOmitted)) "velocity": velocity,
      if (!identical(springDescription, _flaxOmitted))
        "springDescription": springDescription,
      if (!identical(animationBehavior, _flaxOmitted))
        "animationBehavior": animationBehavior,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_fling(
        velocity: velocity,
        springDescription: springDescription,
        animationBehavior: animationBehavior,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api6.TickerFuture;
    return _flaxConvertedResult;
  }

  api6.TickerFuture _flaxSuper_fling({
    Object? velocity = _flaxOmitted,
    Object? springDescription = _flaxOmitted,
    Object? animationBehavior = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(velocity, _flaxOmitted);
    final _flaxHas1 = !identical(springDescription, _flaxOmitted);
    final _flaxHas2 = !identical(animationBehavior, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.fling,
      <Object?>[
        (_flaxHas0 ? velocity as double : null),
        (_flaxHas1 ? springDescription as api5.SpringDescription? : null),
        (_flaxHas2 ? animationBehavior as api.AnimationBehavior? : null),
      ],
      <int>[(_flaxHas0 ? 1 : 0) | (_flaxHas1 ? 2 : 0) | (_flaxHas2 ? 4 : 0)],
      const <String>["velocity", "springDescription", "animationBehavior"],
    ) as api6.TickerFuture);
  }

  @override
  api6.TickerFuture animateWith(api5.Simulation simulation) {
    final _flaxResult = _flaxPeer.call(23, <Object?>[
      simulation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animateWith(simulation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api6.TickerFuture;
    return _flaxConvertedResult;
  }

  api6.TickerFuture _flaxSuper_animateWith(api5.Simulation simulation) {
    return super.animateWith(simulation);
  }

  @override
  api6.TickerFuture animateBackWith(api5.Simulation simulation) {
    final _flaxResult = _flaxPeer.call(24, <Object?>[
      simulation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animateBackWith(simulation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api6.TickerFuture;
    return _flaxConvertedResult;
  }

  api6.TickerFuture _flaxSuper_animateBackWith(api5.Simulation simulation) {
    return super.animateBackWith(simulation);
  }

  @override
  void stop({Object? canceled = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(25, <Object?>[], <String, Object?>{
      if (!identical(canceled, _flaxOmitted)) "canceled": canceled,
    });
    if (!_flaxResult.$1) {
      _flaxSuper_stop(canceled: canceled);
      return;
    }
    return;
  }

  void _flaxSuper_stop({Object? canceled = _flaxOmitted}) {
    final _flaxHas0 = !identical(canceled, _flaxOmitted);
    flaxInvokeWithDefaults(
      super.stop,
      <Object?>[(_flaxHas0 ? canceled as bool : null)],
      <int>[(_flaxHas0 ? 1 : 0)],
      const <String>["canceled"],
    );
    return;
  }

  @override
  double get lowerBound {
    final _flaxResult = _flaxPeer.call(26, const [], const {});
    if (!_flaxResult.$1) return super.lowerBound;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_lowerBound {
    return super.lowerBound;
  }

  @override
  double get upperBound {
    final _flaxResult = _flaxPeer.call(27, const [], const {});
    if (!_flaxResult.$1) return super.upperBound;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_upperBound {
    return super.upperBound;
  }

  @override
  String? get debugLabel {
    final _flaxResult = _flaxPeer.call(28, const [], const {});
    if (!_flaxResult.$1) return super.debugLabel;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_debugLabel {
    return super.debugLabel;
  }

  @override
  api.AnimationBehavior get animationBehavior {
    final _flaxResult = _flaxPeer.call(29, const [], const {});
    if (!_flaxResult.$1) return super.animationBehavior;
    final _flaxConvertedResult = _flaxResult.$2 as api.AnimationBehavior;
    return _flaxConvertedResult;
  }

  api.AnimationBehavior get _flaxSuperGet_animationBehavior {
    return super.animationBehavior;
  }

  @override
  api.Animation<double> get view {
    final _flaxResult = _flaxPeer.call(30, const [], const {});
    if (!_flaxResult.$1) return super.view;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<double>;
    return _flaxConvertedResult;
  }

  api.Animation<double> get _flaxSuperGet_view {
    return super.view;
  }

  @override
  api3.Duration? get duration {
    final _flaxResult = _flaxPeer.call(31, const [], const {});
    if (!_flaxResult.$1) return super.duration;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Duration?;
    return _flaxConvertedResult;
  }

  api3.Duration? get _flaxSuperGet_duration {
    return super.duration;
  }

  @override
  api3.Duration? get reverseDuration {
    final _flaxResult = _flaxPeer.call(32, const [], const {});
    if (!_flaxResult.$1) return super.reverseDuration;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Duration?;
    return _flaxConvertedResult;
  }

  api3.Duration? get _flaxSuperGet_reverseDuration {
    return super.reverseDuration;
  }

  @override
  double get value {
    final _flaxResult = _flaxPeer.call(33, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_value {
    return super.value;
  }

  @override
  double get velocity {
    final _flaxResult = _flaxPeer.call(34, const [], const {});
    if (!_flaxResult.$1) return super.velocity;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_velocity {
    return super.velocity;
  }

  @override
  api3.Duration? get lastElapsedDuration {
    final _flaxResult = _flaxPeer.call(35, const [], const {});
    if (!_flaxResult.$1) return super.lastElapsedDuration;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Duration?;
    return _flaxConvertedResult;
  }

  api3.Duration? get _flaxSuperGet_lastElapsedDuration {
    return super.lastElapsedDuration;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 36);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 37);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 38);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 39);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 40);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }

  @override
  set duration(api3.Duration? value) {
    final result = _flaxPeer.call(41, [value], const {});
    if (!result.$1) {
      super.duration = value;
      return;
    }
  }

  void _flaxSuperSet_duration(api3.Duration? value) {
    super.duration = value;
  }

  @override
  set reverseDuration(api3.Duration? value) {
    final result = _flaxPeer.call(42, [value], const {});
    if (!result.$1) {
      super.reverseDuration = value;
      return;
    }
  }

  void _flaxSuperSet_reverseDuration(api3.Duration? value) {
    super.reverseDuration = value;
  }

  @override
  set value(double value) {
    final result = _flaxPeer.call(43, [value], const {});
    if (!result.$1) {
      super.value = value;
      return;
    }
  }

  void _flaxSuperSet_value(double value) {
    super.value = value;
  }
}

FlaxCallbackBinding _flaxProxySignature_AnimationController_drive<
  U extends Object?
>(FlaxDartTypes types) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

final class _AnimationMaxProxy<_Owner0 extends num>
    extends api.AnimationMax<_Owner0>
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _AnimationMaxProxy(
    this._flaxPeer,
    api.Animation<_Owner0> super.first,
    api.Animation<_Owner0> super.next,
  );
  @override
  void didStartListening() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStartListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStartListening() {
    super.didStartListening();
    return;
  }

  @override
  void didStopListening() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStopListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStopListening() {
    super.didStopListening();
    return;
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 3, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 4, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 5, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 6, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(7, [
            U,
          ], _flaxProxySignature_AnimationMax_drive<_Owner0, U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      7,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 8);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  void didRegisterListener() {
    final _flaxResult = _flaxPeer.call(9, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didRegisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didRegisterListener() {
    super.didRegisterListener();
    return;
  }

  @override
  void didUnregisterListener() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didUnregisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didUnregisterListener() {
    super.didUnregisterListener();
    return;
  }

  @override
  void clearListeners() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearListeners() {
    super.clearListeners();
    return;
  }

  @override
  void notifyListeners() {
    final _flaxResult = _flaxPeer.call(12, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyListeners();
      return;
    }
    return;
  }

  void _flaxSuper_notifyListeners() {
    super.notifyListeners();
    return;
  }

  @override
  void clearStatusListeners() {
    final _flaxResult = _flaxPeer.call(13, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearStatusListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearStatusListeners() {
    super.clearStatusListeners();
    return;
  }

  @override
  void notifyStatusListeners(api.AnimationStatus status) {
    final _flaxResult = _flaxPeer.call(14, <Object?>[
      status,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyStatusListeners(status);
      return;
    }
    return;
  }

  void _flaxSuper_notifyStatusListeners(api.AnimationStatus status) {
    super.notifyStatusListeners(status);
    return;
  }

  @override
  _Owner0 get value {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api.Animation<_Owner0> get first {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.first;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> get _flaxSuperGet_first {
    return super.first;
  }

  @override
  api.Animation<_Owner0> get next {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.next;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> get _flaxSuperGet_next {
    return super.next;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 18);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 19);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 20);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 21);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 22);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }

  @override
  bool get isListening {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.isListening;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isListening {
    return super.isListening;
  }
}

FlaxCallbackBinding _flaxProxySignature_AnimationMax_drive<
  _Owner0 extends num,
  U extends Object?
>(FlaxDartTypes types) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

final class _AnimationMeanProxy extends api.AnimationMean
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _AnimationMeanProxy(
    this._flaxPeer, {
    required api.Animation<double> super.left,
    required api.Animation<double> super.right,
  });
  @override
  void didStartListening() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStartListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStartListening() {
    super.didStartListening();
    return;
  }

  @override
  void didStopListening() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStopListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStopListening() {
    super.didStopListening();
    return;
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 3, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 4, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 5, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 6, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(7, [
            U,
          ], _flaxProxySignature_AnimationMean_drive<U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      7,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 8);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  void didRegisterListener() {
    final _flaxResult = _flaxPeer.call(9, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didRegisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didRegisterListener() {
    super.didRegisterListener();
    return;
  }

  @override
  void didUnregisterListener() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didUnregisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didUnregisterListener() {
    super.didUnregisterListener();
    return;
  }

  @override
  void clearListeners() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearListeners() {
    super.clearListeners();
    return;
  }

  @override
  void notifyListeners() {
    final _flaxResult = _flaxPeer.call(12, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyListeners();
      return;
    }
    return;
  }

  void _flaxSuper_notifyListeners() {
    super.notifyListeners();
    return;
  }

  @override
  void clearStatusListeners() {
    final _flaxResult = _flaxPeer.call(13, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearStatusListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearStatusListeners() {
    super.clearStatusListeners();
    return;
  }

  @override
  void notifyStatusListeners(api.AnimationStatus status) {
    final _flaxResult = _flaxPeer.call(14, <Object?>[
      status,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyStatusListeners(status);
      return;
    }
    return;
  }

  void _flaxSuper_notifyStatusListeners(api.AnimationStatus status) {
    super.notifyStatusListeners(status);
    return;
  }

  @override
  double get value {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api.Animation<double> get first {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.first;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<double>;
    return _flaxConvertedResult;
  }

  api.Animation<double> get _flaxSuperGet_first {
    return super.first;
  }

  @override
  api.Animation<double> get next {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.next;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<double>;
    return _flaxConvertedResult;
  }

  api.Animation<double> get _flaxSuperGet_next {
    return super.next;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 18);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 19);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 20);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 21);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 22);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }

  @override
  bool get isListening {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.isListening;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isListening {
    return super.isListening;
  }
}

FlaxCallbackBinding _flaxProxySignature_AnimationMean_drive<U extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

final class _AnimationMinProxy<_Owner0 extends num>
    extends api.AnimationMin<_Owner0>
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _AnimationMinProxy(
    this._flaxPeer,
    api.Animation<_Owner0> super.first,
    api.Animation<_Owner0> super.next,
  );
  @override
  void didStartListening() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStartListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStartListening() {
    super.didStartListening();
    return;
  }

  @override
  void didStopListening() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStopListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStopListening() {
    super.didStopListening();
    return;
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 3, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 4, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 5, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 6, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(7, [
            U,
          ], _flaxProxySignature_AnimationMin_drive<_Owner0, U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      7,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 8);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  void didRegisterListener() {
    final _flaxResult = _flaxPeer.call(9, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didRegisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didRegisterListener() {
    super.didRegisterListener();
    return;
  }

  @override
  void didUnregisterListener() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didUnregisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didUnregisterListener() {
    super.didUnregisterListener();
    return;
  }

  @override
  void clearListeners() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearListeners() {
    super.clearListeners();
    return;
  }

  @override
  void notifyListeners() {
    final _flaxResult = _flaxPeer.call(12, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyListeners();
      return;
    }
    return;
  }

  void _flaxSuper_notifyListeners() {
    super.notifyListeners();
    return;
  }

  @override
  void clearStatusListeners() {
    final _flaxResult = _flaxPeer.call(13, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearStatusListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearStatusListeners() {
    super.clearStatusListeners();
    return;
  }

  @override
  void notifyStatusListeners(api.AnimationStatus status) {
    final _flaxResult = _flaxPeer.call(14, <Object?>[
      status,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyStatusListeners(status);
      return;
    }
    return;
  }

  void _flaxSuper_notifyStatusListeners(api.AnimationStatus status) {
    super.notifyStatusListeners(status);
    return;
  }

  @override
  _Owner0 get value {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api.Animation<_Owner0> get first {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.first;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> get _flaxSuperGet_first {
    return super.first;
  }

  @override
  api.Animation<_Owner0> get next {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.next;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> get _flaxSuperGet_next {
    return super.next;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 18);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 19);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 20);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 21);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 22);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }

  @override
  bool get isListening {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.isListening;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isListening {
    return super.isListening;
  }
}

FlaxCallbackBinding _flaxProxySignature_AnimationMin_drive<
  _Owner0 extends num,
  U extends Object?
>(FlaxDartTypes types) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _AnimationStyleProxy extends api.AnimationStyle {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _AnimationStyleProxy(
    this._flaxPeer, {
    api.Curve? super.curve,
    api3.Duration? super.duration,
    api.Curve? super.reverseCurve,
    api3.Duration? super.reverseDuration,
  });
  @override
  String toStringShort() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_toStringShort();
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toStringShort() {
    return super.toStringShort();
  }

  @override
  String toString({Object? minLevel = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{
      if (!identical(minLevel, _flaxOmitted)) "minLevel": minLevel,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toString(minLevel: minLevel);
    }
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String _flaxSuper_toString({Object? minLevel = _flaxOmitted}) {
    final _flaxHas0 = !identical(minLevel, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.toString,
      <Object?>[(_flaxHas0 ? minLevel as api2.DiagnosticLevel : null)],
      <int>[(_flaxHas0 ? 1 : 0)],
      const <String>["minLevel"],
    ) as String);
  }

  @override
  api2.DiagnosticsNode toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{
      if (!identical(name, _flaxOmitted)) "name": name,
      if (!identical(style, _flaxOmitted)) "style": style,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_toDiagnosticsNode(name: name, style: style);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api2.DiagnosticsNode;
    return _flaxConvertedResult;
  }

  api2.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(name, _flaxOmitted);
    final _flaxHas1 = !identical(style, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.toDiagnosticsNode,
      <Object?>[
        (_flaxHas0 ? name as String? : null),
        (_flaxHas1 ? style as api2.DiagnosticsTreeStyle? : null),
      ],
      <int>[(_flaxHas0 ? 1 : 0) | (_flaxHas1 ? 2 : 0)],
      const <String>["name", "style"],
    ) as api2.DiagnosticsNode);
  }

  @override
  // ignore: must_call_super
  void debugFillProperties(api2.DiagnosticPropertiesBuilder properties) {
    if (!_flaxPeer.active) return;
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "debugFillProperties";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(3, <Object?>[
        properties,
      ], <String, Object?>{});
      if (!_flaxResult.$1) {
        _flaxSuper_debugFillProperties(properties);
        return;
      }
      if (!(_flaxCalledSuper))
        throw StateError(
          "debugFillProperties must call super.debugFillProperties()",
        );
      return;
    } finally {
      _flaxActiveSuperMember = _flaxPreviousSuperMember;
      _flaxCalledSuper = _flaxPreviousCalledSuper;
    }
  }

  void _flaxSuper_debugFillProperties(
    api2.DiagnosticPropertiesBuilder properties,
  ) {
    if (_flaxActiveSuperMember == "debugFillProperties")
      _flaxCalledSuper = true;
    super.debugFillProperties(properties);
    return;
  }

  @override
  api.AnimationStyle copyWith({
    Object? curve = _flaxOmitted,
    Object? duration = _flaxOmitted,
    Object? reverseCurve = _flaxOmitted,
    Object? reverseDuration = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{
      if (!identical(curve, _flaxOmitted)) "curve": curve,
      if (!identical(duration, _flaxOmitted)) "duration": duration,
      if (!identical(reverseCurve, _flaxOmitted)) "reverseCurve": reverseCurve,
      if (!identical(reverseDuration, _flaxOmitted))
        "reverseDuration": reverseDuration,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_copyWith(
        curve: curve,
        duration: duration,
        reverseCurve: reverseCurve,
        reverseDuration: reverseDuration,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AnimationStyle;
    return _flaxConvertedResult;
  }

  api.AnimationStyle _flaxSuper_copyWith({
    Object? curve = _flaxOmitted,
    Object? duration = _flaxOmitted,
    Object? reverseCurve = _flaxOmitted,
    Object? reverseDuration = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(curve, _flaxOmitted);
    final _flaxHas1 = !identical(duration, _flaxOmitted);
    final _flaxHas2 = !identical(reverseCurve, _flaxOmitted);
    final _flaxHas3 = !identical(reverseDuration, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.copyWith,
      <Object?>[
        (_flaxHas0 ? curve as api.Curve? : null),
        (_flaxHas1 ? duration as api3.Duration? : null),
        (_flaxHas2 ? reverseCurve as api.Curve? : null),
        (_flaxHas3 ? reverseDuration as api3.Duration? : null),
      ],
      <int>[
        (_flaxHas0 ? 1 : 0) |
            (_flaxHas1 ? 2 : 0) |
            (_flaxHas2 ? 4 : 0) |
            (_flaxHas3 ? 8 : 0),
      ],
      const <String>["curve", "duration", "reverseCurve", "reverseDuration"],
    ) as api.AnimationStyle);
  }

  @override
  api.AnimationStyle merge(api.AnimationStyle? other) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      other,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_merge(other);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AnimationStyle;
    return _flaxConvertedResult;
  }

  api.AnimationStyle _flaxSuper_merge(api.AnimationStyle? other) {
    return super.merge(other);
  }

  @override
  api.Curve? get curve {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.curve;
    final _flaxConvertedResult = _flaxResult.$2 as api.Curve?;
    return _flaxConvertedResult;
  }

  api.Curve? get _flaxSuperGet_curve {
    return super.curve;
  }

  @override
  api3.Duration? get duration {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.duration;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Duration?;
    return _flaxConvertedResult;
  }

  api3.Duration? get _flaxSuperGet_duration {
    return super.duration;
  }

  @override
  api.Curve? get reverseCurve {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.reverseCurve;
    final _flaxConvertedResult = _flaxResult.$2 as api.Curve?;
    return _flaxConvertedResult;
  }

  api.Curve? get _flaxSuperGet_reverseCurve {
    return super.reverseCurve;
  }

  @override
  api3.Duration? get reverseDuration {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.reverseDuration;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Duration?;
    return _flaxConvertedResult;
  }

  api3.Duration? get _flaxSuperGet_reverseDuration {
    return super.reverseDuration;
  }
}

final class _CatmullRomCurveProxy extends api.CatmullRomCurve
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _CatmullRomCurveProxy(
    this._flaxPeer,
    List<api1.Offset> super.controlPoints, {
    double super.tension,
  });
  _CatmullRomCurveProxy.precompute(
    this._flaxPeer,
    List<api1.Offset> super.controlPoints, {
    double super.tension,
  }) : super.precompute();
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  List<api1.Offset> get controlPoints {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.controlPoints;
    final _flaxConvertedResult = _flaxResult.$2 as List<api1.Offset>;
    return _flaxConvertedResult;
  }

  List<api1.Offset> get _flaxSuperGet_controlPoints {
    return super.controlPoints;
  }

  @override
  double get tension {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.tension;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_tension {
    return super.tension;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 5);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

final class _CatmullRomSplineProxy extends api.CatmullRomSpline
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch12 {
  final FlaxProxyPeer _flaxPeer;
  _CatmullRomSplineProxy(
    this._flaxPeer,
    List<api1.Offset> super.controlPoints, {
    double super.tension,
    api1.Offset? super.startHandle,
    api1.Offset? super.endHandle,
  });
  _CatmullRomSplineProxy.precompute(
    this._flaxPeer,
    List<api1.Offset> super.controlPoints, {
    double super.tension,
    api1.Offset? super.startHandle,
    api1.Offset? super.endHandle,
  }) : super.precompute();
  @override
  Iterable<api.Curve2DSample> generateSamples({
    Object? start = _flaxOmitted,
    Object? end = _flaxOmitted,
    Object? tolerance = _flaxOmitted,
  }) {
    return _FlaxProxyDispatch12_call_generateSamples(
      this,
      0,
      start: start,
      end: end,
      tolerance: tolerance,
    );
  }

  Iterable<api.Curve2DSample> _flaxSuper_generateSamples({
    Object? start = _flaxOmitted,
    Object? end = _flaxOmitted,
    Object? tolerance = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(start, _flaxOmitted);
    final _flaxHas1 = !identical(end, _flaxOmitted);
    final _flaxHas2 = !identical(tolerance, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.generateSamples,
      <Object?>[
        (_flaxHas0 ? start as double : null),
        (_flaxHas1 ? end as double : null),
        (_flaxHas2 ? tolerance as double : null),
      ],
      <int>[(_flaxHas0 ? 1 : 0) | (_flaxHas1 ? 2 : 0) | (_flaxHas2 ? 4 : 0)],
      const <String>["start", "end", "tolerance"],
    ) as Iterable<api.Curve2DSample>);
  }

  @override
  double findInverse(double x) {
    return _FlaxProxyDispatch12_call_findInverse(this, 1, x);
  }

  double _flaxSuper_findInverse(double x) {
    return super.findInverse(x);
  }

  @override
  api1.Offset transform(double t) {
    return _FlaxProxyDispatch12_call_transform(this, 2, t);
  }

  api1.Offset _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  api1.Offset transformInternal(double t) {
    return _FlaxProxyDispatch12_call_transformInternal(this, 3, t);
  }

  api1.Offset _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 4);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  int get samplingSeed => _FlaxProxyDispatch12_get_samplingSeed(this, 5);
  int get _flaxSuperGet_samplingSeed {
    return super.samplingSeed;
  }
}

final class _ColorTweenProxy extends api.ColorTween
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _ColorTweenProxy(
    this._flaxPeer, {
    api1.Color? super.begin,
    api1.Color? super.end,
  });
  @override
  api1.Color? lerp(double t) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_lerp(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Color?;
    return _flaxConvertedResult;
  }

  api1.Color? _flaxSuper_lerp(double t) {
    return super.lerp(t);
  }

  @override
  api1.Color? transform(double t) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_transform(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Color?;
    return _flaxConvertedResult;
  }

  api1.Color? _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api1.Color? evaluate(api.Animation<double> animation) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      animation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_evaluate(animation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Color?;
    return _flaxConvertedResult;
  }

  api1.Color? _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<api1.Color?> animate(api.Animation<double> parent) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animate(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<api1.Color?>;
    return _flaxConvertedResult;
  }

  api.Animation<api1.Color?> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<api1.Color?> chain(api.Animatable<double> parent) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_chain(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<api1.Color?>;
    return _flaxConvertedResult;
  }

  api.Animatable<api1.Color?> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  api1.Color? get begin {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.begin;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Color?;
    return _flaxConvertedResult;
  }

  api1.Color? get _flaxSuperGet_begin {
    return super.begin;
  }

  @override
  api1.Color? get end {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.end;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Color?;
    return _flaxConvertedResult;
  }

  api1.Color? get _flaxSuperGet_end {
    return super.end;
  }

  @override
  set begin(api1.Color? value) {
    final result = _flaxPeer.call(8, [value], const {});
    if (!result.$1) {
      super.begin = value;
      return;
    }
  }

  void _flaxSuperSet_begin(api1.Color? value) {
    super.begin = value;
  }

  @override
  set end(api1.Color? value) {
    final result = _flaxPeer.call(9, [value], const {});
    if (!result.$1) {
      super.end = value;
      return;
    }
  }

  void _flaxSuperSet_end(api1.Color? value) {
    super.end = value;
  }
}

final class _CompoundAnimationProxy<_Owner0 extends Object?>
    extends api.CompoundAnimation<_Owner0>
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _CompoundAnimationProxy(
    this._flaxPeer, {
    required api.Animation<_Owner0> super.first,
    required api.Animation<_Owner0> super.next,
  });
  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 0, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 1, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 2, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 3, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(4, [
            U,
          ], _flaxProxySignature_CompoundAnimation_drive<_Owner0, U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 6);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  void didRegisterListener() {
    final _flaxResult = _flaxPeer.call(7, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didRegisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didRegisterListener() {
    super.didRegisterListener();
    return;
  }

  @override
  void didUnregisterListener() {
    final _flaxResult = _flaxPeer.call(8, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didUnregisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didUnregisterListener() {
    super.didUnregisterListener();
    return;
  }

  @override
  void didStartListening() {
    final _flaxResult = _flaxPeer.call(9, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStartListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStartListening() {
    super.didStartListening();
    return;
  }

  @override
  void didStopListening() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStopListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStopListening() {
    super.didStopListening();
    return;
  }

  @override
  void clearListeners() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearListeners() {
    super.clearListeners();
    return;
  }

  @override
  void notifyListeners() {
    final _flaxResult = _flaxPeer.call(12, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyListeners();
      return;
    }
    return;
  }

  void _flaxSuper_notifyListeners() {
    super.notifyListeners();
    return;
  }

  @override
  void clearStatusListeners() {
    final _flaxResult = _flaxPeer.call(13, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearStatusListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearStatusListeners() {
    super.clearStatusListeners();
    return;
  }

  @override
  void notifyStatusListeners(api.AnimationStatus status) {
    final _flaxResult = _flaxPeer.call(14, <Object?>[
      status,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyStatusListeners(status);
      return;
    }
    return;
  }

  void _flaxSuper_notifyStatusListeners(api.AnimationStatus status) {
    super.notifyStatusListeners(status);
    return;
  }

  @override
  api.Animation<_Owner0> get first {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.first;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> get _flaxSuperGet_first {
    return super.first;
  }

  @override
  api.Animation<_Owner0> get next {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.next;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> get _flaxSuperGet_next {
    return super.next;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 17);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  _Owner0 get value {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 19);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 20);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 21);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 22);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }

  @override
  bool get isListening {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.isListening;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isListening {
    return super.isListening;
  }
}

FlaxCallbackBinding _flaxProxySignature_CompoundAnimation_drive<
  _Owner0 extends Object?,
  U extends Object?
>(FlaxDartTypes types) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

final class _ConstantTweenProxy<_Owner0 extends Object?>
    extends api.ConstantTween<_Owner0>
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _ConstantTweenProxy(this._flaxPeer, _Owner0 super.value);
  @override
  _Owner0 lerp(double t) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_lerp(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_lerp(double t) {
    return super.lerp(t);
  }

  @override
  _Owner0 transform(double t) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_transform(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  _Owner0 evaluate(api.Animation<double> animation) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      animation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_evaluate(animation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<_Owner0> animate(api.Animation<double> parent) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animate(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<_Owner0> chain(api.Animatable<double> parent) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_chain(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animatable<_Owner0> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  _Owner0? get begin {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.begin;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0?;
    return _flaxConvertedResult;
  }

  _Owner0? get _flaxSuperGet_begin {
    return super.begin;
  }

  @override
  _Owner0? get end {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.end;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0?;
    return _flaxConvertedResult;
  }

  _Owner0? get _flaxSuperGet_end {
    return super.end;
  }

  @override
  set begin(_Owner0? value) {
    final result = _flaxPeer.call(8, [value], const {});
    if (!result.$1) {
      super.begin = value;
      return;
    }
  }

  void _flaxSuperSet_begin(_Owner0? value) {
    super.begin = value;
  }

  @override
  set end(_Owner0? value) {
    final result = _flaxPeer.call(9, [value], const {});
    if (!result.$1) {
      super.end = value;
      return;
    }
  }

  void _flaxSuperSet_end(_Owner0? value) {
    super.end = value;
  }
}

final class _Curve2DProxy extends api.Curve2D
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch12 {
  final FlaxProxyPeer _flaxPeer;
  _Curve2DProxy(this._flaxPeer);
  @override
  api1.Offset transform(double t) {
    return _FlaxProxyDispatch12_call_transform(this, 0, t);
  }

  api1.Offset _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  api1.Offset transformInternal(double t) {
    return _FlaxProxyDispatch12_call_transformInternal(this, 1, t);
  }

  api1.Offset _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  Iterable<api.Curve2DSample> generateSamples({
    Object? start = _flaxOmitted,
    Object? end = _flaxOmitted,
    Object? tolerance = _flaxOmitted,
  }) {
    return _FlaxProxyDispatch12_call_generateSamples(
      this,
      3,
      start: start,
      end: end,
      tolerance: tolerance,
    );
  }

  Iterable<api.Curve2DSample> _flaxSuper_generateSamples({
    Object? start = _flaxOmitted,
    Object? end = _flaxOmitted,
    Object? tolerance = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(start, _flaxOmitted);
    final _flaxHas1 = !identical(end, _flaxOmitted);
    final _flaxHas2 = !identical(tolerance, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.generateSamples,
      <Object?>[
        (_flaxHas0 ? start as double : null),
        (_flaxHas1 ? end as double : null),
        (_flaxHas2 ? tolerance as double : null),
      ],
      <int>[(_flaxHas0 ? 1 : 0) | (_flaxHas1 ? 2 : 0) | (_flaxHas2 ? 4 : 0)],
      const <String>["start", "end", "tolerance"],
    ) as Iterable<api.Curve2DSample>);
  }

  @override
  double findInverse(double x) {
    return _FlaxProxyDispatch12_call_findInverse(this, 4, x);
  }

  double _flaxSuper_findInverse(double x) {
    return super.findInverse(x);
  }

  @override
  int get samplingSeed => _FlaxProxyDispatch12_get_samplingSeed(this, 5);
  int get _flaxSuperGet_samplingSeed {
    return super.samplingSeed;
  }
}

final class _Curve2DSampleProxy extends api.Curve2DSample
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _Curve2DSampleProxy(this._flaxPeer, double super.t, api1.Offset super.value);
  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get t {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.t;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_t {
    return super.t;
  }

  @override
  api1.Offset get value {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Offset;
    return _flaxConvertedResult;
  }

  api1.Offset get _flaxSuperGet_value {
    return super.value;
  }
}

final class _CurveTweenProxy extends api.CurveTween
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch10, _FlaxProxyDispatch13 {
  final FlaxProxyPeer _flaxPeer;
  _CurveTweenProxy(this._flaxPeer, {required api.Curve super.curve});
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double evaluate(api.Animation<double> animation) {
    return _FlaxProxyDispatch13_call_evaluate(this, 1, animation);
  }

  double _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<double> animate(api.Animation<double> parent) {
    return _FlaxProxyDispatch13_call_animate(this, 2, parent);
  }

  api.Animation<double> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<double> chain(api.Animatable<double> parent) {
    return _FlaxProxyDispatch13_call_chain(this, 3, parent);
  }

  api.Animatable<double> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 4);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.Curve get curve {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.curve;
    final _flaxConvertedResult = _flaxResult.$2 as api.Curve;
    return _flaxConvertedResult;
  }

  api.Curve get _flaxSuperGet_curve {
    return super.curve;
  }

  @override
  set curve(api.Curve value) {
    final result = _flaxPeer.call(6, [value], const {});
    if (!result.$1) {
      super.curve = value;
      return;
    }
  }

  void _flaxSuperSet_curve(api.Curve value) {
    super.curve = value;
  }
}

final class _CurvedAnimationProxy extends api.CurvedAnimation
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _CurvedAnimationProxy(
    this._flaxPeer, {
    required api.Animation<double> super.parent,
    required api.Curve super.curve,
    api.Curve? super.reverseCurve,
  });
  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 0, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 1, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 2, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 3, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(4, [
            U,
          ], _flaxProxySignature_CurvedAnimation_drive<U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 6);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  void dispose() {
    final _flaxResult = _flaxPeer.call(7, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_dispose();
      return;
    }
    return;
  }

  void _flaxSuper_dispose() {
    super.dispose();
    return;
  }

  @override
  api.Animation<double> get parent {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.parent;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<double>;
    return _flaxConvertedResult;
  }

  api.Animation<double> get _flaxSuperGet_parent {
    return super.parent;
  }

  @override
  api.Curve get curve {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.curve;
    final _flaxConvertedResult = _flaxResult.$2 as api.Curve;
    return _flaxConvertedResult;
  }

  api.Curve get _flaxSuperGet_curve {
    return super.curve;
  }

  @override
  api.Curve? get reverseCurve {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.reverseCurve;
    final _flaxConvertedResult = _flaxResult.$2 as api.Curve?;
    return _flaxConvertedResult;
  }

  api.Curve? get _flaxSuperGet_reverseCurve {
    return super.reverseCurve;
  }

  @override
  bool get isDisposed {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1) return super.isDisposed;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isDisposed {
    return super.isDisposed;
  }

  @override
  double get value {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_value {
    return super.value;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 13);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 14);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 15);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 16);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 17);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }

  @override
  set curve(api.Curve value) {
    final result = _flaxPeer.call(18, [value], const {});
    if (!result.$1) {
      super.curve = value;
      return;
    }
  }

  void _flaxSuperSet_curve(api.Curve value) {
    super.curve = value;
  }

  @override
  set reverseCurve(api.Curve? value) {
    final result = _flaxPeer.call(19, [value], const {});
    if (!result.$1) {
      super.reverseCurve = value;
      return;
    }
  }

  void _flaxSuperSet_reverseCurve(api.Curve? value) {
    super.reverseCurve = value;
  }

  @override
  set isDisposed(bool value) {
    final result = _flaxPeer.call(20, [value], const {});
    if (!result.$1) {
      super.isDisposed = value;
      return;
    }
  }

  void _flaxSuperSet_isDisposed(bool value) {
    super.isDisposed = value;
  }
}

FlaxCallbackBinding _flaxProxySignature_CurvedAnimation_drive<
  U extends Object?
>(FlaxDartTypes types) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

final class _ElasticInCurveProxy extends api.ElasticInCurve
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _ElasticInCurveProxy(this._flaxPeer, [double super.period]);
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get period {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.period;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_period {
    return super.period;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 4);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

final class _ElasticInOutCurveProxy extends api.ElasticInOutCurve
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _ElasticInOutCurveProxy(this._flaxPeer, [double super.period]);
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get period {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.period;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_period {
    return super.period;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 4);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

final class _ElasticOutCurveProxy extends api.ElasticOutCurve
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _ElasticOutCurveProxy(this._flaxPeer, [double super.period]);
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get period {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.period;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_period {
    return super.period;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 4);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

final class _FlippedCurveProxy extends api.FlippedCurve
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _FlippedCurveProxy(this._flaxPeer, api.Curve super.curve);
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.Curve get curve {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.curve;
    final _flaxConvertedResult = _flaxResult.$2 as api.Curve;
    return _flaxConvertedResult;
  }

  api.Curve get _flaxSuperGet_curve {
    return super.curve;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 4);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

final class _FlippedTweenSequenceProxy extends api.FlippedTweenSequence
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch10, _FlaxProxyDispatch13 {
  final FlaxProxyPeer _flaxPeer;
  _FlippedTweenSequenceProxy(
    this._flaxPeer,
    List<api.TweenSequenceItem<double>> super.items,
  );
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double evaluate(api.Animation<double> animation) {
    return _FlaxProxyDispatch13_call_evaluate(this, 2, animation);
  }

  double _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<double> animate(api.Animation<double> parent) {
    return _FlaxProxyDispatch13_call_animate(this, 3, parent);
  }

  api.Animation<double> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<double> chain(api.Animatable<double> parent) {
    return _FlaxProxyDispatch13_call_chain(this, 4, parent);
  }

  api.Animatable<double> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }
}

final class _IntTweenProxy extends api.IntTween
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch18 {
  final FlaxProxyPeer _flaxPeer;
  _IntTweenProxy(this._flaxPeer, {int? super.begin, int? super.end});
  @override
  int lerp(double t) {
    return _FlaxProxyDispatch18_call_lerp(this, 0, t);
  }

  int _flaxSuper_lerp(double t) {
    return super.lerp(t);
  }

  @override
  int transform(double t) {
    return _FlaxProxyDispatch18_call_transform(this, 1, t);
  }

  int _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  int evaluate(api.Animation<double> animation) {
    return _FlaxProxyDispatch18_call_evaluate(this, 3, animation);
  }

  int _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<int> animate(api.Animation<double> parent) {
    return _FlaxProxyDispatch18_call_animate(this, 4, parent);
  }

  api.Animation<int> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<int> chain(api.Animatable<double> parent) {
    return _FlaxProxyDispatch18_call_chain(this, 5, parent);
  }

  api.Animatable<int> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  int? get begin => _FlaxProxyDispatch18_get_begin(this, 6);
  int? get _flaxSuperGet_begin {
    return super.begin;
  }

  @override
  int? get end => _FlaxProxyDispatch18_get_end(this, 7);
  int? get _flaxSuperGet_end {
    return super.end;
  }

  @override
  set begin(int? value) => _FlaxProxyDispatch18_set_begin(this, 8, value);
  void _flaxSuperSet_begin(int? value) {
    super.begin = value;
  }

  @override
  set end(int? value) => _FlaxProxyDispatch18_set_end(this, 9, value);
  void _flaxSuperSet_end(int? value) {
    super.end = value;
  }
}

final class _IntervalProxy extends api.Interval
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _IntervalProxy(
    this._flaxPeer,
    double super.begin,
    double super.end, {
    api.Curve super.curve,
  });
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get begin {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.begin;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_begin {
    return super.begin;
  }

  @override
  double get end {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.end;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_end {
    return super.end;
  }

  @override
  api.Curve get curve {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.curve;
    final _flaxConvertedResult = _flaxResult.$2 as api.Curve;
    return _flaxConvertedResult;
  }

  api.Curve get _flaxSuperGet_curve {
    return super.curve;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 6);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

final class _ParametricCurveProxy<_Owner0 extends Object?>
    extends api.ParametricCurve<_Owner0>
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _ParametricCurveProxy(this._flaxPeer);
  @override
  _Owner0 transform(double t) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_transform(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  _Owner0 transformInternal(double t) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_transformInternal(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }
}

final class _ProxyAnimationProxy extends api.ProxyAnimation
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _ProxyAnimationProxy(
    this._flaxPeer, [
    api.Animation<double>? super.animation,
  ]);
  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 0, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 1, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 2, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 3, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(4, [
            U,
          ], _flaxProxySignature_ProxyAnimation_drive<U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 6);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  void didRegisterListener() {
    final _flaxResult = _flaxPeer.call(7, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didRegisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didRegisterListener() {
    super.didRegisterListener();
    return;
  }

  @override
  void didUnregisterListener() {
    final _flaxResult = _flaxPeer.call(8, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didUnregisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didUnregisterListener() {
    super.didUnregisterListener();
    return;
  }

  @override
  void didStartListening() {
    final _flaxResult = _flaxPeer.call(9, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStartListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStartListening() {
    super.didStartListening();
    return;
  }

  @override
  void didStopListening() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStopListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStopListening() {
    super.didStopListening();
    return;
  }

  @override
  void clearListeners() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearListeners() {
    super.clearListeners();
    return;
  }

  @override
  void notifyListeners() {
    final _flaxResult = _flaxPeer.call(12, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyListeners();
      return;
    }
    return;
  }

  void _flaxSuper_notifyListeners() {
    super.notifyListeners();
    return;
  }

  @override
  void clearStatusListeners() {
    final _flaxResult = _flaxPeer.call(13, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearStatusListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearStatusListeners() {
    super.clearStatusListeners();
    return;
  }

  @override
  void notifyStatusListeners(api.AnimationStatus status) {
    final _flaxResult = _flaxPeer.call(14, <Object?>[
      status,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyStatusListeners(status);
      return;
    }
    return;
  }

  void _flaxSuper_notifyStatusListeners(api.AnimationStatus status) {
    super.notifyStatusListeners(status);
    return;
  }

  @override
  api.Animation<double>? get parent {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.parent;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<double>?;
    return _flaxConvertedResult;
  }

  api.Animation<double>? get _flaxSuperGet_parent {
    return super.parent;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 16);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  double get value {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_value {
    return super.value;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 18);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 19);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 20);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 21);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }

  @override
  bool get isListening {
    final _flaxResult = _flaxPeer.call(22, const [], const {});
    if (!_flaxResult.$1) return super.isListening;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isListening {
    return super.isListening;
  }

  @override
  set parent(api.Animation<double>? value) {
    final result = _flaxPeer.call(23, [value], const {});
    if (!result.$1) {
      super.parent = value;
      return;
    }
  }

  void _flaxSuperSet_parent(api.Animation<double>? value) {
    super.parent = value;
  }
}

FlaxCallbackBinding _flaxProxySignature_ProxyAnimation_drive<U extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

final class _RectTweenProxy extends api.RectTween
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _RectTweenProxy(
    this._flaxPeer, {
    api1.Rect? super.begin,
    api1.Rect? super.end,
  });
  @override
  api1.Rect? lerp(double t) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_lerp(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Rect?;
    return _flaxConvertedResult;
  }

  api1.Rect? _flaxSuper_lerp(double t) {
    return super.lerp(t);
  }

  @override
  api1.Rect? transform(double t) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_transform(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Rect?;
    return _flaxConvertedResult;
  }

  api1.Rect? _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api1.Rect? evaluate(api.Animation<double> animation) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      animation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_evaluate(animation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Rect?;
    return _flaxConvertedResult;
  }

  api1.Rect? _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<api1.Rect?> animate(api.Animation<double> parent) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animate(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<api1.Rect?>;
    return _flaxConvertedResult;
  }

  api.Animation<api1.Rect?> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<api1.Rect?> chain(api.Animatable<double> parent) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_chain(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<api1.Rect?>;
    return _flaxConvertedResult;
  }

  api.Animatable<api1.Rect?> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  api1.Rect? get begin {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.begin;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Rect?;
    return _flaxConvertedResult;
  }

  api1.Rect? get _flaxSuperGet_begin {
    return super.begin;
  }

  @override
  api1.Rect? get end {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.end;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Rect?;
    return _flaxConvertedResult;
  }

  api1.Rect? get _flaxSuperGet_end {
    return super.end;
  }

  @override
  set begin(api1.Rect? value) {
    final result = _flaxPeer.call(8, [value], const {});
    if (!result.$1) {
      super.begin = value;
      return;
    }
  }

  void _flaxSuperSet_begin(api1.Rect? value) {
    super.begin = value;
  }

  @override
  set end(api1.Rect? value) {
    final result = _flaxPeer.call(9, [value], const {});
    if (!result.$1) {
      super.end = value;
      return;
    }
  }

  void _flaxSuperSet_end(api1.Rect? value) {
    super.end = value;
  }
}

final class _ReverseAnimationProxy extends api.ReverseAnimation
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _ReverseAnimationProxy(this._flaxPeer, api.Animation<double> super.parent);
  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 0, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 1, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 2, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 3, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(4, [
            U,
          ], _flaxProxySignature_ReverseAnimation_drive<U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 6);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  void didRegisterListener() {
    final _flaxResult = _flaxPeer.call(7, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didRegisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didRegisterListener() {
    super.didRegisterListener();
    return;
  }

  @override
  void didUnregisterListener() {
    final _flaxResult = _flaxPeer.call(8, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didUnregisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didUnregisterListener() {
    super.didUnregisterListener();
    return;
  }

  @override
  void didStartListening() {
    final _flaxResult = _flaxPeer.call(9, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStartListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStartListening() {
    super.didStartListening();
    return;
  }

  @override
  void didStopListening() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didStopListening();
      return;
    }
    return;
  }

  void _flaxSuper_didStopListening() {
    super.didStopListening();
    return;
  }

  @override
  void clearStatusListeners() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearStatusListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearStatusListeners() {
    super.clearStatusListeners();
    return;
  }

  @override
  void notifyStatusListeners(api.AnimationStatus status) {
    final _flaxResult = _flaxPeer.call(12, <Object?>[
      status,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyStatusListeners(status);
      return;
    }
    return;
  }

  void _flaxSuper_notifyStatusListeners(api.AnimationStatus status) {
    super.notifyStatusListeners(status);
    return;
  }

  @override
  api.Animation<double> get parent {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.parent;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<double>;
    return _flaxConvertedResult;
  }

  api.Animation<double> get _flaxSuperGet_parent {
    return super.parent;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 14);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  double get value {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_value {
    return super.value;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 16);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 17);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 18);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 19);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }

  @override
  bool get isListening {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.isListening;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isListening {
    return super.isListening;
  }
}

FlaxCallbackBinding _flaxProxySignature_ReverseAnimation_drive<
  U extends Object?
>(FlaxDartTypes types) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

final class _ReverseTweenProxy<_Owner0 extends Object?>
    extends api.ReverseTween<_Owner0>
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _ReverseTweenProxy(this._flaxPeer, api.Tween<_Owner0> super.parent);
  @override
  _Owner0 lerp(double t) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_lerp(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_lerp(double t) {
    return super.lerp(t);
  }

  @override
  _Owner0 transform(double t) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_transform(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  _Owner0 evaluate(api.Animation<double> animation) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      animation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_evaluate(animation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<_Owner0> animate(api.Animation<double> parent) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animate(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<_Owner0> chain(api.Animatable<double> parent) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_chain(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animatable<_Owner0> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  api.Tween<_Owner0> get parent {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.parent;
    final _flaxConvertedResult = _flaxResult.$2 as api.Tween<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Tween<_Owner0> get _flaxSuperGet_parent {
    return super.parent;
  }

  @override
  _Owner0? get begin {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.begin;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0?;
    return _flaxConvertedResult;
  }

  _Owner0? get _flaxSuperGet_begin {
    return super.begin;
  }

  @override
  _Owner0? get end {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.end;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0?;
    return _flaxConvertedResult;
  }

  _Owner0? get _flaxSuperGet_end {
    return super.end;
  }

  @override
  set begin(_Owner0? value) {
    final result = _flaxPeer.call(9, [value], const {});
    if (!result.$1) {
      super.begin = value;
      return;
    }
  }

  void _flaxSuperSet_begin(_Owner0? value) {
    super.begin = value;
  }

  @override
  set end(_Owner0? value) {
    final result = _flaxPeer.call(10, [value], const {});
    if (!result.$1) {
      super.end = value;
      return;
    }
  }

  void _flaxSuperSet_end(_Owner0? value) {
    super.end = value;
  }
}

final class _SawToothProxy extends api.SawTooth
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _SawToothProxy(this._flaxPeer, int super.count);
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  int get count {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.count;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_count {
    return super.count;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 4);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

final class _SizeTweenProxy extends api.SizeTween
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _SizeTweenProxy(
    this._flaxPeer, {
    api1.Size? super.begin,
    api1.Size? super.end,
  });
  @override
  api1.Size? lerp(double t) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_lerp(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Size?;
    return _flaxConvertedResult;
  }

  api1.Size? _flaxSuper_lerp(double t) {
    return super.lerp(t);
  }

  @override
  api1.Size? transform(double t) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_transform(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Size?;
    return _flaxConvertedResult;
  }

  api1.Size? _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api1.Size? evaluate(api.Animation<double> animation) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      animation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_evaluate(animation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api1.Size?;
    return _flaxConvertedResult;
  }

  api1.Size? _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<api1.Size?> animate(api.Animation<double> parent) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animate(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<api1.Size?>;
    return _flaxConvertedResult;
  }

  api.Animation<api1.Size?> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<api1.Size?> chain(api.Animatable<double> parent) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_chain(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<api1.Size?>;
    return _flaxConvertedResult;
  }

  api.Animatable<api1.Size?> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  api1.Size? get begin {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.begin;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Size?;
    return _flaxConvertedResult;
  }

  api1.Size? get _flaxSuperGet_begin {
    return super.begin;
  }

  @override
  api1.Size? get end {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.end;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Size?;
    return _flaxConvertedResult;
  }

  api1.Size? get _flaxSuperGet_end {
    return super.end;
  }

  @override
  set begin(api1.Size? value) {
    final result = _flaxPeer.call(8, [value], const {});
    if (!result.$1) {
      super.begin = value;
      return;
    }
  }

  void _flaxSuperSet_begin(api1.Size? value) {
    super.begin = value;
  }

  @override
  set end(api1.Size? value) {
    final result = _flaxPeer.call(9, [value], const {});
    if (!result.$1) {
      super.end = value;
      return;
    }
  }

  void _flaxSuperSet_end(api1.Size? value) {
    super.end = value;
  }
}

final class _SplitProxy extends api.Split
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _SplitProxy(
    this._flaxPeer,
    double super.split, {
    api.Curve super.beginCurve,
    api.Curve super.endCurve,
  });
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get split {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.split;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_split {
    return super.split;
  }

  @override
  api.Curve get beginCurve {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.beginCurve;
    final _flaxConvertedResult = _flaxResult.$2 as api.Curve;
    return _flaxConvertedResult;
  }

  api.Curve get _flaxSuperGet_beginCurve {
    return super.beginCurve;
  }

  @override
  api.Curve get endCurve {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.endCurve;
    final _flaxConvertedResult = _flaxResult.$2 as api.Curve;
    return _flaxConvertedResult;
  }

  api.Curve get _flaxSuperGet_endCurve {
    return super.endCurve;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 6);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

final class _StepTweenProxy extends api.StepTween
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch18 {
  final FlaxProxyPeer _flaxPeer;
  _StepTweenProxy(this._flaxPeer, {int? super.begin, int? super.end});
  @override
  int lerp(double t) {
    return _FlaxProxyDispatch18_call_lerp(this, 0, t);
  }

  int _flaxSuper_lerp(double t) {
    return super.lerp(t);
  }

  @override
  int transform(double t) {
    return _FlaxProxyDispatch18_call_transform(this, 1, t);
  }

  int _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  int evaluate(api.Animation<double> animation) {
    return _FlaxProxyDispatch18_call_evaluate(this, 3, animation);
  }

  int _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<int> animate(api.Animation<double> parent) {
    return _FlaxProxyDispatch18_call_animate(this, 4, parent);
  }

  api.Animation<int> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<int> chain(api.Animatable<double> parent) {
    return _FlaxProxyDispatch18_call_chain(this, 5, parent);
  }

  api.Animatable<int> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  int? get begin => _FlaxProxyDispatch18_get_begin(this, 6);
  int? get _flaxSuperGet_begin {
    return super.begin;
  }

  @override
  int? get end => _FlaxProxyDispatch18_get_end(this, 7);
  int? get _flaxSuperGet_end {
    return super.end;
  }

  @override
  set begin(int? value) => _FlaxProxyDispatch18_set_begin(this, 8, value);
  void _flaxSuperSet_begin(int? value) {
    super.begin = value;
  }

  @override
  set end(int? value) => _FlaxProxyDispatch18_set_end(this, 9, value);
  void _flaxSuperSet_end(int? value) {
    super.end = value;
  }
}

final class _ThreePointCubicProxy extends api.ThreePointCubic
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _ThreePointCubicProxy(
    this._flaxPeer,
    api1.Offset super.a1,
    api1.Offset super.b1,
    api1.Offset super.midpoint,
    api1.Offset super.a2,
    api1.Offset super.b2,
  );
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api1.Offset get a1 {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.a1;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Offset;
    return _flaxConvertedResult;
  }

  api1.Offset get _flaxSuperGet_a1 {
    return super.a1;
  }

  @override
  api1.Offset get b1 {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.b1;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Offset;
    return _flaxConvertedResult;
  }

  api1.Offset get _flaxSuperGet_b1 {
    return super.b1;
  }

  @override
  api1.Offset get midpoint {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.midpoint;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Offset;
    return _flaxConvertedResult;
  }

  api1.Offset get _flaxSuperGet_midpoint {
    return super.midpoint;
  }

  @override
  api1.Offset get a2 {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.a2;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Offset;
    return _flaxConvertedResult;
  }

  api1.Offset get _flaxSuperGet_a2 {
    return super.a2;
  }

  @override
  api1.Offset get b2 {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.b2;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Offset;
    return _flaxConvertedResult;
  }

  api1.Offset get _flaxSuperGet_b2 {
    return super.b2;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 8);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

final class _ThresholdProxy extends api.Threshold
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch11, _FlaxProxyDispatch10 {
  final FlaxProxyPeer _flaxPeer;
  _ThresholdProxy(this._flaxPeer, double super.threshold);
  @override
  double transform(double t) {
    return _FlaxProxyDispatch10_call_transform(this, 0, t);
  }

  double _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  double transformInternal(double t) {
    return _FlaxProxyDispatch11_call_transformInternal(this, 1, t);
  }

  double _flaxSuper_transformInternal(double t) {
    return super.transformInternal(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  double get threshold {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.threshold;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_threshold {
    return super.threshold;
  }

  @override
  api.Curve get flipped => _FlaxProxyDispatch11_get_flipped(this, 4);
  api.Curve get _flaxSuperGet_flipped {
    return super.flipped;
  }
}

// Only bridge super-call bookkeeping is mutable.
// ignore: must_be_immutable
final class _TrainHoppingAnimationProxy extends api.TrainHoppingAnimation
    implements _FlaxProxyDispatch2, _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  String? _flaxActiveSuperMember;
  bool _flaxCalledSuper = false;
  _TrainHoppingAnimationProxy(
    this._flaxPeer,
    api.Animation<double> super._currentTrain,
    api.Animation<double>? super._nextTrain, {
    void Function()? super.onSwitchedTrain,
  });
  @override
  void addListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_addListener(this, 0, listener);
  }

  void _flaxSuper_addListener(void Function() listener) {
    super.addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    return _FlaxProxyDispatch0_call_removeListener(this, 1, listener);
  }

  void _flaxSuper_removeListener(void Function() listener) {
    super.removeListener(listener);
    return;
  }

  @override
  void addStatusListener(void Function(api.AnimationStatus status) listener) {
    return _FlaxProxyDispatch0_call_addStatusListener(this, 2, listener);
  }

  void _flaxSuper_addStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.addStatusListener(listener);
    return;
  }

  @override
  void removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    return _FlaxProxyDispatch0_call_removeStatusListener(this, 3, listener);
  }

  void _flaxSuper_removeStatusListener(
    void Function(api.AnimationStatus status) listener,
  ) {
    super.removeStatusListener(listener);
    return;
  }

  @override
  api.Animation<U> drive<U extends Object?>(api.Animatable<U> child) {
    final _flaxSignature = _flaxPeer.active
        ? _flaxPeer.genericSignature(4, [
            U,
          ], _flaxProxySignature_TrainHoppingAnimation_drive<U>)
        : null;
    api.Animation<U> _flaxContextSuper(api.Animatable<U> child) {
      return _flaxSuper_drive<U>(child);
    }

    final _flaxResult = _flaxPeer.call(
      4,
      <Object?>[child],
      <String, Object?>{},
      signature: _flaxSignature,
      superCall: _flaxSignature == null ? null : _flaxContextSuper,
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_drive<U>(child);
    }
    final _flaxConvertedResult = _genericCallbackResult<api.Animation<U>>(
      _flaxResult.$2,
    );
    return _flaxConvertedResult;
  }

  api.Animation<U> _flaxSuper_drive<U extends Object?>(
    api.Animatable<U> child,
  ) {
    return super.drive<U>(child);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String toStringDetails() {
    return _FlaxProxyDispatch2_call_toStringDetails(this, 6);
  }

  String _flaxSuper_toStringDetails() {
    return super.toStringDetails();
  }

  @override
  void didRegisterListener() {
    final _flaxResult = _flaxPeer.call(7, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didRegisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didRegisterListener() {
    super.didRegisterListener();
    return;
  }

  @override
  void didUnregisterListener() {
    final _flaxResult = _flaxPeer.call(8, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_didUnregisterListener();
      return;
    }
    return;
  }

  void _flaxSuper_didUnregisterListener() {
    super.didUnregisterListener();
    return;
  }

  @override
  // ignore: must_call_super
  void dispose() {
    if (!_flaxPeer.active) return;
    final _flaxPreviousSuperMember = _flaxActiveSuperMember;
    final _flaxPreviousCalledSuper = _flaxCalledSuper;
    _flaxActiveSuperMember = "dispose";
    _flaxCalledSuper = false;
    try {
      final _flaxResult = _flaxPeer.call(9, <Object?>[], <String, Object?>{});
      if (!_flaxResult.$1) {
        _flaxSuper_dispose();
        return;
      }
      if (!(_flaxCalledSuper))
        throw StateError("dispose must call super.dispose()");
      return;
    } finally {
      _flaxActiveSuperMember = _flaxPreviousSuperMember;
      _flaxCalledSuper = _flaxPreviousCalledSuper;
    }
  }

  void _flaxSuper_dispose() {
    if (_flaxActiveSuperMember == "dispose") _flaxCalledSuper = true;
    super.dispose();
    return;
  }

  @override
  void clearListeners() {
    final _flaxResult = _flaxPeer.call(10, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearListeners() {
    super.clearListeners();
    return;
  }

  @override
  void notifyListeners() {
    final _flaxResult = _flaxPeer.call(11, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyListeners();
      return;
    }
    return;
  }

  void _flaxSuper_notifyListeners() {
    super.notifyListeners();
    return;
  }

  @override
  void clearStatusListeners() {
    final _flaxResult = _flaxPeer.call(12, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_clearStatusListeners();
      return;
    }
    return;
  }

  void _flaxSuper_clearStatusListeners() {
    super.clearStatusListeners();
    return;
  }

  @override
  void notifyStatusListeners(api.AnimationStatus status) {
    final _flaxResult = _flaxPeer.call(13, <Object?>[
      status,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_notifyStatusListeners(status);
      return;
    }
    return;
  }

  void _flaxSuper_notifyStatusListeners(api.AnimationStatus status) {
    super.notifyStatusListeners(status);
    return;
  }

  @override
  api.Animation<double>? get currentTrain {
    final _flaxResult = _flaxPeer.call(14, const [], const {});
    if (!_flaxResult.$1) return super.currentTrain;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<double>?;
    return _flaxConvertedResult;
  }

  api.Animation<double>? get _flaxSuperGet_currentTrain {
    return super.currentTrain;
  }

  @override
  void Function()? get onSwitchedTrain {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.onSwitchedTrain;
    final _flaxConvertedResult = _flaxResult.$2 as void Function()?;
    return _flaxConvertedResult;
  }

  void Function()? get _flaxSuperGet_onSwitchedTrain {
    return super.onSwitchedTrain;
  }

  @override
  api.AnimationStatus get status => _FlaxProxyDispatch0_get_status(this, 16);
  api.AnimationStatus get _flaxSuperGet_status {
    return super.status;
  }

  @override
  double get value {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.value;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_value {
    return super.value;
  }

  @override
  bool get isDismissed => _FlaxProxyDispatch2_get_isDismissed(this, 18);
  bool get _flaxSuperGet_isDismissed {
    return super.isDismissed;
  }

  @override
  bool get isCompleted => _FlaxProxyDispatch2_get_isCompleted(this, 19);
  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get isAnimating => _FlaxProxyDispatch2_get_isAnimating(this, 20);
  bool get _flaxSuperGet_isAnimating {
    return super.isAnimating;
  }

  @override
  bool get isForwardOrCompleted =>
      _FlaxProxyDispatch2_get_isForwardOrCompleted(this, 21);
  bool get _flaxSuperGet_isForwardOrCompleted {
    return super.isForwardOrCompleted;
  }

  @override
  set onSwitchedTrain(void Function()? value) {
    final result = _flaxPeer.call(22, [value], const {});
    if (!result.$1) {
      super.onSwitchedTrain = value;
      return;
    }
  }

  void _flaxSuperSet_onSwitchedTrain(void Function()? value) {
    super.onSwitchedTrain = value;
  }
}

FlaxCallbackBinding _flaxProxySignature_TrainHoppingAnimation_drive<
  U extends Object?
>(FlaxDartTypes types) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<U>>(withinCallback: true),
    FlaxCallbackAdapters.wrap1<api.Animatable<U>, api.Animation<U>>,
    id: types.key<api.Animation<U> Function(api.Animatable<U> child)>() + ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters.invoke1<api.Animatable<U>, api.Animation<U>>,
    matches: FlaxCallbackAdapters.matches1<api.Animatable<U>, api.Animation<U>>,
  );
}

final class _TweenProxy<_Owner0 extends Object?> extends api.Tween<_Owner0>
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _TweenProxy(this._flaxPeer, {_Owner0? super.begin, _Owner0? super.end});
  @override
  _Owner0 transform(double t) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_transform(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  _Owner0 evaluate(api.Animation<double> animation) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      animation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_evaluate(animation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<_Owner0> animate(api.Animation<double> parent) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animate(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<_Owner0> chain(api.Animatable<double> parent) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_chain(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animatable<_Owner0> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  _Owner0 lerp(double t) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_lerp(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_lerp(double t) {
    return super.lerp(t);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  _Owner0? get begin {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.begin;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0?;
    return _flaxConvertedResult;
  }

  _Owner0? get _flaxSuperGet_begin {
    return super.begin;
  }

  @override
  _Owner0? get end {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.end;
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0?;
    return _flaxConvertedResult;
  }

  _Owner0? get _flaxSuperGet_end {
    return super.end;
  }

  @override
  set begin(_Owner0? value) {
    final result = _flaxPeer.call(8, [value], const {});
    if (!result.$1) {
      super.begin = value;
      return;
    }
  }

  void _flaxSuperSet_begin(_Owner0? value) {
    super.begin = value;
  }

  @override
  set end(_Owner0? value) {
    final result = _flaxPeer.call(9, [value], const {});
    if (!result.$1) {
      super.end = value;
      return;
    }
  }

  void _flaxSuperSet_end(_Owner0? value) {
    super.end = value;
  }
}

final class _TweenSequenceProxy<_Owner0 extends Object?>
    extends api.TweenSequence<_Owner0>
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _TweenSequenceProxy(
    this._flaxPeer,
    List<api.TweenSequenceItem<_Owner0>> super.items,
  );
  @override
  _Owner0 transform(double t) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[t], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_transform(t);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_transform(double t) {
    return super.transform(t);
  }

  @override
  _Owner0 evaluate(api.Animation<double> animation) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      animation,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_evaluate(animation);
    }
    final _flaxConvertedResult = _flaxResult.$2 as _Owner0;
    return _flaxConvertedResult;
  }

  _Owner0 _flaxSuper_evaluate(api.Animation<double> animation) {
    return super.evaluate(animation);
  }

  @override
  api.Animation<_Owner0> animate(api.Animation<double> parent) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_animate(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animation<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animation<_Owner0> _flaxSuper_animate(api.Animation<double> parent) {
    return super.animate(parent);
  }

  @override
  api.Animatable<_Owner0> chain(api.Animatable<double> parent) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      parent,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_chain(parent);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animatable<_Owner0> _flaxSuper_chain(api.Animatable<double> parent) {
    return super.chain(parent);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 4);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }
}

final class _TweenSequenceItemProxy<_Owner0 extends Object?>
    extends api.TweenSequenceItem<_Owner0> {
  final FlaxProxyPeer _flaxPeer;
  _TweenSequenceItemProxy(
    this._flaxPeer, {
    required api.Animatable<_Owner0> super.tween,
    required double super.weight,
  });
  @override
  api.Animatable<_Owner0> get tween {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.tween;
    final _flaxConvertedResult = _flaxResult.$2 as api.Animatable<_Owner0>;
    return _flaxConvertedResult;
  }

  api.Animatable<_Owner0> get _flaxSuperGet_tween {
    return super.tween;
  }

  @override
  double get weight {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.weight;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_weight {
    return super.weight;
  }
}

typedef _flaxDefault_AlwaysStoppedAnimation_0 = Object?;
typedef _flaxDefault_Animation_0 = Object?;
typedef _flaxDefault_AnimationMax_0 = num;
typedef _flaxDefault_AnimationMin_0 = num;
typedef _flaxDefault_CompoundAnimation_0 = Object?;
Function _flaxGeneric_AlwaysStoppedAnimation_drive<
  _Owner0 extends Object?,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api.AlwaysStoppedAnimation<_Owner0>).drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_AlwaysStoppedAnimation_super_drive<
  _Owner0 extends Object?,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as _AlwaysStoppedAnimationProxy<_Owner0>)
        ._flaxSuper_drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Type _flaxType_AlwaysStoppedAnimation<_Owner0 extends Object?>() =>
    api.AlwaysStoppedAnimation<_Owner0>;
Function _flaxClass_AlwaysStoppedAnimation<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isAlwaysStoppedAnimation(Object value) =>
      value is api.AlwaysStoppedAnimation<_Owner0>;
  // ignore: unused_element
  Object? _AlwaysStoppedAnimation_status(Object value) =>
      (value as api.AlwaysStoppedAnimation<_Owner0>).status;
  // ignore: unused_element
  Object? _AlwaysStoppedAnimation_value(Object value) =>
      (value as api.AlwaysStoppedAnimation<_Owner0>).value;
  // ignore: unused_element
  Object? _AlwaysStoppedAnimation_isDismissed(Object value) =>
      (value as api.AlwaysStoppedAnimation<_Owner0>).isDismissed;
  // ignore: unused_element
  Object? _AlwaysStoppedAnimation_isCompleted(Object value) =>
      (value as api.AlwaysStoppedAnimation<_Owner0>).isCompleted;
  // ignore: unused_element
  Object? _AlwaysStoppedAnimation_isAnimating(Object value) =>
      (value as api.AlwaysStoppedAnimation<_Owner0>).isAnimating;
  // ignore: unused_element
  Object? _AlwaysStoppedAnimation_isForwardOrCompleted(Object value) =>
      (value as api.AlwaysStoppedAnimation<_Owner0>).isForwardOrCompleted;
  Object? _AlwaysStoppedAnimation_super_get_value(
    Object value,
    Map<String, Object?> values,
  ) => (value as _AlwaysStoppedAnimationProxy<_Owner0>)._flaxSuperGet_value;
  Object? _AlwaysStoppedAnimation_addListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AlwaysStoppedAnimation<_Owner0>).addListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _AlwaysStoppedAnimation_removeListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AlwaysStoppedAnimation<_Owner0>).removeListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _AlwaysStoppedAnimation_addStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AlwaysStoppedAnimation<_Owner0>).addStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _AlwaysStoppedAnimation_removeStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AlwaysStoppedAnimation<_Owner0>).removeStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _AlwaysStoppedAnimation_drive(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.AlwaysStoppedAnimation<_Owner0>).drive<Object?>(
      values["child"] as api.Animatable<Object?>,
    );
  }

  Object? _AlwaysStoppedAnimation_super_drive(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _AlwaysStoppedAnimationProxy<_Owner0>)
        ._flaxSuper_drive<Object?>(values["child"] as api.Animatable<Object?>);
  }

  Object? _AlwaysStoppedAnimation_toString(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.AlwaysStoppedAnimation<_Owner0>).toString();
  }

  Object? _AlwaysStoppedAnimation_toStringDetails(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.AlwaysStoppedAnimation<_Owner0>).toStringDetails();
  }

  // ignore: unused_element
  Object _createAlwaysStoppedAnimation(
    String ctor,
    Map<String, Object?> values,
  ) {
    switch (ctor) {
      case "":
        return api.AlwaysStoppedAnimation<_Owner0>(values["value"] as _Owner0);
      case "@implementation":
        return _AlwaysStoppedAnimationProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          values["value"] as _Owner0,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  FlaxCallbackBinding _callback0Types<_Callback0 extends Object?>(
    FlaxDartTypes types,
  ) {
    return FlaxCallbackBinding(
      [
        FlaxCallbackParameter.plain(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        ),
      ],
      types.ref<api.Animation<_Callback0>>(withinCallback: true),
      FlaxCallbackAdapters
          .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      id:
          types
              .key<
                api.Animation<_Callback0> Function(
                  api.Animatable<_Callback0> child,
                )
              >() +
          ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
      invoke: FlaxCallbackAdapters
          .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      matches: FlaxCallbackAdapters
          .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    );
  }

  Object _callback0(FlaxCallback _flaxBridgeCallback) =>
      <U extends Object?>(api.Animatable<U> p0) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        return _genericCallbackResult<api.Animation<U>>(
          _flaxBridgeCallback.call(positional, named),
        );
      };
  bool _callback0Matches(Object value) =>
      value
          is api.Animation<U> Function<U extends Object?>(
            api.Animatable<U> child,
          );
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        ))<Object?>(positional[0] as api.Animatable<Object?>);
  }

  return FlaxDartClass(
    api.AlwaysStoppedAnimation<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain(
          "status",
          _flaxBinding1,
          _AlwaysStoppedAnimation_status,
        ),
        FlaxGetter.plain(
          "value",
          types.ref<_Owner0>(),
          _AlwaysStoppedAnimation_value,
        ),
        FlaxGetter.plain(
          "isDismissed",
          flaxBoolType,
          _AlwaysStoppedAnimation_isDismissed,
        ),
        FlaxGetter.plain(
          "isCompleted",
          flaxBoolType,
          _AlwaysStoppedAnimation_isCompleted,
        ),
        FlaxGetter.plain(
          "isAnimating",
          flaxBoolType,
          _AlwaysStoppedAnimation_isAnimating,
        ),
        FlaxGetter.plain(
          "isForwardOrCompleted",
          flaxBoolType,
          _AlwaysStoppedAnimation_isForwardOrCompleted,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AlwaysStoppedAnimation_addListener,
        ),
        "removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AlwaysStoppedAnimation_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AlwaysStoppedAnimation_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AlwaysStoppedAnimation_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _AlwaysStoppedAnimation_drive,
          genericFactory: _flaxGeneric_AlwaysStoppedAnimation_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _AlwaysStoppedAnimation_toString,
        ),
        "toStringDetails": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _AlwaysStoppedAnimation_toStringDetails,
        ),
        "@super:addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _AlwaysStoppedAnimation_super_drive,
          genericFactory: _flaxGeneric_AlwaysStoppedAnimation_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toString": _flaxBinding702,
        "@super:toStringDetails": _flaxBinding703,
        "@super:get:value": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<_Owner0>(),
          _AlwaysStoppedAnimation_super_get_value,
        ),
        "@super:get:status": _flaxBinding704,
        "@super:get:isDismissed": _flaxBinding705,
        "@super:get:isCompleted": _flaxBinding706,
        "@super:get:isAnimating": _flaxBinding707,
        "@super:get:isForwardOrCompleted": _flaxBinding708,
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter.required("value", types.ref<_Owner0>()),
        ],
        "@implementation": <FlaxParameter>[
          FlaxParameter.required("value", types.ref<_Owner0>()),
        ],
      },
      create: _createAlwaysStoppedAnimation,
      matches: _isAlwaysStoppedAnimation,
      setters: [],
      supertypes: [
        "flax.core/sdk_animation#type:AlwaysStoppedAnimation",
        ...[
          "flax.core/sdk_animation#type:Animation",
          "flax.core/flutter#type:Listenable",
          "dart:core::Object",
          "flax.core/flutter#type:ValueListenable",
        ],
      ],
      listenerPairs: {"addListener": "removeListener"},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "addListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "removeListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "addStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "removeStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback0,
            id:
                types
                    .key<
                      api.Animation<U> Function<U extends Object?>(
                        api.Animatable<U> child,
                      )
                    >() +
                ":callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
            genericFactory: _callback0Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toStringDetails",
          0,
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
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function()>() + ":callback:<>()->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "status",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding1,
            id: types.key<api.AnimationStatus Function()>() + ":callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isDismissed",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
  );
};
Type _flaxType_Animatable<_Owner0 extends Object?>() => api.Animatable<_Owner0>;
Function _flaxClass_Animatable<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isAnimatable(Object value) => value is api.Animatable<_Owner0>;
  Object? _Animatable_transform(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Animatable<_Owner0>).transform(
      values["t"] as double,
    );
  }

  Object? _Animatable_evaluate(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Animatable<_Owner0>).evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _Animatable_super_evaluate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _AnimatableProxy<_Owner0>)._flaxSuper_evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _Animatable_animate(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Animatable<_Owner0>).animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _Animatable_super_animate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _AnimatableProxy<_Owner0>)._flaxSuper_animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _Animatable_chain(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Animatable<_Owner0>).chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  Object? _Animatable_super_chain(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _AnimatableProxy<_Owner0>)._flaxSuper_chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  // ignore: unused_element
  Object _createAnimatable(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "fromCallback":
        return api.Animatable<_Owner0>.fromCallback(
          values["callback"] as _Owner0 Function(double value),
        );
      case "@implementation":
        return _AnimatableProxy<_Owner0>(values['@peer'] as FlaxProxyPeer);
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  return FlaxDartClass(
    api.Animatable<_Owner0>,
    FlaxObjectBinding(
      id,
      [],
      {
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _Animatable_transform,
        ),
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _Animatable_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _Animatable_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _Animatable_chain,
        ),
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _Animatable_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _Animatable_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _Animatable_super_chain,
        ),
      },
      constructors: {
        "fromCallback": <FlaxParameter>[
          FlaxParameter.required(
            "callback",
            types.define<_Owner0 Function(double value)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("value", flaxDoubleType)],
                  types.ref<_Owner0>(withinCallback: true),
                  FlaxCallbackAdapters.wrap1<double, _Owner0>,
                  id:
                      types.key<_Owner0 Function(double value)>() +
                      ":callback:<>(p:r:value:double:)->parameter:",
                  invoke: FlaxCallbackAdapters.invoke1<double, _Owner0>,
                  matches: FlaxCallbackAdapters.matches1<double, _Owner0>,
                ),
              ),
            ),
          ),
        ],
        "@implementation": _flaxBinding96,
      },
      create: _createAnimatable,
      matches: _isAnimatable,
      setters: [],
      supertypes: [
        "flax.core/sdk_animation#type:Animatable",
        ...["dart:core::Object"],
      ],
      listenerPairs: {},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            types.ref<_Owner0>(withinCallback: true),
            id:
                types.key<_Owner0 Function(double t)>() +
                ":callback:<>(p:r:t:double:)->parameter:",
          ),
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animation<_Owner0> Function(
                        api.Animation<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            types.ref<api.Animatable<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animatable<_Owner0> Function(
                        api.Animatable<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<parameter:>",
          ),
          hasSuper: true,
        ),
      ]),
    ),
  );
};
Function _flaxGeneric_Animation_drive<
  _Owner0 extends Object?,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Animation<_Owner0>).drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_Animation_super_drive<
  _Owner0 extends Object?,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as _AnimationProxy<_Owner0>)._flaxSuper_drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Type _flaxType_Animation<_Owner0 extends Object?>() => api.Animation<_Owner0>;
Function _flaxClass_Animation<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isAnimation(Object value) => value is api.Animation<_Owner0>;
  // ignore: unused_element
  Object? _Animation_value(Object value) =>
      (value as api.Animation<_Owner0>).value;
  // ignore: unused_element
  Object? _Animation_status(Object value) =>
      (value as api.Animation<_Owner0>).status;
  // ignore: unused_element
  Object? _Animation_isDismissed(Object value) =>
      (value as api.Animation<_Owner0>).isDismissed;
  // ignore: unused_element
  Object? _Animation_isCompleted(Object value) =>
      (value as api.Animation<_Owner0>).isCompleted;
  // ignore: unused_element
  Object? _Animation_isAnimating(Object value) =>
      (value as api.Animation<_Owner0>).isAnimating;
  // ignore: unused_element
  Object? _Animation_isForwardOrCompleted(Object value) =>
      (value as api.Animation<_Owner0>).isForwardOrCompleted;
  Object? _Animation_addListener(Object receiver, Map<String, Object?> values) {
    (receiver as api.Animation<_Owner0>).addListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _Animation_removeListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.Animation<_Owner0>).removeListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _Animation_addStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.Animation<_Owner0>).addStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _Animation_removeStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.Animation<_Owner0>).removeStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _Animation_drive(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Animation<_Owner0>).drive<Object?>(
      values["child"] as api.Animatable<Object?>,
    );
  }

  Object? _Animation_super_drive(Object receiver, Map<String, Object?> values) {
    return (receiver as _AnimationProxy<_Owner0>)._flaxSuper_drive<Object?>(
      values["child"] as api.Animatable<Object?>,
    );
  }

  Object? _Animation_toString(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Animation<_Owner0>).toString();
  }

  Object? _Animation_toStringDetails(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.Animation<_Owner0>).toStringDetails();
  }

  // ignore: unused_element
  Object _createAnimation(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "fromValueListenable":
        return api.Animation<_Owner0>.fromValueListenable(
          values["listenable"] as api2.ValueListenable<_Owner0>,
          transformer: values["transformer"] as _Owner0 Function(_Owner0 p0)?,
        );
      case "@implementation":
        return _AnimationProxy<_Owner0>(values['@peer'] as FlaxProxyPeer);
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  FlaxCallbackBinding _callback0Types<_Callback0 extends Object?>(
    FlaxDartTypes types,
  ) {
    return FlaxCallbackBinding(
      [
        FlaxCallbackParameter.plain(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        ),
      ],
      types.ref<api.Animation<_Callback0>>(withinCallback: true),
      FlaxCallbackAdapters
          .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      id:
          types
              .key<
                api.Animation<_Callback0> Function(
                  api.Animatable<_Callback0> child,
                )
              >() +
          ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
      invoke: FlaxCallbackAdapters
          .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      matches: FlaxCallbackAdapters
          .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    );
  }

  Object _callback0(FlaxCallback _flaxBridgeCallback) =>
      <U extends Object?>(api.Animatable<U> p0) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        return _genericCallbackResult<api.Animation<U>>(
          _flaxBridgeCallback.call(positional, named),
        );
      };
  bool _callback0Matches(Object value) =>
      value
          is api.Animation<U> Function<U extends Object?>(
            api.Animatable<U> child,
          );
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        ))<Object?>(positional[0] as api.Animatable<Object?>);
  }

  return FlaxDartClass(
    api.Animation<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain("value", types.ref<_Owner0>(), _Animation_value),
        FlaxGetter.plain("status", _flaxBinding1, _Animation_status),
        FlaxGetter.plain("isDismissed", flaxBoolType, _Animation_isDismissed),
        FlaxGetter.plain("isCompleted", flaxBoolType, _Animation_isCompleted),
        FlaxGetter.plain("isAnimating", flaxBoolType, _Animation_isAnimating),
        FlaxGetter.plain(
          "isForwardOrCompleted",
          flaxBoolType,
          _Animation_isForwardOrCompleted,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _Animation_addListener,
        ),
        "removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _Animation_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _Animation_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _Animation_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _Animation_drive,
          genericFactory: _flaxGeneric_Animation_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _Animation_toString,
        ),
        "toStringDetails": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _Animation_toStringDetails,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _Animation_super_drive,
          genericFactory: _flaxGeneric_Animation_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toString": _flaxBinding702,
        "@super:toStringDetails": _flaxBinding703,
        "@super:get:isDismissed": _flaxBinding705,
        "@super:get:isCompleted": _flaxBinding706,
        "@super:get:isAnimating": _flaxBinding707,
        "@super:get:isForwardOrCompleted": _flaxBinding708,
      },
      constructors: {
        "fromValueListenable": <FlaxParameter>[
          FlaxParameter.required(
            "listenable",
            types.ref<api2.ValueListenable<_Owner0>>(),
          ),
          FlaxParameter(
            "transformer",
            types.define<_Owner0 Function(_Owner0 p0)?>(
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter.plain(
                      "p0",
                      types.ref<_Owner0>(withinCallback: true),
                    ),
                  ],
                  types.ref<_Owner0>(withinCallback: true),
                  FlaxCallbackAdapters.wrap1<_Owner0, _Owner0>,
                  id:
                      types.key<_Owner0 Function(_Owner0 p0)?>() +
                      ":callback:<>(p:r:p0:parameter:)->parameter:",
                  invoke: FlaxCallbackAdapters.invoke1<_Owner0, _Owner0>,
                  matches: FlaxCallbackAdapters.matches1<_Owner0, _Owner0>,
                ),
              ),
            ),
            required: false,
          ),
        ],
        "@implementation": _flaxBinding96,
      },
      create: _createAnimation,
      matches: _isAnimation,
      setters: [],
      supertypes: [
        "flax.core/sdk_animation#type:Animation",
        ...[
          "flax.core/flutter#type:Listenable",
          "dart:core::Object",
          "flax.core/flutter#type:ValueListenable",
        ],
      ],
      listenerPairs: {"addListener": "removeListener"},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "addListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
        ),
        FlaxProxyMember(
          "removeListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
        ),
        FlaxProxyMember(
          "addStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
        ),
        FlaxProxyMember(
          "removeStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
        ),
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback0,
            id:
                types
                    .key<
                      api.Animation<U> Function<U extends Object?>(
                        api.Animatable<U> child,
                      )
                    >() +
                ":callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
            genericFactory: _callback0Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toStringDetails",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "status",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding1,
            id: types.key<api.AnimationStatus Function()>() + ":callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
          ),
        ),
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function()>() + ":callback:<>()->parameter:",
          ),
        ),
        FlaxProxyMember(
          "isDismissed",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
  );
};
Function _flaxGeneric_AnimationController_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.AnimationController).drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "child",
            types.ref<api.Animatable<_Method0>>(),
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_AnimationController_super_drive<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as _AnimationControllerProxy)._flaxSuper_drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_AnimationMax_drive<
  _Owner0 extends num,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api.AnimationMax<_Owner0>).drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_AnimationMax_super_drive<
  _Owner0 extends num,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as _AnimationMaxProxy<_Owner0>)._flaxSuper_drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Type _flaxType_AnimationMax<_Owner0 extends num>() => api.AnimationMax<_Owner0>;
Function _flaxClass_AnimationMax<
  _Owner0 extends num
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isAnimationMax(Object value) => value is api.AnimationMax<_Owner0>;
  // ignore: unused_element
  Object? _AnimationMax_first(Object value) =>
      (value as api.AnimationMax<_Owner0>).first;
  // ignore: unused_element
  Object? _AnimationMax_next(Object value) =>
      (value as api.AnimationMax<_Owner0>).next;
  // ignore: unused_element
  Object? _AnimationMax_status(Object value) =>
      (value as api.AnimationMax<_Owner0>).status;
  // ignore: unused_element
  Object? _AnimationMax_value(Object value) =>
      (value as api.AnimationMax<_Owner0>).value;
  // ignore: unused_element
  Object? _AnimationMax_isDismissed(Object value) =>
      (value as api.AnimationMax<_Owner0>).isDismissed;
  // ignore: unused_element
  Object? _AnimationMax_isCompleted(Object value) =>
      (value as api.AnimationMax<_Owner0>).isCompleted;
  // ignore: unused_element
  Object? _AnimationMax_isAnimating(Object value) =>
      (value as api.AnimationMax<_Owner0>).isAnimating;
  // ignore: unused_element
  Object? _AnimationMax_isForwardOrCompleted(Object value) =>
      (value as api.AnimationMax<_Owner0>).isForwardOrCompleted;
  Object? _AnimationMax_super_get_value(
    Object value,
    Map<String, Object?> values,
  ) => (value as _AnimationMaxProxy<_Owner0>)._flaxSuperGet_value;
  Object? _AnimationMax_super_get_first(
    Object value,
    Map<String, Object?> values,
  ) => (value as _AnimationMaxProxy<_Owner0>)._flaxSuperGet_first;
  Object? _AnimationMax_super_get_next(
    Object value,
    Map<String, Object?> values,
  ) => (value as _AnimationMaxProxy<_Owner0>)._flaxSuperGet_next;
  Object? _AnimationMax_super_get_isListening(
    Object value,
    Map<String, Object?> values,
  ) => (value as _AnimationMaxProxy<_Owner0>)._flaxSuperGet_isListening;
  Object? _AnimationMax_didStartListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).didStartListening();
    return null;
  }

  Object? _AnimationMax_super_didStartListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMaxProxy<_Owner0>)._flaxSuper_didStartListening();
    return null;
  }

  Object? _AnimationMax_didStopListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).didStopListening();
    return null;
  }

  Object? _AnimationMax_super_didStopListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMaxProxy<_Owner0>)._flaxSuper_didStopListening();
    return null;
  }

  Object? _AnimationMax_toString(Object receiver, Map<String, Object?> values) {
    return (receiver as api.AnimationMax<_Owner0>).toString();
  }

  Object? _AnimationMax_addListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).addListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _AnimationMax_removeListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).removeListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _AnimationMax_addStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).addStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _AnimationMax_removeStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).removeStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _AnimationMax_drive(Object receiver, Map<String, Object?> values) {
    return (receiver as api.AnimationMax<_Owner0>).drive<Object?>(
      values["child"] as api.Animatable<Object?>,
    );
  }

  Object? _AnimationMax_super_drive(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _AnimationMaxProxy<_Owner0>)._flaxSuper_drive<Object?>(
      values["child"] as api.Animatable<Object?>,
    );
  }

  Object? _AnimationMax_toStringDetails(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.AnimationMax<_Owner0>).toStringDetails();
  }

  Object? _AnimationMax_didRegisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).didRegisterListener();
    return null;
  }

  Object? _AnimationMax_super_didRegisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMaxProxy<_Owner0>)._flaxSuper_didRegisterListener();
    return null;
  }

  Object? _AnimationMax_didUnregisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).didUnregisterListener();
    return null;
  }

  Object? _AnimationMax_super_didUnregisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMaxProxy<_Owner0>)
        ._flaxSuper_didUnregisterListener();
    return null;
  }

  Object? _AnimationMax_clearListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).clearListeners();
    return null;
  }

  Object? _AnimationMax_super_clearListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMaxProxy<_Owner0>)._flaxSuper_clearListeners();
    return null;
  }

  Object? _AnimationMax_notifyListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).notifyListeners();
    return null;
  }

  Object? _AnimationMax_super_notifyListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMaxProxy<_Owner0>)._flaxSuper_notifyListeners();
    return null;
  }

  Object? _AnimationMax_clearStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).clearStatusListeners();
    return null;
  }

  Object? _AnimationMax_super_clearStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMaxProxy<_Owner0>)._flaxSuper_clearStatusListeners();
    return null;
  }

  Object? _AnimationMax_notifyStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMax<_Owner0>).notifyStatusListeners(
      values["status"] as api.AnimationStatus,
    );
    return null;
  }

  Object? _AnimationMax_super_notifyStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMaxProxy<_Owner0>)._flaxSuper_notifyStatusListeners(
      values["status"] as api.AnimationStatus,
    );
    return null;
  }

  // ignore: unused_element
  Object _createAnimationMax(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "":
        return api.AnimationMax<_Owner0>(
          values["first"] as api.Animation<_Owner0>,
          values["next"] as api.Animation<_Owner0>,
        );
      case "@implementation":
        return _AnimationMaxProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          values["first"] as api.Animation<_Owner0>,
          values["next"] as api.Animation<_Owner0>,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  FlaxCallbackBinding _callback0Types<_Callback0 extends Object?>(
    FlaxDartTypes types,
  ) {
    return FlaxCallbackBinding(
      [
        FlaxCallbackParameter.plain(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        ),
      ],
      types.ref<api.Animation<_Callback0>>(withinCallback: true),
      FlaxCallbackAdapters
          .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      id:
          types
              .key<
                api.Animation<_Callback0> Function(
                  api.Animatable<_Callback0> child,
                )
              >() +
          ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
      invoke: FlaxCallbackAdapters
          .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      matches: FlaxCallbackAdapters
          .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    );
  }

  Object _callback0(FlaxCallback _flaxBridgeCallback) =>
      <U extends Object?>(api.Animatable<U> p0) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        return _genericCallbackResult<api.Animation<U>>(
          _flaxBridgeCallback.call(positional, named),
        );
      };
  bool _callback0Matches(Object value) =>
      value
          is api.Animation<U> Function<U extends Object?>(
            api.Animatable<U> child,
          );
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        ))<Object?>(positional[0] as api.Animatable<Object?>);
  }

  return FlaxDartClass(
    api.AnimationMax<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain(
          "first",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMax_first,
        ),
        FlaxGetter.plain(
          "next",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMax_next,
        ),
        FlaxGetter.plain("status", _flaxBinding1, _AnimationMax_status),
        FlaxGetter.plain("value", types.ref<_Owner0>(), _AnimationMax_value),
        FlaxGetter.plain(
          "isDismissed",
          flaxBoolType,
          _AnimationMax_isDismissed,
        ),
        FlaxGetter.plain(
          "isCompleted",
          flaxBoolType,
          _AnimationMax_isCompleted,
        ),
        FlaxGetter.plain(
          "isAnimating",
          flaxBoolType,
          _AnimationMax_isAnimating,
        ),
        FlaxGetter.plain(
          "isForwardOrCompleted",
          flaxBoolType,
          _AnimationMax_isForwardOrCompleted,
        ),
        _flaxBinding234,
      ],
      {
        "didStartListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_didStartListening,
        ),
        "didStopListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_didStopListening,
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _AnimationMax_toString,
        ),
        "addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationMax_addListener,
        ),
        "removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationMax_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationMax_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationMax_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _AnimationMax_drive,
          genericFactory: _flaxGeneric_AnimationMax_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toStringDetails": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _AnimationMax_toStringDetails,
        ),
        "didRegisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_didRegisterListener,
        ),
        "didUnregisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_didUnregisterListener,
        ),
        "clearListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_clearListeners,
        ),
        "notifyListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_notifyListeners,
        ),
        "clearStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_clearStatusListeners,
        ),
        "notifyStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding709,
          flaxVoidType,
          _AnimationMax_notifyStatusListeners,
        ),
        "@super:didStartListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_super_didStopListening,
        ),
        "@super:toString": _flaxBinding702,
        "@super:addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _AnimationMax_super_drive,
          genericFactory: _flaxGeneric_AnimationMax_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toStringDetails": _flaxBinding703,
        "@super:didRegisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_super_didUnregisterListener,
        ),
        "@super:clearListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMax_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding709,
          flaxVoidType,
          _AnimationMax_super_notifyStatusListeners,
        ),
        "@super:get:value": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<_Owner0>(),
          _AnimationMax_super_get_value,
        ),
        "@super:get:first": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMax_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMax_super_get_next,
        ),
        "@super:get:status": _flaxBinding704,
        "@super:get:isDismissed": _flaxBinding705,
        "@super:get:isCompleted": _flaxBinding706,
        "@super:get:isAnimating": _flaxBinding707,
        "@super:get:isForwardOrCompleted": _flaxBinding708,
        "@super:get:isListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxBoolType,
          _AnimationMax_super_get_isListening,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter.required("first", types.ref<api.Animation<_Owner0>>()),
          FlaxParameter.required("next", types.ref<api.Animation<_Owner0>>()),
        ],
        "@implementation": <FlaxParameter>[
          FlaxParameter.required("first", types.ref<api.Animation<_Owner0>>()),
          FlaxParameter.required("next", types.ref<api.Animation<_Owner0>>()),
        ],
      },
      create: _createAnimationMax,
      matches: _isAnimationMax,
      setters: [],
      supertypes: [
        "flax.core/sdk_animation#type:AnimationMax",
        ...[
          "flax.core/sdk_animation#type:CompoundAnimation",
          "flax.core/sdk_animation#type:Animation",
          "flax.core/flutter#type:Listenable",
          "dart:core::Object",
          "flax.core/flutter#type:ValueListenable",
          "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
          "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
          "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
        ],
      ],
      listenerPairs: {"addListener": "removeListener"},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "didStartListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didStopListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "addListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "removeListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "addStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "removeStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback0,
            id:
                types
                    .key<
                      api.Animation<U> Function<U extends Object?>(
                        api.Animatable<U> child,
                      )
                    >() +
                ":callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
            genericFactory: _callback0Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        FlaxProxyMember(
          "toStringDetails",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didRegisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didUnregisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("status", _flaxBinding1)],
            flaxVoidType,
            id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function()>() + ":callback:<>()->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "first",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id: types.key<api.Animation<_Owner0> Function()>() + ":callback:<>()->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "next",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id: types.key<api.Animation<_Owner0> Function()>() + ":callback:<>()->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "status",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding1,
            id: types.key<api.AnimationStatus Function()>() + ":callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isDismissed",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isListening",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
  );
};
Function _flaxGeneric_AnimationMean_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.AnimationMean).drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "child",
            types.ref<api.Animatable<_Method0>>(),
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_AnimationMean_super_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as _AnimationMeanProxy)._flaxSuper_drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "child",
            types.ref<api.Animatable<_Method0>>(),
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_AnimationMin_drive<
  _Owner0 extends num,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api.AnimationMin<_Owner0>).drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_AnimationMin_super_drive<
  _Owner0 extends num,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as _AnimationMinProxy<_Owner0>)._flaxSuper_drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Type _flaxType_AnimationMin<_Owner0 extends num>() => api.AnimationMin<_Owner0>;
Function _flaxClass_AnimationMin<
  _Owner0 extends num
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isAnimationMin(Object value) => value is api.AnimationMin<_Owner0>;
  // ignore: unused_element
  Object? _AnimationMin_first(Object value) =>
      (value as api.AnimationMin<_Owner0>).first;
  // ignore: unused_element
  Object? _AnimationMin_next(Object value) =>
      (value as api.AnimationMin<_Owner0>).next;
  // ignore: unused_element
  Object? _AnimationMin_status(Object value) =>
      (value as api.AnimationMin<_Owner0>).status;
  // ignore: unused_element
  Object? _AnimationMin_value(Object value) =>
      (value as api.AnimationMin<_Owner0>).value;
  // ignore: unused_element
  Object? _AnimationMin_isDismissed(Object value) =>
      (value as api.AnimationMin<_Owner0>).isDismissed;
  // ignore: unused_element
  Object? _AnimationMin_isCompleted(Object value) =>
      (value as api.AnimationMin<_Owner0>).isCompleted;
  // ignore: unused_element
  Object? _AnimationMin_isAnimating(Object value) =>
      (value as api.AnimationMin<_Owner0>).isAnimating;
  // ignore: unused_element
  Object? _AnimationMin_isForwardOrCompleted(Object value) =>
      (value as api.AnimationMin<_Owner0>).isForwardOrCompleted;
  Object? _AnimationMin_super_get_value(
    Object value,
    Map<String, Object?> values,
  ) => (value as _AnimationMinProxy<_Owner0>)._flaxSuperGet_value;
  Object? _AnimationMin_super_get_first(
    Object value,
    Map<String, Object?> values,
  ) => (value as _AnimationMinProxy<_Owner0>)._flaxSuperGet_first;
  Object? _AnimationMin_super_get_next(
    Object value,
    Map<String, Object?> values,
  ) => (value as _AnimationMinProxy<_Owner0>)._flaxSuperGet_next;
  Object? _AnimationMin_super_get_isListening(
    Object value,
    Map<String, Object?> values,
  ) => (value as _AnimationMinProxy<_Owner0>)._flaxSuperGet_isListening;
  Object? _AnimationMin_didStartListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).didStartListening();
    return null;
  }

  Object? _AnimationMin_super_didStartListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMinProxy<_Owner0>)._flaxSuper_didStartListening();
    return null;
  }

  Object? _AnimationMin_didStopListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).didStopListening();
    return null;
  }

  Object? _AnimationMin_super_didStopListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMinProxy<_Owner0>)._flaxSuper_didStopListening();
    return null;
  }

  Object? _AnimationMin_toString(Object receiver, Map<String, Object?> values) {
    return (receiver as api.AnimationMin<_Owner0>).toString();
  }

  Object? _AnimationMin_addListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).addListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _AnimationMin_removeListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).removeListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _AnimationMin_addStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).addStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _AnimationMin_removeStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).removeStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _AnimationMin_drive(Object receiver, Map<String, Object?> values) {
    return (receiver as api.AnimationMin<_Owner0>).drive<Object?>(
      values["child"] as api.Animatable<Object?>,
    );
  }

  Object? _AnimationMin_super_drive(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _AnimationMinProxy<_Owner0>)._flaxSuper_drive<Object?>(
      values["child"] as api.Animatable<Object?>,
    );
  }

  Object? _AnimationMin_toStringDetails(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.AnimationMin<_Owner0>).toStringDetails();
  }

  Object? _AnimationMin_didRegisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).didRegisterListener();
    return null;
  }

  Object? _AnimationMin_super_didRegisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMinProxy<_Owner0>)._flaxSuper_didRegisterListener();
    return null;
  }

  Object? _AnimationMin_didUnregisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).didUnregisterListener();
    return null;
  }

  Object? _AnimationMin_super_didUnregisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMinProxy<_Owner0>)
        ._flaxSuper_didUnregisterListener();
    return null;
  }

  Object? _AnimationMin_clearListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).clearListeners();
    return null;
  }

  Object? _AnimationMin_super_clearListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMinProxy<_Owner0>)._flaxSuper_clearListeners();
    return null;
  }

  Object? _AnimationMin_notifyListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).notifyListeners();
    return null;
  }

  Object? _AnimationMin_super_notifyListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMinProxy<_Owner0>)._flaxSuper_notifyListeners();
    return null;
  }

  Object? _AnimationMin_clearStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).clearStatusListeners();
    return null;
  }

  Object? _AnimationMin_super_clearStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMinProxy<_Owner0>)._flaxSuper_clearStatusListeners();
    return null;
  }

  Object? _AnimationMin_notifyStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationMin<_Owner0>).notifyStatusListeners(
      values["status"] as api.AnimationStatus,
    );
    return null;
  }

  Object? _AnimationMin_super_notifyStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _AnimationMinProxy<_Owner0>)._flaxSuper_notifyStatusListeners(
      values["status"] as api.AnimationStatus,
    );
    return null;
  }

  // ignore: unused_element
  Object _createAnimationMin(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "":
        return api.AnimationMin<_Owner0>(
          values["first"] as api.Animation<_Owner0>,
          values["next"] as api.Animation<_Owner0>,
        );
      case "@implementation":
        return _AnimationMinProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          values["first"] as api.Animation<_Owner0>,
          values["next"] as api.Animation<_Owner0>,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  FlaxCallbackBinding _callback0Types<_Callback0 extends Object?>(
    FlaxDartTypes types,
  ) {
    return FlaxCallbackBinding(
      [
        FlaxCallbackParameter.plain(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        ),
      ],
      types.ref<api.Animation<_Callback0>>(withinCallback: true),
      FlaxCallbackAdapters
          .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      id:
          types
              .key<
                api.Animation<_Callback0> Function(
                  api.Animatable<_Callback0> child,
                )
              >() +
          ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
      invoke: FlaxCallbackAdapters
          .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      matches: FlaxCallbackAdapters
          .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    );
  }

  Object _callback0(FlaxCallback _flaxBridgeCallback) =>
      <U extends Object?>(api.Animatable<U> p0) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        return _genericCallbackResult<api.Animation<U>>(
          _flaxBridgeCallback.call(positional, named),
        );
      };
  bool _callback0Matches(Object value) =>
      value
          is api.Animation<U> Function<U extends Object?>(
            api.Animatable<U> child,
          );
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        ))<Object?>(positional[0] as api.Animatable<Object?>);
  }

  return FlaxDartClass(
    api.AnimationMin<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain(
          "first",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMin_first,
        ),
        FlaxGetter.plain(
          "next",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMin_next,
        ),
        FlaxGetter.plain("status", _flaxBinding1, _AnimationMin_status),
        FlaxGetter.plain("value", types.ref<_Owner0>(), _AnimationMin_value),
        FlaxGetter.plain(
          "isDismissed",
          flaxBoolType,
          _AnimationMin_isDismissed,
        ),
        FlaxGetter.plain(
          "isCompleted",
          flaxBoolType,
          _AnimationMin_isCompleted,
        ),
        FlaxGetter.plain(
          "isAnimating",
          flaxBoolType,
          _AnimationMin_isAnimating,
        ),
        FlaxGetter.plain(
          "isForwardOrCompleted",
          flaxBoolType,
          _AnimationMin_isForwardOrCompleted,
        ),
        _flaxBinding234,
      ],
      {
        "didStartListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_didStartListening,
        ),
        "didStopListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_didStopListening,
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _AnimationMin_toString,
        ),
        "addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationMin_addListener,
        ),
        "removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationMin_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationMin_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationMin_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _AnimationMin_drive,
          genericFactory: _flaxGeneric_AnimationMin_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toStringDetails": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _AnimationMin_toStringDetails,
        ),
        "didRegisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_didRegisterListener,
        ),
        "didUnregisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_didUnregisterListener,
        ),
        "clearListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_clearListeners,
        ),
        "notifyListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_notifyListeners,
        ),
        "clearStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_clearStatusListeners,
        ),
        "notifyStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding709,
          flaxVoidType,
          _AnimationMin_notifyStatusListeners,
        ),
        "@super:didStartListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_super_didStopListening,
        ),
        "@super:toString": _flaxBinding702,
        "@super:addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _AnimationMin_super_drive,
          genericFactory: _flaxGeneric_AnimationMin_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toStringDetails": _flaxBinding703,
        "@super:didRegisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_super_didUnregisterListener,
        ),
        "@super:clearListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _AnimationMin_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding709,
          flaxVoidType,
          _AnimationMin_super_notifyStatusListeners,
        ),
        "@super:get:value": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<_Owner0>(),
          _AnimationMin_super_get_value,
        ),
        "@super:get:first": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMin_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMin_super_get_next,
        ),
        "@super:get:status": _flaxBinding704,
        "@super:get:isDismissed": _flaxBinding705,
        "@super:get:isCompleted": _flaxBinding706,
        "@super:get:isAnimating": _flaxBinding707,
        "@super:get:isForwardOrCompleted": _flaxBinding708,
        "@super:get:isListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxBoolType,
          _AnimationMin_super_get_isListening,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter.required("first", types.ref<api.Animation<_Owner0>>()),
          FlaxParameter.required("next", types.ref<api.Animation<_Owner0>>()),
        ],
        "@implementation": <FlaxParameter>[
          FlaxParameter.required("first", types.ref<api.Animation<_Owner0>>()),
          FlaxParameter.required("next", types.ref<api.Animation<_Owner0>>()),
        ],
      },
      create: _createAnimationMin,
      matches: _isAnimationMin,
      setters: [],
      supertypes: [
        "flax.core/sdk_animation#type:AnimationMin",
        ...[
          "flax.core/sdk_animation#type:CompoundAnimation",
          "flax.core/sdk_animation#type:Animation",
          "flax.core/flutter#type:Listenable",
          "dart:core::Object",
          "flax.core/flutter#type:ValueListenable",
          "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
          "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
          "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
        ],
      ],
      listenerPairs: {"addListener": "removeListener"},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "didStartListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didStopListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "addListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "removeListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "addStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "removeStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback0,
            id:
                types
                    .key<
                      api.Animation<U> Function<U extends Object?>(
                        api.Animatable<U> child,
                      )
                    >() +
                ":callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
            genericFactory: _callback0Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        FlaxProxyMember(
          "toStringDetails",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didRegisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didUnregisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("status", _flaxBinding1)],
            flaxVoidType,
            id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function()>() + ":callback:<>()->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "first",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id: types.key<api.Animation<_Owner0> Function()>() + ":callback:<>()->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "next",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id: types.key<api.Animation<_Owner0> Function()>() + ":callback:<>()->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "status",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding1,
            id: types.key<api.AnimationStatus Function()>() + ":callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isDismissed",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isListening",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
  );
};
Type _flaxType_AnimationWithParentMixin<_Owner0 extends Object?>() =>
    api.AnimationWithParentMixin<_Owner0>;
Function _flaxClass_AnimationWithParentMixin<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isAnimationWithParentMixin(Object value) =>
      value is api.AnimationWithParentMixin<_Owner0>;
  // ignore: unused_element
  Object? _AnimationWithParentMixin_parent(Object value) =>
      (value as api.AnimationWithParentMixin<_Owner0>).parent;
  // ignore: unused_element
  Object? _AnimationWithParentMixin_status(Object value) =>
      (value as api.AnimationWithParentMixin<_Owner0>).status;
  Object? _AnimationWithParentMixin_addListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationWithParentMixin<_Owner0>).addListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _AnimationWithParentMixin_removeListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationWithParentMixin<_Owner0>).removeListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _AnimationWithParentMixin_addStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationWithParentMixin<_Owner0>).addStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _AnimationWithParentMixin_removeStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.AnimationWithParentMixin<_Owner0>).removeStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  // ignore: unused_element
  Object _createAnimationWithParentMixin(
    String ctor,
    Map<String, Object?> values,
  ) {
    switch (ctor) {
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  return FlaxDartClass(
    api.AnimationWithParentMixin<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain(
          "parent",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationWithParentMixin_parent,
        ),
        FlaxGetter.plain(
          "status",
          _flaxBinding1,
          _AnimationWithParentMixin_status,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationWithParentMixin_addListener,
        ),
        "removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationWithParentMixin_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationWithParentMixin_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _AnimationWithParentMixin_removeStatusListener,
        ),
      },
      constructors: {},
      create: _createAnimationWithParentMixin,
      matches: _isAnimationWithParentMixin,
      setters: [],
      supertypes: [
        "flax.core/sdk_animation#type:AnimationWithParentMixin",
        ...["dart:core::Object"],
      ],
      listenerPairs: {},
      disposeMethod: null,
    ),
  );
};
Function _flaxGeneric_CompoundAnimation_drive<
  _Owner0 extends Object?,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api.CompoundAnimation<_Owner0>).drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_CompoundAnimation_super_drive<
  _Owner0 extends Object?,
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as _CompoundAnimationProxy<_Owner0>)
        ._flaxSuper_drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Type _flaxType_CompoundAnimation<_Owner0 extends Object?>() =>
    api.CompoundAnimation<_Owner0>;
Function _flaxClass_CompoundAnimation<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isCompoundAnimation(Object value) =>
      value is api.CompoundAnimation<_Owner0>;
  // ignore: unused_element
  Object? _CompoundAnimation_status(Object value) =>
      (value as api.CompoundAnimation<_Owner0>).status;
  // ignore: unused_element
  Object? _CompoundAnimation_value(Object value) =>
      (value as api.CompoundAnimation<_Owner0>).value;
  // ignore: unused_element
  Object? _CompoundAnimation_isDismissed(Object value) =>
      (value as api.CompoundAnimation<_Owner0>).isDismissed;
  // ignore: unused_element
  Object? _CompoundAnimation_isCompleted(Object value) =>
      (value as api.CompoundAnimation<_Owner0>).isCompleted;
  // ignore: unused_element
  Object? _CompoundAnimation_isAnimating(Object value) =>
      (value as api.CompoundAnimation<_Owner0>).isAnimating;
  // ignore: unused_element
  Object? _CompoundAnimation_isForwardOrCompleted(Object value) =>
      (value as api.CompoundAnimation<_Owner0>).isForwardOrCompleted;
  // ignore: unused_element
  Object? _CompoundAnimation_first(Object value) =>
      (value as api.CompoundAnimation<_Owner0>).first;
  // ignore: unused_element
  Object? _CompoundAnimation_next(Object value) =>
      (value as api.CompoundAnimation<_Owner0>).next;
  Object? _CompoundAnimation_super_get_first(
    Object value,
    Map<String, Object?> values,
  ) => (value as _CompoundAnimationProxy<_Owner0>)._flaxSuperGet_first;
  Object? _CompoundAnimation_super_get_next(
    Object value,
    Map<String, Object?> values,
  ) => (value as _CompoundAnimationProxy<_Owner0>)._flaxSuperGet_next;
  Object? _CompoundAnimation_super_get_isListening(
    Object value,
    Map<String, Object?> values,
  ) => (value as _CompoundAnimationProxy<_Owner0>)._flaxSuperGet_isListening;
  Object? _CompoundAnimation_addListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).addListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _CompoundAnimation_removeListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).removeListener(
      values["listener"] as void Function(),
    );
    return null;
  }

  Object? _CompoundAnimation_addStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).addStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _CompoundAnimation_removeStatusListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).removeStatusListener(
      values["listener"] as void Function(api.AnimationStatus status),
    );
    return null;
  }

  Object? _CompoundAnimation_drive(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.CompoundAnimation<_Owner0>).drive<Object?>(
      values["child"] as api.Animatable<Object?>,
    );
  }

  Object? _CompoundAnimation_super_drive(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _CompoundAnimationProxy<_Owner0>)
        ._flaxSuper_drive<Object?>(values["child"] as api.Animatable<Object?>);
  }

  Object? _CompoundAnimation_toString(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.CompoundAnimation<_Owner0>).toString();
  }

  Object? _CompoundAnimation_toStringDetails(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.CompoundAnimation<_Owner0>).toStringDetails();
  }

  Object? _CompoundAnimation_didRegisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).didRegisterListener();
    return null;
  }

  Object? _CompoundAnimation_super_didRegisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _CompoundAnimationProxy<_Owner0>)
        ._flaxSuper_didRegisterListener();
    return null;
  }

  Object? _CompoundAnimation_didUnregisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).didUnregisterListener();
    return null;
  }

  Object? _CompoundAnimation_super_didUnregisterListener(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _CompoundAnimationProxy<_Owner0>)
        ._flaxSuper_didUnregisterListener();
    return null;
  }

  Object? _CompoundAnimation_didStartListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).didStartListening();
    return null;
  }

  Object? _CompoundAnimation_super_didStartListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _CompoundAnimationProxy<_Owner0>)
        ._flaxSuper_didStartListening();
    return null;
  }

  Object? _CompoundAnimation_didStopListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).didStopListening();
    return null;
  }

  Object? _CompoundAnimation_super_didStopListening(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _CompoundAnimationProxy<_Owner0>)
        ._flaxSuper_didStopListening();
    return null;
  }

  Object? _CompoundAnimation_clearListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).clearListeners();
    return null;
  }

  Object? _CompoundAnimation_super_clearListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _CompoundAnimationProxy<_Owner0>)._flaxSuper_clearListeners();
    return null;
  }

  Object? _CompoundAnimation_notifyListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).notifyListeners();
    return null;
  }

  Object? _CompoundAnimation_super_notifyListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _CompoundAnimationProxy<_Owner0>)._flaxSuper_notifyListeners();
    return null;
  }

  Object? _CompoundAnimation_clearStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).clearStatusListeners();
    return null;
  }

  Object? _CompoundAnimation_super_clearStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _CompoundAnimationProxy<_Owner0>)
        ._flaxSuper_clearStatusListeners();
    return null;
  }

  Object? _CompoundAnimation_notifyStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as api.CompoundAnimation<_Owner0>).notifyStatusListeners(
      values["status"] as api.AnimationStatus,
    );
    return null;
  }

  Object? _CompoundAnimation_super_notifyStatusListeners(
    Object receiver,
    Map<String, Object?> values,
  ) {
    (receiver as _CompoundAnimationProxy<_Owner0>)
        ._flaxSuper_notifyStatusListeners(
          values["status"] as api.AnimationStatus,
        );
    return null;
  }

  // ignore: unused_element
  Object _createCompoundAnimation(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "@implementation":
        return _CompoundAnimationProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          first: values["first"] as api.Animation<_Owner0>,
          next: values["next"] as api.Animation<_Owner0>,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  FlaxCallbackBinding _callback0Types<_Callback0 extends Object?>(
    FlaxDartTypes types,
  ) {
    return FlaxCallbackBinding(
      [
        FlaxCallbackParameter.plain(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        ),
      ],
      types.ref<api.Animation<_Callback0>>(withinCallback: true),
      FlaxCallbackAdapters
          .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      id:
          types
              .key<
                api.Animation<_Callback0> Function(
                  api.Animatable<_Callback0> child,
                )
              >() +
          ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
      invoke: FlaxCallbackAdapters
          .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
      matches: FlaxCallbackAdapters
          .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    );
  }

  Object _callback0(FlaxCallback _flaxBridgeCallback) =>
      <U extends Object?>(api.Animatable<U> p0) {
        final positional = <Object?>[];
        final named = <String, Object?>{};
        positional.add(p0);
        return _genericCallbackResult<api.Animation<U>>(
          _flaxBridgeCallback.call(positional, named),
        );
      };
  bool _callback0Matches(Object value) =>
      value
          is api.Animation<U> Function<U extends Object?>(
            api.Animatable<U> child,
          );
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function
        as api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        ))<Object?>(positional[0] as api.Animatable<Object?>);
  }

  return FlaxDartClass(
    api.CompoundAnimation<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain("status", _flaxBinding1, _CompoundAnimation_status),
        FlaxGetter.plain(
          "value",
          types.ref<_Owner0>(),
          _CompoundAnimation_value,
        ),
        FlaxGetter.plain(
          "isDismissed",
          flaxBoolType,
          _CompoundAnimation_isDismissed,
        ),
        FlaxGetter.plain(
          "isCompleted",
          flaxBoolType,
          _CompoundAnimation_isCompleted,
        ),
        FlaxGetter.plain(
          "isAnimating",
          flaxBoolType,
          _CompoundAnimation_isAnimating,
        ),
        FlaxGetter.plain(
          "isForwardOrCompleted",
          flaxBoolType,
          _CompoundAnimation_isForwardOrCompleted,
        ),
        _flaxBinding234,
        FlaxGetter.plain(
          "first",
          types.ref<api.Animation<_Owner0>>(),
          _CompoundAnimation_first,
        ),
        FlaxGetter.plain(
          "next",
          types.ref<api.Animation<_Owner0>>(),
          _CompoundAnimation_next,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _CompoundAnimation_addListener,
        ),
        "removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _CompoundAnimation_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _CompoundAnimation_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _CompoundAnimation_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _CompoundAnimation_drive,
          genericFactory: _flaxGeneric_CompoundAnimation_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _CompoundAnimation_toString,
        ),
        "toStringDetails": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _CompoundAnimation_toStringDetails,
        ),
        "didRegisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_didRegisterListener,
        ),
        "didUnregisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_didUnregisterListener,
        ),
        "didStartListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_didStartListening,
        ),
        "didStopListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_didStopListening,
        ),
        "clearListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_clearListeners,
        ),
        "notifyListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_notifyListeners,
        ),
        "clearStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_clearStatusListeners,
        ),
        "notifyStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding709,
          flaxVoidType,
          _CompoundAnimation_notifyStatusListeners,
        ),
        "@super:addListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod.plain(
          <FlaxParameter>[
            FlaxParameter.required(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                  flaxVoidType,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
            ),
          ],
          flaxVoidType,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding701,
          _flaxBinding108,
          _CompoundAnimation_super_drive,
          genericFactory: _flaxGeneric_CompoundAnimation_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toString": _flaxBinding702,
        "@super:toStringDetails": _flaxBinding703,
        "@super:didRegisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_super_didUnregisterListener,
        ),
        "@super:didStartListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_super_didStopListening,
        ),
        "@super:clearListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxVoidType,
          _CompoundAnimation_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod.plain(
          _flaxBinding709,
          flaxVoidType,
          _CompoundAnimation_super_notifyStatusListeners,
        ),
        "@super:get:first": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<api.Animation<_Owner0>>(),
          _CompoundAnimation_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<api.Animation<_Owner0>>(),
          _CompoundAnimation_super_get_next,
        ),
        "@super:get:status": _flaxBinding704,
        "@super:get:isDismissed": _flaxBinding705,
        "@super:get:isCompleted": _flaxBinding706,
        "@super:get:isAnimating": _flaxBinding707,
        "@super:get:isForwardOrCompleted": _flaxBinding708,
        "@super:get:isListening": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxBoolType,
          _CompoundAnimation_super_get_isListening,
        ),
      },
      constructors: {
        "@implementation": <FlaxParameter>[
          FlaxParameter.required("first", types.ref<api.Animation<_Owner0>>()),
          FlaxParameter.required("next", types.ref<api.Animation<_Owner0>>()),
        ],
      },
      create: _createCompoundAnimation,
      matches: _isCompoundAnimation,
      setters: [],
      supertypes: [
        "flax.core/sdk_animation#type:CompoundAnimation",
        ...[
          "flax.core/sdk_animation#type:Animation",
          "flax.core/flutter#type:Listenable",
          "dart:core::Object",
          "flax.core/flutter#type:ValueListenable",
          "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
          "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
          "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
        ],
      ],
      listenerPairs: {"addListener": "removeListener"},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "addListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "removeListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types.key<void Function(void Function() listener)>() +
                ":callback:<>(p:r:listener:callback:<>()->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "addStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "removeStatusListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter.plain(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [FlaxCallbackParameter.plain("status", _flaxBinding1)],
                    flaxVoidType,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
              ),
            ],
            flaxVoidType,
            id:
                types
                    .key<
                      void Function(
                        void Function(api.AnimationStatus status) listener,
                      )
                    >() +
                ":callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [FlaxCallbackParameter.plain("child", _flaxBinding107)],
            _flaxBinding108,
            _callback0,
            id:
                types
                    .key<
                      api.Animation<U> Function<U extends Object?>(
                        api.Animatable<U> child,
                      )
                    >() +
                ":callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
            genericFactory: _callback0Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toStringDetails",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didRegisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didUnregisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didStartListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didStopListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxVoidType,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("status", _flaxBinding1)],
            flaxVoidType,
            id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "first",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id: types.key<api.Animation<_Owner0> Function()>() + ":callback:<>()->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "next",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id: types.key<api.Animation<_Owner0> Function()>() + ":callback:<>()->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "status",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding1,
            id: types.key<api.AnimationStatus Function()>() + ":callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function()>() + ":callback:<>()->parameter:",
          ),
        ),
        FlaxProxyMember(
          "isDismissed",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isListening",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxBoolType,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
  );
};
Type _flaxType_ConstantTween<_Owner0 extends Object?>() =>
    api.ConstantTween<_Owner0>;
Function _flaxClass_ConstantTween<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isConstantTween(Object value) => value is api.ConstantTween<_Owner0>;
  // ignore: unused_element
  Object? _ConstantTween_begin(Object value) =>
      (value as api.ConstantTween<_Owner0>).begin;
  // ignore: unused_element
  Object? _ConstantTween_end(Object value) =>
      (value as api.ConstantTween<_Owner0>).end;
  void _ConstantTween_set_begin(Object value, Object? input) {
    (value as api.ConstantTween<_Owner0>).begin = input as _Owner0?;
  }

  void _ConstantTween_set_end(Object value, Object? input) {
    (value as api.ConstantTween<_Owner0>).end = input as _Owner0?;
  }

  Object? _ConstantTween_super_get_begin(
    Object value,
    Map<String, Object?> values,
  ) => (value as _ConstantTweenProxy<_Owner0>)._flaxSuperGet_begin;
  Object? _ConstantTween_super_get_end(
    Object value,
    Map<String, Object?> values,
  ) => (value as _ConstantTweenProxy<_Owner0>)._flaxSuperGet_end;
  Object? _ConstantTween_super_set_begin(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _ConstantTweenProxy<_Owner0>)._flaxSuperSet_begin(
      values['value'] as _Owner0?,
    );
    return null;
  }

  Object? _ConstantTween_super_set_end(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _ConstantTweenProxy<_Owner0>)._flaxSuperSet_end(
      values['value'] as _Owner0?,
    );
    return null;
  }

  Object? _ConstantTween_lerp(Object receiver, Map<String, Object?> values) {
    return (receiver as api.ConstantTween<_Owner0>).lerp(values["t"] as double);
  }

  Object? _ConstantTween_super_lerp(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ConstantTweenProxy<_Owner0>)._flaxSuper_lerp(
      values["t"] as double,
    );
  }

  Object? _ConstantTween_transform(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.ConstantTween<_Owner0>).transform(
      values["t"] as double,
    );
  }

  Object? _ConstantTween_super_transform(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ConstantTweenProxy<_Owner0>)._flaxSuper_transform(
      values["t"] as double,
    );
  }

  Object? _ConstantTween_toString(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.ConstantTween<_Owner0>).toString();
  }

  Object? _ConstantTween_evaluate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.ConstantTween<_Owner0>).evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _ConstantTween_super_evaluate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ConstantTweenProxy<_Owner0>)._flaxSuper_evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _ConstantTween_animate(Object receiver, Map<String, Object?> values) {
    return (receiver as api.ConstantTween<_Owner0>).animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _ConstantTween_super_animate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ConstantTweenProxy<_Owner0>)._flaxSuper_animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _ConstantTween_chain(Object receiver, Map<String, Object?> values) {
    return (receiver as api.ConstantTween<_Owner0>).chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  Object? _ConstantTween_super_chain(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ConstantTweenProxy<_Owner0>)._flaxSuper_chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  // ignore: unused_element
  Object _createConstantTween(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "":
        return api.ConstantTween<_Owner0>(values["value"] as _Owner0);
      case "@implementation":
        return _ConstantTweenProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          values["value"] as _Owner0,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  return FlaxDartClass(
    api.ConstantTween<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain("begin", types.ref<_Owner0?>(), _ConstantTween_begin),
        FlaxGetter.plain("end", types.ref<_Owner0?>(), _ConstantTween_end),
      ],
      {
        "lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _ConstantTween_lerp,
        ),
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _ConstantTween_transform,
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _ConstantTween_toString,
        ),
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _ConstantTween_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _ConstantTween_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _ConstantTween_chain,
        ),
        "@super:lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _ConstantTween_super_lerp,
        ),
        "@super:transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _ConstantTween_super_transform,
        ),
        "@super:toString": _flaxBinding702,
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _ConstantTween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _ConstantTween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _ConstantTween_super_chain,
        ),
        "@super:get:begin": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<_Owner0?>(),
          _ConstantTween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<_Owner0?>(),
          _ConstantTween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", types.ref<_Owner0?>())],
          flaxVoidType,
          _ConstantTween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", types.ref<_Owner0?>())],
          flaxVoidType,
          _ConstantTween_super_set_end,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter.required("value", types.ref<_Owner0>()),
        ],
        "@implementation": <FlaxParameter>[
          FlaxParameter.required("value", types.ref<_Owner0>()),
        ],
      },
      create: _createConstantTween,
      matches: _isConstantTween,
      setters: [
        FlaxSetter("begin", types.ref<_Owner0?>(), _ConstantTween_set_begin),
        FlaxSetter("end", types.ref<_Owner0?>(), _ConstantTween_set_end),
      ],
      supertypes: [
        "flax.core/sdk_animation#type:ConstantTween",
        ...[
          "flax.core/sdk_animation#type:Tween",
          "flax.core/sdk_animation#type:Animatable",
          "dart:core::Object",
        ],
      ],
      listenerPairs: {},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "lerp",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            types.ref<_Owner0>(withinCallback: true),
            id:
                types.key<_Owner0 Function(double t)>() +
                ":callback:<>(p:r:t:double:)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            types.ref<_Owner0>(withinCallback: true),
            id:
                types.key<_Owner0 Function(double t)>() +
                ":callback:<>(p:r:t:double:)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animation<_Owner0> Function(
                        api.Animation<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            types.ref<api.Animatable<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animatable<_Owner0> Function(
                        api.Animatable<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "begin",
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
          "end",
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
          "begin",
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
          "end",
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
      ]),
    ),
  );
};
Function _flaxGeneric_CurvedAnimation_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.CurvedAnimation).drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "child",
            types.ref<api.Animatable<_Method0>>(),
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_CurvedAnimation_super_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as _CurvedAnimationProxy)._flaxSuper_drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "child",
            types.ref<api.Animatable<_Method0>>(),
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Type _flaxType_ParametricCurve<_Owner0 extends Object?>() =>
    api.ParametricCurve<_Owner0>;
Function _flaxClass_ParametricCurve<_Owner0 extends Object?>() =>
    (FlaxDartTypes types, String id) {
      // ignore: unused_element
      bool _isParametricCurve(Object value) =>
          value is api.ParametricCurve<_Owner0>;
      Object? _ParametricCurve_transform(
        Object receiver,
        Map<String, Object?> values,
      ) {
        return (receiver as api.ParametricCurve<_Owner0>).transform(
          values["t"] as double,
        );
      }

      Object? _ParametricCurve_super_transform(
        Object receiver,
        Map<String, Object?> values,
      ) {
        return (receiver as _ParametricCurveProxy<_Owner0>)
            ._flaxSuper_transform(values["t"] as double);
      }

      Object? _ParametricCurve_transformInternal(
        Object receiver,
        Map<String, Object?> values,
      ) {
        return (receiver as api.ParametricCurve<_Owner0>).transformInternal(
          values["t"] as double,
        );
      }

      Object? _ParametricCurve_super_transformInternal(
        Object receiver,
        Map<String, Object?> values,
      ) {
        return (receiver as _ParametricCurveProxy<_Owner0>)
            ._flaxSuper_transformInternal(values["t"] as double);
      }

      Object? _ParametricCurve_toString(
        Object receiver,
        Map<String, Object?> values,
      ) {
        return (receiver as api.ParametricCurve<_Owner0>).toString();
      }

      // ignore: unused_element
      Object _createParametricCurve(String ctor, Map<String, Object?> values) {
        switch (ctor) {
          case "@implementation":
            return _ParametricCurveProxy<_Owner0>(
              values['@peer'] as FlaxProxyPeer,
            );
          default:
            throw ArgumentError("Unknown constructor");
        }
      }

      return FlaxDartClass(
        api.ParametricCurve<_Owner0>,
        FlaxObjectBinding(
          id,
          [],
          {
            "transform": FlaxInstanceMethod.plain(
              _flaxBinding116,
              types.ref<_Owner0>(),
              _ParametricCurve_transform,
            ),
            "transformInternal": FlaxInstanceMethod.plain(
              _flaxBinding116,
              types.ref<_Owner0>(),
              _ParametricCurve_transformInternal,
            ),
            "toString": FlaxInstanceMethod.plain(
              _flaxBinding96,
              flaxStringType,
              _ParametricCurve_toString,
            ),
            "@super:transform": FlaxInstanceMethod.plain(
              _flaxBinding116,
              types.ref<_Owner0>(),
              _ParametricCurve_super_transform,
            ),
            "@super:transformInternal": FlaxInstanceMethod.plain(
              _flaxBinding116,
              types.ref<_Owner0>(),
              _ParametricCurve_super_transformInternal,
            ),
            "@super:toString": _flaxBinding702,
          },
          constructors: {"@implementation": _flaxBinding96},
          create: _createParametricCurve,
          matches: _isParametricCurve,
          setters: [],
          supertypes: [
            "flax.core/sdk_animation#type:ParametricCurve",
            ...["dart:core::Object"],
          ],
          listenerPairs: {},
          disposeMethod: null,
          proxy: FlaxProxyBinding([
            FlaxProxyMember(
              "transform",
              0,
              FlaxCallbackBinding.signature(
                [FlaxCallbackParameter.plain("t", flaxDoubleType)],
                types.ref<_Owner0>(withinCallback: true),
                id:
                    types.key<_Owner0 Function(double t)>() +
                    ":callback:<>(p:r:t:double:)->parameter:",
              ),
              hasSuper: true,
            ),
            FlaxProxyMember(
              "transformInternal",
              0,
              FlaxCallbackBinding.signature(
                [FlaxCallbackParameter.plain("t", flaxDoubleType)],
                types.ref<_Owner0>(withinCallback: true),
                id:
                    types.key<_Owner0 Function(double t)>() +
                    ":callback:<>(p:r:t:double:)->parameter:",
              ),
              hasSuper: true,
            ),
            FlaxProxyMember(
              "toString",
              0,
              FlaxCallbackBinding.signature(
                [],
                flaxStringType,
                id: types.key<String Function()>() + ":callback:<>()->String:",
              ),
              hasSuper: true,
            ),
          ]),
        ),
      );
    };
Function _flaxGeneric_ProxyAnimation_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.ProxyAnimation).drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "child",
            types.ref<api.Animatable<_Method0>>(),
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_ProxyAnimation_super_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as _ProxyAnimationProxy)._flaxSuper_drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "child",
            types.ref<api.Animatable<_Method0>>(),
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_ReverseAnimation_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.ReverseAnimation).drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "child",
            types.ref<api.Animatable<_Method0>>(),
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_ReverseAnimation_super_drive<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as _ReverseAnimationProxy)._flaxSuper_drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Type _flaxType_ReverseTween<_Owner0 extends Object?>() =>
    api.ReverseTween<_Owner0>;
Function _flaxClass_ReverseTween<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isReverseTween(Object value) => value is api.ReverseTween<_Owner0>;
  // ignore: unused_element
  Object? _ReverseTween_begin(Object value) =>
      (value as api.ReverseTween<_Owner0>).begin;
  // ignore: unused_element
  Object? _ReverseTween_end(Object value) =>
      (value as api.ReverseTween<_Owner0>).end;
  // ignore: unused_element
  Object? _ReverseTween_parent(Object value) =>
      (value as api.ReverseTween<_Owner0>).parent;
  void _ReverseTween_set_begin(Object value, Object? input) {
    (value as api.ReverseTween<_Owner0>).begin = input as _Owner0?;
  }

  void _ReverseTween_set_end(Object value, Object? input) {
    (value as api.ReverseTween<_Owner0>).end = input as _Owner0?;
  }

  Object? _ReverseTween_super_get_parent(
    Object value,
    Map<String, Object?> values,
  ) => (value as _ReverseTweenProxy<_Owner0>)._flaxSuperGet_parent;
  Object? _ReverseTween_super_get_begin(
    Object value,
    Map<String, Object?> values,
  ) => (value as _ReverseTweenProxy<_Owner0>)._flaxSuperGet_begin;
  Object? _ReverseTween_super_get_end(
    Object value,
    Map<String, Object?> values,
  ) => (value as _ReverseTweenProxy<_Owner0>)._flaxSuperGet_end;
  Object? _ReverseTween_super_set_begin(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _ReverseTweenProxy<_Owner0>)._flaxSuperSet_begin(
      values['value'] as _Owner0?,
    );
    return null;
  }

  Object? _ReverseTween_super_set_end(
    Object value,
    Map<String, Object?> values,
  ) {
    (value as _ReverseTweenProxy<_Owner0>)._flaxSuperSet_end(
      values['value'] as _Owner0?,
    );
    return null;
  }

  Object? _ReverseTween_lerp(Object receiver, Map<String, Object?> values) {
    return (receiver as api.ReverseTween<_Owner0>).lerp(values["t"] as double);
  }

  Object? _ReverseTween_super_lerp(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ReverseTweenProxy<_Owner0>)._flaxSuper_lerp(
      values["t"] as double,
    );
  }

  Object? _ReverseTween_transform(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.ReverseTween<_Owner0>).transform(
      values["t"] as double,
    );
  }

  Object? _ReverseTween_super_transform(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ReverseTweenProxy<_Owner0>)._flaxSuper_transform(
      values["t"] as double,
    );
  }

  Object? _ReverseTween_toString(Object receiver, Map<String, Object?> values) {
    return (receiver as api.ReverseTween<_Owner0>).toString();
  }

  Object? _ReverseTween_evaluate(Object receiver, Map<String, Object?> values) {
    return (receiver as api.ReverseTween<_Owner0>).evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _ReverseTween_super_evaluate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ReverseTweenProxy<_Owner0>)._flaxSuper_evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _ReverseTween_animate(Object receiver, Map<String, Object?> values) {
    return (receiver as api.ReverseTween<_Owner0>).animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _ReverseTween_super_animate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ReverseTweenProxy<_Owner0>)._flaxSuper_animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _ReverseTween_chain(Object receiver, Map<String, Object?> values) {
    return (receiver as api.ReverseTween<_Owner0>).chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  Object? _ReverseTween_super_chain(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _ReverseTweenProxy<_Owner0>)._flaxSuper_chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  // ignore: unused_element
  Object _createReverseTween(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "":
        return api.ReverseTween<_Owner0>(
          values["parent"] as api.Tween<_Owner0>,
        );
      case "@implementation":
        return _ReverseTweenProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          values["parent"] as api.Tween<_Owner0>,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  return FlaxDartClass(
    api.ReverseTween<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain("begin", types.ref<_Owner0?>(), _ReverseTween_begin),
        FlaxGetter.plain("end", types.ref<_Owner0?>(), _ReverseTween_end),
        FlaxGetter.plain(
          "parent",
          types.ref<api.Tween<_Owner0>>(),
          _ReverseTween_parent,
        ),
      ],
      {
        "lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _ReverseTween_lerp,
        ),
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _ReverseTween_transform,
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _ReverseTween_toString,
        ),
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _ReverseTween_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _ReverseTween_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _ReverseTween_chain,
        ),
        "@super:lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _ReverseTween_super_lerp,
        ),
        "@super:transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _ReverseTween_super_transform,
        ),
        "@super:toString": _flaxBinding702,
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _ReverseTween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _ReverseTween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _ReverseTween_super_chain,
        ),
        "@super:get:parent": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<api.Tween<_Owner0>>(),
          _ReverseTween_super_get_parent,
        ),
        "@super:get:begin": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<_Owner0?>(),
          _ReverseTween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<_Owner0?>(),
          _ReverseTween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", types.ref<_Owner0?>())],
          flaxVoidType,
          _ReverseTween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", types.ref<_Owner0?>())],
          flaxVoidType,
          _ReverseTween_super_set_end,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter.required("parent", types.ref<api.Tween<_Owner0>>()),
        ],
        "@implementation": <FlaxParameter>[
          FlaxParameter.required("parent", types.ref<api.Tween<_Owner0>>()),
        ],
      },
      create: _createReverseTween,
      matches: _isReverseTween,
      setters: [
        FlaxSetter("begin", types.ref<_Owner0?>(), _ReverseTween_set_begin),
        FlaxSetter("end", types.ref<_Owner0?>(), _ReverseTween_set_end),
      ],
      supertypes: [
        "flax.core/sdk_animation#type:ReverseTween",
        ...[
          "flax.core/sdk_animation#type:Tween",
          "flax.core/sdk_animation#type:Animatable",
          "dart:core::Object",
        ],
      ],
      listenerPairs: {},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "lerp",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            types.ref<_Owner0>(withinCallback: true),
            id:
                types.key<_Owner0 Function(double t)>() +
                ":callback:<>(p:r:t:double:)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            types.ref<_Owner0>(withinCallback: true),
            id:
                types.key<_Owner0 Function(double t)>() +
                ":callback:<>(p:r:t:double:)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animation<_Owner0> Function(
                        api.Animation<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            types.ref<api.Animatable<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animatable<_Owner0> Function(
                        api.Animatable<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "parent",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<api.Tween<_Owner0>>(withinCallback: true),
            id: types.key<api.Tween<_Owner0> Function()>() + ":callback:<>()->object:flax.core/sdk_animation#type:Tween<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "begin",
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
          "end",
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
          "begin",
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
          "end",
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
      ]),
    ),
  );
};
Function _flaxGeneric_TrainHoppingAnimation_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api.TrainHoppingAnimation).drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "child",
            types.ref<api.Animatable<_Method0>>(),
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_TrainHoppingAnimation_super_drive<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as _TrainHoppingAnimationProxy)._flaxSuper_drive<_Method0>(
      values["child"] as api.Animatable<_Method0>,
    );
  }

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("child", types.ref<api.Animatable<_Method0>>()),
    ],
    types.ref<api.Animation<_Method0>>(),
    invoke,
  );
};
Type _flaxType_Tween<_Owner0 extends Object?>() => api.Tween<_Owner0>;
Function _flaxClass_Tween<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isTween(Object value) => value is api.Tween<_Owner0>;
  // ignore: unused_element
  Object? _Tween_begin(Object value) => (value as api.Tween<_Owner0>).begin;
  // ignore: unused_element
  Object? _Tween_end(Object value) => (value as api.Tween<_Owner0>).end;
  void _Tween_set_begin(Object value, Object? input) {
    (value as api.Tween<_Owner0>).begin = input as _Owner0?;
  }

  void _Tween_set_end(Object value, Object? input) {
    (value as api.Tween<_Owner0>).end = input as _Owner0?;
  }

  Object? _Tween_super_get_begin(Object value, Map<String, Object?> values) =>
      (value as _TweenProxy<_Owner0>)._flaxSuperGet_begin;
  Object? _Tween_super_get_end(Object value, Map<String, Object?> values) =>
      (value as _TweenProxy<_Owner0>)._flaxSuperGet_end;
  Object? _Tween_super_set_begin(Object value, Map<String, Object?> values) {
    (value as _TweenProxy<_Owner0>)._flaxSuperSet_begin(
      values['value'] as _Owner0?,
    );
    return null;
  }

  Object? _Tween_super_set_end(Object value, Map<String, Object?> values) {
    (value as _TweenProxy<_Owner0>)._flaxSuperSet_end(
      values['value'] as _Owner0?,
    );
    return null;
  }

  Object? _Tween_transform(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Tween<_Owner0>).transform(values["t"] as double);
  }

  Object? _Tween_super_transform(Object receiver, Map<String, Object?> values) {
    return (receiver as _TweenProxy<_Owner0>)._flaxSuper_transform(
      values["t"] as double,
    );
  }

  Object? _Tween_evaluate(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Tween<_Owner0>).evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _Tween_super_evaluate(Object receiver, Map<String, Object?> values) {
    return (receiver as _TweenProxy<_Owner0>)._flaxSuper_evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _Tween_animate(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Tween<_Owner0>).animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _Tween_super_animate(Object receiver, Map<String, Object?> values) {
    return (receiver as _TweenProxy<_Owner0>)._flaxSuper_animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _Tween_chain(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Tween<_Owner0>).chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  Object? _Tween_super_chain(Object receiver, Map<String, Object?> values) {
    return (receiver as _TweenProxy<_Owner0>)._flaxSuper_chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  Object? _Tween_lerp(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Tween<_Owner0>).lerp(values["t"] as double);
  }

  Object? _Tween_super_lerp(Object receiver, Map<String, Object?> values) {
    return (receiver as _TweenProxy<_Owner0>)._flaxSuper_lerp(
      values["t"] as double,
    );
  }

  Object? _Tween_toString(Object receiver, Map<String, Object?> values) {
    return (receiver as api.Tween<_Owner0>).toString();
  }

  // ignore: unused_element
  Object _createTween(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "":
        return api.Tween<_Owner0>(
          begin: values["begin"] as _Owner0?,
          end: values["end"] as _Owner0?,
        );
      case "@implementation":
        return _TweenProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          begin: values["begin"] as _Owner0?,
          end: values["end"] as _Owner0?,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  return FlaxDartClass(
    api.Tween<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain("begin", types.ref<_Owner0?>(), _Tween_begin),
        FlaxGetter.plain("end", types.ref<_Owner0?>(), _Tween_end),
      ],
      {
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _Tween_transform,
        ),
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _Tween_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _Tween_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _Tween_chain,
        ),
        "lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _Tween_lerp,
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _Tween_toString,
        ),
        "@super:transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _Tween_super_transform,
        ),
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _Tween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _Tween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _Tween_super_chain,
        ),
        "@super:lerp": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _Tween_super_lerp,
        ),
        "@super:toString": _flaxBinding702,
        "@super:get:begin": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<_Owner0?>(),
          _Tween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<_Owner0?>(),
          _Tween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", types.ref<_Owner0?>())],
          flaxVoidType,
          _Tween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod.plain(
          [FlaxParameter.required("value", types.ref<_Owner0?>())],
          flaxVoidType,
          _Tween_super_set_end,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter("begin", types.ref<_Owner0?>(), required: false),
          FlaxParameter("end", types.ref<_Owner0?>(), required: false),
        ],
        "@implementation": <FlaxParameter>[
          FlaxParameter("begin", types.ref<_Owner0?>(), required: false),
          FlaxParameter("end", types.ref<_Owner0?>(), required: false),
        ],
      },
      create: _createTween,
      matches: _isTween,
      setters: [
        FlaxSetter("begin", types.ref<_Owner0?>(), _Tween_set_begin),
        FlaxSetter("end", types.ref<_Owner0?>(), _Tween_set_end),
      ],
      supertypes: [
        "flax.core/sdk_animation#type:Tween",
        ...["flax.core/sdk_animation#type:Animatable", "dart:core::Object"],
      ],
      listenerPairs: {},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            types.ref<_Owner0>(withinCallback: true),
            id:
                types.key<_Owner0 Function(double t)>() +
                ":callback:<>(p:r:t:double:)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animation<_Owner0> Function(
                        api.Animation<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            types.ref<api.Animatable<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animatable<_Owner0> Function(
                        api.Animatable<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "lerp",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            types.ref<_Owner0>(withinCallback: true),
            id:
                types.key<_Owner0 Function(double t)>() +
                ":callback:<>(p:r:t:double:)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "begin",
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
          "end",
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
          "begin",
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
          "end",
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
      ]),
    ),
  );
};
Type _flaxType_TweenSequence<_Owner0 extends Object?>() =>
    api.TweenSequence<_Owner0>;
Function _flaxClass_TweenSequence<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isTweenSequence(Object value) => value is api.TweenSequence<_Owner0>;
  Object? _TweenSequence_transform(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.TweenSequence<_Owner0>).transform(
      values["t"] as double,
    );
  }

  Object? _TweenSequence_super_transform(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _TweenSequenceProxy<_Owner0>)._flaxSuper_transform(
      values["t"] as double,
    );
  }

  Object? _TweenSequence_evaluate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.TweenSequence<_Owner0>).evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _TweenSequence_super_evaluate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _TweenSequenceProxy<_Owner0>)._flaxSuper_evaluate(
      values["animation"] as api.Animation<double>,
    );
  }

  Object? _TweenSequence_animate(Object receiver, Map<String, Object?> values) {
    return (receiver as api.TweenSequence<_Owner0>).animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _TweenSequence_super_animate(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _TweenSequenceProxy<_Owner0>)._flaxSuper_animate(
      values["parent"] as api.Animation<double>,
    );
  }

  Object? _TweenSequence_chain(Object receiver, Map<String, Object?> values) {
    return (receiver as api.TweenSequence<_Owner0>).chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  Object? _TweenSequence_super_chain(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as _TweenSequenceProxy<_Owner0>)._flaxSuper_chain(
      values["parent"] as api.Animatable<double>,
    );
  }

  Object? _TweenSequence_toString(
    Object receiver,
    Map<String, Object?> values,
  ) {
    return (receiver as api.TweenSequence<_Owner0>).toString();
  }

  // ignore: unused_element
  Object _createTweenSequence(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "":
        return api.TweenSequence<_Owner0>(
          values["items"] as List<api.TweenSequenceItem<_Owner0>>,
        );
      case "@implementation":
        return _TweenSequenceProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          values["items"] as List<api.TweenSequenceItem<_Owner0>>,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  return FlaxDartClass(
    api.TweenSequence<_Owner0>,
    FlaxObjectBinding(
      id,
      [],
      {
        "transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _TweenSequence_transform,
        ),
        "evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _TweenSequence_evaluate,
        ),
        "animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _TweenSequence_animate,
        ),
        "chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _TweenSequence_chain,
        ),
        "toString": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxStringType,
          _TweenSequence_toString,
        ),
        "@super:transform": FlaxInstanceMethod.plain(
          _flaxBinding116,
          types.ref<_Owner0>(),
          _TweenSequence_super_transform,
        ),
        "@super:evaluate": FlaxInstanceMethod.plain(
          _flaxBinding117,
          types.ref<_Owner0>(),
          _TweenSequence_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod.plain(
          _flaxBinding118,
          types.ref<api.Animation<_Owner0>>(),
          _TweenSequence_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod.plain(
          _flaxBinding119,
          types.ref<api.Animatable<_Owner0>>(),
          _TweenSequence_super_chain,
        ),
        "@super:toString": _flaxBinding702,
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter.required(
            "items",
            types.ref<List<api.TweenSequenceItem<_Owner0>>>(),
          ),
        ],
        "@implementation": <FlaxParameter>[
          FlaxParameter.required(
            "items",
            types.ref<List<api.TweenSequenceItem<_Owner0>>>(),
          ),
        ],
      },
      create: _createTweenSequence,
      matches: _isTweenSequence,
      setters: [],
      supertypes: [
        "flax.core/sdk_animation#type:TweenSequence",
        ...["flax.core/sdk_animation#type:Animatable", "dart:core::Object"],
      ],
      listenerPairs: {},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("t", flaxDoubleType)],
            types.ref<_Owner0>(withinCallback: true),
            id:
                types.key<_Owner0 Function(double t)>() +
                ":callback:<>(p:r:t:double:)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
            types.ref<api.Animation<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animation<_Owner0> Function(
                        api.Animation<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
            types.ref<api.Animatable<_Owner0>>(withinCallback: true),
            id:
                types
                    .key<
                      api.Animatable<_Owner0> Function(
                        api.Animatable<double> parent,
                      )
                    >() +
                ":callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            flaxStringType,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
  );
};
Type _flaxType_TweenSequenceItem<_Owner0 extends Object?>() =>
    api.TweenSequenceItem<_Owner0>;
Function _flaxClass_TweenSequenceItem<
  _Owner0 extends Object?
>() => (FlaxDartTypes types, String id) {
  // ignore: unused_element
  bool _isTweenSequenceItem(Object value) =>
      value is api.TweenSequenceItem<_Owner0>;
  // ignore: unused_element
  Object? _TweenSequenceItem_tween(Object value) =>
      (value as api.TweenSequenceItem<_Owner0>).tween;
  // ignore: unused_element
  Object? _TweenSequenceItem_weight(Object value) =>
      (value as api.TweenSequenceItem<_Owner0>).weight;
  Object? _TweenSequenceItem_super_get_tween(
    Object value,
    Map<String, Object?> values,
  ) => (value as _TweenSequenceItemProxy<_Owner0>)._flaxSuperGet_tween;
  Object? _TweenSequenceItem_super_get_weight(
    Object value,
    Map<String, Object?> values,
  ) => (value as _TweenSequenceItemProxy<_Owner0>)._flaxSuperGet_weight;
  // ignore: unused_element
  Object _createTweenSequenceItem(String ctor, Map<String, Object?> values) {
    switch (ctor) {
      case "":
        return api.TweenSequenceItem<_Owner0>(
          tween: values["tween"] as api.Animatable<_Owner0>,
          weight: values["weight"] as double,
        );
      case "@implementation":
        return _TweenSequenceItemProxy<_Owner0>(
          values['@peer'] as FlaxProxyPeer,
          tween: values["tween"] as api.Animatable<_Owner0>,
          weight: values["weight"] as double,
        );
      default:
        throw ArgumentError("Unknown constructor");
    }
  }

  return FlaxDartClass(
    api.TweenSequenceItem<_Owner0>,
    FlaxObjectBinding(
      id,
      [
        FlaxGetter.plain(
          "tween",
          types.ref<api.Animatable<_Owner0>>(),
          _TweenSequenceItem_tween,
        ),
        FlaxGetter.plain("weight", flaxDoubleType, _TweenSequenceItem_weight),
      ],
      {
        "@super:get:tween": FlaxInstanceMethod.plain(
          _flaxBinding96,
          types.ref<api.Animatable<_Owner0>>(),
          _TweenSequenceItem_super_get_tween,
        ),
        "@super:get:weight": FlaxInstanceMethod.plain(
          _flaxBinding96,
          flaxDoubleType,
          _TweenSequenceItem_super_get_weight,
        ),
      },
      constructors: {
        "": <FlaxParameter>[
          FlaxParameter.required("tween", types.ref<api.Animatable<_Owner0>>()),
          FlaxParameter.required("weight", flaxDoubleType),
        ],
        "@implementation": <FlaxParameter>[
          FlaxParameter.required("tween", types.ref<api.Animatable<_Owner0>>()),
          FlaxParameter.required("weight", flaxDoubleType),
        ],
      },
      create: _createTweenSequenceItem,
      matches: _isTweenSequenceItem,
      setters: [],
      supertypes: [
        "flax.core/sdk_animation#type:TweenSequenceItem",
        ...["dart:core::Object"],
      ],
      listenerPairs: {},
      disposeMethod: null,
      proxy: FlaxProxyBinding([
        FlaxProxyMember(
          "tween",
          1,
          FlaxCallbackBinding.signature(
            [],
            types.ref<api.Animatable<_Owner0>>(withinCallback: true),
            id: types.key<api.Animatable<_Owner0> Function()>() + ":callback:<>()->object:flax.core/sdk_animation#type:Animatable<parameter:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "weight",
          1,
          FlaxCallbackBinding.signature(
            [],
            flaxDoubleType,
            id: types.key<double Function()>() + ":callback:<>()->double:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
  );
};
const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[1,1,[],[]]]", _flaxShape1),
];
Function _flaxShape0<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
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
Function _flaxShape1<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape1 Function(_Shape0 status)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter.plain(
                "status",
                types.ref<_Shape0>(withinCallback: true),
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            FlaxCallbackAdapters.wrap1<_Shape0, _Shape1>,
            id:
                types.key<_Shape1 Function(_Shape0 status)>() +
                ":callback:<>(p:r:status:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke1<_Shape0, _Shape1>,
            matches: FlaxCallbackAdapters.matches1<_Shape0, _Shape1>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
FlaxCallbackBinding _callback0Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback0(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback0Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback1Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback1(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback1Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback2Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback2(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback2Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback3Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback3(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback3Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback4Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback4(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback4Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback4Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback5Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback5(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback5Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback5Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback6Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback6(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback6Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback6Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback7Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback7(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback7Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback7Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback8Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback8(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback8Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback8Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback9Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback9(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback9Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback9Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

FlaxCallbackBinding _callback10Types<_Callback0 extends Object?>(
  FlaxDartTypes types,
) {
  return FlaxCallbackBinding(
    [
      FlaxCallbackParameter.plain(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
      ),
    ],
    types.ref<api.Animation<_Callback0>>(withinCallback: true),
    FlaxCallbackAdapters
        .wrap1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    id:
        types
            .key<
              api.Animation<_Callback0> Function(
                api.Animatable<_Callback0> child,
              )
            >() +
        ":callback:<>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
    invoke: FlaxCallbackAdapters
        .invoke1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
    matches: FlaxCallbackAdapters
        .matches1<api.Animatable<_Callback0>, api.Animation<_Callback0>>,
  );
}

Object _callback10(FlaxCallback _flaxBridgeCallback) =>
    <U extends Object?>(api.Animatable<U> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      return _genericCallbackResult<api.Animation<U>>(
        _flaxBridgeCallback.call(positional, named),
      );
    };
bool _callback10Matches(Object value) =>
    value
        is api.Animation<U> Function<U extends Object?>(
          api.Animatable<U> child,
        );
Object? _callback10Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Animation<U> Function<U extends Object?>(
        api.Animatable<U> child,
      ))<Object?>(positional[0] as api.Animatable<Object?>);
}

Object _collection2Create() => <api.Curve2DSample>[];
Object _collection2Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Curve2DSample>();
bool _collection2Matches(Object value) => value is Iterable<api.Curve2DSample>;
Object _collection3Create() => <api.TweenSequenceItem<double>>[];
bool _collection3Matches(Object value) =>
    value is List<api.TweenSequenceItem<double>>;
Object _collection4Create() => <api.TweenSequenceItem<double>>[];
Object _collection4Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.TweenSequenceItem<double>>();
bool _collection4Matches(Object value) =>
    value is Iterable<api.TweenSequenceItem<double>>;
Object _collection5Create() => <api.TweenSequenceItem<Object?>>[];
bool _collection5Matches(Object value) =>
    value is List<api.TweenSequenceItem<Object?>>;
Object _collection6Create() => <api.TweenSequenceItem<Object?>>[];
Object _collection6Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.TweenSequenceItem<Object?>>();
bool _collection6Matches(Object value) =>
    value is Iterable<api.TweenSequenceItem<Object?>>;

T _genericCallbackResult<T>(Object? value) {
  // Test assignability to cover both nullable and non-nullable numeric T.
  // Broad bounds keep their decoded representation; only the Dart use site
  // selects a more specific numeric representation.
  if (value is num && value is! T) {
    if (0 is T && 0.0 is! T) {
      if (!value.isFinite ||
          value.abs() > 9007199254740991 ||
          value != value.truncateToDouble()) {
        throw ArgumentError('Expected a safe integer');
      }
      return value.toInt() as T;
    }
    if (0.0 is T && 0 is! T) return value.toDouble() as T;
  }
  return value as T;
}

const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_status =
    _AnimationController_status;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_value =
    _AnimationController_value;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_isDismissed =
    _AnimationController_isDismissed;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_isCompleted =
    _AnimationController_isCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_isAnimating =
    _AnimationController_isAnimating;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_isForwardOrCompleted =
    _AnimationController_isForwardOrCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_lowerBound =
    _AnimationController_lowerBound;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_upperBound =
    _AnimationController_upperBound;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_debugLabel =
    _AnimationController_debugLabel;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_animationBehavior =
    _AnimationController_animationBehavior;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_view =
    _AnimationController_view;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_duration =
    _AnimationController_duration;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_reverseDuration =
    _AnimationController_reverseDuration;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_velocity =
    _AnimationController_velocity;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_get_3a_lastElapsedDuration =
    _AnimationController_lastElapsedDuration;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_call_3a_toString =
    _AnimationController_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationController_7c_call_3a_toStringDetails =
    _AnimationController_toStringDetails;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationLazyListenerMixin_7c_get_3a_isListening =
    _AnimationLazyListenerMixin_isListening;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_get_3a_first =
    _AnimationMean_first;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_get_3a_next =
    _AnimationMean_next;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_get_3a_status =
    _AnimationMean_status;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_get_3a_value =
    _AnimationMean_value;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_get_3a_isDismissed =
    _AnimationMean_isDismissed;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_get_3a_isCompleted =
    _AnimationMean_isCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_get_3a_isAnimating =
    _AnimationMean_isAnimating;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_get_3a_isForwardOrCompleted =
    _AnimationMean_isForwardOrCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_get_3a_isListening =
    _AnimationLazyListenerMixin_isListening;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_call_3a_toString =
    _AnimationMean_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationMean_7c_call_3a_toStringDetails =
    _AnimationMean_toStringDetails;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationStyle_7c_get_3a_curve =
    _AnimationStyle_curve;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationStyle_7c_get_3a_duration =
    _AnimationStyle_duration;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationStyle_7c_get_3a_reverseCurve =
    _AnimationStyle_reverseCurve;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationStyle_7c_get_3a_reverseDuration =
    _AnimationStyle_reverseDuration;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_AnimationStyle_7c_call_3a_toStringShort =
    _AnimationStyle_toStringShort;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CatmullRomCurve_7c_get_3a_flipped =
    _CatmullRomCurve_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CatmullRomCurve_7c_get_3a_controlPoints =
    _CatmullRomCurve_controlPoints;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CatmullRomCurve_7c_get_3a_tension =
    _CatmullRomCurve_tension;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CatmullRomCurve_7c_call_3a_toString =
    _CatmullRomCurve_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CatmullRomSpline_7c_get_3a_samplingSeed =
    _Curve2D_samplingSeed;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CatmullRomSpline_7c_call_3a_toString =
    _Curve2D_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ColorTween_7c_get_3a_begin =
    _ColorTween_begin;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ColorTween_7c_get_3a_end =
    _ColorTween_end;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ColorTween_7c_call_3a_toString =
    _ColorTween_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Curve2D_7c_get_3a_samplingSeed =
    _Curve2D_samplingSeed;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Curve2D_7c_call_3a_toString =
    _Curve2D_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Curve2DSample_7c_get_3a_t =
    _Curve2DSample_t;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Curve2DSample_7c_get_3a_value =
    _Curve2DSample_value;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Curve2DSample_7c_call_3a_toString =
    _Curve2DSample_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurveTween_7c_get_3a_curve =
    _CurveTween_curve;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurveTween_7c_call_3a_toString =
    _CurveTween_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_status =
    _CurvedAnimation_status;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_value =
    _CurvedAnimation_value;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_isDismissed =
    _CurvedAnimation_isDismissed;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_isCompleted =
    _CurvedAnimation_isCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_isAnimating =
    _CurvedAnimation_isAnimating;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_isForwardOrCompleted =
    _CurvedAnimation_isForwardOrCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_parent =
    _CurvedAnimation_parent;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_curve =
    _CurvedAnimation_curve;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_reverseCurve =
    _CurvedAnimation_reverseCurve;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_get_3a_isDisposed =
    _CurvedAnimation_isDisposed;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_call_3a_toString =
    _CurvedAnimation_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_CurvedAnimation_7c_call_3a_toStringDetails =
    _CurvedAnimation_toStringDetails;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ElasticInCurve_7c_get_3a_flipped =
    _ElasticInCurve_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ElasticInCurve_7c_get_3a_period =
    _ElasticInCurve_period;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ElasticInCurve_7c_call_3a_toString =
    _ElasticInCurve_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ElasticInOutCurve_7c_get_3a_flipped =
    _ElasticInOutCurve_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ElasticInOutCurve_7c_get_3a_period =
    _ElasticInOutCurve_period;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ElasticInOutCurve_7c_call_3a_toString =
    _ElasticInOutCurve_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ElasticOutCurve_7c_get_3a_flipped =
    _ElasticOutCurve_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ElasticOutCurve_7c_get_3a_period =
    _ElasticOutCurve_period;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ElasticOutCurve_7c_call_3a_toString =
    _ElasticOutCurve_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_FlippedCurve_7c_get_3a_flipped =
    _FlippedCurve_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_FlippedCurve_7c_get_3a_curve =
    _FlippedCurve_curve;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_FlippedCurve_7c_call_3a_toString =
    _FlippedCurve_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_FlippedTweenSequence_7c_call_3a_toString =
    _FlippedTweenSequence_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_IntTween_7c_get_3a_begin =
    _IntTween_begin;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_IntTween_7c_get_3a_end =
    _IntTween_end;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_IntTween_7c_call_3a_toString =
    _IntTween_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Interval_7c_get_3a_flipped =
    _Interval_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Interval_7c_get_3a_begin =
    _Interval_begin;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Interval_7c_get_3a_end =
    _Interval_end;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Interval_7c_get_3a_curve =
    _Interval_curve;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Interval_7c_call_3a_toString =
    _Interval_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_get_3a_status =
    _ProxyAnimation_status;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_get_3a_value =
    _ProxyAnimation_value;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_get_3a_isDismissed =
    _ProxyAnimation_isDismissed;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_get_3a_isCompleted =
    _ProxyAnimation_isCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_get_3a_isAnimating =
    _ProxyAnimation_isAnimating;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_get_3a_isForwardOrCompleted =
    _ProxyAnimation_isForwardOrCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_get_3a_isListening =
    _AnimationLazyListenerMixin_isListening;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_get_3a_parent =
    _ProxyAnimation_parent;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_call_3a_toString =
    _ProxyAnimation_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ProxyAnimation_7c_call_3a_toStringDetails =
    _ProxyAnimation_toStringDetails;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_RectTween_7c_get_3a_begin =
    _RectTween_begin;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_RectTween_7c_get_3a_end =
    _RectTween_end;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_RectTween_7c_call_3a_toString =
    _RectTween_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_get_3a_status =
    _ReverseAnimation_status;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_get_3a_value =
    _ReverseAnimation_value;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_get_3a_isDismissed =
    _ReverseAnimation_isDismissed;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_get_3a_isCompleted =
    _ReverseAnimation_isCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_get_3a_isAnimating =
    _ReverseAnimation_isAnimating;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_get_3a_isForwardOrCompleted =
    _ReverseAnimation_isForwardOrCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_get_3a_isListening =
    _AnimationLazyListenerMixin_isListening;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_get_3a_parent =
    _ReverseAnimation_parent;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_call_3a_toString =
    _ReverseAnimation_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ReverseAnimation_7c_call_3a_toStringDetails =
    _ReverseAnimation_toStringDetails;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_SawTooth_7c_get_3a_flipped =
    _SawTooth_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_SawTooth_7c_get_3a_count =
    _SawTooth_count;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_SawTooth_7c_call_3a_toString =
    _SawTooth_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_SizeTween_7c_get_3a_begin =
    _SizeTween_begin;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_SizeTween_7c_get_3a_end =
    _SizeTween_end;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_SizeTween_7c_call_3a_toString =
    _SizeTween_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Split_7c_get_3a_flipped =
    _Split_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Split_7c_get_3a_split =
    _Split_split;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Split_7c_get_3a_beginCurve =
    _Split_beginCurve;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Split_7c_get_3a_endCurve =
    _Split_endCurve;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Split_7c_call_3a_toString =
    _Split_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_StepTween_7c_get_3a_begin =
    _StepTween_begin;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_StepTween_7c_get_3a_end =
    _StepTween_end;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_StepTween_7c_call_3a_toString =
    _StepTween_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ThreePointCubic_7c_get_3a_flipped =
    _ThreePointCubic_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ThreePointCubic_7c_get_3a_a1 =
    _ThreePointCubic_a1;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ThreePointCubic_7c_get_3a_b1 =
    _ThreePointCubic_b1;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ThreePointCubic_7c_get_3a_midpoint =
    _ThreePointCubic_midpoint;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ThreePointCubic_7c_get_3a_a2 =
    _ThreePointCubic_a2;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ThreePointCubic_7c_get_3a_b2 =
    _ThreePointCubic_b2;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_ThreePointCubic_7c_call_3a_toString =
    _ThreePointCubic_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Threshold_7c_get_3a_flipped =
    _Threshold_flipped;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Threshold_7c_get_3a_threshold =
    _Threshold_threshold;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_Threshold_7c_call_3a_toString =
    _Threshold_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_get_3a_status =
    _TrainHoppingAnimation_status;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_get_3a_value =
    _TrainHoppingAnimation_value;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_get_3a_isDismissed =
    _TrainHoppingAnimation_isDismissed;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_get_3a_isCompleted =
    _TrainHoppingAnimation_isCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_get_3a_isAnimating =
    _TrainHoppingAnimation_isAnimating;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_get_3a_isForwardOrCompleted =
    _TrainHoppingAnimation_isForwardOrCompleted;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_get_3a_currentTrain =
    _TrainHoppingAnimation_currentTrain;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_get_3a_onSwitchedTrain =
    _TrainHoppingAnimation_onSwitchedTrain;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_call_3a_toString =
    _TrainHoppingAnimation_toString;
const flaxMemberflax_2e_core_2f_sdk_5f_animation_23_type_3a_TrainHoppingAnimation_7c_call_3a_toStringDetails =
    _TrainHoppingAnimation_toStringDetails;
const _flaxBinding0 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("listener", flaxVoidCallbackType)],
  flaxVoidType,
  id: "callback:<>(p:r:listener:callback:<>()->void:)->void:",
);
const _flaxBinding1 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_animation#type:AnimationStatus",
);
const _flaxBinding2 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
  id: "callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
);
const _flaxBinding3 = FlaxTypeRef("callback", callback: _flaxBinding2);
const _flaxBinding4 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("listener", _flaxBinding3)],
  flaxVoidType,
  id: "callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
);
const _flaxBinding5 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1,
  id: "callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
);
const _flaxBinding6 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("status", _flaxBinding1)],
  flaxVoidType,
  id: "callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
);
const _flaxBinding7 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TickerProvider",
);
const _flaxBinding8 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("vsync", _flaxBinding7)],
  flaxVoidType,
  id: "callback:<>(p:r:vsync:object:flax.core/flutter#type:TickerProvider)->void:",
);
const _flaxBinding9 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_physics#type:Simulation",
);
const _flaxBinding10 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("simulation", _flaxBinding9)],
  flaxTickerFutureType,
  id: "callback:<>(p:r:simulation:object:flax.core/sdk_physics#type:Simulation)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding11 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_animation#type:AnimationBehavior",
);
const _flaxBinding12 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding11,
  id: "callback:<>()->enum:flax.core/sdk_animation#type:AnimationBehavior",
);
const _flaxBinding13 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<double>>,
);
const _flaxBinding14 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding13,
  id: "callback:<>()->object:flax.core/sdk_animation#type:Animation<double:>",
);
const _flaxBinding15 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
  nullable: true,
);
const _flaxBinding16 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding15,
  id: "callback:<>()->object?:flax.core/flutter#type:Duration",
);
const _flaxBinding17 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding15)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Duration)->void:",
);
const _flaxBinding18 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxDoubleType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:double:)->void:",
);
const _flaxBinding19 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding20 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("properties", _flaxBinding19)],
  flaxVoidType,
  id: "callback:<>(p:r:properties:object:flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder)->void:",
);
const _flaxBinding21 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationStyle",
  nullable: true,
);
const _flaxBinding22 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationStyle",
);
const _flaxBinding23 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("other", _flaxBinding21)],
  _flaxBinding22,
  id: "callback:<>(p:r:other:object?:flax.core/sdk_animation#type:AnimationStyle)->object:flax.core/sdk_animation#type:AnimationStyle",
);
const _flaxBinding24 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Curve",
  nullable: true,
);
const _flaxBinding25 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding24,
  id: "callback:<>()->object?:flax.core/flutter#type:Curve",
);
const _flaxBinding26 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("t", flaxDoubleType)],
  flaxDoubleType,
  id: "callback:<>(p:r:t:double:)->double:",
);
const _flaxBinding27 = FlaxTypeRef(
  "iterable",
  item: flaxOffsetType,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Offset]",
    _flaxAdapters.flaxAdapter67Create,
    _flaxAdapters.flaxAdapter67Matches,
    restore: _flaxAdapters.flaxAdapter67Restore,
  ),
);
const _flaxBinding28 = FlaxTypeRef(
  "list",
  item: flaxOffsetType,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Offset]",
    _flaxAdapters.flaxAdapter68Create,
    _flaxAdapters.flaxAdapter68Matches,
  ),
  iterable: _flaxBinding27,
);
const _flaxBinding29 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding28,
  id: "callback:<>()->list:[object:flax.core/flutter#type:Offset]",
);
const _flaxBinding30 = FlaxCallbackBinding.signature(
  [],
  flaxCurveType,
  id: "callback:<>()->object:flax.core/flutter#type:Curve",
);
const _flaxBinding31 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("x", flaxDoubleType)],
  flaxDoubleType,
  id: "callback:<>(p:r:x:double:)->double:",
);
const _flaxBinding32 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("t", flaxDoubleType)],
  flaxOffsetType,
  id: "callback:<>(p:r:t:double:)->object:flax.core/flutter#type:Offset",
);
const _flaxBinding33 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
  nullable: true,
);
const _flaxBinding34 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("t", flaxDoubleType)],
  _flaxBinding33,
  id: "callback:<>(p:r:t:double:)->object?:flax.core/flutter#type:Color",
);
const _flaxBinding35 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
  _flaxBinding33,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->object?:flax.core/flutter#type:Color",
);
const _flaxBinding36 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<api1.Color?>>,
);
const _flaxBinding37 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
  _flaxBinding36,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<object?:flax.core/flutter#type:Color>",
);
const _flaxBinding38 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<double>>,
);
const _flaxBinding39 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<api1.Color?>>,
);
const _flaxBinding40 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
  _flaxBinding39,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<object?:flax.core/flutter#type:Color>",
);
const _flaxBinding41 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding33,
  id: "callback:<>()->object?:flax.core/flutter#type:Color",
);
const _flaxBinding42 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding33)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Color)->void:",
);
const _flaxBinding43 = FlaxCallbackBinding.signature(
  [],
  flaxOffsetType,
  id: "callback:<>()->object:flax.core/flutter#type:Offset",
);
const _flaxBinding44 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
  flaxDoubleType,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->double:",
);
const _flaxBinding45 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
  _flaxBinding13,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<double:>",
);
const _flaxBinding46 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
  _flaxBinding38,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<double:>",
);
const _flaxBinding47 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxCurveType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object:flax.core/flutter#type:Curve)->void:",
);
const _flaxBinding48 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding24)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Curve)->void:",
);
const _flaxBinding49 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxBoolType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:bool:)->void:",
);
const _flaxBinding50 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("t", flaxDoubleType)],
  flaxIntType,
  id: "callback:<>(p:r:t:double:)->int:",
);
const _flaxBinding51 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
  flaxIntType,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->int:",
);
const _flaxBinding52 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<int>>,
);
const _flaxBinding53 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
  _flaxBinding52,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<int:>",
);
const _flaxBinding54 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<int>>,
);
const _flaxBinding55 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
  _flaxBinding54,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<int:>",
);
const _flaxBinding56 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableIntType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:int?:)->void:",
);
const _flaxBinding57 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<double>?>,
  nullable: true,
);
const _flaxBinding58 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding57,
  id: "callback:<>()->object?:flax.core/sdk_animation#type:Animation<double:>",
);
const _flaxBinding59 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding57)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_animation#type:Animation<double:>)->void:",
);
const _flaxBinding60 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Rect",
  nullable: true,
);
const _flaxBinding61 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("t", flaxDoubleType)],
  _flaxBinding60,
  id: "callback:<>(p:r:t:double:)->object?:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding62 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
  _flaxBinding60,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->object?:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding63 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<api1.Rect?>>,
);
const _flaxBinding64 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
  _flaxBinding63,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<object?:flax.core/sdk_dart_ui#type:Rect>",
);
const _flaxBinding65 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<api1.Rect?>>,
);
const _flaxBinding66 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
  _flaxBinding65,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<object?:flax.core/sdk_dart_ui#type:Rect>",
);
const _flaxBinding67 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding60,
  id: "callback:<>()->object?:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding68 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding60)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding69 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("t", flaxDoubleType)],
  flaxNullableSizeType,
  id: "callback:<>(p:r:t:double:)->object?:flax.core/flutter#type:Size",
);
const _flaxBinding70 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("animation", _flaxBinding13)],
  flaxNullableSizeType,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->object?:flax.core/flutter#type:Size",
);
const _flaxBinding71 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<api1.Size?>>,
);
const _flaxBinding72 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding13)],
  _flaxBinding71,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<object?:flax.core/flutter#type:Size>",
);
const _flaxBinding73 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<api1.Size?>>,
);
const _flaxBinding74 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("parent", _flaxBinding38)],
  _flaxBinding73,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<object?:flax.core/flutter#type:Size>",
);
const _flaxBinding75 = FlaxCallbackBinding.signature(
  [],
  flaxNullableSizeType,
  id: "callback:<>()->object?:flax.core/flutter#type:Size",
);
const _flaxBinding76 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableSizeType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Size)->void:",
);
const _flaxBinding77 = FlaxCallbackBinding.signature(
  [],
  flaxVoidNullableCallbackType,
  id: "callback:<>()->callback?:<>()->void:",
);
const _flaxBinding78 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxVoidNullableCallbackType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:callback?:<>()->void:)->void:",
);
const _flaxBinding79 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _AlwaysStoppedAnimation_status,
);
const _flaxBinding80 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _AlwaysStoppedAnimation_isDismissed,
);
const _flaxBinding81 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _AlwaysStoppedAnimation_isCompleted,
);
const _flaxBinding82 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _AlwaysStoppedAnimation_isAnimating,
);
const _flaxBinding83 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _AlwaysStoppedAnimation_isForwardOrCompleted,
);
const _flaxBinding84 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AlwaysStoppedAnimation_addListener,
);
const _flaxBinding85 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AlwaysStoppedAnimation_removeListener,
);
const _flaxBinding86 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AlwaysStoppedAnimation_addStatusListener,
);
const _flaxBinding87 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AlwaysStoppedAnimation_removeStatusListener,
);
const _flaxBinding88 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AlwaysStoppedAnimation_toString,
);
const _flaxBinding89 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AlwaysStoppedAnimation_toStringDetails,
);
const _flaxBinding90 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _FlaxProxyDispatch0_super_call_addListener,
);
const _flaxBinding91 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _FlaxProxyDispatch0_super_call_removeListener,
);
const _flaxBinding92 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _FlaxProxyDispatch0_super_call_addStatusListener,
);
const _flaxBinding93 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _FlaxProxyDispatch0_super_call_removeStatusListener,
);
const _flaxBinding94 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch1_super_call_toString,
);
const _flaxBinding95 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch2_super_call_toStringDetails,
);
const _flaxBinding96 = <FlaxParameter>[];
const _flaxBinding97 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _FlaxProxyDispatch0_super_get_status,
);
const _flaxBinding98 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _FlaxProxyDispatch2_super_get_isDismissed,
);
const _flaxBinding99 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _FlaxProxyDispatch2_super_get_isCompleted,
);
const _flaxBinding100 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _FlaxProxyDispatch2_super_get_isAnimating,
);
const _flaxBinding101 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
);
const _flaxBinding102 = <FlaxParameter>[
  FlaxParameter.required("value", flaxNullableAnyType),
];
const _flaxBinding103 = FlaxProxyMember(
  "addListener",
  0,
  _flaxBinding0,
  hasSuper: true,
);
const _flaxBinding104 = FlaxProxyMember(
  "removeListener",
  0,
  _flaxBinding0,
  hasSuper: true,
);
const _flaxBinding105 = FlaxProxyMember(
  "addStatusListener",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding106 = FlaxProxyMember(
  "removeStatusListener",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding107 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<Object?>>,
);
const _flaxBinding108 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<Object?>>,
);
const _flaxBinding109 = FlaxProxyMember(
  "toString",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding110 = FlaxProxyMember(
  "toStringDetails",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding111 = FlaxProxyMember(
  "status",
  1,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding112 = FlaxProxyMember(
  "isDismissed",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding113 = FlaxProxyMember(
  "isCompleted",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding114 = FlaxProxyMember(
  "isAnimating",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding115 = FlaxProxyMember(
  "isForwardOrCompleted",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding116 = <FlaxParameter>[
  FlaxParameter.required("t", flaxDoubleType),
];
const _flaxBinding117 = <FlaxParameter>[
  FlaxParameter.required("animation", _flaxBinding13),
];
const _flaxBinding118 = <FlaxParameter>[
  FlaxParameter.required("parent", _flaxBinding13),
];
const _flaxBinding119 = <FlaxParameter>[
  FlaxParameter.required("parent", _flaxBinding38),
];
const _flaxBinding120 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("value", flaxDoubleType)],
  flaxNullableAnyType,
  FlaxCallbackAdapters.wrap1<double, Object?>,
  id: "callback:<>(p:r:value:double:)->any?:",
  invoke: FlaxCallbackAdapters.invoke1<double, Object?>,
  matches: FlaxCallbackAdapters.matches1<double, Object?>,
);
const _flaxBinding121 = FlaxTypeRef("callback", callback: _flaxBinding120);
const _flaxBinding122 = <FlaxParameter>[
  FlaxParameter.required("callback", _flaxBinding121),
];
const _flaxBinding123 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _Animation_status,
);
const _flaxBinding124 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _Animation_isDismissed,
);
const _flaxBinding125 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _Animation_isCompleted,
);
const _flaxBinding126 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _Animation_isAnimating,
);
const _flaxBinding127 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _Animation_isForwardOrCompleted,
);
const _flaxBinding128 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _Animation_addListener,
);
const _flaxBinding129 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _Animation_removeListener,
);
const _flaxBinding130 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _Animation_addStatusListener,
);
const _flaxBinding131 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _Animation_removeStatusListener,
);
const _flaxBinding132 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Animation_toString,
);
const _flaxBinding133 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Animation_toStringDetails,
);
const _flaxBinding134 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:ValueListenable",
  dartType: FlaxDartTypes.typeOf<api2.ValueListenable<Object?>>,
);
const _flaxBinding135 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("p0", flaxNullableAnyType)],
  flaxNullableAnyType,
  FlaxCallbackAdapters.wrap1<Object?, Object?>,
  id: "callback:<>(p:r:p0:any?:)->any?:",
  invoke: FlaxCallbackAdapters.invoke1<Object?, Object?>,
  matches: FlaxCallbackAdapters.matches1<Object?, Object?>,
);
const _flaxBinding136 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding135,
);
const _flaxBinding137 = <FlaxParameter>[
  FlaxParameter.required("listenable", _flaxBinding134),
  FlaxParameter("transformer", _flaxBinding136, required: false),
];
const _flaxBinding138 = FlaxProxyMember("addListener", 0, _flaxBinding0);
const _flaxBinding139 = FlaxProxyMember("removeListener", 0, _flaxBinding0);
const _flaxBinding140 = FlaxProxyMember("addStatusListener", 0, _flaxBinding4);
const _flaxBinding141 = FlaxProxyMember(
  "removeStatusListener",
  0,
  _flaxBinding4,
);
const _flaxBinding142 = FlaxProxyMember("status", 1, _flaxBinding5);
const _flaxBinding143 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _AnimationController_status,
);
const _flaxBinding144 = FlaxGetter.plain(
  "value",
  flaxDoubleType,
  _AnimationController_value,
);
const _flaxBinding145 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _AnimationController_isDismissed,
);
const _flaxBinding146 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _AnimationController_isCompleted,
);
const _flaxBinding147 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _AnimationController_isAnimating,
);
const _flaxBinding148 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _AnimationController_isForwardOrCompleted,
);
const _flaxBinding149 = FlaxGetter.plain(
  "lowerBound",
  flaxDoubleType,
  _AnimationController_lowerBound,
);
const _flaxBinding150 = FlaxGetter.plain(
  "upperBound",
  flaxDoubleType,
  _AnimationController_upperBound,
);
const _flaxBinding151 = FlaxGetter.plain(
  "debugLabel",
  flaxNullableStringType,
  _AnimationController_debugLabel,
);
const _flaxBinding152 = FlaxGetter.plain(
  "animationBehavior",
  _flaxBinding11,
  _AnimationController_animationBehavior,
);
const _flaxBinding153 = FlaxGetter.plain(
  "view",
  _flaxBinding13,
  _AnimationController_view,
);
const _flaxBinding154 = FlaxGetter.plain(
  "duration",
  _flaxBinding15,
  _AnimationController_duration,
);
const _flaxBinding155 = FlaxGetter.plain(
  "reverseDuration",
  _flaxBinding15,
  _AnimationController_reverseDuration,
);
const _flaxBinding156 = FlaxGetter.plain(
  "velocity",
  flaxDoubleType,
  _AnimationController_velocity,
);
const _flaxBinding157 = FlaxGetter.plain(
  "lastElapsedDuration",
  _flaxBinding15,
  _AnimationController_lastElapsedDuration,
);
const _flaxBinding158 = FlaxSetter(
  "duration",
  _flaxBinding15,
  _AnimationController_set_duration,
);
const _flaxBinding159 = FlaxSetter(
  "reverseDuration",
  _flaxBinding15,
  _AnimationController_set_reverseDuration,
);
const _flaxBinding160 = FlaxSetter(
  "value",
  flaxDoubleType,
  _AnimationController_set_value,
);
const _flaxBinding161 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AnimationLocalListenersMixin_addListener,
);
const _flaxBinding162 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AnimationLocalListenersMixin_removeListener,
);
const _flaxBinding163 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AnimationLocalStatusListenersMixin_addStatusListener,
);
const _flaxBinding164 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AnimationLocalStatusListenersMixin_removeStatusListener,
);
const _flaxBinding165 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AnimationController_toString,
);
const _flaxBinding166 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AnimationController_toStringDetails,
);
const _flaxBinding167 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationEagerListenerMixin_didRegisterListener,
);
const _flaxBinding168 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationEagerListenerMixin_didUnregisterListener,
);
const _flaxBinding169 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationEagerListenerMixin_dispose,
);
const _flaxBinding170 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLocalListenersMixin_clearListeners,
);
const _flaxBinding171 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLocalListenersMixin_notifyListeners,
);
const _flaxBinding172 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLocalStatusListenersMixin_clearStatusListeners,
);
const _flaxBinding173 = FlaxInstanceMethod.shared(
  _flaxBinding6,
  _AnimationLocalStatusListenersMixin_notifyStatusListeners,
);
const _flaxBinding174 = FlaxInstanceMethod.shared(
  _flaxBinding8,
  _AnimationController_resync,
);
const _flaxBinding175 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationController_reset,
);
const _flaxBinding176 = <FlaxParameter>[
  FlaxParameter("from", flaxNullableDoubleType, required: false),
];
const _flaxBinding177 = FlaxInstanceMethod.plain(
  _flaxBinding176,
  flaxTickerFutureType,
  _AnimationController_forward,
);
const _flaxBinding178 = FlaxInstanceMethod.plain(
  _flaxBinding176,
  flaxTickerFutureType,
  _AnimationController_reverse,
);
const _flaxBinding179 = FlaxInstanceMethod.plain(
  _flaxBinding176,
  flaxTickerFutureType,
  _AnimationController_toggle,
);
const _flaxBinding180 = <FlaxParameter>[
  FlaxParameter.required("target", flaxDoubleType),
  FlaxParameter("curve", flaxCurveType, required: false, omitWhenAbsent: true),
  FlaxParameter("duration", _flaxBinding15, required: false),
];
const _flaxBinding181 = FlaxInstanceMethod.plain(
  _flaxBinding180,
  flaxTickerFutureType,
  _AnimationController_animateTo,
);
const _flaxBinding182 = FlaxInstanceMethod.plain(
  _flaxBinding180,
  flaxTickerFutureType,
  _AnimationController_animateBack,
);
const _flaxBinding183 = <FlaxParameter>[
  FlaxParameter("count", flaxNullableIntType, required: false),
  FlaxParameter("max", flaxNullableDoubleType, required: false),
  FlaxParameter("min", flaxNullableDoubleType, required: false),
  FlaxParameter("period", _flaxBinding15, required: false),
  FlaxParameter("reverse", flaxBoolType, required: false, defaultValue: false),
];
const _flaxBinding184 = FlaxInstanceMethod.plain(
  _flaxBinding183,
  flaxTickerFutureType,
  _AnimationController_repeat,
);
const _flaxBinding185 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_animation#type:AnimationBehavior",
  nullable: true,
);
const _flaxBinding186 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_physics#type:SpringDescription",
  nullable: true,
);
const _flaxBinding187 = <FlaxParameter>[
  FlaxParameter("animationBehavior", _flaxBinding185, required: false),
  FlaxParameter("springDescription", _flaxBinding186, required: false),
  FlaxParameter("velocity", flaxDoubleType, required: false, defaultValue: 1.0),
];
const _flaxBinding188 = FlaxInstanceMethod.plain(
  _flaxBinding187,
  flaxTickerFutureType,
  _AnimationController_fling,
);
const _flaxBinding189 = FlaxInstanceMethod.shared(
  _flaxBinding10,
  _AnimationController_animateWith,
);
const _flaxBinding190 = FlaxInstanceMethod.shared(
  _flaxBinding10,
  _AnimationController_animateBackWith,
);
const _flaxBinding191 = <FlaxParameter>[
  FlaxParameter("canceled", flaxBoolType, required: false, defaultValue: true),
];
const _flaxBinding192 = FlaxInstanceMethod.plain(
  _flaxBinding191,
  flaxVoidType,
  _AnimationController_stop,
);
const _flaxBinding193 = <FlaxParameter>[
  FlaxParameter("value", flaxNullableDoubleType, required: false),
  FlaxParameter("duration", _flaxBinding15, required: false),
  FlaxParameter("reverseDuration", _flaxBinding15, required: false),
  FlaxParameter("debugLabel", flaxNullableStringType, required: false),
  FlaxParameter(
    "lowerBound",
    flaxDoubleType,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "upperBound",
    flaxDoubleType,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter(
    "animationBehavior",
    _flaxBinding11,
    required: false,
    defaultValue: api.AnimationBehavior.normal,
  ),
  FlaxParameter.required("vsync", _flaxBinding7),
];
const _flaxBinding194 = <FlaxParameter>[
  FlaxParameter("value", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter("duration", _flaxBinding15, required: false),
  FlaxParameter("reverseDuration", _flaxBinding15, required: false),
  FlaxParameter("debugLabel", flaxNullableStringType, required: false),
  FlaxParameter.required("vsync", _flaxBinding7),
  FlaxParameter(
    "animationBehavior",
    _flaxBinding11,
    required: false,
    defaultValue: api.AnimationBehavior.preserve,
  ),
];
const _flaxBinding195 = FlaxProxyMember(
  "didRegisterListener",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding196 = FlaxProxyMember(
  "didUnregisterListener",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding197 = FlaxProxyMember(
  "dispose",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding198 = FlaxProxyMember(
  "clearListeners",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding199 = FlaxProxyMember(
  "notifyListeners",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding200 = FlaxProxyMember(
  "clearStatusListeners",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding201 = FlaxProxyMember(
  "notifyStatusListeners",
  0,
  _flaxBinding6,
  hasSuper: true,
);
const _flaxBinding202 = FlaxProxyMember(
  "resync",
  0,
  _flaxBinding8,
  hasSuper: true,
);
const _flaxBinding203 = FlaxProxyMember(
  "reset",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding204 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "from",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
  ],
  flaxTickerFutureType,
  id: "callback:<>(n:o:from:double?:)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding205 = FlaxProxyMember(
  "forward",
  0,
  _flaxBinding204,
  hasSuper: true,
);
const _flaxBinding206 = FlaxProxyMember(
  "reverse",
  0,
  _flaxBinding204,
  hasSuper: true,
);
const _flaxBinding207 = FlaxProxyMember(
  "toggle",
  0,
  _flaxBinding204,
  hasSuper: true,
);
const _flaxBinding208 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("target", flaxDoubleType),
    FlaxCallbackParameter.plain(
      "duration",
      _flaxBinding15,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "curve",
      flaxCurveType,
      required: false,
      positional: false,
    ),
  ],
  flaxTickerFutureType,
  id: "callback:<>(p:r:target:double:,n:o:duration:object?:flax.core/flutter#type:Duration,n:o:curve:object:flax.core/flutter#type:Curve)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding209 = FlaxProxyMember(
  "animateTo",
  0,
  _flaxBinding208,
  hasSuper: true,
);
const _flaxBinding210 = FlaxProxyMember(
  "animateBack",
  0,
  _flaxBinding208,
  hasSuper: true,
);
const _flaxBinding211 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "min",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "max",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "reverse",
      flaxBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "period",
      _flaxBinding15,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "count",
      flaxNullableIntType,
      required: false,
      positional: false,
    ),
  ],
  flaxTickerFutureType,
  id: "callback:<>(n:o:min:double?:,n:o:max:double?:,n:o:reverse:bool:,n:o:period:object?:flax.core/flutter#type:Duration,n:o:count:int?:)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding212 = FlaxProxyMember(
  "repeat",
  0,
  _flaxBinding211,
  hasSuper: true,
);
const _flaxBinding213 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "velocity",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "springDescription",
      _flaxBinding186,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "animationBehavior",
      _flaxBinding185,
      required: false,
      positional: false,
    ),
  ],
  flaxTickerFutureType,
  id: "callback:<>(n:o:velocity:double:,n:o:springDescription:object?:flax.core/sdk_physics#type:SpringDescription,n:o:animationBehavior:enum?:flax.core/sdk_animation#type:AnimationBehavior)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding214 = FlaxProxyMember(
  "fling",
  0,
  _flaxBinding213,
  hasSuper: true,
);
const _flaxBinding215 = FlaxProxyMember(
  "animateWith",
  0,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding216 = FlaxProxyMember(
  "animateBackWith",
  0,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding217 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "canceled",
      flaxBoolType,
      required: false,
      positional: false,
    ),
  ],
  flaxVoidType,
  id: "callback:<>(n:o:canceled:bool:)->void:",
);
const _flaxBinding218 = FlaxProxyMember(
  "stop",
  0,
  _flaxBinding217,
  hasSuper: true,
);
const _flaxBinding219 = FlaxProxyMember(
  "lowerBound",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding220 = FlaxProxyMember(
  "upperBound",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding221 = FlaxProxyMember(
  "debugLabel",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding222 = FlaxProxyMember(
  "animationBehavior",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding223 = FlaxProxyMember(
  "view",
  1,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding224 = FlaxProxyMember(
  "duration",
  1,
  _flaxBinding16,
  hasSuper: true,
);
const _flaxBinding225 = FlaxProxyMember(
  "reverseDuration",
  1,
  _flaxBinding16,
  hasSuper: true,
);
const _flaxBinding226 = FlaxProxyMember(
  "value",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding227 = FlaxProxyMember(
  "velocity",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding228 = FlaxProxyMember(
  "lastElapsedDuration",
  1,
  _flaxBinding16,
  hasSuper: true,
);
const _flaxBinding229 = FlaxProxyMember(
  "duration",
  2,
  _flaxBinding17,
  hasSuper: true,
);
const _flaxBinding230 = FlaxProxyMember(
  "reverseDuration",
  2,
  _flaxBinding17,
  hasSuper: true,
);
const _flaxBinding231 = FlaxProxyMember(
  "value",
  2,
  _flaxBinding18,
  hasSuper: true,
);
const _flaxBinding232 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationController",
  [
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
  ],
  {
    "addListener": _flaxBinding161,
    "removeListener": _flaxBinding162,
    "addStatusListener": _flaxBinding163,
    "removeStatusListener": _flaxBinding164,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _AnimationController_drive,
      genericFactory: _flaxGeneric_AnimationController_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding165,
    "toStringDetails": _flaxBinding166,
    "didRegisterListener": _flaxBinding167,
    "didUnregisterListener": _flaxBinding168,
    "dispose": _flaxBinding169,
    "clearListeners": _flaxBinding170,
    "notifyListeners": _flaxBinding171,
    "clearStatusListeners": _flaxBinding172,
    "notifyStatusListeners": _flaxBinding173,
    "resync": _flaxBinding174,
    "reset": _flaxBinding175,
    "forward": _flaxBinding177,
    "reverse": _flaxBinding178,
    "toggle": _flaxBinding179,
    "animateTo": _flaxBinding181,
    "animateBack": _flaxBinding182,
    "repeat": _flaxBinding184,
    "fling": _flaxBinding188,
    "animateWith": _flaxBinding189,
    "animateBackWith": _flaxBinding190,
    "stop": _flaxBinding192,
    "@super:addListener": _flaxBinding90,
    "@super:removeListener": _flaxBinding91,
    "@super:addStatusListener": _flaxBinding92,
    "@super:removeStatusListener": _flaxBinding93,
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _AnimationController_super_drive,
      genericFactory: _flaxGeneric_AnimationController_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": _flaxBinding94,
    "@super:toStringDetails": _flaxBinding95,
    "@super:didRegisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationController_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationController_super_didUnregisterListener,
    ),
    "@super:dispose": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationController_super_dispose,
    ),
    "@super:clearListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationController_super_clearListeners,
    ),
    "@super:notifyListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationController_super_notifyListeners,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationController_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.shared(
      _flaxBinding6,
      _AnimationController_super_notifyStatusListeners,
    ),
    "@super:resync": FlaxInstanceMethod.shared(
      _flaxBinding8,
      _AnimationController_super_resync,
    ),
    "@super:reset": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationController_super_reset,
    ),
    "@super:forward": FlaxInstanceMethod.plain(
      _flaxBinding176,
      flaxTickerFutureType,
      _AnimationController_super_forward,
    ),
    "@super:reverse": FlaxInstanceMethod.plain(
      _flaxBinding176,
      flaxTickerFutureType,
      _AnimationController_super_reverse,
    ),
    "@super:toggle": FlaxInstanceMethod.plain(
      _flaxBinding176,
      flaxTickerFutureType,
      _AnimationController_super_toggle,
    ),
    "@super:animateTo": FlaxInstanceMethod.plain(
      _flaxBinding180,
      flaxTickerFutureType,
      _AnimationController_super_animateTo,
    ),
    "@super:animateBack": FlaxInstanceMethod.plain(
      _flaxBinding180,
      flaxTickerFutureType,
      _AnimationController_super_animateBack,
    ),
    "@super:repeat": FlaxInstanceMethod.plain(
      _flaxBinding183,
      flaxTickerFutureType,
      _AnimationController_super_repeat,
    ),
    "@super:fling": FlaxInstanceMethod.plain(
      _flaxBinding187,
      flaxTickerFutureType,
      _AnimationController_super_fling,
    ),
    "@super:animateWith": FlaxInstanceMethod.shared(
      _flaxBinding10,
      _AnimationController_super_animateWith,
    ),
    "@super:animateBackWith": FlaxInstanceMethod.shared(
      _flaxBinding10,
      _AnimationController_super_animateBackWith,
    ),
    "@super:stop": FlaxInstanceMethod.plain(
      _flaxBinding191,
      flaxVoidType,
      _AnimationController_super_stop,
    ),
    "@super:get:lowerBound": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _AnimationController_super_get_lowerBound,
    ),
    "@super:get:upperBound": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _AnimationController_super_get_upperBound,
    ),
    "@super:get:debugLabel": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _AnimationController_super_get_debugLabel,
    ),
    "@super:get:animationBehavior": FlaxInstanceMethod.shared(
      _flaxBinding12,
      _AnimationController_super_get_animationBehavior,
    ),
    "@super:get:view": FlaxInstanceMethod.shared(
      _flaxBinding14,
      _AnimationController_super_get_view,
    ),
    "@super:get:duration": FlaxInstanceMethod.shared(
      _flaxBinding16,
      _AnimationController_super_get_duration,
    ),
    "@super:get:reverseDuration": FlaxInstanceMethod.shared(
      _flaxBinding16,
      _AnimationController_super_get_reverseDuration,
    ),
    "@super:get:value": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _AnimationController_super_get_value,
    ),
    "@super:get:velocity": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _AnimationController_super_get_velocity,
    ),
    "@super:get:lastElapsedDuration": FlaxInstanceMethod.shared(
      _flaxBinding16,
      _AnimationController_super_get_lastElapsedDuration,
    ),
    "@super:get:isAnimating": _flaxBinding100,
    "@super:get:status": _flaxBinding97,
    "@super:get:isDismissed": _flaxBinding98,
    "@super:get:isCompleted": _flaxBinding99,
    "@super:get:isForwardOrCompleted": _flaxBinding101,
    "@super:set:duration": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding15)],
      flaxVoidType,
      _AnimationController_super_set_duration,
    ),
    "@super:set:reverseDuration": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding15)],
      flaxVoidType,
      _AnimationController_super_set_reverseDuration,
    ),
    "@super:set:value": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxDoubleType)],
      flaxVoidType,
      _AnimationController_super_set_value,
    ),
  },
  constructors: {
    "": _flaxBinding193,
    "unbounded": _flaxBinding194,
    "@implementation": _flaxBinding193,
    "@implementation:unbounded": _flaxBinding194,
  },
  create: _createAnimationController,
  matches: _isAnimationController,
  setters: [_flaxBinding158, _flaxBinding159, _flaxBinding160],
  supertypes: [
    "flax.core/sdk_animation#type:Animation",
    "flax.core/flutter#type:Listenable",
    "dart:core::Object",
    "flax.core/flutter#type:ValueListenable",
    "flax.core/sdk_animation#type:AnimationEagerListenerMixin",
    "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
    "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
  ],
  disposeMethod: "dispose",
  listenerPairs: {"addListener": "removeListener"},
  proxy: FlaxProxyBinding([
    _flaxBinding103,
    _flaxBinding104,
    _flaxBinding105,
    _flaxBinding106,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [FlaxCallbackParameter.plain("child", _flaxBinding107)],
        _flaxBinding108,
        _callback2,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback2Invoke,
        matches: _callback2Matches,
        genericFactory: _callback2Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding195,
    _flaxBinding196,
    _flaxBinding197,
    _flaxBinding198,
    _flaxBinding199,
    _flaxBinding200,
    _flaxBinding201,
    _flaxBinding202,
    _flaxBinding203,
    _flaxBinding205,
    _flaxBinding206,
    _flaxBinding207,
    _flaxBinding209,
    _flaxBinding210,
    _flaxBinding212,
    _flaxBinding214,
    _flaxBinding215,
    _flaxBinding216,
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
    _flaxBinding228,
    _flaxBinding114,
    _flaxBinding111,
    _flaxBinding112,
    _flaxBinding113,
    _flaxBinding115,
    _flaxBinding229,
    _flaxBinding230,
    _flaxBinding231,
  ]),
);
const _flaxBinding233 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationEagerListenerMixin",
  [],
  {
    "didRegisterListener": _flaxBinding167,
    "didUnregisterListener": _flaxBinding168,
    "dispose": _flaxBinding169,
  },
  constructors: {},
  create: _createAnimationEagerListenerMixin,
  matches: _isAnimationEagerListenerMixin,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding234 = FlaxGetter.plain(
  "isListening",
  flaxBoolType,
  _AnimationLazyListenerMixin_isListening,
);
const _flaxBinding235 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLazyListenerMixin_didRegisterListener,
);
const _flaxBinding236 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLazyListenerMixin_didUnregisterListener,
);
const _flaxBinding237 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLazyListenerMixin_didStartListening,
);
const _flaxBinding238 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLazyListenerMixin_didStopListening,
);
const _flaxBinding239 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
  [_flaxBinding234],
  {
    "didRegisterListener": _flaxBinding235,
    "didUnregisterListener": _flaxBinding236,
    "didStartListening": _flaxBinding237,
    "didStopListening": _flaxBinding238,
  },
  constructors: {},
  create: _createAnimationLazyListenerMixin,
  matches: _isAnimationLazyListenerMixin,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding240 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLocalListenersMixin_didRegisterListener,
);
const _flaxBinding241 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLocalListenersMixin_didUnregisterListener,
);
const _flaxBinding242 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
  [],
  {
    "didRegisterListener": _flaxBinding240,
    "didUnregisterListener": _flaxBinding241,
    "addListener": _flaxBinding161,
    "removeListener": _flaxBinding162,
    "clearListeners": _flaxBinding170,
    "notifyListeners": _flaxBinding171,
  },
  constructors: {},
  create: _createAnimationLocalListenersMixin,
  matches: _isAnimationLocalListenersMixin,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding243 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLocalStatusListenersMixin_didRegisterListener,
);
const _flaxBinding244 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationLocalStatusListenersMixin_didUnregisterListener,
);
const _flaxBinding245 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
  [],
  {
    "didRegisterListener": _flaxBinding243,
    "didUnregisterListener": _flaxBinding244,
    "addStatusListener": _flaxBinding163,
    "removeStatusListener": _flaxBinding164,
    "clearStatusListeners": _flaxBinding172,
    "notifyStatusListeners": _flaxBinding173,
  },
  constructors: {},
  create: _createAnimationLocalStatusListenersMixin,
  matches: _isAnimationLocalStatusListenersMixin,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding246 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _AnimationMax_status,
);
const _flaxBinding247 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _AnimationMax_isDismissed,
);
const _flaxBinding248 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _AnimationMax_isCompleted,
);
const _flaxBinding249 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _AnimationMax_isAnimating,
);
const _flaxBinding250 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _AnimationMax_isForwardOrCompleted,
);
const _flaxBinding251 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMax_didStartListening,
);
const _flaxBinding252 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMax_didStopListening,
);
const _flaxBinding253 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AnimationMax_toString,
);
const _flaxBinding254 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AnimationMax_addListener,
);
const _flaxBinding255 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AnimationMax_removeListener,
);
const _flaxBinding256 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AnimationMax_addStatusListener,
);
const _flaxBinding257 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AnimationMax_removeStatusListener,
);
const _flaxBinding258 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AnimationMax_toStringDetails,
);
const _flaxBinding259 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMax_didRegisterListener,
);
const _flaxBinding260 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMax_didUnregisterListener,
);
const _flaxBinding261 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMax_clearListeners,
);
const _flaxBinding262 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMax_notifyListeners,
);
const _flaxBinding263 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMax_clearStatusListeners,
);
const _flaxBinding264 = FlaxInstanceMethod.shared(
  _flaxBinding6,
  _AnimationMax_notifyStatusListeners,
);
const _flaxBinding265 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<num>>,
);
const _flaxBinding266 = <FlaxParameter>[
  FlaxParameter.required("first", _flaxBinding265),
  FlaxParameter.required("next", _flaxBinding265),
];
const _flaxBinding267 = FlaxProxyMember(
  "didStartListening",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding268 = FlaxProxyMember(
  "didStopListening",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding269 = FlaxProxyMember(
  "isListening",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding270 = FlaxGetter.plain(
  "first",
  _flaxBinding13,
  _AnimationMean_first,
);
const _flaxBinding271 = FlaxGetter.plain(
  "next",
  _flaxBinding13,
  _AnimationMean_next,
);
const _flaxBinding272 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _AnimationMean_status,
);
const _flaxBinding273 = FlaxGetter.plain(
  "value",
  flaxDoubleType,
  _AnimationMean_value,
);
const _flaxBinding274 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _AnimationMean_isDismissed,
);
const _flaxBinding275 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _AnimationMean_isCompleted,
);
const _flaxBinding276 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _AnimationMean_isAnimating,
);
const _flaxBinding277 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _AnimationMean_isForwardOrCompleted,
);
const _flaxBinding278 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AnimationMean_toString,
);
const _flaxBinding279 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AnimationMean_toStringDetails,
);
const _flaxBinding280 = <FlaxParameter>[
  FlaxParameter.required("left", _flaxBinding13),
  FlaxParameter.required("right", _flaxBinding13),
];
const _flaxBinding281 = FlaxProxyMember(
  "first",
  1,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding282 = FlaxProxyMember(
  "next",
  1,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding283 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationMean",
  [
    _flaxBinding270,
    _flaxBinding271,
    _flaxBinding272,
    _flaxBinding273,
    _flaxBinding274,
    _flaxBinding275,
    _flaxBinding276,
    _flaxBinding277,
    _flaxBinding234,
  ],
  {
    "didStartListening": _flaxBinding237,
    "didStopListening": _flaxBinding238,
    "toString": _flaxBinding278,
    "addListener": _flaxBinding161,
    "removeListener": _flaxBinding162,
    "addStatusListener": _flaxBinding163,
    "removeStatusListener": _flaxBinding164,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _AnimationMean_drive,
      genericFactory: _flaxGeneric_AnimationMean_drive,
      ownerTypes: [],
    ),
    "toStringDetails": _flaxBinding279,
    "didRegisterListener": _flaxBinding235,
    "didUnregisterListener": _flaxBinding236,
    "clearListeners": _flaxBinding170,
    "notifyListeners": _flaxBinding171,
    "clearStatusListeners": _flaxBinding172,
    "notifyStatusListeners": _flaxBinding173,
    "@super:didStartListening": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationMean_super_didStartListening,
    ),
    "@super:didStopListening": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationMean_super_didStopListening,
    ),
    "@super:toString": _flaxBinding94,
    "@super:addListener": _flaxBinding90,
    "@super:removeListener": _flaxBinding91,
    "@super:addStatusListener": _flaxBinding92,
    "@super:removeStatusListener": _flaxBinding93,
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _AnimationMean_super_drive,
      genericFactory: _flaxGeneric_AnimationMean_super_drive,
      ownerTypes: [],
    ),
    "@super:toStringDetails": _flaxBinding95,
    "@super:didRegisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationMean_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationMean_super_didUnregisterListener,
    ),
    "@super:clearListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationMean_super_clearListeners,
    ),
    "@super:notifyListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationMean_super_notifyListeners,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AnimationMean_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.shared(
      _flaxBinding6,
      _AnimationMean_super_notifyStatusListeners,
    ),
    "@super:get:value": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _AnimationMean_super_get_value,
    ),
    "@super:get:first": FlaxInstanceMethod.shared(
      _flaxBinding14,
      _AnimationMean_super_get_first,
    ),
    "@super:get:next": FlaxInstanceMethod.shared(
      _flaxBinding14,
      _AnimationMean_super_get_next,
    ),
    "@super:get:status": _flaxBinding97,
    "@super:get:isDismissed": _flaxBinding98,
    "@super:get:isCompleted": _flaxBinding99,
    "@super:get:isAnimating": _flaxBinding100,
    "@super:get:isForwardOrCompleted": _flaxBinding101,
    "@super:get:isListening": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AnimationMean_super_get_isListening,
    ),
  },
  constructors: {"": _flaxBinding280, "@implementation": _flaxBinding280},
  create: _createAnimationMean,
  matches: _isAnimationMean,
  setters: [],
  supertypes: [
    "flax.core/sdk_animation#type:CompoundAnimation",
    "flax.core/sdk_animation#type:Animation",
    "flax.core/flutter#type:Listenable",
    "dart:core::Object",
    "flax.core/flutter#type:ValueListenable",
    "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
    "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
    "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
  ],
  listenerPairs: {"addListener": "removeListener"},
  proxy: FlaxProxyBinding([
    _flaxBinding267,
    _flaxBinding268,
    _flaxBinding109,
    _flaxBinding103,
    _flaxBinding104,
    _flaxBinding105,
    _flaxBinding106,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [FlaxCallbackParameter.plain("child", _flaxBinding107)],
        _flaxBinding108,
        _callback4,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback4Invoke,
        matches: _callback4Matches,
        genericFactory: _callback4Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding110,
    _flaxBinding195,
    _flaxBinding196,
    _flaxBinding198,
    _flaxBinding199,
    _flaxBinding200,
    _flaxBinding201,
    _flaxBinding226,
    _flaxBinding281,
    _flaxBinding282,
    _flaxBinding111,
    _flaxBinding112,
    _flaxBinding113,
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding269,
  ]),
);
const _flaxBinding284 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _AnimationMin_status,
);
const _flaxBinding285 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _AnimationMin_isDismissed,
);
const _flaxBinding286 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _AnimationMin_isCompleted,
);
const _flaxBinding287 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _AnimationMin_isAnimating,
);
const _flaxBinding288 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _AnimationMin_isForwardOrCompleted,
);
const _flaxBinding289 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMin_didStartListening,
);
const _flaxBinding290 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMin_didStopListening,
);
const _flaxBinding291 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AnimationMin_toString,
);
const _flaxBinding292 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AnimationMin_addListener,
);
const _flaxBinding293 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AnimationMin_removeListener,
);
const _flaxBinding294 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AnimationMin_addStatusListener,
);
const _flaxBinding295 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AnimationMin_removeStatusListener,
);
const _flaxBinding296 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AnimationMin_toStringDetails,
);
const _flaxBinding297 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMin_didRegisterListener,
);
const _flaxBinding298 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMin_didUnregisterListener,
);
const _flaxBinding299 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMin_clearListeners,
);
const _flaxBinding300 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMin_notifyListeners,
);
const _flaxBinding301 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AnimationMin_clearStatusListeners,
);
const _flaxBinding302 = FlaxInstanceMethod.shared(
  _flaxBinding6,
  _AnimationMin_notifyStatusListeners,
);
const _flaxBinding303 = FlaxGetter.plain(
  "curve",
  _flaxBinding24,
  _AnimationStyle_curve,
);
const _flaxBinding304 = FlaxGetter.plain(
  "duration",
  _flaxBinding15,
  _AnimationStyle_duration,
);
const _flaxBinding305 = FlaxGetter.plain(
  "reverseCurve",
  _flaxBinding24,
  _AnimationStyle_reverseCurve,
);
const _flaxBinding306 = FlaxGetter.plain(
  "reverseDuration",
  _flaxBinding15,
  _AnimationStyle_reverseDuration,
);
const _flaxBinding307 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AnimationStyle_toStringShort,
);
const _flaxBinding308 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding309 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding308,
    required: false,
    defaultValue: api2.DiagnosticLevel.info,
  ),
];
const _flaxBinding310 = FlaxInstanceMethod.plain(
  _flaxBinding309,
  flaxStringType,
  _AnimationStyle_toString,
);
const _flaxBinding311 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding312 = <FlaxParameter>[
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("style", _flaxBinding311, required: false),
];
const _flaxBinding313 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding314 = FlaxInstanceMethod.plain(
  _flaxBinding312,
  _flaxBinding313,
  _AnimationStyle_toDiagnosticsNode,
);
const _flaxBinding315 = FlaxInstanceMethod.shared(
  _flaxBinding20,
  _AnimationStyle_debugFillProperties,
);
const _flaxBinding316 = <FlaxParameter>[
  FlaxParameter("curve", _flaxBinding24, required: false),
  FlaxParameter("duration", _flaxBinding15, required: false),
  FlaxParameter("reverseCurve", _flaxBinding24, required: false),
  FlaxParameter("reverseDuration", _flaxBinding15, required: false),
];
const _flaxBinding317 = FlaxInstanceMethod.plain(
  _flaxBinding316,
  _flaxBinding22,
  _AnimationStyle_copyWith,
);
const _flaxBinding318 = FlaxInstanceMethod.shared(
  _flaxBinding23,
  _AnimationStyle_merge,
);
const _flaxBinding319 = FlaxProxyMember(
  "toStringShort",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding320 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "minLevel",
      _flaxBinding308,
      required: false,
      positional: false,
    ),
  ],
  flaxStringType,
  id: "callback:<>(n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding321 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding320,
  hasSuper: true,
);
const _flaxBinding322 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "name",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "style",
      _flaxBinding311,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding313,
  id: "callback:<>(n:o:name:String?:,n:o:style:enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding323 = FlaxProxyMember(
  "toDiagnosticsNode",
  0,
  _flaxBinding322,
  hasSuper: true,
);
const _flaxBinding324 = FlaxProxyMember(
  "debugFillProperties",
  0,
  _flaxBinding20,
  hasSuper: true,
);
const _flaxBinding325 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "curve",
      _flaxBinding24,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "duration",
      _flaxBinding15,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "reverseCurve",
      _flaxBinding24,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "reverseDuration",
      _flaxBinding15,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding22,
  id: "callback:<>(n:o:curve:object?:flax.core/flutter#type:Curve,n:o:duration:object?:flax.core/flutter#type:Duration,n:o:reverseCurve:object?:flax.core/flutter#type:Curve,n:o:reverseDuration:object?:flax.core/flutter#type:Duration)->object:flax.core/sdk_animation#type:AnimationStyle",
);
const _flaxBinding326 = FlaxProxyMember(
  "copyWith",
  0,
  _flaxBinding325,
  hasSuper: true,
);
const _flaxBinding327 = FlaxProxyMember(
  "merge",
  0,
  _flaxBinding23,
  hasSuper: true,
);
const _flaxBinding328 = FlaxProxyMember(
  "curve",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding329 = FlaxProxyMember(
  "reverseCurve",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding330 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationStyle",
  [_flaxBinding303, _flaxBinding304, _flaxBinding305, _flaxBinding306],
  {
    "toStringShort": _flaxBinding307,
    "toString": _flaxBinding310,
    "toDiagnosticsNode": _flaxBinding314,
    "debugFillProperties": _flaxBinding315,
    "copyWith": _flaxBinding317,
    "merge": _flaxBinding318,
    "@super:toStringShort": FlaxInstanceMethod.shared(
      flaxStringCall,
      _AnimationStyle_super_toStringShort,
    ),
    "@super:toString": FlaxInstanceMethod.plain(
      _flaxBinding309,
      flaxStringType,
      _AnimationStyle_super_toString,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod.plain(
      _flaxBinding312,
      _flaxBinding313,
      _AnimationStyle_super_toDiagnosticsNode,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod.shared(
      _flaxBinding20,
      _AnimationStyle_super_debugFillProperties,
    ),
    "@super:copyWith": FlaxInstanceMethod.plain(
      _flaxBinding316,
      _flaxBinding22,
      _AnimationStyle_super_copyWith,
    ),
    "@super:merge": FlaxInstanceMethod.shared(
      _flaxBinding23,
      _AnimationStyle_super_merge,
    ),
    "@super:get:curve": FlaxInstanceMethod.shared(
      _flaxBinding25,
      _AnimationStyle_super_get_curve,
    ),
    "@super:get:duration": FlaxInstanceMethod.shared(
      _flaxBinding16,
      _AnimationStyle_super_get_duration,
    ),
    "@super:get:reverseCurve": FlaxInstanceMethod.shared(
      _flaxBinding25,
      _AnimationStyle_super_get_reverseCurve,
    ),
    "@super:get:reverseDuration": FlaxInstanceMethod.shared(
      _flaxBinding16,
      _AnimationStyle_super_get_reverseDuration,
    ),
  },
  constructors: {"": _flaxBinding316, "@implementation": _flaxBinding316},
  create: _createAnimationStyle,
  matches: _isAnimationStyle,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding319,
    _flaxBinding321,
    _flaxBinding323,
    _flaxBinding324,
    _flaxBinding326,
    _flaxBinding327,
    _flaxBinding328,
    _flaxBinding224,
    _flaxBinding329,
    _flaxBinding225,
  ]),
);
const _flaxBinding331 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _AnimationWithParentMixin_status,
);
const _flaxBinding332 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AnimationWithParentMixin_addListener,
);
const _flaxBinding333 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _AnimationWithParentMixin_removeListener,
);
const _flaxBinding334 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AnimationWithParentMixin_addStatusListener,
);
const _flaxBinding335 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AnimationWithParentMixin_removeStatusListener,
);
const _flaxBinding336 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _CatmullRomCurve_flipped,
);
const _flaxBinding337 = FlaxGetter.plain(
  "controlPoints",
  _flaxBinding28,
  _CatmullRomCurve_controlPoints,
);
const _flaxBinding338 = FlaxGetter.plain(
  "tension",
  flaxDoubleType,
  _CatmullRomCurve_tension,
);
const _flaxBinding339 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _CatmullRomCurve_transform,
);
const _flaxBinding340 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _CatmullRomCurve_transformInternal,
);
const _flaxBinding341 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _CatmullRomCurve_toString,
);
const _flaxBinding342 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _FlaxProxyDispatch10_super_call_transform,
);
const _flaxBinding343 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _FlaxProxyDispatch11_super_call_transformInternal,
);
const _flaxBinding344 = FlaxInstanceMethod.shared(
  _flaxBinding30,
  _FlaxProxyDispatch11_super_get_flipped,
);
const _flaxBinding345 = <FlaxParameter>[
  FlaxParameter.required("controlPoints", _flaxBinding28),
  FlaxParameter("tension", flaxDoubleType, required: false, defaultValue: 0.0),
];
const _flaxBinding346 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding347 = FlaxProxyMember(
  "transformInternal",
  0,
  _flaxBinding26,
  hasSuper: true,
);
const _flaxBinding348 = FlaxProxyMember(
  "controlPoints",
  1,
  _flaxBinding29,
  hasSuper: true,
);
const _flaxBinding349 = FlaxProxyMember(
  "tension",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding350 = FlaxProxyMember(
  "flipped",
  1,
  _flaxBinding30,
  hasSuper: true,
);
const _flaxBinding351 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:CatmullRomCurve",
  [_flaxBinding336, _flaxBinding337, _flaxBinding338],
  {
    "transform": _flaxBinding339,
    "transformInternal": _flaxBinding340,
    "toString": _flaxBinding341,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:controlPoints": FlaxInstanceMethod.shared(
      _flaxBinding29,
      _CatmullRomCurve_super_get_controlPoints,
    ),
    "@super:get:tension": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _CatmullRomCurve_super_get_tension,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {
    "": _flaxBinding345,
    "precompute": _flaxBinding345,
    "@implementation": _flaxBinding345,
    "@implementation:precompute": _flaxBinding345,
  },
  create: _createCatmullRomCurve,
  matches: _isCatmullRomCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding348,
    _flaxBinding349,
    _flaxBinding350,
  ]),
);
const _flaxBinding352 = FlaxGetter.plain(
  "samplingSeed",
  flaxIntType,
  _Curve2D_samplingSeed,
);
const _flaxBinding353 = FlaxInstanceMethod.shared(
  _flaxBinding32,
  _Curve2D_transform,
);
const _flaxBinding354 = FlaxInstanceMethod.shared(
  _flaxBinding32,
  _Curve2D_transformInternal,
);
const _flaxBinding355 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Curve2D_toString,
);
const _flaxBinding356 = <FlaxParameter>[
  FlaxParameter("end", flaxDoubleType, required: false, defaultValue: 1.0),
  FlaxParameter("start", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter(
    "tolerance",
    flaxDoubleType,
    required: false,
    defaultValue: 1e-10,
  ),
];
const _flaxBinding357 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Curve2DSample",
);
const _flaxBinding358 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding357,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_animation#type:Curve2DSample]",
    _collection2Create,
    _collection2Matches,
    restore: _collection2Restore,
  ),
);
const _flaxBinding359 = FlaxInstanceMethod.plain(
  _flaxBinding356,
  _flaxBinding358,
  _Curve2D_generateSamples,
);
const _flaxBinding360 = FlaxInstanceMethod.shared(
  _flaxBinding31,
  _Curve2D_findInverse,
);
const _flaxBinding361 = FlaxInstanceMethod.shared(
  _flaxBinding32,
  _FlaxProxyDispatch12_super_call_transform,
);
const _flaxBinding362 = FlaxInstanceMethod.shared(
  _flaxBinding32,
  _FlaxProxyDispatch12_super_call_transformInternal,
);
const _flaxBinding363 = FlaxInstanceMethod.plain(
  _flaxBinding356,
  _flaxBinding358,
  _FlaxProxyDispatch12_super_call_generateSamples,
);
const _flaxBinding364 = FlaxInstanceMethod.shared(
  _flaxBinding31,
  _FlaxProxyDispatch12_super_call_findInverse,
);
const _flaxBinding365 = FlaxInstanceMethod.shared(
  flaxIntCall,
  _FlaxProxyDispatch12_super_get_samplingSeed,
);
const _flaxBinding366 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding32,
  hasSuper: true,
);
const _flaxBinding367 = FlaxProxyMember(
  "transformInternal",
  0,
  _flaxBinding32,
  hasSuper: true,
);
const _flaxBinding368 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "start",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "end",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "tolerance",
      flaxDoubleType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding358,
  id: "callback:<>(n:o:start:double:,n:o:end:double:,n:o:tolerance:double:)->iterable:[object:flax.core/sdk_animation#type:Curve2DSample]",
);
const _flaxBinding369 = FlaxProxyMember(
  "generateSamples",
  0,
  _flaxBinding368,
  hasSuper: true,
);
const _flaxBinding370 = FlaxProxyMember(
  "findInverse",
  0,
  _flaxBinding31,
  hasSuper: true,
);
const _flaxBinding371 = FlaxProxyMember(
  "samplingSeed",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding372 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Curve2D",
  [_flaxBinding352],
  {
    "transform": _flaxBinding353,
    "transformInternal": _flaxBinding354,
    "toString": _flaxBinding355,
    "generateSamples": _flaxBinding359,
    "findInverse": _flaxBinding360,
    "@super:transform": _flaxBinding361,
    "@super:transformInternal": _flaxBinding362,
    "@super:toString": _flaxBinding94,
    "@super:generateSamples": _flaxBinding363,
    "@super:findInverse": _flaxBinding364,
    "@super:get:samplingSeed": _flaxBinding365,
  },
  constructors: {"@implementation": _flaxBinding96},
  create: _createCurve2D,
  matches: _isCurve2D,
  setters: [],
  supertypes: [
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding366,
    _flaxBinding367,
    _flaxBinding109,
    _flaxBinding369,
    _flaxBinding370,
    _flaxBinding371,
  ]),
);
const _flaxBinding373 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
  nullable: true,
);
const _flaxBinding374 = <FlaxParameter>[
  FlaxParameter.required("controlPoints", _flaxBinding28),
  FlaxParameter("tension", flaxDoubleType, required: false, defaultValue: 0.0),
  FlaxParameter("startHandle", _flaxBinding373, required: false),
  FlaxParameter("endHandle", _flaxBinding373, required: false),
];
const _flaxBinding375 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:CatmullRomSpline",
  [],
  {
    "@super:generateSamples": _flaxBinding363,
    "@super:findInverse": _flaxBinding364,
    "@super:transform": _flaxBinding361,
    "@super:transformInternal": _flaxBinding362,
    "@super:toString": _flaxBinding94,
    "@super:get:samplingSeed": _flaxBinding365,
  },
  constructors: {
    "": _flaxBinding374,
    "precompute": _flaxBinding374,
    "@implementation": _flaxBinding374,
    "@implementation:precompute": _flaxBinding374,
  },
  create: _createCatmullRomSpline,
  matches: _isCatmullRomSpline,
  setters: [],
  supertypes: [
    "flax.core/sdk_animation#type:Curve2D",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  parent: _flaxBinding372,
  proxy: FlaxProxyBinding([
    _flaxBinding369,
    _flaxBinding370,
    _flaxBinding366,
    _flaxBinding367,
    _flaxBinding109,
    _flaxBinding371,
  ]),
);
const _flaxBinding376 = FlaxGetter.plain(
  "begin",
  _flaxBinding33,
  _ColorTween_begin,
);
const _flaxBinding377 = FlaxGetter.plain(
  "end",
  _flaxBinding33,
  _ColorTween_end,
);
const _flaxBinding378 = FlaxSetter(
  "begin",
  _flaxBinding33,
  _ColorTween_set_begin,
);
const _flaxBinding379 = FlaxSetter("end", _flaxBinding33, _ColorTween_set_end);
const _flaxBinding380 = FlaxInstanceMethod.shared(
  _flaxBinding34,
  _ColorTween_lerp,
);
const _flaxBinding381 = FlaxInstanceMethod.shared(
  _flaxBinding34,
  _ColorTween_transform,
);
const _flaxBinding382 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ColorTween_toString,
);
const _flaxBinding383 = FlaxInstanceMethod.shared(
  _flaxBinding35,
  _ColorTween_evaluate,
);
const _flaxBinding384 = FlaxInstanceMethod.shared(
  _flaxBinding37,
  _ColorTween_animate,
);
const _flaxBinding385 = FlaxInstanceMethod.shared(
  _flaxBinding40,
  _ColorTween_chain,
);
const _flaxBinding386 = <FlaxParameter>[
  FlaxParameter("begin", _flaxBinding33, required: false),
  FlaxParameter("end", _flaxBinding33, required: false),
];
const _flaxBinding387 = FlaxProxyMember(
  "lerp",
  0,
  _flaxBinding34,
  hasSuper: true,
);
const _flaxBinding388 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding34,
  hasSuper: true,
);
const _flaxBinding389 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding35,
  hasSuper: true,
);
const _flaxBinding390 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding37,
  hasSuper: true,
);
const _flaxBinding391 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding40,
  hasSuper: true,
);
const _flaxBinding392 = FlaxProxyMember(
  "begin",
  1,
  _flaxBinding41,
  hasSuper: true,
);
const _flaxBinding393 = FlaxProxyMember(
  "end",
  1,
  _flaxBinding41,
  hasSuper: true,
);
const _flaxBinding394 = FlaxProxyMember(
  "begin",
  2,
  _flaxBinding42,
  hasSuper: true,
);
const _flaxBinding395 = FlaxProxyMember(
  "end",
  2,
  _flaxBinding42,
  hasSuper: true,
);
const _flaxBinding396 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ColorTween",
  [_flaxBinding376, _flaxBinding377],
  {
    "lerp": _flaxBinding380,
    "transform": _flaxBinding381,
    "toString": _flaxBinding382,
    "evaluate": _flaxBinding383,
    "animate": _flaxBinding384,
    "chain": _flaxBinding385,
    "@super:lerp": FlaxInstanceMethod.shared(
      _flaxBinding34,
      _ColorTween_super_lerp,
    ),
    "@super:transform": FlaxInstanceMethod.shared(
      _flaxBinding34,
      _ColorTween_super_transform,
    ),
    "@super:toString": _flaxBinding94,
    "@super:evaluate": FlaxInstanceMethod.shared(
      _flaxBinding35,
      _ColorTween_super_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.shared(
      _flaxBinding37,
      _ColorTween_super_animate,
    ),
    "@super:chain": FlaxInstanceMethod.shared(
      _flaxBinding40,
      _ColorTween_super_chain,
    ),
    "@super:get:begin": FlaxInstanceMethod.shared(
      _flaxBinding41,
      _ColorTween_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.shared(
      _flaxBinding41,
      _ColorTween_super_get_end,
    ),
    "@super:set:begin": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding33)],
      flaxVoidType,
      _ColorTween_super_set_begin,
    ),
    "@super:set:end": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding33)],
      flaxVoidType,
      _ColorTween_super_set_end,
    ),
  },
  constructors: {"": _flaxBinding386, "@implementation": _flaxBinding386},
  create: _createColorTween,
  matches: _isColorTween,
  setters: [_flaxBinding378, _flaxBinding379],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding387,
    _flaxBinding388,
    _flaxBinding109,
    _flaxBinding389,
    _flaxBinding390,
    _flaxBinding391,
    _flaxBinding392,
    _flaxBinding393,
    _flaxBinding394,
    _flaxBinding395,
  ]),
);
const _flaxBinding397 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _CompoundAnimation_status,
);
const _flaxBinding398 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _CompoundAnimation_isDismissed,
);
const _flaxBinding399 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _CompoundAnimation_isCompleted,
);
const _flaxBinding400 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _CompoundAnimation_isAnimating,
);
const _flaxBinding401 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _CompoundAnimation_isForwardOrCompleted,
);
const _flaxBinding402 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _CompoundAnimation_addListener,
);
const _flaxBinding403 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _CompoundAnimation_removeListener,
);
const _flaxBinding404 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _CompoundAnimation_addStatusListener,
);
const _flaxBinding405 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _CompoundAnimation_removeStatusListener,
);
const _flaxBinding406 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _CompoundAnimation_toString,
);
const _flaxBinding407 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _CompoundAnimation_toStringDetails,
);
const _flaxBinding408 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _CompoundAnimation_didRegisterListener,
);
const _flaxBinding409 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _CompoundAnimation_didUnregisterListener,
);
const _flaxBinding410 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _CompoundAnimation_didStartListening,
);
const _flaxBinding411 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _CompoundAnimation_didStopListening,
);
const _flaxBinding412 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _CompoundAnimation_clearListeners,
);
const _flaxBinding413 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _CompoundAnimation_notifyListeners,
);
const _flaxBinding414 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _CompoundAnimation_clearStatusListeners,
);
const _flaxBinding415 = FlaxInstanceMethod.shared(
  _flaxBinding6,
  _CompoundAnimation_notifyStatusListeners,
);
const _flaxBinding416 = <FlaxParameter>[
  FlaxParameter.required("first", _flaxBinding108),
  FlaxParameter.required("next", _flaxBinding108),
];
const _flaxBinding417 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ConstantTween_toString,
);
const _flaxBinding418 = FlaxGetter.plain("t", flaxDoubleType, _Curve2DSample_t);
const _flaxBinding419 = FlaxGetter.plain(
  "value",
  flaxOffsetType,
  _Curve2DSample_value,
);
const _flaxBinding420 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Curve2DSample_toString,
);
const _flaxBinding421 = <FlaxParameter>[
  FlaxParameter.required("t", flaxDoubleType),
  FlaxParameter.required("value", flaxOffsetType),
];
const _flaxBinding422 = FlaxProxyMember("t", 1, flaxDoubleCall, hasSuper: true);
const _flaxBinding423 = FlaxProxyMember(
  "value",
  1,
  _flaxBinding43,
  hasSuper: true,
);
const _flaxBinding424 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Curve2DSample",
  [_flaxBinding418, _flaxBinding419],
  {
    "toString": _flaxBinding420,
    "@super:toString": _flaxBinding94,
    "@super:get:t": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _Curve2DSample_super_get_t,
    ),
    "@super:get:value": FlaxInstanceMethod.shared(
      _flaxBinding43,
      _Curve2DSample_super_get_value,
    ),
  },
  constructors: {"": _flaxBinding421, "@implementation": _flaxBinding421},
  create: _createCurve2DSample,
  matches: _isCurve2DSample,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding109, _flaxBinding422, _flaxBinding423]),
);
const _flaxBinding425 = FlaxGetter.plain(
  "curve",
  flaxCurveType,
  _CurveTween_curve,
);
const _flaxBinding426 = FlaxSetter(
  "curve",
  flaxCurveType,
  _CurveTween_set_curve,
);
const _flaxBinding427 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _CurveTween_transform,
);
const _flaxBinding428 = FlaxInstanceMethod.shared(
  _flaxBinding44,
  _CurveTween_evaluate,
);
const _flaxBinding429 = FlaxInstanceMethod.shared(
  _flaxBinding45,
  _CurveTween_animate,
);
const _flaxBinding430 = FlaxInstanceMethod.shared(
  _flaxBinding46,
  _CurveTween_chain,
);
const _flaxBinding431 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _CurveTween_toString,
);
const _flaxBinding432 = FlaxInstanceMethod.shared(
  _flaxBinding44,
  _FlaxProxyDispatch13_super_call_evaluate,
);
const _flaxBinding433 = FlaxInstanceMethod.shared(
  _flaxBinding45,
  _FlaxProxyDispatch13_super_call_animate,
);
const _flaxBinding434 = FlaxInstanceMethod.shared(
  _flaxBinding46,
  _FlaxProxyDispatch13_super_call_chain,
);
const _flaxBinding435 = <FlaxParameter>[
  FlaxParameter.required("curve", flaxCurveType),
];
const _flaxBinding436 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding44,
  hasSuper: true,
);
const _flaxBinding437 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding45,
  hasSuper: true,
);
const _flaxBinding438 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding46,
  hasSuper: true,
);
const _flaxBinding439 = FlaxProxyMember(
  "curve",
  1,
  _flaxBinding30,
  hasSuper: true,
);
const _flaxBinding440 = FlaxProxyMember(
  "curve",
  2,
  _flaxBinding47,
  hasSuper: true,
);
const _flaxBinding441 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:CurveTween",
  [_flaxBinding425],
  {
    "transform": _flaxBinding427,
    "evaluate": _flaxBinding428,
    "animate": _flaxBinding429,
    "chain": _flaxBinding430,
    "toString": _flaxBinding431,
    "@super:transform": _flaxBinding342,
    "@super:evaluate": _flaxBinding432,
    "@super:animate": _flaxBinding433,
    "@super:chain": _flaxBinding434,
    "@super:toString": _flaxBinding94,
    "@super:get:curve": FlaxInstanceMethod.shared(
      _flaxBinding30,
      _CurveTween_super_get_curve,
    ),
    "@super:set:curve": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxCurveType)],
      flaxVoidType,
      _CurveTween_super_set_curve,
    ),
  },
  constructors: {"": _flaxBinding435, "@implementation": _flaxBinding435},
  create: _createCurveTween,
  matches: _isCurveTween,
  setters: [_flaxBinding426],
  supertypes: ["flax.core/sdk_animation#type:Animatable", "dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding436,
    _flaxBinding437,
    _flaxBinding438,
    _flaxBinding109,
    _flaxBinding439,
    _flaxBinding440,
  ]),
);
const _flaxBinding442 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _CurvedAnimation_status,
);
const _flaxBinding443 = FlaxGetter.plain(
  "value",
  flaxDoubleType,
  _CurvedAnimation_value,
);
const _flaxBinding444 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _CurvedAnimation_isDismissed,
);
const _flaxBinding445 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _CurvedAnimation_isCompleted,
);
const _flaxBinding446 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _CurvedAnimation_isAnimating,
);
const _flaxBinding447 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _CurvedAnimation_isForwardOrCompleted,
);
const _flaxBinding448 = FlaxGetter.plain(
  "parent",
  _flaxBinding13,
  _CurvedAnimation_parent,
);
const _flaxBinding449 = FlaxGetter.plain(
  "curve",
  flaxCurveType,
  _CurvedAnimation_curve,
);
const _flaxBinding450 = FlaxGetter.plain(
  "reverseCurve",
  _flaxBinding24,
  _CurvedAnimation_reverseCurve,
);
const _flaxBinding451 = FlaxGetter.plain(
  "isDisposed",
  flaxBoolType,
  _CurvedAnimation_isDisposed,
);
const _flaxBinding452 = FlaxSetter(
  "curve",
  flaxCurveType,
  _CurvedAnimation_set_curve,
);
const _flaxBinding453 = FlaxSetter(
  "reverseCurve",
  _flaxBinding24,
  _CurvedAnimation_set_reverseCurve,
);
const _flaxBinding454 = FlaxSetter(
  "isDisposed",
  flaxBoolType,
  _CurvedAnimation_set_isDisposed,
);
const _flaxBinding455 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _CurvedAnimation_addListener,
);
const _flaxBinding456 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _CurvedAnimation_removeListener,
);
const _flaxBinding457 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _CurvedAnimation_addStatusListener,
);
const _flaxBinding458 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _CurvedAnimation_removeStatusListener,
);
const _flaxBinding459 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _CurvedAnimation_toString,
);
const _flaxBinding460 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _CurvedAnimation_toStringDetails,
);
const _flaxBinding461 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _CurvedAnimation_dispose,
);
const _flaxBinding462 = <FlaxParameter>[
  FlaxParameter.required("parent", _flaxBinding13),
  FlaxParameter.required("curve", flaxCurveType),
  FlaxParameter("reverseCurve", _flaxBinding24, required: false),
];
const _flaxBinding463 = FlaxProxyMember(
  "parent",
  1,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding464 = FlaxProxyMember(
  "isDisposed",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding465 = FlaxProxyMember(
  "reverseCurve",
  2,
  _flaxBinding48,
  hasSuper: true,
);
const _flaxBinding466 = FlaxProxyMember(
  "isDisposed",
  2,
  _flaxBinding49,
  hasSuper: true,
);
const _flaxBinding467 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:CurvedAnimation",
  [
    _flaxBinding442,
    _flaxBinding443,
    _flaxBinding444,
    _flaxBinding445,
    _flaxBinding446,
    _flaxBinding447,
    _flaxBinding448,
    _flaxBinding449,
    _flaxBinding450,
    _flaxBinding451,
  ],
  {
    "addListener": _flaxBinding455,
    "removeListener": _flaxBinding456,
    "addStatusListener": _flaxBinding457,
    "removeStatusListener": _flaxBinding458,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _CurvedAnimation_drive,
      genericFactory: _flaxGeneric_CurvedAnimation_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding459,
    "toStringDetails": _flaxBinding460,
    "dispose": _flaxBinding461,
    "@super:addListener": _flaxBinding90,
    "@super:removeListener": _flaxBinding91,
    "@super:addStatusListener": _flaxBinding92,
    "@super:removeStatusListener": _flaxBinding93,
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _CurvedAnimation_super_drive,
      genericFactory: _flaxGeneric_CurvedAnimation_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": _flaxBinding94,
    "@super:toStringDetails": _flaxBinding95,
    "@super:dispose": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _CurvedAnimation_super_dispose,
    ),
    "@super:get:parent": FlaxInstanceMethod.shared(
      _flaxBinding14,
      _CurvedAnimation_super_get_parent,
    ),
    "@super:get:curve": FlaxInstanceMethod.shared(
      _flaxBinding30,
      _CurvedAnimation_super_get_curve,
    ),
    "@super:get:reverseCurve": FlaxInstanceMethod.shared(
      _flaxBinding25,
      _CurvedAnimation_super_get_reverseCurve,
    ),
    "@super:get:isDisposed": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _CurvedAnimation_super_get_isDisposed,
    ),
    "@super:get:value": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _CurvedAnimation_super_get_value,
    ),
    "@super:get:status": _flaxBinding97,
    "@super:get:isDismissed": _flaxBinding98,
    "@super:get:isCompleted": _flaxBinding99,
    "@super:get:isAnimating": _flaxBinding100,
    "@super:get:isForwardOrCompleted": _flaxBinding101,
    "@super:set:curve": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxCurveType)],
      flaxVoidType,
      _CurvedAnimation_super_set_curve,
    ),
    "@super:set:reverseCurve": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding24)],
      flaxVoidType,
      _CurvedAnimation_super_set_reverseCurve,
    ),
    "@super:set:isDisposed": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _CurvedAnimation_super_set_isDisposed,
    ),
  },
  constructors: {"": _flaxBinding462, "@implementation": _flaxBinding462},
  create: _createCurvedAnimation,
  matches: _isCurvedAnimation,
  setters: [_flaxBinding452, _flaxBinding453, _flaxBinding454],
  supertypes: [
    "flax.core/sdk_animation#type:Animation",
    "flax.core/flutter#type:Listenable",
    "dart:core::Object",
    "flax.core/flutter#type:ValueListenable",
    "flax.core/sdk_animation#type:AnimationWithParentMixin",
  ],
  disposeMethod: "dispose",
  listenerPairs: {"addListener": "removeListener"},
  proxy: FlaxProxyBinding([
    _flaxBinding103,
    _flaxBinding104,
    _flaxBinding105,
    _flaxBinding106,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [FlaxCallbackParameter.plain("child", _flaxBinding107)],
        _flaxBinding108,
        _callback7,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback7Invoke,
        matches: _callback7Matches,
        genericFactory: _callback7Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding197,
    _flaxBinding463,
    _flaxBinding439,
    _flaxBinding329,
    _flaxBinding464,
    _flaxBinding226,
    _flaxBinding111,
    _flaxBinding112,
    _flaxBinding113,
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding440,
    _flaxBinding465,
    _flaxBinding466,
  ]),
);
const _flaxBinding468 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _ElasticInCurve_flipped,
);
const _flaxBinding469 = FlaxGetter.plain(
  "period",
  flaxDoubleType,
  _ElasticInCurve_period,
);
const _flaxBinding470 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _ElasticInCurve_transform,
);
const _flaxBinding471 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _ElasticInCurve_transformInternal,
);
const _flaxBinding472 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ElasticInCurve_toString,
);
const _flaxBinding473 = <FlaxParameter>[
  FlaxParameter("period", flaxDoubleType, required: false, defaultValue: 0.4),
];
const _flaxBinding474 = FlaxProxyMember(
  "period",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding475 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ElasticInCurve",
  [_flaxBinding468, _flaxBinding469],
  {
    "transform": _flaxBinding470,
    "transformInternal": _flaxBinding471,
    "toString": _flaxBinding472,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:period": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _ElasticInCurve_super_get_period,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {"": _flaxBinding473, "@implementation": _flaxBinding473},
  create: _createElasticInCurve,
  matches: _isElasticInCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding474,
    _flaxBinding350,
  ]),
);
const _flaxBinding476 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _ElasticInOutCurve_flipped,
);
const _flaxBinding477 = FlaxGetter.plain(
  "period",
  flaxDoubleType,
  _ElasticInOutCurve_period,
);
const _flaxBinding478 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _ElasticInOutCurve_transform,
);
const _flaxBinding479 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _ElasticInOutCurve_transformInternal,
);
const _flaxBinding480 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ElasticInOutCurve_toString,
);
const _flaxBinding481 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ElasticInOutCurve",
  [_flaxBinding476, _flaxBinding477],
  {
    "transform": _flaxBinding478,
    "transformInternal": _flaxBinding479,
    "toString": _flaxBinding480,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:period": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _ElasticInOutCurve_super_get_period,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {"": _flaxBinding473, "@implementation": _flaxBinding473},
  create: _createElasticInOutCurve,
  matches: _isElasticInOutCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding474,
    _flaxBinding350,
  ]),
);
const _flaxBinding482 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _ElasticOutCurve_flipped,
);
const _flaxBinding483 = FlaxGetter.plain(
  "period",
  flaxDoubleType,
  _ElasticOutCurve_period,
);
const _flaxBinding484 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _ElasticOutCurve_transform,
);
const _flaxBinding485 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _ElasticOutCurve_transformInternal,
);
const _flaxBinding486 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ElasticOutCurve_toString,
);
const _flaxBinding487 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ElasticOutCurve",
  [_flaxBinding482, _flaxBinding483],
  {
    "transform": _flaxBinding484,
    "transformInternal": _flaxBinding485,
    "toString": _flaxBinding486,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:period": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _ElasticOutCurve_super_get_period,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {"": _flaxBinding473, "@implementation": _flaxBinding473},
  create: _createElasticOutCurve,
  matches: _isElasticOutCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding474,
    _flaxBinding350,
  ]),
);
const _flaxBinding488 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _FlippedCurve_flipped,
);
const _flaxBinding489 = FlaxGetter.plain(
  "curve",
  flaxCurveType,
  _FlippedCurve_curve,
);
const _flaxBinding490 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _FlippedCurve_transform,
);
const _flaxBinding491 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _FlippedCurve_transformInternal,
);
const _flaxBinding492 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlippedCurve_toString,
);
const _flaxBinding493 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:FlippedCurve",
  [_flaxBinding488, _flaxBinding489],
  {
    "transform": _flaxBinding490,
    "transformInternal": _flaxBinding491,
    "toString": _flaxBinding492,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:curve": FlaxInstanceMethod.shared(
      _flaxBinding30,
      _FlippedCurve_super_get_curve,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {"": _flaxBinding435, "@implementation": _flaxBinding435},
  create: _createFlippedCurve,
  matches: _isFlippedCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding439,
    _flaxBinding350,
  ]),
);
const _flaxBinding494 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _FlippedTweenSequence_transform,
);
const _flaxBinding495 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlippedTweenSequence_toString,
);
const _flaxBinding496 = FlaxInstanceMethod.shared(
  _flaxBinding44,
  _FlippedTweenSequence_evaluate,
);
const _flaxBinding497 = FlaxInstanceMethod.shared(
  _flaxBinding45,
  _FlippedTweenSequence_animate,
);
const _flaxBinding498 = FlaxInstanceMethod.shared(
  _flaxBinding46,
  _FlippedTweenSequence_chain,
);
const _flaxBinding499 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:TweenSequenceItem",
  dartType: FlaxDartTypes.typeOf<api.TweenSequenceItem<double>>,
);
const _flaxBinding500 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding499,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_animation#type:TweenSequenceItem<double:>]",
    _collection4Create,
    _collection4Matches,
    restore: _collection4Restore,
  ),
);
const _flaxBinding501 = FlaxTypeRef(
  "list",
  item: _flaxBinding499,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_animation#type:TweenSequenceItem<double:>]",
    _collection3Create,
    _collection3Matches,
  ),
  iterable: _flaxBinding500,
);
const _flaxBinding502 = <FlaxParameter>[
  FlaxParameter.required("items", _flaxBinding501),
];
const _flaxBinding503 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:FlippedTweenSequence",
  [],
  {
    "transform": _flaxBinding494,
    "toString": _flaxBinding495,
    "evaluate": _flaxBinding496,
    "animate": _flaxBinding497,
    "chain": _flaxBinding498,
    "@super:transform": _flaxBinding342,
    "@super:toString": _flaxBinding94,
    "@super:evaluate": _flaxBinding432,
    "@super:animate": _flaxBinding433,
    "@super:chain": _flaxBinding434,
  },
  constructors: {"": _flaxBinding502, "@implementation": _flaxBinding502},
  create: _createFlippedTweenSequence,
  matches: _isFlippedTweenSequence,
  setters: [],
  supertypes: [
    "flax.core/sdk_animation#type:TweenSequence",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding109,
    _flaxBinding436,
    _flaxBinding437,
    _flaxBinding438,
  ]),
);
const _flaxBinding504 = FlaxGetter.plain(
  "begin",
  flaxNullableIntType,
  _IntTween_begin,
);
const _flaxBinding505 = FlaxGetter.plain(
  "end",
  flaxNullableIntType,
  _IntTween_end,
);
const _flaxBinding506 = FlaxSetter(
  "begin",
  flaxNullableIntType,
  _IntTween_set_begin,
);
const _flaxBinding507 = FlaxSetter(
  "end",
  flaxNullableIntType,
  _IntTween_set_end,
);
const _flaxBinding508 = FlaxInstanceMethod.shared(
  _flaxBinding50,
  _IntTween_lerp,
);
const _flaxBinding509 = FlaxInstanceMethod.shared(
  _flaxBinding50,
  _IntTween_transform,
);
const _flaxBinding510 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _IntTween_toString,
);
const _flaxBinding511 = FlaxInstanceMethod.shared(
  _flaxBinding51,
  _IntTween_evaluate,
);
const _flaxBinding512 = FlaxInstanceMethod.shared(
  _flaxBinding53,
  _IntTween_animate,
);
const _flaxBinding513 = FlaxInstanceMethod.shared(
  _flaxBinding55,
  _IntTween_chain,
);
const _flaxBinding514 = FlaxInstanceMethod.shared(
  _flaxBinding50,
  _FlaxProxyDispatch18_super_call_lerp,
);
const _flaxBinding515 = FlaxInstanceMethod.shared(
  _flaxBinding50,
  _FlaxProxyDispatch18_super_call_transform,
);
const _flaxBinding516 = FlaxInstanceMethod.shared(
  _flaxBinding51,
  _FlaxProxyDispatch18_super_call_evaluate,
);
const _flaxBinding517 = FlaxInstanceMethod.shared(
  _flaxBinding53,
  _FlaxProxyDispatch18_super_call_animate,
);
const _flaxBinding518 = FlaxInstanceMethod.shared(
  _flaxBinding55,
  _FlaxProxyDispatch18_super_call_chain,
);
const _flaxBinding519 = FlaxInstanceMethod.shared(
  flaxNullableIntCall,
  _FlaxProxyDispatch18_super_get_begin,
);
const _flaxBinding520 = FlaxInstanceMethod.shared(
  flaxNullableIntCall,
  _FlaxProxyDispatch18_super_get_end,
);
const _flaxBinding521 = FlaxInstanceMethod.plain(
  [FlaxParameter.required("value", flaxNullableIntType)],
  flaxVoidType,
  _FlaxProxyDispatch18_super_set_begin,
);
const _flaxBinding522 = FlaxInstanceMethod.plain(
  [FlaxParameter.required("value", flaxNullableIntType)],
  flaxVoidType,
  _FlaxProxyDispatch18_super_set_end,
);
const _flaxBinding523 = <FlaxParameter>[
  FlaxParameter("begin", flaxNullableIntType, required: false),
  FlaxParameter("end", flaxNullableIntType, required: false),
];
const _flaxBinding524 = FlaxProxyMember(
  "lerp",
  0,
  _flaxBinding50,
  hasSuper: true,
);
const _flaxBinding525 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding50,
  hasSuper: true,
);
const _flaxBinding526 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding51,
  hasSuper: true,
);
const _flaxBinding527 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding53,
  hasSuper: true,
);
const _flaxBinding528 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding55,
  hasSuper: true,
);
const _flaxBinding529 = FlaxProxyMember(
  "begin",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding530 = FlaxProxyMember(
  "end",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding531 = FlaxProxyMember(
  "begin",
  2,
  _flaxBinding56,
  hasSuper: true,
);
const _flaxBinding532 = FlaxProxyMember(
  "end",
  2,
  _flaxBinding56,
  hasSuper: true,
);
const _flaxBinding533 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:IntTween",
  [_flaxBinding504, _flaxBinding505],
  {
    "lerp": _flaxBinding508,
    "transform": _flaxBinding509,
    "toString": _flaxBinding510,
    "evaluate": _flaxBinding511,
    "animate": _flaxBinding512,
    "chain": _flaxBinding513,
    "@super:lerp": _flaxBinding514,
    "@super:transform": _flaxBinding515,
    "@super:toString": _flaxBinding94,
    "@super:evaluate": _flaxBinding516,
    "@super:animate": _flaxBinding517,
    "@super:chain": _flaxBinding518,
    "@super:get:begin": _flaxBinding519,
    "@super:get:end": _flaxBinding520,
    "@super:set:begin": _flaxBinding521,
    "@super:set:end": _flaxBinding522,
  },
  constructors: {"": _flaxBinding523, "@implementation": _flaxBinding523},
  create: _createIntTween,
  matches: _isIntTween,
  setters: [_flaxBinding506, _flaxBinding507],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding524,
    _flaxBinding525,
    _flaxBinding109,
    _flaxBinding526,
    _flaxBinding527,
    _flaxBinding528,
    _flaxBinding529,
    _flaxBinding530,
    _flaxBinding531,
    _flaxBinding532,
  ]),
);
const _flaxBinding534 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _Interval_flipped,
);
const _flaxBinding535 = FlaxGetter.plain(
  "begin",
  flaxDoubleType,
  _Interval_begin,
);
const _flaxBinding536 = FlaxGetter.plain("end", flaxDoubleType, _Interval_end);
const _flaxBinding537 = FlaxGetter.plain(
  "curve",
  flaxCurveType,
  _Interval_curve,
);
const _flaxBinding538 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _Interval_transform,
);
const _flaxBinding539 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _Interval_transformInternal,
);
const _flaxBinding540 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Interval_toString,
);
const _flaxBinding541 = <FlaxParameter>[
  FlaxParameter.required("begin", flaxDoubleType),
  FlaxParameter.required("end", flaxDoubleType),
  FlaxParameter("curve", flaxCurveType, required: false, omitWhenAbsent: true),
];
const _flaxBinding542 = FlaxProxyMember(
  "begin",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding543 = FlaxProxyMember(
  "end",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding544 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Interval",
  [_flaxBinding534, _flaxBinding535, _flaxBinding536, _flaxBinding537],
  {
    "transform": _flaxBinding538,
    "transformInternal": _flaxBinding539,
    "toString": _flaxBinding540,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:begin": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _Interval_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _Interval_super_get_end,
    ),
    "@super:get:curve": FlaxInstanceMethod.shared(
      _flaxBinding30,
      _Interval_super_get_curve,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {"": _flaxBinding541, "@implementation": _flaxBinding541},
  create: _createInterval,
  matches: _isInterval,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding542,
    _flaxBinding543,
    _flaxBinding439,
    _flaxBinding350,
  ]),
);
const _flaxBinding545 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ParametricCurve_toString,
);
const _flaxBinding546 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _ProxyAnimation_status,
);
const _flaxBinding547 = FlaxGetter.plain(
  "value",
  flaxDoubleType,
  _ProxyAnimation_value,
);
const _flaxBinding548 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _ProxyAnimation_isDismissed,
);
const _flaxBinding549 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _ProxyAnimation_isCompleted,
);
const _flaxBinding550 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _ProxyAnimation_isAnimating,
);
const _flaxBinding551 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _ProxyAnimation_isForwardOrCompleted,
);
const _flaxBinding552 = FlaxGetter.plain(
  "parent",
  _flaxBinding57,
  _ProxyAnimation_parent,
);
const _flaxBinding553 = FlaxSetter(
  "parent",
  _flaxBinding57,
  _ProxyAnimation_set_parent,
);
const _flaxBinding554 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ProxyAnimation_toString,
);
const _flaxBinding555 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ProxyAnimation_toStringDetails,
);
const _flaxBinding556 = <FlaxParameter>[
  FlaxParameter("animation", _flaxBinding57, required: false),
];
const _flaxBinding557 = FlaxProxyMember(
  "parent",
  1,
  _flaxBinding58,
  hasSuper: true,
);
const _flaxBinding558 = FlaxProxyMember(
  "parent",
  2,
  _flaxBinding59,
  hasSuper: true,
);
const _flaxBinding559 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ProxyAnimation",
  [
    _flaxBinding546,
    _flaxBinding547,
    _flaxBinding548,
    _flaxBinding549,
    _flaxBinding550,
    _flaxBinding551,
    _flaxBinding234,
    _flaxBinding552,
  ],
  {
    "addListener": _flaxBinding161,
    "removeListener": _flaxBinding162,
    "addStatusListener": _flaxBinding163,
    "removeStatusListener": _flaxBinding164,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _ProxyAnimation_drive,
      genericFactory: _flaxGeneric_ProxyAnimation_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding554,
    "toStringDetails": _flaxBinding555,
    "didRegisterListener": _flaxBinding235,
    "didUnregisterListener": _flaxBinding236,
    "didStartListening": _flaxBinding237,
    "didStopListening": _flaxBinding238,
    "clearListeners": _flaxBinding170,
    "notifyListeners": _flaxBinding171,
    "clearStatusListeners": _flaxBinding172,
    "notifyStatusListeners": _flaxBinding173,
    "@super:addListener": _flaxBinding90,
    "@super:removeListener": _flaxBinding91,
    "@super:addStatusListener": _flaxBinding92,
    "@super:removeStatusListener": _flaxBinding93,
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _ProxyAnimation_super_drive,
      genericFactory: _flaxGeneric_ProxyAnimation_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": _flaxBinding94,
    "@super:toStringDetails": _flaxBinding95,
    "@super:didRegisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ProxyAnimation_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ProxyAnimation_super_didUnregisterListener,
    ),
    "@super:didStartListening": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ProxyAnimation_super_didStartListening,
    ),
    "@super:didStopListening": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ProxyAnimation_super_didStopListening,
    ),
    "@super:clearListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ProxyAnimation_super_clearListeners,
    ),
    "@super:notifyListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ProxyAnimation_super_notifyListeners,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ProxyAnimation_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.shared(
      _flaxBinding6,
      _ProxyAnimation_super_notifyStatusListeners,
    ),
    "@super:get:parent": FlaxInstanceMethod.shared(
      _flaxBinding58,
      _ProxyAnimation_super_get_parent,
    ),
    "@super:get:status": _flaxBinding97,
    "@super:get:value": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _ProxyAnimation_super_get_value,
    ),
    "@super:get:isDismissed": _flaxBinding98,
    "@super:get:isCompleted": _flaxBinding99,
    "@super:get:isAnimating": _flaxBinding100,
    "@super:get:isForwardOrCompleted": _flaxBinding101,
    "@super:get:isListening": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _ProxyAnimation_super_get_isListening,
    ),
    "@super:set:parent": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding57)],
      flaxVoidType,
      _ProxyAnimation_super_set_parent,
    ),
  },
  constructors: {"": _flaxBinding556, "@implementation": _flaxBinding556},
  create: _createProxyAnimation,
  matches: _isProxyAnimation,
  setters: [_flaxBinding553],
  supertypes: [
    "flax.core/sdk_animation#type:Animation",
    "flax.core/flutter#type:Listenable",
    "dart:core::Object",
    "flax.core/flutter#type:ValueListenable",
    "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
    "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
    "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
  ],
  listenerPairs: {"addListener": "removeListener"},
  proxy: FlaxProxyBinding([
    _flaxBinding103,
    _flaxBinding104,
    _flaxBinding105,
    _flaxBinding106,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [FlaxCallbackParameter.plain("child", _flaxBinding107)],
        _flaxBinding108,
        _callback8,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback8Invoke,
        matches: _callback8Matches,
        genericFactory: _callback8Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding195,
    _flaxBinding196,
    _flaxBinding267,
    _flaxBinding268,
    _flaxBinding198,
    _flaxBinding199,
    _flaxBinding200,
    _flaxBinding201,
    _flaxBinding557,
    _flaxBinding111,
    _flaxBinding226,
    _flaxBinding112,
    _flaxBinding113,
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding269,
    _flaxBinding558,
  ]),
);
const _flaxBinding560 = FlaxGetter.plain(
  "begin",
  _flaxBinding60,
  _RectTween_begin,
);
const _flaxBinding561 = FlaxGetter.plain("end", _flaxBinding60, _RectTween_end);
const _flaxBinding562 = FlaxSetter(
  "begin",
  _flaxBinding60,
  _RectTween_set_begin,
);
const _flaxBinding563 = FlaxSetter("end", _flaxBinding60, _RectTween_set_end);
const _flaxBinding564 = FlaxInstanceMethod.shared(
  _flaxBinding61,
  _RectTween_lerp,
);
const _flaxBinding565 = FlaxInstanceMethod.shared(
  _flaxBinding61,
  _RectTween_transform,
);
const _flaxBinding566 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _RectTween_toString,
);
const _flaxBinding567 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _RectTween_evaluate,
);
const _flaxBinding568 = FlaxInstanceMethod.shared(
  _flaxBinding64,
  _RectTween_animate,
);
const _flaxBinding569 = FlaxInstanceMethod.shared(
  _flaxBinding66,
  _RectTween_chain,
);
const _flaxBinding570 = <FlaxParameter>[
  FlaxParameter("begin", _flaxBinding60, required: false),
  FlaxParameter("end", _flaxBinding60, required: false),
];
const _flaxBinding571 = FlaxProxyMember(
  "lerp",
  0,
  _flaxBinding61,
  hasSuper: true,
);
const _flaxBinding572 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding61,
  hasSuper: true,
);
const _flaxBinding573 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding574 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding64,
  hasSuper: true,
);
const _flaxBinding575 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding66,
  hasSuper: true,
);
const _flaxBinding576 = FlaxProxyMember(
  "begin",
  1,
  _flaxBinding67,
  hasSuper: true,
);
const _flaxBinding577 = FlaxProxyMember(
  "end",
  1,
  _flaxBinding67,
  hasSuper: true,
);
const _flaxBinding578 = FlaxProxyMember(
  "begin",
  2,
  _flaxBinding68,
  hasSuper: true,
);
const _flaxBinding579 = FlaxProxyMember(
  "end",
  2,
  _flaxBinding68,
  hasSuper: true,
);
const _flaxBinding580 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:RectTween",
  [_flaxBinding560, _flaxBinding561],
  {
    "lerp": _flaxBinding564,
    "transform": _flaxBinding565,
    "toString": _flaxBinding566,
    "evaluate": _flaxBinding567,
    "animate": _flaxBinding568,
    "chain": _flaxBinding569,
    "@super:lerp": FlaxInstanceMethod.shared(
      _flaxBinding61,
      _RectTween_super_lerp,
    ),
    "@super:transform": FlaxInstanceMethod.shared(
      _flaxBinding61,
      _RectTween_super_transform,
    ),
    "@super:toString": _flaxBinding94,
    "@super:evaluate": FlaxInstanceMethod.shared(
      _flaxBinding62,
      _RectTween_super_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.shared(
      _flaxBinding64,
      _RectTween_super_animate,
    ),
    "@super:chain": FlaxInstanceMethod.shared(
      _flaxBinding66,
      _RectTween_super_chain,
    ),
    "@super:get:begin": FlaxInstanceMethod.shared(
      _flaxBinding67,
      _RectTween_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.shared(
      _flaxBinding67,
      _RectTween_super_get_end,
    ),
    "@super:set:begin": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding60)],
      flaxVoidType,
      _RectTween_super_set_begin,
    ),
    "@super:set:end": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding60)],
      flaxVoidType,
      _RectTween_super_set_end,
    ),
  },
  constructors: {"": _flaxBinding570, "@implementation": _flaxBinding570},
  create: _createRectTween,
  matches: _isRectTween,
  setters: [_flaxBinding562, _flaxBinding563],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding571,
    _flaxBinding572,
    _flaxBinding109,
    _flaxBinding573,
    _flaxBinding574,
    _flaxBinding575,
    _flaxBinding576,
    _flaxBinding577,
    _flaxBinding578,
    _flaxBinding579,
  ]),
);
const _flaxBinding581 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _ReverseAnimation_status,
);
const _flaxBinding582 = FlaxGetter.plain(
  "value",
  flaxDoubleType,
  _ReverseAnimation_value,
);
const _flaxBinding583 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _ReverseAnimation_isDismissed,
);
const _flaxBinding584 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _ReverseAnimation_isCompleted,
);
const _flaxBinding585 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _ReverseAnimation_isAnimating,
);
const _flaxBinding586 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _ReverseAnimation_isForwardOrCompleted,
);
const _flaxBinding587 = FlaxGetter.plain(
  "parent",
  _flaxBinding13,
  _ReverseAnimation_parent,
);
const _flaxBinding588 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _ReverseAnimation_addListener,
);
const _flaxBinding589 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _ReverseAnimation_removeListener,
);
const _flaxBinding590 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ReverseAnimation_toString,
);
const _flaxBinding591 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ReverseAnimation_toStringDetails,
);
const _flaxBinding592 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ReverseAnimation",
  [
    _flaxBinding581,
    _flaxBinding582,
    _flaxBinding583,
    _flaxBinding584,
    _flaxBinding585,
    _flaxBinding586,
    _flaxBinding234,
    _flaxBinding587,
  ],
  {
    "addListener": _flaxBinding588,
    "removeListener": _flaxBinding589,
    "addStatusListener": _flaxBinding163,
    "removeStatusListener": _flaxBinding164,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _ReverseAnimation_drive,
      genericFactory: _flaxGeneric_ReverseAnimation_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding590,
    "toStringDetails": _flaxBinding591,
    "didRegisterListener": _flaxBinding235,
    "didUnregisterListener": _flaxBinding236,
    "didStartListening": _flaxBinding237,
    "didStopListening": _flaxBinding238,
    "clearStatusListeners": _flaxBinding172,
    "notifyStatusListeners": _flaxBinding173,
    "@super:addListener": _flaxBinding90,
    "@super:removeListener": _flaxBinding91,
    "@super:addStatusListener": _flaxBinding92,
    "@super:removeStatusListener": _flaxBinding93,
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _ReverseAnimation_super_drive,
      genericFactory: _flaxGeneric_ReverseAnimation_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": _flaxBinding94,
    "@super:toStringDetails": _flaxBinding95,
    "@super:didRegisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ReverseAnimation_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ReverseAnimation_super_didUnregisterListener,
    ),
    "@super:didStartListening": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ReverseAnimation_super_didStartListening,
    ),
    "@super:didStopListening": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ReverseAnimation_super_didStopListening,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _ReverseAnimation_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.shared(
      _flaxBinding6,
      _ReverseAnimation_super_notifyStatusListeners,
    ),
    "@super:get:parent": FlaxInstanceMethod.shared(
      _flaxBinding14,
      _ReverseAnimation_super_get_parent,
    ),
    "@super:get:status": _flaxBinding97,
    "@super:get:value": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _ReverseAnimation_super_get_value,
    ),
    "@super:get:isDismissed": _flaxBinding98,
    "@super:get:isCompleted": _flaxBinding99,
    "@super:get:isAnimating": _flaxBinding100,
    "@super:get:isForwardOrCompleted": _flaxBinding101,
    "@super:get:isListening": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _ReverseAnimation_super_get_isListening,
    ),
  },
  constructors: {"": _flaxBinding118, "@implementation": _flaxBinding118},
  create: _createReverseAnimation,
  matches: _isReverseAnimation,
  setters: [],
  supertypes: [
    "flax.core/sdk_animation#type:Animation",
    "flax.core/flutter#type:Listenable",
    "dart:core::Object",
    "flax.core/flutter#type:ValueListenable",
    "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
    "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
  ],
  listenerPairs: {"addListener": "removeListener"},
  proxy: FlaxProxyBinding([
    _flaxBinding103,
    _flaxBinding104,
    _flaxBinding105,
    _flaxBinding106,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [FlaxCallbackParameter.plain("child", _flaxBinding107)],
        _flaxBinding108,
        _callback9,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback9Invoke,
        matches: _callback9Matches,
        genericFactory: _callback9Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding195,
    _flaxBinding196,
    _flaxBinding267,
    _flaxBinding268,
    _flaxBinding200,
    _flaxBinding201,
    _flaxBinding463,
    _flaxBinding111,
    _flaxBinding226,
    _flaxBinding112,
    _flaxBinding113,
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding269,
  ]),
);
const _flaxBinding593 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ReverseTween_toString,
);
const _flaxBinding594 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Tween",
  dartType: FlaxDartTypes.typeOf<api.Tween<Object?>>,
);
const _flaxBinding595 = <FlaxParameter>[
  FlaxParameter.required("parent", _flaxBinding594),
];
const _flaxBinding596 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _SawTooth_flipped,
);
const _flaxBinding597 = FlaxGetter.plain("count", flaxIntType, _SawTooth_count);
const _flaxBinding598 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _SawTooth_transform,
);
const _flaxBinding599 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _SawTooth_transformInternal,
);
const _flaxBinding600 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SawTooth_toString,
);
const _flaxBinding601 = <FlaxParameter>[
  FlaxParameter.required("count", flaxIntType),
];
const _flaxBinding602 = FlaxProxyMember(
  "count",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding603 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:SawTooth",
  [_flaxBinding596, _flaxBinding597],
  {
    "transform": _flaxBinding598,
    "transformInternal": _flaxBinding599,
    "toString": _flaxBinding600,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:count": FlaxInstanceMethod.shared(
      flaxIntCall,
      _SawTooth_super_get_count,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {"": _flaxBinding601, "@implementation": _flaxBinding601},
  create: _createSawTooth,
  matches: _isSawTooth,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding602,
    _flaxBinding350,
  ]),
);
const _flaxBinding604 = FlaxGetter.plain(
  "begin",
  flaxNullableSizeType,
  _SizeTween_begin,
);
const _flaxBinding605 = FlaxGetter.plain(
  "end",
  flaxNullableSizeType,
  _SizeTween_end,
);
const _flaxBinding606 = FlaxSetter(
  "begin",
  flaxNullableSizeType,
  _SizeTween_set_begin,
);
const _flaxBinding607 = FlaxSetter(
  "end",
  flaxNullableSizeType,
  _SizeTween_set_end,
);
const _flaxBinding608 = FlaxInstanceMethod.shared(
  _flaxBinding69,
  _SizeTween_lerp,
);
const _flaxBinding609 = FlaxInstanceMethod.shared(
  _flaxBinding69,
  _SizeTween_transform,
);
const _flaxBinding610 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _SizeTween_toString,
);
const _flaxBinding611 = FlaxInstanceMethod.shared(
  _flaxBinding70,
  _SizeTween_evaluate,
);
const _flaxBinding612 = FlaxInstanceMethod.shared(
  _flaxBinding72,
  _SizeTween_animate,
);
const _flaxBinding613 = FlaxInstanceMethod.shared(
  _flaxBinding74,
  _SizeTween_chain,
);
const _flaxBinding614 = <FlaxParameter>[
  FlaxParameter("begin", flaxNullableSizeType, required: false),
  FlaxParameter("end", flaxNullableSizeType, required: false),
];
const _flaxBinding615 = FlaxProxyMember(
  "lerp",
  0,
  _flaxBinding69,
  hasSuper: true,
);
const _flaxBinding616 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding69,
  hasSuper: true,
);
const _flaxBinding617 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding70,
  hasSuper: true,
);
const _flaxBinding618 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding72,
  hasSuper: true,
);
const _flaxBinding619 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding74,
  hasSuper: true,
);
const _flaxBinding620 = FlaxProxyMember(
  "begin",
  1,
  _flaxBinding75,
  hasSuper: true,
);
const _flaxBinding621 = FlaxProxyMember(
  "end",
  1,
  _flaxBinding75,
  hasSuper: true,
);
const _flaxBinding622 = FlaxProxyMember(
  "begin",
  2,
  _flaxBinding76,
  hasSuper: true,
);
const _flaxBinding623 = FlaxProxyMember(
  "end",
  2,
  _flaxBinding76,
  hasSuper: true,
);
const _flaxBinding624 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:SizeTween",
  [_flaxBinding604, _flaxBinding605],
  {
    "lerp": _flaxBinding608,
    "transform": _flaxBinding609,
    "toString": _flaxBinding610,
    "evaluate": _flaxBinding611,
    "animate": _flaxBinding612,
    "chain": _flaxBinding613,
    "@super:lerp": FlaxInstanceMethod.shared(
      _flaxBinding69,
      _SizeTween_super_lerp,
    ),
    "@super:transform": FlaxInstanceMethod.shared(
      _flaxBinding69,
      _SizeTween_super_transform,
    ),
    "@super:toString": _flaxBinding94,
    "@super:evaluate": FlaxInstanceMethod.shared(
      _flaxBinding70,
      _SizeTween_super_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.shared(
      _flaxBinding72,
      _SizeTween_super_animate,
    ),
    "@super:chain": FlaxInstanceMethod.shared(
      _flaxBinding74,
      _SizeTween_super_chain,
    ),
    "@super:get:begin": FlaxInstanceMethod.shared(
      _flaxBinding75,
      _SizeTween_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.shared(
      _flaxBinding75,
      _SizeTween_super_get_end,
    ),
    "@super:set:begin": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableSizeType)],
      flaxVoidType,
      _SizeTween_super_set_begin,
    ),
    "@super:set:end": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableSizeType)],
      flaxVoidType,
      _SizeTween_super_set_end,
    ),
  },
  constructors: {"": _flaxBinding614, "@implementation": _flaxBinding614},
  create: _createSizeTween,
  matches: _isSizeTween,
  setters: [_flaxBinding606, _flaxBinding607],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding615,
    _flaxBinding616,
    _flaxBinding109,
    _flaxBinding617,
    _flaxBinding618,
    _flaxBinding619,
    _flaxBinding620,
    _flaxBinding621,
    _flaxBinding622,
    _flaxBinding623,
  ]),
);
const _flaxBinding625 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _Split_flipped,
);
const _flaxBinding626 = FlaxGetter.plain("split", flaxDoubleType, _Split_split);
const _flaxBinding627 = FlaxGetter.plain(
  "beginCurve",
  flaxCurveType,
  _Split_beginCurve,
);
const _flaxBinding628 = FlaxGetter.plain(
  "endCurve",
  flaxCurveType,
  _Split_endCurve,
);
const _flaxBinding629 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _Split_transform,
);
const _flaxBinding630 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _Split_transformInternal,
);
const _flaxBinding631 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Split_toString,
);
const _flaxBinding632 = <FlaxParameter>[
  FlaxParameter.required("split", flaxDoubleType),
  FlaxParameter(
    "beginCurve",
    flaxCurveType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "endCurve",
    flaxCurveType,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding633 = FlaxProxyMember(
  "split",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding634 = FlaxProxyMember(
  "beginCurve",
  1,
  _flaxBinding30,
  hasSuper: true,
);
const _flaxBinding635 = FlaxProxyMember(
  "endCurve",
  1,
  _flaxBinding30,
  hasSuper: true,
);
const _flaxBinding636 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Split",
  [_flaxBinding625, _flaxBinding626, _flaxBinding627, _flaxBinding628],
  {
    "transform": _flaxBinding629,
    "transformInternal": _flaxBinding630,
    "toString": _flaxBinding631,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:split": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _Split_super_get_split,
    ),
    "@super:get:beginCurve": FlaxInstanceMethod.shared(
      _flaxBinding30,
      _Split_super_get_beginCurve,
    ),
    "@super:get:endCurve": FlaxInstanceMethod.shared(
      _flaxBinding30,
      _Split_super_get_endCurve,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {"": _flaxBinding632, "@implementation": _flaxBinding632},
  create: _createSplit,
  matches: _isSplit,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding633,
    _flaxBinding634,
    _flaxBinding635,
    _flaxBinding350,
  ]),
);
const _flaxBinding637 = FlaxGetter.plain(
  "begin",
  flaxNullableIntType,
  _StepTween_begin,
);
const _flaxBinding638 = FlaxGetter.plain(
  "end",
  flaxNullableIntType,
  _StepTween_end,
);
const _flaxBinding639 = FlaxSetter(
  "begin",
  flaxNullableIntType,
  _StepTween_set_begin,
);
const _flaxBinding640 = FlaxSetter(
  "end",
  flaxNullableIntType,
  _StepTween_set_end,
);
const _flaxBinding641 = FlaxInstanceMethod.shared(
  _flaxBinding50,
  _StepTween_lerp,
);
const _flaxBinding642 = FlaxInstanceMethod.shared(
  _flaxBinding50,
  _StepTween_transform,
);
const _flaxBinding643 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _StepTween_toString,
);
const _flaxBinding644 = FlaxInstanceMethod.shared(
  _flaxBinding51,
  _StepTween_evaluate,
);
const _flaxBinding645 = FlaxInstanceMethod.shared(
  _flaxBinding53,
  _StepTween_animate,
);
const _flaxBinding646 = FlaxInstanceMethod.shared(
  _flaxBinding55,
  _StepTween_chain,
);
const _flaxBinding647 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:StepTween",
  [_flaxBinding637, _flaxBinding638],
  {
    "lerp": _flaxBinding641,
    "transform": _flaxBinding642,
    "toString": _flaxBinding643,
    "evaluate": _flaxBinding644,
    "animate": _flaxBinding645,
    "chain": _flaxBinding646,
    "@super:lerp": _flaxBinding514,
    "@super:transform": _flaxBinding515,
    "@super:toString": _flaxBinding94,
    "@super:evaluate": _flaxBinding516,
    "@super:animate": _flaxBinding517,
    "@super:chain": _flaxBinding518,
    "@super:get:begin": _flaxBinding519,
    "@super:get:end": _flaxBinding520,
    "@super:set:begin": _flaxBinding521,
    "@super:set:end": _flaxBinding522,
  },
  constructors: {"": _flaxBinding523, "@implementation": _flaxBinding523},
  create: _createStepTween,
  matches: _isStepTween,
  setters: [_flaxBinding639, _flaxBinding640],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding524,
    _flaxBinding525,
    _flaxBinding109,
    _flaxBinding526,
    _flaxBinding527,
    _flaxBinding528,
    _flaxBinding529,
    _flaxBinding530,
    _flaxBinding531,
    _flaxBinding532,
  ]),
);
const _flaxBinding648 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _ThreePointCubic_flipped,
);
const _flaxBinding649 = FlaxGetter.plain(
  "a1",
  flaxOffsetType,
  _ThreePointCubic_a1,
);
const _flaxBinding650 = FlaxGetter.plain(
  "b1",
  flaxOffsetType,
  _ThreePointCubic_b1,
);
const _flaxBinding651 = FlaxGetter.plain(
  "midpoint",
  flaxOffsetType,
  _ThreePointCubic_midpoint,
);
const _flaxBinding652 = FlaxGetter.plain(
  "a2",
  flaxOffsetType,
  _ThreePointCubic_a2,
);
const _flaxBinding653 = FlaxGetter.plain(
  "b2",
  flaxOffsetType,
  _ThreePointCubic_b2,
);
const _flaxBinding654 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _ThreePointCubic_transform,
);
const _flaxBinding655 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _ThreePointCubic_transformInternal,
);
const _flaxBinding656 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ThreePointCubic_toString,
);
const _flaxBinding657 = <FlaxParameter>[
  FlaxParameter.required("a1", flaxOffsetType),
  FlaxParameter.required("b1", flaxOffsetType),
  FlaxParameter.required("midpoint", flaxOffsetType),
  FlaxParameter.required("a2", flaxOffsetType),
  FlaxParameter.required("b2", flaxOffsetType),
];
const _flaxBinding658 = FlaxProxyMember(
  "a1",
  1,
  _flaxBinding43,
  hasSuper: true,
);
const _flaxBinding659 = FlaxProxyMember(
  "b1",
  1,
  _flaxBinding43,
  hasSuper: true,
);
const _flaxBinding660 = FlaxProxyMember(
  "midpoint",
  1,
  _flaxBinding43,
  hasSuper: true,
);
const _flaxBinding661 = FlaxProxyMember(
  "a2",
  1,
  _flaxBinding43,
  hasSuper: true,
);
const _flaxBinding662 = FlaxProxyMember(
  "b2",
  1,
  _flaxBinding43,
  hasSuper: true,
);
const _flaxBinding663 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ThreePointCubic",
  [
    _flaxBinding648,
    _flaxBinding649,
    _flaxBinding650,
    _flaxBinding651,
    _flaxBinding652,
    _flaxBinding653,
  ],
  {
    "transform": _flaxBinding654,
    "transformInternal": _flaxBinding655,
    "toString": _flaxBinding656,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:a1": FlaxInstanceMethod.shared(
      _flaxBinding43,
      _ThreePointCubic_super_get_a1,
    ),
    "@super:get:b1": FlaxInstanceMethod.shared(
      _flaxBinding43,
      _ThreePointCubic_super_get_b1,
    ),
    "@super:get:midpoint": FlaxInstanceMethod.shared(
      _flaxBinding43,
      _ThreePointCubic_super_get_midpoint,
    ),
    "@super:get:a2": FlaxInstanceMethod.shared(
      _flaxBinding43,
      _ThreePointCubic_super_get_a2,
    ),
    "@super:get:b2": FlaxInstanceMethod.shared(
      _flaxBinding43,
      _ThreePointCubic_super_get_b2,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {"": _flaxBinding657, "@implementation": _flaxBinding657},
  create: _createThreePointCubic,
  matches: _isThreePointCubic,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding658,
    _flaxBinding659,
    _flaxBinding660,
    _flaxBinding661,
    _flaxBinding662,
    _flaxBinding350,
  ]),
);
const _flaxBinding664 = FlaxGetter.plain(
  "flipped",
  flaxCurveType,
  _Threshold_flipped,
);
const _flaxBinding665 = FlaxGetter.plain(
  "threshold",
  flaxDoubleType,
  _Threshold_threshold,
);
const _flaxBinding666 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _Threshold_transform,
);
const _flaxBinding667 = FlaxInstanceMethod.shared(
  _flaxBinding26,
  _Threshold_transformInternal,
);
const _flaxBinding668 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Threshold_toString,
);
const _flaxBinding669 = <FlaxParameter>[
  FlaxParameter.required("threshold", flaxDoubleType),
];
const _flaxBinding670 = FlaxProxyMember(
  "threshold",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding671 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Threshold",
  [_flaxBinding664, _flaxBinding665],
  {
    "transform": _flaxBinding666,
    "transformInternal": _flaxBinding667,
    "toString": _flaxBinding668,
    "@super:transform": _flaxBinding342,
    "@super:transformInternal": _flaxBinding343,
    "@super:toString": _flaxBinding94,
    "@super:get:threshold": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _Threshold_super_get_threshold,
    ),
    "@super:get:flipped": _flaxBinding344,
  },
  constructors: {"": _flaxBinding669, "@implementation": _flaxBinding669},
  create: _createThreshold,
  matches: _isThreshold,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding109,
    _flaxBinding670,
    _flaxBinding350,
  ]),
);
const _flaxBinding672 = FlaxGetter.plain(
  "status",
  _flaxBinding1,
  _TrainHoppingAnimation_status,
);
const _flaxBinding673 = FlaxGetter.plain(
  "value",
  flaxDoubleType,
  _TrainHoppingAnimation_value,
);
const _flaxBinding674 = FlaxGetter.plain(
  "isDismissed",
  flaxBoolType,
  _TrainHoppingAnimation_isDismissed,
);
const _flaxBinding675 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _TrainHoppingAnimation_isCompleted,
);
const _flaxBinding676 = FlaxGetter.plain(
  "isAnimating",
  flaxBoolType,
  _TrainHoppingAnimation_isAnimating,
);
const _flaxBinding677 = FlaxGetter.plain(
  "isForwardOrCompleted",
  flaxBoolType,
  _TrainHoppingAnimation_isForwardOrCompleted,
);
const _flaxBinding678 = FlaxGetter.plain(
  "currentTrain",
  _flaxBinding57,
  _TrainHoppingAnimation_currentTrain,
);
const _flaxBinding679 = FlaxGetter.plain(
  "onSwitchedTrain",
  flaxVoidNullableCallbackType,
  _TrainHoppingAnimation_onSwitchedTrain,
);
const _flaxBinding680 = FlaxSetter(
  "onSwitchedTrain",
  flaxVoidNullableCallbackType,
  _TrainHoppingAnimation_set_onSwitchedTrain,
);
const _flaxBinding681 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TrainHoppingAnimation_toString,
);
const _flaxBinding682 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TrainHoppingAnimation_toStringDetails,
);
const _flaxBinding683 = <FlaxParameter>[
  FlaxParameter.required("_currentTrain", _flaxBinding13),
  FlaxParameter.required("_nextTrain", _flaxBinding57),
  FlaxParameter(
    "onSwitchedTrain",
    flaxVoidNullableCallbackType,
    required: false,
  ),
];
const _flaxBinding684 = FlaxProxyMember(
  "currentTrain",
  1,
  _flaxBinding58,
  hasSuper: true,
);
const _flaxBinding685 = FlaxProxyMember(
  "onSwitchedTrain",
  1,
  _flaxBinding77,
  hasSuper: true,
);
const _flaxBinding686 = FlaxProxyMember(
  "onSwitchedTrain",
  2,
  _flaxBinding78,
  hasSuper: true,
);
const _flaxBinding687 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:TrainHoppingAnimation",
  [
    _flaxBinding672,
    _flaxBinding673,
    _flaxBinding674,
    _flaxBinding675,
    _flaxBinding676,
    _flaxBinding677,
    _flaxBinding678,
    _flaxBinding679,
  ],
  {
    "addListener": _flaxBinding161,
    "removeListener": _flaxBinding162,
    "addStatusListener": _flaxBinding163,
    "removeStatusListener": _flaxBinding164,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _TrainHoppingAnimation_drive,
      genericFactory: _flaxGeneric_TrainHoppingAnimation_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding681,
    "toStringDetails": _flaxBinding682,
    "didRegisterListener": _flaxBinding167,
    "didUnregisterListener": _flaxBinding168,
    "dispose": _flaxBinding169,
    "clearListeners": _flaxBinding170,
    "notifyListeners": _flaxBinding171,
    "clearStatusListeners": _flaxBinding172,
    "notifyStatusListeners": _flaxBinding173,
    "@super:addListener": _flaxBinding90,
    "@super:removeListener": _flaxBinding91,
    "@super:addStatusListener": _flaxBinding92,
    "@super:removeStatusListener": _flaxBinding93,
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _TrainHoppingAnimation_super_drive,
      genericFactory: _flaxGeneric_TrainHoppingAnimation_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": _flaxBinding94,
    "@super:toStringDetails": _flaxBinding95,
    "@super:didRegisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _TrainHoppingAnimation_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _TrainHoppingAnimation_super_didUnregisterListener,
    ),
    "@super:dispose": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _TrainHoppingAnimation_super_dispose,
    ),
    "@super:clearListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _TrainHoppingAnimation_super_clearListeners,
    ),
    "@super:notifyListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _TrainHoppingAnimation_super_notifyListeners,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _TrainHoppingAnimation_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.shared(
      _flaxBinding6,
      _TrainHoppingAnimation_super_notifyStatusListeners,
    ),
    "@super:get:currentTrain": FlaxInstanceMethod.shared(
      _flaxBinding58,
      _TrainHoppingAnimation_super_get_currentTrain,
    ),
    "@super:get:onSwitchedTrain": FlaxInstanceMethod.shared(
      _flaxBinding77,
      _TrainHoppingAnimation_super_get_onSwitchedTrain,
    ),
    "@super:get:status": _flaxBinding97,
    "@super:get:value": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _TrainHoppingAnimation_super_get_value,
    ),
    "@super:get:isDismissed": _flaxBinding98,
    "@super:get:isCompleted": _flaxBinding99,
    "@super:get:isAnimating": _flaxBinding100,
    "@super:get:isForwardOrCompleted": _flaxBinding101,
    "@super:set:onSwitchedTrain": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxVoidNullableCallbackType)],
      flaxVoidType,
      _TrainHoppingAnimation_super_set_onSwitchedTrain,
    ),
  },
  constructors: {"": _flaxBinding683, "@implementation": _flaxBinding683},
  create: _createTrainHoppingAnimation,
  matches: _isTrainHoppingAnimation,
  setters: [_flaxBinding680],
  supertypes: [
    "flax.core/sdk_animation#type:Animation",
    "flax.core/flutter#type:Listenable",
    "dart:core::Object",
    "flax.core/flutter#type:ValueListenable",
    "flax.core/sdk_animation#type:AnimationEagerListenerMixin",
    "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
    "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
  ],
  disposeMethod: "dispose",
  listenerPairs: {"addListener": "removeListener"},
  proxy: FlaxProxyBinding([
    _flaxBinding103,
    _flaxBinding104,
    _flaxBinding105,
    _flaxBinding106,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [FlaxCallbackParameter.plain("child", _flaxBinding107)],
        _flaxBinding108,
        _callback10,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback10Invoke,
        matches: _callback10Matches,
        genericFactory: _callback10Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding195,
    _flaxBinding196,
    _flaxBinding197,
    _flaxBinding198,
    _flaxBinding199,
    _flaxBinding200,
    _flaxBinding201,
    _flaxBinding684,
    _flaxBinding685,
    _flaxBinding111,
    _flaxBinding226,
    _flaxBinding112,
    _flaxBinding113,
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding686,
  ]),
);
const _flaxBinding688 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Tween_toString,
);
const _flaxBinding689 = <FlaxParameter>[
  FlaxParameter("begin", flaxNullableAnyType, required: false),
  FlaxParameter("end", flaxNullableAnyType, required: false),
];
const _flaxBinding690 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _TweenSequence_toString,
);
const _flaxBinding691 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:TweenSequenceItem",
  dartType: FlaxDartTypes.typeOf<api.TweenSequenceItem<Object?>>,
);
const _flaxBinding692 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding691,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_animation#type:TweenSequenceItem<any?:>]",
    _collection6Create,
    _collection6Matches,
    restore: _collection6Restore,
  ),
);
const _flaxBinding693 = FlaxTypeRef(
  "list",
  item: _flaxBinding691,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_animation#type:TweenSequenceItem<any?:>]",
    _collection5Create,
    _collection5Matches,
  ),
  iterable: _flaxBinding692,
);
const _flaxBinding694 = <FlaxParameter>[
  FlaxParameter.required("items", _flaxBinding693),
];
const _flaxBinding695 = FlaxGetter.plain(
  "weight",
  flaxDoubleType,
  _TweenSequenceItem_weight,
);
const _flaxBinding696 = <FlaxParameter>[
  FlaxParameter.required("tween", _flaxBinding107),
  FlaxParameter.required("weight", flaxDoubleType),
];
const _flaxBinding697 = FlaxProxyMember(
  "weight",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding698 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxOffsetType,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Offset]",
    _flaxAdapters.flaxAdapter68Create,
    _flaxAdapters.flaxAdapter68Matches,
  ),
  iterable: _flaxBinding27,
);
const _flaxBinding699 = FlaxTypeRef(
  "iterable",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _flaxAdapters.flaxAdapter47Create,
    _flaxAdapters.flaxAdapter47Matches,
    restore: _flaxAdapters.flaxAdapter47Restore,
  ),
);
const _flaxBinding700 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _flaxAdapters.flaxAdapter48Create,
    _flaxAdapters.flaxAdapter48Matches,
  ),
  iterable: _flaxBinding699,
);
const _flaxBinding701 = <FlaxParameter>[
  FlaxParameter.required("child", _flaxBinding107),
];
const _flaxBinding702 = FlaxInstanceMethod.plain(
  _flaxBinding96,
  flaxStringType,
  _FlaxProxyDispatch1_super_call_toString,
);
const _flaxBinding703 = FlaxInstanceMethod.plain(
  _flaxBinding96,
  flaxStringType,
  _FlaxProxyDispatch2_super_call_toStringDetails,
);
const _flaxBinding704 = FlaxInstanceMethod.plain(
  _flaxBinding96,
  _flaxBinding1,
  _FlaxProxyDispatch0_super_get_status,
);
const _flaxBinding705 = FlaxInstanceMethod.plain(
  _flaxBinding96,
  flaxBoolType,
  _FlaxProxyDispatch2_super_get_isDismissed,
);
const _flaxBinding706 = FlaxInstanceMethod.plain(
  _flaxBinding96,
  flaxBoolType,
  _FlaxProxyDispatch2_super_get_isCompleted,
);
const _flaxBinding707 = FlaxInstanceMethod.plain(
  _flaxBinding96,
  flaxBoolType,
  _FlaxProxyDispatch2_super_get_isAnimating,
);
const _flaxBinding708 = FlaxInstanceMethod.plain(
  _flaxBinding96,
  flaxBoolType,
  _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
);
const _flaxBinding709 = <FlaxParameter>[
  FlaxParameter.required("status", _flaxBinding1),
];
