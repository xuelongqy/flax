import 'dart:collection';

class ShoppingList extends ListBase<String> {
  ShoppingList();
  final _items = <String>[];
  int additions = 0;
  String get summary => _items.join(',');
  @override
  int get length => _items.length;
  @override
  set length(int value) => _items.length = value;
  @override
  String operator [](int index) => _items[index];
  @override
  void operator []=(int index, String value) => _items[index] = value;
  @override
  void add(String value) {
    additions++;
    _items.add(value.toUpperCase());
  }
}

class GroceryList extends ShoppingList {
  String get label => 'groceries';
}

class NamedList extends ShoppingList {
  String get toArray => 'native property';
  String get(int index) => 'native ${this[index]}';
}

class GenericItems<T> extends ListBase<T> {
  GenericItems(T first) : _items = [first];
  U echoItem<U extends T>(U value) => value;
  final List<T> _items;
  @override
  int get length => _items.length;
  @override
  set length(int value) => _items.length = value;
  @override
  T operator [](int index) => _items[index];
  @override
  void operator []=(int index, T value) => _items[index] = value;
  @override
  void add(T value) => _items.add(value);
}

class Words extends IterableBase<String> {
  Words(this._items);
  final List<String> _items;
  String get summary => _items.join(',');
  @override
  Iterator<String> get iterator => _items.iterator;
}

class Inventory extends MapBase<String, int> {
  Inventory();
  final _items = <String, int>{};
  String get summary =>
      _items.entries.map((e) => '${e.key}:${e.value}').join(',');
  @override
  int? operator [](Object? key) => _items[key];
  @override
  void operator []=(String key, int value) => _items[key] = value;
  @override
  Iterable<String> get keys => _items.keys;
  @override
  int? remove(Object? key) => _items.remove(key);
  @override
  void clear() => _items.clear();
}

class Tags extends SetBase<String> {
  Tags();
  final _items = <String>{};
  String get summary => _items.join(',');
  @override
  int get length => _items.length;
  @override
  Iterator<String> get iterator => _items.iterator;
  @override
  bool add(String value) => _items.add(value);
  @override
  bool contains(Object? value) => _items.contains(value);
  @override
  String? lookup(Object? value) => _items.lookup(value);
  @override
  bool remove(Object? value) => _items.remove(value);
  @override
  Set<String> toSet() => _items.toSet();
}

ShoppingList createShoppingList() => ShoppingList();
List<String> listView(ShoppingList value) => value;
ShoppingList sameShoppingList(ShoppingList value) => value;
Inventory createInventory() => Inventory();
Map<String, int> mapView(Inventory value) => value;
Tags createTags() => Tags();
Set<String> setView(Tags value) => value;
GroceryList createGroceryList() => GroceryList();
NamedList createNamedList() => NamedList();
GenericItems<List<String>> createNestedItems() =>
    GenericItems<List<String>>(['nested']);
GenericItems<Set<String>> createSetItems() =>
    GenericItems<Set<String>>({'set'});
List<ShoppingList> nestedLists(ShoppingList value) => [value, value];
List<GenericItems<List<String>>> nestedItems(
  GenericItems<List<String>> value,
) => [value];
List<GenericItems<T>> groupedItems<T>(GenericItems<T> value) => [value, value];
T echoCollection<T>(T value) => value;
T echoList<T extends List<String>>(T value) => value;
T copyList<T extends List<String>>(T value) => List<String>.of(value) as T;
List<T> nestedBound<T extends List<String>>(T value) => [value];
Map<String, T> keyedBound<T extends Set<String>>(T value) => {'entry': value};
T echoMap<T extends Map<String, int>>(T value) => value;
T echoIterable<T extends Iterable<String>>(T value) => value;
T callBound<T extends List<String>>(T Function(T) callback, T value) =>
    callback(value);
Map<String, ({String label, List<int> values})> recordCollections() => {
  'entry': (label: 'record', values: [1, 2]),
};
List<ShoppingList> callbackLists(ShoppingList Function() create) => [create()];
Words createWords() => Words(['one', 'two']);

// Legal Dart interfaces, but neither a List nor a Set copy uniquely represents it.
class AmbiguousCollection<T> implements List<T>, Set<T> {
  @override
  AmbiguousCollection<R> cast<R>() => AmbiguousCollection<R>();
  @override
  AmbiguousCollection<R> map<R>(R Function(T) convert) =>
      AmbiguousCollection<R>();
  @override
  dynamic noSuchMethod(Invocation invocation) => super.noSuchMethod(invocation);
}

AmbiguousCollection<String> createAmbiguousCollection() =>
    AmbiguousCollection<String>();
