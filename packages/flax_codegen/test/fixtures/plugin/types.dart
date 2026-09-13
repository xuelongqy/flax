enum Tone { quiet, loud }

class Base {
  const Base({this.count = 7, this.tone = Tone.quiet});
  final int count;
  final Tone tone;
}

class Badge extends Base {
  const Badge(this.label, {super.count, super.tone, this.note});
  final String label;
  final String? note;
}

class Unsupported {
  const Unsupported(this.data);
  final ({int value}) data;
}

typedef Transform = String? Function(int value, Tone tone);

abstract class Tools {
  static String? apply(
    int value,
    Transform callback, {
    Tone tone = Tone.quiet,
  }) => callback(value, tone);
  static Tone choose(bool loud) => loud ? Tone.loud : Tone.quiet;
  static void visit(void Function(int) callback) => callback(4);
  static int large() => 9007199254740992;
  static void unsupported(void Function({required int value}) callback) {}
  static Future<int> asynchronous() async => 1;
  static void streamParameter(Stream<int> events) {}
}

class ReadingBase<T> {
  const ReadingBase(this.amount);
  final T amount;
}

class Reading extends ReadingBase<double> {
  const Reading(super.amount);
}

class ReadingHolder {
  const ReadingHolder(this.reading);
  final Reading reading;
}
