// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:flutter/animation.dart' as api;
import 'package:flax/bindings.dart';

import 'dart:ui' as api1;

import 'package:flutter/cupertino.dart' as api2;
import 'package:flutter/foundation.dart' as api3;

import 'dart:core' as api4;

import 'package:flutter/physics.dart' as api5;
import 'package:flutter/scheduler.dart' as api6;

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
        _flaxBinding100,
        FlaxGetter(
          "value",
          FlaxTypeRef("any", nullable: true),
          _AlwaysStoppedAnimation_value,
        ),
        _flaxBinding101,
        _flaxBinding102,
        _flaxBinding103,
        _flaxBinding104,
      ],
      {
        "addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _AlwaysStoppedAnimation_addListener,
        ),
        "removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _AlwaysStoppedAnimation_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _AlwaysStoppedAnimation_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _AlwaysStoppedAnimation_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AlwaysStoppedAnimation_drive,
          genericFactory: _flaxGeneric_AlwaysStoppedAnimation_drive,
          ownerTypes: [_flaxDefault_AlwaysStoppedAnimation_0],
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _AlwaysStoppedAnimation_toString,
        ),
        "toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _AlwaysStoppedAnimation_toStringDetails,
        ),
        "@super:addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AlwaysStoppedAnimation_super_drive,
          genericFactory: _flaxGeneric_AlwaysStoppedAnimation_super_drive,
          ownerTypes: [_flaxDefault_AlwaysStoppedAnimation_0],
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:get:value": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("any", nullable: true),
          _AlwaysStoppedAnimation_super_get_value,
        ),
        "@super:get:status": FlaxInstanceMethod.signature(
          _flaxBinding10,
          _FlaxProxyDispatch0_super_get_status,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
      },
      constructors: {"@implementation": _flaxBinding107},
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
        _flaxBinding108,
        _flaxBinding109,
        _flaxBinding110,
        _flaxBinding111,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
            _callback0,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
            genericFactory: _callback0Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding114,
        _flaxBinding115,
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
        _flaxBinding116,
        _flaxBinding117,
        _flaxBinding118,
        _flaxBinding119,
        _flaxBinding120,
      ]),
    ),
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:Animatable",
      [],
      {
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _Animatable_transform,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _Animatable_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Animatable_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _Animatable_chain,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _Animatable_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Animatable_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _Animatable_super_chain,
        ),
      },
      constructors: {"@implementation": _flaxBinding105},
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
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
        FlaxGetter(
          "value",
          FlaxTypeRef("any", nullable: true),
          _Animation_value,
        ),
        _flaxBinding125,
        _flaxBinding126,
        _flaxBinding127,
        _flaxBinding128,
        _flaxBinding129,
      ],
      {
        "addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _Animation_addListener,
        ),
        "removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _Animation_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _Animation_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _Animation_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Animation_drive,
          genericFactory: _flaxGeneric_Animation_drive,
          ownerTypes: [_flaxDefault_Animation_0],
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _Animation_toString,
        ),
        "toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _Animation_toStringDetails,
        ),
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Animation_super_drive,
          genericFactory: _flaxGeneric_Animation_super_drive,
          ownerTypes: [_flaxDefault_Animation_0],
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
      },
      constructors: {"@implementation": _flaxBinding105},
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
        _flaxBinding130,
        _flaxBinding131,
        _flaxBinding132,
        _flaxBinding133,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
            _callback1,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback1Invoke,
            matches: _callback1Matches,
            genericFactory: _callback1Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding114,
        _flaxBinding115,
        _flaxBinding134,
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
        ),
        _flaxBinding117,
        _flaxBinding118,
        _flaxBinding119,
        _flaxBinding120,
      ]),
    ),
    _flaxBinding224,
    _flaxBinding225,
    _flaxBinding231,
    _flaxBinding234,
    _flaxBinding237,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:AnimationMax",
      [
        FlaxGetter(
          "first",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_first,
        ),
        FlaxGetter(
          "next",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_next,
        ),
        _flaxBinding238,
        FlaxGetter("value", FlaxTypeRef("num"), _AnimationMax_value),
        _flaxBinding239,
        _flaxBinding240,
        _flaxBinding241,
        _flaxBinding242,
        _flaxBinding243,
      ],
      {
        "didStartListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_didStartListening,
        ),
        "didStopListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_didStopListening,
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _AnimationMax_toString,
        ),
        "addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _AnimationMax_addListener,
        ),
        "removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _AnimationMax_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _AnimationMax_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _AnimationMax_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_drive,
          genericFactory: _flaxGeneric_AnimationMax_drive,
          ownerTypes: [_flaxDefault_AnimationMax_0],
        ),
        "toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _AnimationMax_toStringDetails,
        ),
        "didRegisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_didRegisterListener,
        ),
        "didUnregisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_didUnregisterListener,
        ),
        "clearListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_clearListeners,
        ),
        "notifyListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_notifyListeners,
        ),
        "clearStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_clearStatusListeners,
        ),
        "notifyStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding14,
          _AnimationMax_notifyStatusListeners,
        ),
        "@super:didStartListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_super_didStopListening,
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_super_drive,
          genericFactory: _flaxGeneric_AnimationMax_super_drive,
          ownerTypes: [_flaxDefault_AnimationMax_0],
        ),
        "@super:toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:didRegisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_super_didUnregisterListener,
        ),
        "@super:clearListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMax_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding14,
          _AnimationMax_super_notifyStatusListeners,
        ),
        "@super:get:value": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("num"),
          _AnimationMax_super_get_value,
        ),
        "@super:get:first": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMax_super_get_next,
        ),
        "@super:get:status": FlaxInstanceMethod.signature(
          _flaxBinding10,
          _FlaxProxyDispatch0_super_get_status,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
        "@super:get:isListening": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _AnimationMax_super_get_isListening,
        ),
      },
      constructors: {"@implementation": _flaxBinding245},
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
        _flaxBinding246,
        _flaxBinding247,
        _flaxBinding114,
        _flaxBinding108,
        _flaxBinding109,
        _flaxBinding110,
        _flaxBinding111,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
            _callback3,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback3Invoke,
            matches: _callback3Matches,
            genericFactory: _callback3Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding115,
        _flaxBinding187,
        _flaxBinding188,
        _flaxBinding190,
        _flaxBinding191,
        _flaxBinding192,
        _flaxBinding193,
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
        _flaxBinding116,
        _flaxBinding117,
        _flaxBinding118,
        _flaxBinding119,
        _flaxBinding120,
        _flaxBinding248,
      ]),
    ),
    _flaxBinding262,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:AnimationMin",
      [
        FlaxGetter(
          "first",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_first,
        ),
        FlaxGetter(
          "next",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_next,
        ),
        _flaxBinding263,
        FlaxGetter("value", FlaxTypeRef("num"), _AnimationMin_value),
        _flaxBinding264,
        _flaxBinding265,
        _flaxBinding266,
        _flaxBinding267,
        _flaxBinding268,
      ],
      {
        "didStartListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_didStartListening,
        ),
        "didStopListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_didStopListening,
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _AnimationMin_toString,
        ),
        "addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _AnimationMin_addListener,
        ),
        "removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _AnimationMin_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _AnimationMin_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _AnimationMin_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_drive,
          genericFactory: _flaxGeneric_AnimationMin_drive,
          ownerTypes: [_flaxDefault_AnimationMin_0],
        ),
        "toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _AnimationMin_toStringDetails,
        ),
        "didRegisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_didRegisterListener,
        ),
        "didUnregisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_didUnregisterListener,
        ),
        "clearListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_clearListeners,
        ),
        "notifyListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_notifyListeners,
        ),
        "clearStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_clearStatusListeners,
        ),
        "notifyStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding14,
          _AnimationMin_notifyStatusListeners,
        ),
        "@super:didStartListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_super_didStopListening,
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_super_drive,
          genericFactory: _flaxGeneric_AnimationMin_super_drive,
          ownerTypes: [_flaxDefault_AnimationMin_0],
        ),
        "@super:toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:didRegisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_super_didUnregisterListener,
        ),
        "@super:clearListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _AnimationMin_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding14,
          _AnimationMin_super_notifyStatusListeners,
        ),
        "@super:get:value": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("num"),
          _AnimationMin_super_get_value,
        ),
        "@super:get:first": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationMin_super_get_next,
        ),
        "@super:get:status": FlaxInstanceMethod.signature(
          _flaxBinding10,
          _FlaxProxyDispatch0_super_get_status,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
        "@super:get:isListening": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _AnimationMin_super_get_isListening,
        ),
      },
      constructors: {"@implementation": _flaxBinding245},
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
        _flaxBinding246,
        _flaxBinding247,
        _flaxBinding114,
        _flaxBinding108,
        _flaxBinding109,
        _flaxBinding110,
        _flaxBinding111,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
            _callback5,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback5Invoke,
            matches: _callback5Matches,
            genericFactory: _callback5Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding115,
        _flaxBinding187,
        _flaxBinding188,
        _flaxBinding190,
        _flaxBinding191,
        _flaxBinding192,
        _flaxBinding193,
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
        _flaxBinding116,
        _flaxBinding117,
        _flaxBinding118,
        _flaxBinding119,
        _flaxBinding120,
        _flaxBinding248,
      ]),
    ),
    _flaxBinding296,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:AnimationWithParentMixin",
      [
        FlaxGetter(
          "parent",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _AnimationWithParentMixin_parent,
        ),
        _flaxBinding297,
      ],
      {
        "addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _AnimationWithParentMixin_addListener,
        ),
        "removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _AnimationWithParentMixin_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _AnimationWithParentMixin_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _AnimationWithParentMixin_removeStatusListener,
        ),
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
    _flaxBinding310,
    _flaxBinding329,
    _flaxBinding350,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:CompoundAnimation",
      [
        _flaxBinding351,
        FlaxGetter(
          "value",
          FlaxTypeRef("any", nullable: true),
          _CompoundAnimation_value,
        ),
        _flaxBinding352,
        _flaxBinding353,
        _flaxBinding354,
        _flaxBinding355,
        _flaxBinding356,
        FlaxGetter(
          "first",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_first,
        ),
        FlaxGetter(
          "next",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_next,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _CompoundAnimation_addListener,
        ),
        "removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _CompoundAnimation_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _CompoundAnimation_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _CompoundAnimation_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_drive,
          genericFactory: _flaxGeneric_CompoundAnimation_drive,
          ownerTypes: [_flaxDefault_CompoundAnimation_0],
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _CompoundAnimation_toString,
        ),
        "toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _CompoundAnimation_toStringDetails,
        ),
        "didRegisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_didRegisterListener,
        ),
        "didUnregisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_didUnregisterListener,
        ),
        "didStartListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_didStartListening,
        ),
        "didStopListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_didStopListening,
        ),
        "clearListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_clearListeners,
        ),
        "notifyListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_notifyListeners,
        ),
        "clearStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_clearStatusListeners,
        ),
        "notifyStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding14,
          _CompoundAnimation_notifyStatusListeners,
        ),
        "@super:addListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod.signature(
          _flaxBinding3,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod.signature(
          _flaxBinding7,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "child",
              FlaxTypeRef(
                "object",
                id: "flax.core/sdk_animation#type:Animatable",
              ),
              required: true,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_super_drive,
          genericFactory: _flaxGeneric_CompoundAnimation_super_drive,
          ownerTypes: [_flaxDefault_CompoundAnimation_0],
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:toStringDetails": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:didRegisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_super_didUnregisterListener,
        ),
        "@super:didStartListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_super_didStopListening,
        ),
        "@super:clearListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding13,
          _CompoundAnimation_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod.signature(
          _flaxBinding14,
          _CompoundAnimation_super_notifyStatusListeners,
        ),
        "@super:get:first": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _CompoundAnimation_super_get_next,
        ),
        "@super:get:status": FlaxInstanceMethod.signature(
          _flaxBinding10,
          _FlaxProxyDispatch0_super_get_status,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
        "@super:get:isListening": FlaxInstanceMethod.signature(
          _flaxBinding12,
          _CompoundAnimation_super_get_isListening,
        ),
      },
      constructors: {"@implementation": _flaxBinding357},
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
        _flaxBinding108,
        _flaxBinding109,
        _flaxBinding110,
        _flaxBinding111,
        FlaxProxyMember(
          "drive",
          0,
          FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
            _callback6,
            id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<any?:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
            invoke: _callback6Invoke,
            matches: _callback6Matches,
            genericFactory: _callback6Types,
          ),
          hasSuper: true,
          hasCallContext: true,
        ),
        _flaxBinding114,
        _flaxBinding115,
        _flaxBinding187,
        _flaxBinding188,
        _flaxBinding246,
        _flaxBinding247,
        _flaxBinding190,
        _flaxBinding191,
        _flaxBinding192,
        _flaxBinding193,
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
        _flaxBinding116,
        FlaxProxyMember(
          "value",
          1,
          FlaxCallbackBinding.signature(
            [],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>()->any?:",
          ),
        ),
        _flaxBinding117,
        _flaxBinding118,
        _flaxBinding119,
        _flaxBinding120,
        _flaxBinding248,
      ]),
    ),
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:ConstantTween",
      [
        FlaxGetter(
          "begin",
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_begin,
        ),
        FlaxGetter(
          "end",
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_end,
        ),
      ],
      {
        "lerp": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_lerp,
        ),
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_transform,
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _ConstantTween_toString,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _ConstantTween_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _ConstantTween_chain,
        ),
        "@super:lerp": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_lerp,
        ),
        "@super:transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_transform,
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _ConstantTween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _ConstantTween_super_chain,
        ),
        "@super:get:begin": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("any", nullable: true),
          _ConstantTween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod(
          [
            FlaxParameter(
              "value",
              FlaxTypeRef("any", nullable: true),
              required: true,
            ),
          ],
          const FlaxTypeRef("void"),
          _ConstantTween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod(
          [
            FlaxParameter(
              "value",
              FlaxTypeRef("any", nullable: true),
              required: true,
            ),
          ],
          const FlaxTypeRef("void"),
          _ConstantTween_super_set_end,
        ),
      },
      constructors: {"@implementation": _flaxBinding107},
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding114,
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
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
              FlaxCallbackParameter(
                "value",
                FlaxTypeRef("any", nullable: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
            id: "callback:<>(p:r:value:any?:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "end",
          2,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "value",
                FlaxTypeRef("any", nullable: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
            id: "callback:<>(p:r:value:any?:)->void:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
    _flaxBinding326,
    _flaxBinding364,
    _flaxBinding378,
    _flaxBinding404,
    _flaxBinding412,
    _flaxBinding418,
    _flaxBinding424,
    _flaxBinding430,
    _flaxBinding440,
    _flaxBinding461,
    _flaxBinding472,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:ParametricCurve",
      [],
      {
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ParametricCurve_transform,
        ),
        "transformInternal": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ParametricCurve_transformInternal,
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _ParametricCurve_toString,
        ),
        "@super:transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ParametricCurve_super_transform,
        ),
        "@super:transformInternal": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ParametricCurve_super_transformInternal,
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
      },
      constructors: {"@implementation": _flaxBinding105},
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "transformInternal",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding114,
      ]),
    ),
    _flaxBinding486,
    _flaxBinding507,
    _flaxBinding519,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:ReverseTween",
      [
        FlaxGetter(
          "begin",
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_begin,
        ),
        FlaxGetter(
          "end",
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_end,
        ),
        FlaxGetter(
          "parent",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Tween"),
          _ReverseTween_parent,
        ),
      ],
      {
        "lerp": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_lerp,
        ),
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_transform,
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _ReverseTween_toString,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _ReverseTween_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _ReverseTween_chain,
        ),
        "@super:lerp": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_lerp,
        ),
        "@super:transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_transform,
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _ReverseTween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _ReverseTween_super_chain,
        ),
        "@super:get:parent": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Tween"),
          _ReverseTween_super_get_parent,
        ),
        "@super:get:begin": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("any", nullable: true),
          _ReverseTween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod(
          [
            FlaxParameter(
              "value",
              FlaxTypeRef("any", nullable: true),
              required: true,
            ),
          ],
          const FlaxTypeRef("void"),
          _ReverseTween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod(
          [
            FlaxParameter(
              "value",
              FlaxTypeRef("any", nullable: true),
              required: true,
            ),
          ],
          const FlaxTypeRef("void"),
          _ReverseTween_super_set_end,
        ),
      },
      constructors: {"@implementation": _flaxBinding521},
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "transform",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding114,
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
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
              FlaxCallbackParameter(
                "value",
                FlaxTypeRef("any", nullable: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
            id: "callback:<>(p:r:value:any?:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "end",
          2,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "value",
                FlaxTypeRef("any", nullable: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
            id: "callback:<>(p:r:value:any?:)->void:",
          ),
          hasSuper: true,
        ),
      ]),
    ),
    _flaxBinding529,
    _flaxBinding550,
    _flaxBinding562,
    _flaxBinding573,
    _flaxBinding589,
    _flaxBinding597,
    _flaxBinding613,
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:Tween",
      [
        FlaxGetter("begin", FlaxTypeRef("any", nullable: true), _Tween_begin),
        FlaxGetter("end", FlaxTypeRef("any", nullable: true), _Tween_end),
      ],
      {
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _Tween_transform,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _Tween_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Tween_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _Tween_chain,
        ),
        "lerp": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _Tween_lerp,
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _Tween_toString,
        ),
        "@super:transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_transform,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _Tween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _Tween_super_chain,
        ),
        "@super:lerp": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_lerp,
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:get:begin": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("any", nullable: true),
          _Tween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod(
          [
            FlaxParameter(
              "value",
              FlaxTypeRef("any", nullable: true),
              required: true,
            ),
          ],
          const FlaxTypeRef("void"),
          _Tween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod(
          [
            FlaxParameter(
              "value",
              FlaxTypeRef("any", nullable: true),
              required: true,
            ),
          ],
          const FlaxTypeRef("void"),
          _Tween_super_set_end,
        ),
      },
      constructors: {"@implementation": _flaxBinding614},
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        _flaxBinding114,
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
              FlaxCallbackParameter(
                "value",
                FlaxTypeRef("any", nullable: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
            id: "callback:<>(p:r:value:any?:)->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "end",
          2,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "value",
                FlaxTypeRef("any", nullable: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _TweenSequence_transform,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _TweenSequence_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _TweenSequence_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _TweenSequence_chain,
        ),
        "toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _TweenSequence_toString,
        ),
        "@super:transform": FlaxInstanceMethod(
          _flaxBinding121,
          FlaxTypeRef("any", nullable: true),
          _TweenSequence_super_transform,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          FlaxTypeRef("any", nullable: true),
          _TweenSequence_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
          _TweenSequence_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _TweenSequence_super_chain,
        ),
        "@super:toString": FlaxInstanceMethod.signature(
          _flaxBinding9,
          _FlaxProxyDispatch1_super_call_toString,
        ),
      },
      constructors: {"@implementation": _flaxBinding618},
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:t:double:)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("any", nullable: true),
            id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->any?:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<any?:>",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "chain",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
            FlaxTypeRef(
              "object",
              id: "flax.core/sdk_animation#type:Animatable",
            ),
            id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<any?:>",
          ),
          hasSuper: true,
        ),
        _flaxBinding114,
      ]),
    ),
    FlaxObjectBinding(
      "flax.core/sdk_animation#type:TweenSequenceItem",
      [
        FlaxGetter(
          "tween",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _TweenSequenceItem_tween,
        ),
        _flaxBinding619,
      ],
      {
        "@super:get:tween": FlaxInstanceMethod(
          _flaxBinding105,
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          _TweenSequenceItem_super_get_tween,
        ),
        "@super:get:weight": FlaxInstanceMethod.signature(
          _flaxBinding21,
          _TweenSequenceItem_super_get_weight,
        ),
      },
      constructors: {"@implementation": _flaxBinding620},
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
        _flaxBinding621,
      ]),
    ),
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_animation#read:kAlwaysCompleteAnimation",
      [],
      _flaxBinding26,
      _read_kAlwaysCompleteAnimation,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#read:kAlwaysDismissedAnimation",
      [],
      _flaxBinding26,
      _read_kAlwaysDismissedAnimation,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStatus.isDismissed%3Aget",
      [FlaxParameter("receiver", _flaxBinding4, required: true)],
      _flaxBinding11,
      _enum_AnimationStatus_get_isDismissed,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStatus.isCompleted%3Aget",
      [FlaxParameter("receiver", _flaxBinding4, required: true)],
      _flaxBinding11,
      _enum_AnimationStatus_get_isCompleted,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStatus.isAnimating%3Aget",
      [FlaxParameter("receiver", _flaxBinding4, required: true)],
      _flaxBinding11,
      _enum_AnimationStatus_get_isAnimating,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStatus.isForwardOrCompleted%3Aget",
      [FlaxParameter("receiver", _flaxBinding4, required: true)],
      _flaxBinding11,
      _enum_AnimationStatus_get_isForwardOrCompleted,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:AnimationStyle.lerp",
      [
        FlaxParameter("a", _flaxBinding34, required: true),
        FlaxParameter("b", _flaxBinding34, required: true),
        FlaxParameter("t", _flaxBinding20, required: true),
      ],
      _flaxBinding34,
      _AnimationStyle_lerp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_animation#function:CatmullRomCurve.validateControlPoints",
      [
        FlaxParameter("controlPoints", _flaxBinding622, required: true),
        FlaxParameter("reasons", _flaxBinding624, required: false),
        FlaxParameter(
          "tension",
          _flaxBinding20,
          required: false,
          defaultValue: 0.0,
        ),
      ],
      _flaxBinding11,
      _CatmullRomCurve_validateControlPoints,
    ),
  ],
  constants: [
    FlaxConstantGroup(_flaxBinding35, {
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
    "dart-type-tokens",
    "engine-type-handles",
    "generic-call-types",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "lazy-js-iterables",
    "native-navigation-objects",
    "native-widget-proxies",
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
  (receiver as api.AnimationController).duration = value as api4.Duration?;
}

void _AnimationController_set_reverseDuration(Object receiver, Object? value) {
  (receiver as api.AnimationController).reverseDuration =
      value as api4.Duration?;
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
  if (!values.containsKey("curve")) {
    return (receiver as api.AnimationController).animateTo(
      values["target"] as double,
      duration: values["duration"] as api4.Duration?,
    );
  }
  return (receiver as api.AnimationController).animateTo(
    values["target"] as double,
    curve: values["curve"] as api.Curve,
    duration: values["duration"] as api4.Duration?,
  );
}

Object? _AnimationController_animateBack(
  Object receiver,
  Map<String, Object?> values,
) {
  if (!values.containsKey("curve")) {
    return (receiver as api.AnimationController).animateBack(
      values["target"] as double,
      duration: values["duration"] as api4.Duration?,
    );
  }
  return (receiver as api.AnimationController).animateBack(
    values["target"] as double,
    curve: values["curve"] as api.Curve,
    duration: values["duration"] as api4.Duration?,
  );
}

Object? _AnimationController_repeat(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationController).repeat(
    count: values["count"] as int?,
    max: values["max"] as double?,
    min: values["min"] as double?,
    period: values["period"] as api4.Duration?,
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
  if (!values.containsKey("curve")) {
    return (receiver as _AnimationControllerProxy)._flaxSuper_animateTo(
      values["target"] as double,
      duration: values["duration"] as api4.Duration?,
    );
  }
  return (receiver as _AnimationControllerProxy)._flaxSuper_animateTo(
    values["target"] as double,
    curve: values["curve"] as api.Curve,
    duration: values["duration"] as api4.Duration?,
  );
}

Object? _AnimationController_super_animateBack(
  Object receiver,
  Map<String, Object?> values,
) {
  if (!values.containsKey("curve")) {
    return (receiver as _AnimationControllerProxy)._flaxSuper_animateBack(
      values["target"] as double,
      duration: values["duration"] as api4.Duration?,
    );
  }
  return (receiver as _AnimationControllerProxy)._flaxSuper_animateBack(
    values["target"] as double,
    curve: values["curve"] as api.Curve,
    duration: values["duration"] as api4.Duration?,
  );
}

Object? _AnimationController_super_repeat(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationControllerProxy)._flaxSuper_repeat(
    count: values["count"] as int?,
    max: values["max"] as double?,
    min: values["min"] as double?,
    period: values["period"] as api4.Duration?,
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
    values["value"] as api4.Duration?,
  );
  return null;
}

Object? _AnimationController_super_set_reverseDuration(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationControllerProxy)._flaxSuperSet_reverseDuration(
    values["value"] as api4.Duration?,
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
    case '@implementation':
      return _AnimationControllerProxy(
        values['@peer'] as FlaxProxyPeer,
        value: values["value"] as double?,
        duration: values["duration"] as api4.Duration?,
        reverseDuration: values["reverseDuration"] as api4.Duration?,
        debugLabel: values["debugLabel"] as String?,
        lowerBound: values["lowerBound"] as double,
        upperBound: values["upperBound"] as double,
        animationBehavior: values["animationBehavior"] as api.AnimationBehavior,
        vsync: values["vsync"] as api6.TickerProvider,
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
Object? _AnimationMax_isListening(Object value) =>
    (value as api.AnimationMax<num>).isListening;
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
Object? _AnimationMin_isListening(Object value) =>
    (value as api.AnimationMin<num>).isListening;
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
    minLevel: values["minLevel"] as api3.DiagnosticLevel,
  );
}

Object? _AnimationStyle_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AnimationStyle).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api3.DiagnosticsTreeStyle?,
  );
}

Object? _AnimationStyle_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AnimationStyle).debugFillProperties(
    values["properties"] as api3.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _AnimationStyle_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AnimationStyle).copyWith(
    curve: values["curve"] as api.Curve?,
    duration: values["duration"] as api4.Duration?,
    reverseCurve: values["reverseCurve"] as api.Curve?,
    reverseDuration: values["reverseDuration"] as api4.Duration?,
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
    minLevel: values["minLevel"] as api3.DiagnosticLevel,
  );
}

Object? _AnimationStyle_super_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationStyleProxy)._flaxSuper_toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api3.DiagnosticsTreeStyle?,
  );
}

Object? _AnimationStyle_super_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AnimationStyleProxy)._flaxSuper_debugFillProperties(
    values["properties"] as api3.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _AnimationStyle_super_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AnimationStyleProxy)._flaxSuper_copyWith(
    curve: values["curve"] as api.Curve?,
    duration: values["duration"] as api4.Duration?,
    reverseCurve: values["reverseCurve"] as api.Curve?,
    reverseDuration: values["reverseDuration"] as api4.Duration?,
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
    case '@implementation':
      return _AnimationStyleProxy(
        values['@peer'] as FlaxProxyPeer,
        curve: values["curve"] as api.Curve?,
        duration: values["duration"] as api4.Duration?,
        reverseCurve: values["reverseCurve"] as api.Curve?,
        reverseDuration: values["reverseDuration"] as api4.Duration?,
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
    case '@implementation':
      return _CatmullRomCurveProxy(
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
    case '@implementation':
      return _CatmullRomSplineProxy(
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
Object? _CompoundAnimation_isListening(Object value) =>
    (value as api.CompoundAnimation<Object?>).isListening;
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
    case '@implementation':
      if (!values.containsKey("curve")) {
        return _IntervalProxy(
          values['@peer'] as FlaxProxyPeer,
          values["begin"] as double,
          values["end"] as double,
        );
      }
      return _IntervalProxy(
        values['@peer'] as FlaxProxyPeer,
        values["begin"] as double,
        values["end"] as double,
        curve: values["curve"] as api.Curve,
      );
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
    case '@implementation':
      if (!values.containsKey("beginCurve")) {
        if (!values.containsKey("endCurve")) {
          return _SplitProxy(
            values['@peer'] as FlaxProxyPeer,
            values["split"] as double,
          );
        }
        return _SplitProxy(
          values['@peer'] as FlaxProxyPeer,
          values["split"] as double,
          endCurve: values["endCurve"] as api.Curve,
        );
      }
      if (!values.containsKey("endCurve")) {
        return _SplitProxy(
          values['@peer'] as FlaxProxyPeer,
          values["split"] as double,
          beginCurve: values["beginCurve"] as api.Curve,
        );
      }
      return _SplitProxy(
        values['@peer'] as FlaxProxyPeer,
        values["split"] as double,
        beginCurve: values["beginCurve"] as api.Curve,
        endCurve: values["endCurve"] as api.Curve,
      );
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
    api4.Duration? super.duration,
    api4.Duration? super.reverseDuration,
    String? super.debugLabel,
    double super.lowerBound,
    double super.upperBound,
    api.AnimationBehavior super.animationBehavior,
    required api6.TickerProvider super.vsync,
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
    if (identical(from, _flaxOmitted)) {
      return super.forward();
    }
    return super.forward(from: from as double?);
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
    if (identical(from, _flaxOmitted)) {
      return super.reverse();
    }
    return super.reverse(from: from as double?);
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
    if (identical(from, _flaxOmitted)) {
      return super.toggle();
    }
    return super.toggle(from: from as double?);
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
    if (identical(duration, _flaxOmitted)) {
      if (identical(curve, _flaxOmitted)) {
        return super.animateTo(target);
      }
      return super.animateTo(target, curve: curve as api.Curve);
    }
    if (identical(curve, _flaxOmitted)) {
      return super.animateTo(target, duration: duration as api4.Duration?);
    }
    return super.animateTo(
      target,
      duration: duration as api4.Duration?,
      curve: curve as api.Curve,
    );
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
    if (identical(duration, _flaxOmitted)) {
      if (identical(curve, _flaxOmitted)) {
        return super.animateBack(target);
      }
      return super.animateBack(target, curve: curve as api.Curve);
    }
    if (identical(curve, _flaxOmitted)) {
      return super.animateBack(target, duration: duration as api4.Duration?);
    }
    return super.animateBack(
      target,
      duration: duration as api4.Duration?,
      curve: curve as api.Curve,
    );
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
    if (identical(min, _flaxOmitted)) {
      if (identical(max, _flaxOmitted)) {
        if (identical(reverse, _flaxOmitted)) {
          if (identical(period, _flaxOmitted)) {
            if (identical(count, _flaxOmitted)) {
              return super.repeat();
            }
            return super.repeat(count: count as int?);
          }
          if (identical(count, _flaxOmitted)) {
            return super.repeat(period: period as api4.Duration?);
          }
          return super.repeat(
            period: period as api4.Duration?,
            count: count as int?,
          );
        }
        if (identical(period, _flaxOmitted)) {
          if (identical(count, _flaxOmitted)) {
            return super.repeat(reverse: reverse as bool);
          }
          return super.repeat(reverse: reverse as bool, count: count as int?);
        }
        if (identical(count, _flaxOmitted)) {
          return super.repeat(
            reverse: reverse as bool,
            period: period as api4.Duration?,
          );
        }
        return super.repeat(
          reverse: reverse as bool,
          period: period as api4.Duration?,
          count: count as int?,
        );
      }
      if (identical(reverse, _flaxOmitted)) {
        if (identical(period, _flaxOmitted)) {
          if (identical(count, _flaxOmitted)) {
            return super.repeat(max: max as double?);
          }
          return super.repeat(max: max as double?, count: count as int?);
        }
        if (identical(count, _flaxOmitted)) {
          return super.repeat(
            max: max as double?,
            period: period as api4.Duration?,
          );
        }
        return super.repeat(
          max: max as double?,
          period: period as api4.Duration?,
          count: count as int?,
        );
      }
      if (identical(period, _flaxOmitted)) {
        if (identical(count, _flaxOmitted)) {
          return super.repeat(max: max as double?, reverse: reverse as bool);
        }
        return super.repeat(
          max: max as double?,
          reverse: reverse as bool,
          count: count as int?,
        );
      }
      if (identical(count, _flaxOmitted)) {
        return super.repeat(
          max: max as double?,
          reverse: reverse as bool,
          period: period as api4.Duration?,
        );
      }
      return super.repeat(
        max: max as double?,
        reverse: reverse as bool,
        period: period as api4.Duration?,
        count: count as int?,
      );
    }
    if (identical(max, _flaxOmitted)) {
      if (identical(reverse, _flaxOmitted)) {
        if (identical(period, _flaxOmitted)) {
          if (identical(count, _flaxOmitted)) {
            return super.repeat(min: min as double?);
          }
          return super.repeat(min: min as double?, count: count as int?);
        }
        if (identical(count, _flaxOmitted)) {
          return super.repeat(
            min: min as double?,
            period: period as api4.Duration?,
          );
        }
        return super.repeat(
          min: min as double?,
          period: period as api4.Duration?,
          count: count as int?,
        );
      }
      if (identical(period, _flaxOmitted)) {
        if (identical(count, _flaxOmitted)) {
          return super.repeat(min: min as double?, reverse: reverse as bool);
        }
        return super.repeat(
          min: min as double?,
          reverse: reverse as bool,
          count: count as int?,
        );
      }
      if (identical(count, _flaxOmitted)) {
        return super.repeat(
          min: min as double?,
          reverse: reverse as bool,
          period: period as api4.Duration?,
        );
      }
      return super.repeat(
        min: min as double?,
        reverse: reverse as bool,
        period: period as api4.Duration?,
        count: count as int?,
      );
    }
    if (identical(reverse, _flaxOmitted)) {
      if (identical(period, _flaxOmitted)) {
        if (identical(count, _flaxOmitted)) {
          return super.repeat(min: min as double?, max: max as double?);
        }
        return super.repeat(
          min: min as double?,
          max: max as double?,
          count: count as int?,
        );
      }
      if (identical(count, _flaxOmitted)) {
        return super.repeat(
          min: min as double?,
          max: max as double?,
          period: period as api4.Duration?,
        );
      }
      return super.repeat(
        min: min as double?,
        max: max as double?,
        period: period as api4.Duration?,
        count: count as int?,
      );
    }
    if (identical(period, _flaxOmitted)) {
      if (identical(count, _flaxOmitted)) {
        return super.repeat(
          min: min as double?,
          max: max as double?,
          reverse: reverse as bool,
        );
      }
      return super.repeat(
        min: min as double?,
        max: max as double?,
        reverse: reverse as bool,
        count: count as int?,
      );
    }
    if (identical(count, _flaxOmitted)) {
      return super.repeat(
        min: min as double?,
        max: max as double?,
        reverse: reverse as bool,
        period: period as api4.Duration?,
      );
    }
    return super.repeat(
      min: min as double?,
      max: max as double?,
      reverse: reverse as bool,
      period: period as api4.Duration?,
      count: count as int?,
    );
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
    if (identical(velocity, _flaxOmitted)) {
      if (identical(springDescription, _flaxOmitted)) {
        if (identical(animationBehavior, _flaxOmitted)) {
          return super.fling();
        }
        return super.fling(
          animationBehavior: animationBehavior as api.AnimationBehavior?,
        );
      }
      if (identical(animationBehavior, _flaxOmitted)) {
        return super.fling(
          springDescription: springDescription as api5.SpringDescription?,
        );
      }
      return super.fling(
        springDescription: springDescription as api5.SpringDescription?,
        animationBehavior: animationBehavior as api.AnimationBehavior?,
      );
    }
    if (identical(springDescription, _flaxOmitted)) {
      if (identical(animationBehavior, _flaxOmitted)) {
        return super.fling(velocity: velocity as double);
      }
      return super.fling(
        velocity: velocity as double,
        animationBehavior: animationBehavior as api.AnimationBehavior?,
      );
    }
    if (identical(animationBehavior, _flaxOmitted)) {
      return super.fling(
        velocity: velocity as double,
        springDescription: springDescription as api5.SpringDescription?,
      );
    }
    return super.fling(
      velocity: velocity as double,
      springDescription: springDescription as api5.SpringDescription?,
      animationBehavior: animationBehavior as api.AnimationBehavior?,
    );
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
    if (identical(canceled, _flaxOmitted)) {
      super.stop();
      return;
    }
    super.stop(canceled: canceled as bool);
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
  api4.Duration? get duration {
    final _flaxResult = _flaxPeer.call(31, const [], const {});
    if (!_flaxResult.$1) return super.duration;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Duration?;
    return _flaxConvertedResult;
  }

  api4.Duration? get _flaxSuperGet_duration {
    return super.duration;
  }

  @override
  api4.Duration? get reverseDuration {
    final _flaxResult = _flaxPeer.call(32, const [], const {});
    if (!_flaxResult.$1) return super.reverseDuration;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Duration?;
    return _flaxConvertedResult;
  }

  api4.Duration? get _flaxSuperGet_reverseDuration {
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
  api4.Duration? get lastElapsedDuration {
    final _flaxResult = _flaxPeer.call(35, const [], const {});
    if (!_flaxResult.$1) return super.lastElapsedDuration;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Duration?;
    return _flaxConvertedResult;
  }

  api4.Duration? get _flaxSuperGet_lastElapsedDuration {
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
  set duration(api4.Duration? value) {
    final result = _flaxPeer.call(41, [value], const {});
    if (!result.$1) {
      super.duration = value;
      return;
    }
  }

  void _flaxSuperSet_duration(api4.Duration? value) {
    super.duration = value;
  }

  @override
  set reverseDuration(api4.Duration? value) {
    final result = _flaxPeer.call(42, [value], const {});
    if (!result.$1) {
      super.reverseDuration = value;
      return;
    }
  }

  void _flaxSuperSet_reverseDuration(api4.Duration? value) {
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
    api4.Duration? super.duration,
    api.Curve? super.reverseCurve,
    api4.Duration? super.reverseDuration,
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
    if (identical(minLevel, _flaxOmitted)) {
      return super.toString();
    }
    return super.toString(minLevel: minLevel as api3.DiagnosticLevel);
  }

  @override
  api3.DiagnosticsNode toDiagnosticsNode({
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
    final _flaxConvertedResult = _flaxResult.$2 as api3.DiagnosticsNode;
    return _flaxConvertedResult;
  }

  api3.DiagnosticsNode _flaxSuper_toDiagnosticsNode({
    Object? name = _flaxOmitted,
    Object? style = _flaxOmitted,
  }) {
    if (identical(name, _flaxOmitted)) {
      if (identical(style, _flaxOmitted)) {
        return super.toDiagnosticsNode();
      }
      return super.toDiagnosticsNode(
        style: style as api3.DiagnosticsTreeStyle?,
      );
    }
    if (identical(style, _flaxOmitted)) {
      return super.toDiagnosticsNode(name: name as String?);
    }
    return super.toDiagnosticsNode(
      name: name as String?,
      style: style as api3.DiagnosticsTreeStyle?,
    );
  }

  @override
  // ignore: must_call_super
  void debugFillProperties(api3.DiagnosticPropertiesBuilder properties) {
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
    api3.DiagnosticPropertiesBuilder properties,
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
    if (identical(curve, _flaxOmitted)) {
      if (identical(duration, _flaxOmitted)) {
        if (identical(reverseCurve, _flaxOmitted)) {
          if (identical(reverseDuration, _flaxOmitted)) {
            return super.copyWith();
          }
          return super.copyWith(
            reverseDuration: reverseDuration as api4.Duration?,
          );
        }
        if (identical(reverseDuration, _flaxOmitted)) {
          return super.copyWith(reverseCurve: reverseCurve as api.Curve?);
        }
        return super.copyWith(
          reverseCurve: reverseCurve as api.Curve?,
          reverseDuration: reverseDuration as api4.Duration?,
        );
      }
      if (identical(reverseCurve, _flaxOmitted)) {
        if (identical(reverseDuration, _flaxOmitted)) {
          return super.copyWith(duration: duration as api4.Duration?);
        }
        return super.copyWith(
          duration: duration as api4.Duration?,
          reverseDuration: reverseDuration as api4.Duration?,
        );
      }
      if (identical(reverseDuration, _flaxOmitted)) {
        return super.copyWith(
          duration: duration as api4.Duration?,
          reverseCurve: reverseCurve as api.Curve?,
        );
      }
      return super.copyWith(
        duration: duration as api4.Duration?,
        reverseCurve: reverseCurve as api.Curve?,
        reverseDuration: reverseDuration as api4.Duration?,
      );
    }
    if (identical(duration, _flaxOmitted)) {
      if (identical(reverseCurve, _flaxOmitted)) {
        if (identical(reverseDuration, _flaxOmitted)) {
          return super.copyWith(curve: curve as api.Curve?);
        }
        return super.copyWith(
          curve: curve as api.Curve?,
          reverseDuration: reverseDuration as api4.Duration?,
        );
      }
      if (identical(reverseDuration, _flaxOmitted)) {
        return super.copyWith(
          curve: curve as api.Curve?,
          reverseCurve: reverseCurve as api.Curve?,
        );
      }
      return super.copyWith(
        curve: curve as api.Curve?,
        reverseCurve: reverseCurve as api.Curve?,
        reverseDuration: reverseDuration as api4.Duration?,
      );
    }
    if (identical(reverseCurve, _flaxOmitted)) {
      if (identical(reverseDuration, _flaxOmitted)) {
        return super.copyWith(
          curve: curve as api.Curve?,
          duration: duration as api4.Duration?,
        );
      }
      return super.copyWith(
        curve: curve as api.Curve?,
        duration: duration as api4.Duration?,
        reverseDuration: reverseDuration as api4.Duration?,
      );
    }
    if (identical(reverseDuration, _flaxOmitted)) {
      return super.copyWith(
        curve: curve as api.Curve?,
        duration: duration as api4.Duration?,
        reverseCurve: reverseCurve as api.Curve?,
      );
    }
    return super.copyWith(
      curve: curve as api.Curve?,
      duration: duration as api4.Duration?,
      reverseCurve: reverseCurve as api.Curve?,
      reverseDuration: reverseDuration as api4.Duration?,
    );
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
  api4.Duration? get duration {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.duration;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Duration?;
    return _flaxConvertedResult;
  }

  api4.Duration? get _flaxSuperGet_duration {
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
  api4.Duration? get reverseDuration {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.reverseDuration;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Duration?;
    return _flaxConvertedResult;
  }

  api4.Duration? get _flaxSuperGet_reverseDuration {
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
    if (identical(start, _flaxOmitted)) {
      if (identical(end, _flaxOmitted)) {
        if (identical(tolerance, _flaxOmitted)) {
          return super.generateSamples();
        }
        return super.generateSamples(tolerance: tolerance as double);
      }
      if (identical(tolerance, _flaxOmitted)) {
        return super.generateSamples(end: end as double);
      }
      return super.generateSamples(
        end: end as double,
        tolerance: tolerance as double,
      );
    }
    if (identical(end, _flaxOmitted)) {
      if (identical(tolerance, _flaxOmitted)) {
        return super.generateSamples(start: start as double);
      }
      return super.generateSamples(
        start: start as double,
        tolerance: tolerance as double,
      );
    }
    if (identical(tolerance, _flaxOmitted)) {
      return super.generateSamples(start: start as double, end: end as double);
    }
    return super.generateSamples(
      start: start as double,
      end: end as double,
      tolerance: tolerance as double,
    );
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
    if (identical(start, _flaxOmitted)) {
      if (identical(end, _flaxOmitted)) {
        if (identical(tolerance, _flaxOmitted)) {
          return super.generateSamples();
        }
        return super.generateSamples(tolerance: tolerance as double);
      }
      if (identical(tolerance, _flaxOmitted)) {
        return super.generateSamples(end: end as double);
      }
      return super.generateSamples(
        end: end as double,
        tolerance: tolerance as double,
      );
    }
    if (identical(end, _flaxOmitted)) {
      if (identical(tolerance, _flaxOmitted)) {
        return super.generateSamples(start: start as double);
      }
      return super.generateSamples(
        start: start as double,
        tolerance: tolerance as double,
      );
    }
    if (identical(tolerance, _flaxOmitted)) {
      return super.generateSamples(start: start as double, end: end as double);
    }
    return super.generateSamples(
      start: start as double,
      end: end as double,
      tolerance: tolerance as double,
    );
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<U>>(withinCallback: true),
        required: true,
        positional: true,
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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
        FlaxCallbackParameter(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
          required: true,
          positional: true,
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
        FlaxGetter("status", _flaxBinding4, _AlwaysStoppedAnimation_status),
        FlaxGetter(
          "value",
          types.ref<_Owner0>(),
          _AlwaysStoppedAnimation_value,
        ),
        FlaxGetter(
          "isDismissed",
          _flaxBinding11,
          _AlwaysStoppedAnimation_isDismissed,
        ),
        FlaxGetter(
          "isCompleted",
          _flaxBinding11,
          _AlwaysStoppedAnimation_isCompleted,
        ),
        FlaxGetter(
          "isAnimating",
          _flaxBinding11,
          _AlwaysStoppedAnimation_isAnimating,
        ),
        FlaxGetter(
          "isForwardOrCompleted",
          _flaxBinding11,
          _AlwaysStoppedAnimation_isForwardOrCompleted,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AlwaysStoppedAnimation_addListener,
        ),
        "removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AlwaysStoppedAnimation_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AlwaysStoppedAnimation_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AlwaysStoppedAnimation_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _AlwaysStoppedAnimation_drive,
          genericFactory: _flaxGeneric_AlwaysStoppedAnimation_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _AlwaysStoppedAnimation_toString,
        ),
        "toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _AlwaysStoppedAnimation_toStringDetails,
        ),
        "@super:addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _AlwaysStoppedAnimation_super_drive,
          genericFactory: _flaxGeneric_AlwaysStoppedAnimation_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:get:value": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<_Owner0>(),
          _AlwaysStoppedAnimation_super_get_value,
        ),
        "@super:get:status": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding4,
          _FlaxProxyDispatch0_super_get_status,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
      },
      constructors: {
        "@implementation": <FlaxParameter>[
          FlaxParameter("value", types.ref<_Owner0>(), required: true),
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
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
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toStringDetails",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding8,
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
            _flaxBinding4,
            id: types.key<api.AnimationStatus Function()>() + ":callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isDismissed",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
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
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _Animatable_transform,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _Animatable_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _Animatable_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _Animatable_chain,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _Animatable_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _Animatable_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _Animatable_super_chain,
        ),
      },
      constructors: {"@implementation": _flaxBinding105},
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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
        FlaxCallbackParameter(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
          required: true,
          positional: true,
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
        FlaxGetter("value", types.ref<_Owner0>(), _Animation_value),
        FlaxGetter("status", _flaxBinding4, _Animation_status),
        FlaxGetter("isDismissed", _flaxBinding11, _Animation_isDismissed),
        FlaxGetter("isCompleted", _flaxBinding11, _Animation_isCompleted),
        FlaxGetter("isAnimating", _flaxBinding11, _Animation_isAnimating),
        FlaxGetter(
          "isForwardOrCompleted",
          _flaxBinding11,
          _Animation_isForwardOrCompleted,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _Animation_addListener,
        ),
        "removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _Animation_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _Animation_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _Animation_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _Animation_drive,
          genericFactory: _flaxGeneric_Animation_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _Animation_toString,
        ),
        "toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _Animation_toStringDetails,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _Animation_super_drive,
          genericFactory: _flaxGeneric_Animation_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
      },
      constructors: {"@implementation": _flaxBinding105},
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
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
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toStringDetails",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "status",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding4,
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
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
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

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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
  // ignore: unused_element
  Object? _AnimationMax_isListening(Object value) =>
      (value as api.AnimationMax<_Owner0>).isListening;
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
        FlaxCallbackParameter(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
          required: true,
          positional: true,
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
        FlaxGetter(
          "first",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMax_first,
        ),
        FlaxGetter(
          "next",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMax_next,
        ),
        FlaxGetter("status", _flaxBinding4, _AnimationMax_status),
        FlaxGetter("value", types.ref<_Owner0>(), _AnimationMax_value),
        FlaxGetter("isDismissed", _flaxBinding11, _AnimationMax_isDismissed),
        FlaxGetter("isCompleted", _flaxBinding11, _AnimationMax_isCompleted),
        FlaxGetter("isAnimating", _flaxBinding11, _AnimationMax_isAnimating),
        FlaxGetter(
          "isForwardOrCompleted",
          _flaxBinding11,
          _AnimationMax_isForwardOrCompleted,
        ),
        FlaxGetter("isListening", _flaxBinding11, _AnimationMax_isListening),
      ],
      {
        "didStartListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_didStartListening,
        ),
        "didStopListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_didStopListening,
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _AnimationMax_toString,
        ),
        "addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationMax_addListener,
        ),
        "removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationMax_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationMax_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationMax_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _AnimationMax_drive,
          genericFactory: _flaxGeneric_AnimationMax_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _AnimationMax_toStringDetails,
        ),
        "didRegisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_didRegisterListener,
        ),
        "didUnregisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_didUnregisterListener,
        ),
        "clearListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_clearListeners,
        ),
        "notifyListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_notifyListeners,
        ),
        "clearStatusListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_clearStatusListeners,
        ),
        "notifyStatusListeners": FlaxInstanceMethod(
          _flaxBinding626,
          _flaxBinding0,
          _AnimationMax_notifyStatusListeners,
        ),
        "@super:didStartListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_super_didStopListening,
        ),
        "@super:toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _AnimationMax_super_drive,
          genericFactory: _flaxGeneric_AnimationMax_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:didRegisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_super_didUnregisterListener,
        ),
        "@super:clearListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMax_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod(
          _flaxBinding626,
          _flaxBinding0,
          _AnimationMax_super_notifyStatusListeners,
        ),
        "@super:get:value": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<_Owner0>(),
          _AnimationMax_super_get_value,
        ),
        "@super:get:first": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMax_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMax_super_get_next,
        ),
        "@super:get:status": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding4,
          _FlaxProxyDispatch0_super_get_status,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
        "@super:get:isListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _AnimationMax_super_get_isListening,
        ),
      },
      constructors: {
        "@implementation": <FlaxParameter>[
          FlaxParameter(
            "first",
            types.ref<api.Animation<_Owner0>>(),
            required: true,
          ),
          FlaxParameter(
            "next",
            types.ref<api.Animation<_Owner0>>(),
            required: true,
          ),
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
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didStopListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "addListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
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
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didRegisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didUnregisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "status",
                _flaxBinding4,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
            _flaxBinding4,
            id: types.key<api.AnimationStatus Function()>() + ":callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isDismissed",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isListening",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
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

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
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

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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
  // ignore: unused_element
  Object? _AnimationMin_isListening(Object value) =>
      (value as api.AnimationMin<_Owner0>).isListening;
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
        FlaxCallbackParameter(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
          required: true,
          positional: true,
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
        FlaxGetter(
          "first",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMin_first,
        ),
        FlaxGetter(
          "next",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMin_next,
        ),
        FlaxGetter("status", _flaxBinding4, _AnimationMin_status),
        FlaxGetter("value", types.ref<_Owner0>(), _AnimationMin_value),
        FlaxGetter("isDismissed", _flaxBinding11, _AnimationMin_isDismissed),
        FlaxGetter("isCompleted", _flaxBinding11, _AnimationMin_isCompleted),
        FlaxGetter("isAnimating", _flaxBinding11, _AnimationMin_isAnimating),
        FlaxGetter(
          "isForwardOrCompleted",
          _flaxBinding11,
          _AnimationMin_isForwardOrCompleted,
        ),
        FlaxGetter("isListening", _flaxBinding11, _AnimationMin_isListening),
      ],
      {
        "didStartListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_didStartListening,
        ),
        "didStopListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_didStopListening,
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _AnimationMin_toString,
        ),
        "addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationMin_addListener,
        ),
        "removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationMin_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationMin_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationMin_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _AnimationMin_drive,
          genericFactory: _flaxGeneric_AnimationMin_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _AnimationMin_toStringDetails,
        ),
        "didRegisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_didRegisterListener,
        ),
        "didUnregisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_didUnregisterListener,
        ),
        "clearListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_clearListeners,
        ),
        "notifyListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_notifyListeners,
        ),
        "clearStatusListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_clearStatusListeners,
        ),
        "notifyStatusListeners": FlaxInstanceMethod(
          _flaxBinding626,
          _flaxBinding0,
          _AnimationMin_notifyStatusListeners,
        ),
        "@super:didStartListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_super_didStopListening,
        ),
        "@super:toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _AnimationMin_super_drive,
          genericFactory: _flaxGeneric_AnimationMin_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:didRegisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_super_didUnregisterListener,
        ),
        "@super:clearListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _AnimationMin_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod(
          _flaxBinding626,
          _flaxBinding0,
          _AnimationMin_super_notifyStatusListeners,
        ),
        "@super:get:value": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<_Owner0>(),
          _AnimationMin_super_get_value,
        ),
        "@super:get:first": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMin_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<api.Animation<_Owner0>>(),
          _AnimationMin_super_get_next,
        ),
        "@super:get:status": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding4,
          _FlaxProxyDispatch0_super_get_status,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
        "@super:get:isListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _AnimationMin_super_get_isListening,
        ),
      },
      constructors: {
        "@implementation": <FlaxParameter>[
          FlaxParameter(
            "first",
            types.ref<api.Animation<_Owner0>>(),
            required: true,
          ),
          FlaxParameter(
            "next",
            types.ref<api.Animation<_Owner0>>(),
            required: true,
          ),
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
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didStopListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toString",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "addListener",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
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
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didRegisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didUnregisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "status",
                _flaxBinding4,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
            _flaxBinding4,
            id: types.key<api.AnimationStatus Function()>() + ":callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isDismissed",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isListening",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
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
        FlaxGetter(
          "parent",
          types.ref<api.Animation<_Owner0>>(),
          _AnimationWithParentMixin_parent,
        ),
        FlaxGetter("status", _flaxBinding4, _AnimationWithParentMixin_status),
      ],
      {
        "addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationWithParentMixin_addListener,
        ),
        "removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationWithParentMixin_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _AnimationWithParentMixin_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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
  Object? _CompoundAnimation_isListening(Object value) =>
      (value as api.CompoundAnimation<_Owner0>).isListening;
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
        FlaxCallbackParameter(
          "child",
          types.ref<api.Animatable<_Callback0>>(withinCallback: true),
          required: true,
          positional: true,
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
        FlaxGetter("status", _flaxBinding4, _CompoundAnimation_status),
        FlaxGetter("value", types.ref<_Owner0>(), _CompoundAnimation_value),
        FlaxGetter(
          "isDismissed",
          _flaxBinding11,
          _CompoundAnimation_isDismissed,
        ),
        FlaxGetter(
          "isCompleted",
          _flaxBinding11,
          _CompoundAnimation_isCompleted,
        ),
        FlaxGetter(
          "isAnimating",
          _flaxBinding11,
          _CompoundAnimation_isAnimating,
        ),
        FlaxGetter(
          "isForwardOrCompleted",
          _flaxBinding11,
          _CompoundAnimation_isForwardOrCompleted,
        ),
        FlaxGetter(
          "isListening",
          _flaxBinding11,
          _CompoundAnimation_isListening,
        ),
        FlaxGetter(
          "first",
          types.ref<api.Animation<_Owner0>>(),
          _CompoundAnimation_first,
        ),
        FlaxGetter(
          "next",
          types.ref<api.Animation<_Owner0>>(),
          _CompoundAnimation_next,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _CompoundAnimation_addListener,
        ),
        "removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _CompoundAnimation_removeListener,
        ),
        "addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _CompoundAnimation_addStatusListener,
        ),
        "removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _CompoundAnimation_removeStatusListener,
        ),
        "drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _CompoundAnimation_drive,
          genericFactory: _flaxGeneric_CompoundAnimation_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _CompoundAnimation_toString,
        ),
        "toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _CompoundAnimation_toStringDetails,
        ),
        "didRegisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_didRegisterListener,
        ),
        "didUnregisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_didUnregisterListener,
        ),
        "didStartListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_didStartListening,
        ),
        "didStopListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_didStopListening,
        ),
        "clearListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_clearListeners,
        ),
        "notifyListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_notifyListeners,
        ),
        "clearStatusListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_clearStatusListeners,
        ),
        "notifyStatusListeners": FlaxInstanceMethod(
          _flaxBinding626,
          _flaxBinding0,
          _CompoundAnimation_notifyStatusListeners,
        ),
        "@super:addListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_addListener,
        ),
        "@super:removeListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid0,
                  id: types.key<void Function()>() + ":callback:<>()->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid0,
                  matches: FlaxCallbackAdapters.matchesVoid0,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_removeListener,
        ),
        "@super:addStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_addStatusListener,
        ),
        "@super:removeStatusListener": FlaxInstanceMethod(
          <FlaxParameter>[
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "status",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  _flaxBinding0,
                  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                  id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                  matches:
                      FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                ),
              ),
              required: true,
            ),
          ],
          _flaxBinding0,
          _FlaxProxyDispatch0_super_call_removeStatusListener,
        ),
        "@super:drive": FlaxInstanceMethod(
          _flaxBinding625,
          _flaxBinding113,
          _CompoundAnimation_super_drive,
          genericFactory: _flaxGeneric_CompoundAnimation_super_drive,
          ownerTypes: [FlaxDartTypes.typeOf<_Owner0>()],
        ),
        "@super:toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:toStringDetails": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch2_super_call_toStringDetails,
        ),
        "@super:didRegisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_super_didRegisterListener,
        ),
        "@super:didUnregisterListener": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_super_didUnregisterListener,
        ),
        "@super:didStartListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_super_didStartListening,
        ),
        "@super:didStopListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_super_didStopListening,
        ),
        "@super:clearListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_super_clearListeners,
        ),
        "@super:notifyListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_super_notifyListeners,
        ),
        "@super:clearStatusListeners": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding0,
          _CompoundAnimation_super_clearStatusListeners,
        ),
        "@super:notifyStatusListeners": FlaxInstanceMethod(
          _flaxBinding626,
          _flaxBinding0,
          _CompoundAnimation_super_notifyStatusListeners,
        ),
        "@super:get:first": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<api.Animation<_Owner0>>(),
          _CompoundAnimation_super_get_first,
        ),
        "@super:get:next": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<api.Animation<_Owner0>>(),
          _CompoundAnimation_super_get_next,
        ),
        "@super:get:status": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding4,
          _FlaxProxyDispatch0_super_get_status,
        ),
        "@super:get:isDismissed": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isDismissed,
        ),
        "@super:get:isCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isCompleted,
        ),
        "@super:get:isAnimating": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isAnimating,
        ),
        "@super:get:isForwardOrCompleted": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
        ),
        "@super:get:isListening": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding11,
          _CompoundAnimation_super_get_isListening,
        ),
      },
      constructors: {
        "@implementation": <FlaxParameter>[
          FlaxParameter(
            "first",
            types.ref<api.Animation<_Owner0>>(),
            required: true,
          ),
          FlaxParameter(
            "next",
            types.ref<api.Animation<_Owner0>>(),
            required: true,
          ),
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid0,
                    id: types.key<void Function()>() + ":callback:<>()->void:",
                    invoke: FlaxCallbackAdapters.invokeVoid0,
                    matches: FlaxCallbackAdapters.matchesVoid0,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "listener",
                FlaxTypeRef(
                  "callback",
                  callback: FlaxCallbackBinding(
                    [
                      FlaxCallbackParameter(
                        "status",
                        _flaxBinding4,
                        required: true,
                        positional: true,
                      ),
                    ],
                    _flaxBinding0,
                    FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
                    id: types.key<void Function(api.AnimationStatus status)>() + ":callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
                    invoke:
                        FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
                    matches:
                        FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
                  ),
                ),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
            [
              FlaxCallbackParameter(
                "child",
                _flaxBinding112,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding113,
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
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "toStringDetails",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didRegisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didUnregisterListener",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didStartListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "didStopListening",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "clearStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding0,
            id: types.key<void Function()>() + ":callback:<>()->void:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "notifyStatusListeners",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "status",
                _flaxBinding4,
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
            _flaxBinding4,
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
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isAnimating",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isForwardOrCompleted",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
            id: types.key<bool Function()>() + ":callback:<>()->bool:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "isListening",
          1,
          FlaxCallbackBinding.signature(
            [],
            _flaxBinding11,
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
        FlaxGetter("begin", types.ref<_Owner0?>(), _ConstantTween_begin),
        FlaxGetter("end", types.ref<_Owner0?>(), _ConstantTween_end),
      ],
      {
        "lerp": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _ConstantTween_lerp,
        ),
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _ConstantTween_transform,
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _ConstantTween_toString,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _ConstantTween_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _ConstantTween_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _ConstantTween_chain,
        ),
        "@super:lerp": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _ConstantTween_super_lerp,
        ),
        "@super:transform": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _ConstantTween_super_transform,
        ),
        "@super:toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _ConstantTween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _ConstantTween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _ConstantTween_super_chain,
        ),
        "@super:get:begin": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<_Owner0?>(),
          _ConstantTween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<_Owner0?>(),
          _ConstantTween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod(
          [FlaxParameter("value", types.ref<_Owner0?>(), required: true)],
          const FlaxTypeRef("void"),
          _ConstantTween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod(
          [FlaxParameter("value", types.ref<_Owner0?>(), required: true)],
          const FlaxTypeRef("void"),
          _ConstantTween_super_set_end,
        ),
      },
      constructors: {
        "@implementation": <FlaxParameter>[
          FlaxParameter("value", types.ref<_Owner0>(), required: true),
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
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
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
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
              FlaxCallbackParameter(
                "value",
                types.ref<_Owner0?>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "value",
                types.ref<_Owner0?>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
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

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
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
            "transform": FlaxInstanceMethod(
              _flaxBinding121,
              types.ref<_Owner0>(),
              _ParametricCurve_transform,
            ),
            "transformInternal": FlaxInstanceMethod(
              _flaxBinding121,
              types.ref<_Owner0>(),
              _ParametricCurve_transformInternal,
            ),
            "toString": FlaxInstanceMethod(
              _flaxBinding105,
              _flaxBinding8,
              _ParametricCurve_toString,
            ),
            "@super:transform": FlaxInstanceMethod(
              _flaxBinding121,
              types.ref<_Owner0>(),
              _ParametricCurve_super_transform,
            ),
            "@super:transformInternal": FlaxInstanceMethod(
              _flaxBinding121,
              types.ref<_Owner0>(),
              _ParametricCurve_super_transformInternal,
            ),
            "@super:toString": FlaxInstanceMethod(
              _flaxBinding105,
              _flaxBinding8,
              _FlaxProxyDispatch1_super_call_toString,
            ),
          },
          constructors: {"@implementation": _flaxBinding105},
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
                [
                  FlaxCallbackParameter(
                    "t",
                    _flaxBinding20,
                    required: true,
                    positional: true,
                  ),
                ],
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
                [
                  FlaxCallbackParameter(
                    "t",
                    _flaxBinding20,
                    required: true,
                    positional: true,
                  ),
                ],
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
                _flaxBinding8,
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

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
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

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
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

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
          ),
        ],
        types.ref<api.Animation<_Method0>>(),
        invoke,
      );
    };
Function
_flaxGeneric_ReverseAnimation_super_drive<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as _ReverseAnimationProxy)._flaxSuper_drive<_Method0>(
          values["child"] as api.Animatable<_Method0>,
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
          ),
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
        FlaxGetter("begin", types.ref<_Owner0?>(), _ReverseTween_begin),
        FlaxGetter("end", types.ref<_Owner0?>(), _ReverseTween_end),
        FlaxGetter(
          "parent",
          types.ref<api.Tween<_Owner0>>(),
          _ReverseTween_parent,
        ),
      ],
      {
        "lerp": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _ReverseTween_lerp,
        ),
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _ReverseTween_transform,
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _ReverseTween_toString,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _ReverseTween_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _ReverseTween_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _ReverseTween_chain,
        ),
        "@super:lerp": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _ReverseTween_super_lerp,
        ),
        "@super:transform": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _ReverseTween_super_transform,
        ),
        "@super:toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _ReverseTween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _ReverseTween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _ReverseTween_super_chain,
        ),
        "@super:get:parent": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<api.Tween<_Owner0>>(),
          _ReverseTween_super_get_parent,
        ),
        "@super:get:begin": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<_Owner0?>(),
          _ReverseTween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<_Owner0?>(),
          _ReverseTween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod(
          [FlaxParameter("value", types.ref<_Owner0?>(), required: true)],
          const FlaxTypeRef("void"),
          _ReverseTween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod(
          [FlaxParameter("value", types.ref<_Owner0?>(), required: true)],
          const FlaxTypeRef("void"),
          _ReverseTween_super_set_end,
        ),
      },
      constructors: {
        "@implementation": <FlaxParameter>[
          FlaxParameter(
            "parent",
            types.ref<api.Tween<_Owner0>>(),
            required: true,
          ),
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
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
            _flaxBinding8,
            id: types.key<String Function()>() + ":callback:<>()->String:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "evaluate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
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
              FlaxCallbackParameter(
                "value",
                types.ref<_Owner0?>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "value",
                types.ref<_Owner0?>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "child",
            types.ref<api.Animatable<_Method0>>(),
            required: true,
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

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "child",
        types.ref<api.Animatable<_Method0>>(),
        required: true,
      ),
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
        FlaxGetter("begin", types.ref<_Owner0?>(), _Tween_begin),
        FlaxGetter("end", types.ref<_Owner0?>(), _Tween_end),
      ],
      {
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _Tween_transform,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _Tween_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _Tween_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _Tween_chain,
        ),
        "lerp": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _Tween_lerp,
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _Tween_toString,
        ),
        "@super:transform": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _Tween_super_transform,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _Tween_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _Tween_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _Tween_super_chain,
        ),
        "@super:lerp": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _Tween_super_lerp,
        ),
        "@super:toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch1_super_call_toString,
        ),
        "@super:get:begin": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<_Owner0?>(),
          _Tween_super_get_begin,
        ),
        "@super:get:end": FlaxInstanceMethod(
          _flaxBinding105,
          types.ref<_Owner0?>(),
          _Tween_super_get_end,
        ),
        "@super:set:begin": FlaxInstanceMethod(
          [FlaxParameter("value", types.ref<_Owner0?>(), required: true)],
          const FlaxTypeRef("void"),
          _Tween_super_set_begin,
        ),
        "@super:set:end": FlaxInstanceMethod(
          [FlaxParameter("value", types.ref<_Owner0?>(), required: true)],
          const FlaxTypeRef("void"),
          _Tween_super_set_end,
        ),
      },
      constructors: {
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
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
            _flaxBinding8,
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
              FlaxCallbackParameter(
                "value",
                types.ref<_Owner0?>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
              FlaxCallbackParameter(
                "value",
                types.ref<_Owner0?>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            _flaxBinding0,
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
        "transform": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _TweenSequence_transform,
        ),
        "evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _TweenSequence_evaluate,
        ),
        "animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _TweenSequence_animate,
        ),
        "chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _TweenSequence_chain,
        ),
        "toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _TweenSequence_toString,
        ),
        "@super:transform": FlaxInstanceMethod(
          _flaxBinding121,
          types.ref<_Owner0>(),
          _TweenSequence_super_transform,
        ),
        "@super:evaluate": FlaxInstanceMethod(
          _flaxBinding122,
          types.ref<_Owner0>(),
          _TweenSequence_super_evaluate,
        ),
        "@super:animate": FlaxInstanceMethod(
          _flaxBinding123,
          types.ref<api.Animation<_Owner0>>(),
          _TweenSequence_super_animate,
        ),
        "@super:chain": FlaxInstanceMethod(
          _flaxBinding124,
          types.ref<api.Animatable<_Owner0>>(),
          _TweenSequence_super_chain,
        ),
        "@super:toString": FlaxInstanceMethod(
          _flaxBinding105,
          _flaxBinding8,
          _FlaxProxyDispatch1_super_call_toString,
        ),
      },
      constructors: {
        "@implementation": <FlaxParameter>[
          FlaxParameter(
            "items",
            types.ref<List<api.TweenSequenceItem<_Owner0>>>(),
            required: true,
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
            [
              FlaxCallbackParameter(
                "t",
                _flaxBinding20,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "animation",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Owner0>(withinCallback: true),
            id: types.key<_Owner0 Function(api.Animation<double> animation)>() + ":callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->parameter:",
          ),
          hasSuper: true,
        ),
        FlaxProxyMember(
          "animate",
          0,
          FlaxCallbackBinding.signature(
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding26,
                required: true,
                positional: true,
              ),
            ],
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
            [
              FlaxCallbackParameter(
                "parent",
                _flaxBinding55,
                required: true,
                positional: true,
              ),
            ],
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
            _flaxBinding8,
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
Function _flaxClass_TweenSequenceItem<_Owner0 extends Object?>() =>
    (FlaxDartTypes types, String id) {
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
      Object _createTweenSequenceItem(
        String ctor,
        Map<String, Object?> values,
      ) {
        switch (ctor) {
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
            FlaxGetter(
              "tween",
              types.ref<api.Animatable<_Owner0>>(),
              _TweenSequenceItem_tween,
            ),
            FlaxGetter("weight", _flaxBinding20, _TweenSequenceItem_weight),
          ],
          {
            "@super:get:tween": FlaxInstanceMethod(
              _flaxBinding105,
              types.ref<api.Animatable<_Owner0>>(),
              _TweenSequenceItem_super_get_tween,
            ),
            "@super:get:weight": FlaxInstanceMethod(
              _flaxBinding105,
              _flaxBinding20,
              _TweenSequenceItem_super_get_weight,
            ),
          },
          constructors: {
            "@implementation": <FlaxParameter>[
              FlaxParameter(
                "tween",
                types.ref<api.Animatable<_Owner0>>(),
                required: true,
              ),
              FlaxParameter("weight", _flaxBinding20, required: true),
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
                _flaxBinding20,
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
              FlaxCallbackParameter(
                "status",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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
      FlaxCallbackParameter(
        "child",
        types.ref<api.Animatable<_Callback0>>(withinCallback: true),
        required: true,
        positional: true,
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

Object _collection0Create() => <api1.Offset>[];
bool _collection0Matches(Object value) => value is List<api1.Offset>;
Object _collection1Create() => <api1.Offset>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.Offset>();
bool _collection1Matches(Object value) => value is Iterable<api1.Offset>;
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
Object _collection7Create() => <String>[];
bool _collection7Matches(Object value) => value is List<String>;
Object _collection8Create() => <String>[];
Object _collection8Restore(Object value) =>
    (value as Iterable<Object?>).cast<String>();
bool _collection8Matches(Object value) => value is Iterable<String>;
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

const _flaxBinding0 = FlaxTypeRef("void");
const _flaxBinding1 = FlaxCallbackBinding(
  [],
  _flaxBinding0,
  FlaxCallbackAdapters.wrapVoid0,
  id: "callback:<>()->void:",
  invoke: FlaxCallbackAdapters.invokeVoid0,
  matches: FlaxCallbackAdapters.matchesVoid0,
);
const _flaxBinding2 = FlaxTypeRef("callback", callback: _flaxBinding1);
const _flaxBinding3 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "listener",
      _flaxBinding2,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:listener:callback:<>()->void:)->void:",
);
const _flaxBinding4 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_animation#type:AnimationStatus",
);
const _flaxBinding5 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "status",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  FlaxCallbackAdapters.wrapVoid1<api.AnimationStatus>,
  id: "callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api.AnimationStatus>,
  matches: FlaxCallbackAdapters.matchesVoid1<api.AnimationStatus>,
);
const _flaxBinding6 = FlaxTypeRef("callback", callback: _flaxBinding5);
const _flaxBinding7 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "listener",
      _flaxBinding6,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:listener:callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:)->void:",
);
const _flaxBinding8 = FlaxTypeRef("String");
const _flaxBinding9 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding8,
  id: "callback:<>()->String:",
);
const _flaxBinding10 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding4,
  id: "callback:<>()->enum:flax.core/sdk_animation#type:AnimationStatus",
);
const _flaxBinding11 = FlaxTypeRef("bool");
const _flaxBinding12 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding11,
  id: "callback:<>()->bool:",
);
const _flaxBinding13 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding0,
  id: "callback:<>()->void:",
);
const _flaxBinding14 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "status",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:status:enum:flax.core/sdk_animation#type:AnimationStatus)->void:",
);
const _flaxBinding15 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TickerProvider",
);
const _flaxBinding16 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "vsync",
      _flaxBinding15,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:vsync:object:flax.core/flutter#type:TickerProvider)->void:",
);
const _flaxBinding17 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_physics#type:Simulation",
);
const _flaxBinding18 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding19 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "simulation",
      _flaxBinding17,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding18,
  id: "callback:<>(p:r:simulation:object:flax.core/sdk_physics#type:Simulation)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding20 = FlaxTypeRef("double");
const _flaxBinding21 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding20,
  id: "callback:<>()->double:",
);
const _flaxBinding22 = FlaxTypeRef("String", nullable: true);
const _flaxBinding23 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding22,
  id: "callback:<>()->String?:",
);
const _flaxBinding24 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_animation#type:AnimationBehavior",
);
const _flaxBinding25 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding24,
  id: "callback:<>()->enum:flax.core/sdk_animation#type:AnimationBehavior",
);
const _flaxBinding26 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<double>>,
);
const _flaxBinding27 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding26,
  id: "callback:<>()->object:flax.core/sdk_animation#type:Animation<double:>",
);
const _flaxBinding28 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
  nullable: true,
);
const _flaxBinding29 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding28,
  id: "callback:<>()->object?:flax.core/flutter#type:Duration",
);
const _flaxBinding30 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding28,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Duration)->void:",
);
const _flaxBinding31 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:double:)->void:",
);
const _flaxBinding32 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding33 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "properties",
      _flaxBinding32,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:properties:object:flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder)->void:",
);
const _flaxBinding34 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationStyle",
  nullable: true,
);
const _flaxBinding35 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:AnimationStyle",
);
const _flaxBinding36 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "other",
      _flaxBinding34,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding35,
  id: "callback:<>(p:r:other:object?:flax.core/sdk_animation#type:AnimationStyle)->object:flax.core/sdk_animation#type:AnimationStyle",
);
const _flaxBinding37 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Curve",
  nullable: true,
);
const _flaxBinding38 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding37,
  id: "callback:<>()->object?:flax.core/flutter#type:Curve",
);
const _flaxBinding39 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "t",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  id: "callback:<>(p:r:t:double:)->double:",
);
const _flaxBinding40 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
);
const _flaxBinding41 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding40,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Offset]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding42 = FlaxTypeRef(
  "list",
  item: _flaxBinding40,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Offset]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding41,
);
const _flaxBinding43 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding42,
  id: "callback:<>()->list:[object:flax.core/flutter#type:Offset]",
);
const _flaxBinding44 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Curve",
);
const _flaxBinding45 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding44,
  id: "callback:<>()->object:flax.core/flutter#type:Curve",
);
const _flaxBinding46 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "x",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  id: "callback:<>(p:r:x:double:)->double:",
);
const _flaxBinding47 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "t",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding40,
  id: "callback:<>(p:r:t:double:)->object:flax.core/flutter#type:Offset",
);
const _flaxBinding48 = FlaxTypeRef("int");
const _flaxBinding49 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding48,
  id: "callback:<>()->int:",
);
const _flaxBinding50 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Color",
  nullable: true,
);
const _flaxBinding51 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "t",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding50,
  id: "callback:<>(p:r:t:double:)->object?:flax.core/flutter#type:Color",
);
const _flaxBinding52 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "animation",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding50,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->object?:flax.core/flutter#type:Color",
);
const _flaxBinding53 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<api1.Color?>>,
);
const _flaxBinding54 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding53,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<object?:flax.core/flutter#type:Color>",
);
const _flaxBinding55 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<double>>,
);
const _flaxBinding56 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<api1.Color?>>,
);
const _flaxBinding57 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding56,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<object?:flax.core/flutter#type:Color>",
);
const _flaxBinding58 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding50,
  id: "callback:<>()->object?:flax.core/flutter#type:Color",
);
const _flaxBinding59 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding50,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Color)->void:",
);
const _flaxBinding60 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding40,
  id: "callback:<>()->object:flax.core/flutter#type:Offset",
);
const _flaxBinding61 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "animation",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->double:",
);
const _flaxBinding62 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding26,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<double:>",
);
const _flaxBinding63 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding55,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<double:>",
);
const _flaxBinding64 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding44,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:object:flax.core/flutter#type:Curve)->void:",
);
const _flaxBinding65 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding37,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Curve)->void:",
);
const _flaxBinding66 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding11,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:bool:)->void:",
);
const _flaxBinding67 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "t",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding48,
  id: "callback:<>(p:r:t:double:)->int:",
);
const _flaxBinding68 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "animation",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding48,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->int:",
);
const _flaxBinding69 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<int>>,
);
const _flaxBinding70 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding69,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<int:>",
);
const _flaxBinding71 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<int>>,
);
const _flaxBinding72 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding71,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<int:>",
);
const _flaxBinding73 = FlaxTypeRef("int", nullable: true);
const _flaxBinding74 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding73,
  id: "callback:<>()->int?:",
);
const _flaxBinding75 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding73,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:int?:)->void:",
);
const _flaxBinding76 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<double>?>,
  nullable: true,
);
const _flaxBinding77 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding76,
  id: "callback:<>()->object?:flax.core/sdk_animation#type:Animation<double:>",
);
const _flaxBinding78 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding76,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_animation#type:Animation<double:>)->void:",
);
const _flaxBinding79 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dart_ui#type:Rect",
  nullable: true,
);
const _flaxBinding80 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "t",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding79,
  id: "callback:<>(p:r:t:double:)->object?:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding81 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "animation",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding79,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->object?:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding82 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<api1.Rect?>>,
);
const _flaxBinding83 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding82,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<object?:flax.core/sdk_dart_ui#type:Rect>",
);
const _flaxBinding84 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<api1.Rect?>>,
);
const _flaxBinding85 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding84,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<object?:flax.core/sdk_dart_ui#type:Rect>",
);
const _flaxBinding86 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding79,
  id: "callback:<>()->object?:flax.core/sdk_dart_ui#type:Rect",
);
const _flaxBinding87 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding79,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:object?:flax.core/sdk_dart_ui#type:Rect)->void:",
);
const _flaxBinding88 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Size",
  nullable: true,
);
const _flaxBinding89 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "t",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding88,
  id: "callback:<>(p:r:t:double:)->object?:flax.core/flutter#type:Size",
);
const _flaxBinding90 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "animation",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding88,
  id: "callback:<>(p:r:animation:object:flax.core/sdk_animation#type:Animation<double:>)->object?:flax.core/flutter#type:Size",
);
const _flaxBinding91 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<api1.Size?>>,
);
const _flaxBinding92 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding26,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding91,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animation<double:>)->object:flax.core/sdk_animation#type:Animation<object?:flax.core/flutter#type:Size>",
);
const _flaxBinding93 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<api1.Size?>>,
);
const _flaxBinding94 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "parent",
      _flaxBinding55,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding93,
  id: "callback:<>(p:r:parent:object:flax.core/sdk_animation#type:Animatable<double:>)->object:flax.core/sdk_animation#type:Animatable<object?:flax.core/flutter#type:Size>",
);
const _flaxBinding95 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding88,
  id: "callback:<>()->object?:flax.core/flutter#type:Size",
);
const _flaxBinding96 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding88,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:object?:flax.core/flutter#type:Size)->void:",
);
const _flaxBinding97 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding1,
);
const _flaxBinding98 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding97,
  id: "callback:<>()->callback?:<>()->void:",
);
const _flaxBinding99 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "value",
      _flaxBinding97,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(p:r:value:callback?:<>()->void:)->void:",
);
const _flaxBinding100 = FlaxGetter(
  "status",
  _flaxBinding4,
  _AlwaysStoppedAnimation_status,
);
const _flaxBinding101 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _AlwaysStoppedAnimation_isDismissed,
);
const _flaxBinding102 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _AlwaysStoppedAnimation_isCompleted,
);
const _flaxBinding103 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _AlwaysStoppedAnimation_isAnimating,
);
const _flaxBinding104 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _AlwaysStoppedAnimation_isForwardOrCompleted,
);
const _flaxBinding105 = <FlaxParameter>[];
const _flaxBinding106 = FlaxTypeRef("any", nullable: true);
const _flaxBinding107 = <FlaxParameter>[
  FlaxParameter("value", _flaxBinding106, required: true),
];
const _flaxBinding108 = FlaxProxyMember(
  "addListener",
  0,
  _flaxBinding3,
  hasSuper: true,
);
const _flaxBinding109 = FlaxProxyMember(
  "removeListener",
  0,
  _flaxBinding3,
  hasSuper: true,
);
const _flaxBinding110 = FlaxProxyMember(
  "addStatusListener",
  0,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding111 = FlaxProxyMember(
  "removeStatusListener",
  0,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding112 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animatable",
  dartType: FlaxDartTypes.typeOf<api.Animatable<Object?>>,
);
const _flaxBinding113 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<Object?>>,
);
const _flaxBinding114 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding9,
  hasSuper: true,
);
const _flaxBinding115 = FlaxProxyMember(
  "toStringDetails",
  0,
  _flaxBinding9,
  hasSuper: true,
);
const _flaxBinding116 = FlaxProxyMember(
  "status",
  1,
  _flaxBinding10,
  hasSuper: true,
);
const _flaxBinding117 = FlaxProxyMember(
  "isDismissed",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding118 = FlaxProxyMember(
  "isCompleted",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding119 = FlaxProxyMember(
  "isAnimating",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding120 = FlaxProxyMember(
  "isForwardOrCompleted",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding121 = <FlaxParameter>[
  FlaxParameter("t", _flaxBinding20, required: true),
];
const _flaxBinding122 = <FlaxParameter>[
  FlaxParameter("animation", _flaxBinding26, required: true),
];
const _flaxBinding123 = <FlaxParameter>[
  FlaxParameter("parent", _flaxBinding26, required: true),
];
const _flaxBinding124 = <FlaxParameter>[
  FlaxParameter("parent", _flaxBinding55, required: true),
];
const _flaxBinding125 = FlaxGetter("status", _flaxBinding4, _Animation_status);
const _flaxBinding126 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _Animation_isDismissed,
);
const _flaxBinding127 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _Animation_isCompleted,
);
const _flaxBinding128 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _Animation_isAnimating,
);
const _flaxBinding129 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _Animation_isForwardOrCompleted,
);
const _flaxBinding130 = FlaxProxyMember("addListener", 0, _flaxBinding3);
const _flaxBinding131 = FlaxProxyMember("removeListener", 0, _flaxBinding3);
const _flaxBinding132 = FlaxProxyMember("addStatusListener", 0, _flaxBinding7);
const _flaxBinding133 = FlaxProxyMember(
  "removeStatusListener",
  0,
  _flaxBinding7,
);
const _flaxBinding134 = FlaxProxyMember("status", 1, _flaxBinding10);
const _flaxBinding135 = FlaxGetter(
  "status",
  _flaxBinding4,
  _AnimationController_status,
);
const _flaxBinding136 = FlaxGetter(
  "value",
  _flaxBinding20,
  _AnimationController_value,
);
const _flaxBinding137 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _AnimationController_isDismissed,
);
const _flaxBinding138 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _AnimationController_isCompleted,
);
const _flaxBinding139 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _AnimationController_isAnimating,
);
const _flaxBinding140 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _AnimationController_isForwardOrCompleted,
);
const _flaxBinding141 = FlaxGetter(
  "lowerBound",
  _flaxBinding20,
  _AnimationController_lowerBound,
);
const _flaxBinding142 = FlaxGetter(
  "upperBound",
  _flaxBinding20,
  _AnimationController_upperBound,
);
const _flaxBinding143 = FlaxGetter(
  "debugLabel",
  _flaxBinding22,
  _AnimationController_debugLabel,
);
const _flaxBinding144 = FlaxGetter(
  "animationBehavior",
  _flaxBinding24,
  _AnimationController_animationBehavior,
);
const _flaxBinding145 = FlaxGetter(
  "view",
  _flaxBinding26,
  _AnimationController_view,
);
const _flaxBinding146 = FlaxGetter(
  "duration",
  _flaxBinding28,
  _AnimationController_duration,
);
const _flaxBinding147 = FlaxGetter(
  "reverseDuration",
  _flaxBinding28,
  _AnimationController_reverseDuration,
);
const _flaxBinding148 = FlaxGetter(
  "velocity",
  _flaxBinding20,
  _AnimationController_velocity,
);
const _flaxBinding149 = FlaxGetter(
  "lastElapsedDuration",
  _flaxBinding28,
  _AnimationController_lastElapsedDuration,
);
const _flaxBinding150 = FlaxSetter(
  "duration",
  _flaxBinding28,
  _AnimationController_set_duration,
);
const _flaxBinding151 = FlaxSetter(
  "reverseDuration",
  _flaxBinding28,
  _AnimationController_set_reverseDuration,
);
const _flaxBinding152 = FlaxSetter(
  "value",
  _flaxBinding20,
  _AnimationController_set_value,
);
const _flaxBinding153 = FlaxInstanceMethod.signature(
  _flaxBinding3,
  _AnimationLocalListenersMixin_addListener,
);
const _flaxBinding154 = FlaxInstanceMethod.signature(
  _flaxBinding3,
  _AnimationLocalListenersMixin_removeListener,
);
const _flaxBinding155 = FlaxInstanceMethod.signature(
  _flaxBinding7,
  _AnimationLocalStatusListenersMixin_addStatusListener,
);
const _flaxBinding156 = FlaxInstanceMethod.signature(
  _flaxBinding7,
  _AnimationLocalStatusListenersMixin_removeStatusListener,
);
const _flaxBinding157 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _AnimationController_toString,
);
const _flaxBinding158 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _AnimationController_toStringDetails,
);
const _flaxBinding159 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationEagerListenerMixin_didRegisterListener,
);
const _flaxBinding160 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationEagerListenerMixin_didUnregisterListener,
);
const _flaxBinding161 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationEagerListenerMixin_dispose,
);
const _flaxBinding162 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLocalListenersMixin_clearListeners,
);
const _flaxBinding163 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLocalListenersMixin_notifyListeners,
);
const _flaxBinding164 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLocalStatusListenersMixin_clearStatusListeners,
);
const _flaxBinding165 = FlaxInstanceMethod.signature(
  _flaxBinding14,
  _AnimationLocalStatusListenersMixin_notifyStatusListeners,
);
const _flaxBinding166 = FlaxInstanceMethod.signature(
  _flaxBinding16,
  _AnimationController_resync,
);
const _flaxBinding167 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationController_reset,
);
const _flaxBinding168 = FlaxTypeRef("double", nullable: true);
const _flaxBinding169 = <FlaxParameter>[
  FlaxParameter("from", _flaxBinding168, required: false),
];
const _flaxBinding170 = FlaxInstanceMethod(
  _flaxBinding169,
  _flaxBinding18,
  _AnimationController_forward,
);
const _flaxBinding171 = FlaxInstanceMethod(
  _flaxBinding169,
  _flaxBinding18,
  _AnimationController_reverse,
);
const _flaxBinding172 = FlaxInstanceMethod(
  _flaxBinding169,
  _flaxBinding18,
  _AnimationController_toggle,
);
const _flaxBinding173 = <FlaxParameter>[
  FlaxParameter("target", _flaxBinding20, required: true),
  FlaxParameter("curve", _flaxBinding44, required: false, omitWhenAbsent: true),
  FlaxParameter("duration", _flaxBinding28, required: false),
];
const _flaxBinding174 = FlaxInstanceMethod(
  _flaxBinding173,
  _flaxBinding18,
  _AnimationController_animateTo,
);
const _flaxBinding175 = FlaxInstanceMethod(
  _flaxBinding173,
  _flaxBinding18,
  _AnimationController_animateBack,
);
const _flaxBinding176 = <FlaxParameter>[
  FlaxParameter("count", _flaxBinding73, required: false),
  FlaxParameter("max", _flaxBinding168, required: false),
  FlaxParameter("min", _flaxBinding168, required: false),
  FlaxParameter("period", _flaxBinding28, required: false),
  FlaxParameter(
    "reverse",
    _flaxBinding11,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding177 = FlaxInstanceMethod(
  _flaxBinding176,
  _flaxBinding18,
  _AnimationController_repeat,
);
const _flaxBinding178 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_animation#type:AnimationBehavior",
  nullable: true,
);
const _flaxBinding179 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_physics#type:SpringDescription",
  nullable: true,
);
const _flaxBinding180 = <FlaxParameter>[
  FlaxParameter("animationBehavior", _flaxBinding178, required: false),
  FlaxParameter("springDescription", _flaxBinding179, required: false),
  FlaxParameter("velocity", _flaxBinding20, required: false, defaultValue: 1.0),
];
const _flaxBinding181 = FlaxInstanceMethod(
  _flaxBinding180,
  _flaxBinding18,
  _AnimationController_fling,
);
const _flaxBinding182 = FlaxInstanceMethod.signature(
  _flaxBinding19,
  _AnimationController_animateWith,
);
const _flaxBinding183 = FlaxInstanceMethod.signature(
  _flaxBinding19,
  _AnimationController_animateBackWith,
);
const _flaxBinding184 = <FlaxParameter>[
  FlaxParameter(
    "canceled",
    _flaxBinding11,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding185 = FlaxInstanceMethod(
  _flaxBinding184,
  _flaxBinding0,
  _AnimationController_stop,
);
const _flaxBinding186 = <FlaxParameter>[
  FlaxParameter("value", _flaxBinding168, required: false),
  FlaxParameter("duration", _flaxBinding28, required: false),
  FlaxParameter("reverseDuration", _flaxBinding28, required: false),
  FlaxParameter("debugLabel", _flaxBinding22, required: false),
  FlaxParameter(
    "lowerBound",
    _flaxBinding20,
    required: false,
    defaultValue: 0.0,
  ),
  FlaxParameter(
    "upperBound",
    _flaxBinding20,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter(
    "animationBehavior",
    _flaxBinding24,
    required: false,
    defaultValue: api.AnimationBehavior.normal,
  ),
  FlaxParameter("vsync", _flaxBinding15, required: true),
];
const _flaxBinding187 = FlaxProxyMember(
  "didRegisterListener",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding188 = FlaxProxyMember(
  "didUnregisterListener",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding189 = FlaxProxyMember(
  "dispose",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding190 = FlaxProxyMember(
  "clearListeners",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding191 = FlaxProxyMember(
  "notifyListeners",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding192 = FlaxProxyMember(
  "clearStatusListeners",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding193 = FlaxProxyMember(
  "notifyStatusListeners",
  0,
  _flaxBinding14,
  hasSuper: true,
);
const _flaxBinding194 = FlaxProxyMember(
  "resync",
  0,
  _flaxBinding16,
  hasSuper: true,
);
const _flaxBinding195 = FlaxProxyMember(
  "reset",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding196 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "from",
      _flaxBinding168,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding18,
  id: "callback:<>(n:o:from:double?:)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding197 = FlaxProxyMember(
  "forward",
  0,
  _flaxBinding196,
  hasSuper: true,
);
const _flaxBinding198 = FlaxProxyMember(
  "reverse",
  0,
  _flaxBinding196,
  hasSuper: true,
);
const _flaxBinding199 = FlaxProxyMember(
  "toggle",
  0,
  _flaxBinding196,
  hasSuper: true,
);
const _flaxBinding200 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "target",
      _flaxBinding20,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "duration",
      _flaxBinding28,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "curve",
      _flaxBinding44,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding18,
  id: "callback:<>(p:r:target:double:,n:o:duration:object?:flax.core/flutter#type:Duration,n:o:curve:object:flax.core/flutter#type:Curve)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding201 = FlaxProxyMember(
  "animateTo",
  0,
  _flaxBinding200,
  hasSuper: true,
);
const _flaxBinding202 = FlaxProxyMember(
  "animateBack",
  0,
  _flaxBinding200,
  hasSuper: true,
);
const _flaxBinding203 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "min",
      _flaxBinding168,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "max",
      _flaxBinding168,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "reverse",
      _flaxBinding11,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "period",
      _flaxBinding28,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "count",
      _flaxBinding73,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding18,
  id: "callback:<>(n:o:min:double?:,n:o:max:double?:,n:o:reverse:bool:,n:o:period:object?:flax.core/flutter#type:Duration,n:o:count:int?:)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding204 = FlaxProxyMember(
  "repeat",
  0,
  _flaxBinding203,
  hasSuper: true,
);
const _flaxBinding205 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "velocity",
      _flaxBinding20,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "springDescription",
      _flaxBinding179,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "animationBehavior",
      _flaxBinding178,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding18,
  id: "callback:<>(n:o:velocity:double:,n:o:springDescription:object?:flax.core/sdk_physics#type:SpringDescription,n:o:animationBehavior:enum?:flax.core/sdk_animation#type:AnimationBehavior)->object:flax.core/sdk_scheduler#type:TickerFuture",
);
const _flaxBinding206 = FlaxProxyMember(
  "fling",
  0,
  _flaxBinding205,
  hasSuper: true,
);
const _flaxBinding207 = FlaxProxyMember(
  "animateWith",
  0,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding208 = FlaxProxyMember(
  "animateBackWith",
  0,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding209 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "canceled",
      _flaxBinding11,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding0,
  id: "callback:<>(n:o:canceled:bool:)->void:",
);
const _flaxBinding210 = FlaxProxyMember(
  "stop",
  0,
  _flaxBinding209,
  hasSuper: true,
);
const _flaxBinding211 = FlaxProxyMember(
  "lowerBound",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding212 = FlaxProxyMember(
  "upperBound",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding213 = FlaxProxyMember(
  "debugLabel",
  1,
  _flaxBinding23,
  hasSuper: true,
);
const _flaxBinding214 = FlaxProxyMember(
  "animationBehavior",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding215 = FlaxProxyMember(
  "view",
  1,
  _flaxBinding27,
  hasSuper: true,
);
const _flaxBinding216 = FlaxProxyMember(
  "duration",
  1,
  _flaxBinding29,
  hasSuper: true,
);
const _flaxBinding217 = FlaxProxyMember(
  "reverseDuration",
  1,
  _flaxBinding29,
  hasSuper: true,
);
const _flaxBinding218 = FlaxProxyMember(
  "value",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding219 = FlaxProxyMember(
  "velocity",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding220 = FlaxProxyMember(
  "lastElapsedDuration",
  1,
  _flaxBinding29,
  hasSuper: true,
);
const _flaxBinding221 = FlaxProxyMember(
  "duration",
  2,
  _flaxBinding30,
  hasSuper: true,
);
const _flaxBinding222 = FlaxProxyMember(
  "reverseDuration",
  2,
  _flaxBinding30,
  hasSuper: true,
);
const _flaxBinding223 = FlaxProxyMember(
  "value",
  2,
  _flaxBinding31,
  hasSuper: true,
);
const _flaxBinding224 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationController",
  [
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
  ],
  {
    "addListener": _flaxBinding153,
    "removeListener": _flaxBinding154,
    "addStatusListener": _flaxBinding155,
    "removeStatusListener": _flaxBinding156,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _AnimationController_drive,
      genericFactory: _flaxGeneric_AnimationController_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding157,
    "toStringDetails": _flaxBinding158,
    "didRegisterListener": _flaxBinding159,
    "didUnregisterListener": _flaxBinding160,
    "dispose": _flaxBinding161,
    "clearListeners": _flaxBinding162,
    "notifyListeners": _flaxBinding163,
    "clearStatusListeners": _flaxBinding164,
    "notifyStatusListeners": _flaxBinding165,
    "resync": _flaxBinding166,
    "reset": _flaxBinding167,
    "forward": _flaxBinding170,
    "reverse": _flaxBinding171,
    "toggle": _flaxBinding172,
    "animateTo": _flaxBinding174,
    "animateBack": _flaxBinding175,
    "repeat": _flaxBinding177,
    "fling": _flaxBinding181,
    "animateWith": _flaxBinding182,
    "animateBackWith": _flaxBinding183,
    "stop": _flaxBinding185,
    "@super:addListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_addListener,
    ),
    "@super:removeListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_removeListener,
    ),
    "@super:addStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_addStatusListener,
    ),
    "@super:removeStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_removeStatusListener,
    ),
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _AnimationController_super_drive,
      genericFactory: _flaxGeneric_AnimationController_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:toStringDetails": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch2_super_call_toStringDetails,
    ),
    "@super:didRegisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationController_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationController_super_didUnregisterListener,
    ),
    "@super:dispose": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationController_super_dispose,
    ),
    "@super:clearListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationController_super_clearListeners,
    ),
    "@super:notifyListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationController_super_notifyListeners,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationController_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding14,
      _AnimationController_super_notifyStatusListeners,
    ),
    "@super:resync": FlaxInstanceMethod.signature(
      _flaxBinding16,
      _AnimationController_super_resync,
    ),
    "@super:reset": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationController_super_reset,
    ),
    "@super:forward": FlaxInstanceMethod(
      _flaxBinding169,
      _flaxBinding18,
      _AnimationController_super_forward,
    ),
    "@super:reverse": FlaxInstanceMethod(
      _flaxBinding169,
      _flaxBinding18,
      _AnimationController_super_reverse,
    ),
    "@super:toggle": FlaxInstanceMethod(
      _flaxBinding169,
      _flaxBinding18,
      _AnimationController_super_toggle,
    ),
    "@super:animateTo": FlaxInstanceMethod(
      _flaxBinding173,
      _flaxBinding18,
      _AnimationController_super_animateTo,
    ),
    "@super:animateBack": FlaxInstanceMethod(
      _flaxBinding173,
      _flaxBinding18,
      _AnimationController_super_animateBack,
    ),
    "@super:repeat": FlaxInstanceMethod(
      _flaxBinding176,
      _flaxBinding18,
      _AnimationController_super_repeat,
    ),
    "@super:fling": FlaxInstanceMethod(
      _flaxBinding180,
      _flaxBinding18,
      _AnimationController_super_fling,
    ),
    "@super:animateWith": FlaxInstanceMethod.signature(
      _flaxBinding19,
      _AnimationController_super_animateWith,
    ),
    "@super:animateBackWith": FlaxInstanceMethod.signature(
      _flaxBinding19,
      _AnimationController_super_animateBackWith,
    ),
    "@super:stop": FlaxInstanceMethod(
      _flaxBinding184,
      _flaxBinding0,
      _AnimationController_super_stop,
    ),
    "@super:get:lowerBound": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _AnimationController_super_get_lowerBound,
    ),
    "@super:get:upperBound": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _AnimationController_super_get_upperBound,
    ),
    "@super:get:debugLabel": FlaxInstanceMethod.signature(
      _flaxBinding23,
      _AnimationController_super_get_debugLabel,
    ),
    "@super:get:animationBehavior": FlaxInstanceMethod.signature(
      _flaxBinding25,
      _AnimationController_super_get_animationBehavior,
    ),
    "@super:get:view": FlaxInstanceMethod.signature(
      _flaxBinding27,
      _AnimationController_super_get_view,
    ),
    "@super:get:duration": FlaxInstanceMethod.signature(
      _flaxBinding29,
      _AnimationController_super_get_duration,
    ),
    "@super:get:reverseDuration": FlaxInstanceMethod.signature(
      _flaxBinding29,
      _AnimationController_super_get_reverseDuration,
    ),
    "@super:get:value": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _AnimationController_super_get_value,
    ),
    "@super:get:velocity": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _AnimationController_super_get_velocity,
    ),
    "@super:get:lastElapsedDuration": FlaxInstanceMethod.signature(
      _flaxBinding29,
      _AnimationController_super_get_lastElapsedDuration,
    ),
    "@super:get:isAnimating": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isAnimating,
    ),
    "@super:get:status": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _FlaxProxyDispatch0_super_get_status,
    ),
    "@super:get:isDismissed": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isDismissed,
    ),
    "@super:get:isCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isCompleted,
    ),
    "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
    ),
    "@super:set:duration": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding28, required: true)],
      const FlaxTypeRef("void"),
      _AnimationController_super_set_duration,
    ),
    "@super:set:reverseDuration": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding28, required: true)],
      const FlaxTypeRef("void"),
      _AnimationController_super_set_reverseDuration,
    ),
    "@super:set:value": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding20, required: true)],
      const FlaxTypeRef("void"),
      _AnimationController_super_set_value,
    ),
  },
  constructors: {"@implementation": _flaxBinding186},
  create: _createAnimationController,
  matches: _isAnimationController,
  setters: [_flaxBinding150, _flaxBinding151, _flaxBinding152],
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
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding111,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            "child",
            _flaxBinding112,
            required: true,
            positional: true,
          ),
        ],
        _flaxBinding113,
        _callback2,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback2Invoke,
        matches: _callback2Matches,
        genericFactory: _callback2Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding187,
    _flaxBinding188,
    _flaxBinding189,
    _flaxBinding190,
    _flaxBinding191,
    _flaxBinding192,
    _flaxBinding193,
    _flaxBinding194,
    _flaxBinding195,
    _flaxBinding197,
    _flaxBinding198,
    _flaxBinding199,
    _flaxBinding201,
    _flaxBinding202,
    _flaxBinding204,
    _flaxBinding206,
    _flaxBinding207,
    _flaxBinding208,
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
    _flaxBinding119,
    _flaxBinding116,
    _flaxBinding117,
    _flaxBinding118,
    _flaxBinding120,
    _flaxBinding221,
    _flaxBinding222,
    _flaxBinding223,
  ]),
);
const _flaxBinding225 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationEagerListenerMixin",
  [],
  {
    "didRegisterListener": _flaxBinding159,
    "didUnregisterListener": _flaxBinding160,
    "dispose": _flaxBinding161,
  },
  constructors: {},
  create: _createAnimationEagerListenerMixin,
  matches: _isAnimationEagerListenerMixin,
  setters: [],
  supertypes: ["dart:core::Object"],
  disposeMethod: "dispose",
);
const _flaxBinding226 = FlaxGetter(
  "isListening",
  _flaxBinding11,
  _AnimationLazyListenerMixin_isListening,
);
const _flaxBinding227 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLazyListenerMixin_didRegisterListener,
);
const _flaxBinding228 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLazyListenerMixin_didUnregisterListener,
);
const _flaxBinding229 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLazyListenerMixin_didStartListening,
);
const _flaxBinding230 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLazyListenerMixin_didStopListening,
);
const _flaxBinding231 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationLazyListenerMixin",
  [_flaxBinding226],
  {
    "didRegisterListener": _flaxBinding227,
    "didUnregisterListener": _flaxBinding228,
    "didStartListening": _flaxBinding229,
    "didStopListening": _flaxBinding230,
  },
  constructors: {},
  create: _createAnimationLazyListenerMixin,
  matches: _isAnimationLazyListenerMixin,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding232 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLocalListenersMixin_didRegisterListener,
);
const _flaxBinding233 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLocalListenersMixin_didUnregisterListener,
);
const _flaxBinding234 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationLocalListenersMixin",
  [],
  {
    "didRegisterListener": _flaxBinding232,
    "didUnregisterListener": _flaxBinding233,
    "addListener": _flaxBinding153,
    "removeListener": _flaxBinding154,
    "clearListeners": _flaxBinding162,
    "notifyListeners": _flaxBinding163,
  },
  constructors: {},
  create: _createAnimationLocalListenersMixin,
  matches: _isAnimationLocalListenersMixin,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding235 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLocalStatusListenersMixin_didRegisterListener,
);
const _flaxBinding236 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _AnimationLocalStatusListenersMixin_didUnregisterListener,
);
const _flaxBinding237 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationLocalStatusListenersMixin",
  [],
  {
    "didRegisterListener": _flaxBinding235,
    "didUnregisterListener": _flaxBinding236,
    "addStatusListener": _flaxBinding155,
    "removeStatusListener": _flaxBinding156,
    "clearStatusListeners": _flaxBinding164,
    "notifyStatusListeners": _flaxBinding165,
  },
  constructors: {},
  create: _createAnimationLocalStatusListenersMixin,
  matches: _isAnimationLocalStatusListenersMixin,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding238 = FlaxGetter(
  "status",
  _flaxBinding4,
  _AnimationMax_status,
);
const _flaxBinding239 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _AnimationMax_isDismissed,
);
const _flaxBinding240 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _AnimationMax_isCompleted,
);
const _flaxBinding241 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _AnimationMax_isAnimating,
);
const _flaxBinding242 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _AnimationMax_isForwardOrCompleted,
);
const _flaxBinding243 = FlaxGetter(
  "isListening",
  _flaxBinding11,
  _AnimationMax_isListening,
);
const _flaxBinding244 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Animation",
  dartType: FlaxDartTypes.typeOf<api.Animation<num>>,
);
const _flaxBinding245 = <FlaxParameter>[
  FlaxParameter("first", _flaxBinding244, required: true),
  FlaxParameter("next", _flaxBinding244, required: true),
];
const _flaxBinding246 = FlaxProxyMember(
  "didStartListening",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding247 = FlaxProxyMember(
  "didStopListening",
  0,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding248 = FlaxProxyMember(
  "isListening",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding249 = FlaxGetter(
  "first",
  _flaxBinding26,
  _AnimationMean_first,
);
const _flaxBinding250 = FlaxGetter("next", _flaxBinding26, _AnimationMean_next);
const _flaxBinding251 = FlaxGetter(
  "status",
  _flaxBinding4,
  _AnimationMean_status,
);
const _flaxBinding252 = FlaxGetter(
  "value",
  _flaxBinding20,
  _AnimationMean_value,
);
const _flaxBinding253 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _AnimationMean_isDismissed,
);
const _flaxBinding254 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _AnimationMean_isCompleted,
);
const _flaxBinding255 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _AnimationMean_isAnimating,
);
const _flaxBinding256 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _AnimationMean_isForwardOrCompleted,
);
const _flaxBinding257 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _AnimationMean_toString,
);
const _flaxBinding258 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _AnimationMean_toStringDetails,
);
const _flaxBinding259 = <FlaxParameter>[
  FlaxParameter("left", _flaxBinding26, required: true),
  FlaxParameter("right", _flaxBinding26, required: true),
];
const _flaxBinding260 = FlaxProxyMember(
  "first",
  1,
  _flaxBinding27,
  hasSuper: true,
);
const _flaxBinding261 = FlaxProxyMember(
  "next",
  1,
  _flaxBinding27,
  hasSuper: true,
);
const _flaxBinding262 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationMean",
  [
    _flaxBinding249,
    _flaxBinding250,
    _flaxBinding251,
    _flaxBinding252,
    _flaxBinding253,
    _flaxBinding254,
    _flaxBinding255,
    _flaxBinding256,
    _flaxBinding226,
  ],
  {
    "didStartListening": _flaxBinding229,
    "didStopListening": _flaxBinding230,
    "toString": _flaxBinding257,
    "addListener": _flaxBinding153,
    "removeListener": _flaxBinding154,
    "addStatusListener": _flaxBinding155,
    "removeStatusListener": _flaxBinding156,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _AnimationMean_drive,
      genericFactory: _flaxGeneric_AnimationMean_drive,
      ownerTypes: [],
    ),
    "toStringDetails": _flaxBinding258,
    "didRegisterListener": _flaxBinding227,
    "didUnregisterListener": _flaxBinding228,
    "clearListeners": _flaxBinding162,
    "notifyListeners": _flaxBinding163,
    "clearStatusListeners": _flaxBinding164,
    "notifyStatusListeners": _flaxBinding165,
    "@super:didStartListening": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationMean_super_didStartListening,
    ),
    "@super:didStopListening": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationMean_super_didStopListening,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:addListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_addListener,
    ),
    "@super:removeListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_removeListener,
    ),
    "@super:addStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_addStatusListener,
    ),
    "@super:removeStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_removeStatusListener,
    ),
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _AnimationMean_super_drive,
      genericFactory: _flaxGeneric_AnimationMean_super_drive,
      ownerTypes: [],
    ),
    "@super:toStringDetails": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch2_super_call_toStringDetails,
    ),
    "@super:didRegisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationMean_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationMean_super_didUnregisterListener,
    ),
    "@super:clearListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationMean_super_clearListeners,
    ),
    "@super:notifyListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationMean_super_notifyListeners,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _AnimationMean_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding14,
      _AnimationMean_super_notifyStatusListeners,
    ),
    "@super:get:value": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _AnimationMean_super_get_value,
    ),
    "@super:get:first": FlaxInstanceMethod.signature(
      _flaxBinding27,
      _AnimationMean_super_get_first,
    ),
    "@super:get:next": FlaxInstanceMethod.signature(
      _flaxBinding27,
      _AnimationMean_super_get_next,
    ),
    "@super:get:status": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _FlaxProxyDispatch0_super_get_status,
    ),
    "@super:get:isDismissed": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isDismissed,
    ),
    "@super:get:isCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isCompleted,
    ),
    "@super:get:isAnimating": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isAnimating,
    ),
    "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
    ),
    "@super:get:isListening": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _AnimationMean_super_get_isListening,
    ),
  },
  constructors: {"@implementation": _flaxBinding259},
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
    _flaxBinding246,
    _flaxBinding247,
    _flaxBinding114,
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding111,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            "child",
            _flaxBinding112,
            required: true,
            positional: true,
          ),
        ],
        _flaxBinding113,
        _callback4,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback4Invoke,
        matches: _callback4Matches,
        genericFactory: _callback4Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding115,
    _flaxBinding187,
    _flaxBinding188,
    _flaxBinding190,
    _flaxBinding191,
    _flaxBinding192,
    _flaxBinding193,
    _flaxBinding218,
    _flaxBinding260,
    _flaxBinding261,
    _flaxBinding116,
    _flaxBinding117,
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding120,
    _flaxBinding248,
  ]),
);
const _flaxBinding263 = FlaxGetter(
  "status",
  _flaxBinding4,
  _AnimationMin_status,
);
const _flaxBinding264 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _AnimationMin_isDismissed,
);
const _flaxBinding265 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _AnimationMin_isCompleted,
);
const _flaxBinding266 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _AnimationMin_isAnimating,
);
const _flaxBinding267 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _AnimationMin_isForwardOrCompleted,
);
const _flaxBinding268 = FlaxGetter(
  "isListening",
  _flaxBinding11,
  _AnimationMin_isListening,
);
const _flaxBinding269 = FlaxGetter(
  "curve",
  _flaxBinding37,
  _AnimationStyle_curve,
);
const _flaxBinding270 = FlaxGetter(
  "duration",
  _flaxBinding28,
  _AnimationStyle_duration,
);
const _flaxBinding271 = FlaxGetter(
  "reverseCurve",
  _flaxBinding37,
  _AnimationStyle_reverseCurve,
);
const _flaxBinding272 = FlaxGetter(
  "reverseDuration",
  _flaxBinding28,
  _AnimationStyle_reverseDuration,
);
const _flaxBinding273 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _AnimationStyle_toStringShort,
);
const _flaxBinding274 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding275 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding274,
    required: false,
    defaultValue: api2.DiagnosticLevel.info,
  ),
];
const _flaxBinding276 = FlaxInstanceMethod(
  _flaxBinding275,
  _flaxBinding8,
  _AnimationStyle_toString,
);
const _flaxBinding277 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding278 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding22, required: false),
  FlaxParameter("style", _flaxBinding277, required: false),
];
const _flaxBinding279 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding280 = FlaxInstanceMethod(
  _flaxBinding278,
  _flaxBinding279,
  _AnimationStyle_toDiagnosticsNode,
);
const _flaxBinding281 = FlaxInstanceMethod.signature(
  _flaxBinding33,
  _AnimationStyle_debugFillProperties,
);
const _flaxBinding282 = <FlaxParameter>[
  FlaxParameter("curve", _flaxBinding37, required: false),
  FlaxParameter("duration", _flaxBinding28, required: false),
  FlaxParameter("reverseCurve", _flaxBinding37, required: false),
  FlaxParameter("reverseDuration", _flaxBinding28, required: false),
];
const _flaxBinding283 = FlaxInstanceMethod(
  _flaxBinding282,
  _flaxBinding35,
  _AnimationStyle_copyWith,
);
const _flaxBinding284 = FlaxInstanceMethod.signature(
  _flaxBinding36,
  _AnimationStyle_merge,
);
const _flaxBinding285 = FlaxProxyMember(
  "toStringShort",
  0,
  _flaxBinding9,
  hasSuper: true,
);
const _flaxBinding286 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "minLevel",
      _flaxBinding274,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding8,
  id: "callback:<>(n:o:minLevel:enum:flax.core/sdk_foundation#type:DiagnosticLevel)->String:",
);
const _flaxBinding287 = FlaxProxyMember(
  "toString",
  0,
  _flaxBinding286,
  hasSuper: true,
);
const _flaxBinding288 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding22,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "style",
      _flaxBinding277,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding279,
  id: "callback:<>(n:o:name:String?:,n:o:style:enum?:flax.core/sdk_foundation#type:DiagnosticsTreeStyle)->object:flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding289 = FlaxProxyMember(
  "toDiagnosticsNode",
  0,
  _flaxBinding288,
  hasSuper: true,
);
const _flaxBinding290 = FlaxProxyMember(
  "debugFillProperties",
  0,
  _flaxBinding33,
  hasSuper: true,
);
const _flaxBinding291 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "curve",
      _flaxBinding37,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "duration",
      _flaxBinding28,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "reverseCurve",
      _flaxBinding37,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "reverseDuration",
      _flaxBinding28,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding35,
  id: "callback:<>(n:o:curve:object?:flax.core/flutter#type:Curve,n:o:duration:object?:flax.core/flutter#type:Duration,n:o:reverseCurve:object?:flax.core/flutter#type:Curve,n:o:reverseDuration:object?:flax.core/flutter#type:Duration)->object:flax.core/sdk_animation#type:AnimationStyle",
);
const _flaxBinding292 = FlaxProxyMember(
  "copyWith",
  0,
  _flaxBinding291,
  hasSuper: true,
);
const _flaxBinding293 = FlaxProxyMember(
  "merge",
  0,
  _flaxBinding36,
  hasSuper: true,
);
const _flaxBinding294 = FlaxProxyMember(
  "curve",
  1,
  _flaxBinding38,
  hasSuper: true,
);
const _flaxBinding295 = FlaxProxyMember(
  "reverseCurve",
  1,
  _flaxBinding38,
  hasSuper: true,
);
const _flaxBinding296 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:AnimationStyle",
  [_flaxBinding269, _flaxBinding270, _flaxBinding271, _flaxBinding272],
  {
    "toStringShort": _flaxBinding273,
    "toString": _flaxBinding276,
    "toDiagnosticsNode": _flaxBinding280,
    "debugFillProperties": _flaxBinding281,
    "copyWith": _flaxBinding283,
    "merge": _flaxBinding284,
    "@super:toStringShort": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _AnimationStyle_super_toStringShort,
    ),
    "@super:toString": FlaxInstanceMethod(
      _flaxBinding275,
      _flaxBinding8,
      _AnimationStyle_super_toString,
    ),
    "@super:toDiagnosticsNode": FlaxInstanceMethod(
      _flaxBinding278,
      _flaxBinding279,
      _AnimationStyle_super_toDiagnosticsNode,
    ),
    "@super:debugFillProperties": FlaxInstanceMethod.signature(
      _flaxBinding33,
      _AnimationStyle_super_debugFillProperties,
    ),
    "@super:copyWith": FlaxInstanceMethod(
      _flaxBinding282,
      _flaxBinding35,
      _AnimationStyle_super_copyWith,
    ),
    "@super:merge": FlaxInstanceMethod.signature(
      _flaxBinding36,
      _AnimationStyle_super_merge,
    ),
    "@super:get:curve": FlaxInstanceMethod.signature(
      _flaxBinding38,
      _AnimationStyle_super_get_curve,
    ),
    "@super:get:duration": FlaxInstanceMethod.signature(
      _flaxBinding29,
      _AnimationStyle_super_get_duration,
    ),
    "@super:get:reverseCurve": FlaxInstanceMethod.signature(
      _flaxBinding38,
      _AnimationStyle_super_get_reverseCurve,
    ),
    "@super:get:reverseDuration": FlaxInstanceMethod.signature(
      _flaxBinding29,
      _AnimationStyle_super_get_reverseDuration,
    ),
  },
  constructors: {"@implementation": _flaxBinding282},
  create: _createAnimationStyle,
  matches: _isAnimationStyle,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding285,
    _flaxBinding287,
    _flaxBinding289,
    _flaxBinding290,
    _flaxBinding292,
    _flaxBinding293,
    _flaxBinding294,
    _flaxBinding216,
    _flaxBinding295,
    _flaxBinding217,
  ]),
);
const _flaxBinding297 = FlaxGetter(
  "status",
  _flaxBinding4,
  _AnimationWithParentMixin_status,
);
const _flaxBinding298 = FlaxGetter(
  "flipped",
  _flaxBinding44,
  _CatmullRomCurve_flipped,
);
const _flaxBinding299 = FlaxGetter(
  "controlPoints",
  _flaxBinding42,
  _CatmullRomCurve_controlPoints,
);
const _flaxBinding300 = FlaxGetter(
  "tension",
  _flaxBinding20,
  _CatmullRomCurve_tension,
);
const _flaxBinding301 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _CatmullRomCurve_transform,
);
const _flaxBinding302 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _CatmullRomCurve_transformInternal,
);
const _flaxBinding303 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _CatmullRomCurve_toString,
);
const _flaxBinding304 = <FlaxParameter>[
  FlaxParameter("controlPoints", _flaxBinding42, required: true),
  FlaxParameter("tension", _flaxBinding20, required: false, defaultValue: 0.0),
];
const _flaxBinding305 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding39,
  hasSuper: true,
);
const _flaxBinding306 = FlaxProxyMember(
  "transformInternal",
  0,
  _flaxBinding39,
  hasSuper: true,
);
const _flaxBinding307 = FlaxProxyMember(
  "controlPoints",
  1,
  _flaxBinding43,
  hasSuper: true,
);
const _flaxBinding308 = FlaxProxyMember(
  "tension",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding309 = FlaxProxyMember(
  "flipped",
  1,
  _flaxBinding45,
  hasSuper: true,
);
const _flaxBinding310 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:CatmullRomCurve",
  [_flaxBinding298, _flaxBinding299, _flaxBinding300],
  {
    "transform": _flaxBinding301,
    "transformInternal": _flaxBinding302,
    "toString": _flaxBinding303,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:controlPoints": FlaxInstanceMethod.signature(
      _flaxBinding43,
      _CatmullRomCurve_super_get_controlPoints,
    ),
    "@super:get:tension": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _CatmullRomCurve_super_get_tension,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding304},
  create: _createCatmullRomCurve,
  matches: _isCatmullRomCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding307,
    _flaxBinding308,
    _flaxBinding309,
  ]),
);
const _flaxBinding311 = FlaxGetter(
  "samplingSeed",
  _flaxBinding48,
  _Curve2D_samplingSeed,
);
const _flaxBinding312 = FlaxInstanceMethod.signature(
  _flaxBinding47,
  _Curve2D_transform,
);
const _flaxBinding313 = FlaxInstanceMethod.signature(
  _flaxBinding47,
  _Curve2D_transformInternal,
);
const _flaxBinding314 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _Curve2D_toString,
);
const _flaxBinding315 = <FlaxParameter>[
  FlaxParameter("end", _flaxBinding20, required: false, defaultValue: 1.0),
  FlaxParameter("start", _flaxBinding20, required: false, defaultValue: 0.0),
  FlaxParameter(
    "tolerance",
    _flaxBinding20,
    required: false,
    defaultValue: 1e-10,
  ),
];
const _flaxBinding316 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Curve2DSample",
);
const _flaxBinding317 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding316,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_animation#type:Curve2DSample]",
    _collection2Create,
    _collection2Matches,
    restore: _collection2Restore,
  ),
);
const _flaxBinding318 = FlaxInstanceMethod(
  _flaxBinding315,
  _flaxBinding317,
  _Curve2D_generateSamples,
);
const _flaxBinding319 = FlaxInstanceMethod.signature(
  _flaxBinding46,
  _Curve2D_findInverse,
);
const _flaxBinding320 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding47,
  hasSuper: true,
);
const _flaxBinding321 = FlaxProxyMember(
  "transformInternal",
  0,
  _flaxBinding47,
  hasSuper: true,
);
const _flaxBinding322 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter(
      "start",
      _flaxBinding20,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "end",
      _flaxBinding20,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter(
      "tolerance",
      _flaxBinding20,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding317,
  id: "callback:<>(n:o:start:double:,n:o:end:double:,n:o:tolerance:double:)->iterable:[object:flax.core/sdk_animation#type:Curve2DSample]",
);
const _flaxBinding323 = FlaxProxyMember(
  "generateSamples",
  0,
  _flaxBinding322,
  hasSuper: true,
);
const _flaxBinding324 = FlaxProxyMember(
  "findInverse",
  0,
  _flaxBinding46,
  hasSuper: true,
);
const _flaxBinding325 = FlaxProxyMember(
  "samplingSeed",
  1,
  _flaxBinding49,
  hasSuper: true,
);
const _flaxBinding326 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Curve2D",
  [_flaxBinding311],
  {
    "transform": _flaxBinding312,
    "transformInternal": _flaxBinding313,
    "toString": _flaxBinding314,
    "generateSamples": _flaxBinding318,
    "findInverse": _flaxBinding319,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding47,
      _FlaxProxyDispatch12_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding47,
      _FlaxProxyDispatch12_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:generateSamples": FlaxInstanceMethod(
      _flaxBinding315,
      _flaxBinding317,
      _FlaxProxyDispatch12_super_call_generateSamples,
    ),
    "@super:findInverse": FlaxInstanceMethod.signature(
      _flaxBinding46,
      _FlaxProxyDispatch12_super_call_findInverse,
    ),
    "@super:get:samplingSeed": FlaxInstanceMethod.signature(
      _flaxBinding49,
      _FlaxProxyDispatch12_super_get_samplingSeed,
    ),
  },
  constructors: {"@implementation": _flaxBinding105},
  create: _createCurve2D,
  matches: _isCurve2D,
  setters: [],
  supertypes: [
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding320,
    _flaxBinding321,
    _flaxBinding114,
    _flaxBinding323,
    _flaxBinding324,
    _flaxBinding325,
  ]),
);
const _flaxBinding327 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Offset",
  nullable: true,
);
const _flaxBinding328 = <FlaxParameter>[
  FlaxParameter("controlPoints", _flaxBinding42, required: true),
  FlaxParameter("tension", _flaxBinding20, required: false, defaultValue: 0.0),
  FlaxParameter("startHandle", _flaxBinding327, required: false),
  FlaxParameter("endHandle", _flaxBinding327, required: false),
];
const _flaxBinding329 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:CatmullRomSpline",
  [],
  {
    "@super:generateSamples": FlaxInstanceMethod(
      _flaxBinding315,
      _flaxBinding317,
      _FlaxProxyDispatch12_super_call_generateSamples,
    ),
    "@super:findInverse": FlaxInstanceMethod.signature(
      _flaxBinding46,
      _FlaxProxyDispatch12_super_call_findInverse,
    ),
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding47,
      _FlaxProxyDispatch12_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding47,
      _FlaxProxyDispatch12_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:samplingSeed": FlaxInstanceMethod.signature(
      _flaxBinding49,
      _FlaxProxyDispatch12_super_get_samplingSeed,
    ),
  },
  constructors: {"@implementation": _flaxBinding328},
  create: _createCatmullRomSpline,
  matches: _isCatmullRomSpline,
  setters: [],
  supertypes: [
    "flax.core/sdk_animation#type:Curve2D",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  parent: _flaxBinding326,
  proxy: FlaxProxyBinding([
    _flaxBinding323,
    _flaxBinding324,
    _flaxBinding320,
    _flaxBinding321,
    _flaxBinding114,
    _flaxBinding325,
  ]),
);
const _flaxBinding330 = FlaxGetter("begin", _flaxBinding50, _ColorTween_begin);
const _flaxBinding331 = FlaxGetter("end", _flaxBinding50, _ColorTween_end);
const _flaxBinding332 = FlaxSetter(
  "begin",
  _flaxBinding50,
  _ColorTween_set_begin,
);
const _flaxBinding333 = FlaxSetter("end", _flaxBinding50, _ColorTween_set_end);
const _flaxBinding334 = FlaxInstanceMethod.signature(
  _flaxBinding51,
  _ColorTween_lerp,
);
const _flaxBinding335 = FlaxInstanceMethod.signature(
  _flaxBinding51,
  _ColorTween_transform,
);
const _flaxBinding336 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _ColorTween_toString,
);
const _flaxBinding337 = FlaxInstanceMethod.signature(
  _flaxBinding52,
  _ColorTween_evaluate,
);
const _flaxBinding338 = FlaxInstanceMethod.signature(
  _flaxBinding54,
  _ColorTween_animate,
);
const _flaxBinding339 = FlaxInstanceMethod.signature(
  _flaxBinding57,
  _ColorTween_chain,
);
const _flaxBinding340 = <FlaxParameter>[
  FlaxParameter("begin", _flaxBinding50, required: false),
  FlaxParameter("end", _flaxBinding50, required: false),
];
const _flaxBinding341 = FlaxProxyMember(
  "lerp",
  0,
  _flaxBinding51,
  hasSuper: true,
);
const _flaxBinding342 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding51,
  hasSuper: true,
);
const _flaxBinding343 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding52,
  hasSuper: true,
);
const _flaxBinding344 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding54,
  hasSuper: true,
);
const _flaxBinding345 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding57,
  hasSuper: true,
);
const _flaxBinding346 = FlaxProxyMember(
  "begin",
  1,
  _flaxBinding58,
  hasSuper: true,
);
const _flaxBinding347 = FlaxProxyMember(
  "end",
  1,
  _flaxBinding58,
  hasSuper: true,
);
const _flaxBinding348 = FlaxProxyMember(
  "begin",
  2,
  _flaxBinding59,
  hasSuper: true,
);
const _flaxBinding349 = FlaxProxyMember(
  "end",
  2,
  _flaxBinding59,
  hasSuper: true,
);
const _flaxBinding350 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ColorTween",
  [_flaxBinding330, _flaxBinding331],
  {
    "lerp": _flaxBinding334,
    "transform": _flaxBinding335,
    "toString": _flaxBinding336,
    "evaluate": _flaxBinding337,
    "animate": _flaxBinding338,
    "chain": _flaxBinding339,
    "@super:lerp": FlaxInstanceMethod.signature(
      _flaxBinding51,
      _ColorTween_super_lerp,
    ),
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding51,
      _ColorTween_super_transform,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:evaluate": FlaxInstanceMethod.signature(
      _flaxBinding52,
      _ColorTween_super_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.signature(
      _flaxBinding54,
      _ColorTween_super_animate,
    ),
    "@super:chain": FlaxInstanceMethod.signature(
      _flaxBinding57,
      _ColorTween_super_chain,
    ),
    "@super:get:begin": FlaxInstanceMethod.signature(
      _flaxBinding58,
      _ColorTween_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.signature(
      _flaxBinding58,
      _ColorTween_super_get_end,
    ),
    "@super:set:begin": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding50, required: true)],
      const FlaxTypeRef("void"),
      _ColorTween_super_set_begin,
    ),
    "@super:set:end": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding50, required: true)],
      const FlaxTypeRef("void"),
      _ColorTween_super_set_end,
    ),
  },
  constructors: {"@implementation": _flaxBinding340},
  create: _createColorTween,
  matches: _isColorTween,
  setters: [_flaxBinding332, _flaxBinding333],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding341,
    _flaxBinding342,
    _flaxBinding114,
    _flaxBinding343,
    _flaxBinding344,
    _flaxBinding345,
    _flaxBinding346,
    _flaxBinding347,
    _flaxBinding348,
    _flaxBinding349,
  ]),
);
const _flaxBinding351 = FlaxGetter(
  "status",
  _flaxBinding4,
  _CompoundAnimation_status,
);
const _flaxBinding352 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _CompoundAnimation_isDismissed,
);
const _flaxBinding353 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _CompoundAnimation_isCompleted,
);
const _flaxBinding354 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _CompoundAnimation_isAnimating,
);
const _flaxBinding355 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _CompoundAnimation_isForwardOrCompleted,
);
const _flaxBinding356 = FlaxGetter(
  "isListening",
  _flaxBinding11,
  _CompoundAnimation_isListening,
);
const _flaxBinding357 = <FlaxParameter>[
  FlaxParameter("first", _flaxBinding113, required: true),
  FlaxParameter("next", _flaxBinding113, required: true),
];
const _flaxBinding358 = FlaxGetter("t", _flaxBinding20, _Curve2DSample_t);
const _flaxBinding359 = FlaxGetter(
  "value",
  _flaxBinding40,
  _Curve2DSample_value,
);
const _flaxBinding360 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _Curve2DSample_toString,
);
const _flaxBinding361 = <FlaxParameter>[
  FlaxParameter("t", _flaxBinding20, required: true),
  FlaxParameter("value", _flaxBinding40, required: true),
];
const _flaxBinding362 = FlaxProxyMember("t", 1, _flaxBinding21, hasSuper: true);
const _flaxBinding363 = FlaxProxyMember(
  "value",
  1,
  _flaxBinding60,
  hasSuper: true,
);
const _flaxBinding364 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Curve2DSample",
  [_flaxBinding358, _flaxBinding359],
  {
    "toString": _flaxBinding360,
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:t": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _Curve2DSample_super_get_t,
    ),
    "@super:get:value": FlaxInstanceMethod.signature(
      _flaxBinding60,
      _Curve2DSample_super_get_value,
    ),
  },
  constructors: {"@implementation": _flaxBinding361},
  create: _createCurve2DSample,
  matches: _isCurve2DSample,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding114, _flaxBinding362, _flaxBinding363]),
);
const _flaxBinding365 = FlaxGetter("curve", _flaxBinding44, _CurveTween_curve);
const _flaxBinding366 = FlaxSetter(
  "curve",
  _flaxBinding44,
  _CurveTween_set_curve,
);
const _flaxBinding367 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _CurveTween_transform,
);
const _flaxBinding368 = FlaxInstanceMethod.signature(
  _flaxBinding61,
  _CurveTween_evaluate,
);
const _flaxBinding369 = FlaxInstanceMethod.signature(
  _flaxBinding62,
  _CurveTween_animate,
);
const _flaxBinding370 = FlaxInstanceMethod.signature(
  _flaxBinding63,
  _CurveTween_chain,
);
const _flaxBinding371 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _CurveTween_toString,
);
const _flaxBinding372 = <FlaxParameter>[
  FlaxParameter("curve", _flaxBinding44, required: true),
];
const _flaxBinding373 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding61,
  hasSuper: true,
);
const _flaxBinding374 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding375 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding63,
  hasSuper: true,
);
const _flaxBinding376 = FlaxProxyMember(
  "curve",
  1,
  _flaxBinding45,
  hasSuper: true,
);
const _flaxBinding377 = FlaxProxyMember(
  "curve",
  2,
  _flaxBinding64,
  hasSuper: true,
);
const _flaxBinding378 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:CurveTween",
  [_flaxBinding365],
  {
    "transform": _flaxBinding367,
    "evaluate": _flaxBinding368,
    "animate": _flaxBinding369,
    "chain": _flaxBinding370,
    "toString": _flaxBinding371,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:evaluate": FlaxInstanceMethod.signature(
      _flaxBinding61,
      _FlaxProxyDispatch13_super_call_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.signature(
      _flaxBinding62,
      _FlaxProxyDispatch13_super_call_animate,
    ),
    "@super:chain": FlaxInstanceMethod.signature(
      _flaxBinding63,
      _FlaxProxyDispatch13_super_call_chain,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:curve": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _CurveTween_super_get_curve,
    ),
    "@super:set:curve": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding44, required: true)],
      const FlaxTypeRef("void"),
      _CurveTween_super_set_curve,
    ),
  },
  constructors: {"@implementation": _flaxBinding372},
  create: _createCurveTween,
  matches: _isCurveTween,
  setters: [_flaxBinding366],
  supertypes: ["flax.core/sdk_animation#type:Animatable", "dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding373,
    _flaxBinding374,
    _flaxBinding375,
    _flaxBinding114,
    _flaxBinding376,
    _flaxBinding377,
  ]),
);
const _flaxBinding379 = FlaxGetter(
  "status",
  _flaxBinding4,
  _CurvedAnimation_status,
);
const _flaxBinding380 = FlaxGetter(
  "value",
  _flaxBinding20,
  _CurvedAnimation_value,
);
const _flaxBinding381 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _CurvedAnimation_isDismissed,
);
const _flaxBinding382 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _CurvedAnimation_isCompleted,
);
const _flaxBinding383 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _CurvedAnimation_isAnimating,
);
const _flaxBinding384 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _CurvedAnimation_isForwardOrCompleted,
);
const _flaxBinding385 = FlaxGetter(
  "parent",
  _flaxBinding26,
  _CurvedAnimation_parent,
);
const _flaxBinding386 = FlaxGetter(
  "curve",
  _flaxBinding44,
  _CurvedAnimation_curve,
);
const _flaxBinding387 = FlaxGetter(
  "reverseCurve",
  _flaxBinding37,
  _CurvedAnimation_reverseCurve,
);
const _flaxBinding388 = FlaxGetter(
  "isDisposed",
  _flaxBinding11,
  _CurvedAnimation_isDisposed,
);
const _flaxBinding389 = FlaxSetter(
  "curve",
  _flaxBinding44,
  _CurvedAnimation_set_curve,
);
const _flaxBinding390 = FlaxSetter(
  "reverseCurve",
  _flaxBinding37,
  _CurvedAnimation_set_reverseCurve,
);
const _flaxBinding391 = FlaxSetter(
  "isDisposed",
  _flaxBinding11,
  _CurvedAnimation_set_isDisposed,
);
const _flaxBinding392 = FlaxInstanceMethod.signature(
  _flaxBinding3,
  _CurvedAnimation_addListener,
);
const _flaxBinding393 = FlaxInstanceMethod.signature(
  _flaxBinding3,
  _CurvedAnimation_removeListener,
);
const _flaxBinding394 = FlaxInstanceMethod.signature(
  _flaxBinding7,
  _CurvedAnimation_addStatusListener,
);
const _flaxBinding395 = FlaxInstanceMethod.signature(
  _flaxBinding7,
  _CurvedAnimation_removeStatusListener,
);
const _flaxBinding396 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _CurvedAnimation_toString,
);
const _flaxBinding397 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _CurvedAnimation_toStringDetails,
);
const _flaxBinding398 = FlaxInstanceMethod.signature(
  _flaxBinding13,
  _CurvedAnimation_dispose,
);
const _flaxBinding399 = <FlaxParameter>[
  FlaxParameter("parent", _flaxBinding26, required: true),
  FlaxParameter("curve", _flaxBinding44, required: true),
  FlaxParameter("reverseCurve", _flaxBinding37, required: false),
];
const _flaxBinding400 = FlaxProxyMember(
  "parent",
  1,
  _flaxBinding27,
  hasSuper: true,
);
const _flaxBinding401 = FlaxProxyMember(
  "isDisposed",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding402 = FlaxProxyMember(
  "reverseCurve",
  2,
  _flaxBinding65,
  hasSuper: true,
);
const _flaxBinding403 = FlaxProxyMember(
  "isDisposed",
  2,
  _flaxBinding66,
  hasSuper: true,
);
const _flaxBinding404 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:CurvedAnimation",
  [
    _flaxBinding379,
    _flaxBinding380,
    _flaxBinding381,
    _flaxBinding382,
    _flaxBinding383,
    _flaxBinding384,
    _flaxBinding385,
    _flaxBinding386,
    _flaxBinding387,
    _flaxBinding388,
  ],
  {
    "addListener": _flaxBinding392,
    "removeListener": _flaxBinding393,
    "addStatusListener": _flaxBinding394,
    "removeStatusListener": _flaxBinding395,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _CurvedAnimation_drive,
      genericFactory: _flaxGeneric_CurvedAnimation_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding396,
    "toStringDetails": _flaxBinding397,
    "dispose": _flaxBinding398,
    "@super:addListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_addListener,
    ),
    "@super:removeListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_removeListener,
    ),
    "@super:addStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_addStatusListener,
    ),
    "@super:removeStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_removeStatusListener,
    ),
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _CurvedAnimation_super_drive,
      genericFactory: _flaxGeneric_CurvedAnimation_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:toStringDetails": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch2_super_call_toStringDetails,
    ),
    "@super:dispose": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _CurvedAnimation_super_dispose,
    ),
    "@super:get:parent": FlaxInstanceMethod.signature(
      _flaxBinding27,
      _CurvedAnimation_super_get_parent,
    ),
    "@super:get:curve": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _CurvedAnimation_super_get_curve,
    ),
    "@super:get:reverseCurve": FlaxInstanceMethod.signature(
      _flaxBinding38,
      _CurvedAnimation_super_get_reverseCurve,
    ),
    "@super:get:isDisposed": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _CurvedAnimation_super_get_isDisposed,
    ),
    "@super:get:value": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _CurvedAnimation_super_get_value,
    ),
    "@super:get:status": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _FlaxProxyDispatch0_super_get_status,
    ),
    "@super:get:isDismissed": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isDismissed,
    ),
    "@super:get:isCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isCompleted,
    ),
    "@super:get:isAnimating": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isAnimating,
    ),
    "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
    ),
    "@super:set:curve": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding44, required: true)],
      const FlaxTypeRef("void"),
      _CurvedAnimation_super_set_curve,
    ),
    "@super:set:reverseCurve": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding37, required: true)],
      const FlaxTypeRef("void"),
      _CurvedAnimation_super_set_reverseCurve,
    ),
    "@super:set:isDisposed": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding11, required: true)],
      const FlaxTypeRef("void"),
      _CurvedAnimation_super_set_isDisposed,
    ),
  },
  constructors: {"@implementation": _flaxBinding399},
  create: _createCurvedAnimation,
  matches: _isCurvedAnimation,
  setters: [_flaxBinding389, _flaxBinding390, _flaxBinding391],
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
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding111,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            "child",
            _flaxBinding112,
            required: true,
            positional: true,
          ),
        ],
        _flaxBinding113,
        _callback7,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback7Invoke,
        matches: _callback7Matches,
        genericFactory: _callback7Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding189,
    _flaxBinding400,
    _flaxBinding376,
    _flaxBinding295,
    _flaxBinding401,
    _flaxBinding218,
    _flaxBinding116,
    _flaxBinding117,
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding120,
    _flaxBinding377,
    _flaxBinding402,
    _flaxBinding403,
  ]),
);
const _flaxBinding405 = FlaxGetter(
  "flipped",
  _flaxBinding44,
  _ElasticInCurve_flipped,
);
const _flaxBinding406 = FlaxGetter(
  "period",
  _flaxBinding20,
  _ElasticInCurve_period,
);
const _flaxBinding407 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _ElasticInCurve_transform,
);
const _flaxBinding408 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _ElasticInCurve_transformInternal,
);
const _flaxBinding409 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _ElasticInCurve_toString,
);
const _flaxBinding410 = <FlaxParameter>[
  FlaxParameter("period", _flaxBinding20, required: false, defaultValue: 0.4),
];
const _flaxBinding411 = FlaxProxyMember(
  "period",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding412 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ElasticInCurve",
  [_flaxBinding405, _flaxBinding406],
  {
    "transform": _flaxBinding407,
    "transformInternal": _flaxBinding408,
    "toString": _flaxBinding409,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:period": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _ElasticInCurve_super_get_period,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding410},
  create: _createElasticInCurve,
  matches: _isElasticInCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding411,
    _flaxBinding309,
  ]),
);
const _flaxBinding413 = FlaxGetter(
  "flipped",
  _flaxBinding44,
  _ElasticInOutCurve_flipped,
);
const _flaxBinding414 = FlaxGetter(
  "period",
  _flaxBinding20,
  _ElasticInOutCurve_period,
);
const _flaxBinding415 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _ElasticInOutCurve_transform,
);
const _flaxBinding416 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _ElasticInOutCurve_transformInternal,
);
const _flaxBinding417 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _ElasticInOutCurve_toString,
);
const _flaxBinding418 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ElasticInOutCurve",
  [_flaxBinding413, _flaxBinding414],
  {
    "transform": _flaxBinding415,
    "transformInternal": _flaxBinding416,
    "toString": _flaxBinding417,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:period": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _ElasticInOutCurve_super_get_period,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding410},
  create: _createElasticInOutCurve,
  matches: _isElasticInOutCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding411,
    _flaxBinding309,
  ]),
);
const _flaxBinding419 = FlaxGetter(
  "flipped",
  _flaxBinding44,
  _ElasticOutCurve_flipped,
);
const _flaxBinding420 = FlaxGetter(
  "period",
  _flaxBinding20,
  _ElasticOutCurve_period,
);
const _flaxBinding421 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _ElasticOutCurve_transform,
);
const _flaxBinding422 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _ElasticOutCurve_transformInternal,
);
const _flaxBinding423 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _ElasticOutCurve_toString,
);
const _flaxBinding424 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ElasticOutCurve",
  [_flaxBinding419, _flaxBinding420],
  {
    "transform": _flaxBinding421,
    "transformInternal": _flaxBinding422,
    "toString": _flaxBinding423,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:period": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _ElasticOutCurve_super_get_period,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding410},
  create: _createElasticOutCurve,
  matches: _isElasticOutCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding411,
    _flaxBinding309,
  ]),
);
const _flaxBinding425 = FlaxGetter(
  "flipped",
  _flaxBinding44,
  _FlippedCurve_flipped,
);
const _flaxBinding426 = FlaxGetter(
  "curve",
  _flaxBinding44,
  _FlippedCurve_curve,
);
const _flaxBinding427 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _FlippedCurve_transform,
);
const _flaxBinding428 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _FlippedCurve_transformInternal,
);
const _flaxBinding429 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _FlippedCurve_toString,
);
const _flaxBinding430 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:FlippedCurve",
  [_flaxBinding425, _flaxBinding426],
  {
    "transform": _flaxBinding427,
    "transformInternal": _flaxBinding428,
    "toString": _flaxBinding429,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:curve": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlippedCurve_super_get_curve,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding372},
  create: _createFlippedCurve,
  matches: _isFlippedCurve,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding376,
    _flaxBinding309,
  ]),
);
const _flaxBinding431 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _FlippedTweenSequence_transform,
);
const _flaxBinding432 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _FlippedTweenSequence_toString,
);
const _flaxBinding433 = FlaxInstanceMethod.signature(
  _flaxBinding61,
  _FlippedTweenSequence_evaluate,
);
const _flaxBinding434 = FlaxInstanceMethod.signature(
  _flaxBinding62,
  _FlippedTweenSequence_animate,
);
const _flaxBinding435 = FlaxInstanceMethod.signature(
  _flaxBinding63,
  _FlippedTweenSequence_chain,
);
const _flaxBinding436 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:TweenSequenceItem",
  dartType: FlaxDartTypes.typeOf<api.TweenSequenceItem<double>>,
);
const _flaxBinding437 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding436,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_animation#type:TweenSequenceItem<double:>]",
    _collection4Create,
    _collection4Matches,
    restore: _collection4Restore,
  ),
);
const _flaxBinding438 = FlaxTypeRef(
  "list",
  item: _flaxBinding436,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_animation#type:TweenSequenceItem<double:>]",
    _collection3Create,
    _collection3Matches,
  ),
  iterable: _flaxBinding437,
);
const _flaxBinding439 = <FlaxParameter>[
  FlaxParameter("items", _flaxBinding438, required: true),
];
const _flaxBinding440 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:FlippedTweenSequence",
  [],
  {
    "transform": _flaxBinding431,
    "toString": _flaxBinding432,
    "evaluate": _flaxBinding433,
    "animate": _flaxBinding434,
    "chain": _flaxBinding435,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:evaluate": FlaxInstanceMethod.signature(
      _flaxBinding61,
      _FlaxProxyDispatch13_super_call_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.signature(
      _flaxBinding62,
      _FlaxProxyDispatch13_super_call_animate,
    ),
    "@super:chain": FlaxInstanceMethod.signature(
      _flaxBinding63,
      _FlaxProxyDispatch13_super_call_chain,
    ),
  },
  constructors: {"@implementation": _flaxBinding439},
  create: _createFlippedTweenSequence,
  matches: _isFlippedTweenSequence,
  setters: [],
  supertypes: [
    "flax.core/sdk_animation#type:TweenSequence",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding114,
    _flaxBinding373,
    _flaxBinding374,
    _flaxBinding375,
  ]),
);
const _flaxBinding441 = FlaxGetter("begin", _flaxBinding73, _IntTween_begin);
const _flaxBinding442 = FlaxGetter("end", _flaxBinding73, _IntTween_end);
const _flaxBinding443 = FlaxSetter(
  "begin",
  _flaxBinding73,
  _IntTween_set_begin,
);
const _flaxBinding444 = FlaxSetter("end", _flaxBinding73, _IntTween_set_end);
const _flaxBinding445 = FlaxInstanceMethod.signature(
  _flaxBinding67,
  _IntTween_lerp,
);
const _flaxBinding446 = FlaxInstanceMethod.signature(
  _flaxBinding67,
  _IntTween_transform,
);
const _flaxBinding447 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _IntTween_toString,
);
const _flaxBinding448 = FlaxInstanceMethod.signature(
  _flaxBinding68,
  _IntTween_evaluate,
);
const _flaxBinding449 = FlaxInstanceMethod.signature(
  _flaxBinding70,
  _IntTween_animate,
);
const _flaxBinding450 = FlaxInstanceMethod.signature(
  _flaxBinding72,
  _IntTween_chain,
);
const _flaxBinding451 = <FlaxParameter>[
  FlaxParameter("begin", _flaxBinding73, required: false),
  FlaxParameter("end", _flaxBinding73, required: false),
];
const _flaxBinding452 = FlaxProxyMember(
  "lerp",
  0,
  _flaxBinding67,
  hasSuper: true,
);
const _flaxBinding453 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding67,
  hasSuper: true,
);
const _flaxBinding454 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding68,
  hasSuper: true,
);
const _flaxBinding455 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding70,
  hasSuper: true,
);
const _flaxBinding456 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding72,
  hasSuper: true,
);
const _flaxBinding457 = FlaxProxyMember(
  "begin",
  1,
  _flaxBinding74,
  hasSuper: true,
);
const _flaxBinding458 = FlaxProxyMember(
  "end",
  1,
  _flaxBinding74,
  hasSuper: true,
);
const _flaxBinding459 = FlaxProxyMember(
  "begin",
  2,
  _flaxBinding75,
  hasSuper: true,
);
const _flaxBinding460 = FlaxProxyMember(
  "end",
  2,
  _flaxBinding75,
  hasSuper: true,
);
const _flaxBinding461 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:IntTween",
  [_flaxBinding441, _flaxBinding442],
  {
    "lerp": _flaxBinding445,
    "transform": _flaxBinding446,
    "toString": _flaxBinding447,
    "evaluate": _flaxBinding448,
    "animate": _flaxBinding449,
    "chain": _flaxBinding450,
    "@super:lerp": FlaxInstanceMethod.signature(
      _flaxBinding67,
      _FlaxProxyDispatch18_super_call_lerp,
    ),
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding67,
      _FlaxProxyDispatch18_super_call_transform,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:evaluate": FlaxInstanceMethod.signature(
      _flaxBinding68,
      _FlaxProxyDispatch18_super_call_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.signature(
      _flaxBinding70,
      _FlaxProxyDispatch18_super_call_animate,
    ),
    "@super:chain": FlaxInstanceMethod.signature(
      _flaxBinding72,
      _FlaxProxyDispatch18_super_call_chain,
    ),
    "@super:get:begin": FlaxInstanceMethod.signature(
      _flaxBinding74,
      _FlaxProxyDispatch18_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.signature(
      _flaxBinding74,
      _FlaxProxyDispatch18_super_get_end,
    ),
    "@super:set:begin": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding73, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch18_super_set_begin,
    ),
    "@super:set:end": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding73, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch18_super_set_end,
    ),
  },
  constructors: {"@implementation": _flaxBinding451},
  create: _createIntTween,
  matches: _isIntTween,
  setters: [_flaxBinding443, _flaxBinding444],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding452,
    _flaxBinding453,
    _flaxBinding114,
    _flaxBinding454,
    _flaxBinding455,
    _flaxBinding456,
    _flaxBinding457,
    _flaxBinding458,
    _flaxBinding459,
    _flaxBinding460,
  ]),
);
const _flaxBinding462 = FlaxGetter(
  "flipped",
  _flaxBinding44,
  _Interval_flipped,
);
const _flaxBinding463 = FlaxGetter("begin", _flaxBinding20, _Interval_begin);
const _flaxBinding464 = FlaxGetter("end", _flaxBinding20, _Interval_end);
const _flaxBinding465 = FlaxGetter("curve", _flaxBinding44, _Interval_curve);
const _flaxBinding466 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _Interval_transform,
);
const _flaxBinding467 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _Interval_transformInternal,
);
const _flaxBinding468 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _Interval_toString,
);
const _flaxBinding469 = <FlaxParameter>[
  FlaxParameter("begin", _flaxBinding20, required: true),
  FlaxParameter("end", _flaxBinding20, required: true),
  FlaxParameter("curve", _flaxBinding44, required: false, omitWhenAbsent: true),
];
const _flaxBinding470 = FlaxProxyMember(
  "begin",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding471 = FlaxProxyMember(
  "end",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding472 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Interval",
  [_flaxBinding462, _flaxBinding463, _flaxBinding464, _flaxBinding465],
  {
    "transform": _flaxBinding466,
    "transformInternal": _flaxBinding467,
    "toString": _flaxBinding468,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:begin": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _Interval_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _Interval_super_get_end,
    ),
    "@super:get:curve": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _Interval_super_get_curve,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding469},
  create: _createInterval,
  matches: _isInterval,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding470,
    _flaxBinding471,
    _flaxBinding376,
    _flaxBinding309,
  ]),
);
const _flaxBinding473 = FlaxGetter(
  "status",
  _flaxBinding4,
  _ProxyAnimation_status,
);
const _flaxBinding474 = FlaxGetter(
  "value",
  _flaxBinding20,
  _ProxyAnimation_value,
);
const _flaxBinding475 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _ProxyAnimation_isDismissed,
);
const _flaxBinding476 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _ProxyAnimation_isCompleted,
);
const _flaxBinding477 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _ProxyAnimation_isAnimating,
);
const _flaxBinding478 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _ProxyAnimation_isForwardOrCompleted,
);
const _flaxBinding479 = FlaxGetter(
  "parent",
  _flaxBinding76,
  _ProxyAnimation_parent,
);
const _flaxBinding480 = FlaxSetter(
  "parent",
  _flaxBinding76,
  _ProxyAnimation_set_parent,
);
const _flaxBinding481 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _ProxyAnimation_toString,
);
const _flaxBinding482 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _ProxyAnimation_toStringDetails,
);
const _flaxBinding483 = <FlaxParameter>[
  FlaxParameter("animation", _flaxBinding76, required: false),
];
const _flaxBinding484 = FlaxProxyMember(
  "parent",
  1,
  _flaxBinding77,
  hasSuper: true,
);
const _flaxBinding485 = FlaxProxyMember(
  "parent",
  2,
  _flaxBinding78,
  hasSuper: true,
);
const _flaxBinding486 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ProxyAnimation",
  [
    _flaxBinding473,
    _flaxBinding474,
    _flaxBinding475,
    _flaxBinding476,
    _flaxBinding477,
    _flaxBinding478,
    _flaxBinding226,
    _flaxBinding479,
  ],
  {
    "addListener": _flaxBinding153,
    "removeListener": _flaxBinding154,
    "addStatusListener": _flaxBinding155,
    "removeStatusListener": _flaxBinding156,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _ProxyAnimation_drive,
      genericFactory: _flaxGeneric_ProxyAnimation_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding481,
    "toStringDetails": _flaxBinding482,
    "didRegisterListener": _flaxBinding227,
    "didUnregisterListener": _flaxBinding228,
    "didStartListening": _flaxBinding229,
    "didStopListening": _flaxBinding230,
    "clearListeners": _flaxBinding162,
    "notifyListeners": _flaxBinding163,
    "clearStatusListeners": _flaxBinding164,
    "notifyStatusListeners": _flaxBinding165,
    "@super:addListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_addListener,
    ),
    "@super:removeListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_removeListener,
    ),
    "@super:addStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_addStatusListener,
    ),
    "@super:removeStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_removeStatusListener,
    ),
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _ProxyAnimation_super_drive,
      genericFactory: _flaxGeneric_ProxyAnimation_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:toStringDetails": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch2_super_call_toStringDetails,
    ),
    "@super:didRegisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ProxyAnimation_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ProxyAnimation_super_didUnregisterListener,
    ),
    "@super:didStartListening": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ProxyAnimation_super_didStartListening,
    ),
    "@super:didStopListening": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ProxyAnimation_super_didStopListening,
    ),
    "@super:clearListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ProxyAnimation_super_clearListeners,
    ),
    "@super:notifyListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ProxyAnimation_super_notifyListeners,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ProxyAnimation_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding14,
      _ProxyAnimation_super_notifyStatusListeners,
    ),
    "@super:get:parent": FlaxInstanceMethod.signature(
      _flaxBinding77,
      _ProxyAnimation_super_get_parent,
    ),
    "@super:get:status": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _FlaxProxyDispatch0_super_get_status,
    ),
    "@super:get:value": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _ProxyAnimation_super_get_value,
    ),
    "@super:get:isDismissed": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isDismissed,
    ),
    "@super:get:isCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isCompleted,
    ),
    "@super:get:isAnimating": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isAnimating,
    ),
    "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
    ),
    "@super:get:isListening": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _ProxyAnimation_super_get_isListening,
    ),
    "@super:set:parent": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding76, required: true)],
      const FlaxTypeRef("void"),
      _ProxyAnimation_super_set_parent,
    ),
  },
  constructors: {"@implementation": _flaxBinding483},
  create: _createProxyAnimation,
  matches: _isProxyAnimation,
  setters: [_flaxBinding480],
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
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding111,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            "child",
            _flaxBinding112,
            required: true,
            positional: true,
          ),
        ],
        _flaxBinding113,
        _callback8,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback8Invoke,
        matches: _callback8Matches,
        genericFactory: _callback8Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding187,
    _flaxBinding188,
    _flaxBinding246,
    _flaxBinding247,
    _flaxBinding190,
    _flaxBinding191,
    _flaxBinding192,
    _flaxBinding193,
    _flaxBinding484,
    _flaxBinding116,
    _flaxBinding218,
    _flaxBinding117,
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding120,
    _flaxBinding248,
    _flaxBinding485,
  ]),
);
const _flaxBinding487 = FlaxGetter("begin", _flaxBinding79, _RectTween_begin);
const _flaxBinding488 = FlaxGetter("end", _flaxBinding79, _RectTween_end);
const _flaxBinding489 = FlaxSetter(
  "begin",
  _flaxBinding79,
  _RectTween_set_begin,
);
const _flaxBinding490 = FlaxSetter("end", _flaxBinding79, _RectTween_set_end);
const _flaxBinding491 = FlaxInstanceMethod.signature(
  _flaxBinding80,
  _RectTween_lerp,
);
const _flaxBinding492 = FlaxInstanceMethod.signature(
  _flaxBinding80,
  _RectTween_transform,
);
const _flaxBinding493 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _RectTween_toString,
);
const _flaxBinding494 = FlaxInstanceMethod.signature(
  _flaxBinding81,
  _RectTween_evaluate,
);
const _flaxBinding495 = FlaxInstanceMethod.signature(
  _flaxBinding83,
  _RectTween_animate,
);
const _flaxBinding496 = FlaxInstanceMethod.signature(
  _flaxBinding85,
  _RectTween_chain,
);
const _flaxBinding497 = <FlaxParameter>[
  FlaxParameter("begin", _flaxBinding79, required: false),
  FlaxParameter("end", _flaxBinding79, required: false),
];
const _flaxBinding498 = FlaxProxyMember(
  "lerp",
  0,
  _flaxBinding80,
  hasSuper: true,
);
const _flaxBinding499 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding80,
  hasSuper: true,
);
const _flaxBinding500 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding81,
  hasSuper: true,
);
const _flaxBinding501 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding83,
  hasSuper: true,
);
const _flaxBinding502 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding85,
  hasSuper: true,
);
const _flaxBinding503 = FlaxProxyMember(
  "begin",
  1,
  _flaxBinding86,
  hasSuper: true,
);
const _flaxBinding504 = FlaxProxyMember(
  "end",
  1,
  _flaxBinding86,
  hasSuper: true,
);
const _flaxBinding505 = FlaxProxyMember(
  "begin",
  2,
  _flaxBinding87,
  hasSuper: true,
);
const _flaxBinding506 = FlaxProxyMember(
  "end",
  2,
  _flaxBinding87,
  hasSuper: true,
);
const _flaxBinding507 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:RectTween",
  [_flaxBinding487, _flaxBinding488],
  {
    "lerp": _flaxBinding491,
    "transform": _flaxBinding492,
    "toString": _flaxBinding493,
    "evaluate": _flaxBinding494,
    "animate": _flaxBinding495,
    "chain": _flaxBinding496,
    "@super:lerp": FlaxInstanceMethod.signature(
      _flaxBinding80,
      _RectTween_super_lerp,
    ),
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding80,
      _RectTween_super_transform,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:evaluate": FlaxInstanceMethod.signature(
      _flaxBinding81,
      _RectTween_super_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.signature(
      _flaxBinding83,
      _RectTween_super_animate,
    ),
    "@super:chain": FlaxInstanceMethod.signature(
      _flaxBinding85,
      _RectTween_super_chain,
    ),
    "@super:get:begin": FlaxInstanceMethod.signature(
      _flaxBinding86,
      _RectTween_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.signature(
      _flaxBinding86,
      _RectTween_super_get_end,
    ),
    "@super:set:begin": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding79, required: true)],
      const FlaxTypeRef("void"),
      _RectTween_super_set_begin,
    ),
    "@super:set:end": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding79, required: true)],
      const FlaxTypeRef("void"),
      _RectTween_super_set_end,
    ),
  },
  constructors: {"@implementation": _flaxBinding497},
  create: _createRectTween,
  matches: _isRectTween,
  setters: [_flaxBinding489, _flaxBinding490],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding498,
    _flaxBinding499,
    _flaxBinding114,
    _flaxBinding500,
    _flaxBinding501,
    _flaxBinding502,
    _flaxBinding503,
    _flaxBinding504,
    _flaxBinding505,
    _flaxBinding506,
  ]),
);
const _flaxBinding508 = FlaxGetter(
  "status",
  _flaxBinding4,
  _ReverseAnimation_status,
);
const _flaxBinding509 = FlaxGetter(
  "value",
  _flaxBinding20,
  _ReverseAnimation_value,
);
const _flaxBinding510 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _ReverseAnimation_isDismissed,
);
const _flaxBinding511 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _ReverseAnimation_isCompleted,
);
const _flaxBinding512 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _ReverseAnimation_isAnimating,
);
const _flaxBinding513 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _ReverseAnimation_isForwardOrCompleted,
);
const _flaxBinding514 = FlaxGetter(
  "parent",
  _flaxBinding26,
  _ReverseAnimation_parent,
);
const _flaxBinding515 = FlaxInstanceMethod.signature(
  _flaxBinding3,
  _ReverseAnimation_addListener,
);
const _flaxBinding516 = FlaxInstanceMethod.signature(
  _flaxBinding3,
  _ReverseAnimation_removeListener,
);
const _flaxBinding517 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _ReverseAnimation_toString,
);
const _flaxBinding518 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _ReverseAnimation_toStringDetails,
);
const _flaxBinding519 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ReverseAnimation",
  [
    _flaxBinding508,
    _flaxBinding509,
    _flaxBinding510,
    _flaxBinding511,
    _flaxBinding512,
    _flaxBinding513,
    _flaxBinding226,
    _flaxBinding514,
  ],
  {
    "addListener": _flaxBinding515,
    "removeListener": _flaxBinding516,
    "addStatusListener": _flaxBinding155,
    "removeStatusListener": _flaxBinding156,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _ReverseAnimation_drive,
      genericFactory: _flaxGeneric_ReverseAnimation_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding517,
    "toStringDetails": _flaxBinding518,
    "didRegisterListener": _flaxBinding227,
    "didUnregisterListener": _flaxBinding228,
    "didStartListening": _flaxBinding229,
    "didStopListening": _flaxBinding230,
    "clearStatusListeners": _flaxBinding164,
    "notifyStatusListeners": _flaxBinding165,
    "@super:addListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_addListener,
    ),
    "@super:removeListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_removeListener,
    ),
    "@super:addStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_addStatusListener,
    ),
    "@super:removeStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_removeStatusListener,
    ),
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _ReverseAnimation_super_drive,
      genericFactory: _flaxGeneric_ReverseAnimation_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:toStringDetails": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch2_super_call_toStringDetails,
    ),
    "@super:didRegisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ReverseAnimation_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ReverseAnimation_super_didUnregisterListener,
    ),
    "@super:didStartListening": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ReverseAnimation_super_didStartListening,
    ),
    "@super:didStopListening": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ReverseAnimation_super_didStopListening,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _ReverseAnimation_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding14,
      _ReverseAnimation_super_notifyStatusListeners,
    ),
    "@super:get:parent": FlaxInstanceMethod.signature(
      _flaxBinding27,
      _ReverseAnimation_super_get_parent,
    ),
    "@super:get:status": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _FlaxProxyDispatch0_super_get_status,
    ),
    "@super:get:value": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _ReverseAnimation_super_get_value,
    ),
    "@super:get:isDismissed": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isDismissed,
    ),
    "@super:get:isCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isCompleted,
    ),
    "@super:get:isAnimating": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isAnimating,
    ),
    "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
    ),
    "@super:get:isListening": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _ReverseAnimation_super_get_isListening,
    ),
  },
  constructors: {"@implementation": _flaxBinding123},
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
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding111,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            "child",
            _flaxBinding112,
            required: true,
            positional: true,
          ),
        ],
        _flaxBinding113,
        _callback9,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback9Invoke,
        matches: _callback9Matches,
        genericFactory: _callback9Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding187,
    _flaxBinding188,
    _flaxBinding246,
    _flaxBinding247,
    _flaxBinding192,
    _flaxBinding193,
    _flaxBinding400,
    _flaxBinding116,
    _flaxBinding218,
    _flaxBinding117,
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding120,
    _flaxBinding248,
  ]),
);
const _flaxBinding520 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:Tween",
  dartType: FlaxDartTypes.typeOf<api.Tween<Object?>>,
);
const _flaxBinding521 = <FlaxParameter>[
  FlaxParameter("parent", _flaxBinding520, required: true),
];
const _flaxBinding522 = FlaxGetter(
  "flipped",
  _flaxBinding44,
  _SawTooth_flipped,
);
const _flaxBinding523 = FlaxGetter("count", _flaxBinding48, _SawTooth_count);
const _flaxBinding524 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _SawTooth_transform,
);
const _flaxBinding525 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _SawTooth_transformInternal,
);
const _flaxBinding526 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _SawTooth_toString,
);
const _flaxBinding527 = <FlaxParameter>[
  FlaxParameter("count", _flaxBinding48, required: true),
];
const _flaxBinding528 = FlaxProxyMember(
  "count",
  1,
  _flaxBinding49,
  hasSuper: true,
);
const _flaxBinding529 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:SawTooth",
  [_flaxBinding522, _flaxBinding523],
  {
    "transform": _flaxBinding524,
    "transformInternal": _flaxBinding525,
    "toString": _flaxBinding526,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:count": FlaxInstanceMethod.signature(
      _flaxBinding49,
      _SawTooth_super_get_count,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding527},
  create: _createSawTooth,
  matches: _isSawTooth,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding528,
    _flaxBinding309,
  ]),
);
const _flaxBinding530 = FlaxGetter("begin", _flaxBinding88, _SizeTween_begin);
const _flaxBinding531 = FlaxGetter("end", _flaxBinding88, _SizeTween_end);
const _flaxBinding532 = FlaxSetter(
  "begin",
  _flaxBinding88,
  _SizeTween_set_begin,
);
const _flaxBinding533 = FlaxSetter("end", _flaxBinding88, _SizeTween_set_end);
const _flaxBinding534 = FlaxInstanceMethod.signature(
  _flaxBinding89,
  _SizeTween_lerp,
);
const _flaxBinding535 = FlaxInstanceMethod.signature(
  _flaxBinding89,
  _SizeTween_transform,
);
const _flaxBinding536 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _SizeTween_toString,
);
const _flaxBinding537 = FlaxInstanceMethod.signature(
  _flaxBinding90,
  _SizeTween_evaluate,
);
const _flaxBinding538 = FlaxInstanceMethod.signature(
  _flaxBinding92,
  _SizeTween_animate,
);
const _flaxBinding539 = FlaxInstanceMethod.signature(
  _flaxBinding94,
  _SizeTween_chain,
);
const _flaxBinding540 = <FlaxParameter>[
  FlaxParameter("begin", _flaxBinding88, required: false),
  FlaxParameter("end", _flaxBinding88, required: false),
];
const _flaxBinding541 = FlaxProxyMember(
  "lerp",
  0,
  _flaxBinding89,
  hasSuper: true,
);
const _flaxBinding542 = FlaxProxyMember(
  "transform",
  0,
  _flaxBinding89,
  hasSuper: true,
);
const _flaxBinding543 = FlaxProxyMember(
  "evaluate",
  0,
  _flaxBinding90,
  hasSuper: true,
);
const _flaxBinding544 = FlaxProxyMember(
  "animate",
  0,
  _flaxBinding92,
  hasSuper: true,
);
const _flaxBinding545 = FlaxProxyMember(
  "chain",
  0,
  _flaxBinding94,
  hasSuper: true,
);
const _flaxBinding546 = FlaxProxyMember(
  "begin",
  1,
  _flaxBinding95,
  hasSuper: true,
);
const _flaxBinding547 = FlaxProxyMember(
  "end",
  1,
  _flaxBinding95,
  hasSuper: true,
);
const _flaxBinding548 = FlaxProxyMember(
  "begin",
  2,
  _flaxBinding96,
  hasSuper: true,
);
const _flaxBinding549 = FlaxProxyMember(
  "end",
  2,
  _flaxBinding96,
  hasSuper: true,
);
const _flaxBinding550 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:SizeTween",
  [_flaxBinding530, _flaxBinding531],
  {
    "lerp": _flaxBinding534,
    "transform": _flaxBinding535,
    "toString": _flaxBinding536,
    "evaluate": _flaxBinding537,
    "animate": _flaxBinding538,
    "chain": _flaxBinding539,
    "@super:lerp": FlaxInstanceMethod.signature(
      _flaxBinding89,
      _SizeTween_super_lerp,
    ),
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding89,
      _SizeTween_super_transform,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:evaluate": FlaxInstanceMethod.signature(
      _flaxBinding90,
      _SizeTween_super_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.signature(
      _flaxBinding92,
      _SizeTween_super_animate,
    ),
    "@super:chain": FlaxInstanceMethod.signature(
      _flaxBinding94,
      _SizeTween_super_chain,
    ),
    "@super:get:begin": FlaxInstanceMethod.signature(
      _flaxBinding95,
      _SizeTween_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.signature(
      _flaxBinding95,
      _SizeTween_super_get_end,
    ),
    "@super:set:begin": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding88, required: true)],
      const FlaxTypeRef("void"),
      _SizeTween_super_set_begin,
    ),
    "@super:set:end": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding88, required: true)],
      const FlaxTypeRef("void"),
      _SizeTween_super_set_end,
    ),
  },
  constructors: {"@implementation": _flaxBinding540},
  create: _createSizeTween,
  matches: _isSizeTween,
  setters: [_flaxBinding532, _flaxBinding533],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding541,
    _flaxBinding542,
    _flaxBinding114,
    _flaxBinding543,
    _flaxBinding544,
    _flaxBinding545,
    _flaxBinding546,
    _flaxBinding547,
    _flaxBinding548,
    _flaxBinding549,
  ]),
);
const _flaxBinding551 = FlaxGetter("flipped", _flaxBinding44, _Split_flipped);
const _flaxBinding552 = FlaxGetter("split", _flaxBinding20, _Split_split);
const _flaxBinding553 = FlaxGetter(
  "beginCurve",
  _flaxBinding44,
  _Split_beginCurve,
);
const _flaxBinding554 = FlaxGetter("endCurve", _flaxBinding44, _Split_endCurve);
const _flaxBinding555 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _Split_transform,
);
const _flaxBinding556 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _Split_transformInternal,
);
const _flaxBinding557 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _Split_toString,
);
const _flaxBinding558 = <FlaxParameter>[
  FlaxParameter("split", _flaxBinding20, required: true),
  FlaxParameter(
    "beginCurve",
    _flaxBinding44,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "endCurve",
    _flaxBinding44,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding559 = FlaxProxyMember(
  "split",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding560 = FlaxProxyMember(
  "beginCurve",
  1,
  _flaxBinding45,
  hasSuper: true,
);
const _flaxBinding561 = FlaxProxyMember(
  "endCurve",
  1,
  _flaxBinding45,
  hasSuper: true,
);
const _flaxBinding562 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Split",
  [_flaxBinding551, _flaxBinding552, _flaxBinding553, _flaxBinding554],
  {
    "transform": _flaxBinding555,
    "transformInternal": _flaxBinding556,
    "toString": _flaxBinding557,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:split": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _Split_super_get_split,
    ),
    "@super:get:beginCurve": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _Split_super_get_beginCurve,
    ),
    "@super:get:endCurve": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _Split_super_get_endCurve,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding558},
  create: _createSplit,
  matches: _isSplit,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding559,
    _flaxBinding560,
    _flaxBinding561,
    _flaxBinding309,
  ]),
);
const _flaxBinding563 = FlaxGetter("begin", _flaxBinding73, _StepTween_begin);
const _flaxBinding564 = FlaxGetter("end", _flaxBinding73, _StepTween_end);
const _flaxBinding565 = FlaxSetter(
  "begin",
  _flaxBinding73,
  _StepTween_set_begin,
);
const _flaxBinding566 = FlaxSetter("end", _flaxBinding73, _StepTween_set_end);
const _flaxBinding567 = FlaxInstanceMethod.signature(
  _flaxBinding67,
  _StepTween_lerp,
);
const _flaxBinding568 = FlaxInstanceMethod.signature(
  _flaxBinding67,
  _StepTween_transform,
);
const _flaxBinding569 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _StepTween_toString,
);
const _flaxBinding570 = FlaxInstanceMethod.signature(
  _flaxBinding68,
  _StepTween_evaluate,
);
const _flaxBinding571 = FlaxInstanceMethod.signature(
  _flaxBinding70,
  _StepTween_animate,
);
const _flaxBinding572 = FlaxInstanceMethod.signature(
  _flaxBinding72,
  _StepTween_chain,
);
const _flaxBinding573 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:StepTween",
  [_flaxBinding563, _flaxBinding564],
  {
    "lerp": _flaxBinding567,
    "transform": _flaxBinding568,
    "toString": _flaxBinding569,
    "evaluate": _flaxBinding570,
    "animate": _flaxBinding571,
    "chain": _flaxBinding572,
    "@super:lerp": FlaxInstanceMethod.signature(
      _flaxBinding67,
      _FlaxProxyDispatch18_super_call_lerp,
    ),
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding67,
      _FlaxProxyDispatch18_super_call_transform,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:evaluate": FlaxInstanceMethod.signature(
      _flaxBinding68,
      _FlaxProxyDispatch18_super_call_evaluate,
    ),
    "@super:animate": FlaxInstanceMethod.signature(
      _flaxBinding70,
      _FlaxProxyDispatch18_super_call_animate,
    ),
    "@super:chain": FlaxInstanceMethod.signature(
      _flaxBinding72,
      _FlaxProxyDispatch18_super_call_chain,
    ),
    "@super:get:begin": FlaxInstanceMethod.signature(
      _flaxBinding74,
      _FlaxProxyDispatch18_super_get_begin,
    ),
    "@super:get:end": FlaxInstanceMethod.signature(
      _flaxBinding74,
      _FlaxProxyDispatch18_super_get_end,
    ),
    "@super:set:begin": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding73, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch18_super_set_begin,
    ),
    "@super:set:end": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding73, required: true)],
      const FlaxTypeRef("void"),
      _FlaxProxyDispatch18_super_set_end,
    ),
  },
  constructors: {"@implementation": _flaxBinding451},
  create: _createStepTween,
  matches: _isStepTween,
  setters: [_flaxBinding565, _flaxBinding566],
  supertypes: [
    "flax.core/sdk_animation#type:Tween",
    "flax.core/sdk_animation#type:Animatable",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding452,
    _flaxBinding453,
    _flaxBinding114,
    _flaxBinding454,
    _flaxBinding455,
    _flaxBinding456,
    _flaxBinding457,
    _flaxBinding458,
    _flaxBinding459,
    _flaxBinding460,
  ]),
);
const _flaxBinding574 = FlaxGetter(
  "flipped",
  _flaxBinding44,
  _ThreePointCubic_flipped,
);
const _flaxBinding575 = FlaxGetter("a1", _flaxBinding40, _ThreePointCubic_a1);
const _flaxBinding576 = FlaxGetter("b1", _flaxBinding40, _ThreePointCubic_b1);
const _flaxBinding577 = FlaxGetter(
  "midpoint",
  _flaxBinding40,
  _ThreePointCubic_midpoint,
);
const _flaxBinding578 = FlaxGetter("a2", _flaxBinding40, _ThreePointCubic_a2);
const _flaxBinding579 = FlaxGetter("b2", _flaxBinding40, _ThreePointCubic_b2);
const _flaxBinding580 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _ThreePointCubic_transform,
);
const _flaxBinding581 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _ThreePointCubic_transformInternal,
);
const _flaxBinding582 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _ThreePointCubic_toString,
);
const _flaxBinding583 = <FlaxParameter>[
  FlaxParameter("a1", _flaxBinding40, required: true),
  FlaxParameter("b1", _flaxBinding40, required: true),
  FlaxParameter("midpoint", _flaxBinding40, required: true),
  FlaxParameter("a2", _flaxBinding40, required: true),
  FlaxParameter("b2", _flaxBinding40, required: true),
];
const _flaxBinding584 = FlaxProxyMember(
  "a1",
  1,
  _flaxBinding60,
  hasSuper: true,
);
const _flaxBinding585 = FlaxProxyMember(
  "b1",
  1,
  _flaxBinding60,
  hasSuper: true,
);
const _flaxBinding586 = FlaxProxyMember(
  "midpoint",
  1,
  _flaxBinding60,
  hasSuper: true,
);
const _flaxBinding587 = FlaxProxyMember(
  "a2",
  1,
  _flaxBinding60,
  hasSuper: true,
);
const _flaxBinding588 = FlaxProxyMember(
  "b2",
  1,
  _flaxBinding60,
  hasSuper: true,
);
const _flaxBinding589 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:ThreePointCubic",
  [
    _flaxBinding574,
    _flaxBinding575,
    _flaxBinding576,
    _flaxBinding577,
    _flaxBinding578,
    _flaxBinding579,
  ],
  {
    "transform": _flaxBinding580,
    "transformInternal": _flaxBinding581,
    "toString": _flaxBinding582,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:a1": FlaxInstanceMethod.signature(
      _flaxBinding60,
      _ThreePointCubic_super_get_a1,
    ),
    "@super:get:b1": FlaxInstanceMethod.signature(
      _flaxBinding60,
      _ThreePointCubic_super_get_b1,
    ),
    "@super:get:midpoint": FlaxInstanceMethod.signature(
      _flaxBinding60,
      _ThreePointCubic_super_get_midpoint,
    ),
    "@super:get:a2": FlaxInstanceMethod.signature(
      _flaxBinding60,
      _ThreePointCubic_super_get_a2,
    ),
    "@super:get:b2": FlaxInstanceMethod.signature(
      _flaxBinding60,
      _ThreePointCubic_super_get_b2,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding583},
  create: _createThreePointCubic,
  matches: _isThreePointCubic,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding584,
    _flaxBinding585,
    _flaxBinding586,
    _flaxBinding587,
    _flaxBinding588,
    _flaxBinding309,
  ]),
);
const _flaxBinding590 = FlaxGetter(
  "flipped",
  _flaxBinding44,
  _Threshold_flipped,
);
const _flaxBinding591 = FlaxGetter(
  "threshold",
  _flaxBinding20,
  _Threshold_threshold,
);
const _flaxBinding592 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _Threshold_transform,
);
const _flaxBinding593 = FlaxInstanceMethod.signature(
  _flaxBinding39,
  _Threshold_transformInternal,
);
const _flaxBinding594 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _Threshold_toString,
);
const _flaxBinding595 = <FlaxParameter>[
  FlaxParameter("threshold", _flaxBinding20, required: true),
];
const _flaxBinding596 = FlaxProxyMember(
  "threshold",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding597 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:Threshold",
  [_flaxBinding590, _flaxBinding591],
  {
    "transform": _flaxBinding592,
    "transformInternal": _flaxBinding593,
    "toString": _flaxBinding594,
    "@super:transform": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch10_super_call_transform,
    ),
    "@super:transformInternal": FlaxInstanceMethod.signature(
      _flaxBinding39,
      _FlaxProxyDispatch11_super_call_transformInternal,
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:get:threshold": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _Threshold_super_get_threshold,
    ),
    "@super:get:flipped": FlaxInstanceMethod.signature(
      _flaxBinding45,
      _FlaxProxyDispatch11_super_get_flipped,
    ),
  },
  constructors: {"@implementation": _flaxBinding595},
  create: _createThreshold,
  matches: _isThreshold,
  setters: [],
  supertypes: [
    "flax.core/flutter#type:Curve",
    "flax.core/sdk_animation#type:ParametricCurve",
    "dart:core::Object",
  ],
  proxy: FlaxProxyBinding([
    _flaxBinding305,
    _flaxBinding306,
    _flaxBinding114,
    _flaxBinding596,
    _flaxBinding309,
  ]),
);
const _flaxBinding598 = FlaxGetter(
  "status",
  _flaxBinding4,
  _TrainHoppingAnimation_status,
);
const _flaxBinding599 = FlaxGetter(
  "value",
  _flaxBinding20,
  _TrainHoppingAnimation_value,
);
const _flaxBinding600 = FlaxGetter(
  "isDismissed",
  _flaxBinding11,
  _TrainHoppingAnimation_isDismissed,
);
const _flaxBinding601 = FlaxGetter(
  "isCompleted",
  _flaxBinding11,
  _TrainHoppingAnimation_isCompleted,
);
const _flaxBinding602 = FlaxGetter(
  "isAnimating",
  _flaxBinding11,
  _TrainHoppingAnimation_isAnimating,
);
const _flaxBinding603 = FlaxGetter(
  "isForwardOrCompleted",
  _flaxBinding11,
  _TrainHoppingAnimation_isForwardOrCompleted,
);
const _flaxBinding604 = FlaxGetter(
  "currentTrain",
  _flaxBinding76,
  _TrainHoppingAnimation_currentTrain,
);
const _flaxBinding605 = FlaxGetter(
  "onSwitchedTrain",
  _flaxBinding97,
  _TrainHoppingAnimation_onSwitchedTrain,
);
const _flaxBinding606 = FlaxSetter(
  "onSwitchedTrain",
  _flaxBinding97,
  _TrainHoppingAnimation_set_onSwitchedTrain,
);
const _flaxBinding607 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _TrainHoppingAnimation_toString,
);
const _flaxBinding608 = FlaxInstanceMethod.signature(
  _flaxBinding9,
  _TrainHoppingAnimation_toStringDetails,
);
const _flaxBinding609 = <FlaxParameter>[
  FlaxParameter("_currentTrain", _flaxBinding26, required: true),
  FlaxParameter("_nextTrain", _flaxBinding76, required: true),
  FlaxParameter("onSwitchedTrain", _flaxBinding97, required: false),
];
const _flaxBinding610 = FlaxProxyMember(
  "currentTrain",
  1,
  _flaxBinding77,
  hasSuper: true,
);
const _flaxBinding611 = FlaxProxyMember(
  "onSwitchedTrain",
  1,
  _flaxBinding98,
  hasSuper: true,
);
const _flaxBinding612 = FlaxProxyMember(
  "onSwitchedTrain",
  2,
  _flaxBinding99,
  hasSuper: true,
);
const _flaxBinding613 = FlaxObjectBinding(
  "flax.core/sdk_animation#type:TrainHoppingAnimation",
  [
    _flaxBinding598,
    _flaxBinding599,
    _flaxBinding600,
    _flaxBinding601,
    _flaxBinding602,
    _flaxBinding603,
    _flaxBinding604,
    _flaxBinding605,
  ],
  {
    "addListener": _flaxBinding153,
    "removeListener": _flaxBinding154,
    "addStatusListener": _flaxBinding155,
    "removeStatusListener": _flaxBinding156,
    "drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _TrainHoppingAnimation_drive,
      genericFactory: _flaxGeneric_TrainHoppingAnimation_drive,
      ownerTypes: [],
    ),
    "toString": _flaxBinding607,
    "toStringDetails": _flaxBinding608,
    "didRegisterListener": _flaxBinding159,
    "didUnregisterListener": _flaxBinding160,
    "dispose": _flaxBinding161,
    "clearListeners": _flaxBinding162,
    "notifyListeners": _flaxBinding163,
    "clearStatusListeners": _flaxBinding164,
    "notifyStatusListeners": _flaxBinding165,
    "@super:addListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_addListener,
    ),
    "@super:removeListener": FlaxInstanceMethod.signature(
      _flaxBinding3,
      _FlaxProxyDispatch0_super_call_removeListener,
    ),
    "@super:addStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_addStatusListener,
    ),
    "@super:removeStatusListener": FlaxInstanceMethod.signature(
      _flaxBinding7,
      _FlaxProxyDispatch0_super_call_removeStatusListener,
    ),
    "@super:drive": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "child",
          FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animatable"),
          required: true,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/sdk_animation#type:Animation"),
      _TrainHoppingAnimation_super_drive,
      genericFactory: _flaxGeneric_TrainHoppingAnimation_super_drive,
      ownerTypes: [],
    ),
    "@super:toString": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch1_super_call_toString,
    ),
    "@super:toStringDetails": FlaxInstanceMethod.signature(
      _flaxBinding9,
      _FlaxProxyDispatch2_super_call_toStringDetails,
    ),
    "@super:didRegisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _TrainHoppingAnimation_super_didRegisterListener,
    ),
    "@super:didUnregisterListener": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _TrainHoppingAnimation_super_didUnregisterListener,
    ),
    "@super:dispose": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _TrainHoppingAnimation_super_dispose,
    ),
    "@super:clearListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _TrainHoppingAnimation_super_clearListeners,
    ),
    "@super:notifyListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _TrainHoppingAnimation_super_notifyListeners,
    ),
    "@super:clearStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding13,
      _TrainHoppingAnimation_super_clearStatusListeners,
    ),
    "@super:notifyStatusListeners": FlaxInstanceMethod.signature(
      _flaxBinding14,
      _TrainHoppingAnimation_super_notifyStatusListeners,
    ),
    "@super:get:currentTrain": FlaxInstanceMethod.signature(
      _flaxBinding77,
      _TrainHoppingAnimation_super_get_currentTrain,
    ),
    "@super:get:onSwitchedTrain": FlaxInstanceMethod.signature(
      _flaxBinding98,
      _TrainHoppingAnimation_super_get_onSwitchedTrain,
    ),
    "@super:get:status": FlaxInstanceMethod.signature(
      _flaxBinding10,
      _FlaxProxyDispatch0_super_get_status,
    ),
    "@super:get:value": FlaxInstanceMethod.signature(
      _flaxBinding21,
      _TrainHoppingAnimation_super_get_value,
    ),
    "@super:get:isDismissed": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isDismissed,
    ),
    "@super:get:isCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isCompleted,
    ),
    "@super:get:isAnimating": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isAnimating,
    ),
    "@super:get:isForwardOrCompleted": FlaxInstanceMethod.signature(
      _flaxBinding12,
      _FlaxProxyDispatch2_super_get_isForwardOrCompleted,
    ),
    "@super:set:onSwitchedTrain": FlaxInstanceMethod(
      [FlaxParameter("value", _flaxBinding97, required: true)],
      const FlaxTypeRef("void"),
      _TrainHoppingAnimation_super_set_onSwitchedTrain,
    ),
  },
  constructors: {"@implementation": _flaxBinding609},
  create: _createTrainHoppingAnimation,
  matches: _isTrainHoppingAnimation,
  setters: [_flaxBinding606],
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
    _flaxBinding108,
    _flaxBinding109,
    _flaxBinding110,
    _flaxBinding111,
    FlaxProxyMember(
      "drive",
      0,
      FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            "child",
            _flaxBinding112,
            required: true,
            positional: true,
          ),
        ],
        _flaxBinding113,
        _callback10,
        id: "callback:<U:any?:=any?:>(p:r:child:object:flax.core/sdk_animation#type:Animatable<parameter:>)->object:flax.core/sdk_animation#type:Animation<parameter:>",
        invoke: _callback10Invoke,
        matches: _callback10Matches,
        genericFactory: _callback10Types,
      ),
      hasSuper: true,
      hasCallContext: true,
    ),
    _flaxBinding114,
    _flaxBinding115,
    _flaxBinding187,
    _flaxBinding188,
    _flaxBinding189,
    _flaxBinding190,
    _flaxBinding191,
    _flaxBinding192,
    _flaxBinding193,
    _flaxBinding610,
    _flaxBinding611,
    _flaxBinding116,
    _flaxBinding218,
    _flaxBinding117,
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding120,
    _flaxBinding612,
  ]),
);
const _flaxBinding614 = <FlaxParameter>[
  FlaxParameter("begin", _flaxBinding106, required: false),
  FlaxParameter("end", _flaxBinding106, required: false),
];
const _flaxBinding615 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_animation#type:TweenSequenceItem",
  dartType: FlaxDartTypes.typeOf<api.TweenSequenceItem<Object?>>,
);
const _flaxBinding616 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding615,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_animation#type:TweenSequenceItem<any?:>]",
    _collection6Create,
    _collection6Matches,
    restore: _collection6Restore,
  ),
);
const _flaxBinding617 = FlaxTypeRef(
  "list",
  item: _flaxBinding615,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_animation#type:TweenSequenceItem<any?:>]",
    _collection5Create,
    _collection5Matches,
  ),
  iterable: _flaxBinding616,
);
const _flaxBinding618 = <FlaxParameter>[
  FlaxParameter("items", _flaxBinding617, required: true),
];
const _flaxBinding619 = FlaxGetter(
  "weight",
  _flaxBinding20,
  _TweenSequenceItem_weight,
);
const _flaxBinding620 = <FlaxParameter>[
  FlaxParameter("tween", _flaxBinding112, required: true),
  FlaxParameter("weight", _flaxBinding20, required: true),
];
const _flaxBinding621 = FlaxProxyMember(
  "weight",
  1,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding622 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding40,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Offset]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding41,
);
const _flaxBinding623 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding8,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection8Create,
    _collection8Matches,
    restore: _collection8Restore,
  ),
);
const _flaxBinding624 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding8,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection7Create,
    _collection7Matches,
  ),
  iterable: _flaxBinding623,
);
const _flaxBinding625 = <FlaxParameter>[
  FlaxParameter("child", _flaxBinding112, required: true),
];
const _flaxBinding626 = <FlaxParameter>[
  FlaxParameter("status", _flaxBinding4, required: true),
];
