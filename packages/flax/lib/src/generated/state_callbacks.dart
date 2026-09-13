// GENERATED CODE. Selected host overrides; do not edit.
// Regenerate with dart run melos run bindings:generate.
import 'package:flutter/widgets.dart' as api;

mixin FlaxStateProxy on api.State<api.StatefulWidget> {
  Object? flaxInvoke(
    String method,
    List<Object?> arguments, {
    bool requiresSuper = false,
  });
  // JS explicitly calls the direct super entry during this override.
  @override
  // ignore: must_call_super
  void initState() {
    flaxInvoke("initState", [], requiresSuper: true);
  }

  // JS explicitly calls the direct super entry during this override.
  @override
  // ignore: must_call_super
  void didUpdateWidget(api.StatefulWidget oldWidget) {
    flaxInvoke("didUpdateWidget", [oldWidget], requiresSuper: true);
  }

  // JS explicitly calls the direct super entry during this override.
  @override
  // ignore: must_call_super
  void reassemble() {
    flaxInvoke("reassemble", [], requiresSuper: true);
  }

  // JS explicitly calls the direct super entry during this override.
  @override
  // ignore: must_call_super
  void deactivate() {
    flaxInvoke("deactivate", [], requiresSuper: true);
  }

  // JS explicitly calls the direct super entry during this override.
  @override
  // ignore: must_call_super
  void activate() {
    flaxInvoke("activate", [], requiresSuper: true);
  }

  // JS explicitly calls the direct super entry during this override.
  @override
  // ignore: must_call_super
  void dispose() {
    flaxInvoke("dispose", [], requiresSuper: true);
  }

  @override
  api.Widget build(api.BuildContext context) {
    return flaxInvoke("build", [context], requiresSuper: false) as api.Widget;
  }

  // JS explicitly calls the direct super entry during this override.
  @override
  // ignore: must_call_super
  void didChangeDependencies() {
    flaxInvoke("didChangeDependencies", [], requiresSuper: true);
  }

  Object? flaxSuper(String method, List<Object?> args) {
    switch (method) {
      case "initState":
        if (args.isNotEmpty) throw ArgumentError("Invalid super arity");
        super.initState();
        return null;
      case "didChangeDependencies":
        if (args.isNotEmpty) throw ArgumentError("Invalid super arity");
        super.didChangeDependencies();
        return null;
      case "didUpdateWidget":
        if (args.length != 1) throw ArgumentError("Invalid super arity");
        super.didUpdateWidget(args[0] as api.StatefulWidget);
        return null;
      case "deactivate":
        if (args.isNotEmpty) throw ArgumentError("Invalid super arity");
        super.deactivate();
        return null;
      case "activate":
        if (args.isNotEmpty) throw ArgumentError("Invalid super arity");
        super.activate();
        return null;
      case "dispose":
        if (args.isNotEmpty) throw ArgumentError("Invalid super arity");
        super.dispose();
        return null;
      case "reassemble":
        if (args.isNotEmpty) throw ArgumentError("Invalid super arity");
        super.reassemble();
        return null;
      default:
        throw ArgumentError("Unselected super method: $method");
    }
  }
}
