class Money {
  Money(this.amount);
  final int amount;
  int get doubled => amount * 2;
  Money echo(Money value) => value;
}
