// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import
import 'dart:core';

import 'package:flutter/widgets.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/gestures.dart' as api1;

import 'dart:core' as api2;
import 'dart:async' as api3;

import 'package:flutter/services.dart' as api4;
import 'package:flax/bindings.dart' as api5;
import 'package:flutter/scheduler.dart' as api6;
import 'package:flutter/foundation.dart' as api7;

// ignore: unused_element
const _flaxOmitted = Object();
const flutterBindings = FlaxBindingModule(
  'flutter',
  [
    FlaxEnumBinding("flax.core/flutter#type:ConnectionState", {
      "none": api.ConnectionState.none,
      "waiting": api.ConnectionState.waiting,
      "active": api.ConnectionState.active,
      "done": api.ConnectionState.done,
    }),
    FlaxEnumBinding("flax.core/flutter#type:WidgetState", {
      "hovered": api.WidgetState.hovered,
      "focused": api.WidgetState.focused,
      "pressed": api.WidgetState.pressed,
      "dragged": api.WidgetState.dragged,
      "selected": api.WidgetState.selected,
      "scrolledUnder": api.WidgetState.scrolledUnder,
      "disabled": api.WidgetState.disabled,
      "error": api.WidgetState.error,
    }),
    FlaxEnumBinding("flax.core/flutter#type:Clip", {
      "none": api.Clip.none,
      "hardEdge": api.Clip.hardEdge,
      "antiAlias": api.Clip.antiAlias,
      "antiAliasWithSaveLayer": api.Clip.antiAliasWithSaveLayer,
    }),
    FlaxEnumBinding("flax.core/flutter#type:DecorationPosition", {
      "background": api.DecorationPosition.background,
      "foreground": api.DecorationPosition.foreground,
    }),
    FlaxEnumBinding("flax.core/flutter#type:BoxShape", {
      "rectangle": api.BoxShape.rectangle,
      "circle": api.BoxShape.circle,
    }),
    FlaxEnumBinding("flax.core/flutter#type:BorderStyle", {
      "none": api.BorderStyle.none,
      "solid": api.BorderStyle.solid,
    }),
    FlaxEnumBinding("flax.core/flutter#type:FlexFit", {
      "tight": api.FlexFit.tight,
      "loose": api.FlexFit.loose,
    }),
    FlaxEnumBinding("flax.core/flutter#type:TextDirection", {
      "rtl": api.TextDirection.rtl,
      "ltr": api.TextDirection.ltr,
    }),
    FlaxEnumBinding("flax.core/flutter#type:StackFit", {
      "loose": api.StackFit.loose,
      "expand": api.StackFit.expand,
      "passthrough": api.StackFit.passthrough,
    }),
    FlaxEnumBinding("flax.core/flutter#type:FontStyle", {
      "normal": api.FontStyle.normal,
      "italic": api.FontStyle.italic,
    }),
    FlaxEnumBinding("flax.core/flutter#type:TextAffinity", {
      "upstream": api.TextAffinity.upstream,
      "downstream": api.TextAffinity.downstream,
    }),
    FlaxEnumBinding("flax.core/flutter#type:TextAlign", {
      "left": api.TextAlign.left,
      "right": api.TextAlign.right,
      "center": api.TextAlign.center,
      "justify": api.TextAlign.justify,
      "start": api.TextAlign.start,
      "end": api.TextAlign.end,
    }),
    FlaxEnumBinding("flax.core/flutter#type:TextOverflow", {
      "clip": api.TextOverflow.clip,
      "fade": api.TextOverflow.fade,
      "ellipsis": api.TextOverflow.ellipsis,
      "visible": api.TextOverflow.visible,
    }),
    FlaxEnumBinding("flax.core/flutter#type:MainAxisAlignment", {
      "start": api.MainAxisAlignment.start,
      "end": api.MainAxisAlignment.end,
      "center": api.MainAxisAlignment.center,
      "spaceBetween": api.MainAxisAlignment.spaceBetween,
      "spaceAround": api.MainAxisAlignment.spaceAround,
      "spaceEvenly": api.MainAxisAlignment.spaceEvenly,
    }),
    FlaxEnumBinding("flax.core/flutter#type:MainAxisSize", {
      "min": api.MainAxisSize.min,
      "max": api.MainAxisSize.max,
    }),
    FlaxEnumBinding("flax.core/flutter#type:CrossAxisAlignment", {
      "start": api.CrossAxisAlignment.start,
      "end": api.CrossAxisAlignment.end,
      "center": api.CrossAxisAlignment.center,
      "stretch": api.CrossAxisAlignment.stretch,
      "baseline": api.CrossAxisAlignment.baseline,
    }),
    FlaxEnumBinding("flax.core/flutter#type:VerticalDirection", {
      "up": api.VerticalDirection.up,
      "down": api.VerticalDirection.down,
    }),
    FlaxEnumBinding("flax.core/flutter#type:TextBaseline", {
      "alphabetic": api.TextBaseline.alphabetic,
      "ideographic": api.TextBaseline.ideographic,
    }),
    FlaxEnumBinding("flax.core/flutter#type:Axis", {
      "horizontal": api.Axis.horizontal,
      "vertical": api.Axis.vertical,
    }),
    FlaxEnumBinding("flax.core/flutter#type:UnfocusDisposition", {
      "scope": api.UnfocusDisposition.scope,
      "previouslyFocusedChild": api.UnfocusDisposition.previouslyFocusedChild,
    }),
    FlaxEnumBinding("flax.core/flutter#type:MaxLengthEnforcement", {
      "none": api4.MaxLengthEnforcement.none,
      "enforced": api4.MaxLengthEnforcement.enforced,
      "truncateAfterCompositionEnds":
          api4.MaxLengthEnforcement.truncateAfterCompositionEnds,
    }),
    FlaxEnumBinding("flax.core/flutter#type:HitTestBehavior", {
      "deferToChild": api.HitTestBehavior.deferToChild,
      "opaque": api.HitTestBehavior.opaque,
      "translucent": api.HitTestBehavior.translucent,
    }),
    FlaxEnumBinding("flax.core/flutter#type:WrapAlignment", {
      "start": api.WrapAlignment.start,
      "end": api.WrapAlignment.end,
      "center": api.WrapAlignment.center,
      "spaceBetween": api.WrapAlignment.spaceBetween,
      "spaceAround": api.WrapAlignment.spaceAround,
      "spaceEvenly": api.WrapAlignment.spaceEvenly,
    }),
    FlaxEnumBinding("flax.core/flutter#type:WrapCrossAlignment", {
      "start": api.WrapCrossAlignment.start,
      "end": api.WrapCrossAlignment.end,
      "center": api.WrapCrossAlignment.center,
    }),
    FlaxEnumBinding("flax.core/flutter#type:BoxFit", {
      "fill": api.BoxFit.fill,
      "contain": api.BoxFit.contain,
      "cover": api.BoxFit.cover,
      "fitWidth": api.BoxFit.fitWidth,
      "fitHeight": api.BoxFit.fitHeight,
      "none": api.BoxFit.none,
      "scaleDown": api.BoxFit.scaleDown,
    }),
    FlaxEnumBinding("flax.core/flutter#type:DragStartBehavior", {
      "down": api1.DragStartBehavior.down,
      "start": api1.DragStartBehavior.start,
    }),
    FlaxEnumBinding("flax.core/flutter#type:AutovalidateMode", {
      "disabled": api.AutovalidateMode.disabled,
      "always": api.AutovalidateMode.always,
      "onUserInteraction": api.AutovalidateMode.onUserInteraction,
      "onUnfocus": api.AutovalidateMode.onUnfocus,
      "onUserInteractionIfError": api.AutovalidateMode.onUserInteractionIfError,
    }),
    FlaxStreamTypeBinding(
      "flax.core/flutter#type:Stream",
      [
        FlaxGetter("isBroadcast", FlaxTypeRef("bool"), _Stream_isBroadcast),
        FlaxGetter(
          "length",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("int"),
            future: FlaxFutureBinding("int:", _future0Adapt),
          ),
          _Stream_length,
        ),
        FlaxGetter(
          "isEmpty",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _Stream_isEmpty,
        ),
        FlaxGetter(
          "first",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_first,
        ),
        FlaxGetter(
          "last",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_last,
        ),
        FlaxGetter(
          "single",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_single,
        ),
      ],
      {
        "asBroadcastStream": FlaxInstanceMethod(
          [
            FlaxParameter(
              "onCancel",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "subscription",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:StreamSubscription",
                      ),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback0,
                  id: "callback:<>(p:r:subscription:object:flax.core/flutter#type:StreamSubscription<Object?><any?:>)->void:",
                  invoke: _callback0Invoke,
                  matches: _callback0Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "onListen",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "subscription",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:StreamSubscription",
                      ),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback1,
                  id: "callback:<>(p:r:subscription:object:flax.core/flutter#type:StreamSubscription<Object?><any?:>)->void:",
                  invoke: _callback1Invoke,
                  matches: _callback1Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_asBroadcastStream,
          startsRoute: false,
        ),
        "listen": FlaxInstanceMethod(
          [
            FlaxParameter(
              "onData",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback2,
                  id: "callback:<>(p:r:event:any?:)->void:",
                  invoke: _callback2Invoke,
                  matches: _callback2Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "cancelOnError",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "onDone",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback3,
                  id: "callback:<>()->void:",
                  invoke: _callback3Invoke,
                  matches: _callback3Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "onError",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "p0",
                      FlaxTypeRef("any"),
                      required: true,
                      positional: true,
                      encode: const FlaxTypeRef('error'),
                    ),
                    FlaxCallbackParameter(
                      "p1",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:StackTrace",
                      ),
                      required: false,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback4,
                  id: "callback:<>(p:r:p0:any::e=error,p:o:p1:object:flax.core/flutter#type:StackTrace)->void:",
                  invoke: _callback4Invoke,
                  matches: _callback4Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:StreamSubscription",
          ),
          _Stream_listen,
          startsRoute: false,
        ),
        "where": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback5,
                  id: "callback:<>(p:r:event:any?:)->bool:",
                  invoke: _callback5Invoke,
                  matches: _callback5Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_where,
          startsRoute: false,
        ),
        "map": FlaxInstanceMethod(
          [
            FlaxParameter(
              "convert",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("any", nullable: true),
                  _callback6,
                  id: "callback:<>(p:r:event:any?:)->any?:",
                  invoke: _callback6Invoke,
                  matches: _callback6Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_map,
          startsRoute: false,
        ),
        "asyncMap": FlaxInstanceMethod(
          [
            FlaxParameter(
              "convert",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef(
                    "futureOr",
                    item: FlaxTypeRef("any", nullable: true),
                    future: FlaxFutureBinding("any?:", _future2Adapt),
                  ),
                  _callback7,
                  id: "callback:<>(p:r:event:any?:)->futureOr:[any?:]",
                  invoke: _callback7Invoke,
                  matches: _callback7Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_asyncMap,
          startsRoute: false,
        ),
        "asyncExpand": FlaxInstanceMethod(
          [
            FlaxParameter(
              "convert",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef(
                    "stream",
                    id: "flax.core/flutter#type:Stream",
                    nullable: true,
                    item: FlaxTypeRef("any", nullable: true),
                    stream: FlaxStreamBinding(
                      "stream:flax.core/flutter#type:Stream[any?:]",
                      _stream0Matches,
                      _stream0Adapt,
                    ),
                  ),
                  _callback8,
                  id: "callback:<>(p:r:event:any?:)->stream?:flax.core/flutter#type:Stream[any?:]",
                  invoke: _callback8Invoke,
                  matches: _callback8Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_asyncExpand,
          startsRoute: false,
        ),
        "handleError": FlaxInstanceMethod(
          [
            FlaxParameter(
              "onError",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "p0",
                      FlaxTypeRef("any"),
                      required: true,
                      positional: true,
                      encode: const FlaxTypeRef('error'),
                    ),
                    FlaxCallbackParameter(
                      "p1",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:StackTrace",
                      ),
                      required: false,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback9,
                  id: "callback:<>(p:r:p0:any::e=error,p:o:p1:object:flax.core/flutter#type:StackTrace)->void:",
                  invoke: _callback9Invoke,
                  matches: _callback9Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "error",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback10,
                  id: "callback:<>(p:r:error:any?:)->bool:",
                  invoke: _callback10Invoke,
                  matches: _callback10Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_handleError,
          startsRoute: false,
        ),
        "expand": FlaxInstanceMethod(
          [
            FlaxParameter(
              "convert",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef(
                    "iterable",
                    item: FlaxTypeRef("any", nullable: true),
                    collection: FlaxCollectionBinding(
                      "iterable:[any?:]",
                      _collection0Create,
                      _collection0Matches,
                    ),
                  ),
                  _callback11,
                  id: "callback:<>(p:r:element:any?:)->iterable:[any?:]",
                  invoke: _callback11Invoke,
                  matches: _callback11Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_expand,
          startsRoute: false,
        ),
        "pipe": FlaxInstanceMethod(
          [
            FlaxParameter(
              "streamConsumer",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StreamConsumer",
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_pipe,
          startsRoute: false,
        ),
        "transform": FlaxInstanceMethod(
          [
            FlaxParameter(
              "streamTransformer",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StreamTransformer",
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_transform,
          startsRoute: false,
        ),
        "reduce": FlaxInstanceMethod(
          [
            FlaxParameter(
              "combine",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "previous",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("any", nullable: true),
                  _callback12,
                  id: "callback:<>(p:r:previous:any?:,p:r:element:any?:)->any?:",
                  invoke: _callback12Invoke,
                  matches: _callback12Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_reduce,
          startsRoute: false,
        ),
        "fold": FlaxInstanceMethod(
          [
            FlaxParameter(
              "initialValue",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "combine",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "previous",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("any", nullable: true),
                  _callback13,
                  id: "callback:<>(p:r:previous:any?:,p:r:element:any?:)->any?:",
                  invoke: _callback13Invoke,
                  matches: _callback13Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_fold,
          startsRoute: false,
        ),
        "join": FlaxInstanceMethod(
          [
            FlaxParameter(
              "separator",
              FlaxTypeRef("String"),
              required: false,
              defaultValue: '',
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("String"),
            future: FlaxFutureBinding("String:", _future3Adapt),
          ),
          _Stream_join,
          startsRoute: false,
        ),
        "contains": FlaxInstanceMethod(
          [
            FlaxParameter(
              "needle",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _Stream_contains,
          startsRoute: false,
        ),
        "forEach": FlaxInstanceMethod(
          [
            FlaxParameter(
              "action",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback14,
                  id: "callback:<>(p:r:element:any?:)->void:",
                  invoke: _callback14Invoke,
                  matches: _callback14Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("void"),
            future: FlaxFutureBinding("void:", _future4Adapt),
          ),
          _Stream_forEach,
          startsRoute: false,
        ),
        "every": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback15,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback15Invoke,
                  matches: _callback15Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _Stream_every,
          startsRoute: false,
        ),
        "any": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback16,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback16Invoke,
                  matches: _callback16Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _Stream_any,
          startsRoute: false,
        ),
        "cast": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_cast,
          startsRoute: false,
        ),
        "toList": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef(
              "list",
              item: FlaxTypeRef("any", nullable: true),
              collection: FlaxCollectionBinding(
                "list:[any?:]",
                _collection1Create,
                _collection1Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("any", nullable: true),
                collection: FlaxCollectionBinding(
                  "iterable:[any?:]",
                  _collection0Create,
                  _collection0Matches,
                ),
              ),
            ),
            future: FlaxFutureBinding("list:[any?:]", _future5Adapt),
          ),
          _Stream_toList,
          startsRoute: false,
        ),
        "toSet": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef(
              "set",
              item: FlaxTypeRef("any", nullable: true),
              collection: FlaxCollectionBinding(
                "set:[any?:]",
                _collection2Create,
                _collection2Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("any", nullable: true),
                collection: FlaxCollectionBinding(
                  "iterable:[any?:]",
                  _collection0Create,
                  _collection0Matches,
                ),
              ),
            ),
            future: FlaxFutureBinding("set:[any?:]", _future6Adapt),
          ),
          _Stream_toSet,
          startsRoute: false,
        ),
        "drain": FlaxInstanceMethod(
          [
            FlaxParameter(
              "futureValue",
              FlaxTypeRef("any", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_drain,
          startsRoute: false,
        ),
        "take": FlaxInstanceMethod(
          [
            FlaxParameter(
              "count",
              FlaxTypeRef("int"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_take,
          startsRoute: false,
        ),
        "takeWhile": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback17,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback17Invoke,
                  matches: _callback17Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_takeWhile,
          startsRoute: false,
        ),
        "skip": FlaxInstanceMethod(
          [
            FlaxParameter(
              "count",
              FlaxTypeRef("int"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_skip,
          startsRoute: false,
        ),
        "skipWhile": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback18,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback18Invoke,
                  matches: _callback18Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_skipWhile,
          startsRoute: false,
        ),
        "distinct": FlaxInstanceMethod(
          [
            FlaxParameter(
              "equals",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "previous",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "next",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback19,
                  id: "callback:<>(p:r:previous:any?:,p:r:next:any?:)->bool:",
                  invoke: _callback19Invoke,
                  matches: _callback19Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_distinct,
          startsRoute: false,
        ),
        "firstWhere": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback20,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback20Invoke,
                  matches: _callback20Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "orElse",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("any", nullable: true),
                  _callback21,
                  id: "callback:<>()->any?:",
                  invoke: _callback21Invoke,
                  matches: _callback21Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_firstWhere,
          startsRoute: false,
        ),
        "lastWhere": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback22,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback22Invoke,
                  matches: _callback22Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "orElse",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("any", nullable: true),
                  _callback23,
                  id: "callback:<>()->any?:",
                  invoke: _callback23Invoke,
                  matches: _callback23Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_lastWhere,
          startsRoute: false,
        ),
        "singleWhere": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback24,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback24Invoke,
                  matches: _callback24Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "orElse",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("any", nullable: true),
                  _callback25,
                  id: "callback:<>()->any?:",
                  invoke: _callback25Invoke,
                  matches: _callback25Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_singleWhere,
          startsRoute: false,
        ),
        "elementAt": FlaxInstanceMethod(
          [
            FlaxParameter(
              "index",
              FlaxTypeRef("int"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _Stream_elementAt,
          startsRoute: false,
        ),
        "timeout": FlaxInstanceMethod(
          [
            FlaxParameter(
              "timeLimit",
              FlaxTypeRef("object", id: "flax.core/flutter#type:Duration"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "onTimeout",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "sink",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:EventSink",
                      ),
                      required: true,
                      positional: true,
                      scoped: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback26,
                  id: "callback:<>(p:r:sink:object:flax.core/flutter#type:EventSink<Object?><any?:>:scoped)->void:",
                  invoke: _callback26Invoke,
                  matches: _callback26Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_timeout,
          startsRoute: false,
        ),
      },
      constructors: {
        "empty": [
          FlaxParameter(
            "broadcast",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
        "value": [
          FlaxParameter(
            "value",
            FlaxTypeRef("any", nullable: true),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "error": [
          FlaxParameter(
            "error",
            FlaxTypeRef("any"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "stackTrace",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:StackTrace",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "fromFuture": [
          FlaxParameter(
            "future",
            FlaxTypeRef(
              "future",
              item: FlaxTypeRef("any", nullable: true),
              future: FlaxFutureBinding("any?:", _future2Adapt),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "fromFutures": [
          FlaxParameter(
            "futures",
            FlaxTypeRef(
              "iterable",
              item: FlaxTypeRef(
                "future",
                item: FlaxTypeRef("any", nullable: true),
                future: FlaxFutureBinding("any?:", _future2Adapt),
              ),
              collection: FlaxCollectionBinding(
                "iterable:[future:[any?:]]",
                _collection3Create,
                _collection3Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "fromIterable": [
          FlaxParameter(
            "elements",
            FlaxTypeRef(
              "iterable",
              item: FlaxTypeRef("any", nullable: true),
              collection: FlaxCollectionBinding(
                "iterable:[any?:]",
                _collection0Create,
                _collection0Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "multi": [
          FlaxParameter(
            "onListen",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "p0",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:MultiStreamController",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback27,
                id: "callback:<>(p:r:p0:object:flax.core/flutter#type:MultiStreamController<Object?><any?:>)->void:",
                invoke: _callback27Invoke,
                matches: _callback27Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isBroadcast",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
        "periodic": [
          FlaxParameter(
            "period",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Duration"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "computation",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "computationCount",
                    FlaxTypeRef("int"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("any", nullable: true),
                _callback28,
                id: "callback:<>(p:r:computationCount:int:)->any?:",
                invoke: _callback28Invoke,
                matches: _callback28Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "eventTransformed": [
          FlaxParameter(
            "source",
            FlaxTypeRef(
              "stream",
              id: "flax.core/flutter#type:Stream",
              item: FlaxTypeRef("any", nullable: true),
              stream: FlaxStreamBinding(
                "stream:flax.core/flutter#type:Stream[any?:]",
                _stream0Matches,
                _stream0Adapt,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mapSink",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "sink",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:EventSink",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("object", id: "flax.core/flutter#type:EventSink"),
                _callback29,
                id: "callback:<>(p:r:sink:object:flax.core/flutter#type:EventSink<Object?><any?:>)->object:flax.core/flutter#type:EventSink<Object?><any?:>",
                invoke: _callback29Invoke,
                matches: _callback29Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createStream,
      matches: _isStream,
      methods: {
        "castFrom": FlaxStaticMethod(
          [
            FlaxParameter(
              "source",
              FlaxTypeRef(
                "stream",
                id: "flax.core/flutter#type:Stream",
                item: FlaxTypeRef("any", nullable: true),
                stream: FlaxStreamBinding(
                  "stream:flax.core/flutter#type:Stream[any?:]",
                  _stream0Matches,
                  _stream0Adapt,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _Stream_castFrom,
        ),
      },
      view: FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: FlaxTypeRef("any", nullable: true),
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream0Matches,
          _stream0Adapt,
        ),
      ),
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:StreamSubscription",
      [
        FlaxGetter(
          "isPaused",
          FlaxTypeRef("bool"),
          _StreamSubscription_isPaused,
        ),
      ],
      {
        "cancel": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("void"),
            future: FlaxFutureBinding("void:", _future4Adapt),
          ),
          _StreamSubscription_cancel,
          startsRoute: false,
        ),
        "onData": FlaxInstanceMethod(
          [
            FlaxParameter(
              "handleData",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "data",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback30,
                  id: "callback:<>(p:r:data:any?:)->void:",
                  invoke: _callback30Invoke,
                  matches: _callback30Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _StreamSubscription_onData,
          startsRoute: false,
        ),
        "onError": FlaxInstanceMethod(
          [
            FlaxParameter(
              "handleError",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "p0",
                      FlaxTypeRef("any"),
                      required: true,
                      positional: true,
                      encode: const FlaxTypeRef('error'),
                    ),
                    FlaxCallbackParameter(
                      "p1",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:StackTrace",
                      ),
                      required: false,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback31,
                  id: "callback:<>(p:r:p0:any::e=error,p:o:p1:object:flax.core/flutter#type:StackTrace)->void:",
                  invoke: _callback31Invoke,
                  matches: _callback31Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _StreamSubscription_onError,
          startsRoute: false,
        ),
        "onDone": FlaxInstanceMethod(
          [
            FlaxParameter(
              "handleDone",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback32,
                  id: "callback:<>()->void:",
                  invoke: _callback32Invoke,
                  matches: _callback32Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _StreamSubscription_onDone,
          startsRoute: false,
        ),
        "pause": FlaxInstanceMethod(
          [
            FlaxParameter(
              "resumeSignal",
              FlaxTypeRef(
                "future",
                nullable: true,
                item: FlaxTypeRef("void"),
                future: FlaxFutureBinding("void:", _future4Adapt),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _StreamSubscription_pause,
          startsRoute: false,
        ),
        "resume": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _StreamSubscription_resume,
          startsRoute: false,
        ),
        "asFuture": FlaxInstanceMethod(
          [
            FlaxParameter(
              "futureValue",
              FlaxTypeRef("any", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamSubscription_asFuture,
          startsRoute: false,
        ),
      },
      constructors: {},
      create: _createStreamSubscription,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isStreamSubscription,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:StreamController",
      [
        FlaxGetter(
          "done",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamController_done,
        ),
        FlaxGetter(
          "onListen",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback33,
              id: "callback:<>()->void:",
              invoke: _callback33Invoke,
              matches: _callback33Matches,
            ),
          ),
          _StreamController_onListen,
        ),
        FlaxGetter(
          "onPause",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback34,
              id: "callback:<>()->void:",
              invoke: _callback34Invoke,
              matches: _callback34Matches,
            ),
          ),
          _StreamController_onPause,
        ),
        FlaxGetter(
          "onResume",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback35,
              id: "callback:<>()->void:",
              invoke: _callback35Invoke,
              matches: _callback35Matches,
            ),
          ),
          _StreamController_onResume,
        ),
        FlaxGetter(
          "onCancel",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef(
                "futureOr",
                item: FlaxTypeRef("void"),
                future: FlaxFutureBinding("void:", _future4Adapt),
              ),
              _callback36,
              id: "callback:<>()->futureOr:[void:]",
              invoke: _callback36Invoke,
              matches: _callback36Matches,
            ),
          ),
          _StreamController_onCancel,
        ),
        FlaxGetter(
          "stream",
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamController_stream,
        ),
        FlaxGetter(
          "sink",
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamSink"),
          _StreamController_sink,
        ),
        FlaxGetter("isClosed", FlaxTypeRef("bool"), _StreamController_isClosed),
        FlaxGetter("isPaused", FlaxTypeRef("bool"), _StreamController_isPaused),
        FlaxGetter(
          "hasListener",
          FlaxTypeRef("bool"),
          _StreamController_hasListener,
        ),
      ],
      {
        "add": FlaxInstanceMethod(
          [
            FlaxParameter(
              "event",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _StreamController_add,
          startsRoute: false,
        ),
        "addError": FlaxInstanceMethod(
          [
            FlaxParameter(
              "error",
              FlaxTypeRef("any"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "stackTrace",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StackTrace",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _StreamController_addError,
          startsRoute: false,
        ),
        "close": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamController_close,
          startsRoute: false,
        ),
        "addStream": FlaxInstanceMethod(
          [
            FlaxParameter(
              "source",
              FlaxTypeRef(
                "stream",
                id: "flax.core/flutter#type:Stream",
                item: FlaxTypeRef("any", nullable: true),
                stream: FlaxStreamBinding(
                  "stream:flax.core/flutter#type:Stream[any?:]",
                  _stream0Matches,
                  _stream0Adapt,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "cancelOnError",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamController_addStream,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "onListen",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback37,
                id: "callback:<>()->void:",
                invoke: _callback37Invoke,
                matches: _callback37Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPause",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback38,
                id: "callback:<>()->void:",
                invoke: _callback38Invoke,
                matches: _callback38Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onResume",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback39,
                id: "callback:<>()->void:",
                invoke: _callback39Invoke,
                matches: _callback39Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onCancel",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef(
                  "futureOr",
                  item: FlaxTypeRef("void"),
                  future: FlaxFutureBinding("void:", _future4Adapt),
                ),
                _callback40,
                id: "callback:<>()->futureOr:[void:]",
                invoke: _callback40Invoke,
                matches: _callback40Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "sync",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
        "broadcast": [
          FlaxParameter(
            "onListen",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback41,
                id: "callback:<>()->void:",
                invoke: _callback41Invoke,
                matches: _callback41Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onCancel",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback42,
                id: "callback:<>()->void:",
                invoke: _callback42Invoke,
                matches: _callback42Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "sync",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createStreamController,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "flax.core/flutter#type:StreamSink",
        "flax.core/flutter#type:EventSink",
        "flax.core/flutter#type:Sink",
        "flax.core/flutter#type:StreamConsumer",
      ],
      setters: [
        FlaxSetter(
          "onListen",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback43,
              id: "callback:<>()->void:",
              invoke: _callback43Invoke,
              matches: _callback43Matches,
            ),
          ),
          _StreamController_set_onListen,
        ),
        FlaxSetter(
          "onPause",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback44,
              id: "callback:<>()->void:",
              invoke: _callback44Invoke,
              matches: _callback44Matches,
            ),
          ),
          _StreamController_set_onPause,
        ),
        FlaxSetter(
          "onResume",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback45,
              id: "callback:<>()->void:",
              invoke: _callback45Invoke,
              matches: _callback45Matches,
            ),
          ),
          _StreamController_set_onResume,
        ),
        FlaxSetter(
          "onCancel",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef(
                "futureOr",
                item: FlaxTypeRef("void"),
                future: FlaxFutureBinding("void:", _future4Adapt),
              ),
              _callback46,
              id: "callback:<>()->futureOr:[void:]",
              invoke: _callback46Invoke,
              matches: _callback46Matches,
            ),
          ),
          _StreamController_set_onCancel,
        ),
      ],
      matches: _isStreamController,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:SynchronousStreamController",
      [
        FlaxGetter(
          "onListen",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback47,
              id: "callback:<>()->void:",
              invoke: _callback47Invoke,
              matches: _callback47Matches,
            ),
          ),
          _SynchronousStreamController_onListen,
        ),
        FlaxGetter(
          "onPause",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback48,
              id: "callback:<>()->void:",
              invoke: _callback48Invoke,
              matches: _callback48Matches,
            ),
          ),
          _SynchronousStreamController_onPause,
        ),
        FlaxGetter(
          "onResume",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback49,
              id: "callback:<>()->void:",
              invoke: _callback49Invoke,
              matches: _callback49Matches,
            ),
          ),
          _SynchronousStreamController_onResume,
        ),
        FlaxGetter(
          "onCancel",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef(
                "futureOr",
                item: FlaxTypeRef("void"),
                future: FlaxFutureBinding("void:", _future4Adapt),
              ),
              _callback50,
              id: "callback:<>()->futureOr:[void:]",
              invoke: _callback50Invoke,
              matches: _callback50Matches,
            ),
          ),
          _SynchronousStreamController_onCancel,
        ),
        FlaxGetter(
          "stream",
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _SynchronousStreamController_stream,
        ),
        FlaxGetter(
          "sink",
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamSink"),
          _SynchronousStreamController_sink,
        ),
        FlaxGetter(
          "isClosed",
          FlaxTypeRef("bool"),
          _SynchronousStreamController_isClosed,
        ),
        FlaxGetter(
          "isPaused",
          FlaxTypeRef("bool"),
          _SynchronousStreamController_isPaused,
        ),
        FlaxGetter(
          "hasListener",
          FlaxTypeRef("bool"),
          _SynchronousStreamController_hasListener,
        ),
        FlaxGetter(
          "done",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _SynchronousStreamController_done,
        ),
      ],
      {
        "add": FlaxInstanceMethod(
          [
            FlaxParameter(
              "data",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _SynchronousStreamController_add,
          startsRoute: false,
        ),
        "addError": FlaxInstanceMethod(
          [
            FlaxParameter(
              "error",
              FlaxTypeRef("any"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "stackTrace",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StackTrace",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _SynchronousStreamController_addError,
          startsRoute: false,
        ),
        "close": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _SynchronousStreamController_close,
          startsRoute: false,
        ),
        "addStream": FlaxInstanceMethod(
          [
            FlaxParameter(
              "source",
              FlaxTypeRef(
                "stream",
                id: "flax.core/flutter#type:Stream",
                item: FlaxTypeRef("any", nullable: true),
                stream: FlaxStreamBinding(
                  "stream:flax.core/flutter#type:Stream[any?:]",
                  _stream0Matches,
                  _stream0Adapt,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "cancelOnError",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _SynchronousStreamController_addStream,
          startsRoute: false,
        ),
      },
      constructors: {},
      create: _createSynchronousStreamController,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "flax.core/flutter#type:StreamController",
        "flax.core/flutter#type:StreamSink",
        "flax.core/flutter#type:EventSink",
        "flax.core/flutter#type:Sink",
        "flax.core/flutter#type:StreamConsumer",
      ],
      setters: [
        FlaxSetter(
          "onListen",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback51,
              id: "callback:<>()->void:",
              invoke: _callback51Invoke,
              matches: _callback51Matches,
            ),
          ),
          _SynchronousStreamController_set_onListen,
        ),
        FlaxSetter(
          "onPause",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback52,
              id: "callback:<>()->void:",
              invoke: _callback52Invoke,
              matches: _callback52Matches,
            ),
          ),
          _SynchronousStreamController_set_onPause,
        ),
        FlaxSetter(
          "onResume",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback53,
              id: "callback:<>()->void:",
              invoke: _callback53Invoke,
              matches: _callback53Matches,
            ),
          ),
          _SynchronousStreamController_set_onResume,
        ),
        FlaxSetter(
          "onCancel",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef(
                "futureOr",
                item: FlaxTypeRef("void"),
                future: FlaxFutureBinding("void:", _future4Adapt),
              ),
              _callback54,
              id: "callback:<>()->futureOr:[void:]",
              invoke: _callback54Invoke,
              matches: _callback54Matches,
            ),
          ),
          _SynchronousStreamController_set_onCancel,
        ),
      ],
      matches: _isSynchronousStreamController,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:MultiStreamController",
      [
        FlaxGetter(
          "onListen",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback55,
              id: "callback:<>()->void:",
              invoke: _callback55Invoke,
              matches: _callback55Matches,
            ),
          ),
          _MultiStreamController_onListen,
        ),
        FlaxGetter(
          "onPause",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback56,
              id: "callback:<>()->void:",
              invoke: _callback56Invoke,
              matches: _callback56Matches,
            ),
          ),
          _MultiStreamController_onPause,
        ),
        FlaxGetter(
          "onResume",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback57,
              id: "callback:<>()->void:",
              invoke: _callback57Invoke,
              matches: _callback57Matches,
            ),
          ),
          _MultiStreamController_onResume,
        ),
        FlaxGetter(
          "onCancel",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef(
                "futureOr",
                item: FlaxTypeRef("void"),
                future: FlaxFutureBinding("void:", _future4Adapt),
              ),
              _callback58,
              id: "callback:<>()->futureOr:[void:]",
              invoke: _callback58Invoke,
              matches: _callback58Matches,
            ),
          ),
          _MultiStreamController_onCancel,
        ),
        FlaxGetter(
          "stream",
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _MultiStreamController_stream,
        ),
        FlaxGetter(
          "sink",
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamSink"),
          _MultiStreamController_sink,
        ),
        FlaxGetter(
          "isClosed",
          FlaxTypeRef("bool"),
          _MultiStreamController_isClosed,
        ),
        FlaxGetter(
          "isPaused",
          FlaxTypeRef("bool"),
          _MultiStreamController_isPaused,
        ),
        FlaxGetter(
          "hasListener",
          FlaxTypeRef("bool"),
          _MultiStreamController_hasListener,
        ),
        FlaxGetter(
          "done",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _MultiStreamController_done,
        ),
      ],
      {
        "add": FlaxInstanceMethod(
          [
            FlaxParameter(
              "event",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _MultiStreamController_add,
          startsRoute: false,
        ),
        "addError": FlaxInstanceMethod(
          [
            FlaxParameter(
              "error",
              FlaxTypeRef("any"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "stackTrace",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StackTrace",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _MultiStreamController_addError,
          startsRoute: false,
        ),
        "close": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _MultiStreamController_close,
          startsRoute: false,
        ),
        "addStream": FlaxInstanceMethod(
          [
            FlaxParameter(
              "source",
              FlaxTypeRef(
                "stream",
                id: "flax.core/flutter#type:Stream",
                item: FlaxTypeRef("any", nullable: true),
                stream: FlaxStreamBinding(
                  "stream:flax.core/flutter#type:Stream[any?:]",
                  _stream0Matches,
                  _stream0Adapt,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "cancelOnError",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _MultiStreamController_addStream,
          startsRoute: false,
        ),
        "addSync": FlaxInstanceMethod(
          [
            FlaxParameter(
              "value",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _MultiStreamController_addSync,
          startsRoute: false,
        ),
        "addErrorSync": FlaxInstanceMethod(
          [
            FlaxParameter(
              "error",
              FlaxTypeRef("any"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "stackTrace",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StackTrace",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _MultiStreamController_addErrorSync,
          startsRoute: false,
        ),
        "closeSync": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _MultiStreamController_closeSync,
          startsRoute: false,
        ),
      },
      constructors: {},
      create: _createMultiStreamController,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "flax.core/flutter#type:StreamController",
        "flax.core/flutter#type:StreamSink",
        "flax.core/flutter#type:EventSink",
        "flax.core/flutter#type:Sink",
        "flax.core/flutter#type:StreamConsumer",
      ],
      setters: [
        FlaxSetter(
          "onListen",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback59,
              id: "callback:<>()->void:",
              invoke: _callback59Invoke,
              matches: _callback59Matches,
            ),
          ),
          _MultiStreamController_set_onListen,
        ),
        FlaxSetter(
          "onPause",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback60,
              id: "callback:<>()->void:",
              invoke: _callback60Invoke,
              matches: _callback60Matches,
            ),
          ),
          _MultiStreamController_set_onPause,
        ),
        FlaxSetter(
          "onResume",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef("void"),
              _callback61,
              id: "callback:<>()->void:",
              invoke: _callback61Invoke,
              matches: _callback61Matches,
            ),
          ),
          _MultiStreamController_set_onResume,
        ),
        FlaxSetter(
          "onCancel",
          FlaxTypeRef(
            "callback",
            nullable: true,
            callback: FlaxCallbackBinding(
              [],
              FlaxTypeRef(
                "futureOr",
                item: FlaxTypeRef("void"),
                future: FlaxFutureBinding("void:", _future4Adapt),
              ),
              _callback62,
              id: "callback:<>()->futureOr:[void:]",
              invoke: _callback62Invoke,
              matches: _callback62Matches,
            ),
          ),
          _MultiStreamController_set_onCancel,
        ),
      ],
      matches: _isMultiStreamController,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Duration",
      [
        FlaxGetter("inDays", FlaxTypeRef("int"), _Duration_inDays),
        FlaxGetter("inHours", FlaxTypeRef("int"), _Duration_inHours),
        FlaxGetter("inMinutes", FlaxTypeRef("int"), _Duration_inMinutes),
        FlaxGetter("inSeconds", FlaxTypeRef("int"), _Duration_inSeconds),
        FlaxGetter(
          "inMilliseconds",
          FlaxTypeRef("int"),
          _Duration_inMilliseconds,
        ),
        FlaxGetter(
          "inMicroseconds",
          FlaxTypeRef("int"),
          _Duration_inMicroseconds,
        ),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "days",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "hours",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minutes",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "seconds",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "milliseconds",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "microseconds",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 0,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createDuration,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object", "dart:core::Comparable"],
      setters: [],
      matches: _isDuration,
      methods: {},
      staticGetters: {
        "zero": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Duration"),
          _Duration_static_zero,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:StackTrace",
      [],
      {
        "toString": FlaxInstanceMethod(
          [],
          FlaxTypeRef("String"),
          _StackTrace_toString,
          startsRoute: false,
        ),
      },
      constructors: {},
      create: _createStackTrace,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isStackTrace,
      methods: {},
      staticGetters: {
        "current": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:StackTrace"),
          _StackTrace_static_current,
        ),
        "empty": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:StackTrace"),
          _StackTrace_static_empty,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Sink",
      [],
      {},
      constructors: {},
      create: _createSink,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isSink,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:EventSink",
      [],
      {
        "add": FlaxInstanceMethod(
          [
            FlaxParameter(
              "event",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _EventSink_add,
          startsRoute: false,
        ),
        "addError": FlaxInstanceMethod(
          [
            FlaxParameter(
              "error",
              FlaxTypeRef("any"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "stackTrace",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StackTrace",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _EventSink_addError,
          startsRoute: false,
        ),
        "close": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _EventSink_close,
          startsRoute: false,
        ),
      },
      constructors: {
        "@implementation": [
          FlaxParameter(
            "@call:add",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef("any", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback63,
                id: "callback:<>(p:r:event:any?:)->void:",
                invoke: _callback63Invoke,
                matches: _callback63Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "@call:addError",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "error",
                    FlaxTypeRef("any"),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "stackTrace",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:StackTrace",
                      nullable: true,
                    ),
                    required: false,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback64,
                id: "callback:<>(p:r:error:any:,p:o:stackTrace:object?:flax.core/flutter#type:StackTrace)->void:",
                invoke: _callback64Invoke,
                matches: _callback64Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "@call:close",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback65,
                id: "callback:<>()->void:",
                invoke: _callback65Invoke,
                matches: _callback65Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createEventSink,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object", "flax.core/flutter#type:Sink"],
      setters: [],
      matches: _isEventSink,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:StreamConsumer",
      [],
      {
        "addStream": FlaxInstanceMethod(
          [
            FlaxParameter(
              "stream",
              FlaxTypeRef(
                "stream",
                id: "flax.core/flutter#type:Stream",
                item: FlaxTypeRef("any", nullable: true),
                stream: FlaxStreamBinding(
                  "stream:flax.core/flutter#type:Stream[any?:]",
                  _stream0Matches,
                  _stream0Adapt,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamConsumer_addStream,
          startsRoute: false,
        ),
        "close": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamConsumer_close,
          startsRoute: false,
        ),
      },
      constructors: {
        "@implementation": [
          FlaxParameter(
            "@call:addStream",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "stream",
                    FlaxTypeRef(
                      "stream",
                      id: "flax.core/flutter#type:Stream",
                      item: FlaxTypeRef("any", nullable: true),
                      stream: FlaxStreamBinding(
                        "stream:flax.core/flutter#type:Stream[any?:]",
                        _stream0Matches,
                        _stream0Adapt,
                      ),
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "future",
                  item: FlaxTypeRef("any", nullable: true),
                  future: FlaxFutureBinding("any?:", _future2Adapt),
                ),
                _callback66,
                id: "callback:<>(p:r:stream:stream:flax.core/flutter#type:Stream[any?:])->future:[any?:]",
                invoke: _callback66Invoke,
                matches: _callback66Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "@call:close",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef(
                  "future",
                  item: FlaxTypeRef("any", nullable: true),
                  future: FlaxFutureBinding("any?:", _future2Adapt),
                ),
                _callback67,
                id: "callback:<>()->future:[any?:]",
                invoke: _callback67Invoke,
                matches: _callback67Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createStreamConsumer,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isStreamConsumer,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:StreamSink",
      [
        FlaxGetter(
          "done",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamSink_done,
        ),
      ],
      {
        "add": FlaxInstanceMethod(
          [
            FlaxParameter(
              "event",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _StreamSink_add,
          startsRoute: false,
        ),
        "addError": FlaxInstanceMethod(
          [
            FlaxParameter(
              "error",
              FlaxTypeRef("any"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "stackTrace",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StackTrace",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _StreamSink_addError,
          startsRoute: false,
        ),
        "close": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamSink_close,
          startsRoute: false,
        ),
        "addStream": FlaxInstanceMethod(
          [
            FlaxParameter(
              "stream",
              FlaxTypeRef(
                "stream",
                id: "flax.core/flutter#type:Stream",
                item: FlaxTypeRef("any", nullable: true),
                stream: FlaxStreamBinding(
                  "stream:flax.core/flutter#type:Stream[any?:]",
                  _stream0Matches,
                  _stream0Adapt,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamSink_addStream,
          startsRoute: false,
        ),
      },
      constructors: {},
      create: _createStreamSink,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "flax.core/flutter#type:EventSink",
        "flax.core/flutter#type:Sink",
        "flax.core/flutter#type:StreamConsumer",
      ],
      setters: [],
      matches: _isStreamSink,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:StreamTransformer",
      [],
      {
        "bind": FlaxInstanceMethod(
          [
            FlaxParameter(
              "stream",
              FlaxTypeRef(
                "stream",
                id: "flax.core/flutter#type:Stream",
                item: FlaxTypeRef("any", nullable: true),
                stream: FlaxStreamBinding(
                  "stream:flax.core/flutter#type:Stream[any?:]",
                  _stream0Matches,
                  _stream0Adapt,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamTransformer_bind,
          startsRoute: false,
        ),
        "cast": FlaxInstanceMethod(
          [],
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamTransformer"),
          _StreamTransformer_cast,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "onListen",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "stream",
                    FlaxTypeRef(
                      "stream",
                      id: "flax.core/flutter#type:Stream",
                      item: FlaxTypeRef("any", nullable: true),
                      stream: FlaxStreamBinding(
                        "stream:flax.core/flutter#type:Stream[any?:]",
                        _stream0Matches,
                        _stream0Adapt,
                      ),
                    ),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "cancelOnError",
                    FlaxTypeRef("bool"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:StreamSubscription",
                ),
                _callback68,
                id: "callback:<>(p:r:stream:stream:flax.core/flutter#type:Stream[any?:],p:r:cancelOnError:bool:)->object:flax.core/flutter#type:StreamSubscription<Object?><any?:>",
                invoke: _callback68Invoke,
                matches: _callback68Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "fromHandlers": [
          FlaxParameter(
            "handleData",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "data",
                    FlaxTypeRef("any", nullable: true),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "sink",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:EventSink",
                    ),
                    required: true,
                    positional: true,
                    scoped: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback69,
                id: "callback:<>(p:r:data:any?:,p:r:sink:object:flax.core/flutter#type:EventSink<Object?><any?:>:scoped)->void:",
                invoke: _callback69Invoke,
                matches: _callback69Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "handleError",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "error",
                    FlaxTypeRef("any"),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "stackTrace",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:StackTrace",
                    ),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "sink",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:EventSink",
                    ),
                    required: true,
                    positional: true,
                    scoped: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback70,
                id: "callback:<>(p:r:error:any:,p:r:stackTrace:object:flax.core/flutter#type:StackTrace,p:r:sink:object:flax.core/flutter#type:EventSink<Object?><any?:>:scoped)->void:",
                invoke: _callback70Invoke,
                matches: _callback70Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "handleDone",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "sink",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:EventSink",
                    ),
                    required: true,
                    positional: true,
                    scoped: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback71,
                id: "callback:<>(p:r:sink:object:flax.core/flutter#type:EventSink<Object?><any?:>:scoped)->void:",
                invoke: _callback71Invoke,
                matches: _callback71Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "fromBind": [
          FlaxParameter(
            "bind",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "p0",
                    FlaxTypeRef(
                      "stream",
                      id: "flax.core/flutter#type:Stream",
                      item: FlaxTypeRef("any", nullable: true),
                      stream: FlaxStreamBinding(
                        "stream:flax.core/flutter#type:Stream[any?:]",
                        _stream0Matches,
                        _stream0Adapt,
                      ),
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "stream",
                  id: "flax.core/flutter#type:Stream",
                  item: FlaxTypeRef("any", nullable: true),
                  stream: FlaxStreamBinding(
                    "stream:flax.core/flutter#type:Stream[any?:]",
                    _stream0Matches,
                    _stream0Adapt,
                  ),
                ),
                _callback72,
                id: "callback:<>(p:r:p0:stream:flax.core/flutter#type:Stream[any?:])->stream:flax.core/flutter#type:Stream[any?:]",
                invoke: _callback72Invoke,
                matches: _callback72Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "@implementation": [
          FlaxParameter(
            "@call:bind",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "stream",
                    FlaxTypeRef(
                      "stream",
                      id: "flax.core/flutter#type:Stream",
                      item: FlaxTypeRef("any", nullable: true),
                      stream: FlaxStreamBinding(
                        "stream:flax.core/flutter#type:Stream[any?:]",
                        _stream0Matches,
                        _stream0Adapt,
                      ),
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "stream",
                  id: "flax.core/flutter#type:Stream",
                  item: FlaxTypeRef("any", nullable: true),
                  stream: FlaxStreamBinding(
                    "stream:flax.core/flutter#type:Stream[any?:]",
                    _stream0Matches,
                    _stream0Adapt,
                  ),
                ),
                _callback73,
                id: "callback:<>(p:r:stream:stream:flax.core/flutter#type:Stream[any?:])->stream:flax.core/flutter#type:Stream[any?:]",
                invoke: _callback73Invoke,
                matches: _callback73Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "@call:cast",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:StreamTransformer",
                ),
                _callback74,
                id: "callback:<RS:any?:=any?:,RT:any?:=any?:>()->object:flax.core/flutter#type:StreamTransformer<Object?,Object?><any?:,any?:>",
                invoke: _callback74Invoke,
                matches: _callback74Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createStreamTransformer,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isStreamTransformer,
      methods: {
        "castFrom": FlaxStaticMethod(
          [
            FlaxParameter(
              "source",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StreamTransformer",
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamTransformer"),
          _StreamTransformer_castFrom,
        ),
      },
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:StreamTransformerBase",
      [],
      {
        "bind": FlaxInstanceMethod(
          [
            FlaxParameter(
              "stream",
              FlaxTypeRef(
                "stream",
                id: "flax.core/flutter#type:Stream",
                item: FlaxTypeRef("any", nullable: true),
                stream: FlaxStreamBinding(
                  "stream:flax.core/flutter#type:Stream[any?:]",
                  _stream0Matches,
                  _stream0Adapt,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamTransformerBase_bind,
          startsRoute: false,
        ),
        "cast": FlaxInstanceMethod(
          [],
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamTransformer"),
          _StreamTransformerBase_cast,
          startsRoute: false,
        ),
      },
      constructors: {
        "@implementation": [
          FlaxParameter(
            "@call:bind",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "stream",
                    FlaxTypeRef(
                      "stream",
                      id: "flax.core/flutter#type:Stream",
                      item: FlaxTypeRef("any", nullable: true),
                      stream: FlaxStreamBinding(
                        "stream:flax.core/flutter#type:Stream[any?:]",
                        _stream0Matches,
                        _stream0Adapt,
                      ),
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "stream",
                  id: "flax.core/flutter#type:Stream",
                  item: FlaxTypeRef("any", nullable: true),
                  stream: FlaxStreamBinding(
                    "stream:flax.core/flutter#type:Stream[any?:]",
                    _stream0Matches,
                    _stream0Adapt,
                  ),
                ),
                _callback75,
                id: "callback:<>(p:r:stream:stream:flax.core/flutter#type:Stream[any?:])->stream:flax.core/flutter#type:Stream[any?:]",
                invoke: _callback75Invoke,
                matches: _callback75Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createStreamTransformerBase,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "flax.core/flutter#type:StreamTransformer",
      ],
      setters: [],
      matches: _isStreamTransformerBase,
      methods: {},
      staticGetters: {},
    ),
    FlaxStreamTypeBinding(
      "flax.core/flutter#type:StreamView",
      [
        FlaxGetter("isBroadcast", FlaxTypeRef("bool"), _StreamView_isBroadcast),
        FlaxGetter(
          "length",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("int"),
            future: FlaxFutureBinding("int:", _future0Adapt),
          ),
          _StreamView_length,
        ),
        FlaxGetter(
          "isEmpty",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _StreamView_isEmpty,
        ),
        FlaxGetter(
          "first",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_first,
        ),
        FlaxGetter(
          "last",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_last,
        ),
        FlaxGetter(
          "single",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_single,
        ),
      ],
      {
        "asBroadcastStream": FlaxInstanceMethod(
          [
            FlaxParameter(
              "onCancel",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "subscription",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:StreamSubscription",
                      ),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback76,
                  id: "callback:<>(p:r:subscription:object:flax.core/flutter#type:StreamSubscription<Object?><any?:>)->void:",
                  invoke: _callback76Invoke,
                  matches: _callback76Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "onListen",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "subscription",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:StreamSubscription",
                      ),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback77,
                  id: "callback:<>(p:r:subscription:object:flax.core/flutter#type:StreamSubscription<Object?><any?:>)->void:",
                  invoke: _callback77Invoke,
                  matches: _callback77Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_asBroadcastStream,
          startsRoute: false,
        ),
        "listen": FlaxInstanceMethod(
          [
            FlaxParameter(
              "onData",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "value",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback78,
                  id: "callback:<>(p:r:value:any?:)->void:",
                  invoke: _callback78Invoke,
                  matches: _callback78Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "cancelOnError",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "onDone",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback79,
                  id: "callback:<>()->void:",
                  invoke: _callback79Invoke,
                  matches: _callback79Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "onError",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "p0",
                      FlaxTypeRef("any"),
                      required: true,
                      positional: true,
                      encode: const FlaxTypeRef('error'),
                    ),
                    FlaxCallbackParameter(
                      "p1",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:StackTrace",
                      ),
                      required: false,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback80,
                  id: "callback:<>(p:r:p0:any::e=error,p:o:p1:object:flax.core/flutter#type:StackTrace)->void:",
                  invoke: _callback80Invoke,
                  matches: _callback80Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:StreamSubscription",
          ),
          _StreamView_listen,
          startsRoute: false,
        ),
        "where": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback81,
                  id: "callback:<>(p:r:event:any?:)->bool:",
                  invoke: _callback81Invoke,
                  matches: _callback81Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_where,
          startsRoute: false,
        ),
        "map": FlaxInstanceMethod(
          [
            FlaxParameter(
              "convert",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("any", nullable: true),
                  _callback82,
                  id: "callback:<>(p:r:event:any?:)->any?:",
                  invoke: _callback82Invoke,
                  matches: _callback82Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_map,
          startsRoute: false,
        ),
        "asyncMap": FlaxInstanceMethod(
          [
            FlaxParameter(
              "convert",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef(
                    "futureOr",
                    item: FlaxTypeRef("any", nullable: true),
                    future: FlaxFutureBinding("any?:", _future2Adapt),
                  ),
                  _callback83,
                  id: "callback:<>(p:r:event:any?:)->futureOr:[any?:]",
                  invoke: _callback83Invoke,
                  matches: _callback83Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_asyncMap,
          startsRoute: false,
        ),
        "asyncExpand": FlaxInstanceMethod(
          [
            FlaxParameter(
              "convert",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef(
                    "stream",
                    id: "flax.core/flutter#type:Stream",
                    nullable: true,
                    item: FlaxTypeRef("any", nullable: true),
                    stream: FlaxStreamBinding(
                      "stream:flax.core/flutter#type:Stream[any?:]",
                      _stream0Matches,
                      _stream0Adapt,
                    ),
                  ),
                  _callback84,
                  id: "callback:<>(p:r:event:any?:)->stream?:flax.core/flutter#type:Stream[any?:]",
                  invoke: _callback84Invoke,
                  matches: _callback84Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_asyncExpand,
          startsRoute: false,
        ),
        "handleError": FlaxInstanceMethod(
          [
            FlaxParameter(
              "onError",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "p0",
                      FlaxTypeRef("any"),
                      required: true,
                      positional: true,
                      encode: const FlaxTypeRef('error'),
                    ),
                    FlaxCallbackParameter(
                      "p1",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:StackTrace",
                      ),
                      required: false,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback85,
                  id: "callback:<>(p:r:p0:any::e=error,p:o:p1:object:flax.core/flutter#type:StackTrace)->void:",
                  invoke: _callback85Invoke,
                  matches: _callback85Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "error",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback86,
                  id: "callback:<>(p:r:error:any?:)->bool:",
                  invoke: _callback86Invoke,
                  matches: _callback86Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_handleError,
          startsRoute: false,
        ),
        "expand": FlaxInstanceMethod(
          [
            FlaxParameter(
              "convert",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef(
                    "iterable",
                    item: FlaxTypeRef("any", nullable: true),
                    collection: FlaxCollectionBinding(
                      "iterable:[any?:]",
                      _collection0Create,
                      _collection0Matches,
                    ),
                  ),
                  _callback87,
                  id: "callback:<>(p:r:element:any?:)->iterable:[any?:]",
                  invoke: _callback87Invoke,
                  matches: _callback87Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_expand,
          startsRoute: false,
        ),
        "pipe": FlaxInstanceMethod(
          [
            FlaxParameter(
              "streamConsumer",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StreamConsumer",
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_pipe,
          startsRoute: false,
        ),
        "transform": FlaxInstanceMethod(
          [
            FlaxParameter(
              "streamTransformer",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:StreamTransformer",
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_transform,
          startsRoute: false,
        ),
        "reduce": FlaxInstanceMethod(
          [
            FlaxParameter(
              "combine",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "previous",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("any", nullable: true),
                  _callback88,
                  id: "callback:<>(p:r:previous:any?:,p:r:element:any?:)->any?:",
                  invoke: _callback88Invoke,
                  matches: _callback88Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_reduce,
          startsRoute: false,
        ),
        "fold": FlaxInstanceMethod(
          [
            FlaxParameter(
              "initialValue",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "combine",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "previous",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("any", nullable: true),
                  _callback89,
                  id: "callback:<>(p:r:previous:any?:,p:r:element:any?:)->any?:",
                  invoke: _callback89Invoke,
                  matches: _callback89Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_fold,
          startsRoute: false,
        ),
        "join": FlaxInstanceMethod(
          [
            FlaxParameter(
              "separator",
              FlaxTypeRef("String"),
              required: false,
              defaultValue: '',
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("String"),
            future: FlaxFutureBinding("String:", _future3Adapt),
          ),
          _StreamView_join,
          startsRoute: false,
        ),
        "contains": FlaxInstanceMethod(
          [
            FlaxParameter(
              "needle",
              FlaxTypeRef("any", nullable: true),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _StreamView_contains,
          startsRoute: false,
        ),
        "forEach": FlaxInstanceMethod(
          [
            FlaxParameter(
              "action",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback90,
                  id: "callback:<>(p:r:element:any?:)->void:",
                  invoke: _callback90Invoke,
                  matches: _callback90Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("void"),
            future: FlaxFutureBinding("void:", _future4Adapt),
          ),
          _StreamView_forEach,
          startsRoute: false,
        ),
        "every": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback91,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback91Invoke,
                  matches: _callback91Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _StreamView_every,
          startsRoute: false,
        ),
        "any": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback92,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback92Invoke,
                  matches: _callback92Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _StreamView_any,
          startsRoute: false,
        ),
        "cast": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_cast,
          startsRoute: false,
        ),
        "toList": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef(
              "list",
              item: FlaxTypeRef("any", nullable: true),
              collection: FlaxCollectionBinding(
                "list:[any?:]",
                _collection1Create,
                _collection1Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("any", nullable: true),
                collection: FlaxCollectionBinding(
                  "iterable:[any?:]",
                  _collection0Create,
                  _collection0Matches,
                ),
              ),
            ),
            future: FlaxFutureBinding("list:[any?:]", _future5Adapt),
          ),
          _StreamView_toList,
          startsRoute: false,
        ),
        "toSet": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef(
              "set",
              item: FlaxTypeRef("any", nullable: true),
              collection: FlaxCollectionBinding(
                "set:[any?:]",
                _collection2Create,
                _collection2Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("any", nullable: true),
                collection: FlaxCollectionBinding(
                  "iterable:[any?:]",
                  _collection0Create,
                  _collection0Matches,
                ),
              ),
            ),
            future: FlaxFutureBinding("set:[any?:]", _future6Adapt),
          ),
          _StreamView_toSet,
          startsRoute: false,
        ),
        "drain": FlaxInstanceMethod(
          [
            FlaxParameter(
              "futureValue",
              FlaxTypeRef("any", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_drain,
          startsRoute: false,
        ),
        "take": FlaxInstanceMethod(
          [
            FlaxParameter(
              "count",
              FlaxTypeRef("int"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_take,
          startsRoute: false,
        ),
        "takeWhile": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback93,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback93Invoke,
                  matches: _callback93Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_takeWhile,
          startsRoute: false,
        ),
        "skip": FlaxInstanceMethod(
          [
            FlaxParameter(
              "count",
              FlaxTypeRef("int"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_skip,
          startsRoute: false,
        ),
        "skipWhile": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback94,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback94Invoke,
                  matches: _callback94Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_skipWhile,
          startsRoute: false,
        ),
        "distinct": FlaxInstanceMethod(
          [
            FlaxParameter(
              "equals",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "previous",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "next",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback95,
                  id: "callback:<>(p:r:previous:any?:,p:r:next:any?:)->bool:",
                  invoke: _callback95Invoke,
                  matches: _callback95Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_distinct,
          startsRoute: false,
        ),
        "firstWhere": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback96,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback96Invoke,
                  matches: _callback96Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "orElse",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("any", nullable: true),
                  _callback97,
                  id: "callback:<>()->any?:",
                  invoke: _callback97Invoke,
                  matches: _callback97Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_firstWhere,
          startsRoute: false,
        ),
        "lastWhere": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback98,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback98Invoke,
                  matches: _callback98Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "orElse",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("any", nullable: true),
                  _callback99,
                  id: "callback:<>()->any?:",
                  invoke: _callback99Invoke,
                  matches: _callback99Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_lastWhere,
          startsRoute: false,
        ),
        "singleWhere": FlaxInstanceMethod(
          [
            FlaxParameter(
              "test",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "element",
                      FlaxTypeRef("any", nullable: true),
                      required: true,
                      positional: true,
                    ),
                  ],
                  FlaxTypeRef("bool"),
                  _callback100,
                  id: "callback:<>(p:r:element:any?:)->bool:",
                  invoke: _callback100Invoke,
                  matches: _callback100Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "orElse",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("any", nullable: true),
                  _callback101,
                  id: "callback:<>()->any?:",
                  invoke: _callback101Invoke,
                  matches: _callback101Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_singleWhere,
          startsRoute: false,
        ),
        "elementAt": FlaxInstanceMethod(
          [
            FlaxParameter(
              "index",
              FlaxTypeRef("int"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamView_elementAt,
          startsRoute: false,
        ),
        "timeout": FlaxInstanceMethod(
          [
            FlaxParameter(
              "timeLimit",
              FlaxTypeRef("object", id: "flax.core/flutter#type:Duration"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "onTimeout",
              FlaxTypeRef(
                "callback",
                nullable: true,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "sink",
                      FlaxTypeRef(
                        "object",
                        id: "flax.core/flutter#type:EventSink",
                      ),
                      required: true,
                      positional: true,
                      scoped: true,
                    ),
                  ],
                  FlaxTypeRef("void"),
                  _callback102,
                  id: "callback:<>(p:r:sink:object:flax.core/flutter#type:EventSink<Object?><any?:>:scoped)->void:",
                  invoke: _callback102Invoke,
                  matches: _callback102Matches,
                ),
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "stream",
            id: "flax.core/flutter#type:Stream",
            item: FlaxTypeRef("any", nullable: true),
            stream: FlaxStreamBinding(
              "stream:flax.core/flutter#type:Stream[any?:]",
              _stream0Matches,
              _stream0Adapt,
            ),
          ),
          _StreamView_timeout,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "stream",
            FlaxTypeRef(
              "stream",
              id: "flax.core/flutter#type:Stream",
              item: FlaxTypeRef("any", nullable: true),
              stream: FlaxStreamBinding(
                "stream:flax.core/flutter#type:Stream[any?:]",
                _stream0Matches,
                _stream0Adapt,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createStreamView,
      matches: _isStreamView,
      methods: {},
      view: FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:StreamView",
        item: FlaxTypeRef("any", nullable: true),
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:StreamView[any?:]",
          _stream1Matches,
          _stream1Adapt,
        ),
      ),
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:StreamIterator",
      [
        FlaxGetter(
          "current",
          FlaxTypeRef("any", nullable: true),
          _StreamIterator_current,
        ),
      ],
      {
        "moveNext": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _StreamIterator_moveNext,
          startsRoute: false,
        ),
        "cancel": FlaxInstanceMethod(
          [],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("any", nullable: true),
            future: FlaxFutureBinding("any?:", _future2Adapt),
          ),
          _StreamIterator_cancel,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "stream",
            FlaxTypeRef(
              "stream",
              id: "flax.core/flutter#type:Stream",
              item: FlaxTypeRef("any", nullable: true),
              stream: FlaxStreamBinding(
                "stream:flax.core/flutter#type:Stream[any?:]",
                _stream0Matches,
                _stream0Adapt,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createStreamIterator,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isStreamIterator,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:AsyncSnapshot",
      [
        FlaxGetter(
          "connectionState",
          FlaxTypeRef("enum", id: "flax.core/flutter#type:ConnectionState"),
          _AsyncSnapshot_connectionState,
        ),
        FlaxGetter(
          "data",
          FlaxTypeRef("any", nullable: true),
          _AsyncSnapshot_data,
        ),
        FlaxGetter(
          "error",
          FlaxTypeRef("any", nullable: true),
          _AsyncSnapshot_error,
          encode: const FlaxTypeRef('error'),
        ),
        FlaxGetter(
          "stackTrace",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:StackTrace",
            nullable: true,
          ),
          _AsyncSnapshot_stackTrace,
        ),
        FlaxGetter("hasData", FlaxTypeRef("bool"), _AsyncSnapshot_hasData),
        FlaxGetter("hasError", FlaxTypeRef("bool"), _AsyncSnapshot_hasError),
        FlaxGetter(
          "requireData",
          FlaxTypeRef("any", nullable: true),
          _AsyncSnapshot_requireData,
        ),
      ],
      {
        "inState": FlaxInstanceMethod(
          [
            FlaxParameter(
              "state",
              FlaxTypeRef("enum", id: "flax.core/flutter#type:ConnectionState"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/flutter#type:AsyncSnapshot"),
          _AsyncSnapshot_inState,
          startsRoute: false,
        ),
      },
      constructors: {
        "nothing": [],
        "waiting": [],
        "withData": [
          FlaxParameter(
            "state",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:ConnectionState"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "data",
            FlaxTypeRef("any", nullable: true),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "withError": [
          FlaxParameter(
            "state",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:ConnectionState"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "error",
            FlaxTypeRef("any"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "stackTrace",
            FlaxTypeRef("object", id: "flax.core/flutter#type:StackTrace"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      create: _createAsyncSnapshot,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isAsyncSnapshot,
      methods: {},
      staticGetters: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:StreamBuilder",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "initialData",
            FlaxTypeRef("any", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "stream",
            FlaxTypeRef(
              "stream",
              id: "flax.core/flutter#type:Stream",
              nullable: true,
              item: FlaxTypeRef("any", nullable: true),
              stream: FlaxStreamBinding(
                "stream:flax.core/flutter#type:Stream[any?:]",
                _stream0Matches,
                _stream0Adapt,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "builder",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "context",
                    FlaxTypeRef(
                      "context",
                      id: "flax.core/flutter#type:BuildContext",
                    ),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "snapshot",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:AsyncSnapshot",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("widget"),
                _callback103,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:snapshot:object:flax.core/flutter#type:AsyncSnapshot<Object?><any?:>)->widget:",
                invoke: _callback103Invoke,
                matches: _callback103Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _StreamBuilderHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:WidgetStateProperty",
      [],
      {
        "resolve": FlaxInstanceMethod(
          [
            FlaxParameter(
              "states",
              FlaxTypeRef(
                "set",
                item: FlaxTypeRef(
                  "enum",
                  id: "flax.core/flutter#type:WidgetState",
                ),
                collection: FlaxCollectionBinding(
                  "set:[enum:flax.core/flutter#type:WidgetState]",
                  _collection4Create,
                  _collection4Matches,
                ),
                iterable: FlaxTypeRef(
                  "iterable",
                  item: FlaxTypeRef(
                    "enum",
                    id: "flax.core/flutter#type:WidgetState",
                  ),
                  collection: FlaxCollectionBinding(
                    "iterable:[enum:flax.core/flutter#type:WidgetState]",
                    _collection5Create,
                    _collection5Matches,
                  ),
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("any", nullable: true),
          _WidgetStateProperty_resolve,
          startsRoute: false,
        ),
      },
      constructors: {},
      create: _createWidgetStateProperty,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isWidgetStateProperty,
      methods: {},
      staticGetters: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:ValueListenableBuilder",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "valueListenable",
            FlaxTypeRef("object", id: "flax.core/flutter#type:ValueListenable"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "builder",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "context",
                    FlaxTypeRef(
                      "context",
                      id: "flax.core/flutter#type:BuildContext",
                    ),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef("any", nullable: true),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "child",
                    FlaxTypeRef("widget", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("widget"),
                _callback104,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:value:any?:,p:r:child:widget?:)->widget:",
                invoke: _callback104Invoke,
                matches: _callback104Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ValueListenableBuilderHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:ListenableBuilder",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "listenable",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Listenable"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "builder",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "context",
                    FlaxTypeRef(
                      "context",
                      id: "flax.core/flutter#type:BuildContext",
                    ),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "child",
                    FlaxTypeRef("widget", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("widget"),
                _callback105,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:child:widget?:)->widget:",
                invoke: _callback105Invoke,
                matches: _callback105Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ListenableBuilderHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Listenable",
      [],
      {
        "addListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback106,
                  id: "callback:<>()->void:",
                  invoke: _callback106Invoke,
                  matches: _callback106Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _Listenable_addListener,
          startsRoute: false,
        ),
        "removeListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback107,
                  id: "callback:<>()->void:",
                  invoke: _callback107Invoke,
                  matches: _callback107Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _Listenable_removeListener,
          startsRoute: false,
        ),
      },
      constructors: {},
      create: _createListenable,
      disposeMethod: null,
      listenerPairs: {"addListener": "removeListener"},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isListenable,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:ValueListenable",
      [
        FlaxGetter(
          "value",
          FlaxTypeRef("any", nullable: true),
          _ValueListenable_value,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback108,
                  id: "callback:<>()->void:",
                  invoke: _callback108Invoke,
                  matches: _callback108Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _ValueListenable_addListener,
          startsRoute: false,
        ),
        "removeListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback109,
                  id: "callback:<>()->void:",
                  invoke: _callback109Invoke,
                  matches: _callback109Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _ValueListenable_removeListener,
          startsRoute: false,
        ),
      },
      constructors: {
        "@implementation": [
          FlaxParameter(
            "@call:addListener",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "listener",
                    FlaxTypeRef(
                      "callback",
                      callback: FlaxCallbackBinding(
                        [],
                        FlaxTypeRef("void"),
                        _callback110,
                        id: "callback:<>()->void:",
                        invoke: _callback110Invoke,
                        matches: _callback110Matches,
                      ),
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback111,
                id: "callback:<>(p:r:listener:callback:<>()->void:)->void:",
                invoke: _callback111Invoke,
                matches: _callback111Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "@call:removeListener",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "listener",
                    FlaxTypeRef(
                      "callback",
                      callback: FlaxCallbackBinding(
                        [],
                        FlaxTypeRef("void"),
                        _callback112,
                        id: "callback:<>()->void:",
                        invoke: _callback112Invoke,
                        matches: _callback112Matches,
                      ),
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback113,
                id: "callback:<>(p:r:listener:callback:<>()->void:)->void:",
                invoke: _callback113Invoke,
                matches: _callback113Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "@get:value",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("any", nullable: true),
                _callback114,
                id: "callback:<>()->any?:",
                invoke: _callback114Invoke,
                matches: _callback114Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createValueListenable,
      disposeMethod: null,
      listenerPairs: {"addListener": "removeListener"},
      supertypes: ["flax.core/flutter#type:Listenable", "dart:core::Object"],
      setters: [],
      matches: _isValueListenable,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:FittedSizes",
      [
        FlaxGetter(
          "source",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
          _FittedSizes_source,
        ),
        FlaxGetter(
          "destination",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
          _FittedSizes_destination,
        ),
      ],
      {},
      constructors: {},
      create: _createFittedSizes,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isFittedSizes,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:NavigatorObserver",
      [],
      {},
      constructors: {},
      create: _createNavigatorObserver,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isNavigatorObserver,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:FlaxNavigatorObserver",
      [],
      {},
      constructors: {"": []},
      create: _createFlaxNavigatorObserver,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:NavigatorObserver",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isFlaxNavigatorObserver,
      methods: {},
      staticGetters: {},
    ),
    FlaxWidgetInterfaceBinding(
      "flax.core/flutter#type:PreferredSizeWidget",
      _isPreferredSizeWidget,
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:PreferredSize",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "preferredSize",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _PreferredSizeHost.new,
      fixedArguments: true,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Container",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "padding",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Color",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isAntiAlias",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "decoration",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Decoration",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "foregroundDecoration",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Decoration",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "width",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "height",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "constraints",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BoxConstraints",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "margin",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "clipBehavior",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip"),
            required: false,
            defaultValue: api.Clip.none,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ContainerHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:DecoratedBox",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "decoration",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Decoration"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "position",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:DecorationPosition",
            ),
            required: false,
            defaultValue: api.DecorationPosition.background,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _DecoratedBoxHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Decoration",
      [],
      {},
      constructors: {},
      create: _createDecoration,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isDecoration,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:BoxBorder",
      [],
      {},
      constructors: {},
      create: _createBoxBorder,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "package:flutter/src/painting/borders.dart::ShapeBorder",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isBoxBorder,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:BorderRadiusGeometry",
      [],
      {},
      constructors: {},
      create: _createBorderRadiusGeometry,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isBorderRadiusGeometry,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:EdgeInsetsGeometry",
      [],
      {},
      constructors: {},
      create: _createEdgeInsetsGeometry,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isEdgeInsetsGeometry,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:BoxDecoration",
      [
        FlaxGetter(
          "color",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:Color",
            nullable: true,
          ),
          _BoxDecoration_color,
        ),
        FlaxGetter(
          "border",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:BoxBorder",
            nullable: true,
          ),
          _BoxDecoration_border,
        ),
        FlaxGetter(
          "borderRadius",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:BorderRadiusGeometry",
            nullable: true,
          ),
          _BoxDecoration_borderRadius,
        ),
        FlaxGetter(
          "shape",
          FlaxTypeRef("enum", id: "flax.core/flutter#type:BoxShape"),
          _BoxDecoration_shape,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "border",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:BoxBorder",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "borderRadius",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:BorderRadiusGeometry",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "color",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:Color",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "shape",
              FlaxTypeRef(
                "enum",
                id: "flax.core/flutter#type:BoxShape",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/flutter#type:BoxDecoration"),
          _BoxDecoration_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "color",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Color",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "border",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BoxBorder",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BorderRadiusGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "shape",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:BoxShape"),
            required: false,
            defaultValue: api.BoxShape.rectangle,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createBoxDecoration,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:Decoration",
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isBoxDecoration,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:BorderSide",
      [
        FlaxGetter(
          "color",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
          _BorderSide_color,
        ),
        FlaxGetter("width", FlaxTypeRef("double"), _BorderSide_width),
        FlaxGetter(
          "style",
          FlaxTypeRef("enum", id: "flax.core/flutter#type:BorderStyle"),
          _BorderSide_style,
        ),
        FlaxGetter(
          "strokeAlign",
          FlaxTypeRef("double"),
          _BorderSide_strokeAlign,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "color",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:Color",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "strokeAlign",
              FlaxTypeRef("double", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "style",
              FlaxTypeRef(
                "enum",
                id: "flax.core/flutter#type:BorderStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "width",
              FlaxTypeRef("double", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _BorderSide_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "color",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "width",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 1.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:BorderStyle"),
            required: false,
            defaultValue: api.BorderStyle.solid,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "strokeAlign",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: -1.0,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createBorderSide,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isBorderSide,
      methods: {},
      staticGetters: {
        "none": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _BorderSide_static_none,
        ),
        "strokeAlignInside": FlaxStaticGetter(
          FlaxTypeRef("double"),
          _BorderSide_static_strokeAlignInside,
        ),
        "strokeAlignCenter": FlaxStaticGetter(
          FlaxTypeRef("double"),
          _BorderSide_static_strokeAlignCenter,
        ),
        "strokeAlignOutside": FlaxStaticGetter(
          FlaxTypeRef("double"),
          _BorderSide_static_strokeAlignOutside,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Border",
      [
        FlaxGetter(
          "top",
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _Border_top,
        ),
        FlaxGetter(
          "right",
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _Border_right,
        ),
        FlaxGetter(
          "bottom",
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _Border_bottom,
        ),
        FlaxGetter(
          "left",
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _Border_left,
        ),
        FlaxGetter("isUniform", FlaxTypeRef("bool"), _Border_isUniform),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "top",
            FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "right",
            FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "left",
            FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
        "all": [
          FlaxParameter(
            "color",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "width",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 1.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:BorderStyle"),
            required: false,
            defaultValue: api.BorderStyle.solid,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "strokeAlign",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: -1.0,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createBorder,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:BoxBorder",
        "package:flutter/src/painting/borders.dart::ShapeBorder",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isBorder,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:BorderDirectional",
      [
        FlaxGetter(
          "top",
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _BorderDirectional_top,
        ),
        FlaxGetter(
          "start",
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _BorderDirectional_start,
        ),
        FlaxGetter(
          "end",
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _BorderDirectional_end,
        ),
        FlaxGetter(
          "bottom",
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
          _BorderDirectional_bottom,
        ),
        FlaxGetter(
          "isUniform",
          FlaxTypeRef("bool"),
          _BorderDirectional_isUniform,
        ),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "top",
            FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "start",
            FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "end",
            FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef("object", id: "flax.core/flutter#type:BorderSide"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      create: _createBorderDirectional,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:BoxBorder",
        "package:flutter/src/painting/borders.dart::ShapeBorder",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isBorderDirectional,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Radius",
      [
        FlaxGetter("x", FlaxTypeRef("double"), _Radius_x),
        FlaxGetter("y", FlaxTypeRef("double"), _Radius_y),
      ],
      {},
      constructors: {
        "circular": [
          FlaxParameter(
            "radius",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "elliptical": [
          FlaxParameter(
            "x",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "y",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createRadius,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isRadius,
      methods: {},
      staticGetters: {
        "zero": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
          _Radius_static_zero,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:BorderRadius",
      [
        FlaxGetter(
          "topLeft",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
          _BorderRadius_topLeft,
        ),
        FlaxGetter(
          "topRight",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
          _BorderRadius_topRight,
        ),
        FlaxGetter(
          "bottomLeft",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
          _BorderRadius_bottomLeft,
        ),
        FlaxGetter(
          "bottomRight",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
          _BorderRadius_bottomRight,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "bottomLeft",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:Radius",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "bottomRight",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:Radius",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "topLeft",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:Radius",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "topRight",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:Radius",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderRadius"),
          _BorderRadius_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "all": [
          FlaxParameter(
            "radius",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "circular": [
          FlaxParameter(
            "radius",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "only": [
          FlaxParameter(
            "topLeft",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "topRight",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "bottomLeft",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "bottomRight",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      create: _createBorderRadius,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:BorderRadiusGeometry",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isBorderRadius,
      methods: {},
      staticGetters: {
        "zero": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:BorderRadius"),
          _BorderRadius_static_zero,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:BorderRadiusDirectional",
      [
        FlaxGetter(
          "topStart",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
          _BorderRadiusDirectional_topStart,
        ),
        FlaxGetter(
          "topEnd",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
          _BorderRadiusDirectional_topEnd,
        ),
        FlaxGetter(
          "bottomStart",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
          _BorderRadiusDirectional_bottomStart,
        ),
        FlaxGetter(
          "bottomEnd",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
          _BorderRadiusDirectional_bottomEnd,
        ),
      ],
      {},
      constructors: {
        "all": [
          FlaxParameter(
            "radius",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "circular": [
          FlaxParameter(
            "radius",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "only": [
          FlaxParameter(
            "topStart",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "topEnd",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "bottomStart",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "bottomEnd",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Radius"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      create: _createBorderRadiusDirectional,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:BorderRadiusGeometry",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isBorderRadiusDirectional,
      methods: {},
      staticGetters: {
        "zero": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:BorderRadiusDirectional",
          ),
          _BorderRadiusDirectional_static_zero,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:EdgeInsetsDirectional",
      [
        FlaxGetter(
          "start",
          FlaxTypeRef("double"),
          _EdgeInsetsDirectional_start,
        ),
        FlaxGetter("top", FlaxTypeRef("double"), _EdgeInsetsDirectional_top),
        FlaxGetter("end", FlaxTypeRef("double"), _EdgeInsetsDirectional_end),
        FlaxGetter(
          "bottom",
          FlaxTypeRef("double"),
          _EdgeInsetsDirectional_bottom,
        ),
      ],
      {},
      constructors: {
        "fromSTEB": [
          FlaxParameter(
            "start",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "top",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "end",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "only": [
          FlaxParameter(
            "start",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "top",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "end",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
        ],
        "all": [
          FlaxParameter(
            "value",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "symmetric": [
          FlaxParameter(
            "horizontal",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "vertical",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createEdgeInsetsDirectional,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:EdgeInsetsGeometry",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isEdgeInsetsDirectional,
      methods: {},
      staticGetters: {
        "zero": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:EdgeInsetsDirectional",
          ),
          _EdgeInsetsDirectional_static_zero,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:AlignmentGeometry",
      [],
      {},
      constructors: {},
      create: _createAlignmentGeometry,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isAlignmentGeometry,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Alignment",
      [
        FlaxGetter("x", FlaxTypeRef("double"), _Alignment_x),
        FlaxGetter("y", FlaxTypeRef("double"), _Alignment_y),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "x",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "y",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createAlignment,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:AlignmentGeometry",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isAlignment,
      methods: {},
      staticGetters: {
        "topLeft": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Alignment"),
          _Alignment_static_topLeft,
        ),
        "topCenter": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Alignment"),
          _Alignment_static_topCenter,
        ),
        "topRight": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Alignment"),
          _Alignment_static_topRight,
        ),
        "centerLeft": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Alignment"),
          _Alignment_static_centerLeft,
        ),
        "center": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Alignment"),
          _Alignment_static_center,
        ),
        "centerRight": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Alignment"),
          _Alignment_static_centerRight,
        ),
        "bottomLeft": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Alignment"),
          _Alignment_static_bottomLeft,
        ),
        "bottomCenter": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Alignment"),
          _Alignment_static_bottomCenter,
        ),
        "bottomRight": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:Alignment"),
          _Alignment_static_bottomRight,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:AlignmentDirectional",
      [
        FlaxGetter("start", FlaxTypeRef("double"), _AlignmentDirectional_start),
        FlaxGetter("y", FlaxTypeRef("double"), _AlignmentDirectional_y),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "start",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "y",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createAlignmentDirectional,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:AlignmentGeometry",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isAlignmentDirectional,
      methods: {},
      staticGetters: {
        "topStart": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:AlignmentDirectional",
          ),
          _AlignmentDirectional_static_topStart,
        ),
        "topCenter": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:AlignmentDirectional",
          ),
          _AlignmentDirectional_static_topCenter,
        ),
        "topEnd": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:AlignmentDirectional",
          ),
          _AlignmentDirectional_static_topEnd,
        ),
        "centerStart": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:AlignmentDirectional",
          ),
          _AlignmentDirectional_static_centerStart,
        ),
        "center": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:AlignmentDirectional",
          ),
          _AlignmentDirectional_static_center,
        ),
        "centerEnd": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:AlignmentDirectional",
          ),
          _AlignmentDirectional_static_centerEnd,
        ),
        "bottomStart": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:AlignmentDirectional",
          ),
          _AlignmentDirectional_static_bottomStart,
        ),
        "bottomCenter": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:AlignmentDirectional",
          ),
          _AlignmentDirectional_static_bottomCenter,
        ),
        "bottomEnd": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:AlignmentDirectional",
          ),
          _AlignmentDirectional_static_bottomEnd,
        ),
      },
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Expanded",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "flex",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 1,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ExpandedHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Flexible",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "flex",
            FlaxTypeRef("int"),
            required: false,
            defaultValue: 1,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "fit",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:FlexFit"),
            required: false,
            defaultValue: api.FlexFit.loose,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _FlexibleHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Stack",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "textDirection",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextDirection",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "fit",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:StackFit"),
            required: false,
            defaultValue: api.StackFit.loose,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "clipBehavior",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip"),
            required: false,
            defaultValue: api.Clip.hardEdge,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "children",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef("widget"),
              collection: FlaxCollectionBinding(
                "list:[widget:]",
                _collection6Create,
                _collection6Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("widget"),
                collection: FlaxCollectionBinding(
                  "iterable:[widget:]",
                  _collection7Create,
                  _collection7Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      _StackHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Positioned",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "left",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "top",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "right",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "width",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "height",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _PositionedHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Align",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "widthFactor",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "heightFactor",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _AlignHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Color",
      [
        FlaxGetter("a", FlaxTypeRef("double"), _Color_a),
        FlaxGetter("r", FlaxTypeRef("double"), _Color_r),
        FlaxGetter("g", FlaxTypeRef("double"), _Color_g),
        FlaxGetter("b", FlaxTypeRef("double"), _Color_b),
      ],
      {
        "toARGB32": FlaxInstanceMethod(
          [],
          FlaxTypeRef("int"),
          _Color_toARGB32,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "value",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "fromARGB": [
          FlaxParameter(
            "a",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "r",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "g",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "b",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createColor,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isColor,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:FontWeight",
      [FlaxGetter("value", FlaxTypeRef("int"), _FontWeight_value)],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "value",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createFontWeight,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isFontWeight,
      methods: {},
      staticGetters: {
        "w100": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_w100,
        ),
        "w200": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_w200,
        ),
        "w300": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_w300,
        ),
        "w400": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_w400,
        ),
        "w500": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_w500,
        ),
        "w600": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_w600,
        ),
        "w700": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_w700,
        ),
        "w800": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_w800,
        ),
        "w900": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_w900,
        ),
        "normal": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_normal,
        ),
        "bold": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:FontWeight"),
          _FontWeight_static_bold,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:TextStyle",
      [
        FlaxGetter("inherit", FlaxTypeRef("bool"), _TextStyle_inherit),
        FlaxGetter(
          "color",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:Color",
            nullable: true,
          ),
          _TextStyle_color,
        ),
        FlaxGetter(
          "backgroundColor",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:Color",
            nullable: true,
          ),
          _TextStyle_backgroundColor,
        ),
        FlaxGetter(
          "fontSize",
          FlaxTypeRef("double", nullable: true),
          _TextStyle_fontSize,
        ),
        FlaxGetter(
          "fontWeight",
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:FontWeight",
            nullable: true,
          ),
          _TextStyle_fontWeight,
        ),
        FlaxGetter(
          "fontStyle",
          FlaxTypeRef(
            "enum",
            id: "flax.core/flutter#type:FontStyle",
            nullable: true,
          ),
          _TextStyle_fontStyle,
        ),
        FlaxGetter(
          "letterSpacing",
          FlaxTypeRef("double", nullable: true),
          _TextStyle_letterSpacing,
        ),
        FlaxGetter(
          "wordSpacing",
          FlaxTypeRef("double", nullable: true),
          _TextStyle_wordSpacing,
        ),
        FlaxGetter(
          "height",
          FlaxTypeRef("double", nullable: true),
          _TextStyle_height,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "backgroundColor",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:Color",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "color",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:Color",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "fontSize",
              FlaxTypeRef("double", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "fontStyle",
              FlaxTypeRef(
                "enum",
                id: "flax.core/flutter#type:FontStyle",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "fontWeight",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:FontWeight",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "height",
              FlaxTypeRef("double", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "inherit",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "letterSpacing",
              FlaxTypeRef("double", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "wordSpacing",
              FlaxTypeRef("double", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextStyle"),
          _TextStyle_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "inherit",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "color",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Color",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "backgroundColor",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Color",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "fontSize",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "fontWeight",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:FontWeight",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "fontStyle",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:FontStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "letterSpacing",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "wordSpacing",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "height",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createTextStyle,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
      ],
      setters: [],
      matches: _isTextStyle,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Key",
      [],
      {},
      constructors: {},
      create: _createKey,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isKey,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:LocalKey",
      [],
      {},
      constructors: {},
      create: _createLocalKey,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["flax.core/flutter#type:Key", "dart:core::Object"],
      setters: [],
      matches: _isLocalKey,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:TextEditingController",
      [
        FlaxGetter(
          "value",
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextEditingValue"),
          _TextEditingController_value,
        ),
        FlaxGetter("text", FlaxTypeRef("String"), _TextEditingController_text),
        FlaxGetter(
          "selection",
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextSelection"),
          _TextEditingController_selection,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback115,
                  id: "callback:<>()->void:",
                  invoke: _callback115Invoke,
                  matches: _callback115Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _TextEditingController_addListener,
          startsRoute: false,
        ),
        "removeListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback116,
                  id: "callback:<>()->void:",
                  invoke: _callback116Invoke,
                  matches: _callback116Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _TextEditingController_removeListener,
          startsRoute: false,
        ),
        "clear": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _TextEditingController_clear,
          startsRoute: false,
        ),
        "clearComposing": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _TextEditingController_clearComposing,
          startsRoute: false,
        ),
        "dispose": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _TextEditingController_dispose,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "text",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "fromValue": [
          FlaxParameter(
            "value",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextEditingValue",
              nullable: true,
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createTextEditingController,
      disposeMethod: "dispose",
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "package:flutter/src/foundation/change_notifier.dart::ValueNotifier",
        "package:flutter/src/foundation/change_notifier.dart::ChangeNotifier",
        "dart:core::Object",
        "flax.core/flutter#type:Listenable",
        "flax.core/flutter#type:ValueListenable",
      ],
      setters: [
        FlaxSetter(
          "text",
          FlaxTypeRef("String"),
          _TextEditingController_set_text,
        ),
        FlaxSetter(
          "value",
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextEditingValue"),
          _TextEditingController_set_value,
        ),
        FlaxSetter(
          "selection",
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextSelection"),
          _TextEditingController_set_selection,
        ),
      ],
      matches: _isTextEditingController,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:TextEditingValue",
      [
        FlaxGetter("text", FlaxTypeRef("String"), _TextEditingValue_text),
        FlaxGetter(
          "selection",
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextSelection"),
          _TextEditingValue_selection,
        ),
        FlaxGetter(
          "composing",
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextRange"),
          _TextEditingValue_composing,
        ),
        FlaxGetter(
          "isComposingRangeValid",
          FlaxTypeRef("bool"),
          _TextEditingValue_isComposingRangeValid,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "composing",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextRange",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "selection",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:TextSelection",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "text",
              FlaxTypeRef("String", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextEditingValue"),
          _TextEditingValue_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "text",
            FlaxTypeRef("String"),
            required: false,
            defaultValue: '',
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "selection",
            FlaxTypeRef("object", id: "flax.core/flutter#type:TextSelection"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "composing",
            FlaxTypeRef("object", id: "flax.core/flutter#type:TextRange"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      create: _createTextEditingValue,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isTextEditingValue,
      methods: {},
      staticGetters: {
        "empty": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextEditingValue"),
          _TextEditingValue_static_empty,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:TextSelection",
      [
        FlaxGetter("start", FlaxTypeRef("int"), _TextSelection_start),
        FlaxGetter("end", FlaxTypeRef("int"), _TextSelection_end),
        FlaxGetter("isValid", FlaxTypeRef("bool"), _TextSelection_isValid),
        FlaxGetter(
          "isCollapsed",
          FlaxTypeRef("bool"),
          _TextSelection_isCollapsed,
        ),
        FlaxGetter(
          "isNormalized",
          FlaxTypeRef("bool"),
          _TextSelection_isNormalized,
        ),
        FlaxGetter("baseOffset", FlaxTypeRef("int"), _TextSelection_baseOffset),
        FlaxGetter(
          "extentOffset",
          FlaxTypeRef("int"),
          _TextSelection_extentOffset,
        ),
        FlaxGetter(
          "affinity",
          FlaxTypeRef("enum", id: "flax.core/flutter#type:TextAffinity"),
          _TextSelection_affinity,
        ),
        FlaxGetter(
          "isDirectional",
          FlaxTypeRef("bool"),
          _TextSelection_isDirectional,
        ),
      ],
      {
        "copyWith": FlaxInstanceMethod(
          [
            FlaxParameter(
              "affinity",
              FlaxTypeRef(
                "enum",
                id: "flax.core/flutter#type:TextAffinity",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "baseOffset",
              FlaxTypeRef("int", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "extentOffset",
              FlaxTypeRef("int", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "isDirectional",
              FlaxTypeRef("bool", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextSelection"),
          _TextSelection_copyWith,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "baseOffset",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "extentOffset",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "affinity",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:TextAffinity"),
            required: false,
            defaultValue: api.TextAffinity.downstream,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isDirectional",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
        "collapsed": [
          FlaxParameter(
            "offset",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "affinity",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:TextAffinity"),
            required: false,
            defaultValue: api.TextAffinity.downstream,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createTextSelection,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["flax.core/flutter#type:TextRange", "dart:core::Object"],
      setters: [],
      matches: _isTextSelection,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:TextRange",
      [
        FlaxGetter("start", FlaxTypeRef("int"), _TextRange_start),
        FlaxGetter("end", FlaxTypeRef("int"), _TextRange_end),
        FlaxGetter("isValid", FlaxTypeRef("bool"), _TextRange_isValid),
        FlaxGetter("isCollapsed", FlaxTypeRef("bool"), _TextRange_isCollapsed),
        FlaxGetter(
          "isNormalized",
          FlaxTypeRef("bool"),
          _TextRange_isNormalized,
        ),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "start",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "end",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "collapsed": [
          FlaxParameter(
            "offset",
            FlaxTypeRef("int"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createTextRange,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isTextRange,
      methods: {},
      staticGetters: {
        "empty": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:TextRange"),
          _TextRange_static_empty,
        ),
      },
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Navigator",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "pages",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef("page", id: "flax.core/flutter#type:Page"),
              collection: FlaxCollectionBinding(
                "list:[page:flax.core/flutter#type:Page<Object?><any?:>]",
                _collection8Create,
                _collection8Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("page", id: "flax.core/flutter#type:Page"),
                collection: FlaxCollectionBinding(
                  "iterable:[page:flax.core/flutter#type:Page<Object?><any?:>]",
                  _collection9Create,
                  _collection9Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "initialRoute",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onGenerateRoute",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "settings",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:RouteSettings",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "route",
                  id: "flax.core/flutter#type:Route",
                  nullable: true,
                ),
                _callback117,
                id: "callback:<>(p:r:settings:object:flax.core/flutter#type:RouteSettings)->route?:flax.core/flutter#type:Route<Object?><any?:>",
                invoke: _callback117Invoke,
                matches: _callback117Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onUnknownRoute",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "settings",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:RouteSettings",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "route",
                  id: "flax.core/flutter#type:Route",
                  nullable: true,
                ),
                _callback118,
                id: "callback:<>(p:r:settings:object:flax.core/flutter#type:RouteSettings)->route?:flax.core/flutter#type:Route<Object?><any?:>",
                invoke: _callback118Invoke,
                matches: _callback118Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "observers",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:NavigatorObserver",
              ),
              collection: FlaxCollectionBinding(
                "list:[object:flax.core/flutter#type:NavigatorObserver]",
                _collection10Create,
                _collection10Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:NavigatorObserver",
                ),
                collection: FlaxCollectionBinding(
                  "iterable:[object:flax.core/flutter#type:NavigatorObserver]",
                  _collection11Create,
                  _collection11Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "onDidRemovePage",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "page",
                    FlaxTypeRef("page", id: "flax.core/flutter#type:Page"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback119,
                id: "callback:<>(p:r:page:page:flax.core/flutter#type:Page<Object?><any?:>)->void:",
                invoke: _callback119Invoke,
                matches: _callback119Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _NavigatorHost.new,
      fixedArguments: false,
      methods: {
        "of": FlaxStaticMethod(
          [
            FlaxParameter(
              "context",
              FlaxTypeRef("context", id: "flax.core/flutter#type:BuildContext"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "rootNavigator",
              FlaxTypeRef("bool"),
              required: false,
              defaultValue: false,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("state", id: "flax.core/flutter#type:NavigatorState"),
          _Navigator_of,
        ),
      },
    ),
    FlaxStateBinding(
      "flax.core/flutter#type:NavigatorState",
      [FlaxGetter("mounted", FlaxTypeRef("bool"), _NavigatorState_mounted)],
      {
        "push": FlaxInstanceMethod(
          [
            FlaxParameter(
              "route",
              FlaxTypeRef("route", id: "flax.core/flutter#type:Route"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("data", nullable: true),
            future: FlaxFutureBinding("data?:", _future7Adapt),
          ),
          _NavigatorState_push,
          startsRoute: true,
        ),
        "pushNamed": FlaxInstanceMethod(
          [
            FlaxParameter(
              "routeName",
              FlaxTypeRef("String"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "arguments",
              FlaxTypeRef("data", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("data", nullable: true),
            future: FlaxFutureBinding("data?:", _future7Adapt),
          ),
          _NavigatorState_pushNamed,
          startsRoute: true,
        ),
        "pushReplacement": FlaxInstanceMethod(
          [
            FlaxParameter(
              "newRoute",
              FlaxTypeRef("route", id: "flax.core/flutter#type:Route"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
            FlaxParameter(
              "result",
              FlaxTypeRef("data", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("data", nullable: true),
            future: FlaxFutureBinding("data?:", _future7Adapt),
          ),
          _NavigatorState_pushReplacement,
          startsRoute: true,
        ),
        "pop": FlaxInstanceMethod(
          [
            FlaxParameter(
              "result",
              FlaxTypeRef("data", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _NavigatorState_pop,
          startsRoute: false,
        ),
        "maybePop": FlaxInstanceMethod(
          [
            FlaxParameter(
              "result",
              FlaxTypeRef("data", nullable: true),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("bool"),
            future: FlaxFutureBinding("bool:", _future1Adapt),
          ),
          _NavigatorState_maybePop,
          startsRoute: false,
        ),
        "canPop": FlaxInstanceMethod(
          [],
          FlaxTypeRef("bool"),
          _NavigatorState_canPop,
          startsRoute: false,
        ),
      },
    ),
    FlaxRouteBinding("flax.core/flutter#type:Route", {}, _createRoute, [
      "package:flutter/src/widgets/navigator.dart::_RoutePlaceholder",
      "dart:core::Object",
    ]),
    FlaxPageBinding("flax.core/flutter#type:Page", {}, _createPage, [
      "flax.core/flutter#type:RouteSettings",
      "dart:core::Object",
    ]),
    FlaxObjectBinding(
      "flax.core/flutter#type:RouteSettings",
      [
        FlaxGetter(
          "name",
          FlaxTypeRef("String", nullable: true),
          _RouteSettings_name,
        ),
        FlaxGetter(
          "arguments",
          FlaxTypeRef("data", nullable: true),
          _RouteSettings_arguments,
        ),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "name",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "arguments",
            FlaxTypeRef("data", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createRouteSettings,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isRouteSettings,
      methods: {},
      staticGetters: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:NavigatorPopHandler",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPopWithResult",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "result",
                    FlaxTypeRef("data", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback120,
                id: "callback:<>(p:r:result:data?:)->void:",
                invoke: _callback120Invoke,
                matches: _callback120Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "enabled",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _NavigatorPopHandlerHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:PopScope",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "canPop",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPopInvokedWithResult",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "didPop",
                    FlaxTypeRef("bool"),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "result",
                    FlaxTypeRef("data", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback121,
                id: "callback:<>(p:r:didPop:bool:,p:r:result:data?:)->void:",
                invoke: _callback121Invoke,
                matches: _callback121Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _PopScopeHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Builder",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "builder",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "context",
                    FlaxTypeRef(
                      "context",
                      id: "flax.core/flutter#type:BuildContext",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("widget"),
                _callback122,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext)->widget:",
                invoke: _callback122Invoke,
                matches: _callback122Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _BuilderHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:LayoutBuilder",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "builder",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "context",
                    FlaxTypeRef(
                      "context",
                      id: "flax.core/flutter#type:BuildContext",
                    ),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "constraints",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:BoxConstraints",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("widget"),
                _callback123,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:constraints:object:flax.core/flutter#type:BoxConstraints)->widget:",
                invoke: _callback123Invoke,
                matches: _callback123Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _LayoutBuilderHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxContextBinding("flax.core/flutter#type:BuildContext", [
      FlaxGetter("mounted", FlaxTypeRef("bool"), _BuildContext_mounted),
      FlaxGetter(
        "size",
        FlaxTypeRef(
          "object",
          id: "flax.core/flutter#type:Size",
          nullable: true,
        ),
        _BuildContext_size,
      ),
    ]),
    FlaxObjectBinding(
      "flax.core/flutter#type:Size",
      [
        FlaxGetter("width", FlaxTypeRef("double"), _Size_width),
        FlaxGetter("height", FlaxTypeRef("double"), _Size_height),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "width",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "height",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "fromHeight": [
          FlaxParameter(
            "height",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createSize,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:ui::OffsetBase", "dart:core::Object"],
      setters: [],
      matches: _isSize,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:SchedulerBinding",
      [
        FlaxGetter(
          "endOfFrame",
          FlaxTypeRef(
            "future",
            item: FlaxTypeRef("void"),
            future: FlaxFutureBinding("void:", _future4Adapt),
          ),
          _SchedulerBinding_endOfFrame,
        ),
      ],
      {},
      constructors: {},
      create: _createSchedulerBinding,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "package:flutter/src/foundation/binding.dart::BindingBase",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isSchedulerBinding,
      methods: {},
      staticGetters: {
        "instance": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:SchedulerBinding"),
          _SchedulerBinding_static_instance,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:BoxConstraints",
      [
        FlaxGetter("minWidth", FlaxTypeRef("double"), _BoxConstraints_minWidth),
        FlaxGetter("maxWidth", FlaxTypeRef("double"), _BoxConstraints_maxWidth),
        FlaxGetter(
          "minHeight",
          FlaxTypeRef("double"),
          _BoxConstraints_minHeight,
        ),
        FlaxGetter(
          "maxHeight",
          FlaxTypeRef("double"),
          _BoxConstraints_maxHeight,
        ),
      ],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "minWidth",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maxWidth",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: double.infinity,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minHeight",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maxHeight",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: double.infinity,
            omitWhenAbsent: false,
          ),
        ],
        "tightFor": [
          FlaxParameter(
            "width",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "height",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "expand": [
          FlaxParameter(
            "width",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "height",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createBoxConstraints,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "package:flutter/src/rendering/object.dart::Constraints",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isBoxConstraints,
      methods: {},
      staticGetters: {},
    ),
    FlaxMemberBinding("flax.core/flutter#type:Directionality", {
      "of": FlaxStaticMethod(
        [
          FlaxParameter(
            "context",
            FlaxTypeRef("context", id: "flax.core/flutter#type:BuildContext"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        FlaxTypeRef("enum", id: "flax.core/flutter#type:TextDirection"),
        _Directionality_of,
      ),
    }),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Text",
      {
        "": [
          FlaxParameter(
            "data",
            FlaxTypeRef("String"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "style",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:TextStyle",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "textAlign",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextAlign",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "textDirection",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextDirection",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "softWrap",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "overflow",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextOverflow",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maxLines",
            FlaxTypeRef("int", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _TextHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Row",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mainAxisAlignment",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:MainAxisAlignment"),
            required: false,
            defaultValue: api.MainAxisAlignment.start,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mainAxisSize",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:MainAxisSize"),
            required: false,
            defaultValue: api.MainAxisSize.max,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "crossAxisAlignment",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:CrossAxisAlignment",
            ),
            required: false,
            defaultValue: api.CrossAxisAlignment.center,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "textDirection",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextDirection",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "verticalDirection",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:VerticalDirection"),
            required: false,
            defaultValue: api.VerticalDirection.down,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "textBaseline",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextBaseline",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "spacing",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "children",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef("widget"),
              collection: FlaxCollectionBinding(
                "list:[widget:]",
                _collection6Create,
                _collection6Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("widget"),
                collection: FlaxCollectionBinding(
                  "iterable:[widget:]",
                  _collection7Create,
                  _collection7Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      _RowHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Column",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mainAxisAlignment",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:MainAxisAlignment"),
            required: false,
            defaultValue: api.MainAxisAlignment.start,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "mainAxisSize",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:MainAxisSize"),
            required: false,
            defaultValue: api.MainAxisSize.max,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "crossAxisAlignment",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:CrossAxisAlignment",
            ),
            required: false,
            defaultValue: api.CrossAxisAlignment.center,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "textDirection",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextDirection",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "verticalDirection",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:VerticalDirection"),
            required: false,
            defaultValue: api.VerticalDirection.down,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "textBaseline",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextBaseline",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "spacing",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "children",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef("widget"),
              collection: FlaxCollectionBinding(
                "list:[widget:]",
                _collection6Create,
                _collection6Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("widget"),
                collection: FlaxCollectionBinding(
                  "iterable:[widget:]",
                  _collection7Create,
                  _collection7Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      _ColumnHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Center",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "widthFactor",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "heightFactor",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _CenterHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Padding",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "padding",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsGeometry",
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _PaddingHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:SizedBox",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "width",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "height",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _SizedBoxHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:EdgeInsets",
      [
        FlaxGetter("left", FlaxTypeRef("double"), _EdgeInsets_left),
        FlaxGetter("top", FlaxTypeRef("double"), _EdgeInsets_top),
        FlaxGetter("right", FlaxTypeRef("double"), _EdgeInsets_right),
        FlaxGetter("bottom", FlaxTypeRef("double"), _EdgeInsets_bottom),
      ],
      {},
      constructors: {
        "all": [
          FlaxParameter(
            "value",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "symmetric": [
          FlaxParameter(
            "vertical",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "horizontal",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
        ],
        "fromLTRB": [
          FlaxParameter(
            "left",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "top",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "right",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
        "only": [
          FlaxParameter(
            "left",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "top",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "right",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createEdgeInsets,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:EdgeInsetsGeometry",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isEdgeInsets,
      methods: {},
      staticGetters: {
        "zero": FlaxStaticGetter(
          FlaxTypeRef("object", id: "flax.core/flutter#type:EdgeInsets"),
          _EdgeInsets_static_zero,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:ValueKey",
      [FlaxGetter("value", FlaxTypeRef("scalar"), _ValueKey_value)],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "value",
            FlaxTypeRef("scalar"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createValueKey,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:LocalKey",
        "flax.core/flutter#type:Key",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isValueKey,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:ScrollController",
      [
        FlaxGetter(
          "hasClients",
          FlaxTypeRef("bool"),
          _ScrollController_hasClients,
        ),
        FlaxGetter("offset", FlaxTypeRef("double"), _ScrollController_offset),
      ],
      {
        "addListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback124,
                  id: "callback:<>()->void:",
                  invoke: _callback124Invoke,
                  matches: _callback124Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _ScrollController_addListener,
          startsRoute: false,
        ),
        "removeListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback125,
                  id: "callback:<>()->void:",
                  invoke: _callback125Invoke,
                  matches: _callback125Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _ScrollController_removeListener,
          startsRoute: false,
        ),
        "jumpTo": FlaxInstanceMethod(
          [
            FlaxParameter(
              "value",
              FlaxTypeRef("double"),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _ScrollController_jumpTo,
          startsRoute: false,
        ),
        "dispose": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _ScrollController_dispose,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "initialScrollOffset",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "keepScrollOffset",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "debugLabel",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createScrollController,
      disposeMethod: "dispose",
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "package:flutter/src/foundation/change_notifier.dart::ChangeNotifier",
        "dart:core::Object",
        "flax.core/flutter#type:Listenable",
      ],
      setters: [],
      matches: _isScrollController,
      methods: {},
      staticGetters: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:ListView",
      {
        "builder": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "scrollDirection",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Axis"),
            required: false,
            defaultValue: api.Axis.vertical,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "reverse",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "controller",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:ScrollController",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "primary",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "shrinkWrap",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "padding",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "itemExtent",
            FlaxTypeRef("double", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "itemBuilder",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "context",
                    FlaxTypeRef(
                      "context",
                      id: "flax.core/flutter#type:BuildContext",
                    ),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "index",
                    FlaxTypeRef("int"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("widget", nullable: true),
                _callback126,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:index:int:)->widget?:",
                invoke: _callback126Invoke,
                matches: _callback126Matches,
                independentWidgetResult: true,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "findChildIndexCallback",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "key",
                    FlaxTypeRef("object", id: "flax.core/flutter#type:Key"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("int", nullable: true),
                _callback127,
                id: "callback:<>(p:r:key:object:flax.core/flutter#type:Key)->int?:",
                invoke: _callback127Invoke,
                matches: _callback127Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "itemCount",
            FlaxTypeRef("int", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "addAutomaticKeepAlives",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "addRepaintBoundaries",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "addSemanticIndexes",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ListViewHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:SingleChildScrollView",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "scrollDirection",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Axis"),
            required: false,
            defaultValue: api.Axis.vertical,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "reverse",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "padding",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:EdgeInsetsGeometry",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "primary",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "controller",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:ScrollController",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _SingleChildScrollViewHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:FocusNode",
      [
        FlaxGetter("hasFocus", FlaxTypeRef("bool"), _FocusNode_hasFocus),
        FlaxGetter(
          "hasPrimaryFocus",
          FlaxTypeRef("bool"),
          _FocusNode_hasPrimaryFocus,
        ),
        FlaxGetter(
          "canRequestFocus",
          FlaxTypeRef("bool"),
          _FocusNode_canRequestFocus,
        ),
        FlaxGetter(
          "skipTraversal",
          FlaxTypeRef("bool"),
          _FocusNode_skipTraversal,
        ),
      ],
      {
        "addListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback128,
                  id: "callback:<>()->void:",
                  invoke: _callback128Invoke,
                  matches: _callback128Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _FocusNode_addListener,
          startsRoute: false,
        ),
        "removeListener": FlaxInstanceMethod(
          [
            FlaxParameter(
              "listener",
              FlaxTypeRef(
                "callback",
                callback: FlaxCallbackBinding(
                  [],
                  FlaxTypeRef("void"),
                  _callback129,
                  id: "callback:<>()->void:",
                  invoke: _callback129Invoke,
                  matches: _callback129Matches,
                ),
              ),
              required: true,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _FocusNode_removeListener,
          startsRoute: false,
        ),
        "requestFocus": FlaxInstanceMethod(
          [
            FlaxParameter(
              "node",
              FlaxTypeRef(
                "object",
                id: "flax.core/flutter#type:FocusNode",
                nullable: true,
              ),
              required: false,
              defaultValue: null,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _FocusNode_requestFocus,
          startsRoute: false,
        ),
        "unfocus": FlaxInstanceMethod(
          [
            FlaxParameter(
              "disposition",
              FlaxTypeRef(
                "enum",
                id: "flax.core/flutter#type:UnfocusDisposition",
              ),
              required: false,
              defaultValue: api.UnfocusDisposition.scope,
              omitWhenAbsent: false,
            ),
          ],
          FlaxTypeRef("void"),
          _FocusNode_unfocus,
          startsRoute: false,
        ),
        "nextFocus": FlaxInstanceMethod(
          [],
          FlaxTypeRef("bool"),
          _FocusNode_nextFocus,
          startsRoute: false,
        ),
        "previousFocus": FlaxInstanceMethod(
          [],
          FlaxTypeRef("bool"),
          _FocusNode_previousFocus,
          startsRoute: false,
        ),
        "dispose": FlaxInstanceMethod(
          [],
          FlaxTypeRef("void"),
          _FocusNode_dispose,
          startsRoute: false,
        ),
      },
      constructors: {
        "": [
          FlaxParameter(
            "debugLabel",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "skipTraversal",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "canRequestFocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createFocusNode,
      disposeMethod: "dispose",
      listenerPairs: {"addListener": "removeListener"},
      supertypes: [
        "dart:core::Object",
        "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin",
        "package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree",
        "package:flutter/src/foundation/diagnostics.dart::Diagnosticable",
        "package:flutter/src/foundation/change_notifier.dart::ChangeNotifier",
        "flax.core/flutter#type:Listenable",
      ],
      setters: [
        FlaxSetter(
          "canRequestFocus",
          FlaxTypeRef("bool"),
          _FocusNode_set_canRequestFocus,
        ),
        FlaxSetter(
          "skipTraversal",
          FlaxTypeRef("bool"),
          _FocusNode_set_skipTraversal,
        ),
      ],
      matches: _isFocusNode,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:TextInputFormatter",
      [],
      {},
      constructors: {
        "withFunction": [
          FlaxParameter(
            "formatFunction",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "oldValue",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:TextEditingValue",
                    ),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "newValue",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:TextEditingValue",
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef(
                  "object",
                  id: "flax.core/flutter#type:TextEditingValue",
                ),
                _callback130,
                id: "callback:<>(p:r:oldValue:object:flax.core/flutter#type:TextEditingValue,p:r:newValue:object:flax.core/flutter#type:TextEditingValue)->object:flax.core/flutter#type:TextEditingValue",
                invoke: _callback130Invoke,
                matches: _callback130Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createTextInputFormatter,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isTextInputFormatter,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:FilteringTextInputFormatter",
      [],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "filterPattern",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Pattern"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "allow",
            FlaxTypeRef("bool"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "replacementString",
            FlaxTypeRef("String"),
            required: false,
            defaultValue: '',
            omitWhenAbsent: false,
          ),
        ],
        "allow": [
          FlaxParameter(
            "filterPattern",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Pattern"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "replacementString",
            FlaxTypeRef("String"),
            required: false,
            defaultValue: '',
            omitWhenAbsent: false,
          ),
        ],
        "deny": [
          FlaxParameter(
            "filterPattern",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Pattern"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "replacementString",
            FlaxTypeRef("String"),
            required: false,
            defaultValue: '',
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createFilteringTextInputFormatter,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:TextInputFormatter",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isFilteringTextInputFormatter,
      methods: {},
      staticGetters: {
        "digitsOnly": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextInputFormatter",
          ),
          _FilteringTextInputFormatter_static_digitsOnly,
        ),
        "singleLineFormatter": FlaxStaticGetter(
          FlaxTypeRef(
            "object",
            id: "flax.core/flutter#type:TextInputFormatter",
          ),
          _FilteringTextInputFormatter_static_singleLineFormatter,
        ),
      },
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:LengthLimitingTextInputFormatter",
      [],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "maxLength",
            FlaxTypeRef("int", nullable: true),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maxLengthEnforcement",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:MaxLengthEnforcement",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createLengthLimitingTextInputFormatter,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: [
        "flax.core/flutter#type:TextInputFormatter",
        "dart:core::Object",
      ],
      setters: [],
      matches: _isLengthLimitingTextInputFormatter,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:Pattern",
      [],
      {},
      constructors: {},
      create: _createPattern,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object"],
      setters: [],
      matches: _isPattern,
      methods: {},
      staticGetters: {},
    ),
    FlaxObjectBinding(
      "flax.core/flutter#type:RegExp",
      [],
      {},
      constructors: {
        "": [
          FlaxParameter(
            "source",
            FlaxTypeRef("String"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "multiLine",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "caseSensitive",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "unicode",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "dotAll",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
      },
      create: _createRegExp,
      disposeMethod: null,
      listenerPairs: {},
      supertypes: ["dart:core::Object", "flax.core/flutter#type:Pattern"],
      setters: [],
      matches: _isRegExp,
      methods: {},
      staticGetters: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Listener",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPointerDown",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:PointerEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback131,
                id: "callback:<>(p:r:event:object:flax.core/flutter#type:PointerEvent)->void:",
                invoke: _callback131Invoke,
                matches: _callback131Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPointerMove",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:PointerEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback132,
                id: "callback:<>(p:r:event:object:flax.core/flutter#type:PointerEvent)->void:",
                invoke: _callback132Invoke,
                matches: _callback132Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPointerUp",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:PointerEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback133,
                id: "callback:<>(p:r:event:object:flax.core/flutter#type:PointerEvent)->void:",
                invoke: _callback133Invoke,
                matches: _callback133Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPointerHover",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:PointerEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback134,
                id: "callback:<>(p:r:event:object:flax.core/flutter#type:PointerEvent)->void:",
                invoke: _callback134Invoke,
                matches: _callback134Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPointerCancel",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:PointerEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback135,
                id: "callback:<>(p:r:event:object:flax.core/flutter#type:PointerEvent)->void:",
                invoke: _callback135Invoke,
                matches: _callback135Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPointerSignal",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:PointerEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback136,
                id: "callback:<>(p:r:event:object:flax.core/flutter#type:PointerEvent)->void:",
                invoke: _callback136Invoke,
                matches: _callback136Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "behavior",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:HitTestBehavior"),
            required: false,
            defaultValue: api.HitTestBehavior.deferToChild,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ListenerHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:MouseRegion",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onEnter",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:PointerEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback137,
                id: "callback:<>(p:r:event:object:flax.core/flutter#type:PointerEvent)->void:",
                invoke: _callback137Invoke,
                matches: _callback137Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onExit",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:PointerEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback138,
                id: "callback:<>(p:r:event:object:flax.core/flutter#type:PointerEvent)->void:",
                invoke: _callback138Invoke,
                matches: _callback138Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onHover",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "event",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:PointerEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback139,
                id: "callback:<>(p:r:event:object:flax.core/flutter#type:PointerEvent)->void:",
                invoke: _callback139Invoke,
                matches: _callback139Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "opaque",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "hitTestBehavior",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:HitTestBehavior",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _MouseRegionHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:KeyboardListener",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "focusNode",
            FlaxTypeRef("object", id: "flax.core/flutter#type:FocusNode"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "includeSemantics",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onKeyEvent",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef(
                      "object",
                      id: "flax.core/flutter#type:KeyEvent",
                    ),
                    required: true,
                    positional: true,
                    encode: const FlaxTypeRef('data'),
                  ),
                ],
                FlaxTypeRef("void"),
                _callback140,
                id: "callback:<>(p:r:value:object:flax.core/flutter#type:KeyEvent)->void:",
                invoke: _callback140Invoke,
                matches: _callback140Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _KeyboardListenerHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:SafeArea",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "left",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "top",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "right",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "bottom",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "minimum",
            FlaxTypeRef("object", id: "flax.core/flutter#type:EdgeInsets"),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "maintainBottomViewPadding",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _SafeAreaHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Wrap",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "direction",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Axis"),
            required: false,
            defaultValue: api.Axis.horizontal,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:WrapAlignment"),
            required: false,
            defaultValue: api.WrapAlignment.start,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "spacing",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "runAlignment",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:WrapAlignment"),
            required: false,
            defaultValue: api.WrapAlignment.start,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "runSpacing",
            FlaxTypeRef("double"),
            required: false,
            defaultValue: 0.0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "crossAxisAlignment",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:WrapCrossAlignment",
            ),
            required: false,
            defaultValue: api.WrapCrossAlignment.start,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "textDirection",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextDirection",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "verticalDirection",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:VerticalDirection"),
            required: false,
            defaultValue: api.VerticalDirection.down,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "clipBehavior",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip"),
            required: false,
            defaultValue: api.Clip.none,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "children",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef("widget"),
              collection: FlaxCollectionBinding(
                "list:[widget:]",
                _collection6Create,
                _collection6Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("widget"),
                collection: FlaxCollectionBinding(
                  "iterable:[widget:]",
                  _collection7Create,
                  _collection7Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      _WrapHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:FittedBox",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "fit",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:BoxFit"),
            required: false,
            defaultValue: api.BoxFit.contain,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "clipBehavior",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip"),
            required: false,
            defaultValue: api.Clip.none,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _FittedBoxHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:AspectRatio",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "aspectRatio",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _AspectRatioHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:ConstrainedBox",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "constraints",
            FlaxTypeRef("object", id: "flax.core/flutter#type:BoxConstraints"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ConstrainedBoxHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Opacity",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "opacity",
            FlaxTypeRef("double"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alwaysIncludeSemantics",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _OpacityHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Visibility",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "visible",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maintainState",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maintainAnimation",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maintainSize",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maintainSemantics",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maintainInteractivity",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "maintainFocusability",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
        ],
        "maintain": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "visible",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
        ],
      },
      _VisibilityHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:ColoredBox",
      {
        "": [
          FlaxParameter(
            "color",
            FlaxTypeRef("object", id: "flax.core/flutter#type:Color"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "isAntiAlias",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ColoredBoxHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:ClipRRect",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "borderRadius",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:BorderRadiusGeometry",
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "clipBehavior",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip"),
            required: false,
            defaultValue: api.Clip.antiAlias,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _ClipRRectHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:IgnorePointer",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "ignoring",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _IgnorePointerHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:IndexedStack",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "alignment",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:AlignmentGeometry",
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
          FlaxParameter(
            "textDirection",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:TextDirection",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "clipBehavior",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:Clip"),
            required: false,
            defaultValue: api.Clip.hardEdge,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "sizing",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:StackFit"),
            required: false,
            defaultValue: api.StackFit.loose,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "index",
            FlaxTypeRef("int", nullable: true),
            required: false,
            defaultValue: 0,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "children",
            FlaxTypeRef(
              "list",
              item: FlaxTypeRef("widget"),
              collection: FlaxCollectionBinding(
                "list:[widget:]",
                _collection6Create,
                _collection6Matches,
              ),
              iterable: FlaxTypeRef(
                "iterable",
                item: FlaxTypeRef("widget"),
                collection: FlaxCollectionBinding(
                  "iterable:[widget:]",
                  _collection7Create,
                  _collection7Matches,
                ),
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: true,
          ),
        ],
      },
      _IndexedStackHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:GestureDetector",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onTap",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback141,
                id: "callback:<>()->void:",
                invoke: _callback141Invoke,
                matches: _callback141Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onTapCancel",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback142,
                id: "callback:<>()->void:",
                invoke: _callback142Invoke,
                matches: _callback142Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onSecondaryTap",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback143,
                id: "callback:<>()->void:",
                invoke: _callback143Invoke,
                matches: _callback143Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onSecondaryTapCancel",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback144,
                id: "callback:<>()->void:",
                invoke: _callback144Invoke,
                matches: _callback144Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onDoubleTap",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback145,
                id: "callback:<>()->void:",
                invoke: _callback145Invoke,
                matches: _callback145Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onDoubleTapCancel",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback146,
                id: "callback:<>()->void:",
                invoke: _callback146Invoke,
                matches: _callback146Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onLongPressCancel",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback147,
                id: "callback:<>()->void:",
                invoke: _callback147Invoke,
                matches: _callback147Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onLongPress",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback148,
                id: "callback:<>()->void:",
                invoke: _callback148Invoke,
                matches: _callback148Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "behavior",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:HitTestBehavior",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "excludeFromSemantics",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "dragStartBehavior",
            FlaxTypeRef("enum", id: "flax.core/flutter#type:DragStartBehavior"),
            required: false,
            defaultValue: api1.DragStartBehavior.start,
            omitWhenAbsent: false,
          ),
        ],
      },
      _GestureDetectorHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Focus",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "focusNode",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:FocusNode",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autofocus",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: false,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onFocusChange",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "value",
                    FlaxTypeRef("bool"),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback149,
                id: "callback:<>(p:r:value:bool:)->void:",
                invoke: _callback149Invoke,
                matches: _callback149Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "canRequestFocus",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "skipTraversal",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "descendantsAreFocusable",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "descendantsAreTraversable",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "includeSemantics",
            FlaxTypeRef("bool"),
            required: false,
            defaultValue: true,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "debugLabel",
            FlaxTypeRef("String", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _FocusHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:Form",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "child",
            FlaxTypeRef("widget"),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "canPop",
            FlaxTypeRef("bool", nullable: true),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onPopInvokedWithResult",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "didPop",
                    FlaxTypeRef("bool"),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "result",
                    FlaxTypeRef("data", nullable: true),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("void"),
                _callback150,
                id: "callback:<>(p:r:didPop:bool:,p:r:result:data?:)->void:",
                invoke: _callback150Invoke,
                matches: _callback150Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "onChanged",
            FlaxTypeRef(
              "callback",
              nullable: true,
              callback: FlaxCallbackBinding(
                [],
                FlaxTypeRef("void"),
                _callback151,
                id: "callback:<>()->void:",
                invoke: _callback151Invoke,
                matches: _callback151Matches,
              ),
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "autovalidateMode",
            FlaxTypeRef(
              "enum",
              id: "flax.core/flutter#type:AutovalidateMode",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _FormHost.new,
      fixedArguments: false,
      methods: {},
    ),
    FlaxWidgetBinding(
      "flax.core/flutter#type:StatefulBuilder",
      {
        "": [
          FlaxParameter(
            "key",
            FlaxTypeRef(
              "object",
              id: "flax.core/flutter#type:Key",
              nullable: true,
            ),
            required: false,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
          FlaxParameter(
            "builder",
            FlaxTypeRef(
              "callback",
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "context",
                    FlaxTypeRef(
                      "context",
                      id: "flax.core/flutter#type:BuildContext",
                    ),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "setState",
                    FlaxTypeRef(
                      "callback",
                      callback: FlaxCallbackBinding(
                        [
                          FlaxCallbackParameter(
                            "fn",
                            FlaxTypeRef(
                              "callback",
                              callback: FlaxCallbackBinding(
                                [],
                                FlaxTypeRef("void"),
                                _callback152,
                                id: "callback:<>()->void:",
                                invoke: _callback152Invoke,
                                matches: _callback152Matches,
                              ),
                            ),
                            required: true,
                            positional: true,
                          ),
                        ],
                        FlaxTypeRef("void"),
                        _callback153,
                        id: "callback:<>(p:r:fn:callback:<>()->void:)->void:",
                        invoke: _callback153Invoke,
                        matches: _callback153Matches,
                      ),
                    ),
                    required: true,
                    positional: true,
                  ),
                ],
                FlaxTypeRef("widget"),
                _callback154,
                id: "callback:<>(p:r:context:context:flax.core/flutter#type:BuildContext,p:r:setState:callback:<>(p:r:fn:callback:<>()->void:)->void:)->widget:",
                invoke: _callback154Invoke,
                matches: _callback154Matches,
              ),
            ),
            required: true,
            defaultValue: null,
            omitWhenAbsent: false,
          ),
        ],
      },
      _StatefulBuilderHost.new,
      fixedArguments: false,
      methods: {},
    ),
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/flutter#function:applyBoxFit",
      [
        FlaxParameter(
          "fit",
          FlaxTypeRef("enum", id: "flax.core/flutter#type:BoxFit"),
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "inputSize",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
        FlaxParameter(
          "outputSize",
          FlaxTypeRef("object", id: "flax.core/flutter#type:Size"),
          required: true,
          defaultValue: null,
          omitWhenAbsent: false,
        ),
      ],
      FlaxTypeRef("object", id: "flax.core/flutter#type:FittedSizes"),
      _function_applyBoxFit,
    ),
  ],
  moduleId: "flax.core/flutter",
  uiProtocol: 20,
  requiredCapabilities: const <String>[],
);
Object? _function_applyBoxFit(Map<String, Object?> values) {
  return api.applyBoxFit(
    values["fit"] as api.BoxFit,
    values["inputSize"] as api.Size,
    values["outputSize"] as api.Size,
  );
}

bool _isStream(Object value) => value is api3.Stream<Object?>;
Object? _Stream_isBroadcast(Object value) =>
    (value as api3.Stream<Object?>).isBroadcast;
Object? _Stream_length(Object value) => (value as api3.Stream<Object?>).length;
Object? _Stream_isEmpty(Object value) =>
    (value as api3.Stream<Object?>).isEmpty;
Object? _Stream_first(Object value) => (value as api3.Stream<Object?>).first;
Object? _Stream_last(Object value) => (value as api3.Stream<Object?>).last;
Object? _Stream_single(Object value) => (value as api3.Stream<Object?>).single;
Object? _Stream_castFrom(Map<String, Object?> values) {
  return api3.Stream.castFrom<Object?, Object?>(
    values["source"] as api3.Stream<Object?>,
  );
}

Object? _Stream_asBroadcastStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.Stream<Object?>).asBroadcastStream(
    onCancel:
        values["onCancel"]
            as void Function(api3.StreamSubscription<Object?> subscription)?,
    onListen:
        values["onListen"]
            as void Function(api3.StreamSubscription<Object?> subscription)?,
  );
}

Object? _Stream_listen(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).listen(
    values["onData"] as void Function(Object? event)?,
    cancelOnError: values["cancelOnError"] as bool?,
    onDone: values["onDone"] as void Function()?,
    onError:
        values["onError"] as void Function(Object p0, [api2.StackTrace p1])?,
  );
}

Object? _Stream_where(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).where(
    values["test"] as bool Function(Object? event),
  );
}

Object? _Stream_map(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).map<Object?>(
    values["convert"] as Object? Function(Object? event),
  );
}

Object? _Stream_asyncMap(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).asyncMap<Object?>(
    values["convert"] as api3.FutureOr<Object?> Function(Object? event),
  );
}

Object? _Stream_asyncExpand(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).asyncExpand<Object?>(
    values["convert"] as api3.Stream<Object?>? Function(Object? event),
  );
}

Object? _Stream_handleError(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).handleError(
    values["onError"] as void Function(Object p0, [api2.StackTrace p1]),
    test: values["test"] as bool Function(Object? error)?,
  );
}

Object? _Stream_expand(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).expand<Object?>(
    values["convert"] as Iterable<Object?> Function(Object? element),
  );
}

Object? _Stream_pipe(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).pipe(
    values["streamConsumer"] as api3.StreamConsumer<Object?>,
  );
}

Object? _Stream_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).transform<Object?>(
    values["streamTransformer"] as api3.StreamTransformer<Object?, Object?>,
  );
}

Object? _Stream_reduce(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).reduce(
    values["combine"] as Object? Function(Object? previous, Object? element),
  );
}

Object? _Stream_fold(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).fold<Object?>(
    values["initialValue"],
    values["combine"] as Object? Function(Object? previous, Object? element),
  );
}

Object? _Stream_join(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).join(values["separator"] as String);
}

Object? _Stream_contains(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).contains(values["needle"]);
}

Object? _Stream_forEach(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).forEach(
    values["action"] as void Function(Object? element),
  );
}

Object? _Stream_every(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).every(
    values["test"] as bool Function(Object? element),
  );
}

Object? _Stream_any(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).any(
    values["test"] as bool Function(Object? element),
  );
}

Object? _Stream_cast(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).cast<Object?>();
}

Object? _Stream_toList(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).toList();
}

Object? _Stream_toSet(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).toSet();
}

Object? _Stream_drain(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).drain<Object?>(
    values["futureValue"],
  );
}

Object? _Stream_take(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).take(values["count"] as int);
}

Object? _Stream_takeWhile(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).takeWhile(
    values["test"] as bool Function(Object? element),
  );
}

Object? _Stream_skip(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).skip(values["count"] as int);
}

Object? _Stream_skipWhile(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).skipWhile(
    values["test"] as bool Function(Object? element),
  );
}

Object? _Stream_distinct(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).distinct(
    values["equals"] as bool Function(Object? previous, Object? next)?,
  );
}

Object? _Stream_firstWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).firstWhere(
    values["test"] as bool Function(Object? element),
    orElse: values["orElse"] as Object? Function()?,
  );
}

Object? _Stream_lastWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).lastWhere(
    values["test"] as bool Function(Object? element),
    orElse: values["orElse"] as Object? Function()?,
  );
}

Object? _Stream_singleWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).singleWhere(
    values["test"] as bool Function(Object? element),
    orElse: values["orElse"] as Object? Function()?,
  );
}

Object? _Stream_elementAt(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).elementAt(values["index"] as int);
}

Object? _Stream_timeout(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Stream<Object?>).timeout(
    values["timeLimit"] as api2.Duration,
    onTimeout:
        values["onTimeout"] as void Function(api3.EventSink<Object?> sink)?,
  );
}

Object _createStream(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "empty":
      if (!values.containsKey("broadcast")) {
        return api3.Stream<Object?>.empty();
      }
      return api3.Stream<Object?>.empty(broadcast: values["broadcast"] as bool);
    case "value":
      return api3.Stream<Object?>.value(values["value"]);
    case "error":
      return api3.Stream<Object?>.error(
        values["error"] as Object,
        values["stackTrace"] as api2.StackTrace?,
      );
    case "fromFuture":
      return api3.Stream<Object?>.fromFuture(
        values["future"] as Future<Object?>,
      );
    case "fromFutures":
      return api3.Stream<Object?>.fromFutures(
        values["futures"] as Iterable<Future<Object?>>,
      );
    case "fromIterable":
      return api3.Stream<Object?>.fromIterable(
        values["elements"] as Iterable<Object?>,
      );
    case "multi":
      return api3.Stream<Object?>.multi(
        values["onListen"]
            as void Function(api3.MultiStreamController<Object?> p0),
        isBroadcast: values["isBroadcast"] as bool,
      );
    case "periodic":
      return api3.Stream<Object?>.periodic(
        values["period"] as api2.Duration,
        values["computation"] as Object? Function(int computationCount)?,
      );
    case "eventTransformed":
      return api3.Stream<Object?>.eventTransformed(
        values["source"] as api3.Stream<Object?>,
        values["mapSink"]
            as api3.EventSink<Object?> Function(api3.EventSink<Object?> sink),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isStreamSubscription(Object value) =>
    value is api3.StreamSubscription<Object?>;
Object? _StreamSubscription_isPaused(Object value) =>
    (value as api3.StreamSubscription<Object?>).isPaused;
Object? _StreamSubscription_cancel(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.StreamSubscription<Object?>).cancel();
}

Object? _StreamSubscription_onData(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.StreamSubscription<Object?>).onData(
    values["handleData"] as void Function(Object? data)?,
  );
  return null;
}

Object? _StreamSubscription_onError(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.StreamSubscription<Object?>).onError(
    values["handleError"] as void Function(Object p0, [api2.StackTrace p1])?,
  );
  return null;
}

Object? _StreamSubscription_onDone(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.StreamSubscription<Object?>).onDone(
    values["handleDone"] as void Function()?,
  );
  return null;
}

Object? _StreamSubscription_pause(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.StreamSubscription<Object?>).pause(
    values["resumeSignal"] as Future<void>?,
  );
  return null;
}

Object? _StreamSubscription_resume(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.StreamSubscription<Object?>).resume();
  return null;
}

Object? _StreamSubscription_asFuture(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.StreamSubscription<Object?>).asFuture<Object?>(
    values["futureValue"],
  );
}

Object _createStreamSubscription(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isStreamController(Object value) =>
    value is api3.StreamController<Object?>;
Object? _StreamController_done(Object value) =>
    (value as api3.StreamController<Object?>).done;
Object? _StreamController_onListen(Object value) =>
    (value as api3.StreamController<Object?>).onListen;
Object? _StreamController_onPause(Object value) =>
    (value as api3.StreamController<Object?>).onPause;
Object? _StreamController_onResume(Object value) =>
    (value as api3.StreamController<Object?>).onResume;
Object? _StreamController_onCancel(Object value) =>
    (value as api3.StreamController<Object?>).onCancel;
Object? _StreamController_stream(Object value) =>
    (value as api3.StreamController<Object?>).stream;
Object? _StreamController_sink(Object value) =>
    (value as api3.StreamController<Object?>).sink;
Object? _StreamController_isClosed(Object value) =>
    (value as api3.StreamController<Object?>).isClosed;
Object? _StreamController_isPaused(Object value) =>
    (value as api3.StreamController<Object?>).isPaused;
Object? _StreamController_hasListener(Object value) =>
    (value as api3.StreamController<Object?>).hasListener;
void _StreamController_set_onListen(Object receiver, Object? value) {
  (receiver as api3.StreamController<Object?>).onListen =
      value as void Function()?;
}

void _StreamController_set_onPause(Object receiver, Object? value) {
  (receiver as api3.StreamController<Object?>).onPause =
      value as void Function()?;
}

void _StreamController_set_onResume(Object receiver, Object? value) {
  (receiver as api3.StreamController<Object?>).onResume =
      value as void Function()?;
}

void _StreamController_set_onCancel(Object receiver, Object? value) {
  (receiver as api3.StreamController<Object?>).onCancel =
      value as api3.FutureOr<void> Function()?;
}

Object? _StreamController_add(Object receiver, Map<String, Object?> values) {
  (receiver as api3.StreamController<Object?>).add(values["event"]);
  return null;
}

Object? _StreamController_addError(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.StreamController<Object?>).addError(
    values["error"] as Object,
    values["stackTrace"] as api2.StackTrace?,
  );
  return null;
}

Object? _StreamController_close(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamController<Object?>).close();
}

Object? _StreamController_addStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.StreamController<Object?>).addStream(
    values["source"] as api3.Stream<Object?>,
    cancelOnError: values["cancelOnError"] as bool?,
  );
}

Object _createStreamController(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.StreamController<Object?>(
        onListen: values["onListen"] as void Function()?,
        onPause: values["onPause"] as void Function()?,
        onResume: values["onResume"] as void Function()?,
        onCancel: values["onCancel"] as api3.FutureOr<void> Function()?,
        sync: values["sync"] as bool,
      );
    case "broadcast":
      return api3.StreamController<Object?>.broadcast(
        onListen: values["onListen"] as void Function()?,
        onCancel: values["onCancel"] as void Function()?,
        sync: values["sync"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSynchronousStreamController(Object value) =>
    value is api3.SynchronousStreamController<Object?>;
Object? _SynchronousStreamController_onListen(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).onListen;
Object? _SynchronousStreamController_onPause(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).onPause;
Object? _SynchronousStreamController_onResume(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).onResume;
Object? _SynchronousStreamController_onCancel(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).onCancel;
Object? _SynchronousStreamController_stream(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).stream;
Object? _SynchronousStreamController_sink(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).sink;
Object? _SynchronousStreamController_isClosed(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).isClosed;
Object? _SynchronousStreamController_isPaused(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).isPaused;
Object? _SynchronousStreamController_hasListener(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).hasListener;
Object? _SynchronousStreamController_done(Object value) =>
    (value as api3.SynchronousStreamController<Object?>).done;
void _SynchronousStreamController_set_onListen(Object receiver, Object? value) {
  (receiver as api3.SynchronousStreamController<Object?>).onListen =
      value as void Function()?;
}

void _SynchronousStreamController_set_onPause(Object receiver, Object? value) {
  (receiver as api3.SynchronousStreamController<Object?>).onPause =
      value as void Function()?;
}

void _SynchronousStreamController_set_onResume(Object receiver, Object? value) {
  (receiver as api3.SynchronousStreamController<Object?>).onResume =
      value as void Function()?;
}

void _SynchronousStreamController_set_onCancel(Object receiver, Object? value) {
  (receiver as api3.SynchronousStreamController<Object?>).onCancel =
      value as api3.FutureOr<void> Function()?;
}

Object? _SynchronousStreamController_add(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SynchronousStreamController<Object?>).add(values["data"]);
  return null;
}

Object? _SynchronousStreamController_addError(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SynchronousStreamController<Object?>).addError(
    values["error"] as Object,
    values["stackTrace"] as api2.StackTrace?,
  );
  return null;
}

Object? _SynchronousStreamController_close(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.SynchronousStreamController<Object?>).close();
}

Object? _SynchronousStreamController_addStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.SynchronousStreamController<Object?>).addStream(
    values["source"] as api3.Stream<Object?>,
    cancelOnError: values["cancelOnError"] as bool?,
  );
}

Object _createSynchronousStreamController(
  String ctor,
  Map<String, Object?> values,
) => throw ArgumentError('Abstract object has no constructor');
bool _isMultiStreamController(Object value) =>
    value is api3.MultiStreamController<Object?>;
Object? _MultiStreamController_onListen(Object value) =>
    (value as api3.MultiStreamController<Object?>).onListen;
Object? _MultiStreamController_onPause(Object value) =>
    (value as api3.MultiStreamController<Object?>).onPause;
Object? _MultiStreamController_onResume(Object value) =>
    (value as api3.MultiStreamController<Object?>).onResume;
Object? _MultiStreamController_onCancel(Object value) =>
    (value as api3.MultiStreamController<Object?>).onCancel;
Object? _MultiStreamController_stream(Object value) =>
    (value as api3.MultiStreamController<Object?>).stream;
Object? _MultiStreamController_sink(Object value) =>
    (value as api3.MultiStreamController<Object?>).sink;
Object? _MultiStreamController_isClosed(Object value) =>
    (value as api3.MultiStreamController<Object?>).isClosed;
Object? _MultiStreamController_isPaused(Object value) =>
    (value as api3.MultiStreamController<Object?>).isPaused;
Object? _MultiStreamController_hasListener(Object value) =>
    (value as api3.MultiStreamController<Object?>).hasListener;
Object? _MultiStreamController_done(Object value) =>
    (value as api3.MultiStreamController<Object?>).done;
void _MultiStreamController_set_onListen(Object receiver, Object? value) {
  (receiver as api3.MultiStreamController<Object?>).onListen =
      value as void Function()?;
}

void _MultiStreamController_set_onPause(Object receiver, Object? value) {
  (receiver as api3.MultiStreamController<Object?>).onPause =
      value as void Function()?;
}

void _MultiStreamController_set_onResume(Object receiver, Object? value) {
  (receiver as api3.MultiStreamController<Object?>).onResume =
      value as void Function()?;
}

void _MultiStreamController_set_onCancel(Object receiver, Object? value) {
  (receiver as api3.MultiStreamController<Object?>).onCancel =
      value as api3.FutureOr<void> Function()?;
}

Object? _MultiStreamController_add(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.MultiStreamController<Object?>).add(values["event"]);
  return null;
}

Object? _MultiStreamController_addError(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.MultiStreamController<Object?>).addError(
    values["error"] as Object,
    values["stackTrace"] as api2.StackTrace?,
  );
  return null;
}

Object? _MultiStreamController_close(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.MultiStreamController<Object?>).close();
}

Object? _MultiStreamController_addStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.MultiStreamController<Object?>).addStream(
    values["source"] as api3.Stream<Object?>,
    cancelOnError: values["cancelOnError"] as bool?,
  );
}

Object? _MultiStreamController_addSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.MultiStreamController<Object?>).addSync(values["value"]);
  return null;
}

Object? _MultiStreamController_addErrorSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.MultiStreamController<Object?>).addErrorSync(
    values["error"] as Object,
    values["stackTrace"] as api2.StackTrace?,
  );
  return null;
}

Object? _MultiStreamController_closeSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.MultiStreamController<Object?>).closeSync();
  return null;
}

Object _createMultiStreamController(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isDuration(Object value) => value is api2.Duration;
Object? _Duration_inDays(Object value) => (value as api2.Duration).inDays;
Object? _Duration_inHours(Object value) => (value as api2.Duration).inHours;
Object? _Duration_inMinutes(Object value) => (value as api2.Duration).inMinutes;
Object? _Duration_inSeconds(Object value) => (value as api2.Duration).inSeconds;
Object? _Duration_inMilliseconds(Object value) =>
    (value as api2.Duration).inMilliseconds;
Object? _Duration_inMicroseconds(Object value) =>
    (value as api2.Duration).inMicroseconds;
Object? _Duration_static_zero() => api2.Duration.zero;
Object _createDuration(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api2.Duration(
        days: values["days"] as int,
        hours: values["hours"] as int,
        minutes: values["minutes"] as int,
        seconds: values["seconds"] as int,
        milliseconds: values["milliseconds"] as int,
        microseconds: values["microseconds"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isStackTrace(Object value) => value is api2.StackTrace;
Object? _StackTrace_static_current() => api2.StackTrace.current;
Object? _StackTrace_static_empty() => api2.StackTrace.empty;
Object? _StackTrace_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api2.StackTrace).toString();
}

Object _createStackTrace(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isSink(Object value) => value is api2.Sink<Object?>;
Object _createSink(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isEventSink(Object value) => value is api3.EventSink<Object?>;
Object? _EventSink_add(Object receiver, Map<String, Object?> values) {
  (receiver as api3.EventSink<Object?>).add(values["event"]);
  return null;
}

Object? _EventSink_addError(Object receiver, Map<String, Object?> values) {
  (receiver as api3.EventSink<Object?>).addError(
    values["error"] as Object,
    values["stackTrace"] as api2.StackTrace?,
  );
  return null;
}

Object? _EventSink_close(Object receiver, Map<String, Object?> values) {
  (receiver as api3.EventSink<Object?>).close();
  return null;
}

Object _createEventSink(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _EventSinkProxy(
        values["@call:add"] as void Function(Object? event),
        values["@call:addError"]
            as void Function(Object error, [api2.StackTrace? stackTrace]),
        values["@call:close"] as void Function(),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isStreamConsumer(Object value) => value is api3.StreamConsumer<Object?>;
Object? _StreamConsumer_addStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.StreamConsumer<Object?>).addStream(
    values["stream"] as api3.Stream<Object?>,
  );
}

Object? _StreamConsumer_close(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamConsumer<Object?>).close();
}

Object _createStreamConsumer(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _StreamConsumerProxy(
        values["@call:addStream"]
            as Future<Object?> Function(api3.Stream<Object?> stream),
        values["@call:close"] as Future<Object?> Function(),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isStreamSink(Object value) => value is api3.StreamSink<Object?>;
Object? _StreamSink_done(Object value) =>
    (value as api3.StreamSink<Object?>).done;
Object? _StreamSink_add(Object receiver, Map<String, Object?> values) {
  (receiver as api3.StreamSink<Object?>).add(values["event"]);
  return null;
}

Object? _StreamSink_addError(Object receiver, Map<String, Object?> values) {
  (receiver as api3.StreamSink<Object?>).addError(
    values["error"] as Object,
    values["stackTrace"] as api2.StackTrace?,
  );
  return null;
}

Object? _StreamSink_close(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamSink<Object?>).close();
}

Object? _StreamSink_addStream(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamSink<Object?>).addStream(
    values["stream"] as api3.Stream<Object?>,
  );
}

Object _createStreamSink(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isStreamTransformer(Object value) =>
    value is api3.StreamTransformer<Object?, Object?>;
Object? _StreamTransformer_castFrom(Map<String, Object?> values) {
  return api3.StreamTransformer.castFrom<Object?, Object?, Object?, Object?>(
    values["source"] as api3.StreamTransformer<Object?, Object?>,
  );
}

Object? _StreamTransformer_bind(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamTransformer<Object?, Object?>).bind(
    values["stream"] as api3.Stream<Object?>,
  );
}

Object? _StreamTransformer_cast(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamTransformer<Object?, Object?>)
      .cast<Object?, Object?>();
}

Object _createStreamTransformer(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.StreamTransformer<Object?, Object?>(
        values["onListen"]
            as api3.StreamSubscription<Object?> Function(
              api3.Stream<Object?> stream,
              bool cancelOnError,
            ),
      );
    case "fromHandlers":
      return api3.StreamTransformer<Object?, Object?>.fromHandlers(
        handleData:
            values["handleData"]
                as void Function(Object? data, api3.EventSink<Object?> sink)?,
        handleError:
            values["handleError"]
                as void Function(
                  Object error,
                  api2.StackTrace stackTrace,
                  api3.EventSink<Object?> sink,
                )?,
        handleDone:
            values["handleDone"]
                as void Function(api3.EventSink<Object?> sink)?,
      );
    case "fromBind":
      return api3.StreamTransformer<Object?, Object?>.fromBind(
        values["bind"]
            as api3.Stream<Object?> Function(api3.Stream<Object?> p0),
      );
    case '@implementation':
      return _StreamTransformerProxy(
        values["@call:bind"]
            as api3.Stream<Object?> Function(api3.Stream<Object?> stream),
        values["@call:cast"]
            as api3.StreamTransformer<RS, RT>
            Function<RS extends Object?, RT extends Object?>(),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isStreamTransformerBase(Object value) =>
    value is api3.StreamTransformerBase<Object?, Object?>;
Object? _StreamTransformerBase_bind(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.StreamTransformerBase<Object?, Object?>).bind(
    values["stream"] as api3.Stream<Object?>,
  );
}

Object? _StreamTransformerBase_cast(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.StreamTransformerBase<Object?, Object?>)
      .cast<Object?, Object?>();
}

Object _createStreamTransformerBase(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _StreamTransformerBaseProxy(
        values["@call:bind"]
            as api3.Stream<Object?> Function(api3.Stream<Object?> stream),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isStreamView(Object value) => value is api3.StreamView<Object?>;
Object? _StreamView_isBroadcast(Object value) =>
    (value as api3.StreamView<Object?>).isBroadcast;
Object? _StreamView_length(Object value) =>
    (value as api3.StreamView<Object?>).length;
Object? _StreamView_isEmpty(Object value) =>
    (value as api3.StreamView<Object?>).isEmpty;
Object? _StreamView_first(Object value) =>
    (value as api3.StreamView<Object?>).first;
Object? _StreamView_last(Object value) =>
    (value as api3.StreamView<Object?>).last;
Object? _StreamView_single(Object value) =>
    (value as api3.StreamView<Object?>).single;
Object? _StreamView_asBroadcastStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.StreamView<Object?>).asBroadcastStream(
    onCancel:
        values["onCancel"]
            as void Function(api3.StreamSubscription<Object?> subscription)?,
    onListen:
        values["onListen"]
            as void Function(api3.StreamSubscription<Object?> subscription)?,
  );
}

Object? _StreamView_listen(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).listen(
    values["onData"] as void Function(Object? value)?,
    cancelOnError: values["cancelOnError"] as bool?,
    onDone: values["onDone"] as void Function()?,
    onError:
        values["onError"] as void Function(Object p0, [api2.StackTrace p1])?,
  );
}

Object? _StreamView_where(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).where(
    values["test"] as bool Function(Object? event),
  );
}

Object? _StreamView_map(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).map<Object?>(
    values["convert"] as Object? Function(Object? event),
  );
}

Object? _StreamView_asyncMap(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).asyncMap<Object?>(
    values["convert"] as api3.FutureOr<Object?> Function(Object? event),
  );
}

Object? _StreamView_asyncExpand(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).asyncExpand<Object?>(
    values["convert"] as api3.Stream<Object?>? Function(Object? event),
  );
}

Object? _StreamView_handleError(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).handleError(
    values["onError"] as void Function(Object p0, [api2.StackTrace p1]),
    test: values["test"] as bool Function(Object? error)?,
  );
}

Object? _StreamView_expand(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).expand<Object?>(
    values["convert"] as Iterable<Object?> Function(Object? element),
  );
}

Object? _StreamView_pipe(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).pipe(
    values["streamConsumer"] as api3.StreamConsumer<Object?>,
  );
}

Object? _StreamView_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).transform<Object?>(
    values["streamTransformer"] as api3.StreamTransformer<Object?, Object?>,
  );
}

Object? _StreamView_reduce(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).reduce(
    values["combine"] as Object? Function(Object? previous, Object? element),
  );
}

Object? _StreamView_fold(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).fold<Object?>(
    values["initialValue"],
    values["combine"] as Object? Function(Object? previous, Object? element),
  );
}

Object? _StreamView_join(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).join(
    values["separator"] as String,
  );
}

Object? _StreamView_contains(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).contains(values["needle"]);
}

Object? _StreamView_forEach(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).forEach(
    values["action"] as void Function(Object? element),
  );
}

Object? _StreamView_every(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).every(
    values["test"] as bool Function(Object? element),
  );
}

Object? _StreamView_any(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).any(
    values["test"] as bool Function(Object? element),
  );
}

Object? _StreamView_cast(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).cast<Object?>();
}

Object? _StreamView_toList(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).toList();
}

Object? _StreamView_toSet(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).toSet();
}

Object? _StreamView_drain(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).drain<Object?>(
    values["futureValue"],
  );
}

Object? _StreamView_take(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).take(values["count"] as int);
}

Object? _StreamView_takeWhile(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).takeWhile(
    values["test"] as bool Function(Object? element),
  );
}

Object? _StreamView_skip(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).skip(values["count"] as int);
}

Object? _StreamView_skipWhile(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).skipWhile(
    values["test"] as bool Function(Object? element),
  );
}

Object? _StreamView_distinct(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).distinct(
    values["equals"] as bool Function(Object? previous, Object? next)?,
  );
}

Object? _StreamView_firstWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).firstWhere(
    values["test"] as bool Function(Object? element),
    orElse: values["orElse"] as Object? Function()?,
  );
}

Object? _StreamView_lastWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).lastWhere(
    values["test"] as bool Function(Object? element),
    orElse: values["orElse"] as Object? Function()?,
  );
}

Object? _StreamView_singleWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).singleWhere(
    values["test"] as bool Function(Object? element),
    orElse: values["orElse"] as Object? Function()?,
  );
}

Object? _StreamView_elementAt(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).elementAt(
    values["index"] as int,
  );
}

Object? _StreamView_timeout(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamView<Object?>).timeout(
    values["timeLimit"] as api2.Duration,
    onTimeout:
        values["onTimeout"] as void Function(api3.EventSink<Object?> sink)?,
  );
}

Object _createStreamView(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.StreamView<Object?>(values["stream"] as api3.Stream<Object?>);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isStreamIterator(Object value) => value is api3.StreamIterator<Object?>;
Object? _StreamIterator_current(Object value) =>
    (value as api3.StreamIterator<Object?>).current;
Object? _StreamIterator_moveNext(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamIterator<Object?>).moveNext();
}

Object? _StreamIterator_cancel(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.StreamIterator<Object?>).cancel();
}

Object _createStreamIterator(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.StreamIterator<Object?>(
        values["stream"] as api3.Stream<Object?>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAsyncSnapshot(Object value) => value is api.AsyncSnapshot<Object?>;
Object? _AsyncSnapshot_connectionState(Object value) =>
    (value as api.AsyncSnapshot<Object?>).connectionState;
Object? _AsyncSnapshot_data(Object value) =>
    (value as api.AsyncSnapshot<Object?>).data;
Object? _AsyncSnapshot_error(Object value) =>
    (value as api.AsyncSnapshot<Object?>).error;
Object? _AsyncSnapshot_stackTrace(Object value) =>
    (value as api.AsyncSnapshot<Object?>).stackTrace;
Object? _AsyncSnapshot_hasData(Object value) =>
    (value as api.AsyncSnapshot<Object?>).hasData;
Object? _AsyncSnapshot_hasError(Object value) =>
    (value as api.AsyncSnapshot<Object?>).hasError;
Object? _AsyncSnapshot_requireData(Object value) =>
    (value as api.AsyncSnapshot<Object?>).requireData;
Object? _AsyncSnapshot_inState(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AsyncSnapshot<Object?>).inState(
    values["state"] as api.ConnectionState,
  );
}

Object _createAsyncSnapshot(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "nothing":
      return api.AsyncSnapshot<Object?>.nothing();
    case "waiting":
      return api.AsyncSnapshot<Object?>.waiting();
    case "withData":
      return api.AsyncSnapshot<Object?>.withData(
        values["state"] as api.ConnectionState,
        values["data"],
      );
    case "withError":
      if (!values.containsKey("stackTrace")) {
        return api.AsyncSnapshot<Object?>.withError(
          values["state"] as api.ConnectionState,
          values["error"] as Object,
        );
      }
      return api.AsyncSnapshot<Object?>.withError(
        values["state"] as api.ConnectionState,
        values["error"] as Object,
        values["stackTrace"] as api2.StackTrace,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _StreamBuilderHost extends FlaxWidgetHost {
  _StreamBuilderHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createStreamBuilder(node.ctor, values);
}

api.Widget _createStreamBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.StreamBuilder<Object?>(
        key: values["key"] as api.Key?,
        initialData: values["initialData"],
        stream: values["stream"] as api3.Stream<Object?>?,
        builder:
            values["builder"]
                as api.Widget Function(
                  api.BuildContext context,
                  api.AsyncSnapshot<Object?> snapshot,
                ),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isWidgetStateProperty(Object value) => value is api.WidgetStateProperty;
Object? _WidgetStateProperty_resolve(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.WidgetStateProperty).resolve(
    values["states"] as Set<api.WidgetState>,
  );
}

Object _createWidgetStateProperty(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');

class _ValueListenableBuilderHost extends FlaxWidgetHost {
  _ValueListenableBuilderHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createValueListenableBuilder(node.ctor, values);
}

api.Widget _createValueListenableBuilder(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.ValueListenableBuilder<Object?>(
        key: values["key"] as api.Key?,
        valueListenable:
            values["valueListenable"] as api7.ValueListenable<Object?>,
        builder:
            values["builder"]
                as api.Widget Function(
                  api.BuildContext context,
                  Object? value,
                  api.Widget? child,
                ),
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ListenableBuilderHost extends FlaxWidgetHost {
  _ListenableBuilderHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createListenableBuilder(node.ctor, values);
}

api.Widget _createListenableBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ListenableBuilder(
        key: values["key"] as api.Key?,
        listenable: values["listenable"] as api.Listenable,
        builder:
            values["builder"]
                as api.Widget Function(
                  api.BuildContext context,
                  api.Widget? child,
                ),
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isListenable(Object value) => value is api.Listenable;
Object? _Listenable_addListener(Object receiver, Map<String, Object?> values) {
  (receiver as api.Listenable).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _Listenable_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Listenable).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object _createListenable(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isValueListenable(Object value) => value is api7.ValueListenable<Object?>;
Object? _ValueListenable_value(Object value) =>
    (value as api7.ValueListenable<Object?>).value;
Object? _ValueListenable_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api7.ValueListenable<Object?>).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _ValueListenable_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api7.ValueListenable<Object?>).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object _createValueListenable(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _ValueListenableProxy(
        values["@call:addListener"] as void Function(void Function() listener),
        values["@call:removeListener"]
            as void Function(void Function() listener),
        values["@get:value"] as Object? Function(),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFittedSizes(Object value) => value is api.FittedSizes;
Object? _FittedSizes_source(Object value) => (value as api.FittedSizes).source;
Object? _FittedSizes_destination(Object value) =>
    (value as api.FittedSizes).destination;
Object _createFittedSizes(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isNavigatorObserver(Object value) => value is api.NavigatorObserver;
Object _createNavigatorObserver(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFlaxNavigatorObserver(Object value) =>
    value is api5.FlaxNavigatorObserver;
Object _createFlaxNavigatorObserver(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api5.FlaxNavigatorObserver();
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPreferredSizeWidget(Object value) => value is api.PreferredSizeWidget;

class _PreferredSizeHost extends FlaxWidgetHost
    implements api.PreferredSizeWidget {
  _PreferredSizeHost(super.node);
  @override
  api.Size get preferredSize =>
      (configuration as api.PreferredSize).preferredSize;
  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createPreferredSize(node.ctor, values);
}

api.Widget _createPreferredSize(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.PreferredSize(
        key: values["key"] as api.Key?,
        preferredSize: values["preferredSize"] as api.Size,
        child: values["child"] as api.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ContainerHost extends FlaxWidgetHost {
  _ContainerHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createContainer(node.ctor, values);
}

api.Widget _createContainer(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Container(
        key: values["key"] as api.Key?,
        alignment: values["alignment"] as api.AlignmentGeometry?,
        padding: values["padding"] as api.EdgeInsetsGeometry?,
        color: values["color"] as api.Color?,
        isAntiAlias: values["isAntiAlias"] as bool,
        decoration: values["decoration"] as api.Decoration?,
        foregroundDecoration: values["foregroundDecoration"] as api.Decoration?,
        width: values["width"] as double?,
        height: values["height"] as double?,
        constraints: values["constraints"] as api.BoxConstraints?,
        margin: values["margin"] as api.EdgeInsetsGeometry?,
        child: values["child"] as api.Widget?,
        clipBehavior: values["clipBehavior"] as api.Clip,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _DecoratedBoxHost extends FlaxWidgetHost {
  _DecoratedBoxHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createDecoratedBox(node.ctor, values);
}

api.Widget _createDecoratedBox(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.DecoratedBox(
        key: values["key"] as api.Key?,
        decoration: values["decoration"] as api.Decoration,
        position: values["position"] as api.DecorationPosition,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isDecoration(Object value) => value is api.Decoration;
Object _createDecoration(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isBoxBorder(Object value) => value is api.BoxBorder;
Object _createBoxBorder(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isBorderRadiusGeometry(Object value) => value is api.BorderRadiusGeometry;
Object _createBorderRadiusGeometry(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isEdgeInsetsGeometry(Object value) => value is api.EdgeInsetsGeometry;
Object _createEdgeInsetsGeometry(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isBoxDecoration(Object value) => value is api.BoxDecoration;
Object? _BoxDecoration_color(Object value) =>
    (value as api.BoxDecoration).color;
Object? _BoxDecoration_border(Object value) =>
    (value as api.BoxDecoration).border;
Object? _BoxDecoration_borderRadius(Object value) =>
    (value as api.BoxDecoration).borderRadius;
Object? _BoxDecoration_shape(Object value) =>
    (value as api.BoxDecoration).shape;
Object? _BoxDecoration_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.BoxDecoration).copyWith(
    border: values["border"] as api.BoxBorder?,
    borderRadius: values["borderRadius"] as api.BorderRadiusGeometry?,
    color: values["color"] as api.Color?,
    shape: values["shape"] as api.BoxShape?,
  );
}

Object _createBoxDecoration(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.BoxDecoration(
        color: values["color"] as api.Color?,
        border: values["border"] as api.BoxBorder?,
        borderRadius: values["borderRadius"] as api.BorderRadiusGeometry?,
        shape: values["shape"] as api.BoxShape,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isBorderSide(Object value) => value is api.BorderSide;
Object? _BorderSide_color(Object value) => (value as api.BorderSide).color;
Object? _BorderSide_width(Object value) => (value as api.BorderSide).width;
Object? _BorderSide_style(Object value) => (value as api.BorderSide).style;
Object? _BorderSide_strokeAlign(Object value) =>
    (value as api.BorderSide).strokeAlign;
Object? _BorderSide_static_none() => api.BorderSide.none;
Object? _BorderSide_static_strokeAlignInside() =>
    api.BorderSide.strokeAlignInside;
Object? _BorderSide_static_strokeAlignCenter() =>
    api.BorderSide.strokeAlignCenter;
Object? _BorderSide_static_strokeAlignOutside() =>
    api.BorderSide.strokeAlignOutside;
Object? _BorderSide_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.BorderSide).copyWith(
    color: values["color"] as api.Color?,
    strokeAlign: values["strokeAlign"] as double?,
    style: values["style"] as api.BorderStyle?,
    width: values["width"] as double?,
  );
}

Object _createBorderSide(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("color")) {
        return api.BorderSide(
          width: values["width"] as double,
          style: values["style"] as api.BorderStyle,
          strokeAlign: values["strokeAlign"] as double,
        );
      }
      return api.BorderSide(
        color: values["color"] as api.Color,
        width: values["width"] as double,
        style: values["style"] as api.BorderStyle,
        strokeAlign: values["strokeAlign"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isBorder(Object value) => value is api.Border;
Object? _Border_top(Object value) => (value as api.Border).top;
Object? _Border_right(Object value) => (value as api.Border).right;
Object? _Border_bottom(Object value) => (value as api.Border).bottom;
Object? _Border_left(Object value) => (value as api.Border).left;
Object? _Border_isUniform(Object value) => (value as api.Border).isUniform;
Object _createBorder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("top")) {
        if (!values.containsKey("right")) {
          if (!values.containsKey("bottom")) {
            if (!values.containsKey("left")) {
              return api.Border();
            }
            return api.Border(left: values["left"] as api.BorderSide);
          }
          if (!values.containsKey("left")) {
            return api.Border(bottom: values["bottom"] as api.BorderSide);
          }
          return api.Border(
            bottom: values["bottom"] as api.BorderSide,
            left: values["left"] as api.BorderSide,
          );
        }
        if (!values.containsKey("bottom")) {
          if (!values.containsKey("left")) {
            return api.Border(right: values["right"] as api.BorderSide);
          }
          return api.Border(
            right: values["right"] as api.BorderSide,
            left: values["left"] as api.BorderSide,
          );
        }
        if (!values.containsKey("left")) {
          return api.Border(
            right: values["right"] as api.BorderSide,
            bottom: values["bottom"] as api.BorderSide,
          );
        }
        return api.Border(
          right: values["right"] as api.BorderSide,
          bottom: values["bottom"] as api.BorderSide,
          left: values["left"] as api.BorderSide,
        );
      }
      if (!values.containsKey("right")) {
        if (!values.containsKey("bottom")) {
          if (!values.containsKey("left")) {
            return api.Border(top: values["top"] as api.BorderSide);
          }
          return api.Border(
            top: values["top"] as api.BorderSide,
            left: values["left"] as api.BorderSide,
          );
        }
        if (!values.containsKey("left")) {
          return api.Border(
            top: values["top"] as api.BorderSide,
            bottom: values["bottom"] as api.BorderSide,
          );
        }
        return api.Border(
          top: values["top"] as api.BorderSide,
          bottom: values["bottom"] as api.BorderSide,
          left: values["left"] as api.BorderSide,
        );
      }
      if (!values.containsKey("bottom")) {
        if (!values.containsKey("left")) {
          return api.Border(
            top: values["top"] as api.BorderSide,
            right: values["right"] as api.BorderSide,
          );
        }
        return api.Border(
          top: values["top"] as api.BorderSide,
          right: values["right"] as api.BorderSide,
          left: values["left"] as api.BorderSide,
        );
      }
      if (!values.containsKey("left")) {
        return api.Border(
          top: values["top"] as api.BorderSide,
          right: values["right"] as api.BorderSide,
          bottom: values["bottom"] as api.BorderSide,
        );
      }
      return api.Border(
        top: values["top"] as api.BorderSide,
        right: values["right"] as api.BorderSide,
        bottom: values["bottom"] as api.BorderSide,
        left: values["left"] as api.BorderSide,
      );
    case "all":
      if (!values.containsKey("color")) {
        return api.Border.all(
          width: values["width"] as double,
          style: values["style"] as api.BorderStyle,
          strokeAlign: values["strokeAlign"] as double,
        );
      }
      return api.Border.all(
        color: values["color"] as api.Color,
        width: values["width"] as double,
        style: values["style"] as api.BorderStyle,
        strokeAlign: values["strokeAlign"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isBorderDirectional(Object value) => value is api.BorderDirectional;
Object? _BorderDirectional_top(Object value) =>
    (value as api.BorderDirectional).top;
Object? _BorderDirectional_start(Object value) =>
    (value as api.BorderDirectional).start;
Object? _BorderDirectional_end(Object value) =>
    (value as api.BorderDirectional).end;
Object? _BorderDirectional_bottom(Object value) =>
    (value as api.BorderDirectional).bottom;
Object? _BorderDirectional_isUniform(Object value) =>
    (value as api.BorderDirectional).isUniform;
Object _createBorderDirectional(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("top")) {
        if (!values.containsKey("start")) {
          if (!values.containsKey("end")) {
            if (!values.containsKey("bottom")) {
              return api.BorderDirectional();
            }
            return api.BorderDirectional(
              bottom: values["bottom"] as api.BorderSide,
            );
          }
          if (!values.containsKey("bottom")) {
            return api.BorderDirectional(end: values["end"] as api.BorderSide);
          }
          return api.BorderDirectional(
            end: values["end"] as api.BorderSide,
            bottom: values["bottom"] as api.BorderSide,
          );
        }
        if (!values.containsKey("end")) {
          if (!values.containsKey("bottom")) {
            return api.BorderDirectional(
              start: values["start"] as api.BorderSide,
            );
          }
          return api.BorderDirectional(
            start: values["start"] as api.BorderSide,
            bottom: values["bottom"] as api.BorderSide,
          );
        }
        if (!values.containsKey("bottom")) {
          return api.BorderDirectional(
            start: values["start"] as api.BorderSide,
            end: values["end"] as api.BorderSide,
          );
        }
        return api.BorderDirectional(
          start: values["start"] as api.BorderSide,
          end: values["end"] as api.BorderSide,
          bottom: values["bottom"] as api.BorderSide,
        );
      }
      if (!values.containsKey("start")) {
        if (!values.containsKey("end")) {
          if (!values.containsKey("bottom")) {
            return api.BorderDirectional(top: values["top"] as api.BorderSide);
          }
          return api.BorderDirectional(
            top: values["top"] as api.BorderSide,
            bottom: values["bottom"] as api.BorderSide,
          );
        }
        if (!values.containsKey("bottom")) {
          return api.BorderDirectional(
            top: values["top"] as api.BorderSide,
            end: values["end"] as api.BorderSide,
          );
        }
        return api.BorderDirectional(
          top: values["top"] as api.BorderSide,
          end: values["end"] as api.BorderSide,
          bottom: values["bottom"] as api.BorderSide,
        );
      }
      if (!values.containsKey("end")) {
        if (!values.containsKey("bottom")) {
          return api.BorderDirectional(
            top: values["top"] as api.BorderSide,
            start: values["start"] as api.BorderSide,
          );
        }
        return api.BorderDirectional(
          top: values["top"] as api.BorderSide,
          start: values["start"] as api.BorderSide,
          bottom: values["bottom"] as api.BorderSide,
        );
      }
      if (!values.containsKey("bottom")) {
        return api.BorderDirectional(
          top: values["top"] as api.BorderSide,
          start: values["start"] as api.BorderSide,
          end: values["end"] as api.BorderSide,
        );
      }
      return api.BorderDirectional(
        top: values["top"] as api.BorderSide,
        start: values["start"] as api.BorderSide,
        end: values["end"] as api.BorderSide,
        bottom: values["bottom"] as api.BorderSide,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRadius(Object value) => value is api.Radius;
Object? _Radius_x(Object value) => (value as api.Radius).x;
Object? _Radius_y(Object value) => (value as api.Radius).y;
Object? _Radius_static_zero() => api.Radius.zero;
Object _createRadius(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "circular":
      return api.Radius.circular(values["radius"] as double);
    case "elliptical":
      return api.Radius.elliptical(
        values["x"] as double,
        values["y"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isBorderRadius(Object value) => value is api.BorderRadius;
Object? _BorderRadius_topLeft(Object value) =>
    (value as api.BorderRadius).topLeft;
Object? _BorderRadius_topRight(Object value) =>
    (value as api.BorderRadius).topRight;
Object? _BorderRadius_bottomLeft(Object value) =>
    (value as api.BorderRadius).bottomLeft;
Object? _BorderRadius_bottomRight(Object value) =>
    (value as api.BorderRadius).bottomRight;
Object? _BorderRadius_static_zero() => api.BorderRadius.zero;
Object? _BorderRadius_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.BorderRadius).copyWith(
    bottomLeft: values["bottomLeft"] as api.Radius?,
    bottomRight: values["bottomRight"] as api.Radius?,
    topLeft: values["topLeft"] as api.Radius?,
    topRight: values["topRight"] as api.Radius?,
  );
}

Object _createBorderRadius(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "all":
      return api.BorderRadius.all(values["radius"] as api.Radius);
    case "circular":
      return api.BorderRadius.circular(values["radius"] as double);
    case "only":
      if (!values.containsKey("topLeft")) {
        if (!values.containsKey("topRight")) {
          if (!values.containsKey("bottomLeft")) {
            if (!values.containsKey("bottomRight")) {
              return api.BorderRadius.only();
            }
            return api.BorderRadius.only(
              bottomRight: values["bottomRight"] as api.Radius,
            );
          }
          if (!values.containsKey("bottomRight")) {
            return api.BorderRadius.only(
              bottomLeft: values["bottomLeft"] as api.Radius,
            );
          }
          return api.BorderRadius.only(
            bottomLeft: values["bottomLeft"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomLeft")) {
          if (!values.containsKey("bottomRight")) {
            return api.BorderRadius.only(
              topRight: values["topRight"] as api.Radius,
            );
          }
          return api.BorderRadius.only(
            topRight: values["topRight"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomRight")) {
          return api.BorderRadius.only(
            topRight: values["topRight"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        return api.BorderRadius.only(
          topRight: values["topRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
        );
      }
      if (!values.containsKey("topRight")) {
        if (!values.containsKey("bottomLeft")) {
          if (!values.containsKey("bottomRight")) {
            return api.BorderRadius.only(
              topLeft: values["topLeft"] as api.Radius,
            );
          }
          return api.BorderRadius.only(
            topLeft: values["topLeft"] as api.Radius,
            bottomRight: values["bottomRight"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomRight")) {
          return api.BorderRadius.only(
            topLeft: values["topLeft"] as api.Radius,
            bottomLeft: values["bottomLeft"] as api.Radius,
          );
        }
        return api.BorderRadius.only(
          topLeft: values["topLeft"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomLeft")) {
        if (!values.containsKey("bottomRight")) {
          return api.BorderRadius.only(
            topLeft: values["topLeft"] as api.Radius,
            topRight: values["topRight"] as api.Radius,
          );
        }
        return api.BorderRadius.only(
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomRight: values["bottomRight"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomRight")) {
        return api.BorderRadius.only(
          topLeft: values["topLeft"] as api.Radius,
          topRight: values["topRight"] as api.Radius,
          bottomLeft: values["bottomLeft"] as api.Radius,
        );
      }
      return api.BorderRadius.only(
        topLeft: values["topLeft"] as api.Radius,
        topRight: values["topRight"] as api.Radius,
        bottomLeft: values["bottomLeft"] as api.Radius,
        bottomRight: values["bottomRight"] as api.Radius,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isBorderRadiusDirectional(Object value) =>
    value is api.BorderRadiusDirectional;
Object? _BorderRadiusDirectional_topStart(Object value) =>
    (value as api.BorderRadiusDirectional).topStart;
Object? _BorderRadiusDirectional_topEnd(Object value) =>
    (value as api.BorderRadiusDirectional).topEnd;
Object? _BorderRadiusDirectional_bottomStart(Object value) =>
    (value as api.BorderRadiusDirectional).bottomStart;
Object? _BorderRadiusDirectional_bottomEnd(Object value) =>
    (value as api.BorderRadiusDirectional).bottomEnd;
Object? _BorderRadiusDirectional_static_zero() =>
    api.BorderRadiusDirectional.zero;
Object _createBorderRadiusDirectional(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "all":
      return api.BorderRadiusDirectional.all(values["radius"] as api.Radius);
    case "circular":
      return api.BorderRadiusDirectional.circular(values["radius"] as double);
    case "only":
      if (!values.containsKey("topStart")) {
        if (!values.containsKey("topEnd")) {
          if (!values.containsKey("bottomStart")) {
            if (!values.containsKey("bottomEnd")) {
              return api.BorderRadiusDirectional.only();
            }
            return api.BorderRadiusDirectional.only(
              bottomEnd: values["bottomEnd"] as api.Radius,
            );
          }
          if (!values.containsKey("bottomEnd")) {
            return api.BorderRadiusDirectional.only(
              bottomStart: values["bottomStart"] as api.Radius,
            );
          }
          return api.BorderRadiusDirectional.only(
            bottomStart: values["bottomStart"] as api.Radius,
            bottomEnd: values["bottomEnd"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomStart")) {
          if (!values.containsKey("bottomEnd")) {
            return api.BorderRadiusDirectional.only(
              topEnd: values["topEnd"] as api.Radius,
            );
          }
          return api.BorderRadiusDirectional.only(
            topEnd: values["topEnd"] as api.Radius,
            bottomEnd: values["bottomEnd"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomEnd")) {
          return api.BorderRadiusDirectional.only(
            topEnd: values["topEnd"] as api.Radius,
            bottomStart: values["bottomStart"] as api.Radius,
          );
        }
        return api.BorderRadiusDirectional.only(
          topEnd: values["topEnd"] as api.Radius,
          bottomStart: values["bottomStart"] as api.Radius,
          bottomEnd: values["bottomEnd"] as api.Radius,
        );
      }
      if (!values.containsKey("topEnd")) {
        if (!values.containsKey("bottomStart")) {
          if (!values.containsKey("bottomEnd")) {
            return api.BorderRadiusDirectional.only(
              topStart: values["topStart"] as api.Radius,
            );
          }
          return api.BorderRadiusDirectional.only(
            topStart: values["topStart"] as api.Radius,
            bottomEnd: values["bottomEnd"] as api.Radius,
          );
        }
        if (!values.containsKey("bottomEnd")) {
          return api.BorderRadiusDirectional.only(
            topStart: values["topStart"] as api.Radius,
            bottomStart: values["bottomStart"] as api.Radius,
          );
        }
        return api.BorderRadiusDirectional.only(
          topStart: values["topStart"] as api.Radius,
          bottomStart: values["bottomStart"] as api.Radius,
          bottomEnd: values["bottomEnd"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomStart")) {
        if (!values.containsKey("bottomEnd")) {
          return api.BorderRadiusDirectional.only(
            topStart: values["topStart"] as api.Radius,
            topEnd: values["topEnd"] as api.Radius,
          );
        }
        return api.BorderRadiusDirectional.only(
          topStart: values["topStart"] as api.Radius,
          topEnd: values["topEnd"] as api.Radius,
          bottomEnd: values["bottomEnd"] as api.Radius,
        );
      }
      if (!values.containsKey("bottomEnd")) {
        return api.BorderRadiusDirectional.only(
          topStart: values["topStart"] as api.Radius,
          topEnd: values["topEnd"] as api.Radius,
          bottomStart: values["bottomStart"] as api.Radius,
        );
      }
      return api.BorderRadiusDirectional.only(
        topStart: values["topStart"] as api.Radius,
        topEnd: values["topEnd"] as api.Radius,
        bottomStart: values["bottomStart"] as api.Radius,
        bottomEnd: values["bottomEnd"] as api.Radius,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isEdgeInsetsDirectional(Object value) =>
    value is api.EdgeInsetsDirectional;
Object? _EdgeInsetsDirectional_start(Object value) =>
    (value as api.EdgeInsetsDirectional).start;
Object? _EdgeInsetsDirectional_top(Object value) =>
    (value as api.EdgeInsetsDirectional).top;
Object? _EdgeInsetsDirectional_end(Object value) =>
    (value as api.EdgeInsetsDirectional).end;
Object? _EdgeInsetsDirectional_bottom(Object value) =>
    (value as api.EdgeInsetsDirectional).bottom;
Object? _EdgeInsetsDirectional_static_zero() => api.EdgeInsetsDirectional.zero;
Object _createEdgeInsetsDirectional(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "fromSTEB":
      return api.EdgeInsetsDirectional.fromSTEB(
        values["start"] as double,
        values["top"] as double,
        values["end"] as double,
        values["bottom"] as double,
      );
    case "only":
      return api.EdgeInsetsDirectional.only(
        start: values["start"] as double,
        top: values["top"] as double,
        end: values["end"] as double,
        bottom: values["bottom"] as double,
      );
    case "all":
      return api.EdgeInsetsDirectional.all(values["value"] as double);
    case "symmetric":
      return api.EdgeInsetsDirectional.symmetric(
        horizontal: values["horizontal"] as double,
        vertical: values["vertical"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAlignmentGeometry(Object value) => value is api.AlignmentGeometry;
Object _createAlignmentGeometry(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isAlignment(Object value) => value is api.Alignment;
Object? _Alignment_x(Object value) => (value as api.Alignment).x;
Object? _Alignment_y(Object value) => (value as api.Alignment).y;
Object? _Alignment_static_topLeft() => api.Alignment.topLeft;
Object? _Alignment_static_topCenter() => api.Alignment.topCenter;
Object? _Alignment_static_topRight() => api.Alignment.topRight;
Object? _Alignment_static_centerLeft() => api.Alignment.centerLeft;
Object? _Alignment_static_center() => api.Alignment.center;
Object? _Alignment_static_centerRight() => api.Alignment.centerRight;
Object? _Alignment_static_bottomLeft() => api.Alignment.bottomLeft;
Object? _Alignment_static_bottomCenter() => api.Alignment.bottomCenter;
Object? _Alignment_static_bottomRight() => api.Alignment.bottomRight;
Object _createAlignment(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Alignment(values["x"] as double, values["y"] as double);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAlignmentDirectional(Object value) => value is api.AlignmentDirectional;
Object? _AlignmentDirectional_start(Object value) =>
    (value as api.AlignmentDirectional).start;
Object? _AlignmentDirectional_y(Object value) =>
    (value as api.AlignmentDirectional).y;
Object? _AlignmentDirectional_static_topStart() =>
    api.AlignmentDirectional.topStart;
Object? _AlignmentDirectional_static_topCenter() =>
    api.AlignmentDirectional.topCenter;
Object? _AlignmentDirectional_static_topEnd() =>
    api.AlignmentDirectional.topEnd;
Object? _AlignmentDirectional_static_centerStart() =>
    api.AlignmentDirectional.centerStart;
Object? _AlignmentDirectional_static_center() =>
    api.AlignmentDirectional.center;
Object? _AlignmentDirectional_static_centerEnd() =>
    api.AlignmentDirectional.centerEnd;
Object? _AlignmentDirectional_static_bottomStart() =>
    api.AlignmentDirectional.bottomStart;
Object? _AlignmentDirectional_static_bottomCenter() =>
    api.AlignmentDirectional.bottomCenter;
Object? _AlignmentDirectional_static_bottomEnd() =>
    api.AlignmentDirectional.bottomEnd;
Object _createAlignmentDirectional(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AlignmentDirectional(
        values["start"] as double,
        values["y"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ExpandedHost extends FlaxWidgetHost {
  _ExpandedHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createExpanded(node.ctor, values);
}

api.Widget _createExpanded(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Expanded(
        key: values["key"] as api.Key?,
        flex: values["flex"] as int,
        child: values["child"] as api.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _FlexibleHost extends FlaxWidgetHost {
  _FlexibleHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createFlexible(node.ctor, values);
}

api.Widget _createFlexible(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Flexible(
        key: values["key"] as api.Key?,
        flex: values["flex"] as int,
        fit: values["fit"] as api.FlexFit,
        child: values["child"] as api.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _StackHost extends FlaxWidgetHost {
  _StackHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createStack(node.ctor, values);
}

api.Widget _createStack(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("alignment")) {
        if (!values.containsKey("children")) {
          return api.Stack(
            key: values["key"] as api.Key?,
            textDirection: values["textDirection"] as api.TextDirection?,
            fit: values["fit"] as api.StackFit,
            clipBehavior: values["clipBehavior"] as api.Clip,
          );
        }
        return api.Stack(
          key: values["key"] as api.Key?,
          textDirection: values["textDirection"] as api.TextDirection?,
          fit: values["fit"] as api.StackFit,
          clipBehavior: values["clipBehavior"] as api.Clip,
          children: values["children"] as List<api.Widget>,
        );
      }
      if (!values.containsKey("children")) {
        return api.Stack(
          key: values["key"] as api.Key?,
          alignment: values["alignment"] as api.AlignmentGeometry,
          textDirection: values["textDirection"] as api.TextDirection?,
          fit: values["fit"] as api.StackFit,
          clipBehavior: values["clipBehavior"] as api.Clip,
        );
      }
      return api.Stack(
        key: values["key"] as api.Key?,
        alignment: values["alignment"] as api.AlignmentGeometry,
        textDirection: values["textDirection"] as api.TextDirection?,
        fit: values["fit"] as api.StackFit,
        clipBehavior: values["clipBehavior"] as api.Clip,
        children: values["children"] as List<api.Widget>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _PositionedHost extends FlaxWidgetHost {
  _PositionedHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createPositioned(node.ctor, values);
}

api.Widget _createPositioned(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Positioned(
        key: values["key"] as api.Key?,
        left: values["left"] as double?,
        top: values["top"] as double?,
        right: values["right"] as double?,
        bottom: values["bottom"] as double?,
        width: values["width"] as double?,
        height: values["height"] as double?,
        child: values["child"] as api.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _AlignHost extends FlaxWidgetHost {
  _AlignHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createAlign(node.ctor, values);
}

api.Widget _createAlign(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("alignment")) {
        return api.Align(
          key: values["key"] as api.Key?,
          widthFactor: values["widthFactor"] as double?,
          heightFactor: values["heightFactor"] as double?,
          child: values["child"] as api.Widget?,
        );
      }
      return api.Align(
        key: values["key"] as api.Key?,
        alignment: values["alignment"] as api.AlignmentGeometry,
        widthFactor: values["widthFactor"] as double?,
        heightFactor: values["heightFactor"] as double?,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isColor(Object value) => value is api.Color;
Object? _Color_a(Object value) => (value as api.Color).a;
Object? _Color_r(Object value) => (value as api.Color).r;
Object? _Color_g(Object value) => (value as api.Color).g;
Object? _Color_b(Object value) => (value as api.Color).b;
Object? _Color_toARGB32(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Color).toARGB32();
}

Object _createColor(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Color(values["value"] as int);
    case "fromARGB":
      return api.Color.fromARGB(
        values["a"] as int,
        values["r"] as int,
        values["g"] as int,
        values["b"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFontWeight(Object value) => value is api.FontWeight;
Object? _FontWeight_value(Object value) => (value as api.FontWeight).value;
Object? _FontWeight_static_w100() => api.FontWeight.w100;
Object? _FontWeight_static_w200() => api.FontWeight.w200;
Object? _FontWeight_static_w300() => api.FontWeight.w300;
Object? _FontWeight_static_w400() => api.FontWeight.w400;
Object? _FontWeight_static_w500() => api.FontWeight.w500;
Object? _FontWeight_static_w600() => api.FontWeight.w600;
Object? _FontWeight_static_w700() => api.FontWeight.w700;
Object? _FontWeight_static_w800() => api.FontWeight.w800;
Object? _FontWeight_static_w900() => api.FontWeight.w900;
Object? _FontWeight_static_normal() => api.FontWeight.normal;
Object? _FontWeight_static_bold() => api.FontWeight.bold;
Object _createFontWeight(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FontWeight(values["value"] as int);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextStyle(Object value) => value is api.TextStyle;
Object? _TextStyle_inherit(Object value) => (value as api.TextStyle).inherit;
Object? _TextStyle_color(Object value) => (value as api.TextStyle).color;
Object? _TextStyle_backgroundColor(Object value) =>
    (value as api.TextStyle).backgroundColor;
Object? _TextStyle_fontSize(Object value) => (value as api.TextStyle).fontSize;
Object? _TextStyle_fontWeight(Object value) =>
    (value as api.TextStyle).fontWeight;
Object? _TextStyle_fontStyle(Object value) =>
    (value as api.TextStyle).fontStyle;
Object? _TextStyle_letterSpacing(Object value) =>
    (value as api.TextStyle).letterSpacing;
Object? _TextStyle_wordSpacing(Object value) =>
    (value as api.TextStyle).wordSpacing;
Object? _TextStyle_height(Object value) => (value as api.TextStyle).height;
Object? _TextStyle_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextStyle).copyWith(
    backgroundColor: values["backgroundColor"] as api.Color?,
    color: values["color"] as api.Color?,
    fontSize: values["fontSize"] as double?,
    fontStyle: values["fontStyle"] as api.FontStyle?,
    fontWeight: values["fontWeight"] as api.FontWeight?,
    height: values["height"] as double?,
    inherit: values["inherit"] as bool?,
    letterSpacing: values["letterSpacing"] as double?,
    wordSpacing: values["wordSpacing"] as double?,
  );
}

Object _createTextStyle(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextStyle(
        inherit: values["inherit"] as bool,
        color: values["color"] as api.Color?,
        backgroundColor: values["backgroundColor"] as api.Color?,
        fontSize: values["fontSize"] as double?,
        fontWeight: values["fontWeight"] as api.FontWeight?,
        fontStyle: values["fontStyle"] as api.FontStyle?,
        letterSpacing: values["letterSpacing"] as double?,
        wordSpacing: values["wordSpacing"] as double?,
        height: values["height"] as double?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isKey(Object value) => value is api.Key;
Object _createKey(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isLocalKey(Object value) => value is api.LocalKey;
Object _createLocalKey(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isTextEditingController(Object value) =>
    value is api.TextEditingController;
Object? _TextEditingController_value(Object value) =>
    (value as api.TextEditingController).value;
Object? _TextEditingController_text(Object value) =>
    (value as api.TextEditingController).text;
Object? _TextEditingController_selection(Object value) =>
    (value as api.TextEditingController).selection;
void _TextEditingController_set_text(Object receiver, Object? value) {
  (receiver as api.TextEditingController).text = value as String;
}

void _TextEditingController_set_value(Object receiver, Object? value) {
  (receiver as api.TextEditingController).value = value as api.TextEditingValue;
}

void _TextEditingController_set_selection(Object receiver, Object? value) {
  (receiver as api.TextEditingController).selection =
      value as api.TextSelection;
}

Object? _TextEditingController_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.TextEditingController).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _TextEditingController_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.TextEditingController).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _TextEditingController_clear(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.TextEditingController).clear();
  return null;
}

Object? _TextEditingController_clearComposing(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.TextEditingController).clearComposing();
  return null;
}

Object? _TextEditingController_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.TextEditingController).dispose();
  return null;
}

Object _createTextEditingController(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextEditingController(text: values["text"] as String?);
    case "fromValue":
      return api.TextEditingController.fromValue(
        values["value"] as api.TextEditingValue?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextEditingValue(Object value) => value is api.TextEditingValue;
Object? _TextEditingValue_text(Object value) =>
    (value as api.TextEditingValue).text;
Object? _TextEditingValue_selection(Object value) =>
    (value as api.TextEditingValue).selection;
Object? _TextEditingValue_composing(Object value) =>
    (value as api.TextEditingValue).composing;
Object? _TextEditingValue_isComposingRangeValid(Object value) =>
    (value as api.TextEditingValue).isComposingRangeValid;
Object? _TextEditingValue_static_empty() => api.TextEditingValue.empty;
Object? _TextEditingValue_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.TextEditingValue).copyWith(
    composing: values["composing"] as api.TextRange?,
    selection: values["selection"] as api.TextSelection?,
    text: values["text"] as String?,
  );
}

Object _createTextEditingValue(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("selection")) {
        if (!values.containsKey("composing")) {
          return api.TextEditingValue(text: values["text"] as String);
        }
        return api.TextEditingValue(
          text: values["text"] as String,
          composing: values["composing"] as api.TextRange,
        );
      }
      if (!values.containsKey("composing")) {
        return api.TextEditingValue(
          text: values["text"] as String,
          selection: values["selection"] as api.TextSelection,
        );
      }
      return api.TextEditingValue(
        text: values["text"] as String,
        selection: values["selection"] as api.TextSelection,
        composing: values["composing"] as api.TextRange,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextSelection(Object value) => value is api.TextSelection;
Object? _TextSelection_start(Object value) =>
    (value as api.TextSelection).start;
Object? _TextSelection_end(Object value) => (value as api.TextSelection).end;
Object? _TextSelection_isValid(Object value) =>
    (value as api.TextSelection).isValid;
Object? _TextSelection_isCollapsed(Object value) =>
    (value as api.TextSelection).isCollapsed;
Object? _TextSelection_isNormalized(Object value) =>
    (value as api.TextSelection).isNormalized;
Object? _TextSelection_baseOffset(Object value) =>
    (value as api.TextSelection).baseOffset;
Object? _TextSelection_extentOffset(Object value) =>
    (value as api.TextSelection).extentOffset;
Object? _TextSelection_affinity(Object value) =>
    (value as api.TextSelection).affinity;
Object? _TextSelection_isDirectional(Object value) =>
    (value as api.TextSelection).isDirectional;
Object? _TextSelection_copyWith(Object receiver, Map<String, Object?> values) {
  return (receiver as api.TextSelection).copyWith(
    affinity: values["affinity"] as api.TextAffinity?,
    baseOffset: values["baseOffset"] as int?,
    extentOffset: values["extentOffset"] as int?,
    isDirectional: values["isDirectional"] as bool?,
  );
}

Object _createTextSelection(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextSelection(
        baseOffset: values["baseOffset"] as int,
        extentOffset: values["extentOffset"] as int,
        affinity: values["affinity"] as api.TextAffinity,
        isDirectional: values["isDirectional"] as bool,
      );
    case "collapsed":
      return api.TextSelection.collapsed(
        offset: values["offset"] as int,
        affinity: values["affinity"] as api.TextAffinity,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextRange(Object value) => value is api.TextRange;
Object? _TextRange_start(Object value) => (value as api.TextRange).start;
Object? _TextRange_end(Object value) => (value as api.TextRange).end;
Object? _TextRange_isValid(Object value) => (value as api.TextRange).isValid;
Object? _TextRange_isCollapsed(Object value) =>
    (value as api.TextRange).isCollapsed;
Object? _TextRange_isNormalized(Object value) =>
    (value as api.TextRange).isNormalized;
Object? _TextRange_static_empty() => api.TextRange.empty;
Object _createTextRange(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TextRange(
        start: values["start"] as int,
        end: values["end"] as int,
      );
    case "collapsed":
      return api.TextRange.collapsed(values["offset"] as int);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object? _Navigator_of(Map<String, Object?> values) {
  return api.Navigator.of(
    values["context"] as api.BuildContext,
    rootNavigator: values["rootNavigator"] as bool,
  );
}

class _NavigatorHost extends FlaxWidgetHost {
  _NavigatorHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createNavigator(node.ctor, values);
}

api.Widget _createNavigator(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("pages")) {
        if (!values.containsKey("observers")) {
          return api.Navigator(
            key: values["key"] as api.Key?,
            initialRoute: values["initialRoute"] as String?,
            onGenerateRoute:
                values["onGenerateRoute"]
                    as api.Route<Object?>? Function(
                      api.RouteSettings settings,
                    )?,
            onUnknownRoute:
                values["onUnknownRoute"]
                    as api.Route<Object?>? Function(
                      api.RouteSettings settings,
                    )?,
            onDidRemovePage:
                values["onDidRemovePage"]
                    as void Function(api.Page<Object?> page)?,
          );
        }
        return api.Navigator(
          key: values["key"] as api.Key?,
          initialRoute: values["initialRoute"] as String?,
          onGenerateRoute:
              values["onGenerateRoute"]
                  as api.Route<Object?>? Function(api.RouteSettings settings)?,
          onUnknownRoute:
              values["onUnknownRoute"]
                  as api.Route<Object?>? Function(api.RouteSettings settings)?,
          observers: values["observers"] as List<api.NavigatorObserver>,
          onDidRemovePage:
              values["onDidRemovePage"]
                  as void Function(api.Page<Object?> page)?,
        );
      }
      if (!values.containsKey("observers")) {
        return api.Navigator(
          key: values["key"] as api.Key?,
          pages: values["pages"] as List<api.Page<Object?>>,
          initialRoute: values["initialRoute"] as String?,
          onGenerateRoute:
              values["onGenerateRoute"]
                  as api.Route<Object?>? Function(api.RouteSettings settings)?,
          onUnknownRoute:
              values["onUnknownRoute"]
                  as api.Route<Object?>? Function(api.RouteSettings settings)?,
          onDidRemovePage:
              values["onDidRemovePage"]
                  as void Function(api.Page<Object?> page)?,
        );
      }
      return api.Navigator(
        key: values["key"] as api.Key?,
        pages: values["pages"] as List<api.Page<Object?>>,
        initialRoute: values["initialRoute"] as String?,
        onGenerateRoute:
            values["onGenerateRoute"]
                as api.Route<Object?>? Function(api.RouteSettings settings)?,
        onUnknownRoute:
            values["onUnknownRoute"]
                as api.Route<Object?>? Function(api.RouteSettings settings)?,
        observers: values["observers"] as List<api.NavigatorObserver>,
        onDidRemovePage:
            values["onDidRemovePage"] as void Function(api.Page<Object?> page)?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object? _NavigatorState_mounted(Object value) =>
    (value as api.NavigatorState).mounted;
Object? _NavigatorState_push(Object receiver, Map<String, Object?> values) {
  return (receiver as api.NavigatorState).push<Object?>(
    values["route"] as api.Route<Object?>,
  );
}

Object? _NavigatorState_pushNamed(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.NavigatorState).pushNamed<Object?>(
    values["routeName"] as String,
    arguments: values["arguments"],
  );
}

Object? _NavigatorState_pushReplacement(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.NavigatorState).pushReplacement<Object?, Object?>(
    values["newRoute"] as api.Route<Object?>,
    result: values["result"],
  );
}

Object? _NavigatorState_pop(Object receiver, Map<String, Object?> values) {
  (receiver as api.NavigatorState).pop<Object?>(values["result"]);
  return null;
}

Object? _NavigatorState_maybePop(Object receiver, Map<String, Object?> values) {
  return (receiver as api.NavigatorState).maybePop<Object?>(values["result"]);
}

Object? _NavigatorState_canPop(Object receiver, Map<String, Object?> values) {
  return (receiver as api.NavigatorState).canPop();
}

api.Route<Object?> _createRoute(
  String ctor,
  Map<String, Object?> values,
  FlaxRouteLease lease,
) => throw ArgumentError('Abstract type has no constructor');
api.Page<Object?> _createPage(
  String ctor,
  Map<String, Object?> values,
  FlaxPageLease lease,
) => throw ArgumentError('Abstract type has no constructor');
bool _isRouteSettings(Object value) => value is api.RouteSettings;
Object? _RouteSettings_name(Object value) => (value as api.RouteSettings).name;
Object? _RouteSettings_arguments(Object value) =>
    (value as api.RouteSettings).arguments;
Object _createRouteSettings(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.RouteSettings(
        name: values["name"] as String?,
        arguments: values["arguments"],
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _NavigatorPopHandlerHost extends FlaxWidgetHost {
  _NavigatorPopHandlerHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createNavigatorPopHandler(node.ctor, values);
}

api.Widget _createNavigatorPopHandler(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.NavigatorPopHandler<Object?>(
        key: values["key"] as api.Key?,
        onPopWithResult:
            values["onPopWithResult"] as void Function(Object? result)?,
        enabled: values["enabled"] as bool,
        child: values["child"] as api.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _PopScopeHost extends FlaxWidgetHost {
  _PopScopeHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createPopScope(node.ctor, values);
}

api.Widget _createPopScope(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.PopScope<Object?>(
        key: values["key"] as api.Key?,
        child: values["child"] as api.Widget,
        canPop: values["canPop"] as bool,
        onPopInvokedWithResult:
            values["onPopInvokedWithResult"]
                as void Function(bool didPop, Object? result)?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _BuilderHost extends FlaxWidgetHost {
  _BuilderHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createBuilder(node.ctor, values);
}

api.Widget _createBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Builder(
        key: values["key"] as api.Key?,
        builder:
            values["builder"] as api.Widget Function(api.BuildContext context),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _LayoutBuilderHost extends FlaxWidgetHost {
  _LayoutBuilderHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createLayoutBuilder(node.ctor, values);
}

api.Widget _createLayoutBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.LayoutBuilder(
        key: values["key"] as api.Key?,
        builder:
            values["builder"]
                as api.Widget Function(
                  api.BuildContext context,
                  api.BoxConstraints constraints,
                ),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object? _BuildContext_mounted(Object value) =>
    (value as api.BuildContext).mounted;
Object? _BuildContext_size(Object value) => (value as api.BuildContext).size;
bool _isSize(Object value) => value is api.Size;
Object? _Size_width(Object value) => (value as api.Size).width;
Object? _Size_height(Object value) => (value as api.Size).height;
Object _createSize(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Size(values["width"] as double, values["height"] as double);
    case "fromHeight":
      return api.Size.fromHeight(values["height"] as double);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSchedulerBinding(Object value) => value is api6.SchedulerBinding;
Object? _SchedulerBinding_endOfFrame(Object value) =>
    (value as api6.SchedulerBinding).endOfFrame;
Object? _SchedulerBinding_static_instance() => api6.SchedulerBinding.instance;
Object _createSchedulerBinding(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isBoxConstraints(Object value) => value is api.BoxConstraints;
Object? _BoxConstraints_minWidth(Object value) =>
    (value as api.BoxConstraints).minWidth;
Object? _BoxConstraints_maxWidth(Object value) =>
    (value as api.BoxConstraints).maxWidth;
Object? _BoxConstraints_minHeight(Object value) =>
    (value as api.BoxConstraints).minHeight;
Object? _BoxConstraints_maxHeight(Object value) =>
    (value as api.BoxConstraints).maxHeight;
Object _createBoxConstraints(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.BoxConstraints(
        minWidth: values["minWidth"] as double,
        maxWidth: values["maxWidth"] as double,
        minHeight: values["minHeight"] as double,
        maxHeight: values["maxHeight"] as double,
      );
    case "tightFor":
      return api.BoxConstraints.tightFor(
        width: values["width"] as double?,
        height: values["height"] as double?,
      );
    case "expand":
      return api.BoxConstraints.expand(
        width: values["width"] as double?,
        height: values["height"] as double?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object? _Directionality_of(Map<String, Object?> values) {
  return api.Directionality.of(values["context"] as api.BuildContext);
}

class _TextHost extends FlaxWidgetHost {
  _TextHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createText(node.ctor, values);
}

api.Widget _createText(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Text(
        values["data"] as String,
        key: values["key"] as api.Key?,
        style: values["style"] as api.TextStyle?,
        textAlign: values["textAlign"] as api.TextAlign?,
        textDirection: values["textDirection"] as api.TextDirection?,
        softWrap: values["softWrap"] as bool?,
        overflow: values["overflow"] as api.TextOverflow?,
        maxLines: values["maxLines"] as int?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _RowHost extends FlaxWidgetHost {
  _RowHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createRow(node.ctor, values);
}

api.Widget _createRow(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("children")) {
        return api.Row(
          key: values["key"] as api.Key?,
          mainAxisAlignment:
              values["mainAxisAlignment"] as api.MainAxisAlignment,
          mainAxisSize: values["mainAxisSize"] as api.MainAxisSize,
          crossAxisAlignment:
              values["crossAxisAlignment"] as api.CrossAxisAlignment,
          textDirection: values["textDirection"] as api.TextDirection?,
          verticalDirection:
              values["verticalDirection"] as api.VerticalDirection,
          textBaseline: values["textBaseline"] as api.TextBaseline?,
          spacing: values["spacing"] as double,
        );
      }
      return api.Row(
        key: values["key"] as api.Key?,
        mainAxisAlignment: values["mainAxisAlignment"] as api.MainAxisAlignment,
        mainAxisSize: values["mainAxisSize"] as api.MainAxisSize,
        crossAxisAlignment:
            values["crossAxisAlignment"] as api.CrossAxisAlignment,
        textDirection: values["textDirection"] as api.TextDirection?,
        verticalDirection: values["verticalDirection"] as api.VerticalDirection,
        textBaseline: values["textBaseline"] as api.TextBaseline?,
        spacing: values["spacing"] as double,
        children: values["children"] as List<api.Widget>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ColumnHost extends FlaxWidgetHost {
  _ColumnHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createColumn(node.ctor, values);
}

api.Widget _createColumn(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("children")) {
        return api.Column(
          key: values["key"] as api.Key?,
          mainAxisAlignment:
              values["mainAxisAlignment"] as api.MainAxisAlignment,
          mainAxisSize: values["mainAxisSize"] as api.MainAxisSize,
          crossAxisAlignment:
              values["crossAxisAlignment"] as api.CrossAxisAlignment,
          textDirection: values["textDirection"] as api.TextDirection?,
          verticalDirection:
              values["verticalDirection"] as api.VerticalDirection,
          textBaseline: values["textBaseline"] as api.TextBaseline?,
          spacing: values["spacing"] as double,
        );
      }
      return api.Column(
        key: values["key"] as api.Key?,
        mainAxisAlignment: values["mainAxisAlignment"] as api.MainAxisAlignment,
        mainAxisSize: values["mainAxisSize"] as api.MainAxisSize,
        crossAxisAlignment:
            values["crossAxisAlignment"] as api.CrossAxisAlignment,
        textDirection: values["textDirection"] as api.TextDirection?,
        verticalDirection: values["verticalDirection"] as api.VerticalDirection,
        textBaseline: values["textBaseline"] as api.TextBaseline?,
        spacing: values["spacing"] as double,
        children: values["children"] as List<api.Widget>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _CenterHost extends FlaxWidgetHost {
  _CenterHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createCenter(node.ctor, values);
}

api.Widget _createCenter(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Center(
        key: values["key"] as api.Key?,
        widthFactor: values["widthFactor"] as double?,
        heightFactor: values["heightFactor"] as double?,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _PaddingHost extends FlaxWidgetHost {
  _PaddingHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createPadding(node.ctor, values);
}

api.Widget _createPadding(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Padding(
        key: values["key"] as api.Key?,
        padding: values["padding"] as api.EdgeInsetsGeometry,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _SizedBoxHost extends FlaxWidgetHost {
  _SizedBoxHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createSizedBox(node.ctor, values);
}

api.Widget _createSizedBox(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SizedBox(
        key: values["key"] as api.Key?,
        width: values["width"] as double?,
        height: values["height"] as double?,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isEdgeInsets(Object value) => value is api.EdgeInsets;
Object? _EdgeInsets_left(Object value) => (value as api.EdgeInsets).left;
Object? _EdgeInsets_top(Object value) => (value as api.EdgeInsets).top;
Object? _EdgeInsets_right(Object value) => (value as api.EdgeInsets).right;
Object? _EdgeInsets_bottom(Object value) => (value as api.EdgeInsets).bottom;
Object? _EdgeInsets_static_zero() => api.EdgeInsets.zero;
Object _createEdgeInsets(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "all":
      return api.EdgeInsets.all(values["value"] as double);
    case "symmetric":
      return api.EdgeInsets.symmetric(
        vertical: values["vertical"] as double,
        horizontal: values["horizontal"] as double,
      );
    case "fromLTRB":
      return api.EdgeInsets.fromLTRB(
        values["left"] as double,
        values["top"] as double,
        values["right"] as double,
        values["bottom"] as double,
      );
    case "only":
      return api.EdgeInsets.only(
        left: values["left"] as double,
        top: values["top"] as double,
        right: values["right"] as double,
        bottom: values["bottom"] as double,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isValueKey(Object value) => value is api.ValueKey;
Object? _ValueKey_value(Object value) => (value as api.ValueKey).value;
Object _createValueKey(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (values["value"] is String)
        return api.ValueKey<String>(values["value"] as String);
      return api.ValueKey<int>(values["value"] as int);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isScrollController(Object value) => value is api.ScrollController;
Object? _ScrollController_hasClients(Object value) =>
    (value as api.ScrollController).hasClients;
Object? _ScrollController_offset(Object value) =>
    (value as api.ScrollController).offset;
Object? _ScrollController_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ScrollController).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _ScrollController_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ScrollController).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _ScrollController_jumpTo(Object receiver, Map<String, Object?> values) {
  (receiver as api.ScrollController).jumpTo(values["value"] as double);
  return null;
}

Object? _ScrollController_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ScrollController).dispose();
  return null;
}

Object _createScrollController(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ScrollController(
        initialScrollOffset: values["initialScrollOffset"] as double,
        keepScrollOffset: values["keepScrollOffset"] as bool,
        debugLabel: values["debugLabel"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ListViewHost extends FlaxWidgetHost {
  _ListViewHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createListView(node.ctor, values);
}

api.Widget _createListView(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "builder":
      return api.ListView.builder(
        key: values["key"] as api.Key?,
        scrollDirection: values["scrollDirection"] as api.Axis,
        reverse: values["reverse"] as bool,
        controller: values["controller"] as api.ScrollController?,
        primary: values["primary"] as bool?,
        shrinkWrap: values["shrinkWrap"] as bool,
        padding: values["padding"] as api.EdgeInsetsGeometry?,
        itemExtent: values["itemExtent"] as double?,
        itemBuilder:
            values["itemBuilder"]
                as api.Widget? Function(api.BuildContext context, int index),
        findChildIndexCallback:
            values["findChildIndexCallback"] as int? Function(api.Key key)?,
        itemCount: values["itemCount"] as int?,
        addAutomaticKeepAlives: values["addAutomaticKeepAlives"] as bool,
        addRepaintBoundaries: values["addRepaintBoundaries"] as bool,
        addSemanticIndexes: values["addSemanticIndexes"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _SingleChildScrollViewHost extends FlaxWidgetHost {
  _SingleChildScrollViewHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createSingleChildScrollView(node.ctor, values);
}

api.Widget _createSingleChildScrollView(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api.SingleChildScrollView(
        key: values["key"] as api.Key?,
        scrollDirection: values["scrollDirection"] as api.Axis,
        reverse: values["reverse"] as bool,
        padding: values["padding"] as api.EdgeInsetsGeometry?,
        primary: values["primary"] as bool?,
        controller: values["controller"] as api.ScrollController?,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFocusNode(Object value) => value is api.FocusNode;
Object? _FocusNode_hasFocus(Object value) => (value as api.FocusNode).hasFocus;
Object? _FocusNode_hasPrimaryFocus(Object value) =>
    (value as api.FocusNode).hasPrimaryFocus;
Object? _FocusNode_canRequestFocus(Object value) =>
    (value as api.FocusNode).canRequestFocus;
Object? _FocusNode_skipTraversal(Object value) =>
    (value as api.FocusNode).skipTraversal;
void _FocusNode_set_canRequestFocus(Object receiver, Object? value) {
  (receiver as api.FocusNode).canRequestFocus = value as bool;
}

void _FocusNode_set_skipTraversal(Object receiver, Object? value) {
  (receiver as api.FocusNode).skipTraversal = value as bool;
}

Object? _FocusNode_addListener(Object receiver, Map<String, Object?> values) {
  (receiver as api.FocusNode).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _FocusNode_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.FocusNode).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _FocusNode_requestFocus(Object receiver, Map<String, Object?> values) {
  (receiver as api.FocusNode).requestFocus(values["node"] as api.FocusNode?);
  return null;
}

Object? _FocusNode_unfocus(Object receiver, Map<String, Object?> values) {
  (receiver as api.FocusNode).unfocus(
    disposition: values["disposition"] as api.UnfocusDisposition,
  );
  return null;
}

Object? _FocusNode_nextFocus(Object receiver, Map<String, Object?> values) {
  return (receiver as api.FocusNode).nextFocus();
}

Object? _FocusNode_previousFocus(Object receiver, Map<String, Object?> values) {
  return (receiver as api.FocusNode).previousFocus();
}

Object? _FocusNode_dispose(Object receiver, Map<String, Object?> values) {
  (receiver as api.FocusNode).dispose();
  return null;
}

Object _createFocusNode(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FocusNode(
        debugLabel: values["debugLabel"] as String?,
        skipTraversal: values["skipTraversal"] as bool,
        canRequestFocus: values["canRequestFocus"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTextInputFormatter(Object value) => value is api4.TextInputFormatter;
Object _createTextInputFormatter(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "withFunction":
      return api4.TextInputFormatter.withFunction(
        values["formatFunction"]
            as api.TextEditingValue Function(
              api.TextEditingValue oldValue,
              api.TextEditingValue newValue,
            ),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFilteringTextInputFormatter(Object value) =>
    value is api4.FilteringTextInputFormatter;
Object? _FilteringTextInputFormatter_static_digitsOnly() =>
    api4.FilteringTextInputFormatter.digitsOnly;
Object? _FilteringTextInputFormatter_static_singleLineFormatter() =>
    api4.FilteringTextInputFormatter.singleLineFormatter;
Object _createFilteringTextInputFormatter(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api4.FilteringTextInputFormatter(
        values["filterPattern"] as api2.Pattern,
        allow: values["allow"] as bool,
        replacementString: values["replacementString"] as String,
      );
    case "allow":
      return api4.FilteringTextInputFormatter.allow(
        values["filterPattern"] as api2.Pattern,
        replacementString: values["replacementString"] as String,
      );
    case "deny":
      return api4.FilteringTextInputFormatter.deny(
        values["filterPattern"] as api2.Pattern,
        replacementString: values["replacementString"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isLengthLimitingTextInputFormatter(Object value) =>
    value is api4.LengthLimitingTextInputFormatter;
Object _createLengthLimitingTextInputFormatter(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      return api4.LengthLimitingTextInputFormatter(
        values["maxLength"] as int?,
        maxLengthEnforcement:
            values["maxLengthEnforcement"] as api4.MaxLengthEnforcement?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPattern(Object value) => value is api2.Pattern;
Object _createPattern(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isRegExp(Object value) => value is api2.RegExp;
Object _createRegExp(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api2.RegExp(
        values["source"] as String,
        multiLine: values["multiLine"] as bool,
        caseSensitive: values["caseSensitive"] as bool,
        unicode: values["unicode"] as bool,
        dotAll: values["dotAll"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ListenerHost extends FlaxWidgetHost {
  _ListenerHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createListener(node.ctor, values);
}

api.Widget _createListener(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Listener(
        key: values["key"] as api.Key?,
        onPointerDown:
            values["onPointerDown"] as void Function(api.PointerEvent event)?,
        onPointerMove:
            values["onPointerMove"] as void Function(api.PointerEvent event)?,
        onPointerUp:
            values["onPointerUp"] as void Function(api.PointerEvent event)?,
        onPointerHover:
            values["onPointerHover"] as void Function(api.PointerEvent event)?,
        onPointerCancel:
            values["onPointerCancel"] as void Function(api.PointerEvent event)?,
        onPointerSignal:
            values["onPointerSignal"] as void Function(api.PointerEvent event)?,
        behavior: values["behavior"] as api.HitTestBehavior,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _MouseRegionHost extends FlaxWidgetHost {
  _MouseRegionHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createMouseRegion(node.ctor, values);
}

api.Widget _createMouseRegion(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.MouseRegion(
        key: values["key"] as api.Key?,
        onEnter: values["onEnter"] as void Function(api.PointerEvent event)?,
        onExit: values["onExit"] as void Function(api.PointerEvent event)?,
        onHover: values["onHover"] as void Function(api.PointerEvent event)?,
        opaque: values["opaque"] as bool,
        hitTestBehavior: values["hitTestBehavior"] as api.HitTestBehavior?,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _KeyboardListenerHost extends FlaxWidgetHost {
  _KeyboardListenerHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createKeyboardListener(node.ctor, values);
}

api.Widget _createKeyboardListener(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.KeyboardListener(
        key: values["key"] as api.Key?,
        focusNode: values["focusNode"] as api.FocusNode,
        autofocus: values["autofocus"] as bool,
        includeSemantics: values["includeSemantics"] as bool,
        onKeyEvent: values["onKeyEvent"] as void Function(api.KeyEvent value)?,
        child: values["child"] as api.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _SafeAreaHost extends FlaxWidgetHost {
  _SafeAreaHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createSafeArea(node.ctor, values);
}

api.Widget _createSafeArea(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("minimum")) {
        return api.SafeArea(
          key: values["key"] as api.Key?,
          left: values["left"] as bool,
          top: values["top"] as bool,
          right: values["right"] as bool,
          bottom: values["bottom"] as bool,
          maintainBottomViewPadding:
              values["maintainBottomViewPadding"] as bool,
          child: values["child"] as api.Widget,
        );
      }
      return api.SafeArea(
        key: values["key"] as api.Key?,
        left: values["left"] as bool,
        top: values["top"] as bool,
        right: values["right"] as bool,
        bottom: values["bottom"] as bool,
        minimum: values["minimum"] as api.EdgeInsets,
        maintainBottomViewPadding: values["maintainBottomViewPadding"] as bool,
        child: values["child"] as api.Widget,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _WrapHost extends FlaxWidgetHost {
  _WrapHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createWrap(node.ctor, values);
}

api.Widget _createWrap(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("children")) {
        return api.Wrap(
          key: values["key"] as api.Key?,
          direction: values["direction"] as api.Axis,
          alignment: values["alignment"] as api.WrapAlignment,
          spacing: values["spacing"] as double,
          runAlignment: values["runAlignment"] as api.WrapAlignment,
          runSpacing: values["runSpacing"] as double,
          crossAxisAlignment:
              values["crossAxisAlignment"] as api.WrapCrossAlignment,
          textDirection: values["textDirection"] as api.TextDirection?,
          verticalDirection:
              values["verticalDirection"] as api.VerticalDirection,
          clipBehavior: values["clipBehavior"] as api.Clip,
        );
      }
      return api.Wrap(
        key: values["key"] as api.Key?,
        direction: values["direction"] as api.Axis,
        alignment: values["alignment"] as api.WrapAlignment,
        spacing: values["spacing"] as double,
        runAlignment: values["runAlignment"] as api.WrapAlignment,
        runSpacing: values["runSpacing"] as double,
        crossAxisAlignment:
            values["crossAxisAlignment"] as api.WrapCrossAlignment,
        textDirection: values["textDirection"] as api.TextDirection?,
        verticalDirection: values["verticalDirection"] as api.VerticalDirection,
        clipBehavior: values["clipBehavior"] as api.Clip,
        children: values["children"] as List<api.Widget>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _FittedBoxHost extends FlaxWidgetHost {
  _FittedBoxHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createFittedBox(node.ctor, values);
}

api.Widget _createFittedBox(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("alignment")) {
        return api.FittedBox(
          key: values["key"] as api.Key?,
          fit: values["fit"] as api.BoxFit,
          clipBehavior: values["clipBehavior"] as api.Clip,
          child: values["child"] as api.Widget?,
        );
      }
      return api.FittedBox(
        key: values["key"] as api.Key?,
        fit: values["fit"] as api.BoxFit,
        alignment: values["alignment"] as api.AlignmentGeometry,
        clipBehavior: values["clipBehavior"] as api.Clip,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _AspectRatioHost extends FlaxWidgetHost {
  _AspectRatioHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createAspectRatio(node.ctor, values);
}

api.Widget _createAspectRatio(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AspectRatio(
        key: values["key"] as api.Key?,
        aspectRatio: values["aspectRatio"] as double,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ConstrainedBoxHost extends FlaxWidgetHost {
  _ConstrainedBoxHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createConstrainedBox(node.ctor, values);
}

api.Widget _createConstrainedBox(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ConstrainedBox(
        key: values["key"] as api.Key?,
        constraints: values["constraints"] as api.BoxConstraints,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _OpacityHost extends FlaxWidgetHost {
  _OpacityHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createOpacity(node.ctor, values);
}

api.Widget _createOpacity(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Opacity(
        key: values["key"] as api.Key?,
        opacity: values["opacity"] as double,
        alwaysIncludeSemantics: values["alwaysIncludeSemantics"] as bool,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _VisibilityHost extends FlaxWidgetHost {
  _VisibilityHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createVisibility(node.ctor, values);
}

api.Widget _createVisibility(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Visibility(
        key: values["key"] as api.Key?,
        child: values["child"] as api.Widget,
        visible: values["visible"] as bool,
        maintainState: values["maintainState"] as bool,
        maintainAnimation: values["maintainAnimation"] as bool,
        maintainSize: values["maintainSize"] as bool,
        maintainSemantics: values["maintainSemantics"] as bool,
        maintainInteractivity: values["maintainInteractivity"] as bool,
        maintainFocusability: values["maintainFocusability"] as bool,
      );
    case "maintain":
      return api.Visibility.maintain(
        key: values["key"] as api.Key?,
        child: values["child"] as api.Widget,
        visible: values["visible"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ColoredBoxHost extends FlaxWidgetHost {
  _ColoredBoxHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createColoredBox(node.ctor, values);
}

api.Widget _createColoredBox(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ColoredBox(
        color: values["color"] as api.Color,
        isAntiAlias: values["isAntiAlias"] as bool,
        child: values["child"] as api.Widget?,
        key: values["key"] as api.Key?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _ClipRRectHost extends FlaxWidgetHost {
  _ClipRRectHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createClipRRect(node.ctor, values);
}

api.Widget _createClipRRect(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("borderRadius")) {
        return api.ClipRRect(
          key: values["key"] as api.Key?,
          clipBehavior: values["clipBehavior"] as api.Clip,
          child: values["child"] as api.Widget?,
        );
      }
      return api.ClipRRect(
        key: values["key"] as api.Key?,
        borderRadius: values["borderRadius"] as api.BorderRadiusGeometry,
        clipBehavior: values["clipBehavior"] as api.Clip,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _IgnorePointerHost extends FlaxWidgetHost {
  _IgnorePointerHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createIgnorePointer(node.ctor, values);
}

api.Widget _createIgnorePointer(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.IgnorePointer(
        key: values["key"] as api.Key?,
        ignoring: values["ignoring"] as bool,
        child: values["child"] as api.Widget?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _IndexedStackHost extends FlaxWidgetHost {
  _IndexedStackHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createIndexedStack(node.ctor, values);
}

api.Widget _createIndexedStack(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      if (!values.containsKey("alignment")) {
        if (!values.containsKey("children")) {
          return api.IndexedStack(
            key: values["key"] as api.Key?,
            textDirection: values["textDirection"] as api.TextDirection?,
            clipBehavior: values["clipBehavior"] as api.Clip,
            sizing: values["sizing"] as api.StackFit,
            index: values["index"] as int?,
          );
        }
        return api.IndexedStack(
          key: values["key"] as api.Key?,
          textDirection: values["textDirection"] as api.TextDirection?,
          clipBehavior: values["clipBehavior"] as api.Clip,
          sizing: values["sizing"] as api.StackFit,
          index: values["index"] as int?,
          children: values["children"] as List<api.Widget>,
        );
      }
      if (!values.containsKey("children")) {
        return api.IndexedStack(
          key: values["key"] as api.Key?,
          alignment: values["alignment"] as api.AlignmentGeometry,
          textDirection: values["textDirection"] as api.TextDirection?,
          clipBehavior: values["clipBehavior"] as api.Clip,
          sizing: values["sizing"] as api.StackFit,
          index: values["index"] as int?,
        );
      }
      return api.IndexedStack(
        key: values["key"] as api.Key?,
        alignment: values["alignment"] as api.AlignmentGeometry,
        textDirection: values["textDirection"] as api.TextDirection?,
        clipBehavior: values["clipBehavior"] as api.Clip,
        sizing: values["sizing"] as api.StackFit,
        index: values["index"] as int?,
        children: values["children"] as List<api.Widget>,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _GestureDetectorHost extends FlaxWidgetHost {
  _GestureDetectorHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createGestureDetector(node.ctor, values);
}

api.Widget _createGestureDetector(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.GestureDetector(
        key: values["key"] as api.Key?,
        child: values["child"] as api.Widget?,
        onTap: values["onTap"] as void Function()?,
        onTapCancel: values["onTapCancel"] as void Function()?,
        onSecondaryTap: values["onSecondaryTap"] as void Function()?,
        onSecondaryTapCancel:
            values["onSecondaryTapCancel"] as void Function()?,
        onDoubleTap: values["onDoubleTap"] as void Function()?,
        onDoubleTapCancel: values["onDoubleTapCancel"] as void Function()?,
        onLongPressCancel: values["onLongPressCancel"] as void Function()?,
        onLongPress: values["onLongPress"] as void Function()?,
        behavior: values["behavior"] as api.HitTestBehavior?,
        excludeFromSemantics: values["excludeFromSemantics"] as bool,
        dragStartBehavior:
            values["dragStartBehavior"] as api1.DragStartBehavior,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _FocusHost extends FlaxWidgetHost {
  _FocusHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createFocus(node.ctor, values);
}

api.Widget _createFocus(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Focus(
        key: values["key"] as api.Key?,
        child: values["child"] as api.Widget,
        focusNode: values["focusNode"] as api.FocusNode?,
        autofocus: values["autofocus"] as bool,
        onFocusChange: values["onFocusChange"] as void Function(bool value)?,
        canRequestFocus: values["canRequestFocus"] as bool?,
        skipTraversal: values["skipTraversal"] as bool?,
        descendantsAreFocusable: values["descendantsAreFocusable"] as bool?,
        descendantsAreTraversable: values["descendantsAreTraversable"] as bool?,
        includeSemantics: values["includeSemantics"] as bool,
        debugLabel: values["debugLabel"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _FormHost extends FlaxWidgetHost {
  _FormHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createForm(node.ctor, values);
}

api.Widget _createForm(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Form(
        key: values["key"] as api.Key?,
        child: values["child"] as api.Widget,
        canPop: values["canPop"] as bool?,
        onPopInvokedWithResult:
            values["onPopInvokedWithResult"]
                as void Function(bool didPop, Object? result)?,
        onChanged: values["onChanged"] as void Function()?,
        autovalidateMode: values["autovalidateMode"] as api.AutovalidateMode?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

class _StatefulBuilderHost extends FlaxWidgetHost {
  _StatefulBuilderHost(super.node);

  @override
  api.Widget buildNative(Map<String, Object?> values) =>
      _createStatefulBuilder(node.ctor, values);
}

api.Widget _createStatefulBuilder(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.StatefulBuilder(
        key: values["key"] as api.Key?,
        builder:
            values["builder"]
                as api.Widget Function(
                  api.BuildContext context,
                  void Function(void Function() fn) setState,
                ),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

final class _EventSinkProxy implements api3.EventSink<Object?> {
  final void Function(Object? event) _call_add;
  final void Function(Object error, [api2.StackTrace? stackTrace])
  _call_addError;
  final void Function() _call_close;
  _EventSinkProxy(this._call_add, this._call_addError, this._call_close);
  @override
  void add(Object? event) {
    _call_add(event);
    return;
  }

  @override
  void addError(Object error, [Object? stackTrace = _flaxOmitted]) {
    if (identical(stackTrace, _flaxOmitted)) {
      _call_addError(error);
      return;
    }
    _call_addError(error, stackTrace as api2.StackTrace?);
    return;
  }

  @override
  void close() {
    _call_close();
    return;
  }
}

final class _StreamConsumerProxy implements api3.StreamConsumer<Object?> {
  final Future<Object?> Function(api3.Stream<Object?> stream) _call_addStream;
  final Future<Object?> Function() _call_close;
  _StreamConsumerProxy(this._call_addStream, this._call_close);
  @override
  Future<Object?> addStream(api3.Stream<Object?> stream) {
    return _call_addStream(stream);
  }

  @override
  Future<Object?> close() {
    return _call_close();
  }
}

final class _StreamTransformerProxy
    implements api3.StreamTransformer<Object?, Object?> {
  final api3.Stream<Object?> Function(api3.Stream<Object?> stream) _call_bind;
  final api3.StreamTransformer<RS, RT>
  Function<RS extends Object?, RT extends Object?>()
  _call_cast;
  _StreamTransformerProxy(this._call_bind, this._call_cast);
  @override
  api3.Stream<Object?> bind(api3.Stream<Object?> stream) {
    return _call_bind(stream);
  }

  @override
  api3.StreamTransformer<RS, RT>
  cast<RS extends Object?, RT extends Object?>() {
    return _call_cast<RS, RT>();
  }
}

final class _StreamTransformerBaseProxy
    extends api3.StreamTransformerBase<Object?, Object?> {
  final api3.Stream<Object?> Function(api3.Stream<Object?> stream) _call_bind;
  _StreamTransformerBaseProxy(this._call_bind) : super();
  @override
  api3.Stream<Object?> bind(api3.Stream<Object?> stream) {
    return _call_bind(stream);
  }
}

final class _ValueListenableProxy extends api7.ValueListenable<Object?> {
  final void Function(void Function() listener) _call_addListener;
  final void Function(void Function() listener) _call_removeListener;
  final Object? Function() _get_value;
  _ValueListenableProxy(
    this._call_addListener,
    this._call_removeListener,
    this._get_value,
  ) : super();
  @override
  void addListener(void Function() listener) {
    _call_addListener(listener);
    return;
  }

  @override
  void removeListener(void Function() listener) {
    _call_removeListener(listener);
    return;
  }

  @override
  Object? get value => _get_value();
}

String _keyEventType(Object value) {
  final name = value.runtimeType.toString();
  if (name.contains('KeyDown')) return 'keydown';
  if (name.contains('KeyUp')) return 'keyup';
  if (name.contains('KeyRepeat')) return 'repeat';
  return 'key';
}

Object _snapshotOffset(Object value) {
  final v = value as api.Offset;
  return <String, Object?>{"dx": v.dx, "dy": v.dy};
}

Object _snapshotPhysicalKeyboardKey(Object value) {
  final v = value as api4.PhysicalKeyboardKey;
  return <String, Object?>{"usbHidUsage": v.usbHidUsage};
}

Object _snapshotLogicalKeyboardKey(Object value) {
  final v = value as api4.LogicalKeyboardKey;
  return <String, Object?>{"keyId": v.keyId, "keyLabel": v.keyLabel};
}

Object _snapshotPointerEvent(Object value) {
  if (value is api1.PointerScrollEvent)
    return _snapshotPointerScrollEvent(value);
  final v = value as api.PointerEvent;
  return <String, Object?>{
    "pointer": v.pointer,
    "device": v.device,
    "kind": v.kind.name,
    "buttons": v.buttons,
    "down": v.down,
    "position": _snapshotOffset(v.position),
    "localPosition": _snapshotOffset(v.localPosition),
    "delta": _snapshotOffset(v.delta),
    "localDelta": _snapshotOffset(v.localDelta),
    "pressure": v.pressure,
    "pressureMin": v.pressureMin,
    "pressureMax": v.pressureMax,
    "size": v.size,
    "synthesized": v.synthesized,
  };
}

Object _snapshotPointerScrollEvent(Object value) {
  final v = value as api1.PointerScrollEvent;
  return <String, Object?>{
    "pointer": v.pointer,
    "device": v.device,
    "kind": v.kind.name,
    "buttons": v.buttons,
    "down": v.down,
    "position": _snapshotOffset(v.position),
    "localPosition": _snapshotOffset(v.localPosition),
    "delta": _snapshotOffset(v.delta),
    "localDelta": _snapshotOffset(v.localDelta),
    "pressure": v.pressure,
    "pressureMin": v.pressureMin,
    "pressureMax": v.pressureMax,
    "size": v.size,
    "synthesized": v.synthesized,
    "scrollDelta": _snapshotOffset(v.scrollDelta),
  };
}

Object _snapshotKeyEvent(Object value) {
  final v = value as api.KeyEvent;
  return <String, Object?>{
    'type': _keyEventType(v),
    "physicalKey": _snapshotPhysicalKeyboardKey(v.physicalKey),
    "logicalKey": _snapshotLogicalKeyboardKey(v.logicalKey),
    "character": v.character,
    "synthesized": v.synthesized,
  };
}

Object _callback0(FlaxCallback callback) =>
    (api3.StreamSubscription<Object?> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      callback.call(positional, named);
    };
bool _callback0Matches(Object value) =>
    value is void Function(api3.StreamSubscription<Object?> subscription);
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api3.StreamSubscription<Object?> subscription))(
    positional[0] as api3.StreamSubscription<Object?>,
  );
  return null;
}

Object _callback1(FlaxCallback callback) =>
    (api3.StreamSubscription<Object?> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      callback.call(positional, named);
    };
bool _callback1Matches(Object value) =>
    value is void Function(api3.StreamSubscription<Object?> subscription);
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api3.StreamSubscription<Object?> subscription))(
    positional[0] as api3.StreamSubscription<Object?>,
  );
  return null;
}

Object _callback2(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback2Matches(Object value) => value is void Function(Object? event);
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? event))(positional[0]);
  return null;
}

Object _callback3(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback3Matches(Object value) => value is void Function();
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback4(FlaxCallback callback) =>
    (Object p0, [Object? p1 = _flaxOmitted]) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      if (!identical(p1, _flaxOmitted)) positional.add(p1);
      callback.call(positional, named);
    };
bool _callback4Matches(Object value) =>
    value is void Function(Object p0, [api2.StackTrace p1]);
Object? _callback4Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  switch (positional.length) {
    case 1:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
      );
      return null;
    case 2:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
        positional[1] as api2.StackTrace,
      );
      return null;
    default:
      throw ArgumentError("Invalid callback arity");
  }
}

Object _callback5(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback5Matches(Object value) => value is bool Function(Object? event);
Object? _callback5Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? event))(positional[0]);
}

Object _callback6(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named);
};
bool _callback6Matches(Object value) =>
    value is Object? Function(Object? event);
Object? _callback6Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(Object? event))(positional[0]);
}

Object _callback7(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api3.FutureOr<Object?>;
};
bool _callback7Matches(Object value) =>
    value is api3.FutureOr<Object?> Function(Object? event);
Object? _callback7Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<Object?> Function(Object? event))(
    positional[0],
  );
}

Object _callback8(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api3.Stream<Object?>?;
};
bool _callback8Matches(Object value) =>
    value is api3.Stream<Object?>? Function(Object? event);
Object? _callback8Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.Stream<Object?>? Function(Object? event))(
    positional[0],
  );
}

Object _callback9(FlaxCallback callback) =>
    (Object p0, [Object? p1 = _flaxOmitted]) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      if (!identical(p1, _flaxOmitted)) positional.add(p1);
      callback.call(positional, named);
    };
bool _callback9Matches(Object value) =>
    value is void Function(Object p0, [api2.StackTrace p1]);
Object? _callback9Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  switch (positional.length) {
    case 1:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
      );
      return null;
    case 2:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
        positional[1] as api2.StackTrace,
      );
      return null;
    default:
      throw ArgumentError("Invalid callback arity");
  }
}

Object _callback10(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback10Matches(Object value) => value is bool Function(Object? error);
Object? _callback10Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? error))(positional[0]);
}

Object _callback11(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as Iterable<Object?>;
};
bool _callback11Matches(Object value) =>
    value is Iterable<Object?> Function(Object? element);
Object? _callback11Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Iterable<Object?> Function(Object? element))(
    positional[0],
  );
}

Object _callback12(FlaxCallback callback) => (Object? p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  return callback.call(positional, named);
};
bool _callback12Matches(Object value) =>
    value is Object? Function(Object? previous, Object? element);
Object? _callback12Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(Object? previous, Object? element))(
    positional[0],
    positional[1],
  );
}

Object _callback13(FlaxCallback callback) => (Object? p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  return callback.call(positional, named);
};
bool _callback13Matches(Object value) =>
    value is Object? Function(Object? previous, Object? element);
Object? _callback13Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(Object? previous, Object? element))(
    positional[0],
    positional[1],
  );
}

Object _callback14(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback14Matches(Object value) =>
    value is void Function(Object? element);
Object? _callback14Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? element))(positional[0]);
  return null;
}

Object _callback15(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback15Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback15Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback16(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback16Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback16Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback17(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback17Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback17Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback18(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback18Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback18Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback19(FlaxCallback callback) => (Object? p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  return callback.call(positional, named) as bool;
};
bool _callback19Matches(Object value) =>
    value is bool Function(Object? previous, Object? next);
Object? _callback19Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? previous, Object? next))(
    positional[0],
    positional[1],
  );
}

Object _callback20(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback20Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback20Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback21(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named);
};
bool _callback21Matches(Object value) => value is Object? Function();
Object? _callback21Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function())();
}

Object _callback22(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback22Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback22Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback23(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named);
};
bool _callback23Matches(Object value) => value is Object? Function();
Object? _callback23Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function())();
}

Object _callback24(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback24Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback24Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback25(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named);
};
bool _callback25Matches(Object value) => value is Object? Function();
Object? _callback25Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function())();
}

Object _callback26(FlaxCallback callback) => (api3.EventSink<Object?> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback26Matches(Object value) =>
    value is void Function(api3.EventSink<Object?> sink);
Object? _callback26Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api3.EventSink<Object?> sink))(
    positional[0] as api3.EventSink<Object?>,
  );
  return null;
}

Object _callback27(FlaxCallback callback) =>
    (api3.MultiStreamController<Object?> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      callback.call(positional, named);
    };
bool _callback27Matches(Object value) =>
    value is void Function(api3.MultiStreamController<Object?> p0);
Object? _callback27Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api3.MultiStreamController<Object?> p0))(
    positional[0] as api3.MultiStreamController<Object?>,
  );
  return null;
}

Object _callback28(FlaxCallback callback) => (int p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named);
};
bool _callback28Matches(Object value) =>
    value is Object? Function(int computationCount);
Object? _callback28Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(int computationCount))(
    positional[0] as int,
  );
}

Object _callback29(FlaxCallback callback) => (api3.EventSink<Object?> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api3.EventSink<Object?>;
};
bool _callback29Matches(Object value) =>
    value is api3.EventSink<Object?> Function(api3.EventSink<Object?> sink);
Object? _callback29Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api3.EventSink<Object?> Function(api3.EventSink<Object?> sink))(
    positional[0] as api3.EventSink<Object?>,
  );
}

Object _callback30(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback30Matches(Object value) => value is void Function(Object? data);
Object? _callback30Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? data))(positional[0]);
  return null;
}

Object _callback31(FlaxCallback callback) =>
    (Object p0, [Object? p1 = _flaxOmitted]) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      if (!identical(p1, _flaxOmitted)) positional.add(p1);
      callback.call(positional, named);
    };
bool _callback31Matches(Object value) =>
    value is void Function(Object p0, [api2.StackTrace p1]);
Object? _callback31Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  switch (positional.length) {
    case 1:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
      );
      return null;
    case 2:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
        positional[1] as api2.StackTrace,
      );
      return null;
    default:
      throw ArgumentError("Invalid callback arity");
  }
}

Object _callback32(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback32Matches(Object value) => value is void Function();
Object? _callback32Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback33(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback33Matches(Object value) => value is void Function();
Object? _callback33Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback34(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback34Matches(Object value) => value is void Function();
Object? _callback34Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback35(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback35Matches(Object value) => value is void Function();
Object? _callback35Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback36(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named) as api3.FutureOr<void>;
};
bool _callback36Matches(Object value) =>
    value is api3.FutureOr<void> Function();
Object? _callback36Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<void> Function())();
}

Object _callback37(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback37Matches(Object value) => value is void Function();
Object? _callback37Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback38(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback38Matches(Object value) => value is void Function();
Object? _callback38Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback39(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback39Matches(Object value) => value is void Function();
Object? _callback39Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback40(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named) as api3.FutureOr<void>;
};
bool _callback40Matches(Object value) =>
    value is api3.FutureOr<void> Function();
Object? _callback40Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<void> Function())();
}

Object _callback41(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback41Matches(Object value) => value is void Function();
Object? _callback41Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback42(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback42Matches(Object value) => value is void Function();
Object? _callback42Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback43(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback43Matches(Object value) => value is void Function();
Object? _callback43Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback44(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback44Matches(Object value) => value is void Function();
Object? _callback44Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback45(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback45Matches(Object value) => value is void Function();
Object? _callback45Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback46(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named) as api3.FutureOr<void>;
};
bool _callback46Matches(Object value) =>
    value is api3.FutureOr<void> Function();
Object? _callback46Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<void> Function())();
}

Object _callback47(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback47Matches(Object value) => value is void Function();
Object? _callback47Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback48(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback48Matches(Object value) => value is void Function();
Object? _callback48Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback49(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback49Matches(Object value) => value is void Function();
Object? _callback49Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback50(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named) as api3.FutureOr<void>;
};
bool _callback50Matches(Object value) =>
    value is api3.FutureOr<void> Function();
Object? _callback50Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<void> Function())();
}

Object _callback51(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback51Matches(Object value) => value is void Function();
Object? _callback51Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback52(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback52Matches(Object value) => value is void Function();
Object? _callback52Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback53(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback53Matches(Object value) => value is void Function();
Object? _callback53Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback54(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named) as api3.FutureOr<void>;
};
bool _callback54Matches(Object value) =>
    value is api3.FutureOr<void> Function();
Object? _callback54Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<void> Function())();
}

Object _callback55(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback55Matches(Object value) => value is void Function();
Object? _callback55Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback56(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback56Matches(Object value) => value is void Function();
Object? _callback56Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback57(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback57Matches(Object value) => value is void Function();
Object? _callback57Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback58(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named) as api3.FutureOr<void>;
};
bool _callback58Matches(Object value) =>
    value is api3.FutureOr<void> Function();
Object? _callback58Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<void> Function())();
}

Object _callback59(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback59Matches(Object value) => value is void Function();
Object? _callback59Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback60(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback60Matches(Object value) => value is void Function();
Object? _callback60Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback61(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback61Matches(Object value) => value is void Function();
Object? _callback61Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback62(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named) as api3.FutureOr<void>;
};
bool _callback62Matches(Object value) =>
    value is api3.FutureOr<void> Function();
Object? _callback62Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<void> Function())();
}

Object _callback63(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback63Matches(Object value) => value is void Function(Object? event);
Object? _callback63Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? event))(positional[0]);
  return null;
}

Object _callback64(FlaxCallback callback) =>
    (Object p0, [Object? p1 = _flaxOmitted]) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      if (!identical(p1, _flaxOmitted)) positional.add(p1);
      callback.call(positional, named);
    };
bool _callback64Matches(Object value) =>
    value is void Function(Object error, [api2.StackTrace? stackTrace]);
Object? _callback64Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  switch (positional.length) {
    case 1:
      (function as void Function(Object error, [api2.StackTrace? stackTrace]))(
        positional[0] as Object,
      );
      return null;
    case 2:
      (function as void Function(Object error, [api2.StackTrace? stackTrace]))(
        positional[0] as Object,
        positional[1] as api2.StackTrace?,
      );
      return null;
    default:
      throw ArgumentError("Invalid callback arity");
  }
}

Object _callback65(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback65Matches(Object value) => value is void Function();
Object? _callback65Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback66(FlaxCallback callback) => (api3.Stream<Object?> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return (callback.call(positional, named) as Future<Object?>).then<Object?>(
    (value) => value,
  );
};
bool _callback66Matches(Object value) =>
    value is Future<Object?> Function(api3.Stream<Object?> stream);
Object? _callback66Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<Object?> Function(api3.Stream<Object?> stream))(
    positional[0] as api3.Stream<Object?>,
  );
}

Object _callback67(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (callback.call(positional, named) as Future<Object?>).then<Object?>(
    (value) => value,
  );
};
bool _callback67Matches(Object value) => value is Future<Object?> Function();
Object? _callback67Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<Object?> Function())();
}

Object _callback68(FlaxCallback callback) =>
    (api3.Stream<Object?> p0, bool p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return callback.call(positional, named)
          as api3.StreamSubscription<Object?>;
    };
bool _callback68Matches(Object value) =>
    value
        is api3.StreamSubscription<Object?> Function(
          api3.Stream<Object?> stream,
          bool cancelOnError,
        );
Object? _callback68Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api3.StreamSubscription<Object?> Function(
        api3.Stream<Object?> stream,
        bool cancelOnError,
      ))(positional[0] as api3.Stream<Object?>, positional[1] as bool);
}

Object _callback69(FlaxCallback callback) =>
    (Object? p0, api3.EventSink<Object?> p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      callback.call(positional, named);
    };
bool _callback69Matches(Object value) =>
    value is void Function(Object? data, api3.EventSink<Object?> sink);
Object? _callback69Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? data, api3.EventSink<Object?> sink))(
    positional[0],
    positional[1] as api3.EventSink<Object?>,
  );
  return null;
}

Object _callback70(FlaxCallback callback) =>
    (Object p0, api2.StackTrace p1, api3.EventSink<Object?> p2) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      callback.call(positional, named);
    };
bool _callback70Matches(Object value) =>
    value
        is void Function(
          Object error,
          api2.StackTrace stackTrace,
          api3.EventSink<Object?> sink,
        );
Object? _callback70Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function
      as void Function(
        Object error,
        api2.StackTrace stackTrace,
        api3.EventSink<Object?> sink,
      ))(
    positional[0] as Object,
    positional[1] as api2.StackTrace,
    positional[2] as api3.EventSink<Object?>,
  );
  return null;
}

Object _callback71(FlaxCallback callback) => (api3.EventSink<Object?> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback71Matches(Object value) =>
    value is void Function(api3.EventSink<Object?> sink);
Object? _callback71Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api3.EventSink<Object?> sink))(
    positional[0] as api3.EventSink<Object?>,
  );
  return null;
}

Object _callback72(FlaxCallback callback) => (api3.Stream<Object?> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api3.Stream<Object?>;
};
bool _callback72Matches(Object value) =>
    value is api3.Stream<Object?> Function(api3.Stream<Object?> p0);
Object? _callback72Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.Stream<Object?> Function(api3.Stream<Object?> p0))(
    positional[0] as api3.Stream<Object?>,
  );
}

Object _callback73(FlaxCallback callback) => (api3.Stream<Object?> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api3.Stream<Object?>;
};
bool _callback73Matches(Object value) =>
    value is api3.Stream<Object?> Function(api3.Stream<Object?> stream);
Object? _callback73Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api3.Stream<Object?> Function(api3.Stream<Object?> stream))(
    positional[0] as api3.Stream<Object?>,
  );
}

Object _callback74(FlaxCallback callback) =>
    <RS extends Object?, RT extends Object?>() {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      return callback.call(positional, named) as api3.StreamTransformer<RS, RT>;
    };
bool _callback74Matches(Object value) =>
    value
        is api3.StreamTransformer<RS, RT>
        Function<RS extends Object?, RT extends Object?>();
Object? _callback74Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api3.StreamTransformer<RS, RT>
      Function<RS extends Object?, RT extends Object?>())<Object?, Object?>();
}

Object _callback75(FlaxCallback callback) => (api3.Stream<Object?> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api3.Stream<Object?>;
};
bool _callback75Matches(Object value) =>
    value is api3.Stream<Object?> Function(api3.Stream<Object?> stream);
Object? _callback75Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api3.Stream<Object?> Function(api3.Stream<Object?> stream))(
    positional[0] as api3.Stream<Object?>,
  );
}

Object _callback76(FlaxCallback callback) =>
    (api3.StreamSubscription<Object?> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      callback.call(positional, named);
    };
bool _callback76Matches(Object value) =>
    value is void Function(api3.StreamSubscription<Object?> subscription);
Object? _callback76Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api3.StreamSubscription<Object?> subscription))(
    positional[0] as api3.StreamSubscription<Object?>,
  );
  return null;
}

Object _callback77(FlaxCallback callback) =>
    (api3.StreamSubscription<Object?> p0) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      callback.call(positional, named);
    };
bool _callback77Matches(Object value) =>
    value is void Function(api3.StreamSubscription<Object?> subscription);
Object? _callback77Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api3.StreamSubscription<Object?> subscription))(
    positional[0] as api3.StreamSubscription<Object?>,
  );
  return null;
}

Object _callback78(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback78Matches(Object value) => value is void Function(Object? value);
Object? _callback78Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? value))(positional[0]);
  return null;
}

Object _callback79(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback79Matches(Object value) => value is void Function();
Object? _callback79Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback80(FlaxCallback callback) =>
    (Object p0, [Object? p1 = _flaxOmitted]) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      if (!identical(p1, _flaxOmitted)) positional.add(p1);
      callback.call(positional, named);
    };
bool _callback80Matches(Object value) =>
    value is void Function(Object p0, [api2.StackTrace p1]);
Object? _callback80Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  switch (positional.length) {
    case 1:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
      );
      return null;
    case 2:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
        positional[1] as api2.StackTrace,
      );
      return null;
    default:
      throw ArgumentError("Invalid callback arity");
  }
}

Object _callback81(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback81Matches(Object value) => value is bool Function(Object? event);
Object? _callback81Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? event))(positional[0]);
}

Object _callback82(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named);
};
bool _callback82Matches(Object value) =>
    value is Object? Function(Object? event);
Object? _callback82Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(Object? event))(positional[0]);
}

Object _callback83(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api3.FutureOr<Object?>;
};
bool _callback83Matches(Object value) =>
    value is api3.FutureOr<Object?> Function(Object? event);
Object? _callback83Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.FutureOr<Object?> Function(Object? event))(
    positional[0],
  );
}

Object _callback84(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api3.Stream<Object?>?;
};
bool _callback84Matches(Object value) =>
    value is api3.Stream<Object?>? Function(Object? event);
Object? _callback84Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api3.Stream<Object?>? Function(Object? event))(
    positional[0],
  );
}

Object _callback85(FlaxCallback callback) =>
    (Object p0, [Object? p1 = _flaxOmitted]) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      if (!identical(p1, _flaxOmitted)) positional.add(p1);
      callback.call(positional, named);
    };
bool _callback85Matches(Object value) =>
    value is void Function(Object p0, [api2.StackTrace p1]);
Object? _callback85Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  switch (positional.length) {
    case 1:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
      );
      return null;
    case 2:
      (function as void Function(Object p0, [api2.StackTrace p1]))(
        positional[0] as Object,
        positional[1] as api2.StackTrace,
      );
      return null;
    default:
      throw ArgumentError("Invalid callback arity");
  }
}

Object _callback86(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback86Matches(Object value) => value is bool Function(Object? error);
Object? _callback86Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? error))(positional[0]);
}

Object _callback87(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as Iterable<Object?>;
};
bool _callback87Matches(Object value) =>
    value is Iterable<Object?> Function(Object? element);
Object? _callback87Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Iterable<Object?> Function(Object? element))(
    positional[0],
  );
}

Object _callback88(FlaxCallback callback) => (Object? p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  return callback.call(positional, named);
};
bool _callback88Matches(Object value) =>
    value is Object? Function(Object? previous, Object? element);
Object? _callback88Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(Object? previous, Object? element))(
    positional[0],
    positional[1],
  );
}

Object _callback89(FlaxCallback callback) => (Object? p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  return callback.call(positional, named);
};
bool _callback89Matches(Object value) =>
    value is Object? Function(Object? previous, Object? element);
Object? _callback89Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(Object? previous, Object? element))(
    positional[0],
    positional[1],
  );
}

Object _callback90(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback90Matches(Object value) =>
    value is void Function(Object? element);
Object? _callback90Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? element))(positional[0]);
  return null;
}

Object _callback91(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback91Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback91Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback92(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback92Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback92Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback93(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback93Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback93Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback94(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback94Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback94Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback95(FlaxCallback callback) => (Object? p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  return callback.call(positional, named) as bool;
};
bool _callback95Matches(Object value) =>
    value is bool Function(Object? previous, Object? next);
Object? _callback95Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? previous, Object? next))(
    positional[0],
    positional[1],
  );
}

Object _callback96(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback96Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback96Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback97(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named);
};
bool _callback97Matches(Object value) => value is Object? Function();
Object? _callback97Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function())();
}

Object _callback98(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback98Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback98Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback99(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named);
};
bool _callback99Matches(Object value) => value is Object? Function();
Object? _callback99Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function())();
}

Object _callback100(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as bool;
};
bool _callback100Matches(Object value) =>
    value is bool Function(Object? element);
Object? _callback100Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as bool Function(Object? element))(positional[0]);
}

Object _callback101(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named);
};
bool _callback101Matches(Object value) => value is Object? Function();
Object? _callback101Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function())();
}

Object _callback102(FlaxCallback callback) => (api3.EventSink<Object?> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback102Matches(Object value) =>
    value is void Function(api3.EventSink<Object?> sink);
Object? _callback102Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api3.EventSink<Object?> sink))(
    positional[0] as api3.EventSink<Object?>,
  );
  return null;
}

Object _callback103(FlaxCallback callback) =>
    (api.BuildContext p0, api.AsyncSnapshot<Object?> p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return callback.call(positional, named) as api.Widget;
    };
bool _callback103Matches(Object value) =>
    value
        is api.Widget Function(
          api.BuildContext context,
          api.AsyncSnapshot<Object?> snapshot,
        );
Object? _callback103Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Widget Function(
        api.BuildContext context,
        api.AsyncSnapshot<Object?> snapshot,
      ))(
    positional[0] as api.BuildContext,
    positional[1] as api.AsyncSnapshot<Object?>,
  );
}

Object _callback104(FlaxCallback callback) =>
    (api.BuildContext p0, Object? p1, api.Widget? p2) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      return callback.call(positional, named) as api.Widget;
    };
bool _callback104Matches(Object value) =>
    value
        is api.Widget Function(
          api.BuildContext context,
          Object? value,
          api.Widget? child,
        );
Object? _callback104Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Widget Function(
        api.BuildContext context,
        Object? value,
        api.Widget? child,
      ))(
    positional[0] as api.BuildContext,
    positional[1],
    positional[2] as api.Widget?,
  );
}

Object _callback105(FlaxCallback callback) =>
    (api.BuildContext p0, api.Widget? p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return callback.call(positional, named) as api.Widget;
    };
bool _callback105Matches(Object value) =>
    value is api.Widget Function(api.BuildContext context, api.Widget? child);
Object? _callback105Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Widget Function(api.BuildContext context, api.Widget? child))(
    positional[0] as api.BuildContext,
    positional[1] as api.Widget?,
  );
}

Object _callback106(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback106Matches(Object value) => value is void Function();
Object? _callback106Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback107(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback107Matches(Object value) => value is void Function();
Object? _callback107Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback108(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback108Matches(Object value) => value is void Function();
Object? _callback108Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback109(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback109Matches(Object value) => value is void Function();
Object? _callback109Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback110(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback110Matches(Object value) => value is void Function();
Object? _callback110Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback111(FlaxCallback callback) => (void Function() p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback111Matches(Object value) =>
    value is void Function(void Function() listener);
Object? _callback111Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(void Function() listener))(
    positional[0] as void Function(),
  );
  return null;
}

Object _callback112(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback112Matches(Object value) => value is void Function();
Object? _callback112Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback113(FlaxCallback callback) => (void Function() p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback113Matches(Object value) =>
    value is void Function(void Function() listener);
Object? _callback113Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(void Function() listener))(
    positional[0] as void Function(),
  );
  return null;
}

Object _callback114(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return callback.call(positional, named);
};
bool _callback114Matches(Object value) => value is Object? Function();
Object? _callback114Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function())();
}

Object _callback115(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback115Matches(Object value) => value is void Function();
Object? _callback115Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback116(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback116Matches(Object value) => value is void Function();
Object? _callback116Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback117(FlaxCallback callback) => (api.RouteSettings p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api.Route<Object?>?;
};
bool _callback117Matches(Object value) =>
    value is api.Route<Object?>? Function(api.RouteSettings settings);
Object? _callback117Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api.Route<Object?>? Function(api.RouteSettings settings))(
    positional[0] as api.RouteSettings,
  );
}

Object _callback118(FlaxCallback callback) => (api.RouteSettings p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api.Route<Object?>?;
};
bool _callback118Matches(Object value) =>
    value is api.Route<Object?>? Function(api.RouteSettings settings);
Object? _callback118Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api.Route<Object?>? Function(api.RouteSettings settings))(
    positional[0] as api.RouteSettings,
  );
}

Object _callback119(FlaxCallback callback) => (api.Page<Object?> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback119Matches(Object value) =>
    value is void Function(api.Page<Object?> page);
Object? _callback119Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.Page<Object?> page))(
    positional[0] as api.Page<Object?>,
  );
  return null;
}

Object _callback120(FlaxCallback callback) => (Object? p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback120Matches(Object value) =>
    value is void Function(Object? result);
Object? _callback120Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(Object? result))(positional[0]);
  return null;
}

Object _callback121(FlaxCallback callback) => (bool p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  callback.call(positional, named);
};
bool _callback121Matches(Object value) =>
    value is void Function(bool didPop, Object? result);
Object? _callback121Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool didPop, Object? result))(
    positional[0] as bool,
    positional[1],
  );
  return null;
}

Object _callback122(FlaxCallback callback) => (api.BuildContext p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as api.Widget;
};
bool _callback122Matches(Object value) =>
    value is api.Widget Function(api.BuildContext context);
Object? _callback122Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api.Widget Function(api.BuildContext context))(
    positional[0] as api.BuildContext,
  );
}

Object _callback123(FlaxCallback callback) =>
    (api.BuildContext p0, api.BoxConstraints p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return callback.call(positional, named) as api.Widget;
    };
bool _callback123Matches(Object value) =>
    value
        is api.Widget Function(
          api.BuildContext context,
          api.BoxConstraints constraints,
        );
Object? _callback123Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Widget Function(
        api.BuildContext context,
        api.BoxConstraints constraints,
      ))(
    positional[0] as api.BuildContext,
    positional[1] as api.BoxConstraints,
  );
}

Object _callback124(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback124Matches(Object value) => value is void Function();
Object? _callback124Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback125(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback125Matches(Object value) => value is void Function();
Object? _callback125Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback126(FlaxCallback callback) => (api.BuildContext p0, int p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  return callback.call(positional, named) as api.Widget?;
};
bool _callback126Matches(Object value) =>
    value is api.Widget? Function(api.BuildContext context, int index);
Object? _callback126Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Widget? Function(api.BuildContext context, int index))(
    positional[0] as api.BuildContext,
    positional[1] as int,
  );
}

Object _callback127(FlaxCallback callback) => (api.Key p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return callback.call(positional, named) as int?;
};
bool _callback127Matches(Object value) => value is int? Function(api.Key key);
Object? _callback127Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as int? Function(api.Key key))(positional[0] as api.Key);
}

Object _callback128(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback128Matches(Object value) => value is void Function();
Object? _callback128Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback129(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback129Matches(Object value) => value is void Function();
Object? _callback129Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback130(FlaxCallback callback) =>
    (api.TextEditingValue p0, api.TextEditingValue p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return callback.call(positional, named) as api.TextEditingValue;
    };
bool _callback130Matches(Object value) =>
    value
        is api.TextEditingValue Function(
          api.TextEditingValue oldValue,
          api.TextEditingValue newValue,
        );
Object? _callback130Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.TextEditingValue Function(
        api.TextEditingValue oldValue,
        api.TextEditingValue newValue,
      ))(
    positional[0] as api.TextEditingValue,
    positional[1] as api.TextEditingValue,
  );
}

Object _callback131(FlaxCallback callback) => (api.PointerEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotPointerEvent(p0));
  callback.call(positional, named);
};
bool _callback131Matches(Object value) =>
    value is void Function(api.PointerEvent event);
Object? _callback131Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.PointerEvent event))(
    positional[0] as api.PointerEvent,
  );
  return null;
}

Object _callback132(FlaxCallback callback) => (api.PointerEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotPointerEvent(p0));
  callback.call(positional, named);
};
bool _callback132Matches(Object value) =>
    value is void Function(api.PointerEvent event);
Object? _callback132Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.PointerEvent event))(
    positional[0] as api.PointerEvent,
  );
  return null;
}

Object _callback133(FlaxCallback callback) => (api.PointerEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotPointerEvent(p0));
  callback.call(positional, named);
};
bool _callback133Matches(Object value) =>
    value is void Function(api.PointerEvent event);
Object? _callback133Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.PointerEvent event))(
    positional[0] as api.PointerEvent,
  );
  return null;
}

Object _callback134(FlaxCallback callback) => (api.PointerEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotPointerEvent(p0));
  callback.call(positional, named);
};
bool _callback134Matches(Object value) =>
    value is void Function(api.PointerEvent event);
Object? _callback134Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.PointerEvent event))(
    positional[0] as api.PointerEvent,
  );
  return null;
}

Object _callback135(FlaxCallback callback) => (api.PointerEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotPointerEvent(p0));
  callback.call(positional, named);
};
bool _callback135Matches(Object value) =>
    value is void Function(api.PointerEvent event);
Object? _callback135Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.PointerEvent event))(
    positional[0] as api.PointerEvent,
  );
  return null;
}

Object _callback136(FlaxCallback callback) => (api.PointerEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotPointerEvent(p0));
  callback.call(positional, named);
};
bool _callback136Matches(Object value) =>
    value is void Function(api.PointerEvent event);
Object? _callback136Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.PointerEvent event))(
    positional[0] as api.PointerEvent,
  );
  return null;
}

Object _callback137(FlaxCallback callback) => (api.PointerEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotPointerEvent(p0));
  callback.call(positional, named);
};
bool _callback137Matches(Object value) =>
    value is void Function(api.PointerEvent event);
Object? _callback137Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.PointerEvent event))(
    positional[0] as api.PointerEvent,
  );
  return null;
}

Object _callback138(FlaxCallback callback) => (api.PointerEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotPointerEvent(p0));
  callback.call(positional, named);
};
bool _callback138Matches(Object value) =>
    value is void Function(api.PointerEvent event);
Object? _callback138Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.PointerEvent event))(
    positional[0] as api.PointerEvent,
  );
  return null;
}

Object _callback139(FlaxCallback callback) => (api.PointerEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotPointerEvent(p0));
  callback.call(positional, named);
};
bool _callback139Matches(Object value) =>
    value is void Function(api.PointerEvent event);
Object? _callback139Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.PointerEvent event))(
    positional[0] as api.PointerEvent,
  );
  return null;
}

Object _callback140(FlaxCallback callback) => (api.KeyEvent p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(_snapshotKeyEvent(p0));
  callback.call(positional, named);
};
bool _callback140Matches(Object value) =>
    value is void Function(api.KeyEvent value);
Object? _callback140Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(api.KeyEvent value))(
    positional[0] as api.KeyEvent,
  );
  return null;
}

Object _callback141(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback141Matches(Object value) => value is void Function();
Object? _callback141Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback142(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback142Matches(Object value) => value is void Function();
Object? _callback142Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback143(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback143Matches(Object value) => value is void Function();
Object? _callback143Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback144(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback144Matches(Object value) => value is void Function();
Object? _callback144Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback145(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback145Matches(Object value) => value is void Function();
Object? _callback145Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback146(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback146Matches(Object value) => value is void Function();
Object? _callback146Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback147(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback147Matches(Object value) => value is void Function();
Object? _callback147Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback148(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback148Matches(Object value) => value is void Function();
Object? _callback148Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback149(FlaxCallback callback) => (bool p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback149Matches(Object value) => value is void Function(bool value);
Object? _callback149Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool value))(positional[0] as bool);
  return null;
}

Object _callback150(FlaxCallback callback) => (bool p0, Object? p1) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  positional.add(p1);
  callback.call(positional, named);
};
bool _callback150Matches(Object value) =>
    value is void Function(bool didPop, Object? result);
Object? _callback150Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(bool didPop, Object? result))(
    positional[0] as bool,
    positional[1],
  );
  return null;
}

Object _callback151(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback151Matches(Object value) => value is void Function();
Object? _callback151Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback152(FlaxCallback callback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  callback.call(positional, named);
};
bool _callback152Matches(Object value) => value is void Function();
Object? _callback152Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function())();
  return null;
}

Object _callback153(FlaxCallback callback) => (void Function() p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  callback.call(positional, named);
};
bool _callback153Matches(Object value) =>
    value is void Function(void Function() fn);
Object? _callback153Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  (function as void Function(void Function() fn))(
    positional[0] as void Function(),
  );
  return null;
}

Object _callback154(FlaxCallback callback) =>
    (api.BuildContext p0, void Function(void Function() fn) p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return callback.call(positional, named) as api.Widget;
    };
bool _callback154Matches(Object value) =>
    value
        is api.Widget Function(
          api.BuildContext context,
          void Function(void Function() fn) setState,
        );
Object? _callback154Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as api.Widget Function(
        api.BuildContext context,
        void Function(void Function() fn) setState,
      ))(
    positional[0] as api.BuildContext,
    positional[1] as void Function(void Function() fn),
  );
}

Object _collection0Create() => <Object?>[];
bool _collection0Matches(Object value) => value is Iterable<Object?>;
Object _collection1Create() => <Object?>[];
bool _collection1Matches(Object value) => value is List<Object?>;
Object _collection2Create() => <Object?>{};
bool _collection2Matches(Object value) => value is Set<Object?>;
Object _collection3Create() => <Future<Object?>>[];
bool _collection3Matches(Object value) => value is Iterable<Future<Object?>>;
Object _collection4Create() => <api.WidgetState>{};
bool _collection4Matches(Object value) => value is Set<api.WidgetState>;
Object _collection5Create() => <api.WidgetState>[];
bool _collection5Matches(Object value) => value is Iterable<api.WidgetState>;
Object _collection6Create() => <api.Widget>[];
bool _collection6Matches(Object value) => value is List<api.Widget>;
Object _collection7Create() => <api.Widget>[];
bool _collection7Matches(Object value) => value is Iterable<api.Widget>;
Object _collection8Create() => <api.Page<Object?>>[];
bool _collection8Matches(Object value) => value is List<api.Page<Object?>>;
Object _collection9Create() => <api.Page<Object?>>[];
bool _collection9Matches(Object value) => value is Iterable<api.Page<Object?>>;
Object _collection10Create() => <api.NavigatorObserver>[];
bool _collection10Matches(Object value) => value is List<api.NavigatorObserver>;
Object _collection11Create() => <api.NavigatorObserver>[];
bool _collection11Matches(Object value) =>
    value is Iterable<api.NavigatorObserver>;
Future<Object?> _future0Adapt(Future<Object?> value) =>
    value.then<int>((value) => value as int);
Future<Object?> _future1Adapt(Future<Object?> value) =>
    value.then<bool>((value) => value as bool);
Future<Object?> _future2Adapt(Future<Object?> value) => value;
Future<Object?> _future3Adapt(Future<Object?> value) =>
    value.then<String>((value) => value as String);
Future<Object?> _future4Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> _future5Adapt(Future<Object?> value) =>
    value.then<List<Object?>>((value) => value as List<Object?>);
Future<Object?> _future6Adapt(Future<Object?> value) =>
    value.then<Set<Object?>>((value) => value as Set<Object?>);
Future<Object?> _future7Adapt(Future<Object?> value) => value;
bool _stream0Matches(Object value) => value is api3.Stream<Object?>;
api3.Stream<Object?> _stream0Adapt(Object value) =>
    value as api3.Stream<Object?>;
bool _stream1Matches(Object value) => value is api3.Stream<Object?>;
api3.Stream<Object?> _stream1Adapt(Object value) =>
    value as api3.Stream<Object?>;
