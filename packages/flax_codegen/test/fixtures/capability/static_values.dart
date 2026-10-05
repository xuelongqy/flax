class StaticValues<T> {
  StaticValues();
  static int count = 0;
  static int? optional;
  static late int delayed;
  static const int constant = 7;
  static final int frozen = 8;
  static late final int once;
  static int reads = 0;
  static int writes = 0;
  static int get tracked {
    reads++;
    return count;
  }

  static set tracked(num value) {
    writes++;
    if (value < 0) throw StateError('negative count');
    count = value.round();
  }

  static set writeOnly(int value) => count = value;
  static int get readOnly => count;
  // Keep a private mutable field to exercise visibility rejection.
  // ignore: unused_field, prefer_final_fields
  static int _hidden = 0;
  int instance = 0;
}

class StaticChild extends StaticValues<int> {}

class StaticCollision {
  static int count = 0;
  static void setCount(int value) {}
}

class StaticSetterOnly {
  static int value = 0;
  static set sink(int value) => StaticSetterOnly.value = value;
}

class StaticConstructorCollision {
  StaticConstructorCollision.setCount();
  static int count = 0;
}

class StaticCaseCollision {
  static int count = 0;
  // Capitalization deliberately collides in the generated setCount name.
  // ignore: non_constant_identifier_names
  static int Count = 0;
}
