class NumericDefaults {
  const NumericDefaults({
    this.upper = double.infinity,
    this.lower = double.negativeInfinity,
    this.invalid = double.nan,
    this.finite = 1.25,
  });
  final double upper;
  final double lower;
  final double invalid;
  final double finite;
}
