typedef GenericCallback<S> = T Function<T>(T value, S context);
typedef BoundedCallback<S> = T Function<T extends num>(T value, S context);

class GenericCallbacks {
  GenericCallbacks({this.callback, this.bounded});

  final GenericCallback<int>? callback;
  final BoundedCallback<int>? bounded;
}
