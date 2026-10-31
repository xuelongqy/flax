part of '../../bindings.dart';

const _clipboardStatusType =
    'flax.core/sdk_widgets#type:ClipboardStatusNotifier';

extension _ClipboardCalls on _Session {
  Object _restoreClipboardValue(Object value) {
    if (value is ClipboardStatusNotifier) {
      if (value is! _PermissionClipboardStatus) {
        throw StateError('Unadmitted Clipboard resource');
      }
      permissions.run(() => value.requireAuthority(permissions));
    }
    return value;
  }

  (Object, StackTrace) _admitClipboardError(Object error, StackTrace stack) {
    if (error is! ClipboardStatusNotifier) return (error, stack);
    try {
      return (permissions.run(() => _clipboardValue(error)), stack);
    } catch (failure, failureStack) {
      // A host getter can itself throw a resource. Never retain or describe an
      // unadmitted fallback resource while encoding the original rejection.
      return (
        failure is ClipboardStatusNotifier
            ? StateError('Clipboard resource admission failed')
            : failure,
        failureStack,
      );
    }
  }

  bool _nativeClipboardType(Object value, List<String> ids) {
    dartTypes._index();
    final actual = dartTypes.instanceType(value);
    return ids.any((id) => dartTypes._classes[id]?.type == actual);
  }

  bool _clipboardOperation(
    String owner,
    String kind,
    String name,
    Object? value,
  ) {
    if (value is _PermissionClipboardStatus) return true;
    if (owner == _clipboardStatusType && kind == 'construct') return true;
    if (kind != 'call') return false;
    if (name == 'pasteText' && value is TextSelectionDelegate) return true;
    if (name != 'handlePaste' || value is! TextSelectionControls) return false;
    // These SDK implementations deliberately have no Clipboard operation.
    if (_nativeClipboardType(value, const [
      'flax.material/material#type:MaterialTextSelectionHandleControls',
      'flax.cupertino/cupertino#type:CupertinoTextSelectionHandleControls',
    ])) {
      return false;
    }
    // Desktop handle-only classes are private; their public SDK singleton
    // getters supply an exact native identity without private-name matching.
    return !const [
      'flax.material/material#read:desktopTextSelectionHandleControls',
      'flax.cupertino/cupertino#read:cupertinoDesktopTextSelectionHandleControls',
    ].any((id) => identical(value, _functionBinding(id)?.invoke(const {})));
  }

  Object? _callClipboard(
    String owner,
    String kind,
    String name,
    String requestedName,
    Object? receiver,
    Map<String, Object?> values,
    List<FlaxPermissionLease> leases,
    Object? Function() action,
  ) {
    if (receiver is _PermissionClipboardStatus) {
      if (kind == 'call' && (name == 'dispose' || name == 'removeListener')) {
        return action();
      }
      receiver.requireAuthority(permissions);
      if (requestedName.startsWith('@super:')) {
        throw UnsupportedError('ClipboardStatusNotifier custom super calls');
      }
      return action();
    }
    if (owner == _clipboardStatusType && kind == 'construct') {
      if (requestedName.startsWith('@implementation')) {
        throw UnsupportedError('ClipboardStatusNotifier @implementation');
      }
      return _PermissionClipboardStatus(
        permissions,
        permissions.lease('flax.clipboard.read', operation: '$owner.resource'),
        values['value'] as ClipboardStatus? ?? ClipboardStatus.unknown,
      );
    }
    final lease =
        leases
            .where((lease) => lease.permission == 'flax.clipboard.read')
            .firstOrNull ??
        permissions.bindingLease(
          FlaxPermissionDefinitions.clipboardRead,
          '$owner.$name',
          receiver,
          values,
        );
    if (!leases.contains(lease)) leases.add(lease);
    Object? delegate = receiver;
    var cause = values['cause'] as SelectionChangedCause?;
    if (name == 'handlePaste') {
      if (!_nativeClipboardType(receiver!, const [
        'flax.core/sdk_widgets#type:EmptyTextSelectionControls',
        'flax.material/material#type:DesktopTextSelectionControls',
        'flax.material/material#type:MaterialTextSelectionControls',
        'flax.cupertino/cupertino#type:CupertinoDesktopTextSelectionControls',
        'flax.cupertino/cupertino#type:CupertinoTextSelectionControls',
      ])) {
        throw UnsupportedError('Custom native Clipboard paste controls');
      }
      delegate = values['delegate'];
      cause = SelectionChangedCause.toolbar;
    }
    if (delegate is! EditableTextState ||
        dartTypes.instanceType(delegate) != EditableTextState) {
      throw UnsupportedError('Custom native Clipboard paste delegate');
    }
    return _pasteClipboard(delegate, lease, cause!);
  }

  Object _clipboardValue(Object value) {
    if (value is _PermissionClipboardStatus) {
      value.requireAuthority(permissions);
      return value;
    }
    if (value is! ClipboardStatusNotifier) return value;
    final existing = _clipboardViews[value]?.target;
    if (existing != null && !existing.retired) {
      existing.requireAuthority(permissions);
      return existing;
    }
    final lease = permissions.lease(
      'flax.clipboard.read',
      operation: 'ClipboardStatusNotifier.borrow',
    );
    try {
      final initial = value.value;
      lease.requireActive();
      final view = _PermissionClipboardStatus(
        permissions,
        lease,
        initial,
        source: value,
      );
      _clipboardViews[value] = WeakReference(view);
      return view;
    } catch (_) {
      lease.close();
      rethrow;
    }
  }
}

Future<void> _pasteClipboard(
  EditableTextState state,
  FlaxPermissionLease lease,
  SelectionChangedCause cause,
) async {
  if (!state.mounted ||
      state.widget.readOnly ||
      !state.textEditingValue.selection.isValid) {
    return;
  }
  final data = await lease.guardFuture(
    () => Clipboard.getData(Clipboard.kTextPlain),
  );
  lease.requireActive();
  if (data == null ||
      !state.mounted ||
      state.widget.readOnly ||
      !state.textEditingValue.selection.isValid) {
    return;
  }
  final current = state.textEditingValue;
  final selection = current.selection;
  final collapsed = current.copyWith(
    selection: TextSelection.collapsed(
      offset: math.max(selection.baseOffset, selection.extentOffset),
    ),
  );
  state.userUpdateTextEditingValue(
    collapsed.replaced(selection, data.text!),
    cause,
  );
  if (cause == SelectionChangedCause.toolbar) {
    SchedulerBinding.instance.addPostFrameCallback((_) {
      if (state.mounted) {
        state.bringIntoView(state.textEditingValue.selection.extent);
      }
    });
    state.hideToolbar();
  }
}

final _clipboardFinalizer = Finalizer<_ClipboardObservation>(
  (observation) => observation.release(),
);

// Neither a native observer nor a host source listener retains the module view.
class _ClipboardObservation with WidgetsBindingObserver {
  _ClipboardObservation(
    _PermissionClipboardStatus owner,
    this.lease,
    ClipboardStatusNotifier? source,
  ) : owner = WeakReference(owner),
      source = source == null ? null : WeakReference(source);
  final WeakReference<_PermissionClipboardStatus> owner;
  final FlaxPermissionLease lease;
  final WeakReference<ClipboardStatusNotifier>? source;
  bool attached = false;
  void attach() {
    if (attached) return;
    attached = true;
    if (source case final source?) {
      source.target?.addListener(changed);
    } else {
      WidgetsBinding.instance.addObserver(this);
    }
  }

  void detach() {
    if (!attached) return;
    attached = false;
    if (source case final source?) {
      source.target?.removeListener(changed);
    } else {
      WidgetsBinding.instance.removeObserver(this);
    }
  }

  void changed() => owner.target?._sourceChanged();
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) owner.target?._poll();
  }

  void release() {
    detach();
    lease.close();
  }
}

final class _PermissionClipboardStatus extends ValueNotifier<ClipboardStatus>
    with WidgetsBindingObserver
    implements ClipboardStatusNotifier {
  _PermissionClipboardStatus(
    FlaxPermissionContext owner,
    this._lease,
    this._status, {
    ClipboardStatusNotifier? source,
  }) : _owner = WeakReference(owner),
       _source = source,
       super(_status) {
    _observation = _ClipboardObservation(this, _lease, source);
    _clipboardFinalizer.attach(this, _observation, detach: _observation);
    final weak = WeakReference(this);
    final observation = _observation;
    _removeRevoke = _lease.onRevoke(() {
      final view = weak.target;
      if (view == null) {
        observation.release();
      } else {
        view._retire();
      }
    });
  }
  final WeakReference<FlaxPermissionContext> _owner;
  final FlaxPermissionLease _lease;
  final ClipboardStatusNotifier? _source;
  late final _ClipboardObservation _observation;
  void Function()? _removeRevoke;
  ClipboardStatus _status;
  final _listeners = <({VoidCallback listener, VoidCallback guarded})>[];
  bool retired = false;
  bool _disposed = false;
  int _notifying = 0;

  void requireAuthority(FlaxPermissionContext caller) {
    if (!_lease.belongsTo(caller)) {
      throw FlaxPermissionException(
        permission: 'flax.clipboard.read',
        operation: 'ClipboardStatusNotifier',
        reason: 'foreignResource',
      );
    }
    _lease.requireActive();
  }

  @override
  ClipboardStatus get value {
    if (!retired && _source != null) {
      _lease.requireActive();
      final current = _source.value;
      _lease.requireActive();
      _status = current;
    }
    // Native consumers may retain the last accepted value, never a late raw value.
    // Bound getters are separately denied by the resource authority check.
    return _status;
  }

  @override
  set value(ClipboardStatus value) {
    _lease.requireActive();
    if (_status == value) return;
    _status = value;
    notifyListeners();
  }

  @override
  Future<void> update() async {
    if (retired) return;
    _lease.requireActive();
    try {
      if (_source case final source?) {
        await _lease.guardFuture(source.update);
        _lease.requireActive();
        value = source.value;
      } else {
        final hasStrings = await _lease.guardFuture(Clipboard.hasStrings);
        _lease.requireActive();
        value = hasStrings
            ? ClipboardStatus.pasteable
            : ClipboardStatus.notPasteable;
      }
    } catch (error, stack) {
      if (retired || !_lease.isActive) return;
      _lease.requireActive();
      _report(error, stack);
      if (!retired) value = ClipboardStatus.unknown;
    }
  }

  void _report(Object error, StackTrace stack) => FlutterError.reportError(
    FlutterErrorDetails(
      exception: error,
      stack: stack,
      library: 'widget library',
      context: ErrorDescription('while checking if the clipboard has strings'),
    ),
  );

  void _poll() {
    if (retired) return;
    final owner = _owner.target;
    if (owner == null) {
      _retire();
      return;
    }
    owner.run(() {
      unawaited(
        update().catchError((Object error, StackTrace stack) {
          if (retired) return;
          final permissionError =
              error is FlaxPermissionException || !_lease.isActive;
          _retire();
          if (!permissionError) _report(error, stack);
        }),
      );
    });
  }

  void _sourceChanged() {
    if (retired) return;
    final owner = _owner.target;
    if (owner == null) {
      _retire();
      return;
    }
    owner.run(() {
      try {
        _lease.requireActive();
        value = _source!.value;
      } catch (error, stack) {
        if (retired) return;
        if (error is FlaxPermissionException || !_lease.isActive) {
          _retire();
        } else {
          _report(error, stack);
        }
      }
    });
  }

  @override
  void addListener(VoidCallback listener) {
    _lease.requireActive();
    final source = _source;
    if (_listeners.isEmpty && source != null) {
      final current = source.value;
      _lease.requireActive();
      // Unobserved changes become the starting snapshot, not replayed events.
      _status = current;
    }
    void guarded() {
      if (!retired) listener();
    }

    _listeners.add((listener: listener, guarded: guarded));
    super.addListener(guarded);
    try {
      _observation.attach();
    } catch (_) {
      super.removeListener(guarded);
      _listeners.removeWhere((entry) => identical(entry.guarded, guarded));
      if (_listeners.isEmpty) _observation.detach();
      rethrow;
    }
    if (_source == null && _status == ClipboardStatus.unknown) _poll();
  }

  @override
  void removeListener(VoidCallback listener) {
    final index = _listeners.indexWhere((entry) => entry.listener == listener);
    if (index == -1) return;
    super.removeListener(_listeners.removeAt(index).guarded);
    if (_listeners.isEmpty) _observation.detach();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) _poll();
  }

  @override
  void notifyListeners() {
    if (retired) return;
    _lease.requireActive();
    _notifying++;
    try {
      super.notifyListeners();
    } finally {
      _notifying--;
      if (retired && _notifying == 0) _disposeNotifier();
    }
  }

  void _retire() {
    if (retired) return;
    retired = true;
    _removeRevoke?.call();
    _observation.release();
    _clipboardFinalizer.detach(_observation);
    for (final entry in _listeners) {
      super.removeListener(entry.guarded);
    }
    _listeners.clear();
    if (_notifying == 0) _disposeNotifier();
  }

  void _disposeNotifier() {
    if (_disposed) return;
    _disposed = true;
    super.dispose();
  }

  @override
  // _retire calls super.dispose once notification has unwound; calling it here
  // would assert when a listener synchronously revokes or disposes this view.
  // ignore: must_call_super
  void dispose() => _retire();
}
