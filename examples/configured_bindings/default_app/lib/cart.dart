import 'package:flax_annotations/flax_annotations.dart';

int _quantity = 1;

@FlaxExport()
int cartQuantity() => _quantity;

@FlaxExport()
int addItem() => ++_quantity;
