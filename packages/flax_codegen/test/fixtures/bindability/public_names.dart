// ignore_for_file: non_constant_identifier_names, camel_case_types, camel_case_extensions
// ignore_for_file: no_leading_underscores_for_local_identifiers

enum Names_enum { function, arguments }

final class Base_names {
  int get inherited_value => 7;
}

final class Counter_names extends Base_names {
  Counter_names(int initial_value, {int $bonus = 0, int arguments = 0})
    : total_count = initial_value + $bonus + arguments;
  Counter_names.from_value(int initial_value) : total_count = initial_value;

  int total_count;
  int get $value => total_count;
  set $value(int next_value) => total_count = next_value;
  int get arguments => total_count;
  set arguments(int value) => total_count = value;

  int add_value(int step_value, {int $bonus = 0}) =>
      total_count += step_value + $bonus;
  int eval({int arguments = 0}) => total_count + arguments;
  int privateParameter(int _value) => _value;
  int invalidParameter(int arguments) => arguments;
  // ignore: unused_element
  int _privateMethod() => total_count;

  static int shared_count = 1;
  static int function = 1;
  static int add$value(int step_value) => shared_count += step_value;
}

class Proxy_names {
  int get arguments => 7;
  int eval({required int arguments}) => arguments;
  int privateParameter(int _value) => _value;
  int wildcard(int _) => 1;
}

int shared_value = 1;
int under_score_function(int under_score_value, {int $bonus = 0}) =>
    under_score_value + $bonus;
int $echo(int dollar$value) => dollar$value;
int named_arguments({required int arguments}) => arguments;
// ignore: unused_element
int _privateFunction() => -1;

extension String_names on String {
  int get text_length => length;
  int get arguments => length;
  int eval({required int arguments}) => length + arguments;
  String repeat_value(int repeat_count, {String $separator = ''}) =>
      List.filled(repeat_count, this).join($separator);

  static int total_count = 1;
  static int add$value(int step_value) => total_count += step_value;
  static int let({required int arguments}) => arguments;
}

extension $Names on String {
  String $echo(String $value) => this + $value;
}
