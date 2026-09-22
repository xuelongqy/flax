import 'config.dart';

/// Recommended automatic JS proxy mode for a fresh Dart class declaration.
enum FlaxCodegenProxyCapability {
  canImplement,
  canExtend,
  specialLifecycle,
  unsupported,
}

/// One member or parameter the binder refused to select.
final class FlaxCodegenSkip {
  const FlaxCodegenSkip({required this.target, required this.reason});

  /// Class, constructor, or `Class.member` path.
  final String target;
  final String reason;
}

/// Informational result from automatic binding that does not exclude [target].
final class FlaxCodegenNotice {
  const FlaxCodegenNotice({required this.target, required this.message});

  final String target;
  final String message;
}

/// Result of [FlaxCodegenBindingParser.proposeSelection].
final class FlaxCodegenProposedBinding {
  const FlaxCodegenProposedBinding({
    required this.name,
    required this.id,
    this.selection,
    this.provider,
    this.skips = const [],
    this.proxyCapability = FlaxCodegenProxyCapability.unsupported,
  });

  final String name;
  final String id;
  final FlaxCodegenClassSelection? selection;

  /// Existing dependency's JS module. Reuse it without selecting another owner.
  final String? provider;
  final List<FlaxCodegenSkip> skips;
  final FlaxCodegenProxyCapability proxyCapability;

  bool get bindable => selection != null;
  bool get reusesProvider => provider != null;
}

/// Fail-open proposal for binding one complete public Dart library.
///
/// [config] contains only declarations that can be generated with the current
/// conversion and ownership rules. [skips] explains declarations or members
/// that were deliberately left out.
final class FlaxCodegenAutoBindingProposal {
  const FlaxCodegenAutoBindingProposal({
    required this.config,
    this.skips = const [],
    this.notices = const [],
  });

  final FlaxCodegenBindingConfig config;
  final List<FlaxCodegenSkip> skips;
  final List<FlaxCodegenNotice> notices;
}

/// Limits used when proposing selections. Generate stays fail-closed.
abstract final class FlaxCodegenBindability {
  /// Optional [FlaxCodegenParameterModel.omitWhenAbsent] parameters kept per
  /// constructor. Extra optional named parameters are dropped.
  static const omitWhenAbsentCap = 6;
}
